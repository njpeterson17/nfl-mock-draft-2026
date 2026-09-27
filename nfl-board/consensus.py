"""Independent publisher adapters and explicit, equally weighted consensus."""
import json
import re
import unicodedata
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from statistics import mean
from bs4 import BeautifulSoup

SOURCES = [
 ('sg', 'Scouting Grade', 'https://scoutinggrade.com/2027-nfl-draft-big-board'),
 ('tankathon', 'Tankathon', 'https://www.tankathon.com/nfl/big-board'),
 ('drafttek', 'Drafttek', 'https://www.drafttek.com/2027-NFL-Draft-Big-Board/Top-NFL-Draft-Prospects-2027-Page-1.asp'),
 ('sporting', 'Sporting News (via Yahoo)', 'https://sports.yahoo.com/articles/nfl-draft-prospects-2027-big-055001967.html'),
 ('bucs', 'Bucs Wire (via Yahoo)', 'https://sports.yahoo.com/articles/2027-nfl-draft-summer-top-174955597.html'),
]
ALIASES = {'brauntaejohnson': 'taejohnson', 'ryancolemanwilliams': 'ryanwilliams', 'ahmadmoten': 'ahmadmoten', 'ahmadmotenii': 'ahmadmoten'}
def identity(name, school=""):
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode().lower()
    name = re.sub(r'\b(jr|sr|ii|iii|iv)\.?$', '', name).strip()
    name = re.sub('[^a-z0-9]', '', name)
    name = ALIASES.get(name, name)
    return name + re.sub("[^a-z]", "", school.lower()) if name in {"jordanross", "jordanhall"} else name

def record(name, position, school, rank, url):
    return dict(name=name.strip(), position={'DT':'DL','SAF':'S','DE':'EDGE','OC':'IOL','OG':'IOL'}.get(position.upper(),position.upper()), school=school.strip(), rank=int(rank), url=url)

def parse(key, raw, url):
    soup = BeautifulSoup(raw, 'html.parser')
    if '2027' not in soup.title.get_text():
        raise ValueError('Not a 2027 board')
    rows = []
    if key == 'sg':
        for slug,name,pos,school,_,rank,*rest in json.loads(soup.select_one('#boardData').get_text()):
            rows.append(record(name,pos,school,rank,'https://scoutinggrade.com/2027/players/'+slug))
    elif key == 'tankathon':
        for row in soup.select('#big-board .mock-row'):
            rank=int(row.select_one('.mock-row-pick-number').get_text(strip=True))
            if rank >= 2027: continue  # next-class watchlist is not a rank
            pos,school=row.select_one('.mock-row-school-position').get_text(strip=True).split('|',1)
            rows.append(record(row.select_one('.mock-row-name').get_text(strip=True),pos.strip(),school,rank,'https://www.tankathon.com'+row.select_one('.mock-row-player a')['href']))
    elif key == 'drafttek':
        for row in soup.select('tr[data-rank]'):
            rows.append(record(row.select_one('.player-cell').get_text(strip=True),row['data-pos'],row['data-school'],row['data-rank'],url))
    elif key == 'sporting':
        for h in soup.select('.content-body h3'):
            m=re.match(r'^(\d+)[.,]\s*(.+?),\s*([A-Z/]+),\s*(.+?)\s*\(',h.get_text(' ',strip=True))
            if m:
                rank,name,pos,school=m.groups();rows.append(record(name,pos,school,rank,url))
    elif key == 'bucs':
        listing = next(x for x in soup.select('ol') if len(x.select('li')) >= 100)
        for rank,li in enumerate(listing.select('li'),1):
            text=li.get_text(' ',strip=True)
            text=re.sub(r', RB (Northwestern|Georgia Tech)$', r', RB, \1', text)
            name,pos,school=text.split(',',2)
            rows.append(record(name,pos.strip(),school,rank,url))
    rows.sort(key=lambda p:p['rank'])
    if len(rows)<100 or [r['rank'] for r in rows] != list(range(1,len(rows)+1)):
        raise ValueError('Incomplete or non-sequential board')
    if len({identity(r['name'],r['school']) for r in rows})!=len(rows):
        raise ValueError('Ambiguous duplicate player identity')
    return rows

def editorial_date(key, raw):
    soup = BeautifulSoup(raw, 'html.parser')
    value = None
    if key in ('sg', 'tankathon', 'sporting', 'bucs'):
        node = soup.select_one('time[datetime]')
        if node: value = node['datetime']
    elif key == 'drafttek':
        match = re.search(r'Top-450\s+([A-Z][a-z]+ \d{1,2}, \d{4})\s*•', soup.get_text(' ', strip=True))
        if match:
            value = datetime.strptime(match[1], '%B %d, %Y').date().isoformat()
    try:
        if value:
            parsed = datetime.fromisoformat(value.replace('Z', '+00:00'))
            return dict(editorial_date=parsed.date().isoformat(), editorial_date_kind='Published' if key in ('sporting','bucs') else 'Board dated')
    except ValueError: pass
    return dict(editorial_date=None, editorial_date_kind='Date unavailable')

def fetch_source(source):
    key,name,url=source
    req=urllib.request.Request(url,headers={'User-Agent':'CollegeProspectBoard/1.0'})
    with urllib.request.urlopen(req,timeout=20) as response:raw=response.read()
    rows=parse(key,raw,url)
    return dict(id=key,name=name,url=url,players=rows,depth=len(rows),fetched=datetime.now(timezone.utc).isoformat(),checked_at=datetime.now(timezone.utc).isoformat(),status='current',**editorial_date(key,raw))

def fetch_all(previous):
    def fetch(source):
        try:return fetch_source(source)
        except Exception as exc:
            prior=next((s for s in previous if s['id']==source[0]),None)
            return {**(prior or dict(id=source[0],name=source[1],url=source[2],players=[],depth=0)), 'status':'stale' if prior else 'unavailable','error':str(exc),'checked_at':datetime.now(timezone.utc).isoformat()}
    with ThreadPoolExecutor(max_workers=5) as pool:return list(pool.map(fetch,SOURCES))

def aggregate(sources, previous):
    active=[s for s in sources if s.get('players')]
    if len(active)<2:raise ValueError('At least two publisher boards required')
    old={identity(p['name'],p['school']):p for p in previous}
    merged={}
    for source in active:
        for row in source['players']:
            ident=identity(row['name'],row['school'])
            if ident not in merged:
                prior=old.get(ident)
                merged[ident]={**row,'id':prior['id'] if prior else ident, 'source_ranks':{}}
            merged[ident]['source_ranks'][source['id']]=row['rank']
    for p in merged.values():
        ranks=list(p['source_ranks'].values())
        # Top-125 Borda-style score. Missing and lower-than-125 ranks get 126.
        p.update(score=mean(min(p['source_ranks'].get(s['id'],126),126) for s in active),average=round(mean(ranks),1),best=min(ranks),worst=max(ranks),coverage=len(ranks),source_total=len(active))
    ordered=sorted(merged.values(),key=lambda p:(p['score'],-p['coverage'],p['average'],p['name']))[:125]
    if len(ordered)!=125:raise ValueError('Insufficient prospect pool')
    for rank,p in enumerate(ordered,1):p['rank']=rank;p['score']=round(p['score'],2);p['movement']=None
    return ordered

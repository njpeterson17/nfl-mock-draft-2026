"""2027 NBA publisher rankings, with validated identities and explicit scoring."""
import json,re,unicodedata,urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime,timezone
from statistics import mean
from bs4 import BeautifulSoup
from urllib.parse import urljoin
SOURCES=[
 ('tank','Tankathon','https://www.tankathon.com/big-board'),
 ('br','Bleacher Report · Jonathan Wasserman','https://bleacherreport.com/articles/25474454-2027-nba-draft-big-board-top-100-player-rankings'),
 ('fansided','FanSided (via Yahoo)','https://sports.yahoo.com/articles/2027-nba-draft-big-board-135915469.html'),
 ('sgr','Sports Gaming Rosters · preliminary class board','https://sportsgamingrosters.com/2027-nba-draft-class-big-board/')]
ALIASES={'jojotugler':'josephtugler','klarkreithauser':'klarkriethauser','johanngrnloh':'johanngrunloh','zvonimirivii':'zvonimirivisic','nolanwintre':'nolanwinter','alvarofolguiras':'alvarofolgueiras','lvarofolgueiras':'alvarofolgueiras','arfandiane':'arafandiane','davidmirkovi':'davidmirkovic','stevanjoksimovic':'stefanjoksimovic','davisfogel':'davisfogle','malachmoreno':'malachimoreno','mormassambadiop':'massambadiop','hymgamoukouri':'hugoyimgamoukouri'}
SCHOOLS={'UWC':'USC','Miami FL':'Miami','Connecticut':'UConn','Brigham Young':'BYU',"St. John’s":"St. John's",'Ohio St.':'Ohio State','N.C. State':'NC State'}
def identity(name,school=''):
 name=unicodedata.normalize('NFKD',name).encode('ascii','ignore').decode().lower()
 name=re.sub(r'\b(jr|sr|ii|iii|iv)\.?$','',name).strip()
 name=re.sub('[^a-z0-9]','',name)
 return ALIASES.get(name,name)
def record(name,pos,school,rank,url,**extra):
 name={'alvarofolgueiras':'Alvaro Folgueiras','nolanwinter':'Nolan Winter','klarkriethauser':'Klark Riethauser','davisfogle':'Davis Fogle','malachimoreno':'Malachi Moreno','stefanjoksimovic':'Stefan Joksimovic'}.get(identity(name),name)
 return dict(name=name.strip(),position=pos.strip().replace('-','/'),school=SCHOOLS.get(school.strip(),school.strip()),rank=int(rank),url=url,**extra)
def parse(key,raw,url):
 soup=BeautifulSoup(raw,'html.parser');rows=[]
 if key!='sgr' and '2027' not in soup.title.get_text():raise ValueError('Not a 2027 board')
 if key=='tank':
  for r in soup.select('#big-board .mock-row'):
   rank=r.select_one('.mock-row-pick-number').get_text(strip=True)
   if not rank.isdigit() or int(rank)>=2027:continue
   pos,school=r.select_one('.mock-row-school-position').get_text(strip=True).split('|',1)
   dims=r.select('.height-weight > div');logo=r.select_one('.mock-row-logo img')
   rows.append(record(r.select_one('.mock-row-name').get_text(strip=True),pos,school,rank,urljoin(url,r.select_one('.mock-row-player a')['href']),height=dims[0].get_text(strip=True) if dims else None,weight=dims[1].get_text(' ',strip=True) if len(dims)>1 else None,measurement_source=url,measurement_source_name='Tankathon',logo=logo['src'].replace('http:','https:') if logo else None))
 elif key=='br':
  for i,li in enumerate(next(x for x in soup.select('ol') if len(x.select('li'))==5).select('li'),1):
   m=re.match(r'(.+?)\s*\((.+?),\s*([A-Z/]+),',li.get_text(' ',strip=True))
   if m:rows.append(record(m[1],m[3],m[2],i,url))
  for node in soup.select('main p'):
   m=re.match(r'^(\d+)\s*\.\s*(.+?)\s*\((.+?),\s*([A-Z/]+)(?:,|\))',node.get_text(' ',strip=True))
   if m:rows.append(record(m[2],m[4],m[3],m[1],url))
 elif key=='fansided':
  for h in soup.select('.content-body h2'):
   m=re.match(r'^(\d+)\.\s*(.+?)\s*\|\s*([A-Z-]+)\s*\|\s*(.+)',h.get_text(' ',strip=True))
   if m:rows.append(record(m[2],m[3],m[4],m[1],url))
  for tr in soup.select('.content-body table tr'):
   cells=[td.get_text(' ',strip=True) for td in tr.select('td')]
   m=re.match(r'^(\d+)\.\s*(.+)',cells[0]) if cells else None
   if m and len(cells)>=3:rows.append(record(m[2],cells[1],cells[2],m[1],url))
 elif key=='sgr':
  if '2027-nba-draft-class' not in url:raise ValueError('Wrong class')
  for r in soup.select('table tbody tr'):
   cells=[c.get_text(' ',strip=True) for c in r.select('td')]
   if len(cells)!=7 or not cells[0].isdigit():continue
   last,first=cells[1].split(',',1);name=first.strip()+' '+last.strip()
   m=re.search(r'(\d)[’\'](\d{1,2})[,.]\s*(\d+)\s*lbs',cells[6])
   dims=dict(height=f"{m[1]}'{m[2]}\"",weight=m[3]+' lbs',measurement_source=url,measurement_source_name='Sports Gaming Rosters') if m else {}
   rows.append(record(name,cells[2],cells[4],cells[0],url,**dims))
 rows.sort(key=lambda p:p['rank'])
 minimum={'tank':50,'br':100,'fansided':60,'sgr':150}[key]
 if len(rows)<minimum or [p['rank'] for p in rows]!=list(range(1,len(rows)+1)):raise ValueError('Incomplete/non-sequential '+key+' board: '+str(len(rows)))
 if len({identity(p['name']) for p in rows})!=len(rows):raise ValueError('Duplicate identities')
 return rows

def editorial_date(key,raw):
 soup=BeautifulSoup(raw,'html.parser');value=None
 node=soup.select_one('time[datetime]')
 if node:value=node['datetime'][:10]
 if key=='sgr':
  m=re.search(r'Updated:\s*(\d+/\d+/\d+)',soup.get_text(' ',strip=True))
  if m:value=datetime.strptime(m[1],'%m/%d/%y').date().isoformat()
 if key=='br':
  for script in soup.select('script[type="application/ld+json"]'):
   m=re.search(r'"datePublished"\s*:\s*"([^" ]+)',script.get_text())
   if m:value=m[1][:10];break
 return dict(editorial_date=value,editorial_date_kind='Board/publication date' if value else 'Date unavailable')
def fetch_source(source):
 key,name,url=source
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=20) as r:raw=r.read()
 rows=parse(key,raw,url);now=datetime.now(timezone.utc).isoformat()
 return dict(id=key,name=name,url=url,players=rows,depth=len(rows),fetched=now,checked_at=now,status='current',**editorial_date(key,raw))

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
            if not merged[ident].get('height') and row.get('height'):
                for field in ('height','weight','measurement_source','measurement_source_name'):merged[ident][field]=row.get(field)
    for p in merged.values():
        ranks=list(p['source_ranks'].values())
        # Top-125 Borda-style score. Missing and lower-than-125 ranks get 126.
        p.update(score=mean(min(p['source_ranks'].get(s['id'],126),126) for s in active),average=round(mean(ranks),1),best=min(ranks),worst=max(ranks),coverage=len(ranks),source_total=len(active))
    ordered=sorted(merged.values(),key=lambda p:(p['score'],-p['coverage'],p['average'],p['name']))[:125]
    if len(ordered)!=125:raise ValueError('Insufficient prospect pool')
    for rank,p in enumerate(ordered,1):p['rank']=rank;p['score']=round(p['score'],2);p['movement']=None
    return ordered

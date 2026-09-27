"""Source-attributed fallback measurements; never estimate missing values."""
import json
import re
import time
import urllib.request
from pathlib import Path
from datetime import datetime, timezone
from concurrent.futures import ThreadPoolExecutor
from bs4 import BeautifulSoup
from consensus import identity

CACHE=Path(__file__).with_name('measurements.json')
DRAFTTEK='https://www.drafttek.com/2027-NFL-Draft-Big-Board/Top-NFL-Draft-Prospects-2027-Page-1.asp'
CBS={'dylan-stewart':'https://www.cbssports.com/college-football/players/28904809/dylan-stewart/'}

def fetch(url):
    request=urllib.request.Request(url,headers={'User-Agent':'CollegeProspectBoard/1.0'})
    with urllib.request.urlopen(request,timeout=15) as response:return BeautifulSoup(response.read(),'html.parser')

def school_key(s):
    return re.sub('[^a-z]','',s.lower()).replace('miamifl','miami')

def entry(player,height,weight,url,name):
    match=re.fullmatch(r'''(\d)['-]\s*(\d{1,2})["”]?''',height.strip())
    if not match:raise ValueError('Invalid listed height')
    feet,inches=map(int,match.groups());weight=int(weight)
    if not(4<=feet<=7 and 0<=inches<12 and 120<=weight<=450):raise ValueError('Invalid measurement')
    return dict(school=player['school'],height=f"{feet}' {inches}\"",weight=f'{weight} lbs',measurement_source=url,measurement_source_name=name,measurement_checked=datetime.now(timezone.utc).isoformat())

def fill(players):
    missing=[p for p in players if not(p.get('height') and p.get('weight'))]
    try:cache=json.loads(CACHE.read_text())
    except (OSError,ValueError):cache={'updated':0,'players':{}}
    if missing and (time.time()-cache.get('updated',0)>86400 or any(p['id'] not in cache['players'] for p in missing)):
        try:
            soup=fetch(DRAFTTEK)
            if '2027' not in soup.title.get_text():raise ValueError('Wrong draft year')
            rows={identity(r.select_one('.player-cell').get_text(strip=True),r['data-school']):r for r in soup.select('tr[data-rank]')}
        except Exception:rows={}
        def find(p):
            try:
                if p['id'] in CBS:
                    url=CBS[p['id']];s=fetch(url)
                    if p['name'].lower() not in s.title.get_text().lower():raise ValueError('Wrong CBS player')
                    m=re.search(r'HT/WT:\s*(\d-\d{1,2}),\s*(\d{3})\s*lbs',s.get_text(' ',strip=True))
                    if m:return p['id'],entry(p,m[1],m[2],url,'CBS Sports')
            except Exception:pass
            r=rows.get(identity(p['name'],p['school']))
            if r is not None and school_key(r['data-school'])==school_key(p['school']):
                try:return p['id'],entry(p,r.select_one('.ht-cell').get_text(strip=True),r.select_one('.wt-cell').get_text(strip=True),DRAFTTEK,'Drafttek')
                except Exception:pass
            try:
                if not p['url'].startswith('https://scoutinggrade.com/2027/players/'):raise ValueError('No profile source')
                s=fetch(p['url']);header=s.h1.parent.get_text(' ',strip=True)
                if identity(s.h1.get_text(strip=True),p['school'])!=identity(p['name'],p['school']) or p['school'] not in header:raise ValueError('Wrong profile')
                m=re.search(r'''(\d'\s*\d{1,2}"),\s*(\d{3})\s*lbs''',header)
                if m:return p['id'],entry(p,m[1],m[2],p['url'],'Scouting Grade')
            except Exception:pass
            return p['id'],cache['players'].get(p['id'],{})
        with ThreadPoolExecutor(max_workers=4) as pool:
            cache['players'].update(dict(pool.map(find,missing)))
        cache['updated']=time.time();tmp=CACHE.with_suffix('.tmp');tmp.write_text(json.dumps(cache,indent=2));tmp.replace(CACHE)
    for p in players:
        if p.get('height') and p.get('weight'):
            if (p.get('measurement_source') or '').startswith('https://site.api.espn.com/'):
                p['measurement_source_name']='ESPN roster'
        else:
            value=cache['players'].get(p['id'],{})
            if value.get('school')==p['school']:p.update({k:v for k,v in value.items() if k!='school'})
    return players

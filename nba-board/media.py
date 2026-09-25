"""Match ESPN roster headshots by name AND school; cache metadata daily."""
import json
import re
import time
import urllib.request
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from consensus import identity

CACHE=Path(__file__).with_name('media.json')
BASE='https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams'
def get(url):
    with urllib.request.urlopen(url,timeout=12) as r:return json.load(r)
def norm(value):return re.sub('[^a-z0-9]','',value.lower())
def enrich(players):
    try:cache=json.loads(CACHE.read_text())
    except (OSError,ValueError):cache={'updated':0,'players':{}}
    if cache.get('version') != 2 or time.time()-cache.get('updated',0)>86400 or any(p['id'] not in cache['players'] for p in players):
        try:
            teams=[item['team'] for item in get(BASE+'?limit=1000')['sports'][0]['leagues'][0]['teams']]
            def school_media(school):
                matches=[t for t in teams if norm(school) in {norm(t.get(k,'')) for k in ('location','nickname','shortDisplayName','abbreviation')}]
                if len(matches)!=1:return school,None,[]
                team=matches[0]
                try:
                    roster=get(BASE+'/'+team['id']+'/roster')
                    athletes=roster.get('athletes',[])
                except Exception:athletes=[]
                return school,team,athletes
            with ThreadPoolExecutor(max_workers=8) as pool:
                schools={school:(team,athletes) for school,team,athletes in pool.map(school_media,sorted({p['school'] for p in players}))}
            media={}
            for p in players:
                team,athletes=schools[p['school']]
                result={'school':p['school'],'photo':None,'logo':None,'height':None,'weight':None,'measurement_source':None}
                if team:
                    result['logo']=next((logo['href'] for logo in team.get('logos',[]) if 'default' in logo.get('rel',[])),None)
                    matches=[a for a in athletes if identity(a.get('displayName',''),p['school'])==identity(p['name'],p['school'])]
                    if len(matches)==1:
                        result['height']=matches[0].get('displayHeight')
                        result['weight']=matches[0].get('displayWeight')
                        result['measurement_source']=BASE+'/'+team['id']+'/roster'
                        result['photo']=matches[0].get('headshot',{}).get('href')
                        result['photo_source']=next((link['href'] for link in matches[0].get('links',[]) if 'playercard' in link.get('rel',[])),None)
                prior=cache['players'].get(p['id'],{})
                if not result['photo'] and prior.get('school')==p['school']:
                    result['photo']=prior.get('photo');result['photo_source']=prior.get('photo_source')
                if prior.get('school')==p['school'] and not result['height'] and not result['weight']:
                    for field in ('height','weight','measurement_source'):result[field]=prior.get(field)
                media[p['id']]=result
            cache={'version':2,'updated':time.time(),'players':media}
            tmp=CACHE.with_suffix('.tmp');tmp.write_text(json.dumps(cache,indent=2));tmp.replace(CACHE)
        except Exception:pass  # Images must never interrupt ranking refresh.
    for p in players:
        media=cache['players'].get(p['id'],{})
        if media.get('school')==p['school']:
            p.update({k:media[k] for k in ('photo','logo','photo_source','height','weight','measurement_source') if media.get(k)})
            if media.get('measurement_source'):p['measurement_source_name']='ESPN'
    try:
        verified = json.loads(Path(__file__).with_name('headshots.json').read_text())
    except (OSError, ValueError):
        verified = {}
    for player in players:
        if player['id'] in verified:
            player.update({k: v for k, v in verified[player['id']].items() if k.startswith('photo')})
    try:listed=json.loads(Path(__file__).with_name('measurements.json').read_text())
    except (OSError,ValueError):listed={}
    for player in players:
        if not (player.get('height') and player.get('weight')) and player['id'] in listed:player.update(listed[player['id']])
    return players

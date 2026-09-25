"""Local NBA prospect board. Run: python3 nba-board/server.py"""
import json
import threading
import time
import urllib.request
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from consensus import fetch_all, aggregate
from media import enrich
from history import record_history

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / 'players.json'
LOCK = threading.Lock()
LIMIT = 125

def attach_scouting(players):
    try:
        reports = json.loads((ROOT / 'scouting.json').read_text())
    except (OSError, ValueError):
        reports = {}
    for player in players:
        player['scouting'] = reports.get(player['id'])
    return players

def refresh():
    with LOCK:
        old = json.loads(CACHE.read_text()) if CACHE.exists() else {}
        if all('editorial_date' in s for s in old.get('sources', [])) and old.get('method') == 'nba-consensus-v1' and time.time() - old.get('fetched_at', 0) < 3600:
            return record_history(old)
        sources = fetch_all(old.get('sources', []))
        players = enrich(aggregate(sources, old.get('players', [])))
        attach_scouting(players)
        data = dict(year=2027, sport='nba', method='nba-consensus-v1', fetched_at=time.time(),
            updated=datetime.now(timezone.utc).isoformat(), players=players, sources=sources,
            status='current' if all(s['status']=='current' for s in sources) else 'partial')
        record_history(data)
        tmp = CACHE.with_suffix('.tmp')
        tmp.write_text(json.dumps(data, indent=2))
        tmp.replace(CACHE)
        return data

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def do_GET(self):
        if self.path.split('?')[0] == '/api/players':
            try:
                data = refresh()
            except Exception as exc:
                data = json.loads(CACHE.read_text()) if CACHE.exists() else {'players': []}
                data.update(status='stale', error=str(exc))
            body = json.dumps(data).encode()
            self.send_response(200 if data.get('players') else 503)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(body)
        else:
            super().do_GET()

if __name__ == '__main__':
    print('Prospect board: http://localhost:8788', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8788), Handler).serve_forever()

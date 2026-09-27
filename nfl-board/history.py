"""Observed ranking snapshots; never backfills historical ranks."""
import json
from datetime import datetime, timezone
from pathlib import Path

HISTORY = Path(__file__).with_name('history.json')

def record_history(data, path=HISTORY):
    try:
        history = json.loads(path.read_text())
    except FileNotFoundError:
        history = {'version': 1, 'snapshots': []}
    snapshots = history['snapshots']
    state = {'method': data.get('method'),
             'sources': sorted(s['id'] for s in data.get('sources', []) if s.get('players')),
             'players': {p['id']: {'rank': p['rank'], 'source_ranks': p.get('source_ranks', {})} for p in data['players']}}
    previous = snapshots[-1] if snapshots else None
    if previous is None or previous['state'] != state:
        snapshots.append({'recorded_at': datetime.now(timezone.utc).isoformat(), 'state': state})
        tmp = path.with_suffix('.tmp')
        tmp.write_text(json.dumps(history, indent=2))
        tmp.replace(path)
    for player in data['players']:
        entries = []
        for snapshot in snapshots:
            item = snapshot['state']['players'].get(player['id'])
            if item:
                entries.append({'recorded_at': snapshot['recorded_at'], **item})
        player['history'] = entries
        player['movement'] = None
        if len(snapshots) > 1:
            before, after = snapshots[-2]['state'], snapshots[-1]['state']
            prior = before['players'].get(player['id'])
            if prior and before['method'] == after['method'] and before['sources'] == after['sources']:
                player['movement'] = prior['rank'] - player['rank']
    data['history_started_at'] = snapshots[0]['recorded_at'] if snapshots else None
    return data

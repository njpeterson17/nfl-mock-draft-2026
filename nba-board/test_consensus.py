import unittest,json
from pathlib import Path
from unittest.mock import patch
from consensus import aggregate,identity,parse,fetch_all,SOURCES
class ConsensusTests(unittest.TestCase):
 def setUp(self):self.data=json.loads(Path('players.json').read_text())
 def test_pool(self):
  rows=aggregate(self.data['sources'],[])
  self.assertEqual(len(rows),125)
  self.assertEqual(len({identity(p['name']) for p in rows}),125)
  self.assertEqual(sum(p['rank']>100 for p in rows),25)
 def test_aliases(self):
  for a,b in [('JoJo Tugler','Joseph Tugler'),('Klark Reithauser','Klark Riethauser'),('Johann Grnloh','Johann Grünloh'),('Milan Momcilovic','Milan Momcilovic')]:self.assertEqual(identity(a),identity(b))
 def test_missing_rank(self):
  sources=self.data['sources'];rows=aggregate(sources,[])
  p=next(p for p in rows if len(p['source_ranks'])<len(sources))
  self.assertEqual(p['score'],round(sum(min(p['source_ranks'].get(s['id'],126),126) for s in sources)/len(sources),2))
 def test_wrong_cycle(self):
  with self.assertRaises(ValueError):parse('tank','<title>2026 NBA board</title>',SOURCES[0][2])
 def test_failed_fetch_retains_cache(self):
  with patch('consensus.fetch_source',side_effect=OSError('offline')):sources=fetch_all(self.data['sources'])
  self.assertTrue(all(s['status']=='stale' for s in sources));self.assertEqual(sources[0]['players'],self.data['sources'][0]['players'])
 def test_isolated_sport(self):
  html=Path('index.html').read_text();self.assertIn('draftroom-nba-2027-v1',html);self.assertIn("data.sport!=='nba'",html)
if __name__=='__main__':unittest.main()

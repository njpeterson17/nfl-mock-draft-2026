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
 def test_sgr_birthdate_column(self):
  rows=''.join(f"<tr><td>{i}</td><td>Player{chr(65+i%26)}{i}, Test</td><td>SF</td><td>PF</td><td>Kansas</td><td>Fr</td><td>6’7, 230 lbs</td><td>10/12/07</td></tr>" for i in range(1,151))
  players=parse('sgr',f'<title>x</title><table><tbody>{rows}</tbody></table>',SOURCES[3][2])
  self.assertEqual(len(players),150);self.assertEqual(players[0]['height'],"6'7\"")
 def test_sgr_header_columns(self):
  head='<tr><th></th><th>Rank</th><th>Player</th><th>1st Pos.</th><th>2nd Pos.</th><th>School</th><th>Class</th><th>H/W</th><th>Birthdate</th><th>OVR</th><th>Archetype</th></tr>'
  rows=''.join(f"<tr><td>{i+1}</td><td>{i}</td><td>Player{chr(65+i%26)}{i}, Test</td><td>SF</td><td>PF</td><td>Kansas</td><td>Fr</td><td>6’7, 230 lbs</td><td>10/12/07</td><td>77</td><td>Connector</td></tr>" for i in range(1,151))
  players=parse('sgr',f'<title>x</title><table><thead>{head}</thead><tbody>{rows}</tbody></table>',SOURCES[3][2])
  self.assertEqual((len(players),players[0]['rank'],players[0]['school'],players[0]['weight']),(150,1,'Kansas','230 lbs'))
 def test_espn_board(self):
  heads=''.join(f'<h2>{i}. Player{chr(65+i%26)}{i}, SG/SF, Arizona</h2><p>Note</p>' for i in range(1,26))
  rest=''.join(f'{i}. Player{chr(65+i%26)}{i}, {"" if i==98 else "PF"}, Utah State | Age: 2{i%10}.{i%10}' for i in range(26,101))
  players=parse('espn',f'<title>2027 NBA draft big board</title>{heads}<h2>Remaining big board for the 2027 class</h2><p>{rest}</p>',SOURCES[5][2])
  self.assertEqual((len(players),players[25]['school'],players[97]['position'],players[99]['rank']),(100,'Utah State','',100))
 def test_noceilings_board(self):
  heads=''.join(f'<h3>#{i}.  Player{chr(65+i%26)}{i} Jr. | G | Arkansas</h3><ul><li>Age: 18</li></ul>' for i in range(1,61))
  players=parse('noceilings',f'<title>2027 NBA Draft BIG Board</title>{heads}',SOURCES[4][2])
  self.assertEqual(len(players),60);self.assertEqual(players[0]['school'],'Arkansas')
  self.assertEqual(identity('Matthew Able'),identity('Matt Able'));self.assertEqual(identity('Nik Khamenia'),identity('Nikolas Khamenia'))
  self.assertEqual(identity('Pharrel Payne'),identity('Pharrell Payne'));self.assertEqual(identity('Trey McKinney Jr.'),identity('Trey McKenney'));self.assertNotEqual(identity('Kayden Mingo'),identity('Dylan Mingo'))
 def test_failed_fetch_retains_cache(self):
  with patch('consensus.fetch_source',side_effect=OSError('offline')):sources=fetch_all(self.data['sources'])
  self.assertTrue(all(s['status']=='stale' for s in sources));self.assertEqual(sources[0]['players'],self.data['sources'][0]['players'])
 def test_isolated_sport(self):
  html=Path('index.html').read_text();self.assertIn('draftroom-nba-2027-v1',html);self.assertIn("data.sport!=='nba'",html)
if __name__=='__main__':unittest.main()

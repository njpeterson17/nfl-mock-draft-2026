import unittest
from unittest.mock import patch
from consensus import aggregate, identity, fetch_all, editorial_date

class ConsensusTests(unittest.TestCase):
    def sources(self):
        return [dict(id=sid,status='current',players=[dict(name=f'Player {i}',school='School',position='QB',rank=i,url='https://example.com') for i in range(1,151)]) for sid in ('a','b')]
    def test_top100_and_borderline(self):
        rows=aggregate(self.sources(),[])
        self.assertEqual(len(rows),125)
        self.assertEqual([p['rank'] for p in rows],list(range(1,126)))
        self.assertEqual(sum(p['rank']>100 for p in rows),25)
    def test_missing_rank_is_not_zero(self):
        sources=self.sources();sources[1]['players']=sources[1]['players'][1:]
        player=next(p for p in aggregate(sources,[]) if p['name']=='Player 1')
        self.assertEqual(player['score'],63.5)
        self.assertEqual(player['coverage'],1)
        self.assertEqual(player['best'],1)
    def test_existing_ids_survive(self):
        rows=aggregate(self.sources(),[dict(id='saved-id',name='Player 1',school='School')])
        self.assertEqual(rows[0]['id'],'saved-id')
    def test_editorial_dates(self):
        self.assertEqual(editorial_date('tankathon', '<title>2027</title><time datetime="2026-09-08T17:33:00-05:00">5 days</time>')['editorial_date'], '2026-09-08')
        self.assertEqual(editorial_date('drafttek', '<p>Top-450 August 17, 2026 • Pre-Season Rankings</p>')['editorial_date'], '2026-08-17')
        self.assertEqual(editorial_date('sporting', '<time datetime="2026-09-03T05:50:01.000Z"></time>')['editorial_date_kind'], 'Published')
        self.assertIsNone(editorial_date('sg', '<time datetime="not-a-date"></time>')['editorial_date'])
        self.assertIsNone(editorial_date('sg', '<p>Fetched today</p>')['editorial_date'])
    def test_identity(self):
        self.assertEqual(identity('C.J. Carr'),identity('CJ Carr'))
        self.assertEqual(identity('Tae Johnson'),identity('Brauntae Johnson'))
        self.assertNotEqual(identity('Tae Johnson'),identity('Tao Johnson'))
        self.assertEqual(identity('A.J. Holmes Jr.'),identity('AJ Holmes'))
        self.assertNotEqual(identity('Jordan Ross','LSU'),identity('Jordan Ross','Arizona'))
    def test_failure_retains_source_snapshot(self):
        prior=dict(id='sg',name='Scouting Grade',url='https://example.com',depth=1,players=[{'rank':1}],fetched='2026-09-01')
        with patch('consensus.fetch_source',side_effect=OSError('offline')):
            sources=fetch_all([prior])
        self.assertEqual(sources[0]['status'],'stale')
        self.assertEqual(sources[0]['players'],prior['players'])
        self.assertEqual(sources[1]['status'],'unavailable')

if __name__=='__main__':unittest.main()

import copy
import tempfile
import unittest
from pathlib import Path
from history import record_history

class HistoryTests(unittest.TestCase):
    def test_observed_changes_and_coverage(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'history.json'
            data = {'method': 'consensus-v2', 'sources': [{'id': 'a', 'players': [1]}, {'id': 'b', 'players': [1]}], 'players': [{'id': 'one', 'rank': 2, 'source_ranks': {'a': 1, 'b': 3}}]}
            record_history(data, path)
            self.assertIsNone(data['players'][0]['movement'])
            self.assertEqual(len(data['players'][0]['history']), 1)
            first = path.read_text()
            record_history(data, path)
            self.assertEqual(first, path.read_text())
            data['players'][0]['rank'] = 1
            record_history(data, path)
            self.assertEqual(data['players'][0]['movement'], 1)
            record_history(data, path)
            self.assertEqual(data['players'][0]['movement'], 1)
            self.assertEqual(len(data['players'][0]['history']), 2)
            data['sources'][1]['players'] = []
            record_history(data, path)
            self.assertIsNone(data['players'][0]['movement'])

if __name__ == '__main__':
    unittest.main()

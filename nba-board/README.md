# Draftroom: 2027 NBA board

Run `python3 server.py` in this directory, then open http://localhost:8788. The NFL board runs independently at http://localhost:8787. Both headers link to the other sport. Requires Python 3 and BeautifulSoup 4.

## Features

Top 100 plus 25 borderline prospects; college and international players. Personal ranks, notes, watchlists, tiers, film queue, source freshness, disagreement filters, hover profiles, 2–4 player comparisons, and real observed ranking history. NBA local storage (`draftroom-nba-2027-v1`), JSON backups (`sport: nba`), snapshots, and server port are separate from NFL. NFL backups are rejected by the NBA importer.

## Mock draft

The Mock draft tab (`#mock`) runs a one- or two-round draft against the current top 125. The 2027 order isn't set until the May 2027 lottery, so each slot's team is chosen by the user, or "Shuffle team order" fills a random order (round 2 repeats round 1). Trades and forfeited picks are modeled only by editing slots. Draft any available player for the pick on the clock, or simulate the next pick, up to your team's next pick, or the rest of the draft. The simulator drafts from the consensus board or your personal ranks (unranked players follow in consensus order); with Variance on it takes one of the top three available at 60/25/15% odds. Badges flag picks 8+ spots after a player's consensus rank (value) or 12+ spots before it (reach). Mock state saves in the browser (`draftroom-nba-2027-mock-v1`), is included in backups, and "Copy results" puts the picks on the clipboard. Picks store a snapshot of the player, so they survive a refresh that drops someone from the top 125.

## Ranking sources and limits

Four equally weighted publishers: Tankathon (67 ranked players), Jonathan Wasserman/Bleacher Report (100), FanSided via Yahoo (60), and Sports Gaming Rosters (150). The latter is a preliminary NBA 2K draft-class board, not an established professional scouting service; that limitation is disclosed in the page methodology. Its page title incorrectly says 2026, while its dedicated 2027 URL, draft-class content and incoming players identify the 2027 list. The adapter is tied to that specific URL. Editorial dates are displayed; the feeds currently range from May through August 2026. They are not portrayed as September editorial updates merely because they were retrieved in September.

Consensus averages ranks capped at 126, using 126 when absent. Ties use greater source coverage, lower mean actual rank, then name. Missing ranks are scoring assumptions, not publisher claims. Top 125 selected from the combined pool. Source rank ranges exclude missing entries. Shorter boards penalize less-covered prospects, and one-source entries have limited evidence. Mock-draft team pick orders and other consensus aggregators are not included.

Explicit identity aliases merge accent loss and reviewed spelling variants (including JoJo/Joseph Tugler, Klark Riethauser, Johann Grünloh, Zvonimir Ivisic, Alvaro Folgueiras). KJ Lewis's source typo UWC is corrected to USC, supported by USC's May 18, 2026 signing announcement. No fuzzy automatic merging. School/position uses the first available ranking source; transfers and biographical disagreements may leave a listed field outdated. Draft declaration and eligibility remain unverified.

The page polls every five minutes; server source checks run at most hourly, on demand. Publisher failures retain prior successful data with a stale label. At least two available publishers are required. Article feeds follow fixed URLs and do not discover new editions. `players.json` is a static fallback when the service is unavailable.

## Media and reports

Initial coverage: 99 portraits, 93 checked scouting summaries, 124 height/weight pairs. Missing details remain explicit. Official roster/profile image candidates were reviewed in contact sheets; silhouettes, logos, banners, and a suspicious duplicate image were rejected. Local image files preserve downloaded publisher assets; some show prior-team uniforms or signing photos rather than conventional headshots. `headshots.json` records provenance. The page loads 240×270 crops from `assets/headshots/thumbs/` (about 0.7 MB total vs 74 MB of originals) and falls back to the original file if a thumbnail is missing; run `python3 thumbs.py` after adding or replacing a local headshot. Wide or full-body photos get a reviewed crop box in `thumbs.py`. ESPN roster matching requires name and school, with daily caching; ESPN may still list older-season rosters. Local image overrides and supplemental measurements are reviewed snapshots, not automatic new-photo discovery.

Measurements use linked ranking rows and matched ESPN rosters, with 15 supplemental source-attributed pairs in `measurements.json` from NBA Draft Room and official rosters. Values are listed, not combine verified. Fred Smith Jr.'s height/weight remain unavailable.

Scouting reports in `scouting.json` are short attributed paraphrases of individual NBA Draft Room Draft Notes pages. Specific weaknesses are only stated when the report supports them; a report without a criticism says so. No traits are inferred from rank, measurements, or statistics. Reports do not rewrite automatically when rankings refresh. New entrants without a reviewed report remain unreviewed. Outdated injury/legal notes are not represented as current availability information.

History starts at the first actual local observation and stores changed ranking states in `history.json`. Unchanged refreshes do not create a new snapshot. Movement compares the last two distinct boards and is suppressed when available sources or methodology changes. Copy `history.json` separately when moving the server; evaluation exports contain personal data only.

## Checks

`python3 -m unittest test_consensus test_history`

`node test_features.js && node test_mock.js`

Python covers pool size, aliases, scoring, wrong-cycle rejection, failed-source retention and observed history. JavaScript executes the actual page scripts in a DOM harness and checks rendering, filters, comparisons, tier/film saves and backup restoration. Headless Chrome was used to inspect the desktop layout; original portraits were visually inspected separately. No external deployment.

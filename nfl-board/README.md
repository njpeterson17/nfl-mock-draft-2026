# Draftroom consensus big board

Run `python3 nfl-board/server.py` from the repository root, then open http://localhost:8787. Requires Python 3 and BeautifulSoup 4 (available locally).

The board shows the consensus top 100 and 25 borderline prospects for the 2027 draft. Personal ranks, watchlist and notes remain in browser local storage. JSON backups can be exported/restored. The existing storage key and matching player IDs are preserved.

## Sources

Five independent publishers: Scouting Grade, Tankathon, Drafttek, Sporting News (Yahoo syndication), and Bucs Wire (Yahoo syndication). A syndicated article counts only once. The last two feeds refresh fixed article URLs; newer editions require updating the adapter URL. PFF and several other publishers rejected automated retrieval, and an aggregator labeled 2027 served 2026 prospects, so they are not included.

## Method

Each publisher has equal weight. For each player in the union of all boards, cap listed ranks at 126 and assign 126 when absent. Sort by the mean of these scores, lower first. Ties use more actual appearances, lower raw average rank, then name. Select the first 125; split at rank 100. This is a top-125 scoring model, not an arithmetic mean of only listed ranks. Missing ranks are estimates for scoring, not publisher claims. Shorter boards and older editions can affect results. Displayed range and coverage use actual listed ranks.

Matching normalizes punctuation and suffixes, uses reviewed aliases, and disambiguates Jordan Ross and Jordan Hall by school. No fuzzy merging. Player school/position/profile comes from the first available source in configured order; conflicting biographical fields are not reconciled automatically. Declaration and eligibility are unverified.

The browser polls every five minutes; the server fetches publishers concurrently at most hourly on demand. `players.json` saves both consensus and source snapshots atomically. A failed source retains its last successful snapshot with a stale label; a source without a snapshot is excluded. At least two sources are required. Source timestamps indicate retrieval, not editorial publication. Movement resets when the methodology or source availability changes.

The local server binds only to localhost. Static hosting displays the saved snapshot; live refresh requires the Python service. This is not deployed publicly.

## Validation

Run `python3 -m unittest test_consensus.py` from `nfl-board/`. Tests cover missing-rank scoring, 100/25 partition, ID preservation, identity matching, and failed-source retention. All five adapters fetched and validated sequential 2027 boards (314, 120, 150, 100, 150 entries). JavaScript syntax checked. Browser visual QA remains unavailable.

## Prospect images

ESPN headshots are matched by normalized player name within the matching school roster. Team logos use ESPN's team directory. Media metadata is cached daily in `media.json` and added to each ranking snapshot. Missing or failed images display initials; lazy loading and fixed image dimensions avoid loading every headshot immediately or shifting the table layout. Board rows and player profiles both show images. An unaffiliated prospect has no school logo. Media failures do not interrupt rankings.

## Strengths and weaknesses

Each current prospect has a reviewed, paraphrased assessment in `scouting.json`: 124 from Scouting Grade's explicit strengths/concerns sections and John Mateer from Charlie Campbell's WalterFootball prospect summary. Click **View report** or a player name to read it. Every summary includes its report URL, section names, and review timestamp. These are attributed scouting opinions, not independent film grades or verified factual deficiencies. Unproven traits remain questions; no assessments are generated from rankings, measurements, or statistical thresholds. The short source section for Drake Lindsey did not establish a clear trait advantage, so his entry says so explicitly.

Summaries are reviewed snapshots and do not automatically change with hourly rankings. New entrants without a reviewed report display an unavailable message. Reports are attached by stable player ID. Refreshes never replace personal notes with scouting text.

During report research, Tae Johnson and Brauntae Johnson were confirmed as alternate names for the same Notre Dame safety. Their source ranks now merge under the existing `tae-johnson` entry. The browser performs a one-time merge of any notes on the former `taejohnson` duplicate, retaining both note texts if they differ. The resulting board contains 125 distinct prospects, including Luke Reynolds at the new cutoff. Consensus movement resets for this methodology correction.

## Listed measurements

Height and weight use matched ESPN rosters first. Missing pairs are filled from CBS Sports (configured player page), Drafttek (same-name/school board row), then matching Scouting Grade player reports. All 125 currently have measurements: ESPN 109, CBS 1, Drafttek 12, Scouting Grade 3. Each player carries the measurement source URL and name, visible in their profile. Values are publisher-listed, not verified combine results; differing weights are not averaged. PFF's accessible page did not expose measurements. Fallbacks refresh daily through `measurements.json` and retain prior source-attributed values on failures.

## Completed headshot coverage

All 125 current prospects have portraits. Sixteen previously missing headshots were matched to official school profiles/rosters (15) and CBS Sports (Dylan Stewart), downloaded without alteration into `assets/headshots/`, and recorded with source URLs and credits in `headshots.json`. The registry survives routine roster refreshes. Sahir West uses his official James Madison portrait; Brendan Sorsby uses his Cincinnati 2025 portrait. Those earlier-team photos are identified in profile credits. A CBS silhouette was rejected during visual QA. All 16 downloaded files decoded successfully and were checked visually; all local image routes return image content.

## Source freshness, disagreement and comparisons

Source cards now distinguish the publisher's board/publication date from the latest fetch attempt and last successful retrieval. Dates come from the source's visible datetime metadata, or Drafttek's explicit board-date heading. Missing dates remain unknown. Recent means under 14 days; aging means 14–29; older means at least 30. These flags do not alter consensus weights.

The table labels rank disagreement and can sort by full published best-to-worst range. Wide disagreement means at least 40 places across at least three sources. Fewer than three sources is labeled limited coverage. Missing ranks are excluded from disagreement math.

Select two to four players using Compare beside their watchlist buttons. Selections stay while searching or filtering; the tray supports removal and clearing. The comparison dialog includes portraits/logos, school/position, listed measurements with sources, consensus/personal ranks, source coverage and individual ranks, attributed scouting summaries, and personal notes. Comparisons are read-only and do not modify notes.

Validation: `python3 -m unittest test_consensus.py` and `node test_features.js`. Frontend checks execute the page scripts against a minimal DOM to test filters, selection limits, comparison contents, notes and date/range logic. No connected browser was available for visual QA.

Personal evaluations now include My tier (1–5, defined by you) and a Watch more film flag. Set these in a player's profile and use the tier/film queue filters to review your board. They appear in comparisons and are included in browser backups. Restoring older backups preserves existing tier/film values when those fields are absent.

`history.json` stores real observed consensus/source-rank snapshots, starting with the first local recording. Identical ranking states do not add snapshots. Profile history lists observation times and source ranks; no past rankings are inferred. Movement compares the latest two distinct whole-board snapshots and persists across unchanged checks. It is suppressed when the set of available sources or aggregation method changes. A stale source retained in cache still counts as available. History remains on this server; personal backup exports contain evaluations only. Keep `history.json` to preserve ranking history when moving the server.

Verification: `python3 -m unittest test_consensus test_history` and `node test_features.js`. The JavaScript check uses a lightweight DOM harness, not a browser rendering test.

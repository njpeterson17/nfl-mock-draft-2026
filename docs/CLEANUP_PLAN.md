# Cleanup Plan for NFL Mock Draft 2026

## Issues to Fix:
1. **Too many README files** (16) - Consolidate into 1
2. **Demo files scattered** (8) - Move to demos/ folder
3. **Backup files** - Remove index.html.backup
4. **Duplicate CSS/JS** - Some overlap
5. **No folder structure** - Flat organization
6. **No production build** - All files separate

## Proposed Structure:
```
nfl-mock-draft-2026/
├── index.html                    # Main entry
├── README.md                     # Single comprehensive README
├── LICENSE                       # MIT License
├── package.json                  # Dependencies (if using build tools)
│
├── src/                          # Source files
│   ├── js/
│   │   ├── main.js              # Core functionality
│   │   ├── data.js              # All prospect data (consolidated)
│   │   ├── analytics.js         # Analytics
│   │   └── modules/             # Feature modules
│   │       ├── save-load.js
│   │       ├── comparison.js
│   │       ├── trade-calc.js
│   │       ├── draft-grades.js
│   │       ├── png-export.js
│   │       ├── adp-system.js
│   │       ├── social-share.js
│   │       ├── war-room.js
│   │       ├── mobile-nav.js
│   │       ├── youtube-vids.js
│   │       ├── seven-round.js
│   │       ├── position-ranks.js
│   │       ├── leaderboard.js
│   │       ├── news.js
│   │       ├── team-history.js
│   │       ├── live-draft.js
│   │       ├── ai-predictor.js
│   │       ├── combine-tracker.js
│   │       ├── image-loader.js
│   │       └── team-logos.js
│   │
│   └── css/
│       ├── main.css             # Core styles
│       ├── variables.css        # CSS variables (themes)
│       ├── components.css       # Shared components
│       └── modules/             # Feature styles
│           ├── (22 CSS files organized)
│
├── pages/                        # HTML pages
│   ├── war-room.html
│   ├── 7-round-simulator.html
│   ├── position-rankings.html
│   ├── leaderboard.html
│   ├── profile.html
│   ├── news.html
│   ├── team-draft-history.html
│   ├── live-draft.html
│   ├── ai-draft-predictor.html
│   └── combine-tracker.html
│
├── dist/                         # Production build (minified)
│   ├── css/
│   │   └── main.min.css         # All CSS concatenated & minified
│   └── js/
│       └── main.min.js          # All JS concatenated & minified
│
├── demos/                        # Demo files (not for production)
│   ├── player-image-demo.html
│   ├── team-logo-demo.html
│   ├── mobile-nav-demo.html
│   ├── video-system-demo.html
│   ├── adp-demo.html
│   └── visual-fallback-demo.html
│
├── docs/                         # Documentation
│   └── ARCHITECTURE.md          # Technical docs
│
├── images/                       # Assets (already good)
│   ├── players/
│   └── players_backup/
│
└── components/                   # Reusable HTML components
    └── player-comparison.html
```

## Actions:
1. Create new folder structure
2. Move files to appropriate folders
3. Consolidate all READMEs into main README.md
4. Remove backup files
5. Create minified production build
6. Update all paths in HTML files
7. Create ARCHITECTURE.md for devs

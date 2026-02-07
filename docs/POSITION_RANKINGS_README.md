# Position Rankings System

A comprehensive position-by-position prospect analysis system for the 2026 NFL Mock Draft website.

## Overview

The Position Rankings system provides deep-dive analysis for each position group, similar to WalterFootball or NFL Draft Database. It includes detailed scouting reports, comparison tools, and position-specific metrics.

## Features

### 1. Position Hub Page
- Grid view of all 11 positions
- Quick stats for each position (top prospect, count, class strength)
- One-click navigation to position detail

### 2. Position Detail Pages
Each position page includes:

#### Position Overview
- Class strength summary
- Top prospect highlight
- Sleeper pick
- Notable riser/faller
- Round projection
- Key evaluation traits

#### Rankings Table
- Sortable by rank, grade, name, or school
- Filter by projected round (R1, R2-3, Day 3)
- Medal indicators for top 3 prospects
- Color-coded grades (Elite, R1, R2, R3, Day 3)

#### Prospect Modal
- Detailed player profile
- Stats (combine measurements, production)
- Position-specific metrics (1-5 star ratings)
- Strengths and weaknesses
- NFL comparison (ceiling/floor)
- Best team fits
- Full scouting report

### 3. Supported Positions
1. **QB** - Quarterback (12 prospects)
2. **RB** - Running Back (12 prospects)
3. **WR** - Wide Receiver (15 prospects)
4. **TE** - Tight End (10 prospects)
5. **OT** - Offensive Tackle (10 prospects)
6. **IOL** - Interior Offensive Line (10 prospects)
7. **EDGE** - Edge Rusher (12 prospects)
8. **DL** - Defensive Line (10 prospects)
9. **LB** - Linebacker (10 prospects)
10. **CB** - Cornerback (12 prospects)
11. **S** - Safety (10 prospects)

## File Structure

```
nfl-mock-draft-2026/
├── position-rankings.html       # Main position rankings page
├── css/
│   └── position-rankings.css    # Position rankings styles
├── js/
│   ├── position-rankings-data.js # Prospect data with scouting reports
│   └── position-rankings.js      # Interactive functionality
└── POSITION_RANKINGS_README.md  # This file
```

## Data Structure

Each prospect includes:

```javascript
{
  rank: 1,
  name: "Player Name",
  school: "University",
  height: "6'5",
  weight: 225,
  grade: "7.4",
  tier: "Elite|Round 1|Round 2|...",
  projection: "Top 5",
  round: 1,
  oneLineSummary: "Brief description",
  strengths: ["Strength 1", "Strength 2", ...],
  weaknesses: ["Weakness 1", "Weakness 2", ...],
  stats: { forty, vertical, broad, ... },
  metrics: { position-specific ratings 1-5 },
  comparison: "Ceiling: X | Floor: Y",
  bestFits: ["Team1", "Team2", ...],
  report: "Full scouting report"
}
```

## Position-Specific Metrics

Each position has unique evaluation criteria:

- **QB**: Arm, Accuracy, Mobility, Processing, Leadership
- **RB**: Speed, Power, Vision, Receiving, Pass Pro
- **WR**: Speed, Route Running, Hands, Contested, YAC
- **TE**: Receiving, Blocking, Athleticism, Size, Route Running
- **OT**: Pass Pro, Run Block, Athleticism, Size, Technique
- **IOL**: Power, Athleticism, Technique, Versatility, Anchor
- **EDGE**: Burst, Bend, Power, Run Defense, Pass Rush Moves
- **DL**: Strength, Quickness, Run Defense, Pass Rush, Size
- **LB**: Run Defense, Coverage, Blitz, Instincts, Tackling
- **CB**: Speed, Ball Skills, Press, Zone, Tackle
- **S**: Coverage, Run Support, Ball Skills, Instincts, Tackling

## Usage

### Direct Links
- All Positions: `position-rankings.html`
- Specific Position: `position-rankings.html?pos=QB`

### Navigation
- Position navbar at top of page
- Previous/Next position footer navigation
- Back to all positions button

### Interactions
- Click "View" to open prospect detail modal
- Filter by round projection
- Sort by different criteria
- Click outside modal or press Escape to close

## Integration

The Position Rankings system integrates with:
- Main navigation (added to index.html nav tabs)
- Existing color scheme and design system
- Existing fonts (Inter, Oswald)
- Back to top button

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (responsive design)

## Future Enhancements

Potential additions:
- [ ] Prospect comparison radar charts
- [ ] Video highlights integration
- [ ] Big board crossover linking
- [ ] Mock draft integration
- [ ] Export rankings to PDF
- [ ] Print-friendly styles
- [ ] Social sharing for prospects
- [ ] Comments/discussion per position

## Credits

Created for the 2026 NFL Mock Draft website.
Data based on scouting reports and draft analysis.

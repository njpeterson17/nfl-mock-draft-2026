# Draft Grades System - 2026 NFL Mock Draft

A comprehensive AI/algorithmic grading system for evaluating NFL mock draft picks, similar to PFF or ESPN draft grades.

## Overview

The Draft Grades System provides:
- **Individual Pick Grades** - Each selection graded A+ through F
- **Overall Team Draft Grades** - Weighted average of all picks per team
- **Historical Comparison** - Compare drafts to past team performances
- **Detailed Breakdown** - Transparent scoring methodology
- **Visual Grade Indicators** - Color-coded badges and animations

## Grading Algorithm

### Component Weights

| Component | Weight | Description |
|-----------|--------|-------------|
| **Value** | 40% | Big Board rank vs. pick number |
| **Need** | 30% | Team need at position |
| **Fit** | 20% | Positional value (premium positions get bonus) |
| **Round** | 10% | Appropriateness of round for player's tier |

### Value Grade (40%)

Compares pick number to player's Big Board ranking:

| Difference | Grade | Score | Description |
|------------|-------|-------|-------------|
| +10 or more | A+ | 98 | Massive steal |
| +5 to +9 | A | 94 | Great value |
| +2 to +4 | A- | 91 | Good value |
| 0 to +1 | B+ | 88 | Fair value |
| -1 to -3 | B | 85 | Slight reach |
| -4 to -7 | C+ | 78 | Reach |
| -8 or less | D | 68 | Major reach |

### Need Grade (30%)

Based on team needs data:

| Need Level | Grade | Score | Description |
|------------|-------|-------|-------------|
| High | A | 95 | Fills critical need |
| Medium | B+ | 88 | Fills moderate need |
| Low | C+ | 78 | Low priority position |
| None | D+ | 72 | Non-need position |

### Fit Grade (20%)

Positional value multipliers:

| Position Category | Multiplier | Grade Boost |
|-------------------|------------|-------------|
| **Premium** (QB, EDGE, OT, CB) | 1.5x | A range |
| **High Value** (WR, DL, S, LB) | 1.2x | B+ range |
| **Standard** (IOL, TE) | 1.0x | B range |
| **Depressed** (RB, FB) | 0.8x | C+ range |

### Round Grade (10%)

Based on player's tier vs. selected round:

| Comparison | Grade | Description |
|------------|-------|-------------|
| Perfect fit | A | Player matches expected round |
| Slight slide | A- | Good value in later round |
| Major slide | B+ | Available in later round |
| Slight early | B | Selected slightly early |
| Major early | C | Selected earlier than tier suggests |

## Grade Scale

| Grade | Min Score | Max Score | Color |
|-------|-----------|-----------|-------|
| A+ | 97 | 100 | 🟢 Green |
| A | 93 | 96 | 🟢 Green |
| A- | 90 | 92 | 🟢 Green |
| B+ | 87 | 89 | 🔵 Blue |
| B | 83 | 86 | 🔵 Blue |
| B- | 80 | 82 | 🔵 Blue |
| C+ | 77 | 79 | 🟡 Yellow |
| C | 73 | 76 | 🟡 Yellow |
| C- | 70 | 72 | 🟡 Yellow |
| D+ | 67 | 69 | 🟠 Orange |
| D | 63 | 66 | 🟠 Orange |
| D- | 60 | 62 | 🟠 Orange |
| F | 0 | 59 | 🔴 Red |

## File Structure

```
nfl-mock-draft-2026/
├── draft-grades-system.js      # Core grading algorithm
├── css/
│   └── draft-grades.css        # Styles for grades UI
├── draft-grades-tab.html       # Tab content template
└── DRAFT_GRADES_README.md      # This file
```

## Usage

### Viewing Grades

1. Navigate to the **Draft Grades** tab
2. See team rankings from best to worst
3. Click on any team to expand detailed analysis
4. Click on individual pick grades for breakdown

### Understanding the Breakdown

When you click on a grade badge, you'll see:

```
┌─────────────────────────────────┐
│ Pick #15 - Arvell Reese (LB)    │
│           [ A- ]                │
├─────────────────────────────────┤
│ Value:     A  (Ranked #4,       │
│                picked at #15)   │
│ Need:      A+ (High need at LB) │
│ Fit:       B+ (Premium position)│
│ Round:     A  (Round 1 talent)  │
├─────────────────────────────────┤
│ Overall: 91/100                 │
│ Verdict: Great value pick that  │
│ fills a critical need!          │
└─────────────────────────────────┘
```

### Exporting Grades

Click "Export Report" to download a text file with all grades.

## Data Sources

### Big Board Rankings
- Stored in `bigBoardData` object
- Contains top 100+ prospects
- Includes tier information (Elite, Round 1, Round 2, etc.)

### Team Needs
- Stored in `teamNeedsData` object
- Categorized by high, medium, and low priority
- Updated post-free agency and pre-draft

### EDP (Expected Draft Position)
- Aggregated mock draft data
- Used as fallback when Big Board rank unavailable
- Variance indicates draft range uncertainty

## Customization

### Adding Historical Data

```javascript
historicalDrafts['TeamName'] = [
    { year: 2024, grade: 'A', score: 95, highlight: 'Top Player' },
    // ... more years
];
```

### Adjusting Weights

Modify the weighted calculation in `calculatePickGrade()`:

```javascript
const weightedScore = (
    valueGrade.score * 0.40 +  // Change these weights
    needGrade.score * 0.30 +
    fitGrade.score * 0.20 +
    roundGrade.score * 0.10
);
```

### Adding New Positions

Update the position arrays:

```javascript
const premiumPositions = ['QB', 'EDGE', 'OT', 'CB', 'NEWPOS'];
```

## API Reference

### Global Object: `DraftGradesSystem`

#### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `calculatePickGrade()` | team, pickNumber, player | grade object | Grade for single pick |
| `calculateOverallDraftGrade()` | picks array | grade object | Grade for entire draft |
| `getLetterGrade()` | numericScore | grade object | Convert score to letter |
| `getHistoricalComparison()` | teamName, score | comparison object | Historical context |
| `renderPickGrade()` | grade, size | HTML string | Render grade badge |
| `renderOverallGrade()` | grade, animate | HTML string | Render circular grade |
| `renderGradeBreakdownModal()` | pick | HTML string | Render modal content |
| `openGradeModal()` | pick | - | Show grade breakdown |
| `closeGradeModal()` | - | - | Hide grade modal |
| `exportGradesSummary()` | - | text | Export all grades |

#### Grade Object Structure

```javascript
{
    letter: "A-",
    score: 91,
    color: "#00ff88",
    bgClass: "grade-a-minus",
    breakdown: {
        value: { grade: "A", score: 95, explanation: "..." },
        need: { grade: "A+", score: 98, explanation: "..." },
        fit: { grade: "B+", score: 88, explanation: "..." },
        round: { grade: "A", score: 95, explanation: "..." }
    },
    verdict: "Great value pick that fills a critical need!"
}
```

## Visual Features

### Circular Progress Indicator
- Animated ring showing score percentage
- Color-coded to match grade
- Smooth transitions on load

### Confetti Effect
- Triggered on A+ grades
- Team-colored confetti particles
- 3-second animation

### Hover Interactions
- Grade badges scale on hover
- Tooltips show quick info
- Cards highlight on interaction

### Responsive Design
- Mobile-optimized layouts
- Touch-friendly interactions
- Adaptive typography

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

Potential additions to the system:

1. **Trade Impact Analysis** - Factor in pick trades
2. **Scenario Simulator** - Test different draft outcomes
3. **Consensus Grades** - Compare with expert grades
4. **Grade History** - Track grades over time
5. **Export Formats** - PDF, CSV, JSON export options
6. **Social Sharing** - Share individual pick grades

## Contributing

To modify the grading system:

1. Update algorithm in `draft-grades-system.js`
2. Adjust styles in `css/draft-grades.css`
3. Test with various pick scenarios
4. Verify mobile responsiveness
5. Update this documentation

## License

Part of the 2026 NFL Mock Draft project.

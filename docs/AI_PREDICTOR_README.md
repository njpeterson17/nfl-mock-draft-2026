# 🤖 AI Draft Predictor System

A comprehensive machine learning-style prediction system for NFL mock drafts, providing probability-based predictions with confidence scores, visualizations, and real-time updates.

## Features

### 1. **Prediction Algorithm**
The AI uses a weighted multi-factor algorithm:

| Factor | Weight | Description |
|--------|--------|-------------|
| Team Need | 35% | Team's positional needs from data |
| Player Rank | 25% | Big board ranking vs pick position |
| Positional Value | 15% | Premium positions (QB, EDGE, OT) worth more |
| Scheme Fit | 10% | Player fit with team's defensive scheme |
| Draft Trends | 10% | Expected Draft Position (EDP) data |
| Historical | 5% | Team's draft history tendencies |

### 2. **Views & Interfaces**

#### Full Draft Predictions
- Grid view of all 32 first-round picks
- Top 4 predictions per pick with probability bars
- Confidence badges (High/Medium/Low)
- Trade likelihood indicators

#### Pick-by-Pick Analysis
- Interactive pick selector
- Detailed probability breakdown
- Progress ring confidence visualization
- "Why this pick?" explanation
- Factor breakdown modal

#### Probability Heatmap
- Color-coded grid of players vs picks
- Visual representation of likelihood
- Position predictions by team chart
- Confidence distribution chart

#### Trade Predictor
- Trade likelihood by pick
- Trade-up and trade-down candidates
- Historical trade hotspot identification

#### Model Accuracy
- Historical performance metrics
- Accuracy by position radar chart
- Performance trend over time
- Calibration statistics

### 3. **Interactive Features**

- **Adjustable Weights**: Modify algorithm weights in real-time
- **Prediction Types**: 
  - Balanced (default)
  - Conservative (favors rankings)
  - Upset Special (predicts surprises)
  - Need-Based (prioritizes team needs)
  - BPA (Best Player Available)

### 4. **Integration Features**

The AI Predictor integrates with the main mock draft through:
- Prediction badges on pick cards
- Hover tooltips with top 3 predictions
- Quick link to full analysis
- Real-time updates as draft progresses

## File Structure

```
nfl-mock-draft-2026/
├── ai-draft-predictor.html      # Main AI Predictor page
├── css/
│   └── ai-predictor.css         # Styles for AI components
├── js/
│   ├── ai-predictor-integration.js  # Main page integration
│   └── data.js                  # Shared data (team needs, players)
└── AI_PREDICTOR_README.md       # This file
```

## Usage

### Accessing the AI Predictor

1. **Standalone Page**: Navigate to `ai-draft-predictor.html`
2. **From Main Mock**: Click the "AI Predictor" tab in the navigation
3. **From Pick Cards**: Click the AI badge on any pick card

### Using the Predictor

1. **Select a View**: Choose from Full Draft, Single Pick, Heatmap, Trades, or Accuracy
2. **Adjust Settings**: Modify weights or select prediction type
3. **View Predictions**: See probability percentages for each player
4. **Deep Dive**: Click any prediction to see factor breakdown

### Reading the Predictions

- **🟢 High Confidence (70%+)**: Strong prediction, likely outcome
- **🟡 Medium Confidence (40-70%)**: Competitive pick, multiple options
- **🔴 Low Confidence (<40%)**: Uncertain, trade or surprise likely

## Algorithm Details

### Position Values
```javascript
{
  'QB': 1.40,      // Premium
  'EDGE': 1.25,    // High value
  'OT': 1.20,      // High value
  'CB': 1.15,      // Above average
  'WR': 1.10,      // Above average
  'DL': 1.05,      // Slight premium
  'S': 1.00,       // Average
  'LB': 0.95,      // Slight discount
  'IOL': 0.90,     // Below average
  'TE': 0.90,      // Below average
  'RB': 0.80       // Depressed value
}
```

### Confidence Calculation
```javascript
// Top probability vs second probability gap
if (topProb >= 50% || gap >= 30%) => HIGH
if (topProb >= 30% || gap >= 15%) => MEDIUM
else => LOW
```

### Trade Likelihood Factors
- QB-needy teams at non-QB picks (+25%)
- Teams with multiple first rounders (+15%)
- Historical trade hotspots: picks 5, 10, 15, 20, 25 (+10%)
- Pick value drop-offs: picks 6, 15, 25, 35 (+10%)

## API / Data Integration

The AI Predictor uses data from:
- `draftOrder`: Team pick order
- `availablePlayers`: Player pool with attributes
- `bigBoardData`: Player rankings and grades
- `teamDraftsData`: Team needs and picks
- `positionalRankings`: Position-specific rankings
- `edpData`: Expected Draft Position data

### Adding Custom Data

To add your own predictions or modify the algorithm:

```javascript
// Override weights
DraftPredictorAI.weights = {
    teamNeed: 0.40,
    playerRank: 0.30,
    positionalValue: 0.15,
    schemeFit: 0.10,
    draftTrends: 0.03,
    historical: 0.02
};

// Recalculate
DraftPredictorAI.predictAllPicks();
```

## Customization

### Theme Colors
Edit CSS variables in `ai-predictor.css`:
```css
:root {
    --ai-cyan: #00d4ff;
    --ai-purple: #a855f7;
    --ai-green: #22c55e;
    --ai-yellow: #f59e0b;
    --ai-red: #ef4444;
}
```

### Prediction Display
Modify the number of predictions shown:
```javascript
// In DraftPredictorAI.predictPick()
return predictions.slice(0, N); // Show top N predictions
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Initial load: ~1.5s (with loading animation)
- Recalculation: ~100ms for all 32 picks
- Memory usage: ~5MB for prediction cache

## Future Enhancements

Potential improvements:
- [ ] Machine learning model training on historical drafts
- [ ] Real-time Twitter/sentiment analysis
- [ ] User prediction tracking and leaderboards
- [ ] Export predictions as JSON/CSV
- [ ] Mobile app integration
- [ ] WebSocket updates for live drafts

## Credits

- EDP data based on aggregated mock draft analysis
- Position values derived from historical NFL draft data
- Algorithm inspired by ESPN Draft Day Predictor and Grinding the Mocks

---

For questions or issues, please refer to the main project documentation.

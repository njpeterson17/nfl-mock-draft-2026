# 🏈 NFL Mock Draft 2026 - Team Logo System

A comprehensive SVG logo system for NFL teams and college programs, designed for the NFL Mock Draft website.

## Features

- ✅ **32 NFL Team Logos** - Complete AFC & NFC coverage
- ✅ **25+ College Programs** - Top draft prospect schools
- ✅ **Scalable SVG Format** - Crisp at any size
- ✅ **Fallback System** - Auto-generates logos for unknown teams
- ✅ **Team Colors** - Primary, secondary, text, and accent colors
- ✅ **Name Normalization** - Handles variations ("KC" → "chiefs")
- ✅ **Helmet SVGs** - Multiple styles available
- ✅ **Dark Mode Support** - Automatic and manual dark mode
- ✅ **Animations** - Pop, bounce, pulse effects
- ✅ **Accessibility** - Reduced motion support, focus states

## Quick Start

### 1. Include Files

```html
<link rel="stylesheet" href="team-logo-system.css">
<script src="team-logo-system.js"></script>
```

### 2. Auto-Initialize from HTML

```html
<!-- Add data attributes -->
<div data-team="chiefs" data-size="64"></div>
<div data-team="alabama" data-size="48" data-animate="true"></div>

<!-- Logos auto-render on page load -->
```

### 3. Programmatic Usage

```javascript
// Get logo HTML
const logoHtml = TeamLogoSystem.getLogo('chiefs', 64);

// Get raw SVG
const svgContent = TeamLogoSystem.getLogoSvg('chiefs');

// Get team colors
const colors = TeamLogoSystem.getColors('chiefs');
// Returns: { primary: '#E31837', secondary: '#FFB81C', text: '#FFFFFF', accent: '#FFFFFF' }

// Get helmet SVG
const helmet = TeamLogoSystem.getHelmet('chiefs', 'detailed');
```

## API Reference

### Core Functions

#### `getLogo(teamName, size = 50)`
Returns complete logo HTML with wrapper div.

```javascript
TeamLogoSystem.getLogo('chiefs', 64);
TeamLogoSystem.getLogo('alabama', 48);
TeamLogoSystem.getLogo('Kansas City Chiefs', 64); // Auto-normalizes
```

#### `getLogoSvg(teamName)`
Returns raw SVG content only.

```javascript
const svg = TeamLogoSystem.getLogoSvg('chiefs');
// Use in your own wrappers
```

#### `getColors(teamName)`
Returns team brand colors.

```javascript
const colors = TeamLogoSystem.getColors('chiefs');
// { primary: '#E31837', secondary: '#FFB81C', text: '#FFFFFF', accent: '#FFFFFF' }
```

#### `getHelmet(teamName, style = 'detailed')`
Returns helmet SVG. Styles: `'standard'`, `'detailed'`, `'sideProfile'`

```javascript
const helmet = TeamLogoSystem.getHelmet('chiefs', 'detailed');
```

#### `normalizeName(teamName)`
Normalizes various name formats to internal key.

```javascript
TeamLogoSystem.normalizeName('KC');           // 'chiefs'
TeamLogoSystem.normalizeName('kansas city');  // 'chiefs'
TeamLogoSystem.normalizeName('Kansas City Chiefs'); // 'chiefs'
TeamLogoSystem.normalizeName('bama');         // 'alabama'
```

#### `hasLogo(teamName)`
Check if a logo exists in the system.

```javascript
TeamLogoSystem.hasLogo('chiefs');     // true
TeamLogoSystem.hasLogo('unknown');    // false (will use fallback)
```

### DOM Helpers

#### `initialize(container = document)`
Auto-initialize all `[data-team]` elements.

```javascript
// Auto-runs on DOM ready
// Or manually:
TeamLogoSystem.initialize();
TeamLogoSystem.initialize(document.getElementById('my-container'));
```

#### `createElement(teamName, options)`
Create logo element programmatically.

```javascript
const logo = TeamLogoSystem.createElement('chiefs', {
  size: 64,
  className: 'my-logo',
  animate: true,
  title: 'Kansas City Chiefs',
  clickHandler: () => console.log('Clicked!')
});
document.body.appendChild(logo);
```

#### `updateLogo(element, teamName, size)`
Update an existing logo element.

```javascript
const el = document.getElementById('team-logo');
TeamLogoSystem.updateLogo(el, 'chiefs', 64);
```

## Size Variants

| Size | Usage |
|------|-------|
| 24px | Ticker items, small badges |
| 32px | Rankings, compact lists |
| 48px | Standard cards, picks |
| 64px | Featured cards, headers |
| 96px | Team pages, hero sections |
| 128px | Large displays, print |

## Supported NFL Teams (32)

### AFC East
- `bills` - Buffalo Bills
- `dolphins` - Miami Dolphins
- `jets` - New York Jets
- `patriots` - New England Patriots

### AFC North
- `ravens` - Baltimore Ravens
- `bengals` - Cincinnati Bengals
- `browns` - Cleveland Browns
- `steelers` - Pittsburgh Steelers

### AFC South
- `texans` - Houston Texans
- `colts` - Indianapolis Colts
- `jaguars` - Jacksonville Jaguars
- `titans` - Tennessee Titans

### AFC West
- `broncos` - Denver Broncos
- `chiefs` - Kansas City Chiefs
- `raiders` - Las Vegas Raiders
- `chargers` - Los Angeles Chargers

### NFC East
- `cowboys` - Dallas Cowboys
- `giants` - New York Giants
- `eagles` - Philadelphia Eagles
- `commanders` - Washington Commanders

### NFC North
- `bears` - Chicago Bears
- `lions` - Detroit Lions
- `packers` - Green Bay Packers
- `vikings` - Minnesota Vikings

### NFC South
- `falcons` - Atlanta Falcons
- `panthers` - Carolina Panthers
- `saints` - New Orleans Saints
- `buccaneers` - Tampa Bay Buccaneers

### NFC West
- `cardinals` - Arizona Cardinals
- `rams` - Los Angeles Rams
- `fortyNiners` - San Francisco 49ers
- `seahawks` - Seattle Seahawks

## Supported College Teams (25+)

### SEC
- `alabama` - Alabama Crimson Tide
- `georgia` - Georgia Bulldogs
- `lsu` - LSU Tigers
- `oleMiss` - Ole Miss Rebels
- `texasAM` - Texas A&M Aggies
- `tennessee` - Tennessee Volunteers
- `missouri` - Missouri Tigers
- `auburn` - Auburn Tigers
- `florida` - Florida Gators

### Big Ten
- `ohioState` - Ohio State Buckeyes
- `indiana` - Indiana Hoosiers
- `pennState` - Penn State Nittany Lions
- `oregon` - Oregon Ducks
- `michigan` - Michigan Wolverines
- `iowa` - Iowa Hawkeyes

### ACC
- `notreDame` - Notre Dame Fighting Irish
- `miami` - Miami Hurricanes
- `floridaState` - Florida State Seminoles
- `clemson` - Clemson Tigers

### Big 12
- `texas` - Texas Longhorns
- `oklahoma` - Oklahoma Sooners

### Pac-12 & Others
- `usc` - USC Trojans
- `ucla` - UCLA Bruins
- `utah` - Utah Utes
- `arizonaState` - Arizona State Sun Devils
- `boiseState` - Boise State Broncos

## Name Normalization

The system recognizes many variations:

```javascript
// NFL examples
'KC', 'kan', 'kansas city', 'Kansas City Chiefs' → 'chiefs'
'NYG', 'new york giants', 'giants' → 'giants'
'SF', '49ers', 'san francisco', 'san francisco 49ers' → 'fortyNiners'

// College examples
'bama', 'crimson tide', 'alabama crimson tide' → 'alabama'
'osu', 'ohio state', 'buckeyes' → 'ohioState'
'fsu', 'noles', 'seminoles' → 'floridaState'
```

## CSS Classes

### Logo Modifiers

```html
<!-- Sizes -->
<div class="team-logo team-logo--xs">...</div>   <!-- 24px -->
<div class="team-logo team-logo--sm">...</div>   <!-- 32px -->
<div class="team-logo team-logo--md">...</div>   <!-- 48px -->
<div class="team-logo team-logo--lg">...</div>   <!-- 64px -->
<div class="team-logo team-logo--xl">...</div>   <!-- 96px -->
<div class="team-logo team-logo--2xl">...</div>  <!-- 128px -->

<!-- Animations -->
<div class="team-logo team-logo--animate">...</div>  <!-- Pop in -->
<div class="team-logo team-logo--bounce">...</div>   <!-- Bounce -->
<div class="team-logo team-logo--pulse">...</div>    <!-- Pulse -->
<div class="team-logo team-logo--spin">...</div>     <!-- Spin on hover -->

<!-- States -->
<div class="team-logo team-logo--loading">...</div>  <!-- Loading shimmer -->
<div class="team-logo team-logo--error">...</div>    <!-- Error state -->
```

## Integration Examples

### Pick Card

```html
<div class="pick-card">
  <div data-team="chiefs" data-size="64" class="pick-card__team-logo"></div>
  <div class="pick-number">Round 1, Pick 32</div>
  <div class="player-name">Player Name</div>
</div>
```

### Draft Ticker

```html
<div class="draft-ticker">
  <div class="ticker-item">
    <div data-team="jaguars" data-size="28"></div>
    <div class="info">
      <div class="pick">1.01</div>
      <div class="player">Abdul Carter</div>
    </div>
  </div>
</div>
```

### War Room

```html
<div class="war-room__team-header" style="--team-primary: #E31837; --team-secondary: #FFB81C;">
  <div data-team="chiefs" data-size="64" class="war-room__team-logo"></div>
  <h3 class="war-room__team-name">Kansas City Chiefs</h3>
</div>
```

### Position Rankings

```html
<div class="ranking-row">
  <span class="rank">1</span>
  <div data-team="texas" data-size="32" class="rankings__team-logo"></div>
  <div class="player-info">
    <div class="player-name">Colin Simmons</div>
    <div class="school">Texas</div>
  </div>
</div>
```

## Fallback System

When a team isn't in the database, the system generates a fallback logo:

```javascript
// Unknown team
TeamLogoSystem.getLogo('Northwestern Wildcats', 64);
// Generates: Gradient circle with "NW" initials in team colors
```

The fallback:
- Uses hash-based colors for consistency
- Extracts initials from team name
- Maintains same styling as official logos

## Dark Mode

Automatically adapts to `prefers-color-scheme: dark`:

```css
/* Or manually with class */
.dark-mode .team-logo {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

## File Structure

```
nfl-mock-draft-2026/
├── team-logo-system.js      # Core JavaScript
├── team-logo-system.css     # Styles
├── team-logo-demo.html      # Interactive demo
└── TEAM_LOGO_README.md      # This file
```

## Performance Tips

1. **Use appropriate sizes** - Don't render 128px logos when 32px will do
2. **Lazy load offscreen** - Use Intersection Observer for long lists
3. **Cache colors** - Store `getColors()` results if used repeatedly
4. **Batch initialization** - Call `initialize()` once after DOM updates

## License

Part of NFL Mock Draft 2026 project.

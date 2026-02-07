# Visual Fallback System

A comprehensive team logo and player initials fallback system for the NFL Mock Draft website. Provides professional visual fallbacks when player photos aren't available.

## Features

- **100+ College Team Logos** - Complete coverage of Power 5, Group of 5, and FCS schools
- **32 NFL Team Logos** - All current NFL team logos with alternative name support
- **Position-Based Colors** - 15+ unique color schemes for instant position recognition
- **SVG Initials Generator** - Premium-looking initials cards as ultimate fallback
- **Smart Fallback Chain** - Photo → Team Logo → Initials → Position Placeholder
- **Dark Mode Support** - Automatic and manual dark mode support
- **Responsive Design** - Works on all screen sizes
- **Performance Optimized** - LRU cache, lazy loading, and batch preloading
- **Accessibility** - Keyboard navigation, reduced motion support, high contrast mode

## Quick Start

### Basic Usage

```html
<!-- Include files -->
<link rel="stylesheet" href="css/visual-fallback-system.css">
<script src="js/visual-fallback-system.js"></script>
```

```javascript
// Create a player visual card
const player = {
  name: 'Fernando Mendoza',
  position: 'QB',
  school: 'Indiana'
};

const cardHtml = await VisualFallbackSystem.createSmartPlayerVisual(player);
document.getElementById('player-card').innerHTML = cardHtml;
```

### Generate Initials Card

```javascript
const initialsData = InitialsGenerator.generate('Fernando Mendoza', 'QB');
// Returns:
// {
//   initials: 'FM',
//   colors: { bg: '#FFD700', text: '#000000', ... },
//   svgUrl: 'data:image/svg+xml;base64,...',
//   cssClass: 'position-qb'
// }
```

### Create Player Grid

```javascript
const players = [
  { name: 'Carnell Tate', position: 'WR', school: 'Ohio State' },
  { name: 'Julian Lewis', position: 'QB', school: 'Colorado' },
  // ... more players
];

const gridHtml = await VisualFallbackSystem.renderPlayerGrid(players, {
  columns: 4,
  gap: '20px'
});
document.getElementById('player-grid').innerHTML = gridHtml;
```

## API Reference

### VisualFallbackSystem

#### `createSmartPlayerVisual(player, options)`
Creates a smart player visual with automatic fallback chain.

**Parameters:**
- `player` (Object): Player data with `name`, `position`, and optional `school`
- `options` (Object):
  - `preferTeamLogo` (boolean): Try team logo first (default: true)
  - `showInitials` (boolean): Allow initials fallback (default: true)
  - `size` (string): 'small', 'medium', or 'large' (default: 'medium')
  - `showPosition` (boolean): Show position badge (default: true)
  - `interactive` (boolean): Enable hover effects (default: true)

**Returns:** Promise<string> - HTML string

#### `getSchoolLogo(schoolName)`
Gets the logo URL for a school with caching.

**Returns:** Promise<string|null>

#### `createNFLTeamLogoCard(teamName, options)`
Creates an NFL team logo card.

**Returns:** string|null

#### `renderPlayerGrid(players, options)`
Renders a responsive grid of player visuals.

**Parameters:**
- `players` (Array): Array of player objects
- `options` (Object):
  - `columns` (number): Grid columns (default: 4)
  - `gap` (string): Gap between cards (default: '16px')
  - Other options passed to `createSmartPlayerVisual`

### InitialsGenerator

#### `generate(name, position)`
Generates initials card data.

**Returns:** Object with `initials`, `colors`, `svgUrl`, `cssClass`

#### `getInitials(name)`
Extracts 2-letter initials from a full name.

#### `createSVG(initials, position, colors, options)`
Creates an SVG data URL for the initials card.

### Utilities

#### `preloadSchoolLogos(schoolNames)`
Preloads a batch of school logos for better performance.

```javascript
await preloadSchoolLogos(['Ohio State', 'Alabama', 'Georgia']);
```

#### `getAllSchools()`
Returns all school names in the database.

#### `getAllNFLTeams()`
Returns all NFL team names.

#### `searchSchools(query)`
Search schools by name (returns top 10 matches).

### Data Objects

```javascript
// College team logos
CollegeTeamLogos['Ohio State'] // → 'https://a.espncdn.com/i/teamlogos/ncaa/500/194.png'

// NFL team logos  
NFLTeamLogos['Raiders']        // → 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png'

// Position colors
PositionColors['QB']           // → { bg: '#FFD700', text: '#000000', ... }
```

## Position Colors

| Position | Color | Hex |
|----------|-------|-----|
| QB | Gold | #FFD700 |
| RB | Red | #FF6B6B |
| WR | Teal | #4ECDC4 |
| TE | Mint | #95E1D3 |
| OT | Salmon | #F38181 |
| IOL | Purple | #AA96DA |
| EDGE | Pink | #FCBAD3 |
| DL | Yellow | #FFFFD2 |
| LB | Green | #A8E6CF |
| CB | Orange | #FFD3B6 |
| S | Lime | #DCEDC1 |
| K | Light Purple | #E9D5FF |
| P | Pale Purple | #F3E8FF |
| Default | Cyan | #00D4FF |

## CSS Classes

### Card Modifiers
- `.player-visual-card--small` - 80x100px
- `.player-visual-card--medium` - 120x150px (default)
- `.player-visual-card--large` - 160x200px
- `.player-visual-card--interactive` - Enable hover effects
- `.player-visual-card--loading` - Loading state
- `.player-visual-card--error` - Error state

### Position Classes
Each position has an auto-assigned class:
- `.position-qb`, `.position-rb`, `.position-wr`, etc.

These set CSS custom properties:
- `--pos-color` - Primary position color
- `--pos-color-dark` - Dark variant for gradients
- `--pos-text` - Text color (black or white)

## Included Schools

### Power 5 - Big Ten (18)
Ohio State, Indiana, Penn State, Michigan, Oregon, Washington, USC, UCLA, Wisconsin, Iowa, Nebraska, Minnesota, Maryland, Rutgers, Purdue, Illinois, Northwestern, Michigan State

### Power 5 - SEC (16)
Alabama, Georgia, Auburn, Florida, LSU, Tennessee, Kentucky, Missouri, Ole Miss, Mississippi State, Arkansas, South Carolina, Vanderbilt, Texas, Oklahoma, Texas A&M

### Power 5 - ACC (16)
Clemson, Florida State, Miami, North Carolina, NC State, Duke, Pittsburgh, Virginia Tech, Virginia, Wake Forest, Boston College, Syracuse, Georgia Tech, Louisville, SMU, California, Stanford

### Power 5 - Big 12 (16)
West Virginia, Kansas State, Kansas, Iowa State, Oklahoma State, TCU, Baylor, Texas Tech, UCF, Cincinnati, BYU, Houston, Colorado, Arizona, Arizona State, Utah

### Power 5 - Pac-12 (2)
Washington State, Oregon State

### Independent
Notre Dame

### Group of 5 (35+)
Boise State, North Dakota State, South Dakota State, Coastal Carolina, Appalachian State, Liberty, James Madison, Troy, Tulane, Memphis, and more...

### Additional FBS (15+)
Florida Atlantic, Charlotte, Old Dominion, Middle Tennessee, New Mexico, Wyoming, Colorado State, and more...

### FCS & Ivy League (20+)
Harvard, Yale, Princeton, Eastern Washington, North Dakota State, Montana, and more...

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- All modern mobile browsers

## Demo

Open `visual-fallback-demo.html` in a browser to see the full showcase of features.

## License

Part of the NFL Mock Draft 2026 project.

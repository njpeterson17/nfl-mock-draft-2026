# Player Image System - NFL Mock Draft 2026

A comprehensive image loading system for the NFL Mock Draft website with local image support, external URL fallbacks, and beautiful CSS-based placeholders.

## Overview

- **184+ prospects** in the database
- **66 local images** available
- **Top 100 prospects** mapped with external image URLs (ESPN, CBS)
- **Smart fallback chain**: Local → ESPN → CBS → Team Colors → Initials
- **Caching** for performance
- **Lazy loading** with IntersectionObserver
- **Beautiful placeholders** when no image is available

## Files

### Core Files

| File | Purpose |
|------|---------|
| `js/player-image-database.js` | Complete database of top 100 prospects with image URLs |
| `js/player-image-loader.js` | Smart image loader with caching and fallbacks |
| `js/player-image-integration.js` | Easy-to-use integration API |
| `js/index-image-integration.js` | Automatic upgrade for existing index.html photos |
| `css/player-images.css` | Base image container styles |
| `css/player-initials.css` | Beautiful CSS-based placeholder styles |
| `player-image-demo.html` | Interactive demo page |

## Quick Start

### 1. Include Required Files

Add to your HTML `<head>`:
```html
<link rel="stylesheet" href="css/player-images.css">
<link rel="stylesheet" href="css/player-initials.css">
```

Add before closing `</body>`:
```html
<script src="js/player-image-database.js"></script>
<script src="js/player-image-loader.js"></script>
<script src="js/player-image-integration.js"></script>
```

### 2. Basic Usage

**HTML with data attributes (auto-loads):**
```html
<div class="player-photo" 
     data-player-name="Fernando Mendoza" 
     data-player-position="QB" 
     data-player-school="Indiana">
</div>
```

**JavaScript loading:**
```javascript
// Load into existing container
loadPlayerImage('containerId', 'Fernando Mendoza', 'QB', 'Indiana');

// Or use the loader directly
playerImageLoader.load(container, 'Caleb Downs', 'S', 'Ohio State');
```

**Create new element:**
```javascript
const photo = createPlayerPhoto({
    name: 'Caleb Downs',
    position: 'S',
    school: 'Ohio State'
}, { size: 'large' });
document.body.appendChild(photo);
```

## Database Structure

### Player Image Data

```javascript
{
    "Fernando Mendoza": {
        rank: 1,
        position: "QB",
        school: "Indiana",
        local: "images/players/fernando-mendoza.jpg",
        espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431460.png",
        cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843907.jpg",
        hasLocal: true,
        teamColorKey: "indiana"
    }
}
```

### Team Colors

```javascript
{
    alabama: { primary: '#9E1B32', secondary: '#828A8F', name: 'Alabama' },
    ohioState: { primary: '#BB0000', secondary: '#666666', name: 'Ohio State' },
    // ... 100+ teams
}
```

## Size Variants

| Class | Dimensions | Use Case |
|-------|------------|----------|
| `.small` | 60x75px | Tables, lists |
| `.medium` (default) | 80x100px | Pick cards |
| `.large` | 120x150px | Featured picks |
| `.xlarge` | 160x200px | Player profiles |

```html
<div class="player-photo small" ...></div>
<div class="player-photo medium" ...></div>
<div class="player-photo large" ...></div>
<div class="player-photo xlarge" ...></div>
```

## Position-Based Colors

When no image is available, initials placeholders use position-based colors:

| Position | Color |
|----------|-------|
| QB | Blue (#00d4ff) |
| RB | Red (#ff6b6b) |
| WR | Green (#51cf66) |
| TE | Gold (#ffd43b) |
| OT | Light Blue (#74c0fc) |
| IOL | Purple (#da77f2) |
| EDGE | Pink (#ff8787) |
| DL | Teal (#63e6be) |
| LB | Orange (#ffc078) |
| CB | Indigo (#91a7ff) |
| S | Light Green (#b2f2bb) |

## API Reference

### PlayerImageDatabase

```javascript
// Get player data
const data = PlayerImageDatabase.get('Fernando Mendoza');

// Check if player exists
const exists = PlayerImageDatabase.has('Player Name');

// Get all players
const all = PlayerImageDatabase.getAll();

// Get by position
const qbs = PlayerImageDatabase.getByPosition('QB');

// Get by school
const ohioState = PlayerImageDatabase.getBySchool('Ohio State');

// Get team colors
const colors = PlayerImageDatabase.getTeamColors('ohioState');
const colorsBySchool = PlayerImageDatabase.getTeamColorsBySchool('Ohio State');

// Get image sources
const sources = PlayerImageDatabase.getImageSources('Fernando Mendoza');
// Returns: [{type: 'local', url: '...'}, {type: 'espn', url: '...'}]

// Search players
const results = PlayerImageDatabase.search('Caleb');

// Get stats
const stats = PlayerImageDatabase.getStats();
// { total: 100, withLocal: 27, withESPN: 89, withCBS: 15, byPosition: {...} }
```

### PlayerImageLoader

```javascript
// Load image into container
await playerImageLoader.load(container, name, position, school);

// Load with options
await playerImageLoader.loadPlayerImage(name, position, school);

// Batch load
await playerImageLoader.batchLoad(containers);

// Preload specific players
await playerImageLoader.preload(['Player 1', 'Player 2']);

// Observe for lazy loading
playerImageLoader.observe(container);

// Get stats
const stats = playerImageLoader.getStats();
// { cached: 42, failed: 3 }

// Clear cache
playerImageLoader.clearCache();
```

### Convenience Functions

```javascript
// Load image into container by ID
loadPlayerImage('containerId', name, position, school);

// Create player photo element
createPlayerPhoto(player, { size: 'large', showPosition: true });

// Refresh all images on page
refreshPlayerImages();

// Get database stats
getImageDatabaseStats();

// Get React/Vue props
getPlayerPhotoProps(player);
// Returns: { src, alt, fallback }
```

## Demo Page

Open `player-image-demo.html` in your browser to see:
- Database statistics
- All size variants
- Local vs external images
- Position-based placeholders
- Team color examples
- Loading states
- Usage examples

## Integration with Existing Pages

### For index.html

Add this script after the other image scripts:
```html
<script src="js/index-image-integration.js"></script>
```

This automatically:
1. Detects existing `.player-photo` elements
2. Upgrades them with better image sources
3. Falls back to initials placeholders
4. Works with dynamically added picks

### Manual Integration

```javascript
// Upgrade specific container
const container = document.querySelector('.player-photo');
playerImageLoader.load(container, 'Player Name', 'QB', 'School');

// Upgrade all photos on page
PlayerImageIntegration.refreshAll();

// Create and insert new photo
const photo = PlayerImageIntegration.createPlayerPhoto({
    name: 'New Player',
    position: 'WR',
    school: 'Alabama'
}, { size: 'medium' });
document.querySelector('.pick-content').prepend(photo);
```

## Performance

- **Lazy loading**: Images load only when scrolled into view
- **Caching**: Loaded images cached in memory to prevent duplicate requests
- **Batch loading**: Process multiple images efficiently
- **Timeout handling**: Failed images tracked to avoid repeated attempts
- **Debounced updates**: Mutation observer debounced for performance

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12.1+
- Edge 79+

Requires:
- IntersectionObserver (polyfill available)
- ES6 (const, let, arrow functions, template literals)

## Adding New Players

Edit `js/player-image-database.js` and add to `playerImageData`:

```javascript
"New Player Name": {
    rank: 101,
    position: "QB",
    school: "School Name",
    local: "images/players/new-player.jpg", // or null
    espn: "https://a.espncdn.com/i/headshots/college-football/players/full/XXXXXXX.png",
    cbs: null, // optional
    hasLocal: false,
    teamColorKey: "schoolKey"
}
```

## Adding Team Colors

Edit `js/player-image-database.js` and add to `teamColors`:

```javascript
newSchool: { 
    primary: '#primaryColor', 
    secondary: '#secondaryColor', 
    name: 'School Name' 
}
```

## Troubleshooting

### Images not loading
1. Check browser console for errors
2. Verify database has player entry
3. Check network tab for failed requests
4. Ensure player name matches exactly

### Placeholders showing instead of images
- This is expected if no local/external image is available
- The system gracefully falls back to initials placeholders

### CORS issues with external images
- ESPN and CBS images may have CORS restrictions
- The system handles this by falling back to next source
- Consider using a CORS proxy if needed

## License

Part of NFL Mock Draft 2026 project.

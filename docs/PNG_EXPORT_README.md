# NFL Mock Draft 2026 - PNG Export System

## Overview

A comprehensive PNG export system that allows users to export their mock drafts as beautiful, shareable images optimized for social media.

## Features

### Export Types
- **Full Draft** - All 3 rounds in a clean, scrollable format
- **First Round Only** - Just the first 32 picks (great for Twitter)
- **Team's Picks Only** - All picks for a selected team
- **Single Pick Card** - Individual pick export
- **Big Board** - Top prospects ranking
- **Current View** - Whatever is currently displayed

### Export Options
- ✅ Include team logos
- ✅ Include player photos  
- ✅ Include draft grades
- ✅ Dark/light background themes
- ✅ Multiple social media formats (Twitter, Facebook, Instagram, Standard)

### Social Media Optimization
- **Twitter/X**: 1200×675 pixels
- **Facebook**: 1200×630 pixels
- **Instagram**: 1080×1080 pixels
- **Standard**: 1200×800 pixels

## File Structure

```
nfl-mock-draft-2026/
├── css/
│   └── png-export.css          # Styles for modal, preview, and UI
├── js/
│   └── png-export.js           # Main export functionality
└── index.html                  # Includes PNG export CSS and JS
```

## Main Functions

### Primary Export Functions

```javascript
// Main export function with options
exportMockToPNG(options)

// Quick export functions
exportPickCardToPNG(pickNumber)
exportFullDraftToPNG()
exportBigBoardToPNG()

// Modal UI
openPNGExportModal()
closePNGExportModal()
```

### Options Object

```javascript
{
    type: 'full' | 'firstRound' | 'team' | 'pick' | 'bigBoard' | 'current',
    team: 'TeamName',           // For team exports
    pickNumber: 1,              // For single pick export
    includeLogos: true,
    includePhotos: true,
    includeGrades: true,
    darkBackground: false,
    format: 'twitter' | 'facebook' | 'instagram' | 'standard'
}
```

## Usage Examples

### Export Full Draft
```javascript
await exportMockToPNG({
    type: 'full',
    format: 'twitter',
    darkBackground: true
});
```

### Export Team's Picks
```javascript
await exportMockToPNG({
    type: 'team',
    team: 'Raiders',
    includeLogos: true,
    includePhotos: true
});
```

### Export Single Pick
```javascript
await exportPickCardToPNG(1);  // Export pick #1
```

## UI Integration

### Export Bar Button
A dedicated PNG export button is added to the export bar for quick access:

```html
<button class="export-btn" onclick="openPNGExportModal()">
    <i class="fas fa-image"></i> PNG
</button>
```

### Export Modal Integration
PNG export option is added to the existing export modal:

```html
<div class="export-option" onclick="openPNGExportModal(); closeExportModal();">
    <div class="export-option-icon">
        <i class="fas fa-image"></i>
    </div>
    <div class="export-option-content">
        <div class="export-option-title">Export as PNG Image</div>
        <div class="export-option-desc">Create beautiful images for social media sharing</div>
    </div>
</div>
```

### Right-Click Context Menu
Users can right-click on any pick card to:
- Export as PNG
- Share on Twitter
- Copy Link
- View Details

## File Naming Convention

Exported files follow these naming patterns:
- Full Draft: `NFL-Mock-Draft-2026-Full-YYYY-MM-DD.png`
- First Round: `First-Round-Mock-2026-YYYY-MM-DD.png`
- Team: `NFL-Mock-Draft-2026-[Team]-YYYY-MM-DD.png`
- Single Pick: `Pick-[#]-Mock-2026-YYYY-MM-DD.png`
- Big Board: `Big-Board-2026-YYYY-MM-DD.png`

## Technical Details

### Dependencies
- **html2canvas** (v1.4.1) - Already included in index.html
- Uses existing site fonts (Inter, Oswald)
- Integrates with existing theme system (dark/light mode)

### Image Processing
- CORS handling for player photos
- Image preloading before capture
- High-quality scaling (2x) for crisp output
- Automatic cleanup of temporary DOM elements

### Performance
- Lazy loading for export modal
- Efficient canvas generation
- Image caching for repeated exports

## Branding

All exported images include:
- Site branding: `NFLMockDraft2026.com`
- Football emoji logo
- Hashtags: `#NFLMockDraft #2026NFLDraft`
- Generation date

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Keyboard navigation support (Escape to close)
- Screen reader friendly labels
- Reduced motion support
- High contrast mode compatible

## Future Enhancements

Potential additions:
- Custom watermark options
- More social media formats (LinkedIn, TikTok)
- Animated GIF export
- Batch export multiple picks
- Custom color schemes
- User-defined templates

## Troubleshooting

### Common Issues

1. **Images not loading in export**
   - Check CORS settings on image server
   - Ensure images are fully loaded before export

2. **Canvas security error**
   - Some player photos may be blocked due to CORS
   - System falls back to placeholder images

3. **Large file sizes**
   - Exported PNGs can be large due to high quality
   - Consider using external tools for compression

### Debug Mode

Enable console logging:
```javascript
PNGExportConfig.debug = true;
```

## Credits

- Built with [html2canvas](https://html2canvas.hertzen.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

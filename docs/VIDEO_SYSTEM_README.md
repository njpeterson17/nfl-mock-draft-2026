# YouTube Highlight Video Integration System

A comprehensive video highlight system for the 2026 NFL Mock Draft website, featuring YouTube integration, player video playlists, analytics tracking, and mobile-optimized viewing.

## Features

### Video Player Modal
- **YouTube iframe embed** with enhanced privacy mode (nocookie domain)
- **16:9 responsive aspect ratio** that adapts to all screen sizes
- **Lazy loading** - iframe only loads when user clicks play
- **Cinema mode** for immersive full-screen viewing
- **Playlist sidebar** showing all player videos
- **Smart recommendations** for related players

### Video Data Structure
```javascript
const playerVideos = {
  "Fernando Mendoza": {
    mainHighlight: "youtube-video-id",
    playlist: [
      { id: "video1", title: "2025 Season Highlights", duration: "8:42" },
      { id: "video2", title: "vs Ohio State", duration: "4:15" },
      { id: "video3", title: "NFL Draft Profile", duration: "6:30" }
    ],
    stats: {
      views: "1.2M",
      likes: "45K",
      channel: "Indiana Football",
      videoCount: 3
    },
    position: "QB",
    school: "Indiana"
  }
};
```

### Video Triggers
Multiple ways to access player videos:
1. **Play button overlay** on player card hover
2. **"Watch Highlights"** button in player info section
3. **Keyboard shortcut 'V'** when hovering over player
4. **Big Board video column** play buttons
5. **Context menu** (right-click) on player cards

### Analytics Tracking
Track video engagement with local storage:
```javascript
videoAnalytics.trackPlay(playerName, videoId);
videoAnalytics.trackComplete(playerName, videoId);
videoAnalytics.getMostWatchedVideos(10);
videoAnalytics.getTrendingVideos(10);
videoAnalytics.getWatchTimeByPosition();
```

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `V` | Open video for hovered player |
| `F` | Toggle fullscreen |
| `M` | Mute/unmute |
| `Space` | Play/pause |
| `→` | Skip forward 10 seconds |
| `←` | Skip backward 10 seconds |
| `N` | Next video in playlist |
| `P` | Previous video |
| `ESC` | Close player |

## File Structure

```
nfl-mock-draft-2026/
├── css/
│   └── youtube-videos.css      # Video player styles
├── js/
│   └── youtube-videos.js       # Video system functionality
├── video-system-demo.html      # Interactive demo page
└── VIDEO_SYSTEM_README.md      # This documentation
```

## Installation

### 1. Include Files

Add CSS to your HTML `<head>`:
```html
<link rel="stylesheet" href="css/youtube-videos.css">
```

Add JavaScript before closing `</body>`:
```html
<script src="js/youtube-videos.js"></script>
```

### 2. Update index.html

The system has already been integrated into `index.html` with:
- CSS link added in the head section
- JavaScript script tag added before closing body tag

### 3. Player Card Requirements

Ensure player cards have the `data-player` attribute:
```html
<div class="pick-card" data-player="Fernando Mendoza">
  <!-- Card content -->
</div>
```

Video indicators will be automatically added to cards with matching player names in the `playerVideos` object.

## JavaScript API

### Core Functions

#### `openVideoPlayer(playerName, videoId?)`
Opens the video player modal for a specific player.
```javascript
// Open player's main highlight
openVideoPlayer('Fernando Mendoza');

// Open specific video
openVideoPlayer('Fernando Mendoza', 'abc123xyz');
```

#### `closeVideoPlayer()`
Closes the video player modal and stops video playback.

#### `getPlayerVideos(playerName)`
Returns video data for a player.
```javascript
const videos = getPlayerVideos('Fernando Mendoza');
// Returns: { mainHighlight, playlist, stats, position, school }
```

#### `getVideoThumbnail(videoId, quality?)`
Returns YouTube thumbnail URL.
```javascript
const thumb = getVideoThumbnail('abc123xyz', 'hqdefault');
// Qualities: default, mqdefault, hqdefault, maxresdefault
```

#### `getRecommendedVideos(playerName, limit?)`
Returns related players based on position.
```javascript
const recommendations = getRecommendedVideos('Fernando Mendoza', 3);
```

#### `createVideoPlaylist(category)`
Creates curated playlists.
```javascript
// By position
const qbs = createVideoPlaylist('QB');
const wrs = createVideoPlaylist('WR');

// Top prospects
const top10 = createVideoPlaylist('Top Prospects');

// All videos sorted by views
const allVideos = createVideoPlaylist('All');
```

## Adding New Player Videos

1. Find the YouTube video ID (the part after `v=` in the URL)
2. Add entry to `playerVideos` object in `js/youtube-videos.js`:

```javascript
"New Player Name": {
  mainHighlight: "YOUTUBE_VIDEO_ID",
  playlist: [
    { 
      id: "YOUTUBE_VIDEO_ID", 
      title: "Video Title", 
      duration: "8:42",
      thumbnail: "mqdefault"
    }
  ],
  stats: {
    views: "100K",
    likes: "5K",
    channel: "Channel Name",
    videoCount: 1
  },
  position: "QB",
  school: "School Name"
}
```

## Styling Customization

### CSS Variables
The video system uses the same CSS variables as the main site:
```css
--primary: #0a0a0f;
--secondary: #12121a;
--accent: #00d4ff;
--text-primary: #ffffff;
--text-secondary: #8b8b9a;
--card-bg: rgba(255, 255, 255, 0.03);
--border: rgba(255, 255, 255, 0.08);
```

### Light Mode Support
All video components automatically adapt to light/dark mode via the `[data-theme="light"]` attribute.

## Mobile Optimization

- **Full-width player** on mobile devices
- **Vertical playlist** below the video
- **Touch-friendly** buttons and controls
- **Native YouTube app** option on mobile
- **Portrait video** support
- **Bottom sheet** style modal on small screens

## Performance Features

### Lazy Loading
- YouTube iframe only loads when user clicks
- Thumbnails load with `loading="lazy"` attribute
- Intersection Observer for efficient loading

### Caching
- Video analytics stored in localStorage
- Thumbnail URLs generated on-demand
- Player data cached in memory

### Optimization
- Minimal JavaScript footprint
- CSS animations use GPU acceleration
- Event delegation for dynamic elements

## Privacy & Compliance

- Uses `youtube-nocookie.com` domain (GDPR compliant)
- Local analytics only (no third-party tracking)
- Respects Do Not Track settings
- No cookies set by video system

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- iOS Safari 13+
- Android Chrome 80+

## Demo

Open `video-system-demo.html` in a browser to see:
- Interactive feature demonstrations
- JavaScript API examples
- Keyboard shortcuts reference
- Integration instructions

## Troubleshooting

### Videos not appearing
1. Check browser console for errors
2. Verify `data-player` attribute matches video data key
3. Ensure CSS file is properly loaded

### YouTube blocked
- System gracefully degrades when YouTube is unavailable
- Fallback thumbnails still display
- Manual YouTube links provided

### Mobile issues
- Check viewport meta tag is set
- Verify touch events aren't being intercepted
- Test on actual device, not just emulator

## Future Enhancements

Potential additions to the video system:
- [ ] YouTube API integration for real stats
- [ ] Video comments/reactions
- [ ] Multi-language support
- [ ] Offline viewing capability
- [ ] Picture-in-picture mode
- [ ] Video chapters/timestamps
- [ ] Compare videos side-by-side

## License

This video integration system is part of the 2026 NFL Mock Draft project.

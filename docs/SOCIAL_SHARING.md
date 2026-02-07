# Social Sharing Cards - Implementation Guide

## Overview

The Social Sharing Cards feature enables users to share their NFL Mock Drafts on Twitter/X, Facebook, Reddit, and other platforms with beautiful preview cards, just like ESPN and PFN.

## Features

### 1. Dynamic Open Graph Meta Tags
- Automatically updates `<meta>` tags based on current mock draft
- Supports Twitter Cards (`summary_large_image`)
- Facebook Open Graph protocol
- URL-based sharing with encoded mock data

### 2. Share Modal UI
- Beautiful modal with preview card
- Platform-specific share buttons
- Copyable text in multiple formats
- Save preview as image

### 3. Platform-Specific Sharing
- **Twitter/X**: Pre-populated tweet with top 5 picks and hashtags
- **Facebook**: Share dialog with preview card
- **Reddit**: Markdown-formatted table for r/NFL_Draft
- **WhatsApp**: Direct message sharing
- **Native Share**: Mobile Web Share API

### 4. Preview Card Design
- Site branding
- Top 3 picks with team colors
- Mock stats (picks, trades, grade)
- Call-to-action

### 5. URL Parameters
- Encodes mock data in URL (`?mock=encodedData`)
- Loads mock from URL parameter
- Compressed format for shorter URLs

## File Structure

```
nfl-mock-draft-2026/
├── js/
│   └── social-sharing.js      # Main social sharing logic
├── css/
│   └── social-sharing.css     # Styles for modal and cards
├── images/
│   └── social-preview-default.jpg  # Default preview image
└── SOCIAL_SHARING.md          # This documentation
```

## Usage

### Opening the Share Modal

```javascript
// From anywhere in the app
SocialShareManager.openShareModal();

// With specific mock data
SocialShareManager.openShareModal(mockData);
```

### Programmatic Sharing

```javascript
// Share to specific platforms
SocialShareManager.shareToTwitter();
SocialShareManager.shareToFacebook();
SocialShareManager.shareToReddit();
SocialShareManager.shareToWhatsApp();
SocialShareManager.shareNative();
```

### Updating Meta Tags

```javascript
// Update meta tags with current mock data
const mockData = {
    picks: [...],
    trades: [...],
    createdAt: '2026-01-01T00:00:00Z',
    author: 'Username'
};

SocialShareManager.updateMetaTags(mockData);
```

### Encoding/Decoding Mock Data

```javascript
// Encode mock to URL
const shareUrl = SocialShareManager.encodeMockToURL(mockData);

// Decode mock from URL
const loadedMock = SocialShareManager.decodeMockFromURL(window.location.href);
```

## Mock Data Format

```javascript
{
    picks: [
        {
            pick: 1,
            team: "Las Vegas Raiders",
            player: "Fernando Mendoza",
            position: "QB",
            school: "Indiana"
        },
        // ... more picks
    ],
    trades: [
        {
            teamA: "Dallas Cowboys",
            teamB: "Washington Commanders",
            picksA: [12],
            picksB: [15, 47]
        }
    ],
    createdAt: "2026-01-01T00:00:00Z",
    author: "Username"
}
```

## Text Formats

### Condensed Format
```
2026 NFL Mock Draft (1st Round):
1. LV - Fernando Mendoza (QB)
2. NYJ - Ty Simpson (QB)
3. ARI - Francis Mauigoa (OT)
...
```

### Detailed Format
```
2026 NFL Mock Draft - Full Breakdown

ROUND 1
-------

1. Las Vegas Raiders
   Select: Fernando Mendoza, QB, Indiana
   
2. New York Jets
   Select: Ty Simpson, QB, Alabama
...
```

### Reddit Markdown
```markdown
# 2026 NFL Mock Draft

## First Round

| Pick | Team | Player | Position | School |
|------|------|--------|----------|--------|
| 1 | LV | Fernando Mendoza | QB | Indiana |
| 2 | NYJ | Ty Simpson | QB | Alabama |
...
```

## Analytics

The system tracks share counts by platform:

```javascript
// Get share leaderboard
const leaderboard = SocialShareManager.getShareLeaderboard();
// Returns: [{ platform: 'twitter', count: 42 }, ...]
```

Tracked platforms:
- `twitter` - Twitter/X shares
- `facebook` - Facebook shares
- `reddit` - Reddit shares
- `copyLink` - Link copies
- `saveImage` - Image saves
- `native` - Native Web Share API usage

## Configuration

Modify the configuration in `social-sharing.js`:

```javascript
config: {
    siteName: '2026 NFL Mock Draft',
    siteUrl: 'https://yoursite.com',
    defaultImage: 'images/social-preview-default.jpg',
    twitterHandle: '@yourhandle',
    hashtags: ['#NFLMockDraft', '#2026NFLDraft', '#NFLDraft']
}
```

## Integration with Existing Features

### Custom Mock Draft Builder
When users create their own mock draft, the system automatically:
1. Updates meta tags with their selections
2. Generates preview cards showing their top picks
3. Creates shareable URLs with encoded mock data

### Trade Simulator
Trades are included in the shared mock data, showing:
- Number of trades
- Teams involved
- Pick exchanges

### Draft Grades
Preview cards display the overall mock grade (A-F) based on:
- Number of picks completed
- Value picks made
- Trades executed

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+
- Mobile browsers with Web Share API support

## Fallback Behavior

- If Web Share API is not available, shows copy-to-clipboard
- If html2canvas fails, offers text-only sharing
- If URL encoding fails, falls back to basic URL

## Security Considerations

- URL-encoded data is base64-encoded JSON (not encrypted)
- No personal information is stored in shared URLs
- Analytics are stored locally in browser only

## Future Enhancements

Potential improvements:
- [ ] Server-side image generation for better preview cards
- [ ] User accounts to save and manage multiple mocks
- [ ] Community leaderboard of most-shared mocks
- [ ] Real-time collaboration on mocks
- [ ] Export to fantasy football platforms

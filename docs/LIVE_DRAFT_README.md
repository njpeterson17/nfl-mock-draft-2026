# 🏈 Live Multi-User Mock Draft System

A real-time multi-user mock draft experience for the 2026 NFL Draft. Draft against friends live with chat, timers, AI teams, and more.

## Features

### Core Features
- ✅ **Real-time Drafting** - Live updates across all connected tabs/browsers
- ✅ **Lobby System** - Create or join public, private, or friends-only drafts
- ✅ **Live Chat** - Real-time messaging with @mentions and emoji support
- ✅ **Draft Timer** - Configurable countdown timer with auto-pick
- ✅ **Draft Queue** - Queue players for auto-selection if timer expires
- ✅ **AI Teams** - Automatic AI fills empty teams with intelligent picks
- ✅ **Commissioner Controls** - Pause, undo, skip picks (host only)
- ✅ **Post-Draft Summary** - Grades, value picks, and statistics

### Draft Settings
- **Rounds**: 1, 3, or 7 rounds
- **Timer**: 30s, 60s, 90s, or Off
- **Teams**: 12, 24, or 32 teams (NFL Draft order)
- **Type**: Public, Private, or Friends-only

### User Roles
- **Commissioner** - Full control over draft settings and flow
- **Drafter** - Controls one or more teams, makes picks
- **Spectator** - Watches live, can chat
- **AI** - Automatic team control with smart picks

## Architecture

### WebSocket-Ready Design
The system is built with a `StorageManager` class that abstracts storage operations:

```javascript
// Current: localStorage mode
this.mode = 'localStorage';

// Future: WebSocket mode (easy swap)
this.mode = 'websocket';
this.socket = new WebSocket('ws://...');
```

### Real-Time Sync via localStorage
```javascript
// Broadcast updates
localStorage.setItem('draftRoom_4821', JSON.stringify(draftRoom));

// Listen for updates
window.addEventListener('storage', (e) => {
  if (e.key === 'draftRoom_4821') {
    updateUI(JSON.parse(e.newValue));
  }
});
```

### Key Components

```
DraftRoomManager  - Core logic, state management
StorageManager    - Data persistence (localStorage/WebSocket)
DraftBot          - AI decision making
DraftUIController - DOM updates and event handling
LiveDraftApp      - Global API and initialization
```

## File Structure

```
nfl-mock-draft-2026/
├── live-draft.html          # Main entry point
├── css/
│   └── live-draft.css       # Live draft styles
├── js/
│   ├── live-draft.js        # Main application (60KB)
│   ├── data.js              # NFL team data, player data
│   └── ...
├── bigBoardData.js          # Player rankings (shared)
└── LIVE_DRAFT_README.md     # This file
```

## Usage

### Creating a Draft
1. Enter a username
2. Choose draft settings (rounds, timer, teams)
3. Select "Your Team" or leave as Random
4. Click "Create Draft Room"

### Joining a Draft
1. Browse available drafts in the lobby
2. Click "Join" on any open room
3. Or click "Spectate" to watch full rooms

### Making Picks
1. Wait for your turn (timer shows countdown)
2. Click "DRAFT" on any available player
3. Or add players to your queue for auto-pick

### Chat Commands
- Type `@username` to mention someone
- Click emoji button for emoji picker
- System messages show pick notifications

## Data Model

### Draft Room State
```javascript
{
  id: '4821',
  status: 'active', // waiting, active, paused, completed
  settings: {
    rounds: 3,
    timer: 60,
    teams: 32,
    type: 'public'
  },
  commissioner: 'user_id',
  users: [
    { id, username, team, role, isReady, isOnline }
  ],
  aiTeams: [
    { id, username, team, role: 'ai' }
  ],
  spectators: [...],
  draftOrder: [
    { round, pick, overall, team }
  ],
  currentPick: { round, pick, overall, team, userId },
  picks: [
    { round, pick, overall, team, userId, player, timestamp }
  ],
  chat: [
    { id, userId, username, message, timestamp }
  ],
  availablePlayers: [...],
  lastActivity: '2026-02-05T21:44:31Z'
}
```

## AI Draft Logic

The AI uses a weighted scoring system:

```javascript
// Base score: Player rank
score = player.rank;

// Adjust for position needs (avoid drafting same position too much)
positionCount = teamPicks.filter(p => p.position === player.position).length;
score += positionCount * 20;

// Add randomness based on difficulty
score += (Math.random() - 0.5) * randomFactor;
```

Difficulty levels:
- **Easy**: More random picks, higher variance
- **Medium**: Balanced strategy
- **Hard**: Optimal picks, minimal variance

## Draft Grades

Calculated based on pick value (expected rank vs actual rank):

```javascript
// Pick value calculation
value = (expectedRank - actualRank) + 50;

// Letter grades
A: value >= 70
B: value >= 60
C: value >= 50
D: value >= 40
F: value < 40
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

Requires:
- localStorage API
- ES6+ JavaScript
- CSS Grid and Flexbox

## Future Enhancements

### WebSocket Server
Replace localStorage with WebSocket for true multi-device support:

```javascript
class WebSocketStorage extends StorageManager {
  constructor() {
    super();
    this.socket = new WebSocket('wss://api.example.com/draft');
    this.socket.onmessage = (e) => this.handleMessage(e.data);
  }
  
  saveRoom(roomId, data) {
    this.socket.send(JSON.stringify({ type: 'update', roomId, data }));
  }
}
```

### Additional Features
- [ ] Trade proposals between users
- [ ] Voice chat integration
- [ ] Mobile app
- [ ] Save/load custom big boards
- [ ] Export to Excel/PDF
- [ ] Draft history and replays
- [ ] User accounts and profiles
- [ ] Rating system for GMs

## Technical Notes

### localStorage Limitations
- Max 5-10MB storage per domain
- Synchronous API (blocks main thread)
- Same-origin only (tabs must be same domain)
- Storage events don't fire in same tab

### Performance Optimizations
- Debounced search (300ms)
- Virtual scrolling for large lists
- Efficient DOM updates (only changed elements)
- Room cleanup after 24 hours inactivity

### Security Considerations
- No authentication (use for fun only)
- XSS protection via textContent/escapeHtml
- No sensitive data stored
- Rate limiting via debounce

## License

This is part of the 2026 NFL Mock Draft project.

## Support

For issues or feature requests, please contact the development team.

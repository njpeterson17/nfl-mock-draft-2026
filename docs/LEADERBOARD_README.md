# 🏆 NFL Mock Draft 2026 - User Leaderboards & Scoring System

A comprehensive gamification system for the NFL Mock Draft website featuring scoring algorithms, leaderboards, achievements, leveling, and challenges.

## 📁 Files Created

| File | Description |
|------|-------------|
| `leaderboard.html` | Main leaderboard page with rankings, stats, and challenges |
| `profile.html` | User profile page with stats, history, achievements, and friends |
| `js/leaderboard-system.js` | Core JavaScript module with all scoring logic |
| `css/leaderboard.css` | Complete styling for leaderboard and profile pages |

## 🎯 Features

### 1. Scoring Algorithm

```javascript
// Calculate score for a mock draft
const result = LeaderboardSystem.calculateMockDraftScore(mock);
// Returns: { score: number, details: { valuePoints, needPoints, gradePoints, ... } }
```

**Scoring Breakdown:**
- **Value Points**: Based on ADP vs actual pick
  - 10+ spots after ADP: +50 points (Great value)
  - 5-9 spots after ADP: +30 points (Good value)
  - 1-4 spots after ADP: +15 points (Fair value)
  - 0-4 spots before ADP: +5 points (Slight reach)
  - 5+ spots before ADP: -10 points (Reach)
- **Need Satisfaction**: +20 points for drafting position of need
- **Grade Bonus**: Pick grade × 10 points
- **Completion Bonus**: +100 points for completing mock
- **Speed Bonus**: 
  - Under 15 min: +100 points
  - Under 30 min: +50 points
- **7-Round Bonus**: +200 points
- **Trade Bonus**: 
  - 5+ trades: +150 points
  - 3-4 trades: +75 points

### 2. Leaderboard Types

- **Overall**: All-time rankings by total XP
- **This Week**: Weekly activity rankings
- **This Month**: Monthly activity rankings
- **All Time**: Historic all-time rankings

Features:
- Real-time ranking updates
- Trend indicators (↗️ ↘️ ➡️)
- Top 3 medal display (🥇 🥈 🥉)
- Current user highlighting
- Pagination (10 users per page)

### 3. Achievement/Badge System

| Achievement | Description | XP Reward | Rarity |
|------------|-------------|-----------|--------|
| 🎯 First Timer | Create your first mock | 50 | Common |
| 💪 Iron GM | Complete a 7-round mock | 100 | Common |
| ⭐ Perfect Draft | Get A+ overall grade | 200 | Rare |
| 🔍 Value Hunter | Pick 10+ spots after ADP | 75 | Common |
| ⚡ Speed Demon | Complete mock in <15 min | 100 | Uncommon |
| 🤝 Trade Master | Complete 5+ trades | 150 | Uncommon |
| 🏆 Top 100 | Reach top 100 leaderboard | 200 | Rare |
| 👑 Elite Drafter | Reach top 10 leaderboard | 500 | Epic |
| 🔥 On Fire | 7-day login streak | 150 | Uncommon |
| 💎 Dedicated | 30-day login streak | 500 | Epic |
| 📢 Influencer | Share 10 mocks | 100 | Common |
| ⚔️ War Room Veteran | Complete 5 war rooms | 200 | Uncommon |
| 📋 Draft Expert | Create 50 mocks | 300 | Rare |
| 🏈 QB Whisperer | Draft 3 QBs in first round | 150 | Uncommon |
| 🛡️ Defense Wins | Draft defense with top 5 pick | 100 | Uncommon |
| ❤️ True Fan | Draft 5+ players from favorite team | 75 | Common |
| 💤 Sleeper Hit | Pick player 20+ spots after ADP | 150 | Rare |
| 📊 Analytics GM | Use all tools in one session | 100 | Uncommon |
| 🌅 Early Bird | Create mock before 8 AM | 50 | Common |
| 🦉 Night Owl | Create mock after midnight | 50 | Common |

### 4. Leveling System

| Level | Title | XP Required |
|-------|-------|-------------|
| 1 | Rookie Scout | 0 |
| 2 | Area Scout | 100 |
| 3 | Regional Scout | 250 |
| 4 | Advanced Scout | 450 |
| 5 | National Scout | 700 |
| 6 | Senior Scout | 1,000 |
| 7 | Lead Scout | 1,400 |
| 8 | Scouting Coordinator | 1,900 |
| 9 | Assistant Director | 2,500 |
| 10 | Director of Scouting | 3,200 |
| 11 | VP of Player Personnel | 4,000 |
| 12 | Assistant GM | 5,000 |
| 13 | Associate GM | 6,200 |
| 14 | Deputy GM | 7,600 |
| 15 | General Manager | 9,200 |
| 16 | Senior GM | 11,000 |
| 17 | Executive GM | 13,000 |
| 18 | VP & GM | 15,200 |
| 19 | President of Football Ops | 17,600 |
| 20 | Hall of Fame GM | 20,000 |

**XP Rewards for Actions:**
- Create Mock: 25 XP
- Complete Mock: 50 XP
- Complete 7-Round Mock: 100 XP
- Get Grade A: 75 XP
- Get Grade A+: 150 XP
- Share Mock: 20 XP
- Use War Room: 30 XP
- Add Friend: 10 XP
- Daily Login: 25 XP
- 7-Day Streak Bonus: 100 XP
- 30-Day Streak Bonus: 300 XP
- Value Pick Bonus: 15 XP
- Need Satisfaction Bonus: 10 XP

### 5. Weekly Challenges

Current challenges include:
- **QB Whisperer**: Draft 3 QBs in first round (100 XP)
- **Value Hunter**: Get 100+ value points in a mock (100 XP)
- **Speed Demon**: Complete mock in under 15 minutes (100 XP)
- **Trade Master**: Make 5+ trades in one mock (150 XP)
- **Defensive Minded**: Draft 5+ defensive players in first 3 rounds (100 XP)

### 6. Friends/Following System

- Add friends by username
- Friends-only leaderboard
- Compare stats directly
- Remove friends anytime

### 7. Mock Draft History

- Archive of all mocks with metadata
- Sort by: Newest, Oldest, Score, Grade
- View/Reload past mocks
- Delete unwanted mocks
- Performance charts (visualization ready)

## 🚀 API Usage

### Initialize System

```javascript
// On leaderboard page
LeaderboardSystem.init();

// On profile page
LeaderboardSystem.initProfile();
```

### Scoring & XP

```javascript
// Calculate mock score
const mock = {
    picks: [...],
    isComplete: true,
    timeSpent: 900,
    totalRounds: 7,
    trades: [...],
    overallGrade: 'A+'
};

const result = LeaderboardSystem.calculateMockDraftScore(mock);
console.log(result.score);      // Total score
console.log(result.details);    // Breakdown

// Update user after mock completion
LeaderboardSystem.updateUserScore(result);

// Add XP manually
LeaderboardSystem.addXP(100, 'Bonus for great draft!');
```

### Achievements

```javascript
// Check for newly unlockable achievements
const newAchievements = LeaderboardSystem.checkAchievements('mock_complete', { score: result });

// Award achievement directly
LeaderboardSystem.awardAchievement('perfect_grade');

// Get user's achievements
const myAchievements = LeaderboardSystem.getUserAchievements();
```

### Leaderboards

```javascript
// Get leaderboard data
const leaderboard = LeaderboardSystem.getLeaderboard('overall', 100);

// Get user's rank
const rank = LeaderboardSystem.getUserRank();

// Get user's percentile
const percentile = LeaderboardSystem.getUserPercentile();
```

### Friends

```javascript
// Add a friend
const result = LeaderboardSystem.addFriend('DraftMaster99');
if (result.success) {
    console.log('Friend added!');
} else {
    console.log(result.error);
}

// Get friends leaderboard
const friendsLeaderboard = LeaderboardSystem.getFriendsLeaderboard();
```

### Mock History

```javascript
// Save mock to history
LeaderboardSystem.saveMockToHistory(mock);

// Get mock history
const history = LeaderboardSystem.getMockHistory('newest');

// Delete mock
LeaderboardSystem.deleteMock(mockId);
```

### Leveling

```javascript
// Get level info from XP
const level = LeaderboardSystem.calculateLevel(2450);
// Returns: { level: 12, name: 'Assistant GM', xp: 2000 }

// Get XP needed for next level
const nextLevelXP = LeaderboardSystem.getXPForNextLevel(12);

// Get XP for action
const xp = LeaderboardSystem.getXPForAction('COMPLETE_MOCK');
```

## 💾 Data Storage

All data is stored in localStorage with the following keys:

```javascript
'nflMockDraft_user_data'        // Current user data
'nflMockDraft_leaderboard'      // Global leaderboard
'nflMockDraft_achievements'     // Achievement status
'nflMockDraft_challenges'       // Weekly challenges
'nflMockDraft_friends'          // Friends list
'nflMockDraft_mock_history'     // Mock history
'nflMockDraft_last_login'       // Last login date
'nflMockDraft_login_streak'     // Current streak count
'nflMockDraft_last_challenge_week' // Week of last challenge refresh
```

### User Data Structure

```javascript
{
    username: 'DraftKing42',
    xp: 2450,
    level: 12,
    achievements: ['first_mock', 'complete_7round', ...],
    mocksCreated: 12,
    totalScore: 2450,
    joinDate: '2026-01-15',
    favoriteTeam: 'LV',
    mockHistory: [...],
    friends: ['GM_Simulator', 'RaidersFan99'],
    challengesCompleted: [...],
    stats: {
        totalMocks: 12,
        avgGrade: 'B+',
        bestGrade: 'A+',
        bestPick: { player: 'Mendoza', pick: 1, diff: 0 },
        totalTrades: 23,
        mocksShared: 5,
        warRoomsCompleted: 3
    }
}
```

## 🔗 Integration with Main Site

Add these links to your navigation:

```html
<nav class="nav-links">
    <a href="index.html">Mock Draft</a>
    <a href="war-room.html">War Room</a>
    <a href="leaderboard.html">Leaderboards</a>
    <a href="profile.html">My Profile</a>
</nav>
```

Integrate scoring into your mock draft completion flow:

```javascript
// When user completes a mock draft
function completeMock(mockData) {
    // Calculate score
    const result = LeaderboardSystem.calculateMockDraftScore(mockData);
    
    // Save to history
    LeaderboardSystem.saveMockToHistory({
        ...mockData,
        score: result.score
    });
    
    // Update user score and XP
    LeaderboardSystem.updateUserScore(result);
    
    // Show results
    alert(`Mock Complete! Score: ${result.score}`);
}
```

## 📱 Responsive Design

The leaderboard system is fully responsive:
- Desktop: Full layout with all columns
- Tablet: Condensed layout, simplified tables
- Mobile: Stacked layout, essential columns only

## 🎨 Customization

### Colors
Edit CSS variables in `leaderboard.css`:

```css
:root {
    --primary: #1a472a;       /* Main green */
    --accent: #c9a227;        /* Gold highlights */
    --bg-dark: #0a0a0a;       /* Dark background */
    /* ... more variables */
}
```

### Levels
Modify `LEVEL_THRESHOLDS` in `leaderboard-system.js`:

```javascript
const LEVEL_THRESHOLDS = [
    { level: 1, name: 'Custom Name', xp: 0 },
    // ...
];
```

### Achievements
Add new achievements to the `ACHIEVEMENTS` array:

```javascript
const ACHIEVEMENTS = [
    {
        id: 'my_achievement',
        name: 'Achievement Name',
        desc: 'Description',
        icon: '🏆',
        xp: 100,
        rarity: 'rare' // common, uncommon, rare, epic, legendary
    }
];
```

## 📈 Future Enhancements

- Backend API integration
- Real-time leaderboard updates via WebSocket
- Multiplayer draft competitions
- Seasonal rankings
- Draft prediction accuracy scoring (post-draft)
- Social media integration
- Export stats to CSV

## 📝 License

This system is part of the NFL Mock Draft 2026 project.

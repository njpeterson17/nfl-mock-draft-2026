/**
 * NFL Mock Draft 2026 - Leaderboard & Scoring System
 * 
 * Features:
 * - Scoring algorithm for mock drafts
 * - Multiple leaderboard types (Overall, Weekly, Monthly, All-Time)
 * - Achievement/Badge system
 * - User leveling system
 * - Weekly challenges
 * - Friends/Following system
 * - Mock draft history
 * - LocalStorage persistence
 */

const LeaderboardSystem = (function() {
    'use strict';

    // ==================== CONSTANTS ====================
    
    const STORAGE_KEYS = {
        USER_DATA: 'nflMockDraft_user_data',
        LEADERBOARD: 'nflMockDraft_leaderboard',
        ACHIEVEMENTS: 'nflMockDraft_achievements',
        CHALLENGES: 'nflMockDraft_challenges',
        FRIENDS: 'nflMockDraft_friends',
        MOCK_HISTORY: 'nflMockDraft_mock_history',
        LAST_LOGIN: 'nflMockDraft_last_login',
        LOGIN_STREAK: 'nflMockDraft_login_streak'
    };

    // Level thresholds with names
    const LEVEL_THRESHOLDS = [
        { level: 1, name: 'Rookie Scout', xp: 0 },
        { level: 2, name: 'Area Scout', xp: 100 },
        { level: 3, name: 'Regional Scout', xp: 250 },
        { level: 4, name: 'Advanced Scout', xp: 450 },
        { level: 5, name: 'National Scout', xp: 700 },
        { level: 6, name: 'Senior Scout', xp: 1000 },
        { level: 7, name: 'Lead Scout', xp: 1400 },
        { level: 8, name: 'Scouting Coordinator', xp: 1900 },
        { level: 9, name: 'Assistant Director', xp: 2500 },
        { level: 10, name: 'Director of Scouting', xp: 3200 },
        { level: 11, name: 'VP of Player Personnel', xp: 4000 },
        { level: 12, name: 'Assistant GM', xp: 5000 },
        { level: 13, name: 'Associate GM', xp: 6200 },
        { level: 14, name: 'Deputy GM', xp: 7600 },
        { level: 15, name: 'General Manager', xp: 9200 },
        { level: 16, name: 'Senior GM', xp: 11000 },
        { level: 17, name: 'Executive GM', xp: 13000 },
        { level: 18, name: 'VP & GM', xp: 15200 },
        { level: 19, name: 'President of Football Ops', xp: 17600 },
        { level: 20, name: 'Hall of Fame GM', xp: 20000 }
    ];

    // All available achievements
    const ACHIEVEMENTS = [
        { id: 'first_mock', name: 'First Timer', desc: 'Create your first mock draft', icon: '🎯', xp: 50, rarity: 'common' },
        { id: 'complete_7round', name: 'Iron GM', desc: 'Complete a 7-round mock draft', icon: '💪', xp: 100, rarity: 'common' },
        { id: 'perfect_grade', name: 'Perfect Draft', desc: 'Get A+ overall grade', icon: '⭐', xp: 200, rarity: 'rare' },
        { id: 'value_hunter', name: 'Value Hunter', desc: 'Pick 10+ spots after ADP', icon: '🔍', xp: 75, rarity: 'common' },
        { id: 'speed_demon', name: 'Speed Demon', desc: 'Complete mock in <15 min', icon: '⚡', xp: 100, rarity: 'uncommon' },
        { id: 'trade_master', name: 'Trade Master', desc: 'Complete 5+ trades in one mock', icon: '🤝', xp: 150, rarity: 'uncommon' },
        { id: 'top_100', name: 'Top 100', desc: 'Reach top 100 on leaderboard', icon: '🏆', xp: 200, rarity: 'rare' },
        { id: 'top_10', name: 'Elite Drafter', desc: 'Reach top 10 on leaderboard', icon: '👑', xp: 500, rarity: 'epic' },
        { id: 'streak_7', name: 'On Fire', desc: '7-day login streak', icon: '🔥', xp: 150, rarity: 'uncommon' },
        { id: 'streak_30', name: 'Dedicated', desc: '30-day login streak', icon: '💎', xp: 500, rarity: 'epic' },
        { id: 'social_share', name: 'Influencer', desc: 'Share 10 mocks', icon: '📢', xp: 100, rarity: 'common' },
        { id: 'war_room', name: 'War Room Veteran', desc: 'Complete 5 war rooms', icon: '⚔️', xp: 200, rarity: 'uncommon' },
        { id: 'draft_expert', name: 'Draft Expert', desc: 'Create 50 mocks', icon: '📋', xp: 300, rarity: 'rare' },
        { id: 'qb_whisperer', name: 'QB Whisperer', desc: 'Draft 3 QBs in first round', icon: '🏈', xp: 150, rarity: 'uncommon' },
        { id: 'defense_wins', name: 'Defense Wins', desc: 'Draft defense with top 5 pick', icon: '🛡️', xp: 100, rarity: 'uncommon' },
        { id: 'homer_picks', name: 'True Fan', desc: 'Draft 5+ players from favorite team', icon: '❤️', xp: 75, rarity: 'common' },
        { id: 'sleeper_hit', name: 'Sleeper Hit', desc: 'Pick player 20+ spots after ADP', icon: '💤', xp: 150, rarity: 'rare' },
        { id: 'analytics_gm', name: 'Analytics GM', desc: 'Use all tools in one session', icon: '📊', xp: 100, rarity: 'uncommon' },
        { id: 'early_bird', name: 'Early Bird', desc: 'Create mock before 8 AM', icon: '🌅', xp: 50, rarity: 'common' },
        { id: 'night_owl', name: 'Night Owl', desc: 'Create mock after midnight', icon: '🦉', xp: 50, rarity: 'common' }
    ];

    // Weekly challenges
    const WEEKLY_CHALLENGES = [
        {
            id: 'qb_whisperer_weekly',
            name: 'QB Whisperer',
            desc: 'Draft 3 QBs in the first round in a single mock',
            reward: { xp: 100, badge: 'QB Whisperer' },
            condition: (mock) => {
                const firstRoundQBs = mock.picks.filter(p => p.round === 1 && p.player.position === 'QB');
                return firstRoundQBs.length >= 3;
            }
        },
        {
            id: 'value_hunter_weekly',
            name: 'Value Hunter',
            desc: 'Get 100+ value points in a single mock',
            reward: { xp: 100, badge: 'Value Hunter' },
            condition: (mock) => {
                let valuePoints = 0;
                mock.picks.forEach(pick => {
                    const adpDiff = pick.player.adp - pick.pickNumber;
                    if (adpDiff > 10) valuePoints += 50;
                    else if (adpDiff > 5) valuePoints += 30;
                    else if (adpDiff > 0) valuePoints += 15;
                });
                return valuePoints >= 100;
            }
        },
        {
            id: 'speed_demon_weekly',
            name: 'Speed Demon',
            desc: 'Complete a full mock in under 15 minutes',
            reward: { xp: 100, badge: 'Speed Demon' },
            condition: (mock) => mock.timeSpent < 900
        },
        {
            id: 'trade_master_weekly',
            name: 'Trade Master',
            desc: 'Make 5+ trades in a single mock',
            reward: { xp: 150, badge: 'Trade Master' },
            condition: (mock) => (mock.trades || []).length >= 5
        },
        {
            id: 'defensive_minded',
            name: 'Defensive Minded',
            desc: 'Draft 5+ defensive players in first 3 rounds',
            reward: { xp: 100, badge: 'Defensive Guru' },
            condition: (mock) => {
                const defensivePicks = mock.picks.filter(p => 
                    p.round <= 3 && ['DE', 'DT', 'LB', 'CB', 'S'].includes(p.player.position)
                );
                return defensivePicks.length >= 5;
            }
        }
    ];

    // XP values for actions
    const XP_VALUES = {
        CREATE_MOCK: 25,
        COMPLETE_MOCK: 50,
        COMPLETE_7ROUND: 100,
        GET_GRADE_A: 75,
        GET_GRADE_A_PLUS: 150,
        SHARE_MOCK: 20,
        USE_WAR_ROOM: 30,
        ADD_FRIEND: 10,
        LOGIN_DAILY: 25,
        STREAK_BONUS_7: 100,
        STREAK_BONUS_30: 300,
        VALUE_PICK_BONUS: 15,
        NEED_SATISFACTION_BONUS: 10
    };

    // Grade to score mapping
    const GRADE_SCORES = {
        'A+': 4.3, 'A': 4.0, 'A-': 3.7,
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,
        'D+': 1.3, 'D': 1.0, 'D-': 0.7,
        'F': 0.0
    };

    // Sample users for leaderboard
    const SAMPLE_USERS = [
        { username: 'DraftKing42', xp: 2450, mocksCreated: 12, bestGrade: 'A+', level: 12 },
        { username: 'GM_Simulator', xp: 2380, mocksCreated: 8, bestGrade: 'A', level: 11 },
        { username: 'RaidersFan99', xp: 2210, mocksCreated: 15, bestGrade: 'A', level: 11 },
        { username: 'NFLExpert', xp: 2180, mocksCreated: 6, bestGrade: 'A-', level: 10 },
        { username: 'MockMaster', xp: 2050, mocksCreated: 20, bestGrade: 'B+', level: 10 },
        { username: 'DraftGuru', xp: 1920, mocksCreated: 18, bestGrade: 'A-', level: 9 },
        { username: 'ScoutPro', xp: 1850, mocksCreated: 14, bestGrade: 'B+', level: 9 },
        { username: 'TradeWizard', xp: 1780, mocksCreated: 10, bestGrade: 'A', level: 9 },
        { username: 'ValueHunter', xp: 1650, mocksCreated: 11, bestGrade: 'B+', level: 8 },
        { username: 'RookieGM', xp: 1520, mocksCreated: 9, bestGrade: 'B', level: 8 },
        { username: 'DraftDayHero', xp: 1480, mocksCreated: 13, bestGrade: 'B', level: 8 },
        { username: 'TeamBuilder', xp: 1350, mocksCreated: 7, bestGrade: 'B-', level: 7 },
        { username: 'ProspectKing', xp: 1280, mocksCreated: 16, bestGrade: 'B-', level: 7 },
        { username: 'WarRoomChief', xp: 1150, mocksCreated: 5, bestGrade: 'C+', level: 6 },
        { username: 'BigBoardBoss', xp: 1020, mocksCreated: 8, bestGrade: 'C+', level: 6 }
    ];

    // ==================== STATE ====================

    let state = {
        currentUser: null,
        leaderboard: [],
        challenges: [],
        currentTimeframe: 'overall',
        currentPage: 1,
        itemsPerPage: 10
    };

    // ==================== CORE FUNCTIONS ====================

    /**
     * Initialize the leaderboard system
     */
    function init() {
        loadUserData();
        initializeLeaderboard();
        initializeChallenges();
        checkLoginStreak();
        updateUI();
        renderLeaderboard();
        renderChallenges();
        renderAchievementsShowcase();
        setupEventListeners();
    }

    /**
     * Initialize profile page
     */
    function initProfile() {
        loadUserData();
        updateProfileUI();
        renderAchievementsList();
        renderMockHistory();
        renderFriendsList();
        setupProfileEventListeners();
    }

    /**
     * Load user data from localStorage
     */
    function loadUserData() {
        const stored = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        if (stored) {
            state.currentUser = JSON.parse(stored);
        } else {
            // Create default user
            state.currentUser = createDefaultUser();
            saveUserData();
        }
    }

    /**
     * Create default user data
     */
    function createDefaultUser() {
        return {
            username: 'Guest' + Math.floor(Math.random() * 10000),
            xp: 0,
            level: 1,
            achievements: [],
            mocksCreated: 0,
            totalScore: 0,
            joinDate: new Date().toISOString().split('T')[0],
            favoriteTeam: '',
            mockHistory: [],
            friends: [],
            challengesCompleted: [],
            stats: {
                totalMocks: 0,
                avgGrade: 'N/A',
                bestGrade: 'N/A',
                bestPick: null,
                totalTrades: 0,
                mocksShared: 0,
                warRoomsCompleted: 0
            }
        };
    }

    /**
     * Save user data to localStorage
     */
    function saveUserData() {
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(state.currentUser));
    }

    /**
     * Initialize leaderboard with sample data and current user
     */
    function initializeLeaderboard() {
        const stored = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
        if (stored) {
            state.leaderboard = JSON.parse(stored);
        } else {
            // Create leaderboard with sample users
            state.leaderboard = SAMPLE_USERS.map((user, index) => ({
                ...user,
                rank: index + 1,
                trend: Math.floor(Math.random() * 7) - 3, // Random trend between -3 and +3
                lastActive: new Date().toISOString()
            }));
            saveLeaderboard();
        }
        
        // Ensure current user is in leaderboard
        updateUserInLeaderboard();
    }

    /**
     * Save leaderboard to localStorage
     */
    function saveLeaderboard() {
        localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(state.leaderboard));
    }

    /**
     * Initialize weekly challenges
     */
    function initializeChallenges() {
        const stored = localStorage.getItem(STORAGE_KEYS.CHALLENGES);
        const lastWeek = localStorage.getItem('nflMockDraft_last_challenge_week');
        const currentWeek = getWeekNumber(new Date());
        
        if (stored && lastWeek === currentWeek.toString()) {
            state.challenges = JSON.parse(stored);
        } else {
            // Generate new weekly challenges
            state.challenges = WEEKLY_CHALLENGES.map(c => ({
                ...c,
                progress: 0,
                completed: false,
                completedDate: null
            }));
            localStorage.setItem(STORAGE_KEYS.CHALLENGES, JSON.stringify(state.challenges));
            localStorage.setItem('nflMockDraft_last_challenge_week', currentWeek.toString());
        }
    }

    // ==================== SCORING ALGORITHM ====================

    /**
     * Calculate score for a mock draft
     */
    function calculateMockDraftScore(mock) {
        let score = 0;
        let details = {
            valuePoints: 0,
            needPoints: 0,
            gradePoints: 0,
            completionBonus: 0,
            speedBonus: 0,
            valuePicks: [],
            needSatisfactions: []
        };

        // Base points for each pick
        mock.picks.forEach(pick => {
            // Value points (ADP vs actual pick)
            const adpDiff = pick.player.adp - pick.pickNumber;
            let valuePoints = 0;
            
            if (adpDiff > 10) {
                valuePoints = 50; // Great value
                details.valuePicks.push({ pick: pick.pickNumber, player: pick.player.name, diff: adpDiff });
            } else if (adpDiff > 5) {
                valuePoints = 30; // Good value
            } else if (adpDiff > 0) {
                valuePoints = 15; // Fair value
            } else if (adpDiff > -5) {
                valuePoints = 5; // Slight reach
            } else {
                valuePoints = -10; // Reach
            }
            
            score += valuePoints;
            details.valuePoints += valuePoints;

            // Need satisfaction bonus
            if (pick.teamNeeds && pick.teamNeeds.includes(pick.player.position)) {
                score += 20;
                details.needPoints += 20;
                details.needSatisfactions.push({ pick: pick.pickNumber, position: pick.player.position });
            }

            // Grade bonus (if individual pick grades exist)
            if (pick.grade) {
                const gradeBonus = (GRADE_SCORES[pick.grade] || 3) * 10;
                score += gradeBonus;
                details.gradePoints += gradeBonus;
            }
        });

        // Completion bonus
        if (mock.isComplete) {
            score += 100;
            details.completionBonus = 100;
        }

        // Speed bonus (faster = better)
        if (mock.timeSpent < 900) { // Under 15 min
            score += 100;
            details.speedBonus = 100;
        } else if (mock.timeSpent < 1800) { // Under 30 min
            score += 50;
            details.speedBonus = 50;
        }

        // Round bonus for 7-round mocks
        if (mock.totalRounds === 7) {
            score += 200;
            details.roundBonus = 200;
        }

        // Trade bonus
        const tradeCount = (mock.trades || []).length;
        if (tradeCount >= 5) {
            score += 150;
            details.tradeBonus = 150;
        } else if (tradeCount >= 3) {
            score += 75;
            details.tradeBonus = 75;
        }

        details.totalScore = score;
        return { score, details };
    }

    /**
     * Update user score after completing a mock
     */
    function updateUserScore(mockScore) {
        if (!state.currentUser) return;

        state.currentUser.totalScore += mockScore.score;
        state.currentUser.xp += calculateXPForMock(mockScore);
        state.currentUser.mocksCreated++;
        
        // Update stats
        state.currentUser.stats.totalMocks++;
        if (mockScore.details.valuePicks.length > 0) {
            const bestPick = mockScore.details.valuePicks.reduce((a, b) => a.diff > b.diff ? a : b);
            if (!state.currentUser.stats.bestPick || bestPick.diff > state.currentUser.stats.bestPick.diff) {
                state.currentUser.stats.bestPick = bestPick;
            }
        }

        // Check for achievements
        checkAchievements('mock_complete', { score: mockScore });

        // Check challenges
        checkChallenges(mockScore.mock);

        // Update level
        updateUserLevel();

        // Update leaderboard
        updateUserInLeaderboard();

        // Save data
        saveUserData();
        saveLeaderboard();

        return state.currentUser;
    }

    /**
     * Calculate XP earned for a mock
     */
    function calculateXPForMock(mockScore) {
        let xp = XP_VALUES.CREATE_MOCK;
        
        if (mockScore.mock.isComplete) {
            xp += XP_VALUES.COMPLETE_MOCK;
        }
        
        if (mockScore.mock.totalRounds === 7) {
            xp += XP_VALUES.COMPLETE_7ROUND;
        }

        // Grade bonus
        if (mockScore.mock.overallGrade) {
            if (mockScore.mock.overallGrade === 'A+') xp += XP_VALUES.GET_GRADE_A_PLUS;
            else if (mockScore.mock.overallGrade.startsWith('A')) xp += XP_VALUES.GET_GRADE_A;
        }

        // Value pick bonuses
        xp += mockScore.details.valuePicks.length * XP_VALUES.VALUE_PICK_BONUS;

        return xp;
    }

    // ==================== LEVELING SYSTEM ====================

    /**
     * Calculate level based on XP
     */
    function calculateLevel(xp) {
        for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
            if (xp >= LEVEL_THRESHOLDS[i].xp) {
                return LEVEL_THRESHOLDS[i];
            }
        }
        return LEVEL_THRESHOLDS[0];
    }

    /**
     * Get XP needed for next level
     */
    function getXPForNextLevel(currentLevel) {
        const nextLevel = LEVEL_THRESHOLDS.find(l => l.level === currentLevel + 1);
        return nextLevel ? nextLevel.xp : null;
    }

    /**
     * Get XP for a specific action
     */
    function getXPForAction(action) {
        return XP_VALUES[action] || 0;
    }

    /**
     * Update user's level
     */
    function updateUserLevel() {
        const newLevel = calculateLevel(state.currentUser.xp);
        const oldLevel = state.currentUser.level;
        
        if (newLevel.level > oldLevel) {
            state.currentUser.level = newLevel.level;
            // Could trigger level up notification here
            console.log(`Level up! You are now level ${newLevel.level} - ${newLevel.name}`);
        }
    }

    /**
     * Add XP to user
     */
    function addXP(amount, reason = '') {
        if (!state.currentUser) return;
        
        const oldLevel = state.currentUser.level;
        state.currentUser.xp += amount;
        updateUserLevel();
        
        const newLevel = state.currentUser.level;
        if (newLevel > oldLevel) {
            showLevelUpNotification(newLevel);
        }
        
        saveUserData();
        updateUserInLeaderboard();
        
        return {
            xpAdded: amount,
            reason: reason,
            newTotal: state.currentUser.xp,
            levelUp: newLevel > oldLevel,
            newLevel: newLevel
        };
    }

    // ==================== ACHIEVEMENT SYSTEM ====================

    /**
     * Check and award achievements
     */
    function checkAchievements(trigger, data = {}) {
        if (!state.currentUser) return [];
        
        const newlyUnlocked = [];
        
        ACHIEVEMENTS.forEach(achievement => {
            if (state.currentUser.achievements.includes(achievement.id)) return;
            
            let unlocked = false;
            
            switch (achievement.id) {
                case 'first_mock':
                    unlocked = state.currentUser.mocksCreated >= 1;
                    break;
                case 'complete_7round':
                    unlocked = trigger === 'mock_complete' && data.score && data.score.mock.totalRounds === 7;
                    break;
                case 'perfect_grade':
                    unlocked = trigger === 'mock_complete' && data.score && data.score.mock.overallGrade === 'A+';
                    break;
                case 'value_hunter':
                    unlocked = trigger === 'mock_complete' && data.score && 
                               data.score.details.valuePicks.some(p => p.diff > 10);
                    break;
                case 'speed_demon':
                    unlocked = trigger === 'mock_complete' && data.score && data.score.mock.timeSpent < 900;
                    break;
                case 'trade_master':
                    unlocked = trigger === 'mock_complete' && data.score && 
                               (data.score.mock.trades || []).length >= 5;
                    break;
                case 'top_100':
                    unlocked = getUserRank() <= 100 && getUserRank() > 0;
                    break;
                case 'top_10':
                    unlocked = getUserRank() <= 10 && getUserRank() > 0;
                    break;
                case 'streak_7':
                    unlocked = getLoginStreak() >= 7;
                    break;
                case 'streak_30':
                    unlocked = getLoginStreak() >= 30;
                    break;
                case 'social_share':
                    unlocked = state.currentUser.stats.mocksShared >= 10;
                    break;
                case 'war_room':
                    unlocked = state.currentUser.stats.warRoomsCompleted >= 5;
                    break;
                case 'draft_expert':
                    unlocked = state.currentUser.mocksCreated >= 50;
                    break;
            }
            
            if (unlocked) {
                awardAchievement(achievement.id);
                newlyUnlocked.push(achievement);
            }
        });
        
        return newlyUnlocked;
    }

    /**
     * Award an achievement
     */
    function awardAchievement(achievementId) {
        if (!state.currentUser) return false;
        if (state.currentUser.achievements.includes(achievementId)) return false;
        
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!achievement) return false;
        
        state.currentUser.achievements.push(achievementId);
        
        // Award XP
        if (achievement.xp) {
            addXP(achievement.xp, `Achievement: ${achievement.name}`);
        }
        
        saveUserData();
        
        // Show notification
        showAchievementPopup(achievement);
        
        return true;
    }

    /**
     * Get user's achievements
     */
    function getUserAchievements(userId = null) {
        if (!state.currentUser) return [];
        
        return state.currentUser.achievements.map(id => {
            const achievement = ACHIEVEMENTS.find(a => a.id === id);
            return { ...achievement, unlocked: true };
        });
    }

    // ==================== CHALLENGE SYSTEM ====================

    /**
     * Check challenges against a completed mock
     */
    function checkChallenges(mock) {
        if (!state.currentUser || !mock) return [];
        
        const completed = [];
        
        state.challenges.forEach(challenge => {
            if (challenge.completed) return;
            
            if (challenge.condition(mock)) {
                challenge.completed = true;
                challenge.completedDate = new Date().toISOString();
                challenge.progress = 1;
                
                // Award rewards
                if (challenge.reward.xp) {
                    addXP(challenge.reward.xp, `Challenge: ${challenge.name}`);
                }
                
                completed.push(challenge);
                
                // Check for achievement
                if (!state.currentUser.achievements.includes(challenge.id)) {
                    state.currentUser.challengesCompleted.push(challenge.id);
                }
            }
        });
        
        localStorage.setItem(STORAGE_KEYS.CHALLENGES, JSON.stringify(state.challenges));
        
        return completed;
    }

    /**
     * Get active challenges
     */
    function getActiveChallenges() {
        return state.challenges.filter(c => !c.completed);
    }

    /**
     * Get completed challenges
     */
    function getCompletedChallenges() {
        return state.challenges.filter(c => c.completed);
    }

    // ==================== LEADERBOARD FUNCTIONS ====================

    /**
     * Get leaderboard data
     */
    function getLeaderboard(timeframe = 'overall', limit = 100) {
        let data = [...state.leaderboard];
        
        // Sort by XP (score)
        data.sort((a, b) => b.xp - a.xp);
        
        // Update ranks
        data.forEach((user, index) => {
            user.rank = index + 1;
        });
        
        // Filter by timeframe (simplified - in real app would use date filters)
        switch (timeframe) {
            case 'week':
                // Would filter to this week's activity
                break;
            case 'month':
                // Would filter to this month's activity
                break;
            case 'alltime':
            default:
                // All data
                break;
        }
        
        return data.slice(0, limit);
    }

    /**
     * Update current user in leaderboard
     */
    function updateUserInLeaderboard() {
        if (!state.currentUser) return;
        
        const existingIndex = state.leaderboard.findIndex(
            u => u.username === state.currentUser.username
        );
        
        const userEntry = {
            username: state.currentUser.username,
            xp: state.currentUser.xp,
            mocksCreated: state.currentUser.mocksCreated,
            bestGrade: state.currentUser.stats.bestGrade,
            level: state.currentUser.level,
            lastActive: new Date().toISOString(),
            trend: 0
        };
        
        if (existingIndex >= 0) {
            // Calculate trend
            const oldRank = existingIndex + 1;
            state.leaderboard[existingIndex] = userEntry;
            
            // Re-sort to get new rank
            state.leaderboard.sort((a, b) => b.xp - a.xp);
            const newRank = state.leaderboard.findIndex(u => u.username === state.currentUser.username) + 1;
            
            userEntry.trend = oldRank - newRank;
            state.leaderboard[newRank - 1] = userEntry;
        } else {
            state.leaderboard.push(userEntry);
            state.leaderboard.sort((a, b) => b.xp - a.xp);
        }
        
        saveLeaderboard();
    }

    /**
     * Get user's rank
     */
    function getUserRank() {
        if (!state.currentUser) return 0;
        
        const rank = state.leaderboard.findIndex(
            u => u.username === state.currentUser.username
        );
        
        return rank >= 0 ? rank + 1 : 0;
    }

    /**
     * Get user's percentile
     */
    function getUserPercentile() {
        const rank = getUserRank();
        if (rank === 0) return 0;
        
        const percentile = Math.round((1 - (rank / state.leaderboard.length)) * 100);
        return percentile;
    }

    // ==================== FRIENDS SYSTEM ====================

    /**
     * Add a friend
     */
    function addFriend(username) {
        if (!state.currentUser) return { success: false, error: 'Not logged in' };
        if (username === state.currentUser.username) {
            return { success: false, error: 'Cannot add yourself' };
        }
        if (state.currentUser.friends.includes(username)) {
            return { success: false, error: 'Already friends' };
        }
        
        // Check if user exists in leaderboard
        const userExists = state.leaderboard.some(u => u.username === username);
        if (!userExists) {
            return { success: false, error: 'User not found' };
        }
        
        state.currentUser.friends.push(username);
        saveUserData();
        
        // Award XP for adding friend
        addXP(XP_VALUES.ADD_FRIEND, 'Added friend');
        
        return { success: true };
    }

    /**
     * Remove a friend
     */
    function removeFriend(username) {
        if (!state.currentUser) return false;
        
        state.currentUser.friends = state.currentUser.friends.filter(f => f !== username);
        saveUserData();
        
        return true;
    }

    /**
     * Get friends leaderboard
     */
    function getFriendsLeaderboard() {
        if (!state.currentUser || !state.currentUser.friends.length) return [];
        
        const friends = state.leaderboard.filter(
            u => state.currentUser.friends.includes(u.username)
        );
        
        // Add current user
        friends.push({
            username: state.currentUser.username,
            xp: state.currentUser.xp,
            level: state.currentUser.level,
            mocksCreated: state.currentUser.mocksCreated,
            isCurrentUser: true
        });
        
        friends.sort((a, b) => b.xp - a.xp);
        
        return friends;
    }

    // ==================== MOCK HISTORY ====================

    /**
     * Save mock to history
     */
    function saveMockToHistory(mock) {
        if (!state.currentUser) return;
        
        const mockEntry = {
            id: Date.now().toString(),
            name: mock.name || `Mock #${state.currentUser.mockHistory.length + 1}`,
            date: new Date().toISOString(),
            score: mock.score || 0,
            grade: mock.overallGrade || 'N/A',
            rounds: mock.totalRounds || 1,
            picks: mock.picks.length,
            trades: (mock.trades || []).length,
            timeSpent: mock.timeSpent || 0,
            data: mock // Full mock data for re-loading
        };
        
        state.currentUser.mockHistory.unshift(mockEntry);
        
        // Keep only last 50 mocks
        if (state.currentUser.mockHistory.length > 50) {
            state.currentUser.mockHistory = state.currentUser.mockHistory.slice(0, 50);
        }
        
        saveUserData();
        
        return mockEntry;
    }

    /**
     * Get mock history
     */
    function getMockHistory(sortBy = 'newest') {
        if (!state.currentUser) return [];
        
        let history = [...state.currentUser.mockHistory];
        
        switch (sortBy) {
            case 'oldest':
                history.reverse();
                break;
            case 'score':
                history.sort((a, b) => b.score - a.score);
                break;
            case 'grade':
                const gradeOrder = { 'A+': 0, 'A': 1, 'A-': 2, 'B+': 3, 'B': 4, 'B-': 5, 'C+': 6, 'C': 7 };
                history.sort((a, b) => (gradeOrder[a.grade] || 99) - (gradeOrder[b.grade] || 99));
                break;
            case 'newest':
            default:
                // Already sorted by newest
                break;
        }
        
        return history;
    }

    /**
     * Delete mock from history
     */
    function deleteMock(mockId) {
        if (!state.currentUser) return false;
        
        state.currentUser.mockHistory = state.currentUser.mockHistory.filter(m => m.id !== mockId);
        saveUserData();
        
        return true;
    }

    // ==================== LOGIN STREAK ====================

    /**
     * Check and update login streak
     */
    function checkLoginStreak() {
        const lastLogin = localStorage.getItem(STORAGE_KEYS.LAST_LOGIN);
        const today = new Date().toDateString();
        
        if (lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            let streak = parseInt(localStorage.getItem(STORAGE_KEYS.LOGIN_STREAK) || '0');
            
            if (lastLogin === yesterday.toDateString()) {
                // Consecutive day
                streak++;
            } else {
                // Streak broken
                streak = 1;
            }
            
            localStorage.setItem(STORAGE_KEYS.LOGIN_STREAK, streak.toString());
            localStorage.setItem(STORAGE_KEYS.LAST_LOGIN, today);
            
            // Award XP for login
            let xp = XP_VALUES.LOGIN_DAILY;
            if (streak === 7) xp += XP_VALUES.STREAK_BONUS_7;
            if (streak === 30) xp += XP_VALUES.STREAK_BONUS_30;
            
            addXP(xp, `Daily Login (Streak: ${streak})`);
            
            // Check streak achievements
            checkAchievements('login_streak');
        }
    }

    /**
     * Get current login streak
     */
    function getLoginStreak() {
        return parseInt(localStorage.getItem(STORAGE_KEYS.LOGIN_STREAK) || '0');
    }

    // ==================== UTILITY FUNCTIONS ====================

    /**
     * Get week number of year
     */
    function getWeekNumber(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    /**
     * Format number with commas
     */
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    /**
     * Get grade color
     */
    function getGradeColor(grade) {
        const colors = {
            'A+': '#22c55e', 'A': '#4ade80', 'A-': '#86efac',
            'B+': '#3b82f6', 'B': '#60a5fa', 'B-': '#93c5fd',
            'C+': '#eab308', 'C': '#facc15', 'C-': '#fde047',
            'D+': '#f97316', 'D': '#fb923c', 'D-': '#fdba74',
            'F': '#ef4444'
        };
        return colors[grade] || '#9ca3af';
    }

    // ==================== UI FUNCTIONS ====================

    /**
     * Update UI with current user data
     */
    function updateUI() {
        if (!state.currentUser) return;

        // Header
        const headerUsername = document.getElementById('headerUsername');
        if (headerUsername) {
            headerUsername.textContent = state.currentUser.username;
        }

        // Current user stats on leaderboard
        const userRank = getUserRank();
        const userPercentile = getUserPercentile();
        
        const userRankEl = document.getElementById('userRank');
        const userScoreEl = document.getElementById('userScore');
        const userLevelEl = document.getElementById('userLevel');
        const userPercentileEl = document.getElementById('userPercentile');

        if (userRankEl) userRankEl.textContent = userRank > 0 ? `#${userRank}` : '-';
        if (userScoreEl) userScoreEl.textContent = formatNumber(state.currentUser.xp);
        if (userLevelEl) userLevelEl.textContent = state.currentUser.level;
        if (userPercentileEl) userPercentileEl.textContent = userPercentile > 0 ? `Top ${userPercentile}%` : '-';
    }

    /**
     * Render leaderboard table
     */
    function renderLeaderboard() {
        const tbody = document.getElementById('leaderboardBody');
        if (!tbody) return;

        const data = getLeaderboard(state.currentTimeframe);
        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        const pageData = data.slice(start, end);

        tbody.innerHTML = pageData.map((user, index) => {
            const rank = start + index + 1;
            const rankDisplay = rank <= 3 ? 
                ['🥇', '🥈', '🥉'][rank - 1] : rank;
            
            const trendIcon = user.trend > 0 ? '↗️' : user.trend < 0 ? '↘️' : '➡️';
            const trendClass = user.trend > 0 ? 'up' : user.trend < 0 ? 'down' : 'same';
            
            const isCurrentUser = user.username === state.currentUser?.username;
            const rowClass = isCurrentUser ? 'current-user' : '';

            return `
                <tr class="${rowClass}">
                    <td class="rank-col">
                        <span class="rank-badge rank-${rank <= 3 ? rank : 'other'}">${rankDisplay}</span>
                    </td>
                    <td class="user-col">
                        <div class="user-info">
                            <span class="username">${user.username}</span>
                            ${isCurrentUser ? '<span class="you-badge">YOU</span>' : ''}
                        </div>
                    </td>
                    <td class="score-col">
                        <span class="score">${formatNumber(user.xp)}</span>
                    </td>
                    <td class="mocks-col">${user.mocksCreated}</td>
                    <td class="grade-col">
                        <span class="grade-badge" style="background: ${getGradeColor(user.bestGrade)}">
                            ${user.bestGrade}
                        </span>
                    </td>
                    <td class="level-col">
                        <span class="level-badge-table">${user.level}</span>
                    </td>
                    <td class="trend-col">
                        <span class="trend ${trendClass}">${trendIcon} ${Math.abs(user.trend || 0)}</span>
                    </td>
                </tr>
            `;
        }).join('');

        // Update pagination
        const totalPages = Math.ceil(data.length / state.itemsPerPage);
        const pageInfo = document.getElementById('pageInfo');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (pageInfo) pageInfo.textContent = `Page ${state.currentPage} of ${totalPages}`;
        if (prevBtn) prevBtn.disabled = state.currentPage === 1;
        if (nextBtn) nextBtn.disabled = state.currentPage >= totalPages;
    }

    /**
     * Render challenges
     */
    function renderChallenges() {
        const grid = document.getElementById('challengesGrid');
        if (!grid) return;

        grid.innerHTML = state.challenges.map(challenge => {
            const isCompleted = challenge.completed;
            return `
                <div class="challenge-card ${isCompleted ? 'completed' : ''}">
                    <div class="challenge-header">
                        <h4>${challenge.name}</h4>
                        ${isCompleted ? '<span class="completed-badge">✓ Completed</span>' : ''}
                    </div>
                    <p class="challenge-desc">${challenge.desc}</p>
                    <div class="challenge-reward">
                        <span class="reward-xp">+${challenge.reward.xp} XP</span>
                        ${challenge.reward.badge ? `<span class="reward-badge">${challenge.reward.badge}</span>` : ''}
                    </div>
                    ${!isCompleted ? `
                        <button class="btn-primary btn-sm" onclick="startChallenge('${challenge.id}')">
                            Start Challenge
                        </button>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    /**
     * Render achievements showcase
     */
    function renderAchievementsShowcase() {
        const grid = document.getElementById('achievementsShowcase');
        if (!grid) return;

        const userAchievements = state.currentUser?.achievements || [];

        grid.innerHTML = ACHIEVEMENTS.map(achievement => {
            const unlocked = userAchievements.includes(achievement.id);
            const rarityClass = achievement.rarity;
            
            return `
                <div class="achievement-showcase-item ${unlocked ? 'unlocked' : 'locked'} ${rarityClass}">
                    <div class="achievement-icon-large">${achievement.icon}</div>
                    <div class="achievement-info">
                        <h4>${achievement.name}</h4>
                        <p>${achievement.desc}</p>
                        ${unlocked ? 
                            '<span class="unlocked-badge">✓ Unlocked</span>' : 
                            '<span class="locked-badge">🔒 Locked</span>'
                        }
                    </div>
                    <span class="achievement-xp">+${achievement.xp} XP</span>
                </div>
            `;
        }).join('');
    }

    /**
     * Update profile page UI
     */
    function updateProfileUI() {
        if (!state.currentUser) return;

        const levelInfo = calculateLevel(state.currentUser.xp);
        const nextLevel = getXPForNextLevel(state.currentUser.level);
        const xpForNext = nextLevel ? nextLevel - state.currentUser.xp : 0;
        const progressPercent = nextLevel ? 
            ((state.currentUser.xp - levelInfo.xp) / (nextLevel - levelInfo.xp)) * 100 : 100;

        // Update text elements
        const elements = {
            'profileUsername': state.currentUser.username,
            'profileTitle': levelInfo.name,
            'joinDate': new Date(state.currentUser.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            'quickScore': formatNumber(state.currentUser.xp),
            'quickMocks': state.currentUser.mocksCreated,
            'quickRank': '#' + getUserRank(),
            'currentLevel': state.currentUser.level,
            'nextLevel': state.currentUser.level + 1,
            'levelProgressText': `${formatNumber(state.currentUser.xp)} / ${formatNumber(nextLevel || state.currentUser.xp)} XP`,
            'levelName': levelInfo.name,
            'statTotalScore': formatNumber(state.currentUser.totalScore),
            'statMocks': state.currentUser.mocksCreated,
            'statAvgGrade': state.currentUser.stats.avgGrade,
            'statBestGrade': state.currentUser.stats.bestGrade,
            'statBestPick': state.currentUser.stats.bestPick ? 
                `${state.currentUser.stats.bestPick.player} at #${state.currentUser.stats.bestPick.pick}` : 'None yet',
            'statFavTeam': state.currentUser.favoriteTeam || 'Not set',
            'achievementProgress': `${state.currentUser.achievements.length}/${ACHIEVEMENTS.length} Unlocked`
        };

        Object.entries(elements).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        });

        // Update progress bars
        const levelProgressFill = document.getElementById('levelProgressFill');
        if (levelProgressFill) {
            levelProgressFill.style.width = `${progressPercent}%`;
        }

        const levelBadge = document.getElementById('levelBadge');
        if (levelBadge) {
            levelBadge.textContent = state.currentUser.level;
        }

        const achievementProgressBar = document.getElementById('achievementProgressBar');
        if (achievementProgressBar) {
            const achievementPercent = (state.currentUser.achievements.length / ACHIEVEMENTS.length) * 100;
            achievementProgressBar.style.width = `${achievementPercent}%`;
        }
    }

    /**
     * Render achievements list for profile
     */
    function renderAchievementsList() {
        const list = document.getElementById('achievementsList');
        if (!list) return;

        const userAchievements = state.currentUser?.achievements || [];

        list.innerHTML = ACHIEVEMENTS.slice(0, 8).map(achievement => {
            const unlocked = userAchievements.includes(achievement.id);
            return `
                <div class="achievement-list-item ${unlocked ? 'unlocked' : 'locked'}">
                    <span class="achievement-icon-sm">${achievement.icon}</span>
                    <div class="achievement-list-info">
                        <span class="achievement-name-sm">${achievement.name}</span>
                        ${unlocked ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-lock"></i>'}
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Render mock history
     */
    function renderMockHistory() {
        const list = document.getElementById('mockHistoryList');
        if (!list) return;

        const history = getMockHistory(document.getElementById('historySort')?.value || 'newest');

        if (history.length === 0) {
            list.innerHTML = '<p class="no-data">No mocks created yet. Start drafting!</p>';
            return;
        }

        list.innerHTML = history.slice(0, 5).map(mock => {
            const date = new Date(mock.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            });
            const timeAgo = getTimeAgo(new Date(mock.date));

            return `
                <div class="mock-history-item">
                    <div class="mock-info">
                        <h4>${mock.name}</h4>
                        <div class="mock-meta">
                            <span class="mock-date">${timeAgo}</span>
                            <span class="mock-rounds">${mock.rounds} rounds</span>
                            ${mock.trades > 0 ? `<span class="mock-trades">${mock.trades} trades</span>` : ''}
                        </div>
                    </div>
                    <div class="mock-stats">
                        <span class="mock-grade" style="background: ${getGradeColor(mock.grade)}">${mock.grade}</span>
                        <span class="mock-score">${formatNumber(mock.score)} pts</span>
                    </div>
                    <div class="mock-actions">
                        <button class="btn-icon" title="Load Mock" onclick="loadMock('${mock.id}')">
                            <i class="fas fa-folder-open"></i>
                        </button>
                        <button class="btn-icon" title="Delete" onclick="deleteMockEntry('${mock.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Render friends list
     */
    function renderFriendsList() {
        const list = document.getElementById('friendsList');
        if (!list) return;

        if (!state.currentUser?.friends?.length) {
            list.innerHTML = '<p class="no-data">No friends yet. Add some to compare!</p>';
            return;
        }

        const friends = getFriendsLeaderboard();

        list.innerHTML = friends.map(friend => `
            <div class="friend-item ${friend.isCurrentUser ? 'is-you' : ''}">
                <div class="friend-info">
                    <span class="friend-rank">#${friends.indexOf(friend) + 1}</span>
                    <span class="friend-name">${friend.username} ${friend.isCurrentUser ? '(You)' : ''}</span>
                </div>
                <div class="friend-stats">
                    <span class="friend-level">Lv.${friend.level}</span>
                    <span class="friend-score">${formatNumber(friend.xp)} XP</span>
                </div>
                ${!friend.isCurrentUser ? `
                    <button class="btn-icon btn-remove" onclick="removeFriend('${friend.username}')">
                        <i class="fas fa-times"></i>
                    </button>
                ` : ''}
            </div>
        `).join('');
    }

    /**
     * Get time ago string
     */
    function getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + ' years ago';
        
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + ' months ago';
        
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + ' days ago';
        
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + ' hours ago';
        
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + ' minutes ago';
        
        return 'Just now';
    }

    // ==================== NOTIFICATIONS ====================

    /**
     * Show achievement popup
     */
    function showAchievementPopup(achievement) {
        const popup = document.getElementById('achievementPopup');
        const icon = document.getElementById('popupIcon');
        const name = document.getElementById('popupName');
        const desc = document.getElementById('popupDesc');

        if (popup && icon && name && desc) {
            icon.textContent = achievement.icon;
            name.textContent = achievement.name;
            desc.textContent = achievement.desc;
            
            popup.classList.add('show');
            
            setTimeout(() => {
                popup.classList.remove('show');
            }, 5000);
        }
    }

    /**
     * Show level up notification
     */
    function showLevelUpNotification(level) {
        // Could implement a toast notification here
        console.log(`🎉 Level Up! You are now Level ${level.level} - ${level.name}`);
    }

    // ==================== EVENT LISTENERS ====================

    function setupEventListeners() {
        // Timeframe tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                state.currentTimeframe = this.dataset.timeframe;
                state.currentPage = 1;
                renderLeaderboard();
            });
        });

        // Pagination
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (state.currentPage > 1) {
                    state.currentPage--;
                    renderLeaderboard();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const totalPages = Math.ceil(state.leaderboard.length / state.itemsPerPage);
                if (state.currentPage < totalPages) {
                    state.currentPage++;
                    renderLeaderboard();
                }
            });
        }

        // Search
        const searchInput = document.getElementById('searchUser');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                // Filter leaderboard (simplified implementation)
                renderLeaderboard();
            }, 300));
        }
    }

    function setupProfileEventListeners() {
        // History sort
        const historySort = document.getElementById('historySort');
        if (historySort) {
            historySort.addEventListener('change', () => {
                renderMockHistory();
            });
        }

        // Add friend
        const addFriendBtn = document.getElementById('addFriendBtn');
        const addFriendInput = document.getElementById('addFriendInput');

        if (addFriendBtn && addFriendInput) {
            addFriendBtn.addEventListener('click', () => {
                const username = addFriendInput.value.trim();
                if (username) {
                    const result = addFriend(username);
                    if (result.success) {
                        addFriendInput.value = '';
                        renderFriendsList();
                        alert(`Added ${username} as a friend!`);
                    } else {
                        alert(result.error || 'Failed to add friend');
                    }
                }
            });

            addFriendInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    addFriendBtn.click();
                }
            });
        }

        // Edit profile form
        const editForm = document.getElementById('editProfileForm');
        if (editForm) {
            editForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newUsername = document.getElementById('editUsername')?.value;
                const newFavTeam = document.getElementById('editFavTeam')?.value;

                if (newUsername) state.currentUser.username = newUsername;
                if (newFavTeam) state.currentUser.favoriteTeam = newFavTeam;

                saveUserData();
                updateUserInLeaderboard();
                updateProfileUI();
                closeEditProfileModal();
            });
        }
    }

    /**
     * Debounce function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==================== GLOBAL FUNCTIONS ====================

    // Expose global functions for HTML onclick handlers
    window.closeAchievementPopup = function() {
        const popup = document.getElementById('achievementPopup');
        if (popup) popup.classList.remove('show');
    };

    window.startChallenge = function(challengeId) {
        alert('Challenge started! Complete a mock draft to fulfill the requirements.');
    };

    window.closeChallengeModal = function() {
        const modal = document.getElementById('challengeModal');
        if (modal) modal.style.display = 'none';
    };

    window.closeEditProfileModal = function() {
        const modal = document.getElementById('editProfileModal');
        if (modal) modal.style.display = 'none';
    };

    window.loadMock = function(mockId) {
        alert('Loading mock draft... (Feature coming soon)');
    };

    window.deleteMockEntry = function(mockId) {
        if (confirm('Are you sure you want to delete this mock?')) {
            deleteMock(mockId);
            renderMockHistory();
        }
    };

    window.removeFriend = function(username) {
        if (confirm(`Remove ${username} from friends?`)) {
            removeFriend(username);
            renderFriendsList();
        }
    };

    // ==================== PUBLIC API ====================

    return {
        // Initialization
        init,
        initProfile,
        
        // Scoring
        calculateMockDraftScore,
        updateUserScore,
        
        // Leveling
        calculateLevel,
        getXPForNextLevel,
        getXPForAction,
        addXP,
        
        // Achievements
        checkAchievements,
        awardAchievement,
        getUserAchievements,
        getAllAchievements: () => ACHIEVEMENTS,
        
        // Challenges
        checkChallenges,
        getActiveChallenges,
        getCompletedChallenges,
        
        // Leaderboard
        getLeaderboard,
        getUserRank,
        getUserPercentile,
        
        // Friends
        addFriend,
        removeFriend,
        getFriendsLeaderboard,
        
        // Mock History
        saveMockToHistory,
        getMockHistory,
        deleteMock,
        
        // User Data
        getCurrentUser: () => state.currentUser,
        updateUserProfile: (updates) => {
            Object.assign(state.currentUser, updates);
            saveUserData();
        },
        
        // Login Streak
        checkLoginStreak,
        getLoginStreak,
        
        // Constants
        LEVEL_THRESHOLDS,
        ACHIEVEMENTS,
        XP_VALUES
    };
})();

// Make it globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LeaderboardSystem;
}

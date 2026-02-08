/**
 * WAR ROOM MODE - JavaScript
 * Immersive NFL Draft GM Simulation
 * 2026 NFL Mock Draft
 */

// ==========================================
// CONFIGURATION & CONSTANTS
// ==========================================

const WAR_ROOM_CONFIG = {
    timer: {
        rookie: 480,     // 8 minutes
        veteran: 300,    // 5 minutes
        gm: 180          // 3 minutes
    },
    tradeTimer: 30,      // 30 seconds to respond to trade
    tradeChance: 0.3,    // 30% chance of trade offer per pick (GM mode)
    newsChance: 0.15,    // 15% chance of news update per pick
    aiPickDelay: 2000,   // 2 seconds between AI picks
    autoPickBuffer: 10   // Auto-pick when 10 seconds remain
};

const ACHIEVEMENTS = {
    speedDemon: { id: 'speedDemon', name: 'Speed Demon', desc: 'Make a pick in under 30 seconds', icon: 'fa-bolt' },
    tradeMaster: { id: 'tradeMaster', name: 'Trade Master', desc: 'Complete 3+ trades', icon: 'fa-handshake' },
    valueHunter: { id: 'valueHunter', name: 'Value Hunter', desc: 'Pick player 10+ spots after ADP', icon: 'fa-search-dollar' },
    gradeA: { id: 'gradeA', name: 'Grade A Student', desc: 'Achieve A+ overall grade', icon: 'fa-star' },
    ironGM: { id: 'ironGM', name: 'Iron GM', desc: 'Complete full 3-round war room', icon: 'fa-medal' },
    needFiller: { id: 'needFiller', name: 'Need Filler', desc: 'Draft 3+ players at positions of need', icon: 'fa-clipboard-check' },
    sleeperPick: { id: 'sleeperPick', name: 'Sleeper Pick', desc: 'Draft player 20+ spots after ADP', icon: 'fa-bed' }
};

const TRADE_VALUE_CHART = {
    1: 3000, 2: 2600, 3: 2200, 4: 1800, 5: 1700,
    6: 1600, 7: 1500, 8: 1400, 9: 1350, 10: 1300,
    11: 1250, 12: 1200, 13: 1150, 14: 1100, 15: 1050,
    16: 1000, 17: 950, 18: 900, 19: 875, 20: 850,
    21: 800, 22: 780, 23: 760, 24: 740, 25: 720,
    26: 700, 27: 680, 28: 660, 29: 640, 30: 620,
    31: 600, 32: 590, 33: 580, 34: 560, 35: 550,
    36: 540, 37: 530, 38: 520, 39: 510, 40: 500,
    41: 490, 42: 480, 43: 470, 44: 460, 45: 450,
    46: 440, 47: 430, 48: 420, 49: 410, 50: 400,
    51: 390, 52: 380, 53: 370, 54: 360, 55: 350,
    56: 340, 57: 330, 58: 320, 59: 310, 60: 300,
    61: 292, 62: 284, 63: 276, 64: 270, 65: 265,
    66: 260, 67: 255, 68: 250, 69: 245, 70: 240,
    71: 235, 72: 230, 73: 225, 74: 220, 75: 215,
    76: 210, 77: 205, 78: 200, 79: 195, 80: 190,
    81: 185, 82: 180, 83: 175, 84: 170, 85: 165,
    86: 160, 87: 155, 88: 150, 89: 145, 90: 140,
    91: 136, 92: 132, 93: 128, 94: 124, 95: 120,
    96: 116, 97: 112, 98: 108, 99: 104, 100: 100
};

const NEWS_MESSAGES = [
    "Sources say {team} is very interested in {player}",
    "Multiple teams looking to move up for {position}",
    "{player}'s stock is rising after pro day",
    "Scouts impressed with {player}'s workout",
    "{team} GM has been quiet - potential trade brewing?",
    "NFL Network reports {team} loves {player}",
    "Insider: {position} run expected soon",
    "Social media buzzing about {player} to {team}"
];

// ==========================================
// STATE MANAGEMENT
// ==========================================

const WarRoomState = {
    // Configuration
    selectedTeam: null,
    difficulty: 'veteran',
    roundsToComplete: 'all',
    practiceMode: false,
    soundEnabled: true,
    
    // Game State
    isActive: false,
    isPaused: false,
    currentPick: 1,
    currentRound: 1,
    timeRemaining: 300,
    timerInterval: null,
    
    // Draft Data
    userPicks: [],
    aiPicks: [],
    allPicks: [],
    availablePlayers: [],
    userTeamNeeds: [],
    
    // Stats
    stats: {
        totalTimeSpent: 0,
        pickTimes: [],
        tradesMade: 0,
        tradesDeclined: 0,
        tradesReceived: 0,
        bestValuePick: null,
        biggestReach: null,
        fanSentiment: 100,
        picksByPosition: {},
        needsFilled: 0
    },
    
    // Achievements
    unlockedAchievements: [],
    
    // Trade State
    pendingTrade: null,
    tradeTimerInterval: null,
    
    // Current selection
    currentFilter: 'all',
    searchQuery: ''
};

// ==========================================
// TEAM DATA
// ==========================================

const TEAM_DATA = [
    { id: 'raiders', name: 'Las Vegas Raiders', city: 'Las Vegas', record: '3-14', color: '#000000', accent: '#A5ACAF', needs: ['QB', 'EDGE', 'WR', 'OL', 'DL'] },
    { id: 'jets', name: 'New York Jets', city: 'New York', record: '3-14', color: '#125740', accent: '#ffffff', needs: ['QB', 'OL', 'EDGE', 'WR', 'CB'] },
    { id: 'cardinals', name: 'Arizona Cardinals', city: 'Arizona', record: '3-14', color: '#97233F', accent: '#000000', needs: ['OT', 'DL', 'EDGE', 'CB', 'S'] },
    { id: 'titans', name: 'Tennessee Titans', city: 'Tennessee', record: '3-14', color: '#0C2340', accent: '#4C8FB6', needs: ['WR', 'CB', 'EDGE', 'QB', 'OL'] },
    { id: 'giants', name: 'New York Giants', city: 'New York', record: '4-13', color: '#001E62', accent: '#A71930', needs: ['DL', 'QB', 'WR', 'EDGE', 'CB'] },
    { id: 'browns', name: 'Cleveland Browns', city: 'Cleveland', record: '5-12', color: '#311D00', accent: '#FF3C00', needs: ['QB', 'CB', 'WR', 'OT', 'DL'] },
    { id: 'commanders', name: 'Washington Commanders', city: 'Washington', record: '5-12', color: '#773141', accent: '#FFB612', needs: ['EDGE', 'CB', 'LB', 'DL', 'WR'] },
    { id: 'saints', name: 'New Orleans Saints', city: 'New Orleans', record: '6-11', color: '#101820', accent: '#D3BC8D', needs: ['WR', 'OT', 'CB', 'EDGE', 'DL'] },
    { id: 'chiefs', name: 'Kansas City Chiefs', city: 'Kansas City', record: '6-11', color: '#E31837', accent: '#FFB81C', needs: ['EDGE', 'WR', 'CB', 'DL', 'OT'] },
    { id: 'bengals', name: 'Cincinnati Bengals', city: 'Cincinnati', record: '6-11', color: '#FB4F14', accent: '#000000', needs: ['DL', 'OT', 'LB', 'CB', 'EDGE'] },
    { id: 'dolphins', name: 'Miami Dolphins', city: 'Miami', record: '7-10', color: '#008E97', accent: '#FC4C02', needs: ['QB', 'IOL', 'EDGE', 'CB', 'DL'] },
    { id: 'cowboys', name: 'Dallas Cowboys', city: 'Dallas', record: '7-9-1', color: '#003594', accent: '#869397', needs: ['CB', 'S', 'LB', 'EDGE', 'DL'] },
    { id: 'rams', name: 'Los Angeles Rams', city: 'Los Angeles', record: '14-3', color: '#003594', accent: '#FFD100', needs: ['DL', 'EDGE', 'OL', 'CB', 'S'] },
    { id: 'ravens', name: 'Baltimore Ravens', city: 'Baltimore', record: '8-9', color: '#241773', accent: '#9E7C0C', needs: ['EDGE', 'WR', 'CB', 'DL', 'LB'] },
    { id: 'buccaneers', name: 'Tampa Bay Buccaneers', city: 'Tampa Bay', record: '8-9', color: '#D50A0A', accent: '#FF7900', needs: ['EDGE', 'S', 'LB', 'DL', 'CB'] },
    { id: 'lions', name: 'Detroit Lions', city: 'Detroit', record: '15-2', color: '#0076B6', accent: '#B0B7BC', needs: ['IOL', 'LB', 'CB', 'EDGE', 'DL'] },
    { id: 'vikings', name: 'Minnesota Vikings', city: 'Minnesota', record: '9-8', color: '#4F2683', accent: '#FFC62F', needs: ['OT', 'WR', 'CB', 'EDGE', 'DL'] },
    { id: 'panthers', name: 'Carolina Panthers', city: 'Carolina', record: '6-11', color: '#0085CA', accent: '#101820', needs: ['EDGE', 'TE', 'CB', 'DL', 'WR'] },
    { id: 'steelers', name: 'Pittsburgh Steelers', city: 'Pittsburgh', record: '13-4', color: '#FFB612', accent: '#101820', needs: ['QB', 'IOL', 'DL', 'CB', 'WR'] },
    { id: 'chargers', name: 'Los Angeles Chargers', city: 'Los Angeles', record: '11-6', color: '#0076B6', accent: '#FFB81C', needs: ['IOL', 'DL', 'CB', 'EDGE', 'WR'] },
    { id: 'bears', name: 'Chicago Bears', city: 'Chicago', record: '8-9', color: '#0B162A', accent: '#C83803', needs: ['EDGE', 'IOL', 'WR', 'CB', 'DL'] },
    { id: 'bills', name: 'Buffalo Bills', city: 'Buffalo', record: '12-5', color: '#00338D', accent: '#C60C30', needs: ['WR', 'CB', 'EDGE', 'DL', 'LB'] },
    { id: 'fortyniners', name: 'San Francisco 49ers', city: 'San Francisco', record: '10-7', color: '#AA0000', accent: '#B3995D', needs: ['EDGE', 'CB', 'S', 'DL', 'LB'] },
    { id: 'texans', name: 'Houston Texans', city: 'Houston', record: '12-5', color: '#03202F', accent: '#A71930', needs: ['RB', 'WR', 'DL', 'EDGE', 'CB'] },
    { id: 'eagles', name: 'Philadelphia Eagles', city: 'Philadelphia', record: '13-4', color: '#004C54', accent: '#A5ACAF', needs: ['CB', 'IOL', 'EDGE', 'DL', 'S'] },
    { id: 'broncos', name: 'Denver Broncos', city: 'Denver', record: '14-3', color: '#FB4F14', accent: '#002244', needs: ['LB', 'OT', 'S', 'EDGE', 'DL'] },
    { id: 'packers', name: 'Green Bay Packers', city: 'Green Bay', record: '9-8', color: '#203731', accent: '#FFB612', needs: ['WR', 'CB', 'EDGE', 'DL', 'OT'] },
    { id: 'falcons', name: 'Atlanta Falcons', city: 'Atlanta', record: '8-9', color: '#000000', accent: '#A71930', needs: ['EDGE', 'CB', 'WR', 'DL', 'LB'] },
    { id: 'colts', name: 'Indianapolis Colts', city: 'Indianapolis', record: '10-7', color: '#003594', accent: '#FFB81C', needs: ['WR', 'EDGE', 'CB', 'DL', 'S'] },
    { id: 'seahawks', name: 'Seattle Seahawks', city: 'Seattle', record: '12-5', color: '#002244', accent: '#69BE28', needs: ['IOL', 'DL', 'LB', 'EDGE', 'CB'] },
    { id: 'jaguars', name: 'Jacksonville Jaguars', city: 'Jacksonville', record: '10-7', color: '#006778', accent: '#D7A22A', needs: ['RB', 'DL', 'S', 'CB', 'EDGE'] },
    { id: 'patriots', name: 'New England Patriots', city: 'New England', record: '10-7', color: '#002244', accent: '#C60C30', needs: ['EDGE', 'WR', 'OT', 'CB', 'DL'] }
];

// ==========================================
// PLAYER DATA (Sample - would be populated from data.js)
// ==========================================

const PLAYER_DATABASE = [
    // === ROUND 1 TIER (Ranks 1-32) ===
    { name: 'Fernando Mendoza', position: 'QB', school: 'Indiana', rank: 1, edp: 1.2, height: "6'5\"", weight: 225, forty: '4.78', analysis: 'Elite accuracy and pocket presence. Franchise QB material.', strengths: ['Elite ball placement', 'Quick release', 'Prototypical size'] },
    { name: 'Arvell Reese', position: 'LB', school: 'Ohio State', rank: 2, edp: 2.5, height: "6'4\"", weight: 243, forty: '4.60', analysis: 'Elite athlete with Micah Parsons upside.', strengths: ['Elite burst', 'Pass-rush ability', 'Versatile'] },
    { name: 'Jeremiyah Love', position: 'RB', school: 'Notre Dame', rank: 3, edp: 4.1, height: "6'0\"", weight: 214, forty: '4.45', analysis: 'Explosive RB with elite receiving ability.', strengths: ['Reggie Bush-like dynamo', 'Elite vision', 'Receiving threat'] },
    { name: 'David Bailey', position: 'EDGE', school: 'Texas Tech', rank: 4, edp: 5.3, height: "6'3\"", weight: 250, forty: '4.58', analysis: 'Elite speed rusher with first-step quickness.', strengths: ['Elite get-off', 'Bend', 'Explosive'] },
    { name: 'Caleb Downs', position: 'S', school: 'Ohio State', rank: 5, edp: 5.8, height: "6'0\"", weight: 205, forty: '4.45', analysis: 'Defensive coordinator on the field.', strengths: ['Elite instincts', 'Versatility', 'Tackling'] },
    { name: 'Rueben Bain Jr.', position: 'EDGE', school: 'Miami', rank: 6, edp: 7.1, height: "6'3\"", weight: 275, forty: '4.72', analysis: 'Violent edge rusher with non-stop motor.', strengths: ['Speed-to-power', 'High motor', '11.5 sacks'] },
    { name: 'Spencer Fano', position: 'OT', school: 'Utah', rank: 7, edp: 8.2, height: "6'6\"", weight: 302, forty: '5.15', analysis: 'Technically sound with good punch.', strengths: ['Technique', 'Footwork', 'Zone fit'] },
    { name: 'Francis Mauigoa', position: 'OT', school: 'Miami', rank: 8, edp: 6.3, height: "6'6\"", weight: 315, forty: '5.08', analysis: 'True mauler who destroys pass rushers.', strengths: ['Only 2 sacks allowed', 'Violent finisher', 'Versatile'] },
    { name: 'Jordyn Tyson', position: 'WR', school: 'Arizona State', rank: 9, edp: 10.5, height: "6'2\"", weight: 200, forty: '4.48', analysis: 'Explosive receiver who wins 50/50 balls.', strengths: ['Contested catches', 'Red zone threat', 'Route savvy'] },
    { name: 'Sonny Styles', position: 'LB', school: 'Ohio State', rank: 10, edp: 11.2, height: "6'4\"", weight: 243, forty: '4.55', analysis: 'Former safety with elite speed for a LB.', strengths: ['Coverage ability', 'Sideline-to-sideline', 'Modern LB'] },
    { name: 'Carnell Tate', position: 'WR', school: 'Ohio State', rank: 11, edp: 9.8, height: "6'3\"", weight: 195, forty: '4.43', analysis: 'Tall, precise route runner with excellent hands.', strengths: ['Size and body control', 'Contested catches', '17.2 YPC'] },
    { name: 'Keldric Faulk', position: 'EDGE', school: 'Auburn', rank: 12, edp: 12.1, height: "6'6\"", weight: 285, forty: '4.80', analysis: 'Perfect 4-3 DE frame with powerful hands.', strengths: ['Length', 'Strength', 'Run defense'] },
    { name: 'Kenyon Sadiq', position: 'TE', school: 'Oregon', rank: 13, edp: 14.5, height: "6'3\"", weight: 245, forty: '4.60', analysis: 'Versatile explosive weapon for modern NFL.', strengths: ['Athleticism', 'Mismatch', 'Hands'] },
    { name: 'Peter Woods', position: 'DL', school: 'Clemson', rank: 14, edp: 13.1, height: "6'3\"", weight: 315, forty: '5.05', analysis: 'Day-one starter at 3-technique.', strengths: ['Gap penetration', 'Quickness', 'High motor'] },
    { name: 'Makai Lemon', position: 'WR', school: 'USC', rank: 15, edp: 14.8, height: "5'11\"", weight: 190, forty: '4.40', analysis: 'Warrior with RB body and elite slot ability.', strengths: ['Quickness', 'YAC ability', 'Toughness'] },
    { name: 'Mansoor Delane', position: 'CB', school: 'LSU', rank: 16, edp: 16.2, height: "6'2\"", weight: 195, forty: '4.40', analysis: 'Most instinctive CB in class.', strengths: ['Ball skills', 'Instincts', 'Press coverage'] },
    { name: 'Caleb Lomu', position: 'OT', school: 'Utah', rank: 17, edp: 17.4, height: "6'6\"", weight: 310, forty: '5.05', analysis: 'Agile bookend with franchise LT upside.', strengths: ['Length', 'Athleticism', 'Run blocking'] },
    { name: 'Akheem Mesidor', position: 'EDGE', school: 'Miami', rank: 18, edp: 16.7, height: "6'3\"", weight: 280, forty: '4.75', analysis: 'Powerful edge setter with relentless motor.', strengths: ['Power rush', 'Run defense', 'Versatility'] },
    { name: 'Kayden McDonald', position: 'DL', school: 'Ohio State', rank: 19, edp: 18.6, height: "6'3\"", weight: 326, forty: '5.12', analysis: 'Massive gap-eater who demands double teams.', strengths: ['Elite size', 'Gap-eating', 'Anchor'] },
    { name: 'Jermod McCoy', position: 'CB', school: 'Tennessee', rank: 20, edp: 19.1, height: "6'0\"", weight: 193, forty: '4.40', analysis: 'Lockdown corner with 4.40 speed.', strengths: ['Press-man', 'Ball skills', 'Recovery speed'] },
    { name: 'Ty Simpson', position: 'QB', school: 'Alabama', rank: 21, edp: 19.5, height: "6'2\"", weight: 210, forty: '4.73', analysis: 'Arm talent with mobility and upside.', strengths: ['Arm strength', 'Athleticism', 'Upside'] },
    { name: 'Avieon Terrell', position: 'CB', school: 'Clemson', rank: 22, edp: 21.3, height: "6'0\"", weight: 190, forty: '4.40', analysis: 'Smooth corner with elite coverage instincts.', strengths: ['Footwork', 'Ball skills', 'Technique'] },
    { name: 'Kadyn Proctor', position: 'OT', school: 'Alabama', rank: 23, edp: 22.1, height: "6'7\"", weight: 330, forty: '5.18', analysis: 'Mammoth tackle with rare athleticism for his size.', strengths: ['Size', 'Athleticism', 'Power'] },
    { name: 'Denzel Boston', position: 'WR', school: 'Washington', rank: 24, edp: 23.5, height: "6'4\"", weight: 205, forty: '4.50', analysis: 'Big-framed wideout with exceptional ball skills.', strengths: ['Size', 'Deep threat', 'Contested catches'] },
    { name: 'Monroe Freeling', position: 'OT', school: 'Georgia', rank: 25, edp: 24.8, height: "6'6\"", weight: 310, forty: '5.10', analysis: 'Athletic tackle with excellent feet in pass pro.', strengths: ['Footwork', 'Athleticism', 'Pass protection'] },
    { name: 'Cashius Howell', position: 'EDGE', school: 'Texas A&M', rank: 26, edp: 25.2, height: "6'4\"", weight: 260, forty: '4.68', analysis: 'Explosive edge rusher with violent hands.', strengths: ['Hand technique', 'Burst', 'Motor'] },
    { name: 'CJ Allen', position: 'LB', school: 'Georgia', rank: 27, edp: 26.6, height: "6'1\"", weight: 235, forty: '4.50', analysis: 'Three-down LB with excellent read-react.', strengths: ['Read-react', 'Physicality', 'Coverage'] },
    { name: 'Caleb Banks', position: 'DL', school: 'Florida', rank: 28, edp: 27.4, height: "6'4\"", weight: 295, forty: '4.85', analysis: 'Disruptive interior lineman with pass-rush upside.', strengths: ['First step', 'Motor', 'Versatility'] },
    { name: 'Chris Johnson', position: 'CB', school: 'San Diego State', rank: 29, edp: 28.1, height: "6'1\"", weight: 192, forty: '4.38', analysis: 'Blazing speed corner with elite ball tracking.', strengths: ['Speed', 'Ball skills', 'Coverage range'] },
    { name: 'Brandon Cisse', position: 'CB', school: 'South Carolina', rank: 30, edp: 29.5, height: "6'0\"", weight: 188, forty: '4.42', analysis: 'Physical corner with excellent zone instincts.', strengths: ['Physicality', 'Zone coverage', 'Tackling'] },
    { name: 'Zachariah Branch', position: 'WR', school: 'Georgia', rank: 31, edp: 30.2, height: "5'10\"", weight: 180, forty: '4.35', analysis: 'Electric playmaker with elite speed and return ability.', strengths: ['Speed', 'YAC', 'Return ability'] },
    { name: 'Emmanuel Pregnon', position: 'IOL', school: 'Oregon', rank: 32, edp: 31.8, height: "6'5\"", weight: 318, forty: '5.15', analysis: 'Powerful guard with excellent anchor in pass pro.', strengths: ['Power', 'Anchor', 'Run blocking'] },
    // === ROUND 2 TIER (Ranks 33-64) ===
    { name: 'Olaivavega Ioane', position: 'IOL', school: 'Penn State', rank: 33, edp: 33.2, height: "6'4\"", weight: 330, forty: '5.25', analysis: 'Dominant LG with strength and agility.', strengths: ['Power', 'Anchor', 'Run blocking'] },
    { name: 'Lee Hunter', position: 'DL', school: 'Texas Tech', rank: 34, edp: 34.5, height: "6'3\"", weight: 310, forty: '5.08', analysis: 'Space-eating nose tackle with surprising quickness.', strengths: ['Anchor', 'Gap control', 'Motor'] },
    { name: 'Colton Hood', position: 'CB', school: 'Tennessee', rank: 35, edp: 35.1, height: "6'1\"", weight: 195, forty: '4.41', analysis: 'Physical press corner with length and instincts.', strengths: ['Press coverage', 'Length', 'Tackling'] },
    { name: 'T.J. Parker', position: 'EDGE', school: 'Clemson', rank: 36, edp: 36.8, height: "6'5\"", weight: 270, forty: '4.72', analysis: 'Long, rangy edge with high upside.', strengths: ['Length', 'Bend', 'Athleticism'] },
    { name: 'Jake Golday', position: 'LB', school: 'Cincinnati', rank: 37, edp: 37.2, height: "6'2\"", weight: 232, forty: '4.52', analysis: 'Instinctive linebacker with sideline-to-sideline range.', strengths: ['Range', 'Instincts', 'Tackling'] },
    { name: 'KC Conception', position: 'WR', school: 'Texas A&M', rank: 38, edp: 38.5, height: "6'1\"", weight: 195, forty: '4.42', analysis: 'Smooth route runner with reliable hands.', strengths: ['Route running', 'Hands', 'Separation'] },
    { name: 'Keionte Scott', position: 'CB', school: 'Miami', rank: 39, edp: 39.1, height: "6'2\"", weight: 198, forty: '4.38', analysis: 'Long corner with elite recovery speed.', strengths: ['Length', 'Speed', 'Ball skills'] },
    { name: 'Chris Bell', position: 'WR', school: 'Louisville', rank: 40, edp: 40.3, height: "6'3\"", weight: 210, forty: '4.46', analysis: 'Big-body receiver who dominates in contested situations.', strengths: ['Contested catches', 'Size', 'Red zone'] },
    { name: 'Max Klare', position: 'TE', school: 'Ohio State', rank: 41, edp: 41.7, height: "6'5\"", weight: 250, forty: '4.62', analysis: 'Modern inline TE with receiving upside.', strengths: ['Size', 'Blocking', 'Receiving'] },
    { name: 'R Mason Thomas', position: 'EDGE', school: 'Oklahoma', rank: 42, edp: 42.2, height: "6'4\"", weight: 265, forty: '4.65', analysis: 'Twitchy pass rusher with a deep repertoire of moves.', strengths: ['Hand moves', 'Burst', 'Motor'] },
    { name: 'Dillon Thieneman', position: 'S', school: 'Oregon', rank: 43, edp: 43.5, height: "6'2\"", weight: 210, forty: '4.50', analysis: 'Tall, long safety with fantastic production.', strengths: ['Ball skills', 'Range', 'Tackling'] },
    { name: 'Emmanuel McNeil-Warren', position: 'S', school: 'Toledo', rank: 44, edp: 44.1, height: "6'0\"", weight: 200, forty: '4.48', analysis: 'Versatile safety who excels in coverage.', strengths: ['Coverage', 'Instincts', 'Versatility'] },
    { name: 'Zion Young', position: 'EDGE', school: 'Missouri', rank: 45, edp: 45.8, height: "6'3\"", weight: 258, forty: '4.70', analysis: 'High-motor edge with developing pass-rush moves.', strengths: ['Motor', 'Effort', 'Run defense'] },
    { name: 'Davison Igbinosun', position: 'CB', school: 'Ohio State', rank: 46, edp: 46.2, height: "6'2\"", weight: 195, forty: '4.39', analysis: 'Big, physical corner with elite ball skills.', strengths: ['Size', 'Physicality', 'Ball skills'] },
    { name: 'Chris Brazzell II', position: 'WR', school: 'Tennessee', rank: 47, edp: 47.5, height: "6'1\"", weight: 188, forty: '4.40', analysis: 'Speedster with deep threat ability.', strengths: ['Speed', 'Deep ball', 'Separation'] },
    { name: 'Joe Royer', position: 'TE', school: 'Cincinnati', rank: 48, edp: 48.3, height: "6'4\"", weight: 248, forty: '4.65', analysis: 'Reliable pass-catching TE with good hands.', strengths: ['Hands', 'Route running', 'Red zone'] },
    { name: "Ar'Maj Reed-Adams", position: 'IOL', school: 'Texas A&M', rank: 49, edp: 49.1, height: "6'4\"", weight: 315, forty: '5.20', analysis: 'Powerful guard with mauling run-blocking ability.', strengths: ['Power', 'Run blocking', 'Nastiness'] },
    { name: 'Germie Bernard', position: 'WR', school: 'Alabama', rank: 50, edp: 50.5, height: "6'0\"", weight: 195, forty: '4.43', analysis: 'Explosive receiver with elite after-catch ability.', strengths: ['YAC', 'Speed', 'Versatility'] },
    { name: 'Gennings Dunker', position: 'OT', school: 'Iowa', rank: 51, edp: 51.2, height: "6'6\"", weight: 315, forty: '5.12', analysis: 'Iowa-bred road grader with elite technique.', strengths: ['Technique', 'Toughness', 'Run blocking'] },
    { name: 'Anthony Hill Jr.', position: 'LB', school: 'Texas', rank: 52, edp: 52.8, height: "6'2\"", weight: 240, forty: '4.55', analysis: 'Downhill thumper with excellent blitz ability.', strengths: ['Blitzing', 'Physicality', 'Downhill'] },
    { name: 'Caleb Tiernan', position: 'OT', school: 'Northwestern', rank: 53, edp: 53.4, height: "6'7\"", weight: 305, forty: '5.10', analysis: 'Long, athletic tackle with high upside.', strengths: ['Length', 'Athleticism', 'Upside'] },
    { name: "Ja'Kobi Lane", position: 'WR', school: 'USC', rank: 54, edp: 54.1, height: "6'2\"", weight: 198, forty: '4.44', analysis: 'Polished route runner with plus hands.', strengths: ['Route running', 'Hands', 'Technique'] },
    { name: 'Max Iheanachor', position: 'OT', school: 'Arizona State', rank: 55, edp: 55.6, height: "6'5\"", weight: 310, forty: '5.15', analysis: 'Versatile lineman who can play guard or tackle.', strengths: ['Versatility', 'Power', 'Toughness'] },
    { name: 'Julian Neal', position: 'CB', school: 'Arkansas', rank: 56, edp: 56.2, height: "5'11\"", weight: 185, forty: '4.37', analysis: 'Quick-twitch corner with elite change of direction.', strengths: ['Agility', 'Speed', 'Ball skills'] },
    { name: 'Christen Miller', position: 'DL', school: 'Georgia', rank: 57, edp: 57.8, height: "6'4\"", weight: 305, forty: '5.00', analysis: 'Powerful interior presence with pass-rush upside.', strengths: ['Power', 'Pass rush', 'Motor'] },
    { name: 'Carson Beck', position: 'QB', school: 'Miami', rank: 58, edp: 45.0, height: "6'4\"", weight: 220, forty: '4.90', analysis: 'Physical tools have never been the question.', strengths: ['Size', 'Arm strength', 'Experience'] },
    { name: 'Deontae Lawson', position: 'LB', school: 'Alabama', rank: 59, edp: 59.2, height: "6'1\"", weight: 238, forty: '4.53', analysis: 'Disciplined LB with excellent run-stopping ability.', strengths: ['Tackling', 'Run defense', 'Instincts'] },
    { name: 'Omar Cooper Jr.', position: 'WR', school: 'Indiana', rank: 60, edp: 60.5, height: "6'0\"", weight: 190, forty: '4.42', analysis: 'Explosive slot receiver with elite quickness.', strengths: ['Quickness', 'Route running', 'YAC'] },
    { name: 'Connor Lew', position: 'IOL', school: 'Auburn', rank: 61, edp: 61.3, height: "6'3\"", weight: 295, forty: '5.18', analysis: 'Smart center with excellent snap-and-reach ability.', strengths: ['Intelligence', 'Technique', 'Leadership'] },
    { name: 'Gracen Halton', position: 'DL', school: 'Oklahoma', rank: 62, edp: 62.1, height: "6'3\"", weight: 300, forty: '5.02', analysis: 'Explosive interior rusher with great first step.', strengths: ['First step', 'Pass rush', 'Effort'] },
    { name: 'Trinidad Chambliss', position: 'QB', school: 'Ole Miss', rank: 63, edp: 35.0, height: "6'1\"", weight: 205, forty: '4.75', analysis: 'Athletic playmaker with strong arm.', strengths: ['Mobility', 'Competitive', 'Arm strength'] },
    { name: 'Antonio Williams', position: 'WR', school: 'Clemson', rank: 64, edp: 64.5, height: "6'0\"", weight: 192, forty: '4.41', analysis: 'Shifty route runner with explosive play potential.', strengths: ['Route running', 'Speed', 'Hands'] },
    // === ROUND 3 TIER (Ranks 65-100) ===
    { name: 'Eli Stowers', position: 'TE', school: 'Vanderbilt', rank: 65, edp: 65.2, height: "6'4\"", weight: 242, forty: '4.63', analysis: 'Athletic TE with untapped receiving potential.', strengths: ['Athleticism', 'Upside', 'Blocking'] },
    { name: 'Nicholas Singleton', position: 'RB', school: 'Penn State', rank: 66, edp: 66.8, height: "6'0\"", weight: 220, forty: '4.48', analysis: 'Explosive blend of power and speed.', strengths: ['Power', 'Speed', 'Home run potential'] },
    { name: 'Kyle Louis', position: 'LB', school: 'Pittsburgh', rank: 67, edp: 67.3, height: "6'1\"", weight: 230, forty: '4.54', analysis: 'Instinctive LB with plus coverage skills.', strengths: ['Coverage', 'Instincts', 'Range'] },
    { name: 'Darrell Jackson Jr.', position: 'DL', school: 'Florida State', rank: 68, edp: 68.5, height: "6'3\"", weight: 305, forty: '5.05', analysis: 'Stout run defender with improving pass rush.', strengths: ['Run defense', 'Anchor', 'Effort'] },
    { name: 'Blake Miller', position: 'OT', school: 'Clemson', rank: 69, edp: 69.1, height: "6'6\"", weight: 315, forty: '5.12', analysis: 'Road grader with nasty disposition.', strengths: ['Power', 'Toughness', 'Run blocking'] },
    { name: 'Aamil Wagner', position: 'OT', school: 'Notre Dame', rank: 70, edp: 70.4, height: "6'6\"", weight: 305, forty: '5.08', analysis: 'Smooth pass protector with good feet.', strengths: ['Footwork', 'Pass protection', 'Athleticism'] },
    { name: 'Devin Moore', position: 'CB', school: 'Florida', rank: 71, edp: 71.2, height: "6'0\"", weight: 190, forty: '4.40', analysis: 'Sticky corner with good ball production.', strengths: ['Coverage', 'Ball skills', 'Technique'] },
    { name: 'Dani Dennis-Sutton', position: 'EDGE', school: 'Penn State', rank: 72, edp: 72.8, height: "6'5\"", weight: 268, forty: '4.70', analysis: 'Athletic edge with high ceiling.', strengths: ['Athleticism', 'Length', 'Upside'] },
    { name: 'Billy Schrauth', position: 'IOL', school: 'Notre Dame', rank: 73, edp: 73.5, height: "6'4\"", weight: 320, forty: '5.22', analysis: 'Mauling guard with pancake potential.', strengths: ['Power', 'Nastiness', 'Run blocking'] },
    { name: 'A.J. Haulcy', position: 'S', school: 'LSU', rank: 74, edp: 74.1, height: "6'1\"", weight: 205, forty: '4.48', analysis: 'Rangy safety with excellent deep-half ability.', strengths: ['Range', 'Ball skills', 'Coverage'] },
    { name: 'Derrick Moore', position: 'EDGE', school: 'Michigan', rank: 75, edp: 75.6, height: "6'4\"", weight: 272, forty: '4.68', analysis: 'Physical edge setter with power rush ability.', strengths: ['Power', 'Physicality', 'Run defense'] },
    { name: 'Logan Jones', position: 'IOL', school: 'Iowa', rank: 76, edp: 76.3, height: "6'3\"", weight: 300, forty: '5.15', analysis: 'Smart center with great technique.', strengths: ['Intelligence', 'Technique', 'Consistency'] },
    { name: 'Dallen Bentley', position: 'TE', school: 'Utah', rank: 77, edp: 77.8, height: "6'5\"", weight: 252, forty: '4.68', analysis: 'Reliable blocker who can catch in traffic.', strengths: ['Blocking', 'Hands', 'Toughness'] },
    { name: "D'Angelo Ponds", position: 'CB', school: 'Indiana', rank: 78, edp: 78.2, height: "5'11\"", weight: 188, forty: '4.39', analysis: 'Quick, feisty corner with excellent tackling.', strengths: ['Tackling', 'Quickness', 'Competitiveness'] },
    { name: 'Isaiah World', position: 'OT', school: 'Oregon', rank: 79, edp: 79.5, height: "6'5\"", weight: 310, forty: '5.10', analysis: 'Versatile lineman with guard-tackle flexibility.', strengths: ['Versatility', 'Athleticism', 'Technique'] },
    { name: 'Elijah Sarrett', position: 'WR', school: 'Indiana', rank: 80, edp: 80.1, height: "6'1\"", weight: 195, forty: '4.44', analysis: 'Reliable target with excellent hands and route savvy.', strengths: ['Hands', 'Route running', 'Consistency'] },
    { name: 'Malachi Lawrence', position: 'EDGE', school: 'UCF', rank: 81, edp: 81.7, height: "6'3\"", weight: 255, forty: '4.72', analysis: 'High-motor rusher with improving technique.', strengths: ['Motor', 'Effort', 'Upside'] },
    { name: 'Malik Muhammad', position: 'CB', school: 'Texas', rank: 82, edp: 82.3, height: "6'0\"", weight: 190, forty: '4.41', analysis: 'Physical press corner with excellent length.', strengths: ['Press coverage', 'Physicality', 'Length'] },
    { name: 'Zakee Wheatley', position: 'S', school: 'Penn State', rank: 83, edp: 83.5, height: "6'1\"", weight: 208, forty: '4.50', analysis: 'Hard-hitting safety with plus run support.', strengths: ['Physicality', 'Run support', 'Tackling'] },
    { name: 'Drew Shelton', position: 'OT', school: 'Penn State', rank: 84, edp: 84.2, height: "6'6\"", weight: 312, forty: '5.14', analysis: 'Big, athletic tackle with starting potential.', strengths: ['Size', 'Athleticism', 'Upside'] },
    { name: 'Cameron Ball', position: 'DL', school: 'Arkansas', rank: 85, edp: 85.8, height: "6'3\"", weight: 295, forty: '5.02', analysis: 'Disruptive interior lineman with quick hands.', strengths: ['Hand speed', 'Penetration', 'Motor'] },
    { name: 'Jake Slaughter', position: 'IOL', school: 'Florida', rank: 86, edp: 86.4, height: "6'3\"", weight: 305, forty: '5.18', analysis: 'Experienced center with rock-solid technique.', strengths: ['Experience', 'Technique', 'Leadership'] },
    { name: 'Dametrious Crownover', position: 'OT', school: 'Texas A&M', rank: 87, edp: 87.1, height: "6'5\"", weight: 308, forty: '5.12', analysis: 'Powerful blocker with nasty finishing ability.', strengths: ['Power', 'Finishing', 'Toughness'] },
    { name: 'Kamari Ramsey', position: 'S', school: 'USC', rank: 88, edp: 88.5, height: "6'0\"", weight: 202, forty: '4.47', analysis: 'Instinctive safety with playmaking ability.', strengths: ['Instincts', 'Ball skills', 'Versatility'] },
    { name: 'Jacob Rodriguez', position: 'LB', school: 'Texas Tech', rank: 89, edp: 89.2, height: "6'2\"", weight: 235, forty: '4.55', analysis: 'Versatile LB who can play all three downs.', strengths: ['Versatility', 'Coverage', 'Tackling'] },
    { name: 'Tim Keenan III', position: 'DL', school: 'Alabama', rank: 90, edp: 90.8, height: "6'2\"", weight: 320, forty: '5.15', analysis: 'Massive nose tackle who clogs running lanes.', strengths: ['Size', 'Anchor', 'Run stuffing'] },
    { name: 'Joshua Josephs', position: 'EDGE', school: 'Tennessee', rank: 91, edp: 91.3, height: "6'4\"", weight: 260, forty: '4.70', analysis: 'Speed rusher with bend and flexibility.', strengths: ['Speed', 'Bend', 'Effort'] },
    { name: 'Charles Demmings', position: 'CB', school: 'Stephen F. Austin', rank: 92, edp: 92.5, height: "6'0\"", weight: 185, forty: '4.38', analysis: 'Small-school gem with elite athleticism.', strengths: ['Speed', 'Athleticism', 'Ball skills'] },
    { name: 'Sam Roush', position: 'TE', school: 'Stanford', rank: 93, edp: 93.1, height: "6'5\"", weight: 250, forty: '4.65', analysis: 'Smart, reliable receiving TE.', strengths: ['Route running', 'Hands', 'Intelligence'] },
    { name: 'Skyler Gill-Howard', position: 'DL', school: 'Texas Tech', rank: 94, edp: 94.7, height: "6'3\"", weight: 298, forty: '5.05', analysis: 'Quick interior rusher with upside.', strengths: ['Quickness', 'Pass rush', 'Upside'] },
    { name: 'LT Overton', position: 'EDGE', school: 'Alabama', rank: 95, edp: 95.2, height: "6'5\"", weight: 275, forty: '4.72', analysis: 'Former 5-star with elite raw tools.', strengths: ['Raw tools', 'Athleticism', 'Upside'] },
    { name: 'Austin Barber', position: 'OT', school: 'Florida', rank: 96, edp: 96.8, height: "6'5\"", weight: 305, forty: '5.12', analysis: 'Solid tackle with consistent technique.', strengths: ['Technique', 'Consistency', 'Toughness'] },
    { name: 'Jalon Kilgore', position: 'S', school: 'South Carolina', rank: 97, edp: 97.3, height: "6'1\"", weight: 205, forty: '4.48', analysis: 'Versatile DB who can play safety or nickel.', strengths: ['Versatility', 'Coverage', 'Tackling'] },
    { name: 'Kaytron Allen', position: 'RB', school: 'Penn State', rank: 98, edp: 98.5, height: "5'11\"", weight: 225, forty: '4.50', analysis: 'Decisive downhill hammer who punishes defenses.', strengths: ['Power', 'Vision', 'Short yardage'] },
    { name: 'Roman Hemby', position: 'RB', school: 'Indiana', rank: 99, edp: 99.1, height: "5'10\"", weight: 205, forty: '4.45', analysis: 'Elusive back with excellent receiving skills.', strengths: ['Elusiveness', 'Receiving', 'Vision'] },
    { name: 'Jack Endries', position: 'TE', school: 'Texas', rank: 100, edp: 100.0, height: "6'4\"", weight: 245, forty: '4.67', analysis: 'Athletic TE with red zone scoring ability.', strengths: ['Athleticism', 'Red zone', 'Hands'] }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function getPickValue(pickNumber) {
    return TRADE_VALUE_CHART[pickNumber] || Math.max(10, 100 - (pickNumber - 100));
}

function getTeamById(id) {
    return TEAM_DATA.find(t => t.id === id);
}

function getPlayerByName(name) {
    return PLAYER_DATABASE.find(p => p.name === name);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomNews(team, player) {
    const template = getRandomItem(NEWS_MESSAGES);
    return template
        .replace('{team}', team.name)
        .replace('{player}', player.name)
        .replace('{position}', player.position);
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Check for config from URL parameters (from war-room-config.html)
    const urlParams = new URLSearchParams(window.location.search);
    const team = urlParams.get('team');
    
    if (team) {
        // Build config from URL params
        const config = {
            team: team,
            difficulty: urlParams.get('difficulty') || 'veteran',
            time: parseInt(urlParams.get('time')) || 300,
            rounds: urlParams.get('rounds') || 'all',
            practice: urlParams.get('practice') === 'true',
            sound: urlParams.get('sound') === 'true',
            trades: urlParams.get('trades') === 'true'
        };
        autoStartWarRoom(config);
    } else {
        initializeEntryScreen();
    }
});

function autoStartWarRoom(config) {
    console.log('[WarRoom] Auto-starting with config:', config);
    
    // Validate config
    if (!config || !config.team) {
        console.error('[WarRoom] Invalid config - missing team');
        // Show entry screen instead
        document.getElementById('entryScreen').classList.remove('hidden');
        document.getElementById('warRoomInterface').classList.add('hidden');
        initializeEntryScreen();
        return;
    }
    
    // Apply config from URL parameters
    WarRoomState.userTeam = config.team;
    WarRoomState.selectedTeam = getTeamById(config.team);
    
    // Check if team was found
    if (!WarRoomState.selectedTeam) {
        console.error('[WarRoom] Team not found:', config.team);
        console.error('[WarRoom] Available teams:', TEAM_DATA.map(t => t.id));
        // Show entry screen instead
        document.getElementById('entryScreen').classList.remove('hidden');
        document.getElementById('warRoomInterface').classList.add('hidden');
        initializeEntryScreen();
        return;
    }
    
    console.log('[WarRoom] Selected team:', WarRoomState.selectedTeam);
    
    WarRoomState.difficulty = config.difficulty;
    WarRoomState.roundsToComplete = config.rounds;
    WarRoomState.practiceMode = config.practice;
    WarRoomState.soundEnabled = config.sound;
    WarRoomState.tradesEnabled = config.trades;
    
    // Set timer based on difficulty
    const timePerPick = config.time || 300;
    document.getElementById('timerValue').textContent = formatTime(timePerPick);
    
    // Hide entry screen, show interface
    document.getElementById('entryScreen').classList.add('hidden');
    document.getElementById('warRoomInterface').classList.remove('hidden');
    
    // Initialize the war room
    initializeWarRoomUI();
}

function initializeEntryScreen() {
    // Populate team select
    const teamSelect = document.getElementById('teamSelect');
    TEAM_DATA.forEach(team => {
        const option = document.createElement('option');
        option.value = team.id;
        option.textContent = team.name;
        teamSelect.appendChild(option);
    });
    
    // Difficulty selection
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            WarRoomState.difficulty = btn.dataset.difficulty;
        });
    });
    
    // Rounds selection
    document.querySelectorAll('.round-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.round-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            WarRoomState.roundsToComplete = btn.dataset.rounds;
        });
    });
    
    // Practice mode toggle
    document.getElementById('practiceMode').addEventListener('change', (e) => {
        WarRoomState.practiceMode = e.target.checked;
    });
    
    // Sound toggle
    document.getElementById('soundEnabled').addEventListener('change', (e) => {
        WarRoomState.soundEnabled = e.target.checked;
    });
    
    // Enter War Room button
    document.getElementById('enterWarRoom').addEventListener('click', startWarRoom);
    
    // Pause/Resume
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    document.getElementById('resumeBtn').addEventListener('click', togglePause);
    
    // Exit buttons
    document.getElementById('exitBtn').addEventListener('click', confirmExit);
    document.getElementById('restartBtn').addEventListener('click', restartWarRoom);
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tabId + 'Tab').classList.add('active');
        });
    });
    
    // Player search
    document.getElementById('playerSearch').addEventListener('input', (e) => {
        WarRoomState.searchQuery = e.target.value.toLowerCase();
        renderAvailablePlayers();
    });
    
    // Position filter
    document.getElementById('positionFilter').addEventListener('change', (e) => {
        WarRoomState.currentFilter = e.target.value;
        renderAvailablePlayers();
    });
    
    // Best Available button
    document.getElementById('bestAvailableBtn').addEventListener('click', () => {
        const best = WarRoomState.availablePlayers[0];
        if (best) selectPlayer(best.name);
    });
    
    // Close player modal
    document.getElementById('closePlayerModal').addEventListener('click', () => {
        document.getElementById('playerModal').classList.add('hidden');
    });
    
    // Draft player from modal
    document.getElementById('draftPlayerBtn').addEventListener('click', () => {
        const playerName = document.getElementById('draftPlayerBtn').dataset.player;
        if (playerName) {
            makeSelection(playerName);
            document.getElementById('playerModal').classList.add('hidden');
        }
    });
    
    // Summary screen buttons
    document.getElementById('shareResults').addEventListener('click', shareResults);
    document.getElementById('saveMock').addEventListener('click', saveMock);
    document.getElementById('playAgain').addEventListener('click', restartWarRoom);
    
    // Trade buttons
    document.getElementById('acceptTrade').addEventListener('click', () => handleTrade('accept'));
    document.getElementById('counterTrade').addEventListener('click', () => handleTrade('counter'));
    document.getElementById('declineTrade').addEventListener('click', () => handleTrade('decline'));
}

// ==========================================
// GAME START & SETUP
// ==========================================

function startWarRoom() {
    const teamId = document.getElementById('teamSelect').value;
    if (!teamId) {
        showToast('Please select a team!');
        return;
    }
    
    WarRoomState.selectedTeam = getTeamById(teamId);
    WarRoomState.isActive = true;
    WarRoomState.currentPick = 1;
    WarRoomState.currentRound = 1;
    
    // Initialize available players
    WarRoomState.availablePlayers = [...PLAYER_DATABASE].sort((a, b) => a.rank - b.rank);
    
    // Initialize team needs with priorities
    WarRoomState.userTeamNeeds = WarRoomState.selectedTeam.needs.map((need, idx) => ({
        position: need,
        priority: idx < 2 ? 'high' : idx < 4 ? 'medium' : 'low',
        filled: false
    }));
    
    // Set timer based on difficulty
    const timeSetting = WarRoomState.practiceMode ? 999999 : WAR_ROOM_CONFIG.timer[WarRoomState.difficulty];
    WarRoomState.timeRemaining = timeSetting;
    
    // Hide entry screen, show war room
    document.getElementById('entryScreen').classList.add('hidden');
    document.getElementById('warRoomInterface').classList.remove('hidden');
    
    // Initialize UI
    initializeWarRoomUI();
    
    // Start the draft
    startPick();
}

function initializeWarRoomUI() {
    const team = WarRoomState.selectedTeam;
    
    // Header
    document.getElementById('headerTeamName').textContent = team.name;
    document.getElementById('headerTeamRecord').textContent = `Record: ${team.record}`;
    document.getElementById('headerTeamLogo').innerHTML = getTeamLogoSVG(team);
    
    // Team needs panel
    renderTeamNeeds();
    
    // Available players
    renderAvailablePlayers();
    
    // Draft board
    renderDraftBoard();
    
    // Update stats
    updateStats();
}

function getTeamLogoSVG(team) {
    return `<svg viewBox="0 0 100 70" style="width: 100%; height: 100%;">
        <ellipse cx="50" cy="35" rx="48" ry="32" fill="${team.color}" stroke="${team.accent}" stroke-width="3"/>
        <text x="50" y="42" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="Arial">${team.id.substring(0, 2).toUpperCase()}</text>
    </svg>`;
}

// ==========================================
// DRAFT LOGIC
// ==========================================

function startPick() {
    if (!WarRoomState.isActive) return;
    
    // Check if this is user's pick
    const isUserPick = isUserOnClock();
    
    // Update UI
    updatePickDisplay();
    
    if (isUserPick) {
        // Start user pick
        startUserPick();
    } else {
        // AI makes pick
        setTimeout(() => makeAIPick(), WAR_ROOM_CONFIG.aiPickDelay);
    }
}

function isUserOnClock() {
    // User gets their original pick plus any acquired picks
    const userPickNumbers = getUserPickNumbers();
    return userPickNumbers.includes(WarRoomState.currentPick);
}

function getUserPickNumbers() {
    const picks = [];
    const teamName = WarRoomState.selectedTeam.name;
    
    // Original picks (simplified - would use actual draft order)
    TEAM_DATA.forEach((team, idx) => {
        if (team.id === WarRoomState.selectedTeam.id) {
            picks.push(idx + 1); // Round 1 pick
            picks.push(32 + idx + 1); // Round 2 pick
            picks.push(64 + idx + 1); // Round 3 pick (simplified)
        }
    });
    
    // Add any traded picks
    WarRoomState.userPicks.forEach(pick => {
        if (!picks.includes(pick.pickNumber)) {
            picks.push(pick.pickNumber);
        }
    });
    
    return picks.sort((a, b) => a - b);
}

function startUserPick() {
    // Reset and start timer
    const timeSetting = WarRoomState.practiceMode ? 999999 : WAR_ROOM_CONFIG.timer[WarRoomState.difficulty];
    WarRoomState.timeRemaining = timeSetting;
    
    if (!WarRoomState.practiceMode) {
        startTimer();
    } else {
        updateTimerDisplay();
    }
    
    // Update available players
    renderAvailablePlayers();
    
    // Show "On the Clock" banner
    document.getElementById('onClockBanner').style.display = 'flex';
    
    // Potentially generate trade offer (GM mode only)
    if (WarRoomState.difficulty === 'gm' && Math.random() < WAR_ROOM_CONFIG.tradeChance) {
        setTimeout(() => generateTradeOffer(), 2000);
    }
    
    // Potentially show news ticker
    if (Math.random() < WAR_ROOM_CONFIG.newsChance) {
        showNewsTicker();
    }
}

function startTimer() {
    clearInterval(WarRoomState.timerInterval);
    WarRoomState.pickStartTime = Date.now();
    
    WarRoomState.timerInterval = setInterval(() => {
        if (WarRoomState.isPaused) return;
        
        WarRoomState.timeRemaining--;
        updateTimerDisplay();
        
        // Play ticking sound in last 10 seconds
        if (WarRoomState.timeRemaining <= 10 && WarRoomState.timeRemaining > 0 && WarRoomState.soundEnabled) {
            playSound('timerTick');
        }
        
        // Auto-pick when time expires
        if (WarRoomState.timeRemaining <= 0) {
            clearInterval(WarRoomState.timerInterval);
            autoPick();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerValue = document.getElementById('timerValue');
    const timerProgress = document.getElementById('timerProgress');
    
    const timeSetting = WarRoomState.practiceMode ? 300 : WAR_ROOM_CONFIG.timer[WarRoomState.difficulty];
    const percentage = (WarRoomState.timeRemaining / timeSetting) * 100;
    
    timerValue.textContent = formatTime(WarRoomState.timeRemaining);
    timerProgress.style.width = percentage + '%';
    
    // Color coding
    timerValue.classList.remove('warning', 'danger');
    timerProgress.classList.remove('warning', 'danger');
    
    if (WarRoomState.timeRemaining <= 30) {
        timerValue.classList.add('danger');
        timerProgress.classList.add('danger');
    } else if (WarRoomState.timeRemaining <= 60) {
        timerValue.classList.add('warning');
        timerProgress.classList.add('warning');
    }
}

function autoPick() {
    // Select best available player
    const bestPlayer = WarRoomState.availablePlayers[0];
    if (bestPlayer) {
        makeSelection(bestPlayer.name);
        showToast(`Auto-selected ${bestPlayer.name}`);
    }
}

function makeSelection(playerName) {
    const player = getPlayerByName(playerName);
    if (!player) return;
    
    // Record pick time
    if (WarRoomState.pickStartTime) {
        const timeSpent = Math.floor((Date.now() - WarRoomState.pickStartTime) / 1000);
        WarRoomState.stats.pickTimes.push(timeSpent);
        WarRoomState.stats.totalTimeSpent += timeSpent;
        
        // Check for speed demon achievement
        if (timeSpent < 30) unlockAchievement('speedDemon');
    }
    
    // Create pick object
    const pick = {
        pickNumber: WarRoomState.currentPick,
        round: WarRoomState.currentRound,
        team: WarRoomState.selectedTeam,
        player: player,
        timestamp: Date.now()
    };
    
    // Add to user's picks
    WarRoomState.userPicks.push(pick);
    WarRoomState.allPicks.push(pick);
    
    // Remove from available players
    WarRoomState.availablePlayers = WarRoomState.availablePlayers.filter(p => p.name !== playerName);
    
    // Update team needs
    updateTeamNeeds(player.position);
    
    // Calculate pick grade
    pick.grade = calculatePickGrade(player, WarRoomState.currentPick);
    
    // Update stats
    updateStats();
    
    // Clear timer
    clearInterval(WarRoomState.timerInterval);
    document.getElementById('onClockBanner').style.display = 'none';
    
    // Show pick confirmation
    showPickConfirmation(player);
    
    // Advance to next pick
    advancePick();
}

function makeAIPick() {
    // AI team makes a selection based on needs and value
    const aiTeam = getCurrentAIPickTeam();

    // Safety check: if no players available, end the draft
    if (WarRoomState.availablePlayers.length === 0) {
        completeDraft();
        return;
    }

    const selectedPlayer = selectPlayerForAI(aiTeam);

    if (selectedPlayer) {
        const pick = {
            pickNumber: WarRoomState.currentPick,
            round: WarRoomState.currentRound,
            team: aiTeam,
            player: selectedPlayer
        };
        
        WarRoomState.aiPicks.push(pick);
        WarRoomState.allPicks.push(pick);
        
        // Remove from available players
        WarRoomState.availablePlayers = WarRoomState.availablePlayers.filter(p => p.name !== selectedPlayer.name);
        
        // Update ticker
        addToTicker(aiTeam, selectedPlayer);
        
        // Advance
        advancePick();
    }
}

function getCurrentAIPickTeam() {
    // Simplified - would use actual draft order
    const index = (WarRoomState.currentPick - 1) % TEAM_DATA.length;
    return TEAM_DATA[index];
}

function selectPlayerForAI(team) {
    // AI selection logic: prioritize needs, then value
    let candidates = [...WarRoomState.availablePlayers];
    
    // Filter by team needs if possible
    const needPlayers = candidates.filter(p => team.needs.includes(p.position));
    
    if (needPlayers.length > 0 && Math.random() < 0.7) {
        // 70% chance to pick based on need
        candidates = needPlayers;
    }
    
    // Pick from top available with some randomness
    const topCandidates = candidates.slice(0, Math.min(5, candidates.length));
    return getRandomItem(topCandidates);
}

function advancePick() {
    WarRoomState.currentPick++;
    
    // Update round
    if (WarRoomState.currentPick <= 32) {
        WarRoomState.currentRound = 1;
    } else if (WarRoomState.currentPick <= 64) {
        WarRoomState.currentRound = 2;
    } else {
        WarRoomState.currentRound = 3;
    }
    
    // Check if draft is complete
    if (isDraftComplete()) {
        completeDraft();
    } else {
        startPick();
    }
}

function isDraftComplete() {
    const maxRounds = WarRoomState.roundsToComplete === 'all' ? 3 : parseInt(WarRoomState.roundsToComplete);
    const maxPicks = maxRounds * 32;
    return WarRoomState.currentPick > maxPicks || WarRoomState.userPicks.length >= maxPicks;
}

// ==========================================
// RENDERING FUNCTIONS
// ==========================================

function renderTeamNeeds() {
    const container = document.getElementById('teamNeedsList');
    container.innerHTML = '';
    
    WarRoomState.userTeamNeeds.forEach(need => {
        const div = document.createElement('div');
        div.className = `need-item ${need.priority} ${need.filled ? 'filled' : ''}`;
        div.innerHTML = `
            <span class="need-position">${need.position}</span>
            <span class="need-priority ${need.priority}">${need.priority}</span>
        `;
        container.appendChild(div);
    });
}

function renderAvailablePlayers() {
    const container = document.getElementById('playersGrid');
    container.innerHTML = '';
    
    let players = [...WarRoomState.availablePlayers];
    
    // Apply position filter
    if (WarRoomState.currentFilter !== 'all') {
        players = players.filter(p => p.position === WarRoomState.currentFilter);
    }
    
    // Apply search
    if (WarRoomState.searchQuery) {
        players = players.filter(p => 
            p.name.toLowerCase().includes(WarRoomState.searchQuery) ||
            p.school.toLowerCase().includes(WarRoomState.searchQuery)
        );
    }
    
    // Limit display
    players = players.slice(0, 20);
    
    players.forEach((player, idx) => {
        const valueDiff = player.edp - WarRoomState.currentPick;
        const valueClass = valueDiff >= 5 ? 'value' : valueDiff <= -5 ? 'reach' : 'fair';
        
        const card = document.createElement('div');
        card.className = `player-card ${idx === 0 ? 'best-available' : ''}`;
        card.innerHTML = `
            <div class="player-rank">#${player.rank}</div>
            <div class="player-card-header">
                <div class="player-card-photo">🏈</div>
                <div class="player-card-info">
                    <h4>${player.name}</h4>
                    <div class="player-card-meta">
                        <span class="player-position-tag">${player.position}</span>
                        <span>${player.school}</span>
                    </div>
                </div>
            </div>
            <div class="player-value-indicator ${valueClass}">
                <i class="fas fa-${valueClass === 'value' ? 'arrow-down' : valueClass === 'reach' ? 'arrow-up' : 'equals'}"></i>
                <span>EDP: ${player.edp.toFixed(1)}</span>
            </div>
        `;
        card.addEventListener('click', () => selectPlayer(player.name));
        container.appendChild(card);
    });
}

function renderDraftBoard() {
    const container = document.getElementById('draftBoardGrid');
    container.innerHTML = '';
    
    const maxPicks = 96; // 3 rounds
    
    for (let i = 1; i <= maxPicks; i++) {
        const cell = document.createElement('div');
        cell.className = 'board-cell';
        
        const existingPick = WarRoomState.allPicks.find(p => p.pickNumber === i);
        
        if (existingPick) {
            cell.classList.add('selected');
            cell.innerHTML = `
                <span class="board-cell-number">${i}</span>
                <span class="board-cell-position">${existingPick.player.position}</span>
            `;
        } else if (i === WarRoomState.currentPick) {
            cell.classList.add('current');
            cell.innerHTML = `<span class="board-cell-number">${i}</span>`;
        } else {
            cell.innerHTML = `<span class="board-cell-number">${i}</span>`;
        }
        
        container.appendChild(cell);
    }
}

function updatePickDisplay() {
    document.getElementById('currentPickNum').textContent = WarRoomState.currentPick;
    document.getElementById('roundBadge').textContent = `Round ${WarRoomState.currentRound}`;
    
    // Update pick history
    renderPickHistory();
}

function renderPickHistory() {
    const container = document.getElementById('pickHistoryList');
    container.innerHTML = '';
    
    const recentPicks = WarRoomState.allPicks.slice(-10).reverse();
    
    recentPicks.forEach(pick => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div class="history-pick">${pick.pickNumber}</div>
            <div class="history-team">${pick.team.id.substring(0, 2).toUpperCase()}</div>
            <div class="history-player">
                <div class="history-player-name">${pick.player.name}</div>
                <div class="history-player-meta">${pick.player.position} | ${pick.player.school}</div>
            </div>
        `;
        container.appendChild(div);
    });
}

function updateStats() {
    // Average time
    const avgTime = WarRoomState.stats.pickTimes.length > 0
        ? Math.floor(WarRoomState.stats.totalTimeSpent / WarRoomState.stats.pickTimes.length)
        : 0;
    document.getElementById('avgTime').textContent = formatTime(avgTime);
    
    // Trade count
    document.getElementById('tradeCount').textContent = WarRoomState.stats.tradesMade;
    
    // Current grade
    const grade = calculateOverallGrade();
    document.getElementById('currentGrade').textContent = grade;
    
    // Fan sentiment
    document.getElementById('fanSentiment').textContent = WarRoomState.stats.fanSentiment + '%';
    
    // Mini picks list
    const miniContainer = document.getElementById('miniPicksList');
    miniContainer.innerHTML = '';
    
    WarRoomState.userPicks.forEach(pick => {
        const div = document.createElement('div');
        div.className = 'mini-pick';
        div.innerHTML = `
            <span class="mini-pick-number">#${pick.pickNumber}</span>
            <span class="mini-pick-position">${pick.player.position}</span>
            <span class="mini-pick-name">${pick.player.name}</span>
        `;
        miniContainer.appendChild(div);
    });
}

function updateTeamNeeds(position) {
    const need = WarRoomState.userTeamNeeds.find(n => n.position === position && !n.filled);
    if (need) {
        need.filled = true;
        WarRoomState.stats.needsFilled++;
        
        // Check achievement
        if (WarRoomState.stats.needsFilled >= 3) {
            unlockAchievement('needFiller');
        }
    }
    renderTeamNeeds();
}

// ==========================================
// GRADE CALCULATIONS
// ==========================================

function calculatePickGrade(player, pickNumber) {
    const diff = player.edp - pickNumber;
    
    if (diff >= 15) return 'A+';
    if (diff >= 10) return 'A';
    if (diff >= 5) return 'A-';
    if (diff >= 0) return 'B+';
    if (diff >= -5) return 'B';
    if (diff >= -10) return 'C+';
    if (diff >= -15) return 'C';
    return 'D';
}

function calculateOverallGrade() {
    if (WarRoomState.userPicks.length === 0) return '-';
    
    let totalScore = 0;
    
    WarRoomState.userPicks.forEach(pick => {
        const diff = pick.player.edp - pick.pickNumber;
        
        if (diff >= 10) totalScore += 100;
        else if (diff >= 5) totalScore += 90;
        else if (diff >= 0) totalScore += 85;
        else if (diff >= -5) totalScore += 75;
        else if (diff >= -10) totalScore += 65;
        else totalScore += 50;
    });
    
    const avgScore = totalScore / WarRoomState.userPicks.length;
    
    // Convert to letter grade
    if (avgScore >= 97) return 'A+';
    if (avgScore >= 93) return 'A';
    if (avgScore >= 90) return 'A-';
    if (avgScore >= 87) return 'B+';
    if (avgScore >= 83) return 'B';
    if (avgScore >= 80) return 'B-';
    if (avgScore >= 77) return 'C+';
    if (avgScore >= 73) return 'C';
    return 'C-';
}

function getNumericGrade(letterGrade) {
    const grades = {
        'A+': 97, 'A': 93, 'A-': 90,
        'B+': 87, 'B': 83, 'B-': 80,
        'C+': 77, 'C': 73, 'C-': 70,
        'D+': 67, 'D': 63, 'D-': 60
    };
    return grades[letterGrade] || 70;
}

// ==========================================
// TRADE SYSTEM
// ==========================================

function generateTradeOffer() {
    if (!WarRoomState.isActive || WarRoomState.isPaused) return;
    
    const tradePartner = getRandomItem(TEAM_DATA.filter(t => t.id !== WarRoomState.selectedTeam.id));
    const currentPick = WarRoomState.currentPick;
    
    // Generate trade parameters
    const isTradeUp = Math.random() < 0.5;
    const pickOffset = Math.floor(Math.random() * 10) + 1;
    
    let theirPick, yourPick, picksOffered, picksRequested;
    
    if (isTradeUp) {
        // They want to move up to your pick
        theirPick = currentPick + pickOffset;
        yourPick = currentPick;
        picksOffered = [{ round: 2, pick: theirPick }];
        picksRequested = [{ round: 1, pick: yourPick }];
        
        // Add sweetener
        if (Math.random() < 0.3) {
            picksOffered.push({ round: 4, pick: 100 + Math.floor(Math.random() * 32) });
        }
    } else {
        // They want you to move up to their pick
        theirPick = Math.max(1, currentPick - pickOffset);
        yourPick = currentPick;
        picksOffered = [{ round: 1, pick: theirPick }];
        picksRequested = [{ round: 1, pick: yourPick }, { round: 3, pick: 64 + Math.floor(Math.random() * 32) }];
    }
    
    // Calculate trade value
    const theirValue = picksOffered.reduce((sum, p) => sum + getPickValue(p.pick), 0);
    const yourValue = picksRequested.reduce((sum, p) => sum + getPickValue(p.pick), 0);
    const valueRatio = (theirValue / yourValue) * 100;
    
    WarRoomState.pendingTrade = {
        partner: tradePartner,
        picksOffered,
        picksRequested,
        valueRatio,
        isTradeUp
    };
    
    // Show trade modal
    showTradeModal();
    
    // Start trade timer
    startTradeTimer();
}

function showTradeModal() {
    const trade = WarRoomState.pendingTrade;
    
    document.getElementById('tradeTeamName').textContent = trade.partner.name;
    document.getElementById('tradeTeamLogo').innerHTML = getTeamLogoSVG(trade.partner);
    document.getElementById('gmName').textContent = `${trade.partner.city} GM Offers:`;
    
    // They offer
    const theyOfferList = document.getElementById('theyOfferList');
    theyOfferList.innerHTML = trade.picksOffered.map(p => 
        `<li>2026 Round ${p.round} Pick (#${p.pick})</li>`
    ).join('');
    
    // You offer
    const youOfferList = document.getElementById('youOfferList');
    youOfferList.innerHTML = trade.picksRequested.map(p => 
        `<li>2026 Round ${p.round} Pick (#${p.pick})</li>`
    ).join('');
    
    // Trade value
    const valueFill = document.getElementById('tradeValueFill');
    const valuePercentage = document.getElementById('tradeValuePercentage');
    const valueVerdict = document.getElementById('tradeVerdict');
    
    const percentage = Math.min(100, Math.max(50, trade.valueRatio));
    valueFill.style.width = percentage + '%';
    valuePercentage.textContent = Math.round(percentage) + '%';
    
    if (trade.valueRatio >= 95 && trade.valueRatio <= 105) {
        valueVerdict.textContent = 'Fair Trade';
        valueVerdict.style.color = 'var(--wr-success)';
    } else if (trade.valueRatio > 105) {
        valueVerdict.textContent = 'Great Value!';
        valueVerdict.style.color = 'var(--wr-success)';
    } else {
        valueVerdict.textContent = 'Poor Value';
        valueVerdict.style.color = 'var(--wr-danger)';
    }
    
    document.getElementById('tradeModal').classList.remove('hidden');
    
    // Increment stats
    WarRoomState.stats.tradesReceived++;
}

function startTradeTimer() {
    let timeLeft = WAR_ROOM_CONFIG.tradeTimer;
    document.getElementById('tradeTimer').textContent = timeLeft + 's';
    
    WarRoomState.tradeTimerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('tradeTimer').textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
            clearInterval(WarRoomState.tradeTimerInterval);
            handleTrade('decline');
        }
    }, 1000);
}

function handleTrade(action) {
    clearInterval(WarRoomState.tradeTimerInterval);
    document.getElementById('tradeModal').classList.add('hidden');
    
    if (action === 'accept') {
        // Execute trade
        WarRoomState.stats.tradesMade++;
        
        // Check achievement
        if (WarRoomState.stats.tradesMade >= 3) {
            unlockAchievement('tradeMaster');
        }
        
        showToast('Trade accepted!');
    } else if (action === 'counter') {
        // 30% chance counter is accepted
        if (Math.random() < 0.3) {
            WarRoomState.stats.tradesMade++;
            showToast('Counter offer accepted!');
        } else {
            WarRoomState.stats.tradesDeclined++;
            showToast('Counter offer rejected');
        }
    } else {
        WarRoomState.stats.tradesDeclined++;
    }
    
    WarRoomState.pendingTrade = null;
    updateStats();
}

// ==========================================
// PLAYER SELECTION
// ==========================================

function selectPlayer(playerName) {
    const player = getPlayerByName(playerName);
    if (!player) return;
    
    // Populate player modal
    document.getElementById('playerDetailRank').textContent = '#' + player.rank;
    document.getElementById('playerDetailName').textContent = player.name;
    document.getElementById('playerDetailPosition').textContent = player.position;
    document.getElementById('playerDetailSchool').textContent = player.school;
    document.getElementById('playerDetailBBRank').textContent = '#' + player.rank;
    document.getElementById('playerDetailEDP').textContent = player.edp.toFixed(1);
    document.getElementById('playerDetailPhoto').textContent = '🏈';
    
    // Measurements
    const measurementsGrid = document.getElementById('playerMeasurements');
    measurementsGrid.innerHTML = `
        <div class="measurement-item">
            <div class="measurement-value">${player.height}</div>
            <div class="measurement-label">Height</div>
        </div>
        <div class="measurement-item">
            <div class="measurement-value">${player.weight}</div>
            <div class="measurement-label">Weight</div>
        </div>
        <div class="measurement-item">
            <div class="measurement-value">${player.forty}</div>
            <div class="measurement-label">40-Yard</div>
        </div>
        <div class="measurement-item">
            <div class="measurement-value">${player.position}</div>
            <div class="measurement-label">Position</div>
        </div>
    `;
    
    // Analysis and strengths
    document.getElementById('playerAnalysis').textContent = player.analysis;
    
    const strengthsList = document.getElementById('playerStrengths');
    strengthsList.innerHTML = player.strengths.map(s => `<li>${s}</li>`).join('');
    
    // Set draft button data
    document.getElementById('draftPlayerBtn').dataset.player = player.name;
    
    // Show modal
    document.getElementById('playerModal').classList.remove('hidden');
}

// ==========================================
// NEWS & TICKER
// ==========================================

function showNewsTicker() {
    const player = getRandomItem(WarRoomState.availablePlayers.slice(0, 10));
    const message = generateRandomNews(WarRoomState.selectedTeam, player);
    
    const ticker = document.getElementById('newsTicker');
    document.getElementById('newsContent').textContent = '📰 BREAKING: ' + message;
    ticker.classList.remove('hidden');
    
    setTimeout(() => {
        ticker.classList.add('hidden');
    }, 5000);
}

function addToTicker(team, player) {
    const ticker = document.getElementById('tickerContent');
    const item = document.createElement('span');
    item.className = 'ticker-item';
    item.innerHTML = `
        <span class="team-abbr">${team.id.substring(0, 3).toUpperCase()}</span>
        <span>select</span>
        <span class="player-name">${player.name}</span>
        <span>(${player.position})</span>
    `;
    ticker.appendChild(item);
    
    // Keep only last 10
    while (ticker.children.length > 10) {
        ticker.removeChild(ticker.firstChild);
    }
}

function showPickConfirmation(player) {
    const valueDiff = player.edp - (WarRoomState.currentPick - 1);
    
    if (valueDiff >= 10) {
        showToast(`Excellent value pick! ${player.name} was expected at ${player.edp.toFixed(1)}`);
        unlockAchievement('valueHunter');
        
        if (valueDiff >= 20) {
            unlockAchievement('sleeperPick');
        }
    } else if (valueDiff <= -10) {
        showToast(`Reached for ${player.name} - expected around ${player.edp.toFixed(1)}`);
        WarRoomState.stats.fanSentiment = Math.max(0, WarRoomState.stats.fanSentiment - 5);
    } else {
        showToast(`Selected ${player.name}`);
    }
}

// ==========================================
// ACHIEVEMENTS
// ==========================================

function unlockAchievement(achievementId) {
    if (WarRoomState.unlockedAchievements.includes(achievementId)) return;
    
    WarRoomState.unlockedAchievements.push(achievementId);
    const achievement = ACHIEVEMENTS[achievementId];
    
    // Show toast
    const toast = document.getElementById('achievementToast');
    document.getElementById('achievementName').textContent = achievement.name;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

// ==========================================
// PAUSE & EXIT
// ==========================================

function togglePause() {
    WarRoomState.isPaused = !WarRoomState.isPaused;
    
    const pauseMenu = document.getElementById('pauseMenu');
    const pauseBtn = document.getElementById('pauseBtn');
    
    if (WarRoomState.isPaused) {
        pauseMenu.classList.remove('hidden');
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        pauseMenu.classList.add('hidden');
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function confirmExit() {
    if (confirm('Are you sure you want to exit the War Room? Your progress will be lost.')) {
        window.location.href = 'index.html';
    }
}

function restartWarRoom() {
    location.reload();
}

// ==========================================
// DRAFT COMPLETION
// ==========================================

function completeDraft() {
    WarRoomState.isActive = false;
    clearInterval(WarRoomState.timerInterval);
    
    // Check achievements
    const finalGrade = calculateOverallGrade();
    if (finalGrade === 'A+') unlockAchievement('gradeA');
    if (WarRoomState.roundsToComplete === 'all') unlockAchievement('ironGM');
    
    // Show summary screen
    showSummaryScreen();
}

function showSummaryScreen() {
    document.getElementById('warRoomInterface').classList.add('hidden');
    document.getElementById('summaryScreen').classList.remove('hidden');
    
    const finalGrade = calculateOverallGrade();
    const numericGrade = getNumericGrade(finalGrade);
    
    // Grade display
    document.getElementById('finalGradeLetter').textContent = finalGrade.replace(/[+-]/, '');
    document.getElementById('finalGradeScore').textContent = `${numericGrade}/100`;
    
    // Color based on grade
    const gradeCircle = document.getElementById('finalGradeCircle');
    if (numericGrade >= 90) {
        gradeCircle.style.background = 'linear-gradient(135deg, var(--wr-success), #00cc6a)';
    } else if (numericGrade >= 80) {
        gradeCircle.style.background = 'linear-gradient(135deg, var(--wr-accent), #00a8cc)';
    } else if (numericGrade >= 70) {
        gradeCircle.style.background = 'linear-gradient(135deg, var(--wr-warning), #cc9400)';
    } else {
        gradeCircle.style.background = 'linear-gradient(135deg, var(--wr-danger), #cc3a47)';
    }
    
    // Stats
    const avgTime = WarRoomState.stats.pickTimes.length > 0
        ? Math.floor(WarRoomState.stats.totalTimeSpent / WarRoomState.stats.pickTimes.length)
        : 0;
    document.getElementById('summaryAvgTime').textContent = formatTime(avgTime);
    document.getElementById('summaryTrades').textContent = WarRoomState.stats.tradesMade;
    
    // Best value pick
    let bestValue = 0;
    WarRoomState.userPicks.forEach(pick => {
        const value = pick.player.edp - pick.pickNumber;
        if (value > bestValue) bestValue = value;
    });
    document.getElementById('summaryBestValue').textContent = bestValue > 0 ? `+${bestValue.toFixed(0)} ADP` : 'N/A';
    
    document.getElementById('summarySentiment').textContent = WarRoomState.stats.fanSentiment + '%';
    
    // Picks list
    const picksContainer = document.getElementById('summaryPicksList');
    picksContainer.innerHTML = '';
    
    WarRoomState.userPicks.forEach(pick => {
        const div = document.createElement('div');
        div.className = 'summary-pick-item';
        div.innerHTML = `
            <div class="summary-pick-number">${pick.pickNumber}</div>
            <span class="summary-pick-position">${pick.player.position}</span>
            <span class="summary-pick-name">${pick.player.name}</span>
            <span class="summary-pick-school">${pick.player.school}</span>
            <span class="summary-pick-grade" style="background: ${getGradeColor(pick.grade)}; color: var(--wr-bg);">${pick.grade}</span>
        `;
        picksContainer.appendChild(div);
    });
    
    // Achievements
    const achievementsContainer = document.getElementById('achievementsGrid');
    achievementsContainer.innerHTML = '';
    
    Object.values(ACHIEVEMENTS).forEach(achievement => {
        const earned = WarRoomState.unlockedAchievements.includes(achievement.id);
        const div = document.createElement('div');
        div.className = `achievement-item ${earned ? 'earned' : ''}`;
        div.innerHTML = `
            <i class="fas ${achievement.icon}"></i>
            <div class="achievement-item-name">${achievement.name}</div>
            <div class="achievement-item-desc">${achievement.desc}</div>
        `;
        achievementsContainer.appendChild(div);
    });
}

function getGradeColor(grade) {
    if (grade.startsWith('A')) return 'var(--wr-success)';
    if (grade.startsWith('B')) return 'var(--wr-accent)';
    if (grade.startsWith('C')) return 'var(--wr-warning)';
    return 'var(--wr-danger)';
}

// ==========================================
// UTILITY UI FUNCTIONS
// ==========================================

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--wr-bg-secondary);
        color: var(--wr-text);
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 1px solid var(--wr-accent);
        z-index: 3000;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function playSound(soundId) {
    if (!WarRoomState.soundEnabled) return;
    
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {
            // Ignore autoplay errors
        });
    }
}

// ==========================================
// SHARING & SAVING
// ==========================================

function shareResults() {
    const text = `I just completed War Room Mode in the 2026 NFL Mock Draft!\n\n` +
        `Team: ${WarRoomState.selectedTeam.name}\n` +
        `Grade: ${calculateOverallGrade()}\n` +
        `Trades: ${WarRoomState.stats.tradesMade}\n` +
        `Picks: ${WarRoomState.userPicks.length}\n\n` +
        `Try it yourself at nflmockdraft2026.com`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My War Room Results',
            text: text
        });
    } else {
        navigator.clipboard.writeText(text);
        showToast('Results copied to clipboard!');
    }
}

function saveMock() {
    const draftData = {
        team: WarRoomState.selectedTeam,
        picks: WarRoomState.userPicks,
        stats: WarRoomState.stats,
        grade: calculateOverallGrade(),
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('warRoomDraft', JSON.stringify(draftData));
    showToast('Draft saved!');
}

// ==========================================
// INITIALIZE ON LOAD
// ==========================================

console.log('🎯 War Room Mode loaded successfully!');

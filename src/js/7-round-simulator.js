/**
 * 7-Round NFL Mock Draft Simulator 2026
 * Full 257-pick simulation with AI draft logic
 */

// ==========================================
// CONFIGURATION & CONSTANTS
// ==========================================

const CONFIG = {
    TOTAL_PICKS: 257,
    ROUNDS: 7,
    PICKS_PER_ROUND: [32, 32, 41, 38, 37, 37, 40], // Includes compensatory picks
    TIMER_DEFAULT: 180, // 3 minutes in seconds
    SPEEDS: {
        instant: 0,
        fast: 500,
        normal: 2000,
        slow: 5000,
        realistic: 'realistic'
    }
};

// Day configuration for visual theming
const DAY_CONFIG = {
    day1: { rounds: [1, 2, 3], color: '#00d4ff', name: 'Day 1' },
    day2: { rounds: [4, 5, 6, 7], color: '#ff6b35', name: 'Day 2' }
};

// NFL Teams with their 2026 draft order and needs
const NFL_TEAMS = [
    { code: 'LV', name: 'Raiders', city: 'Las Vegas', record: '3-14', helmet: '#000000', accent: '#A5ACAF', needs: ['QB', 'EDGE', 'WR', 'OL', 'DL'], picks: [1, 28] },
    { code: 'NYJ', name: 'Jets', city: 'New York', record: '3-14', helmet: '#125740', accent: 'white', needs: ['QB', 'OL', 'RB', 'EDGE', 'CB'], picks: [2, 7] },
    { code: 'ARI', name: 'Cardinals', city: 'Arizona', record: '3-14', helmet: '#97233F', accent: '#000000', needs: ['OT', 'DL', 'EDGE', 'CB', 'WR'], picks: [3, 21] },
    { code: 'TEN', name: 'Titans', city: 'Tennessee', record: '3-14', helmet: '#0C2340', accent: '#4C8FB6', needs: ['WR', 'CB', 'EDGE', 'DL', 'QB'], picks: [4] },
    { code: 'NYG', name: 'Giants', city: 'New York', record: '4-13', helmet: '#001E62', accent: '#A5ACAF', needs: ['DL', 'QB', 'WR', 'EDGE', 'OT'], picks: [5] },
    { code: 'CLE', name: 'Browns', city: 'Cleveland', record: '5-12', helmet: '#311D00', accent: '#FF3C00', needs: ['CB', 'WR', 'S', 'OT', 'DL'], picks: [6, 24] },
    { code: 'WAS', name: 'Commanders', city: 'Washington', record: '5-12', helmet: '#773141', accent: '#FFB612', needs: ['DE', 'CB', 'LB', 'WR', 'S'], picks: [7] },
    { code: 'NO', name: 'Saints', city: 'New Orleans', record: '6-11', helmet: '#101820', accent: '#D3BC8D', needs: ['WR', 'OT', 'CB', 'DL', 'EDGE'], picks: [8] },
    { code: 'KC', name: 'Chiefs', city: 'Kansas City', record: '6-11', helmet: '#E31837', accent: '#FFB81C', needs: ['EDGE', 'WR', 'CB', 'LB', 'OT'], picks: [9, 20] },
    { code: 'CIN', name: 'Bengals', city: 'Cincinnati', record: '6-11', helmet: '#FB4F14', accent: 'black', needs: ['DL', 'OT', 'LB', 'CB', 'S'], picks: [10] },
    { code: 'MIA', name: 'Dolphins', city: 'Miami', record: '7-10', helmet: '#008E97', accent: '#FC4C02', needs: ['IOL', 'EDGE', 'CB', 'DL', 'LB'], picks: [11] },
    { code: 'DAL', name: 'Cowboys', city: 'Dallas', record: '7-9-1', helmet: '#003594', accent: '#869397', needs: ['CB', 'S', 'LB', 'DL', 'WR'], picks: [12] },
    { code: 'LAR', name: 'Rams', city: 'Los Angeles', record: '8-9', helmet: '#003594', accent: '#FFD100', needs: ['DL', 'EDGE', 'OL', 'CB', 'S'], picks: [13] },
    { code: 'BAL', name: 'Ravens', city: 'Baltimore', record: '8-9', helmet: '#241773', accent: '#9E7C0C', needs: ['EDGE', 'DL', 'WR', 'CB', 'LB'], picks: [14] },
    { code: 'TB', name: 'Buccaneers', city: 'Tampa Bay', record: '8-9', helmet: '#D50A0A', accent: '#FF7900', needs: ['LB', 'EDGE', 'S', 'DL', 'CB'], picks: [15] },
    { code: 'IND', name: 'Colts', city: 'Indianapolis', record: '8-9', helmet: '#003594', accent: '#FFB81C', needs: ['WR', 'EDGE', 'CB', 'DL', 'LB'], picks: [16] },
    { code: 'SF', name: '49ers', city: 'San Francisco', record: '10-7', helmet: '#AA0000', accent: '#B3995D', needs: ['EDGE', 'WR', 'CB', 'S', 'DL'], picks: [17] },
    { code: 'MIN', name: 'Vikings', city: 'Minnesota', record: '9-8', helmet: '#4F2683', accent: '#FFC62F', needs: ['CB', 'WR', 'OT', 'DL', 'EDGE'], picks: [18] },
    { code: 'CAR', name: 'Panthers', city: 'Carolina', record: '8-9', helmet: '#0085CA', accent: '#101820', needs: ['EDGE', 'WR', 'S', 'OT', 'CB'], picks: [19] },
    { code: 'PIT', name: 'Steelers', city: 'Pittsburgh', record: '10-7', helmet: '#FFB612', accent: '#101820', needs: ['IOL', 'WR', 'CB', 'EDGE', 'DL'], picks: [22] },
    { code: 'LAC', name: 'Chargers', city: 'Los Angeles', record: '11-6', helmet: '#0076B6', accent: '#FFB81C', needs: ['Center', 'DL', 'LB', 'CB', 'EDGE'], picks: [25] },
    { code: 'PHI', name: 'Eagles', city: 'Philadelphia', record: '11-6', helmet: '#004C54', accent: '#A5ACAF', needs: ['OL', 'CB', 'TE', 'EDGE', 'S'], picks: [23] },
    { code: 'CHI', name: 'Bears', city: 'Chicago', record: '8-9', helmet: '#0B162A', accent: '#C83803', needs: ['EDGE', 'DL', 'OL', 'WR', 'CB'], picks: [26] },
    { code: 'BUF', name: 'Bills', city: 'Buffalo', record: '12-5', helmet: '#00338D', accent: '#C60C30', needs: ['WR', 'LB', 'S', 'DL', 'CB'], picks: [27] },
    { code: 'HOU', name: 'Texans', city: 'Houston', record: '12-5', helmet: '#03202F', accent: '#A71930', needs: ['RB', 'OL', 'CB', 'DL', 'LB'], picks: [28] },
    { code: 'DEN', name: 'Broncos', city: 'Denver', record: '14-3', helmet: '#FB4F14', accent: '#002244', needs: ['ILB', 'OL', 'WR', 'DL', 'CB'], picks: [30] },
    { code: 'NE', name: 'Patriots', city: 'New England', record: '10-7', helmet: '#002244', accent: '#C60C30', needs: ['EDGE', 'WR', 'DL', 'CB', 'OT'], picks: [31] },
    { code: 'DET', name: 'Lions', city: 'Detroit', record: '15-2', helmet: '#0076B6', accent: '#B0B7BC', needs: ['IOL', 'CB', 'S', 'EDGE', 'DL'], picks: [32] },
    { code: 'GB', name: 'Packers', city: 'Green Bay', record: '9-8', helmet: '#203731', accent: '#FFB612', needs: ['WR', 'CB', 'EDGE', 'DL', 'S'], picks: [] },
    { code: 'ATL', name: 'Falcons', city: 'Atlanta', record: '9-8', helmet: '#000000', accent: '#A71930', needs: ['EDGE', 'CB', 'WR', 'DL', 'LB'], picks: [] },
    { code: 'SEA', name: 'Seahawks', city: 'Seattle', record: '12-5', helmet: '#002244', accent: '#69BE28', needs: ['IOL', 'DL', 'LB', 'CB', 'EDGE'], picks: [] },
    { code: 'JAX', name: 'Jaguars', city: 'Jacksonville', record: '10-7', helmet: '#006778', accent: '#D7A22A', needs: ['RB', 'DL', 'S', 'CB', 'EDGE'], picks: [] }
];

// Generate 7-round draft order with compensatory picks
function generateDraftOrder() {
    const order = [];
    let overallPick = 1;
    
    // Round 1: 32 picks
    for (let i = 0; i < 32; i++) {
        const team = NFL_TEAMS.find(t => t.picks.includes(i + 1)) || NFL_TEAMS[i % 32];
        order.push({
            overall: overallPick++,
            round: 1,
            pickInRound: i + 1,
            team: team.code,
            originalTeam: team.code,
            isCompensatory: false,
            isUser: false
        });
    }
    
    // Round 2: 32 picks
    for (let i = 0; i < 32; i++) {
        const teamIndex = (31 - i); // Reverse order
        const team = NFL_TEAMS[teamIndex];
        order.push({
            overall: overallPick++,
            round: 2,
            pickInRound: i + 1,
            team: team.code,
            originalTeam: team.code,
            isCompensatory: false,
            isUser: false
        });
    }
    
    // Round 3: 41 picks (includes compensatory)
    const round3Teams = generateRound3Order();
    for (let i = 0; i < 41; i++) {
        order.push({
            overall: overallPick++,
            round: 3,
            pickInRound: i + 1,
            team: round3Teams[i],
            originalTeam: round3Teams[i],
            isCompensatory: i >= 32,
            isUser: false
        });
    }
    
    // Rounds 4-7 with compensatory picks
    const roundPicks = [38, 37, 37, 40];
    for (let round = 4; round <= 7; round++) {
        const picksInRound = roundPicks[round - 4];
        const baseOrder = [...NFL_TEAMS].sort((a, b) => {
            // Snake draft order
            if (round % 2 === 0) {
                return a.record.localeCompare(b.record);
            } else {
                return b.record.localeCompare(a.record);
            }
        });
        
        for (let i = 0; i < picksInRound; i++) {
            const team = baseOrder[i % 32];
            order.push({
                overall: overallPick++,
                round: round,
                pickInRound: i + 1,
                team: team.code,
                originalTeam: team.code,
                isCompensatory: i >= 32,
                isUser: false
            });
        }
    }
    
    return order;
}

function generateRound3Order() {
    // Simplified round 3 with some compensatory picks
    const order = [];
    // First 32 picks follow reverse order of round 2
    for (let i = 31; i >= 0; i--) {
        order.push(NFL_TEAMS[i].code);
    }
    // 9 compensatory picks
    const compTeams = ['PHI', 'LAR', 'SF', 'NO', 'MIN', 'BAL', 'IND', 'DAL', 'BUF'];
    order.push(...compTeams);
    return order;
}

// ==========================================
// PLAYER DATABASE (300+ prospects)
// ==========================================

const PLAYERS = generatePlayers();

function generatePlayers() {
    const positions = ['QB', 'RB', 'WR', 'TE', 'OT', 'IOL', 'EDGE', 'DL', 'LB', 'CB', 'S'];
    const schools = [
        'Alabama', 'Ohio State', 'Georgia', 'Clemson', 'LSU', 'Oklahoma', 'Texas', 'Florida', 
        'Penn State', 'Notre Dame', 'Michigan', 'Oregon', 'USC', 'UCLA', 'Washington', 'Utah',
        'Miami', 'Florida State', 'Auburn', 'Tennessee', 'Kentucky', 'Texas A&M', 'Missouri',
        'Iowa', 'Wisconsin', 'Nebraska', 'Michigan State', 'Purdue', 'Indiana', 'Illinois',
        'Ole Miss', 'Mississippi State', 'Arkansas', 'South Carolina', 'Vanderbilt',
        'NC State', 'Virginia Tech', 'Pittsburgh', 'Boston College', 'Syracuse',
        'TCU', 'Baylor', 'Oklahoma State', 'Texas Tech', 'Kansas State', 'Iowa State',
        'Colorado', 'Arizona', 'Arizona State', 'Stanford', 'California', 'Oregon State',
        'North Carolina', 'Duke', 'Wake Forest', 'Virginia', 'Maryland',
        'Cincinnati', 'UCF', 'Houston', 'Memphis', 'Tulane', 'SMU',
        'Boise State', 'BYU', 'San Diego State', 'Fresno State', 'Utah State',
        'North Dakota State', 'South Dakota State', 'Montana State', 'Eastern Washington'
    ];
    
    const firstNames = [
        'James', 'Michael', 'William', 'David', 'John', 'Robert', 'Joseph', 'Thomas',
        'Daniel', 'Matthew', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Brandon',
        'Tyler', 'Jacob', 'Nicholas', 'Ethan', 'Nathan', 'Alexander', 'Samuel',
        'Benjamin', 'Christian', 'Jonathan', 'Zachary', 'Kevin', 'Austin', 'Cameron',
        'Noah', 'Logan', 'Dylan', 'Caleb', 'Mason', 'Luke', 'Gabriel', 'Elijah',
        'Jayden', 'Jackson', 'Aiden', 'Lucas', 'Liam', 'Oliver', 'Henry', 'Sebastian'
    ];
    
    const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
        'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
        'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
        'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
        'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen',
        'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera'
    ];
    
    const players = [];
    let rank = 1;
    
    // Generate 350 prospects
    for (let i = 0; i < 350; i++) {
        const pos = positions[Math.floor(Math.random() * positions.length)];
        const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
        const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
        const school = schools[Math.floor(Math.random() * schools.length)];
        
        // Generate realistic measurements based on position
        const measurements = generateMeasurements(pos);
        
        // Generate grade (0-100 scale, higher is better)
        // Top prospects get higher grades with some randomness
        let grade = 85 - (i * 0.15) + (Math.random() * 8 - 4);
        grade = Math.max(55, Math.min(98, grade));
        
        players.push({
            id: i + 1,
            rank: rank++,
            name: `${fn} ${ln}`,
            position: pos,
            school: school,
            height: measurements.height,
            weight: measurements.weight,
            forty: measurements.forty,
            vertical: measurements.vertical,
            grade: grade.toFixed(1),
            round: estimateRound(grade),
            strengths: generateStrengths(pos),
            weaknesses: generateWeaknesses(pos),
            comparison: generateComparison(pos),
            selected: false,
            selectedBy: null,
            selectedAt: null
        });
    }
    
    // Sort by grade descending
    players.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade));
    
    // Reassign ranks after sorting
    players.forEach((p, i) => p.rank = i + 1);
    
    // Override with real top prospects
    const realProspects = getRealProspects();
    realProspects.forEach((prospect, idx) => {
        if (players[idx]) {
            players[idx] = { ...players[idx], ...prospect, id: players[idx].id };
        }
    });
    
    return players;
}

function generateMeasurements(position) {
    const specs = {
        QB: { hMin: 72, hMax: 77, wMin: 200, wMax: 250, fMin: 4.65, fMax: 5.0 },
        RB: { hMin: 68, hMax: 74, wMin: 190, wMax: 240, fMin: 4.30, fMax: 4.65 },
        WR: { hMin: 70, hMax: 76, wMin: 175, wMax: 230, fMin: 4.30, fMax: 4.60 },
        TE: { hMin: 74, hMax: 79, wMin: 230, wMax: 265, fMin: 4.50, fMax: 4.85 },
        OT: { hMin: 76, hMax: 81, wMin: 290, wMax: 350, fMin: 4.90, fMax: 5.40 },
        IOL: { hMin: 74, hMax: 78, wMin: 285, wMax: 340, fMin: 4.90, fMax: 5.35 },
        EDGE: { hMin: 74, hMax: 79, wMin: 240, wMax: 295, fMin: 4.45, fMax: 4.90 },
        DL: { hMin: 74, hMax: 79, wMin: 280, wMax: 360, fMin: 4.80, fMax: 5.30 },
        LB: { hMin: 72, hMax: 77, wMin: 215, wMax: 260, fMin: 4.40, fMax: 4.85 },
        CB: { hMin: 69, hMax: 74, wMin: 175, wMax: 210, fMin: 4.30, fMax: 4.55 },
        S: { hMin: 71, hMax: 76, wMin: 190, wMax: 230, fMin: 4.35, fMax: 4.70 }
    };
    
    const s = specs[position];
    const heightInches = Math.floor(Math.random() * (s.hMax - s.hMin + 1)) + s.hMin;
    const feet = Math.floor(heightInches / 12);
    const inches = heightInches % 12;
    const weight = Math.floor(Math.random() * (s.wMax - s.wMin + 1)) + s.wMin;
    const forty = (Math.random() * (s.fMax - s.fMin) + s.fMin).toFixed(2);
    const vertical = Math.floor(Math.random() * (40 - 28) + 28);
    
    return {
        height: `${feet}'${inches}"`,
        weight: weight,
        forty: forty,
        vertical: vertical
    };
}

function estimateRound(grade) {
    if (grade >= 90) return 1;
    if (grade >= 85) return 2;
    if (grade >= 80) return 3;
    if (grade >= 75) return 4;
    if (grade >= 70) return 5;
    if (grade >= 65) return 6;
    return 7;
}

function generateStrengths(pos) {
    const strengthMap = {
        QB: ['Arm strength', 'Accuracy', 'Pocket presence', 'Leadership', 'Footwork'],
        RB: ['Vision', 'Speed', 'Power', 'Receiving', 'Pass protection'],
        WR: ['Route running', 'Hands', 'Speed', 'Contested catches', 'YAC ability'],
        TE: ['Size mismatch', 'Blocking', 'Red zone threat', 'Athleticism', 'Hands'],
        OT: ['Pass protection', 'Run blocking', 'Length', 'Strength', 'Athleticism'],
        IOL: ['Anchor', 'Power', 'Quickness', 'Awareness', 'Technique'],
        EDGE: ['Burst', 'Bend', 'Power', 'Hand fighting', 'Motor'],
        DL: ['Strength', 'Quickness', 'Run defense', 'Pass rush', 'Size'],
        LB: ['Instincts', 'Range', 'Tackling', 'Coverage', 'Blitzing'],
        CB: ['Man coverage', 'Ball skills', 'Speed', 'Physicality', 'Recovery'],
        S: ['Range', 'Tackling', 'Coverage', 'Instincts', 'Ball skills']
    };
    const list = strengthMap[pos];
    return list.sort(() => 0.5 - Math.random()).slice(0, 3);
}

function generateWeaknesses(pos) {
    const weaknessMap = {
        QB: ['Decision making', 'Arm strength', 'Mechanics', 'Size', 'Mobility'],
        RB: ['Pass protection', 'Fumbling', 'Durability', 'Size', 'Speed'],
        WR: ['Route tree', 'Size', 'Hands', 'Contested catches', 'Blocking'],
        TE: ['Blocking', 'Route running', 'Separation', 'Speed', 'Size'],
        OT: ['Length', 'Footwork', 'Anchor', 'Bend', 'Experience'],
        IOL: ['Length', 'Power', 'Athleticism', 'Technique', 'Size'],
        EDGE: ['Run defense', 'Size', 'Hand fighting', 'Bend', 'Counter moves'],
        DL: ['Pass rush', 'Size', 'Quickness', 'Stamina', 'Technique'],
        LB: ['Coverage', 'Size', 'Block shedding', 'Speed', 'Instincts'],
        CB: ['Size', 'Physicality', 'Tackling', 'Zone coverage', 'Experience'],
        S: ['Coverage', 'Tackling', 'Size', 'Speed', 'Ball skills']
    };
    const list = weaknessMap[pos];
    return list.sort(() => 0.5 - Math.random()).slice(0, 2);
}

function generateComparison(pos) {
    const comps = {
        QB: ['Alex Smith', 'Derek Carr', 'Kirk Cousins', 'Ryan Tannehill', 'Carson Wentz'],
        RB: ['David Montgomery', 'Josh Jacobs', 'Aaron Jones', 'Austin Ekeler', 'Miles Sanders'],
        WR: ['Chris Godwin', 'Diontae Johnson', 'Tyler Lockett', 'Christian Watson', 'DK Metcalf'],
        TE: ['Dallas Goedert', 'Pat Freiermuth', 'Noah Fant', 'T.J. Hockenson', 'Cole Kmet'],
        OT: ['Taylor Decker', 'Mekhi Becton', 'Andrew Thomas', 'Jedrick Wills', 'Dion Dawkins'],
        IOL: ['Quenton Nelson', 'Joel Bitonio', 'Rodger Saffold', 'Ali Marpet', 'Ryan Kelly'],
        EDGE: ['Rashan Gary', 'Montez Sweat', 'Josh Allen', 'Brian Burns', 'Von Miller'],
        DL: ['Daron Payne', 'Jeffery Simmons', 'Christian Wilkins', 'Dexter Lawrence', 'Ed Oliver'],
        LB: ['Devin White', 'Roquan Smith', 'Fred Warner', 'Cory Littleton', 'Deion Jones'],
        CB: ['Trevon Diggs', 'Jaire Alexander', 'Marshon Lattimore', 'Xavien Howard', 'J.C. Jackson'],
        S: ['Minkah Fitzpatrick', 'Derwin James', 'Jessie Bates', 'Justin Simmons', 'Jamal Adams']
    };
    const list = comps[pos];
    return list[Math.floor(Math.random() * list.length)];
}

function getRealProspects() {
    return [
        { name: 'Fernando Mendoza', position: 'QB', school: 'Indiana', height: "6'5\"", weight: 225, forty: '4.78', grade: '96.5', strengths: ['Elite accuracy', 'Pocket presence', 'Leadership'], weaknesses: ['Arm strength', 'Mobility'], comparison: 'Matt Ryan' },
        { name: 'Jeremiyah Love', position: 'RB', school: 'Notre Dame', height: "6'0\"", weight: 214, forty: '4.44', grade: '94.2', strengths: ['Vision', 'Speed', 'Receiving'], weaknesses: ['Pass protection', 'Size'], comparison: 'Reggie Bush' },
        { name: 'Carnell Tate', position: 'WR', school: 'Ohio State', height: "6'3\"", weight: 195, forty: '4.43', grade: '93.8', strengths: ['Route running', 'Size', 'Hands'], weaknesses: ['Separation', 'Speed'], comparison: 'Michael Thomas' },
        { name: 'Arvell Reese', position: 'LB', school: 'Ohio State', height: "6'4\"", weight: 243, forty: '4.58', grade: '93.5', strengths: ['Athleticism', 'Rush ability', 'Coverage'], weaknesses: ['Consistency', 'Size'], comparison: 'Micah Parsons' },
        { name: 'Rueben Bain Jr.', position: 'EDGE', school: 'Miami', height: "6'3\"", weight: 275, forty: '4.72', grade: '92.8', strengths: ['Power', 'Motor', 'Hands'], weaknesses: ['Bend', 'Speed'], comparison: 'Trent Cole' },
        { name: 'David Bailey', position: 'EDGE', school: 'Texas Tech', height: "6'3\"", weight: 250, forty: '4.58', grade: '92.1', strengths: ['Speed', 'Get-off', 'Bend'], weaknesses: ['Size', 'Run defense'], comparison: 'Brian Burns' },
        { name: 'Francis Mauigoa', position: 'OT', school: 'Miami', height: "6'6\"", weight: 315, forty: '5.08', grade: '91.5', strengths: ['Power', 'Run blocking', 'Size'], weaknesses: ['Athleticism', 'Pass pro'], comparison: 'Trent Williams' },
        { name: 'Sonny Styles', position: 'LB', school: 'Ohio State', height: "6'4\"", weight: 243, forty: '4.53', grade: '91.2', strengths: ['Athleticism', 'Length', 'Coverage'], weaknesses: ['Experience', 'Run fits'], comparison: 'Fred Warner' },
        { name: 'Caleb Downs', position: 'S', school: 'Ohio State', height: "6'0\"", weight: 205, forty: '4.42', grade: '90.8', strengths: ['Instincts', 'Range', 'Tackling'], weaknesses: ['Size', 'Ball skills'], comparison: 'Derwin James' },
        { name: 'Ty Simpson', position: 'QB', school: 'Alabama', height: "6'2\"", weight: 208, forty: '4.73', grade: '90.5', strengths: ['Arm talent', 'Mobility', 'Upside'], weaknesses: ['Experience', 'Consistency'], comparison: 'Josh Allen' },
        { name: 'Jordyn Tyson', position: 'WR', school: 'Arizona State', height: "6'2\"", weight: 200, forty: '4.48', grade: '89.8', strengths: ['Contested catches', 'Size', 'Red zone'], weaknesses: ['Separation', 'Speed'], comparison: 'DeAndre Hopkins' },
        { name: 'Spencer Fano', position: 'OT', school: 'Utah', height: "6'6\"", weight: 302, forty: '5.12', grade: '89.2', strengths: ['Technique', 'Footwork', 'Intelligence'], weaknesses: ['Power', 'Length'], comparison: 'Ryan Ramczyk' },
        { name: 'Akheem Mesidor', position: 'EDGE', school: 'Miami', height: "6'3\"", weight: 280, forty: '4.75', grade: '88.9', strengths: ['Power', 'Motor', 'Run defense'], weaknesses: ['Bend', 'Speed rush'], comparison: 'Montez Sweat' },
        { name: 'Keldric Faulk', position: 'EDGE', school: 'Auburn', height: "6'6\"", weight: 285, forty: '4.78', grade: '88.5', strengths: ['Length', 'Strength', 'Run defense'], weaknesses: ['Pass rush', 'Bend'], comparison: 'Arik Armstead' },
        { name: 'Peter Woods', position: 'DL', school: 'Clemson', height: "6'3\"", weight: 315, forty: '5.05', grade: '88.2', strengths: ['Quickness', 'Power', 'Versatility'], weaknesses: ['Size', 'Consistency'], comparison: 'Fletcher Cox' },
        { name: 'Jermod McCoy', position: 'CB', school: 'Tennessee', height: "6'0\"", weight: 193, forty: '4.40', grade: '87.8', strengths: ['Ball skills', 'Press', 'Recovery'], weaknesses: ['Size', 'Run support'], comparison: 'Jaire Alexander' },
        { name: 'Olaivavega Ioane', position: 'IOL', school: 'Penn State', height: "6'4\"", weight: 330, forty: '5.18', grade: '87.5', strengths: ['Power', 'Anchor', 'Run blocking'], weaknesses: ['Athleticism', 'Pass pro'], comparison: 'Quenton Nelson' },
        { name: 'Kayden McDonald', position: 'DL', school: 'Ohio State', height: "6'3\"", weight: 326, forty: '5.12', grade: '87.1', strengths: ['Size', 'Power', 'Run defense'], weaknesses: ['Pass rush', 'Quickness'], comparison: 'Vita Vea' },
        { name: 'Drew Allar', position: 'QB', school: 'Penn State', height: "6'5\"", weight: 235, forty: '4.82', grade: '86.8', strengths: ['Size', 'Arm strength', 'Pocket'], weaknesses: ['Decision making', 'Mobility'], comparison: 'Ben Roethlisberger' },
        { name: 'Caleb Lomu', position: 'OT', school: 'Utah', height: "6'6\"", weight: 304, forty: '5.02', grade: '86.4', strengths: ['Length', 'Strength', 'Athleticism'], weaknesses: ['Technique', 'Experience'], comparison: 'Lane Johnson' }
    ];
}

// ==========================================
// STATE MANAGEMENT
// ==========================================

const state = {
    currentPick: 1,
    userTeam: null,
    draftOrder: [],
    availablePlayers: [],
    completedPicks: [],
    isSimulating: false,
    isProcessingPick: false,
    simulationSpeed: 'fast',
    timerRemaining: CONFIG.TIMER_DEFAULT,
    timerInterval: null,
    userPicks: [],
    trades: [],
    paused: false,
    draftComplete: false,
    difficulty: 'veteran',
    enableTrades: true,
    filterPosition: 'all',
    currentTab: 'available'
};

// ==========================================
// AI DRAFT LOGIC
// ==========================================

const AIDraftLogic = {
    /**
     * Calculate the best pick for an AI team
     * Weighted algorithm considering team needs, player ranking, and positional value
     */
    calculateBestPick(teamCode, availablePlayers, pickNumber) {
        const team = NFL_TEAMS.find(t => t.code === teamCode);
        if (!team) return availablePlayers[0];
        
        const scoredPlayers = availablePlayers.map(player => {
            let score = 0;
            
            // Team needs weight (60%)
            const needIndex = team.needs.indexOf(player.position);
            if (needIndex !== -1) {
                score += (10 - needIndex) * 6; // Higher score for higher priority needs
            }
            
            // Player ranking weight (25%)
            const rankScore = Math.max(0, 100 - player.rank) * 0.25;
            score += rankScore;
            
            // Positional value weight (10%)
            const positionalValue = this.getPositionalValue(player.position);
            score += positionalValue * 10;
            
            // Randomness factor (5%)
            score += Math.random() * 5;
            
            // Day 3 randomness (rounds 4-7 have more uncertainty)
            if (pickNumber > 104) {
                score += (Math.random() * 20 - 10); // More variance in later rounds
            }
            
            return { player, score };
        });
        
        // Sort by score descending
        scoredPlayers.sort((a, b) => b.score - a.score);
        
        // Return top player with some randomness for Day 3
        if (pickNumber > 104 && Math.random() > 0.7) {
            // 30% chance to pick from top 3 instead of #1 in Day 3
            const idx = Math.floor(Math.random() * Math.min(3, scoredPlayers.length));
            return scoredPlayers[idx].player;
        }
        
        return scoredPlayers[0].player;
    },
    
    getPositionalValue(position) {
        // Positional value multipliers (QB premium, etc.)
        const values = {
            'QB': 1.5,
            'EDGE': 1.3,
            'OT': 1.25,
            'WR': 1.15,
            'CB': 1.1,
            'DL': 1.0,
            'LB': 0.95,
            'IOL': 0.9,
            'S': 0.9,
            'RB': 0.85,
            'TE': 0.85
        };
        return values[position] || 1.0;
    },
    
    /**
     * Generate a trade offer
     */
    generateTradeOffer(teamCode, pickNumber) {
        const offeringTeam = NFL_TEAMS[Math.floor(Math.random() * NFL_TEAMS.length)];
        const pickValue = this.getPickValue(pickNumber);
        
        // Simple trade logic: offer future picks or current picks
        const theirPicks = this.getTeamPicks(offeringTeam.code, pickNumber);
        
        if (theirPicks.length === 0) return null;
        
        const offerPick = theirPicks[Math.floor(Math.random() * theirPicks.length)];
        const offerValue = this.getPickValue(offerPick);
        
        // Check if it's a reasonable offer (within 20% value)
        if (Math.abs(offerValue - pickValue) / pickValue > 0.2) return null;
        
        return {
            fromTeam: offeringTeam,
            toTeam: teamCode,
            theyReceive: [`Pick #${pickNumber}`],
            youReceive: [`Pick #${offerPick}`],
            value: offerValue / pickValue
        };
    },
    
    getPickValue(pickNumber) {
        // Simplified pick value chart
        if (pickNumber <= 32) return 1000 - (pickNumber - 1) * 25;
        if (pickNumber <= 64) return 400 - (pickNumber - 33) * 10;
        if (pickNumber <= 105) return 150 - (pickNumber - 65) * 3;
        return Math.max(10, 50 - (pickNumber - 106) * 0.3);
    },
    
    getTeamPicks(teamCode, afterPick) {
        return state.draftOrder
            .filter(p => p.team === teamCode && p.overall > afterPick)
            .map(p => p.overall);
    }
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    entryScreen: document.getElementById('entryScreen'),
    simulatorInterface: document.getElementById('simulatorInterface'),
    teamSelect: document.getElementById('teamSelect'),
    startBtn: document.getElementById('startDraft'),
    difficultyBtns: document.querySelectorAll('.difficulty-btn'),
    speedBtns: document.querySelectorAll('.speed-btn'),
    currentTeamName: document.getElementById('currentTeamName'),
    currentRound: document.getElementById('currentRound'),
    currentPickNumber: document.getElementById('currentPickNumber'),
    currentOverall: document.getElementById('currentOverall'),
    currentTeamHelmet: document.getElementById('currentTeamHelmet'),
    timerDisplay: document.getElementById('timerDisplay'),
    timerBar: document.getElementById('timerBar'),
    roundTabs: document.getElementById('roundTabs'),
    playersGrid: document.getElementById('playersGrid'),
    playerSearch: document.getElementById('playerSearch'),
    positionFilters: document.querySelectorAll('.pos-filter'),
    myPicksList: document.getElementById('myPicksList'),
    draftBoardMini: document.getElementById('draftBoardMini'),
    teamNeedsList: document.getElementById('teamNeedsList'),
    recentPicksList: document.getElementById('recentPicksList'),
    historyList: document.getElementById('historyList'),
    statCompleted: document.getElementById('statCompleted'),
    statYourPicks: document.getElementById('statYourPicks'),
    statGrade: document.getElementById('statGrade'),
    pauseBtn: document.getElementById('pauseBtn'),
    pauseMenu: document.getElementById('pauseMenu'),
    tradeModal: document.getElementById('tradeModal'),
    playerModal: document.getElementById('playerModal'),
    summaryModal: document.getElementById('summaryModal')
};

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    populateTeamSelect();
    setupEventListeners();
    
    // Initialize with empty state
    state.draftOrder = generateDraftOrder();
    state.availablePlayers = [...PLAYERS];
}

function populateTeamSelect() {
    NFL_TEAMS.forEach(team => {
        const option = document.createElement('option');
        option.value = team.code;
        option.textContent = `${team.city} ${team.name}`;
        elements.teamSelect.appendChild(option);
    });
}

function setupEventListeners() {
    // Difficulty selection
    elements.difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.difficultyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.difficulty = btn.dataset.difficulty;
            CONFIG.TIMER_DEFAULT = parseInt(btn.dataset.time);
        });
    });
    
    // Speed selection
    elements.speedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.speedBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.simulationSpeed = btn.dataset.speed;
        });
    });
    
    // Start draft
    elements.startBtn.addEventListener('click', startDraft);
    
    // Pause/Resume
    elements.pauseBtn.addEventListener('click', togglePause);
    document.getElementById('resumeBtn').addEventListener('click', togglePause);
    
    // Restart
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
    
    // Exit
    document.getElementById('exitBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to exit? Your draft progress will be lost.')) {
            window.location.href = 'index.html';
        }
    });
    
    // Position filters
    elements.positionFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.positionFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterPosition = btn.dataset.pos;
            renderPlayersGrid();
        });
    });
    
    // Search
    elements.playerSearch.addEventListener('input', renderPlayersGrid);
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(`${btn.dataset.tab}Tab`).classList.add('active');
        });
    });
    
    // Quick pick buttons
    document.getElementById('quickBestAvailable').addEventListener('click', () => selectBestAvailable());
    document.getElementById('quickBestValue').addEventListener('click', () => selectBestValue());
    document.getElementById('quickNeedFill').addEventListener('click', () => selectNeedFill());
    
    // Auto draft buttons
    document.getElementById('simulateToNext').addEventListener('click', simulateToNextUserPick);
    document.getElementById('simulateRound').addEventListener('click', simulateCurrentRound);
    document.getElementById('simulateAll').addEventListener('click', simulateRemainingDraft);
    
    // Modal close buttons
    document.getElementById('closePlayerModal').addEventListener('click', () => {
        elements.playerModal.classList.add('hidden');
    });
    
    document.getElementById('declineTrade').addEventListener('click', () => {
        elements.tradeModal.classList.add('hidden');
        resumeTimer();
    });
    
    // Trade accept
    document.getElementById('acceptTrade').addEventListener('click', executeTrade);
    
    // Summary buttons
    document.getElementById('draftAgain').addEventListener('click', () => location.reload());
    document.getElementById('viewDraftBoard').addEventListener('click', showFullDraftBoard);
    document.getElementById('shareResults').addEventListener('click', shareResults);
    document.getElementById('exportResults').addEventListener('click', exportResults);
}

// ==========================================
// DRAFT LOGIC
// ==========================================

function startDraft() {
    const selectedTeam = elements.teamSelect.value;
    if (!selectedTeam) {
        alert('Please select a team to continue.');
        return;
    }
    
    state.userTeam = selectedTeam;
    
    // Mark user picks in draft order
    state.draftOrder.forEach(pick => {
        pick.isUser = (pick.team === selectedTeam);
        if (pick.isUser) {
            state.userPicks.push(pick.overall);
        }
    });
    
    // Switch screens
    elements.entryScreen.classList.add('hidden');
    elements.simulatorInterface.classList.remove('hidden');
    
    // Initial render
    renderRoundTabs();
    renderMyPicks();
    renderDraftBoardMini();
    renderTeamNeeds();
    
    // Start the draft
    processNextPick();
}

function processNextPick() {
    if (state.currentPick > CONFIG.TOTAL_PICKS) {
        completeDraft();
        return;
    }
    
    if (state.paused) return;
    
    const currentPickData = state.draftOrder.find(p => p.overall === state.currentPick);
    if (!currentPickData) {
        state.currentPick++;
        processNextPick();
        return;
    }
    
    // Update UI for current pick
    updateOnClockBanner(currentPickData);
    
    // Check if it's a user pick
    if (currentPickData.isUser) {
        handleUserPick(currentPickData);
    } else {
        handleAIPick(currentPickData);
    }
}

function handleUserPick(pickData) {
    // Stop any ongoing simulation
    state.isSimulating = false;
    state.paused = false;  // Make sure we're not paused
    state.isProcessingPick = false;  // Reset processing flag
    
    // Start the timer for user to make selection
    startTimer();
    
    // Render the player selection grid
    renderPlayersGrid();
    updateStats();
    
    // Highlight that it's user's turn
    highlightUserTurn();
    
    // Maybe offer a trade after a few seconds
    if (state.enableTrades && Math.random() > 0.7) {
        setTimeout(() => {
            // Only offer trade if still on this pick
            const currentPick = state.draftOrder.find(p => p.overall === state.currentPick);
            if (currentPick?.isUser && !state.isProcessingPick) {
                offerTrade(pickData);
            }
        }, 3000);
    }
}

function handleAIPick(pickData) {
    state.isSimulating = true;
    
    const speed = CONFIG.SPEEDS[state.simulationSpeed];
    const delay = speed === 'realistic' ? getRealisticDelay(pickData.round) : speed;
    
    setTimeout(() => {
        if (state.paused) return;
        
        const team = NFL_TEAMS.find(t => t.code === pickData.team);
        const player = AIDraftLogic.calculateBestPick(
            pickData.team, 
            state.availablePlayers,
            state.currentPick
        );
        
        makePick(pickData, player);
    }, delay);
}

function getRealisticDelay(round) {
    // Round 1: 5-8 minutes per pick
    // Round 2-3: 3-5 minutes
    // Day 2: 2-3 minutes
    if (round === 1) return 3000 + Math.random() * 2000;
    if (round <= 3) return 2000 + Math.random() * 1500;
    return 1000 + Math.random() * 1000;
}

function makePick(pickData, player) {
    // Mark player as selected
    player.selected = true;
    player.selectedBy = pickData.team;
    player.selectedAt = pickData.overall;
    
    // Remove from available players
    state.availablePlayers = state.availablePlayers.filter(p => p.id !== player.id);
    
    // Record the pick
    state.completedPicks.push({
        ...pickData,
        player: player
    });
    
    // Update UI
    addToRecentPicks(pickData, player);
    renderDraftBoardMini();
    renderHistoryList();
    renderMyPicks();
    renderTeamNeeds();
    updateStats();
    
    // Show pick announcement
    showPickAnnouncement(pickData, player);
    
    // Move to next pick
    state.currentPick++;
    
    // Update round tabs
    updateRoundTabs();
    
    // Continue
    setTimeout(() => processNextPick(), 500);
}

function selectPlayer(playerId) {
    // Prevent double-clicking or selecting when not on user's turn
    const currentPickData = state.draftOrder.find(p => p.overall === state.currentPick);
    if (!currentPickData?.isUser) {
        console.log('Not your turn to pick');
        return;
    }
    
    // Check if pick is already being processed
    if (state.isProcessingPick) {
        console.log('Pick already in progress');
        return;
    }
    
    const player = state.availablePlayers.find(p => p.id === playerId);
    if (!player) return;
    
    state.isProcessingPick = true;
    stopTimer();
    makePick(currentPickData, player);
    
    // Reset after pick is made
    setTimeout(() => {
        state.isProcessingPick = false;
    }, 1000);
}

// ==========================================
// QUICK PICK SELECTIONS
// ==========================================

function selectBestAvailable() {
    if (!state.availablePlayers.length) return;
    selectPlayer(state.availablePlayers[0].id);
}

function selectBestValue() {
    // Find player with biggest ADP gap (should go higher)
    const pickData = state.draftOrder.find(p => p.overall === state.currentPick);
    const valuePicks = state.availablePlayers
        .filter(p => p.rank < state.currentPick + 20)
        .sort((a, b) => a.rank - b.rank);
    
    if (valuePicks.length) {
        selectPlayer(valuePicks[0].id);
    } else {
        selectBestAvailable();
    }
}

function selectNeedFill() {
    const team = NFL_TEAMS.find(t => t.code === state.userTeam);
    if (!team) return;
    
    // Find best player at a position of need
    for (const need of team.needs) {
        const needPlayer = state.availablePlayers
            .filter(p => p.position === need)
            .sort((a, b) => b.grade - a.grade)[0];
        
        if (needPlayer) {
            selectPlayer(needPlayer.id);
            return;
        }
    }
    
    // Fallback to best available
    selectBestAvailable();
}

// ==========================================
// SIMULATION CONTROLS
// ==========================================

function simulateToNextUserPick() {
    state.isSimulating = true;
    
    function simNext() {
        if (state.paused) return;
        
        const pickData = state.draftOrder.find(p => p.overall === state.currentPick);
        if (!pickData) {
            completeDraft();
            return;
        }
        
        if (pickData.isUser) {
            state.isSimulating = false;
            return;
        }
        
        const player = AIDraftLogic.calculateBestPick(
            pickData.team,
            state.availablePlayers,
            state.currentPick
        );
        
        makePick(pickData, player);
        
        // Continue simulation
        setTimeout(simNext, 100);
    }
    
    simNext();
}

function simulateCurrentRound() {
    const currentRound = state.draftOrder.find(p => p.overall === state.currentPick)?.round;
    if (!currentRound) return;
    
    state.isSimulating = true;
    
    function simNext() {
        if (state.paused) return;
        
        const pickData = state.draftOrder.find(p => p.overall === state.currentPick);
        if (!pickData || pickData.round !== currentRound) {
            state.isSimulating = false;
            return;
        }
        
        if (pickData.isUser) {
            state.isSimulating = false;
            return;
        }
        
        const player = AIDraftLogic.calculateBestPick(
            pickData.team,
            state.availablePlayers,
            state.currentPick
        );
        
        makePick(pickData, player);
        setTimeout(simNext, 100);
    }
    
    simNext();
}

function simulateRemainingDraft() {
    state.isSimulating = true;
    
    function simNext() {
        if (state.paused) return;
        
        const pickData = state.draftOrder.find(p => p.overall === state.currentPick);
        if (!pickData) {
            completeDraft();
            return;
        }
        
        if (pickData.isUser) {
            // Auto-select best available for user
            const player = AIDraftLogic.calculateBestPick(
                pickData.team,
                state.availablePlayers,
                state.currentPick
            );
            makePick(pickData, player);
        } else {
            const player = AIDraftLogic.calculateBestPick(
                pickData.team,
                state.availablePlayers,
                state.currentPick
            );
            makePick(pickData, player);
        }
        
        setTimeout(simNext, 50);
    }
    
    simNext();
}

// ==========================================
// TIMER FUNCTIONS
// ==========================================

function startTimer() {
    state.timerRemaining = CONFIG.TIMER_DEFAULT;
    updateTimerDisplay();
    
    state.timerInterval = setInterval(() => {
        if (state.paused) return;
        
        state.timerRemaining--;
        updateTimerDisplay();
        
        if (state.timerRemaining <= 0) {
            // Timer expired - check if it's user pick or AI pick
            const currentPickData = state.draftOrder.find(p => p.overall === state.currentPick);
            
            if (currentPickData?.isUser) {
                // User's turn - pause and wait for selection, don't auto-pick
                stopTimer();
                state.paused = true;
                elements.timerDisplay.classList.add('danger');
                elements.timerBar.classList.add('danger');
                
                // Show timeout message
                const banner = document.getElementById('onClockBanner');
                if (banner) {
                    banner.innerHTML = `
                        <div class="on-clock-content">
                            <span class="on-clock-label">TIME EXPIRED - YOUR TURN</span>
                            <span class="on-clock-team">${state.userTeam}</span>
                            <span class="on-clock-pick">Pick #${state.currentPick}</span>
                        </div>
                    `;
                    banner.style.background = 'linear-gradient(90deg, #dc2626, #991b1b)';
                }
                
                // Enable player selection
                state.isSimulating = false;
                renderPlayersGrid();
            } else {
                // AI pick - auto-pick best available
                stopTimer();
                selectBestAvailable();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function pauseTimer() {
    // Timer pauses automatically when state.paused is true
}

function resumeTimer() {
    // Timer resumes automatically when state.paused is false
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timerRemaining / 60);
    const seconds = state.timerRemaining % 60;
    elements.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update progress bar
    const percentage = (state.timerRemaining / CONFIG.TIMER_DEFAULT) * 100;
    elements.timerBar.style.width = `${percentage}%`;
    
    // Update colors based on time remaining
    elements.timerDisplay.classList.remove('warning', 'danger');
    elements.timerBar.classList.remove('warning', 'danger');
    
    if (state.timerRemaining <= 30) {
        elements.timerDisplay.classList.add('danger');
        elements.timerBar.classList.add('danger');
    } else if (state.timerRemaining <= 60) {
        elements.timerDisplay.classList.add('warning');
        elements.timerBar.classList.add('warning');
    }
}

function togglePause() {
    state.paused = !state.paused;
    elements.pauseMenu.classList.toggle('hidden', !state.paused);
    elements.pauseBtn.innerHTML = state.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
}

// ==========================================
// TRADE FUNCTIONS
// ==========================================

function offerTrade(pickData) {
    pauseTimer();
    
    const trade = AIDraftLogic.generateTradeOffer(pickData.team, pickData.overall);
    if (!trade) {
        resumeTimer();
        return;
    }
    
    // Populate trade modal
    document.getElementById('tradeTeamName').textContent = trade.fromTeam.name;
    document.getElementById('tradeGM').textContent = `${trade.fromTeam.name} GM offers:`;
    
    const theyList = document.getElementById('theyReceiveList');
    const youList = document.getElementById('youReceiveList');
    
    theyList.innerHTML = trade.theyReceive.map(item => `<li>${item}</li>`).join('');
    youList.innerHTML = trade.youReceive.map(item => `<li>${item}</li>`).join('');
    
    // Update value meter
    const valuePercentage = Math.min(100, trade.value * 100);
    document.getElementById('tradeValueBar').style.width = `${valuePercentage}%`;
    
    const verdict = document.getElementById('tradeVerdict');
    if (trade.value >= 1.1) {
        verdict.textContent = 'Great Value!';
        verdict.style.color = 'var(--accent-success)';
    } else if (trade.value >= 0.9) {
        verdict.textContent = 'Fair Trade';
        verdict.style.color = 'var(--accent-primary)';
    } else {
        verdict.textContent = 'Poor Value';
        verdict.style.color = 'var(--accent-danger)';
    }
    
    // Store current trade
    state.currentTrade = trade;
    
    elements.tradeModal.classList.remove('hidden');
}

function executeTrade() {
    if (!state.currentTrade) return;
    
    // Swap pick ownership
    const pickIndex = state.draftOrder.findIndex(p => p.overall === state.currentPick);
    if (pickIndex !== -1) {
        state.draftOrder[pickIndex].team = state.currentTrade.fromTeam.code;
    }
    
    state.trades.push(state.currentTrade);
    
    elements.tradeModal.classList.add('hidden');
    resumeTimer();
}

// ==========================================
// RENDERING FUNCTIONS
// ==========================================

function updateOnClockBanner(pickData) {
    const team = NFL_TEAMS.find(t => t.code === pickData.team);
    
    elements.currentTeamName.textContent = team ? `${team.city} ${team.name}` : pickData.team;
    elements.currentRound.textContent = `Round ${pickData.round}`;
    elements.currentPickNumber.textContent = `Pick #${pickData.pickInRound}`;
    elements.currentOverall.textContent = `(${pickData.overall}${getOrdinal(pickData.overall)} Overall)`;
    
    // Update helmet color
    if (team) {
        elements.currentTeamHelmet.style.backgroundColor = team.helmet;
        elements.currentTeamHelmet.style.color = team.accent;
        elements.currentTeamHelmet.innerHTML = `<span style="font-weight:bold;font-size:0.8rem;">${team.code}</span>`;
    }
    
    // Update day indicator
    const dayIndicator = document.getElementById('dayIndicator');
    if (pickData.round <= 3) {
        dayIndicator.innerHTML = '<i class="fas fa-calendar-day"></i><span>Day 1 - Rounds 1-3</span>';
        dayIndicator.className = 'day-indicator';
    } else {
        dayIndicator.innerHTML = '<i class="fas fa-calendar-day"></i><span>Day 2 - Rounds 4-7</span>';
        dayIndicator.className = 'day-indicator day2';
    }
}

function highlightUserTurn() {
    // Add visual indication that it's the user's turn
    const banner = document.getElementById('onClockBanner');
    if (banner && state.userTeam) {
        banner.style.background = 'linear-gradient(90deg, #00d4ff, #0099cc)';
        banner.style.animation = 'pulse 2s infinite';
        
        // Add a visual cue to the player grid
        const centerPanel = document.querySelector('.center-panel');
        if (centerPanel) {
            centerPanel.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
            
            // Remove highlight after a few seconds
            setTimeout(() => {
                centerPanel.style.boxShadow = '';
            }, 3000);
        }
    }
}

function renderRoundTabs() {
    elements.roundTabs.innerHTML = '';
    
    for (let round = 1; round <= 7; round++) {
        const picksInRound = CONFIG.PICKS_PER_ROUND[round - 1];
        
        for (let pick = 1; pick <= Math.min(picksInRound, 16); pick++) { // Show limited tabs for UI
            const overall = getOverallPick(round, pick);
            const pickData = state.draftOrder.find(p => p.overall === overall);
            
            const tab = document.createElement('button');
            tab.className = 'round-tab';
            tab.textContent = `${round}.${pick}`;
            tab.dataset.overall = overall;
            
            if (pickData?.isCompensatory) {
                tab.classList.add('compensatory');
                tab.title = 'Compensatory Pick';
            }
            
            elements.roundTabs.appendChild(tab);
        }
    }
}

function updateRoundTabs() {
    document.querySelectorAll('.round-tab').forEach(tab => {
        const overall = parseInt(tab.dataset.overall);
        
        tab.classList.remove('active', 'completed', 'current');
        
        if (overall === state.currentPick) {
            tab.classList.add('active', 'current');
        } else if (overall < state.currentPick) {
            tab.classList.add('completed');
        }
        
        const pickData = state.draftOrder.find(p => p.overall === overall);
        if (pickData?.isUser) {
            tab.classList.add('user-pick');
        }
    });
}

function renderPlayersGrid() {
    const searchTerm = elements.playerSearch.value.toLowerCase();
    
    let filtered = state.availablePlayers.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm) || 
                             p.school.toLowerCase().includes(searchTerm);
        const matchesPosition = state.filterPosition === 'all' || p.position === state.filterPosition;
        return matchesSearch && matchesPosition;
    });
    
    // Limit to top 50 for performance
    filtered = filtered.slice(0, 50);
    
    elements.playersGrid.innerHTML = filtered.map(player => {
        const team = NFL_TEAMS.find(t => t.code === state.userTeam);
        const isNeed = team?.needs.includes(player.position);
        const valueDiff = player.rank - state.currentPick;
        const isValuePick = valueDiff < -15;
        
        return `
            <div class="player-card ${isValuePick ? 'best-value' : ''} ${isNeed ? 'needs-match' : ''}" 
                 onclick="window.selectPlayer(${player.id})">
                <div class="player-rank">#${player.rank}</div>
                <div class="player-card-header">
                    <div class="player-photo">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <div class="player-meta">
                            <span class="player-pos">${player.position}</span>
                            <span class="player-school">${player.school}</span>
                        </div>
                    </div>
                </div>
                <div class="player-stats">
                    <div class="player-stat">
                        <span class="player-stat-value">${player.height}</span>
                        <span class="player-stat-label">Height</span>
                    </div>
                    <div class="player-stat">
                        <span class="player-stat-value">${player.weight}</span>
                        <span class="player-stat-label">Weight</span>
                    </div>
                    <div class="player-stat">
                        <span class="player-stat-value">${player.forty}</span>
                        <span class="player-stat-label">40-Yard</span>
                    </div>
                </div>
                <div class="value-indicator ${valueDiff < 0 ? 'positive' : 'neutral'}">
                    <i class="fas fa-${valueDiff < 0 ? 'arrow-up' : 'minus'}"></i>
                    <span>${valueDiff < 0 ? `+${Math.abs(valueDiff)} value` : ''}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderMyPicks() {
    const userPicks = state.draftOrder.filter(p => p.isUser);
    
    elements.myPicksList.innerHTML = userPicks.map(pick => {
        const completed = state.completedPicks.find(p => p.overall === pick.overall);
        const isUpcoming = pick.overall === state.currentPick;
        
        if (completed) {
            return `
                <div class="my-pick-item ${isUpcoming ? 'upcoming' : ''}">
                    <span class="my-pick-number">#${pick.overall}</span>
                    <div class="my-pick-info">
                        <div class="my-pick-player">${completed.player.name}</div>
                        <div class="my-pick-position">${completed.player.position} | ${completed.player.school}</div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="my-pick-item ${isUpcoming ? 'upcoming' : ''}">
                    <span class="my-pick-number">#${pick.overall}</span>
                    <div class="my-pick-info">
                        <span class="my-pick-placeholder">${isUpcoming ? 'ON THE CLOCK' : 'Upcoming...'}</span>
                    </div>
                </div>
            `;
        }
    }).join('');
}

function renderDraftBoardMini() {
    // Show current window of picks
    const startPick = Math.max(1, state.currentPick - 10);
    const endPick = Math.min(CONFIG.TOTAL_PICKS, state.currentPick + 40);
    
    elements.draftBoardMini.innerHTML = '';
    
    for (let i = startPick; i <= endPick; i++) {
        const pickData = state.draftOrder.find(p => p.overall === i);
        const completed = state.completedPicks.find(p => p.overall === i);
        
        const cell = document.createElement('div');
        cell.className = 'mini-cell';
        
        if (i === state.currentPick) cell.classList.add('current');
        if (completed) cell.classList.add('completed');
        if (pickData?.isUser) cell.classList.add('user');
        
        cell.innerHTML = `
            <span class="mini-cell-number">${i}</span>
            <span class="mini-cell-team">${completed ? completed.player.position : pickData?.team || ''}</span>
        `;
        
        elements.draftBoardMini.appendChild(cell);
    }
}

function renderTeamNeeds() {
    const team = NFL_TEAMS.find(t => t.code === state.userTeam);
    if (!team) return;
    
    elements.teamNeedsList.innerHTML = team.needs.map((need, idx) => {
        let priority = 'high';
        if (idx >= 2) priority = 'medium';
        if (idx >= 4) priority = 'low';
        
        // Check if need is filled
        const filledPicks = state.completedPicks.filter(p => 
            p.team === state.userTeam && p.player.position === need
        );
        const isFilled = filledPicks.length > 0;
        
        return `
            <div class="need-item ${priority} ${isFilled ? 'filled' : ''}">
                <span class="need-position">${need}</span>
                <span class="need-priority ${priority}">${priority}</span>
            </div>
        `;
    }).join('');
}

function addToRecentPicks(pickData, player) {
    const team = NFL_TEAMS.find(t => t.code === pickData.team);
    
    const pick = document.createElement('div');
    pick.className = 'recent-pick';
    pick.innerHTML = `
        <span class="recent-pick-number">#${pickData.overall}</span>
        <span class="recent-pick-team">${pickData.team}</span>
        <span class="recent-pick-player">${player.name}</span>
        <span class="recent-pick-position">${player.position}</span>
    `;
    
    elements.recentPicksList.insertBefore(pick, elements.recentPicksList.firstChild);
    
    // Keep only last 10
    while (elements.recentPicksList.children.length > 10) {
        elements.recentPicksList.removeChild(elements.recentPicksList.lastChild);
    }
}

function renderHistoryList() {
    elements.historyList.innerHTML = state.completedPicks.slice(-50).reverse().map(pick => `
        <div class="history-item">
            <span class="history-pick">#${pick.overall}</span>
            <span class="history-team" style="background:${NFL_TEAMS.find(t => t.code === pick.team)?.helmet || '#333'}"></span>
            <span class="history-player">${pick.player.name}</span>
            <span class="history-position">${pick.player.position}</span>
            <span class="history-school">${pick.player.school}</span>
        </div>
    `).join('');
}

function updateStats() {
    elements.statCompleted.textContent = `${state.completedPicks.length}/${CONFIG.TOTAL_PICKS}`;
    
    const userPicksMade = state.completedPicks.filter(p => p.team === state.userTeam).length;
    elements.statYourPicks.textContent = `${userPicksMade}/${state.userPicks.length}`;
    
    // Calculate draft grade
    const grade = calculateDraftGrade();
    elements.statGrade.textContent = grade.letter;
    elements.statGrade.style.color = grade.color;
}

function calculateDraftGrade() {
    const userPicks = state.completedPicks.filter(p => p.team === state.userTeam);
    if (userPicks.length === 0) return { letter: '-', color: '#8b8b9a' };
    
    let totalValue = 0;
    userPicks.forEach(pick => {
        const value = pick.player.rank - pick.overall;
        totalValue += value;
    });
    
    const avgValue = totalValue / userPicks.length;
    
    if (avgValue < -20) return { letter: 'A+', color: '#00ff88' };
    if (avgValue < -10) return { letter: 'A', color: '#00ff88' };
    if (avgValue < -5) return { letter: 'B+', color: '#00d4ff' };
    if (avgValue < 0) return { letter: 'B', color: '#00d4ff' };
    if (avgValue < 10) return { letter: 'C+', color: '#ffb800' };
    if (avgValue < 20) return { letter: 'C', color: '#ffb800' };
    return { letter: 'D', color: '#ff4757' };
}

// ==========================================
// COMPLETION & SUMMARY
// ==========================================

function completeDraft() {
    state.draftComplete = true;
    
    // Show Mr. Irrelevant if applicable
    const mrIrrelevant = state.completedPicks.find(p => p.overall === 257);
    if (mrIrrelevant) {
        showMrIrrelevant(mrIrrelevant);
    }
    
    // Show summary after delay
    setTimeout(() => {
        showDraftSummary();
    }, 3000);
}

function showMrIrrelevant(pick) {
    const screen = document.getElementById('mrIrrelevantScreen');
    const playerDiv = document.getElementById('mrIrrelevantPlayer');
    
    playerDiv.innerHTML = `
        <h2>${pick.player.name}</h2>
        <p>${pick.player.position} | ${pick.player.school}</p>
    `;
    
    screen.classList.remove('hidden');
    
    setTimeout(() => {
        screen.classList.add('hidden');
    }, 4000);
}

function showDraftSummary() {
    const userPicks = state.completedPicks.filter(p => p.team === state.userTeam);
    const grade = calculateDraftGrade();
    
    // Update summary modal
    document.getElementById('finalGradeLetter').textContent = grade.letter;
    document.getElementById('finalGradeCircle').style.background = `linear-gradient(135deg, ${grade.color}, ${grade.color}aa)`;
    
    document.getElementById('summaryTotalPicks').textContent = userPicks.length;
    
    const valuePicks = userPicks.filter(p => p.player.rank < p.overall).length;
    const reaches = userPicks.filter(p => p.player.rank > p.overall + 20).length;
    
    document.getElementById('summaryValuePicks').textContent = valuePicks;
    document.getElementById('summaryReaches').textContent = reaches;
    document.getElementById('summaryTrades').textContent = state.trades.length;
    
    // Picks by position
    const posCount = {};
    userPicks.forEach(p => {
        posCount[p.player.position] = (posCount[p.player.position] || 0) + 1;
    });
    
    document.getElementById('picksByPosition').innerHTML = Object.entries(posCount)
        .map(([pos, count]) => `
            <span class="position-count">
                <span class="pos">${pos}</span>: <span class="count">${count}</span>
            </span>
        `).join('');
    
    // Detailed picks list
    document.getElementById('summaryPicksList').innerHTML = userPicks.map(pick => {
        const value = pick.player.rank - pick.overall;
        const valueClass = value < 0 ? 'positive' : value > 20 ? 'negative' : 'neutral';
        const valueText = value < 0 ? `+${Math.abs(value)}` : value > 20 ? `-${value}` : 'E';
        
        return `
            <div class="summary-pick-item">
                <span class="pick-number">#${pick.overall}</span>
                <span style="width:30px;height:30px;border-radius:50%;background:${NFL_TEAMS.find(t => t.code === pick.team)?.helmet}"></span>
                <span>${pick.player.name}</span>
                <span>${pick.player.position}</span>
                <span class="pick-value ${valueClass}">${valueText}</span>
            </div>
        `;
    }).join('');
    
    elements.summaryModal.classList.remove('hidden');
}

function showFullDraftBoard() {
    // Could implement a full-screen draft board view
    alert('Full draft board view would open here. All 257 picks displayed in a grid.');
}

function shareResults() {
    const grade = calculateDraftGrade();
    const text = `I just completed the 2026 NFL 7-Round Mock Draft! My grade: ${grade.letter}. Can you beat it?`;
    
    if (navigator.share) {
        navigator.share({ title: 'My 2026 NFL Mock Draft', text: text });
    } else {
        navigator.clipboard.writeText(text);
        alert('Results copied to clipboard!');
    }
}

function exportResults() {
    const userPicks = state.completedPicks.filter(p => p.team === state.userTeam);
    const csv = [
        'Pick,Round,Player,Position,School,Team',
        ...userPicks.map(p => `${p.overall},${p.round},"${p.player.name}",${p.player.position},"${p.player.school}",${p.team}`)
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `2026-nfl-mock-draft-${state.userTeam}.csv`;
    a.click();
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function getOverallPick(round, pickInRound) {
    let overall = 0;
    for (let i = 0; i < round - 1; i++) {
        overall += CONFIG.PICKS_PER_ROUND[i];
    }
    return overall + pickInRound;
}

function getOrdinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function showPickAnnouncement(pickData, player) {
    // Create temporary announcement
    const announcement = document.createElement('div');
    announcement.className = 'pick-announcement';
    announcement.innerHTML = `
        <h3>Pick #${pickData.overall}</h3>
        <div class="team-name">${NFL_TEAMS.find(t => t.code === pickData.team)?.name}</div>
        <div class="player-name">${player.name}</div>
        <div style="color:#8b8b9a;margin-top:0.5rem;">${player.position} | ${player.school}</div>
    `;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 2000);
}

// Make selectPlayer globally available for onclick handlers
window.selectPlayer = selectPlayer;

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

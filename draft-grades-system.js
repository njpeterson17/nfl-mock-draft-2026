// ============================================
// COMPREHENSIVE DRAFT GRADES SYSTEM
// 2026 NFL Mock Draft - AI/Algorithmic Grading
// ============================================

// ============================================
// GRADE SCALE CONFIGURATION
// ============================================
const gradeScale = {
    'A+': { min: 97, max: 100, color: '#00ff88', bgClass: 'grade-a-plus' },
    'A':  { min: 93, max: 96, color: '#00ff88', bgClass: 'grade-a' },
    'A-': { min: 90, max: 92, color: '#00ff88', bgClass: 'grade-a-minus' },
    'B+': { min: 87, max: 89, color: '#00d4ff', bgClass: 'grade-b-plus' },
    'B':  { min: 83, max: 86, color: '#00d4ff', bgClass: 'grade-b' },
    'B-': { min: 80, max: 82, color: '#00d4ff', bgClass: 'grade-b-minus' },
    'C+': { min: 77, max: 79, color: '#ffb800', bgClass: 'grade-c-plus' },
    'C':  { min: 73, max: 76, color: '#ffb800', bgClass: 'grade-c' },
    'C-': { min: 70, max: 72, color: '#ffb800', bgClass: 'grade-c-minus' },
    'D+': { min: 67, max: 69, color: '#ff6b35', bgClass: 'grade-d-plus' },
    'D':  { min: 63, max: 66, color: '#ff6b35', bgClass: 'grade-d' },
    'D-': { min: 60, max: 62, color: '#ff6b35', bgClass: 'grade-d-minus' },
    'F':  { min: 0, max: 59, color: '#ff4757', bgClass: 'grade-f' }
};

// ============================================
// PREMIUM POSITIONS (higher value)
// ============================================
const premiumPositions = ['QB', 'EDGE', 'OT', 'CB'];
const highValuePositions = ['WR', 'DL', 'S', 'LB'];
const standardPositions = ['IOL', 'TE'];
const depressedPositions = ['RB', 'FB'];

// ============================================
// HISTORICAL DRAFT DATA FOR COMPARISON
// ============================================
const historicalDrafts = {
    'Ravens': [
        { year: 2021, grade: 'A-', score: 93, highlight: 'Rashod Bateman' },
        { year: 2022, grade: 'A', score: 95, highlight: 'Kyle Hamilton' },
        { year: 2023, grade: 'A-', score: 92, highlight: 'Zay Flowers' },
        { year: 2024, grade: 'B+', score: 88, highlight: 'Nate Wiggins' }
    ],
    'Cowboys': [
        { year: 2021, grade: 'A', score: 94, highlight: 'Micah Parsons' },
        { year: 2022, grade: 'B+', score: 87, highlight: 'Tyler Smith' },
        { year: 2023, grade: 'A-', score: 91, highlight: 'Mazi Smith' },
        { year: 2024, grade: 'B', score: 85, highlight: 'Tyler Guyton' }
    ],
    'Lions': [
        { year: 2021, grade: 'A', score: 95, highlight: 'Penei Sewell' },
        { year: 2022, grade: 'A+', score: 97, highlight: 'Aidan Hutchinson' },
        { year: 2023, grade: 'A', score: 94, highlight: 'Jahmyr Gibbs' },
        { year: 2024, grade: 'A-', score: 92, highlight: 'Terrion Arnold' }
    ],
    'Eagles': [
        { year: 2021, grade: 'A', score: 94, highlight: 'DeVonta Smith' },
        { year: 2022, grade: 'A+', score: 98, highlight: 'Jordan Davis' },
        { year: 2023, grade: 'A', score: 95, highlight: 'Jalen Carter' },
        { year: 2024, grade: 'A-', score: 91, highlight: 'Quinyon Mitchell' }
    ],
    'Chiefs': [
        { year: 2021, grade: 'B+', score: 88, highlight: 'Nick Bolton' },
        { year: 2022, grade: 'B', score: 84, highlight: 'Trent McDuffie' },
        { year: 2023, grade: 'A-', score: 91, highlight: 'Felix Anudike-Uzomah' },
        { year: 2024, grade: 'B+', score: 87, highlight: 'Xavier Worthy' }
    ],
    '49ers': [
        { year: 2021, grade: 'A-', score: 92, highlight: 'Trey Lance' },
        { year: 2022, grade: 'B+', score: 86, highlight: 'Drake Jackson' },
        { year: 2023, grade: 'A', score: 93, highlight: 'Ji'Ayir Brown' },
        { year: 2024, grade: 'B+', score: 88, highlight: 'Ricky Pearsall' }
    ],
    'Bengals': [
        { year: 2021, grade: 'A+', score: 96, highlight: 'JaMarr Chase' },
        { year: 2022, grade: 'B+', score: 87, highlight: 'Dax Hill' },
        { year: 2023, grade: 'A-', score: 91, highlight: 'Myles Murphy' },
        { year: 2024, grade: 'B', score: 84, highlight: 'Amarius Mims' }
    ],
    'Packers': [
        { year: 2021, grade: 'A', score: 94, highlight: 'Eric Stokes' },
        { year: 2022, grade: 'A+', score: 96, highlight: 'Quay Walker' },
        { year: 2023, grade: 'A-', score: 90, highlight: 'Lukas Van Ness' },
        { year: 2024, grade: 'A', score: 93, highlight: 'Jordan Morgan' }
    ]
};

// Default historical drafts for teams without specific data
const defaultHistoricalDrafts = [
    { year: 2021, grade: 'B', score: 84, highlight: 'Top Prospect' },
    { year: 2022, grade: 'B+', score: 87, highlight: 'Top Prospect' },
    { year: 2023, grade: 'B', score: 85, highlight: 'Top Prospect' },
    { year: 2024, grade: 'B+', score: 86, highlight: 'Top Prospect' }
];

// ============================================
// TEAM NEEDS DATA
// ============================================
const teamNeedsData = {
    'Raiders': { high: ['EDGE', 'WR', 'OL', 'DL'], medium: ['CB', 'LB'], low: ['TE'] },
    'Jets': { high: ['OL', 'RB', 'EDGE'], medium: ['WR', 'CB'], low: ['TE'] },
    'Cardinals': { high: ['DL', 'CB', 'OT'], medium: ['EDGE', 'S'], low: ['RB'] },
    'Titans': { high: ['CB', 'EDGE', 'OL'], medium: ['WR', 'DL'], low: ['TE'] },
    'Giants': { high: ['QB', 'WR', 'EDGE'], medium: ['CB', 'S'], low: ['RB'] },
    'Browns': { high: ['CB', 'WR', 'S'], medium: ['OT', 'DL'], low: ['RB'] },
    'Commanders': { high: ['CB', 'EDGE', 'DL'], medium: ['LB', 'S'], low: ['RB'] },
    'Saints': { high: ['WR', 'OT', 'CB'], medium: ['EDGE', 'DL'], low: ['TE'] },
    'Chiefs': { high: ['EDGE', 'WR', 'CB'], medium: ['DL', 'OT'], low: ['TE'] },
    'Bengals': { high: ['DL', 'OT', 'EDGE'], medium: ['CB', 'LB'], low: ['TE'] },
    'Dolphins': { high: ['IOL', 'EDGE', 'CB'], medium: ['DL', 'LB'], low: ['TE'] },
    'Cowboys': { high: ['CB', 'S', 'DL'], medium: ['WR', 'EDGE'], low: ['RB'] },
    'Rams': { high: ['QB', 'DL', 'EDGE'], medium: ['CB', 'S'], low: ['RB'] },
    'Ravens': { high: ['EDGE', 'CB', 'WR'], medium: ['DL', 'OT'], low: ['TE'] },
    'Buccaneers': { high: ['EDGE', 'S', 'DL'], medium: ['CB', 'WR'], low: ['TE'] },
    'Lions': { high: ['CB', 'S', 'EDGE'], medium: ['WR', 'DL'], low: ['RB'] },
    'Vikings': { high: ['OT', 'WR', 'CB'], medium: ['DL', 'S'], low: ['TE'] },
    'Panthers': { high: ['EDGE', 'WR', 'CB'], medium: ['DL', 'S'], low: ['TE'] },
    'Steelers': { high: ['QB', 'CB', 'DL'], medium: ['EDGE', 'WR'], low: ['RB'] },
    'Chargers': { high: ['OT', 'DL', 'CB'], medium: ['WR', 'EDGE'], low: ['TE'] },
    'Bears': { high: ['EDGE', 'IOL', 'WR'], medium: ['CB', 'S'], low: ['TE'] },
    'Bills': { high: ['WR', 'CB', 'EDGE'], medium: ['DL', 'OT'], low: ['RB'] },
    '49ers': { high: ['CB', 'IOL', 'EDGE'], medium: ['WR', 'DL'], low: ['TE'] },
    'Texans': { high: ['RB', 'OL', 'CB'], medium: ['EDGE', 'S'], low: ['TE'] },
    'Eagles': { high: ['CB', 'IOL', 'EDGE'], medium: ['WR', 'S'], low: ['RB'] },
    'Broncos': { high: ['LB', 'OT', 'S'], medium: ['EDGE', 'DL'], low: ['TE'] },
    'Packers': { high: ['DL', 'CB', 'WR'], medium: ['EDGE', 'S'], low: ['RB'] },
    'Falcons': { high: ['EDGE', 'CB', 'DL'], medium: ['WR', 'S'], low: ['TE'] },
    'Colts': { high: ['WR', 'CB', 'EDGE'], medium: ['DL', 'LB'], low: ['TE'] },
    'Seahawks': { high: ['IOL', 'DL', 'CB'], medium: ['EDGE', 'WR'], low: ['RB'] },
    'Jaguars': { high: ['CB', 'EDGE', 'S'], medium: ['DL', 'WR'], low: ['TE'] },
    'Patriots': { high: ['EDGE', 'CB', 'DL'], medium: ['OT', 'WR'], low: ['TE'] }
};

// ============================================
// BIG BOARD DATA (for value calculations)
// ============================================
const bigBoardData = {
    'Fernando Mendoza': { rank: 1, tier: 'Elite' },
    'Ty Simpson': { rank: 2, tier: 'Elite' },
    'Jeremiyah Love': { rank: 3, tier: 'Elite' },
    'Arvell Reese': { rank: 4, tier: 'Elite' },
    'Rueben Bain Jr.': { rank: 5, tier: 'Elite' },
    'David Bailey': { rank: 6, tier: 'Elite' },
    'Francis Mauigoa': { rank: 7, tier: 'Round 1' },
    'Sonny Styles': { rank: 8, tier: 'Round 1' },
    'Caleb Downs': { rank: 9, tier: 'Elite' },
    'Jordyn Tyson': { rank: 10, tier: 'Round 1' },
    'Makai Lemon': { rank: 11, tier: 'Round 1' },
    'Spencer Fano': { rank: 12, tier: 'Round 1' },
    'Akheem Mesidor': { rank: 13, tier: 'Round 1' },
    'Keldric Faulk': { rank: 14, tier: 'Round 1' },
    'Peter Woods': { rank: 15, tier: 'Round 1' },
    'Jermod McCoy': { rank: 16, tier: 'Round 1' },
    'Olaivavega Ioane': { rank: 17, tier: 'Round 1' },
    'Kayden McDonald': { rank: 18, tier: 'Round 1' },
    'Caleb Lomu': { rank: 20, tier: 'Round 1' },
    'CJ Allen': { rank: 21, tier: 'Round 1' },
    'Zachariah Branch': { rank: 22, tier: 'Round 1' },
    'Denzel Boston': { rank: 23, tier: 'Round 1' },
    'Mansoor Delane': { rank: 24, tier: 'Round 1' },
    'Trinidad Chambliss': { rank: 25, tier: 'Round 1' },
    'Drew Allar': { rank: 26, tier: 'Round 2' },
    'Emmett Johnson': { rank: 27, tier: 'Round 1' },
    'Dillon Thieneman': { rank: 28, tier: 'Round 1' },
    'Kenyon Sadiq': { rank: 29, tier: 'Round 1' },
    'Will Johnson': { rank: 30, tier: 'Round 1' },
    'Luther Burden III': { rank: 31, tier: 'Round 1' },
    'Tacario Davis': { rank: 32, tier: 'Round 1' },
    'Kaleb Johnson': { rank: 33, tier: 'Round 2' },
    'Jack Sawyer': { rank: 34, tier: 'Round 2' },
    'Carson Beck': { rank: 35, tier: 'Round 2' },
    'Malaki Starks': { rank: 36, tier: 'Round 2' },
    'Donovan Jackson': { rank: 37, tier: 'Round 2' },
    'Jayden Higgins': { rank: 38, tier: 'Round 2' },
    'Dani Dennis-Sutton': { rank: 39, tier: 'Round 2' },
    'Maxwell Hairston': { rank: 40, tier: 'Round 2' },
    'Kenneth Grant': { rank: 41, tier: 'Round 2' },
    'Carson Schwesinger': { rank: 42, tier: 'Round 2' },
    'Oluwafemi Oladejo': { rank: 43, tier: 'Round 2' }
};

// ============================================
// EDP DATA (Expected Draft Position)
// ============================================
const edpData = {
    'Fernando Mendoza': { edp: 1.2, variance: 0.8 },
    'Ty Simpson': { edp: 8.5, variance: 4.2 },
    'Francis Mauigoa': { edp: 6.3, variance: 3.1 },
    'Carnell Tate': { edp: 5.8, variance: 2.9 },
    'Peter Woods': { edp: 9.2, variance: 4.5 },
    'Trinidad Chambliss': { edp: 12.4, variance: 5.8 },
    'Rueben Bain Jr.': { edp: 7.1, variance: 3.5 },
    'Jordyn Tyson': { edp: 11.8, variance: 4.9 },
    'David Bailey': { edp: 8.9, variance: 4.1 },
    'Kayden McDonald': { edp: 14.6, variance: 6.2 },
    'Cole Payton': { edp: 15.2, variance: 6.8 },
    'Jermod McCoy': { edp: 13.1, variance: 5.4 },
    'Drew Allar': { edp: 18.3, variance: 7.5 },
    'Akheem Mesidor': { edp: 16.7, variance: 6.9 },
    'Arvell Reese': { edp: 4.2, variance: 2.1 },
    'Makai Lemon': { edp: 10.5, variance: 4.7 },
    'Olaivavega Ioane': { edp: 19.8, variance: 7.2 },
    'Caleb Lomu': { edp: 17.4, variance: 6.1 },
    'Keldric Faulk': { edp: 12.1, variance: 5.2 },
    'Caleb Downs': { edp: 9.6, variance: 4.3 },
    'Carson Beck': { edp: 22.1, variance: 8.4 },
    'Spencer Fano': { edp: 14.2, variance: 5.6 },
    'Mansoor Delane': { edp: 20.5, variance: 7.8 },
    'Sonny Styles': { edp: 15.8, variance: 6.4 },
    'Denzel Boston': { edp: 21.3, variance: 8.1 },
    'CJ Allen': { edp: 24.6, variance: 9.2 },
    'Jeremiyah Love': { edp: 6.7, variance: 3.2 },
    'Dillon Thieneman': { edp: 28.4, variance: 10.5 },
    'Daylen Everette': { edp: 31.2, variance: 11.8 },
    'Luther Burden III': { edp: 26.8, variance: 9.6 },
    'Kaleb Johnson': { edp: 29.5, variance: 10.8 },
    'Tacario Davis': { edp: 32.1, variance: 12.4 },
    'Will Johnson': { edp: 25.3, variance: 9.8 },
    'Jayden Higgins': { edp: 33.5, variance: 11.2 },
    'Malaki Starks': { edp: 30.2, variance: 10.9 },
    'Donovan Jackson': { edp: 36.4, variance: 12.1 },
    'Kenneth Grant': { edp: 38.1, variance: 13.2 },
    'Maxwell Hairston': { edp: 35.7, variance: 12.5 },
    'Carson Schwesinger': { edp: 40.2, variance: 14.1 },
    'Dani Dennis-Sutton': { edp: 34.8, variance: 11.9 },
    'Jack Sawyer': { edp: 39.5, variance: 13.8 },
    'Oluwafemi Oladejo': { edp: 41.3, variance: 14.5 }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get letter grade from numeric score
function getLetterGrade(numericScore) {
    for (const [grade, config] of Object.entries(gradeScale)) {
        if (numericScore >= config.min && numericScore <= config.max) {
            return { letter: grade, ...config };
        }
    }
    return { letter: 'F', color: '#ff4757', bgClass: 'grade-f' };
}

// Normalize position
function normalizePosition(position) {
    const mapping = {
        'Pass rusher': 'EDGE',
        'DE': 'EDGE',
        'Interior DL': 'DL',
        'DT': 'DL',
        'Center': 'IOL',
        'G': 'IOL',
        'OG': 'IOL',
        'ILB': 'LB',
        'OLB': 'LB',
        'FS': 'S',
        'SS': 'S',
        'Defense (not DT)': 'EDGE'
    };
    return mapping[position] || position;
}

// Get team abbreviation
function getTeamAbbreviation(teamName) {
    const mapping = {
        'Las Vegas Raiders': 'LV', 'Raiders': 'LV',
        'New York Jets': 'NYJ', 'Jets': 'NYJ',
        'Arizona Cardinals': 'ARI', 'Cardinals': 'ARI',
        'Tennessee Titans': 'TEN', 'Titans': 'TEN',
        'New York Giants': 'NYG', 'Giants': 'NYG',
        'Cleveland Browns': 'CLE', 'Browns': 'CLE',
        'Washington Commanders': 'WAS', 'Commanders': 'WAS', 'North Dakota State Commanders': 'WAS',
        'New Orleans Saints': 'NO', 'Saints': 'NO',
        'Kansas City Chiefs': 'KC', 'Chiefs': 'KC',
        'Cincinnati Bengals': 'CIN', 'Bengals': 'CIN',
        'Miami Dolphins': 'MIA', 'Dolphins': 'MIA',
        'Dallas Cowboys': 'DAL', 'Cowboys': 'DAL',
        'Los Angeles Rams': 'LAR', 'Rams': 'LAR',
        'Baltimore Ravens': 'BAL', 'Ravens': 'BAL',
        'Tampa Bay Buccaneers': 'TB', 'Buccaneers': 'TB',
        'Detroit Lions': 'DET', 'Lions': 'DET',
        'Minnesota Vikings': 'MIN', 'Vikings': 'MIN',
        'Carolina Panthers': 'CAR', 'Panthers': 'CAR',
        'Pittsburgh Steelers': 'PIT', 'Steelers': 'PIT',
        'Los Angeles Chargers': 'LAC', 'Chargers': 'LAC',
        'Philadelphia Eagles': 'PHI', 'Eagles': 'PHI',
        'Chicago Bears': 'CHI', 'Bears': 'CHI',
        'Buffalo Bills': 'BUF', 'Bills': 'BUF',
        'San Francisco 49ers': 'SF', '49ers': 'SF',
        'Houston Texans': 'HOU', 'Texans': 'HOU',
        'Denver Broncos': 'DEN', 'Broncos': 'DEN',
        'New England Patriots': 'NE', 'Patriots': 'NE',
        'Seattle Seahawks': 'SEA', 'Seahawks': 'SEA',
        'Indianapolis Colts': 'IND', 'Colts': 'IND',
        'Atlanta Falcons': 'ATL', 'Falcons': 'ATL',
        'Green Bay Packers': 'GB', 'Packers': 'GB',
        'Jacksonville Jaguars': 'JAX', 'Jaguars': 'JAX'
    };
    return mapping[teamName] || 'NFL';
}

// Extract short team name
function getShortTeamName(fullName) {
    const mapping = {
        'Las Vegas Raiders': 'Raiders',
        'New York Jets': 'Jets',
        'Arizona Cardinals': 'Cardinals',
        'Tennessee Titans': 'Titans',
        'New York Giants': 'Giants',
        'Cleveland Browns': 'Browns',
        'Washington Commanders': 'Commanders',
        'North Dakota State Commanders': 'Commanders',
        'New Orleans Saints': 'Saints',
        'Kansas City Chiefs': 'Chiefs',
        'Cincinnati Bengals': 'Bengals',
        'Miami Dolphins': 'Dolphins',
        'Dallas Cowboys': 'Cowboys',
        'Los Angeles Rams': 'Rams',
        'Baltimore Ravens': 'Ravens',
        'Tampa Bay Buccaneers': 'Buccaneers',
        'Detroit Lions': 'Lions',
        'Minnesota Vikings': 'Vikings',
        'Carolina Panthers': 'Panthers',
        'Pittsburgh Steelers': 'Steelers',
        'Los Angeles Chargers': 'Chargers',
        'Philadelphia Eagles': 'Eagles',
        'Chicago Bears': 'Bears',
        'Buffalo Bills': 'Bills',
        'San Francisco 49ers': '49ers',
        'Houston Texans': 'Texans',
        'Denver Broncos': 'Broncos',
        'New England Patriots': 'Patriots',
        'Seattle Seahawks': 'Seahawks',
        'Indianapolis Colts': 'Colts',
        'Atlanta Falcons': 'Falcons',
        'Green Bay Packers': 'Packers',
        'Jacksonville Jaguars': 'Jaguars'
    };
    return mapping[fullName] || fullName;
}

// ============================================
// GRADING ALGORITHM
// ============================================

// A. VALUE GRADE (40% weight)
function calculateValueGrade(pickNumber, playerName) {
    const playerData = bigBoardData[playerName];
    const edpInfo = edpData[playerName];
    
    let rankDifference = 0;
    let explanation = '';
    
    if (playerData) {
        // Compare Big Board rank to pick number
        rankDifference = playerData.rank - pickNumber;
    } else if (edpInfo) {
        // Use EDP as fallback
        rankDifference = Math.round(edpInfo.edp - pickNumber);
    } else {
        // Default: assume fair value
        return { grade: 'B', score: 85, explanation: 'Fair value', details: 'No ranking data available' };
    }
    
    // Determine grade based on rank difference
    // Positive difference = player ranked higher than pick (good value)
    // Negative difference = player ranked lower than pick (reach)
    let grade, score, label;
    
    if (rankDifference >= 10) {
        grade = 'A+';
        score = 98;
        label = 'Massive steal';
        explanation = `Ranked #${playerData?.rank || '?'} but selected at #${pickNumber}`;
    } else if (rankDifference >= 5) {
        grade = 'A';
        score = 94;
        label = 'Great value';
        explanation = `Ranked #${playerData?.rank || '?'} - excellent value`;
    } else if (rankDifference >= 2) {
        grade = 'A-';
        score = 91;
        label = 'Good value';
        explanation = `Slight value at pick #${pickNumber}`;
    } else if (rankDifference >= 0) {
        grade = 'B+';
        score = 88;
        label = 'Fair value';
        explanation = 'Drafted close to expected position';
    } else if (rankDifference >= -3) {
        grade = 'B';
        score = 85;
        label = 'Slight reach';
        explanation = 'Minor reach but within acceptable range';
    } else if (rankDifference >= -7) {
        grade = 'C+';
        score = 78;
        label = 'Reach';
        explanation = 'Selected earlier than expected';
    } else {
        grade = 'D';
        score = 68;
        label = 'Major reach';
        explanation = 'Significant reach based on rankings';
    }
    
    return { grade, score, explanation, label, rankDifference, details: explanation };
}

// B. NEED GRADE (30% weight)
function calculateNeedGrade(teamName, position) {
    const shortName = getShortTeamName(teamName);
    const needs = teamNeedsData[shortName];
    const normalizedPos = normalizePosition(position);
    
    if (!needs) {
        return { grade: 'B', score: 85, explanation: 'Need data unavailable', level: 'unknown' };
    }
    
    // Check if position matches any need level
    const checkNeed = (needList) => {
        return needList.some(need => {
            const normalizedNeed = normalizePosition(need);
            return normalizedNeed === normalizedPos ||
                   normalizedPos.includes(normalizedNeed) ||
                   normalizedNeed.includes(normalizedPos);
        });
    };
    
    if (checkNeed(needs.high)) {
        return { grade: 'A', score: 95, explanation: 'Fills critical need', level: 'high' };
    } else if (checkNeed(needs.medium)) {
        return { grade: 'B+', score: 88, explanation: 'Fills moderate need', level: 'medium' };
    } else if (checkNeed(needs.low)) {
        return { grade: 'C+', score: 78, explanation: 'Low priority position', level: 'low' };
    } else {
        return { grade: 'D+', score: 72, explanation: 'Non-need position (stacked)', level: 'none' };
    }
}

// C. FIT GRADE (20% weight)
function calculateFitGrade(position, pickNumber) {
    const normalizedPos = normalizePosition(position);
    
    // Premium positions get bonus
    let score = 85;
    let grade = 'B';
    let explanation = 'Standard positional value';
    
    if (premiumPositions.includes(normalizedPos)) {
        // Premium positions get higher scores, especially in early rounds
        if (pickNumber <= 10) {
            score = 95;
            grade = 'A';
            explanation = `Premium position (${normalizedPos}) in top 10`;
        } else if (pickNumber <= 20) {
            score = 92;
            grade = 'A-';
            explanation = `Premium position (${normalizedPos}) in Round 1`;
        } else {
            score = 88;
            grade = 'B+';
            explanation = `Premium position (${normalizedPos}) value`;
        }
    } else if (highValuePositions.includes(normalizedPos)) {
        score = 87;
        grade = 'B+';
        explanation = `High-value position (${normalizedPos})`;
    } else if (depressedPositions.includes(normalizedPos)) {
        score = 78;
        grade = 'C+';
        explanation = `Depressed positional value (${normalizedPos})`;
    }
    
    return { grade, score, explanation };
}

// D. ROUND APPROPRIATENESS (10% weight)
function calculateRoundGrade(playerName, pickNumber) {
    const playerData = bigBoardData[playerName];
    
    if (!playerData) {
        return { grade: 'B', score: 85, explanation: 'No tier data available' };
    }
    
    const round = Math.ceil(pickNumber / 32);
    let expectedRound;
    
    switch (playerData.tier) {
        case 'Elite':
            expectedRound = 1;
            break;
        case 'Round 1':
            expectedRound = 1;
            break;
        case 'Round 2':
            expectedRound = 2;
            break;
        default:
            expectedRound = 3;
    }
    
    let score, grade, explanation;
    
    if (round === expectedRound) {
        score = 95;
        grade = 'A';
        explanation = 'Perfect round fit';
    } else if (round < expectedRound) {
        // Reached too early
        const diff = expectedRound - round;
        if (diff === 1) {
            score = 85;
            grade = 'B';
            explanation = 'Slightly early but acceptable';
        } else {
            score = 75;
            grade = 'C';
            explanation = 'Selected earlier than expected tier';
        }
    } else {
        // Slid to later round (good value)
        const diff = round - expectedRound;
        if (diff === 1) {
            score = 92;
            grade = 'A-';
            explanation = 'Good value in later round';
        } else {
            score = 88;
            grade = 'B+';
            explanation = 'Available in later round';
        }
    }
    
    return { grade, score, explanation, expectedRound, actualRound: round };
}

// ============================================
// OVERALL GRADE CALCULATIONS
// ============================================

// Calculate individual pick grade
function calculatePickGrade(team, pickNumber, player) {
    const playerName = typeof player === 'string' ? player : player.name;
    const position = typeof player === 'string' ? 'Unknown' : (player.position || 'Unknown');
    
    // Calculate component grades
    const valueGrade = calculateValueGrade(pickNumber, playerName);
    const needGrade = calculateNeedGrade(team, position);
    const fitGrade = calculateFitGrade(position, pickNumber);
    const roundGrade = calculateRoundGrade(playerName, pickNumber);
    
    // Weighted average: 40% Value, 30% Need, 20% Fit, 10% Round
    const weightedScore = (
        valueGrade.score * 0.40 +
        needGrade.score * 0.30 +
        fitGrade.score * 0.20 +
        roundGrade.score * 0.10
    );
    
    const overallGrade = getLetterGrade(weightedScore);
    
    // Generate verdict text
    let verdict = '';
    if (weightedScore >= 93) {
        verdict = 'Outstanding pick! Elite value and need fit.';
    } else if (weightedScore >= 87) {
        verdict = valueGrade.score >= 90 ? 'Great value pick that fills a need!' : 'Solid pick addressing team needs.';
    } else if (weightedScore >= 80) {
        verdict = 'Good selection with reasonable value.';
    } else if (weightedScore >= 73) {
        verdict = 'Adequate pick, but room for improvement.';
    } else {
        verdict = 'Questionable value or fit for this selection.';
    }
    
    return {
        letter: overallGrade.letter,
        score: Math.round(weightedScore),
        color: overallGrade.color,
        bgClass: overallGrade.bgClass,
        breakdown: {
            value: valueGrade,
            need: needGrade,
            fit: fitGrade,
            round: roundGrade
        },
        verdict: verdict
    };
}

// Calculate overall draft grade for a team
function calculateOverallDraftGrade(picks) {
    if (!picks || picks.length === 0) {
        return {
            letter: 'N/A',
            score: 0,
            average: 0,
            bestPick: null,
            worstPick: null,
            breakdown: null
        };
    }
    
    // Calculate grades for each pick
    const gradedPicks = picks.map(pick => {
        const grade = calculatePickGrade(pick.team, pick.pickNumber, pick);
        return { ...pick, ...grade };
    });
    
    // Calculate weighted average (earlier picks count more)
    let totalWeight = 0;
    let weightedSum = 0;
    
    gradedPicks.forEach(pick => {
        const weight = Math.max(1, 100 - pick.pickNumber); // Earlier picks weighted higher
        totalWeight += weight;
        weightedSum += pick.score * weight;
    });
    
    const averageScore = Math.round(weightedSum / totalWeight);
    const overallGrade = getLetterGrade(averageScore);
    
    // Find best and worst picks
    const sortedByScore = [...gradedPicks].sort((a, b) => b.score - a.score);
    const bestPick = sortedByScore[0];
    const worstPick = sortedByScore[sortedByScore.length - 1];
    
    // Calculate position breakdown
    const positionCounts = {};
    gradedPicks.forEach(pick => {
        const pos = normalizePosition(pick.position);
        positionCounts[pos] = (positionCounts[pos] || 0) + 1;
    });
    
    // Generate summary text
    let summary = '';
    const valuePicks = gradedPicks.filter(p => p.breakdown.value.score >= 90).length;
    const reachPicks = gradedPicks.filter(p => p.breakdown.value.score < 80).length;
    
    if (averageScore >= 90) {
        summary = `Excellent draft! ${valuePicks > 1 ? valuePicks + ' outstanding value picks' : 'Strong value throughout'}.`;
    } else if (averageScore >= 83) {
        summary = valuePicks > 0 
            ? `Solid draft with good value in key spots.` 
            : `Reliable draft addressing team needs.`;
    } else if (averageScore >= 76) {
        summary = reachPicks > 0 
            ? `Adequate draft, but some reaches.` 
            : `Decent draft with room for improvement.`;
    } else {
        summary = `Below average draft with questionable decisions.`;
    }
    
    return {
        letter: overallGrade.letter,
        score: averageScore,
        color: overallGrade.color,
        bgClass: overallGrade.bgClass,
        average: averageScore,
        bestPick: bestPick,
        worstPick: worstPick,
        positionBreakdown: positionCounts,
        summary: summary,
        picks: gradedPicks,
        valuePicks: valuePicks,
        reachPicks: reachPicks
    };
}

// ============================================
// HISTORICAL COMPARISON
// ============================================

function getHistoricalComparison(teamName, currentScore) {
    const shortName = getShortTeamName(teamName);
    const history = historicalDrafts[shortName] || defaultHistoricalDrafts;
    
    // Find most similar historical draft
    let closest = history[0];
    let minDiff = Math.abs(currentScore - closest.score);
    
    history.forEach(draft => {
        const diff = Math.abs(currentScore - draft.score);
        if (diff < minDiff) {
            minDiff = diff;
            closest = draft;
        }
    });
    
    return {
        current: { score: currentScore, grade: getLetterGrade(currentScore).letter },
        similar: closest,
        history: history
    };
}

// ============================================
// GRADE DISPLAY RENDERERS
// ============================================

// Render individual pick grade badge
function renderPickGrade(grade, size = 'normal') {
    const sizeClass = size === 'large' ? 'grade-badge-large' : '';
    return `
        <div class="grade-badge ${grade.bgClass} ${sizeClass}" data-score="${grade.score}">
            <span class="grade-letter">${grade.letter}</span>
            <span class="grade-score">${grade.score}</span>
        </div>
    `;
}

// Render overall grade with circular progress
function renderOverallGrade(grade, animate = true) {
    const circumference = 2 * Math.PI * 45; // radius = 45
    const offset = circumference - (grade.score / 100) * circumference;
    const animationClass = animate ? 'animate-grade' : '';
    
    return `
        <div class="overall-grade-container ${animationClass}">
            <div class="grade-circle">
                <svg class="grade-progress-ring" width="120" height="120">
                    <circle class="grade-progress-ring-bg" cx="60" cy="60" r="45"></circle>
                    <circle class="grade-progress-ring-progress ${grade.bgClass}" 
                            cx="60" cy="60" r="45"
                            stroke-dasharray="${circumference}"
                            stroke-dashoffset="${offset}"></circle>
                </svg>
                <div class="grade-content">
                    <span class="grade-letter-large">${grade.letter}</span>
                    <span class="grade-score-small">${grade.score}</span>
                </div>
            </div>
            <div class="grade-summary">${grade.summary}</div>
        </div>
    `;
}

// Render grade breakdown modal content
function renderGradeBreakdownModal(pick) {
    const grade = calculatePickGrade(pick.team, pick.pickNumber, pick);
    
    return `
        <div class="grade-breakdown-modal">
            <div class="grade-modal-header">
                <div class="grade-modal-title">
                    <span class="pick-label">Pick #${pick.pickNumber}</span>
                    <h3>${pick.player} <span class="position-tag">${pick.position}</span></h3>
                    <span class="team-name">${pick.team}</span>
                </div>
                <div class="grade-modal-badge ${grade.bgClass}">
                    <span class="grade-letter">${grade.letter}</span>
                </div>
            </div>
            
            <div class="grade-components">
                <div class="grade-component">
                    <div class="component-header">
                        <span class="component-name">Value</span>
                        <span class="component-grade ${grade.breakdown.value.grade.startsWith('A') ? 'grade-a' : grade.breakdown.value.grade.startsWith('B') ? 'grade-b' : 'grade-c'}">${grade.breakdown.value.grade}</span>
                    </div>
                    <div class="component-bar">
                        <div class="component-fill" style="width: ${grade.breakdown.value.score}%"></div>
                    </div>
                    <div class="component-details">${grade.breakdown.value.explanation}</div>
                </div>
                
                <div class="grade-component">
                    <div class="component-header">
                        <span class="component-name">Need</span>
                        <span class="component-grade ${grade.breakdown.need.grade.startsWith('A') ? 'grade-a' : grade.breakdown.need.grade.startsWith('B') ? 'grade-b' : 'grade-c'}">${grade.breakdown.need.grade}</span>
                    </div>
                    <div class="component-bar">
                        <div class="component-fill" style="width: ${grade.breakdown.need.score}%"></div>
                    </div>
                    <div class="component-details">${grade.breakdown.need.explanation}</div>
                </div>
                
                <div class="grade-component">
                    <div class="component-header">
                        <span class="component-name">Fit</span>
                        <span class="component-grade ${grade.breakdown.fit.grade.startsWith('A') ? 'grade-a' : grade.breakdown.fit.grade.startsWith('B') ? 'grade-b' : 'grade-c'}">${grade.breakdown.fit.grade}</span>
                    </div>
                    <div class="component-bar">
                        <div class="component-fill" style="width: ${grade.breakdown.fit.score}%"></div>
                    </div>
                    <div class="component-details">${grade.breakdown.fit.explanation}</div>
                </div>
                
                <div class="grade-component">
                    <div class="component-header">
                        <span class="component-name">Round</span>
                        <span class="component-grade ${grade.breakdown.round.grade.startsWith('A') ? 'grade-a' : grade.breakdown.round.grade.startsWith('B') ? 'grade-b' : 'grade-c'}">${grade.breakdown.round.grade}</span>
                    </div>
                    <div class="component-bar">
                        <div class="component-fill" style="width: ${grade.breakdown.round.score}%"></div>
                    </div>
                    <div class="component-details">${grade.breakdown.round.explanation}</div>
                </div>
            </div>
            
            <div class="grade-verdict">
                <div class="verdict-score">Overall: ${grade.score}/100</div>
                <div class="verdict-text">${grade.verdict}</div>
            </div>
            
            <div class="grade-weights-info">
                <small>Weights: Value (40%) + Need (30%) + Fit (20%) + Round (10%)</small>
            </div>
        </div>
    `;
}

// ============================================
// UI INITIALIZATION
// ============================================

// Initialize grades on pick cards
function initPickGrades() {
    const pickCards = document.querySelectorAll('.pick-card');
    
    pickCards.forEach(card => {
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const playerName = card.dataset.player;
        const position = card.dataset.position;
        
        if (pickNumber && teamName && playerName) {
            const grade = calculatePickGrade(teamName, pickNumber, { name: playerName, position });
            
            // Add grade badge to pick card
            const playerInfo = card.querySelector('.player-info');
            if (playerInfo && !playerInfo.querySelector('.pick-grade-badge')) {
                const gradeBadge = document.createElement('div');
                gradeBadge.className = `pick-grade-badge ${grade.bgClass}`;
                gradeBadge.innerHTML = `
                    <span class="grade-letter">${grade.letter}</span>
                    <span class="grade-tooltip">Pick Grade: ${grade.score}/100</span>
                `;
                gradeBadge.onclick = (e) => {
                    e.stopPropagation();
                    openGradeModal({ pickNumber, team: teamName, player: playerName, position });
                };
                playerInfo.appendChild(gradeBadge);
            }
        }
    });
}

// Open grade breakdown modal
function openGradeModal(pick) {
    const modal = document.getElementById('gradeModal');
    const modalContent = document.getElementById('gradeModalContent');
    
    if (modal && modalContent) {
        modalContent.innerHTML = renderGradeBreakdownModal(pick);
        modal.classList.add('active');
        
        // Trigger confetti for A+ grades
        const grade = calculatePickGrade(pick.team, pick.pickNumber, pick);
        if (grade.letter === 'A+') {
            triggerConfetti();
        }
    }
}

// Close grade modal
function closeGradeModal() {
    const modal = document.getElementById('gradeModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Trigger confetti effect for A+ grades
function triggerConfetti() {
    const colors = ['#00ff88', '#00d4ff', '#ffd700', '#ff6b35'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

// Export grades summary
function exportGradesSummary() {
    const picks = extractPicksFromDOM();
    const teamGrades = {};
    
    picks.forEach(pick => {
        if (!teamGrades[pick.team]) {
            teamGrades[pick.team] = [];
        }
        teamGrades[pick.team].push(pick);
    });
    
    let summary = '2026 NFL MOCK DRAFT GRADES\n';
    summary += '=' .repeat(50) + '\n\n';
    
    Object.entries(teamGrades).forEach(([team, teamPicks]) => {
        const overall = calculateOverallDraftGrade(teamPicks);
        summary += `${team}: ${overall.letter} (${overall.score})\n`;
        teamPicks.forEach(pick => {
            const grade = calculatePickGrade(team, pick.pickNumber, pick);
            summary += `  #${pick.pickNumber} - ${pick.player} (${pick.position}): ${grade.letter}\n`;
        });
        summary += '\n';
    });
    
    return summary;
}

// Extract picks from DOM
function extractPicksFromDOM() {
    const picks = [];
    document.querySelectorAll('.pick-card').forEach(card => {
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const playerName = card.dataset.player;
        const position = card.dataset.position;
        
        if (pickNumber && teamName && playerName) {
            picks.push({ pickNumber, team: teamName, player: playerName, position });
        }
    });
    return picks;
}

// Initialize Draft Grades System
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load
    setTimeout(() => {
        initPickGrades();
        
        // Close modal on overlay click
        const modal = document.getElementById('gradeModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeGradeModal();
            });
        }
    }, 1000);
});

// Export for use in other scripts
window.DraftGradesSystem = {
    calculatePickGrade,
    calculateOverallDraftGrade,
    getLetterGrade,
    getHistoricalComparison,
    renderPickGrade,
    renderOverallGrade,
    renderGradeBreakdownModal,
    openGradeModal,
    closeGradeModal,
    exportGradesSummary
};

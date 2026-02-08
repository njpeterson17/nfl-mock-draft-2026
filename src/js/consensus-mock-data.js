// ========================================
// CONSENSUS MOCK DRAFT DATA
// Aggregated from top NFL draft sources
// ========================================

const ConsensusMockData = {
    // Source definitions with weights (PFF weighted higher as requested)
    sources: {
        pff: { 
            name: 'PFF', 
            weight: 0.35, 
            author: 'Trevor Sikkema',
            color: '#00d4ff',
            description: 'Pro Football Focus - Advanced analytics and film study'
        },
        espn: { 
            name: 'ESPN', 
            weight: 0.25, 
            author: 'Mel Kiper Jr.',
            color: '#e31837',
            description: 'ESPN - Longstanding draft authority'
        },
        pfn: { 
            name: 'PFN', 
            weight: 0.20, 
            author: 'PFN Staff',
            color: '#1e3a8a',
            description: 'Pro Football Network - Comprehensive draft coverage'
        },
        tdn: { 
            name: 'TDN', 
            weight: 0.15, 
            author: 'Justin Melo',
            color: '#10b981',
            description: 'The Draft Network - Detailed prospect analysis'
        },
        walter: { 
            name: 'WalterFootball', 
            weight: 0.05, 
            author: 'Charlie Campbell',
            color: '#f59e0b',
            description: 'WalterFootball - Veteran draft analyst'
        }
    },

    // Team data for picks
    teams: {
        1: { name: 'Las Vegas Raiders', code: 'LV', record: '3-14', needs: ['QB', 'IOL', 'WR', 'LB'] },
        2: { name: 'New York Jets', code: 'NYJ', record: '3-14', needs: ['QB', 'EDGE', 'OT', 'CB'] },
        3: { name: 'Arizona Cardinals', code: 'ARI', record: '3-14', needs: ['OT', 'S', 'IOL', 'WR', 'EDGE'] },
        4: { name: 'Tennessee Titans', code: 'TEN', record: '3-14', needs: ['CB', 'EDGE', 'WR', 'TE'] },
        5: { name: 'New York Giants', code: 'NYG', record: '4-13', needs: ['CB', 'OT', 'WR', 'IOL'] },
        6: { name: 'Cleveland Browns', code: 'CLE', record: '5-12', needs: ['QB', 'CB', 'WR', 'S', 'IOL'] },
        7: { name: 'Washington Commanders', code: 'WAS', record: '5-12', needs: ['EDGE', 'CB', 'S', 'WR'] },
        8: { name: 'New Orleans Saints', code: 'NO', record: '6-11', needs: ['WR', 'IOL', 'EDGE', 'LB'] },
        9: { name: 'Kansas City Chiefs', code: 'KC', record: '6-11', needs: ['WR', 'DL', 'RB', 'TE'] },
        10: { name: 'Cincinnati Bengals', code: 'CIN', record: '6-11', needs: ['EDGE', 'S', 'DL', 'LB'] },
        11: { name: 'Miami Dolphins', code: 'MIA', record: '7-10', needs: ['CB', 'EDGE', 'QB', 'IOL'] },
        12: { name: 'Dallas Cowboys', code: 'DAL', record: '7-9-1', needs: ['CB', 'S', 'EDGE', 'LB'] },
        13: { name: 'Los Angeles Rams', code: 'LAR', record: '8-9', needs: ['CB', 'OT', 'WR', 'QB'] },
        14: { name: 'Tampa Bay Buccaneers', code: 'TB', record: '8-9', needs: ['RB', 'CB', 'EDGE', 'IOL'] },
        15: { name: 'Indianapolis Colts', code: 'IND', record: '9-8', needs: ['EDGE', 'QB', 'IOL', 'LB'] },
        16: { name: 'Atlanta Falcons', code: 'ATL', record: '9-8', needs: ['EDGE', 'CB', 'TE', 'DL'] },
        17: { name: 'Chicago Bears', code: 'CHI', record: '8-9', needs: ['DL', 'EDGE', 'S', 'OT'] },
        18: { name: 'Minnesota Vikings', code: 'MIN', record: '9-8', needs: ['CB', 'S', 'IOL', 'RB'] },
        19: { name: 'Carolina Panthers', code: 'CAR', record: '8-9', needs: ['LB', 'EDGE', 'TE', 'IOL'] },
        20: { name: 'Kansas City Chiefs', code: 'KC', record: '11-6', needs: ['WR', 'DL', 'RB', 'TE'] },
        21: { name: 'Arizona Cardinals', code: 'ARI', record: '11-6', needs: ['OT', 'S', 'IOL', 'WR'] },
        22: { name: 'Seattle Seahawks', code: 'SEA', record: '12-5', needs: ['IOL', 'CB', 'EDGE', 'RB'] },
        23: { name: 'Buffalo Bills', code: 'BUF', record: '12-5', needs: ['WR', 'CB', 'EDGE', 'LB'] },
        24: { name: 'Houston Texans', code: 'HOU', record: '12-5', needs: ['IOL', 'RB', 'S', 'DL'] },
        25: { name: 'Dallas Cowboys', code: 'DAL', record: '12-5', needs: ['CB', 'S', 'EDGE', 'LB'] },
        26: { name: 'Philadelphia Eagles', code: 'PHI', record: '13-4', needs: ['TE', 'EDGE', 'WR', 'S'] },
        27: { name: 'Cincinnati Bengals', code: 'CIN', record: '13-4', needs: ['EDGE', 'S', 'DL', 'LB'] },
        28: { name: 'Las Vegas Raiders', code: 'LV', record: '3-14', needs: ['QB', 'IOL', 'WR', 'LB'] },
        29: { name: 'Pittsburgh Steelers', code: 'PIT', record: '13-4', needs: ['QB', 'WR', 'CB', 'IOL'] },
        30: { name: 'Denver Broncos', code: 'DEN', record: '14-3', needs: ['WR', 'LB', 'IOL', 'RB'] },
        31: { name: 'Los Angeles Rams', code: 'LAR', record: '14-3', needs: ['CB', 'OT', 'WR', 'QB'] },
        32: { name: 'Detroit Lions', code: 'DET', record: '15-2', needs: ['IOL', 'OT', 'EDGE', 'S'] }
    },

    // Player data with positions and schools
    players: {
        'Fernando Mendoza': { position: 'QB', school: 'Indiana', rank: 1 },
        'Jeremiyah Love': { position: 'RB', school: 'Notre Dame', rank: 2 },
        'Carnell Tate': { position: 'WR', school: 'Ohio State', rank: 3 },
        'Arvell Reese': { position: 'LB', school: 'Ohio State', rank: 4 },
        'David Bailey': { position: 'EDGE', school: 'Texas Tech', rank: 5 },
        'Francis Mauigoa': { position: 'OT', school: 'Miami', rank: 6 },
        'Caleb Downs': { position: 'S', school: 'Ohio State', rank: 7 },
        'Rueben Bain Jr.': { position: 'EDGE', school: 'Miami', rank: 8 },
        'Peter Woods': { position: 'DL', school: 'Clemson', rank: 9 },
        'Jordyn Tyson': { position: 'WR', school: 'Arizona State', rank: 10 },
        'Kayden McDonald': { position: 'DL', school: 'Ohio State', rank: 11 },
        'Jermod McCoy': { position: 'CB', school: 'Tennessee', rank: 12 },
        'Ty Simpson': { position: 'QB', school: 'Alabama', rank: 13 },
        'Sonny Styles': { position: 'LB', school: 'Ohio State', rank: 14 },
        'Cole Payton': { position: 'QB', school: 'North Dakota State', rank: 15 },
        'Akheem Mesidor': { position: 'EDGE', school: 'Miami', rank: 16 },
        'Keldric Faulk': { position: 'EDGE', school: 'Auburn', rank: 17 },
        'Caleb Lomu': { position: 'OT', school: 'Utah', rank: 18 },
        'Spencer Fano': { position: 'OT', school: 'Utah', rank: 19 },
        'Olaivavega Ioane': { position: 'IOL', school: 'Penn State', rank: 20 },
        'Mansoor Delane': { position: 'CB', school: 'Virginia Tech', rank: 21 },
        'Makai Lemon': { position: 'WR', school: 'USC', rank: 22 },
        'Denzel Boston': { position: 'WR', school: 'Washington', rank: 23 },
        'Drew Allar': { position: 'QB', school: 'Penn State', rank: 24 },
        'CJ Allen': { position: 'LB', school: 'Georgia', rank: 25 },
        'Dillon Thieneman': { position: 'S', school: 'Oregon', rank: 26 },
        'Malaki Starks': { position: 'S', school: 'Georgia', rank: 27 },
        'Trinidad Chambliss': { position: 'QB', school: 'Ole Miss', rank: 28 },
        'Carson Beck': { position: 'QB', school: 'Miami', rank: 29 },
        'Tacario Davis': { position: 'CB', school: 'Arizona', rank: 30 },
        'Luther Burden III': { position: 'WR', school: 'Missouri', rank: 31 },
        'Kaleb Johnson': { position: 'RB', school: 'Iowa', rank: 32 }
    },

    // Consensus picks with source predictions
    // February 2026 rankings (corrected - Ty Simpson NOT at #2)
    picks: {
        1: {
            team: 'Raiders',
            consensus: {
                player: 'Fernando Mendoza',
                position: 'QB',
                school: 'Indiana',
                confidence: 0.95,
                agreement: 5,
                sources: {
                    pff: { player: 'Fernando Mendoza', confidence: 0.95, note: 'Elite accuracy, franchise QB material' },
                    espn: { player: 'Fernando Mendoza', confidence: 1.00, note: 'Clear #1 overall' },
                    pfn: { player: 'Fernando Mendoza', confidence: 0.90, note: 'Best QB in class' },
                    tdn: { player: 'Fernando Mendoza', confidence: 0.95, note: 'No-brainer for Raiders' },
                    walter: { player: 'Fernando Mendoza', confidence: 0.95, note: 'Day 1 starter' }
                }
            },
            votes: { up: 2451, down: 368 },
            history: [
                { date: '2026-01-15', player: 'Fernando Mendoza', confidence: 0.85 },
                { date: '2026-02-01', player: 'Fernando Mendoza', confidence: 0.92 },
                { date: '2026-02-05', player: 'Fernando Mendoza', confidence: 0.95 }
            ]
        },
        2: {
            team: 'Jets',
            consensus: {
                player: 'Jeremiyah Love',
                position: 'RB',
                school: 'Notre Dame',
                confidence: 0.75,
                agreement: 4,
                sources: {
                    pff: { player: 'Jeremiyah Love', confidence: 0.80, note: 'Reggie Bush-like dynamo' },
                    espn: { player: 'Jeremiyah Love', confidence: 0.85, note: 'Explosive playmaker' },
                    pfn: { player: 'Arvell Reese', confidence: 0.60, note: 'Elite LB prospect' }, // Different!
                    tdn: { player: 'Jeremiyah Love', confidence: 0.75, note: 'Best RB in class' },
                    walter: { player: 'Jeremiyah Love', confidence: 0.85, note: 'Game-changer' }
                }
            },
            votes: { up: 1892, down: 736 },
            history: [
                { date: '2026-01-15', player: 'Ty Simpson', confidence: 0.60 },
                { date: '2026-02-01', player: 'Jeremiyah Love', confidence: 0.70 },
                { date: '2026-02-05', player: 'Jeremiyah Love', confidence: 0.75 }
            ],
            dissent: 'PFN has Arvell Reese (LB) at #2'
        },
        3: {
            team: 'Cardinals',
            consensus: {
                player: 'Francis Mauigoa',
                position: 'OT',
                school: 'Miami',
                confidence: 0.90,
                agreement: 5,
                sources: {
                    pff: { player: 'Francis Mauigoa', confidence: 0.90, note: 'True mauler at OT' },
                    espn: { player: 'Francis Mauigoa', confidence: 0.95, note: 'Protect Kyler Murray' },
                    pfn: { player: 'Francis Mauigoa', confidence: 0.85, note: 'Elite run blocker' },
                    tdn: { player: 'Francis Mauigoa', confidence: 0.90, note: 'Day 1 starter' },
                    walter: { player: 'Francis Mauigoa', confidence: 0.90, note: 'Top OL prospect' }
                }
            },
            votes: { up: 1567, down: 423 },
            history: [
                { date: '2026-01-15', player: 'Francis Mauigoa', confidence: 0.85 },
                { date: '2026-02-05', player: 'Francis Mauigoa', confidence: 0.90 }
            ]
        },
        4: {
            team: 'Titans',
            consensus: {
                player: 'Carnell Tate',
                position: 'WR',
                school: 'Ohio State',
                confidence: 0.85,
                agreement: 4,
                sources: {
                    pff: { player: 'Carnell Tate', confidence: 0.90, note: 'Precise route runner' },
                    espn: { player: 'Carnell Tate', confidence: 0.85, note: 'Kiper\'s #3 prospect' },
                    pfn: { player: 'Carnell Tate', confidence: 0.80, note: 'WR1 for Cam Ward' },
                    tdn: { player: 'Jordyn Tyson', confidence: 0.65, note: 'Big play threat' }, // Different!
                    walter: { player: 'Carnell Tate', confidence: 0.90, note: 'Complete WR' }
                }
            },
            votes: { up: 1345, down: 512 },
            history: [
                { date: '2026-01-15', player: 'Carnell Tate', confidence: 0.75 },
                { date: '2026-02-05', player: 'Carnell Tate', confidence: 0.85 }
            ],
            dissent: 'TDN prefers Jordyn Tyson here'
        },
        5: {
            team: 'Giants',
            consensus: {
                player: 'Peter Woods',
                position: 'DL',
                school: 'Clemson',
                confidence: 0.70,
                agreement: 3,
                sources: {
                    pff: { player: 'Peter Woods', confidence: 0.75, note: 'Day 1 starter at 3-tech' },
                    espn: { player: 'Rueben Bain Jr.', confidence: 0.60, note: 'Need edge rusher' }, // Different!
                    pfn: { player: 'Peter Woods', confidence: 0.70, note: 'Gap penetration' },
                    tdn: { player: 'Arvell Reese', confidence: 0.55, note: 'Versatile defender' }, // Different!
                    walter: { player: 'Peter Woods', confidence: 0.75, note: 'Interior presence' }
                }
            },
            votes: { up: 892, down: 745 },
            history: [
                { date: '2026-01-15', player: 'Rueben Bain Jr.', confidence: 0.65 },
                { date: '2026-02-05', player: 'Peter Woods', confidence: 0.70 }
            ],
            dissent: 'Split: ESPN has Bain, TDN has Reese'
        },
        6: {
            team: 'Browns',
            consensus: {
                player: 'Arvell Reese',
                position: 'LB',
                school: 'Ohio State',
                confidence: 0.80,
                agreement: 4,
                sources: {
                    pff: { player: 'Arvell Reese', confidence: 0.85, note: 'Elite athlete' },
                    espn: { player: 'Caleb Downs', confidence: 0.60, note: 'Ball-hawking safety' }, // Different!
                    pfn: { player: 'Arvell Reese', confidence: 0.80, note: 'Complete LB' },
                    tdn: { player: 'Arvell Reese', confidence: 0.75, note: 'Rush ability' },
                    walter: { player: 'Arvell Reese', confidence: 0.80, note: 'Micah Parsons-like' }
                }
            },
            votes: { up: 1023, down: 567 },
            history: [
                { date: '2026-02-05', player: 'Arvell Reese', confidence: 0.80 }
            ],
            dissent: 'ESPN has Caleb Downs (S) here'
        },
        7: {
            team: 'Commanders',
            consensus: {
                player: 'Rueben Bain Jr.',
                position: 'EDGE',
                school: 'Miami',
                confidence: 0.88,
                agreement: 5,
                sources: {
                    pff: { player: 'Rueben Bain Jr.', confidence: 0.90, note: 'Relentless edge rusher' },
                    espn: { player: 'Rueben Bain Jr.', confidence: 0.85, note: '11.5 sacks at Miami' },
                    pfn: { player: 'Rueben Bain Jr.', confidence: 0.85, note: 'Violent hands' },
                    tdn: { player: 'Rueben Bain Jr.', confidence: 0.90, note: 'Need speed off edge' },
                    walter: { player: 'Rueben Bain Jr.', confidence: 0.90, note: 'Perfect fit' }
                }
            },
            votes: { up: 1654, down: 234 },
            history: [
                { date: '2026-02-05', player: 'Rueben Bain Jr.', confidence: 0.88 }
            ]
        },
        8: {
            team: 'Saints',
            consensus: {
                player: 'Jordyn Tyson',
                position: 'WR',
                school: 'Arizona State',
                confidence: 0.82,
                agreement: 4,
                sources: {
                    pff: { player: 'Jordyn Tyson', confidence: 0.85, note: '50/50 ball winner' },
                    espn: { player: 'Jordyn Tyson', confidence: 0.80, note: 'WR1 for Shough' },
                    pfn: { player: 'Makai Lemon', confidence: 0.65, note: 'Slot weapon' }, // Different!
                    tdn: { player: 'Jordyn Tyson', confidence: 0.85, note: 'Red zone threat' },
                    walter: { player: 'Jordyn Tyson', confidence: 0.80, note: 'Big target' }
                }
            },
            votes: { up: 1134, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Jordyn Tyson', confidence: 0.82 }
            ],
            dissent: 'PFN prefers Makai Lemon'
        },
        9: {
            team: 'Chiefs',
            consensus: {
                player: 'David Bailey',
                position: 'EDGE',
                school: 'Texas Tech',
                confidence: 0.92,
                agreement: 5,
                sources: {
                    pff: { player: 'David Bailey', confidence: 0.95, note: 'Elite speed rusher' },
                    espn: { player: 'David Bailey', confidence: 0.90, note: '4.60 speed' },
                    pfn: { player: 'David Bailey', confidence: 0.90, note: 'Get-off specialist' },
                    tdn: { player: 'David Bailey', confidence: 0.95, note: 'Pair with Chris Jones' },
                    walter: { player: 'David Bailey', confidence: 0.90, note: 'Explosive first step' }
                }
            },
            votes: { up: 1834, down: 312 },
            history: [
                { date: '2026-01-20', player: 'David Bailey', confidence: 0.85 },
                { date: '2026-02-05', player: 'David Bailey', confidence: 0.92 }
            ]
        },
        10: {
            team: 'Bengals',
            consensus: {
                player: 'Kayden McDonald',
                position: 'DL',
                school: 'Ohio State',
                confidence: 0.78,
                agreement: 4,
                sources: {
                    pff: { player: 'Kayden McDonald', confidence: 0.80, note: '326-lb anchor' },
                    espn: { player: 'Kayden McDonald', confidence: 0.75, note: 'Gap-eater' },
                    pfn: { player: 'Kayden McDonald', confidence: 0.80, note: 'Run defense' },
                    tdn: { player: 'Sonny Styles', confidence: 0.60, note: 'Versatile LB' }, // Different!
                    walter: { player: 'Kayden McDonald', confidence: 0.75, note: 'Interior force' }
                }
            },
            votes: { up: 967, down: 523 },
            history: [
                { date: '2026-02-05', player: 'Kayden McDonald', confidence: 0.78 }
            ],
            dissent: 'TDN has Sonny Styles'
        },
        11: {
            team: 'Dolphins',
            consensus: {
                player: 'Cole Payton',
                position: 'QB',
                school: 'North Dakota State',
                confidence: 0.65,
                agreement: 3,
                sources: {
                    pff: { player: 'Cole Payton', confidence: 0.70, note: 'FCS standout' },
                    espn: { player: 'Drew Allar', confidence: 0.60, note: 'Big arm' }, // Different!
                    pfn: { player: 'Cole Payton', confidence: 0.65, note: 'Athletic QB' },
                    tdn: { player: 'Ty Simpson', confidence: 0.55, note: 'Bama QB' }, // Different!
                    walter: { player: 'Cole Payton', confidence: 0.65, note: 'Developmental' }
                }
            },
            votes: { up: 723, down: 892 },
            history: [
                { date: '2026-02-05', player: 'Cole Payton', confidence: 0.65 }
            ],
            dissent: 'Split: ESPN has Allar, TDN has Simpson'
        },
        12: {
            team: 'Cowboys',
            consensus: {
                player: 'Jermod McCoy',
                position: 'CB',
                school: 'Tennessee',
                confidence: 0.85,
                agreement: 4,
                sources: {
                    pff: { player: 'Jermod McCoy', confidence: 0.90, note: 'Lockdown corner' },
                    espn: { player: 'Jermod McCoy', confidence: 0.85, note: '4.40 speed' },
                    pfn: { player: 'Jermod McCoy', confidence: 0.80, note: 'Press-man ability' },
                    tdn: { player: 'Mansoor Delane', confidence: 0.65, note: 'Ball skills' }, // Different!
                    walter: { player: 'Jermod McCoy', confidence: 0.85, note: 'Dallas need' }
                }
            },
            votes: { up: 1234, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Jermod McCoy', confidence: 0.85 }
            ],
            dissent: 'TDN prefers Mansoor Delane'
        },
        13: {
            team: 'Ravens',
            consensus: {
                player: 'Akheem Mesidor',
                position: 'EDGE',
                school: 'Miami',
                confidence: 0.80,
                agreement: 4,
                sources: {
                    pff: { player: 'Akheem Mesidor', confidence: 0.85, note: 'Power rusher' },
                    espn: { player: 'Akheem Mesidor', confidence: 0.80, note: 'Ravens type' },
                    pfn: { player: 'Keldric Faulk', confidence: 0.60, note: 'Length' }, // Different!
                    tdn: { player: 'Akheem Mesidor', confidence: 0.75, note: 'Motor' },
                    walter: { player: 'Akheem Mesidor', confidence: 0.80, note: 'Production' }
                }
            },
            votes: { up: 876, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Akheem Mesidor', confidence: 0.80 }
            ],
            dissent: 'PFN prefers Keldric Faulk'
        },
        14: {
            team: 'Buccaneers',
            consensus: {
                player: 'Caleb Downs',
                position: 'S',
                school: 'Ohio State',
                confidence: 0.75,
                agreement: 3,
                sources: {
                    pff: { player: 'Caleb Downs', confidence: 0.80, note: 'Elite instincts' },
                    espn: { player: 'Sonny Styles', confidence: 0.65, note: 'Versatile LB' }, // Different!
                    pfn: { player: 'Caleb Downs', confidence: 0.75, note: 'Ball hawk' },
                    tdn: { player: 'Caleb Downs', confidence: 0.70, note: 'Range' },
                    walter: { player: 'Dillon Thieneman', confidence: 0.55, note: 'Oregon safety' } // Different!
                }
            },
            votes: { up: 923, down: 567 },
            history: [
                { date: '2026-02-05', player: 'Caleb Downs', confidence: 0.75 }
            ],
            dissent: 'ESPN has Styles, Walter has Thieneman'
        },
        15: {
            team: 'Colts',
            consensus: {
                player: 'Makai Lemon',
                position: 'WR',
                school: 'USC',
                confidence: 0.72,
                agreement: 3,
                sources: {
                    pff: { player: 'Makai Lemon', confidence: 0.75, note: 'Slot weapon' },
                    espn: { player: 'Makai Lemon', confidence: 0.70, note: 'Route running' },
                    pfn: { player: 'Denzel Boston', confidence: 0.60, note: 'Size' }, // Different!
                    tdn: { player: 'Makai Lemon', confidence: 0.70, note: 'YAC ability' },
                    walter: { player: 'Luther Burden III', confidence: 0.55, note: 'Missouri WR' } // Different!
                }
            },
            votes: { up: 745, down: 523 },
            history: [
                { date: '2026-02-05', player: 'Makai Lemon', confidence: 0.72 }
            ],
            dissent: 'PFN has Boston, Walter has Burden'
        },
        16: {
            team: 'Falcons',
            consensus: {
                player: 'Keldric Faulk',
                position: 'EDGE',
                school: 'Auburn',
                confidence: 0.78,
                agreement: 4,
                sources: {
                    pff: { player: 'Keldric Faulk', confidence: 0.80, note: 'Length' },
                    espn: { player: 'Keldric Faulk', confidence: 0.75, note: '4-3 DE' },
                    pfn: { player: 'Keldric Faulk', confidence: 0.80, note: 'Power' },
                    tdn: { player: 'TJ Parker', confidence: 0.60, note: 'Clemson' }, // Different!
                    walter: { player: 'Keldric Faulk', confidence: 0.75, note: 'Run defense' }
                }
            },
            votes: { up: 634, down: 412 },
            history: [
                { date: '2026-02-05', player: 'Keldric Faulk', confidence: 0.78 }
            ],
            dissent: 'TDN prefers TJ Parker'
        },
        17: {
            team: 'Bears',
            consensus: {
                player: 'Sonny Styles',
                position: 'LB',
                school: 'Ohio State',
                confidence: 0.85,
                agreement: 5,
                sources: {
                    pff: { player: 'Sonny Styles', confidence: 0.85, note: 'Former safety' },
                    espn: { player: 'Sonny Styles', confidence: 0.90, note: 'Elite speed' },
                    pfn: { player: 'Sonny Styles', confidence: 0.85, note: 'Coverage' },
                    tdn: { player: 'Sonny Styles', confidence: 0.85, note: 'Range' },
                    walter: { player: 'Sonny Styles', confidence: 0.80, note: 'Athleticism' }
                }
            },
            votes: { up: 1023, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Sonny Styles', confidence: 0.85 }
            ]
        },
        18: {
            team: 'Vikings',
            consensus: {
                player: 'Caleb Lomu',
                position: 'OT',
                school: 'Utah',
                confidence: 0.80,
                agreement: 4,
                sources: {
                    pff: { player: 'Caleb Lomu', confidence: 0.85, note: 'Length' },
                    espn: { player: 'Caleb Lomu', confidence: 0.80, note: 'Utah pipeline' },
                    pfn: { player: 'Caleb Lomu', confidence: 0.75, note: 'Run blocking' },
                    tdn: { player: 'Spencer Fano', confidence: 0.65, note: 'Technique' }, // Different!
                    walter: { player: 'Caleb Lomu', confidence: 0.80, note: 'LT potential' }
                }
            },
            votes: { up: 834, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Caleb Lomu', confidence: 0.80 }
            ],
            dissent: 'TDN prefers Spencer Fano'
        },
        19: {
            team: 'Chargers',
            consensus: {
                player: 'Spencer Fano',
                position: 'OT',
                school: 'Utah',
                confidence: 0.75,
                agreement: 3,
                sources: {
                    pff: { player: 'Spencer Fano', confidence: 0.80, note: 'Technique' },
                    espn: { player: 'Olaivavega Ioane', confidence: 0.65, note: 'IOL' }, // Different!
                    pfn: { player: 'Spencer Fano', confidence: 0.75, note: 'Zone fit' },
                    tdn: { player: 'Spencer Fano', confidence: 0.70, note: 'Footwork' },
                    walter: { player: 'JC Latham', confidence: 0.55, note: 'Wisconsin' } // Different!
                }
            },
            votes: { up: 723, down: 512 },
            history: [
                { date: '2026-02-05', player: 'Spencer Fano', confidence: 0.75 }
            ],
            dissent: 'ESPN has Ioane, Walter has Latham'
        },
        20: {
            team: 'Chiefs',
            consensus: {
                player: 'Olaivavega Ioane',
                position: 'IOL',
                school: 'Penn State',
                confidence: 0.82,
                agreement: 4,
                sources: {
                    pff: { player: 'Olaivavega Ioane', confidence: 0.85, note: 'Dominant LG' },
                    espn: { player: 'Olaivavega Ioane', confidence: 0.80, note: 'Power' },
                    pfn: { player: 'Olaivavega Ioane', confidence: 0.85, note: 'Anchor' },
                    tdn: { player: 'Emmanuel Pregnon', confidence: 0.60, note: 'Oregon' }, // Different!
                    walter: { player: 'Olaivavega Ioane', confidence: 0.80, note: 'Run blocking' }
                }
            },
            votes: { up: 845, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Olaivavega Ioane', confidence: 0.82 }
            ],
            dissent: 'TDN prefers Emmanuel Pregnon'
        },
        21: {
            team: 'Cardinals',
            consensus: {
                player: 'Mansoor Delane',
                position: 'CB',
                school: 'Virginia Tech',
                confidence: 0.78,
                agreement: 3,
                sources: {
                    pff: { player: 'Mansoor Delane', confidence: 0.80, note: 'Ball skills' },
                    espn: { player: 'Mansoor Delane', confidence: 0.75, note: 'Instincts' },
                    pfn: { player: 'Avieon Terrell', confidence: 0.65, note: 'Clemson' }, // Different!
                    tdn: { player: 'Mansoor Delane', confidence: 0.80, note: 'Fluid hips' },
                    walter: { player: 'Daylen Everette', confidence: 0.60, note: 'Georgia' } // Different!
                }
            },
            votes: { up: 634, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Mansoor Delane', confidence: 0.78 }
            ],
            dissent: 'PFN has Terrell, Walter has Everette'
        },
        22: {
            team: 'Seahawks',
            consensus: {
                player: 'CJ Allen',
                position: 'LB',
                school: 'Georgia',
                confidence: 0.80,
                agreement: 4,
                sources: {
                    pff: { player: 'CJ Allen', confidence: 0.85, note: 'Read-react' },
                    espn: { player: 'CJ Allen', confidence: 0.80, note: 'Physical' },
                    pfn: { player: 'CJ Allen', confidence: 0.75, note: 'Coverage' },
                    tdn: { player: 'Jihaad Campbell', confidence: 0.65, note: 'Alabama' }, // Different!
                    walter: { player: 'CJ Allen', confidence: 0.80, note: 'Tackling' }
                }
            },
            votes: { up: 756, down: 334 },
            history: [
                { date: '2026-02-05', player: 'CJ Allen', confidence: 0.80 }
            ],
            dissent: 'TDN prefers Jihaad Campbell'
        },
        23: {
            team: 'Bills',
            consensus: {
                player: 'Denzel Boston',
                position: 'WR',
                school: 'Washington',
                confidence: 0.75,
                agreement: 3,
                sources: {
                    pff: { player: 'Denzel Boston', confidence: 0.80, note: 'Size' },
                    espn: { player: 'Denzel Boston', confidence: 0.75, note: 'Ball skills' },
                    pfn: { player: 'Jayden Higgins', confidence: 0.60, note: 'Iowa State' }, // Different!
                    tdn: { player: 'Denzel Boston', confidence: 0.70, note: 'Contested' },
                    walter: { player: 'Xavier Restrepo', confidence: 0.65, note: 'Miami' } // Different!
                }
            },
            votes: { up: 823, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Denzel Boston', confidence: 0.75 }
            ],
            dissent: 'PFN has Higgins, Walter has Restrepo'
        },
        24: {
            team: 'Texans',
            consensus: {
                player: 'Drew Allar',
                position: 'QB',
                school: 'Penn State',
                confidence: 0.72,
                agreement: 3,
                sources: {
                    pff: { player: 'Drew Allar', confidence: 0.75, note: 'Arm strength' },
                    espn: { player: 'Trinidad Chambliss', confidence: 0.60, note: 'Ole Miss' }, // Different!
                    pfn: { player: 'Drew Allar', confidence: 0.70, note: 'Size' },
                    tdn: { player: 'Drew Allar', confidence: 0.70, note: 'Upside' },
                    walter: { player: 'Carson Beck', confidence: 0.65, note: 'Miami' } // Different!
                }
            },
            votes: { up: 712, down: 567 },
            history: [
                { date: '2026-02-05', player: 'Drew Allar', confidence: 0.72 }
            ],
            dissent: 'ESPN has Chambliss, Walter has Beck'
        },
        25: {
            team: 'Cowboys',
            consensus: {
                player: 'Malaki Starks',
                position: 'S',
                school: 'Georgia',
                confidence: 0.78,
                agreement: 4,
                sources: {
                    pff: { player: 'Malaki Starks', confidence: 0.80, note: 'Versatility' },
                    espn: { player: 'Malaki Starks', confidence: 0.75, note: 'Coverage' },
                    pfn: { player: 'Malaki Starks', confidence: 0.80, note: 'Range' },
                    tdn: { player: 'Kevin Winston Jr.', confidence: 0.60, note: 'Penn State' }, // Different!
                    walter: { player: 'Malaki Starks', confidence: 0.75, note: 'Instincts' }
                }
            },
            votes: { up: 645, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Malaki Starks', confidence: 0.78 }
            ],
            dissent: 'TDN prefers Kevin Winston Jr.'
        },
        26: {
            team: 'Eagles',
            consensus: {
                player: 'Tacario Davis',
                position: 'CB',
                school: 'Arizona',
                confidence: 0.75,
                agreement: 3,
                sources: {
                    pff: { player: 'Tacario Davis', confidence: 0.80, note: 'Size' },
                    espn: { player: 'Tacario Davis', confidence: 0.75, note: 'Press' },
                    pfn: { player: 'Maxwell Hairston', confidence: 0.65, note: 'Kentucky' }, // Different!
                    tdn: { player: 'Tacario Davis', confidence: 0.70, note: 'Length' },
                    walter: { player: 'Brandon Cisse', confidence: 0.60, note: 'South Carolina' } // Different!
                }
            },
            votes: { up: 534, down: 412 },
            history: [
                { date: '2026-02-05', player: 'Tacario Davis', confidence: 0.75 }
            ],
            dissent: 'PFN has Hairston, Walter has Cisse'
        },
        27: {
            team: 'Bengals',
            consensus: {
                player: 'Dillon Thieneman',
                position: 'S',
                school: 'Oregon',
                confidence: 0.70,
                agreement: 3,
                sources: {
                    pff: { player: 'Dillon Thieneman', confidence: 0.75, note: 'Ball skills' },
                    espn: { player: 'Dillon Thieneman', confidence: 0.70, note: 'Production' },
                    pfn: { player: 'Kamari Ramsey', confidence: 0.60, note: 'USC' }, // Different!
                    tdn: { player: 'Dillon Thieneman', confidence: 0.65, note: 'Range' },
                    walter: { player: 'Rod Moore', confidence: 0.60, note: 'Michigan' } // Different!
                }
            },
            votes: { up: 423, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Dillon Thieneman', confidence: 0.70 }
            ],
            dissent: 'PFN has Ramsey, Walter has Moore'
        },
        28: {
            team: 'Raiders',
            consensus: {
                player: 'Trinidad Chambliss',
                position: 'QB',
                school: 'Ole Miss',
                confidence: 0.68,
                agreement: 3,
                sources: {
                    pff: { player: 'Trinidad Chambliss', confidence: 0.70, note: 'Athleticism' },
                    espn: { player: 'Trinidad Chambliss', confidence: 0.70, note: 'Playmaker' },
                    pfn: { player: 'Sawyer Robertson', confidence: 0.60, note: 'Baylor' }, // Different!
                    tdn: { player: 'Garrett Nussmeier', confidence: 0.55, note: 'LSU' }, // Different!
                    walter: { player: 'Trinidad Chambliss', confidence: 0.65, note: 'Arm strength' }
                }
            },
            votes: { up: 512, down: 445 },
            history: [
                { date: '2026-02-05', player: 'Trinidad Chambliss', confidence: 0.68 }
            ],
            dissent: 'PFN has Robertson, TDN has Nussmeier'
        },
        29: {
            team: 'Steelers',
            consensus: {
                player: 'Carson Beck',
                position: 'QB',
                school: 'Miami',
                confidence: 0.65,
                agreement: 3,
                sources: {
                    pff: { player: 'Carson Beck', confidence: 0.70, note: 'Physical tools' },
                    espn: { player: 'Carson Beck', confidence: 0.65, note: 'Potential' },
                    pfn: { player: 'Carson Beck', confidence: 0.60, note: 'Size' },
                    tdn: { player: 'Sawyer Robertson', confidence: 0.55, note: 'Baylor' }, // Different!
                    walter: { player: 'Sawyer Robertson', confidence: 0.60, note: 'Clutch' } // Different!
                }
            },
            votes: { up: 534, down: 567 },
            history: [
                { date: '2026-02-05', player: 'Carson Beck', confidence: 0.65 }
            ],
            dissent: 'TDN and Walter prefer Robertson'
        },
        30: {
            team: 'Broncos',
            consensus: {
                player: 'Luther Burden III',
                position: 'WR',
                school: 'Missouri',
                confidence: 0.70,
                agreement: 3,
                sources: {
                    pff: { player: 'Luther Burden III', confidence: 0.75, note: 'YAC' },
                    espn: { player: 'Luther Burden III', confidence: 0.70, note: 'Slot' },
                    pfn: { player: 'Zachariah Branch', confidence: 0.60, note: 'Georgia' }, // Different!
                    tdn: { player: 'Luther Burden III', confidence: 0.65, note: 'Explosive' },
                    walter: { player: 'Jayden Higgins', confidence: 0.60, note: 'Iowa State' } // Different!
                }
            },
            votes: { up: 445, down: 334 },
            history: [
                { date: '2026-02-05', player: 'Luther Burden III', confidence: 0.70 }
            ],
            dissent: 'PFN has Branch, Walter has Higgins'
        },
        31: {
            team: 'Rams',
            consensus: {
                player: 'Kaleb Johnson',
                position: 'RB',
                school: 'Iowa',
                confidence: 0.72,
                agreement: 4,
                sources: {
                    pff: { player: 'Kaleb Johnson', confidence: 0.75, note: 'Physical' },
                    espn: { player: 'Kaleb Johnson', confidence: 0.70, note: 'Workhorse' },
                    pfn: { player: 'Kaleb Johnson', confidence: 0.75, note: 'Vision' },
                    tdn: { player: 'Jadarian Price', confidence: 0.60, note: 'Notre Dame' }, // Different!
                    walter: { player: 'Kaleb Johnson', confidence: 0.70, note: 'Contact' }
                }
            },
            votes: { up: 534, down: 312 },
            history: [
                { date: '2026-02-05', player: 'Kaleb Johnson', confidence: 0.72 }
            ],
            dissent: 'TDN prefers Jadarian Price'
        },
        32: {
            team: 'Lions',
            consensus: {
                player: 'Emmanuel Pregnon',
                position: 'IOL',
                school: 'Oregon',
                confidence: 0.68,
                agreement: 3,
                sources: {
                    pff: { player: 'Emmanuel Pregnon', confidence: 0.70, note: 'Versatile' },
                    espn: { player: 'Emmanuel Pregnon', confidence: 0.70, note: 'Power' },
                    pfn: { player: 'Connor Lew', confidence: 0.60, note: 'Auburn' }, // Different!
                    tdn: { player: 'Emmanuel Pregnon', confidence: 0.65, note: 'Anchor' },
                    walter: { player: 'Chase Bisontis', confidence: 0.55, note: 'Texas A&M' } // Different!
                }
            },
            votes: { up: 423, down: 278 },
            history: [
                { date: '2026-02-05', player: 'Emmanuel Pregnon', confidence: 0.68 }
            ],
            dissent: 'PFN has Lew, Walter has Bisontis'
        }
    },

    // Historical snapshot data
    history: [
        {
            date: '2026-01-15',
            label: 'Early January',
            changes: [
                { pick: 2, oldPlayer: 'Ty Simpson', newPlayer: 'Ty Simpson', note: 'Early favorite for #2' },
                { pick: 5, oldPlayer: 'Rueben Bain Jr.', newPlayer: 'Rueben Bain Jr.', note: 'EDGE to Giants' }
            ]
        },
        {
            date: '2026-02-01',
            label: 'February 1st',
            changes: [
                { pick: 2, oldPlayer: 'Ty Simpson', newPlayer: 'Jeremiyah Love', note: 'RB rises up board' },
                { pick: 9, oldPlayer: 'David Bailey', newPlayer: 'David Bailey', note: 'EDGE to Chiefs' }
            ]
        },
        {
            date: '2026-02-05',
            label: 'Current - February 5th',
            changes: [
                { pick: 2, oldPlayer: 'Jeremiyah Love', newPlayer: 'Jeremiyah Love', note: 'PFN dissents with Arvell Reese' },
                { pick: 11, oldPlayer: 'Cole Payton', newPlayer: 'Cole Payton', note: 'Split vote on QB' },
                { pick: 29, oldPlayer: 'Carson Beck', newPlayer: 'Carson Beck', note: 'Late riser for Steelers' }
            ]
        }
    ]
};

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConsensusMockData;
}

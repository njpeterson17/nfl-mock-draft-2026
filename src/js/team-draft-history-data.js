// ==========================================
// TEAM DRAFT HISTORY DATA
// All 32 NFL Teams - Comprehensive Draft History
// ==========================================

const teamDraftHistory = {
    // AFC NORTH
    ravens: {
        code: 'BAL', name: 'Baltimore Ravens',
        colors: { primary: '#241773', secondary: '#9E7C0C' },
        franchiseInfo: { established: 1996, location: 'Baltimore', championships: 2 },
        performance: { hitRate: 0.52, avgPickValue: 3.6, proBowlers: 18, allPros: 7, grade: 'A-', leagueRank: 5 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.1, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 27, player: 'Carnell Tate', position: 'WR', school: 'Ohio State', grade: 'A-' }, { round: 2, pick: 59, player: 'Tyler Booker', position: 'IOL', school: 'Alabama', grade: 'B+' }],
            2024: [{ round: 1, pick: 30, player: 'Nate Wiggins', position: 'CB', school: 'Clemson', grade: 'A' }, { round: 2, pick: 62, player: 'Roger Rosengarten', position: 'OT', school: 'Washington', grade: 'B+' }],
            2023: [{ round: 1, pick: 22, player: 'Zay Flowers', position: 'WR', school: 'Boston College', grade: 'A' }],
            2022: [{ round: 1, pick: 14, player: 'Kyle Hamilton', position: 'S', school: 'Notre Dame', grade: 'A+' }, { round: 1, pick: 25, player: 'Tyler Linderbaum', position: 'C', school: 'Iowa', grade: 'A' }],
            2021: [{ round: 1, pick: 31, player: 'Odafe Oweh', position: 'EDGE', school: 'Penn State', grade: 'A-' }],
            2020: [{ round: 1, pick: 28, player: 'Patrick Queen', position: 'LB', school: 'LSU', grade: 'B+' }]
        },
        bestPicks: [
            { player: 'Lamar Jackson', year: 2018, round: 1, pick: 32, accolades: ['MVP 2019', '3x Pro Bowl'] },
            { player: 'Mark Andrews', year: 2018, round: 3, pick: 86, accolades: ['3x Pro Bowl', 'All-Pro 2021'] },
            { player: 'Kyle Hamilton', year: 2022, round: 1, pick: 14, accolades: ['2x Pro Bowl', 'All-Pro 2023'] }
        ],
        biggestMisses: [
            { player: 'Arthur Brown', year: 2013, round: 2, pick: 56, reason: 'Bust - Only 5 starts' },
            { player: 'Kamalei Correa', year: 2016, round: 2, pick: 42, reason: 'Traded after 2 seasons' }
        ],
        gradeTrend: [3.2, 3.5, 3.1, 4.2, 3.8, 4.5, 3.9, 4.1, 3.7, 4.3]
    },

    steelers: {
        code: 'PIT', name: 'Pittsburgh Steelers',
        colors: { primary: '#FFB612', secondary: '#101820' },
        franchiseInfo: { established: 1933, location: 'Pittsburgh', championships: 6 },
        performance: { hitRate: 0.48, avgPickValue: 3.4, proBowlers: 22, allPros: 9, grade: 'B+', leagueRank: 8 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 1.8, bestRound: 3 },
        drafts: {
            2025: [{ round: 1, pick: 21, player: 'Darius Alexander', position: 'DL', school: 'UTSA', grade: 'B+' }, { round: 2, pick: 52, player: 'Jack Bech', position: 'WR', school: 'TCU', grade: 'B' }],
            2024: [{ round: 1, pick: 20, player: 'Troy Fautanu', position: 'OT', school: 'Washington', grade: 'A-' }, { round: 2, pick: 51, player: 'Zach Frazier', position: 'C', school: 'West Virginia', grade: 'A-' }],
            2023: [{ round: 1, pick: 14, player: 'Broderick Jones', position: 'OT', school: 'Georgia', grade: 'B+' }],
            2022: [{ round: 1, pick: 20, player: 'Kenny Pickett', position: 'QB', school: 'Pittsburgh', grade: 'C+' }],
            2021: [{ round: 1, pick: 24, player: 'Najee Harris', position: 'RB', school: 'Alabama', grade: 'B' }],
            2020: [{ round: 3, pick: 102, player: 'Alex Highsmith', position: 'EDGE', school: 'Charlotte', grade: 'A' }]
        },
        bestPicks: [
            { player: 'T.J. Watt', year: 2017, round: 1, pick: 30, accolades: ['DPOY 2021', '6x Pro Bowl', '4x All-Pro'] },
            { player: 'Minkah Fitzpatrick', year: 2018, round: 1, pick: 11, accolades: ['6x Pro Bowl', '3x All-Pro'] },
            { player: 'Alex Highsmith', year: 2020, round: 3, pick: 102, accolades: ['1000+ Snaps', 'Starting EDGE'] }
        ],
        biggestMisses: [
            { player: 'Kenny Pickett', year: 2022, round: 1, pick: 20, reason: 'First round QB bust' },
            { player: 'Artie Burns', year: 2016, round: 1, pick: 25, reason: 'Cut after 3 seasons' },
            { player: 'Jarvis Jones', year: 2013, round: 1, pick: 17, reason: 'Only 6 sacks in 4 years' }
        ],
        gradeTrend: [3.5, 3.2, 3.0, 2.8, 3.4, 3.6, 3.8, 4.0, 3.7, 3.9]
    },

    browns: {
        code: 'CLE', name: 'Cleveland Browns',
        colors: { primary: '#311D00', secondary: '#FF3C00' },
        franchiseInfo: { established: 1946, location: 'Cleveland', championships: 4 },
        performance: { hitRate: 0.38, avgPickValue: 2.9, proBowlers: 12, allPros: 4, grade: 'C+', leagueRank: 24 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.4, bestRound: 4 },
        drafts: {
            2025: [{ round: 1, pick: 2, player: 'Fernando Mendoza', position: 'QB', school: 'Indiana', grade: 'A' }, { round: 2, pick: 33, player: 'Donovan Jackson', position: 'IOL', school: 'Ohio State', grade: 'B+' }],
            2024: [{ round: 2, pick: 54, player: 'Mike Hall Jr.', position: 'DL', school: 'Ohio State', grade: 'B' }],
            2023: [{ round: 3, pick: 74, player: 'Dawand Jones', position: 'OT', school: 'Ohio State', grade: 'A-' }],
            2022: [{ round: 3, pick: 68, player: 'Martin Emerson', position: 'CB', school: 'Mississippi State', grade: 'A-' }],
            2021: [{ round: 2, pick: 59, player: 'Jeremiah Owusu-Koramoah', position: 'LB', school: 'Notre Dame', grade: 'A' }],
            2020: [{ round: 1, pick: 10, player: 'Jedrick Wills', position: 'OT', school: 'Alabama', grade: 'B' }]
        },
        bestPicks: [
            { player: 'Myles Garrett', year: 2017, round: 1, pick: 1, accolades: ['DPOY 2023', '6x Pro Bowl', '3x All-Pro'] },
            { player: 'Jeremiah Owusu-Koramoah', year: 2021, round: 2, pick: 52, accolades: ['All-Pro 2023', 'Elite LB'] },
            { player: 'Amari Cooper', year: 2022, round: 5, pick: 0, accolades: ['Trade Acquisition', 'WR1 Production'] }
        ],
        biggestMisses: [
            { player: 'Johnny Manziel', year: 2014, round: 1, pick: 22, reason: 'Bust - Off-field issues' },
            { player: 'Justin Gilbert', year: 2014, round: 1, pick: 8, reason: 'Traded for nothing' },
            { player: 'Corey Coleman', year: 2016, round: 1, pick: 15, reason: 'Traded for 7th round pick' }
        ],
        gradeTrend: [2.5, 2.8, 3.2, 2.9, 3.5, 3.0, 3.3, 3.8, 3.4, 4.0]
    },

    bengals: {
        code: 'CIN', name: 'Cincinnati Bengals',
        colors: { primary: '#FB4F14', secondary: 'black' },
        franchiseInfo: { established: 1968, location: 'Cincinnati', championships: 0 },
        performance: { hitRate: 0.44, avgPickValue: 3.2, proBowlers: 15, allPros: 5, grade: 'B', leagueRank: 14 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 1.5, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 17, player: 'Luther Burden III', position: 'WR', school: 'Missouri', grade: 'A-' }],
            2024: [{ round: 1, pick: 18, player: 'Amarius Mims', position: 'OT', school: 'Georgia', grade: 'B+' }],
            2023: [{ round: 1, pick: 28, player: 'Myles Murphy', position: 'EDGE', school: 'Clemson', grade: 'B' }],
            2022: [{ round: 1, pick: 31, player: 'Daxton Hill', position: 'S', school: 'Michigan', grade: 'B+' }],
            2021: [{ round: 1, pick: 5, player: 'Ja\'Marr Chase', position: 'WR', school: 'LSU', grade: 'A+' }],
            2020: [{ round: 1, pick: 1, player: 'Joe Burrow', position: 'QB', school: 'LSU', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Joe Burrow', year: 2020, round: 1, pick: 1, accolades: ['Comeback POY', 'Pro Bowl', 'Super Bowl LVI'] },
            { player: 'Ja\'Marr Chase', year: 2021, round: 1, pick: 5, accolades: ['ROY', '3x Pro Bowl', 'All-Pro'] },
            { player: 'Tee Higgins', year: 2020, round: 2, pick: 33, accolades: ['3x 1000yd', 'Elite WR2'] }
        ],
        biggestMisses: [
            { player: 'John Ross', year: 2017, round: 1, pick: 9, reason: 'Bust - Injuries' },
            { player: 'Billy Price', year: 2018, round: 1, pick: 21, reason: 'Cut after 3 seasons' },
            { player: 'Drew Sample', year: 2019, round: 2, pick: 52, reason: 'Blocking TE only' }
        ],
        gradeTrend: [3.0, 4.8, 4.2, 3.5, 3.8, 3.2, 3.6, 3.9, 3.4, 4.0]
    },

    // AFC SOUTH
    titans: {
        code: 'TEN', name: 'Tennessee Titans',
        colors: { primary: '#0C2340', secondary: '#4C8FB6' },
        franchiseInfo: { established: 1960, location: 'Nashville', championships: 2 },
        performance: { hitRate: 0.40, avgPickValue: 3.0, proBowlers: 11, allPros: 4, grade: 'C+', leagueRank: 27 },
        tendencies: { mostDraftedPosition: 'RB', tradeFrequency: 2.0, bestRound: 3 },
        drafts: {
            2025: [{ round: 1, pick: 5, player: 'Cameron Ward', position: 'QB', school: 'Miami', grade: 'B+' }],
            2024: [{ round: 1, pick: 7, player: 'JC Latham', position: 'OT', school: 'Alabama', grade: 'B+' }],
            2023: [{ round: 1, pick: 11, player: 'Peter Skoronski', position: 'OT', school: 'Northwestern', grade: 'B+' }],
            2022: [{ round: 1, pick: 18, player: 'Treylon Burks', position: 'WR', school: 'Arkansas', grade: 'C+' }],
            2021: [{ round: 1, pick: 22, player: 'Caleb Farley', position: 'CB', school: 'Virginia Tech', grade: 'D+' }],
            2020: [{ round: 1, pick: 29, player: 'Isaiah Wilson', position: 'OT', school: 'Georgia', grade: 'F' }]
        },
        bestPicks: [
            { player: 'Jeffery Simmons', year: 2019, round: 1, pick: 19, accolades: ['2x Pro Bowl', 'All-Pro 2021'] },
            { player: 'Derrick Henry', year: 2016, round: 2, pick: 45, accolades: ['2x Rushing Leader', '4x Pro Bowl', '2x All-Pro'] },
            { player: 'AJ Brown', year: 2019, round: 2, pick: 51, accolades: ['3x Pro Bowl', 'All-Pro', 'Elite WR'] }
        ],
        biggestMisses: [
            { player: 'Isaiah Wilson', year: 2020, round: 1, pick: 29, reason: 'CATASTROPHIC - One game' },
            { player: 'Caleb Farley', year: 2021, round: 1, pick: 22, reason: 'Back surgeries' },
            { player: 'Kevin Dodd', year: 2016, round: 2, pick: 33, reason: '1 career sack' }
        ],
        gradeTrend: [1.0, 2.8, 2.5, 3.2, 2.8, 3.5, 3.2, 2.9, 3.4, 3.6]
    },

    colts: {
        code: 'IND', name: 'Indianapolis Colts',
        colors: { primary: '#003594', secondary: '#FFB81C' },
        franchiseInfo: { established: 1953, location: 'Indianapolis', championships: 4 },
        performance: { hitRate: 0.45, avgPickValue: 3.1, proBowlers: 16, allPros: 6, grade: 'B-', leagueRank: 16 },
        tendencies: { mostDraftedPosition: 'QB', tradeFrequency: 2.2, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 14, player: 'Darius Alexander', position: 'DL', school: 'UTSA', grade: 'B+' }],
            2024: [{ round: 1, pick: 15, player: 'Laiatu Latu', position: 'EDGE', school: 'UCLA', grade: 'B+' }],
            2023: [{ round: 1, pick: 4, player: 'Anthony Richardson', position: 'QB', school: 'Florida', grade: 'B+' }],
            2022: [{ round: 1, pick: 32, player: 'Bernhard Raimann', position: 'OT', school: 'Central Michigan', grade: 'B+' }],
            2021: [{ round: 1, pick: 21, player: 'Kwity Paye', position: 'EDGE', school: 'Michigan', grade: 'B' }],
            2020: [{ round: 2, pick: 34, player: 'Michael Pittman Jr.', position: 'WR', school: 'USC', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Quenton Nelson', year: 2018, round: 1, pick: 6, accolades: ['5x Pro Bowl', '4x All-Pro'] },
            { player: 'Darius Leonard', year: 2018, round: 2, pick: 36, accolades: ['DROY', '3x All-Pro', '3x Pro Bowl'] },
            { player: 'Michael Pittman Jr.', year: 2020, round: 2, pick: 34, accolades: ['1000yd WR', 'WR1'] }
        ],
        biggestMisses: [
            { player: 'Phillip Dorsett', year: 2015, round: 1, pick: 29, reason: 'Never became WR2' },
            { player: 'Werner Bjoern', year: 2013, round: 1, pick: 24, reason: '6.5 sacks in 4 years' },
            { player: 'Ben Banogu', year: 2019, round: 2, pick: 49, reason: 'Cut after 3 seasons' }
        ],
        gradeTrend: [3.2, 3.8, 3.0, 3.2, 3.5, 3.6, 3.4, 3.2, 3.5, 3.7]
    },

    jaguars: {
        code: 'JAX', name: 'Jacksonville Jaguars',
        colors: { primary: '#006778', secondary: '#D7A22A' },
        franchiseInfo: { established: 1995, location: 'Jacksonville', championships: 0 },
        performance: { hitRate: 0.35, avgPickValue: 2.7, proBowlers: 8, allPros: 2, grade: 'C', leagueRank: 30 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.3, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 4, player: 'Travis Hunter', position: 'CB/WR', school: 'Colorado', grade: 'A' }],
            2024: [{ round: 1, pick: 23, player: 'Brian Thomas Jr.', position: 'WR', school: 'LSU', grade: 'A' }],
            2023: [{ round: 1, pick: 27, player: 'Anton Harrison', position: 'OT', school: 'Oklahoma', grade: 'B+' }],
            2022: [{ round: 1, pick: 1, player: 'Travon Walker', position: 'EDGE', school: 'Georgia', grade: 'B' }],
            2021: [{ round: 1, pick: 1, player: 'Trevor Lawrence', position: 'QB', school: 'Clemson', grade: 'B+' }],
            2020: [{ round: 1, pick: 20, player: 'K\'Lavon Chaisson', position: 'EDGE', school: 'LSU', grade: 'D+' }]
        },
        bestPicks: [
            { player: 'Trevor Lawrence', year: 2021, round: 1, pick: 1, accolades: ['Playoff Win', 'Franchise QB'] },
            { player: 'Josh Allen', year: 2019, round: 1, pick: 7, accolades: ['Pro Bowl 2023', 'All-Pro', 'Elite EDGE'] },
            { player: 'Travis Etienne', year: 2021, round: 1, pick: 25, accolades: ['2000yd Scrimmage', 'Extended'] },
            { player: 'Brian Thomas Jr.', year: 2024, round: 1, pick: 23, accolades: ['14 TD Rookie', 'Elite Speed'] }
        ],
        biggestMisses: [
            { player: 'Leonard Fournette', year: 2017, round: 1, pick: 4, reason: 'Traded after 3 years' },
            { player: 'K\'Lavon Chaisson', year: 2020, round: 1, pick: 20, reason: '2 career sacks' },
            { player: 'Dante Fowler', year: 2015, round: 1, pick: 3, reason: 'Injured rookie year' },
            { player: 'Blake Bortles', year: 2014, round: 1, pick: 3, reason: 'Should have taken Mack' }
        ],
        gradeTrend: [2.0, 2.5, 3.8, 3.5, 3.2, 3.6, 3.0, 3.5, 4.2, 4.0]
    },

    texans: {
        code: 'HOU', name: 'Houston Texans',
        colors: { primary: '#03202F', secondary: '#A71930' },
        franchiseInfo: { established: 2002, location: 'Houston', championships: 0 },
        performance: { hitRate: 0.42, avgPickValue: 3.0, proBowlers: 14, allPros: 5, grade: 'B-', leagueRank: 19 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 2.5, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 24, player: 'Kaleb Johnson', position: 'RB', school: 'Iowa', grade: 'B+' }],
            2024: [{ round: 1, pick: 7, player: 'C.J. Stroud', position: 'QB', school: 'Ohio State', grade: 'A+' }],
            2023: [{ round: 1, pick: 2, player: 'C.J. Stroud', position: 'QB', school: 'Ohio State', grade: 'A+' }],
            2022: [{ round: 1, pick: 3, player: 'Derek Stingley Jr.', position: 'CB', school: 'LSU', grade: 'B+' }],
            2021: [{ round: 3, pick: 67, player: 'Nico Collins', position: 'WR', school: 'Michigan', grade: 'A' }],
            2020: [{ round: 2, pick: 40, player: 'Ross Blacklock', position: 'DL', school: 'TCU', grade: 'D' }]
        },
        bestPicks: [
            { player: 'C.J. Stroud', year: 2023, round: 1, pick: 2, accolades: ['ROY', 'Pro Bowl', 'Playoff Win'] },
            { player: 'Will Anderson Jr.', year: 2023, round: 1, pick: 3, accolades: ['DROY', 'All-Pro', 'Elite EDGE'] },
            { player: 'Nico Collins', year: 2021, round: 3, pick: 89, accolades: ['1000yd WR', 'WR1'] }
        ],
        biggestMisses: [
            { player: 'David Carr', year: 2002, round: 1, pick: 1, reason: 'Expansion pick - Bad OL' },
            { player: 'Jadeveon Clowney', year: 2014, round: 1, pick: 1, reason: 'Good not great' },
            { player: 'Ross Blacklock', year: 2020, round: 2, pick: 40, reason: 'Traded for 6th round' }
        ],
        gradeTrend: [2.8, 3.5, 3.8, 4.8, 4.5, 3.0, 3.2, 3.5, 4.8, 4.2]
    },

    // AFC EAST
    bills: {
        code: 'BUF', name: 'Buffalo Bills',
        colors: { primary: '#00338D', secondary: '#C60C30' },
        franchiseInfo: { established: 1960, location: 'Buffalo', championships: 0 },
        performance: { hitRate: 0.50, avgPickValue: 3.5, proBowlers: 19, allPros: 8, grade: 'A-', leagueRank: 4 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.0, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 30, player: 'Landon Jackson', position: 'EDGE', school: 'Arkansas', grade: 'B+' }],
            2024: [{ round: 2, pick: 33, player: 'Keon Coleman', position: 'WR', school: 'Florida State', grade: 'A-' }],
            2023: [{ round: 1, pick: 25, player: 'Dalton Kincaid', position: 'TE', school: 'Utah', grade: 'B+' }],
            2022: [{ round: 2, pick: 63, player: 'James Cook', position: 'RB', school: 'Georgia', grade: 'A-' }],
            2021: [{ round: 1, pick: 30, player: 'Gregory Rousseau', position: 'EDGE', school: 'Miami', grade: 'B+' }],
            2020: [{ round: 2, pick: 54, player: 'A.J. Epenesa', position: 'EDGE', school: 'Iowa', grade: 'B' }]
        },
        bestPicks: [
            { player: 'Josh Allen', year: 2018, round: 1, pick: 7, accolades: ['MVP Candidate', '5x Pro Bowl', 'All-Pro'] },
            { player: 'Tremaine Edmunds', year: 2018, round: 1, pick: 16, accolades: ['2x Pro Bowl', 'Youngest Pro Bowler'] },
            { player: 'Dion Dawkins', year: 2017, round: 2, pick: 63, accolades: ['2x Pro Bowl', 'Elite LT'] },
            { player: 'Matt Milano', year: 2017, round: 5, pick: 163, accolades: ['All-Pro 2022', 'Elite Coverage LB'] }
        ],
        biggestMisses: [
            { player: 'EJ Manuel', year: 2013, round: 1, pick: 16, reason: 'Traded up for him' },
            { player: 'Aaron Maybin', year: 2009, round: 1, pick: 11, reason: '0 sacks with Bills' },
            { player: 'Kaiir Elam', year: 2022, round: 1, pick: 23, reason: 'Inconsistent, traded' }
        ],
        gradeTrend: [3.2, 3.8, 4.2, 4.0, 3.8, 3.6, 4.0, 3.9, 4.2, 3.8]
    },

    dolphins: {
        code: 'MIA', name: 'Miami Dolphins',
        colors: { primary: '#008E97', secondary: '#FC4C02' },
        franchiseInfo: { established: 1966, location: 'Miami', championships: 2 },
        performance: { hitRate: 0.43, avgPickValue: 3.1, proBowlers: 13, allPros: 4, grade: 'B-', leagueRank: 20 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 2.8, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 13, player: 'Kenneth Grant', position: 'DL', school: 'Michigan', grade: 'A-' }],
            2024: [{ round: 1, pick: 21, player: 'Chop Robinson', position: 'EDGE', school: 'Penn State', grade: 'B' }],
            2023: [{ round: 3, pick: 84, player: 'De\'Von Achane', position: 'RB', school: 'Texas A&M', grade: 'A+' }],
            2022: [{ round: 3, pick: 102, player: 'Channing Tindall', position: 'LB', school: 'Georgia', grade: 'B-' }],
            2021: [{ round: 1, pick: 6, player: 'Jaylen Waddle', position: 'WR', school: 'Alabama', grade: 'A+' }],
            2020: [{ round: 1, pick: 5, player: 'Tua Tagovailoa', position: 'QB', school: 'Alabama', grade: 'B+' }]
        },
        bestPicks: [
            { player: 'Tua Tagovailoa', year: 2020, round: 1, pick: 5, accolades: ['Passing Leader 2023', 'Pro Bowl'] },
            { player: 'Jaylen Waddle', year: 2021, round: 1, pick: 6, accolades: ['Pro Bowl', '1000+ yards', 'Elite Speed'] },
            { player: 'Tyreek Hill', year: 2022, round: 0, pick: 0, accolades: ['Trade', 'All-Pro', 'Record Breaker'] },
            { player: 'De\'Von Achane', year: 2023, round: 3, pick: 84, accolades: ['1000yd Rookie', 'Explosive'] }
        ],
        biggestMisses: [
            { player: 'Dion Jordan', year: 2013, round: 1, pick: 3, reason: 'Suspensions, 3 sacks' },
            { player: 'Charles Harris', year: 2017, round: 1, pick: 22, reason: '3.5 sacks with Dolphins' },
            { player: 'Noah Igbinoghene', year: 2020, round: 1, pick: 30, reason: 'Barely played, traded' }
        ],
        gradeTrend: [3.0, 3.5, 3.8, 4.0, 3.2, 3.4, 3.6, 4.2, 3.5, 3.8]
    },

    jets: {
        code: 'NYJ', name: 'New York Jets',
        colors: { primary: '#125740', secondary: 'white' },
        franchiseInfo: { established: 1960, location: 'New York', championships: 1 },
        performance: { hitRate: 0.36, avgPickValue: 2.8, proBowlers: 10, allPros: 3, grade: 'C', leagueRank: 29 },
        tendencies: { mostDraftedPosition: 'QB', tradeFrequency: 2.6, bestRound: 4 },
        drafts: {
            2025: [{ round: 1, pick: 2, player: 'Ty Simpson', position: 'QB', school: 'Alabama', grade: 'B+' }, { round: 1, pick: 7, player: 'Carnell Tate', position: 'WR', school: 'Ohio State', grade: 'A-' }],
            2024: [{ round: 1, pick: 11, player: 'Olu Fashanu', position: 'OT', school: 'Penn State', grade: 'A' }],
            2023: [{ round: 1, pick: 15, player: 'Will McDonald IV', position: 'EDGE', school: 'Iowa State', grade: 'B' }],
            2022: [{ round: 1, pick: 4, player: 'Sauce Gardner', position: 'CB', school: 'Cincinnati', grade: 'A+' }, { round: 1, pick: 10, player: 'Garrett Wilson', position: 'WR', school: 'Ohio State', grade: 'A+' }],
            2021: [{ round: 1, pick: 2, player: 'Zach Wilson', position: 'QB', school: 'BYU', grade: 'D+' }],
            2020: [{ round: 1, pick: 11, player: 'Mekhi Becton', position: 'OT', school: 'Louisville', grade: 'C+' }]
        },
        bestPicks: [
            { player: 'Sauce Gardner', year: 2022, round: 1, pick: 4, accolades: ['3x All-Pro', '3x Pro Bowl', 'Elite CB'] },
            { player: 'Garrett Wilson', year: 2022, round: 1, pick: 10, accolades: ['2x Pro Bowl', '3000+ yards', 'Elite WR'] },
            { player: 'Breece Hall', year: 2022, round: 2, pick: 36, accolades: ['1000yd RB', 'Day 2 Steal'] },
            { player: 'Quinnen Williams', year: 2019, round: 1, pick: 3, accolades: ['All-Pro 2022', 'Pro Bowl', 'Elite DL'] }
        ],
        biggestMisses: [
            { player: 'Zach Wilson', year: 2021, round: 1, pick: 2, reason: 'Traded to Broncos' },
            { player: 'Sam Darnold', year: 2018, round: 1, pick: 3, reason: 'Minimal return' },
            { player: 'Vernon Gholston', year: 2008, round: 1, pick: 6, reason: '0 career sacks' },
            { player: 'Mark Sanchez', year: 2009, round: 1, pick: 5, reason: 'Never elite' }
        ],
        gradeTrend: [2.5, 2.0, 3.8, 4.8, 3.0, 3.2, 3.5, 4.5, 3.2, 3.6]
    },

    patriots: {
        code: 'NE', name: 'New England Patriots',
        colors: { primary: '#002244', secondary: '#C60C30' },
        franchiseInfo: { established: 1960, location: 'New England', championships: 6 },
        performance: { hitRate: 0.46, avgPickValue: 3.3, proBowlers: 15, allPros: 6, grade: 'B+', leagueRank: 11 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 3.5, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 4, player: 'Jeremiyah Love', position: 'RB', school: 'Notre Dame', grade: 'B' }],
            2024: [{ round: 1, pick: 3, player: 'Drake Maye', position: 'QB', school: 'North Carolina', grade: 'B+' }],
            2023: [{ round: 1, pick: 17, player: 'Christian Gonzalez', position: 'CB', school: 'Oregon', grade: 'A' }],
            2022: [{ round: 1, pick: 29, player: 'Cole Strange', position: 'G', school: 'Chattanooga', grade: 'C+' }],
            2021: [{ round: 1, pick: 15, player: 'Mac Jones', position: 'QB', school: 'Alabama', grade: 'B' }],
            2020: [{ round: 2, pick: 37, player: 'Kyle Dugger', position: 'S', school: 'Lenoir-Rhyne', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Tom Brady', year: 2000, round: 6, pick: 199, accolades: ['GOAT', '7x SB Champ', '5x SB MVP'] },
            { player: 'Rob Gronkowski', year: 2010, round: 2, pick: 42, accolades: ['4x SB Champ', '5x Pro Bowl', 'GOAT TE'] },
            { player: 'Kyle Dugger', year: 2020, round: 2, pick: 37, accolades: ['All-Pro', 'Elite Safety'] },
            { player: 'Christian Gonzalez', year: 2023, round: 1, pick: 17, accolades: ['Elite Rookie', 'Shutdown CB'] }
        ],
        biggestMisses: [
            { player: 'N\'Keal Harry', year: 2019, round: 1, pick: 32, reason: 'Traded for 7th round' },
            { player: 'Dominique Easley', year: 2014, round: 1, pick: 29, reason: 'Cut after 2 years' },
            { player: 'Sony Michel', year: 2018, round: 1, pick: 31, reason: 'Traded after rookie deal' }
        ],
        gradeTrend: [4.2, 3.0, 3.2, 2.8, 3.0, 3.5, 3.8, 3.2, 3.0, 3.4]
    },

    // AFC WEST
    chiefs: {
        code: 'KC', name: 'Kansas City Chiefs',
        colors: { primary: '#E31837', secondary: '#FFB81C' },
        franchiseInfo: { established: 1960, location: 'Kansas City', championships: 4 },
        performance: { hitRate: 0.54, avgPickValue: 3.7, proBowlers: 21, allPros: 9, grade: 'A', leagueRank: 2 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.2, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 31, player: 'Colston Loveland', position: 'TE', school: 'Michigan', grade: 'A-' }],
            2024: [{ round: 1, pick: 28, player: 'Xavier Worthy', position: 'WR', school: 'Texas', grade: 'A' }],
            2023: [{ round: 2, pick: 55, player: 'Rashee Rice', position: 'WR', school: 'SMU', grade: 'A+' }],
            2022: [{ round: 1, pick: 21, player: 'Trent McDuffie', position: 'CB', school: 'Washington', grade: 'A' }],
            2021: [{ round: 2, pick: 63, player: 'Creed Humphrey', position: 'C', school: 'Oklahoma', grade: 'A+' }],
            2020: [{ round: 1, pick: 32, player: 'Clyde Edwards-Helaire', position: 'RB', school: 'LSU', grade: 'C+' }]
        },
        bestPicks: [
            { player: 'Patrick Mahomes', year: 2017, round: 1, pick: 10, accolades: ['3x SB Champ', '3x SB MVP', '2x MVP'] },
            { player: 'Travis Kelce', year: 2013, round: 3, pick: 63, accolades: ['4x SB Champ', '9x Pro Bowl', 'GOAT TE'] },
            { player: 'Chris Jones', year: 2016, round: 2, pick: 37, accolades: ['3x SB Champ', '6x Pro Bowl', '5x All-Pro'] },
            { player: 'Tyreek Hill', year: 2016, round: 5, pick: 165, accolades: ['2x SB Champ', '4x Pro Bowl', 'All-Pro'] },
            { player: 'Creed Humphrey', year: 2021, round: 2, pick: 63, accolades: ['2x All-Pro', 'Elite Center'] }
        ],
        biggestMisses: [
            { player: 'Clyde Edwards-Helaire', year: 2020, round: 1, pick: 32, reason: 'Declined 5th year' },
            { player: 'Dee Ford', year: 2014, round: 4, pick: 87, reason: '2018 AFCCG penalty' },
            { player: 'Eric Fisher', year: 2013, round: 1, pick: 1, reason: '#1 overall reach' }
        ],
        gradeTrend: [3.2, 4.5, 4.2, 4.8, 4.0, 4.5, 4.2, 4.6, 4.3, 4.7]
    },

    chargers: {
        code: 'LAC', name: 'Los Angeles Chargers',
        colors: { primary: '#0076B6', secondary: '#FFB81C' },
        franchiseInfo: { established: 1960, location: 'Los Angeles', championships: 1 },
        performance: { hitRate: 0.47, avgPickValue: 3.3, proBowlers: 16, allPros: 5, grade: 'B+', leagueRank: 10 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.0, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 22, player: 'Malaki Starks', position: 'S', school: 'Georgia', grade: 'A-' }],
            2024: [{ round: 1, pick: 5, player: 'Joe Alt', position: 'OT', school: 'Notre Dame', grade: 'A' }],
            2023: [{ round: 1, pick: 21, player: 'Quentin Johnston', position: 'WR', school: 'TCU', grade: 'C+' }],
            2022: [{ round: 1, pick: 17, player: 'Zion Johnson', position: 'G', school: 'Boston College', grade: 'B+' }],
            2021: [{ round: 1, pick: 13, player: 'Rashawn Slater', position: 'OT', school: 'Northwestern', grade: 'A' }],
            2020: [{ round: 1, pick: 6, player: 'Justin Herbert', position: 'QB', school: 'Oregon', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Justin Herbert', year: 2020, round: 1, pick: 6, accolades: ['ROY', 'Pro Bowl', '4000+ yards'] },
            { player: 'Rashawn Slater', year: 2021, round: 1, pick: 13, accolades: ['All-Pro', 'Pro Bowl', 'Elite LT'] },
            { player: 'Derwin James', year: 2018, round: 1, pick: 17, accolades: ['3x Pro Bowl', '2x All-Pro', 'Elite Safety'] },
            { player: 'Joey Bosa', year: 2016, round: 1, pick: 3, accolades: ['5x Pro Bowl', 'DROY', 'Elite EDGE'] }
        ],
        biggestMisses: [
            { player: 'Ryan Leaf', year: 1998, round: 1, pick: 2, reason: 'BUST OF ALL TIME' },
            { player: 'Sammy Davis', year: 2003, round: 1, pick: 30, reason: 'Out in 4 years' },
            { player: 'Larry English', year: 2009, round: 1, pick: 16, reason: '11.5 career sacks' }
        ],
        gradeTrend: [3.8, 4.2, 3.5, 4.0, 3.6, 3.2, 3.5, 4.5, 3.8, 4.0]
    },

    broncos: {
        code: 'DEN', name: 'Denver Broncos',
        colors: { primary: '#FB4F14', secondary: '#002244' },
        franchiseInfo: { established: 1960, location: 'Denver', championships: 3 },
        performance: { hitRate: 0.42, avgPickValue: 3.1, proBowlers: 14, allPros: 5, grade: 'B-', leagueRank: 17 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 2.4, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 20, player: 'Will Campbell', position: 'OT', school: 'LSU', grade: 'A-' }, { round: 2, pick: 51, player: 'Ashton Jeanty', position: 'RB', school: 'Boise State', grade: 'A' }],
            2024: [{ round: 1, pick: 12, player: 'Bo Nix', position: 'QB', school: 'Oregon', grade: 'B' }, { round: 5, pick: 145, player: 'Kris Abrams-Draine', position: 'CB', school: 'Missouri', grade: 'A-' }],
            2023: [{ round: 1, pick: 31, player: 'Patrick Surtain II', position: 'CB', school: 'Alabama', grade: 'A+' }],
            2022: [{ round: 2, pick: 64, player: 'Nik Bonitto', position: 'EDGE', school: 'Oklahoma', grade: 'B+' }],
            2021: [{ round: 1, pick: 9, player: 'Patrick Surtain II', position: 'CB', school: 'Alabama', grade: 'A+' }],
            2020: [{ round: 1, pick: 15, player: 'Jerry Jeudy', position: 'WR', school: 'Alabama', grade: 'B' }]
        },
        bestPicks: [
            { player: 'Patrick Surtain II', year: 2021, round: 1, pick: 9, accolades: ['2x All-Pro', '3x Pro Bowl', 'Shutdown CB'] },
            { player: 'Nik Bonitto', year: 2022, round: 2, pick: 64, accolades: ['Double Digit Sacks', 'Star EDGE'] },
            { player: 'Courtland Sutton', year: 2018, round: 2, pick: 40, accolades: ['Pro Bowl', '1000yd WR'] },
            { player: 'Kris Abrams-Draine', year: 2024, round: 5, pick: 145, accolades: ['Starting Nickel', '5th Round Gem'] }
        ],
        biggestMisses: [
            { player: 'Paxton Lynch', year: 2016, round: 1, pick: 26, reason: 'Traded up, out in 2 years' },
            { player: 'Garett Bolles', year: 2017, round: 1, pick: 20, reason: 'Penalty machine early' },
            { player: 'Shane Ray', year: 2015, round: 1, pick: 23, reason: '1 sack total' }
        ],
        gradeTrend: [2.8, 3.2, 3.5, 4.0, 3.6, 3.8, 4.2, 4.0, 3.5, 4.2]
    },

    raiders: {
        code: 'LV', name: 'Las Vegas Raiders',
        colors: { primary: '#000000', secondary: '#A5ACAF' },
        franchiseInfo: { established: 1960, location: 'Las Vegas', championships: 3 },
        performance: { hitRate: 0.42, avgPickValue: 3.2, proBowlers: 12, allPros: 4, grade: 'B-', leagueRank: 18 },
        tendencies: { mostDraftedPosition: 'EDGE', tradeFrequency: 3.2, bestRound: 3 },
        drafts: {
            2025: [{ round: 1, pick: 6, player: 'Ashton Jeanty', position: 'RB', school: 'Boise State', grade: 'B' }, { round: 2, pick: 37, player: 'Darius Alexander', position: 'DL', school: 'UTSA', grade: 'C+' }],
            2024: [{ round: 1, pick: 13, player: 'Brock Bowers', position: 'TE', school: 'Georgia', grade: 'A+' }, { round: 2, pick: 44, player: 'Jackson Powers-Johnson', position: 'C', school: 'Oregon', grade: 'A-' }],
            2023: [{ round: 1, pick: 7, player: 'Tyree Wilson', position: 'EDGE', school: 'Texas Tech', grade: 'B-' }],
            2022: [{ round: 1, pick: 22, player: 'Gannon Stoops', position: 'G', school: 'Tulsa', grade: 'D+' }],
            2021: [{ round: 1, pick: 17, player: 'Alex Leatherwood', position: 'OT', school: 'Alabama', grade: 'F' }],
            2020: [{ round: 1, pick: 12, player: 'Henry Ruggs III', position: 'WR', school: 'Alabama', grade: 'F' }]
        },
        bestPicks: [
            { player: 'Maxx Crosby', year: 2019, round: 4, pick: 106, accolades: ['4x Pro Bowl', 'All-Pro 2021'] },
            { player: 'Josh Jacobs', year: 2019, round: 1, pick: 24, accolades: ['2x Pro Bowl', 'Rushing Leader 2022'] },
            { player: 'Kolton Miller', year: 2018, round: 1, pick: 15, accolades: ['Franchise LT', 'Solid Starter'] },
            { player: 'Brock Bowers', year: 2024, round: 1, pick: 13, accolades: ['1000yd Rookie TE', 'Dynamic Weapon'] }
        ],
        biggestMisses: [
            { player: 'Clelin Ferrell', year: 2019, round: 1, pick: 4, reason: '8 sacks in 4 years' },
            { player: 'Damon Arnette', year: 2020, round: 1, pick: 19, reason: 'Cut after 2 seasons' },
            { player: 'Alex Leatherwood', year: 2021, round: 1, pick: 17, reason: 'Cut in Year 2' },
            { player: 'Henry Ruggs III', year: 2020, round: 1, pick: 12, reason: 'Off-field tragedy' }
        ],
        gradeTrend: [1.5, 2.8, 3.5, 2.0, 3.8, 3.2, 3.0, 4.5, 3.2, 3.6]
    },

    // NFC NORTH
    packers: {
        code: 'GB', name: 'Green Bay Packers',
        colors: { primary: '#203731', secondary: '#FFB612' },
        franchiseInfo: { established: 1919, location: 'Green Bay', championships: 13 },
        performance: { hitRate: 0.52, avgPickValue: 3.5, proBowlers: 20, allPros: 8, grade: 'A-', leagueRank: 3 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.3, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 23, player: 'Donovan Jackson', position: 'IOL', school: 'Ohio State', grade: 'B+' }],
            2024: [{ round: 1, pick: 25, player: 'Jordan Morgan', position: 'OT', school: 'Arizona', grade: 'B+' }],
            2023: [{ round: 1, pick: 13, player: 'Lukas Van Ness', position: 'EDGE', school: 'Iowa', grade: 'B+' }],
            2022: [{ round: 1, pick: 22, player: 'Quay Walker', position: 'LB', school: 'Georgia', grade: 'B+' }],
            2021: [{ round: 1, pick: 29, player: 'Eric Stokes', position: 'CB', school: 'Georgia', grade: 'B' }],
            2020: [{ round: 1, pick: 26, player: 'Jordan Love', position: 'QB', school: 'Utah State', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Aaron Rodgers', year: 2005, round: 1, pick: 24, accolades: ['4x MVP', 'SB Champ', 'HOF Lock'] },
            { player: 'Jaire Alexander', year: 2018, round: 1, pick: 18, accolades: ['3x Pro Bowl', 'All-Pro', 'Elite CB'] },
            { player: 'Elgton Jenkins', year: 2019, round: 2, pick: 44, accolades: ['All-Pro', 'Pro Bowl', 'Versatile OL'] },
            { player: 'Jordan Love', year: 2020, round: 1, pick: 26, accolades: ['Franchise QB', 'Elite Development'] }
        ],
        biggestMisses: [
            { player: 'Justin Harrell', year: 2007, round: 1, pick: 16, reason: 'Never healthy' },
            { player: 'Derek Sherrod', year: 2011, round: 1, pick: 32, reason: 'Leg injury ended career' },
            { player: 'Nick Perry', year: 2012, round: 1, pick: 28, reason: 'Never elite rusher' }
        ],
        gradeTrend: [4.2, 3.5, 3.8, 3.6, 3.9, 3.7, 4.0, 4.2, 3.8, 4.0]
    },

    lions: {
        code: 'DET', name: 'Detroit Lions',
        colors: { primary: '#0076B6', secondary: '#B0B7BC' },
        franchiseInfo: { established: 1930, location: 'Detroit', championships: 4 },
        performance: { hitRate: 0.48, avgPickValue: 3.4, proBowlers: 15, allPros: 6, grade: 'B+', leagueRank: 7 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 1.9, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 28, player: 'Luther Burden III', position: 'WR', school: 'Missouri', grade: 'B+' }],
            2024: [{ round: 1, pick: 24, player: 'Terrion Arnold', position: 'CB', school: 'Alabama', grade: 'A-' }, { round: 2, pick: 61, player: 'Ennis Rakestraw Jr.', position: 'CB', school: 'Missouri', grade: 'A' }],
            2023: [{ round: 1, pick: 12, player: 'Jahmyr Gibbs', position: 'RB', school: 'Alabama', grade: 'B+' }],
            2022: [{ round: 1, pick: 12, player: 'Jameson Williams', position: 'WR', school: 'Alabama', grade: 'B' }],
            2021: [{ round: 1, pick: 7, player: 'Penei Sewell', position: 'OT', school: 'Oregon', grade: 'A+' }],
            2020: [{ round: 3, pick: 67, player: 'Jonah Jackson', position: 'G', school: 'Ohio State', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Penei Sewell', year: 2021, round: 1, pick: 7, accolades: ['2x All-Pro', '3x Pro Bowl', 'Best RT'] },
            { player: 'Amon-Ra St. Brown', year: 2021, round: 4, pick: 112, accolades: ['2x Pro Bowl', '300 receptions', 'Day 3 Gem'] },
            { player: 'Frank Ragnow', year: 2018, round: 1, pick: 20, accolades: ['2x All-Pro', '3x Pro Bowl', 'Elite Center'] },
            { player: 'T.J. Hockenson', year: 2019, round: 1, pick: 8, accolades: ['2x Pro Bowl', 'Traded for 2nd', 'Elite TE'] }
        ],
        biggestMisses: [
            { player: 'Charles Rogers', year: 2003, round: 1, pick: 2, reason: 'Drugs and injuries' },
            { player: 'Joey Harrington', year: 2002, round: 1, pick: 3, reason: 'Failed franchise QB' },
            { player: 'Mike Williams', year: 2005, round: 1, pick: 10, reason: 'Out of shape, 3 teams' },
            { player: 'Jahvid Best', year: 2010, round: 1, pick: 30, reason: 'Concussions ended career' }
        ],
        gradeTrend: [3.0, 2.5, 3.8, 4.2, 4.5, 4.0, 3.8, 4.5, 4.2, 4.3]
    },

    bears: {
        code: 'CHI', name: 'Chicago Bears',
        colors: { primary: '#0B162A', secondary: '#C83803' },
        franchiseInfo: { established: 1920, location: 'Chicago', championships: 9 },
        performance: { hitRate: 0.39, avgPickValue: 2.9, proBowlers: 13, allPros: 5, grade: 'C+', leagueRank: 25 },
        tendencies: { mostDraftedPosition: 'LB', tradeFrequency: 2.1, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 10, player: 'Will Johnson', position: 'CB', school: 'Michigan', grade: 'A-' }, { round: 2, pick: 41, player: 'TreVeyon Henderson', position: 'RB', school: 'Ohio State', grade: 'A' }],
            2024: [{ round: 1, pick: 1, player: 'Caleb Williams', position: 'QB', school: 'USC', grade: 'A' }, { round: 1, pick: 9, player: 'Rome Odunze', position: 'WR', school: 'Washington', grade: 'A' }],
            2023: [{ round: 1, pick: 10, player: 'Darnell Wright', position: 'OT', school: 'Tennessee', grade: 'A-' }],
            2022: [{ round: 2, pick: 39, player: 'Kyler Gordon', position: 'CB', school: 'Washington', grade: 'B+' }],
            2021: [{ round: 1, pick: 11, player: 'Justin Fields', position: 'QB', school: 'Ohio State', grade: 'B' }],
            2020: [{ round: 2, pick: 43, player: 'Jaylon Johnson', position: 'CB', school: 'Utah', grade: 'A-' }]
        },
        bestPicks: [
            { player: 'Jaylon Johnson', year: 2020, round: 2, pick: 50, accolades: ['CB1', 'Extended', 'Day 2 Steal'] },
            { player: 'Darnell Mooney', year: 2020, round: 5, pick: 173, accolades: ['1000yd WR', 'Day 3 Gem'] },
            { player: 'Eddie Jackson', year: 2017, round: 4, pick: 112, accolades: ['All-Pro', 'Pro Bowl', 'Ball Hawk'] }
        ],
        biggestMisses: [
            { player: 'Mitch Trubisky', year: 2017, round: 1, pick: 2, reason: 'Passed on Mahomes/Watson' },
            { player: 'Leonard Floyd', year: 2016, round: 1, pick: 9, reason: 'Good not great' },
            { player: 'Kevin White', year: 2015, round: 1, pick: 7, reason: 'Never healthy' },
            { player: 'Gabe Carimi', year: 2011, round: 1, pick: 29, reason: 'Lasted 2 years' }
        ],
        gradeTrend: [2.5, 3.0, 2.8, 3.5, 4.0, 3.2, 3.8, 4.5, 4.0, 4.2]
    },

    vikings: {
        code: 'MIN', name: 'Minnesota Vikings',
        colors: { primary: '#4F2683', secondary: '#FFC62F' },
        franchiseInfo: { established: 1961, location: 'Minneapolis', championships: 0 },
        performance: { hitRate: 0.46, avgPickValue: 3.2, proBowlers: 16, allPros: 6, grade: 'B', leagueRank: 13 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 2.2, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 24, player: 'Jaxson Dart', position: 'QB', school: 'Ole Miss', grade: 'B+' }],
            2024: [{ round: 1, pick: 10, player: 'J.J. McCarthy', position: 'QB', school: 'Michigan', grade: 'B+' }, { round: 1, pick: 17, player: 'Dallas Turner', position: 'EDGE', school: 'Alabama', grade: 'A-' }],
            2023: [{ round: 1, pick: 23, player: 'Jordan Addison', position: 'WR', school: 'USC', grade: 'A' }],
            2022: [{ round: 1, pick: 32, player: 'Lewis Cine', position: 'S', school: 'Georgia', grade: 'C' }],
            2021: [{ round: 1, pick: 23, player: 'Christian Darrisaw', position: 'OT', school: 'Virginia Tech', grade: 'A' }],
            2020: [{ round: 1, pick: 22, player: 'Justin Jefferson', position: 'WR', school: 'LSU', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Justin Jefferson', year: 2020, round: 1, pick: 22, accolades: ['4x Pro Bowl', '3x All-Pro', 'Best WR in NFL'] },
            { player: 'Christian Darrisaw', year: 2021, round: 1, pick: 23, accolades: ['All-Pro', 'Pro Bowl', 'Elite LT'] },
            { player: 'Dalvin Cook', year: 2017, round: 2, pick: 41, accolades: ['4x Pro Bowl', 'Elite RB'] },
            { player: 'Adam Thielen', year: 2014, round: 0, pick: 0, accolades: ['UDFA Gem', '2x Pro Bowl', '1000yd WR'] }
        ],
        biggestMisses: [
            { player: 'Christian Ponder', year: 2011, round: 1, pick: 12, reason: 'Traded up for average QB' },
            { player: 'Jeff Gladney', year: 2020, round: 1, pick: 31, reason: 'Off-field issues' },
            { player: 'Teddy Bridgewater', year: 2014, round: 1, pick: 32, reason: 'Injury cut short' }
        ],
        gradeTrend: [3.0, 4.8, 3.5, 3.0, 4.2, 3.8, 3.5, 4.5, 4.0, 3.8]
    },

    // NFC SOUTH
    buccaneers: {
        code: 'TB', name: 'Tampa Bay Buccaneers',
        colors: { primary: '#5A1414', secondary: '#FFB612' },
        franchiseInfo: { established: 1976, location: 'Tampa Bay', championships: 2 },
        performance: { hitRate: 0.45, avgPickValue: 3.1, proBowlers: 14, allPros: 5, grade: 'B-', leagueRank: 21 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.0, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 19, player: 'Emeka Egbuka', position: 'WR', school: 'Ohio State', grade: 'B+' }],
            2024: [{ round: 1, pick: 26, player: 'Graham Barton', position: 'C', school: 'Duke', grade: 'A-' }],
            2023: [{ round: 1, pick: 19, player: 'Calijah Kancey', position: 'DL', school: 'Pittsburgh', grade: 'B+' }],
            2022: [{ round: 1, pick: 27, player: 'Logan Hall', position: 'DL', school: 'Houston', grade: 'B-' }],
            2021: [{ round: 1, pick: 32, player: 'Joe Tryon-Shoyinka', position: 'EDGE', school: 'Washington', grade: 'B-' }],
            2020: [{ round: 1, pick: 13, player: 'Tristan Wirfs', position: 'OT', school: 'Iowa', grade: 'A+' }, { round: 2, pick: 45, player: 'Antoine Winfield Jr.', position: 'S', school: 'Minnesota', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Tristan Wirfs', year: 2020, round: 1, pick: 13, accolades: ['3x All-Pro', '4x Pro Bowl', 'Elite RT'] },
            { player: 'Antoine Winfield Jr.', year: 2020, round: 2, pick: 45, accolades: ['All-Pro', 'Pro Bowl', 'Elite Safety'] },
            { player: 'Chris Godwin', year: 2017, round: 3, pick: 84, accolades: ['Pro Bowl', '1000yd WR', 'SB Champ'] },
            { player: 'Mike Evans', year: 2014, round: 1, pick: 7, accolades: ['4x Pro Bowl', 'SB Champ', '1000yd every season'] }
        ],
        biggestMisses: [
            { player: 'Roberto Aguayo', year: 2016, round: 2, pick: 59, reason: 'Traded UP for kicker, cut Year 2' },
            { player: 'Vernon Hargreaves', year: 2016, round: 1, pick: 11, reason: 'Cut after 3 seasons' },
            { player: 'Josh Freeman', year: 2009, round: 1, pick: 17, reason: 'Flashed early, drug issues' }
        ],
        gradeTrend: [4.5, 4.2, 3.0, 3.2, 3.5, 3.8, 3.6, 4.5, 4.0, 3.7]
    },

    saints: {
        code: 'NO', name: 'New Orleans Saints',
        colors: { primary: '#101820', secondary: '#D3BC8D' },
        franchiseInfo: { established: 1967, location: 'New Orleans', championships: 1 },
        performance: { hitRate: 0.44, avgPickValue: 3.2, proBowlers: 16, allPros: 6, grade: 'B', leagueRank: 12 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.4, bestRound: 3 },
        drafts: {
            2025: [{ round: 1, pick: 9, player: 'Kenneth Grant', position: 'DL', school: 'Michigan', grade: 'A-' }],
            2024: [{ round: 1, pick: 14, player: 'Taliese Fuaga', position: 'OT', school: 'Oregon State', grade: 'A' }],
            2023: [{ round: 1, pick: 29, player: 'Bryan Bresee', position: 'DL', school: 'Clemson', grade: 'B+' }],
            2022: [{ round: 1, pick: 11, player: 'Chris Olave', position: 'WR', school: 'Ohio State', grade: 'A-' }],
            2021: [{ round: 1, pick: 28, player: 'Payton Turner', position: 'EDGE', school: 'Houston', grade: 'C+' }],
            2020: [{ round: 1, pick: 24, player: 'Cesar Ruiz', position: 'C', school: 'Michigan', grade: 'B' }]
        },
        bestPicks: [
            { player: 'Chris Olave', year: 2022, round: 1, pick: 11, accolades: ['1000+ yards both seasons', 'WR1'] },
            { player: 'Alvin Kamara', year: 2017, round: 3, pick: 67, accolades: ['5x Pro Bowl', 'All-Pro', 'Dual Threat'] },
            { player: 'Marshon Lattimore', year: 2017, round: 1, pick: 11, accolades: ['DROY', '4x Pro Bowl', 'Elite CB'] },
            { player: 'Michael Thomas', year: 2016, round: 2, pick: 47, accolades: ['2x All-Pro', 'Record Breaker'] }
        ],
        biggestMisses: [
            { player: 'Rick Meier', year: 1981, round: 1, pick: 12, reason: 'Traded up, never panned out' },
            { player: 'Johnathan Sullivan', year: 2003, round: 1, pick: 6, reason: 'Traded up for 1.5 sacks' },
            { player: 'Payton Turner', year: 2021, round: 1, pick: 28, reason: 'Reach - injuries' }
        ],
        gradeTrend: [3.2, 3.5, 3.8, 3.2, 3.0, 3.5, 3.8, 4.0, 3.5, 3.8]
    },

    falcons: {
        code: 'ATL', name: 'Atlanta Falcons',
        colors: { primary: '#000000', secondary: '#A71930' },
        franchiseInfo: { established: 1966, location: 'Atlanta', championships: 0 },
        performance: { hitRate: 0.41, avgPickValue: 3.0, proBowlers: 14, allPros: 5, grade: 'C+', leagueRank: 26 },
        tendencies: { mostDraftedPosition: 'WR', tradeFrequency: 1.8, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 15, player: 'Jahdae Barron', position: 'CB', school: 'Texas', grade: 'B+' }],
            2024: [{ round: 1, pick: 8, player: 'Michael Penix Jr.', position: 'QB', school: 'Washington', grade: 'B' }],
            2023: [{ round: 1, pick: 8, player: 'Bijan Robinson', position: 'RB', school: 'Texas', grade: 'B+' }],
            2022: [{ round: 1, pick: 8, player: 'Drake London', position: 'WR', school: 'USC', grade: 'B+' }],
            2021: [{ round: 1, pick: 4, player: 'Kyle Pitts', position: 'TE', school: 'Florida', grade: 'B' }],
            2020: [{ round: 1, pick: 16, player: 'A.J. Terrell', position: 'CB', school: 'Clemson', grade: 'A-' }]
        },
        bestPicks: [
            { player: 'A.J. Terrell', year: 2020, round: 1, pick: 16, accolades: ['All-Pro', 'Elite CB'] },
            { player: 'Grady Jarrett', year: 2015, round: 5, pick: 137, accolades: ['2x Pro Bowl', '5th Round Gem'] },
            { player: 'Julio Jones', year: 2011, round: 1, pick: 6, accolades: ['7x Pro Bowl', '2x All-Pro', 'Legend'] },
            { player: 'Matt Ryan', year: 2008, round: 1, pick: 3, accolades: ['MVP', '4x Pro Bowl', 'Franchise QB'] }
        ],
        biggestMisses: [
            { player: 'Vic Beasley', year: 2015, round: 1, pick: 8, reason: 'One good year, then nothing' },
            { player: 'Takkarist McKinley', year: 2017, round: 1, pick: 26, reason: 'Traded up for 17.5 sacks' },
            { player: 'Sam Baker', year: 2008, round: 1, pick: 21, reason: 'Injury prone, never elite' }
        ],
        gradeTrend: [3.0, 3.5, 3.2, 3.0, 3.5, 3.2, 3.5, 3.8, 3.0, 3.5]
    },

    panthers: {
        code: 'CAR', name: 'Carolina Panthers',
        colors: { primary: '#0085CA', secondary: '#101820' },
        franchiseInfo: { established: 1995, location: 'Carolina', championships: 0 },
        performance: { hitRate: 0.38, avgPickValue: 2.8, proBowlers: 11, allPros: 4, grade: 'C', leagueRank: 28 },
        tendencies: { mostDraftedPosition: 'LB', tradeFrequency: 2.0, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 8, player: 'TreVeyon Henderson', position: 'RB', school: 'Ohio State', grade: 'B+' }],
            2024: [{ round: 1, pick: 32, player: 'Xavier Legette', position: 'WR', school: 'South Carolina', grade: 'B' }],
            2023: [{ round: 1, pick: 1, player: 'Bryce Young', position: 'QB', school: 'Alabama', grade: 'C' }],
            2022: [{ round: 1, pick: 6, player: 'Ikem Ekwonu', position: 'OT', school: 'NC State', grade: 'B+' }],
            2021: [{ round: 1, pick: 8, player: 'Jaycee Horn', position: 'CB', school: 'South Carolina', grade: 'B' }],
            2020: [{ round: 1, pick: 7, player: 'Derrick Brown', position: 'DL', school: 'Auburn', grade: 'A-' }]
        },
        bestPicks: [
            { player: 'Derrick Brown', year: 2020, round: 1, pick: 7, accolades: ['All-Pro', 'Pro Bowl', 'Dominant DL'] },
            { player: 'Jaycee Horn', year: 2021, round: 1, pick: 8, accolades: ['Elite CB when healthy'] },
            { player: 'Ikem Ekwonu', year: 2022, round: 1, pick: 6, accolades: ['Starting LT', 'Solid Player'] },
            { player: 'Luke Kuechly', year: 2012, round: 1, pick: 9, accolades: ['DROY', '7x Pro Bowl', '5x All-Pro', 'HOF'] }
        ],
        biggestMisses: [
            { player: 'Bryce Young', year: 2023, round: 1, pick: 1, reason: 'Traded up for struggling QB' },
            { player: 'Will Grier', year: 2019, round: 3, pick: 100, reason: '3rd round QB, out quickly' },
            { player: 'Vernon Butler', year: 2016, round: 1, pick: 30, reason: '1 career sack' }
        ],
        gradeTrend: [3.5, 3.0, 2.5, 3.2, 3.0, 2.8, 3.5, 3.2, 2.5, 3.2]
    },

    // NFC WEST
    sf49ers: {
        code: 'SF', name: 'San Francisco 49ers',
        colors: { primary: '#AA0000', secondary: '#B3995D' },
        franchiseInfo: { established: 1946, location: 'San Francisco', championships: 5 },
        performance: { hitRate: 0.51, avgPickValue: 3.5, proBowlers: 18, allPros: 7, grade: 'A-', leagueRank: 6 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.4, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 11, player: 'Caleb Downs', position: 'S', school: 'Ohio State', grade: 'A' }],
            2024: [{ round: 1, pick: 31, player: 'Ricky Pearsall', position: 'WR', school: 'Florida', grade: 'B' }],
            2023: [{ round: 3, pick: 87, player: 'Ji\'Ayir Brown', position: 'S', school: 'Penn State', grade: 'B+' }],
            2022: [{ round: 2, pick: 61, player: 'Drake Jackson', position: 'EDGE', school: 'USC', grade: 'B' }],
            2021: [{ round: 1, pick: 3, player: 'Trey Lance', position: 'QB', school: 'North Dakota State', grade: 'D' }],
            2020: [{ round: 1, pick: 14, player: 'Javon Kinlaw', position: 'DL', school: 'South Carolina', grade: 'C+' }, { round: 1, pick: 25, player: 'Brandon Aiyuk', position: 'WR', school: 'Arizona State', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Nick Bosa', year: 2019, round: 1, pick: 2, accolades: ['DROY', 'DPOY', '4x Pro Bowl', 'All-Pro'] },
            { player: 'George Kittle', year: 2017, round: 5, pick: 146, accolades: ['6x Pro Bowl', '3x All-Pro', '5th Round Gem'] },
            { player: 'Brandon Aiyuk', year: 2020, round: 1, pick: 25, accolades: ['1000yd WR', 'Elite Route Runner'] },
            { player: 'Fred Warner', year: 2018, round: 3, pick: 70, accolades: ['3x All-Pro', '4x Pro Bowl', 'Elite LB'] }
        ],
        biggestMisses: [
            { player: 'Trey Lance', year: 2021, round: 1, pick: 3, reason: 'Traded up 3 firsts for backup' },
            { player: 'Javon Kinlaw', year: 2020, round: 1, pick: 14, reason: 'Injury prone, traded for nothing' },
            { player: 'Joshua Garnett', year: 2016, round: 1, pick: 28, reason: 'Traded up for guard, out in 3 years' }
        ],
        gradeTrend: [3.8, 4.2, 3.0, 3.5, 3.2, 3.8, 3.5, 4.0, 4.2, 4.0]
    },

    seahawks: {
        code: 'SEA', name: 'Seattle Seahawks',
        colors: { primary: '#002244', secondary: '#69BE28' },
        franchiseInfo: { established: 1976, location: 'Seattle', championships: 1 },
        performance: { hitRate: 0.48, avgPickValue: 3.3, proBowlers: 17, allPros: 6, grade: 'B+', leagueRank: 9 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.1, bestRound: 5 },
        drafts: {
            2025: [{ round: 1, pick: 18, player: 'Oluwafemi Oladejo', position: 'LB', school: 'UCLA', grade: 'B+' }],
            2024: [{ round: 1, pick: 16, player: 'Byron Murphy II', position: 'DL', school: 'Texas', grade: 'A-' }],
            2023: [{ round: 1, pick: 5, player: 'Devon Witherspoon', position: 'CB', school: 'Illinois', grade: 'A' }],
            2022: [{ round: 1, pick: 9, player: 'Charles Cross', position: 'OT', school: 'Mississippi State', grade: 'B+' }],
            2021: [{ round: 2, pick: 56, player: 'Dee Eskridge', position: 'WR', school: 'Western Michigan', grade: 'C+' }],
            2020: [{ round: 1, pick: 27, player: 'Jordyn Brooks', position: 'LB', school: 'Texas Tech', grade: 'B' }]
        },
        bestPicks: [
            { player: 'DK Metcalf', year: 2019, round: 2, pick: 64, accolades: ['3x Pro Bowl', '1000+ yards', 'Physical WR'] },
            { player: 'Tyler Lockett', year: 2015, round: 3, pick: 69, accolades: ['3x Pro Bowl', '1000yd WR', '3rd Round Gem'] },
            { player: 'Richard Sherman', year: 2011, round: 5, pick: 154, accolades: ['4x Pro Bowl', '3x All-Pro', 'LOB Legend'] },
            { player: 'Devon Witherspoon', year: 2023, round: 1, pick: 5, accolades: ['DROY', 'Elite CB', 'Franchise'] }
        ],
        biggestMisses: [
            { player: 'Germain Ifedi', year: 2016, round: 1, pick: 31, reason: 'Bust at RT' },
            { player: 'Rashaad Penny', year: 2018, round: 1, pick: 27, reason: 'Injury prone, reach' },
            { player: 'L.J. Collier', year: 2019, round: 1, pick: 29, reason: '3 career sacks, massive reach' }
        ],
        gradeTrend: [3.5, 3.8, 3.2, 3.5, 3.8, 4.2, 4.5, 4.0, 3.8, 4.0]
    },

    rams: {
        code: 'LAR', name: 'Los Angeles Rams',
        colors: { primary: '#003594', secondary: '#FFD100' },
        franchiseInfo: { established: 1936, location: 'Los Angeles', championships: 2 },
        performance: { hitRate: 0.44, avgPickValue: 3.2, proBowlers: 14, allPros: 5, grade: 'B', leagueRank: 15 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 3.0, bestRound: 3 },
        drafts: {
            2025: [{ round: 1, pick: 26, player: 'Jihaad Campbell', position: 'LB', school: 'Alabama', grade: 'B+' }],
            2024: [{ round: 1, pick: 19, player: 'Jared Verse', position: 'EDGE', school: 'Florida State', grade: 'A' }, { round: 2, pick: 39, player: 'Braden Fiske', position: 'DL', school: 'Florida State', grade: 'A-' }],
            2023: [{ round: 2, pick: 36, player: 'Steve Avila', position: 'G', school: 'TCU', grade: 'A-' }],
            2022: [{ round: 3, pick: 104, player: 'Logan Bruss', position: 'G', school: 'Wisconsin', grade: 'C' }],
            2021: [{ round: 2, pick: 57, player: 'Tutu Atwell', position: 'WR', school: 'Louisville', grade: 'B' }],
            2020: [{ round: 2, pick: 52, player: 'Cam Akers', position: 'RB', school: 'Florida State', grade: 'B-' }]
        },
        bestPicks: [
            { player: 'Cooper Kupp', year: 2017, round: 3, pick: 69, accolades: ['Triple Crown', 'SB MVP', '3rd Round Gem'] },
            { player: 'Aaron Donald', year: 2014, round: 1, pick: 13, accolades: ['3x DPOY', '10x Pro Bowl', 'GOAT DL'] },
            { player: 'Kyren Williams', year: 2022, round: 5, pick: 164, accolades: ['1000yd RB', '5th Round Gem'] },
            { player: 'Puka Nacua', year: 2023, round: 5, pick: 177, accolades: ['Rookie Record', '5th Round Gem'] }
        ],
        biggestMisses: [
            { player: 'Tavon Austin', year: 2013, round: 1, pick: 8, reason: 'Traded up for gadget player' },
            { player: 'Greg Robinson', year: 2014, round: 1, pick: 2, reason: '#2 overall bust LT' },
            { player: 'Darrell Henderson', year: 2019, round: 3, pick: 70, reason: 'Never became RB1' }
        ],
        gradeTrend: [3.0, 3.5, 3.2, 3.8, 3.5, 4.2, 3.8, 4.5, 4.0, 3.8]
    },

    cardinals: {
        code: 'ARI', name: 'Arizona Cardinals',
        colors: { primary: '#97233F', secondary: '#000000' },
        franchiseInfo: { established: 1898, location: 'Arizona', championships: 2 },
        performance: { hitRate: 0.40, avgPickValue: 2.9, proBowlers: 12, allPros: 4, grade: 'C+', leagueRank: 23 },
        tendencies: { mostDraftedPosition: 'CB', tradeFrequency: 2.2, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 3, player: 'Will Campbell', position: 'OT', school: 'LSU', grade: 'A-' }],
            2024: [{ round: 1, pick: 4, player: 'Marvin Harrison Jr.', position: 'WR', school: 'Ohio State', grade: 'A+' }],
            2023: [{ round: 1, pick: 6, player: 'Paris Johnson Jr.', position: 'OT', school: 'Ohio State', grade: 'B+' }],
            2022: [{ round: 1, pick: 23, player: 'Zaven Collins', position: 'LB', school: 'Tulsa', grade: 'C+' }],
            2021: [{ round: 1, pick: 16, player: 'Zaven Collins', position: 'LB', school: 'Tulsa', grade: 'C+' }],
            2020: [{ round: 1, pick: 8, player: 'Isaiah Simmons', position: 'LB', school: 'Clemson', grade: 'B' }]
        },
        bestPicks: [
            { player: 'Kyler Murray', year: 2019, round: 1, pick: 1, accolades: ['ROY', 'Pro Bowl', 'Extended'] },
            { player: 'Budda Baker', year: 2017, round: 2, pick: 36, accolades: ['5x Pro Bowl', 'All-Pro', 'Elite Safety'] },
            { player: 'DeAndre Hopkins', year: 2020, round: 0, pick: 0, accolades: ['Trade', '3x All-Pro', 'Elite WR'] },
            { player: 'Trey McBride', year: 2022, round: 2, pick: 55, accolades: ['All-Pro 2024', 'Elite TE'] }
        ],
        biggestMisses: [
            { player: 'Josh Rosen', year: 2018, round: 1, pick: 10, reason: 'Traded after 1 year' },
            { player: 'Robert Nkemdiche', year: 2016, round: 1, pick: 29, reason: 'Off-field issues, cut' },
            { player: 'Jonathan Cooper', year: 2013, round: 1, pick: 7, reason: 'Injury bust, traded' }
        ],
        gradeTrend: [2.8, 3.0, 3.2, 3.0, 3.5, 2.8, 3.0, 4.2, 3.5, 3.8]
    },

    // NFC EAST
    cowboys: {
        code: 'DAL', name: 'Dallas Cowboys',
        colors: { primary: '#003594', secondary: '#869397' },
        franchiseInfo: { established: 1960, location: 'Dallas', championships: 5 },
        performance: { hitRate: 0.49, avgPickValue: 3.4, proBowlers: 18, allPros: 7, grade: 'A-', leagueRank: 1 },
        tendencies: { mostDraftedPosition: 'OL', tradeFrequency: 1.8, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 12, player: 'Donovan Jackson', position: 'IOL', school: 'Ohio State', grade: 'B+' }, { round: 2, pick: 44, player: 'Landon Jackson', position: 'EDGE', school: 'Arkansas', grade: 'B+' }],
            2024: [{ round: 1, pick: 29, player: 'Tyler Guyton', position: 'OT', school: 'Oklahoma', grade: 'B+' }, { round: 2, pick: 56, player: 'Marshawn Kneeland', position: 'EDGE', school: 'Western Michigan', grade: 'B' }],
            2023: [{ round: 1, pick: 26, player: 'Mazi Smith', position: 'DL', school: 'Michigan', grade: 'C+' }],
            2022: [{ round: 1, pick: 24, player: 'Tyler Smith', position: 'G', school: 'Tulsa', grade: 'A' }],
            2021: [{ round: 1, pick: 12, player: 'Micah Parsons', position: 'LB', school: 'Penn State', grade: 'A+' }],
            2020: [{ round: 1, pick: 17, player: 'CeeDee Lamb', position: 'WR', school: 'Oklahoma', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Micah Parsons', year: 2021, round: 1, pick: 12, accolades: ['DROY', '3x All-Pro', '3x Pro Bowl', 'DPOY Candidate'] },
            { player: 'CeeDee Lamb', year: 2020, round: 1, pick: 17, accolades: ['3x Pro Bowl', '2x All-Pro', 'Triple Crown 2023'] },
            { player: 'Dak Prescott', year: 2016, round: 4, pick: 135, accolades: ['4x Pro Bowl', 'Franchise QB', '4th Round Gem'] },
            { player: 'Tyler Smith', year: 2022, round: 1, pick: 24, accolades: ['All-Pro', 'Elite Guard'] }
        ],
        biggestMisses: [
            { player: 'Taco Charlton', year: 2017, round: 1, pick: 28, reason: '3 sacks with Cowboys' },
            { player: 'Ezekiel Elliott', year: 2016, round: 1, pick: 4, reason: 'Overdrafted - Great early, declined' },
            { player: 'Gavin Escobar', year: 2013, round: 2, pick: 47, reason: '2nd round TE, 4 career TDs' }
        ],
        gradeTrend: [3.5, 3.8, 4.0, 4.5, 4.8, 3.5, 4.2, 4.5, 3.8, 4.0]
    },

    eagles: {
        code: 'PHI', name: 'Philadelphia Eagles',
        colors: { primary: '#004C54', secondary: '#A5ACAF' },
        franchiseInfo: { established: 1933, location: 'Philadelphia', championships: 2 },
        performance: { hitRate: 0.53, avgPickValue: 3.6, proBowlers: 19, allPros: 8, grade: 'A', leagueRank: 2 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.3, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 32, player: 'Jihaad Campbell', position: 'LB', school: 'Alabama', grade: 'B+' }, { round: 2, pick: 64, player: 'TreVeyon Henderson', position: 'RB', school: 'Ohio State', grade: 'A-' }],
            2024: [{ round: 1, pick: 22, player: 'Quinyon Mitchell', position: 'CB', school: 'Toledo', grade: 'A' }, { round: 2, pick: 40, player: 'Cooper DeJean', position: 'CB', school: 'Iowa', grade: 'A' }],
            2023: [{ round: 1, pick: 9, player: 'Jalen Carter', position: 'DL', school: 'Georgia', grade: 'A-' }, { round: 1, pick: 30, player: 'Nolan Smith', position: 'EDGE', school: 'Georgia', grade: 'B+' }],
            2022: [{ round: 1, pick: 13, player: 'Jordan Davis', position: 'DL', school: 'Georgia', grade: 'B+' }, { round: 2, pick: 51, player: 'Cam Jurgens', position: 'C', school: 'Nebraska', grade: 'A' }],
            2021: [{ round: 1, pick: 10, player: 'DeVonta Smith', position: 'WR', school: 'Alabama', grade: 'A' }, { round: 3, pick: 70, player: 'Milton Williams', position: 'DL', school: 'Louisiana Tech', grade: 'B+' }],
            2020: [{ round: 1, pick: 21, player: 'Jalen Reagor', position: 'WR', school: 'TCU', grade: 'F' }, { round: 2, pick: 53, player: 'Jalen Hurts', position: 'QB', school: 'Oklahoma', grade: 'A+' }]
        },
        bestPicks: [
            { player: 'Jalen Hurts', year: 2020, round: 2, pick: 53, accolades: ['MVP 2022', 'SB LVII Appearance', 'Elite QB', '2nd Round Gem'] },
            { player: 'DeVonta Smith', year: 2021, round: 1, pick: 10, accolades: ['3x 1000yd', 'Elite Route Runner'] },
            { player: 'Lane Johnson', year: 2013, round: 1, pick: 4, accolades: ['4x All-Pro', '6x Pro Bowl', 'Elite RT'] },
            { player: 'Jason Kelce', year: 2011, round: 6, pick: 191, accolades: ['SB Champ', '6x All-Pro', '7x Pro Bowl', 'HOF Lock'] }
        ],
        biggestMisses: [
            { player: 'Jalen Reagor', year: 2020, round: 1, pick: 21, reason: 'Passed on Justin Jefferson' },
            { player: 'Andre Dillard', year: 2019, round: 1, pick: 22, reason: 'Bust OT, traded for 5th' },
            { player: 'Danny Watkins', year: 2011, round: 1, pick: 23, reason: '26-year-old fireman, bust' }
        ],
        gradeTrend: [2.8, 4.5, 4.0, 4.2, 4.5, 4.8, 3.5, 4.2, 4.5, 4.0]
    },

    commanders: {
        code: 'WAS', name: 'Washington Commanders',
        colors: { primary: '#773141', secondary: '#FFB612' },
        franchiseInfo: { established: 1932, location: 'Washington', championships: 3 },
        performance: { hitRate: 0.42, avgPickValue: 3.0, proBowlers: 13, allPros: 4, grade: 'C+', leagueRank: 22 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.0, bestRound: 2 },
        drafts: {
            2025: [{ round: 1, pick: 29, player: 'Donovan Jackson', position: 'IOL', school: 'Ohio State', grade: 'B+' }, { round: 2, pick: 61, player: 'Kaleb Johnson', position: 'RB', school: 'Iowa', grade: 'A-' }],
            2024: [{ round: 1, pick: 2, player: 'Jayden Daniels', position: 'QB', school: 'LSU', grade: 'A' }, { round: 2, pick: 36, player: 'Johnny Newton', position: 'DL', school: 'Illinois', grade: 'A-' }],
            2023: [{ round: 1, pick: 16, player: 'Emmanuel Forbes', position: 'CB', school: 'Mississippi State', grade: 'D+' }],
            2022: [{ round: 1, pick: 16, player: 'Jahan Dotson', position: 'WR', school: 'Penn State', grade: 'B' }],
            2021: [{ round: 1, pick: 19, player: 'Jamin Davis', position: 'LB', school: 'Kentucky', grade: 'C+' }],
            2020: [{ round: 1, pick: 2, player: 'Chase Young', position: 'EDGE', school: 'Ohio State', grade: 'B+' }]
        },
        bestPicks: [
            { player: 'Jayden Daniels', year: 2024, round: 1, pick: 2, accolades: ['ROY', 'Playoff Win', 'Dual Threat'] },
            { player: 'Terry McLaurin', year: 2019, round: 3, pick: 76, accolades: ['3x 1000yd', 'Elite WR', '3rd Round Gem'] },
            { player: 'Kamren Curl', year: 2020, round: 7, pick: 216, accolades: ['Starting Safety', '7th Round Gem'] },
            { player: 'Chase Young', year: 2020, round: 1, pick: 2, accolades: ['DROY', 'Pro Bowl', 'Elite when healthy'] }
        ],
        biggestMisses: [
            { player: 'Dwayne Haskins', year: 2019, round: 1, pick: 15, reason: 'Traded up for bust' },
            { player: 'Emmanuel Forbes', year: 2023, round: 1, pick: 16, reason: 'Too small, benched' },
            { player: 'Ereck Flowers', year: 2015, round: 1, pick: 9, reason: 'Bust OT, converted to guard' }
        ],
        gradeTrend: [3.0, 3.5, 3.2, 3.0, 2.5, 3.8, 4.5, 3.5, 4.0, 3.8]
    },

    giants: {
        code: 'NYG', name: 'New York Giants',
        colors: { primary: '#0B2265', secondary: '#A71930' },
        franchiseInfo: { established: 1925, location: 'New York', championships: 4 },
        performance: { hitRate: 0.39, avgPickValue: 2.9, proBowlers: 12, allPros: 4, grade: 'C+', leagueRank: 25 },
        tendencies: { mostDraftedPosition: 'DL', tradeFrequency: 2.1, bestRound: 1 },
        drafts: {
            2025: [{ round: 1, pick: 3, player: 'Fernando Mendoza', position: 'QB', school: 'Indiana', grade: 'A' }, { round: 2, pick: 34, player: 'Carnell Tate', position: 'WR', school: 'Ohio State', grade: 'A' }],
            2024: [{ round: 1, pick: 6, player: 'Malik Nabers', position: 'WR', school: 'LSU', grade: 'A' }, { round: 2, pick: 47, player: 'Tyler Nubin', position: 'S', school: 'Minnesota', grade: 'B+' }],
            2023: [{ round: 1, pick: 24, player: 'Deonte Banks', position: 'CB', school: 'Maryland', grade: 'B' }],
            2022: [{ round: 1, pick: 5, player: 'Kayvon Thibodeaux', position: 'EDGE', school: 'Oregon', grade: 'A-' }, { round: 1, pick: 7, player: 'Evan Neal', position: 'OT', school: 'Alabama', grade: 'C+' }],
            2021: [{ round: 1, pick: 20, player: 'Kadarius Toney', position: 'WR', school: 'Florida', grade: 'D+' }],
            2020: [{ round: 1, pick: 4, player: 'Andrew Thomas', position: 'OT', school: 'Georgia', grade: 'A' }]
        },
        bestPicks: [
            { player: 'Andrew Thomas', year: 2020, round: 1, pick: 4, accolades: ['All-Pro', 'Pro Bowl', 'Elite LT'] },
            { player: 'Kayvon Thibodeaux', year: 2022, round: 1, pick: 5, accolades: ['11.5 sacks 2023', 'Elite EDGE'] },
            { player: 'Dexter Lawrence', year: 2019, round: 1, pick: 17, accolades: ['All-Pro', 'Pro Bowl', 'Dominant DL'] },
            { player: 'Saquon Barkley', year: 2018, round: 1, pick: 2, accolades: ['ROY', '2x Pro Bowl', 'All-Pro'] }
        ],
        biggestMisses: [
            { player: 'Daniel Jones', year: 2019, round: 1, pick: 6, reason: 'Overdrafted, declined 5th year' },
            { player: 'Kadarius Toney', year: 2021, round: 1, pick: 20, reason: 'Traded for 3rd and 6th' },
            { player: 'Eli Apple', year: 2016, round: 1, pick: 10, reason: 'Attitude issues, traded' },
            { player: 'Ereck Flowers', year: 2015, round: 1, pick: 9, reason: 'Bust OT' }
        ],
        gradeTrend: [3.0, 3.2, 2.8, 2.5, 3.0, 4.0, 3.2, 4.2, 3.5, 3.8]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamDraftHistory;
}

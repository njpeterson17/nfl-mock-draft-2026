// ==========================================
// 2026 NFL COMBINE & PRO DAY DATA
// ==========================================

const combineData = {
    year: 2026,
    location: 'Indianapolis, IN',
    dates: 'Feb 27 - Mar 2, 2026',
    status: 'live',
    
    // Schedule data
    schedule: [
        { day: 1, date: 'Feb 27', dayName: 'Thursday', positions: 'QB, WR, TE', status: 'completed', groups: ['QB', 'WR', 'TE'] },
        { day: 2, date: 'Feb 28', dayName: 'Friday', positions: 'RB, OL', status: 'completed', groups: ['RB', 'OT', 'IOL'] },
        { day: 3, date: 'Mar 1', dayName: 'Saturday', positions: 'DL, LB', status: 'live', groups: ['EDGE', 'DL', 'LB'] },
        { day: 4, date: 'Mar 2', dayName: 'Sunday', positions: 'DB', status: 'upcoming', groups: ['CB', 'S'] }
    ],

    // Player data with measurements and drills
    players: [
        // QUARTERBACKS
        {
            id: 'qb001',
            name: 'Fernando Mendoza',
            position: 'QB',
            school: 'Indiana',
            height: "6'5\"",
            heightInches: 77,
            weight: 225,
            hand: 9.5,
            arm: 32.5,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.78, projected: 4.75, percentile: 65 },
                vertical: { result: 32.5, projected: 32, percentile: 70 },
                broad: { result: 116, projected: 114, percentile: 72 }, // inches
                threeCone: { result: 7.12, projected: 7.20, percentile: 75 },
                shuttle: { result: 4.35, projected: 4.40, percentile: 78 }
            },
            ras: 8.45,
            videoUrls: { forty: 'youtube.com/mendoza40', drills: 'youtube.com/mendozaDrills' },
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Slightly slower 40 than expected but strong showing in agility drills'
        },
        {
            id: 'qb002',
            name: 'Ty Simpson',
            position: 'QB',
            school: 'Alabama',
            height: "6'2\"",
            heightInches: 74,
            weight: 208,
            hand: 9.25,
            arm: 31.5,
            wingspan: 75,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.73, projected: 4.75, percentile: 72 },
                vertical: { result: 33, projected: 32, percentile: 75 },
                broad: { result: 116, projected: 114, percentile: 72 },
                threeCone: { result: 7.05, projected: 7.15, percentile: 80 },
                shuttle: { result: 4.28, projected: 4.35, percentile: 85 }
            },
            ras: 8.92,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 5,
            notes: 'Exceeded expectations in all athletic testing'
        },
        {
            id: 'qb003',
            name: 'Drew Allar',
            position: 'QB',
            school: 'Penn State',
            height: "6'5\"",
            heightInches: 77,
            weight: 235,
            hand: 10.0,
            arm: 33.5,
            wingspan: 80,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.82, projected: 4.85, percentile: 55 },
                vertical: { result: 30, projected: 29, percentile: 60 },
                broad: { result: 108, projected: 106, percentile: 58 },
                threeCone: { result: 7.35, projected: 7.40, percentile: 60 },
                shuttle: { result: 4.45, projected: 4.50, percentile: 62 }
            },
            ras: 7.25,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid but unspectacular athletic showing for his size'
        },
        {
            id: 'qb004',
            name: 'Garrett Nussmeier',
            position: 'QB',
            school: 'LSU',
            height: "6'2\"",
            heightInches: 74,
            weight: 195,
            hand: 9.0,
            arm: 30.5,
            wingspan: 73,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.68, projected: 4.70, percentile: 80 },
                vertical: { result: 34, projected: 32, percentile: 85 },
                broad: { result: 118, projected: 114, percentile: 80 },
                threeCone: { result: 7.0, projected: 7.10, percentile: 85 },
                shuttle: { result: 4.20, projected: 4.30, percentile: 90 }
            },
            ras: 9.12,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Surprising athleticism, answered size concerns with elite testing'
        },
        {
            id: 'qb005',
            name: 'Carson Beck',
            position: 'QB',
            school: 'Miami',
            height: "6'4\"",
            heightInches: 76,
            weight: 220,
            hand: 9.5,
            arm: 32,
            wingspan: 77,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.85, projected: 4.80, percentile: 50 },
                vertical: { result: 31, projected: 32, percentile: 55 },
                broad: { result: 110, projected: 112, percentile: 50 },
                threeCone: { result: 7.25, projected: 7.20, percentile: 65 },
                shuttle: { result: 4.40, projected: 4.35, percentile: 60 }
            },
            ras: 7.55,
            videoUrls: {},
            stockImpact: 'faller',
            stockChange: -3,
            notes: 'Slower than expected in 40, but adequate overall'
        },
        {
            id: 'qb006',
            name: 'Cade Klubnik',
            position: 'QB',
            school: 'Clemson',
            height: "6'2\"",
            heightInches: 74,
            weight: 210,
            hand: 9.25,
            arm: 31,
            wingspan: 74,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.65, projected: 4.65, percentile: 85 },
                vertical: { result: 35, projected: 33, percentile: 90 },
                broad: { result: 120, projected: 115, percentile: 88 },
                threeCone: { result: 6.95, projected: 7.05, percentile: 90 },
                shuttle: { result: 4.15, projected: 4.25, percentile: 92 }
            },
            ras: 9.45,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 12,
            notes: 'Elite athlete, best QB testing numbers at combine'
        },

        // RUNNING BACKS
        {
            id: 'rb001',
            name: 'Jeremiyah Love',
            position: 'RB',
            school: 'Notre Dame',
            height: "6'0\"",
            heightInches: 72,
            weight: 214,
            hand: 9.0,
            arm: 30.5,
            wingspan: 73,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.42, projected: 4.45, percentile: 90 },
                vertical: { result: 38, projected: 36, percentile: 95 },
                broad: { result: 128, projected: 120, percentile: 95 },
                threeCone: { result: 6.95, projected: 7.05, percentile: 88 },
                shuttle: { result: 4.25, projected: 4.30, percentile: 85 },
                bench: { result: 20, projected: 18, percentile: 75 }
            },
            ras: 9.87,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 3,
            notes: 'Confirmed elite athletic profile, freak numbers'
        },
        {
            id: 'rb002',
            name: 'Jadarian Price',
            position: 'RB',
            school: 'Notre Dame',
            height: "5'10\"",
            heightInches: 70,
            weight: 205,
            hand: 9.0,
            arm: 29.5,
            wingspan: 71,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.40, projected: 4.42, percentile: 92 },
                vertical: { result: 36, projected: 35, percentile: 88 },
                broad: { result: 122, projected: 118, percentile: 88 },
                threeCone: { result: 7.05, projected: 7.10, percentile: 80 },
                shuttle: { result: 4.30, projected: 4.32, percentile: 80 },
                bench: { result: 18, projected: 16, percentile: 70 }
            },
            ras: 9.45,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Blazing 40 time, answered size concerns'
        },
        {
            id: 'rb003',
            name: 'Jonah Coleman',
            position: 'RB',
            school: 'Washington',
            height: "5'9\"",
            heightInches: 69,
            weight: 210,
            hand: 9.25,
            arm: 29,
            wingspan: 70,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.55, projected: 4.55, percentile: 70 },
                vertical: { result: 34, projected: 33, percentile: 75 },
                broad: { result: 115, projected: 112, percentile: 70 },
                threeCone: { result: 7.15, projected: 7.20, percentile: 75 },
                shuttle: { result: 4.35, projected: 4.40, percentile: 75 },
                bench: { result: 22, projected: 20, percentile: 80 }
            },
            ras: 8.25,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid all-around showing, met expectations'
        },
        {
            id: 'rb004',
            name: 'Emmett Johnson',
            position: 'RB',
            school: 'Nebraska',
            height: "6'0\"",
            heightInches: 72,
            weight: 210,
            hand: 9.0,
            arm: 30,
            wingspan: 72,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.48, projected: 4.50, percentile: 82 },
                vertical: { result: 35, projected: 34, percentile: 82 },
                broad: { result: 118, projected: 115, percentile: 78 },
                threeCone: { result: 7.0, projected: 7.10, percentile: 85 },
                shuttle: { result: 4.28, projected: 4.32, percentile: 85 },
                bench: { result: 19, projected: 18, percentile: 72 }
            },
            ras: 9.15,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 6,
            notes: 'Exceeded expectations in agility drills'
        },
        {
            id: 'rb005',
            name: 'Omarion Hampton',
            position: 'RB',
            school: 'North Carolina',
            height: "5'11\"",
            heightInches: 71,
            weight: 220,
            hand: 9.5,
            arm: 30.5,
            wingspan: 73,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.52, projected: 4.52, percentile: 75 },
                vertical: { result: 35.5, projected: 34, percentile: 85 },
                broad: { result: 120, projected: 116, percentile: 82 },
                threeCone: { result: 7.10, projected: 7.15, percentile: 78 },
                shuttle: { result: 4.32, projected: 4.35, percentile: 78 },
                bench: { result: 24, projected: 22, percentile: 88 }
            },
            ras: 9.25,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 5,
            notes: 'Impressive power-speed combo for his size'
        },

        // WIDE RECEIVERS
        {
            id: 'wr001',
            name: 'Carnell Tate',
            position: 'WR',
            school: 'Ohio State',
            height: "6'3\"",
            heightInches: 75,
            weight: 195,
            hand: 9.5,
            arm: 33,
            wingspan: 79,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.43, projected: 4.45, percentile: 88 },
                vertical: { result: 36.5, projected: 35, percentile: 85 },
                broad: { result: 124, projected: 120, percentile: 88 },
                threeCone: { result: 6.85, projected: 6.95, percentile: 85 },
                shuttle: { result: 4.20, projected: 4.25, percentile: 85 },
                bench: { result: 16, projected: 14, percentile: 70 }
            },
            ras: 9.55,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 4,
            notes: 'Elite showing for his size, confirmed WR1 athleticism'
        },
        {
            id: 'wr002',
            name: 'Jordyn Tyson',
            position: 'WR',
            school: 'Arizona State',
            height: "6'2\"",
            heightInches: 74,
            weight: 200,
            hand: 9.25,
            arm: 32,
            wingspan: 77,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.48, projected: 4.50, percentile: 82 },
                vertical: { result: 35, projected: 34, percentile: 80 },
                broad: { result: 122, projected: 118, percentile: 82 },
                threeCone: { result: 6.90, projected: 7.00, percentile: 82 },
                shuttle: { result: 4.25, projected: 4.30, percentile: 80 },
                bench: { result: 15, projected: 14, percentile: 68 }
            },
            ras: 8.95,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid all-around workout'
        },
        {
            id: 'wr003',
            name: 'Makai Lemon',
            position: 'WR',
            school: 'USC',
            height: "5'11\"",
            heightInches: 71,
            weight: 190,
            hand: 9.0,
            arm: 30.5,
            wingspan: 73,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.38, projected: 4.40, percentile: 95 },
                vertical: { result: 37, projected: 35, percentile: 90 },
                broad: { result: 126, projected: 120, percentile: 92 },
                threeCone: { result: 6.75, projected: 6.85, percentile: 95 },
                shuttle: { result: 4.10, projected: 4.18, percentile: 95 },
                bench: { result: 14, projected: 12, percentile: 65 }
            },
            ras: 9.75,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 10,
            notes: 'Elite quickness and change of direction'
        },
        {
            id: 'wr004',
            name: 'Zachariah Branch',
            position: 'WR',
            school: 'Georgia',
            height: "5'10\"",
            heightInches: 70,
            weight: 180,
            hand: 8.75,
            arm: 29.5,
            wingspan: 71,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.35, projected: 4.38, percentile: 98 },
                vertical: { result: 40, projected: 37, percentile: 98 },
                broad: { result: 134, projected: 125, percentile: 98 },
                threeCone: { result: 6.70, projected: 6.80, percentile: 98 },
                shuttle: { result: 4.05, projected: 4.15, percentile: 98 },
                bench: { result: 12, projected: 10, percentile: 50 }
            },
            ras: 9.92,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 15,
            notes: 'Absolute FREAK. Fastest 40, highest vert, best overall'
        },
        {
            id: 'wr005',
            name: 'Denzel Boston',
            position: 'WR',
            school: 'North Dakota State',
            height: "6'4\"",
            heightInches: 76,
            weight: 209,
            hand: 9.5,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.50, projected: 4.52, percentile: 75 },
                vertical: { result: 35.5, projected: 34, percentile: 82 },
                broad: { result: 120, projected: 115, percentile: 78 },
                threeCone: { result: 7.00, projected: 7.10, percentile: 75 },
                shuttle: { result: 4.30, projected: 4.35, percentile: 75 },
                bench: { result: 18, projected: 16, percentile: 80 }
            },
            ras: 8.65,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Good showing for size, surprised with speed'
        },
        {
            id: 'wr006',
            name: 'Ja\'Kobi Lane',
            position: 'WR',
            school: 'USC',
            height: "6'5\"",
            heightInches: 77,
            weight: 215,
            hand: 9.75,
            arm: 34,
            wingspan: 83,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.58, projected: 4.60, percentile: 65 },
                vertical: { result: 34, projected: 33, percentile: 75 },
                broad: { result: 118, projected: 114, percentile: 72 },
                threeCone: { result: 7.15, projected: 7.25, percentile: 68 },
                shuttle: { result: 4.40, projected: 4.45, percentile: 68 },
                bench: { result: 20, projected: 18, percentile: 85 }
            },
            ras: 7.85,
            videoUrls: {},
            stockImpact: 'faller',
            stockChange: -5,
            notes: 'Ran slower than hoped, but showed strength'
        },

        // TIGHT ENDS
        {
            id: 'te001',
            name: 'Kenyon Sadiq',
            position: 'TE',
            school: 'Oregon',
            height: "6'3\"",
            heightInches: 75,
            weight: 245,
            hand: 9.5,
            arm: 32.5,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.60, projected: 4.65, percentile: 90 },
                vertical: { result: 36, projected: 34, percentile: 92 },
                broad: { result: 122, projected: 115, percentile: 90 },
                threeCone: { result: 7.05, projected: 7.15, percentile: 88 },
                shuttle: { result: 4.25, projected: 4.32, percentile: 88 },
                bench: { result: 22, projected: 20, percentile: 85 }
            },
            ras: 9.35,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Elite athleticism for position, confirmed mismatch potential'
        },
        {
            id: 'te002',
            name: 'Mason Taylor',
            position: 'TE',
            school: 'LSU',
            height: "6'5\"",
            heightInches: 77,
            weight: 250,
            hand: 9.75,
            arm: 33.5,
            wingspan: 80,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.72, projected: 4.75, percentile: 78 },
                vertical: { result: 34, projected: 33, percentile: 82 },
                broad: { result: 116, projected: 112, percentile: 78 },
                threeCone: { result: 7.20, projected: 7.25, percentile: 78 },
                shuttle: { result: 4.35, projected: 4.40, percentile: 78 },
                bench: { result: 24, projected: 22, percentile: 90 }
            },
            ras: 8.45,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid showing across the board'
        },

        // OFFENSIVE TACKLES
        {
            id: 'ot001',
            name: 'Francis Mauigoa',
            position: 'OT',
            school: 'Miami',
            height: "6'6\"",
            heightInches: 78,
            weight: 315,
            hand: 10.5,
            arm: 34.5,
            wingspan: 84,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.08, projected: 5.15, percentile: 92 },
                vertical: { result: 29, projected: 27, percentile: 88 },
                broad: { result: 104, projected: 100, percentile: 88 },
                threeCone: { result: 7.65, projected: 7.80, percentile: 85 },
                shuttle: { result: 4.65, projected: 4.75, percentile: 85 },
                bench: { result: 32, projected: 28, percentile: 95 }
            },
            ras: 9.74,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 6,
            notes: 'Freak athlete for 315lbs, rare movement skills'
        },
        {
            id: 'ot002',
            name: 'Spencer Fano',
            position: 'OT',
            school: 'Utah',
            height: "6'5\"",
            heightInches: 77,
            weight: 300,
            hand: 10.0,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.15, projected: 5.15, percentile: 85 },
                vertical: { result: 28, projected: 27, percentile: 82 },
                broad: { result: 102, projected: 100, percentile: 80 },
                threeCone: { result: 7.75, projected: 7.80, percentile: 80 },
                shuttle: { result: 4.72, projected: 4.75, percentile: 80 },
                bench: { result: 28, projected: 26, percentile: 85 }
            },
            ras: 8.85,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid, met expectations for technician'
        },
        {
            id: 'ot003',
            name: 'Caleb Lomu',
            position: 'OT',
            school: 'Utah',
            height: "6'6\"",
            heightInches: 78,
            weight: 310,
            hand: 10.25,
            arm: 34,
            wingspan: 83,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.05, projected: 5.12, percentile: 90 },
                vertical: { result: 30, projected: 28, percentile: 92 },
                broad: { result: 106, projected: 102, percentile: 92 },
                threeCone: { result: 7.55, projected: 7.70, percentile: 90 },
                shuttle: { result: 4.58, projected: 4.68, percentile: 90 },
                bench: { result: 30, projected: 28, percentile: 92 }
            },
            ras: 9.55,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 10,
            notes: 'Exceeded expectations, elite athlete for size'
        },

        // INTERIOR OL
        {
            id: 'iol001',
            name: 'Olaivavega Ioane',
            position: 'IOL',
            school: 'Penn State',
            height: "6'4\"",
            heightInches: 76,
            weight: 330,
            hand: 10.5,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.25, projected: 5.30, percentile: 88 },
                vertical: { result: 26, projected: 25, percentile: 85 },
                broad: { result: 98, projected: 95, percentile: 85 },
                threeCone: { result: 7.85, projected: 7.95, percentile: 82 },
                shuttle: { result: 4.80, projected: 4.85, percentile: 82 },
                bench: { result: 36, projected: 32, percentile: 95 }
            },
            ras: 9.15,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 5,
            notes: 'Elite strength and surprising mobility for 330lbs'
        },

        // EDGE RUSHERS
        {
            id: 'edge001',
            name: 'Rueben Bain Jr.',
            position: 'EDGE',
            school: 'Miami',
            height: "6'3\"",
            heightInches: 75,
            weight: 275,
            hand: 10.0,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.72, projected: 4.75, percentile: 88 },
                vertical: { result: 33, projected: 32, percentile: 85 },
                broad: { result: 118, projected: 114, percentile: 85 },
                threeCone: { result: 7.25, projected: 7.35, percentile: 82 },
                shuttle: { result: 4.40, projected: 4.45, percentile: 82 },
                bench: { result: 28, projected: 26, percentile: 88 }
            },
            ras: 9.25,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 4,
            notes: 'Elite power-speed combo, validated top-10 status'
        },
        {
            id: 'edge002',
            name: 'David Bailey',
            position: 'EDGE',
            school: 'Texas Tech',
            height: "6'3\"",
            heightInches: 75,
            weight: 250,
            hand: 9.5,
            arm: 33,
            wingspan: 79,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.58, projected: 4.65, percentile: 95 },
                vertical: { result: 35.5, projected: 34, percentile: 92 },
                broad: { result: 122, projected: 118, percentile: 92 },
                threeCone: { result: 7.05, projected: 7.15, percentile: 90 },
                shuttle: { result: 4.25, projected: 4.32, percentile: 90 },
                bench: { result: 26, projected: 24, percentile: 85 }
            },
            ras: 9.65,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 15,
            notes: 'Testing star, fastest 40 for EDGE, jumping up boards'
        },
        {
            id: 'edge003',
            name: 'Akheem Mesidor',
            position: 'EDGE',
            school: 'Miami',
            height: "6'3\"",
            heightInches: 75,
            weight: 280,
            hand: 10.0,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.75, projected: 4.80, percentile: 85 },
                vertical: { result: 32, projected: 31, percentile: 82 },
                broad: { result: 114, projected: 110, percentile: 82 },
                threeCone: { result: 7.35, projected: 7.45, percentile: 78 },
                shuttle: { result: 4.50, projected: 4.55, percentile: 78 },
                bench: { result: 30, projected: 28, percentile: 92 }
            },
            ras: 8.85,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Solid workout, strong bench press'
        },
        {
            id: 'edge004',
            name: 'Keldric Faulk',
            position: 'EDGE',
            school: 'Auburn',
            height: "6'5\"",
            heightInches: 77,
            weight: 280,
            hand: 10.25,
            arm: 34.5,
            wingspan: 84,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.80, projected: 4.82, percentile: 80 },
                vertical: { result: 31, projected: 30, percentile: 78 },
                broad: { result: 112, projected: 108, percentile: 78 },
                threeCone: { result: 7.40, projected: 7.50, percentile: 75 },
                shuttle: { result: 4.55, projected: 4.60, percentile: 75 },
                bench: { result: 28, projected: 26, percentile: 88 }
            },
            ras: 8.45,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: -2,
            notes: 'As expected for length-based rusher'
        },
        {
            id: 'edge005',
            name: 'TJ Parker',
            position: 'EDGE',
            school: 'Clemson',
            height: "6'3\"",
            heightInches: 75,
            weight: 265,
            hand: 9.75,
            arm: 33,
            wingspan: 79,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.68, projected: 4.72, percentile: 90 },
                vertical: { result: 34, projected: 33, percentile: 88 },
                broad: { result: 120, projected: 116, percentile: 88 },
                threeCone: { result: 7.15, projected: 7.25, percentile: 85 },
                shuttle: { result: 4.35, projected: 4.40, percentile: 85 },
                bench: { result: 26, projected: 24, percentile: 85 }
            },
            ras: 9.15,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Better than expected testing, versatility confirmed'
        },

        // DEFENSIVE LINE
        {
            id: 'dl001',
            name: 'Peter Woods',
            position: 'DL',
            school: 'Clemson',
            height: "6'3\"",
            heightInches: 75,
            weight: 315,
            hand: 10.0,
            arm: 33.5,
            wingspan: 81,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.05, projected: 5.15, percentile: 90 },
                vertical: { result: 30.5, projected: 29, percentile: 90 },
                broad: { result: 108, projected: 104, percentile: 88 },
                threeCone: { result: 7.50, projected: 7.65, percentile: 88 },
                shuttle: { result: 4.55, projected: 4.65, percentile: 88 },
                bench: { result: 34, projected: 30, percentile: 95 }
            },
            ras: 9.45,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 6,
            notes: 'Freak athlete for 315lbs, validated top-15 status'
        },
        {
            id: 'dl002',
            name: 'Kayden McDonald',
            position: 'DL',
            school: 'Ohio State',
            height: "6'3\"",
            heightInches: 75,
            weight: 326,
            hand: 10.5,
            arm: 34,
            wingspan: 82,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.12, projected: 5.20, percentile: 85 },
                vertical: { result: 28, projected: 27, percentile: 82 },
                broad: { result: 100, projected: 98, percentile: 80 },
                threeCone: { result: 7.75, projected: 7.85, percentile: 80 },
                shuttle: { result: 4.72, projected: 4.80, percentile: 80 },
                bench: { result: 38, projected: 34, percentile: 98 }
            },
            ras: 8.95,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Elite strength, adequate mobility for massive NT'
        },
        {
            id: 'dl003',
            name: 'Deone Walker',
            position: 'DL',
            school: 'Kentucky',
            height: "6'7\"",
            heightInches: 79,
            weight: 345,
            hand: 10.75,
            arm: 35,
            wingspan: 86,
            measurementsComplete: true,
            drills: {
                forty: { result: 5.35, projected: 5.40, percentile: 75 },
                vertical: { result: 26, projected: 25, percentile: 75 },
                broad: { result: 96, projected: 94, percentile: 72 },
                threeCone: { result: 8.00, projected: 8.10, percentile: 72 },
                shuttle: { result: 4.95, projected: 5.00, percentile: 72 },
                bench: { result: 36, projected: 34, percentile: 95 }
            },
            ras: 8.25,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Massive run stuffer, movement adequate for size'
        },

        // LINEBACKERS
        {
            id: 'lb001',
            name: 'Arvell Reese',
            position: 'LB',
            school: 'Ohio State',
            height: "6'4\"",
            heightInches: 76,
            weight: 243,
            hand: 9.75,
            arm: 33,
            wingspan: 79,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.58, projected: 4.62, percentile: 95 },
                vertical: { result: 38, projected: 36, percentile: 95 },
                broad: { result: 126, projected: 120, percentile: 95 },
                threeCone: { result: 6.85, projected: 7.00, percentile: 95 },
                shuttle: { result: 4.20, projected: 4.28, percentile: 95 },
                bench: { result: 28, projected: 26, percentile: 90 }
            },
            ras: 9.88,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 5,
            notes: 'Elite across the board, validated top-5 athleticism'
        },
        {
            id: 'lb002',
            name: 'Sonny Styles',
            position: 'LB',
            school: 'Ohio State',
            height: "6'4\"",
            heightInches: 76,
            weight: 243,
            hand: 9.5,
            arm: 32.5,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.55, projected: 4.58, percentile: 95 },
                vertical: { result: 37, projected: 35, percentile: 92 },
                broad: { result: 124, projected: 118, percentile: 92 },
                threeCone: { result: 6.90, projected: 7.05, percentile: 92 },
                shuttle: { result: 4.22, projected: 4.30, percentile: 92 },
                bench: { result: 26, projected: 24, percentile: 85 }
            },
            ras: 9.72,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Former safety athleticism shows, coverage ability confirmed'
        },
        {
            id: 'lb003',
            name: 'CJ Allen',
            position: 'LB',
            school: 'Georgia',
            height: "6'1\"",
            heightInches: 73,
            weight: 235,
            hand: 9.25,
            arm: 31.5,
            wingspan: 75,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.50, projected: 4.52, percentile: 98 },
                vertical: { result: 36, projected: 35, percentile: 90 },
                broad: { result: 120, projected: 116, percentile: 90 },
                threeCone: { result: 6.95, projected: 7.05, percentile: 90 },
                shuttle: { result: 4.25, projected: 4.30, percentile: 90 },
                bench: { result: 24, projected: 22, percentile: 80 }
            },
            ras: 9.55,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 10,
            notes: 'Fastest LB 40, elite range for position'
        },
        {
            id: 'lb004',
            name: 'Jihaad Campbell',
            position: 'LB',
            school: 'Alabama',
            height: "6'3\"",
            heightInches: 75,
            weight: 230,
            hand: 9.5,
            arm: 32.5,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.55, projected: 4.58, percentile: 95 },
                vertical: { result: 37, projected: 35, percentile: 92 },
                broad: { result: 122, projected: 118, percentile: 92 },
                threeCone: { result: 6.92, projected: 7.05, percentile: 92 },
                shuttle: { result: 4.24, projected: 4.32, percentile: 92 },
                bench: { result: 25, projected: 24, percentile: 82 }
            },
            ras: 9.65,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 12,
            notes: 'Modern LB prototype confirmed with testing'
        },

        // CORNERBACKS
        {
            id: 'cb001',
            name: 'Jermod McCoy',
            position: 'CB',
            school: 'Tennessee',
            height: "6'0\"",
            heightInches: 72,
            weight: 193,
            hand: 9.0,
            arm: 31.5,
            wingspan: 75,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.40, projected: 4.42, percentile: 90 },
                vertical: { result: 37, projected: 36, percentile: 90 },
                broad: { result: 126, projected: 122, percentile: 92 },
                threeCone: { result: 6.85, projected: 6.95, percentile: 88 },
                shuttle: { result: 4.15, projected: 4.20, percentile: 88 },
                bench: { result: 15, projected: 14, percentile: 70 }
            },
            ras: 9.45,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 6,
            notes: 'Elite speed and explosion, lockdown tools confirmed'
        },
        {
            id: 'cb002',
            name: 'Mansoor Delane',
            position: 'CB',
            school: 'Virginia Tech',
            height: "6'2\"",
            heightInches: 74,
            weight: 195,
            hand: 9.25,
            arm: 32.5,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.38, projected: 4.45, percentile: 92 },
                vertical: { result: 38, projected: 35, percentile: 95 },
                broad: { result: 128, projected: 120, percentile: 95 },
                threeCone: { result: 6.80, projected: 6.95, percentile: 92 },
                shuttle: { result: 4.12, projected: 4.18, percentile: 92 },
                bench: { result: 16, projected: 14, percentile: 75 }
            },
            ras: 9.72,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 12,
            notes: 'Faster than expected, elite size-speed combo'
        },
        {
            id: 'cb003',
            name: 'Avieon Terrell',
            position: 'CB',
            school: 'Clemson',
            height: "6'0\"",
            heightInches: 72,
            weight: 190,
            hand: 9.0,
            arm: 31,
            wingspan: 74,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.42, projected: 4.42, percentile: 88 },
                vertical: { result: 36, projected: 35, percentile: 85 },
                broad: { result: 122, projected: 118, percentile: 85 },
                threeCone: { result: 6.90, projected: 6.95, percentile: 85 },
                shuttle: { result: 4.18, projected: 4.20, percentile: 85 },
                bench: { result: 14, projected: 13, percentile: 65 }
            },
            ras: 8.95,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'As expected, smooth athlete'
        },
        {
            id: 'cb004',
            name: 'Daylen Everette',
            position: 'CB',
            school: 'Georgia',
            height: "6'0\"",
            heightInches: 72,
            weight: 195,
            hand: 9.25,
            arm: 31.5,
            wingspan: 76,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.45, projected: 4.48, percentile: 85 },
                vertical: { result: 35.5, projected: 35, percentile: 82 },
                broad: { result: 120, projected: 116, percentile: 82 },
                threeCone: { result: 6.95, projected: 7.00, percentile: 82 },
                shuttle: { result: 4.22, projected: 4.25, percentile: 82 },
                bench: { result: 17, projected: 16, percentile: 78 }
            },
            ras: 8.75,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Consistent showing across the board'
        },
        {
            id: 'cb005',
            name: 'Colton Hood',
            position: 'CB',
            school: 'Tennessee',
            height: "6'0\"",
            heightInches: 72,
            weight: 190,
            hand: 9.0,
            arm: 31,
            wingspan: 75,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.41, projected: 4.42, percentile: 90 },
                vertical: { result: 36.5, projected: 35, percentile: 88 },
                broad: { result: 124, projected: 118, percentile: 90 },
                threeCone: { result: 6.88, projected: 6.95, percentile: 88 },
                shuttle: { result: 4.16, projected: 4.20, percentile: 88 },
                bench: { result: 15, projected: 14, percentile: 70 }
            },
            ras: 9.25,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 8,
            notes: 'Better than expected, production matches testing'
        },

        // SAFETIES
        {
            id: 's001',
            name: 'Caleb Downs',
            position: 'S',
            school: 'Ohio State',
            height: "6'0\"",
            heightInches: 72,
            weight: 205,
            hand: 9.25,
            arm: 31.5,
            wingspan: 76,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.42, projected: 4.45, percentile: 95 },
                vertical: { result: 36, projected: 35, percentile: 90 },
                broad: { result: 124, projected: 120, percentile: 92 },
                threeCone: { result: 6.85, projected: 6.95, percentile: 92 },
                shuttle: { result: 4.15, projected: 4.20, percentile: 92 },
                bench: { result: 18, projected: 16, percentile: 85 }
            },
            ras: 9.65,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 4,
            notes: 'Elite athlete, answered any questions'
        },
        {
            id: 's002',
            name: 'Malaki Starks',
            position: 'S',
            school: 'Georgia',
            height: "6'1\"",
            heightInches: 73,
            weight: 205,
            hand: 9.5,
            arm: 32,
            wingspan: 77,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.45, projected: 4.48, percentile: 92 },
                vertical: { result: 35.5, projected: 35, percentile: 88 },
                broad: { result: 122, projected: 118, percentile: 88 },
                threeCone: { result: 6.90, projected: 6.98, percentile: 90 },
                shuttle: { result: 4.18, projected: 4.22, percentile: 90 },
                bench: { result: 19, projected: 18, percentile: 88 }
            },
            ras: 9.35,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 5,
            notes: 'Versatile athlete, all safety spots viable'
        },
        {
            id: 's003',
            name: 'Dillon Thieneman',
            position: 'S',
            school: 'Oregon',
            height: "6'2\"",
            heightInches: 74,
            weight: 210,
            hand: 9.5,
            arm: 32.5,
            wingspan: 79,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.50, projected: 4.52, percentile: 88 },
                vertical: { result: 35, projected: 34, percentile: 85 },
                broad: { result: 120, projected: 116, percentile: 85 },
                threeCone: { result: 6.95, projected: 7.05, percentile: 88 },
                shuttle: { result: 4.22, projected: 4.28, percentile: 88 },
                bench: { result: 20, projected: 18, percentile: 90 }
            },
            ras: 9.15,
            videoUrls: {},
            stockImpact: 'riser',
            stockChange: 6,
            notes: 'Great size-speed combo for box safety'
        },
        {
            id: 's004',
            name: 'Kevin Winston Jr.',
            position: 'S',
            school: 'Penn State',
            height: "6'1\"",
            heightInches: 73,
            weight: 215,
            hand: 9.5,
            arm: 32,
            wingspan: 78,
            measurementsComplete: true,
            drills: {
                forty: { result: 4.52, projected: 4.55, percentile: 85 },
                vertical: { result: 34.5, projected: 34, percentile: 82 },
                broad: { result: 118, projected: 114, percentile: 82 },
                threeCone: { result: 7.00, projected: 7.08, percentile: 85 },
                shuttle: { result: 4.25, projected: 4.30, percentile: 85 },
                bench: { result: 22, projected: 20, percentile: 92 }
            },
            ras: 8.95,
            videoUrls: {},
            stockImpact: 'stable',
            stockChange: 0,
            notes: 'Strong, physical safety type confirmed'
        }
    ],

    // Pro Day Schedule
    proDays: [
        { date: 'Mar 5', school: 'Ohio State', completed: true, players: [
            { name: 'Arvell Reese', results: '4.58 40, 38" vert', notes: 'Confirmed elite athleticism' },
            { name: 'Carnell Tate', results: '4.43 40, 10\'4" broad', notes: 'Matched combine numbers' },
            { name: 'Caleb Downs', results: '4.42 40, 36" vert', notes: 'All-around solid showing' },
            { name: 'Kayden McDonald', results: 'DNP - Combine sufficient', notes: 'Resting on strong combine' }
        ]},
        { date: 'Mar 7', school: 'Alabama', completed: true, players: [
            { name: 'Ty Simpson', results: '4.73 40, 33" vert', notes: 'Matched combine' },
            { name: 'Jihaad Campbell', results: '4.55 40, 37" vert', notes: 'Elite showing' }
        ]},
        { date: 'Mar 10', school: 'Miami', completed: false, players: [
            { name: 'Francis Mauigoa', results: 'Scheduled', notes: 'May DNP - Combine was elite' },
            { name: 'Rueben Bain Jr.', results: 'Scheduled', notes: 'Looking to confirm numbers' }
        ]},
        { date: 'Mar 12', school: 'Notre Dame', completed: false, players: [
            { name: 'Jeremiyah Love', results: 'Scheduled', notes: 'May do position drills only' },
            { name: 'Jadarian Price', results: 'Scheduled', notes: 'Fast track expected' }
        ]},
        { date: 'Mar 14', school: 'Texas', completed: false, players: [
            { name: 'Anthony Hill Jr.', results: 'Scheduled', notes: 'Expect strong testing' }
        ]},
        { date: 'Mar 17', school: 'Penn State', completed: false, players: [
            { name: 'Drew Allar', results: 'Scheduled', notes: 'Focus on throwing' },
            { name: 'Olaivavega Ioane', results: 'Scheduled', notes: 'Strength showcase' }
        ]},
        { date: 'Mar 19', school: 'Georgia', completed: false, players: [
            { name: 'Zachariah Branch', results: 'Scheduled', notes: 'Could improve 40 time' },
            { name: 'CJ Allen', results: 'Scheduled', notes: 'Elite speed expected' },
            { name: 'Malaki Starks', results: 'Scheduled', notes: 'Versatility on display' }
        ]},
        { date: 'Mar 21', school: 'USC', completed: false, players: [
            { name: 'Makai Lemon', results: 'Scheduled', notes: 'May DNP - Combine was elite' },
            { name: 'Miller Moss', results: 'Scheduled', notes: 'Important throwing session' }
        ]},
        { date: 'Mar 24', school: 'Clemson', completed: false, players: [
            { name: 'Peter Woods', results: 'Scheduled', notes: 'Elite athlete confirmation' },
            { name: 'Avieon Terrell', results: 'Scheduled', notes: 'Speed focus' },
            { name: 'Cade Klubnik', results: 'Scheduled', notes: 'Top QB testing' }
        ]},
        { date: 'Mar 26', school: 'Auburn', completed: false, players: [
            { name: 'Keldric Faulk', results: 'Scheduled', notes: 'Movement drills focus' }
        ]},
        { date: 'Mar 28', school: 'LSU', completed: false, players: [
            { name: 'Garrett Nussmeier', results: 'Scheduled', notes: 'Big throwing session' },
            { name: 'Mason Taylor', results: 'Scheduled', notes: 'Complete workout' }
        ]},
        { date: 'Mar 31', school: 'North Dakota State', completed: false, players: [
            { name: 'Cole Payton', results: 'Scheduled', notes: 'Small school showcase' }
        ]}
    ],

    // Historical comparisons for RAS calculations
    historicalData: {
        QB: { forty: { avg: 4.85, std: 0.15 }, vertical: { avg: 30, std: 3 }, broad: { avg: 108, std: 6 }, threeCone: { avg: 7.25, std: 0.2 }, shuttle: { avg: 4.45, std: 0.15 } },
        RB: { forty: { avg: 4.55, std: 0.12 }, vertical: { avg: 34, std: 3 }, broad: { avg: 116, std: 6 }, threeCone: { avg: 7.15, std: 0.2 }, shuttle: { avg: 4.35, std: 0.15 }, bench: { avg: 18, std: 3 } },
        WR: { forty: { avg: 4.55, std: 0.12 }, vertical: { avg: 34, std: 3 }, broad: { avg: 116, std: 6 }, threeCone: { avg: 7.05, std: 0.2 }, shuttle: { avg: 4.30, std: 0.15 }, bench: { avg: 14, std: 2 } },
        TE: { forty: { avg: 4.75, std: 0.12 }, vertical: { avg: 32, std: 3 }, broad: { avg: 110, std: 6 }, threeCone: { avg: 7.25, std: 0.2 }, shuttle: { avg: 4.40, std: 0.15 }, bench: { avg: 20, std: 3 } },
        OT: { forty: { avg: 5.25, std: 0.15 }, vertical: { avg: 26, std: 2 }, broad: { avg: 98, std: 5 }, threeCone: { avg: 7.85, std: 0.2 }, shuttle: { avg: 4.80, std: 0.15 }, bench: { avg: 24, std: 3 } },
        IOL: { forty: { avg: 5.35, std: 0.15 }, vertical: { avg: 25, std: 2 }, broad: { avg: 95, std: 5 }, threeCone: { avg: 7.95, std: 0.2 }, shuttle: { avg: 4.85, std: 0.15 }, bench: { avg: 28, std: 4 } },
        EDGE: { forty: { avg: 4.80, std: 0.12 }, vertical: { avg: 32, std: 3 }, broad: { avg: 112, std: 6 }, threeCone: { avg: 7.35, std: 0.2 }, shuttle: { avg: 4.50, std: 0.15 }, bench: { avg: 24, std: 3 } },
        DL: { forty: { avg: 5.20, std: 0.15 }, vertical: { avg: 27, std: 2 }, broad: { avg: 100, std: 5 }, threeCone: { avg: 7.80, std: 0.2 }, shuttle: { avg: 4.75, std: 0.15 }, bench: { avg: 30, std: 4 } },
        LB: { forty: { avg: 4.70, std: 0.12 }, vertical: { avg: 34, std: 3 }, broad: { avg: 114, std: 6 }, threeCone: { avg: 7.15, std: 0.2 }, shuttle: { avg: 4.35, std: 0.15 }, bench: { avg: 22, std: 3 } },
        CB: { forty: { avg: 4.50, std: 0.10 }, vertical: { avg: 35, std: 3 }, broad: { avg: 118, std: 6 }, threeCone: { avg: 7.00, std: 0.15 }, shuttle: { avg: 4.25, std: 0.12 }, bench: { avg: 14, std: 2 } },
        S: { forty: { avg: 4.55, std: 0.10 }, vertical: { avg: 34, std: 3 }, broad: { avg: 116, std: 6 }, threeCone: { avg: 7.05, std: 0.15 }, shuttle: { avg: 4.25, std: 0.12 }, bench: { avg: 16, std: 2 } }
    },

    // RAS position weights (how much each drill matters per position)
    positionWeights: {
        QB: { forty: 0.15, vertical: 0.10, broad: 0.10, threeCone: 0.35, shuttle: 0.30 },
        RB: { forty: 0.25, vertical: 0.15, broad: 0.15, threeCone: 0.20, shuttle: 0.20, bench: 0.05 },
        WR: { forty: 0.25, vertical: 0.15, broad: 0.15, threeCone: 0.25, shuttle: 0.15, bench: 0.05 },
        TE: { forty: 0.20, vertical: 0.15, broad: 0.15, threeCone: 0.20, shuttle: 0.20, bench: 0.10 },
        OT: { forty: 0.15, vertical: 0.10, broad: 0.10, threeCone: 0.30, shuttle: 0.25, bench: 0.10 },
        IOL: { forty: 0.10, vertical: 0.10, broad: 0.10, threeCone: 0.30, shuttle: 0.25, bench: 0.15 },
        EDGE: { forty: 0.25, vertical: 0.15, broad: 0.15, threeCone: 0.20, shuttle: 0.15, bench: 0.10 },
        DL: { forty: 0.15, vertical: 0.10, broad: 0.10, threeCone: 0.25, shuttle: 0.20, bench: 0.20 },
        LB: { forty: 0.25, vertical: 0.15, broad: 0.15, threeCone: 0.20, shuttle: 0.20, bench: 0.05 },
        CB: { forty: 0.30, vertical: 0.15, broad: 0.15, threeCone: 0.25, shuttle: 0.15, bench: 0.00 },
        S: { forty: 0.25, vertical: 0.15, broad: 0.15, threeCone: 0.25, shuttle: 0.15, bench: 0.05 }
    }
};

// Historical NFL player comparisons for individual player pages
const historicalComparisons = {
    'Fernando Mendoza': [
        { name: 'Patrick Mahomes', forty: 4.80, vertical: 30, broad: 114 },
        { name: 'Josh Allen', forty: 4.75, vertical: 33, broad: 120 },
        { name: 'Joe Burrow', forty: 4.90, vertical: 29, broad: 108 },
        { name: 'Justin Herbert', forty: 4.68, vertical: 35.5, broad: 123 }
    ],
    'Ty Simpson': [
        { name: 'Dak Prescott', forty: 4.79, vertical: 32.5, broad: 116 },
        { name: 'Russell Wilson', forty: 4.55, vertical: 34, broad: 118 },
        { name: 'Jalen Hurts', forty: 4.59, vertical: 35, broad: 120 }
    ],
    'Jeremiyah Love': [
        { name: 'Reggie Bush', forty: 4.33, vertical: 40, broad: 124 },
        { name: 'Jahmyr Gibbs', forty: 4.36, vertical: 33, broad: 118 },
        { name: 'Bijan Robinson', forty: 4.46, vertical: 37, broad: 124 }
    ],
    'Zachariah Branch': [
        { name: 'Tyreek Hill', forty: 4.29, vertical: 40.5, broad: 129 },
        { name: 'Jaylen Waddle', forty: 4.37, vertical: 35, broad: 120 },
        { name: 'DeVonta Smith', forty: 4.48, vertical: 34, broad: 118 }
    ],
    'Carnell Tate': [
        { name: 'Michael Thomas', forty: 4.57, vertical: 35, broad: 126 },
        { name: 'Mike Evans', forty: 4.53, vertical: 37, broad: 120 },
        { name: 'DeAndre Hopkins', forty: 4.57, vertical: 36, broad: 115 }
    ],
    'Francis Mauigoa': [
        { name: 'Trent Williams', forty: 5.19, vertical: 28, broad: 102 },
        { name: 'Lane Johnson', forty: 4.72, vertical: 34, broad: 118 },
        { name: 'Penei Sewell', forty: 5.09, vertical: 28, broad: 102 }
    ],
    'Arvell Reese': [
        { name: 'Micah Parsons', forty: 4.39, vertical: 34, broad: 126 },
        { name: 'Roquan Smith', forty: 4.51, vertical: 33.5, broad: 121 },
        { name: 'Devin White', forty: 4.42, vertical: 39.5, broad: 129 }
    ],
    'Caleb Downs': [
        { name: 'Derwin James', forty: 4.47, vertical: 40, broad: 132 },
        { name: 'Kyle Hamilton', forty: 4.59, vertical: 38, broad: 130 },
        { name: 'Minkah Fitzpatrick', forty: 4.47, vertical: 33, broad: 121 }
    ]
};

// Export for use in combine-tracker.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { combineData, historicalComparisons };
}

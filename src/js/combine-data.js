// ==========================================
// 2026 NFL COMBINE & PRO DAY DATA
// ==========================================
// NOTE: The 2026 NFL Combine runs Feb 26 - Mar 3, 2026 in Indianapolis
// Drill results will be updated as they become available

const combineData = {
    year: 2026,
    location: 'Indianapolis, IN',
    dates: 'Feb 26 - Mar 3, 2026',
    status: 'upcoming',
    
    // Schedule data - 2026 NFL Combine Schedule
    schedule: [
        { day: 1, date: 'Feb 26', dayName: 'Wednesday', positions: 'Arrivals, Orientation', status: 'upcoming', groups: [] },
        { day: 2, date: 'Feb 27', dayName: 'Thursday', positions: 'QB, WR, TE', status: 'upcoming', groups: ['QB', 'WR', 'TE'] },
        { day: 3, date: 'Feb 28', dayName: 'Friday', positions: 'RB, OL', status: 'upcoming', groups: ['RB', 'OT', 'IOL'] },
        { day: 4, date: 'Mar 1', dayName: 'Saturday', positions: 'DL, LB', status: 'upcoming', groups: ['EDGE', 'DL', 'LB'] },
        { day: 5, date: 'Mar 2', dayName: 'Sunday', positions: 'DB', status: 'upcoming', groups: ['CB', 'S'] },
        { day: 6, date: 'Mar 3', dayName: 'Monday', positions: 'Measurements Wrap-up', status: 'upcoming', groups: [] }
    ],

    // Player data - measurements from college/projected, drill results TBD
    // Height/Weight are estimates based on college rosters and bowl game measurements
    // Drill results will be populated after the combine
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
            hand: null, // Pending measurement
            arm: null,  // Pending measurement
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.75, percentile: null },
                vertical: { result: null, projected: 32, percentile: null },
                broad: { result: null, projected: 114, percentile: null },
                threeCone: { result: null, projected: 7.20, percentile: null },
                shuttle: { result: null, projected: 4.40, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Heisman winner. Expected to measure well. Will throw at Pro Day.'
        },
        {
            id: 'qb002',
            name: 'Ty Simpson',
            position: 'QB',
            school: 'Alabama',
            height: "6'2\"",
            heightInches: 74,
            weight: 208,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.75, percentile: null },
                vertical: { result: null, projected: 32, percentile: null },
                broad: { result: null, projected: 114, percentile: null },
                threeCone: { result: null, projected: 7.15, percentile: null },
                shuttle: { result: null, projected: 4.35, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Strong arm, athletic. Needs to show accuracy in throwing drills.'
        },
        {
            id: 'qb003',
            name: 'Drew Allar',
            position: 'QB',
            school: 'Penn State',
            height: "6'5\"",
            heightInches: 77,
            weight: 235,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.85, percentile: null },
                vertical: { result: null, projected: 29, percentile: null },
                broad: { result: null, projected: 106, percentile: null },
                threeCone: { result: null, projected: 7.40, percentile: null },
                shuttle: { result: null, projected: 4.50, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Big frame, strong arm. Mobility questions to answer.'
        },
        {
            id: 'qb004',
            name: 'Garrett Nussmeier',
            position: 'QB',
            school: 'LSU',
            height: "6'2\"",
            heightInches: 74,
            weight: 195,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.70, percentile: null },
                vertical: { result: null, projected: 32, percentile: null },
                broad: { result: null, projected: 114, percentile: null },
                threeCone: { result: null, projected: 7.10, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Undersized but mobile. Needs to add bulk.'
        },
        {
            id: 'qb005',
            name: 'Carson Beck',
            position: 'QB',
            school: 'Miami',
            height: "6'4\"",
            heightInches: 76,
            weight: 220,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.80, percentile: null },
                vertical: { result: null, projected: 32, percentile: null },
                broad: { result: null, projected: 112, percentile: null },
                threeCone: { result: null, projected: 7.20, percentile: null },
                shuttle: { result: null, projected: 4.35, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Transfer from Georgia to Miami. Solid pocket passer.'
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
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.45, percentile: null },
                vertical: { result: null, projected: 36, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 7.05, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null },
                bench: { result: null, projected: 18, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Expected to test well. Elite burst on tape.'
        },
        {
            id: 'rb002',
            name: 'Jadarian Price',
            position: 'RB',
            school: 'Notre Dame',
            height: "5'10\"",
            heightInches: 70,
            weight: 205,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.42, percentile: null },
                vertical: { result: null, projected: 35, percentile: null },
                broad: { result: null, projected: 118, percentile: null },
                threeCone: { result: null, projected: 7.10, percentile: null },
                shuttle: { result: null, projected: 4.32, percentile: null },
                bench: { result: null, projected: 16, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Change of pace back. Speed is his calling card.'
        },
        {
            id: 'rb003',
            name: 'Kaleb Johnson',
            position: 'RB',
            school: 'Iowa',
            height: "6'1\"",
            heightInches: 73,
            weight: 225,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.55, percentile: null },
                vertical: { result: null, projected: 34, percentile: null },
                broad: { result: null, projected: 115, percentile: null },
                threeCone: { result: null, projected: 7.15, percentile: null },
                shuttle: { result: null, projected: 4.35, percentile: null },
                bench: { result: null, projected: 22, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Physical runner. Size/strength over speed.'
        },
        {
            id: 'rb004',
            name: 'Omarion Hampton',
            position: 'RB',
            school: 'North Carolina',
            height: "5'11\"",
            heightInches: 71,
            weight: 220,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.52, percentile: null },
                vertical: { result: null, projected: 34, percentile: null },
                broad: { result: null, projected: 116, percentile: null },
                threeCone: { result: null, projected: 7.15, percentile: null },
                shuttle: { result: null, projected: 4.35, percentile: null },
                bench: { result: null, projected: 22, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Workhorse back. Three-down potential.'
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
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.45, percentile: null },
                vertical: { result: null, projected: 35, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 6.95, percentile: null },
                shuttle: { result: null, projected: 4.25, percentile: null },
                bench: { result: null, projected: 14, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Contested catch specialist. Needs to test well to solidify WR1 status.'
        },
        {
            id: 'wr002',
            name: 'Jordyn Tyson',
            position: 'WR',
            school: 'Arizona State',
            height: "6'2\"",
            heightInches: 74,
            weight: 200,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.50, percentile: null },
                vertical: { result: null, projected: 34, percentile: null },
                broad: { result: null, projected: 118, percentile: null },
                threeCone: { result: null, projected: 7.00, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null },
                bench: { result: null, projected: 14, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Route running technician. Middle of field target.'
        },
        {
            id: 'wr003',
            name: 'Makai Lemon',
            position: 'WR',
            school: 'USC',
            height: "5'11\"",
            heightInches: 71,
            weight: 190,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.40, percentile: null },
                vertical: { result: null, projected: 35, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 6.85, percentile: null },
                shuttle: { result: null, projected: 4.18, percentile: null },
                bench: { result: null, projected: 12, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Slot weapon. Expecting elite agility numbers.'
        },
        {
            id: 'wr004',
            name: 'Zachariah Branch',
            position: 'WR',
            school: 'Georgia',
            height: "5'10\"",
            heightInches: 70,
            weight: 180,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.38, percentile: null },
                vertical: { result: null, projected: 37, percentile: null },
                broad: { result: null, projected: 125, percentile: null },
                threeCone: { result: null, projected: 6.80, percentile: null },
                shuttle: { result: null, projected: 4.15, percentile: null },
                bench: { result: null, projected: 10, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Explosive returner. Could be fastest WR in class.'
        },
        {
            id: 'wr005',
            name: 'Luther Burden III',
            position: 'WR',
            school: 'Missouri',
            height: "5'11\"",
            heightInches: 71,
            weight: 208,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.48, percentile: null },
                vertical: { result: null, projected: 36, percentile: null },
                broad: { result: null, projected: 122, percentile: null },
                threeCone: { result: null, projected: 7.00, percentile: null },
                shuttle: { result: null, projected: 4.25, percentile: null },
                bench: { result: null, projected: 16, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'YAC monster. Thick build for his height.'
        },

        // TIGHT ENDS
        {
            id: 'te001',
            name: 'Mason Taylor',
            position: 'TE',
            school: 'LSU',
            height: "6'5\"",
            heightInches: 77,
            weight: 250,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.70, percentile: null },
                vertical: { result: null, projected: 34, percentile: null },
                broad: { result: null, projected: 118, percentile: null },
                threeCone: { result: null, projected: 7.15, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null },
                bench: { result: null, projected: 20, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Jason Taylor\'s son. Well-rounded prospect.'
        },
        {
            id: 'te002',
            name: 'Colston Loveland',
            position: 'TE',
            school: 'Michigan',
            height: "6'5\"",
            heightInches: 77,
            weight: 245,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.65, percentile: null },
                vertical: { result: null, projected: 35, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 7.10, percentile: null },
                shuttle: { result: null, projected: 4.25, percentile: null },
                bench: { result: null, projected: 18, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Championship TE. Expected to test well.'
        },

        // OFFENSIVE LINE
        {
            id: 'ol001',
            name: 'Francis Mauigoa',
            position: 'OT',
            school: 'Miami',
            height: "6'6\"",
            heightInches: 78,
            weight: 315,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.10, percentile: null },
                vertical: { result: null, projected: 28, percentile: null },
                broad: { result: null, projected: 100, percentile: null },
                threeCone: { result: null, projected: 7.80, percentile: null },
                shuttle: { result: null, projected: 4.75, percentile: null },
                bench: { result: null, projected: 26, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Mauler in run game. Watch arm length for LT potential.'
        },
        {
            id: 'ol002',
            name: 'Spencer Fano',
            position: 'OT',
            school: 'Utah',
            height: "6'6\"",
            heightInches: 78,
            weight: 302,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.15, percentile: null },
                vertical: { result: null, projected: 27, percentile: null },
                broad: { result: null, projected: 98, percentile: null },
                threeCone: { result: null, projected: 7.85, percentile: null },
                shuttle: { result: null, projected: 4.80, percentile: null },
                bench: { result: null, projected: 24, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Technician. Agility testing will be key.'
        },
        {
            id: 'ol003',
            name: 'Caleb Lomu',
            position: 'OT',
            school: 'Utah',
            height: "6'6\"",
            heightInches: 78,
            weight: 304,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.05, percentile: null },
                vertical: { result: null, projected: 28, percentile: null },
                broad: { result: null, projected: 102, percentile: null },
                threeCone: { result: null, projected: 7.75, percentile: null },
                shuttle: { result: null, projected: 4.70, percentile: null },
                bench: { result: null, projected: 26, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Former rugby player. Athletic upside.'
        },
        {
            id: 'ol004',
            name: 'Olaivavega Ioane',
            position: 'IOL',
            school: 'Penn State',
            height: "6'4\"",
            heightInches: 76,
            weight: 330,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.25, percentile: null },
                vertical: { result: null, projected: 26, percentile: null },
                broad: { result: null, projected: 95, percentile: null },
                threeCone: { result: null, projected: 8.00, percentile: null },
                shuttle: { result: null, projected: 4.90, percentile: null },
                bench: { result: null, projected: 32, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Powerful interior presence. Phone booth blocker.'
        },

        // DEFENSIVE LINE
        {
            id: 'dl001',
            name: 'Rueben Bain Jr.',
            position: 'EDGE',
            school: 'Miami',
            height: "6'3\"",
            heightInches: 75,
            weight: 275,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.70, percentile: null },
                vertical: { result: null, projected: 34, percentile: null },
                broad: { result: null, projected: 118, percentile: null },
                threeCone: { result: null, projected: 7.20, percentile: null },
                shuttle: { result: null, projected: 4.40, percentile: null },
                bench: { result: null, projected: 28, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'ACC DPOY. Power rusher. Expect solid testing.'
        },
        {
            id: 'dl002',
            name: 'David Bailey',
            position: 'EDGE',
            school: 'Texas Tech',
            height: "6'3\"",
            heightInches: 75,
            weight: 250,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.60, percentile: null },
                vertical: { result: null, projected: 36, percentile: null },
                broad: { result: null, projected: 122, percentile: null },
                threeCone: { result: null, projected: 7.10, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null },
                bench: { result: null, projected: 24, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Explosive get-off. Could run sub-4.6.'
        },
        {
            id: 'dl003',
            name: 'Akheem Mesidor',
            position: 'EDGE',
            school: 'Miami',
            height: "6'3\"",
            heightInches: 75,
            weight: 280,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.75, percentile: null },
                vertical: { result: null, projected: 33, percentile: null },
                broad: { result: null, projected: 114, percentile: null },
                threeCone: { result: null, projected: 7.25, percentile: null },
                shuttle: { result: null, projected: 4.45, percentile: null },
                bench: { result: null, projected: 26, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Powerful hands. Thick build.'
        },
        {
            id: 'dl004',
            name: 'Keldric Faulk',
            position: 'EDGE',
            school: 'Auburn',
            height: "6'5\"",
            heightInches: 77,
            weight: 280,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.80, percentile: null },
                vertical: { result: null, projected: 32, percentile: null },
                broad: { result: null, projected: 112, percentile: null },
                threeCone: { result: null, projected: 7.30, percentile: null },
                shuttle: { result: null, projected: 4.45, percentile: null },
                bench: { result: null, projected: 24, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Length is asset. Scheme versatile.'
        },
        {
            id: 'dl005',
            name: 'Peter Woods',
            position: 'DL',
            school: 'Clemson',
            height: "6'3\"",
            heightInches: 75,
            weight: 315,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.10, percentile: null },
                vertical: { result: null, projected: 29, percentile: null },
                broad: { result: null, projected: 105, percentile: null },
                threeCone: { result: null, projected: 7.60, percentile: null },
                shuttle: { result: null, projected: 4.70, percentile: null },
                bench: { result: null, projected: 32, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Interior force. Strong and stout.'
        },
        {
            id: 'dl006',
            name: 'Kayden McDonald',
            position: 'DL',
            school: 'Ohio State',
            height: "6'3\"",
            heightInches: 75,
            weight: 326,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 5.15, percentile: null },
                vertical: { result: null, projected: 28, percentile: null },
                broad: { result: null, projected: 102, percentile: null },
                threeCone: { result: null, projected: 7.70, percentile: null },
                shuttle: { result: null, projected: 4.75, percentile: null },
                bench: { result: null, projected: 36, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Massive nose tackle. Movement skills to watch.'
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
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.55, percentile: null },
                vertical: { result: null, projected: 38, percentile: null },
                broad: { result: null, projected: 125, percentile: null },
                threeCone: { result: null, projected: 7.00, percentile: null },
                shuttle: { result: null, projected: 4.25, percentile: null },
                bench: { result: null, projected: 26, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Elite size/speed combo. Freak athlete potential.'
        },
        {
            id: 'lb002',
            name: 'Sonny Styles',
            position: 'LB',
            school: 'Ohio State',
            height: "6'4\"",
            heightInches: 76,
            weight: 243,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.55, percentile: null },
                vertical: { result: null, projected: 37, percentile: null },
                broad: { result: null, projected: 122, percentile: null },
                threeCone: { result: null, projected: 7.05, percentile: null },
                shuttle: { result: null, projected: 4.28, percentile: null },
                bench: { result: null, projected: 26, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Versatile. Can play multiple spots.'
        },
        {
            id: 'lb003',
            name: 'CJ Allen',
            position: 'LB',
            school: 'Georgia',
            height: "6'1\"",
            heightInches: 73,
            weight: 235,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.50, percentile: null },
                vertical: { result: null, projected: 36, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 7.10, percentile: null },
                shuttle: { result: null, projected: 4.30, percentile: null },
                bench: { result: null, projected: 24, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Instinctive. High football IQ.'
        },

        // DEFENSIVE BACKS
        {
            id: 'db001',
            name: 'Caleb Downs',
            position: 'S',
            school: 'Ohio State',
            height: "6'0\"",
            heightInches: 72,
            weight: 205,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.45, percentile: null },
                vertical: { result: null, projected: 38, percentile: null },
                broad: { result: null, projected: 125, percentile: null },
                threeCone: { result: null, projected: 6.95, percentile: null },
                shuttle: { result: null, projected: 4.20, percentile: null },
                bench: { result: null, projected: 18, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Five-star talent. Expected to test well across the board.'
        },
        {
            id: 'db002',
            name: 'Jermod McCoy',
            position: 'CB',
            school: 'Tennessee',
            height: "6'0\"",
            heightInches: 72,
            weight: 193,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.40, percentile: null },
                vertical: { result: null, projected: 38, percentile: null },
                broad: { result: null, projected: 128, percentile: null },
                threeCone: { result: null, projected: 6.90, percentile: null },
                shuttle: { result: null, projected: 4.15, percentile: null },
                bench: { result: null, projected: 16, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Press-man specialist. 40 time critical for stock.'
        },
        {
            id: 'db003',
            name: 'Mansoor Delane',
            position: 'CB',
            school: 'Virginia Tech',
            height: "6'0\"",
            heightInches: 72,
            weight: 190,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.40, percentile: null },
                vertical: { result: null, projected: 38, percentile: null },
                broad: { result: null, projected: 126, percentile: null },
                threeCone: { result: null, projected: 6.95, percentile: null },
                shuttle: { result: null, projected: 4.18, percentile: null },
                bench: { result: null, projected: 16, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Speed merchant. Watch for 4.3 potential.'
        },
        {
            id: 'db004',
            name: 'Dillon Thieneman',
            position: 'S',
            school: 'Oregon',
            height: "6'2\"",
            heightInches: 74,
            weight: 210,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.50, percentile: null },
                vertical: { result: null, projected: 36, percentile: null },
                broad: { result: null, projected: 120, percentile: null },
                threeCone: { result: null, projected: 7.05, percentile: null },
                shuttle: { result: null, projected: 4.28, percentile: null },
                bench: { result: null, projected: 18, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Versatile safety. Size/speed combo.'
        },
        {
            id: 'db005',
            name: 'Malaki Starks',
            position: 'S',
            school: 'Georgia',
            height: "6'1\"",
            heightInches: 73,
            weight: 205,
            hand: null,
            arm: null,
            wingspan: null,
            measurementsComplete: false,
            drills: {
                forty: { result: null, projected: 4.45, percentile: null },
                vertical: { result: null, projected: 38, percentile: null },
                broad: { result: null, projected: 125, percentile: null },
                threeCone: { result: null, projected: 6.95, percentile: null },
                shuttle: { result: null, projected: 4.20, percentile: null },
                bench: { result: null, projected: 18, percentile: null }
            },
            ras: null,
            videoUrls: {},
            stockImpact: 'pending',
            stockChange: 0,
            notes: 'Ball hawk. Instincts translate to testing?'
        }
    ],

    // Top performers will be populated post-combine
    topPerformers: {
        forty: [],
        vertical: [],
        broad: [],
        threeCone: [],
        bench: [],
        ras: []
    },

    // Stock risers/fallers - TBD
    risers: [],
    fallers: [],

    // Helper functions
    getPlayer: function(name) {
        return this.players.find(p => p.name === name);
    },
    
    getByPosition: function(position) {
        return this.players.filter(p => p.position === position);
    },
    
    getBySchool: function(school) {
        return this.players.filter(p => p.school === school);
    },
    
    getInvitees: function() {
        return this.players;
    },
    
    getCompletedMeasurements: function() {
        return this.players.filter(p => p.measurementsComplete);
    },
    
    getCompletedDrills: function() {
        return this.players.filter(p => p.drills.forty.result !== null);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = combineData;
}

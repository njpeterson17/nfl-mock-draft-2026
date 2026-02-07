        const draftOrder = [
            { pick: 1, team: 'Raiders', teamCode: 'LV', record: '3-14', helmet: 'black', accent: '#A5ACAF' },
            { pick: 2, team: 'Jets', teamCode: 'NYJ', record: '3-14', helmet: '#125740', accent: 'white' },
            { pick: 3, team: 'Cardinals', teamCode: 'ARI', record: '3-14', helmet: '#97233F', accent: 'black' },
            { pick: 4, team: 'Browns', teamCode: 'CLE', record: '5-12', helmet: '#311D00', accent: '#FF3C00' },
            { pick: 5, team: 'Titans', teamCode: 'TEN', record: '6-11', helmet: '#0C2340', accent: '#4C8FB6' },
            { pick: 6, team: 'Panthers', teamCode: 'CAR', record: '6-11', helmet: '#0085CA', accent: '#101820' },
            { pick: 7, team: 'Jets', teamCode: 'NYJ', record: '7-10', helmet: '#125740', accent: 'white' },
            { pick: 8, team: 'Saints', teamCode: 'NO', record: '7-10', helmet: '#101820', accent: '#D3BC8D' },
            { pick: 9, team: 'Commanders', teamCode: 'WAS', record: '8-9', helmet: '#773141', accent: '#FFB612' },
            { pick: 10, team: 'Bears', teamCode: 'CHI', record: '8-9', helmet: '#0B162A', accent: '#C83803' },
            { pick: 11, team: 'Packers', teamCode: 'GB', record: '9-8', helmet: '#203731', accent: '#FFB612' },
            { pick: 12, team: 'Falcons', teamCode: 'ATL', record: '9-8', helmet: '#000000', accent: '#A71930' },
            { pick: 13, team: 'Buccaneers', teamCode: 'TB', record: '10-7', helmet: '#5A1414', accent: '#FFB612' },
            { pick: 14, team: 'Dolphins', teamCode: 'MIA', record: '10-7', helmet: '#008E97', accent: '#FC4C02' },
            { pick: 15, team: 'Ravens', teamCode: 'BAL', record: '10-7', helmet: '#241773', accent: '#9E7C0C' },
            { pick: 16, team: 'Colts', teamCode: 'IND', record: '10-7', helmet: '#003594', accent: '#FFB81C' },
            { pick: 17, team: '49ers', teamCode: 'SF', record: '10-7', helmet: '#AA0000', accent: '#B3995D' },
            { pick: 18, team: 'Vikings', teamCode: 'MIN', record: '10-7', helmet: '#4F2683', accent: '#FFC62F' },
            { pick: 19, team: 'Chargers', teamCode: 'LAC', record: '11-6', helmet: '#0076B6', accent: '#FFB81C' },
            { pick: 20, team: 'Chiefs', teamCode: 'KC', record: '11-6', helmet: '#E31837', accent: '#FFB81C' },
            { pick: 21, team: 'Cardinals', teamCode: 'ARI', record: '11-6', helmet: '#97233F', accent: '#000000' },
            { pick: 22, team: 'Seahawks', teamCode: 'SEA', record: '12-5', helmet: '#002244', accent: '#69BE28' },
            { pick: 23, team: 'Bills', teamCode: 'BUF', record: '12-5', helmet: '#00338D', accent: '#C60C30' },
            { pick: 24, team: 'Texans', teamCode: 'HOU', record: '12-5', helmet: '#03202F', accent: '#A71930' },
            { pick: 25, team: 'Cowboys', teamCode: 'DAL', record: '12-5', helmet: '#003594', accent: '#869397' },
            { pick: 26, team: 'Eagles', teamCode: 'PHI', record: '13-4', helmet: '#004C54', accent: '#A5ACAF' },
            { pick: 27, team: 'Bengals', teamCode: 'CIN', record: '13-4', helmet: '#FB4F14', accent: 'black' },
            { pick: 28, team: 'Raiders', teamCode: 'LV', record: '13-4', helmet: '#000000', accent: '#A5ACAF' },
            { pick: 29, team: 'Steelers', teamCode: 'PIT', record: '13-4', helmet: '#FFB612', accent: '#101820' },
            { pick: 30, team: 'Broncos', teamCode: 'DEN', record: '14-3', helmet: '#FB4F14', accent: '#002244' },
            { pick: 31, team: 'Rams', teamCode: 'LAR', record: '14-3', helmet: '#003594', accent: '#FFD100' },
            { pick: 32, team: 'Lions', teamCode: 'DET', record: '15-2', helmet: '#0076B6', accent: '#B0B7BC' }
        ];

        const availablePlayers = [
            { name: 'Fernando Mendoza', position: 'QB', school: 'Indiana', height: "6'5\"", weight: 225, forty: '4.80' },
            { name: 'Ty Simpson', position: 'QB', school: 'Alabama', height: "6'2\"", weight: 208, forty: '4.75' },
            { name: 'Drew Allar', position: 'QB', school: 'Penn State', height: "6'5\"", weight: 235, forty: '4.85' },
            { name: 'Carson Beck', position: 'QB', school: 'Miami', height: "6'4\"", weight: 220, forty: '4.90' },
            { name: 'Jeremiyah Love', position: 'RB', school: 'Notre Dame', height: "6'0\"", weight: 214, forty: '4.45' },
            { name: 'Jadarian Price', position: 'RB', school: 'Notre Dame', height: "5'10\"", weight: 205, forty: '4.40' },
            { name: 'Emmett Johnson', position: 'RB', school: 'Nebraska', height: "6'0\"", weight: 210, forty: '4.50' },
            { name: 'Kaytron Allen', position: 'RB', school: 'Penn State', height: "5'11\"", weight: 225, forty: '4.50' },
            { name: 'Carnell Tate', position: 'WR', school: 'Ohio State', height: "6'3\"", weight: 195, forty: '4.45' },
            { name: 'Jordyn Tyson', position: 'WR', school: 'Arizona State', height: "6'2\"", weight: 200, forty: '4.50' },
            { name: 'Makai Lemon', position: 'WR', school: 'USC', height: "5'11\"", weight: 195, forty: '4.40' },
            { name: 'Zachariah Branch', position: 'WR', school: 'Georgia', height: "5'10\"", weight: 180, forty: '4.35' },
            { name: 'Francis Mauigoa', position: 'OT', school: 'Miami', height: "6'6\"", weight: 315, forty: '5.10' },
            { name: 'Spencer Fano', position: 'OT', school: 'Utah', height: "6'6\"", weight: 302, forty: '5.15' },
            { name: 'Caleb Lomu', position: 'OT', school: 'Utah', height: "6'6\"", weight: 304, forty: '5.05' },
            { name: 'Olaivavega Ioane', position: 'IOL', school: 'Penn State', height: "6'4\"", weight: 330, forty: '5.25' },
            { name: 'Jermod McCoy', position: 'CB', school: 'Tennessee', height: "6'0\"", weight: 193, forty: '4.40' },
            { name: 'Mansoor Delane', position: 'CB', school: 'LSU', height: "6'0\"", weight: 190, forty: '4.40' },
            { name: 'Avieon Terrell', position: 'CB', school: 'Clemson', height: "6'0\"", weight: 190, forty: '4.40' },
            { name: 'Caleb Downs', position: 'S', school: 'Ohio State', height: "6'0\"", weight: 205, forty: '4.45' },
            { name: 'Dillon Thieneman', position: 'S', school: 'Oregon', height: "6'2\"", weight: 210, forty: '4.50' },
            { name: 'Rueben Bain Jr.', position: 'EDGE', school: 'Miami', height: "6'3\"", weight: 275, forty: '4.70' },
            { name: 'Akheem Mesidor', position: 'EDGE', school: 'Miami', height: "6'3\"", weight: 280, forty: '4.75' },
            { name: 'Keldric Faulk', position: 'EDGE', school: 'Auburn', height: "6'6\"", weight: 285, forty: '4.80' },
            { name: 'David Bailey', position: 'EDGE', school: 'Texas Tech', height: "6'3\"", weight: 250, forty: '4.60' },
            { name: 'Kayden McDonald', position: 'DL', school: 'Ohio State', height: "6'3\"", weight: 326, forty: '5.15' },
            { name: 'Peter Woods', position: 'DL', school: 'Clemson', height: "6'3\"", weight: 315, forty: '5.10' },
            { name: 'Arvell Reese', position: 'LB', school: 'Ohio State', height: "6'4\"", weight: 243, forty: '4.60' },
            { name: 'Sonny Styles', position: 'LB', school: 'Ohio State', height: "6'4\"", weight: 243, forty: '4.55' },
            { name: 'CJ Allen', position: 'LB', school: 'Georgia', height: "6'1\"", weight: 235, forty: '4.50' },
            { name: 'Kenyon Sadiq', position: 'TE', school: 'Oregon', height: "6'3\"", weight: 245, forty: '4.60' },
            { name: 'Denzel Boston', position: 'WR', school: 'North Dakota State', height: "6'4\"", weight: 209, forty: '4.50' }
        ];

        let customDraft = [];
        let currentPickIndex = 0;
        let playerPoolFilter = 'all';

        // ==========================================
        // BIG BOARD DATA - Top 100 Prospects
        // ==========================================
        const bigBoardData = [
            { rank: 1, name: "Fernando Mendoza", position: "QB", school: "Indiana", height: "6'5\"", weight: 225, grade: "7.4", tier: "Elite", strengths: "Elite accuracy, pocket presence, quick release", comparison: "Ceiling: Matt Ryan, Floor: Derek Carr" },
            { rank: 2, name: "Jeremiyah Love", position: "RB", school: "Notre Dame", height: "6'0\"", weight: 214, grade: "7.2", tier: "Elite", strengths: "Explosive speed, receiving ability, vision", comparison: "Ceiling: Reggie Bush, Floor: Aaron Jones" },
            { rank: 3, name: "Carnell Tate", position: "WR", school: "Ohio State", height: "6'3\"", weight: 195, grade: "6.90", tier: "Elite", strengths: "Size, body control, contested catches", comparison: "Ceiling: Michael Thomas, Floor: N'Keal Harry" },
            { rank: 4, name: "Arvell Reese", position: "LB", school: "Ohio State", height: "6'4\"", weight: 243, grade: "7.3", tier: "Elite", strengths: "Elite athlete, rush ability, instincts", comparison: "Ceiling: Micah Parsons, Floor: Jalon Walker" },
            { rank: 5, name: "Rueben Bain Jr.", position: "EDGE", school: "Miami", height: "6'3\"", weight: 275, grade: "7.2", tier: "Elite", strengths: "Powerful hands, high motor, versatility", comparison: "Ceiling: Trent Cole, Floor: Carl Lawson" },
            { rank: 6, name: "David Bailey", position: "EDGE", school: "Texas Tech", height: "6'3\"", weight: 250, grade: "7.0", tier: "Round 1", strengths: "Elite get-off, bend, production", comparison: "Ceiling: Brian Burns, Floor: Josh Uche" },
            { rank: 7, name: "Francis Mauigoa", position: "OT", school: "Miami", height: "6'6\"", weight: 315, grade: "6.95", tier: "Round 1", strengths: "Elite power, mauler, versatile", comparison: "Ceiling: Trent Williams, Floor: Jawaan Taylor" },
            { rank: 8, name: "Sonny Styles", position: "LB", school: "Ohio State", height: "6'4\"", weight: 243, grade: "6.88", tier: "Round 1", strengths: "Speed, length, coverage ability", comparison: "Ceiling: Fred Warner, Floor: Germaine Pratt" },
            { rank: 9, name: "Caleb Downs", position: "S", school: "Ohio State", height: "6'0\"", weight: 205, grade: "7.3", tier: "Elite", strengths: "Elite instincts, versatility, tackling", comparison: "Ceiling: Derwin James, Floor: Xavier McKinney" },
            { rank: 10, name: "Jordyn Tyson", position: "WR", school: "Arizona State", height: "6'2\"", weight: 200, grade: "6.85", tier: "Round 1", strengths: "Contested catches, red zone, route savvy", comparison: "Ceiling: DeAndre Hopkins, Floor: Michael Gallup" },
            { rank: 11, name: "Makai Lemon", position: "WR", school: "USC", height: "5'11\"", weight: 190, grade: "6.78", tier: "Round 1", strengths: "Quickness, route running, YAC ability", comparison: "Ceiling: Amon-Ra St. Brown, Floor: Hunter Renfrow" },
            { rank: 12, name: "Spencer Fano", position: "OT", school: "Utah", height: "6'5\"", weight: 300, grade: "6.80", tier: "Round 1", strengths: "Technique, footwork, versatility", comparison: "Ceiling: Ryan Ramczyk, Floor: Dillon Radunz" },
            { rank: 13, name: "Akheem Mesidor", position: "EDGE", school: "Miami", height: "6'3\"", weight: 280, grade: "6.75", tier: "Round 1", strengths: "Power, motor, inside rush ability", comparison: "Ceiling: Montez Sweat, Floor: Romeo Okwara" },
            { rank: 14, name: "Keldric Faulk", position: "EDGE", school: "Auburn", height: "6'5\"", weight: 280, grade: "6.75", tier: "Round 1", strengths: "Length, strength, run defense", comparison: "Ceiling: Arik Armstead, Floor: Rasheem Green" },
            { rank: 15, name: "Peter Woods", position: "DL", school: "Clemson", height: "6'3\"", weight: 310, grade: "6.75", tier: "Round 1", strengths: "Explosiveness, versatility, power", comparison: "Ceiling: Fletcher Cox, Floor: Ed Oliver" },
            { rank: 16, name: "Jermod McCoy", position: "CB", school: "Tennessee", height: "6'0\"", weight: 190, grade: "6.72", tier: "Round 1", strengths: "Ball skills, press ability, recovery speed", comparison: "Ceiling: Jaire Alexander, Floor: Kelvin Joseph" },
            { rank: 17, name: "Olaivavega Ioane", position: "IOL", school: "Penn State", height: "6'3\"", weight: 320, grade: "6.62", tier: "Round 1", strengths: "Power, anchor, run blocking", comparison: "Ceiling: Quenton Nelson, Floor: Isaiah Wilson" },
            { rank: 18, name: "Kayden McDonald", position: "DL", school: "Ohio State", height: "6'3\"", weight: 326, grade: "6.70", tier: "Round 1", strengths: "Elite size, gap-eating, power", comparison: "Ceiling: Vita Vea, Floor: Derrick Nnadi" },
            { rank: 19, name: "Ty Simpson", position: "QB", school: "Alabama", height: "6'2\"", weight: 210, grade: "6.68", tier: "Round 1", strengths: "Arm talent, mobility, upside", comparison: "Ceiling: Josh Allen, Floor: Will Levis" },
            { rank: 20, name: "Caleb Lomu", position: "OT", school: "Utah", height: "6'6\"", weight: 310, grade: "6.65", tier: "Round 1", strengths: "Length, strength, run blocking", comparison: "Ceiling: Lane Johnson, Floor: Lucas Niang" },
            { rank: 21, name: "CJ Allen", position: "LB", school: "Georgia", height: "6'1\"", weight: 235, grade: "6.60", tier: "Round 1", strengths: "Read-react, physicality, coverage", comparison: "Ceiling: Eric Kendricks, Floor: Sio Moore" },
            { rank: 22, name: "Zachariah Branch", position: "WR", school: "Georgia", height: "5'10\"", weight: 175, grade: "6.60", tier: "Round 1", strengths: "Elite speed, return ability, YAC", comparison: "Ceiling: Tyreek Hill, Floor: Tutu Atwell" },
            { rank: 23, name: "Denzel Boston", position: "WR", school: "Washington", height: "6'4\"", weight: 205, grade: "6.45", tier: "Round 1", strengths: "Size, deep threat, contested catches", comparison: "Ceiling: Mike Evans, Floor: Hakeem Butler" },
            { rank: 24, name: "Mansoor Delane", position: "CB", school: "Virginia Tech", height: "6'2\"", weight: 195, grade: "6.82", tier: "Round 1", strengths: "Fluid hips, press coverage, instincts", comparison: "Ceiling: Jalen Ramsey, Floor: Tre'Davious White" },
            { rank: 25, name: "Trinidad Chambliss", position: "QB", school: "Ole Miss", height: "6'1\"", weight: 205, grade: "6.52", tier: "Round 1", strengths: "Accuracy, processing, leadership", comparison: "Ceiling: Drew Brees, Floor: Case Keenum" },
            { rank: 26, name: "Drew Allar", position: "QB", school: "Penn State", height: "6'5\"", weight: 235, grade: "6.35", tier: "Round 2", strengths: "Size, arm strength, pocket passer", comparison: "Ceiling: Ben Roethlisberger, Floor: Christian Hackenberg" },
            { rank: 27, name: "Emmett Johnson", position: "RB", school: "Nebraska", height: "6'0\"", weight: 210, grade: "6.48", tier: "Round 1", strengths: "Vision, patience, contact balance", comparison: "Ceiling: Josh Jacobs, Floor: Alexander Mattison" },
            { rank: 28, name: "Dillon Thieneman", position: "S", school: "Oregon", height: "6'2\"", weight: 210, grade: "6.50", tier: "Round 1", strengths: "Ball skills, range, tackling", comparison: "Ceiling: Kevin Byard, Floor: Marcus Gilchrist" },
            { rank: 29, name: "Kenyon Sadiq", position: "TE", school: "Oregon", height: "6'3\"", weight: 235, grade: "6.70", tier: "Round 1", strengths: "Athleticism, mismatch ability, hands", comparison: "Ceiling: George Kittle, Floor: Cole Kmet" },
            { rank: 30, name: "Ja'Kobi Lane", position: "WR", school: "USC", height: "6'5\"", weight: 215, grade: "6.40", tier: "Round 1", strengths: "Size, jump ball, red zone threat", comparison: "Ceiling: Plaxico Burress, Floor: JJ Arcega-Whiteside" },
            { rank: 31, name: "Carson Schwesinger", position: "LB", school: "UCLA", height: "6'2\"", weight: 235, grade: "6.15", tier: "Round 2", strengths: "Production, instincts, tackling", comparison: "Ceiling: Blake Martinez, Floor: Ben Boulware" },
            { rank: 32, name: "Malaki Starks", position: "S", school: "Georgia", height: "6'1\"", weight: 205, grade: "6.42", tier: "Round 1", strengths: "Versatility, coverage, instincts", comparison: "Ceiling: Minkah Fitzpatrick, Floor: Taylor Rapp" }
        ];

        // ==========================================
        // POSITIONAL RANKINGS DATA
        // ==========================================
        const positionalRankings = {
            QB: [
                { rank: 1, name: "Fernando Mendoza", school: "Indiana", overallRank: 1, grade: 90.0, oneLineSummary: "Accurate thrower with excellent size and elite ball placement. Franchise QB material." },
                { rank: 2, name: "Ty Simpson", school: "Alabama", overallRank: 19, grade: 88.0, oneLineSummary: "Sound mechanics and accuracy with quick feet but limited starting experience." },
                { rank: 3, name: "Drew Allar", school: "Penn State", overallRank: 26, grade: 86.5, oneLineSummary: "Big-armed pocket passer with ideal size. Best fit in vertical passing system." },
                { rank: 4, name: "Trinidad Chambliss", school: "Ole Miss", overallRank: 25, grade: 85.5, oneLineSummary: "Accurate with excellent leadership but size concerns for some scouts." },
                { rank: 5, name: "Carson Beck", school: "Miami", overallRank: 47, grade: 84.0, oneLineSummary: "Physical tools have never been the question. Needs consistency." },
                { rank: 6, name: "Cole Payton", school: "North Dakota State", overallRank: 50, grade: 83.5, oneLineSummary: "FCS standout with big arm and athleticism. Small school pedigree." },
                { rank: 7, name: "Sawyer Robertson", school: "Baylor", overallRank: 52, grade: 82.5, oneLineSummary: "Clutch performer who thrives under pressure." },
                { rank: 8, name: "Garrett Nussmeier", school: "LSU", overallRank: 48, grade: 83.0, oneLineSummary: "Quick-release operator with live arm. Creative playmaker." }
            ],
            RB: [
                { rank: 1, name: "Jeremiyah Love", school: "Notre Dame", overallRank: 2, grade: 91.5, oneLineSummary: "Reggie Bush-like dynamo with vision, burst, and elite receiving ability." },
                { rank: 2, name: "Jadarian Price", school: "Notre Dame", overallRank: 35, grade: 86.5, oneLineSummary: "Compact runner with terrific vision and elite kick return ability." },
                { rank: 3, name: "Emmett Johnson", school: "Nebraska", overallRank: 27, grade: 85.0, oneLineSummary: "Special lateral agility with elite vision and patience." },
                { rank: 4, name: "Jonah Coleman", school: "Washington", overallRank: 42, grade: 85.5, oneLineSummary: "Three-down back despite limited athleticism. Reliable in pass pro." },
                { rank: 5, name: "Kaytron Allen", school: "Penn State", overallRank: 62, grade: 84.5, oneLineSummary: "Decisive downhill hammer who can punish defenses." },
                { rank: 6, name: "Omarion Hampton", school: "North Carolina", overallRank: 55, grade: 84.0, oneLineSummary: "Complete three-down back with excellent vision." },
                { rank: 7, name: "Nicholas Singleton", school: "Penn State", overallRank: 58, grade: 83.5, oneLineSummary: "Explosive blend of power and speed with home run potential." },
                { rank: 8, name: "Kaleb Johnson", school: "Iowa", overallRank: 65, grade: 82.5, oneLineSummary: "Physical runner who can wear down defenses." }
            ],
            WR: [
                { rank: 1, name: "Carnell Tate", school: "Ohio State", overallRank: 3, grade: 92.0, oneLineSummary: "Tall, long wideout who attacks leverage and tracks ball beautifully." },
                { rank: 2, name: "Jordyn Tyson", school: "Arizona State", overallRank: 10, grade: 90.0, oneLineSummary: "Explosive receiver who wins on 50/50 balls. Uncoverable in red zone." },
                { rank: 3, name: "Makai Lemon", school: "USC", overallRank: 11, grade: 89.5, oneLineSummary: "Warrior with RB body and elite slot ability." },
                { rank: 4, name: "Zachariah Branch", school: "Georgia", overallRank: 22, grade: 87.0, oneLineSummary: "Lightning quick with track speed. Dynamic after catch." },
                { rank: 5, name: "Denzel Boston", school: "Washington", overallRank: 23, grade: 86.5, oneLineSummary: "Big-framed wideout with exceptional ball skills." },
                { rank: 6, name: "Jayden Higgins", school: "Iowa State", overallRank: 45, grade: 85.0, oneLineSummary: "Big-bodied target who can win contested catches." },
                { rank: 7, name: "Luther Burden III", school: "Missouri", overallRank: 48, grade: 84.5, oneLineSummary: "Elite YAC ability with RB mentality after catch." },
                { rank: 8, name: "Xavier Restrepo", school: "Miami", overallRank: 52, grade: 84.0, oneLineSummary: "Reliable slot with excellent route running." }
            ],
            TE: [
                { rank: 1, name: "Kenyon Sadiq", school: "Oregon", overallRank: 29, grade: 88.0, oneLineSummary: "Versatile explosive weapon for modern NFL." },
                { rank: 2, name: "Mason Taylor", school: "LSU", overallRank: 55, grade: 85.5, oneLineSummary: "Athletic move TE with receiving upside." },
                { rank: 3, name: "Eli Stowers", school: "Vanderbilt", overallRank: 60, grade: 85.0, oneLineSummary: "Former QB with elite athleticism. Movable chess piece." },
                { rank: 4, name: "Max Klare", school: "Ohio State", overallRank: 68, grade: 84.0, oneLineSummary: "Natural receiving gifts with blocking limitations." },
                { rank: 5, name: "Joe Royer", school: "Cincinnati", overallRank: 70, grade: 83.5, oneLineSummary: "Matchup problem with natural receiving ability." },
                { rank: 6, name: "Jack Endries", school: "Texas", overallRank: 75, grade: 83.0, oneLineSummary: "Fundamentally sound receiver who gets open." },
                { rank: 7, name: "Justin Joly", school: "NC State", overallRank: 82, grade: 82.0, oneLineSummary: "Contested catch winner with possession traits." },
                { rank: 8, name: "Michael Trigg", school: "Baylor", overallRank: 88, grade: 81.5, oneLineSummary: "Weapon between the numbers with mismatch size." }
            ],
            OT: [
                { rank: 1, name: "Francis Mauigoa", school: "Miami", overallRank: 7, grade: 90.0, oneLineSummary: "True mauler who destroys pass rushers at POA." },
                { rank: 2, name: "Spencer Fano", school: "Utah", overallRank: 12, grade: 89.0, oneLineSummary: "Technically sound with good punch. Ideal zone fit." },
                { rank: 3, name: "Caleb Lomu", school: "Utah", overallRank: 20, grade: 87.5, oneLineSummary: "Agile bookend with franchise LT upside." },
                { rank: 4, name: "Kadyn Proctor", school: "Alabama", overallRank: 45, grade: 85.0, oneLineSummary: "Rare combination of mass and movement." },
                { rank: 5, name: "Aireontae Ersery", school: "Minnesota", overallRank: 48, grade: 84.5, oneLineSummary: "Raw but toolsy with high ceiling." },
                { rank: 6, name: "JC Latham", school: "Wisconsin", overallRank: 55, grade: 84.0, oneLineSummary: "Massive frame with power but needs technique work." },
                { rank: 7, name: "Monroe Freeling", school: "Georgia", overallRank: 50, grade: 84.5, oneLineSummary: "Ideal size and bend with starting LT ability." },
                { rank: 8, name: "Gennings Dunker", school: "Iowa", overallRank: 62, grade: 83.0, oneLineSummary: "Raw power with grip strength and nastiness." }
            ],
            IOL: [
                { rank: 1, name: "Olaivavega Ioane", school: "Penn State", overallRank: 17, grade: 88.5, oneLineSummary: "Dominant LG with strength and agility." },
                { rank: 2, name: "Connor Lew", school: "Auburn", overallRank: 35, grade: 87.0, oneLineSummary: "Center with exceptional movement skills." },
                { rank: 3, name: "Emmanuel Pregnon", school: "Oregon", overallRank: 42, grade: 86.0, oneLineSummary: "Day-one contributor with power and technique." },
                { rank: 4, name: "Chase Bisontis", school: "Texas A&M", overallRank: 55, grade: 85.0, oneLineSummary: "Thick, powerful guard with run-blocking temperament." },
                { rank: 5, name: "Donovan Jackson", school: "Ohio State", overallRank: 58, grade: 84.5, oneLineSummary: "Versatile interior presence with starter traits." },
                { rank: 6, name: "Jake Slaughter", school: "Florida", overallRank: 48, grade: 85.5, oneLineSummary: "Center with blend of intellect and physicality." },
                { rank: 7, name: "Matt Gulbin", school: "Michigan State", overallRank: 62, grade: 84.0, oneLineSummary: "Reliable interior presence with good awareness." },
                { rank: 8, name: "Logan Jones", school: "Iowa", overallRank: 70, grade: 83.5, oneLineSummary: "Rare speed for position opens zone scheme possibilities." }
            ],
            EDGE: [
                { rank: 1, name: "Rueben Bain Jr.", school: "Miami", overallRank: 5, grade: 93.0, oneLineSummary: "Thick, powerful edge with violent hands and non-stop motor." },
                { rank: 2, name: "David Bailey", school: "Texas Tech", overallRank: 6, grade: 92.0, oneLineSummary: "Ultra-explosive with elite production and get-off." },
                { rank: 3, name: "Akheem Mesidor", school: "Miami", overallRank: 13, grade: 89.5, oneLineSummary: "Ideal frame with relentless motor and power rush." },
                { rank: 4, name: "Keldric Faulk", school: "Auburn", overallRank: 14, grade: 89.0, oneLineSummary: "Perfect 4-3 DE frame with powerful hands." },
                { rank: 5, name: "TJ Parker", school: "Clemson", overallRank: 38, grade: 86.5, oneLineSummary: "Versatile rusher who can slide inside." },
                { rank: 6, name: "Dani Dennis-Sutton", school: "Penn State", overallRank: 42, grade: 86.0, oneLineSummary: "Long, athletic edge with elite burst and bend." },
                { rank: 7, name: "Landon Jackson", school: "Arkansas", overallRank: 55, grade: 85.0, oneLineSummary: "Length and power with run defense ability." },
                { rank: 8, name: "Jack Sawyer", school: "Ohio State", overallRank: 62, grade: 84.0, oneLineSummary: "High-motor rusher with technique and power." }
            ],
            DL: [
                { rank: 1, name: "Peter Woods", school: "Clemson", overallRank: 15, grade: 87.5, oneLineSummary: "First-step quickness with scheme versatility." },
                { rank: 2, name: "Kayden McDonald", school: "Ohio State", overallRank: 18, grade: 87.0, oneLineSummary: "Big Ten DL of the Year with strength and quickness." },
                { rank: 3, name: "Deone Walker", school: "Kentucky", overallRank: 45, grade: 85.0, oneLineSummary: "Massive run-stuffer who demands double teams." },
                { rank: 4, name: "Tyleik Williams", school: "Ohio State", overallRank: 48, grade: 84.5, oneLineSummary: "Disruptive 3-technique with violent hands." },
                { rank: 5, name: "Kenneth Grant", school: "Michigan", overallRank: 55, grade: 84.0, oneLineSummary: "Massive nose tackle who occupies blockers." },
                { rank: 6, name: "Caleb Banks", school: "Florida", overallRank: 58, grade: 83.5, oneLineSummary: "Tall, long athlete with twitch in hands." },
                { rank: 7, name: "Shemar Stewart", school: "Texas A&M", overallRank: 62, grade: 83.0, oneLineSummary: "Athletic freak with rare traits but raw." },
                { rank: 8, name: "Darrell Jackson Jr.", school: "Florida State", overallRank: 68, grade: 82.5, oneLineSummary: "Massive NT with two-gap ability." }
            ],
            LB: [
                { rank: 1, name: "Arvell Reese", school: "Ohio State", overallRank: 4, grade: 92.0, oneLineSummary: "Complete player with elite burst and pass-rush ability." },
                { rank: 2, name: "Sonny Styles", school: "Ohio State", overallRank: 8, grade: 90.0, oneLineSummary: "Former safety with LB size and elite speed." },
                { rank: 3, name: "CJ Allen", school: "Georgia", overallRank: 21, grade: 87.0, oneLineSummary: "Three-down LB with excellent read-react skills." },
                { rank: 4, name: "Jihaad Campbell", school: "Alabama", overallRank: 50, grade: 86.0, oneLineSummary: "Modern LB built for speed and versatility." },
                { rank: 5, name: "Anthony Hill Jr.", school: "Texas", overallRank: 52, grade: 85.5, oneLineSummary: "Downhill thumper with sideline-to-sideline range." },
                { rank: 6, name: "Jake Golday", school: "Cincinnati", overallRank: 55, grade: 85.0, oneLineSummary: "Speed-based LB with fantastic lateral range." },
                { rank: 7, name: "Josiah Trotter", school: "Missouri", overallRank: 62, grade: 84.0, oneLineSummary: "Physical downhill linebacker who fills gaps." },
                { rank: 8, name: "Taurean York", school: "Texas A&M", overallRank: 65, grade: 83.5, oneLineSummary: "Elite tackling technique and run defense instincts." }
            ],
            CB: [
                { rank: 1, name: "Jermod McCoy", school: "Tennessee", overallRank: 16, grade: 89.0, oneLineSummary: "Scheme versatile with ball-hawking traits." },
                { rank: 2, name: "Mansoor Delane", school: "Virginia Tech", overallRank: 24, grade: 88.0, oneLineSummary: "Most instinctive CB in class with elite ball skills." },
                { rank: 3, name: "Avieon Terrell", school: "Clemson", overallRank: 32, grade: 87.0, oneLineSummary: "Elite ball skills and fluid athleticism." },
                { rank: 4, name: "Daylen Everette", school: "Georgia", overallRank: 45, grade: 85.5, oneLineSummary: "Technique, experience, and physicality." },
                { rank: 5, name: "Colton Hood", school: "Tennessee", overallRank: 48, grade: 85.0, oneLineSummary: "Complete player with 4.4 speed and production." },
                { rank: 6, name: "Maxwell Hairston", school: "Kentucky", overallRank: 52, grade: 84.5, oneLineSummary: "Physical press corner with elite speed." },
                { rank: 7, name: "Brandon Cisse", school: "South Carolina", overallRank: 58, grade: 84.0, oneLineSummary: "Twitchy cover corner with elite 4.35 speed." },
                { rank: 8, name: "Tacario Davis", school: "Arizona", overallRank: 62, grade: 83.5, oneLineSummary: "Size, length, and press coverage ability." }
            ],
            S: [
                { rank: 1, name: "Caleb Downs", school: "Ohio State", overallRank: 9, grade: 92.0, oneLineSummary: "Defensive coordinator on the field with elite instincts." },
                { rank: 2, name: "Malaki Starks", school: "Georgia", overallRank: 32, grade: 87.5, oneLineSummary: "Versatile playmaker who can play free or box." },
                { rank: 3, name: "Dillon Thieneman", school: "Oregon", overallRank: 28, grade: 87.0, oneLineSummary: "Tall, long safety with fantastic production." },
                { rank: 4, name: "Kevin Winston Jr.", school: "Penn State", overallRank: 55, grade: 85.0, oneLineSummary: "Physical box safety with good instincts." },
                { rank: 5, name: "Kamari Ramsey", school: "USC", overallRank: 58, grade: 84.5, oneLineSummary: "Coverage instincts border on exceptional." },
                { rank: 6, name: "Rod Moore", school: "Michigan", overallRank: 62, grade: 84.0, oneLineSummary: "Versatile safety with coverage ability." },
                { rank: 7, name: "Kyle Louis", school: "Pitt", overallRank: 65, grade: 83.5, oneLineSummary: "Physical box safety who plays fast." },
                { rank: 8, name: "Zakee Wheatley", school: "Penn State", overallRank: 68, grade: 83.0, oneLineSummary: "Elite 4.40 speed with range to erase mistakes." }
            ]
        };

        // Team Drafts Data
        const teamDraftsData = [
            {
                name: "Las Vegas Raiders",
                city: "Las Vegas",
                record: "3-14",
                helmet: { color: "#000000", accent: "#A5ACAF" },
                grade: "A-",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "EDGE", priority: "high" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 1, player: "Fernando Mendoza", position: "QB", school: "Indiana", value: "fair" }
                ],
                summary: "The Raiders finally get their franchise QB in Mendoza. Smart to take the best player in the draft at the top spot. Only one pick limits their ability to fill other holes."
            },
            {
                name: "New York Jets",
                city: "New York",
                record: "3-14",
                helmet: { color: "#125740", accent: "white" },
                grade: "A",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "OL", priority: "high" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 2, player: "Ty Simpson", position: "QB", school: "Alabama", value: "fair" },
                    { pick: 23, player: "Makai Lemon", position: "WR", school: "USC", value: "value" }
                ],
                summary: "Excellent draft for the Jets. Land a QB of the future in Simpson and get great value with Lemon late in Round 1. Two premium picks address biggest needs."
            },
            {
                name: "Arizona Cardinals",
                city: "Arizona",
                record: "3-14",
                helmet: { color: "#97233F", accent: "#000000" },
                grade: "B+",
                needs: [
                    { position: "OT", priority: "high" },
                    { position: "DL", priority: "high" },
                    { position: "EDGE", priority: "medium" }
                ],
                picks: [
                    { pick: 3, player: "Francis Mauigoa", position: "OT", school: "Miami", value: "fair" }
                ],
                summary: "Mauigoa is a mauler who will help protect whoever plays QB. Solid pick but Cardinals need more premium talent."
            },
            {
                name: "Tennessee Titans",
                city: "Tennessee",
                record: "3-14",
                helmet: { color: "#0C2340", accent: "#4C8FB6" },
                grade: "B",
                needs: [
                    { position: "WR", priority: "high" },
                    { position: "CB", priority: "high" },
                    { position: "EDGE", priority: "medium" }
                ],
                picks: [
                    { pick: 4, player: "Carnell Tate", position: "WR", school: "Ohio State", value: "reach" }
                ],
                summary: "Tate is a great prospect but may be a slight reach at #4. Gives the offense a true WR1 to build around."
            },
            {
                name: "New York Giants",
                city: "New York",
                record: "4-13",
                helmet: { color: "#001E62", accent: "#A5ACAF" },
                grade: "B-",
                needs: [
                    { position: "Interior DL", priority: "high" },
                    { position: "QB", priority: "medium" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 5, player: "Peter Woods", position: "DL", school: "Clemson", value: "reach" }
                ],
                summary: "Woods is a solid player but taking a DT at #5 is questionable value. Giants need more impact from this premium pick."
            },
            {
                name: "Cleveland Browns",
                city: "Cleveland",
                record: "5-12",
                helmet: { color: "#311D00", accent: "#FF3C00" },
                grade: "A-",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "WR", priority: "medium" },
                    { position: "OT", priority: "medium" }
                ],
                picks: [
                    { pick: 6, player: "Trinidad Chambliss", position: "QB", school: "Ole Miss", value: "fair" },
                    { pick: 27, player: "Mansoor Delane", position: "CB", school: "Virginia Tech", value: "value" }
                ],
                summary: "Browns finally get their QB and land excellent value with Delane late in Round 1. Two quality starters from this draft."
            },
            {
                name: "Washington Commanders",
                city: "Washington",
                record: "5-12",
                helmet: { color: "#773141", accent: "#FFB612" },
                grade: "A-",
                needs: [
                    { position: "DE", priority: "high" },
                    { position: "CB", priority: "high" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 7, player: "Rueben Bain Jr.", position: "EDGE", school: "Miami", value: "value" }
                ],
                summary: "Bain is a steal at #7. Violent edge rusher who fills a massive need. Exactly what this defense needs."
            },
            {
                name: "New Orleans Saints",
                city: "New Orleans",
                record: "6-11",
                helmet: { color: "#101820", accent: "#D3BC8D" },
                grade: "B",
                needs: [
                    { position: "WR", priority: "high" },
                    { position: "OT", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 8, player: "Jordyn Tyson", position: "WR", school: "Arizona State", value: "reach" }
                ],
                summary: "Tyson is a good player but slightly early at #8. Saints get their WR1 but could have traded down."
            },
            {
                name: "Kansas City Chiefs",
                city: "Kansas City",
                record: "11-6",
                helmet: { color: "#E31837", accent: "#FFB81C" },
                grade: "A",
                needs: [
                    { position: "Pass rusher", priority: "high" },
                    { position: "WR", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 9, player: "David Bailey", position: "EDGE", school: "Texas Tech", value: "value" }
                ],
                summary: "Bailey is excellent value at #9. Elite speed rusher who upgrades their pass rush immediately. Perfect fit."
            },
            {
                name: "Cincinnati Bengals",
                city: "Cincinnati",
                record: "13-4",
                helmet: { color: "#FB4F14", accent: "black" },
                grade: "A-",
                needs: [
                    { position: "Interior DL", priority: "high" },
                    { position: "OT", priority: "medium" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 10, player: "Kayden McDonald", position: "DL", school: "Ohio State", value: "fair" },
                    { pick: 40, player: "Dani Dennis-Sutton", position: "EDGE", school: "Penn State", value: "value" }
                ],
                summary: "Bengals crush this draft. McDonald anchors the middle and Dennis-Sutton adds pass rush. Two starters for a contender."
            },
            {
                name: "Miami Dolphins",
                city: "Miami",
                record: "7-10",
                helmet: { color: "#008E97", accent: "#FC4C02" },
                grade: "B+",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "EDGE", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 11, player: "Cole Payton", position: "QB", school: "North Dakota State", value: "reach" },
                    { pick: 41, player: "Donovan Jackson", position: "IOL", school: "Ohio State", value: "fair" }
                ],
                summary: "Payton is a reach at #11 but they needed a QB. Jackson is a solid Round 2 add for the offensive line."
            },
            {
                name: "Dallas Cowboys",
                city: "Dallas",
                record: "7-9-1",
                helmet: { color: "#003594", accent: "#869397" },
                grade: "A+",
                needs: [
                    { position: "CB", priority: "high" },
                    { position: "S", priority: "high" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 15, player: "Jermod McCoy", position: "CB", school: "Tennessee", value: "value" },
                    { pick: 42, player: "Malaki Starks", position: "S", school: "Georgia", value: "value" }
                ],
                summary: "Cowboys absolutely nail this draft. Two defensive studs where they needed them most. Both are value picks too."
            },
            {
                name: "Los Angeles Rams",
                city: "Los Angeles",
                record: "14-3",
                helmet: { color: "#003594", accent: "#FFD100" },
                grade: "B",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "DL", priority: "medium" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 29, player: "Drew Allar", position: "QB", school: "Penn State", value: "fair" },
                    { pick: 43, player: "Kenneth Grant", position: "DL", school: "Michigan", value: "fair" }
                ],
                summary: "Rams get their future QB in Allar and add a run-stuffing DT. Solid if unspectacular draft for a contender."
            },
            {
                name: "Baltimore Ravens",
                city: "Baltimore",
                record: "8-9",
                helmet: { color: "#241773", accent: "#9E7C0C" },
                grade: "A-",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "CB", priority: "high" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 13, player: "Akheem Mesidor", position: "EDGE", school: "Miami", value: "value" },
                    { pick: 44, player: "Maxwell Hairston", position: "CB", school: "Kentucky", value: "value" }
                ],
                summary: "Ravens continue to draft well. Mesidor and Hairston fill two massive needs with excellent value."
            },
            {
                name: "Tampa Bay Buccaneers",
                city: "Tampa Bay",
                record: "8-9",
                helmet: { color: "#D50A0A", accent: "#FF7900" },
                grade: "B+",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "S", priority: "medium" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 14, player: "Arvell Reese", position: "LB", school: "Ohio State", value: "value" }
                ],
                summary: "Reese is a steal at #14. Elite LB prospect who can do it all. Buccaneers get a defensive cornerstone."
            },
            {
                name: "Detroit Lions",
                city: "Detroit",
                record: "15-2",
                helmet: { color: "#0076B6", accent: "#B0B7BC" },
                grade: "A-",
                needs: [
                    { position: "IOL", priority: "high" },
                    { position: "LB", priority: "high" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 32, player: "Olaivavega Ioane", position: "IOL", school: "Penn State", value: "value" },
                    { pick: 47, player: "Carson Schwesinger", position: "LB", school: "UCLA", value: "value" }
                ],
                summary: "Lions continue their excellent drafting. Two Day 1 starters who fit their physical identity. Great value at both picks."
            },
            {
                name: "Minnesota Vikings",
                city: "Minnesota",
                record: "9-8",
                helmet: { color: "#4F2683", accent: "#FFC62F" },
                grade: "B+",
                needs: [
                    { position: "OT", priority: "high" },
                    { position: "WR", priority: "high" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 18, player: "Caleb Lomu", position: "OT", school: "Utah", value: "fair" },
                    { pick: 48, player: "Jayden Higgins", position: "WR", school: "Iowa State", value: "fair" }
                ],
                summary: "Vikings address two big needs with solid picks. Lomu protects the QB and Higgins gives them a big target."
            },
            {
                name: "Carolina Panthers",
                city: "Carolina",
                record: "6-11",
                helmet: { color: "#0085CA", accent: "#101820" },
                grade: "B+",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "TE", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 20, player: "Keldric Faulk", position: "EDGE", school: "Auburn", value: "fair" }
                ],
                summary: "Faulk is a solid pick who brings length and power off the edge. Good fit for what Carolina needs."
            },
            {
                name: "Pittsburgh Steelers",
                city: "Pittsburgh",
                record: "13-4",
                helmet: { color: "#FFB612", accent: "#101820" },
                grade: "B",
                needs: [
                    { position: "QB", priority: "high" },
                    { position: "IOL", priority: "medium" },
                    { position: "DL", priority: "medium" }
                ],
                picks: [
                    { pick: 24, player: "Carson Beck", position: "QB", school: "Miami", value: "fair" }
                ],
                summary: "Beck is a reach at #24 but Pittsburgh needed a QB. Developmental prospect with some upside."
            },
            {
                name: "Los Angeles Chargers",
                city: "Los Angeles",
                record: "11-6",
                helmet: { color: "#0076B6", accent: "#FFB81C" },
                grade: "B+",
                needs: [
                    { position: "IOL", priority: "high" },
                    { position: "DL", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 25, player: "Spencer Fano", position: "OT", school: "Utah", value: "fair" }
                ],
                summary: "Fano is a reliable tackle who can start early. Chargers protect their QB with this solid pick."
            },
            {
                name: "Chicago Bears",
                city: "Chicago",
                record: "8-9",
                helmet: { color: "#0B162A", accent: "#C83803" },
                grade: "B+",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "IOL", priority: "medium" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 26, player: "Sonny Styles", position: "LB", school: "Ohio State", value: "value" }
                ],
                summary: "Styles is excellent value at #26. Former safety with elite speed for a linebacker. Bears defense gets a weapon."
            },
            {
                name: "Buffalo Bills",
                city: "Buffalo",
                record: "12-5",
                helmet: { color: "#00338D", accent: "#C60C30" },
                grade: "B",
                needs: [
                    { position: "WR", priority: "high" },
                    { position: "CB", priority: "medium" },
                    { position: "EDGE", priority: "medium" }
                ],
                picks: [
                    { pick: 25, player: "Denzel Boston", position: "WR", school: "Washington", value: "fair" }
                ],
                summary: "Boston gives Buffalo a big-bodied receiver to complement Diggs. Solid pick that fills a need."
            },
            {
                name: "San Francisco 49ers",
                city: "San Francisco",
                record: "10-7",
                helmet: { color: "#AA0000", accent: "#B3995D" },
                grade: "B+",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "CB", priority: "medium" },
                    { position: "S", priority: "medium" }
                ],
                picks: [
                    { pick: 17, player: "CJ Allen", position: "LB", school: "Georgia", value: "value" }
                ],
                summary: "Allen is a steal at #17. Elite read-react LB who fits perfectly in the 49ers defense. Great value."
            },
            {
                name: "Houston Texans",
                city: "Houston",
                record: "12-5",
                helmet: { color: "#03202F", accent: "#A71930" },
                grade: "A-",
                needs: [
                    { position: "RB", priority: "high" },
                    { position: "WR", priority: "medium" },
                    { position: "DL", priority: "medium" }
                ],
                picks: [
                    { pick: 29, player: "Jeremiyah Love", position: "RB", school: "Notre Dame", value: "value" }
                ],
                summary: "Love falling to #29 is a gift for Houston. Elite RB prospect who transforms their offense. Home run pick."
            },
            {
                name: "Philadelphia Eagles",
                city: "Philadelphia",
                record: "13-4",
                helmet: { color: "#004C54", accent: "#A5ACAF" },
                grade: "B",
                needs: [
                    { position: "CB", priority: "high" },
                    { position: "IOL", priority: "medium" },
                    { position: "EDGE", priority: "medium" }
                ],
                picks: [
                    { pick: 30, player: "Will Johnson", position: "CB", school: "Michigan", value: "fair" }
                ],
                summary: "Johnson is a solid corner who can develop behind Philly's veterans. Good value late in Round 1."
            },
            {
                name: "Denver Broncos",
                city: "Denver",
                record: "14-3",
                helmet: { color: "#FB4F14", accent: "#002244" },
                grade: "B-",
                needs: [
                    { position: "LB", priority: "high" },
                    { position: "OT", priority: "medium" },
                    { position: "S", priority: "medium" }
                ],
                picks: [
                    { pick: 31, player: "Sonny Styles", position: "LB", school: "Ohio State", value: "reach" }
                ],
                summary: "Styles is a bit of a reach here but fills a need. Former safety with elite athleticism for a LB."
            },
            {
                name: "Green Bay Packers",
                city: "Green Bay",
                record: "9-8",
                helmet: { color: "#203731", accent: "#FFB612" },
                grade: "B+",
                needs: [
                    { position: "WR", priority: "high" },
                    { position: "CB", priority: "medium" },
                    { position: "EDGE", priority: "medium" }
                ],
                picks: [
                    { pick: 11, player: "Emmett Johnson", position: "RB", school: "Nebraska", value: "reach" }
                ],
                summary: "Johnson is a reach at #11 but Green Bay loves their RBs. Good player but questionable value this early."
            },
            {
                name: "Atlanta Falcons",
                city: "Atlanta",
                record: "8-9",
                helmet: { color: "#000000", accent: "#A71930" },
                grade: "B",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "CB", priority: "high" },
                    { position: "WR", priority: "medium" }
                ],
                picks: [
                    { pick: 12, player: "Tacario Davis", position: "CB", school: "Arizona", value: "fair" }
                ],
                summary: "Davis gives Atlanta a big, physical corner to pair with their defensive overhaul. Solid selection."
            },
            {
                name: "Indianapolis Colts",
                city: "Indianapolis",
                record: "10-7",
                helmet: { color: "#003594", accent: "#FFB81C" },
                grade: "C+",
                needs: [
                    { position: "WR", priority: "high" },
                    { position: "EDGE", priority: "medium" },
                    { position: "CB", priority: "medium" }
                ],
                picks: [
                    { pick: 16, player: "Luther Burden III", position: "WR", school: "Missouri", value: "reach" }
                ],
                summary: "Burden is a reach at #16 but Indianapolis needed playmakers. Slot receiver with YAC ability."
            },
            {
                name: "Seattle Seahawks",
                city: "Seattle",
                record: "12-5",
                helmet: { color: "#002244", accent: "#69BE28" },
                grade: "B",
                needs: [
                    { position: "IOL", priority: "high" },
                    { position: "DL", priority: "medium" },
                    { position: "LB", priority: "medium" }
                ],
                picks: [
                    { pick: 22, player: "Oluwafemi Oladejo", position: "IOL", school: "UCLA", value: "fair" }
                ],
                summary: "Oladejo is a solid interior lineman who fits Seattle's scheme. Good value in the middle of Round 1."
            },
            {
                name: "Jacksonville Jaguars",
                city: "Jacksonville",
                record: "10-7",
                helmet: { color: "#006778", accent: "#D7A22A" },
                grade: "B",
                needs: [
                    { position: "RB", priority: "high" },
                    { position: "DL", priority: "medium" },
                    { position: "S", priority: "medium" }
                ],
                picks: [
                    { pick: 33, player: "Kaleb Johnson", position: "RB", school: "Iowa", value: "fair" }
                ],
                summary: "Johnson is a workhorse RB who can take pressure off the passing game. Solid pick to start Round 2."
            },
            {
                name: "New England Patriots",
                city: "New England",
                record: "10-7",
                helmet: { color: "#002244", accent: "#C60C30" },
                grade: "B-",
                needs: [
                    { position: "EDGE", priority: "high" },
                    { position: "WR", priority: "medium" },
                    { position: "OT", priority: "medium" }
                ],
                picks: [
                    { pick: 34, player: "Jack Sawyer", position: "EDGE", school: "Ohio State", value: "fair" }
                ],
                summary: "Sawyer is a high-motor rusher who fits the Patriot Way. Not elite upside but solid contributor."
            }
        ];

        let teamDraftsFilter = 'all';

        let bigBoardTierFilter = 'all';
        let bigBoardPositionFilter = 'all';
        
        let trades = [];
        let tradeSelectionA = [];
        let tradeSelectionB = [];

        // Jimmy Johnson Trade Value Chart (simplified)
        const tradeValues = {
            1: 3000, 2: 2600, 3: 2200, 4: 1800, 5: 1700,
            6: 1600, 7: 1500, 8: 1400, 9: 1350, 10: 1300,
            11: 1250, 12: 1200, 13: 1150, 14: 1100, 15: 1050,
            16: 1000, 17: 950, 18: 900, 19: 875, 20: 850,
            21: 800, 22: 780, 23: 760, 24: 740, 25: 720,
            26: 700, 27: 680, 28: 660, 29: 640, 30: 620,
            31: 600, 32: 590
        };


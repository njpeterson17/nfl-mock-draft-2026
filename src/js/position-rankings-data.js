// Position Rankings Data for 2026 NFL Draft
const positionRankingsData = {
  QB: {
    position: "Quarterback",
    abbreviation: "QB",
    description: "Top Prospects at the Most Important Position",
    classStrength: "Deep class with 5 potential R1 QBs and legitimate starter potential through round 3",
    topProspect: "Fernando Mendoza (Indiana)",
    sleeper: "Cole Payton (NDSU)",
    riser: "Ty Simpson (Alabama)",
    faller: "Garrett Nussmeier (LSU)",
    projection: "5-7 QBs in first 3 rounds",
    round1Count: 5,
    prospectCount: 12,
    topGrade: "7.4",
    traits: [
      { name: "Arm Strength", weight: 20 },
      { name: "Accuracy", weight: 25 },
      { name: "Mobility", weight: 15 },
      { name: "Processing", weight: 25 },
      { name: "Leadership", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Fernando Mendoza",
        school: "Indiana",
        height: "6'5",
        weight: 225,
        grade: "7.4",
        tier: "Elite",
        projection: "Top 5",
        round: 1,
        oneLineSummary: "Accurate thrower with excellent size, toughness and enough athleticism. Elite ball placement and RPO operator with Matt Ryan-like traits.",
        strengths: [
          "Elite ball placement and accuracy on all levels",
          "Quick release and decision-making",
          "Poised under pressure with improved pocket awareness",
          "Prototypical size at 6'5 with good mobility"
        ],
        weaknesses: [
          "Average arm strength for NFL (not elite)",
          "Limited rushing upside",
          "Only one year of starting experience at high level"
        ],
        stats: { forty: "4.78", vertical: "32.5", broad: "9'8", games: 14, completion: "72%", yards: 4123, tds: 41, ints: 8 },
        metrics: { arm: 4, accuracy: 5, mobility: 3, processing: 5, leadership: 5 },
        comparison: "Ceiling: Matt Ryan | Floor: Baker Mayfield",
        bestFits: ["Raiders", "Jets", "Giants"],
        report: "Mendoza projects as a starting NFL quarterback with Pro Bowl upside. His accuracy and leadership are translatable traits that should allow him to start early in his career. Led Indiana to the national title game with elite ball placement in RPO game."
      },
      {
        rank: 2,
        name: "Ty Simpson",
        school: "Alabama",
        height: "6'2",
        weight: 210,
        grade: "6.7",
        tier: "Round 1",
        projection: "Late R1 - R2",
        round: 1,
        oneLineSummary: "Sound mechanics, touch and accuracy. Quick feet and compact delivery but limited starting experience (15 games).",
        strengths: [
          "Great pocket presence and mobility",
          "High football IQ and decision-making",
          "Competes on every down",
          "Can beat defenses with his legs"
        ],
        weaknesses: [
          "Limited starting experience (1 year)",
          "Sometimes tries to do too much",
          "Needs to improve deep ball consistency"
        ],
        stats: { forty: "4.73", vertical: "33.0", broad: "9'8", games: 15, completion: "68%", yards: 3567, tds: 28, ints: 10 },
        metrics: { arm: 4, accuracy: 4, mobility: 4, processing: 4, leadership: 4 },
        comparison: "Ceiling: Josh Allen | Floor: Tyler Shough",
        bestFits: ["Jets", "Saints", "Steelers"],
        report: "Simpson offers a nice blend of arm talent and athleticism. His limited starting experience is a concern, but his traits suggest starter potential with development. Alabama pedigree adds confidence in his ability to handle pressure."
      },
      {
        rank: 3,
        name: "Drew Allar",
        school: "Penn State",
        height: "6'5",
        weight: 235,
        grade: "6.5",
        tier: "Round 1-2",
        projection: "Late R1 - R2",
        round: 1,
        oneLineSummary: "Big-armed pocket passer with ideal size (6-5, 235). Fits best in vertical passing system.",
        strengths: [
          "Prototypical NFL size (6'5, 235)",
          "Elite arm strength and velocity",
          "Pocket presence and composure",
          "Big-game experience at Penn State"
        ],
        weaknesses: [
          "Decision-making under pressure",
          "Touch on intermediate routes",
          "Limited mobility outside pocket"
        ],
        stats: { forty: "4.82", vertical: "30.5", broad: "9'2", games: 26, completion: "64%", yards: 6120, tds: 45, ints: 18 },
        metrics: { arm: 5, accuracy: 3, mobility: 2, processing: 3, leadership: 4 },
        comparison: "Ceiling: Ben Roethlisberger | Floor: Josh Dobbs",
        bestFits: ["Rams", "Steelers", "Buccaneers"],
        report: "Allar is a classic pocket passer with the size and arm strength teams covet. Best fit in a vertical passing system that can maximize his arm talent while minimizing mobility concerns."
      }
    ]
  },

  RB: {
    position: "Running Back",
    abbreviation: "RB",
    description: "Elite Talent with Three-Down Potential",
    classStrength: "Top-heavy class with elite talent at the top. Multiple three-down backs with receiving ability.",
    topProspect: "Jeremiyah Love (Notre Dame)",
    sleeper: "Kaelon Black (Indiana)",
    riser: "Emmett Johnson (Nebraska)",
    faller: "Noah Whittington (Oregon)",
    projection: "3-4 in first 2 rounds, 8-10 total in top 100",
    round1Count: 2,
    prospectCount: 12,
    topGrade: "7.2",
    traits: [
      { name: "Speed", weight: 20 },
      { name: "Power", weight: 20 },
      { name: "Vision", weight: 20 },
      { name: "Receiving", weight: 20 },
      { name: "Pass Pro", weight: 20 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Jeremiyah Love",
        school: "Notre Dame",
        height: "6'0",
        weight: 214,
        grade: "7.2",
        tier: "Elite",
        projection: "Top 10",
        round: 1,
        oneLineSummary: "Reggie Bush-like dynamo with vision, burst, and elite pass-catching ability. Home run hitter every touch.",
        strengths: [
          "Explosive speed and burst",
          "Elite pass-catching ability",
          "Exceptional vision and patience",
          "Home run threat every touch"
        ],
        weaknesses: [
          "Could add more bulk",
          "Pass protection technique",
          "Runs a bit high at times"
        ],
        stats: { forty: "4.40", vertical: "38.0", broad: "10'4", games: 26, carries: 368, yards: 2450, avg: "6.7", tds: 26, receptions: 58, recYds: 620, recTds: 5 },
        metrics: { speed: 5, power: 3, vision: 5, receiving: 5, passPro: 3 },
        comparison: "Ceiling: Jahmyr Gibbs | Floor: James Conner",
        bestFits: ["Cowboys", "Chargers", "Cardinals"],
        report: "Love is the complete package with elite speed and receiving ability. Projects as a Day 1 three-down starter with Pro Bowl upside."
      },
      {
        rank: 2,
        name: "Jadarian Price",
        school: "Notre Dame",
        height: "5'11",
        weight: 205,
        grade: "6.5",
        tier: "Round 2",
        projection: "R2",
        round: 2,
        oneLineSummary: "Compact runner with terrific vision and contact balance. Elite kick returner with two TDs in 2025.",
        strengths: [
          "Excellent vision and contact balance",
          "Elite kick return ability",
          "Compact running style",
          "Big play threat"
        ],
        weaknesses: [
          "Limited size for bell-cow role",
          "Not elite as receiver",
          "Pass protection needs work"
        ],
        stats: { forty: "4.45", vertical: "36.0", broad: "10'0", games: 28, carries: 342, yards: 1920, avg: "5.6", tds: 20, receptions: 32, recYds: 280, recTds: 2 },
        metrics: { speed: 4, power: 3, vision: 5, receiving: 3, passPro: 2 },
        comparison: "Ceiling: Alvin Kamara | Floor: Nyheim Hines",
        bestFits: ["Saints", "Eagles", "Bears"],
        report: "Price is a dynamic playmaker with elite return skills. Best suited for a complementary role or committee lead."
      }
    ]
  },

  WR: {
    position: "Wide Receiver",
    abbreviation: "WR",
    description: "Loaded Class with Size, Speed, and Route Running",
    classStrength: "One of the deepest classes in recent years. Multiple WR1 types with diverse skill sets.",
    topProspect: "Carnell Tate (Ohio State)",
    sleeper: "Bryce Lance (NDSU)",
    riser: "Zachariah Branch (Georgia)",
    faller: "Ja'Kobi Lane (USC)",
    projection: "6-8 in first round, 15-18 in top 100",
    round1Count: 4,
    prospectCount: 15,
    topGrade: "6.9",
    traits: [
      { name: "Speed", weight: 20 },
      { name: "Route Running", weight: 20 },
      { name: "Hands", weight: 20 },
      { name: "Contested Catches", weight: 20 },
      { name: "YAC", weight: 20 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Carnell Tate",
        school: "Ohio State",
        height: "6'3",
        weight: 195,
        grade: "6.9",
        tier: "Round 1",
        projection: "Top 10",
        round: 1,
        oneLineSummary: "Tall, long wideout with suddenness to defeat press. Attacks leverage and tracks ball beautifully.",
        strengths: [
          "Elite size and length",
          "Suddenness to defeat press",
          "Attacks leverage well",
          "Beautiful ball tracking"
        ],
        weaknesses: [
          "Lower-body injury history",
          "Needs to add strength",
          "Contested catch consistency"
        ],
        stats: { forty: "4.43", vertical: "36.5", broad: "10'4", games: 28, catches: 128, yards: 2820, avg: "22.0", tds: 24 },
        metrics: { speed: 4, routeRunning: 5, hands: 4, contested: 4, yac: 3 },
        comparison: "Ceiling: Michael Thomas | Floor: Bryan Edwards",
        bestFits: ["Titans", "Chargers", "Colts"],
        report: "Tate is a prototypical X-receiver with size, speed, and route-running ability. Projects as a true WR1 with Pro Bowl upside."
      },
      {
        rank: 2,
        name: "Jordyn Tyson",
        school: "Arizona State",
        height: "6'2",
        weight: 200,
        grade: "6.8",
        tier: "Round 1",
        projection: "Top 15",
        round: 1,
        oneLineSummary: "Explosive receiver who wins on 50/50 balls. Essentially uncoverable in red zone.",
        strengths: [
          "Elite contested catch ability",
          "Red zone weapon",
          "Explosive playmaker",
          "Size-speed combination"
        ],
        weaknesses: [
          "Route tree needs refinement",
          "Top-end speed not elite",
          "Limited YAC ability"
        ],
        stats: { forty: "4.48", vertical: "35.0", broad: "10'2", games: 32, catches: 142, yards: 2480, avg: "17.5", tds: 26 },
        metrics: { speed: 4, routeRunning: 4, hands: 5, contested: 5, yac: 3 },
        comparison: "Ceiling: DeAndre Hopkins | Floor: Tre'Quan Smith",
        bestFits: ["Saints", "Patriots", "Jaguars"],
        report: "Tyson is a contested catch specialist who dominates in the red zone. His ability to win 50/50 balls makes him a valuable target."
      }
    ]
  },

  TE: {
    position: "Tight End",
    abbreviation: "TE",
    description: "Athletic Mismatch Weapons for Modern NFL",
    classStrength: "Athletic group with several move TEs who create mismatches. Limited true inline options.",
    topProspect: "Kenyon Sadiq (Oregon)",
    sleeper: "Eli Raridon (Notre Dame)",
    riser: "Eli Stowers (Vanderbilt)",
    faller: "Tanner Koziol (Houston)",
    projection: "2-3 in first 2 rounds, 6-8 in top 100",
    round1Count: 1,
    prospectCount: 10,
    topGrade: "6.7",
    traits: [
      { name: "Receiving", weight: 25 },
      { name: "Blocking", weight: 20 },
      { name: "Athleticism", weight: 25 },
      { name: "Size", weight: 15 },
      { name: "Route Running", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Kenyon Sadiq",
        school: "Oregon",
        height: "6'3",
        weight: 235,
        grade: "6.7",
        tier: "Round 1",
        projection: "Mid R1",
        round: 1,
        oneLineSummary: "Versatile explosive weapon built for modern NFL. Elite speed and YAC ability but needs consistency with hands.",
        strengths: [
          "Elite speed for position",
          "Versatile weapon",
          "YAC ability",
          "Mismatch creator"
        ],
        weaknesses: [
          "Drop issues",
          "Limited inline ability",
          "Route tree needs work"
        ],
        stats: { forty: "4.55", vertical: "36.0", broad: "10'2", games: 28, catches: 92, yards: 1180, avg: "12.8", tds: 12 },
        metrics: { receiving: 5, blocking: 2, athleticism: 5, size: 3, routeRunning: 3 },
        comparison: "Ceiling: George Kittle | Floor: Juwan Johnson",
        bestFits: ["Chargers", "Jets", "Packers"],
        report: "Sadiq is the top TE in the class with rare athleticism. Best utilized as a move TE who can create mismatches all over the field."
      }
    ]
  },

  OT: {
    position: "Offensive Tackle",
    abbreviation: "OT",
    description: "Blindside Protectors with Starting Potential",
    classStrength: "Solid class with true LT potential at the top. Good depth through round 3.",
    topProspect: "Francis Mauigoa (Miami)",
    sleeper: "Brian Parker II (Duke)",
    riser: "Caleb Lomu (Utah)",
    faller: "Monroe Freeling (Georgia)",
    projection: "3-4 in first round, 6-8 in top 100",
    round1Count: 3,
    prospectCount: 10,
    topGrade: "6.9",
    traits: [
      { name: "Pass Pro", weight: 25 },
      { name: "Run Block", weight: 20 },
      { name: "Athleticism", weight: 20 },
      { name: "Size", weight: 15 },
      { name: "Technique", weight: 20 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Francis Mauigoa",
        school: "Miami",
        height: "6'6",
        weight: 315,
        grade: "6.9",
        tier: "Round 1",
        projection: "Top 10",
        round: 1,
        oneLineSummary: "True mauler who destroys pass rushers. 2,600+ snaps at RT but could be Pro Bowl guard.",
        strengths: ["Destroys pass rushers at POA", "Only 2 sacks allowed at Miami", "Violent finisher in run game", "Versatile - RT or guard"],
        weaknesses: ["Short arms for tackle position", "May need to move inside at NFL level", "Limited second-level flexibility"],
        stats: { forty: "5.08", bench: 28, vertical: "29.0", broad: "8'8", arm: "32", starts: 38 },
        metrics: { passPro: 5, runBlock: 5, athleticism: 3, size: 4, technique: 4 },
        comparison: "Ceiling: Trent Williams | Floor: Cam Robinson",
        bestFits: ["Cardinals", "Chargers", "Saints"],
        report: "Mauigoa is a mauler with elite power. Short arms may push him to guard, but he can start at RT day one."
      }
    ]
  },

  IOL: {
    position: "Interior Offensive Line",
    abbreviation: "IOL",
    description: "Strong Class with Versatility",
    classStrength: "Strong class with both power and athletic options. Several prospects can play multiple positions.",
    topProspect: "Olaivavega Ioane (Penn State)",
    sleeper: "Parker Brailsford (Alabama)",
    riser: "Connor Lew (Auburn)",
    faller: "DJ Campbell (Texas)",
    projection: "2-3 in first 2 rounds, 5-7 in top 100",
    round1Count: 2,
    prospectCount: 10,
    topGrade: "6.6",
    traits: [
      { name: "Power", weight: 25 },
      { name: "Athleticism", weight: 20 },
      { name: "Technique", weight: 20 },
      { name: "Versatility", weight: 20 },
      { name: "Anchor", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Olaivavega Ioane",
        school: "Penn State",
        height: "6'3",
        weight: 320,
        grade: "6.6",
        tier: "Round 1",
        projection: "Mid R1",
        round: 1,
        oneLineSummary: "Dominant LG with outstanding strength and agility. 32 career starts, only 2 sacks allowed.",
        strengths: ["Outstanding strength", "Excellent agility for size", "Only 2 sacks allowed", "32 career starts"],
        weaknesses: ["Height limitations for some schemes", "Not an elite athlete", "May be scheme specific"],
        stats: { forty: "5.25", bench: 32, vertical: "28.0", broad: "8'6", arm: "33", starts: 32 },
        metrics: { power: 5, athleticism: 4, technique: 4, versatility: 3, anchor: 5 },
        comparison: "Ceiling: Quenton Nelson | Floor: Netane Muti",
        bestFits: ["Cowboys", "Steelers", "Eagles"],
        report: "Ioane is a dominant guard with rare power and mobility. Projects as a Day 1 starter with Pro Bowl upside."
      }
    ]
  },

  EDGE: {
    position: "Edge Rusher",
    abbreviation: "EDGE",
    description: "Explosive Pass Rushers off the Edge",
    classStrength: "Deep and talented class with multiple scheme fits. Speed and power options available.",
    topProspect: "Rueben Bain Jr. (Miami)",
    sleeper: "Romello Height (Texas Tech)",
    riser: "Cashius Howell (Texas A&M)",
    faller: "LT Overton (Alabama)",
    projection: "4-5 in first round, 8-10 in top 100",
    round1Count: 4,
    prospectCount: 12,
    topGrade: "7.2",
    traits: [
      { name: "Burst", weight: 25 },
      { name: "Bend", weight: 20 },
      { name: "Power", weight: 20 },
      { name: "Run Defense", weight: 15 },
      { name: "Pass Rush Moves", weight: 20 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Rueben Bain Jr.",
        school: "Miami",
        height: "6'3",
        weight: 275,
        grade: "7.2",
        tier: "Elite",
        projection: "Top 10",
        round: 1,
        oneLineSummary: "Thick, powerful edge with violent hands and non-stop motor. Short arms but plays like junkyard dog.",
        strengths: ["Violent hands", "Non-stop motor", "Powerful at POA", "Versatile rusher"],
        weaknesses: ["Short arms", "Limited bend", "Pass rush move variety"],
        stats: { forty: "4.72", bench: 32, vertical: "33.0", broad: "9'10", arm: "31", sacks: 23.5, tfl: 35 },
        metrics: { burst: 4, bend: 3, power: 5, runDefense: 4, moves: 3 },
        comparison: "Ceiling: Trent Cole | Floor: Sam Hubbard",
        bestFits: ["Commanders", "Cardinals", "Lions"],
        report: "Bain is a powerful, high-motor edge who can set the edge and rush the passer. Short arms do not limit his effectiveness."
      }
    ]
  },

  DL: {
    position: "Defensive Line",
    abbreviation: "DL",
    description: "Deep Class with Run Stuffers and Penetrators",
    classStrength: "Deep class with variety of styles. From 0-tech nose tackles to 3-tech penetrators.",
    topProspect: "Kayden McDonald (Ohio State)",
    sleeper: "Domonique Orange (Iowa State)",
    riser: "Lee Hunter (Texas Tech)",
    faller: "Dontay Corleone (Cincinnati)",
    projection: "2-3 in first round, 6-8 in top 100",
    round1Count: 2,
    prospectCount: 10,
    topGrade: "6.6",
    traits: [
      { name: "Strength", weight: 25 },
      { name: "Quickness", weight: 20 },
      { name: "Run Defense", weight: 25 },
      { name: "Pass Rush", weight: 15 },
      { name: "Size", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Kayden McDonald",
        school: "Ohio State",
        height: "6'3",
        weight: 326,
        grade: "6.6",
        tier: "Round 1",
        projection: "Mid R1",
        round: 1,
        oneLineSummary: "Big Ten DL of the Year with incredible strength and quickness. Run-stuffing force.",
        strengths: ["Big Ten DL of the Year", "Incredible strength", "Good quickness for size", "Run-stuffing force"],
        weaknesses: ["Pass rush limitations", "Two-down projection", "Stamina"],
        stats: { forty: "5.12", bench: 36, vertical: "28.0", broad: "8'4", arm: "33", sacks: 6, tfl: 14 },
        metrics: { strength: 5, quickness: 3, runDefense: 5, passRush: 2, size: 5 },
        comparison: "Ceiling: Vita Vea | Floor: Daron Payne",
        bestFits: ["Bengals", "Ravens", "Chargers"],
        report: "McDonald is a dominant run defender with rare power. Projects as a two-down NT with Pro Bowl potential."
      }
    ]
  },

  LB: {
    position: "Linebacker",
    abbreviation: "LB",
    description: "Versatile Class with Coverage and Rush Skills",
    classStrength: "Versatile group with modern skill sets. Several three-down prospects with coverage ability.",
    topProspect: "Arvell Reese (Ohio State)",
    sleeper: "Harold Perkins Jr. (LSU)",
    riser: "Sonny Styles (Ohio State)",
    faller: "Deontae Lawson (Alabama)",
    projection: "3-4 in first 2 rounds, 6-8 in top 100",
    round1Count: 3,
    prospectCount: 10,
    topGrade: "7.3",
    traits: [
      { name: "Run Defense", weight: 20 },
      { name: "Coverage", weight: 25 },
      { name: "Blitz", weight: 15 },
      { name: "Instincts", weight: 25 },
      { name: "Tackling", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Arvell Reese",
        school: "Ohio State",
        height: "6'4",
        weight: 243,
        grade: "7.3",
        tier: "Elite",
        projection: "Top 5",
        round: 1,
        oneLineSummary: "Complete football player with elite burst and pass-rush ability. Jumps off the tape.",
        strengths: ["Elite burst", "Pass rush ability", "Complete player", "Jumps off tape"],
        weaknesses: ["Can be overaggressive", "Coverage refinement", "Experience"],
        stats: { forty: "4.55", bench: 28, vertical: "36.0", broad: "10'4", arm: "34", tackles: 185, sacks: 14, ints: 3 },
        metrics: { runDefense: 5, coverage: 4, blitz: 5, instincts: 5, tackling: 4 },
        comparison: "Ceiling: Micah Parsons | Floor: Patrick Queen",
        bestFits: ["Cowboys", "Giants", "Bengals"],
        report: "Reese is a special prospect with elite traits all around. Projects as a defensive centerpiece and Pro Bowler."
      }
    ]
  },

  CB: {
    position: "Cornerback",
    abbreviation: "CB",
    description: "Talented Group with Size and Ball Skills",
    classStrength: "Talented class with variety of styles. Press, zone, and slot options all available.",
    topProspect: "Jermod McCoy (Tennessee)",
    sleeper: "Jadon Canady (Oregon)",
    riser: "Mansoor Delane (Virginia Tech)",
    faller: "Devin Moore (Florida)",
    projection: "4-5 in first round, 8-10 in top 100",
    round1Count: 4,
    prospectCount: 12,
    topGrade: "6.8",
    traits: [
      { name: "Speed", weight: 20 },
      { name: "Ball Skills", weight: 25 },
      { name: "Press", weight: 20 },
      { name: "Zone", weight: 15 },
      { name: "Tackle", weight: 20 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Jermod McCoy",
        school: "Tennessee",
        height: "6'0",
        weight: 190,
        grade: "6.8",
        tier: "Round 1",
        projection: "Mid R1",
        round: 1,
        oneLineSummary: "Scheme versatile with ball-hawking traits. 4 INTs in 2024 before ACL injury.",
        strengths: ["Scheme versatile", "Ball-hawking", "Press man ability", "Recovery speed"],
        weaknesses: ["ACL injury history", "Size limitations vs big WRs", "Experience"],
        stats: { forty: "4.40", bench: 15, vertical: "37.0", broad: "10'6", arm: "32", tackles: 125, ints: 10, pbus: 28 },
        metrics: { speed: 5, ballSkills: 5, press: 4, zone: 4, tackle: 3 },
        comparison: "Ceiling: Jaire Alexander | Floor: Rock Ya-Sin",
        bestFits: ["Cowboys", "Steelers", "Browns"],
        report: "McCoy is a scheme-diverse corner with elite ball skills. ACL recovery will be monitored but talent is undeniable."
      }
    ]
  },

  S: {
    position: "Safety",
    abbreviation: "S",
    description: "Elite Class with Versatility",
    classStrength: "Elite class with multiple scheme fits. Box, deep, and hybrid options available.",
    topProspect: "Caleb Downs (Ohio State)",
    sleeper: "Genesis Smith (Arizona)",
    riser: "Dillon Thieneman (Oregon)",
    faller: "Kamari Ramsey (USC)",
    projection: "2-3 in first round, 5-7 in top 100",
    round1Count: 2,
    prospectCount: 10,
    topGrade: "7.3",
    traits: [
      { name: "Coverage", weight: 25 },
      { name: "Run Support", weight: 20 },
      { name: "Ball Skills", weight: 20 },
      { name: "Instincts", weight: 20 },
      { name: "Tackling", weight: 15 }
    ],
    prospects: [
      {
        rank: 1,
        name: "Caleb Downs",
        school: "Ohio State",
        height: "6'0",
        weight: 205,
        grade: "7.3",
        tier: "Elite",
        projection: "Top 5",
        round: 1,
        oneLineSummary: "Defensive coordinator on the field. Elite instincts and reliable tackler. Extension of the coaching staff.",
        strengths: ["Elite instincts", "Reliable tackler", "Defensive leader", "Versatile coverage"],
        weaknesses: ["Size limitations in box", "Not elite athlete", "Man coverage"],
        stats: { forty: "4.50", bench: 18, vertical: "35.0", broad: "10'0", arm: "31", tackles: 195, ints: 8, pbus: 22 },
        metrics: { coverage: 5, runSupport: 4, ballSkills: 4, instincts: 5, tackling: 5 },
        comparison: "Ceiling: Derwin James | Floor: Grant Delpit",
        bestFits: ["Jets", "Giants", "Seahawks"],
        report: "Downs is the top safety in the class with elite instincts and leadership. Projects as a defensive leader and Pro Bowler."
      }
    ]
  }
};

// Helper function to get all prospects across positions
function getAllProspects() {
  const allProspects = [];
  Object.keys(positionRankingsData).forEach(pos => {
    positionRankingsData[pos].prospects.forEach(p => {
      allProspects.push({ ...p, position: pos });
    });
  });
  return allProspects;
}

// Helper function to get position order for navigation
const positionOrder = ['QB', 'RB', 'WR', 'TE', 'OT', 'IOL', 'EDGE', 'DL', 'LB', 'CB', 'S'];

function getPrevPosition(currentPos) {
  const idx = positionOrder.indexOf(currentPos);
  return idx > 0 ? positionOrder[idx - 1] : null;
}

function getNextPosition(currentPos) {
  const idx = positionOrder.indexOf(currentPos);
  return idx < positionOrder.length - 1 ? positionOrder[idx + 1] : null;
}

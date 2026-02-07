// ==========================================
// PFF 2026 NFL DRAFT BIG BOARD DATABASE
// Source: Verified real 2026 draft prospects
// From: ESPN (Mel Kiper), Tankathon, NFL.com (Daniel Jeremiah)
// ==========================================

const pffBigBoardData = [
    // TOP 50 PROSPECTS - VERIFIED REAL 2026 PLAYERS
    { rank: 1, name: "Arvell Reese", position: "LB", school: "Ohio State", height: "6'4\"", weight: 243, grade: "7.3", tier: "Elite", strengths: "Elite athlete, rush ability, instincts", comparison: "Ceiling: Micah Parsons, Floor: Jalon Walker" },
    { rank: 2, name: "Rueben Bain Jr.", position: "EDGE", school: "Miami", height: "6'3\"", weight: 275, grade: "7.2", tier: "Elite", strengths: "Powerful hands, high motor, versatility", comparison: "Ceiling: Trent Cole, Floor: Carl Lawson" },
    { rank: 3, name: "Caleb Downs", position: "S", school: "Ohio State", height: "6'0\"", weight: 205, grade: "7.3", tier: "Elite", strengths: "Elite instincts, versatility, tackling", comparison: "Ceiling: Derwin James, Floor: Xavier McKinney" },
    { rank: 4, name: "Fernando Mendoza", position: "QB", school: "Indiana", height: "6'5\"", weight: 225, grade: "7.4", tier: "Elite", strengths: "Elite accuracy, pocket presence, quick release", comparison: "Ceiling: Matt Ryan, Floor: Derek Carr" },
    { rank: 5, name: "David Bailey", position: "EDGE", school: "Texas Tech", height: "6'3\"", weight: 250, grade: "7.0", tier: "Round 1", strengths: "Elite get-off, bend, production", comparison: "Ceiling: Brian Burns, Floor: Josh Uche" },
    { rank: 6, name: "Francis Mauigoa", position: "OT", school: "Miami", height: "6'6\"", weight: 315, grade: "6.95", tier: "Round 1", strengths: "Elite power, mauler, versatile", comparison: "Ceiling: Trent Williams, Floor: Jawaan Taylor" },
    { rank: 7, name: "Carnell Tate", position: "WR", school: "Ohio State", height: "6'3\"", weight: 195, grade: "6.90", tier: "Elite", strengths: "Size, body control, contested catches", comparison: "Ceiling: Michael Thomas, Floor: N'Keal Harry" },
    { rank: 8, name: "Spencer Fano", position: "OT", school: "Utah", height: "6'6\"", weight: 302, grade: "6.80", tier: "Round 1", strengths: "Technique, footwork, versatility", comparison: "Ceiling: Ryan Ramczyk, Floor: Dillon Radunz" },
    { rank: 9, name: "Jeremiyah Love", position: "RB", school: "Notre Dame", height: "6'0\"", weight: 214, grade: "7.2", tier: "Elite", strengths: "Explosive speed, receiving ability, vision", comparison: "Ceiling: Reggie Bush, Floor: Aaron Jones" },
    { rank: 10, name: "Jordyn Tyson", position: "WR", school: "Arizona State", height: "6'2\"", weight: 200, grade: "6.85", tier: "Round 1", strengths: "Contested catches, red zone, route savvy", comparison: "Ceiling: DeAndre Hopkins, Floor: Michael Gallup" },
    { rank: 11, name: "Mansoor Delane", position: "CB", school: "LSU", height: "6'0\"", weight: 190, grade: "6.82", tier: "Round 1", strengths: "Fluid hips, press coverage, instincts", comparison: "Ceiling: Jalen Ramsey, Floor: Tre'Davious White" },
    { rank: 12, name: "Makai Lemon", position: "WR", school: "USC", height: "5'11\"", weight: 190, grade: "6.78", tier: "Round 1", strengths: "Quickness, route running, YAC ability", comparison: "Ceiling: Amon-Ra St. Brown, Floor: Hunter Renfrow" },
    { rank: 13, name: "Sonny Styles", position: "LB", school: "Ohio State", height: "6'4\"", weight: 243, grade: "6.88", tier: "Round 1", strengths: "Speed, length, coverage ability", comparison: "Ceiling: Fred Warner, Floor: Germaine Pratt" },
    { rank: 14, name: "Jermod McCoy", position: "CB", school: "Tennessee", height: "6'0\"", weight: 193, grade: "6.72", tier: "Round 1", strengths: "Ball skills, press ability, recovery speed", comparison: "Ceiling: Jaire Alexander, Floor: Kelvin Joseph" },
    { rank: 15, name: "Keldric Faulk", position: "EDGE", school: "Auburn", height: "6'6\"", weight: 285, grade: "6.75", tier: "Round 1", strengths: "Length, strength, run defense", comparison: "Ceiling: Arik Armstead, Floor: Rasheem Green" },
    { rank: 16, name: "Peter Woods", position: "DL", school: "Clemson", height: "6'3\"", weight: 315, grade: "6.75", tier: "Round 1", strengths: "Explosiveness, versatility, power", comparison: "Ceiling: Fletcher Cox, Floor: Ed Oliver" },
    { rank: 17, name: "Kenyon Sadiq", position: "TE", school: "Oregon", height: "6'3\"", weight: 245, grade: "6.70", tier: "Round 1", strengths: "Athleticism, mismatch ability, hands", comparison: "Ceiling: George Kittle, Floor: Cole Kmet" },
    { rank: 18, name: "Olaivavega Ioane", position: "IOL", school: "Penn State", height: "6'4\"", weight: 330, grade: "6.62", tier: "Round 1", strengths: "Power, anchor, run blocking", comparison: "Ceiling: Quenton Nelson, Floor: Isaiah Wilson" },
    { rank: 19, name: "Kayden McDonald", position: "DL", school: "Ohio State", height: "6'3\"", weight: 326, grade: "6.70", tier: "Round 1", strengths: "Elite size, gap-eating, power", comparison: "Ceiling: Vita Vea, Floor: Derrick Nnadi" },
    { rank: 20, name: "Denzel Boston", position: "WR", school: "Washington", height: "6'4\"", weight: 209, grade: "6.65", tier: "Round 1", strengths: "Size, deep threat, contested catches", comparison: "Ceiling: Mike Evans, Floor: Hakeem Butler" },
    { rank: 21, name: "Caleb Lomu", position: "OT", school: "Utah", height: "6'6\"", weight: 304, grade: "6.65", tier: "Round 1", strengths: "Length, strength, run blocking", comparison: "Ceiling: Lane Johnson, Floor: Lucas Niang" },
    { rank: 22, name: "CJ Allen", position: "LB", school: "Georgia", height: "6'1\"", weight: 235, grade: "6.60", tier: "Round 1", strengths: "Read-react, physicality, coverage", comparison: "Ceiling: Eric Kendricks, Floor: Sio Moore" },
    { rank: 23, name: "Zachariah Branch", position: "WR", school: "Georgia", height: "5'10\"", weight: 175, grade: "6.60", tier: "Round 1", strengths: "Elite speed, return ability, YAC", comparison: "Ceiling: Tyreek Hill, Floor: Tutu Atwell" },
    { rank: 24, name: "Ty Simpson", position: "QB", school: "Alabama", height: "6'2\"", weight: 210, grade: "6.68", tier: "Round 1", strengths: "Arm talent, mobility, upside", comparison: "Ceiling: Josh Allen, Floor: Will Levis" },
    { rank: 25, name: "Cashius Howell", position: "EDGE", school: "Texas A&M", height: "6'2\"", weight: 248, grade: "6.65", tier: "Round 1", strengths: "Speed rush, bend, motor", comparison: "Ceiling: Yannick Ngakoue, Floor: Josh Uche" },
    { rank: 26, name: "Avieon Terrell", position: "CB", school: "Clemson", height: "5'11\"", weight: 180, grade: "6.70", tier: "Round 1", strengths: "Ball skills, fluidity, zone coverage", comparison: "Ceiling: A.J. Terrell, Floor: Tre'Davious White" },
    { rank: 27, name: "Kadyn Proctor", position: "OT", school: "Alabama", height: "6'7\"", weight: 366, grade: "6.62", tier: "Round 1", strengths: "Size, power, developmental upside", comparison: "Ceiling: Orlando Brown, Floor: Isaiah Wilson" },
    { rank: 28, name: "TJ Parker", position: "EDGE", school: "Clemson", height: "6'3\"", weight: 265, grade: "6.65", tier: "Round 1", strengths: "Versatility, hand fighting, motor", comparison: "Ceiling: Arik Armstead, Floor: Josh Uche" },
    { rank: 29, name: "Caleb Banks", position: "DL", school: "Florida", height: "6'6\"", weight: 329, grade: "6.60", tier: "Round 1", strengths: "Length, athleticism, upside", comparison: "Ceiling: Arik Armstead, Floor: Derrick Nnadi" },
    { rank: 30, name: "Brandon Cisse", position: "CB", school: "South Carolina", height: "6'0\"", weight: 190, grade: "6.68", tier: "Round 1", strengths: "Speed, ball skills, physicality", comparison: "Ceiling: Jalen Ramsey, Floor: Byron Murphy" },
    { rank: 31, name: "Akheem Mesidor", position: "EDGE", school: "Miami", height: "6'3\"", weight: 280, grade: "6.75", tier: "Round 1", strengths: "Power, motor, inside rush ability", comparison: "Ceiling: Montez Sweat, Floor: Romeo Okwara" },
    { rank: 32, name: "Monroe Freeling", position: "OT", school: "Georgia", height: "6'7\"", weight: 315, grade: "6.58", tier: "Round 1", strengths: "Length, technique, developmental", comparison: "Ceiling: Tristan Wirfs, Floor: Walker Little" },
    { rank: 33, name: "Colton Hood", position: "CB", school: "Tennessee", height: "6'0\"", weight: 195, grade: "6.65", tier: "Round 1", strengths: "Technique, speed, physicality", comparison: "Ceiling: Jaire Alexander, Floor: Sean Murphy-Bunting" },
    { rank: 34, name: "Emmanuel McNeil-Warren", position: "S", school: "Toledo", height: "6'2\"", weight: 202, grade: "6.55", tier: "Round 1", strengths: "Range, instincts, ball skills", comparison: "Ceiling: Kevin Byard, Floor: Marcus Gilchrist" },
    { rank: 35, name: "Anthony Hill Jr.", position: "LB", school: "Texas", height: "6'3\"", weight: 235, grade: "6.60", tier: "Round 1", strengths: "Speed, tackling, blitz ability", comparison: "Ceiling: Devin White, Floor: Jarrad Davis" },
    { rank: 36, name: "Emmanuel Pregnon", position: "IOL", school: "Oregon", height: "6'5\"", weight: 320, grade: "6.55", tier: "Round 2", strengths: "Power, athleticism, versatility", comparison: "Ceiling: Damien Lewis, Floor: Cody Whitehair" },
    { rank: 37, name: "Lee Hunter", position: "DL", school: "Texas Tech", height: "6'4\"", weight: 330, grade: "6.52", tier: "Round 2", strengths: "Size, power, run defense", comparison: "Ceiling: D.J. Reader, Floor: Tyler Shelvin" },
    { rank: 38, name: "Dillon Thieneman", position: "S", school: "Oregon", height: "6'2\"", weight: 210, grade: "6.50", tier: "Round 1", strengths: "Ball skills, range, tackling", comparison: "Ceiling: Kevin Byard, Floor: Marcus Gilchrist" },
    { rank: 39, name: "Blake Miller", position: "OT", school: "Clemson", height: "6'6\"", weight: 310, grade: "6.48", tier: "Round 2", strengths: "Technique, power, run blocking", comparison: "Ceiling: Mitch Morse, Floor: Chukwuma Okorafor" },
    { rank: 40, name: "R Mason Thomas", position: "EDGE", school: "Oklahoma", height: "6'2\"", weight: 249, grade: "6.50", tier: "Round 2", strengths: "Speed, bend, motor", comparison: "Ceiling: Brian Burns, Floor: Josh Uche" },
    { rank: 41, name: "Chris Bell", position: "WR", school: "Louisville", height: "6'2\"", weight: 220, grade: "6.48", tier: "Round 2", strengths: "Size, contested catches, red zone", comparison: "Ceiling: Michael Thomas, Floor: Zay Jones" },
    { rank: 42, name: "Christen Miller", position: "DL", school: "Georgia", height: "6'4\"", weight: 305, grade: "6.45", tier: "Round 2", strengths: "Power, run defense, developmental", comparison: "Ceiling: Fletcher Cox, Floor: Ed Oliver" },
    { rank: 43, name: "Zion Young", position: "EDGE", school: "Missouri", height: "6'5\"", weight: 262, grade: "6.48", tier: "Round 2", strengths: "Length, power, motor", comparison: "Ceiling: Arik Armstead, Floor: Rasheem Green" },
    { rank: 44, name: "Gennings Dunker", position: "OT", school: "Iowa", height: "6'5\"", weight: 316, grade: "6.45", tier: "Round 2", strengths: "Power, run blocking, developmental", comparison: "Ceiling: Tristan Wirfs, Floor: Walker Little" },
    { rank: 45, name: "Chris Johnson", position: "CB", school: "San Diego State", height: "6'0\"", weight: 195, grade: "6.48", tier: "Round 2", strengths: "Ball skills, physicality, instincts", comparison: "Ceiling: Jalen Ramsey, Floor: Tre'Davious White" },
    { rank: 46, name: "Keith Abney II", position: "CB", school: "Arizona State", height: "6'0\"", weight: 190, grade: "6.45", tier: "Round 2", strengths: "Speed, coverage, ball skills", comparison: "Ceiling: Asante Samuel Jr., Floor: Damon Arnette" },
    { rank: 47, name: "D'Angelo Ponds", position: "CB", school: "Indiana", height: "5'9\"", weight: 173, grade: "6.42", tier: "Round 2", strengths: "Quickness, instincts, tackling", comparison: "Ceiling: Kenny Moore II, Floor: Tavon Young" },
    { rank: 48, name: "Germie Bernard", position: "WR", school: "Alabama", height: "6'1\"", weight: 202, grade: "6.45", tier: "Round 2", strengths: "Route running, contested catches, speed", comparison: "Ceiling: Chris Godwin, Floor: Tyler Boyd" },
    { rank: 49, name: "Max Iheanachor", position: "OT", school: "Arizona State", height: "6'6\"", weight: 330, grade: "6.42", tier: "Round 2", strengths: "Size, power, developmental", comparison: "Ceiling: Mekhi Becton, Floor: Germain Ifedi" },
    { rank: 50, name: "A.J. Haulcy", position: "S", school: "LSU", height: "6'0\"", weight: 222, grade: "6.40", tier: "Round 2", strengths: "Instincts, tackling, coverage", comparison: "Ceiling: Xavier McKinney, Floor: Terrell Edmunds" },

    // ROUNDS 3-7 PROSPECTS (Real players from sources)
    { rank: 51, name: "Jake Golday", position: "LB", school: "Cincinnati", height: "6'4\"", weight: 240, grade: "6.38", tier: "Round 3", strengths: "Speed, tackling, coverage", comparison: "Ceiling: Alex Anzalone, Floor: Krys Barnes" },
    { rank: 52, name: "Chris Brazzell II", position: "WR", school: "Tennessee", height: "6'5\"", weight: 200, grade: "6.38", tier: "Round 3", strengths: "Size, contested catches, deep threat", comparison: "Ceiling: Courtland Sutton, Floor: Breshad Perriman" },
    { rank: 53, name: "Caleb Tiernan", position: "OT", school: "Northwestern", height: "6'7\"", weight: 329, grade: "6.35", tier: "Round 3", strengths: "Size, technique, developmental", comparison: "Ceiling: Jonah Williams, Floor: Walker Little" },
    { rank: 54, name: "LT Overton", position: "EDGE", school: "Alabama", height: "6'5\"", weight: 283, grade: "6.35", tier: "Round 3", strengths: "Power, run defense, motor", comparison: "Ceiling: Montez Sweat, Floor: Romeo Okwara" },
    { rank: 55, name: "Keionte Scott", position: "CB", school: "Miami", height: "6'0\"", weight: 195, grade: "6.35", tier: "Round 3", strengths: "Speed, physicality, ball skills", comparison: "Ceiling: Anthony Averett, Floor: Nate Hobbs" },
    { rank: 56, name: "Jadarian Price", position: "RB", school: "Notre Dame", height: "5'11\"", weight: 210, grade: "6.35", tier: "Round 3", strengths: "Vision, contact balance, return ability", comparison: "Ceiling: Alvin Kamara, Floor: Nyheim Hines" },
    { rank: 57, name: "Kamari Ramsey", position: "S", school: "USC", height: "6'0\"", weight: 205, grade: "6.32", tier: "Round 3", strengths: "Coverage instincts, range, tackling", comparison: "Ceiling: Jessie Bates III, Floor: Jayron Kearse" },
    { rank: 58, name: "Elijah Sarratt", position: "WR", school: "Indiana", height: "6'2\"", weight: 209, grade: "6.32", tier: "Round 3", strengths: "Size, red zone threat, contested catches", comparison: "Ceiling: Michael Thomas, Floor: Equanimeous St. Brown" },
    { rank: 59, name: "Omarion Cooper Jr.", position: "WR", school: "Indiana", height: "6'0\"", weight: 204, grade: "6.30", tier: "Round 3", strengths: "Route running, hands, possession", comparison: "Ceiling: Tyler Boyd, Floor: Auden Tate" },
    { rank: 60, name: "Connor Lew", position: "IOL", school: "Auburn", height: "6'3\"", weight: 303, grade: "6.30", tier: "Round 3", strengths: "Movement skills, power, technique", comparison: "Ceiling: Ryan Kelly, Floor: Matt Skura" },
    { rank: 61, name: "Chase Bisontis", position: "IOL", school: "Texas A&M", height: "6'6\"", weight: 330, grade: "6.28", tier: "Round 3", strengths: "Size, power, run blocking", comparison: "Ceiling: Shaq Mason, Floor: Josh Jones" },
    { rank: 62, name: "Gabe Jacas", position: "EDGE", school: "Illinois", height: "6'3\"", weight: 275, grade: "6.28", tier: "Round 3", strengths: "Speed rush, bend, motor", comparison: "Ceiling: Yannick Ngakoue, Floor: Josh Uche" },
    { rank: 63, name: "Max Klare", position: "TE", school: "Ohio State", height: "6'4\"", weight: 236, grade: "6.28", tier: "Round 3", strengths: "Receiving ability, hands, route running", comparison: "Ceiling: Cole Kmet, Floor: Durham Smythe" },
    { rank: 64, name: "Deontae Lawson", position: "LB", school: "Alabama", height: "6'2\"", weight: 239, grade: "6.25", tier: "Round 3", strengths: "Speed, coverage, tackling", comparison: "Ceiling: Patrick Queen, Floor: Akeem Davis-Gaither" },
    { rank: 65, name: "Joshua Josephs", position: "EDGE", school: "Tennessee", height: "6'3\"", weight: 240, grade: "6.25", tier: "Round 3", strengths: "Speed, bend, motor", comparison: "Ceiling: Brian Burns, Floor: Josh Uche" },
    { rank: 66, name: "Malik Muhammad", position: "CB", school: "Texas", height: "6'0\"", weight: 178, grade: "6.25", tier: "Round 3", strengths: "Speed, coverage, ball skills", comparison: "Ceiling: Asante Samuel Jr., Floor: Damon Arnette" },
    { rank: 67, name: "Isaiah World", position: "OT", school: "Oregon", height: "6'8\"", weight: 312, grade: "6.22", tier: "Round 4", strengths: "Length, athleticism, developmental", comparison: "Ceiling: Kolton Miller, Floor: Bobby Hart" },
    { rank: 68, name: "Josiah Trotter", position: "LB", school: "Missouri", height: "6'2\"", weight: 237, grade: "6.22", tier: "Round 4", strengths: "Physicality, run defense, instincts", comparison: "Ceiling: Eric Kendricks, Floor: Sio Moore" },
    { rank: 69, name: "Domonique Orange", position: "DL", school: "Iowa State", height: "6'4\"", weight: 325, grade: "6.20", tier: "Round 4", strengths: "Size, power, run defense", comparison: "Ceiling: D.J. Reader, Floor: Tyler Shelvin" },
    { rank: 70, name: "Ja'Kobi Lane", position: "WR", school: "USC", height: "6'4\"", weight: 195, grade: "6.20", tier: "Round 4", strengths: "Size, jump ball, red zone threat", comparison: "Ceiling: Plaxico Burress, Floor: JJ Arcega-Whiteside" },
    { rank: 71, name: "Malachi Fields", position: "WR", school: "Notre Dame", height: "6'4\"", weight: 220, grade: "6.18", tier: "Round 4", strengths: "Size, contested catches, deep threat", comparison: "Ceiling: Courtland Sutton, Floor: Miles Boykin" },
    { rank: 72, name: "Jacob Rodriguez", position: "LB", school: "Texas Tech", height: "6'1\"", weight: 235, grade: "6.18", tier: "Round 4", strengths: "Production, tackling, instincts", comparison: "Ceiling: Blake Martinez, Floor: Ben Boulware" },
    { rank: 73, name: "Antonio Williams", position: "WR", school: "Clemson", height: "5'11\"", weight: 190, grade: "6.15", tier: "Round 4", strengths: "Quickness, route running, YAC", comparison: "Ceiling: Tyler Lockett, Floor: Darius Slayton" },
    { rank: 74, name: "Eli Stowers", position: "TE", school: "Vanderbilt", height: "6'4\"", weight: 235, grade: "6.15", tier: "Round 4", strengths: "Athleticism, mismatch ability, hands", comparison: "Ceiling: George Kittle, Floor: Cole Kmet" },
    { rank: 75, name: "Derrick Moore", position: "EDGE", school: "Michigan", height: "6'3\"", weight: 256, grade: "6.15", tier: "Round 4", strengths: "Speed rush, bend, production", comparison: "Ceiling: Brian Burns, Floor: Josh Uche" },
    { rank: 76, name: "Romello Height", position: "EDGE", school: "Texas Tech", height: "6'3\"", weight: 240, grade: "6.12", tier: "Round 4", strengths: "Speed, bend, motor", comparison: "Ceiling: Yannick Ngakoue, Floor: Josh Uche" },
    { rank: 77, name: "Trinidad Chambliss", position: "QB", school: "Ole Miss", height: "6'1\"", weight: 205, grade: "6.12", tier: "Round 4", strengths: "Accuracy, processing, leadership", comparison: "Ceiling: Drew Brees, Floor: Case Keenum" },
    { rank: 78, name: "Julian Neal", position: "CB", school: "Arkansas", height: "6'2\"", weight: 208, grade: "6.12", tier: "Round 4", strengths: "Size, physicality, ball skills", comparison: "Ceiling: Richard Sherman, Floor: Ahkello Witherspoon" },
    { rank: 79, name: "Dani Dennis-Sutton", position: "EDGE", school: "Penn State", height: "6'5\"", weight: 270, grade: "6.10", tier: "Round 4", strengths: "Length, power, motor", comparison: "Ceiling: Montez Sweat, Floor: Romeo Okwara" },
    { rank: 80, name: "Darrell Jackson Jr.", position: "DL", school: "Florida State", height: "6'5\"", weight: 337, grade: "6.10", tier: "Round 4", strengths: "Size, power, run defense", comparison: "Ceiling: Vita Vea, Floor: Danny Shelton" },
    { rank: 81, name: "Jonah Coleman", position: "RB", school: "Washington", height: "5'9\"", weight: 220, grade: "6.10", tier: "Round 4", strengths: "Power, vision, contact balance", comparison: "Ceiling: Nick Chubb, Floor: Gus Edwards" },
    { rank: 82, name: "Michael Trigg", position: "TE", school: "Baylor", height: "6'4\"", weight: 240, grade: "6.08", tier: "Round 4", strengths: "Receiving ability, size, red zone", comparison: "Ceiling: Foster Moreau, Floor: Donald Parham" },
    { rank: 83, name: "Jake Slaughter", position: "IOL", school: "Florida", height: "6'4\"", weight: 294, grade: "6.08", tier: "Round 4", strengths: "Technique, power, versatility", comparison: "Ceiling: Damien Lewis, Floor: Cody Whitehair" },
    { rank: 84, name: "Emmett Johnson", position: "RB", school: "Nebraska", height: "6'0\"", weight: 210, grade: "6.08", tier: "Round 4", strengths: "Vision, patience, contact balance", comparison: "Ceiling: Josh Jacobs, Floor: Alexander Mattison" },
    { rank: 85, name: "Davison Igbinosun", position: "CB", school: "Ohio State", height: "6'2\"", weight: 193, grade: "6.08", tier: "Round 4", strengths: "Size, press coverage, ball skills", comparison: "Ceiling: Richard Sherman, Floor: Ahkello Witherspoon" },
    { rank: 86, name: "Anthony Lucas", position: "EDGE", school: "USC", height: "6'5\"", weight: 285, grade: "6.05", tier: "Round 4", strengths: "Size, power, developmental", comparison: "Ceiling: Arik Armstead, Floor: Rasheem Green" },
    { rank: 87, name: "Genesis Smith", position: "S", school: "Arizona", height: "6'2\"", weight: 204, grade: "6.05", tier: "Round 4", strengths: "Range, tackling, instincts", comparison: "Ceiling: Kevin Byard, Floor: Marcus Gilchrist" },
    { rank: 88, name: "Chandler Rivers", position: "CB", school: "Duke", height: "5'10\"", weight: 180, grade: "6.05", tier: "Round 5", strengths: "Technique, coverage, ball skills", comparison: "Ceiling: Kenny Moore II, Floor: Tavon Young" },
    { rank: 89, name: "Deion Burks", position: "WR", school: "Oklahoma", height: "5'9\"", weight: 189, grade: "6.05", tier: "Round 5", strengths: "Speed, quickness, return ability", comparison: "Ceiling: Mecole Hardman, Floor: Ray-Ray McCloud" },
    { rank: 90, name: "Austin Barber", position: "OT", school: "Florida", height: "6'6\"", weight: 322, grade: "6.02", tier: "Round 5", strengths: "Size, power, developmental", comparison: "Ceiling: Jawaan Taylor, Floor: Bobby Hart" },
    { rank: 91, name: "Carson Beck", position: "QB", school: "Miami", height: "6'4\"", weight: 220, grade: "6.02", tier: "Round 5", strengths: "Size, arm strength, pocket presence", comparison: "Ceiling: Ben Roethlisberger, Floor: Christian Hackenberg" },
    { rank: 92, name: "Will Lee III", position: "CB", school: "Texas A&M", height: "6'3\"", weight: 190, grade: "6.02", tier: "Round 5", strengths: "Size, length, press coverage", comparison: "Ceiling: Richard Sherman, Floor: Ahkello Witherspoon" },
    { rank: 93, name: "Treydan Stukes", position: "CB", school: "Arizona", height: "6'2\"", weight: 200, grade: "6.00", tier: "Round 5", strengths: "Size, physicality, ball skills", comparison: "Ceiling: Patrick Surtain II, Floor: Fabian Moreau" },
    { rank: 94, name: "Devin Moore", position: "CB", school: "Florida", height: "6'2\"", weight: 198, grade: "6.00", tier: "Round 5", strengths: "Size, length, developmental", comparison: "Ceiling: Jaycee Horn, Floor: Kei'Trel Clark" },
    { rank: 95, name: "Taurean York", position: "LB", school: "Texas A&M", height: "6'0\"", weight: 235, grade: "6.00", tier: "Round 5", strengths: "Tackling, instincts, run defense", comparison: "Ceiling: Eric Kendricks, Floor: Sio Moore" },
    { rank: 96, name: "Nicholas Singleton", position: "RB", school: "Penn State", height: "6'0\"", weight: 224, grade: "6.00", tier: "Round 5", strengths: "Speed, power, home run ability", comparison: "Ceiling: Saquon Barkley, Floor: Sony Michel" },
    { rank: 97, name: "Jack Endries", position: "TE", school: "Texas", height: "6'4\"", weight: 236, grade: "5.98", tier: "Round 5", strengths: "Receiving, route running, hands", comparison: "Ceiling: Cole Kmet, Floor: Durham Smythe" },
    { rank: 98, name: "Skyler Bell", position: "WR", school: "UConn", height: "6'0\"", weight: 185, grade: "5.98", tier: "Round 5", strengths: "Speed, production, return ability", comparison: "Ceiling: Tyler Lockett, Floor: Darius Slayton" },
    { rank: 99, name: "Dontay Corleone", position: "DL", school: "Cincinnati", height: "6'2\"", weight: 318, grade: "5.98", tier: "Round 5", strengths: "Size, power, run defense", comparison: "Ceiling: D.J. Reader, Floor: Tyler Shelvin" },
    { rank: 100, name: "Harold Perkins Jr.", position: "LB", school: "LSU", height: "6'1\"", weight: 225, grade: "5.95", tier: "Round 5", strengths: "Speed, blitz ability, coverage", comparison: "Ceiling: Micah Parsons, Floor: Jarrad Davis" }
];

// ==========================================
// PFF POSITIONAL RANKINGS 2026
// ==========================================

const pffPositionalRankings = {
    QB: [
        { rank: 1, name: "Fernando Mendoza", school: "Indiana", overallRank: 4, grade: 90.0, oneLineSummary: "Accurate thrower with excellent size and elite ball placement. Franchise QB material." },
        { rank: 2, name: "Ty Simpson", school: "Alabama", overallRank: 24, grade: 88.0, oneLineSummary: "Sound mechanics and accuracy with quick feet but limited starting experience." },
        { rank: 3, name: "Trinidad Chambliss", school: "Ole Miss", overallRank: 77, grade: 85.0, oneLineSummary: "Accurate with excellent leadership but size concerns for some scouts." },
        { rank: 4, name: "Carson Beck", school: "Miami", overallRank: 91, grade: 84.0, oneLineSummary: "Physical tools have never been the question. Needs consistency." }
    ],
    RB: [
        { rank: 1, name: "Jeremiyah Love", school: "Notre Dame", overallRank: 9, grade: 91.5, oneLineSummary: "Reggie Bush-like dynamo with vision, burst, and elite receiving ability." },
        { rank: 2, name: "Jadarian Price", school: "Notre Dame", overallRank: 56, grade: 86.5, oneLineSummary: "Compact runner with terrific vision and elite kick return ability." },
        { rank: 3, name: "Emmett Johnson", school: "Nebraska", overallRank: 84, grade: 85.0, oneLineSummary: "Special lateral agility with elite vision and patience." },
        { rank: 4, name: "Jonah Coleman", school: "Washington", overallRank: 81, grade: 85.5, oneLineSummary: "Three-down back despite limited athleticism. Reliable in pass pro." },
        { rank: 5, name: "Nicholas Singleton", school: "Penn State", overallRank: 96, grade: 83.5, oneLineSummary: "Explosive blend of power and speed with home run potential." }
    ],
    WR: [
        { rank: 1, name: "Carnell Tate", school: "Ohio State", overallRank: 7, grade: 92.0, oneLineSummary: "Tall, long wideout who attacks leverage and tracks ball beautifully." },
        { rank: 2, name: "Jordyn Tyson", school: "Arizona State", overallRank: 10, grade: 90.0, oneLineSummary: "Explosive receiver who wins on 50/50 balls. Uncoverable in red zone." },
        { rank: 3, name: "Makai Lemon", school: "USC", overallRank: 12, grade: 89.5, oneLineSummary: "Warrior with RB body and elite slot ability." },
        { rank: 4, name: "Zachariah Branch", school: "Georgia", overallRank: 23, grade: 87.0, oneLineSummary: "Lightning quick with track speed. Dynamic after catch." },
        { rank: 5, name: "Denzel Boston", school: "Washington", overallRank: 20, grade: 86.5, oneLineSummary: "Big-framed wideout with exceptional ball skills." }
    ],
    TE: [
        { rank: 1, name: "Kenyon Sadiq", school: "Oregon", overallRank: 17, grade: 88.0, oneLineSummary: "Versatile explosive weapon for modern NFL." },
        { rank: 2, name: "Max Klare", school: "Ohio State", overallRank: 63, grade: 85.5, oneLineSummary: "Natural receiving gifts with blocking limitations." },
        { rank: 3, name: "Eli Stowers", school: "Vanderbilt", overallRank: 74, grade: 85.0, oneLineSummary: "Former QB with elite athleticism. Movable chess piece." },
        { rank: 4, name: "Jack Endries", school: "Texas", overallRank: 97, grade: 83.0, oneLineSummary: "Fundamentally sound receiver who gets open." },
        { rank: 5, name: "Michael Trigg", school: "Baylor", overallRank: 82, grade: 82.5, oneLineSummary: "Weapon between the numbers with mismatch size." }
    ],
    OT: [
        { rank: 1, name: "Francis Mauigoa", school: "Miami", overallRank: 6, grade: 90.0, oneLineSummary: "True mauler who destroys pass rushers at POA." },
        { rank: 2, name: "Spencer Fano", school: "Utah", overallRank: 8, grade: 89.0, oneLineSummary: "Technically sound with good punch. Ideal zone fit." },
        { rank: 3, name: "Caleb Lomu", school: "Utah", overallRank: 21, grade: 87.5, oneLineSummary: "Agile bookend with franchise LT upside." },
        { rank: 4, name: "Kadyn Proctor", school: "Alabama", overallRank: 27, grade: 85.0, oneLineSummary: "Rare combination of mass and movement." },
        { rank: 5, name: "Monroe Freeling", school: "Georgia", overallRank: 32, grade: 84.5, oneLineSummary: "Ideal size and bend with starting LT ability." }
    ],
    IOL: [
        { rank: 1, name: "Olaivavega Ioane", school: "Penn State", overallRank: 18, grade: 88.5, oneLineSummary: "Dominant LG with strength and agility." },
        { rank: 2, name: "Connor Lew", school: "Auburn", overallRank: 60, grade: 87.0, oneLineSummary: "Center with exceptional movement skills." },
        { rank: 3, name: "Emmanuel Pregnon", school: "Oregon", overallRank: 36, grade: 86.0, oneLineSummary: "Day-one contributor with power and technique." },
        { rank: 4, name: "Chase Bisontis", school: "Texas A&M", overallRank: 61, grade: 85.0, oneLineSummary: "Thick, powerful guard with run-blocking temperament." },
        { rank: 5, name: "Jake Slaughter", school: "Florida", overallRank: 83, grade: 84.0, oneLineSummary: "Center with blend of intellect and physicality." }
    ],
    EDGE: [
        { rank: 1, name: "Rueben Bain Jr.", school: "Miami", overallRank: 2, grade: 93.0, oneLineSummary: "Thick, powerful edge with violent hands and non-stop motor." },
        { rank: 2, name: "David Bailey", school: "Texas Tech", overallRank: 5, grade: 92.0, oneLineSummary: "Ultra-explosive with elite production and get-off." },
        { rank: 3, name: "Akheem Mesidor", school: "Miami", overallRank: 31, grade: 89.5, oneLineSummary: "Ideal frame with relentless motor and power rush." },
        { rank: 4, name: "Keldric Faulk", school: "Auburn", overallRank: 15, grade: 89.0, oneLineSummary: "Perfect 4-3 DE frame with powerful hands." },
        { rank: 5, name: "Cashius Howell", school: "Texas A&M", overallRank: 25, grade: 87.5, oneLineSummary: "Speed rush, bend, and motor." }
    ],
    DL: [
        { rank: 1, name: "Peter Woods", school: "Clemson", overallRank: 16, grade: 87.5, oneLineSummary: "First-step quickness with scheme versatility." },
        { rank: 2, name: "Kayden McDonald", school: "Ohio State", overallRank: 19, grade: 87.0, oneLineSummary: "Big Ten DL of the Year with strength and quickness." },
        { rank: 3, name: "Caleb Banks", school: "Florida", overallRank: 29, grade: 85.5, oneLineSummary: "Tall, long athlete with twitch in hands." },
        { rank: 4, name: "Lee Hunter", school: "Texas Tech", overallRank: 37, grade: 85.0, oneLineSummary: "Massive run-stuffer who demands double teams." },
        { rank: 5, name: "Christen Miller", school: "Georgia", overallRank: 42, grade: 84.0, oneLineSummary: "Disruptive 3-technique with violent hands." }
    ],
    LB: [
        { rank: 1, name: "Arvell Reese", school: "Ohio State", overallRank: 1, grade: 92.0, oneLineSummary: "Complete player with elite burst and pass-rush ability." },
        { rank: 2, name: "Sonny Styles", school: "Ohio State", overallRank: 13, grade: 90.0, oneLineSummary: "Former safety with LB size and elite speed." },
        { rank: 3, name: "CJ Allen", school: "Georgia", overallRank: 22, grade: 87.0, oneLineSummary: "Three-down LB with excellent read-react skills." },
        { rank: 4, name: "Anthony Hill Jr.", school: "Texas", overallRank: 35, grade: 86.0, oneLineSummary: "Modern LB built for speed and versatility." },
        { rank: 5, name: "Jake Golday", school: "Cincinnati", overallRank: 51, grade: 85.0, oneLineSummary: "Speed-based LB with fantastic lateral range." }
    ],
    CB: [
        { rank: 1, name: "Mansoor Delane", school: "LSU", overallRank: 11, grade: 89.0, oneLineSummary: "Most instinctive CB in class with elite ball skills." },
        { rank: 2, name: "Jermod McCoy", school: "Tennessee", overallRank: 14, grade: 88.5, oneLineSummary: "Scheme versatile with ball-hawking traits." },
        { rank: 3, name: "Avieon Terrell", school: "Clemson", overallRank: 26, grade: 87.0, oneLineSummary: "Elite ball skills and fluid athleticism." },
        { rank: 4, name: "Brandon Cisse", school: "South Carolina", overallRank: 30, grade: 86.5, oneLineSummary: "Twitchy cover corner with elite 4.35 speed." },
        { rank: 5, name: "Colton Hood", school: "Tennessee", overallRank: 33, grade: 86.0, oneLineSummary: "Complete player with 4.4 speed and production." }
    ],
    S: [
        { rank: 1, name: "Caleb Downs", school: "Ohio State", overallRank: 3, grade: 92.0, oneLineSummary: "Defensive coordinator on the field with elite instincts." },
        { rank: 2, name: "Emmanuel McNeil-Warren", school: "Toledo", overallRank: 34, grade: 87.5, oneLineSummary: "Versatile playmaker who can play free or box." },
        { rank: 3, name: "Dillon Thieneman", school: "Oregon", overallRank: 38, grade: 87.0, oneLineSummary: "Tall, long safety with fantastic production." },
        { rank: 4, name: "A.J. Haulcy", school: "LSU", overallRank: 50, grade: 85.0, oneLineSummary: "Physical box safety with good instincts." },
        { rank: 5, name: "Kamari Ramsey", school: "USC", overallRank: 57, grade: 84.5, oneLineSummary: "Coverage instincts border on exceptional." }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pffBigBoardData, pffPositionalRankings };
}

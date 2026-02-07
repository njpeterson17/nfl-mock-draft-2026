/**
 * NFL Mock Draft - Player Image Database
 * Complete mapping of top 100 prospects to image sources
 * 
 * Data sources:
 * - Local: images/players/{name}.jpg (66 available)
 * - ESPN: https://a.espncdn.com/i/headshots/college-football/players/full/{ID}.png
 * - CBS: https://sports.cbsimg.net/images/football/players/600x800/{ID}.jpg
 * - Sports Reference: https://sports-reference.com/...
 * - Team logos: ESPN CDN team logos as fallback
 */

const PlayerImageDatabase = {
    // ==========================================
    // TOP 100 PROSPECTS - COMPLETE IMAGE DATA
    // ==========================================
    
    playerImageData: {
        // TIER 1: ELITE (Top 5)
        "Fernando Mendoza": {
            rank: 1,
            position: "QB",
            school: "Indiana",
            local: "images/players/fernando-mendoza.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431460.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843907.jpg",
            hasLocal: true,
            teamColorKey: "indiana"
        },
        "Caleb Downs": {
            rank: 2,
            position: "S",
            school: "Ohio State",
            local: "images/players/caleb-downs.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431612.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844025.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Arvell Reese": {
            rank: 3,
            position: "LB",
            school: "Ohio State",
            local: "images/players/arvell-reese.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431614.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844027.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Jeremiyah Love": {
            rank: 2,
            position: "RB",
            school: "Notre Dame",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432859.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845761.jpg",
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Rueben Bain Jr.": {
            rank: 5,
            position: "EDGE",
            school: "Miami",
            local: "images/players/rueben-bain-jr.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431648.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843935.jpg",
            hasLocal: true,
            teamColorKey: "miami"
        },

        // TIER 2: ROUND 1 (Picks 6-32)
        "David Bailey": {
            rank: 6,
            position: "EDGE",
            school: "Texas Tech",
            local: "images/players/david-bailey.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431439.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasTech"
        },
        "Francis Mauigoa": {
            rank: 7,
            position: "OT",
            school: "Miami",
            local: "images/players/francis-mauigoa.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431647.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843934.jpg",
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Carnell Tate": {
            rank: 8,
            position: "WR",
            school: "Ohio State",
            local: "images/players/carnell-tate.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431610.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844024.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Sonny Styles": {
            rank: 9,
            position: "LB",
            school: "Ohio State",
            local: "images/players/sonny-styles.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431615.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844028.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Jordyn Tyson": {
            rank: 10,
            position: "WR",
            school: "Arizona State",
            local: "images/players/jordyn-tyson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432851.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizonaState"
        },
        "Mansoor Delane": {
            rank: 11,
            position: "CB",
            school: "Virginia Tech",
            local: "images/players/mansoor-delane.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431607.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "virginiaTech"
        },
        "Spencer Fano": {
            rank: 12,
            position: "OT",
            school: "Utah",
            local: "images/players/spencer-fano.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431938.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844130.jpg",
            hasLocal: true,
            teamColorKey: "utah"
        },
        "Makai Lemon": {
            rank: 13,
            position: "WR",
            school: "USC",
            local: "images/players/makai-lemon.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432856.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845765.jpg",
            hasLocal: true,
            teamColorKey: "usc"
        },
        "Keldric Faulk": {
            rank: 14,
            position: "EDGE",
            school: "Auburn",
            local: "images/players/keldric-faulk.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431109.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843385.jpg",
            hasLocal: true,
            teamColorKey: "auburn"
        },
        "Peter Woods": {
            rank: 15,
            position: "DL",
            school: "Clemson",
            local: "images/players/peter-woods.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431443.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843751.jpg",
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Jermod McCoy": {
            rank: 16,
            position: "CB",
            school: "Tennessee",
            local: "images/players/jermod-mccoy.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432535.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845342.jpg",
            hasLocal: true,
            teamColorKey: "tennessee"
        },
        "T.J. Parker": {
            rank: 17,
            position: "EDGE",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431444.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Kenyon Sadiq": {
            rank: 18,
            position: "TE",
            school: "Oregon",
            local: "images/players/kenyon-sadiq.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431965.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "oregon"
        },
        "Ty Simpson": {
            rank: 19,
            position: "QB",
            school: "Alabama",
            local: "images/players/ty-simpson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433312.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845835.jpg",
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Caleb Lomu": {
            rank: 20,
            position: "OT",
            school: "Utah",
            local: "images/players/caleb-lomu.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431939.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844131.jpg",
            hasLocal: true,
            teamColorKey: "utah"
        },
        "Olaivavega Ioane": {
            rank: 21,
            position: "IOL",
            school: "Penn State",
            local: "images/players/olaivavega-ioane.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431266.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Zachariah Branch": {
            rank: 22,
            position: "WR",
            school: "Georgia",
            local: "images/players/zachariah-branch.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432862.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845763.jpg",
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Dante Moore": {
            rank: 23,
            position: "QB",
            school: "Oregon",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432473.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Kadyn Proctor": {
            rank: 24,
            position: "OT",
            school: "Alabama",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431387.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843631.jpg",
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Trinidad Chambliss": {
            rank: 25,
            position: "QB",
            school: "Ole Miss",
            local: "images/players/trinidad-chambliss.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432528.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "oleMiss"
        },
        "LT Overton": {
            rank: 26,
            position: "DL",
            school: "Texas A&M",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432451.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Malik Reed": {
            rank: 27,
            position: "DL",
            school: "Texas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Emmett Johnson": {
            rank: 28,
            position: "RB",
            school: "Nebraska",
            local: "images/players/emmett-johnson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431420.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "nebraska"
        },
        "Denzel Boston": {
            rank: 29,
            position: "WR",
            school: "Washington",
            local: "images/players/denzel-boston.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431145.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "washington"
        },
        "Emmanuel Pregnon": {
            rank: 30,
            position: "IOL",
            school: "Oregon",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431963.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Ja'Kobi Lane": {
            rank: 31,
            position: "WR",
            school: "USC",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432857.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "usc"
        },
        "Ahmad Moten": {
            rank: 32,
            position: "DL",
            school: "Ohio State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431619.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "ohioState"
        },

        // TIER 3: ROUND 2 (Picks 33-64)
        "Drew Allar": {
            rank: 33,
            position: "QB",
            school: "Penn State",
            local: "images/players/drew-allar.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431264.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843851.jpg",
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Monroe Freeling": {
            rank: 34,
            position: "OT",
            school: "Georgia",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432875.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "KC Concepcion": {
            rank: 35,
            position: "WR",
            school: "Texas A&M",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432458.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Jadarian Price": {
            rank: 36,
            position: "RB",
            school: "Notre Dame",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432860.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Eli Stowers": {
            rank: 37,
            position: "TE",
            school: "Vanderbilt",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432559.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "vanderbilt"
        },
        "Walter Nolen": {
            rank: 38,
            position: "DL",
            school: "Ole Miss",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432531.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Chase Bisontis": {
            rank: 39,
            position: "IOL",
            school: "Texas A&M",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432452.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Jonah Coleman": {
            rank: 40,
            position: "RB",
            school: "Washington",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430916.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "washington"
        },
        "Ja'Den McBurrows": {
            rank: 41,
            position: "CB",
            school: "Miami",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431656.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "miami"
        },
        "Jalen Leach": {
            rank: 42,
            position: "LB",
            school: "Northwestern",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432061.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "northwestern"
        },
        "Garrett Nussmeier": {
            rank: 43,
            position: "QB",
            school: "LSU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431373.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Nick Marsh": {
            rank: 44,
            position: "WR",
            school: "Michigan State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432049.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "michiganState"
        },
        "Max Klare": {
            rank: 45,
            position: "TE",
            school: "Ohio State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431618.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "ohioState"
        },
        "Jaeden Roberts": {
            rank: 46,
            position: "IOL",
            school: "Alabama",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433335.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Carson Beck": {
            rank: 47,
            position: "QB",
            school: "Miami",
            local: "images/players/carson-beck.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4428972.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Xavier Watts": {
            rank: 48,
            position: "S",
            school: "Notre Dame",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432863.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Jordan Burch": {
            rank: 49,
            position: "DL",
            school: "Oregon",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432500.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "D.J. Uiagalelei": {
            rank: 50,
            position: "QB",
            school: "Florida State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432547.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "floridaState"
        },
        "Tacario Davis": {
            rank: 51,
            position: "CB",
            school: "Arizona",
            local: "images/players/tacario-davis.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430923.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizona"
        },
        "Nicholas Singleton": {
            rank: 52,
            position: "RB",
            school: "Penn State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431268.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "pennState"
        },
        "Tyrion Ingram-Dawkins": {
            rank: 53,
            position: "DL",
            school: "Georgia",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432876.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Jack Endries": {
            rank: 54,
            position: "TE",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430931.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Keylan Rutledge": {
            rank: 55,
            position: "IOL",
            school: "Georgia Tech",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433100.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgiaTech"
        },
        "Donovan Jackson": {
            rank: 56,
            position: "IOL",
            school: "Ohio State",
            local: "images/players/donovan-jackson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431620.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Anthony Hill Jr.": {
            rank: 57,
            position: "LB",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430933.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Kyren Lacy": {
            rank: 58,
            position: "WR",
            school: "LSU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431374.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Cade Klubnik": {
            rank: 59,
            position: "QB",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431446.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Caleb Tiernan": {
            rank: 60,
            position: "OT",
            school: "Northwestern",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432062.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "northwestern"
        },
        "Craig Woodson": {
            rank: 61,
            position: "S",
            school: "California",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431168.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "california"
        },
        "Joe Royer": {
            rank: 62,
            position: "TE",
            school: "Cincinnati",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431223.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "cincinnati"
        },
        "Samus Sanders": {
            rank: 63,
            position: "EDGE",
            school: "Colorado",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431934.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "colorado"
        },
        "Sawyer Robertson": {
            rank: 64,
            position: "QB",
            school: "Baylor",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431956.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "baylor"
        },

        // TIER 4: ROUND 3 (Picks 65-100)
        "Demond Claiborne": {
            rank: 65,
            position: "RB",
            school: "Wake Forest",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432160.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "wakeForest"
        },
        "Tommi Hill": {
            rank: 66,
            position: "CB",
            school: "Nebraska",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431421.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "nebraska"
        },
        "Dylan Fairchild": {
            rank: 67,
            position: "IOL",
            school: "Georgia",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432877.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Landon Jackson": {
            rank: 68,
            position: "EDGE",
            school: "Arkansas",
            local: "images/players/landon-jackson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431134.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "arkansas"
        },
        "Vernon Broughton": {
            rank: 69,
            position: "DL",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430937.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Kurtis Rourke": {
            rank: 70,
            position: "QB",
            school: "Indiana",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4360885.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Princely Umanmielen": {
            rank: 71,
            position: "EDGE",
            school: "Ole Miss",
            local: "images/players/princely-umanmielen.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431178.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "oleMiss"
        },
        "Antwaun Powell-Ryland": {
            rank: 72,
            position: "EDGE",
            school: "Virginia Tech",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431608.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "virginiaTech"
        },
        "D.J. Campbell": {
            rank: 73,
            position: "IOL",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430938.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Darius Taylor": {
            rank: 74,
            position: "RB",
            school: "Minnesota",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431402.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "minnesota"
        },
        "Billy Bowman Jr.": {
            rank: 75,
            position: "S",
            school: "Oklahoma",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431630.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oklahoma"
        },
        "Marcus Tate": {
            rank: 76,
            position: "IOL",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431448.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Teddy Knox": {
            rank: 77,
            position: "WR",
            school: "LSU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431377.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Barryn Sorrell": {
            rank: 78,
            position: "EDGE",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430939.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Daylen Everette": {
            rank: 79,
            position: "CB",
            school: "Georgia",
            local: "images/players/daylen-everette.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431182.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Mikel Jones": {
            rank: 80,
            position: "LB",
            school: "Syracuse",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432144.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "syracuse"
        },
        "Jalen Milroe": {
            rank: 81,
            position: "QB",
            school: "Alabama",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433314.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "TreVeyon Henderson": {
            rank: 82,
            position: "RB",
            school: "Ohio State",
            local: "images/players/treveyon-henderson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431624.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844036.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Rod Moore": {
            rank: 83,
            position: "S",
            school: "Michigan",
            local: "images/players/rod-moore.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431327.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "michigan"
        },
        "Donte Banton": {
            rank: 84,
            position: "DL",
            school: "Miami",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431657.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "miami"
        },
        "Jordan Shipp": {
            rank: 85,
            position: "WR",
            school: "Florida",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431191.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "florida"
        },
        "Branson Taylor": {
            rank: 86,
            position: "OT",
            school: "Pittsburgh",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432087.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "pittsburgh"
        },
        "Justin Joly": {
            rank: 87,
            position: "TE",
            school: "NC State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431510.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "ncState"
        },
        "Kris Hutson": {
            rank: 88,
            position: "WR",
            school: "Washington",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431146.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "washington"
        },
        "Colston Loveland": {
            rank: 89,
            position: "TE",
            school: "Michigan",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431328.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "Cooper Mays": {
            rank: 90,
            position: "IOL",
            school: "Tennessee",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432540.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "tennessee"
        },
        "Camar Wheaton": {
            rank: 91,
            position: "RB",
            school: "SMU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432494.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "smu"
        },
        "Robert Longerbeam": {
            rank: 92,
            position: "CB",
            school: "Rutgers",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432093.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "rutgers"
        },
        "Tonka Hemingway": {
            rank: 93,
            position: "DL",
            school: "South Carolina",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432111.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "southCarolina"
        },
        "Joshua Farmer": {
            rank: 94,
            position: "DL",
            school: "Florida State",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432544.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "floridaState"
        },
        "Bryce Cabeldue": {
            rank: 95,
            position: "OT",
            school: "Kansas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431293.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "kansas"
        },
        "Branson Combs": {
            rank: 96,
            position: "LB",
            school: "Kentucky",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431347.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "kentucky"
        },
        "Eugene Wilson III": {
            rank: 97,
            position: "WR",
            school: "Florida",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431192.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "florida"
        },
        "Hayden Conner": {
            rank: 98,
            position: "IOL",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430940.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Payton Page": {
            rank: 99,
            position: "DL",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431449.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Tyler Baron": {
            rank: 100,
            position: "EDGE",
            school: "Tennessee",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432542.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "tennessee"
        },
        "Luther Burden III": {
            rank: 31,
            position: "WR",
            school: "Missouri",
            local: "images/players/luther-burden.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431349.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "missouri"
        },

        // ADDITIONAL 2026 PROSPECTS WITH ESPN IDs
        "Cade Klubnik": {
            rank: 101,
            position: "QB",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4685413.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Taylen Green": {
            rank: 102,
            position: "QB",
            school: "Arkansas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431325.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "arkansas"
        },
        "Evan Stewart": {
            rank: 103,
            position: "WR",
            school: "Oregon",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4685565.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Kevin Coleman Jr.": {
            rank: 104,
            position: "WR",
            school: "Missouri",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4685307.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "missouri"
        },
        "Barion Brown": {
            rank: 105,
            position: "WR",
            school: "LSU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4698597.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Tackett Curtis": {
            rank: 106,
            position: "LB",
            school: "UCF",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870659.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "ucf"
        },
        "Anthony Hill Jr.": {
            rank: 107,
            position: "LB",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870805.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Avieon Terrell": {
            rank: 108,
            position: "CB",
            school: "Clemson",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870988.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Malik Muhammad": {
            rank: 109,
            position: "CB",
            school: "Texas",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870953.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "AJ Haulcy": {
            rank: 110,
            position: "S",
            school: "LSU",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4905664.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "KJ Bolden": {
            rank: 111,
            position: "S",
            school: "Georgia",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/5079334.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Zion Branch": {
            rank: 112,
            position: "S",
            school: "Georgia",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4685282.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        }
    },

    // ==========================================
    // TEAM COLOR MAPPINGS
    // ==========================================
    
    teamColors: {
        // SEC
        alabama: { primary: '#9E1B32', secondary: '#828A8F', name: 'Alabama' },
        auburn: { primary: '#0C2340', secondary: '#E87722', name: 'Auburn' },
        arkansas: { primary: '#9D2235', secondary: '#FFFFFF', name: 'Arkansas' },
        florida: { primary: '#003087', secondary: '#FA4616', name: 'Florida' },
        georgia: { primary: '#BA0C2F', secondary: '#000000', name: 'Georgia' },
        kentucky: { primary: '#0033A0', secondary: '#FFFFFF', name: 'Kentucky' },
        lsu: { primary: '#461D7C', secondary: '#FDD023', name: 'LSU' },
        oleMiss: { primary: '#14213D', secondary: '#CE1126', name: 'Ole Miss' },
        mississippiState: { primary: '#660000', secondary: '#FFFFFF', name: 'Mississippi State' },
        missouri: { primary: '#000000', secondary: '#F1B82D', name: 'Missouri' },
        southCarolina: { primary: '#73000A', secondary: '#000000', name: 'South Carolina' },
        tennessee: { primary: '#FF8200', secondary: '#FFFFFF', name: 'Tennessee' },
        texasAm: { primary: '#500000', secondary: '#FFFFFF', name: 'Texas A&M' },
        vanderbilt: { primary: '#866D4B', secondary: '#000000', name: 'Vanderbilt' },
        texas: { primary: '#BF5700', secondary: '#FFFFFF', name: 'Texas' },
        oklahoma: { primary: '#841617', secondary: '#FDF9D8', name: 'Oklahoma' },

        // Big Ten
        ohioState: { primary: '#BB0000', secondary: '#666666', name: 'Ohio State' },
        michigan: { primary: '#00274C', secondary: '#FFCB05', name: 'Michigan' },
        pennState: { primary: '#041E42', secondary: '#FFFFFF', name: 'Penn State' },
        wisconsin: { primary: '#C5050C', secondary: '#FFFFFF', name: 'Wisconsin' },
        iowa: { primary: '#FFCD00', secondary: '#000000', name: 'Iowa' },
        nebraska: { primary: '#E41C38', secondary: '#FFFFFF', name: 'Nebraska' },
        northwestern: { primary: '#4E2A84', secondary: '#FFFFFF', name: 'Northwestern' },
        purdue: { primary: '#CFB991', secondary: '#000000', name: 'Purdue' },
        indiana: { primary: '#990000', secondary: '#EEEDEB', name: 'Indiana' },
        illinois: { primary: '#13294B', secondary: '#E84A27', name: 'Illinois' },
        maryland: { primary: '#E03A3E', secondary: '#FFD520', name: 'Maryland' },
        rutgers: { primary: '#CC0033', secondary: '#000000', name: 'Rutgers' },
        minnesota: { primary: '#7A0019', secondary: '#FFCC33', name: 'Minnesota' },
        michiganState: { primary: '#18453B', secondary: '#FFFFFF', name: 'Michigan State' },
        iowaState: { primary: '#C8102E', secondary: '#F1BE48', name: 'Iowa State' },
        kansasState: { primary: '#512888', secondary: '#A7A7A7', name: 'Kansas State' },
        kansas: { primary: '#0051BA', secondary: '#E8000D', name: 'Kansas' },
        westVirginia: { primary: '#002855', secondary: '#EAAA00', name: 'West Virginia' },

        // ACC
        clemson: { primary: '#F56600', secondary: '#522D80', name: 'Clemson' },
        floridaState: { primary: '#782F40', secondary: '#CEB888', name: 'Florida State' },
        miami: { primary: '#005030', secondary: '#F47321', name: 'Miami' },
        northCarolina: { primary: '#7BAFD4', secondary: '#FFFFFF', name: 'North Carolina' },
        pittsburgh: { primary: '#003594', secondary: '#FFB81C', name: 'Pittsburgh' },
        virginiaTech: { primary: '#630031', secondary: '#CF4420', name: 'Virginia Tech' },
        ncState: { primary: '#CC0000', secondary: '#000000', name: 'NC State' },
        bostonCollege: { primary: '#8C2232', secondary: '#DBCCA6', name: 'Boston College' },
        wakeForest: { primary: '#9E7E38', secondary: '#000000', name: 'Wake Forest' },
        syracuse: { primary: '#F76900', secondary: '#000000', name: 'Syracuse' },
        louisville: { primary: '#AD0000', secondary: '#000000', name: 'Louisville' },
        duke: { primary: '#003087', secondary: '#FFFFFF', name: 'Duke' },
        virginia: { primary: '#232D4B', secondary: '#F84C1E', name: 'Virginia' },
        georgiaTech: { primary: '#B3A369', secondary: '#003057', name: 'Georgia Tech' },
        smu: { primary: '#0033A0', secondary: '#C8102E', name: 'SMU' },
        california: { primary: '#003262', secondary: '#FDB515', name: 'California' },
        stanford: { primary: '#8C1515', secondary: '#FFFFFF', name: 'Stanford' },

        // Big 12
        tcu: { primary: '#4D1979', secondary: '#A3A9AC', name: 'TCU' },
        baylor: { primary: '#154734', secondary: '#FFB81C', name: 'Baylor' },
        oklahomaState: { primary: '#FF7300', secondary: '#000000', name: 'Oklahoma State' },
        texasTech: { primary: '#CC0000', secondary: '#000000', name: 'Texas Tech' },
        byu: { primary: '#002E5D', secondary: '#FFFFFF', name: 'BYU' },
        houston: { primary: '#C8102E', secondary: '#FFFFFF', name: 'Houston' },
        ucf: { primary: '#000000', secondary: '#B4975A', name: 'UCF' },
        cincinnati: { primary: '#E00122', secondary: '#000000', name: 'Cincinnati' },
        arizona: { primary: '#AB0520', secondary: '#0C234B', name: 'Arizona' },
        arizonaState: { primary: '#8C1D40', secondary: '#FFC627', name: 'Arizona State' },
        colorado: { primary: '#CFB87C', secondary: '#000000', name: 'Colorado' },
        utah: { primary: '#BE0000', secondary: '#FFFFFF', name: 'Utah' },

        // Pac-12 (remaining)
        oregon: { primary: '#154733', secondary: '#FEE123', name: 'Oregon' },
        oregonState: { primary: '#000000', secondary: '#DC4405', name: 'Oregon State' },
        washington: { primary: '#4B2E83', secondary: '#B7A57A', name: 'Washington' },
        washingtonState: { primary: '#981E32', secondary: '#5E6A71', name: 'Washington State' },
        usc: { primary: '#990000', secondary: '#FFCC00', name: 'USC' },
        ucla: { primary: '#2774AE', secondary: '#F2A900', name: 'UCLA' },

        // Independent
        notreDame: { primary: '#0C2340', secondary: '#C99700', name: 'Notre Dame' },
        army: { primary: '#D4AF37', secondary: '#000000', name: 'Army' },
        navy: { primary: '#00205B', secondary: '#B5A67C', name: 'Navy' },

        // Mountain West
        boiseState: { primary: '#0033A0', secondary: '#F1632A', name: 'Boise State' },
        sanDiegoState: { primary: '#C41230', secondary: '#000000', name: 'San Diego State' },
        fresnoState: { primary: '#DB0032', secondary: '#002E6D', name: 'Fresno State' },

        // American
        memphis: { primary: '#003087', secondary: '#8E908F', name: 'Memphis' },
        tulane: { primary: '#006747', secondary: '#43B02A', name: 'Tulane' },
        eastCarolina: { primary: '#592A8A', secondary: '#FEC72E', name: 'East Carolina' },
        southFlorida: { primary: '#006747', secondary: '#CFC493', name: 'South Florida' },
        temple: { primary: '#9D2235', secondary: '#FFFFFF', name: 'Temple' },

        // Sun Belt
        coastalCarolina: { primary: '#006F71', secondary: '#A27752', name: 'Coastal Carolina' },
        appalachianState: { primary: '#222222', secondary: '#FFCC00', name: 'Appalachian State' },
        georgiaSouthern: { primary: '#041E42', secondary: '#A3AAAE', name: 'Georgia Southern' },
        georgiaState: { primary: '#0039A6', secondary: '#FFFFFF', name: 'Georgia State' },
        louisiana: { primary: '#C8102E', secondary: '#FFFFFF', name: 'Louisiana' },
        texasState: { primary: '#8D734A', secondary: '#501214', name: 'Texas State' },
        southAlabama: { primary: '#00205B', secondary: '#BF0D3E', name: 'South Alabama' },
        troy: { primary: '#8A2432', secondary: '#999999', name: 'Troy' },
        arkansasState: { primary: '#CC092F', secondary: '#000000', name: 'Arkansas State' },
        louisianaMonroe: { primary: '#800029', secondary: '#F2A900', name: 'Louisiana-Monroe' },

        // C-USA
        liberty: { primary: '#002D5C', secondary: '#C41230', name: 'Liberty' },
        westernKentucky: { primary: '#C8102E', secondary: '#FFFFFF', name: 'Western Kentucky' },

        // FCS
        northDakotaState: { primary: '#0A5640', secondary: '#F2A900', name: 'North Dakota State' }
    },

    // ==========================================
    // HELPER METHODS
    // ==========================================

    /**
     * Get player image data by name
     */
    get(playerName) {
        return this.playerImageData[playerName] || null;
    },

    /**
     * Check if player has image data
     */
    has(playerName) {
        return playerName in this.playerImageData;
    },

    /**
     * Get all image data
     */
    getAll() {
        return { ...this.playerImageData };
    },

    /**
     * Get players by position
     */
    getByPosition(position) {
        return Object.entries(this.playerImageData)
            .filter(([_, data]) => data.position === position)
            .reduce((acc, [name, data]) => {
                acc[name] = data;
                return acc;
            }, {});
    },

    /**
     * Get players by school
     */
    getBySchool(school) {
        return Object.entries(this.playerImageData)
            .filter(([_, data]) => data.school.toLowerCase() === school.toLowerCase())
            .reduce((acc, [name, data]) => {
                acc[name] = data;
                return acc;
            }, {});
    },

    /**
     * Get team colors by key
     */
    getTeamColors(teamColorKey) {
        return this.teamColors[teamColorKey] || {
            primary: '#1a1a2e',
            secondary: '#16213e',
            name: 'Unknown'
        };
    },

    /**
     * Get team colors by school name (auto-match)
     */
    getTeamColorsBySchool(schoolName) {
        const normalized = schoolName.toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .replace(/\s+/g, '');
        
        // Try direct match
        if (this.teamColors[normalized]) {
            return this.teamColors[normalized];
        }

        // Try variations
        const variations = {
            'miami': 'miami',
            'miamifl': 'miami',
            'miami(fl)': 'miami',
            'miamifla': 'miami',
            'ohiostate': 'ohioState',
            'pennstate': 'pennState',
            'texasam': 'texasAm',
            'northcarolina': 'northCarolina',
            'virginiatech': 'virginiaTech',
            'westvirginia': 'westVirginia',
            'michiganstate': 'michiganState',
            'iowastate': 'iowaState',
            'kansasstate': 'kansasState',
            'oklahomastate': 'oklahomaState',
            'arizonastate': 'arizonaState',
            'floridastate': 'floridaState',
            'georgiatech': 'georgiaTech',
            'mississippistate': 'mississippiState',
            'olemiss': 'oleMiss',
            'northwestern': 'northwestern',
            'southcarolina': 'southCarolina',
            'notredame': 'notreDame',
            'eastrutgers': 'rutgers',
            'centralflorida': 'ucf',
            'byu': 'byu',
            'brighamyoung': 'byu'
        };

        if (variations[normalized]) {
            return this.teamColors[variations[normalized]];
        }

        // Default fallback
        return {
            primary: '#1a1a2e',
            secondary: '#16213e',
            name: schoolName
        };
    },

    /**
     * Get image sources in priority order for a player
     */
    getImageSources(playerName) {
        const data = this.get(playerName);
        if (!data) return null;

        const sources = [];
        
        // Priority 1: Local image
        if (data.local && data.hasLocal) {
            sources.push({ type: 'local', url: data.local });
        }
        
        // Priority 2: ESPN
        if (data.espn) {
            sources.push({ type: 'espn', url: data.espn });
        }
        
        // Priority 3: CBS
        if (data.cbs) {
            sources.push({ type: 'cbs', url: data.cbs });
        }

        return sources;
    },

    /**
     * Get best available image URL for player
     */
    getBestImageUrl(playerName) {
        const sources = this.getImageSources(playerName);
        return sources && sources.length > 0 ? sources[0].url : null;
    },

    /**
     * Get all players with local images
     */
    getPlayersWithLocalImages() {
        return Object.entries(this.playerImageData)
            .filter(([_, data]) => data.hasLocal)
            .map(([name, data]) => ({ name, ...data }));
    },

    /**
     * Get all players without local images (need external fetch)
     */
    getPlayersWithoutLocalImages() {
        return Object.entries(this.playerImageData)
            .filter(([_, data]) => !data.hasLocal)
            .map(([name, data]) => ({ name, ...data }));
    },

    /**
     * Search players by name
     */
    search(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.playerImageData)
            .filter(([name, _]) => name.toLowerCase().includes(lowerQuery))
            .reduce((acc, [name, data]) => {
                acc[name] = data;
                return acc;
            }, {});
    },

    /**
     * Get stats about the database
     */
    getStats() {
        const allPlayers = Object.values(this.playerImageData);
        return {
            total: allPlayers.length,
            withLocal: allPlayers.filter(p => p.hasLocal).length,
            withESPN: allPlayers.filter(p => p.espn).length,
            withCBS: allPlayers.filter(p => p.cbs).length,
            byPosition: allPlayers.reduce((acc, p) => {
                acc[p.position] = (acc[p.position] || 0) + 1;
                return acc;
            }, {})
        };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PlayerImageDatabase };
}

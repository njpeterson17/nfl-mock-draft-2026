/**
 * NFL Mock Draft - Player Image Database
 * Complete mapping of all prospects to image sources
 *
 * Rebuilt: 2026-02-08T01:40:00.288Z
 * Total Players: 280
 * Players with Local Images: 119
 *
 * Data sources:
 * - Local: images/players/{name}.jpg
 * - ESPN: https://a.espncdn.com/i/headshots/college-football/players/full/{ID}.png
 * - CBS: https://sports.cbsimg.net/images/football/players/600x800/{ID}.jpg
 */

const PlayerImageDatabase = {
    // ==========================================
    // PLAYER IMAGE DATA
    // ==========================================

    playerImageData: {
        "A.J. Haulcy": {
            position: "S",
            school: "LSU",
            local: "images/players/aj-haulcy.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "lsu"
        },
        "Aamil Wagner": {
            position: "OT",
            school: "Notre Dame",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Aaron Anderson": {
            position: "WR",
            school: "LSU",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Adam Randall": {
            position: "RB",
            school: "Clemson",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Ahmad Moten Sr.": {
            position: "DT",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Aiden Fisher": {
            position: "LB",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Akheem Mesidor": {
            position: "EDGE",
            school: "Miami",
            local: "images/players/akheem-mesidor.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Akheem Mesidor (Miami": {
            position: "DT",
            school: "FL",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Albert Regis": {
            position: "DT",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Amare Ferrell": {
            position: "S",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Andre Greene": {
            position: "WR",
            school: "North Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "northCarolina"
        },
        "Anthony Hill Jr.": {
            position: "LB",
            school: "Texas",
            local: "images/players/anthony-hill-jr.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430933.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "Anthony Lucas": {
            position: "EDGE",
            school: "USC",
            local: "images/players/anthony-lucas.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "usc"
        },
        "Antonio Williams": {
            position: "WR",
            school: "Clemson",
            local: "images/players/antonio-williams.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Ar'maj Reed-Adams": {
            position: "IOL",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Ar'Maj Reed-Adams": {
            position: "OG",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Arvell Reese": {
            position: "LB",
            school: "Ohio State",
            local: "images/players/arvell-reese.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431614.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844027.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Austin Barber": {
            position: "OT",
            school: "Florida",
            local: "images/players/austin-barber.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "florida"
        },
        "Avery Johnson": {
            position: "QB",
            school: "Kansas State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "kansasState"
        },
        "Avieon Terrell": {
            position: "CB",
            school: "Clemson",
            local: "images/players/avieon-terrell.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870988.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Barion Brown": {
            position: "WR",
            school: "Kentucky",
            local: "images/players/barion-brown.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4698597.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "kentucky"
        },
        "Beau Stephens": {
            position: "IOL",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Billy Schrauth": {
            position: "OG",
            school: "Notre Dame",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Bishop Fitzgerald": {
            position: "S",
            school: "USC",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "usc"
        },
        "Blake Miller": {
            position: "OT",
            school: "Clemson",
            local: "images/players/blake-miller.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Brady Cook": {
            position: "QB",
            school: "Missouri",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "missouri"
        },
        "Brandon Cisse": {
            position: "CB",
            school: "South Carolina",
            local: "images/players/brandon-cisse.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "southCarolina"
        },
        "Branson Robinson": {
            position: "RB",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Brenen Thompson": {
            position: "WR",
            school: "Mississippi State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "mississippiState"
        },
        "Brian Parker II": {
            position: "OT",
            school: "Duke",
            local: "images/players/brian-parker-ii.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "duke"
        },
        "Brock Vandagriff": {
            position: "QB",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Bud Clark": {
            position: "S",
            school: "TCU",
            local: "images/players/bud-clark.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "tcu"
        },
        "C.J. Allen": {
            position: "LB",
            school: "Georgia",
            local: "images/players/cj-allen.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "C.J. Daniels": {
            position: "WR",
            school: "Miami-FL",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Cade Klubnik": {
            position: "QB",
            school: "Clemson",
            local: "images/players/cade-klubnik.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431446.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Caden Curry": {
            position: "EDGE",
            school: "Ohio State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ohioState"
        },
        "Caleb Banks": {
            position: "DT",
            school: "Florida",
            local: "images/players/caleb-banks.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "florida"
        },
        "Caleb Downs": {
            position: "S",
            school: "Ohio State",
            local: "images/players/caleb-downs.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431612.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844025.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Caleb Lomu": {
            position: "OT",
            school: "Utah",
            local: "images/players/caleb-lomu.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431939.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844131.jpg",
            hasLocal: true,
            teamColorKey: "utah"
        },
        "Caleb Tiernan": {
            position: "OT",
            school: "Northwestern",
            local: "images/players/caleb-tiernan.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432062.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "northwestern"
        },
        "Cam Skattebo": {
            position: "RB",
            school: "Arizona State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arizonaState"
        },
        "Cameron Ball": {
            position: "DT",
            school: "Arkansas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arkansas"
        },
        "Cameron Scott": {
            position: "WR",
            school: "South Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "southCarolina"
        },
        "Carnell Tate": {
            position: "WR",
            school: "Ohio State",
            local: "images/players/carnell-tate.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431610.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844024.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Carson Beck": {
            position: "QB",
            school: "Miami",
            local: "images/players/carson-beck.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4428972.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Cashius Howell": {
            position: "EDGE",
            school: "Texas A&M",
            local: "images/players/cashius-howell.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasAm"
        },
        "Chandler Rivers": {
            position: "CB",
            school: "Duke",
            local: "images/players/chandler-rivers.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "duke"
        },
        "Charles Demmings": {
            position: "CB",
            school: "Stephen F. Austin",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasState"
        },
        "Chase Bisontis": {
            position: "IOL",
            school: "Texas A&M",
            local: "images/players/chase-bisontis.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432452.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasAm"
        },
        "Chevan Cordeiro": {
            position: "QB",
            school: "San Jose State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Chip Trayanum": {
            position: "RB",
            school: "Toledo",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "cincinnati"
        },
        "Chris Bell": {
            position: "WR",
            school: "Louisville",
            local: "images/players/chris-bell.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "louisville"
        },
        "Chris Brazzell II": {
            position: "WR",
            school: "Tennessee",
            local: "images/players/chris-brazzell-ii.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "tennessee"
        },
        "Chris Johnson": {
            position: "CB",
            school: "San Diego State",
            local: "images/players/chris-johnson.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "sanDiegoState"
        },
        "Chris McClellan": {
            position: "DL",
            school: "Missouri",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "missouri"
        },
        "Christen Miller": {
            position: "DT",
            school: "Georgia",
            local: "images/players/christen-miller.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Christian Lewis": {
            position: "WR",
            school: "Alabama",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Christian Miller": {
            position: "DT",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "CJ Allen": {
            position: "LB",
            school: "Georgia",
            local: "images/players/cj-allen.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "CJ Daniels": {
            position: "WR",
            school: "Miami",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "miami"
        },
        "Cole Payton": {
            position: "QB",
            school: "North Dakota State",
            local: "images/players/cole-payton.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "northDakotaState"
        },
        "Colton Hood": {
            position: "CB",
            school: "Tennessee",
            local: "images/players/colton-hood.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "tennessee"
        },
        "Conner Weigman": {
            position: "QB",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Connor Gibson": {
            position: "WR",
            school: "Texas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Connor Lew": {
            position: "C",
            school: "Auburn",
            local: "images/players/connor-lew.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "auburn"
        },
        "D.J. Campbell": {
            position: "IOL",
            school: "Texas",
            local: "images/players/dj-campbell.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430938.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "D'Angelo Ponds": {
            position: "CB",
            school: "Indiana",
            local: "images/players/dangelo-ponds.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "indiana"
        },
        "Dae'Quan Wright": {
            position: "TE",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Dallen Bentley": {
            position: "TE",
            school: "Utah",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "utah"
        },
        "Dametrious Crownover": {
            position: "OT",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Damien Martinez": {
            position: "RB",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Dani Dennis-Sutton": {
            position: "EDGE",
            school: "Penn State",
            local: "images/players/dani-dennis-sutton.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Dante Reno": {
            position: "QB",
            school: "Boston College",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "bostonCollege"
        },
        "Dante Wright": {
            position: "WR",
            school: "Colorado",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "colorado"
        },
        "Darrell Jackson Jr.": {
            position: "DT",
            school: "Florida State",
            local: "images/players/darrell-jackson-jr.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "floridaState"
        },
        "David Bailey": {
            position: "EDGE",
            school: "Texas Tech",
            local: "images/players/david-bailey.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431439.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasTech"
        },
        "Davison Igbinosun": {
            position: "CB",
            school: "Ohio State",
            local: "images/players/davison-igbinosun.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Daylen Everette": {
            position: "CB",
            school: "Georgia",
            local: "images/players/daylen-everette.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431182.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Deion Burks": {
            position: "WR",
            school: "Oklahoma",
            local: "images/players/deion-burks.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "oklahoma"
        },
        "Demond Claiborne": {
            position: "RB",
            school: "Wake Forest",
            local: "images/players/demond-claiborne.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432160.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "wakeForest"
        },
        "DeMonte Capehart": {
            position: "DL",
            school: "Clemson",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Denzel Boston": {
            position: "WR",
            school: "Washington",
            local: "images/players/denzel-boston.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431145.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "washington"
        },
        "Deontae Lawson": {
            position: "LB",
            school: "Alabama",
            local: "images/players/deontae-lawson.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Derrick Moore": {
            position: "EDGE",
            school: "Michigan",
            local: "images/players/derrick-moore.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "michigan"
        },
        "Desmond Reid": {
            position: "RB",
            school: "Pittsburgh",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "pittsburgh"
        },
        "Devin Brown": {
            position: "QB",
            school: "Oklahoma",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oklahoma"
        },
        "Devin Moore": {
            position: "CB",
            school: "Florida",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "florida"
        },
        "Devin Price": {
            position: "WR",
            school: "Florida State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "floridaState"
        },
        "Diego Pounds": {
            position: "OT",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Dillon Thieneman": {
            position: "S",
            school: "Oregon",
            local: "images/players/dillon-thieneman.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "oregon"
        },
        "Domani Jackson": {
            position: "CB",
            school: "Alabama",
            local: "images/players/domani-jackson.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Domonique Orange": {
            position: "DL",
            school: "Iowa State",
            local: "images/players/domonique-orange.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "iowaState"
        },
        "Donovan Edwards": {
            position: "RB",
            school: "Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "Dontay Corleone": {
            position: "DL",
            school: "Cincinnati",
            local: "images/players/dontay-corleone.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "cincinnati"
        },
        "Drew Allar": {
            position: "QB",
            school: "Penn State",
            local: "images/players/drew-allar.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431264.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843851.jpg",
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Drew Shelton": {
            position: "OT",
            school: "Penn State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "pennState"
        },
        "Earnest Greene III": {
            position: "OT",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Eli Raridon": {
            position: "TE",
            school: "Notre Dame",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "notreDame"
        },
        "Eli Stowers": {
            position: "TE",
            school: "Vanderbilt",
            local: "images/players/eli-stowers.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432559.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "vanderbilt"
        },
        "Elic Ayomanor": {
            position: "WR",
            school: "Stanford",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "stanford"
        },
        "Elijah Banks": {
            position: "WR",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Elijah Sarratt": {
            position: "WR",
            school: "Indiana",
            local: "images/players/elijah-sarratt.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "indiana"
        },
        "Elijah Sarrett": {
            position: "WR",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Emmanuel McNeil-Warren": {
            position: "S",
            school: "Toledo",
            local: "images/players/emmanuel-mcneil-warren.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "cincinnati"
        },
        "Emmanuel Pregnon": {
            position: "OG",
            school: "Oregon",
            local: "images/players/emmanuel-pregnon.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431963.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "oregon"
        },
        "Emmett Johnson": {
            position: "RB",
            school: "Nebraska",
            local: "images/players/emmett-johnson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431420.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "nebraska"
        },
        "Eric McAlister": {
            position: "WR",
            school: "TCU",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "tcu"
        },
        "Eric Rivers": {
            position: "WR",
            school: "Georgia Tech",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgiaTech"
        },
        "Evan Prater": {
            position: "WR",
            school: "Cincinnati",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "cincinnati"
        },
        "Fernando Carmona": {
            position: "IOL",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Fernando Mendoza": {
            position: "QB",
            school: "Indiana",
            local: "images/players/fernando-mendoza.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431460.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843907.jpg",
            hasLocal: true,
            teamColorKey: "indiana"
        },
        "Francis Mauigoa": {
            position: "OT",
            school: "Miami",
            local: "images/players/francis-mauigoa.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431647.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843934.jpg",
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Gabe Jacas": {
            position: "EDGE",
            school: "Illinois",
            local: "images/players/gabe-jacas.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "illinois"
        },
        "Garrett Greene": {
            position: "QB",
            school: "West Virginia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "westVirginia"
        },
        "Garrett Nussmeier": {
            position: "QB",
            school: "LSU",
            local: "images/players/garrett-nussmeier.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431373.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "lsu"
        },
        "Genesis Smith": {
            position: "S",
            school: "Arizona",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arizona"
        },
        "Gennings Dunker": {
            position: "OT",
            school: "Iowa",
            local: "images/players/gennings-dunker.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "iowa"
        },
        "Germie Bernard": {
            position: "WR",
            school: "Alabama",
            local: "images/players/germie-bernard.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Gracen Halton": {
            position: "DT",
            school: "Oklahoma",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oklahoma"
        },
        "Grayson McCall": {
            position: "QB",
            school: "NC State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ncState"
        },
        "Harold Perkins Jr.": {
            position: "LB",
            school: "LSU",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "lsu"
        },
        "Hayden Wolff": {
            position: "QB",
            school: "Western Kentucky",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "westernKentucky"
        },
        "Hezekiah Masses": {
            position: "CB",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Isaac TeSlaa": {
            position: "WR",
            school: "Arkansas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arkansas"
        },
        "Isaiah World": {
            position: "OT",
            school: "Oregon",
            local: "images/players/isaiah-world.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "oregon"
        },
        "J.C. Davis": {
            position: "OT",
            school: "Illinois",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "illinois"
        },
        "J'Mari Taylor": {
            position: "RB",
            school: "Virginia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "virginia"
        },
        "Ja'Kobi Lane": {
            position: "WR",
            school: "USC",
            local: "images/players/jakobi-lane.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432857.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "usc"
        },
        "Jabari Camper": {
            position: "WR",
            school: "Louisville",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "louisville"
        },
        "Jack Bech": {
            position: "WR",
            school: "TCU",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "tcu"
        },
        "Jack Endries": {
            position: "TE",
            school: "Texas",
            local: "images/players/jack-endries.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430931.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "Jack Larsen": {
            position: "QB",
            school: "NC State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ncState"
        },
        "Jacob Rodriguez": {
            position: "LB",
            school: "Texas Tech",
            local: "images/players/jacob-rodriguez.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasTech"
        },
        "Jadarian Price": {
            position: "RB",
            school: "Notre Dame",
            local: "images/players/jadarian-price.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432860.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "notreDame"
        },
        "Jaeden Roberts": {
            position: "IOL",
            school: "Alabama",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433335.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Jaishawn Barham": {
            position: "LB",
            school: "Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "Jake Golday": {
            position: "LB",
            school: "Cincinnati",
            local: "images/players/jake-golday.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "cincinnati"
        },
        "Jake Slaughter": {
            position: "C",
            school: "Florida",
            local: "images/players/jake-slaughter.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "florida"
        },
        "Jalen Milroe": {
            position: "QB",
            school: "Alabama",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433314.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Jalen Royals": {
            position: "WR",
            school: "Utah State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Jalen White": {
            position: "RB",
            school: "Georgia Southern",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgiaSouthern"
        },
        "Jalon Kilgore": {
            position: "S",
            school: "South Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "southCarolina"
        },
        "Jamari Johnson": {
            position: "TE",
            school: "Oregon",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Jarquez Hunter": {
            position: "RB",
            school: "Auburn",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "auburn"
        },
        "Jaxson Dart": {
            position: "QB",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Jaydn Ott": {
            position: "RB",
            school: "California",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "california"
        },
        "Jaylon Guilbeau": {
            position: "CB",
            school: "Texas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texas"
        },
        "Jeremiyah Love": {
            position: "RB",
            school: "Notre Dame",
            local: "images/players/jeremiyah-love.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432859.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845761.jpg",
            hasLocal: true,
            teamColorKey: "notreDame"
        },
        "Jermod McCoy": {
            position: "CB",
            school: "Tennessee",
            local: "images/players/jermod-mccoy.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432535.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845342.jpg",
            hasLocal: true,
            teamColorKey: "tennessee"
        },
        "Joe Royer": {
            position: "TE",
            school: "Cincinnati",
            local: "images/players/joe-royer.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431223.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "cincinnati"
        },
        "John Mateer": {
            position: "QB",
            school: "Washington State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "washingtonState"
        },
        "John Michael Gyllenborg": {
            position: "TE",
            school: "Wyoming",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Jonah Coleman": {
            position: "RB",
            school: "Washington",
            local: "images/players/jonah-coleman.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430916.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "washington"
        },
        "Jordan McCloud": {
            position: "QB",
            school: "Texas State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasState"
        },
        "Jordan Moore": {
            position: "WR",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Jordyn Tyson": {
            position: "WR",
            school: "Arizona State",
            local: "images/players/jordyn-tyson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432851.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizonaState"
        },
        "Josh Cameron": {
            position: "WR",
            school: "Baylor",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "baylor"
        },
        "Joshua Josephs": {
            position: "EDGE",
            school: "Tennessee",
            local: "images/players/joshua-josephs.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "tennessee"
        },
        "Josiah Trotter": {
            position: "LB",
            school: "Missouri",
            local: "images/players/josiah-trotter.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "missouri"
        },
        "Jude Bowry": {
            position: "OT",
            school: "Boston College",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "bostonCollege"
        },
        "Julian Neal": {
            position: "CB",
            school: "Arkansas",
            local: "images/players/julian-neal.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "arkansas"
        },
        "Justin Joly": {
            position: "TE",
            school: "NC State",
            local: "images/players/justin-joly.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431510.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "ncState"
        },
        "K.C. Concepcion": {
            position: "WR",
            school: "Texas A&M",
            local: "images/players/kc-concepcion.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasAm"
        },
        "Kaden Davis": {
            position: "WR",
            school: "Kansas State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "kansasState"
        },
        "Kadyn Proctor": {
            position: "OT",
            school: "Alabama",
            local: "images/players/kadyn-proctor.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431387.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843631.jpg",
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Kaelon Black": {
            position: "RB",
            school: "Army",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "army"
        },
        "Kage Casey": {
            position: "OT",
            school: "Boise State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "boiseState"
        },
        "Kaleb Johnson": {
            position: "RB",
            school: "Iowa",
            local: "images/players/kaleb-johnson.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "iowa"
        },
        "Kalel Mullings": {
            position: "RB",
            school: "Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "Kamari Ramsey": {
            position: "S",
            school: "USC",
            local: "images/players/kamari-ramsey.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "usc"
        },
        "Kayden McDonald": {
            position: "DT",
            school: "Ohio State",
            local: "images/players/kayden-mcdonald.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Kaytron Allen": {
            position: "RB",
            school: "Penn State",
            local: "images/players/kaytron-allen.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "KC Conception": {
            position: "WR",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Keionte Scott": {
            position: "CB",
            school: "Miami",
            local: "images/players/keionte-scott.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Keith Abney II": {
            position: "CB",
            school: "Arizona State",
            local: "images/players/keith-abney-ii.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizonaState"
        },
        "Keldric Faulk": {
            position: "EDGE",
            school: "Auburn",
            local: "images/players/keldric-faulk.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431109.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843385.jpg",
            hasLocal: true,
            teamColorKey: "auburn"
        },
        "Kenyon Sadiq": {
            position: "TE",
            school: "Oregon",
            local: "images/players/kenyon-sadiq.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431965.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "oregon"
        },
        "Keon Sabb": {
            position: "S",
            school: "Alabama",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Kevin Coleman Jr.": {
            position: "WR",
            school: "Missouri",
            local: "images/players/kevin-coleman-jr.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4685307.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "missouri"
        },
        "Keylan Rutledge": {
            position: "IOL",
            school: "Georgia Tech",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433100.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgiaTech"
        },
        "Keyron Crawford": {
            position: "EDGE",
            school: "Auburn",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "auburn"
        },
        "Khalib Johnson": {
            position: "QB",
            school: "Eastern Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Kris Mitchell": {
            position: "WR",
            school: "Miami",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "miami"
        },
        "Kye Robichaux": {
            position: "RB",
            school: "Baylor",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "baylor"
        },
        "Kyle Louis": {
            position: "LB",
            school: "Pittsburgh",
            local: "images/players/kyle-louis.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "pittsburgh"
        },
        "Kyle McCord": {
            position: "QB",
            school: "Syracuse",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "syracuse"
        },
        "Kyle Williams": {
            position: "WR",
            school: "Washington State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "washingtonState"
        },
        "Lander Barton": {
            position: "LB",
            school: "Utah",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "utah"
        },
        "LaNorris Sellers": {
            position: "QB",
            school: "South Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "southCarolina"
        },
        "Le'Veon Moss": {
            position: "RB",
            school: "Texas A&M",
            local: "images/players/leveon-moss.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasAm"
        },
        "Lee Hunter": {
            position: "DT",
            school: "Texas Tech",
            local: "images/players/lee-hunter.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasTech"
        },
        "Logan Jones": {
            position: "C",
            school: "Iowa",
            local: "images/players/logan-jones.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "iowa"
        },
        "Lonnie Galloway": {
            position: "WR",
            school: "West Virginia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "westVirginia"
        },
        "Louis Moore": {
            position: "S",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "LT Overton": {
            position: "EDGE",
            school: "Alabama",
            local: "images/players/lt-overton.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432451.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Luther Burden": {
            position: "WR",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Maalik Murphy": {
            position: "QB",
            school: "Duke",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "duke"
        },
        "Makai Lemon": {
            position: "WR",
            school: "USC",
            local: "images/players/makai-lemon.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432856.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845765.jpg",
            hasLocal: true,
            teamColorKey: "usc"
        },
        "Malachi Fields": {
            position: "WR",
            school: "Notre Dame",
            local: "images/players/malachi-fields.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "notreDame"
        },
        "Malachi Lawrence": {
            position: "EDGE",
            school: "UCF",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ucf"
        },
        "Malik Muhammad": {
            position: "CB",
            school: "Texas",
            local: "images/players/malik-muhammad.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4870953.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "Mansoor Delane": {
            position: "CB",
            school: "LSU",
            local: "images/players/mansoor-delane.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431607.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "lsu"
        },
        "Marcus Alexander": {
            position: "WR",
            school: "NC State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ncState"
        },
        "Marcus Rosemy-Jacksaint": {
            position: "WR",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Marlin Klein": {
            position: "TE",
            school: "Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "Matt Gulbin": {
            position: "IOL",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Max Iheanachor": {
            position: "OT",
            school: "Arizona State",
            local: "images/players/max-iheanachor.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizonaState"
        },
        "Max Klare": {
            position: "TE",
            school: "Ohio State",
            local: "images/players/max-klare.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431618.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Max Llewellyn": {
            position: "EDGE",
            school: "Iowa",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "iowa"
        },
        "Michael Taaffe": {
            position: "S",
            school: "Texas",
            local: "images/players/michael-taaffe.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "Michael Trigg": {
            position: "TE",
            school: "Baylor",
            local: "images/players/michael-trigg.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "baylor"
        },
        "Mikail Kamara": {
            position: "EDGE",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Mike Washington Jr.": {
            position: "RB",
            school: "Arkansas",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arkansas"
        },
        "Miller Moss": {
            position: "QB",
            school: "Louisville",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "louisville"
        },
        "Monroe Freeling": {
            position: "OT",
            school: "Georgia",
            local: "images/players/monroe-freeling.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432875.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Montrell Johnson": {
            position: "WR",
            school: "Florida",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "florida"
        },
        "Nathaniel Gilliam": {
            position: "WR",
            school: "Pittsburgh",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "pittsburgh"
        },
        "Nicholas Singleton": {
            position: "RB",
            school: "Penn State",
            local: "images/players/nicholas-singleton.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431268.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Olaivavega Ioane": {
            position: "OG",
            school: "Penn State",
            local: "images/players/olaivavega-ioane.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431266.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Omar Cooper Jr.": {
            position: "WR",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Omarion Cooper Jr.": {
            position: "WR",
            school: "Indiana",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Oscar Delp": {
            position: "TE",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Parker Brailsford": {
            position: "IOL",
            school: "Alabama",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "Pat Bryant": {
            position: "WR",
            school: "Florida State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "floridaState"
        },
        "Patrick Payton": {
            position: "DT",
            school: "Florida State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "floridaState"
        },
        "Peter Woods": {
            position: "DT",
            school: "Clemson",
            local: "images/players/peter-woods.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431443.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843751.jpg",
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Phil Mafah": {
            position: "RB",
            school: "Clemson",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "clemson"
        },
        "Preston Stone": {
            position: "QB",
            school: "Tulsa",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "R Mason Thomas": {
            position: "EDGE",
            school: "Oklahoma",
            local: "images/players/r-mason-thomas.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "oklahoma"
        },
        "Rahsul Faison": {
            position: "RB",
            school: "South Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "southCarolina"
        },
        "Rayshaun Benny": {
            position: "DL",
            school: "Michigan",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "michigan"
        },
        "RJ Harvey": {
            position: "RB",
            school: "UCF",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ucf"
        },
        "Roman Hemby": {
            position: "RB",
            school: "Indiana",
            local: "images/players/roman-hemby.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "indiana"
        },
        "Romello Height": {
            position: "EDGE",
            school: "Texas Tech",
            local: "images/players/romello-height.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texasTech"
        },
        "Rueben Bain Jr.": {
            position: "EDGE",
            school: "Miami",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431648.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28843935.jpg",
            hasLocal: false,
            teamColorKey: "miami"
        },
        "Sam Hecht": {
            position: "IOL",
            school: "Kansas State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "kansasState"
        },
        "Sam Roush": {
            position: "TE",
            school: "Stanford",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "stanford"
        },
        "Samuel Patterson": {
            position: "WR",
            school: "Washington",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "washington"
        },
        "Sawyer Robertson": {
            position: "QB",
            school: "Baylor",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431956.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "baylor"
        },
        "Seth McGowan": {
            position: "RB",
            school: "Kentucky",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "kentucky"
        },
        "Skyler Bell": {
            position: "WR",
            school: "UConn",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "indiana"
        },
        "Skyler Gill-Howard": {
            position: "DT",
            school: "Texas Tech",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasTech"
        },
        "Sonny Styles": {
            position: "LB",
            school: "Ohio State",
            local: "images/players/sonny-styles.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431615.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844028.jpg",
            hasLocal: true,
            teamColorKey: "ohioState"
        },
        "Spencer Fano": {
            position: "OT",
            school: "Utah",
            local: "images/players/spencer-fano.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431938.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28844130.jpg",
            hasLocal: true,
            teamColorKey: "utah"
        },
        "T.J. Parker": {
            position: "EDGE",
            school: "Clemson",
            local: "images/players/tj-parker.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4431444.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Tacario Davis": {
            position: "CB",
            school: "Arizona",
            local: "images/players/tacario-davis.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4430923.png",
            cbs: null,
            hasLocal: true,
            teamColorKey: "arizona"
        },
        "Tahj Brooks": {
            position: "RB",
            school: "Texas Tech",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasTech"
        },
        "Tahj Washington": {
            position: "WR",
            school: "USC",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "usc"
        },
        "Taurean York": {
            position: "LB",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Tavien St. Clair": {
            position: "QB",
            school: "Ohio State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "ohioState"
        },
        "Ted Hurst": {
            position: "WR",
            school: "Georgia State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgiaState"
        },
        "Tez Johnson": {
            position: "WR",
            school: "Oregon",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Thaddeus Dixon": {
            position: "CB",
            school: "North Carolina",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "northCarolina"
        },
        "Tim Keenan III": {
            position: "DT",
            school: "Alabama",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "alabama"
        },
        "TJ Hall": {
            position: "CB",
            school: "Iowa",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "iowa"
        },
        "TJ Parker": {
            position: "EDGE",
            school: "Clemson",
            local: "images/players/tj-parker.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "clemson"
        },
        "Tre Harris": {
            position: "WR",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "TreShawn Holden": {
            position: "WR",
            school: "Oregon",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oregon"
        },
        "Trevor Etienne": {
            position: "RB",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Trey Moore": {
            position: "EDGE",
            school: "Texas",
            local: "images/players/trey-moore.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "texas"
        },
        "Trey Zuhn III": {
            position: "OT",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Treydan Stukes": {
            position: "CB",
            school: "Arizona",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "arizona"
        },
        "Trinidad Chambliss": {
            position: "QB",
            school: "Ole Miss",
            local: null,
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432528.png",
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Ty Simpson": {
            position: "QB",
            school: "Alabama",
            local: "images/players/ty-simpson.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4433312.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845835.jpg",
            hasLocal: true,
            teamColorKey: "alabama"
        },
        "Tyler Shough": {
            position: "QB",
            school: "Louisville",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "louisville"
        },
        "Tyler Van Dyke": {
            position: "QB",
            school: "Wisconsin",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "wisconsin"
        },
        "Tyreak Sapp": {
            position: "EDGE",
            school: "Florida",
            local: "images/players/tyreak-sapp.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "florida"
        },
        "Tyrone Ellis": {
            position: "WR",
            school: "Auburn",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "auburn"
        },
        "Ulysses Bentley": {
            position: "RB",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
        },
        "Will Lee III": {
            position: "CB",
            school: "Texas A&M",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "texasAm"
        },
        "Will Rogers": {
            position: "QB",
            school: "Washington",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "washington"
        },
        "Will Sheppard": {
            position: "WR",
            school: "Colorado",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "colorado"
        },
        "Xavier Restrepo": {
            position: "WR",
            school: "Miami",
            local: "images/players/xavier-restrepo.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "miami"
        },
        "Xavier Robinson": {
            position: "WR",
            school: "Georgia",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "georgia"
        },
        "Xavier Scott": {
            position: "CB",
            school: "Illinois",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "illinois"
        },
        "Zachariah Branch": {
            position: "WR",
            school: "Georgia",
            local: "images/players/zachariah-branch.jpg",
            espn: "https://a.espncdn.com/i/headshots/college-football/players/full/4432862.png",
            cbs: "https://sports.cbsimg.net/images/football/players/600x800/28845763.jpg",
            hasLocal: true,
            teamColorKey: "georgia"
        },
        "Zakee Wheatley": {
            position: "S",
            school: "Penn State",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "pennState"
        },
        "Zane Durant": {
            position: "DL",
            school: "Penn State",
            local: "images/players/zane-durant.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "pennState"
        },
        "Zion Young": {
            position: "EDGE",
            school: "Missouri",
            local: "images/players/zion-young.jpg",
            espn: null,
            cbs: null,
            hasLocal: true,
            teamColorKey: "missouri"
        },
        "Zxavian Harris": {
            position: "DL",
            school: "Ole Miss",
            local: null,
            espn: null,
            cbs: null,
            hasLocal: false,
            teamColorKey: "oleMiss"
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


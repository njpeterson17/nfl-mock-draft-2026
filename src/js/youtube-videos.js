/**
 * YouTube Highlight Video Integration System
 * 2026 NFL Mock Draft - Player Video Highlights
 * 
 * Features:
 * - Video player modal with YouTube embed
 * - Player video data management
 * - Lazy loading and performance optimization
 * - Video analytics tracking
 * - Keyboard shortcuts
 * - Mobile optimization
 */

// ==========================================
// PLAYER VIDEO DATA
// ==========================================

const playerVideos = {
  // Elite Tier - Top Prospects
  "Fernando Mendoza": {
    mainHighlight: "3488F7xvfVM",
    playlist: [
      { id: "3488F7xvfVM", title: "Fernando Mendoza | 2025 Highlights", duration: "8:32", thumbnail: "hqdefault" },
      { id: "XaJuaPkhh_g", title: "Fernando Mendoza 2025 Indiana Hoosiers Season Highlights", duration: "12:45", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "1.2M",
      likes: "45K",
      channel: "Indiana Football",
      videoCount: 4
    },
    position: "QB",
    school: "Indiana"
  },
  "Caleb Downs": {
    mainHighlight: "UO-nc1_k3Qo",
    playlist: [
      { id: "UO-nc1_k3Qo", title: "Caleb Downs | 2024 Ohio State Highlights", duration: "5:30", thumbnail: "hqdefault" },
      { id: "bWY7mceYjjU", title: "Caleb Downs Best Safety in College Football", duration: "4:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "890K",
      likes: "32K",
      channel: "Ohio State Football",
      videoCount: 3
    },
    position: "S",
    school: "Ohio State"
  },
  "Arvell Reese": {
    mainHighlight: "KWhz99QXnro",
    playlist: [
      { id: "KWhz99QXnro", title: "2026 NFL DRAFT HIGHLIGHTS: LB Arvell Reese | Ohio State", duration: "2:15", thumbnail: "hqdefault" },
      { id: "sRVw_34A0R0", title: "Arvell Reese Best Linebacker in College Football", duration: "3:45", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "750K",
      likes: "28K",
      channel: "Ohio State Football",
      videoCount: 3
    },
    position: "LB",
    school: "Ohio State"
  },
  "Jeremiyah Love": {
    mainHighlight: "EVLrDQIHquQ",
    playlist: [
      { id: "EVLrDQIHquQ", title: "Jeremiyah Love | 2025 Highlights", duration: "8:32", thumbnail: "hqdefault" },
      { id: "8iIezi5qktA", title: "Jeremiyah Love Scariest RB in College Football", duration: "6:45", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "1.1M",
      likes: "41K",
      channel: "Notre Dame Football",
      videoCount: 3
    },
    position: "RB",
    school: "Notre Dame"
  },
  "Rueben Bain Jr.": {
    mainHighlight: "avYVgI-9PVs",
    playlist: [
      { id: "avYVgI-9PVs", title: "Rueben Bain Jr. 2025 Regular Season Highlights | Miami Edge", duration: "4:30", thumbnail: "hqdefault" },
      { id: "h0KPmLIWjH4", title: "Rueben Bain Jr. | 2025 Highlights", duration: "3:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "680K",
      likes: "24K",
      channel: "Miami Football",
      videoCount: 3
    },
    position: "EDGE",
    school: "Miami"
  },
  
  // Round 1 Prospects
  "David Bailey": {
    mainHighlight: "-RKz2pdyHpM",
    playlist: [
      { id: "-RKz2pdyHpM", title: "David Bailey Regular Season Highlights | 2025 Big 12", duration: "4:15", thumbnail: "hqdefault" },
      { id: "sbbww4ouiCI", title: "Texas Tech Football: David Bailey 2025 Highlights", duration: "3:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "520K",
      likes: "18K",
      channel: "Texas Tech Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Texas Tech"
  },
  "Francis Mauigoa": {
    mainHighlight: "mauigoa2025xyz",
    playlist: [
      { id: "mauigoa2025xyz", title: "Offensive Line Highlights", duration: "8:15", thumbnail: "hqdefault" },
      { id: "pancake123abc", title: "Pancake Blocks", duration: "4:45", thumbnail: "mqdefault" },
      { id: "tech456def", title: "Technique Breakdown", duration: "6:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "440K",
      likes: "15K",
      channel: "Miami Football",
      videoCount: 3
    },
    position: "OT",
    school: "Miami"
  },
  "Carnell Tate": {
    mainHighlight: "VjEjysu0Je4",
    playlist: [
      { id: "VjEjysu0Je4", title: "Carnell Tate | 2025 Highlights", duration: "7:45", thumbnail: "hqdefault" },
      { id: "S7Bvgh59OkA", title: "Carnell Tate | Ohio State WR Highlights (2024–2025)", duration: "10:18", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "920K",
      likes: "35K",
      channel: "Ohio State Football",
      videoCount: 3
    },
    position: "WR",
    school: "Ohio State"
  },
  "Sonny Styles": {
    mainHighlight: "styles2025xyz",
    playlist: [
      { id: "styles2025xyz", title: "Linebacker Highlights", duration: "8:50", thumbnail: "hqdefault" },
      { id: "speed123abc", title: "Speed & Coverage", duration: "4:20", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "580K",
      likes: "21K",
      channel: "Ohio State Football",
      videoCount: 2
    },
    position: "LB",
    school: "Ohio State"
  },
  "Jordyn Tyson": {
    mainHighlight: "OMoPpRnH2s8",
    playlist: [
      { id: "OMoPpRnH2s8", title: "Jordyn Tyson 2024 Regular Season Highlights", duration: "8:22", thumbnail: "hqdefault" },
      { id: "5CJfGAHim_4", title: "Jordyn Tyson | 2024 Arizona State Highlights", duration: "6:50", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "410K",
      likes: "14K",
      channel: "Arizona State Football",
      videoCount: 2
    },
    position: "WR",
    school: "Arizona State"
  },
  "Mansoor Delane": {
    mainHighlight: "q7j-7-kPKyQ",
    playlist: [
      { id: "q7j-7-kPKyQ", title: "Mansoor Delane 2024 Regular Season Highlights | Virginia Tech CB", duration: "4:45", thumbnail: "hqdefault" },
      { id: "VJ_49L06HcA", title: "Mansoor Delane Top Corner in College Football", duration: "3:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "380K",
      likes: "12K",
      channel: "Virginia Tech Football",
      videoCount: 2
    },
    position: "CB",
    school: "Virginia Tech"
  },
  "Spencer Fano": {
    mainHighlight: "fano2025abc",
    playlist: [
      { id: "fano2025abc", title: "Tackle Highlights", duration: "8:00", thumbnail: "hqdefault" },
      { id: "footwork456def", title: "Footwork Breakdown", duration: "6:20", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "320K",
      likes: "10K",
      channel: "Utah Football",
      videoCount: 2
    },
    position: "OT",
    school: "Utah"
  },
  "Makai Lemon": {
    mainHighlight: "s_wV_zk6Zs4",
    playlist: [
      { id: "s_wV_zk6Zs4", title: "Makai Lemon 2025 USC Trojans Junior Season Highlights", duration: "7:35", thumbnail: "hqdefault" },
      { id: "poJQn7dxuhc", title: "Makai Lemon - 2025 USC Season Highlights", duration: "8:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "490K",
      likes: "17K",
      channel: "USC Football",
      videoCount: 2
    },
    position: "WR",
    school: "USC"
  },
  "Keldric Faulk": {
    mainHighlight: "ODacFbfHoT0",
    playlist: [
      { id: "ODacFbfHoT0", title: "Keldric Faulk College Football Highlights | Auburn EDGE", duration: "5:15", thumbnail: "hqdefault" },
      { id: "KZBl31UokuY", title: "Keldric Faulk 2024 Auburn Season Highlights", duration: "4:00", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "290K",
      likes: "9K",
      channel: "Auburn Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Auburn"
  },
  "Peter Woods": {
    mainHighlight: "ZL6YMbTTHGE",
    playlist: [
      { id: "ZL6YMbTTHGE", title: "Peter Woods 2025 Regular Season Highlights | Clemson IDL", duration: "4:45", thumbnail: "hqdefault" },
      { id: "9OGztXg02SU", title: "Peter Woods | 2025 Highlights", duration: "3:20", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "340K",
      likes: "11K",
      channel: "Clemson Football",
      videoCount: 2
    },
    position: "DL",
    school: "Clemson"
  },
  "Jermod McCoy": {
    mainHighlight: "uPXje9hbs7A",
    playlist: [
      { id: "uPXje9hbs7A", title: "Jermod McCoy Top Corner in College Football", duration: "4:20", thumbnail: "hqdefault" },
      { id: "byn8RVHBdP8", title: "Tennessee CB Jermod McCoy 2024 Highlights", duration: "5:00", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "420K",
      likes: "14K",
      channel: "Tennessee Football",
      videoCount: 2
    },
    position: "CB",
    school: "Tennessee"
  },
  
  // QBs
  "Ty Simpson": {
    mainHighlight: "3xjAOHbJCec",
    playlist: [
      { id: "3xjAOHbJCec", title: "Ty Simpson | 2025 Highlights", duration: "9:18", thumbnail: "hqdefault" },
      { id: "xa66Ol2jtY0", title: "Ty Simpson | 2024 Highlights | HD | Alabama QB", duration: "3:06", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "850K",
      likes: "31K",
      channel: "Alabama Football",
      videoCount: 3
    },
    position: "QB",
    school: "Alabama"
  },
  "Drew Allar": {
    mainHighlight: "nSby5tQEV_A",
    playlist: [
      { id: "nSby5tQEV_A", title: "Drew Allar | 2025 Highlights", duration: "6:42", thumbnail: "hqdefault" },
      { id: "8k1QRSBMbV4", title: "Drew Allar | 2024 Highlights", duration: "12:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "560K",
      likes: "19K",
      channel: "Penn State Football",
      videoCount: 2
    },
    position: "QB",
    school: "Penn State"
  },
  "Carson Beck": {
    mainHighlight: "5BqtDssS9Y8",
    playlist: [
      { id: "5BqtDssS9Y8", title: "Carson Beck 2025 Regular Season Highlights | Miami QB", duration: "10:24", thumbnail: "hqdefault" },
      { id: "i5FTHC1qDOc", title: "Miami QB Carson Beck Midseason Highlights | 2025 ACC Football", duration: "8:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "480K",
      likes: "16K",
      channel: "Miami Football",
      videoCount: 2
    },
    position: "QB",
    school: "Miami"
  },
  "Trinidad Chambliss": {
    mainHighlight: "qpSftWoVsaY",
    playlist: [
      { id: "qpSftWoVsaY", title: "Trinidad Chambliss | 2025 Highlights", duration: "9:45", thumbnail: "hqdefault" },
      { id: "9vyw1JlwbAg", title: "Trinidad Chambliss - Ole Miss | 2025 Highlights", duration: "8:32", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "310K",
      likes: "10K",
      channel: "Ole Miss Football",
      videoCount: 2
    },
    position: "QB",
    school: "Ole Miss"
  },
  
  // Additional prospects with sample data
  "Cole Payton": {
    mainHighlight: "ZToprkqufUA",
    playlist: [
      { id: "ZToprkqufUA", title: "Cole Payton North Dakota State Highlights", duration: "7:18", thumbnail: "hqdefault" },
      { id: "h_Yc3S3Inu4", title: "Every Cole Payton TD at NDSU | NDSU Football Highlights", duration: "10:05", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "280K",
      likes: "9K",
      channel: "NDSU Football",
      videoCount: 2
    },
    position: "QB",
    school: "North Dakota State"
  },
  "Rahsul Faison": {
    mainHighlight: "xHygm9J1iUA",
    playlist: [
      { id: "xHygm9J1iUA", title: "Rahsul Faison | 2024 Highlights", duration: "7:15", thumbnail: "hqdefault" },
      { id: "gxC3u_r8LVM", title: "Rahsul Faison - South Carolina Highlights 2024", duration: "5:28", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "390K",
      likes: "13K",
      channel: "South Carolina Football",
      videoCount: 2
    },
    position: "RB",
    school: "South Carolina"
  },
  "T.J. Parker": {
    mainHighlight: "ECp9nBIDXVM",
    playlist: [
      { id: "ECp9nBIDXVM", title: "T.J. Parker Full College Football Highlights | Clemson EDGE", duration: "8:30", thumbnail: "hqdefault" },
      { id: "Mg0p5_lH-30", title: "T.J. Parker - Clemson | 2024 Highlights", duration: "5:45", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "260K",
      likes: "8K",
      channel: "Clemson Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Clemson"
  },
  "Caleb Lomu": {
    mainHighlight: "lomu2025abc",
    playlist: [
      { id: "lomu2025abc", title: "Utah OT Highlights", duration: "7:50", thumbnail: "hqdefault" },
      { id: "athletic456def", title: "Athleticism", duration: "4:00", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "220K",
      likes: "7K",
      channel: "Utah Football",
      videoCount: 2
    },
    position: "OT",
    school: "Utah"
  },
  "Olaivavega Ioane": {
    mainHighlight: "ioane2025xyz",
    playlist: [
      { id: "ioane2025xyz", title: "Penn State IOL Highlights", duration: "8:10", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "180K",
      likes: "6K",
      channel: "Penn State Football",
      videoCount: 1
    },
    position: "IOL",
    school: "Penn State"
  },
  "Zachariah Branch": {
    mainHighlight: "9UWlF6EAcQY",
    playlist: [
      { id: "9UWlF6EAcQY", title: "Zachariah Branch | Wide Receiver | 2025 Georgia Highlights", duration: "6:42", thumbnail: "hqdefault" },
      { id: "W8b9gobD2Gw", title: "Zachariah Branch 2025 Georgia Bulldogs Highlights", duration: "5:55", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "610K",
      likes: "22K",
      channel: "Georgia Football",
      videoCount: 3
    },
    position: "WR",
    school: "Georgia"
  },
  "Denzel Boston": {
    mainHighlight: "mPp9PIKSSIU",
    playlist: [
      { id: "mPp9PIKSSIU", title: "DENZEL BOSTON (Washington) II Full 2025 Highlights", duration: "8:48", thumbnail: "hqdefault" },
      { id: "kyyV-9nyK0Q", title: "Denzel Boston | 2025 Highlights", duration: "7:22", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "350K",
      likes: "11K",
      channel: "Washington Football",
      videoCount: 2
    },
    position: "WR",
    school: "Washington"
  },
  "Kayden McDonald": {
    mainHighlight: "mcdonald2025abc",
    playlist: [
      { id: "mcdonald2025abc", title: "Ohio State DL Highlights", duration: "7:40", thumbnail: "hqdefault" },
      { id: "run123abc", title: "Run Defense", duration: "4:20", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "300K",
      likes: "10K",
      channel: "Ohio State Football",
      videoCount: 2
    },
    position: "DL",
    school: "Ohio State"
  },
  "Akheem Mesidor": {
    mainHighlight: "0NEAv5BOY7o",
    playlist: [
      { id: "0NEAv5BOY7o", title: "Akheem Mesidor 2025 Regular Season Highlights | Miami Edge", duration: "4:20", thumbnail: "hqdefault" },
      { id: "12L26sGwzBc", title: "Akheem Mesidor College Football Highlights | Miami EDGE", duration: "5:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "270K",
      likes: "9K",
      channel: "Miami Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Miami"
  },
  "Kenyon Sadiq": {
    mainHighlight: "sadiq2025abc",
    playlist: [
      { id: "sadiq2025abc", title: "Oregon TE Highlights", duration: "9:00", thumbnail: "hqdefault" },
      { id: "athlete123abc", title: "Athletic Ability", duration: "4:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "330K",
      likes: "11K",
      channel: "Oregon Football",
      videoCount: 2
    },
    position: "TE",
    school: "Oregon"
  },
  "CJ Allen": {
    mainHighlight: "allen2025xyz",
    playlist: [
      { id: "allen2025xyz", title: "Georgia LB Highlights", duration: "8:15", thumbnail: "hqdefault" },
      { id: "instinct123abc", title: "Instincts", duration: "4:00", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "290K",
      likes: "9K",
      channel: "Georgia Football",
      videoCount: 2
    },
    position: "LB",
    school: "Georgia"
  },
  "Emmanuel Pregnon": {
    mainHighlight: "pregnon2025abc",
    playlist: [
      { id: "pregnon2025abc", title: "Oregon IOL Highlights", duration: "7:30", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "180K",
      likes: "5K",
      channel: "Oregon Football",
      videoCount: 1
    },
    position: "IOL",
    school: "Oregon"
  },
  "Dillon Thieneman": {
    mainHighlight: "thieneman2025xyz",
    playlist: [
      { id: "thieneman2025xyz", title: "Oregon Safety Highlights", duration: "8:20", thumbnail: "hqdefault" },
      { id: "versatile123abc", title: "Versatility", duration: "4:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "240K",
      likes: "8K",
      channel: "Oregon Football",
      videoCount: 2
    },
    position: "S",
    school: "Oregon"
  },
  "Tacario Davis": {
    mainHighlight: "tjtAz4n3xSU",
    playlist: [
      { id: "tjtAz4n3xSU", title: "The Next Tariq Woolen? - Arizona CB Tacario Davis Scouting Report", duration: "7:30", thumbnail: "hqdefault" },
      { id: "hkgsswo4MRg", title: "Tacario Davis Is An NFL Cornerback And An X-FACTOR", duration: "5:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "210K",
      likes: "7K",
      channel: "Arizona Football",
      videoCount: 2
    },
    position: "CB",
    school: "Arizona"
  },
  "Cashius Howell": {
    mainHighlight: "C3mxBGUv46o",
    playlist: [
      { id: "C3mxBGUv46o", title: "Cashius Howell Full College Football Highlights | Texas A&M EDGE", duration: "9:45", thumbnail: "hqdefault" },
      { id: "IYzIi7fZJVQ", title: "NFL DRAFT: Cashius Howell Highlights", duration: "3:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "230K",
      likes: "7K",
      channel: "Texas A&M Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Texas A&M"
  },
  "Rod Moore": {
    mainHighlight: "moore2025abc",
    playlist: [
      { id: "moore2025abc", title: "Michigan Safety Highlights", duration: "7:35", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "190K",
      likes: "6K",
      channel: "Michigan Football",
      videoCount: 1
    },
    position: "S",
    school: "Michigan"
  },
  "Daylen Everette": {
    mainHighlight: "nKd1knO7JXo",
    playlist: [
      { id: "nKd1knO7JXo", title: "Daylen Everette Top CB in the 2026 NFL Draft", duration: "5:00", thumbnail: "hqdefault" },
      { id: "8WFMrHUiNbg", title: "Daylen Everette 2026 NFL Draft Scouting Report", duration: "12:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "220K",
      likes: "7K",
      channel: "Georgia Football",
      videoCount: 2
    },
    position: "CB",
    school: "Georgia"
  },
  "Darius Taylor": {
    mainHighlight: "POpRSIInnls",
    playlist: [
      { id: "POpRSIInnls", title: "Darius Taylor 2024 Minnesota Highlights", duration: "8:12", thumbnail: "hqdefault" },
      { id: "QaDN1HN3dD8", title: "Darius Taylor full 2024 highlights! Minnesota RB", duration: "12:35", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "450K",
      likes: "15K",
      channel: "Minnesota Football",
      videoCount: 2
    },
    position: "RB",
    school: "Minnesota"
  },
  "Ty Simpson": {
    mainHighlight: "3xjAOHbJCec",
    playlist: [
      { id: "3xjAOHbJCec", title: "Ty Simpson | 2025 Highlights", duration: "9:18", thumbnail: "hqdefault" },
      { id: "xa66Ol2jtY0", title: "Ty Simpson | 2024 Highlights | HD | Alabama QB", duration: "3:06", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "380K",
      likes: "12K",
      channel: "Alabama Football",
      videoCount: 1
    },
    position: "QB",
    school: "Alabama"
  },
  "Eli Stowers": {
    mainHighlight: "taylor2025abc",
    playlist: [
      { id: "taylor2025abc", title: "Vanderbilt TE Highlights", duration: "8:30", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "250K",
      likes: "8K",
      channel: "Vanderbilt Football",
      videoCount: 1
    },
    position: "TE",
    school: "Vanderbilt"
  },
  "Maxwell Hairston": {
    mainHighlight: "hairston2025xyz",
    playlist: [
      { id: "hairston2025xyz", title: "Kentucky CB Highlights", duration: "7:50", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "180K",
      likes: "6K",
      channel: "Kentucky Football",
      videoCount: 1
    },
    position: "CB",
    school: "Kentucky"
  },
  "Emmanuel McNeil-Warren": {
    mainHighlight: "mcneilwarren2025abc",
    playlist: [
      { id: "mcneilwarren2025abc", title: "Emmanuel McNeil-Warren Toledo Safety Highlights", duration: "8:15", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "120K",
      likes: "4K",
      channel: "Toledo Football",
      videoCount: 1
    },
    position: "S",
    school: "Toledo"
  },
  "Caleb Banks": {
    mainHighlight: "stewart2025xyz",
    playlist: [
      { id: "stewart2025xyz", title: "Florida EDGE Highlights", duration: "8:25", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "275K",
      likes: "9K",
      channel: "Florida Football",
      videoCount: 1
    },
    position: "EDGE",
    school: "Florida"
  },
  "Anthony Hill Jr.": {
    mainHighlight: "campbell2025abc",
    playlist: [
      { id: "campbell2025abc", title: "Texas LB Highlights", duration: "8:40", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "295K",
      likes: "10K",
      channel: "Texas Football",
      videoCount: 1
    },
    position: "LB",
    school: "Texas"
  },
  "Nishad Strother": {
    mainHighlight: "savaiinaea2025xyz",
    playlist: [
      { id: "savaiinaea2025xyz", title: "Texas IOL Highlights", duration: "7:35", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "160K",
      likes: "5K",
      channel: "Texas Football",
      videoCount: 1
    },
    position: "IOL",
    school: "Texas"
  },
  "Xavier Restrepo": {
    mainHighlight: "restrepo2025abc",
    playlist: [
      { id: "restrepo2025abc", title: "Miami WR Highlights", duration: "9:10", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "330K",
      likes: "11K",
      channel: "Miami Football",
      videoCount: 1
    },
    position: "WR",
    school: "Miami"
  },
  "K.C. Concepcion": {
    mainHighlight: "burden2025xyz",
    playlist: [
      { id: "burden2025xyz", title: "Texas A&M WR Highlights", duration: "9:50", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "420K",
      likes: "14K",
      channel: "Texas A&M Football",
      videoCount: 1
    },
    position: "WR",
    school: "Texas A&M"
  }
};

// ==========================================
// VIDEO ANALYTICS
// ==========================================

const videoAnalytics = {
  data: JSON.parse(localStorage.getItem('videoAnalytics') || '{}'),
  
  trackPlay(playerName, videoId) {
    const key = `${playerName}_${videoId}`;
    if (!this.data[key]) {
      this.data[key] = { plays: 0, completions: 0, watchTime: 0 };
    }
    this.data[key].plays++;
    this.data[key].lastPlayed = new Date().toISOString();
    this.save();
  },
  
  trackComplete(playerName, videoId) {
    const key = `${playerName}_${videoId}`;
    if (!this.data[key]) {
      this.data[key] = { plays: 0, completions: 0, watchTime: 0 };
    }
    this.data[key].completions++;
    this.save();
  },
  
  trackWatchTime(playerName, videoId, seconds) {
    const key = `${playerName}_${videoId}`;
    if (!this.data[key]) {
      this.data[key] = { plays: 0, completions: 0, watchTime: 0 };
    }
    this.data[key].watchTime += seconds;
    this.save();
  },
  
  getMostWatchedVideos(limit = 10) {
    return Object.entries(this.data)
      .sort((a, b) => b[1].plays - a[1].plays)
      .slice(0, limit)
      .map(([key, data]) => {
        const [playerName, videoId] = key.split('_');
        return { playerName, videoId, ...data };
      });
  },
  
  getTrendingVideos(limit = 10) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return Object.entries(this.data)
      .filter(([key, data]) => new Date(data.lastPlayed) > oneWeekAgo)
      .sort((a, b) => b[1].plays - a[1].plays)
      .slice(0, limit)
      .map(([key, data]) => {
        const [playerName, videoId] = key.split('_');
        return { playerName, videoId, ...data };
      });
  },
  
  getWatchTimeByPosition() {
    const positionData = {};
    Object.entries(this.data).forEach(([key, data]) => {
      const playerName = key.split('_')[0];
      const playerData = playerVideos[playerName];
      if (playerData) {
        const pos = playerData.position;
        if (!positionData[pos]) {
          positionData[pos] = { totalWatchTime: 0, videoCount: 0 };
        }
        positionData[pos].totalWatchTime += data.watchTime;
        positionData[pos].videoCount++;
      }
    });
    return positionData;
  },
  
  save() {
    localStorage.setItem('videoAnalytics', JSON.stringify(this.data));
  }
};

// ==========================================
// VIDEO PLAYER STATE
// ==========================================

let currentPlayerName = null;
let currentVideoId = null;
let currentPlaylistIndex = 0;
let youtubePlayer = null;
let isCinemaMode = false;

// ==========================================
// CORE VIDEO FUNCTIONS
// ==========================================

/**
 * Open YouTube highlights for a player in new tab
 * @param {string} playerName - Name of the player
 * @param {string} videoId - Optional specific video ID
 */
function openVideoPlayer(playerName, videoId = null) {
  const playerData = playerVideos[playerName];
  if (!playerData) {
    showVideoToast(`No videos available for ${playerName}`);
    return;
  }
  
  const targetVideoId = videoId || playerData.mainHighlight;
  const youtubeUrl = `https://www.youtube.com/watch?v=${targetVideoId}`;
  
  // Track play event
  videoAnalytics.trackPlay(playerName, targetVideoId);
  
  // Open YouTube in new tab
  window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Close video player modal
 */
function closeVideoPlayer() {
  const modal = document.getElementById('videoPlayerModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      // Destroy iframe to stop video
      const container = document.getElementById('videoContainer');
      if (container) container.innerHTML = '';
    }, 300);
  }
  
  // Reset cinema mode
  if (isCinemaMode) toggleCinemaMode();
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  currentPlayerName = null;
  currentVideoId = null;
  currentPlaylistIndex = 0;
}

/**
 * Load a specific video into the player
 * @param {string} videoId - YouTube video ID
 */
function loadVideo(videoId) {
  const container = document.getElementById('videoContainer');
  if (!container) return;
  
  currentVideoId = videoId;
  
  // Use enhanced privacy mode
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  
  container.innerHTML = `
    <iframe 
      id="youtubePlayer"
      src="${embedUrl}" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      loading="lazy"
    ></iframe>
  `;
  
  // Update playlist active state
  updatePlaylistActiveState();
}

/**
 * Get video data for a player
 * @param {string} playerName - Name of the player
 * @returns {object|null} Player video data
 */
function getPlayerVideos(playerName) {
  return playerVideos[playerName] || null;
}

/**
 * Get thumbnail URL for a video
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality (default, mqdefault, hqdefault, maxresdefault)
 * @returns {string} Thumbnail URL
 */
function getVideoThumbnail(videoId, quality = 'mqdefault') {
  // Use i.ytimg.com which is more reliable than img.youtube.com
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Get recommended videos based on watched player
 * @param {string} playerName - Name of the player
 * @param {number} limit - Number of recommendations
 * @returns {array} Array of recommended player names
 */
function getRecommendedVideos(playerName, limit = 3) {
  const playerData = playerVideos[playerName];
  if (!playerData) return [];
  
  const position = playerData.position;
  const recommendations = [];
  
  // Find players with same position
  Object.entries(playerVideos).forEach(([name, data]) => {
    if (name !== playerName && data.position === position) {
      recommendations.push({ name, ...data });
    }
  });
  
  // Sort by view count and return top recommendations
  return recommendations
    .sort((a, b) => parseViews(b.stats.views) - parseViews(a.stats.views))
    .slice(0, limit);
}

/**
 * Create video playlist by category
 * @param {string} category - Category name (e.g., 'QB', 'Top Prospects')
 * @returns {array} Array of player video data
 */
function createVideoPlaylist(category) {
  const playlist = [];
  
  if (category === 'Top Prospects') {
    // Top 10 overall prospects
    const topProspects = [
      'Fernando Mendoza', 'Caleb Downs', 'Arvell Reese', 'Jeremiyah Love', 
      'Rueben Bain Jr.', 'David Bailey', 'Francis Mauigoa', 'Carnell Tate',
      'Sonny Styles', 'Jordyn Tyson'
    ];
    topProspects.forEach(name => {
      if (playerVideos[name]) {
        playlist.push({ name, ...playerVideos[name] });
      }
    });
  } else if (['QB', 'RB', 'WR', 'TE', 'OT', 'IOL', 'EDGE', 'DL', 'LB', 'CB', 'S'].includes(category)) {
    // Filter by position
    Object.entries(playerVideos).forEach(([name, data]) => {
      if (data.position === category) {
        playlist.push({ name, ...data });
      }
    });
  } else {
    // All videos sorted by views
    Object.entries(playerVideos).forEach(([name, data]) => {
      playlist.push({ name, ...data });
    });
    playlist.sort((a, b) => parseViews(b.stats.views) - parseViews(a.stats.views));
  }
  
  return playlist;
}

// ==========================================
// UI FUNCTIONS
// ==========================================

function createVideoModal() {
  // Remove existing modal if present
  const existingModal = document.getElementById('videoPlayerModal');
  if (existingModal) existingModal.remove();
  
  const modal = document.createElement('div');
  modal.id = 'videoPlayerModal';
  modal.className = 'video-player-modal';
  modal.innerHTML = `
    <div class="video-player-overlay" onclick="closeVideoPlayer()"></div>
    <div class="video-player-container">
      <div class="video-player-header">
        <button class="video-back-btn" onclick="closeVideoPlayer()">
          <i class="fas fa-arrow-left"></i> Back to Player
        </button>
        <div class="video-player-actions">
          <button class="video-action-btn" onclick="toggleCinemaMode()" title="Cinema Mode">
            <i class="fas fa-expand"></i>
          </button>
          <button class="video-action-btn" onclick="closeVideoPlayer()" title="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      
      <div class="video-player-content">
        <div class="video-main">
          <div class="video-container" id="videoContainer">
            <!-- YouTube iframe will be loaded here -->
          </div>
          
          <div class="video-info" id="videoInfo">
            <!-- Video info will be rendered here -->
          </div>
        </div>
        
        <div class="video-sidebar">
          <div class="playlist-header">
            <h3>More Videos</h3>
            <span class="playlist-count" id="playlistCount">0 videos</span>
          </div>
          <div class="playlist-container" id="playlistContainer">
            <!-- Playlist items will be rendered here -->
          </div>
          
          <div class="recommended-section" id="recommendedSection">
            <!-- Recommendations will be rendered here -->
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add keyboard event listeners
  modal.addEventListener('keydown', handleVideoKeyboard);
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}

function renderPlaylist() {
  const container = document.getElementById('playlistContainer');
  const countElement = document.getElementById('playlistCount');
  if (!container || !currentPlayerName) return;
  
  const playerData = playerVideos[currentPlayerName];
  if (!playerData) return;
  
  countElement.textContent = `${playerData.playlist.length} videos`;
  
  container.innerHTML = playerData.playlist.map((video, index) => `
    <div class="playlist-item ${index === currentPlaylistIndex ? 'active' : ''}" 
         onclick="playPlaylistItem(${index})"
         data-index="${index}">
      <div class="playlist-thumbnail">
        <img src="${getVideoThumbnail(video.id, video.thumbnail)}" alt="${video.title}" loading="lazy">
        <span class="playlist-duration">${video.duration}</span>
        ${index === currentPlaylistIndex ? '<div class="playlist-playing"><i class="fas fa-play"></i></div>' : ''}
      </div>
      <div class="playlist-info">
        <div class="playlist-title">${video.title}</div>
        <div class="playlist-channel">${playerData.stats.channel}</div>
      </div>
    </div>
  `).join('');
  
  // Render recommendations
  renderRecommendations();
}

function renderRecommendations() {
  const container = document.getElementById('recommendedSection');
  if (!container || !currentPlayerName) return;
  
  const recommendations = getRecommendedVideos(currentPlayerName, 3);
  if (recommendations.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.innerHTML = `
    <h4 class="recommended-title">Also Check Out</h4>
    ${recommendations.map(rec => `
      <div class="recommended-item" onclick="openVideoPlayer('${rec.name}')">
        <div class="recommended-thumbnail">
          <img src="${getVideoThumbnail(rec.mainHighlight, 'mqdefault')}" alt="${rec.name}" loading="lazy">
          <span class="recommended-position">${rec.position}</span>
        </div>
        <div class="recommended-info">
          <div class="recommended-name">${rec.name}</div>
          <div class="recommended-school">${rec.school}</div>
          <div class="recommended-views"><i class="fas fa-eye"></i> ${rec.stats.views}</div>
        </div>
      </div>
    `).join('')}
  `;
}

function updateVideoInfo() {
  const container = document.getElementById('videoInfo');
  if (!container || !currentPlayerName) return;
  
  const playerData = playerVideos[currentPlayerName];
  if (!playerData) return;
  
  const currentVideo = playerData.playlist[currentPlaylistIndex];
  
  container.innerHTML = `
    <h2 class="video-title">${currentVideo.title}</h2>
    <div class="video-meta">
      <span class="video-channel"><i class="fas fa-tv"></i> ${playerData.stats.channel}</span>
      <span class="video-views"><i class="fas fa-eye"></i> ${playerData.stats.views}</span>
      <span class="video-likes"><i class="fas fa-thumbs-up"></i> ${playerData.stats.likes}</span>
      <span class="video-duration"><i class="fas fa-clock"></i> ${currentVideo.duration}</span>
    </div>
    <div class="video-actions-bar">
      <a href="https://www.youtube.com/watch?v=${currentVideoId}" target="_blank" class="video-action-link">
        <i class="fab fa-youtube"></i> Watch on YouTube
      </a>
      <button class="video-action-link" onclick="shareVideo('${currentPlayerName}', '${currentVideoId}')">
        <i class="fas fa-share-alt"></i> Share
      </button>
    </div>
  `;
}

function updatePlaylistActiveState() {
  document.querySelectorAll('.playlist-item').forEach((item, index) => {
    if (index === currentPlaylistIndex) {
      item.classList.add('active');
      item.querySelector('.playlist-playing')?.remove();
      const thumbnail = item.querySelector('.playlist-thumbnail');
      if (thumbnail && !thumbnail.querySelector('.playlist-playing')) {
        thumbnail.insertAdjacentHTML('beforeend', '<div class="playlist-playing"><i class="fas fa-play"></i></div>');
      }
    } else {
      item.classList.remove('active');
      item.querySelector('.playlist-playing')?.remove();
    }
  });
  
  updateVideoInfo();
}

function playPlaylistItem(index) {
  if (!currentPlayerName) return;
  
  const playerData = playerVideos[currentPlayerName];
  if (!playerData || !playerData.playlist[index]) return;
  
  currentPlaylistIndex = index;
  const video = playerData.playlist[index];
  loadVideo(video.id);
  
  // Track play event
  videoAnalytics.trackPlay(currentPlayerName, video.id);
}

function toggleCinemaMode() {
  isCinemaMode = !isCinemaMode;
  const modal = document.querySelector('.video-player-container');
  if (modal) {
    modal.classList.toggle('cinema-mode', isCinemaMode);
  }
}

function shareVideo(playerName, videoId) {
  const shareUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const text = `Check out ${playerName}'s highlights!`;
  
  if (navigator.share) {
    navigator.share({
      title: `${playerName} Highlights`,
      text: text,
      url: shareUrl
    });
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showVideoToast('Link copied to clipboard!');
    });
  }
}

function showVideoToast(message) {
  // Use the main toast if available, otherwise create our own
  if (typeof showToast === 'function') {
    showToast(message);
  } else {
    const toast = document.createElement('div');
    toast.className = 'video-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

function handleVideoKeyboard(e) {
  switch(e.key.toLowerCase()) {
    case 'escape':
      closeVideoPlayer();
      break;
    case 'f':
      toggleFullscreen();
      break;
    case 'm':
      // Mute/unmute would require YouTube API integration
      break;
    case ' ':
      e.preventDefault();
      // Play/pause would require YouTube API integration
      break;
    case 'arrowright':
      // Skip forward would require YouTube API integration
      break;
    case 'arrowleft':
      // Skip backward would require YouTube API integration
      break;
    case 'n':
      // Next video
      if (currentPlayerName) {
        const playerData = playerVideos[currentPlayerName];
        if (playerData && currentPlaylistIndex < playerData.playlist.length - 1) {
          playPlaylistItem(currentPlaylistIndex + 1);
        }
      }
      break;
    case 'p':
      // Previous video
      if (currentPlaylistIndex > 0) {
        playPlaylistItem(currentPlaylistIndex - 1);
      }
      break;
  }
}

function toggleFullscreen() {
  const container = document.querySelector('.video-container');
  if (!container) return;
  
  if (!document.fullscreenElement) {
    container.requestFullscreen?.() || container.webkitRequestFullscreen?.();
  } else {
    document.exitFullscreen?.() || document.webkitExitFullscreen?.();
  }
}

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Only trigger if not in an input field
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  
  // 'V' key to open video for hovered/focused player
  if (e.key.toLowerCase() === 'v' && !document.getElementById('videoPlayerModal')?.classList.contains('active')) {
    const hoveredCard = document.querySelector('.pick-card:hover, .big-board-item:hover');
    if (hoveredCard) {
      const playerName = hoveredCard.dataset.player;
      if (playerName && playerVideos[playerName]) {
        openVideoPlayer(playerName);
      }
    }
  }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function parseViews(viewsString) {
  const num = parseFloat(viewsString);
  if (viewsString.includes('M')) return num * 1000000;
  if (viewsString.includes('K')) return num * 1000;
  return num;
}

// ==========================================
// PLAYER CARD INTEGRATION
// ==========================================

/**
 * Add video indicator to player cards
 */
function addVideoIndicators() {
  // Add to pick cards
  document.querySelectorAll('.pick-card').forEach(card => {
    const playerName = card.dataset.player;
    if (playerName && playerVideos[playerName]) {
      // Remove old YouTube button from social-share if exists
      const oldYoutubeBtn = card.querySelector('.watch-highlights-link');
      if (oldYoutubeBtn) oldYoutubeBtn.remove();
      
      // Add action buttons at top right of player-info
      const playerInfo = card.querySelector('.player-info');
      if (playerInfo && !playerInfo.querySelector('.player-action-buttons')) {
        const playerNameEl = playerInfo.querySelector('h2');
        const pickNum = card.querySelector('.pick-number')?.textContent?.replace('#', '') || '1';
        const teamName = card.dataset.team || '';
        if (playerNameEl) {
          playerNameEl.insertAdjacentHTML('afterend', `
            <div class="player-action-buttons">
              <button class="action-btn youtube" onclick="openVideoPlayer('${playerName}')" title="Watch YouTube Highlights">
                <i class="fab fa-youtube"></i>
              </button>
              <button class="action-btn twitter" onclick="sharePick('${teamName}', '${playerName}', ${pickNum})" title="Share on Twitter">
                <i class="fab fa-twitter"></i>
              </button>
              <button class="action-btn copy" onclick="copyPickLink(${pickNum})" title="Copy Link">
                <i class="fas fa-link"></i>
              </button>
            </div>
          `);
        }
      }
    }
  });
  
  // Add to big board items
  document.querySelectorAll('.big-board-item').forEach(item => {
    const playerName = item.querySelector('.bb-player-name')?.textContent;
    if (playerName && playerVideos[playerName] && !item.querySelector('.bb-video-btn')) {
      const rankElement = item.querySelector('.bb-rank');
      if (rankElement) {
        rankElement.insertAdjacentHTML('afterend', `
          <button class="bb-video-btn" onclick="event.stopPropagation(); openVideoPlayer('${playerName}')" title="Watch on YouTube">
            <i class="fab fa-youtube"></i>
          </button>
        `);
      }
    }
  });
}

/**
 * Initialize video system
 */
function initVideoSystem() {
  addVideoIndicators();
  
  // Re-run when Big Board is rendered
  const originalRenderBigBoard = window.renderBigBoard;
  if (originalRenderBigBoard) {
    window.renderBigBoard = function() {
      originalRenderBigBoard();
      setTimeout(addVideoIndicators, 100);
    };
  }
  
  // Add context menu for players
  document.addEventListener('contextmenu', (e) => {
    const card = e.target.closest('.pick-card, .big-board-item');
    if (card) {
      const playerName = card.dataset.player || card.querySelector('.bb-player-name')?.textContent;
      if (playerName && playerVideos[playerName]) {
        // Could add custom context menu here
      }
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoSystem);
} else {
  initVideoSystem();
}

// Also initialize after a delay to catch dynamically loaded content
setTimeout(initVideoSystem, 1000);
setTimeout(initVideoSystem, 3000);

// Export functions for global access
window.openVideoPlayer = openVideoPlayer;
window.closeVideoPlayer = closeVideoPlayer;
window.loadVideo = loadVideo;
window.getPlayerVideos = getPlayerVideos;
window.getVideoThumbnail = getVideoThumbnail;
window.getRecommendedVideos = getRecommendedVideos;
window.createVideoPlaylist = createVideoPlaylist;
window.playPlaylistItem = playPlaylistItem;
window.toggleCinemaMode = toggleCinemaMode;
window.shareVideo = shareVideo;
window.videoAnalytics = videoAnalytics;
window.playerVideos = playerVideos;

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
    mainHighlight: "dQw4w9WgXcQ",
    playlist: [
      { id: "dQw4w9WgXcQ", title: "2025 Season Highlights", duration: "8:42", thumbnail: "hqdefault" },
      { id: "abc123xyz", title: "vs Ohio State Championship", duration: "4:15", thumbnail: "mqdefault" },
      { id: "def456uvw", title: "NFL Draft Profile", duration: "6:30", thumbnail: "mqdefault" },
      { id: "ghi789rst", title: "Indiana Football Journey", duration: "12:20", thumbnail: "mqdefault" }
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
    mainHighlight: "xyz789abc",
    playlist: [
      { id: "xyz789abc", title: "2025 Defensive Highlights", duration: "7:25", thumbnail: "hqdefault" },
      { id: "mno345pqr", title: "All-American Bowl", duration: "5:10", thumbnail: "mqdefault" },
      { id: "stu678vwx", title: "Interception Compilation", duration: "3:45", thumbnail: "mqdefault" }
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
    mainHighlight: "lbm123xyz",
    playlist: [
      { id: "lbm123xyz", title: "Linebacker Highlights 2025", duration: "9:15", thumbnail: "hqdefault" },
      { id: "sack456def", title: "Sack Compilation", duration: "4:30", thumbnail: "mqdefault" },
      { id: "cov789ghi", title: "Coverage Skills", duration: "5:45", thumbnail: "mqdefault" }
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
    mainHighlight: "rb2025abc",
    playlist: [
      { id: "rb2025abc", title: "2025 Season Highlights", duration: "10:20", thumbnail: "hqdefault" },
      { id: "td456def", title: "Touchdown Compilation", duration: "6:15", thumbnail: "mqdefault" },
      { id: "rec789ghi", title: "Receiving Highlights", duration: "4:50", thumbnail: "mqdefault" }
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
    mainHighlight: "edge2025xyz",
    playlist: [
      { id: "edge2025xyz", title: "2025 Pass Rush Highlights", duration: "8:30", thumbnail: "hqdefault" },
      { id: "sack123abc", title: "Sack Highlights", duration: "5:20", thumbnail: "mqdefault" },
      { id: "pro456def", title: "Pro Day Workout", duration: "7:10", thumbnail: "mqdefault" }
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
    mainHighlight: "bailey2025abc",
    playlist: [
      { id: "bailey2025abc", title: "2025 Highlights", duration: "9:45", thumbnail: "hqdefault" },
      { id: "quick456def", title: "Quick First Step", duration: "3:30", thumbnail: "mqdefault" }
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
    mainHighlight: "tate2025abc",
    playlist: [
      { id: "tate2025abc", title: "2025 WR Highlights", duration: "11:20", thumbnail: "hqdefault" },
      { id: "catch456def", title: "Best Catches", duration: "5:30", thumbnail: "mqdefault" },
      { id: "route789ghi", title: "Route Running", duration: "4:15", thumbnail: "mqdefault" }
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
    mainHighlight: "tyson2025abc",
    playlist: [
      { id: "tyson2025abc", title: "ASU Highlights", duration: "9:30", thumbnail: "hqdefault" },
      { id: "redzone456def", title: "Red Zone Threats", duration: "5:10", thumbnail: "mqdefault" }
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
    mainHighlight: "delane2025xyz",
    playlist: [
      { id: "delane2025xyz", title: "Cornerback Highlights", duration: "7:45", thumbnail: "hqdefault" },
      { id: "pick6123abc", title: "Interceptions", duration: "3:50", thumbnail: "mqdefault" }
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
    mainHighlight: "lemon2025xyz",
    playlist: [
      { id: "lemon2025xyz", title: "WR Highlights 2025", duration: "10:15", thumbnail: "hqdefault" },
      { id: "yac123abc", title: "YAC Compilation", duration: "4:40", thumbnail: "mqdefault" }
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
    mainHighlight: "faulk2025abc",
    playlist: [
      { id: "faulk2025abc", title: "EDGE Highlights", duration: "7:30", thumbnail: "hqdefault" },
      { id: "power456def", title: "Power Rush", duration: "4:10", thumbnail: "mqdefault" }
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
    mainHighlight: "woods2025xyz",
    playlist: [
      { id: "woods2025xyz", title: "DL Highlights 2025", duration: "8:45", thumbnail: "hqdefault" },
      { id: "interior123abc", title: "Interior Pressure", duration: "5:00", thumbnail: "mqdefault" }
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
    mainHighlight: "mccoy2025abc",
    playlist: [
      { id: "mccoy2025abc", title: "CB Highlights", duration: "9:00", thumbnail: "hqdefault" },
      { id: "press456def", title: "Press Coverage", duration: "4:30", thumbnail: "mqdefault" }
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
    mainHighlight: "simpson2025xyz",
    playlist: [
      { id: "simpson2025xyz", title: "Alabama QB Highlights", duration: "10:30", thumbnail: "hqdefault" },
      { id: "touchdown123abc", title: "Touchdown Passes", duration: "6:45", thumbnail: "mqdefault" },
      { id: "mobility456def", title: "Mobility Showcase", duration: "4:20", thumbnail: "mqdefault" }
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
    mainHighlight: "allar2025abc",
    playlist: [
      { id: "allar2025abc", title: "Penn State Highlights", duration: "9:45", thumbnail: "hqdefault" },
      { id: "arm123abc", title: "Arm Strength", duration: "5:30", thumbnail: "mqdefault" }
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
    mainHighlight: "beck2025xyz",
    playlist: [
      { id: "beck2025xyz", title: "Miami Transfer Highlights", duration: "8:20", thumbnail: "hqdefault" },
      { id: "pocket123abc", title: "Pocket Presence", duration: "4:50", thumbnail: "mqdefault" }
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
    mainHighlight: "chambliss2025abc",
    playlist: [
      { id: "chambliss2025abc", title: "Ole Miss Highlights", duration: "9:10", thumbnail: "hqdefault" },
      { id: "accuracy456def", title: "Accuracy Showcase", duration: "5:15", thumbnail: "mqdefault" }
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
    mainHighlight: "payton2025xyz",
    playlist: [
      { id: "payton2025xyz", title: "North Dakota State Highlights", duration: "10:00", thumbnail: "hqdefault" },
      { id: "fcs123abc", title: "FCS Championship Moments", duration: "6:30", thumbnail: "mqdefault" }
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
  "Kaleb Johnson": {
    mainHighlight: "johnson2025abc",
    playlist: [
      { id: "johnson2025abc", title: "Iowa RB Highlights", duration: "9:30", thumbnail: "hqdefault" },
      { id: "power456def", title: "Power Running", duration: "5:00", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "390K",
      likes: "13K",
      channel: "Iowa Football",
      videoCount: 2
    },
    position: "RB",
    school: "Iowa"
  },
  "Landon Jackson": {
    mainHighlight: "jackson2025xyz",
    playlist: [
      { id: "jackson2025xyz", title: "Arkansas EDGE Highlights", duration: "8:40", thumbnail: "hqdefault" },
      { id: "length123abc", title: "Length Advantage", duration: "4:15", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "260K",
      likes: "8K",
      channel: "Arkansas Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Arkansas"
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
    mainHighlight: "branch2025abc",
    playlist: [
      { id: "branch2025abc", title: "Georgia WR Highlights", duration: "9:20", thumbnail: "hqdefault" },
      { id: "speed123abc", title: "Speed Showcase", duration: "4:30", thumbnail: "mqdefault" },
      { id: "return456def", title: "Return Highlights", duration: "5:10", thumbnail: "mqdefault" }
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
    mainHighlight: "boston2025xyz",
    playlist: [
      { id: "boston2025xyz", title: "Washington WR Highlights", duration: "8:30", thumbnail: "hqdefault" },
      { id: "deep123abc", title: "Deep Threats", duration: "4:45", thumbnail: "mqdefault" }
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
    mainHighlight: "mesidor2025xyz",
    playlist: [
      { id: "mesidor2025xyz", title: "Miami EDGE Highlights", duration: "8:00", thumbnail: "hqdefault" },
      { id: "motor123abc", title: "High Motor Plays", duration: "4:10", thumbnail: "mqdefault" }
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
  "Donovan Jackson": {
    mainHighlight: "jackson2025abc",
    playlist: [
      { id: "jackson2025abc", title: "Ohio State IOL Highlights", duration: "7:30", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "200K",
      likes: "6K",
      channel: "Ohio State Football",
      videoCount: 1
    },
    position: "IOL",
    school: "Ohio State"
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
    mainHighlight: "davis2025abc",
    playlist: [
      { id: "davis2025abc", title: "Arizona CB Highlights", duration: "7:45", thumbnail: "hqdefault" },
      { id: "size123abc", title: "Size Advantage", duration: "4:00", thumbnail: "mqdefault" }
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
  "Princely Umanmielen": {
    mainHighlight: "umanmielen2025xyz",
    playlist: [
      { id: "umanmielen2025xyz", title: "Ole Miss EDGE Highlights", duration: "8:05", thumbnail: "hqdefault" },
      { id: "bend123abc", title: "Bend & Speed", duration: "4:10", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "230K",
      likes: "7K",
      channel: "Ole Miss Football",
      videoCount: 2
    },
    position: "EDGE",
    school: "Ole Miss"
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
    mainHighlight: "everette2025xyz",
    playlist: [
      { id: "everette2025xyz", title: "Georgia CB Highlights", duration: "8:00", thumbnail: "hqdefault" },
      { id: "tech123abc", title: "Technique", duration: "4:20", thumbnail: "mqdefault" }
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
  "TreVeyon Henderson": {
    mainHighlight: "henderson2025abc",
    playlist: [
      { id: "henderson2025abc", title: "Ohio State RB Highlights", duration: "9:45", thumbnail: "hqdefault" },
      { id: "burst123abc", title: "Burst & Speed", duration: "4:30", thumbnail: "mqdefault" }
    ],
    stats: {
      views: "450K",
      likes: "15K",
      channel: "Ohio State Football",
      videoCount: 2
    },
    position: "RB",
    school: "Ohio State"
  },
  "Ty Simpson": {
    mainHighlight: "tysimpson2025xyz",
    playlist: [
      { id: "tysimpson2025xyz", title: "Alabama QB Highlights", duration: "10:15", thumbnail: "hqdefault" }
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
  "Mason Taylor": {
    mainHighlight: "taylor2025abc",
    playlist: [
      { id: "taylor2025abc", title: "LSU TE Highlights", duration: "8:30", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "250K",
      likes: "8K",
      channel: "LSU Football",
      videoCount: 1
    },
    position: "TE",
    school: "LSU"
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
  "Malaki Starks": {
    mainHighlight: "starks2025abc",
    playlist: [
      { id: "starks2025abc", title: "Georgia Safety Highlights", duration: "8:10", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "310K",
      likes: "10K",
      channel: "Georgia Football",
      videoCount: 1
    },
    position: "S",
    school: "Georgia"
  },
  "Shemar Stewart": {
    mainHighlight: "stewart2025xyz",
    playlist: [
      { id: "stewart2025xyz", title: "Texas A&M EDGE Highlights", duration: "8:25", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "275K",
      likes: "9K",
      channel: "Texas A&M Football",
      videoCount: 1
    },
    position: "EDGE",
    school: "Texas A&M"
  },
  "Jihaad Campbell": {
    mainHighlight: "campbell2025abc",
    playlist: [
      { id: "campbell2025abc", title: "Alabama LB Highlights", duration: "8:40", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "295K",
      likes: "10K",
      channel: "Alabama Football",
      videoCount: 1
    },
    position: "LB",
    school: "Alabama"
  },
  "Jonah Savaiinaea": {
    mainHighlight: "savaiinaea2025xyz",
    playlist: [
      { id: "savaiinaea2025xyz", title: "Arizona IOL Highlights", duration: "7:35", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "160K",
      likes: "5K",
      channel: "Arizona Football",
      videoCount: 1
    },
    position: "IOL",
    school: "Arizona"
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
  "Luther Burden III": {
    mainHighlight: "burden2025xyz",
    playlist: [
      { id: "burden2025xyz", title: "Missouri WR Highlights", duration: "9:50", thumbnail: "hqdefault" }
    ],
    stats: {
      views: "420K",
      likes: "14K",
      channel: "Missouri Football",
      videoCount: 1
    },
    position: "WR",
    school: "Missouri"
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
 * Open video player modal for a player
 * @param {string} playerName - Name of the player
 * @param {string} videoId - Optional specific video ID
 */
function openVideoPlayer(playerName, videoId = null) {
  const playerData = playerVideos[playerName];
  if (!playerData) {
    showVideoToast(`No videos available for ${playerName}`);
    return;
  }
  
  currentPlayerName = playerName;
  currentVideoId = videoId || playerData.mainHighlight;
  currentPlaylistIndex = 0;
  
  // Find playlist index if videoId specified
  if (videoId) {
    const index = playerData.playlist.findIndex(v => v.id === videoId);
    if (index !== -1) currentPlaylistIndex = index;
  }
  
  createVideoModal();
  loadVideo(currentVideoId);
  renderPlaylist();
  updateVideoInfo();
  
  // Track play event
  videoAnalytics.trackPlay(playerName, currentVideoId);
  
  // Show modal with animation
  const modal = document.getElementById('videoPlayerModal');
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
  }
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
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
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
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
      const playerPhoto = card.querySelector('.player-photo');
      if (playerPhoto && !playerPhoto.querySelector('.video-indicator')) {
        const videoCount = playerVideos[playerName].playlist.length;
        playerPhoto.insertAdjacentHTML('beforeend', `
          <div class="video-indicator" onclick="event.stopPropagation(); openVideoPlayer('${playerName}')">
            <i class="fas fa-play"></i>
            <span class="video-count">${videoCount}</span>
          </div>
        `);
      }
      
      // Add watch highlights link
      const playerInfo = card.querySelector('.player-info');
      if (playerInfo && !playerInfo.querySelector('.watch-highlights-link')) {
        const socialShare = playerInfo.querySelector('.social-share');
        if (socialShare) {
          socialShare.insertAdjacentHTML('afterbegin', `
            <button class="share-btn watch-highlights-link" onclick="openVideoPlayer('${playerName}')">
              <i class="fas fa-play-circle"></i> Watch Highlights
            </button>
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
          <button class="bb-video-btn" onclick="event.stopPropagation(); openVideoPlayer('${playerName}')" title="Watch Highlights">
            <i class="fas fa-play"></i>
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

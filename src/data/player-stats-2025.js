// 2025 College Football Season Stats
// Stats for draft prospects used on the Big Board
// Format: playerName -> position specific stats

const PLAYER_STATS_2025 = {
    // Quarterbacks
    'Fernando Mendoza': {
          position: 'QB',
          passYds: 3847,
          passTds: 28,
          ints: 12,
          compPct: 67.2,
          school: 'Indiana'
    },

    // Edge Rushers
    'David Bailey': {
          position: 'EDGE',
          tackles: 94,
          sacks: 14.5,
          tfl: 24,
          pd: 8,
          int: 1,
          school: 'Texas Tech'
    },
    'Jaylon Carlies': {
          position: 'EDGE',
          tackles: 78,
          sacks: 12.0,
          tfl: 19,
          pd: 6,
          int: 0,
          school: 'Wake Forest'
    },

    // Linebackers
    'Arvell Reese': {
          position: 'LB',
          tackles: 156,
          sacks: 3.5,
          tfl: 16,
          pd: 12,
          int: 2,
          school: 'Ohio State'
    },

    // Running Backs
    'Jeremiyah Love': {
          position: 'RB',
          rec: 42,
          yds: 1247,
          tds: 14,
          avg: 5.8,
          school: 'Notre Dame'
    },

    // Safeties
    'Caleb Downs': {
          position: 'S',
          tackles: 134,
          sacks: 1.0,
          tfl: 8,
          pd: 18,
          int: 5,
          school: 'Ohio State'
    },
    'Nick Emmanwori': {
          position: 'S',
          tackles: 89,
          sacks: 2.5,
          tfl: 11,
          pd: 14,
          int: 3,
          school: 'South Carolina'
    },

    // Cornerbacks
    'Daylen Everette': {
          position: 'CB',
          tackles: 42,
          sacks: 0.0,
          tfl: 3,
          pd: 18,
          int: 2,
          school: 'Georgia'
    },
    'Aireontae Ersery': {
          position: 'CB',
          tackles: 38,
          sacks: 0.0,
          tfl: 2,
          pd: 16,
          int: 3,
          school: 'Minnesota'
    },

    // Defensive Tackles
    'Chris McClellan': {
          position: 'DL',
          tackles: 67,
          sacks: 8.5,
          tfl: 14,
          pd: 5,
          int: 0,
          school: 'Missouri'
    },

    // Wide Receivers
    'Wayne Taulapapa': {
          position: 'WR',
          rec: 68,
          yds: 1156,
          tds: 9,
          avg: 17.0,
          school: 'Colorado'
    },
    'Darius Stills': {
          position: 'WR',
          rec: 71,
          yds: 1089,
          tds: 8,
          avg: 15.3,
          school: 'West Virginia'
    },

    // Default stats object for players without specific data
    'default': {
          tackles: 0,
          sacks: 0.0,
          tfl: 0,
          pd: 0,
          int: 0,
          rec: 0,
          yds: 0,
          tds: 0,
          avg: 0.0,
          passYds: 0,
          passTds: 0,
          ints: 0,
          compPct: 0.0
    }
};

/**
 * Get player stats by name
 * @param {string} playerName - Full name of the player
 * @returns {object} Player stats object or default empty stats
 */
function getPlayerStats(playerName) {
    return PLAYER_STATS_2025[playerName] || { ...PLAYER_STATS_2025.default, position: 'UNKNOWN' };
}

/**
 * Get stats to display based on player position
 * @param {string} playerName - Full name of the player
 * @param {string} position - Player position
 * @returns {object} Filtered stats appropriate for position
 */
function getDisplayStats(playerName, position) {
    const fullStats = getPlayerStats(playerName);
    const stats = {};

  if (['CB', 'S', 'LB', 'DL', 'EDGE'].includes(position)) {
        // Defensive position stats
      stats.tackles = fullStats.tackles || 0;
        stats.sacks = (fullStats.sacks || 0).toFixed(1);
        stats.tfl = fullStats.tfl || 0;
        stats.pd = fullStats.pd || 0;
        stats.int = fullStats.int || 0;
  } else if (['QB'].includes(position)) {
        // QB specific stats
      stats.passYds = fullStats.passYds || 0;
        stats.passTds = fullStats.passTds || 0;
        stats.ints = fullStats.ints || 0;
        stats.compPct = (fullStats.compPct || 0).toFixed(1) + '%';
  } else if (['RB', 'WR', 'TE'].includes(position)) {
        // Offensive position stats
      stats.rec = fullStats.rec || 0;
        stats.yds = fullStats.yds || 0;
        stats.tds = fullStats.tds || 0;
        stats.avg = (fullStats.avg || 0).toFixed(1);
  } else if (['OL'].includes(position)) {
        // Offensive line - placeholder
      stats.gradeOvr = fullStats.gradeOvr || '85+';
  }

  return stats;
}

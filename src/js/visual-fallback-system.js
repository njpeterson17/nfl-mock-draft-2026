/**
 * Visual Fallback System for NFL Mock Draft Website
 * Provides team logos and player initials fallbacks when photos aren't available
 * @version 1.0.0
 */

// ============================================
// COLLEGE TEAM LOGO DATABASE
// ============================================
const CollegeTeamLogos = {
  // Power 5 - Big Ten
  'Ohio State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/194.png',
  'Indiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/84.png',
  'Penn State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/213.png',
  'Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/130.png',
  'Oregon': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png',
  'Washington': 'https://a.espncdn.com/i/teamlogos/ncaa/500/264.png',
  'USC': 'https://a.espncdn.com/i/teamlogos/ncaa/500/30.png',
  'UCLA': 'https://a.espncdn.com/i/teamlogos/ncaa/500/26.png',
  'Wisconsin': 'https://a.espncdn.com/i/teamlogos/ncaa/500/275.png',
  'Iowa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png',
  'Nebraska': 'https://a.espncdn.com/i/teamlogos/ncaa/500/158.png',
  'Minnesota': 'https://a.espncdn.com/i/teamlogos/ncaa/500/135.png',
  'Maryland': 'https://a.espncdn.com/i/teamlogos/ncaa/500/120.png',
  'Rutgers': 'https://a.espncdn.com/i/teamlogos/ncaa/500/164.png',
  'Purdue': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png',
  'Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/356.png',
  'Northwestern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/77.png',
  'Michigan State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/127.png',
  
  // Power 5 - SEC
  'Alabama': 'https://a.espncdn.com/i/teamlogos/ncaa/500/333.png',
  'Georgia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/61.png',
  'Auburn': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2.png',
  'Florida': 'https://a.espncdn.com/i/teamlogos/ncaa/500/57.png',
  'LSU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/99.png',
  'Tennessee': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png',
  'Kentucky': 'https://a.espncdn.com/i/teamlogos/ncaa/500/96.png',
  'Missouri': 'https://a.espncdn.com/i/teamlogos/ncaa/500/142.png',
  'Ole Miss': 'https://a.espncdn.com/i/teamlogos/ncaa/500/145.png',
  'Mississippi State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/344.png',
  'Arkansas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/8.png',
  'South Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2579.png',
  'Vanderbilt': 'https://a.espncdn.com/i/teamlogos/ncaa/500/238.png',
  'Texas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/251.png',
  'Oklahoma': 'https://a.espncdn.com/i/teamlogos/ncaa/500/201.png',
  'Texas A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/245.png',
  
  // Power 5 - ACC
  'Clemson': 'https://a.espncdn.com/i/teamlogos/ncaa/500/228.png',
  'Florida State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/52.png',
  'Miami': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png',
  'North Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png',
  'NC State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/152.png',
  'Duke': 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png',
  'Pittsburgh': 'https://a.espncdn.com/i/teamlogos/ncaa/500/221.png',
  'Virginia Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/259.png',
  'Virginia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/258.png',
  'Wake Forest': 'https://a.espncdn.com/i/teamlogos/ncaa/500/154.png',
  'Boston College': 'https://a.espncdn.com/i/teamlogos/ncaa/500/103.png',
  'Syracuse': 'https://a.espncdn.com/i/teamlogos/ncaa/500/183.png',
  'Georgia Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/59.png',
  'Louisville': 'https://a.espncdn.com/i/teamlogos/ncaa/500/97.png',
  'SMU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png',
  'California': 'https://a.espncdn.com/i/teamlogos/ncaa/500/25.png',
  'Stanford': 'https://a.espncdn.com/i/teamlogos/ncaa/500/24.png',
  
  // Power 5 - Big 12
  'West Virginia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/277.png',
  'Kansas State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2306.png',
  'Kansas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png',
  'Iowa State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/66.png',
  'Oklahoma State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/197.png',
  'TCU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png',
  'Baylor': 'https://a.espncdn.com/i/teamlogos/ncaa/500/239.png',
  'Texas Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png',
  'UCF': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2116.png',
  'Cincinnati': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png',
  'BYU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/252.png',
  'Houston': 'https://a.espncdn.com/i/teamlogos/ncaa/500/248.png',
  'Colorado': 'https://a.espncdn.com/i/teamlogos/ncaa/500/38.png',
  'Arizona': 'https://a.espncdn.com/i/teamlogos/ncaa/500/12.png',
  'Arizona State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/9.png',
  'Utah': 'https://a.espncdn.com/i/teamlogos/ncaa/500/254.png',
  
  // Power 5 - Pac-12 (remaining)
  'Washington State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/265.png',
  'Oregon State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/204.png',
  
  // Independent
  'Notre Dame': 'https://a.espncdn.com/i/teamlogos/ncaa/500/87.png',
  
  // Group of 5
  'Boise State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/68.png',
  'North Dakota State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2449.png',
  'South Dakota State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2571.png',
  'Coastal Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/324.png',
  'Appalachian State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2026.png',
  'Liberty': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2335.png',
  'James Madison': 'https://a.espncdn.com/i/teamlogos/ncaa/500/256.png',
  'Troy': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2653.png',
  'Tulane': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2655.png',
  'Memphis': 'https://a.espncdn.com/i/teamlogos/ncaa/500/235.png',
  'UAB': 'https://a.espncdn.com/i/teamlogos/ncaa/500/5.png',
  'UTSA': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2636.png',
  'Western Kentucky': 'https://a.espncdn.com/i/teamlogos/ncaa/500/98.png',
  'Marshall': 'https://a.espncdn.com/i/teamlogos/ncaa/500/276.png',
  'Toledo': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2649.png',
  'Ohio': 'https://a.espncdn.com/i/teamlogos/ncaa/500/195.png',
  'Fresno State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/278.png',
  'San Diego State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/21.png',
  'San Jose State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/23.png',
  'Nevada': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2447.png',
  'UNLV': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2439.png',
  'Hawaii': 'https://a.espncdn.com/i/teamlogos/ncaa/500/62.png',
  'Air Force': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2005.png',
  'Army': 'https://a.espncdn.com/i/teamlogos/ncaa/500/349.png',
  'Navy': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2426.png',
  'Tulsa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/202.png',
  'North Texas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/249.png',
  'Rice': 'https://a.espncdn.com/i/teamlogos/ncaa/500/242.png',
  'East Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/151.png',
  'South Florida': 'https://a.espncdn.com/i/teamlogos/ncaa/500/58.png',
  'UTEP': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2638.png',
  'Louisiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/309.png',
  'Arkansas State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2032.png',
  'Georgia Southern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/290.png',
  'Georgia State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2247.png',
  'Southern Miss': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2572.png',
  'Louisiana Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2348.png',
  
  // MAC
  'Miami (OH)': 'https://a.espncdn.com/i/teamlogos/ncaa/500/193.png',
  'Bowling Green': 'https://a.espncdn.com/i/teamlogos/ncaa/500/189.png',
  'Kent State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2309.png',
  'Buffalo': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2084.png',
  'Central Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2117.png',
  'Eastern Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2199.png',
  'Western Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2711.png',
  'Northern Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2459.png',
  'Ball State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2050.png',
  
  // Additional FBS
  'Florida Atlantic': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2226.png',
  'Charlotte': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2429.png',
  'Old Dominion': 'https://a.espncdn.com/i/teamlogos/ncaa/500/295.png',
  'Middle Tennessee': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2393.png',
  'Florida International': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2229.png',
  'New Mexico State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/166.png',
  'New Mexico': 'https://a.espncdn.com/i/teamlogos/ncaa/500/167.png',
  'Wyoming': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2751.png',
  'Colorado State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/36.png',
  'Utah State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/328.png',
  
  // Ivy League / FCS
  'Harvard': 'https://a.espncdn.com/i/teamlogos/ncaa/500/108.png',
  'Yale': 'https://a.espncdn.com/i/teamlogos/ncaa/500/43.png',
  'Princeton': 'https://a.espncdn.com/i/teamlogos/ncaa/500/163.png',
  'Dartmouth': 'https://a.espncdn.com/i/teamlogos/ncaa/500/48.png',
  'Penn': 'https://a.espncdn.com/i/teamlogos/ncaa/500/174.png',
  'Columbia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/171.png',
  'Cornell': 'https://a.espncdn.com/i/teamlogos/ncaa/500/172.png',
  'Brown': 'https://a.espncdn.com/i/teamlogos/ncaa/500/225.png',
  'Eastern Washington': 'https://a.espncdn.com/i/teamlogos/ncaa/500/331.png',
  'Northern Iowa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2460.png',
  'Illinois State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2287.png',
  'Southern Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/79.png',
  'Youngstown State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2754.png',
  'Montana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/149.png',
  'Montana State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/147.png',
  'Weber State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2692.png',
  'Sacramento State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/16.png',
  'UC Davis': 'https://a.espncdn.com/i/teamlogos/ncaa/500/302.png',
  'Cal Poly': 'https://a.espncdn.com/i/teamlogos/ncaa/500/13.png',
  'Delaware': 'https://a.espncdn.com/i/teamlogos/ncaa/500/48.png',
  'William & Mary': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2729.png',
  'Villanova': 'https://a.espncdn.com/i/teamlogos/ncaa/500/222.png',
  'Richmond': 'https://a.espncdn.com/i/teamlogos/ncaa/500/257.png',
  'Elon': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2210.png',
  'Towson': 'https://a.espncdn.com/i/teamlogos/ncaa/500/119.png',
  'Southeastern Louisiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2545.png',
  'Nicholls': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2447.png',
  'Sam Houston': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2534.png',
  'Stephen F. Austin': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2617.png',
  'McNeese': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2377.png',
  'Incarnate Word': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2916.png',
  'Lamar': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2320.png',
};

// ============================================
// NFL TEAM LOGO DATABASE (All 32 Teams)
// ============================================
const NFLTeamLogos = {
  'Cardinals': 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png',
  'Falcons': 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png',
  'Ravens': 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png',
  'Bills': 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png',
  'Panthers': 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png',
  'Bears': 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
  'Bengals': 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png',
  'Browns': 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png',
  'Cowboys': 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png',
  'Broncos': 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
  'Lions': 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png',
  'Packers': 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
  'Texans': 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png',
  'Colts': 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png',
  'Jaguars': 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png',
  'Chiefs': 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
  'Raiders': 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
  'Chargers': 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
  'Rams': 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
  'Dolphins': 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png',
  'Vikings': 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
  'Patriots': 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
  'Saints': 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
  'Giants': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
  'Jets': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png',
  'Eagles': 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
  'Steelers': 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png',
  '49ers': 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
  'Seahawks': 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',
  'Buccaneers': 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png',
  'Titans': 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png',
  'Commanders': 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png',
  // Alternative names
  'Washington': 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png',
  'San Francisco': 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
  'Kansas City': 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
  'Green Bay': 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
  'New England': 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
  'New Orleans': 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
  'New York Giants': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
  'New York Jets': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png',
  'Las Vegas': 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
  'Los Angeles Rams': 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
  'Los Angeles Chargers': 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
  'Tampa Bay': 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png',
};

// ============================================
// POSITION-BASED COLOR SYSTEM
// ============================================
const PositionColors = {
  'QB': { bg: '#FFD700', text: '#000000', darkBg: '#B8860B', gradient: ['#FFD700', '#FFA500'] },    // Gold
  'RB': { bg: '#FF6B6B', text: '#FFFFFF', darkBg: '#C92A2A', gradient: ['#FF6B6B', '#DC2626'] },    // Red
  'WR': { bg: '#4ECDC4', text: '#000000', darkBg: '#0D9488', gradient: ['#4ECDC4', '#14B8A6'] },    // Teal
  'TE': { bg: '#95E1D3', text: '#000000', darkBg: '#0F766E', gradient: ['#95E1D3', '#5EEAD4'] },    // Mint
  'OT': { bg: '#F38181', text: '#FFFFFF', darkBg: '#BE123C', gradient: ['#F38181', '#E11D48'] },    // Salmon
  'IOL': { bg: '#AA96DA', text: '#FFFFFF', darkBg: '#7C3AED', gradient: ['#AA96DA', '#8B5CF6'] },   // Purple
  'OL': { bg: '#AA96DA', text: '#FFFFFF', darkBg: '#7C3AED', gradient: ['#AA96DA', '#8B5CF6'] },    // Purple (alias)
  'EDGE': { bg: '#FCBAD3', text: '#000000', darkBg: '#DB2777', gradient: ['#FCBAD3', '#F472B6'] },  // Pink
  'DL': { bg: '#FFFFD2', text: '#000000', darkBg: '#CA8A04', gradient: ['#FFFFD2', '#FDE047'] },    // Yellow
  'DT': { bg: '#FDE68A', text: '#000000', darkBg: '#D97706', gradient: ['#FDE68A', '#F59E0B'] },    // Amber
  'DE': { bg: '#FCD34D', text: '#000000', darkBg: '#B45309', gradient: ['#FCD34D', '#F59E0B'] },    // Golden
  'LB': { bg: '#A8E6CF', text: '#000000', darkBg: '#059669', gradient: ['#A8E6CF', '#34D399'] },    // Green
  'ILB': { bg: '#86EFAC', text: '#000000', darkBg: '#16A34A', gradient: ['#86EFAC', '#4ADE80'] },   // Light Green
  'OLB': { bg: '#BBF7D0', text: '#000000', darkBg: '#15803D', gradient: ['#BBF7D0', '#22C55E'] },   // Pale Green
  'CB': { bg: '#FFD3B6', text: '#000000', darkBg: '#EA580C', gradient: ['#FFD3B6', '#FB923C'] },    // Orange
  'S': { bg: '#DCEDC1', text: '#000000', darkBg: '#65A30D', gradient: ['#DCEDC1', '#A3E635'] },     // Lime
  'FS': { bg: '#D9F99D', text: '#000000', darkBg: '#4D7C0F', gradient: ['#D9F99D', '#84CC16'] },    // Light Lime
  'SS': { bg: '#ECFCCB', text: '#000000', darkBg: '#3F6212', gradient: ['#ECFCCB', '#A3E635'] },    // Pale Lime
  'K': { bg: '#E9D5FF', text: '#000000', darkBg: '#7E22CE', gradient: ['#E9D5FF', '#C084FC'] },     // Light Purple
  'P': { bg: '#F3E8FF', text: '#000000', darkBg: '#9333EA', gradient: ['#F3E8FF', '#D8B4FE'] },     // Pale Purple
  'LS': { bg: '#F5F5F5', text: '#000000', darkBg: '#525252', gradient: ['#F5F5F5', '#D4D4D4'] },    // Light Gray
  'default': { bg: '#00D4FF', text: '#000000', darkBg: '#0891B2', gradient: ['#00D4FF', '#06B6D4'] } // Cyan
};

// ============================================
// POSITION ABBREVIATION MAPPING
// ============================================
const PositionMapping = {
  'QUARTERBACK': 'QB',
  'RUNNING BACK': 'RB',
  'WIDE RECEIVER': 'WR',
  'TIGHT END': 'TE',
  'OFFENSIVE TACKLE': 'OT',
  'OFFENSIVE GUARD': 'IOL',
  'GUARD': 'IOL',
  'CENTER': 'IOL',
  'INTERIOR OFFENSIVE LINE': 'IOL',
  'EDGE RUSHER': 'EDGE',
  'DEFENSIVE LINE': 'DL',
  'DEFENSIVE TACKLE': 'DT',
  'DEFENSIVE END': 'DE',
  'LINEBACKER': 'LB',
  'INSIDE LINEBACKER': 'ILB',
  'OUTSIDE LINEBACKER': 'OLB',
  'CORNERBACK': 'CB',
  'SAFETY': 'S',
  'FREE SAFETY': 'FS',
  'STRONG SAFETY': 'SS',
  'KICKER': 'K',
  'PUNTER': 'P',
  'LONG SNAPPER': 'LS'
};

// ============================================
// INITIALS GENERATOR
// ============================================
const InitialsGenerator = {
  /**
   * Generate initials from player name
   * @param {string} playerName - Full player name
   * @param {string} position - Player position
   * @returns {Object} - Object with SVG data URL and metadata
   */
  generate(playerName, position = 'default') {
    const initials = this.getInitials(playerName);
    const colors = PositionColors[position] || PositionColors.default;
    
    return {
      initials,
      colors,
      svgUrl: this.createSVG(initials, position, colors),
      cssClass: `position-${position.toLowerCase()}`
    };
  },

  /**
   * Extract initials from full name
   * @param {string} name - Full player name
   * @returns {string} - 2-letter initials
   */
  getInitials(name) {
    if (!name || typeof name !== 'string') return 'NA';
    
    // Remove suffixes like Jr., Sr., III, etc.
    const cleanedName = name
      .replace(/\s+(Jr\.?|Sr\.?|III|II|IV|V)\s*$/i, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    const parts = cleanedName.split(' ').filter(p => p.length > 0);
    
    if (parts.length >= 2) {
      // First letter of first name + first letter of last name
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts.length === 1) {
      // First 2 letters of single name
      return parts[0].substring(0, 2).toUpperCase();
    }
    
    return 'NA';
  },

  /**
   * Create SVG with initials
   * @param {string} initials - Player initials
   * @param {string} position - Player position
   * @param {Object} colors - Color configuration
   * @param {Object} options - Additional options
   * @returns {string} - Base64 encoded SVG data URL
   */
  createSVG(initials, position, colors, options = {}) {
    const {
      width = 120,
      height = 150,
      showPosition = true,
      fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
      borderRadius = 8
    } = options;

    const gradientId = `grad-${initials}-${position}-${Date.now()}`;
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.gradient[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.gradient[1]};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow-${gradientId}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background with gradient -->
  <rect width="${width}" height="${height}" fill="url(#${gradientId})" rx="${borderRadius}" ry="${borderRadius}"/>
  
  <!-- Subtle pattern overlay -->
  <pattern id="pattern-${gradientId}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/>
  </pattern>
  <rect width="${width}" height="${height}" fill="url(#pattern-${gradientId})" rx="${borderRadius}" ry="${borderRadius}"/>
  
  <!-- Initials circle background -->
  <circle cx="${width/2}" cy="${height/2 - 10}" r="35" fill="rgba(255,255,255,0.15)" filter="url(#shadow-${gradientId})"/>
  
  <!-- Initials text -->
  <text x="${width/2}" y="${height/2 - 2}" 
        font-family="${fontFamily}" 
        font-size="36" 
        font-weight="700" 
        fill="${colors.text}" 
        text-anchor="middle"
        style="text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${initials}</text>
  
  <!-- Position label -->
  ${showPosition ? `
  <rect x="${width/2 - 18}" y="${height - 35}" width="36" height="20" rx="4" fill="rgba(0,0,0,0.2)"/>
  <text x="${width/2}" y="${height - 21}" 
        font-family="${fontFamily}" 
        font-size="11" 
        font-weight="600" 
        fill="${colors.text}" 
        text-anchor="middle">${position}</text>
  ` : ''}
  
  <!-- Decorative accent line -->
  <rect x="20" y="${height - 8}" width="${width - 40}" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>
</svg>`;

    return `data:image/svg+xml;base64,${this.btoaUnicode(svg)}`;
  },

  /**
   * Unicode-safe base64 encoding
   * @param {string} str - String to encode
   * @returns {string} - Base64 encoded string
   */
  btoaUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, 
      (match, p1) => String.fromCharCode('0x' + p1)));
  }
};

// ============================================
// CACHE MANAGER
// ============================================
const LogoCache = {
  cache: new Map(),
  verifiedUrls: new Set(),
  failedUrls: new Set(),
  maxSize: 200,

  /**
   * Get cached logo URL
   * @param {string} key - Cache key
   * @returns {string|null} - Cached URL or null
   */
  get(key) {
    const entry = this.cache.get(key);
    if (entry) {
      entry.lastAccessed = Date.now();
      return entry.url;
    }
    return null;
  },

  /**
   * Store logo URL in cache
   * @param {string} key - Cache key
   * @param {string} url - Logo URL
   */
  set(key, url) {
    if (this.cache.size >= this.maxSize) {
      // Remove oldest entry
      const oldest = [...this.cache.entries()]
        .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed)[0];
      this.cache.delete(oldest[0]);
    }
    
    this.cache.set(key, {
      url,
      lastAccessed: Date.now()
    });
  },

  /**
   * Mark URL as verified (working)
   * @param {string} url - Verified URL
   */
  markVerified(url) {
    this.verifiedUrls.add(url);
  },

  /**
   * Mark URL as failed
   * @param {string} url - Failed URL
   */
  markFailed(url) {
    this.failedUrls.add(url);
  },

  /**
   * Check if URL was previously verified
   * @param {string} url - URL to check
   * @returns {boolean}
   */
  isVerified(url) {
    return this.verifiedUrls.has(url);
  },

  /**
   * Check if URL previously failed
   * @param {string} url - URL to check
   * @returns {boolean}
   */
  isFailed(url) {
    return this.failedUrls.has(url);
  },

  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear();
    this.verifiedUrls.clear();
    this.failedUrls.clear();
  }
};

// ============================================
// VISUAL FALLBACK SYSTEM
// ============================================
const VisualFallbackSystem = {
  /**
   * Create a smart player visual with fallback chain
   * @param {Object} player - Player data object
   * @param {Object} options - Display options
   * @returns {Promise<string>} - HTML string for the visual card
   */
  async createSmartPlayerVisual(player, options = {}) {
    const {
      preferTeamLogo = true,
      showInitials = true,
      size = 'medium',
      showPosition = true,
      interactive = true
    } = options;

    const normalizedPosition = this.normalizePosition(player.position);

    // Try team logo first if preferred
    if (preferTeamLogo && player.school) {
      const logoUrl = await this.getSchoolLogo(player.school);
      if (logoUrl) {
        return this.createTeamLogoCard(player, logoUrl, { 
          size, 
          showPosition, 
          interactive,
          normalizedPosition 
        });
      }
    }

    // Fall back to initials
    if (showInitials) {
      return this.createInitialsCard(player, { 
        size, 
        showPosition,
        interactive,
        normalizedPosition 
      });
    }

    // Ultimate fallback - position placeholder
    return this.createPositionPlaceholder(player, { 
      size, 
      showPosition,
      interactive,
      normalizedPosition 
    });
  },

  /**
   * Normalize position string
   * @param {string} position - Raw position
   * @returns {string} - Normalized position
   */
  normalizePosition(position) {
    if (!position) return 'default';
    const upperPos = position.toUpperCase().trim();
    return PositionMapping[upperPos] || upperPos;
  },

  /**
   * Get school logo URL (with caching)
   * @param {string} schoolName - School name
   * @returns {Promise<string|null>} - Logo URL or null
   */
  async getSchoolLogo(schoolName) {
    // Check cache first
    const cached = LogoCache.get(schoolName);
    if (cached) return cached;

    // Check hardcoded database
    const hardcoded = CollegeTeamLogos[schoolName];
    if (hardcoded) {
      if (LogoCache.isVerified(hardcoded)) {
        LogoCache.set(schoolName, hardcoded);
        return hardcoded;
      }
      
      // Verify the URL works
      if (await this.imageExists(hardcoded)) {
        LogoCache.set(schoolName, hardcoded);
        LogoCache.markVerified(hardcoded);
        return hardcoded;
      }
    }

    // Try to fetch dynamically
    const dynamic = await this.fetchSchoolLogo(schoolName);
    if (dynamic) {
      LogoCache.set(schoolName, dynamic);
      return dynamic;
    }

    return null;
  },

  /**
   * Check if image exists
   * @param {string} url - Image URL
   * @returns {Promise<boolean>}
   */
  imageExists(url) {
    return new Promise((resolve) => {
      if (LogoCache.isFailed(url)) {
        resolve(false);
        return;
      }

      const img = new Image();
      img.onload = () => {
        LogoCache.markVerified(url);
        resolve(true);
      };
      img.onerror = () => {
        LogoCache.markFailed(url);
        resolve(false);
      };
      img.src = url;
      
      // Timeout after 5 seconds
      setTimeout(() => {
        LogoCache.markFailed(url);
        resolve(false);
      }, 5000);
    });
  },

  /**
   * Try to fetch school logo dynamically
   * @param {string} schoolName - School name
   * @returns {Promise<string|null>} - Logo URL or null
   */
  async fetchSchoolLogo(schoolName) {
    if (!schoolName) return null;

    // Normalize school name for URL construction
    const normalized = schoolName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '');

    // Try various URL patterns
    const patterns = [
      `https://a.espncdn.com/i/teamlogos/ncaa/500/${normalized}.png`,
      `https://a.espncdn.com/i/teamlogos/ncaa/500/${normalized}_logo.png`,
      `https://a.espncdn.com/i/teamlogos/ncaa/500-dark/${normalized}.png`,
    ];

    for (const url of patterns) {
      if (LogoCache.isFailed(url)) continue;
      
      if (await this.imageExists(url)) {
        return url;
      }
    }

    return null;
  },

  /**
   * Create team logo card HTML
   * @param {Object} player - Player data
   * @param {string} logoUrl - Team logo URL
   * @param {Object} options - Display options
   * @returns {string} - HTML string
   */
  createTeamLogoCard(player, logoUrl, options = {}) {
    const { size = 'medium', showPosition = true, interactive = true, normalizedPosition } = options;
    const colors = PositionColors[normalizedPosition] || PositionColors.default;
    
    const sizeClasses = {
      small: 'player-visual-card--small',
      medium: 'player-visual-card--medium',
      large: 'player-visual-card--large'
    };

    const className = `player-visual-card player-visual-card--logo position-${normalizedPosition.toLowerCase()} ${sizeClasses[size] || ''} ${interactive ? 'player-visual-card--interactive' : ''}`;

    return `
      <div class="${className}" 
           data-player-name="${player.name}" 
           data-player-position="${player.position}"
           data-player-school="${player.school}"
           style="--pos-color: ${colors.bg}; --pos-color-dark: ${colors.darkBg};">
        ${showPosition ? `<span class="position-badge">${normalizedPosition}</span>` : ''}
        <div class="logo-container">
          <img src="${logoUrl}" 
               alt="${player.school}" 
               class="team-logo"
               loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('logo-failed')">
        </div>
        <div class="player-info">
          <div class="player-name">${player.name}</div>
          <div class="player-school">${player.school}</div>
        </div>
        <div class="initials-fallback">
          <span class="initials-text">${InitialsGenerator.getInitials(player.name)}</span>
        </div>
      </div>
    `;
  },

  /**
   * Create initials card HTML
   * @param {Object} player - Player data
   * @param {Object} options - Display options
   * @returns {string} - HTML string
   */
  createInitialsCard(player, options = {}) {
    const { size = 'medium', interactive = true, normalizedPosition } = options;
    const initialsData = InitialsGenerator.generate(player.name, normalizedPosition);

    const sizeClasses = {
      small: 'player-visual-card--small',
      medium: 'player-visual-card--medium',
      large: 'player-visual-card--large'
    };

    const className = `player-visual-card player-visual-card--initials ${sizeClasses[size] || ''} ${interactive ? 'player-visual-card--interactive' : ''}`;

    return `
      <div class="${className}"
           data-player-name="${player.name}" 
           data-player-position="${player.position}"
           data-player-school="${player.school || ''}">
        <img src="${initialsData.svgUrl}" 
             alt="${player.name}" 
             class="initials-image"
             loading="lazy">
      </div>
    `;
  },

  /**
   * Create position placeholder HTML
   * @param {Object} player - Player data
   * @param {Object} options - Display options
   * @returns {string} - HTML string
   */
  createPositionPlaceholder(player, options = {}) {
    const { size = 'medium', showPosition = true, interactive = true, normalizedPosition } = options;
    const colors = PositionColors[normalizedPosition] || PositionColors.default;

    const sizeClasses = {
      small: 'player-visual-card--small',
      medium: 'player-visual-card--medium',
      large: 'player-visual-card--large'
    };

    const className = `player-visual-card player-visual-card--placeholder position-${normalizedPosition.toLowerCase()} ${sizeClasses[size] || ''} ${interactive ? 'player-visual-card--interactive' : ''}`;

    return `
      <div class="${className}"
           data-player-name="${player.name}" 
           data-player-position="${player.position}"
           style="--pos-color: ${colors.bg}; --pos-color-dark: ${colors.darkBg};">
        ${showPosition ? `<span class="position-badge">${normalizedPosition}</span>` : ''}
        <div class="placeholder-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div class="player-info">
          <div class="player-name">${player.name}</div>
        </div>
      </div>
    `;
  },

  /**
   * Create NFL team logo card
   * @param {string} teamName - NFL team name
   * @param {Object} options - Display options
   * @returns {string|null} - HTML string or null
   */
  createNFLTeamLogoCard(teamName, options = {}) {
    const logoUrl = NFLTeamLogos[teamName];
    if (!logoUrl) return null;

    const { size = 'medium', interactive = true, showName = true } = options;

    const sizeClasses = {
      small: 'nfl-team-logo--small',
      medium: 'nfl-team-logo--medium',
      large: 'nfl-team-logo--large'
    };

    const className = `nfl-team-logo ${sizeClasses[size] || ''} ${interactive ? 'nfl-team-logo--interactive' : ''}`;

    return `
      <div class="${className}" data-team="${teamName}">
        <img src="${logoUrl}" alt="${teamName}" loading="lazy">
        ${showName ? `<span class="team-name">${teamName}</span>` : ''}
      </div>
    `;
  },

  /**
   * Render a grid of player visuals
   * @param {Array} players - Array of player objects
   * @param {Object} options - Display options
   * @returns {Promise<string>} - HTML string
   */
  async renderPlayerGrid(players, options = {}) {
    const { columns = 4, gap = '16px' } = options;
    
    const playerCards = await Promise.all(
      players.map(player => this.createSmartPlayerVisual(player, options))
    );

    return `
      <div class="player-logo-grid" style="--grid-columns: ${columns}; --grid-gap: ${gap};">
        ${playerCards.join('')}
      </div>
    `;
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Preload a batch of school logos
 * @param {Array<string>} schoolNames - Array of school names
 * @returns {Promise<void>}
 */
async function preloadSchoolLogos(schoolNames) {
  const uniqueSchools = [...new Set(schoolNames)].filter(Boolean);
  
  await Promise.all(
    uniqueSchools.map(async (school) => {
      await VisualFallbackSystem.getSchoolLogo(school);
    })
  );
}

/**
 * Get all schools in the database
 * @returns {Array<string>} - Array of school names
 */
function getAllSchools() {
  return Object.keys(CollegeTeamLogos).sort();
}

/**
 * Get all NFL teams
 * @returns {Array<string>} - Array of team names
 */
function getAllNFLTeams() {
  return Object.keys(NFLTeamLogos).sort();
}

/**
 * Search schools by name
 * @param {string} query - Search query
 * @returns {Array<string>} - Matching school names
 */
function searchSchools(query) {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return Object.keys(CollegeTeamLogos)
    .filter(school => school.toLowerCase().includes(lowerQuery))
    .slice(0, 10);
}

// ============================================
// EXPORT FOR MODULE SYSTEMS
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CollegeTeamLogos,
    NFLTeamLogos,
    PositionColors,
    PositionMapping,
    InitialsGenerator,
    LogoCache,
    VisualFallbackSystem,
    preloadSchoolLogos,
    getAllSchools,
    getAllNFLTeams,
    searchSchools
  };
}

// Add to window for browser usage
if (typeof window !== 'undefined') {
  window.VisualFallbackSystem = VisualFallbackSystem;
  window.InitialsGenerator = InitialsGenerator;
  window.CollegeTeamLogos = CollegeTeamLogos;
  window.NFLTeamLogos = NFLTeamLogos;
  window.PositionColors = PositionColors;
  window.preloadSchoolLogos = preloadSchoolLogos;
  window.getAllSchools = getAllSchools;
  window.getAllNFLTeams = getAllNFLTeams;
  window.searchSchools = searchSchools;
}

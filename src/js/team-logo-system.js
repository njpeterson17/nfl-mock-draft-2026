/**
 * NFL Mock Draft 2026 - Team Logo SVG System
 * Comprehensive logo system for NFL teams and college programs
 * SVG format for crisp display at any size
 */

// ============================================
// 1. NFL TEAM LOGOS (32 Teams)
// ============================================
const nflTeamLogos = {
  // AFC East
  bills: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#00338D"/>
    <path d="M50 15 L60 40 L85 40 L65 55 L72 80 L50 65 L28 80 L35 55 L15 40 L40 40 Z" fill="#C60C30"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="28" font-weight="bold" font-family="Arial">B</text>
  </svg>`,

  dolphins: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#008E97"/>
    <ellipse cx="50" cy="55" rx="35" ry="25" fill="#FC4C02"/>
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="white"/>
    <path d="M30 45 Q50 35 70 45 Q65 55 50 52 Q35 55 30 45" fill="#008E97"/>
    <circle cx="62" cy="48" r="4" fill="white"/>
  </svg>`,

  jets: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#125740"/>
    <path d="M20 30 L80 30 L75 45 L25 45 Z" fill="white"/>
    <path d="M25 50 L75 50 L70 65 L30 65 Z" fill="white"/>
    <text x="50" y="58" text-anchor="middle" fill="#125740" font-size="22" font-weight="bold" font-family="Arial">NYJ</text>
  </svg>`,

  patriots: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#002244"/>
    <path d="M50 20 L55 40 L75 40 L60 52 L65 72 L50 60 L35 72 L40 52 L25 40 L45 40 Z" fill="#C60C30"/>
    <circle cx="50" cy="48" r="10" fill="white"/>
    <path d="M45 46 L55 46 L55 50 L45 50 Z" fill="#002244"/>
  </svg>`,

  // AFC North
  ravens: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#241773"/>
    <path d="M30 35 Q50 25 70 35 L70 55 Q50 45 30 55 Z" fill="#9E7C0C"/>
    <circle cx="50" cy="55" r="18" fill="#000000"/>
    <path d="M42 50 L58 50 L55 60 L45 60 Z" fill="#9E7C0C"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="12" font-weight="bold">B</text>
  </svg>`,

  bengals: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FB4F14"/>
    <path d="M50 10 L55 25 L70 25 L58 35 L63 50 L50 40 L37 50 L42 35 L30 25 L45 25 Z" fill="black"/>
    <ellipse cx="50" cy="65" rx="30" ry="15" fill="white"/>
    <path d="M25 60 Q50 50 75 60" stroke="black" stroke-width="4" fill="none"/>
    <path d="M25 68 Q50 58 75 68" stroke="black" stroke-width="4" fill="none"/>
  </svg>`,

  browns: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FF3C00"/>
    <ellipse cx="50" cy="50" rx="35" ry="30" fill="#311D00"/>
    <text x="50" y="62" text-anchor="middle" fill="#FF3C00" font-size="45" font-weight="bold" font-family="Georgia">C</text>
  </svg>`,

  steelers: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FFB612"/>
    <circle cx="50" cy="50" r="38" fill="white" stroke="#101820" stroke-width="2"/>
    <path d="M50 15 L55 35 L75 35 L60 48 L65 68 L50 55 L35 68 L40 48 L25 35 L45 35 Z" fill="#101820"/>
    <text x="50" y="52" text-anchor="middle" fill="#FFB612" font-size="14" font-weight="bold">Steelers</text>
  </svg>`,

  // AFC South
  texans: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#03202F"/>
    <path d="M50 15 L60 40 L85 40 L65 55 L72 80 L50 65 L28 80 L35 55 L15 40 L40 40 Z" fill="#A71930"/>
    <circle cx="50" cy="50" r="15" fill="white"/>
    <text x="50" y="56" text-anchor="middle" fill="#03202F" font-size="16" font-weight="bold">H</text>
  </svg>`,

  colts: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#002C5F"/>
    <path d="M25 50 Q35 30 50 30 Q65 30 75 50 Q65 70 50 70 Q35 70 25 50" fill="white"/>
    <path d="M35 50 Q42 38 50 38 Q58 38 65 50 Q58 62 50 62 Q42 62 35 50" fill="#002C5F"/>
    <text x="50" y="55" text-anchor="middle" fill="white" font-size="12">SHOE</text>
  </svg>`,

  jaguars: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#006778"/>
    <ellipse cx="50" cy="55" rx="30" ry="25" fill="#D7A22A"/>
    <ellipse cx="50" cy="52" rx="25" ry="20" fill="#9F792C"/>
    <circle cx="42" cy="48" r="5" fill="white"/>
    <circle cx="58" cy="48" r="5" fill="white"/>
    <circle cx="42" cy="48" r="2" fill="black"/>
    <circle cx="58" cy="48" r="2" fill="black"/>
    <path d="M45 60 Q50 65 55 60" stroke="white" stroke-width="2" fill="none"/>
  </svg>`,

  titans: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0C2340"/>
    <path d="M20 35 L80 35 L75 50 L25 50 Z" fill="#4B92DB"/>
    <path d="M25 55 L75 55 L70 70 L30 70 Z" fill="#C8102E"/>
    <circle cx="50" cy="52" r="12" fill="white"/>
    <text x="50" y="57" text-anchor="middle" fill="#0C2340" font-size="14" font-weight="bold">T</text>
  </svg>`,

  // AFC West
  broncos: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FB4F14"/>
    <path d="M30 25 Q50 15 70 25 L65 40 Q50 32 35 40 Z" fill="#002244"/>
    <ellipse cx="50" cy="55" rx="30" ry="20" fill="white"/>
    <path d="M35 50 Q50 40 65 50 L60 65 Q50 58 40 65 Z" fill="#FB4F14"/>
    <text x="50" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">D</text>
  </svg>`,

  chiefs: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#E31837"/>
    <path d="M50 15 L55 30 L70 30 L58 40 L63 55 L50 45 L37 55 L42 40 L30 30 L45 30 Z" fill="#FFB81C"/>
    <ellipse cx="50" cy="70" rx="25" ry="12" fill="white"/>
    <text x="50" y="75" text-anchor="middle" fill="#E31837" font-size="14" font-weight="bold">KC</text>
  </svg>`,

  raiders: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#000000"/>
    <path d="M25 25 L75 25 L65 75 L35 75 Z" fill="#A5ACAF"/>
    <path d="M30 30 L70 30 L62 70 L38 70 Z" fill="#000000"/>
    <path d="M40 40 L60 40 L55 60 L45 60 Z" fill="#A5ACAF"/>
    <text x="50" y="55" text-anchor="middle" fill="black" font-size="14" font-weight="bold">R</text>
    <path d="M50 20 L55 30 L45 30 Z" fill="#A5ACAF"/>
  </svg>`,

  chargers: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0080C6"/>
    <path d="M25 35 L75 25 L70 40 L80 38 L60 55 L65 45 L35 55 Z" fill="#FFC20E"/>
    <path d="M25 55 L75 45 L70 60 L80 58 L60 75 L65 65 L35 75 Z" fill="white"/>
    <text x="50" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">LAC</text>
  </svg>`,

  // NFC East
  cowboys: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#003594"/>
    <path d="M50 15 L53 40 L78 40 L58 52 L65 77 L50 62 L35 77 L42 52 L22 40 L47 40 Z" fill="white"/>
    <circle cx="50" cy="50" r="10" fill="#003594"/>
    <text x="50" y="54" text-anchor="middle" fill="white" font-size="10">★</text>
  </svg>`,

  giants: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0B2265"/>
    <path d="M35 25 L65 25 L65 75 L35 75 Z" fill="white"/>
    <path d="M40 30 L60 30 L60 70 L40 70 Z" fill="#0B2265"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="28" font-weight="bold" font-family="serif">NY</text>
    <ellipse cx="50" cy="75" rx="15" ry="5" fill="#A71930"/>
  </svg>`,

  eagles: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#004C54"/>
    <path d="M30 40 Q50 20 70 40 Q70 55 50 65 Q30 55 30 40" fill="#A5ACAF"/>
    <path d="M35 45 Q50 30 65 45 Q65 52 50 58 Q35 52 35 45" fill="#004C54"/>
    <path d="M25 50 L35 45 L40 55 Z" fill="#A5ACAF"/>
    <path d="M75 50 L65 45 L60 55 Z" fill="#A5ACAF"/>
    <text x="50" y="52" text-anchor="middle" fill="white" font-size="8">EAGLES</text>
  </svg>`,

  commanders: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#5A1414"/>
    <ellipse cx="50" cy="50" rx="35" ry="30" fill="#FFB81C"/>
    <path d="M30 35 L70 35 L65 50 L35 50 Z" fill="#5A1414"/>
    <path d="M35 55 L65 55 L60 70 L40 70 Z" fill="#5A1414"/>
    <text x="50" y="48" text-anchor="middle" fill="#FFB81C" font-size="10" font-weight="bold">W</text>
    <text x="50" y="65" text-anchor="middle" fill="#FFB81C" font-size="8">Commanders</text>
  </svg>`,

  // NFC North
  bears: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0B162A"/>
    <ellipse cx="50" cy="55" rx="25" ry="28" fill="#C83803"/>
    <circle cx="42" cy="48" r="5" fill="white"/>
    <circle cx="58" cy="48" r="5" fill="white"/>
    <circle cx="42" cy="48" r="3" fill="black"/>
    <circle cx="58" cy="48" r="3" fill="black"/>
    <ellipse cx="50" cy="62" rx="8" ry="5" fill="#0B162A"/>
    <text x="50" y="85" text-anchor="middle" fill="#C83803" font-size="10" font-weight="bold">BEARS</text>
  </svg>`,

  lions: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0076B6"/>
    <ellipse cx="50" cy="52" rx="28" ry="25" fill="#B0B7BC"/>
    <ellipse cx="50" cy="48" rx="22" ry="18" fill="white"/>
    <circle cx="42" cy="48" r="4" fill="#0076B6"/>
    <circle cx="58" cy="48" r="4" fill="#0076B6"/>
    <path d="M45 58 Q50 62 55 58" stroke="#0076B6" stroke-width="2" fill="none"/>
    <text x="50" y="80" text-anchor="middle" fill="white" font-size="10" font-weight="bold">LIONS</text>
  </svg>`,

  packers: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#203731"/>
    <path d="M25 35 L75 35 L75 50 L25 50 Z" fill="#FFB612"/>
    <path d="M25 55 L75 55 L75 70 L25 70 Z" fill="#FFB612"/>
    <text x="50" y="50" text-anchor="middle" fill="#203731" font-size="10" font-weight="bold">G</text>
    <text x="50" y="65" text-anchor="middle" fill="#203731" font-size="10" font-weight="bold">P</text>
  </svg>`,

  vikings: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#4F2683"/>
    <path d="M30 30 L70 30 L60 50 L70 70 L30 70 L40 50 Z" fill="#FFC62F"/>
    <path d="M35 35 L65 35 L58 50 L65 65 L35 65 L42 50 Z" fill="#4F2683"/>
    <text x="50" y="55" text-anchor="middle" fill="#FFC62F" font-size="18" font-weight="bold">V</text>
  </svg>`,

  // NFC South
  falcons: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#A71930"/>
    <path d="M30 25 L70 35 L60 50 L75 55 L50 75 L45 60 L30 65 L40 45 Z" fill="black"/>
    <path d="M35 30 L60 37 L52 48 L65 52 L50 65 L47 55 L35 58 L42 43 Z" fill="#A71930"/>
    <text x="50" y="50" text-anchor="middle" fill="white" font-size="8">FALCON</text>
  </svg>`,

  panthers: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0085CA"/>
    <ellipse cx="50" cy="55" rx="28" ry="22" fill="#101820"/>
    <ellipse cx="50" cy="52" rx="22" ry="16" fill="#0085CA"/>
    <circle cx="42" cy="50" r="5" fill="#B0B7BC"/>
    <circle cx="58" cy="50" r="5" fill="#B0B7BC"/>
    <circle cx="42" cy="50" r="2" fill="black"/>
    <circle cx="58" cy="50" r="2" fill="black"/>
    <path d="M45 60 Q50 55 55 60" stroke="#B0B7BC" stroke-width="2" fill="none"/>
  </svg>`,

  saints: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#D3BC8D"/>
    <path d="M45 20 L55 20 L55 80 L45 80 Z" fill="#101820"/>
    <path d="M20 45 L80 45 L80 55 L20 55 Z" fill="#101820"/>
    <circle cx="50" cy="50" r="15" fill="#101820"/>
    <text x="50" y="55" text-anchor="middle" fill="#D3BC8D" font-size="14" font-weight="bold">⚜</text>
  </svg>`,

  buccaneers: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#D50A0A"/>
    <path d="M30 30 L70 30 L65 50 L70 70 L30 70 L35 50 Z" fill="#0A0A08"/>
    <path d="M35 35 L65 35 L60 50 L65 65 L35 65 L40 50 Z" fill="#B1BABF"/>
    <path d="M45 45 L55 45 L55 55 L45 55 Z" fill="#D50A0A"/>
    <circle cx="50" cy="50" r="8" fill="#FF7900"/>
    <text x="50" y="53" text-anchor="middle" fill="#D50A0A" font-size="8">TB</text>
  </svg>`,

  // NFC West
  cardinals: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#97233F"/>
    <path d="M35 25 Q50 20 65 25 L60 50 L65 75 Q50 80 35 75 L40 50 Z" fill="#FFB612"/>
    <path d="M42 32 Q50 28 58 32 L54 50 L58 68 Q50 72 42 68 L46 50 Z" fill="#000000"/>
    <circle cx="46" cy="42" r="4" fill="#FFB612"/>
    <path d="M38 35 L30 25 L35 40 Z" fill="#FFB612"/>
  </svg>`,

  rams: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#003594"/>
    <path d="M25 40 Q50 20 75 40 L70 60 Q50 50 30 60 Z" fill="#FFB81C"/>
    <ellipse cx="50" cy="50" rx="20" ry="15" fill="white"/>
    <path d="M35 45 Q50 35 65 45" stroke="#003594" stroke-width="4" fill="none"/>
    <circle cx="42" cy="52" r="4" fill="#003594"/>
    <circle cx="58" cy="52" r="4" fill="#003594"/>
    <text x="50" y="75" text-anchor="middle" fill="#FFB81C" font-size="10" font-weight="bold">RAMS</text>
  </svg>`,

  fortyNiners: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#AA0000"/>
    <ellipse cx="50" cy="52" rx="30" ry="25" fill="#B3995D"/>
    <text x="50" y="45" text-anchor="middle" fill="#AA0000" font-size="20" font-weight="bold">SF</text>
    <text x="50" y="62" text-anchor="middle" fill="#AA0000" font-size="14" font-weight="bold">49ERS</text>
  </svg>`,

  seahawks: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#002244"/>
    <path d="M30 40 Q50 25 70 40 L65 55 L75 50 L60 70 Q50 65 40 70 L25 50 L35 55 Z" fill="#69BE28"/>
    <path d="M35 45 Q50 32 65 45 L60 55 L65 52 L55 62 Q50 58 45 62 L35 52 L40 55 Z" fill="#A5ACAF"/>
    <circle cx="50" cy="48" r="6" fill="#002244"/>
    <text x="50" y="52" text-anchor="middle" fill="#69BE28" font-size="8">★</text>
  </svg>`,
};

// ============================================
// 2. COLLEGE TEAM LOGOS (Top 25 Programs)
// ============================================
const collegeLogos = {
  // SEC Powerhouses
  alabama: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#9E1B32"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="white" stroke-width="4"/>
    <text x="50" y="62" text-anchor="middle" fill="white" font-size="40" font-weight="bold" font-family="serif">A</text>
    <text x="50" y="30" text-anchor="middle" fill="#828A8F" font-size="10" font-weight="bold">CRIMSON TIDE</text>
  </svg>`,

  georgia: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#BA0C2F"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="black"/>
    <text x="50" y="60" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="serif">G</text>
    <text x="50" y="85" text-anchor="middle" fill="black" font-size="10" font-weight="bold">BULLDOGS</text>
  </svg>`,

  lsu: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#461D7C"/>
    <path d="M25 50 L50 25 L75 50 L50 75 Z" fill="#FDD023"/>
    <text x="50" y="58" text-anchor="middle" fill="#461D7C" font-size="24" font-weight="bold">LSU</text>
  </svg>`,

  oleMiss: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#14213D"/>
    <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="#CE1126"/>
    <text x="50" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">OLE</text>
    <text x="50" y="62" text-anchor="middle" fill="white" font-size="14" font-weight="bold">MISS</text>
  </svg>`,

  texasAM: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#500000"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="white" stroke-width="3"/>
    <text x="50" y="45" text-anchor="middle" fill="white" font-size="16" font-weight="bold">TEXAS</text>
    <text x="50" y="62" text-anchor="middle" fill="white" font-size="20" font-weight="bold">A&amp;M</text>
  </svg>`,

  tennessee: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FF8200"/>
    <rect x="35" y="30" width="30" height="40" fill="white"/>
    <text x="50" y="60" text-anchor="middle" fill="#FF8200" font-size="36" font-weight="bold">T</text>
  </svg>`,

  missouri: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#F1B82D"/>
    <circle cx="50" cy="50" r="35" fill="black"/>
    <text x="50" y="58" text-anchor="middle" fill="#F1B82D" font-size="30" font-weight="bold">M</text>
    <text x="50" y="82" text-anchor="middle" fill="black" font-size="10" font-weight="bold">TIGERS</text>
  </svg>`,

  auburn: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0C2340"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="#E87722"/>
    <text x="50" y="60" text-anchor="middle" fill="#0C2340" font-size="30" font-weight="bold">AU</text>
  </svg>`,

  florida: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0021A5"/>
    <ellipse cx="50" cy="52" rx="32" ry="25" fill="#FA4616"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="28" font-weight="bold">F</text>
  </svg>`,

  // Big Ten
  ohioState: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#BB0000"/>
    <ellipse cx="50" cy="50" rx="30" ry="25" fill="#666666"/>
    <text x="50" y="40" text-anchor="middle" fill="white" font-size="14" font-weight="bold">OHIO</text>
    <text x="50" y="60" text-anchor="middle" fill="white" font-size="20" font-weight="bold">STATE</text>
  </svg>`,

  indiana: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#990000"/>
    <path d="M35 25 L65 25 L65 75 L35 75 Z" fill="white"/>
    <path d="M40 30 L60 30 L60 70 L40 70 Z" fill="#990000"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="28" font-weight="bold">IU</text>
  </svg>`,

  pennState: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#041E42"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="white"/>
    <text x="50" y="48" text-anchor="middle" fill="#041E42" font-size="16" font-weight="bold">PENN</text>
    <text x="50" y="65" text-anchor="middle" fill="#041E42" font-size="16" font-weight="bold">STATE</text>
  </svg>`,

  oregon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#154733"/>
    <path d="M30 35 L70 35 L65 50 L70 65 L30 65 L35 50 Z" fill="#FEE11A"/>
    <text x="50" y="56" text-anchor="middle" fill="#154733" font-size="20" font-weight="bold">O</text>
    <text x="50" y="80" text-anchor="middle" fill="#FEE11A" font-size="10">DUCKS</text>
  </svg>`,

  michigan: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#00274C"/>
    <rect x="35" y="25" width="30" height="50" fill="#FFCB05"/>
    <text x="50" y="60" text-anchor="middle" fill="#00274C" font-size="36" font-weight="bold">M</text>
  </svg>`,

  iowa: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FFCD00"/>
    <circle cx="50" cy="50" r="35" fill="black"/>
    <text x="50" y="58" text-anchor="middle" fill="#FFCD00" font-size="32" font-weight="bold">I</text>
  </svg>`,

  // ACC
  notreDame: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0C2340"/>
    <path d="M50 15 L55 35 L75 35 L60 48 L65 68 L50 55 L35 68 L40 48 L25 35 L45 35 Z" fill="#C99700"/>
    <text x="50" y="52" text-anchor="middle" fill="#0C2340" font-size="8" font-weight="bold">ND</text>
  </svg>`,

  miami: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#005030"/>
    <path d="M30 30 L70 30 L60 50 L70 70 L30 70 L40 50 Z" fill="#F47321"/>
    <text x="50" y="55" text-anchor="middle" fill="white" font-size="18" font-weight="bold">U</text>
  </svg>`,

  floridaState: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#782F40"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="#CEB888"/>
    <text x="50" y="48" text-anchor="middle" fill="#782F40" font-size="14" font-weight="bold">FLORIDA</text>
    <text x="50" y="64" text-anchor="middle" fill="#782F40" font-size="14" font-weight="bold">STATE</text>
  </svg>`,

  clemson: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#F56600"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="#522D80"/>
    <text x="50" y="58" text-anchor="middle" fill="white" font-size="28" font-weight="bold">C</text>
  </svg>`,

  // Big 12
  texas: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#BF5700"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="white"/>
    <text x="50" y="60" text-anchor="middle" fill="#BF5700" font-size="32" font-weight="bold">TEXAS</text>
  </svg>`,

  oklahoma: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#841617"/>
    <rect x="25" y="40" width="50" height="20" fill="#FDF9D8"/>
    <text x="50" y="55" text-anchor="middle" fill="#841617" font-size="14" font-weight="bold">OKLAHOMA</text>
  </svg>`,

  // Pac-12 & Others
  usc: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#990000"/>
    <path d="M35 25 L65 25 L60 50 L65 75 L35 75 L40 50 Z" fill="#FFC72C"/>
    <text x="50" y="55" text-anchor="middle" fill="#990000" font-size="20" font-weight="bold">USC</text>
  </svg>`,

  ucla: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#2774AE"/>
    <path d="M30 30 L70 30 L65 50 L70 70 L30 70 L35 50 Z" fill="#FFD100"/>
    <text x="50" y="55" text-anchor="middle" fill="#2774AE" font-size="18" font-weight="bold">UCLA</text>
  </svg>`,

  utah: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#CC0000"/>
    <circle cx="50" cy="50" r="35" fill="white"/>
    <text x="50" y="45" text-anchor="middle" fill="#CC0000" font-size="14" font-weight="bold">UTAH</text>
    <text x="50" y="62" text-anchor="middle" fill="#CC0000" font-size="14" font-weight="bold">UTES</text>
  </svg>`,

  arizonaState: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#8C1D40"/>
    <path d="M35 25 L65 25 L70 50 L65 75 L35 75 L30 50 Z" fill="#FFC627"/>
    <text x="50" y="52" text-anchor="middle" fill="#8C1D40" font-size="16" font-weight="bold">ASU</text>
  </svg>`,

  boiseState: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0033A0"/>
    <ellipse cx="50" cy="52" rx="30" ry="28" fill="#D64309"/>
    <text x="50" y="48" text-anchor="middle" fill="white" font-size="14" font-weight="bold">BOISE</text>
    <text x="50" y="64" text-anchor="middle" fill="white" font-size="12" font-weight="bold">STATE</text>
  </svg>`,
};

// ============================================
// 3. TEAM BRAND COLORS
// ============================================
const teamBrandColors = {
  // NFL Teams - AFC East
  bills: { primary: '#00338D', secondary: '#C60C30', text: '#FFFFFF', accent: '#FFFFFF' },
  dolphins: { primary: '#008E97', secondary: '#FC4C02', text: '#FFFFFF', accent: '#FFFFFF' },
  jets: { primary: '#125740', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#000000' },
  patriots: { primary: '#002244', secondary: '#C60C30', text: '#FFFFFF', accent: '#B0B7BC' },
  
  // AFC North
  ravens: { primary: '#241773', secondary: '#9E7C0C', text: '#FFFFFF', accent: '#000000' },
  bengals: { primary: '#FB4F14', secondary: '#000000', text: '#FFFFFF', accent: '#FFFFFF' },
  browns: { primary: '#FF3C00', secondary: '#311D00', text: '#FFFFFF', accent: '#FFFFFF' },
  steelers: { primary: '#FFB612', secondary: '#101820', text: '#000000', accent: '#FFFFFF' },
  
  // AFC South
  texans: { primary: '#03202F', secondary: '#A71930', text: '#FFFFFF', accent: '#FFFFFF' },
  colts: { primary: '#002C5F', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#A5ACAF' },
  jaguars: { primary: '#006778', secondary: '#D7A22A', text: '#FFFFFF', accent: '#9F792C' },
  titans: { primary: '#0C2340', secondary: '#4B92DB', text: '#FFFFFF', accent: '#C8102E' },
  
  // AFC West
  broncos: { primary: '#FB4F14', secondary: '#002244', text: '#FFFFFF', accent: '#FFFFFF' },
  chiefs: { primary: '#E31837', secondary: '#FFB81C', text: '#FFFFFF', accent: '#FFFFFF' },
  raiders: { primary: '#000000', secondary: '#A5ACAF', text: '#FFFFFF', accent: '#FFFFFF' },
  chargers: { primary: '#0080C6', secondary: '#FFC20E', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // NFC East
  cowboys: { primary: '#003594', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#869397' },
  giants: { primary: '#0B2265', secondary: '#A71930', text: '#FFFFFF', accent: '#FFFFFF' },
  eagles: { primary: '#004C54', secondary: '#A5ACAF', text: '#FFFFFF', accent: '#000000' },
  commanders: { primary: '#5A1414', secondary: '#FFB81C', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // NFC North
  bears: { primary: '#0B162A', secondary: '#C83803', text: '#FFFFFF', accent: '#FFFFFF' },
  lions: { primary: '#0076B6', secondary: '#B0B7BC', text: '#FFFFFF', accent: '#FFFFFF' },
  packers: { primary: '#203731', secondary: '#FFB612', text: '#FFFFFF', accent: '#FFFFFF' },
  vikings: { primary: '#4F2683', secondary: '#FFC62F', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // NFC South
  falcons: { primary: '#A71930', secondary: '#000000', text: '#FFFFFF', accent: '#A5ACAF' },
  panthers: { primary: '#0085CA', secondary: '#101820', text: '#FFFFFF', accent: '#B0B7BC' },
  saints: { primary: '#D3BC8D', secondary: '#101820', text: '#000000', accent: '#FFFFFF' },
  buccaneers: { primary: '#D50A0A', secondary: '#0A0A08', text: '#FFFFFF', accent: '#B1BABF' },
  
  // NFC West
  cardinals: { primary: '#97233F', secondary: '#000000', text: '#FFFFFF', accent: '#FFB612' },
  rams: { primary: '#003594', secondary: '#FFB81C', text: '#FFFFFF', accent: '#FFFFFF' },
  fortyNiners: { primary: '#AA0000', secondary: '#B3995D', text: '#FFFFFF', accent: '#FFFFFF' },
  seahawks: { primary: '#002244', secondary: '#69BE28', text: '#FFFFFF', accent: '#A5ACAF' },
  
  // College Teams - SEC
  alabama: { primary: '#9E1B32', secondary: '#828A8F', text: '#FFFFFF', accent: '#FFFFFF' },
  georgia: { primary: '#BA0C2F', secondary: '#000000', text: '#FFFFFF', accent: '#FFFFFF' },
  lsu: { primary: '#461D7C', secondary: '#FDD023', text: '#FFFFFF', accent: '#FFFFFF' },
  oleMiss: { primary: '#14213D', secondary: '#CE1126', text: '#FFFFFF', accent: '#FFFFFF' },
  texasAM: { primary: '#500000', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#FFFFFF' },
  tennessee: { primary: '#FF8200', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#FFFFFF' },
  missouri: { primary: '#F1B82D', secondary: '#000000', text: '#000000', accent: '#FFFFFF' },
  auburn: { primary: '#0C2340', secondary: '#E87722', text: '#FFFFFF', accent: '#FFFFFF' },
  florida: { primary: '#0021A5', secondary: '#FA4616', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // Big Ten
  ohioState: { primary: '#BB0000', secondary: '#666666', text: '#FFFFFF', accent: '#FFFFFF' },
  indiana: { primary: '#990000', secondary: '#EEEDEB', text: '#FFFFFF', accent: '#FFFFFF' },
  pennState: { primary: '#041E42', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#FFFFFF' },
  oregon: { primary: '#154733', secondary: '#FEE11A', text: '#FFFFFF', accent: '#FFFFFF' },
  michigan: { primary: '#00274C', secondary: '#FFCB05', text: '#FFFFFF', accent: '#FFFFFF' },
  iowa: { primary: '#FFCD00', secondary: '#000000', text: '#000000', accent: '#FFFFFF' },
  
  // ACC
  notreDame: { primary: '#0C2340', secondary: '#C99700', text: '#FFFFFF', accent: '#FFFFFF' },
  miami: { primary: '#005030', secondary: '#F47321', text: '#FFFFFF', accent: '#FFFFFF' },
  floridaState: { primary: '#782F40', secondary: '#CEB888', text: '#FFFFFF', accent: '#FFFFFF' },
  clemson: { primary: '#F56600', secondary: '#522D80', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // Big 12
  texas: { primary: '#BF5700', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#FFFFFF' },
  oklahoma: { primary: '#841617', secondary: '#FDF9D8', text: '#FFFFFF', accent: '#FFFFFF' },
  
  // Pac-12 & Others
  usc: { primary: '#990000', secondary: '#FFC72C', text: '#FFFFFF', accent: '#FFFFFF' },
  ucla: { primary: '#2774AE', secondary: '#FFD100', text: '#FFFFFF', accent: '#FFFFFF' },
  utah: { primary: '#CC0000', secondary: '#FFFFFF', text: '#FFFFFF', accent: '#000000' },
  arizonaState: { primary: '#8C1D40', secondary: '#FFC627', text: '#FFFFFF', accent: '#000000' },
  boiseState: { primary: '#0033A0', secondary: '#D64309', text: '#FFFFFF', accent: '#FFFFFF' },
};

// ============================================
// 4. NAME NORMALIZATION
// ============================================
const teamNameMap = {
  // NFL Teams - AFC East
  'buf': 'bills',
  'buffalo': 'bills',
  'buffalo bills': 'bills',
  'mia': 'dolphins',
  'miami': 'dolphins',
  'miami dolphins': 'dolphins',
  'nyj': 'jets',
  'new york jets': 'jets',
  'jets': 'jets',
  'ne': 'patriots',
  'new england': 'patriots',
  'new england patriots': 'patriots',
  'patriots': 'patriots',
  
  // AFC North
  'bal': 'ravens',
  'baltimore': 'ravens',
  'baltimore ravens': 'ravens',
  'ravens': 'ravens',
  'cin': 'bengals',
  'cincinnati': 'bengals',
  'cincinnati bengals': 'bengals',
  'bengals': 'bengals',
  'cle': 'browns',
  'cleveland': 'browns',
  'cleveland browns': 'browns',
  'browns': 'browns',
  'pit': 'steelers',
  'pittsburgh': 'steelers',
  'pittsburgh steelers': 'steelers',
  'steelers': 'steelers',
  
  // AFC South
  'hou': 'texans',
  'houston': 'texans',
  'houston texans': 'texans',
  'texans': 'texans',
  'ind': 'colts',
  'indianapolis': 'colts',
  'indianapolis colts': 'colts',
  'colts': 'colts',
  'jax': 'jaguars',
  'jacksonville': 'jaguars',
  'jacksonville jaguars': 'jaguars',
  'jaguars': 'jaguars',
  'ten': 'titans',
  'tennessee': 'titans',
  'tennessee titans': 'titans',
  'titans': 'titans',
  
  // AFC West
  'den': 'broncos',
  'denver': 'broncos',
  'denver broncos': 'broncos',
  'broncos': 'broncos',
  'kc': 'chiefs',
  'kan': 'chiefs',
  'kansas city': 'chiefs',
  'kansas city chiefs': 'chiefs',
  'chiefs': 'chiefs',
  'lv': 'raiders',
  'oak': 'raiders',
  'las vegas': 'raiders',
  'las vegas raiders': 'raiders',
  'oakland': 'raiders',
  'oakland raiders': 'raiders',
  'raiders': 'raiders',
  'lac': 'chargers',
  'lachargers': 'chargers',
  'los angeles chargers': 'chargers',
  'chargers': 'chargers',
  'sd': 'chargers',
  'san diego': 'chargers',
  'san diego chargers': 'chargers',
  
  // NFC East
  'dal': 'cowboys',
  'dallas': 'cowboys',
  'dallas cowboys': 'cowboys',
  'cowboys': 'cowboys',
  'nyg': 'giants',
  'new york giants': 'giants',
  'giants': 'giants',
  'phi': 'eagles',
  'philadelphia': 'eagles',
  'philadelphia eagles': 'eagles',
  'eagles': 'eagles',
  'wsh': 'commanders',
  'was': 'commanders',
  'washington': 'commanders',
  'washington commanders': 'commanders',
  'commanders': 'commanders',
  'football team': 'commanders',
  
  // NFC North
  'chi': 'bears',
  'chicago': 'bears',
  'chicago bears': 'bears',
  'bears': 'bears',
  'det': 'lions',
  'detroit': 'lions',
  'detroit lions': 'lions',
  'lions': 'lions',
  'gb': 'packers',
  'green bay': 'packers',
  'green bay packers': 'packers',
  'packers': 'packers',
  'min': 'vikings',
  'minnesota': 'vikings',
  'minnesota vikings': 'vikings',
  'vikings': 'vikings',
  
  // NFC South
  'atl': 'falcons',
  'atlanta': 'falcons',
  'atlanta falcons': 'falcons',
  'falcons': 'falcons',
  'car': 'panthers',
  'carolina': 'panthers',
  'carolina panthers': 'panthers',
  'panthers': 'panthers',
  'no': 'saints',
  'new orleans': 'saints',
  'new orleans saints': 'saints',
  'saints': 'saints',
  'tb': 'buccaneers',
  'tampa bay': 'buccaneers',
  'tampa bay buccaneers': 'buccaneers',
  'buccaneers': 'buccaneers',
  'bucs': 'buccaneers',
  
  // NFC West
  'ari': 'cardinals',
  'arizona': 'cardinals',
  'arizona cardinals': 'cardinals',
  'cardinals': 'cardinals',
  'lar': 'rams',
  'la': 'rams',
  'los angeles rams': 'rams',
  'rams': 'rams',
  'stl': 'rams',
  'st louis': 'rams',
  'sf': 'fortyNiners',
  'san francisco': 'fortyNiners',
  'san francisco 49ers': 'fortyNiners',
  '49ers': 'fortyNiners',
  'fortyniners': 'fortyNiners',
  'sea': 'seahawks',
  'seattle': 'seahawks',
  'seattle seahawks': 'seahawks',
  'seahawks': 'seahawks',
  
  // College Teams - SEC
  'bama': 'alabama',
  'alabama': 'alabama',
  'alabama crimson tide': 'alabama',
  'crimson tide': 'alabama',
  'uga': 'georgia',
  'georgia': 'georgia',
  'georgia bulldogs': 'georgia',
  'bulldogs': 'georgia',
  'lsu': 'lsu',
  'louisiana state': 'lsu',
  'louisiana state tigers': 'lsu',
  'tigers': 'lsu',
  'ole miss': 'oleMiss',
  'mississippi': 'oleMiss',
  'olemiss': 'oleMiss',
  'rebels': 'oleMiss',
  'texas a&m': 'texasAM',
  'texas am': 'texasAM',
  'aggies': 'texasAM',
  'tennessee': 'tennessee',
  'tennessee volunteers': 'tennessee',
  'volunteers': 'tennessee',
  'vols': 'tennessee',
  'missouri': 'missouri',
  'missouri tigers': 'missouri',
  'mizzou': 'missouri',
  'auburn': 'auburn',
  'auburn tigers': 'auburn',
  'war eagle': 'auburn',
  'florida': 'florida',
  'university of florida': 'florida',
  'florida gators': 'florida',
  'gators': 'florida',
  
  // Big Ten
  'ohio state': 'ohioState',
  'ohiostate': 'ohioState',
  'osu': 'ohioState',
  'buckeyes': 'ohioState',
  'indiana': 'indiana',
  'indiana hoosiers': 'indiana',
  'hoosiers': 'indiana',
  'penn state': 'pennState',
  'pennstate': 'pennState',
  'psu': 'pennState',
  'nittany lions': 'pennState',
  'oregon': 'oregon',
  'university of oregon': 'oregon',
  'oregon ducks': 'oregon',
  'ducks': 'oregon',
  'michigan': 'michigan',
  'university of michigan': 'michigan',
  'michigan wolverines': 'michigan',
  'wolverines': 'michigan',
  'iowa': 'iowa',
  'university of iowa': 'iowa',
  'iowa hawkeyes': 'iowa',
  'hawkeyes': 'iowa',
  
  // ACC
  'notre dame': 'notreDame',
  'notredame': 'notreDame',
  'nd': 'notreDame',
  'fighting irish': 'notreDame',
  'miami': 'miami',
  'university of miami': 'miami',
  'miami hurricanes': 'miami',
  'hurricanes': 'miami',
  'canes': 'miami',
  'florida state': 'floridaState',
  'floridastate': 'floridaState',
  'fsu': 'floridaState',
  'seminoles': 'floridaState',
  'noles': 'floridaState',
  'clemson': 'clemson',
  'clemson tigers': 'clemson',
  
  // Big 12
  'texas': 'texas',
  'university of texas': 'texas',
  'texas longhorns': 'texas',
  'longhorns': 'texas',
  'horns': 'texas',
  'oklahoma': 'oklahoma',
  'university of oklahoma': 'oklahoma',
  'oklahoma sooners': 'oklahoma',
  'sooners': 'oklahoma',
  'ou': 'oklahoma',
  
  // Pac-12 & Others
  'usc': 'usc',
  'southern california': 'usc',
  'trojans': 'usc',
  'ucla': 'ucla',
  'ucla bruins': 'ucla',
  'bruins': 'ucla',
  'utah': 'utah',
  'university of utah': 'utah',
  'utah utes': 'utah',
  'utes': 'utah',
  'arizona state': 'arizonaState',
  'arizonastate': 'arizonaState',
  'asu': 'arizonaState',
  'sun devils': 'arizonaState',
  'boise state': 'boiseState',
  'boisestate': 'boiseState',
  'boise': 'boiseState',
  'broncos': 'boiseState',
};

// ============================================
// 5. CORE FUNCTIONS
// ============================================

/**
 * Normalize team name to internal key
 */
function normalizeTeamName(name) {
  if (!name || typeof name !== 'string') return null;
  
  const normalized = name.toLowerCase().trim().replace(/[^a-z0-9&\s]/g, '');
  return teamNameMap[normalized] || normalized.replace(/\s+/g, '');
}

/**
 * Get team colors
 */
function getTeamColors(teamName) {
  const key = normalizeTeamName(teamName);
  return teamBrandColors[key] || {
    primary: '#6B7280',
    secondary: '#374151',
    text: '#FFFFFF',
    accent: '#9CA3AF'
  };
}

/**
 * Generate initials from team name
 */
function getInitials(teamName) {
  if (!teamName) return '??';
  
  const words = teamName.split(/\s+/).filter(w => w.length > 0);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  
  // Filter out common words
  const skipWords = ['university', 'of', 'the', 'college', 'state'];
  const meaningful = words.filter(w => !skipWords.includes(w.toLowerCase()));
  
  if (meaningful.length >= 2) {
    return (meaningful[0][0] + meaningful[1][0]).toUpperCase();
  }
  
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/**
 * Create fallback logo SVG
 */
function createFallbackLogo(teamName, size = 50) {
  const colors = getTeamColors(teamName);
  const initials = getInitials(teamName);
  const fontSize = Math.floor(size * 0.4);
  
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${teamName}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#grad-${teamName})"/>
    <text x="50" y="60" text-anchor="middle" fill="${colors.text}" font-size="35" font-weight="bold" font-family="Arial, sans-serif">${initials}</text>
  </svg>`;
}

/**
 * Wrap SVG content with container
 */
function wrapSvg(svgContent, size, teamName = '') {
  const colors = teamName ? getTeamColors(teamName) : null;
  const style = colors 
    ? `--team-primary: ${colors.primary}; --team-secondary: ${colors.secondary}; --team-text: ${colors.text};`
    : '';
  
  return `<div class="team-logo" style="width:${size}px;height:${size}px;${style}" data-team="${teamName || ''}">${svgContent}</div>`;
}

/**
 * Main function to get team logo
 */
function getTeamLogo(teamName, size = 50) {
  if (!teamName) {
    return wrapSvg(createFallbackLogo('Unknown', size), size, 'unknown');
  }
  
  const normalized = normalizeTeamName(teamName);
  
  // Try NFL first
  if (nflTeamLogos[normalized]) {
    return wrapSvg(nflTeamLogos[normalized], size, normalized);
  }
  
  // Try college
  if (collegeLogos[normalized]) {
    return wrapSvg(collegeLogos[normalized], size, normalized);
  }
  
  // Fallback: colored circle with initials
  return wrapSvg(createFallbackLogo(teamName, size), size, normalized || teamName);
}

/**
 * Get raw SVG content (without wrapper)
 */
function getTeamLogoSvg(teamName) {
  const normalized = normalizeTeamName(teamName);
  
  if (nflTeamLogos[normalized]) {
    return nflTeamLogos[normalized];
  }
  
  if (collegeLogos[normalized]) {
    return collegeLogos[normalized];
  }
  
  return createFallbackLogo(teamName);
}

/**
 * Check if team logo exists
 */
function hasTeamLogo(teamName) {
  const normalized = normalizeTeamName(teamName);
  return !!(nflTeamLogos[normalized] || collegeLogos[normalized]);
}

/**
 * Get all available NFL teams
 */
function getNFLTeams() {
  return Object.keys(nflTeamLogos);
}

/**
 * Get all available college teams
 */
function getCollegeTeams() {
  return Object.keys(collegeLogos);
}

// ============================================
// 6. ENHANCED HELMET SVGs
// ============================================
const helmetSvgs = {
  standard: (colors) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors?.primary || '#333'};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors?.secondary || '#666'};stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Helmet shell -->
    <ellipse cx="50" cy="45" rx="38" ry="32" fill="url(#helmetGrad)" stroke="#333" stroke-width="2"/>
    <!-- Helmet stripe -->
    <path d="M45 18 L55 18 L52 70 L48 70 Z" fill="${colors?.secondary || '#fff'}" opacity="0.8"/>
    <!-- Face mask -->
    <path d="M20 45 Q20 70 35 75 L65 75 Q80 70 80 45" fill="none" stroke="#666" stroke-width="4"/>
    <path d="M25 50 L75 50 M28 60 L72 60" stroke="#666" stroke-width="2"/>
    <!-- Face opening -->
    <ellipse cx="50" cy="52" rx="18" ry="15" fill="#222"/>
  </svg>`,
  
  detailed: (colors, teamName = '') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="helmetGrad-${teamName}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors?.primary || '#333'};stop-opacity:1" />
        <stop offset="50%" style="stop-color:${colors?.primary || '#333'};stop-opacity:0.9" />
        <stop offset="100%" style="stop-color:${colors?.secondary || '#666'};stop-opacity:1" />
      </linearGradient>
      <filter id="shadow-${teamName}">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
    </defs>
    <!-- Helmet shell with shadow -->
    <ellipse cx="50" cy="45" rx="38" ry="32" fill="url(#helmetGrad-${teamName})" filter="url(#shadow-${teamName})"/>
    <!-- Highlight -->
    <ellipse cx="35" cy="35" rx="12" ry="8" fill="white" opacity="0.2"/>
    <!-- Center stripe -->
    <path d="M44 16 L56 16 L54 72 L46 72 Z" fill="${colors?.accent || colors?.secondary || '#fff'}"/>
    <!-- Side decals area -->
    <ellipse cx="30" cy="48" rx="10" ry="12" fill="${colors?.secondary || '#fff'}" opacity="0.9"/>
    <ellipse cx="70" cy="48" rx="10" ry="12" fill="${colors?.secondary || '#fff'}" opacity="0.9"/>
    <!-- Face mask -->
    <path d="M18 45 Q18 72 32 78 L68 78 Q82 72 82 45" fill="none" stroke="#444" stroke-width="5" stroke-linecap="round"/>
    <path d="M22 52 L78 52 M25 62 L75 62 M28 72 L72 72" stroke="#555" stroke-width="2"/>
    <!-- Chin strap -->
    <path d="M42 78 L42 85 L58 85 L58 78" fill="none" stroke="#333" stroke-width="3"/>
    <!-- Face opening -->
    <ellipse cx="50" cy="54" rx="16" ry="13" fill="#1a1a1a"/>
  </svg>`,
  
  sideProfile: (colors) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:${colors?.secondary || '#666'};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors?.primary || '#333'};stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Helmet side profile -->
    <path d="M20 40 Q20 20 50 20 Q80 20 85 40 Q90 60 80 70 L75 75 L25 75 Q15 65 20 40" fill="url(#sideGrad)"/>
    <!-- Stripe -->
    <path d="M20 40 Q50 35 85 40" stroke="${colors?.accent || '#fff'}" stroke-width="4" fill="none"/>
    <!-- Face mask bars -->
    <path d="M80 70 L85 55 L75 50" fill="none" stroke="#555" stroke-width="3"/>
    <path d="M78 65 L88 60" stroke="#555" stroke-width="2"/>
  </svg>`,
};

/**
 * Get helmet SVG
 */
function getHelmetSvg(teamName, style = 'detailed') {
  const colors = getTeamColors(teamName);
  const normalized = normalizeTeamName(teamName);
  
  if (helmetSvgs[style]) {
    return helmetSvgs[style](colors, normalized);
  }
  
  return helmetSvgs.detailed(colors, normalized);
}

// ============================================
// 7. CSS STYLES (for reference/injection)
// ============================================
const logoSystemCSS = `
/* Team Logo System Styles */

.team-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: var(--team-primary, #f3f4f6);
  flex-shrink: 0;
}

.team-logo:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.team-logo svg {
  width: 100%;
  height: 100%;
  display: block;
}

.team-logo-fallback {
  background: linear-gradient(135deg, var(--team-primary, #6B7280), var(--team-secondary, #374151));
  color: var(--team-text, #FFFFFF);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Size variants */
.team-logo--xs { width: 24px; height: 24px; }
.team-logo--sm { width: 32px; height: 32px; }
.team-logo--md { width: 48px; height: 48px; }
.team-logo--lg { width: 64px; height: 64px; }
.team-logo--xl { width: 96px; height: 96px; }
.team-logo--2xl { width: 128px; height: 128px; }

/* Team Logo Display Container */
.team-logo-display {
  display: inline-block;
  position: relative;
}

/* Logo with tooltip */
.team-logo[title] {
  cursor: help;
}

/* Logo in dark mode */
@media (prefers-color-scorheme: dark) {
  .team-logo {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }
  
  .team-logo:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }
}

/* Logo animation on load */
@keyframes logoPop {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

.team-logo--animate {
  animation: logoPop 0.3s ease-out;
}

/* Helmet styles */
.team-helmet {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.team-helmet:hover {
  transform: rotate(-5deg) scale(1.05);
}

/* Draft card integration */
.draft-card__logo {
  margin-right: 12px;
}

.pick-card__team-logo {
  position: absolute;
  top: -10px;
  right: -10px;
  border: 3px solid white;
}

/* War room mode */
.war-room__team-logo {
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
}

/* Team history page */
.team-history__logo {
  width: 128px;
  height: 128px;
  margin-bottom: 16px;
}

/* Position rankings */
.rankings__team-logo {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  vertical-align: middle;
}

/* Live draft ticker */
.draft-ticker__logo {
  width: 28px;
  height: 28px;
  margin-right: 6px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .team-logo--lg,
  .team-logo--xl,
  .team-logo--2xl {
    width: 48px;
    height: 48px;
  }
  
  .team-history__logo {
    width: 80px;
    height: 80px;
  }
}

/* Print styles */
@media print {
  .team-logo {
    box-shadow: none;
    border: 1px solid #ccc;
  }
}
`;

// ============================================
// 8. DOM INTEGRATION HELPERS
// ============================================

/**
 * Auto-initialize logos from data attributes
 */
function initializeTeamLogos(container = document) {
  const elements = container.querySelectorAll('[data-team]');
  
  elements.forEach(el => {
    const teamName = el.dataset.team;
    const size = parseInt(el.dataset.size) || 50;
    const animate = el.dataset.animate === 'true';
    
    if (teamName) {
      el.innerHTML = getTeamLogo(teamName, size);
      
      if (animate) {
        const logo = el.querySelector('.team-logo');
        if (logo) logo.classList.add('team-logo--animate');
      }
    }
  });
}

/**
 * Create logo element programmatically
 */
function createLogoElement(teamName, options = {}) {
  const {
    size = 50,
    className = '',
    animate = false,
    title = null,
    clickHandler = null
  } = options;
  
  const div = document.createElement('div');
  div.className = `team-logo-display ${className}`;
  if (title) div.title = title;
  
  div.innerHTML = getTeamLogo(teamName, size);
  
  const logo = div.querySelector('.team-logo');
  if (logo) {
    if (animate) logo.classList.add('team-logo--animate');
    if (clickHandler) {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', clickHandler);
    }
  }
  
  return div;
}

/**
 * Update existing logo
 */
function updateTeamLogo(element, teamName, size) {
  const currentSize = element.querySelector('.team-logo')?.style.width.replace('px', '');
  const newSize = size || currentSize || 50;
  element.innerHTML = getTeamLogo(teamName, newSize);
}

// ============================================
// 9. EXPORTS / MODULE SUPPORT
// ============================================
const TeamLogoSystem = {
  // Data
  nflLogos: nflTeamLogos,
  collegeLogos: collegeLogos,
  brandColors: teamBrandColors,
  nameMap: teamNameMap,
  css: logoSystemCSS,
  
  // Functions
  getLogo: getTeamLogo,
  getLogoSvg: getTeamLogoSvg,
  getColors: getTeamColors,
  getHelmet: getHelmetSvg,
  normalizeName: normalizeTeamName,
  hasLogo: hasTeamLogo,
  getNFLTeams,
  getCollegeTeams,
  
  // DOM helpers
  initialize: initializeTeamLogos,
  createElement: createLogoElement,
  updateLogo: updateTeamLogo,
};

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TeamLogoSystem;
}

if (typeof window !== 'undefined') {
  window.TeamLogoSystem = TeamLogoSystem;
  
  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initializeTeamLogos());
  } else {
    initializeTeamLogos();
  }
}

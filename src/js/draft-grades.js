// ============================================
// DRAFT GRADES SYSTEM FOR 2026 NFL MOCK DRAFT
// ============================================

// Team needs data (based on need badges in HTML) - Updated post-mock analysis
const teamNeedsData = {
    // Teams that addressed QB in Round 1 - QB need removed
    'Raiders': { high: ['EDGE', 'WR', 'OL'], medium: ['DL', 'CB'], low: ['LB'] },
    'Jets': { high: ['OL', 'WR', 'RB'], medium: ['CB', 'EDGE'], low: ['DL'] },
    'Browns': { high: ['CB', 'WR', 'S'], medium: ['OT', 'DL'], low: ['RB'] },
    'Dolphins': { high: ['IOL', 'EDGE', 'CB'], medium: ['DL', 'LB'], low: ['RB'] },
    'Steelers': { high: ['IOL', 'WR', 'CB'], medium: ['EDGE', 'DL'], low: ['RB'] },
    'Rams': { high: ['DL', 'EDGE', 'OL'], medium: ['CB', 'S'], low: ['RB'] },
    
    // Teams with multiple first-rounders
    'Cowboys': { high: ['DL', 'LB', 'WR'], medium: ['RB', 'EDGE'], low: ['QB'] },
    
    // Teams that addressed primary needs
    'Cardinals': { high: ['DL', 'CB', 'S'], medium: ['EDGE', 'WR'], low: ['RB'] },
    'Titans': { high: ['CB', 'EDGE', 'OL'], medium: ['LB', 'DL'], low: ['RB'] },
    'Giants': { high: ['CB', 'WR', 'QB'], medium: ['EDGE', 'S'], low: ['RB'] },
    'Commanders': { high: ['CB', 'DL', 'S'], medium: ['LB', 'OT'], low: ['RB'] },
    'Saints': { high: ['OT', 'CB', 'EDGE'], medium: ['DL', 'S'], low: ['RB'] },
    'Chiefs': { high: ['Interior DL', 'WR', 'CB'], medium: ['OT', 'S'], low: ['RB'] },
    'Bengals': { high: ['EDGE', 'OT', 'LB'], medium: ['CB', 'S'], low: ['RB'] },
    'Ravens': { high: ['CB', 'WR', 'S'], medium: ['DL', 'OT'], low: ['RB'] },
    'Buccaneers': { high: ['EDGE', 'S', 'DL'], medium: ['CB', 'WR'], low: ['QB'] },
    'Lions': { high: ['CB', 'S', 'EDGE'], medium: ['WR', 'DL'], low: ['QB'] },
    'Vikings': { high: ['WR', 'CB', 'EDGE'], medium: ['DL', 'S'], low: ['RB'] },
    'Panthers': { high: ['TE', 'S', 'WR'], medium: ['DL', 'CB'], low: ['QB'] },
    'Chargers': { high: ['DL', 'LB', 'CB'], medium: ['WR', 'EDGE'], low: ['RB'] },
    'Eagles': { high: ['CB', 'OT', 'LB'], medium: ['S', 'EDGE'], low: ['RB'] },
    'Bears': { high: ['DL', 'IOL', 'WR'], medium: ['CB', 'S'], low: ['TE'] },
    'Bills': { high: ['S', 'DL', 'CB'], medium: ['EDGE', 'OT'], low: ['RB'] },
    '49ers': { high: ['CB', 'IOL', 'WR'], medium: ['S', 'DL'], low: ['QB'] },
    'Texans': { high: ['OL', 'CB', 'EDGE'], medium: ['DL', 'S'], low: ['QB'] },
    'Broncos': { high: ['OT', 'IOL', 'ILB'], medium: ['EDGE', 'S'], low: ['QB'] },
    'Patriots': { high: ['DL', 'CB', 'EDGE'], medium: ['OT', 'S'], low: ['RB'] },
    'Seahawks': { high: ['IOL', 'EDGE', 'CB'], medium: ['DL', 'WR'], low: ['RB'] },
    'Colts': { high: ['CB', 'S', 'WR'], medium: ['DL', 'EDGE'], low: ['RB'] },
    'Falcons': { high: ['CB', 'DL', 'EDGE'], medium: ['S', 'WR'], low: ['QB'] },
    'Packers': { high: ['DL', 'CB', 'EDGE'], medium: ['S', 'LB'], low: ['QB'] },
    'Jaguars': { high: ['CB', 'EDGE', 'S'], medium: ['DL', 'OL'], low: ['TE'] }
};

// Positional value multipliers
const positionalValueMultipliers = {
    'QB': 1.5,
    'EDGE': 1.5,
    'CB': 1.5,
    'OT': 1.5,
    'WR': 1.2,
    'DL': 1.2,
    'S': 1.2,
    'LB': 1.0,
    'IOL': 1.0,
    'TE': 1.0,
    'RB': 0.8
};

// Position mapping for variations
const positionMapping = {
    'Pass rusher': 'EDGE',
    'DE': 'EDGE',
    'Interior DL': 'DL',
    'DT': 'DL',
    'Center': 'IOL',
    'G': 'IOL',
    'OG': 'IOL',
    'ILB': 'LB',
    'OLB': 'LB',
    'S': 'S',
    'FS': 'S',
    'SS': 'S',
    'Defense (not DT)': 'EDGE',
    'Defense': 'EDGE'
};

// Team name normalization
const teamNameMapping = {
    'Las Vegas Raiders': 'Raiders',
    'New York Jets': 'Jets',
    'Arizona Cardinals': 'Cardinals',
    'Tennessee Titans': 'Titans',
    'New York Giants': 'Giants',
    'Cleveland Browns': 'Browns',
    'Washington Commanders': 'Commanders',
    'New Orleans Saints': 'Saints',
    'Kansas City Chiefs': 'Chiefs',
    'Cincinnati Bengals': 'Bengals',
    'Miami Dolphins': 'Dolphins',
    'Dallas Cowboys': 'Cowboys',
    'Los Angeles Rams': 'Rams',
    'Baltimore Ravens': 'Ravens',
    'Tampa Bay Buccaneers': 'Buccaneers',
    'Detroit Lions': 'Lions',
    'Minnesota Vikings': 'Vikings',
    'Carolina Panthers': 'Panthers',
    'Pittsburgh Steelers': 'Steelers',
    'Los Angeles Chargers': 'Chargers',
    'Philadelphia Eagles': 'Eagles',
    'Chicago Bears': 'Bears',
    'Buffalo Bills': 'Bills',
    'San Francisco 49ers': '49ers',
    'Houston Texans': 'Texans',
    'Denver Broncos': 'Broncos',
    'New England Patriots': 'Patriots',
    'Seattle Seahawks': 'Seahawks',
    'Indianapolis Colts': 'Colts',
    'Atlanta Falcons': 'Falcons',
    'Green Bay Packers': 'Packers',
    'Jacksonville Jaguars': 'Jaguars'
};

// Get normalized position
function getNormalizedPosition(position) {
    if (!position) return 'DL';
    const upperPos = position.toUpperCase().trim();
    
    // Check mapping
    if (positionMapping[position]) {
        return positionMapping[position];
    }
    
    // Direct match
    if (positionalValueMultipliers[position]) {
        return position;
    }
    
    // Check for combined positions (e.g., "LB/EDGE", "OT/C")
    const positions = position.split('/').map(p => p.trim());
    for (let pos of positions) {
        if (positionalValueMultipliers[pos]) {
            return pos;
        }
    }
    
    // Default fallback
    return 'DL';
}

// Get positional value multiplier
function getPositionalMultiplier(position) {
    const normalizedPos = getNormalizedPosition(position);
    return positionalValueMultipliers[normalizedPos] || 1.0;
}

// Calculate value score based on EDP vs Actual Pick (40% of grade)
function calculateValueScore(playerName, actualPick) {
    if (!edpData[playerName]) {
        return { score: 75, details: 'No EDP data' };
    }
    
    const edp = edpData[playerName].edp;
    const diff = edp - actualPick; // Positive = value pick, Negative = reach
    
    let score;
    if (diff >= 10) {
        score = 100; // Massive value
    } else if (diff >= 5) {
        score = 95; // Good value
    } else if (diff >= 2) {
        score = 90; // Slight value
    } else if (diff >= -2) {
        score = 85; // Fair value
    } else if (diff >= -5) {
        score = 75; // Slight reach
    } else if (diff >= -10) {
        score = 65; // Reach
    } else {
        score = 55; // Massive reach
    }
    
    const classification = diff >= 5 ? 'value' : diff <= -5 ? 'reach' : 'fair';
    
    return {
        score: score,
        diff: diff,
        classification: classification,
        edp: edp,
        details: `${classification === 'value' ? '+' : ''}${diff.toFixed(1)} from EDP`
    };
}

// Calculate need fit score (30% of grade)
function calculateNeedFit(teamName, position) {
    const normalizedTeam = teamNameMapping[teamName] || teamName;
    const needs = teamNeedsData[normalizedTeam];
    
    if (!needs) {
        return { score: 75, level: 'medium', details: 'No needs data' };
    }
    
    const normalizedPos = getNormalizedPosition(position);
    
    // Check if position matches any need (including variations)
    const checkNeed = (needList) => {
        return needList.some(need => {
            const mappedNeed = positionMapping[need] || need;
            return mappedNeed === normalizedPos || 
                   need.toUpperCase().includes(normalizedPos) ||
                   normalizedPos.includes(need.toUpperCase());
        });
    };
    
    if (checkNeed(needs.high)) {
        return { score: 100, level: 'high', details: 'High need filled' };
    } else if (checkNeed(needs.medium)) {
        return { score: 85, level: 'medium', details: 'Medium need filled' };
    } else if (checkNeed(needs.low)) {
        return { score: 70, level: 'low', details: 'Low priority need' };
    } else {
        return { score: 60, level: 'none', details: 'Non-need position' };
    }
}

// Calculate positional value score (20% of grade)
function calculatePositionalValue(position) {
    const multiplier = getPositionalMultiplier(position);
    
    // Convert multiplier to score (0.8 -> 70, 1.0 -> 85, 1.2 -> 95, 1.5 -> 100)
    let score;
    if (multiplier >= 1.5) {
        score = 100; // Premium
    } else if (multiplier >= 1.2) {
        score = 92; // High
    } else if (multiplier >= 1.0) {
        score = 85; // Medium
    } else {
        score = 75; // Lower
    }
    
    const tier = multiplier >= 1.5 ? 'Premium' : 
                 multiplier >= 1.2 ? 'High' : 
                 multiplier >= 1.0 ? 'Medium' : 'Lower';
    
    return { score: score, multiplier: multiplier, tier: tier };
}

// Calculate overall draft balance bonus/penalty (10% of grade)
function calculateBalanceBonus(picks) {
    const numPicks = picks.length;
    if (numPicks === 0) return { score: 50, details: 'No picks' };
    
    // Count value picks vs reaches
    let valuePicks = 0;
    let reachPicks = 0;
    let fairPicks = 0;
    
    picks.forEach(pick => {
        const valueScore = calculateValueScore(pick.player, pick.pickNumber);
        if (valueScore.classification === 'value') valuePicks++;
        else if (valueScore.classification === 'reach') reachPicks++;
        else fairPicks++;
    });
    
    // Premium positions drafted
    let premiumPositions = 0;
    picks.forEach(pick => {
        const multiplier = getPositionalMultiplier(pick.position);
        if (multiplier >= 1.2) premiumPositions++;
    });
    
    // Calculate balance score
    let score = 85; // Base score
    
    // Bonus for value picks
    score += valuePicks * 5;
    
    // Penalty for reaches
    score -= reachPicks * 5;
    
    // Bonus for addressing premium positions
    score += premiumPositions * 3;
    
    // Cap the score
    score = Math.max(60, Math.min(100, score));
    
    return {
        score: score,
        valuePicks: valuePicks,
        reachPicks: reachPicks,
        premiumPositions: premiumPositions,
        details: `${valuePicks} value, ${reachPicks} reach`
    };
}

// Calculate grade for a single pick
function calculatePickGrade(playerName, teamName, position, pickNumber) {
    const valueScore = calculateValueScore(playerName, pickNumber);
    const needFit = calculateNeedFit(teamName, position);
    const positionalValue = calculatePositionalValue(position);
    
    // Weighted calculation: 40% value, 30% need, 20% positional, 10% will be balance
    const weightedScore = (
        valueScore.score * 0.40 +
        needFit.score * 0.30 +
        positionalValue.score * 0.20
    );
    
    return {
        valueScore: valueScore,
        needFit: needFit,
        positionalValue: positionalValue,
        weightedScore: weightedScore,
        pickNumber: pickNumber
    };
}

// Convert numeric score to letter grade
function scoreToGrade(score) {
    if (score >= 95) return { grade: 'A+', class: 'grade-a-plus' };
    if (score >= 90) return { grade: 'A', class: 'grade-a' };
    if (score >= 87) return { grade: 'A-', class: 'grade-a-minus' };
    if (score >= 84) return { grade: 'B+', class: 'grade-b-plus' };
    if (score >= 80) return { grade: 'B', class: 'grade-b' };
    if (score >= 77) return { grade: 'B-', class: 'grade-b-minus' };
    if (score >= 74) return { grade: 'C+', class: 'grade-c-plus' };
    if (score >= 70) return { grade: 'C', class: 'grade-c' };
    if (score >= 67) return { grade: 'C-', class: 'grade-c-minus' };
    if (score >= 64) return { grade: 'D+', class: 'grade-d-plus' };
    if (score >= 60) return { grade: 'D', class: 'grade-d' };
    return { grade: 'F', class: 'grade-f' };
}

// Calculate overall team draft grade
function calculateTeamGrade(teamName, picks) {
    if (picks.length === 0) {
        return { overallScore: 50, overallGrade: { grade: 'F', class: 'grade-f' }, picks: [] };
    }
    
    const pickGrades = picks.map(pick => {
        return {
            ...pick,
            ...calculatePickGrade(pick.player, teamName, pick.position, pick.pickNumber)
        };
    });
    
    // Calculate average weighted score from picks (weighted by pick importance - earlier picks matter more)
    let totalWeightedScore = 0;
    let totalWeight = 0;
    
    pickGrades.forEach(pick => {
        // Earlier picks have more weight
        const weight = 100 - pick.pickNumber;
        totalWeightedScore += pick.weightedScore * weight;
        totalWeight += weight;
    });
    
    const avgPickScore = totalWeightedScore / totalWeight;
    
    // Calculate balance bonus
    const balanceBonus = calculateBalanceBonus(picks);
    
    // Final score: 90% pick scores, 10% balance
    const finalScore = (avgPickScore * 0.90) + (balanceBonus.score * 0.10);
    
    // Calculate component scores for display
    const avgValueScore = pickGrades.reduce((sum, p) => sum + p.valueScore.score, 0) / pickGrades.length;
    const avgNeedScore = pickGrades.reduce((sum, p) => sum + p.needFit.score, 0) / pickGrades.length;
    const avgPositionalScore = pickGrades.reduce((sum, p) => sum + p.positionalValue.score, 0) / pickGrades.length;
    
    return {
        overallScore: finalScore,
        overallGrade: scoreToGrade(finalScore),
        componentScores: {
            value: avgValueScore,
            need: avgNeedScore,
            positional: avgPositionalScore,
            balance: balanceBonus.score
        },
        picks: pickGrades,
        balanceBonus: balanceBonus
    };
}

// Extract all team picks from the DOM
function extractTeamPicks() {
    const teamPicks = {};
    
    // Extract from Round 1
    document.querySelectorAll('#round1Picks .pick-card').forEach(card => {
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const playerName = card.dataset.player;
        const position = card.dataset.position;
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        
        if (teamName && playerName && !isNaN(pickNumber)) {
            if (!teamPicks[teamName]) {
                teamPicks[teamName] = [];
            }
            teamPicks[teamName].push({ player: playerName, position: position, pickNumber: pickNumber, round: 1 });
        }
    });
    
    // Extract from Round 2
    document.querySelectorAll('#round2Picks .pick-card').forEach(card => {
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const playerName = card.dataset.player;
        const position = card.dataset.position;
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        
        if (teamName && playerName && !isNaN(pickNumber)) {
            if (!teamPicks[teamName]) {
                teamPicks[teamName] = [];
            }
            teamPicks[teamName].push({ player: playerName, position: position, pickNumber: pickNumber, round: 2 });
        }
    });
    
    // Extract from Round 3
    document.querySelectorAll('#round3Picks .pick-card').forEach(card => {
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const playerName = card.dataset.player;
        const position = card.dataset.position;
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        
        if (teamName && playerName && !isNaN(pickNumber)) {
            if (!teamPicks[teamName]) {
                teamPicks[teamName] = [];
            }
            teamPicks[teamName].push({ player: playerName, position: position, pickNumber: pickNumber, round: 3 });
        }
    });
    
    return teamPicks;
}

// Generate team draft grades
function generateDraftGrades() {
    const teamPicks = extractTeamPicks();
    const teamGrades = [];
    
    for (const [teamName, picks] of Object.entries(teamPicks)) {
        const grade = calculateTeamGrade(teamName, picks);
        teamGrades.push({
            teamName: teamName,
            ...grade,
            numPicks: picks.length
        });
    }
    
    // Sort by overall score descending
    teamGrades.sort((a, b) => b.overallScore - a.overallScore);
    
    return teamGrades;
}

// Render Draft Grades Leaderboard
function renderDraftGradesLeaderboard() {
    const container = document.getElementById('draftGradesList');
    if (!container) return;
    
    const teamGrades = generateDraftGrades();
    
    container.innerHTML = teamGrades.map((team, index) => `
        <div class="team-grade-card" style="animation-delay: ${index * 0.03}s">
            <div class="team-grade-rank">#${index + 1}</div>
            <div class="team-grade-info">
                <div class="team-grade-name">
                    ${getTeamHelmetSVG(team.teamName)}
                    ${team.teamName}
                </div>
                <div class="team-grade-picks">${team.numPicks} picks</div>
                <div class="team-grade-breakdown">
                    <div class="grade-metric">
                        <span class="grade-metric-value">${Math.round(team.componentScores.value)}</span>
                        <span class="grade-metric-label">Value</span>
                    </div>
                    <div class="grade-metric">
                        <span class="grade-metric-value">${Math.round(team.componentScores.need)}</span>
                        <span class="grade-metric-label">Need</span>
                    </div>
                    <div class="grade-metric">
                        <span class="grade-metric-value">${Math.round(team.componentScores.positional)}</span>
                        <span class="grade-metric-label">Pos</span>
                    </div>
                    <div class="grade-metric">
                        <span class="grade-metric-value">${Math.round(team.componentScores.balance)}</span>
                        <span class="grade-metric-label">Bal</span>
                    </div>
                </div>
            </div>
            <div class="team-grade-badge-container">
                <div class="grade-badge ${team.overallGrade.class}">${team.overallGrade.grade}</div>
                <span class="team-grade-score">${Math.round(team.overallScore)}</span>
            </div>
        </div>
    `).join('');
}

// Get team helmet SVG
function getTeamHelmetSVG(teamName) {
    // Return a simplified helmet icon
    return `<svg class="team-helmet" viewBox="0 0 100 70" style="width: 40px; height: 28px;">
        <ellipse cx="50" cy="35" rx="45" ry="30" fill="rgba(0,212,255,0.2)" stroke="var(--accent)" stroke-width="2"/>
        <text x="50" y="42" text-anchor="middle" fill="var(--accent)" font-size="14" font-weight="bold" font-family="Arial">${getTeamAbbreviation(teamName)}</text>
    </svg>`;
}

// Get team abbreviation
function getTeamAbbreviation(teamName) {
    const abbreviations = {
        'Las Vegas Raiders': 'LV',
        'New York Jets': 'NYJ',
        'Arizona Cardinals': 'ARI',
        'Tennessee Titans': 'TEN',
        'New York Giants': 'NYG',
        'Cleveland Browns': 'CLE',
        'Washington Commanders': 'WAS',
        'New Orleans Saints': 'NO',
        'Kansas City Chiefs': 'KC',
        'Cincinnati Bengals': 'CIN',
        'Miami Dolphins': 'MIA',
        'Dallas Cowboys': 'DAL',
        'Los Angeles Rams': 'LAR',
        'Baltimore Ravens': 'BAL',
        'Tampa Bay Buccaneers': 'TB',
        'Detroit Lions': 'DET',
        'Minnesota Vikings': 'MIN',
        'Carolina Panthers': 'CAR',
        'Pittsburgh Steelers': 'PIT',
        'Los Angeles Chargers': 'LAC',
        'Philadelphia Eagles': 'PHI',
        'Chicago Bears': 'CHI',
        'Buffalo Bills': 'BUF',
        'San Francisco 49ers': 'SF',
        'Houston Texans': 'HOU',
        'Denver Broncos': 'DEN',
        'New England Patriots': 'NE',
        'Seattle Seahawks': 'SEA',
        'Indianapolis Colts': 'IND',
        'Atlanta Falcons': 'ATL',
        'Green Bay Packers': 'GB',
        'Jacksonville Jaguars': 'JAX'
    };
    
    return abbreviations[teamName] || 'NFL';
}

// Add pick grades to individual pick cards
function addPickGradesToCards() {
    // Process all pick cards
    document.querySelectorAll('.pick-card').forEach(card => {
        const playerName = card.dataset.player;
        const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
        const position = card.dataset.position;
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        
        if (playerName && teamName && position && !isNaN(pickNumber)) {
            const grade = calculatePickGrade(playerName, teamName, position, pickNumber);
            const letterGrade = scoreToGrade(grade.weightedScore);
            
            // Grade badges removed from pick cards - grades only shown on Draft Grades page
        }
    });
}

// Initialize Draft Grades system
function initDraftGrades() {
    // Render leaderboard
    renderDraftGradesLeaderboard();
    
    // Add grades to pick cards
    addPickGradesToCards();
    
    // Render team drafts section
    renderTeamDraftsSection();
}

// Render Team Drafts Section
function renderTeamDraftsSection() {
    const container = document.getElementById('teamDraftsList');
    if (!container) return;
    
    const teamPicks = extractTeamPicks();
    const teamGrades = generateDraftGrades();
    
    // Create team draft cards sorted by grade
    container.innerHTML = teamGrades.map((team, index) => {
        const picks = teamPicks[team.teamName] || [];
        
        return `
            <div class="team-draft-card" style="animation-delay: ${index * 0.05}s">
                <div class="team-draft-header">
                    ${getTeamHelmetSVG(team.teamName)}
                    <div>
                        <div style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; font-weight: 600;">${team.teamName}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">Rank #${index + 1} • ${picks.length} picks</div>
                    </div>
                    <div class="team-draft-grade">
                        <div class="team-draft-grade-label">Grade</div>
                        <div class="grade-badge ${team.overallGrade.class}">${team.overallGrade.grade}</div>
                    </div>
                </div>
                <div class="team-draft-picks">
                    ${picks.map(pick => {
                        const grade = calculatePickGrade(pick.player, team.teamName, pick.position, pick.pickNumber);
                        const letterGrade = scoreToGrade(grade.weightedScore);
                        const valueClass = grade.valueScore.classification;
                        
                        return `
                            <div class="team-draft-pick">
                                <span class="pick-number-small">#${pick.pickNumber}</span>
                                <div class="pick-player-info">
                                    <div class="pick-player-name">${pick.player}</div>
                                    <div class="pick-player-position">${pick.position} • Round ${pick.round}</div>
                                </div>
                                <div class="pick-analysis">
                                    <span class="pick-value-indicator ${valueClass}">${valueClass.toUpperCase()}</span>
                                    <span class="pick-grade ${letterGrade.class}" style="padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">${letterGrade.grade}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Call init when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load
    setTimeout(initDraftGrades, 500);
});

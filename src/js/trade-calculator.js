/**
 * NFL Draft Trade Calculator
 * Based on Jimmy Johnson Trade Value Chart
 * For 2026 NFL Mock Draft Website
 */

// =============================================================================
// TRADE VALUE CHART DATA (Jimmy Johnson Chart)
// =============================================================================

const tradeValueChart = {
    // Round 1
    1: 3000, 2: 2600, 3: 2200, 4: 1800, 5: 1700,
    6: 1600, 7: 1500, 8: 1400, 9: 1350, 10: 1300,
    11: 1250, 12: 1200, 13: 1150, 14: 1100, 15: 1050,
    16: 1000, 17: 950, 18: 900, 19: 875, 20: 850,
    21: 800, 22: 780, 23: 760, 24: 740, 25: 720,
    26: 700, 27: 680, 28: 660, 29: 640, 30: 620,
    31: 600, 32: 590,
    // Round 2
    33: 580, 34: 560, 35: 550, 36: 540, 37: 530,
    38: 520, 39: 510, 40: 500, 41: 490, 42: 480,
    43: 470, 44: 460, 45: 450, 46: 440, 47: 430,
    48: 420, 49: 410, 50: 400, 51: 390, 52: 380,
    53: 370, 54: 360, 55: 350, 56: 340, 57: 330,
    58: 320, 59: 310, 60: 300, 61: 292, 62: 284,
    63: 276, 64: 270,
    // Round 3
    65: 265, 66: 260, 67: 255, 68: 250, 69: 245,
    70: 240, 71: 235, 72: 230, 73: 225, 74: 220,
    75: 215, 76: 210, 77: 205, 78: 200, 79: 195,
    80: 190, 81: 185, 82: 180, 83: 175, 84: 170,
    85: 165, 86: 160, 87: 155, 88: 150, 89: 145,
    90: 140, 91: 136, 92: 132, 93: 128, 94: 124,
    95: 120, 96: 116, 97: 112, 98: 108, 99: 104,
    100: 100, 101: 96, 102: 92, 103: 88, 104: 86,
    105: 84
};

// =============================================================================
// TEAM DATA
// =============================================================================

const teamsData = [
    { name: 'Arizona Cardinals', abbreviation: 'ARI', colors: { primary: '#97233F', secondary: '#000000' } },
    { name: 'Atlanta Falcons', abbreviation: 'ATL', colors: { primary: '#A71930', secondary: '#000000' } },
    { name: 'Baltimore Ravens', abbreviation: 'BAL', colors: { primary: '#241773', secondary: '#9E7C0C' } },
    { name: 'Buffalo Bills', abbreviation: 'BUF', colors: { primary: '#00338D', secondary: '#C60C30' } },
    { name: 'Carolina Panthers', abbreviation: 'CAR', colors: { primary: '#0085CA', secondary: '#101820' } },
    { name: 'Chicago Bears', abbreviation: 'CHI', colors: { primary: '#0B162A', secondary: '#C83803' } },
    { name: 'Cincinnati Bengals', abbreviation: 'CIN', colors: { primary: '#FB4F14', secondary: '#000000' } },
    { name: 'Cleveland Browns', abbreviation: 'CLE', colors: { primary: '#311D00', secondary: '#FF3C00' } },
    { name: 'Dallas Cowboys', abbreviation: 'DAL', colors: { primary: '#003594', secondary: '#869397' } },
    { name: 'Denver Broncos', abbreviation: 'DEN', colors: { primary: '#FB4F14', secondary: '#002244' } },
    { name: 'Detroit Lions', abbreviation: 'DET', colors: { primary: '#0076B6', secondary: '#B0B7BC' } },
    { name: 'Green Bay Packers', abbreviation: 'GB', colors: { primary: '#203731', secondary: '#FFB612' } },
    { name: 'Houston Texans', abbreviation: 'HOU', colors: { primary: '#03202F', secondary: '#A71930' } },
    { name: 'Indianapolis Colts', abbreviation: 'IND', colors: { primary: '#002C5F', secondary: '#A2AAAD' } },
    { name: 'Jacksonville Jaguars', abbreviation: 'JAX', colors: { primary: '#006778', secondary: '#D7A22A' } },
    { name: 'Kansas City Chiefs', abbreviation: 'KC', colors: { primary: '#E31837', secondary: '#FFB81C' } },
    { name: 'Las Vegas Raiders', abbreviation: 'LV', colors: { primary: '#000000', secondary: '#A5ACAF' } },
    { name: 'Los Angeles Chargers', abbreviation: 'LAC', colors: { primary: '#0076B6', secondary: '#FFB81C' } },
    { name: 'Los Angeles Rams', abbreviation: 'LAR', colors: { primary: '#003594', secondary: '#FFD100' } },
    { name: 'Miami Dolphins', abbreviation: 'MIA', colors: { primary: '#008E97', secondary: '#FC4C02' } },
    { name: 'Minnesota Vikings', abbreviation: 'MIN', colors: { primary: '#4F2683', secondary: '#FFC62F' } },
    { name: 'New England Patriots', abbreviation: 'NE', colors: { primary: '#002244', secondary: '#C60C30' } },
    { name: 'New Orleans Saints', abbreviation: 'NO', colors: { primary: '#101820', secondary: '#D3BC8D' } },
    { name: 'New York Giants', abbreviation: 'NYG', colors: { primary: '#001E62', secondary: '#A71930' } },
    { name: 'New York Jets', abbreviation: 'NYJ', colors: { primary: '#125740', secondary: '#FFFFFF' } },
    { name: 'Philadelphia Eagles', abbreviation: 'PHI', colors: { primary: '#004C54', secondary: '#A5ACAF' } },
    { name: 'Pittsburgh Steelers', abbreviation: 'PIT', colors: { primary: '#FFB612', secondary: '#101820' } },
    { name: 'San Francisco 49ers', abbreviation: 'SF', colors: { primary: '#AA0000', secondary: '#B3995D' } },
    { name: 'Seattle Seahawks', abbreviation: 'SEA', colors: { primary: '#002244', secondary: '#69BE28' } },
    { name: 'Tampa Bay Buccaneers', abbreviation: 'TB', colors: { primary: '#D50A0A', secondary: '#FF7900' } },
    { name: 'Tennessee Titans', abbreviation: 'TEN', colors: { primary: '#0C2340', secondary: '#4C8FB6' } },
    { name: 'Washington Commanders', abbreviation: 'WAS', colors: { primary: '#773141', secondary: '#FFB612' } }
];

// =============================================================================
// HISTORICAL TRADES DATA
// =============================================================================

const historicalTrades = [
    {
        year: 2021,
        teamUp: 'San Francisco 49ers',
        teamDown: 'Miami Dolphins',
        picksUp: [3],
        picksDown: [12, 2022 1st, 2023 1st, 2022 3rd],
        description: '49ers trade up for Trey Lance',
        valueDifference: -450
    },
    {
        year: 2021,
        teamUp: 'Chicago Bears',
        teamDown: 'New York Giants',
        picksUp: [11],
        picksDown: [20, 164, 2022 1st, 2022 4th],
        description: 'Bears trade up for Justin Fields',
        valueDifference: -200
    },
    {
        year: 2023,
        teamUp: 'Houston Texans',
        teamDown: 'Arizona Cardinals',
        picksUp: [3],
        picksDown: [12, 33, 2024 1st, 2024 2nd],
        description: 'Texans trade up for Will Anderson Jr.',
        valueDifference: -300
    },
    {
        year: 2023,
        teamUp: 'Tennessee Titans',
        teamDown: 'Chicago Bears',
        picksUp: [1],
        picksDown: [11, 2024 1st, 2025 1st, 2024 4th],
        description: 'Bears trade down with Titans',
        valueDifference: +400
    },
    {
        year: 2024,
        teamUp: 'Minnesota Vikings',
        teamDown: 'New York Jets',
        picksUp: [10],
        picksDown: [11, 129, 2024 4th],
        description: 'Vikings trade up for J.J. McCarthy',
        valueDifference: -50
    },
    {
        year: 2024,
        teamUp: 'Atlanta Falcons',
        teamDown: 'Arizona Cardinals',
        picksUp: [8],
        picksDown: [15, 79, 152],
        description: 'Falcons trade up for Michael Penix Jr.',
        valueDifference: -100
    },
    {
        year: 2016,
        teamUp: 'Los Angeles Rams',
        teamDown: 'Tennessee Titans',
        picksUp: [1, 113, 177],
        picksDown: [15, 43, 45, 76, 2017 1st, 2017 3rd],
        description: 'Rams trade up for Jared Goff',
        valueDifference: -850
    },
    {
        year: 2016,
        teamUp: 'Philadelphia Eagles',
        teamDown: 'Cleveland Browns',
        picksUp: [2],
        picksDown: [8, 77, 100, 2017 1st, 2018 2nd],
        description: 'Eagles trade up for Carson Wentz',
        valueDifference: -400
    },
    {
        year: 2017,
        teamUp: 'Kansas City Chiefs',
        teamDown: 'Buffalo Bills',
        picksUp: [10],
        picksDown: [27, 91, 2018 1st],
        description: 'Chiefs trade up for Patrick Mahomes',
        valueDifference: -350
    },
    {
        year: 2017,
        teamUp: 'Houston Texans',
        teamDown: 'Cleveland Browns',
        picksUp: [12],
        picksDown: [25, 2018 1st],
        description: 'Texans trade up for Deshaun Watson',
        valueDifference: -280
    }
];

// =============================================================================
// CALCULATION FUNCTIONS
// =============================================================================

/**
 * Calculate total trade value for an array of pick numbers
 * @param {number[]} picks - Array of pick numbers
 * @returns {number} Total trade value
 */
function calculateTradeValue(picks) {
    if (!Array.isArray(picks) || picks.length === 0) return 0;
    
    return picks.reduce((total, pick) => {
        return total + (tradeValueChart[pick] || 0);
    }, 0);
}

/**
 * Evaluate a trade between two sets of picks
 * @param {number[]} picksOffered - Picks being offered (team trading up)
 * @param {number} pickReceived - Pick being received (team trading down)
 * @returns {Object} Trade evaluation result
 */
function evaluateTrade(picksOffered, pickReceived) {
    const totalOffered = calculateTradeValue(picksOffered);
    const valueReceived = tradeValueChart[pickReceived] || 0;
    const difference = totalOffered - valueReceived;
    const percentage = valueReceived > 0 ? (totalOffered / valueReceived) * 100 : 0;
    
    return {
        totalOffered,
        valueReceived,
        difference,
        percentage,
        picksOffered,
        pickReceived
    };
}

/**
 * Get trade fairness assessment
 * @param {number} totalOffered - Total value offered
 * @param {number} pickValue - Value of pick received
 * @returns {Object} Fairness assessment
 */
function getTradeFairness(totalOffered, pickValue) {
    if (pickValue === 0) {
        return {
            status: 'invalid',
            label: 'Select a pick',
            color: 'gray',
            icon: 'fa-question-circle'
        };
    }
    
    const percentage = (totalOffered / pickValue) * 100;
    const difference = totalOffered - pickValue;
    
    if (percentage >= 90 && percentage <= 110) {
        return {
            status: 'fair',
            label: 'Fair Trade',
            color: 'success',
            icon: 'fa-check-circle',
            percentage,
            difference
        };
    } else if (percentage > 110 && percentage <= 120) {
        return {
            status: 'slight_overpay',
            label: 'Slight Overpay',
            color: 'warning',
            icon: 'fa-exclamation-circle',
            percentage,
            difference
        };
    } else if (percentage < 90 && percentage >= 80) {
        return {
            status: 'slight_underpay',
            label: 'Slight Underpay',
            color: 'warning',
            icon: 'fa-exclamation-circle',
            percentage,
            difference
        };
    } else if (percentage > 120) {
        return {
            status: 'significant_overpay',
            label: 'Significant Overpay',
            color: 'danger',
            icon: 'fa-times-circle',
            percentage,
            difference
        };
    } else {
        return {
            status: 'significant_underpay',
            label: 'Significant Underpay',
            color: 'danger',
            icon: 'fa-times-circle',
            percentage,
            difference
        };
    }
}

/**
 * Get trade probability based on value match
 * @param {number} percentage - Percentage match
 * @returns {Object} Probability assessment
 */
function getTradeProbability(percentage) {
    if (percentage >= 95) {
        return {
            level: 'highly_likely',
            label: 'Highly Likely',
            description: 'This trade aligns with NFL trade norms',
            color: 'success',
            percent: 95
        };
    } else if (percentage >= 90) {
        return {
            level: 'probable',
            label: 'Probable',
            description: 'Teams might negotiate minor adjustments',
            color: 'success',
            percent: 75
        };
    } else if (percentage >= 85) {
        return {
            level: 'possible',
            label: 'Possible',
            description: 'Would require some negotiation',
            color: 'warning',
            percent: 50
        };
    } else if (percentage >= 80) {
        return {
            level: 'unlikely',
            label: 'Unlikely',
            description: 'Significant adjustment needed',
            color: 'danger',
            percent: 25
        };
    } else {
        return {
            level: 'very_unlikely',
            label: 'Very Unlikely',
            description: 'Trade value is far apart',
            color: 'danger',
            percent: 10
        };
    }
}

/**
 * Suggest trade adjustments to balance value
 * @param {number[]} picksOffered - Current picks offered
 * @param {number} pickReceived - Target pick
 * @returns {Object} Suggestions
 */
function suggestTradeAdjustment(picksOffered, pickReceived) {
    const evaluation = evaluateTrade(picksOffered, pickReceived);
    const targetValue = evaluation.valueReceived;
    const currentValue = evaluation.totalOffered;
    const difference = targetValue - currentValue;
    
    const suggestions = [];
    
    // If significantly underpaying, suggest picks to add
    if (difference > 50) {
        // Find picks that would balance the trade
        const round = Math.ceil(pickReceived / 32);
        const searchStart = Math.max(1, pickReceived - 50);
        const searchEnd = Math.min(105, pickReceived + 50);
        
        // Look for single pick that balances
        for (let i = searchStart; i <= searchEnd; i++) {
            if (picksOffered.includes(i)) continue;
            const pickValue = tradeValueChart[i] || 0;
            if (Math.abs(pickValue - difference) < 50) {
                suggestions.push({
                    type: 'add',
                    pick: i,
                    value: pickValue,
                    message: `Add pick #${i} (worth ${pickValue} points) to balance`
                });
            }
        }
        
        // General suggestion if no specific pick found
        if (suggestions.length === 0) {
            if (difference > 200) {
                suggestions.push({
                    type: 'add',
                    pick: null,
                    value: difference,
                    message: `Add a 3rd or 4th round pick (~${Math.round(difference)} points needed)`
                });
            } else if (difference > 100) {
                suggestions.push({
                    type: 'add',
                    pick: null,
                    value: difference,
                    message: `Add a 4th or 5th round pick (~${Math.round(difference)} points needed)`
                });
            } else {
                suggestions.push({
                    type: 'add',
                    pick: null,
                    value: difference,
                    message: `Add a late-round pick (~${Math.round(difference)} points needed)`
                });
            }
        }
    }
    
    // If overpaying significantly, suggest picks to remove
    if (difference < -50 && picksOffered.length > 1) {
        // Find which pick to remove
        for (const pick of picksOffered) {
            const pickValue = tradeValueChart[pick] || 0;
            const newTotal = currentValue - pickValue;
            const newDiff = targetValue - newTotal;
            
            if (Math.abs(newDiff) < Math.abs(difference) && Math.abs(newDiff) < 100) {
                suggestions.push({
                    type: 'remove',
                    pick: pick,
                    value: pickValue,
                    message: `Remove pick #${pick} (worth ${pickValue} points)`
                });
            }
        }
    }
    
    return {
        difference,
        targetValue,
        currentValue,
        suggestions: suggestions.slice(0, 3)
    };
}

/**
 * Get similar historical trades
 * @param {number} pickNumber - The pick number being traded for
 * @returns {Object[]} Similar historical trades
 */
function getSimilarHistoricalTrades(pickNumber) {
    if (!pickNumber || pickNumber < 1) return [];
    
    const round = Math.ceil(pickNumber / 32);
    const pickValue = tradeValueChart[pickNumber] || 0;
    
    return historicalTrades
        .filter(trade => {
            // Find trades involving similar pick values
            const tradeValue = tradeValueChart[trade.picksUp[0]] || 0;
            return Math.abs(tradeValue - pickValue) < 500;
        })
        .slice(0, 3)
        .map(trade => ({
            ...trade,
            similarity: 'Similar pick value range'
        }));
}

// =============================================================================
// UI STATE MANAGEMENT
// =============================================================================

let tradeCalculatorState = {
    teamTradingUp: null,
    teamTradingDown: null,
    picksOffered: [],
    pickReceived: null,
    availablePicks: Array.from({ length: 105 }, (_, i) => i + 1)
};

// =============================================================================
// UI FUNCTIONS
// =============================================================================

/**
 * Open the trade calculator modal
 */
function openTradeCalculator() {
    const modal = document.getElementById('tradeCalculatorModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        initializeTradeCalculator();
    }
}

/**
 * Close the trade calculator modal
 */
function closeTradeCalculator() {
    const modal = document.getElementById('tradeCalculatorModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

/**
 * Initialize the trade calculator UI
 */
function initializeTradeCalculator() {
    populateTeamSelects();
    populatePickSelectors();
    resetTradeCalculator();
}

/**
 * Populate team dropdowns
 */
function populateTeamSelects() {
    const teamUpSelect = document.getElementById('teamTradingUp');
    const teamDownSelect = document.getElementById('teamTradingDown');
    
    if (!teamUpSelect || !teamDownSelect) return;
    
    const options = teamsData.map(team => 
        `<option value="${team.abbreviation}">${team.name}</option>`
    ).join('');
    
    const defaultOption = '<option value="">Select Team...</option>';
    
    teamUpSelect.innerHTML = defaultOption + options;
    teamDownSelect.innerHTML = defaultOption + options;
}

/**
 * Populate pick selector dropdowns
 */
function populatePickSelectors() {
    const pickReceivedSelect = document.getElementById('pickReceived');
    const picksOfferedContainer = document.getElementById('picksOfferedContainer');
    
    if (pickReceivedSelect) {
        const options = tradeCalculatorState.availablePicks.map(pick => {
            const round = Math.ceil(pick / 32);
            const value = tradeValueChart[pick] || 0;
            return `<option value="${pick}">Pick #${pick} (R${round}) - ${value} pts</option>`;
        }).join('');
        
        pickReceivedSelect.innerHTML = '<option value="">Select Pick...</option>' + options;
    }
    
    if (picksOfferedContainer) {
        renderPicksOfferedSelector();
    }
}

/**
 * Render the multi-select for picks offered
 */
function renderPicksOfferedSelector() {
    const container = document.getElementById('picksOfferedContainer');
    if (!container) return;
    
    container.innerHTML = tradeCalculatorState.availablePicks.map(pick => {
        const round = Math.ceil(pick / 32);
        const value = tradeValueChart[pick] || 0;
        const isSelected = tradeCalculatorState.picksOffered.includes(pick);
        
        return `
            <div class="pick-option ${isSelected ? 'selected' : ''}" 
                 data-pick="${pick}"
                 onclick="togglePickOffered(${pick})">
                <span class="pick-option-number">#${pick}</span>
                <span class="pick-option-round">R${round}</span>
                <span class="pick-option-value">${value}</span>
            </div>
        `;
    }).join('');
}

/**
 * Toggle a pick in the offered picks list
 * @param {number} pick - Pick number
 */
function togglePickOffered(pick) {
    const index = tradeCalculatorState.picksOffered.indexOf(pick);
    
    if (index > -1) {
        tradeCalculatorState.picksOffered.splice(index, 1);
    } else {
        tradeCalculatorState.picksOffered.push(pick);
        tradeCalculatorState.picksOffered.sort((a, b) => a - b);
    }
    
    renderPicksOfferedSelector();
    updateTradeCalculation();
}

/**
 * Handle team selection change
 * @param {string} teamType - 'up' or 'down'
 * @param {string} teamAbbreviation - Selected team abbreviation
 */
function handleTeamChange(teamType, teamAbbreviation) {
    if (teamType === 'up') {
        tradeCalculatorState.teamTradingUp = teamAbbreviation;
        updateTeamDisplay('up', teamAbbreviation);
    } else {
        tradeCalculatorState.teamTradingDown = teamAbbreviation;
        updateTeamDisplay('down', teamAbbreviation);
    }
}

/**
 * Update team display in UI
 * @param {string} teamType - 'up' or 'down'
 * @param {string} teamAbbreviation - Team abbreviation
 */
function updateTeamDisplay(teamType, teamAbbreviation) {
    const team = teamsData.find(t => t.abbreviation === teamAbbreviation);
    const displayElement = document.getElementById(`teamDisplay${teamType === 'up' ? 'Up' : 'Down'}`);
    
    if (!team || !displayElement) return;
    
    displayElement.innerHTML = `
        <div class="team-display" style="--team-primary: ${team.colors.primary}; --team-secondary: ${team.colors.secondary}">
            <div class="team-logo">${team.abbreviation}</div>
            <div class="team-name">${team.name}</div>
        </div>
    `;
}

/**
 * Handle pick received selection
 * @param {number} pickNumber - Selected pick number
 */
function handlePickReceivedChange(pickNumber) {
    tradeCalculatorState.pickReceived = parseInt(pickNumber) || null;
    updateTradeCalculation();
}

/**
 * Update trade calculation display
 */
function updateTradeCalculation() {
    const result = evaluateTrade(
        tradeCalculatorState.picksOffered,
        tradeCalculatorState.pickReceived || 0
    );
    
    const fairness = getTradeFairness(result.totalOffered, result.valueReceived);
    const probability = getTradeProbability(fairness.percentage || 0);
    const suggestions = suggestTradeAdjustment(
        tradeCalculatorState.picksOffered,
        tradeCalculatorState.pickReceived || 0
    );
    const similarTrades = getSimilarHistoricalTrades(tradeCalculatorState.pickReceived);
    
    // Update value displays
    updateValueDisplay('offered', result.totalOffered);
    updateValueDisplay('received', result.valueReceived);
    
    // Update fairness indicator
    updateFairnessIndicator(fairness);
    
    // Update probability meter
    updateProbabilityMeter(probability);
    
    // Update suggestions
    updateSuggestions(suggestions);
    
    // Update similar trades
    updateSimilarTrades(similarTrades);
    
    // Update value bars
    updateValueBars(result.totalOffered, result.valueReceived);
}

/**
 * Update value display element
 * @param {string} type - 'offered' or 'received'
 * @param {number} value - Value to display
 */
function updateValueDisplay(type, value) {
    const element = document.getElementById(`${type}ValueDisplay`);
    if (element) {
        element.textContent = value.toLocaleString();
    }
}

/**
 * Update fairness indicator
 * @param {Object} fairness - Fairness assessment
 */
function updateFairnessIndicator(fairness) {
    const container = document.getElementById('fairnessIndicator');
    if (!container) return;
    
    const colorClass = `fairness-${fairness.color}`;
    
    container.innerHTML = `
        <div class="fairness-badge ${colorClass}">
            <i class="fas ${fairness.icon}"></i>
            <span class="fairness-label">${fairness.label}</span>
        </div>
        ${fairness.difference !== undefined ? `
            <div class="fairness-details">
                <span class="fairness-difference ${fairness.difference >= 0 ? 'positive' : 'negative'}">
                    ${fairness.difference >= 0 ? '+' : ''}${fairness.difference} pts
                </span>
                <span class="fairness-percentage">${fairness.percentage?.toFixed(1)}% match</span>
            </div>
        ` : ''}
    `;
}

/**
 * Update probability meter
 * @param {Object} probability - Probability assessment
 */
function updateProbabilityMeter(probability) {
    const container = document.getElementById('probabilityMeter');
    if (!container) return;
    
    container.innerHTML = `
        <div class="probability-header">
            <span class="probability-label">${probability.label}</span>
            <span class="probability-percent">${probability.percent}%</span>
        </div>
        <div class="probability-bar">
            <div class="probability-fill probability-${probability.color}" 
                 style="width: ${probability.percent}%"></div>
        </div>
        <p class="probability-description">${probability.description}</p>
    `;
}

/**
 * Update suggestions display
 * @param {Object} suggestions - Suggestions object
 */
function updateSuggestions(suggestions) {
    const container = document.getElementById('tradeSuggestions');
    if (!container) return;
    
    if (suggestions.suggestions.length === 0) {
        container.innerHTML = '<p class="no-suggestions">Trade values are balanced</p>';
        return;
    }
    
    container.innerHTML = suggestions.suggestions.map(suggestion => `
        <div class="suggestion-item suggestion-${suggestion.type}">
            <i class="fas ${suggestion.type === 'add' ? 'fa-plus-circle' : 'fa-minus-circle'}"></i>
            <span>${suggestion.message}</span>
        </div>
    `).join('');
}

/**
 * Update similar historical trades
 * @param {Object[]} trades - Similar trades
 */
function updateSimilarTrades(trades) {
    const container = document.getElementById('similarTrades');
    if (!container) return;
    
    if (trades.length === 0) {
        container.innerHTML = '<p class="no-trades">No similar historical trades found</p>';
        return;
    }
    
    container.innerHTML = trades.map(trade => `
        <div class="historical-trade">
            <div class="trade-year">${trade.year}</div>
            <div class="trade-description">${trade.description}</div>
            <div class="trade-details-small">
                ${trade.teamUp} received: ${formatPicks(trade.picksUp)}<br>
                ${trade.teamDown} received: ${formatPicks(trade.picksDown)}
            </div>
        </div>
    `).join('');
}

/**
 * Format picks array for display
 * @param {Array} picks - Array of picks (numbers or objects)
 * @returns {string} Formatted string
 */
function formatPicks(picks) {
    return picks.map(pick => {
        if (typeof pick === 'number') return `#${pick}`;
        if (typeof pick === 'string') return pick;
        return '';
    }).join(', ');
}

/**
 * Update value comparison bars
 * @param {number} offered - Total offered value
 * @param {number} received - Received value
 */
function updateValueBars(offered, received) {
    const maxValue = Math.max(offered, received, 1000);
    const offeredPercent = (offered / maxValue) * 100;
    const receivedPercent = (received / maxValue) * 100;
    
    const offeredBar = document.getElementById('offeredValueBar');
    const receivedBar = document.getElementById('receivedValueBar');
    
    if (offeredBar) {
        offeredBar.style.width = `${Math.max(offeredPercent, 5)}%`;
    }
    if (receivedBar) {
        receivedBar.style.width = `${Math.max(receivedPercent, 5)}%`;
    }
}

/**
 * Reset the trade calculator
 */
function resetTradeCalculator() {
    tradeCalculatorState = {
        teamTradingUp: null,
        teamTradingDown: null,
        picksOffered: [],
        pickReceived: null,
        availablePicks: Array.from({ length: 105 }, (_, i) => i + 1)
    };
    
    // Reset form elements
    const teamUpSelect = document.getElementById('teamTradingUp');
    const teamDownSelect = document.getElementById('teamTradingDown');
    const pickReceivedSelect = document.getElementById('pickReceived');
    
    if (teamUpSelect) teamUpSelect.value = '';
    if (teamDownSelect) teamDownSelect.value = '';
    if (pickReceivedSelect) pickReceivedSelect.value = '';
    
    // Clear displays
    const teamDisplayUp = document.getElementById('teamDisplayUp');
    const teamDisplayDown = document.getElementById('teamDisplayDown');
    
    if (teamDisplayUp) teamDisplayUp.innerHTML = '';
    if (teamDisplayDown) teamDisplayDown.innerHTML = '';
    
    // Re-render
    renderPicksOfferedSelector();
    updateTradeCalculation();
}

/**
 * Copy trade details to clipboard
 */
function copyTradeDetails() {
    const teamUp = teamsData.find(t => t.abbreviation === tradeCalculatorState.teamTradingUp);
    const teamDown = teamsData.find(t => t.abbreviation === tradeCalculatorState.teamTradingDown);
    
    if (!teamUp || !teamDown || tradeCalculatorState.picksOffered.length === 0 || !tradeCalculatorState.pickReceived) {
        showTradeNotification('Please complete the trade details first', 'warning');
        return;
    }
    
    const offeredValue = calculateTradeValue(tradeCalculatorState.picksOffered);
    const receivedValue = tradeValueChart[tradeCalculatorState.pickReceived] || 0;
    
    const tradeText = `
TRADE DETAILS (2026 NFL Mock Draft)
================================

${teamUp.name} trades UP:
${tradeCalculatorState.picksOffered.map(p => `  - Pick #${p} (${tradeValueChart[p]} pts)`).join('\n')}
Total Value: ${offeredValue} points

${teamDown.name} trades DOWN:
  - Pick #${tradeCalculatorState.pickReceived} (${receivedValue} pts)

Value Difference: ${offeredValue - receivedValue} points
Generated via NFL Mock Draft Trade Calculator
    `.trim();
    
    navigator.clipboard.writeText(tradeText).then(() => {
        showTradeNotification('Trade details copied to clipboard!', 'success');
    }).catch(() => {
        showTradeNotification('Failed to copy trade details', 'error');
    });
}

/**
 * Apply trade to mock draft (placeholder for integration)
 */
function applyTradeToMock() {
    const teamUp = tradeCalculatorState.teamTradingUp;
    const teamDown = tradeCalculatorState.teamTradingDown;
    
    if (!teamUp || !teamDown || tradeCalculatorState.picksOffered.length === 0 || !tradeCalculatorState.pickReceived) {
        showTradeNotification('Please complete the trade details first', 'warning');
        return;
    }
    
    // This would integrate with the main mock draft system
    showTradeNotification('Trade applied to mock draft! (Demo mode)', 'success');
    
    // Store in localStorage for potential use
    const tradeData = {
        ...tradeCalculatorState,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('lastTrade', JSON.stringify(tradeData));
}

/**
 * Show notification in trade calculator
 * @param {string} message - Message to display
 * @param {string} type - Notification type
 */
function showTradeNotification(message, type = 'info') {
    const container = document.getElementById('tradeNotification');
    if (!container) return;
    
    container.innerHTML = `
        <div class="trade-notification trade-notification-${type}">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
}

// =============================================================================
// EVENT LISTENERS & INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    const modal = document.getElementById('tradeCalculatorModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTradeCalculator();
            }
        });
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeTradeCalculator();
        }
    });
});

// Export functions for global access
window.openTradeCalculator = openTradeCalculator;
window.closeTradeCalculator = closeTradeCalculator;
window.togglePickOffered = togglePickOffered;
window.handleTeamChange = handleTeamChange;
window.handlePickReceivedChange = handlePickReceivedChange;
window.resetTradeCalculator = resetTradeCalculator;
window.copyTradeDetails = copyTradeDetails;
window.applyTradeToMock = applyTradeToMock;
window.calculateTradeValue = calculateTradeValue;
window.evaluateTrade = evaluateTrade;
window.getTradeFairness = getTradeFairness;
window.suggestTradeAdjustment = suggestTradeAdjustment;
window.getSimilarHistoricalTrades = getSimilarHistoricalTrades;

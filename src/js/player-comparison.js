// ==========================================
// PLAYER COMPARISON TOOL
// ==========================================

// Comparison state
let comparisonPlayers = [];
let comparisonChart = null;
let comparisonMaxPlayers = 3;

// ==========================================
// DATA ENHANCEMENT - Add ratings to bigBoardData
// ==========================================
function enhanceBigBoardDataWithRatings() {
    // Add numerical ratings for comparison (0-10 scale)
    const ratingMap = {
        // QBs
        'Fernando Mendoza': { athleticism: 7.5, size: 9.0, production: 9.5, upside: 8.5, technique: 8.5 },
        'Ty Simpson': { athleticism: 8.0, size: 8.0, production: 8.0, upside: 9.0, technique: 8.0 },
        'Drew Allar': { athleticism: 6.5, size: 9.5, production: 7.5, upside: 8.0, technique: 7.5 },
        'Trinidad Chambliss': { athleticism: 7.0, size: 7.0, production: 8.5, upside: 7.5, technique: 8.0 },
        'Carson Beck': { athleticism: 6.0, size: 8.5, production: 7.0, upside: 7.0, technique: 7.5 },
        'Cole Payton': { athleticism: 7.5, size: 6.5, production: 8.0, upside: 7.5, technique: 8.0 },
        
        // RBs
        'Jeremiyah Love': { athleticism: 9.0, size: 8.5, production: 8.5, upside: 9.0, technique: 8.0 },
        'Jadarian Price': { athleticism: 9.0, size: 8.0, production: 8.0, upside: 8.5, technique: 7.5 },
        'Emmett Johnson': { athleticism: 8.0, size: 8.0, production: 8.5, upside: 7.5, technique: 8.5 },
        'Kaytron Allen': { athleticism: 7.5, size: 8.5, production: 8.0, upside: 8.0, technique: 8.0 },
        'Omarion Hampton': { athleticism: 8.0, size: 8.5, production: 8.0, upside: 8.0, technique: 8.0 },
        'Kaleb Johnson': { athleticism: 7.5, size: 8.5, production: 7.5, upside: 7.5, technique: 8.0 },
        
        // WRs
        'Carnell Tate': { athleticism: 8.0, size: 9.0, production: 9.0, upside: 9.0, technique: 8.5 },
        'Jordyn Tyson': { athleticism: 8.0, size: 8.5, production: 8.5, upside: 8.5, technique: 8.0 },
        'Makai Lemon': { athleticism: 9.0, size: 7.0, production: 8.5, upside: 8.5, technique: 8.5 },
        'Zachariah Branch': { athleticism: 9.5, size: 6.0, production: 8.0, upside: 9.0, technique: 7.5 },
        'Denzel Boston': { athleticism: 7.5, size: 9.0, production: 8.0, upside: 8.0, technique: 7.5 },
        'Jayden Higgins': { athleticism: 7.0, size: 8.5, production: 7.5, upside: 7.5, technique: 8.0 },
        'Luther Burden III': { athleticism: 8.5, size: 7.5, production: 8.5, upside: 8.5, technique: 8.0 },
        'Xavier Restrepo': { athleticism: 7.5, size: 7.0, production: 8.0, upside: 7.0, technique: 8.5 },
        
        // TEs
        'Kenyon Sadiq': { athleticism: 8.5, size: 8.0, production: 8.0, upside: 8.5, technique: 7.5 },
        'Mason Taylor': { athleticism: 8.0, size: 8.0, production: 7.5, upside: 8.0, technique: 7.5 },
        'Eli Stowers': { athleticism: 8.5, size: 7.5, production: 7.0, upside: 8.0, technique: 7.0 },
        'Max Klare': { athleticism: 7.5, size: 7.5, production: 7.5, upside: 7.5, technique: 7.5 },
        
        // OTs
        'Francis Mauigoa': { athleticism: 7.5, size: 9.5, production: 9.0, upside: 8.5, technique: 8.0 },
        'Spencer Fano': { athleticism: 7.5, size: 8.5, production: 8.5, upside: 8.0, technique: 9.0 },
        'Caleb Lomu': { athleticism: 8.0, size: 9.0, production: 8.0, upside: 8.5, technique: 8.0 },
        'Kadyn Proctor': { athleticism: 7.0, size: 9.5, production: 7.5, upside: 8.0, technique: 7.0 },
        'Aireontae Ersery': { athleticism: 7.5, size: 9.0, production: 7.0, upside: 8.5, technique: 6.5 },
        'JC Latham': { athleticism: 6.5, size: 9.5, production: 7.5, upside: 7.5, technique: 7.5 },
        'Monroe Freeling': { athleticism: 7.5, size: 8.5, production: 7.0, upside: 8.0, technique: 7.5 },
        'Gennings Dunker': { athleticism: 7.0, size: 8.5, production: 7.0, upside: 7.5, technique: 7.5 },
        
        // IOL
        'Olaivavega Ioane': { athleticism: 6.5, size: 9.5, production: 8.5, upside: 7.5, technique: 8.0 },
        'Connor Lew': { athleticism: 8.0, size: 8.0, production: 8.0, upside: 8.0, technique: 8.5 },
        'Emmanuel Pregnon': { athleticism: 7.0, size: 8.5, production: 7.5, upside: 7.5, technique: 8.0 },
        'Chase Bisontis': { athleticism: 7.0, size: 8.5, production: 7.5, upside: 7.5, technique: 7.5 },
        'Ar\'Maj Reed-Adams': { athleticism: 7.5, size: 8.0, production: 7.5, upside: 7.5, technique: 8.0 },
        
        // EDGE
        'Rueben Bain Jr.': { athleticism: 8.0, size: 8.5, production: 9.0, upside: 8.5, technique: 8.0 },
        'David Bailey': { athleticism: 9.0, size: 7.5, production: 8.5, upside: 9.0, technique: 7.5 },
        'Akheem Mesidor': { athleticism: 7.5, size: 8.5, production: 8.0, upside: 8.0, technique: 7.5 },
        'Keldric Faulk': { athleticism: 7.5, size: 9.0, production: 8.0, upside: 8.5, technique: 7.5 },
        'TJ Parker': { athleticism: 8.0, size: 7.5, production: 7.5, upside: 8.0, technique: 7.5 },
        'Dani Dennis-Sutton': { athleticism: 8.5, size: 8.0, production: 7.5, upside: 8.5, technique: 7.5 },
        'Landon Jackson': { athleticism: 7.0, size: 9.0, production: 7.5, upside: 7.5, technique: 7.5 },
        'Jack Sawyer': { athleticism: 7.5, size: 8.0, production: 7.5, upside: 7.5, technique: 8.0 },
        
        // DL
        'Peter Woods': { athleticism: 8.0, size: 8.5, production: 8.5, upside: 8.5, technique: 8.0 },
        'Kayden McDonald': { athleticism: 6.5, size: 9.5, production: 8.0, upside: 7.5, technique: 7.5 },
        'Deone Walker': { athleticism: 6.0, size: 9.5, production: 7.5, upside: 7.0, technique: 7.5 },
        'Tyleik Williams': { athleticism: 7.0, size: 8.5, production: 7.5, upside: 7.5, technique: 7.5 },
        'Kenneth Grant': { athleticism: 6.5, size: 9.5, production: 7.0, upside: 7.0, technique: 7.0 },
        'Shemar Stewart': { athleticism: 8.5, size: 8.5, production: 6.5, upside: 8.5, technique: 6.5 },
        
        // LBs
        'Arvell Reese': { athleticism: 9.0, size: 8.5, production: 8.5, upside: 9.0, technique: 8.0 },
        'Sonny Styles': { athleticism: 9.0, size: 8.5, production: 8.0, upside: 9.0, technique: 7.5 },
        'CJ Allen': { athleticism: 8.5, size: 8.0, production: 8.5, upside: 8.0, technique: 8.5 },
        'Jihaad Campbell': { athleticism: 8.5, size: 8.0, production: 7.5, upside: 8.5, technique: 7.5 },
        'Anthony Hill Jr.': { athleticism: 8.0, size: 8.0, production: 7.5, upside: 8.0, technique: 7.5 },
        'Carson Schwesinger': { athleticism: 7.5, size: 7.5, production: 8.5, upside: 7.0, technique: 8.0 },
        
        // CBs
        'Jermod McCoy': { athleticism: 8.5, size: 8.0, production: 8.0, upside: 8.5, technique: 8.0 },
        'Mansoor Delane': { athleticism: 8.5, size: 8.5, production: 8.5, upside: 8.5, technique: 8.5 },
        'Avieon Terrell': { athleticism: 9.0, size: 7.5, production: 8.0, upside: 8.5, technique: 8.0 },
        'Daylen Everette': { athleticism: 8.0, size: 8.0, production: 7.5, upside: 7.5, technique: 8.0 },
        'Colton Hood': { athleticism: 8.5, size: 7.5, production: 7.5, upside: 8.0, technique: 7.5 },
        'Maxwell Hairston': { athleticism: 9.0, size: 7.5, production: 7.5, upside: 8.0, technique: 7.5 },
        'Brandon Cisse': { athleticism: 9.5, size: 7.0, production: 7.0, upside: 8.5, technique: 7.0 },
        'Tacario Davis': { athleticism: 7.5, size: 9.0, production: 7.5, upside: 7.5, technique: 7.5 },
        
        // Safeties
        'Caleb Downs': { athleticism: 8.5, size: 8.0, production: 9.0, upside: 9.0, technique: 8.5 },
        'Emmanuel McNeil-Warren': { athleticism: 8.5, size: 8.0, production: 8.0, upside: 8.5, technique: 8.0 },
        'Dillon Thieneman': { athleticism: 8.0, size: 8.5, production: 8.5, upside: 8.0, technique: 8.0 },
        'Kevin Winston Jr.': { athleticism: 7.5, size: 8.0, production: 7.5, upside: 7.5, technique: 7.5 },
        'Rod Moore': { athleticism: 7.5, size: 7.5, production: 7.5, upside: 7.5, technique: 7.5 }
    };
    
    // Add ratings to bigBoardData
    if (typeof bigBoardData !== 'undefined') {
        bigBoardData.forEach(player => {
            if (ratingMap[player.name]) {
                player.athleticism = ratingMap[player.name].athleticism;
                player.size = ratingMap[player.name].size;
                player.production = ratingMap[player.name].production;
                player.upside = ratingMap[player.name].upside;
                player.technique = ratingMap[player.name].technique;
            } else {
                // Default ratings based on grade
                const grade = parseFloat(player.grade) || 6.5;
                const baseRating = Math.min(10, Math.max(5, grade));
                player.athleticism = baseRating;
                player.size = baseRating;
                player.production = baseRating;
                player.upside = baseRating;
                player.technique = baseRating;
            }
        });
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function heightToInches(height) {
    if (!height) return 0;
    const parts = height.replace('"', '').split("'");
    if (parts.length === 2) {
        return parseInt(parts[0]) * 12 + parseInt(parts[1]);
    }
    return 0;
}

function parseFortyTime(forty) {
    if (!forty) return 99;
    return parseFloat(forty) || 99;
}

function getTierColor(tier) {
    switch(tier) {
        case 'Elite': return '#ffd700'; // Gold
        case 'Round 1': return '#00ff88'; // Green
        case 'Round 2': return '#00d4ff'; // Cyan
        case 'Round 3': return '#ffb800'; // Orange
        default: return '#8b8b9a'; // Gray
    }
}

function getTierClass(tier) {
    switch(tier) {
        case 'Elite': return 'elite';
        case 'Round 1': return 'round1';
        case 'Round 2': return 'round2';
        case 'Round 3': return 'round3';
        default: return 'round3';
    }
}

// ==========================================
// COMPARISON FUNCTIONS
// ==========================================

function openPlayerComparison() {
    const modal = document.getElementById('comparisonModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        renderComparisonSelector();
        if (comparisonPlayers.length > 0) {
            renderComparisonView();
        }
    }
}

function closeComparison() {
    const modal = document.getElementById('comparisonModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function addPlayerToComparison(playerName) {
    if (typeof bigBoardData === 'undefined') return;
    
    // Check if player already in comparison
    if (comparisonPlayers.some(p => p.name === playerName)) {
        showToast(`${playerName} is already in comparison`);
        return;
    }
    
    // Check max players
    if (comparisonPlayers.length >= comparisonMaxPlayers) {
        showToast(`Maximum ${comparisonMaxPlayers} players can be compared`);
        return;
    }
    
    const player = bigBoardData.find(p => p.name === playerName);
    if (player) {
        comparisonPlayers.push(player);
        showToast(`Added ${playerName} to comparison`);
        renderComparisonSelector();
        renderComparisonView();
        
        // Update any UI indicators
        updateComparisonBadges();
        updateComparisonUI();
    }
}

function removePlayerFromComparison(playerName) {
    comparisonPlayers = comparisonPlayers.filter(p => p.name !== playerName);
    renderComparisonSelector();
    renderComparisonView();
    updateComparisonBadges();
    updateComparisonUI();
}

function clearAllComparisons() {
    comparisonPlayers = [];
    renderComparisonSelector();
    renderComparisonView();
    updateComparisonBadges();
    updateComparisonUI();
    showToast('All players removed from comparison');
}

function swapPlayers(index1, index2) {
    if (index1 >= 0 && index1 < comparisonPlayers.length && 
        index2 >= 0 && index2 < comparisonPlayers.length) {
        [comparisonPlayers[index1], comparisonPlayers[index2]] = 
        [comparisonPlayers[index2], comparisonPlayers[index1]];
        renderComparisonView();
    }
}

// ==========================================
// COMPARISON STAT LOGIC
// ==========================================

function compareStat(players, statName, lowerIsBetter = false) {
    if (players.length < 2) return null;
    
    let values = players.map(p => {
        let val;
        switch(statName) {
            case 'height': val = heightToInches(p.height); break;
            case 'weight': val = p.weight || 0; break;
            case 'forty': val = parseFortyTime(p.forty); break;
            case 'grade': val = parseFloat(p.grade) || 0; break;
            case 'athleticism': val = p.athleticism || 5; break;
            case 'size': val = p.size || 5; break;
            case 'production': val = p.production || 5; break;
            case 'upside': val = p.upside || 5; break;
            case 'technique': val = p.technique || 5; break;
            default: val = 0;
        }
        return { name: p.name, value: val };
    });
    
    // Sort by value
    values.sort((a, b) => lowerIsBetter ? a.value - b.value : b.value - a.value);
    
    // Return winners (could be multiple if tied)
    const maxVal = lowerIsBetter ? values[0].value : values[0].value;
    return values.filter(v => v.value === maxVal).map(v => v.name);
}

function getStatDisplayValue(player, statName) {
    switch(statName) {
        case 'height': return player.height || '--';
        case 'weight': return player.weight ? `${player.weight} lbs` : '--';
        case 'forty': return player.forty || '--';
        case 'grade': return player.grade || '--';
        case 'athleticism': return player.athleticism?.toFixed(1) || '--';
        case 'size': return player.size?.toFixed(1) || '--';
        case 'production': return player.production?.toFixed(1) || '--';
        case 'upside': return player.upside?.toFixed(1) || '--';
        case 'technique': return player.technique?.toFixed(1) || '--';
        default: return '--';
    }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderComparisonSelector() {
    const selector = document.getElementById('comparisonSelector');
    if (!selector) return;
    
    if (comparisonPlayers.length === 0) {
        selector.innerHTML = `
            <div class="comparison-empty-state">
                <i class="fas fa-users"></i>
                <p>Select 2-3 players to compare</p>
                <span>Click "Compare" on any player card or search below</span>
            </div>
        `;
        return;
    }
    
    selector.innerHTML = `
        <div class="comparison-selected-players">
            ${comparisonPlayers.map((p, idx) => `
                <div class="comparison-selected-player">
                    <span class="selected-player-rank">#${p.rank}</span>
                    <span class="selected-player-name">${p.name}</span>
                    <span class="selected-player-pos">${p.position}</span>
                    <button class="remove-player-btn" onclick="removePlayerFromComparison('${p.name}')" title="Remove">
                        <i class="fas fa-times"></i>
                    </button>
                    ${idx > 0 ? `<button class="swap-player-btn" onclick="swapPlayers(${idx}, ${idx-1})" title="Move Left">
                        <i class="fas fa-chevron-left"></i>
                    </button>` : ''}
                    ${idx < comparisonPlayers.length - 1 ? `<button class="swap-player-btn" onclick="swapPlayers(${idx}, ${idx+1})" title="Move Right">
                        <i class="fas fa-chevron-right"></i>
                    </button>` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

function renderComparisonView() {
    const container = document.getElementById('comparisonContent');
    if (!container) return;
    
    if (comparisonPlayers.length < 2) {
        container.innerHTML = `
            <div class="comparison-placeholder">
                <i class="fas fa-balance-scale"></i>
                <p>Add at least 2 players to see comparison</p>
            </div>
        `;
        return;
    }
    
    // Calculate winners for each stat
    const heightWinners = compareStat(comparisonPlayers, 'height');
    const weightWinners = compareStat(comparisonPlayers, 'weight');
    const fortyWinners = compareStat(comparisonPlayers, 'forty', true); // Lower is better
    const gradeWinners = compareStat(comparisonPlayers, 'grade');
    const athleticismWinners = compareStat(comparisonPlayers, 'athleticism');
    const sizeWinners = compareStat(comparisonPlayers, 'size');
    const productionWinners = compareStat(comparisonPlayers, 'production');
    const upsideWinners = compareStat(comparisonPlayers, 'upside');
    const techniqueWinners = compareStat(comparisonPlayers, 'technique');
    
    container.innerHTML = `
        <div class="comparison-grid comparison-count-${comparisonPlayers.length}">
            ${comparisonPlayers.map(player => {
                const tierColor = getTierColor(player.tier);
                const isHeightWinner = heightWinners?.includes(player.name);
                const isWeightWinner = weightWinners?.includes(player.name);
                const isFortyWinner = fortyWinners?.includes(player.name);
                const isGradeWinner = gradeWinners?.includes(player.name);
                const isAthleticismWinner = athleticismWinners?.includes(player.name);
                const isSizeWinner = sizeWinners?.includes(player.name);
                const isProductionWinner = productionWinners?.includes(player.name);
                const isUpsideWinner = upsideWinners?.includes(player.name);
                const isTechniqueWinner = techniqueWinners?.includes(player.name);
                
                return `
                <div class="comparison-player-column">
                    <!-- Header -->
                    <div class="comparison-header" style="border-top-color: ${tierColor}">
                        <div class="comparison-player-photo">
                            <img src="images/players/${player.name.toLowerCase().replace(/\s+/g, '-')}.jpg" 
                                 alt="${player.name}"
                                 onerror="this.src='images/players/placeholder.jpg'">
                            <div class="comparison-rank">#${player.rank}</div>
                        </div>
                        <h3 class="comparison-player-name">${player.name}</h3>
                        <div class="comparison-player-meta">
                            <span class="comparison-position">${player.position}</span>
                            <span class="comparison-school">${player.school}</span>
                        </div>
                        <div class="comparison-grade ${getTierClass(player.tier)}">
                            <span class="grade-label">GRADE</span>
                            <span class="grade-value">${player.grade}</span>
                            <span class="grade-tier">${player.tier}</span>
                        </div>
                    </div>
                    
                    <!-- Physical Traits -->
                    <div class="comparison-section">
                        <h4><i class="fas fa-ruler-combined"></i> Physical Traits</h4>
                        
                        <div class="comparison-stat-row ${isHeightWinner ? 'winner' : ''}">
                            <span class="stat-label">Height</span>
                            <div class="stat-bar-container">
                                <div class="stat-bar" style="width: ${Math.min(100, (heightToInches(player.height) / 80) * 100)}%; background: ${isHeightWinner ? 'var(--success)' : 'var(--accent)'};"></div>
                            </div>
                            <span class="stat-value">${player.height || '--'}</span>
                            ${isHeightWinner ? '<span class="winner-badge"><i class="fas fa-crown"></i></span>' : ''}
                        </div>
                        
                        <div class="comparison-stat-row ${isWeightWinner ? 'winner' : ''}">
                            <span class="stat-label">Weight</span>
                            <div class="stat-bar-container">
                                <div class="stat-bar" style="width: ${Math.min(100, ((player.weight || 0) / 350) * 100)}%; background: ${isWeightWinner ? 'var(--success)' : 'var(--accent)'};"></div>
                            </div>
                            <span class="stat-value">${player.weight || '--'} lbs</span>
                            ${isWeightWinner ? '<span class="winner-badge"><i class="fas fa-crown"></i></span>' : ''}
                        </div>
                        
                        <div class="comparison-stat-row ${isFortyWinner ? 'winner' : ''}">
                            <span class="stat-label">40-Yard</span>
                            <div class="stat-bar-container">
                                <div class="stat-bar" style="width: ${Math.min(100, (5.5 - parseFortyTime(player.forty)) / 1.5 * 100)}%; background: ${isFortyWinner ? 'var(--success)' : 'var(--accent)'};"></div>
                            </div>
                            <span class="stat-value">${player.forty || '--'}</span>
                            ${isFortyWinner ? '<span class="winner-badge"><i class="fas fa-crown"></i></span>' : ''}
                        </div>
                    </div>
                    
                    <!-- Ratings -->
                    <div class="comparison-section">
                        <h4><i class="fas fa-star"></i> Ratings</h4>
                        
                        <div class="comparison-rating-row ${isAthleticismWinner ? 'winner' : ''}">
                            <span class="rating-label">Athleticism</span>
                            <div class="rating-stars">
                                ${generateStarRating(player.athleticism || 5)}
                            </div>
                            <span class="rating-value">${(player.athleticism || 5).toFixed(1)}</span>
                        </div>
                        
                        <div class="comparison-rating-row ${isSizeWinner ? 'winner' : ''}">
                            <span class="rating-label">Size</span>
                            <div class="rating-stars">
                                ${generateStarRating(player.size || 5)}
                            </div>
                            <span class="rating-value">${(player.size || 5).toFixed(1)}</span>
                        </div>
                        
                        <div class="comparison-rating-row ${isProductionWinner ? 'winner' : ''}">
                            <span class="rating-label">Production</span>
                            <div class="rating-stars">
                                ${generateStarRating(player.production || 5)}
                            </div>
                            <span class="rating-value">${(player.production || 5).toFixed(1)}</span>
                        </div>
                        
                        <div class="comparison-rating-row ${isUpsideWinner ? 'winner' : ''}">
                            <span class="rating-label">Upside</span>
                            <div class="rating-stars">
                                ${generateStarRating(player.upside || 5)}
                            </div>
                            <span class="rating-value">${(player.upside || 5).toFixed(1)}</span>
                        </div>
                        
                        <div class="comparison-rating-row ${isTechniqueWinner ? 'winner' : ''}">
                            <span class="rating-label">Technique</span>
                            <div class="rating-stars">
                                ${generateStarRating(player.technique || 5)}
                            </div>
                            <span class="rating-value">${(player.technique || 5).toFixed(1)}</span>
                        </div>
                    </div>
                    
                    <!-- Scouting Profile -->
                    <div class="comparison-section">
                        <h4><i class="fas fa-clipboard-check"></i> Scouting Profile</h4>
                        
                        <div class="comparison-strengths">
                            <strong>Strengths:</strong>
                            <p>${player.strengths}</p>
                        </div>
                        
                        <div class="comparison-comparison">
                            <strong>NFL Comparison:</strong>
                            <p>${player.comparison}</p>
                        </div>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
        
        <!-- Radar Chart Section -->
        <div class="comparison-chart-section">
            <h4><i class="fas fa-chart-radar"></i> Visual Comparison</h4>
            <div class="radar-chart-container">
                <canvas id="comparisonRadarChart"></canvas>
            </div>
        </div>
    `;
    
    // Initialize chart
    setTimeout(() => initComparisonChart(), 100);
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let html = '';
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    return html;
}

function initComparisonChart() {
    const ctx = document.getElementById('comparisonRadarChart');
    if (!ctx) return;
    
    // Destroy existing chart
    if (comparisonChart) {
        comparisonChart.destroy();
    }
    
    const labels = ['Athleticism', 'Size', 'Production', 'Upside', 'Technique'];
    const colors = [
        { bg: 'rgba(0, 212, 255, 0.2)', border: '#00d4ff' },
        { bg: 'rgba(0, 255, 136, 0.2)', border: '#00ff88' },
        { bg: 'rgba(255, 184, 0, 0.2)', border: '#ffb800' }
    ];
    
    const datasets = comparisonPlayers.map((p, idx) => ({
        label: p.name,
        data: [p.athleticism, p.size, p.production, p.upside, p.technique],
        backgroundColor: colors[idx].bg,
        borderColor: colors[idx].border,
        borderWidth: 2,
        pointBackgroundColor: colors[idx].border,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors[idx].border
    }));
    
    comparisonChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 2,
                        color: 'var(--text-secondary)',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'var(--text-primary)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--text-primary)',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// ==========================================
// SEARCH & FILTER
// ==========================================

function searchComparisonPlayers() {
    const searchTerm = document.getElementById('comparisonSearch')?.value.toLowerCase() || '';
    const resultsContainer = document.getElementById('comparisonSearchResults');
    if (!resultsContainer || typeof bigBoardData === 'undefined') return;
    
    if (searchTerm.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        return;
    }
    
    const matches = bigBoardData.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.position.toLowerCase().includes(searchTerm) ||
        p.school.toLowerCase().includes(searchTerm)
    ).slice(0, 10);
    
    if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">No players found</div>';
    } else {
        resultsContainer.innerHTML = matches.map(p => `
            <div class="search-result-item" onclick="addPlayerToComparison('${p.name}')">
                <span class="search-result-rank">#${p.rank}</span>
                <span class="search-result-name">${p.name}</span>
                <span class="search-result-meta">${p.position} | ${p.school}</span>
                <button class="search-result-add">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `).join('');
    }
    
    resultsContainer.style.display = 'block';
}

// ==========================================
// SHARE & EXPORT
// ==========================================

function shareComparison() {
    if (comparisonPlayers.length < 2) {
        showToast('Need at least 2 players to share comparison');
        return;
    }
    
    const playerNames = comparisonPlayers.map(p => p.name).join(' vs ');
    const text = `Check out this player comparison: ${playerNames} - 2026 NFL Mock Draft`;
    const url = window.location.href;
    
    navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
        showToast('Comparison copied to clipboard!');
    });
}

async function exportComparisonAsImage() {
    const content = document.getElementById('comparisonContent');
    if (!content || comparisonPlayers.length < 2) {
        showToast('Nothing to export');
        return;
    }
    
    try {
        showToast('Generating image...');
        const canvas = await html2canvas(content, {
            backgroundColor: '#0a0a0f',
            scale: 2,
            useCORS: true,
            allowTaint: true
        });
        
        const link = document.createElement('a');
        link.download = `player-comparison-${comparisonPlayers.map(p => p.name.replace(/\s+/g, '-')).join('-')}.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        showToast('Image downloaded!');
    } catch (err) {
        console.error('Export failed:', err);
        showToast('Failed to export image');
    }
}

// ==========================================
// UI UPDATES
// ==========================================

function updateComparisonUI() {
    // Update floating button
    const floatingBtn = document.getElementById('floatingCompareBtn');
    const compareBadge = document.getElementById('compareCountBadge');
    const compareBarCount = document.getElementById('compareBarCount');
    
    if (floatingBtn && compareBadge) {
        if (comparisonPlayers.length > 0) {
            floatingBtn.style.display = 'flex';
            compareBadge.textContent = comparisonPlayers.length;
        } else {
            floatingBtn.style.display = 'none';
        }
    }
    
    if (compareBarCount) {
        if (comparisonPlayers.length > 0) {
            compareBarCount.style.display = 'inline-block';
            compareBarCount.textContent = `${comparisonPlayers.length}/3`;
        } else {
            compareBarCount.style.display = 'none';
        }
    }
}

function updateComparisonBadges() {
    // Update Big Board with comparison buttons
    document.querySelectorAll('.big-board-item').forEach(item => {
        const nameEl = item.querySelector('.bb-player-name');
        if (!nameEl) return;
        
        const playerName = nameEl.textContent;
        const isInComparison = comparisonPlayers.some(p => p.name === playerName);
        
        // Check if compare button already exists
        let compareBtn = item.querySelector('.bb-compare-btn');
        
        if (!compareBtn) {
            compareBtn = document.createElement('button');
            compareBtn.className = 'bb-compare-btn';
            compareBtn.innerHTML = '<i class="fas fa-plus"></i>';
            compareBtn.title = 'Add to comparison';
            item.appendChild(compareBtn);
        }
        
        compareBtn.onclick = (e) => {
            e.stopPropagation();
            if (isInComparison) {
                removePlayerFromComparison(playerName);
            } else {
                addPlayerToComparison(playerName);
            }
        };
        
        compareBtn.classList.toggle('active', isInComparison);
        compareBtn.innerHTML = isInComparison ? '<i class="fas fa-check"></i>' : '<i class="fas fa-plus"></i>';
        compareBtn.title = isInComparison ? 'Remove from comparison' : 'Add to comparison';
    });
}

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener('keydown', (e) => {
    // Close modal on Escape
    if (e.key === 'Escape') {
        closeComparison();
    }
    
    // Open comparison with 'C' when player selected
    if (e.key === 'c' || e.key === 'C') {
        const selectedPlayer = document.querySelector('.big-board-item:hover .bb-player-name');
        if (selectedPlayer && comparisonPlayers.length < comparisonMaxPlayers) {
            addPlayerToComparison(selectedPlayer.textContent);
        }
    }
});

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Enhance data with ratings
    enhanceBigBoardDataWithRatings();
    
    // Update comparison buttons when Big Board is rendered
    const originalRenderBigBoard = window.renderBigBoard;
    if (originalRenderBigBoard) {
        window.renderBigBoard = function() {
            originalRenderBigBoard();
            setTimeout(updateComparisonBadges, 100);
        };
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('comparisonModal');
    if (event.target === modal) {
        closeComparison();
    }
}

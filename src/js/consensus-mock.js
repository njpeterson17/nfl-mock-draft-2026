// ========================================
// CONSENSUS MOCK DRAFT - MAIN JAVASCRIPT
// ========================================

// State management
let currentTab = 'consensus';
let currentFilter = 'all';
let userVotes = {};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    loadUserVotes();
    renderConsensusPicks();
    renderSourceLegend();
    renderSourcesGrid();
    updateHeaderStats();
    renderHistory();
});

// ========================================
// LOCAL STORAGE - USER VOTES
// ========================================

function loadUserVotes() {
    try {
        const stored = localStorage.getItem('consensusVotes');
        if (stored) {
            userVotes = JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Could not load votes from localStorage:', e);
        userVotes = {};
    }
}

function saveUserVotes() {
    try {
        localStorage.setItem('consensusVotes', JSON.stringify(userVotes));
    } catch (e) {
        console.warn('Could not save votes to localStorage:', e);
    }
}

function voteOnPick(pickNumber, vote) {
    // Store vote
    userVotes[pickNumber] = vote;
    saveUserVotes();
    
    // Update display
    updateVoteDisplay(pickNumber);
    
    // Show toast
    showToast(vote === 'up' ? '👍 Upvote recorded!' : '👎 Downvote recorded!');
    
    // Update stats
    updateHeaderStats();
}

function updateVoteDisplay(pickNumber) {
    const userVote = userVotes[pickNumber];
    if (!userVote) return;
    
    const card = document.querySelector(`[data-pick="${pickNumber}"]`);
    if (!card) return;
    
    const upBtn = card.querySelector('.vote-btn.up');
    const downBtn = card.querySelector('.vote-btn.down');
    
    // Reset both buttons
    upBtn?.classList.remove('active');
    downBtn?.classList.remove('active');
    
    // Activate voted button
    if (userVote === 'up' && upBtn) {
        upBtn.classList.add('active');
    } else if (userVote === 'down' && downBtn) {
        downBtn.classList.add('active');
    }
}

// ========================================
// TAB SWITCHING
// ========================================

function switchTab(tabName) {
    currentTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.consensus-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Update panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Render specific content
    if (tabName === 'compare') {
        renderComparison();
    } else if (tabName === 'history') {
        renderHistory();
    }
}

// ========================================
// CONSENSUS CALCULATION
// ========================================

function calculateConsensus(pickNumber) {
    const pick = ConsensusMockData.picks[pickNumber];
    if (!pick || !pick.consensus) return null;
    
    const votes = {};
    let totalWeight = 0;
    
    // Tally weighted votes
    for (const [sourceId, data] of Object.entries(pick.consensus.sources)) {
        const weight = ConsensusMockData.sources[sourceId].weight;
        const player = data.player;
        const confidence = data.confidence;
        
        votes[player] = (votes[player] || 0) + (weight * confidence);
        totalWeight += weight;
    }
    
    // Find consensus pick
    let consensusPlayer = null;
    let maxVotes = 0;
    
    for (const [player, voteCount] of Object.entries(votes)) {
        if (voteCount > maxVotes) {
            maxVotes = voteCount;
            consensusPlayer = player;
        }
    }
    
    // Calculate confidence
    const confidence = totalWeight > 0 ? maxVotes / totalWeight : 0;
    
    // Count agreements
    const agreement = Object.values(pick.consensus.sources)
        .filter(s => s.player === consensusPlayer).length;
    
    return { 
        player: consensusPlayer, 
        confidence, 
        agreement,
        totalWeight,
        maxVotes
    };
}

function getConsensusLevel(confidence, agreement) {
    if (agreement >= 4 || confidence >= 0.85) return 'high';
    if (agreement >= 3 || confidence >= 0.70) return 'medium';
    return 'low';
}

function getConsensusBadge(level) {
    switch (level) {
        case 'high':
            return { text: '🟢 High Consensus', class: 'high' };
        case 'medium':
            return { text: '🟡 Medium Consensus', class: 'medium' };
        case 'low':
            return { text: '🔴 Split Votes', class: 'low' };
        default:
            return { text: '⚪ Unknown', class: '' };
    }
}

// ========================================
// RENDER CONSENSUS PICKS
// ========================================

function renderConsensusPicks() {
    const container = document.getElementById('consensusPicks');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= 32; i++) {
        const pick = ConsensusMockData.picks[i];
        if (!pick) continue;
        
        const consensus = calculateConsensus(i);
        if (!consensus) continue;
        
        const level = getConsensusLevel(consensus.confidence, consensus.agreement);
        
        // Filter
        if (currentFilter !== 'all') {
            if (currentFilter === 'high' && level !== 'high') continue;
            if (currentFilter === 'medium' && level !== 'medium') continue;
            if (currentFilter === 'low' && level !== 'low') continue;
            if (currentFilter === 'disagreements' && !pick.dissent) continue;
        }
        
        const badge = getConsensusBadge(level);
        const player = ConsensusMockData.players[consensus.player] || {};
        const team = ConsensusMockData.teams[i];
        const userVote = userVotes[i];
        
        // Calculate vote percentages
        const totalVotes = pick.votes.up + pick.votes.down;
        const upPercent = totalVotes > 0 ? Math.round((pick.votes.up / totalVotes) * 100) : 0;
        const downPercent = 100 - upPercent;
        
        const card = document.createElement('div');
        card.className = `consensus-pick-card ${level}-consensus`;
        card.dataset.pick = i;
        card.dataset.level = level;
        
        card.innerHTML = `
            <div class="pick-card-header">
                <div class="pick-number-badge">${i}</div>
                <div class="pick-team-info">
                    <h3>${team.name}</h3>
                    <span class="team-record">${team.record}</span>
                </div>
                <div class="consensus-badge ${badge.class}">${badge.text}</div>
            </div>
            <div class="pick-card-body">
                <div class="consensus-main-pick">
                    <div class="player-image">
                        <img src="../images/players/${getPlayerImageName(consensus.player)}" 
                             alt="${consensus.player}" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="placeholder" style="display: none;">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="consensus-player-info">
                        <h2>${consensus.player}</h2>
                        <div class="player-meta">
                            <span class="position-badge">${player.position || 'N/A'}</span>
                            <span class="school-badge">${player.school || 'N/A'}</span>
                        </div>
                        <div class="confidence-bar">
                            <label>Confidence:</label>
                            <div class="confidence-track">
                                <div class="confidence-fill ${level}" style="width: ${consensus.confidence * 100}%"></div>
                            </div>
                            <span class="confidence-value ${level}">${Math.round(consensus.confidence * 100)}%</span>
                        </div>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0.5rem 0 0 0;">
                            ${consensus.agreement}/5 sources agree
                        </p>
                    </div>
                </div>
                
                ${pick.dissent ? `
                <div class="dissent-alert">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>⚠️ ${pick.dissent}</span>
                </div>
                ` : ''}
                
                <div class="source-breakdown">
                    <h4>Source Breakdown</h4>
                    <div class="sources-grid">
                        ${renderSourceItems(pick.consensus.sources, consensus.player)}
                    </div>
                </div>
                
                <div class="voting-section">
                    <div class="vote-stats">
                        <div class="vote-stat up">
                            <i class="fas fa-thumbs-up"></i>
                            <span class="percent">${upPercent}%</span>
                            <span class="count">(${pick.votes.up.toLocaleString()})</span>
                        </div>
                        <div class="vote-bar">
                            <div class="vote-bar-fill up" style="width: ${upPercent}%"></div>
                            <div class="vote-bar-fill down" style="width: ${downPercent}%"></div>
                        </div>
                        <div class="vote-stat down">
                            <i class="fas fa-thumbs-down"></i>
                            <span class="percent">${downPercent}%</span>
                            <span class="count">(${pick.votes.down.toLocaleString()})</span>
                        </div>
                    </div>
                    <div class="vote-buttons">
                        <button class="vote-btn up ${userVote === 'up' ? 'active' : ''}" 
                                onclick="voteOnPick(${i}, 'up')">
                            <i class="fas fa-thumbs-up"></i> Vote 👍
                        </button>
                        <button class="vote-btn down ${userVote === 'down' ? 'active' : ''}" 
                                onclick="voteOnPick(${i}, 'down')">
                            <i class="fas fa-thumbs-down"></i> Vote 👎
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    }
}

function renderSourceItems(sources, consensusPlayer) {
    return Object.entries(sources).map(([sourceId, data]) => {
        const source = ConsensusMockData.sources[sourceId];
        const agrees = data.player === consensusPlayer;
        
        return `
            <div class="source-item ${agrees ? 'agrees' : 'disagrees'}">
                <div class="source-icon ${sourceId}">${sourceId.toUpperCase().slice(0, 3)}</div>
                <div class="source-details">
                    <span class="source-name">${source.name}</span>
                    <span class="source-pick">${data.player}</span>
                </div>
                <span class="source-confidence">${Math.round(data.confidence * 100)}%</span>
                <span class="source-status ${agrees ? 'agrees' : 'disagrees'}">
                    <i class="fas fa-${agrees ? 'check' : 'times'}"></i>
                </span>
            </div>
        `;
    }).join('');
}

function getPlayerImageName(playerName) {
    return playerName.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[.']/g, '')
        .replace(/-jr$/, '')
        .replace(/-sr$/, '')
        .replace(/-ii$/, '')
        .replace(/-iii$/, '')
        .replace(/-iv$/, '')
        + '.jpg';
}

// ========================================
// FILTERING
// ========================================

function filterConsensus(filter) {
    currentFilter = filter;
    
    // Update filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderConsensusPicks();
}

// ========================================
// COMPARISON TABLE
// ========================================

function renderComparison() {
    const table = document.getElementById('comparisonTable');
    if (!table) return;
    
    const highlightDisagreements = document.getElementById('highlightDisagreements')?.checked ?? true;
    const showConfidence = document.getElementById('showConfidence')?.checked ?? true;
    
    // Build header
    const sourceIds = Object.keys(ConsensusMockData.sources);
    const headerHTML = `
        <thead>
            <tr>
                <th>Pick</th>
                <th>Team</th>
                ${sourceIds.map(id => `<th>${ConsensusMockData.sources[id].name}</th>`).join('')}
            </tr>
        </thead>
    `;
    
    // Build body
    let bodyHTML = '<tbody>';
    
    for (let i = 1; i <= 32; i++) {
        const pick = ConsensusMockData.picks[i];
        const team = ConsensusMockData.teams[i];
        const consensus = calculateConsensus(i);
        
        if (!pick || !consensus) continue;
        
        bodyHTML += `
            <tr>
                <td class="pick-cell">${i}</td>
                <td class="team-cell">${team.code}</td>
                ${sourceIds.map(id => {
                    const sourcePick = pick.consensus.sources[id];
                    const agrees = sourcePick.player === consensus.player;
                    const isDisagreement = !agrees && highlightDisagreements;
                    
                    return `
                        <td class="source-cell">
                            <div class="player-prediction ${isDisagreement ? 'disagreement' : 'consensus'}">
                                ${sourcePick.player.split(' ').slice(-1)[0]}
                                ${showConfidence ? `<span class="confidence">${Math.round(sourcePick.confidence * 100)}%</span>` : ''}
                                ${isDisagreement ? '<span class="disagreement-marker"><i class="fas fa-exclamation"></i></span>' : ''}
                            </div>
                        </td>
                    `;
                }).join('')}
            </tr>
        `;
    }
    
    bodyHTML += '</tbody>';
    table.innerHTML = headerHTML + bodyHTML;
}

// ========================================
// SOURCE LEGEND & INFO
// ========================================

function renderSourceLegend() {
    const legend = document.getElementById('sourceLegend');
    if (!legend) return;
    
    legend.innerHTML = Object.entries(ConsensusMockData.sources).map(([id, source]) => `
        <div class="legend-item">
            <div class="legend-color" style="background: ${source.color}">
                ${id.toUpperCase().slice(0, 3)}
            </div>
            <div class="legend-info">
                <h5>${source.name}</h5>
                <p>${source.author}</p>
            </div>
            <span class="legend-weight">${(source.weight * 100).toFixed(0)}%</span>
        </div>
    `).join('');
}

function renderSourcesGrid() {
    const grid = document.getElementById('sourcesGrid');
    if (!grid) return;
    
    grid.innerHTML = Object.entries(ConsensusMockData.sources).map(([id, source]) => `
        <div class="source-card">
            <h4>
                <span style="display: inline-block; width: 24px; height: 24px; background: ${source.color}; 
                             border-radius: 6px; margin-right: 0.5rem; vertical-align: middle;"></span>
                ${source.name}
            </h4>
            <p class="author">${source.author}</p>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.5rem 0;">
                ${source.description}
            </p>
            <span class="weight">${(source.weight * 100).toFixed(0)}% Weight</span>
        </div>
    `).join('');
}

// ========================================
// HISTORY VIEW
// ========================================

function renderHistory() {
    const timeline = document.getElementById('historyTimeline');
    if (!timeline) return;
    
    timeline.innerHTML = ConsensusMockData.history.map((entry, index) => {
        const isCurrent = index === ConsensusMockData.history.length - 1;
        
        return `
            <div class="history-item">
                <div class="history-date">
                    <span class="date">${entry.label}</span>
                    <span class="status ${isCurrent ? 'current' : 'outdated'}">
                        ${isCurrent ? 'CURRENT' : 'OUTDATED'}
                    </span>
                </div>
                <div class="history-content">
                    ${entry.changes.map(change => {
                        const pick = ConsensusMockData.picks[change.pick];
                        const team = ConsensusMockData.teams[change.pick];
                        
                        return `
                            <div class="history-pick">
                                <span class="pick-num">#${change.pick}</span>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">${team.code}</span>
                                <div class="change">
                                    ${!isCurrent ? `<span class="player">${change.oldPlayer}</span>` : ''}
                                    ${!isCurrent ? '<span class="arrow"><i class="fas fa-arrow-right"></i></span>' : ''}
                                    <span class="player ${isCurrent ? 'new' : ''}">${change.newPlayer}</span>
                                </div>
                                <span class="history-meta">${change.note}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// HEADER STATS
// ========================================

function updateHeaderStats() {
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;
    let totalUserVotes = Object.keys(userVotes).length;
    
    for (let i = 1; i <= 32; i++) {
        const consensus = calculateConsensus(i);
        if (!consensus) continue;
        
        const level = getConsensusLevel(consensus.confidence, consensus.agreement);
        if (level === 'high') highCount++;
        else if (level === 'medium') mediumCount++;
        else lowCount++;
    }
    
    const highEl = document.getElementById('highConsensusCount');
    const medEl = document.getElementById('medConsensusCount');
    const lowEl = document.getElementById('lowConsensusCount');
    const votesEl = document.getElementById('totalVotesCount');
    
    if (highEl) highEl.textContent = highCount;
    if (medEl) medEl.textContent = mediumCount;
    if (lowEl) lowEl.textContent = lowCount;
    if (votesEl) votesEl.textContent = totalUserVotes;
}

// ========================================
// UPDATE MAIN MOCK
// ========================================

function updateMainMockToConsensus() {
    const updates = [];
    
    for (let i = 1; i <= 32; i++) {
        const consensus = calculateConsensus(i);
        if (consensus) {
            updates.push({
                pick: i,
                player: consensus.player,
                position: ConsensusMockData.players[consensus.player]?.position || 'N/A',
                school: ConsensusMockData.players[consensus.player]?.school || 'N/A'
            });
        }
    }
    
    // Store updates in localStorage for the main page to access
    try {
        localStorage.setItem('consensusUpdates', JSON.stringify(updates));
        showToast('✅ Consensus picks saved! Return to main mock to see updates.');
    } catch (e) {
        showToast('❌ Could not save updates');
    }
    
    return updates;
}

function getUserConsensus() {
    let agreeCount = 0;
    let disagreeCount = 0;
    
    for (let i = 1; i <= 32; i++) {
        const consensus = calculateConsensus(i);
        const userVote = userVotes[i];
        
        if (!consensus || !userVote) continue;
        
        // Simple agreement: if user upvoted, they agree with consensus
        if (userVote === 'up') agreeCount++;
        else if (userVote === 'down') disagreeCount++;
    }
    
    return {
        agree: agreeCount,
        disagree: disagreeCount,
        total: agreeCount + disagreeCount,
        agreementRate: (agreeCount + disagreeCount) > 0 
            ? (agreeCount / (agreeCount + disagreeCount)) 
            : 0
    };
}

// ========================================
// EXPORT DATA
// ========================================

function exportConsensusData() {
    const data = {
        generated: new Date().toISOString(),
        sources: ConsensusMockData.sources,
        picks: {}
    };
    
    for (let i = 1; i <= 32; i++) {
        const consensus = calculateConsensus(i);
        const pick = ConsensusMockData.picks[i];
        
        if (consensus && pick) {
            data.picks[i] = {
                team: pick.team,
                consensus: consensus,
                sources: pick.consensus.sources
            };
        }
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'consensus-mock-draft-2026.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('📥 Data exported successfully!');
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
// Only define if not already defined (main.js defines this on index.html)

if (typeof showToast === 'undefined') {
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatPlayerName(name) {
    // Return just last name for compact display
    const parts = name.split(' ');
    return parts.length > 1 ? parts[parts.length - 1] : name;
}

function getConfidenceColor(confidence) {
    if (confidence >= 0.85) return '#27ae60';
    if (confidence >= 0.70) return '#f39c12';
    return '#e74c3c';
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + E to export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportConsensusData();
    }
    
    // Number keys to switch tabs
    if (e.key >= '1' && e.key <= '4') {
        const tabs = ['consensus', 'compare', 'history', 'methodology'];
        const tabIndex = parseInt(e.key) - 1;
        if (tabs[tabIndex]) {
            switchTab(tabs[tabIndex]);
        }
    }
});

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

window.addEventListener('load', function() {
    // Preload images
    Object.keys(ConsensusMockData.players).forEach(playerName => {
        const img = new Image();
        img.src = `../images/players/${getPlayerImageName(playerName)}`;
    });
});

// ==========================================
// TEAM DRAFT HISTORY JAVASCRIPT
// Interactive functionality for team draft history pages
// ==========================================

// State management
let currentTeam = null;
let currentYear = 2025;
let recentTeams = JSON.parse(localStorage.getItem('recentTeams')) || [];
let charts = {};

// Team metadata for grid display
const teamMetadata = {
    ravens: { conf: 'AFC', div: 'North' },
    steelers: { conf: 'AFC', div: 'North' },
    browns: { conf: 'AFC', div: 'North' },
    bengals: { conf: 'AFC', div: 'North' },
    titans: { conf: 'AFC', div: 'South' },
    colts: { conf: 'AFC', div: 'South' },
    jaguars: { conf: 'AFC', div: 'South' },
    texans: { conf: 'AFC', div: 'South' },
    bills: { conf: 'AFC', div: 'East' },
    dolphins: { conf: 'AFC', div: 'East' },
    jets: { conf: 'AFC', div: 'East' },
    patriots: { conf: 'AFC', div: 'East' },
    chiefs: { conf: 'AFC', div: 'West' },
    chargers: { conf: 'AFC', div: 'West' },
    broncos: { conf: 'AFC', div: 'West' },
    raiders: { conf: 'AFC', div: 'West' },
    packers: { conf: 'NFC', div: 'North' },
    lions: { conf: 'NFC', div: 'North' },
    bears: { conf: 'NFC', div: 'North' },
    vikings: { conf: 'NFC', div: 'North' },
    buccaneers: { conf: 'NFC', div: 'South' },
    saints: { conf: 'NFC', div: 'South' },
    falcons: { conf: 'NFC', div: 'South' },
    panthers: { conf: 'NFC', div: 'South' },
    sf49ers: { conf: 'NFC', div: 'West' },
    seahawks: { conf: 'NFC', div: 'West' },
    rams: { conf: 'NFC', div: 'West' },
    cardinals: { conf: 'NFC', div: 'West' },
    cowboys: { conf: 'NFC', div: 'East' },
    eagles: { conf: 'NFC', div: 'East' },
    commanders: { conf: 'NFC', div: 'East' },
    giants: { conf: 'NFC', div: 'East' }
};

// Position colors for charts
const positionColors = {
    QB: '#FF6B6B', RB: '#4ECDC4', WR: '#45B7D1', TE: '#96CEB4',
    OT: '#FFEAA7', IOL: '#DDA0DD', EDGE: '#98D8C8', DL: '#F7DC6F',
    LB: '#BB8FCE', CB: '#85C1E9', S: '#F8C471'
};

// Grade colors
const gradeColors = {
    'A+': '#00FF88', 'A': '#00FF88', 'A-': '#00FF88',
    'B+': '#00D4FF', 'B': '#00D4FF', 'B-': '#00D4FF',
    'C+': '#FFD700', 'C': '#FFD700', 'C-': '#FFD700',
    'D+': '#FF6B6B', 'D': '#FF6B6B', 'F': '#FF4757'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTeamGrid('all');
    setupEventListeners();
    updateRecentTeamsDisplay();
    
    // Check for URL parameter to load specific team
    const urlParams = new URLSearchParams(window.location.search);
    const teamParam = urlParams.get('team');
    if (teamParam && teamDraftHistory[teamParam]) {
        showTeamDetail(teamParam);
    }
});

// Setup event listeners
function setupEventListeners() {
    // Conference tabs
    document.querySelectorAll('.conf-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.conf-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderTeamGrid(this.dataset.conference);
        });
    });

    // Search input
    const searchInput = document.getElementById('teamSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterTeams(this.value);
        });
    }

    // Comparison select
    const compareSelect = document.getElementById('compareTeamSelect');
    if (compareSelect) {
        populateCompareSelect();
    }
}

// Render team grid
function renderTeamGrid(conference) {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.entries(teamDraftHistory).forEach(([code, team]) => {
        const meta = teamMetadata[code];
        
        // Filter by conference if needed
        if (conference !== 'all' && conference !== 'recent') {
            if (conference === 'afc' && meta.conf !== 'AFC') return;
            if (conference === 'nfc' && meta.conf !== 'NFC') return;
        }
        
        const card = createTeamCard(code, team);
        grid.appendChild(card);
    });
}

// Create team card element
function createTeamCard(code, team) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.setProperty('--team-color', team.colors.primary);
    card.onclick = () => showTeamDetail(code);
    
    const gradeClass = team.performance.grade.replace('+', '-plus').replace('-', '-minus');
    
    card.innerHTML = `
        <div class="team-helmet" style="background: linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary});">
            ${team.code}
        </div>
        <h4>${team.name.replace(/\s\w+$/, '')}</h4>
        <span class="team-code">${team.code}</span>
        <div class="team-grade grade-${gradeClass.charAt(0).toLowerCase()}">${team.performance.grade}</div>
    `;
    
    return card;
}

// Filter teams by search
function filterTeams(searchTerm) {
    const term = searchTerm.toLowerCase();
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach(card => {
        const teamName = card.querySelector('h4').textContent.toLowerCase();
        const teamCode = card.querySelector('.team-code').textContent.toLowerCase();
        
        if (teamName.includes(term) || teamCode.includes(term)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show team detail view
function showTeamDetail(teamCode) {
    const team = teamDraftHistory[teamCode];
    if (!team) return;
    
    currentTeam = teamCode;
    addToRecentTeams(teamCode);
    
    // Hide hub, show detail
    document.getElementById('teamSelectionHub').classList.add('hidden');
    document.getElementById('teamDetailView').classList.remove('hidden');
    
    // Update page title
    document.title = `${team.name} Draft History | NFL Mock Draft 2026`;
    
    // Render all sections
    renderTeamHeader(team);
    renderPerformanceOverview(team);
    renderYearTabs(team);
    renderDraftClass(team, currentYear);
    renderBestPicks(team);
    renderBiggestMisses(team);
    renderTendencies(team);
    renderCharts(team);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show team hub
function showTeamHub() {
    document.getElementById('teamSelectionHub').classList.remove('hidden');
    document.getElementById('teamDetailView').classList.add('hidden');
    
    // Reset title
    document.title = 'Team Draft History | NFL Mock Draft 2026';
    
    // Destroy charts to prevent memory leaks
    Object.values(charts).forEach(chart => chart.destroy());
    charts = {};
    
    currentTeam = null;
}

// Render team header
function renderTeamHeader(team) {
    const header = document.getElementById('teamDetailHeader');
    const logoContainer = document.getElementById('teamLogoLarge');
    
    logoContainer.innerHTML = team.code;
    logoContainer.style.background = `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`;
    
    document.getElementById('teamName').textContent = team.name;
    document.getElementById('teamMeta').textContent = `Est. ${team.franchiseInfo.established} • ${team.franchiseInfo.championships}x Super Bowl Champion`;
    
    // Generate tags
    const tagsContainer = document.getElementById('teamTags');
    tagsContainer.innerHTML = '';
    
    const tags = [];
    if (team.tendencies.tradeFrequency > 2.5) tags.push('Active Traders');
    if (team.tendencies.mostDraftedPosition === 'QB') tags.push('QB Seekers');
    if (team.performance.grade.startsWith('A')) tags.push('Elite Drafters');
    if (team.performance.hitRate > 0.5) tags.push('Hit Rate Leaders');
    
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'team-tag' + (tag === 'Elite Drafters' ? ' highlight' : '');
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
}

// Render performance overview
function renderPerformanceOverview(team) {
    document.getElementById('hitRate').textContent = Math.round(team.performance.hitRate * 100) + '%';
    document.getElementById('avgPick').textContent = team.performance.avgPickValue.toFixed(1);
    document.getElementById('proBowlers').textContent = team.performance.proBowlers;
    document.getElementById('starters').textContent = Math.round(team.performance.hitRate * 50);
    
    const gradeEl = document.getElementById('overallGrade');
    gradeEl.textContent = team.performance.grade;
    gradeEl.className = 'grade-value grade-' + team.performance.grade.replace('+', '-plus').replace('-', '-minus');
    
    document.getElementById('leagueRank').textContent = `League Rank: ${team.performance.leagueRank}th`;
}

// Render year tabs
function renderYearTabs(team) {
    const container = document.getElementById('yearTabs');
    container.innerHTML = '';
    
    const years = Object.keys(team.drafts).sort((a, b) => b - a);
    
    years.forEach(year => {
        const tab = document.createElement('button');
        tab.className = 'year-tab' + (year == currentYear ? ' active' : '');
        tab.textContent = year;
        tab.onclick = () => {
            currentYear = year;
            document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderDraftClass(team, year);
        };
        container.appendChild(tab);
    });
}

// Render draft class
function renderDraftClass(team, year) {
    const draft = team.drafts[year];
    if (!draft) return;
    
    document.getElementById('draftClassYear').textContent = `${year} Draft Class`;
    
    // Calculate class grade
    const avgGrade = draft.reduce((sum, pick) => {
        const gradeVal = { 'A+': 4.3, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'D+': 1.3, 'D': 1.0, 'F': 0 }[pick.grade] || 3;
        return sum + gradeVal;
    }, 0) / draft.length;
    
    const gradeLetter = avgGrade >= 4.0 ? 'A' : avgGrade >= 3.0 ? 'B' : avgGrade >= 2.0 ? 'C' : 'D';
    const classGradeEl = document.getElementById('classGrade');
    classGradeEl.textContent = gradeLetter;
    classGradeEl.style.background = gradeColors[gradeLetter] || '#888';
    classGradeEl.style.color = '#000';
    
    // Render picks
    const picksList = document.getElementById('draftPicksList');
    picksList.innerHTML = '';
    
    draft.forEach(pick => {
        const item = document.createElement('div');
        item.className = 'draft-pick-item';
        
        const gradeBg = gradeColors[pick.grade] || '#888';
        
        item.innerHTML = `
            <div class="pick-number">
                <span class="pick-round">R${pick.round}</span>
                <span class="pick-overall">${pick.pick}</span>
            </div>
            <div class="pick-info">
                <div class="pick-player">${pick.player}</div>
                <div class="pick-details">
                    <span class="pick-position">${pick.position}</span>
                    ${pick.school}
                </div>
                ${pick.analysis ? `<div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">${pick.analysis}</div>` : ''}
            </div>
            <div class="pick-grade" style="background: ${gradeBg}; color: ${pick.grade.startsWith('A') || pick.grade.startsWith('B') ? '#000' : '#fff'};">${pick.grade}</div>
        `;
        
        picksList.appendChild(item);
    });
}

// Render best picks
function renderBestPicks(team) {
    const container = document.getElementById('bestPicksList');
    container.innerHTML = '';
    
    team.bestPicks.forEach((pick, index) => {
        const card = document.createElement('div');
        card.className = 'pick-card';
        card.innerHTML = `
            <div class="pick-rank">${index + 1}</div>
            <div class="pick-card-info">
                <div class="pick-card-name">${pick.player}</div>
                <div class="pick-card-meta">${pick.year} - Round ${pick.round}, Pick ${pick.pick}</div>
                <div class="pick-card-accolades">${pick.accolades.join(' • ')}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render biggest misses
function renderBiggestMisses(team) {
    const container = document.getElementById('biggestMissesList');
    container.innerHTML = '';
    
    team.biggestMisses.forEach((pick, index) => {
        const card = document.createElement('div');
        card.className = 'pick-card';
        card.innerHTML = `
            <div class="pick-rank">${index + 1}</div>
            <div class="pick-card-info">
                <div class="pick-card-name">${pick.player}</div>
                <div class="pick-card-meta">${pick.year} - Round ${pick.round}, Pick ${pick.pick}</div>
                <div class="pick-card-reason">${pick.reason}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render tendencies
function renderTendencies(team) {
    document.getElementById('mostDraftedPos').textContent = team.tendencies.mostDraftedPosition;
    document.getElementById('tradeFreq').textContent = team.tendencies.tradeFrequency.toFixed(1);
    document.getElementById('bestRound').textContent = `Round ${team.tendencies.bestRound}`;
    document.getElementById('commonPicks').textContent = `${team.tendencies.mostDraftedPosition}, EDGE, DL`;
}

// Render charts
function renderCharts(team) {
    // Position Breakdown Chart
    const posCtx = document.getElementById('positionChart');
    if (posCtx) {
        if (charts.position) charts.position.destroy();
        
        const positions = team.tendencies.positionBreakdown || {};
        const labels = Object.keys(positions);
        const data = Object.values(positions);
        const colors = labels.map(pos => positionColors[pos] || '#888');
        
        charts.position = new Chart(posCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#fff', font: { size: 11 } } }
                }
            }
        });
    }
    
    // Hit Rate by Round (simulated based on best round)
    const roundCtx = document.getElementById('roundChart');
    if (roundCtx) {
        if (charts.round) charts.round.destroy();
        
        const bestRound = team.tendencies.bestRound;
        const hitRates = [0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15];
        hitRates[bestRound - 1] = team.tendencies.bestRoundRate || 0.55;
        
        charts.round = new Chart(roundCtx, {
            type: 'bar',
            data: {
                labels: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'],
                datasets: [{
                    label: 'Hit Rate %',
                    data: hitRates.map(r => Math.round(r * 100)),
                    backgroundColor: hitRates.map((_, i) => i === bestRound - 1 ? '#00ff88' : '#00d4ff'),
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 80, ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    x: { ticks: { color: '#fff' }, grid: { display: false } }
                }
            }
        });
    }
    
    // Grade Trend Chart
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        if (charts.trend) charts.trend.destroy();
        
        const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
        
        charts.trend = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Draft Grade',
                    data: team.gradeTrend,
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#00d4ff',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 0, max: 5, ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    x: { ticks: { color: '#fff' }, grid: { display: false } }
                }
            }
        });
    }
}

// Populate comparison select
function populateCompareSelect() {
    const select = document.getElementById('compareTeamSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">Select a team to compare...</option>';
    
    Object.entries(teamDraftHistory).forEach(([code, team]) => {
        if (code !== currentTeam) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = team.name;
            select.appendChild(option);
        }
    });
}

// Compare teams
function compareTeams() {
    const compareCode = document.getElementById('compareTeamSelect').value;
    if (!compareCode || !currentTeam) return;
    
    const team1 = teamDraftHistory[currentTeam];
    const team2 = teamDraftHistory[compareCode];
    
    const resultsContainer = document.getElementById('comparisonResults');
    resultsContainer.classList.remove('hidden');
    
    const metrics = [
        { name: 'Hit Rate', team1: Math.round(team1.performance.hitRate * 100) + '%', team2: Math.round(team2.performance.hitRate * 100) + '%', winner: team1.performance.hitRate > team2.performance.hitRate ? 1 : 2 },
        { name: 'Pro Bowlers', team1: team1.performance.proBowlers, team2: team2.performance.proBowlers, winner: team1.performance.proBowlers > team2.performance.proBowlers ? 1 : 2 },
        { name: 'Avg Pick Value', team1: team1.performance.avgPickValue.toFixed(1), team2: team2.performance.avgPickValue.toFixed(1), winner: team1.performance.avgPickValue > team2.performance.avgPickValue ? 1 : 2 },
        { name: 'Overall Grade', team1: team1.performance.grade, team2: team2.performance.grade, winner: team1.performance.grade.charCodeAt(0) < team2.performance.grade.charCodeAt(0) ? 1 : 2 },
        { name: 'Trade Frequency', team1: team1.tendencies.tradeFrequency.toFixed(1), team2: team2.tendencies.tradeFrequency.toFixed(1), winner: 0 }
    ];
    
    let html = `
        <div class="comparison-header">
            <span class="comparison-title">${team1.name} vs ${team2.name}</span>
            <span class="comparison-winner">Compare 2015-2025</span>
        </div>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Metric</th>
                    <th>${team1.code}</th>
                    <th>${team2.code}</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    metrics.forEach(m => {
        const winnerName = m.winner === 1 ? team1.code : m.winner === 2 ? team2.code : 'Tie';
        html += `
            <tr>
                <td>${m.name}</td>
                <td class="${m.winner === 1 ? 'winner' : ''}">${m.team1}</td>
                <td class="${m.winner === 2 ? 'winner' : ''}">${m.team2}</td>
                <td>${winnerName}</td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    resultsContainer.innerHTML = html;
}

// Add to recent teams
function addToRecentTeams(teamCode) {
    // Remove if already exists
    recentTeams = recentTeams.filter(t => t !== teamCode);
    // Add to front
    recentTeams.unshift(teamCode);
    // Keep only last 5
    recentTeams = recentTeams.slice(0, 5);
    
    localStorage.setItem('recentTeams', JSON.stringify(recentTeams));
    updateRecentTeamsDisplay();
}

// Update recent teams display
function updateRecentTeamsDisplay() {
    const container = document.getElementById('recentChips');
    if (!container || recentTeams.length === 0) return;
    
    if (recentTeams.length === 0) {
        container.innerHTML = '<span class="no-recent">No teams viewed recently</span>';
        return;
    }
    
    container.innerHTML = '';
    recentTeams.forEach(code => {
        const team = teamDraftHistory[code];
        if (!team) return;
        
        const chip = document.createElement('div');
        chip.className = 'recent-chip';
        chip.onclick = () => showTeamDetail(code);
        chip.innerHTML = `
            <div class="chip-helmet" style="background: linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary});">${team.code}</div>
            <span>${team.name.split(' ').pop()}</span>
        `;
        container.appendChild(chip);
    });
}

// Utility functions for external use
function getTeamDraftTrend(teamCode) {
    const team = teamDraftHistory[teamCode];
    if (!team) return null;
    
    const trend = team.gradeTrend;
    const improving = trend[trend.length - 1] > trend[0];
    const avg = trend.reduce((a, b) => a + b, 0) / trend.length;
    
    return { trend, improving, average: avg.toFixed(2) };
}

function getBestValuePicks(teamCode, limit = 5) {
    const team = teamDraftHistory[teamCode];
    if (!team) return [];
    
    return team.bestPicks
        .filter(p => p.round >= 3)
        .slice(0, limit);
}

function getBiggestMisses(teamCode, limit = 5) {
    const team = teamDraftHistory[teamCode];
    if (!team) return [];
    
    return team.biggestMisses.slice(0, limit);
}

function calculateTeamDraftGrade(teamCode, year) {
    const team = teamDraftHistory[teamCode];
    if (!team || !team.drafts[year]) return null;
    
    const draft = team.drafts[year];
    const gradeValues = { 'A+': 4.3, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'D+': 1.3, 'D': 1.0, 'F': 0 };
    
    const avg = draft.reduce((sum, pick) => sum + (gradeValues[pick.grade] || 3), 0) / draft.length;
    
    return avg >= 4.0 ? 'A' : avg >= 3.0 ? 'B' : avg >= 2.0 ? 'C' : 'D';
}

// Export functions
window.showTeamDetail = showTeamDetail;
window.showTeamHub = showTeamHub;
window.compareTeams = compareTeams;
window.getTeamDraftTrend = getTeamDraftTrend;
window.getBestValuePicks = getBestValuePicks;
window.getBiggestMisses = getBiggestMisses;
window.calculateTeamDraftGrade = calculateTeamDraftGrade;

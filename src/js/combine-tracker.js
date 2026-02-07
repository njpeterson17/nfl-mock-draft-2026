// ==========================================
// NFL COMBINE & PRO DAY TRACKER
// Main JavaScript functionality
// ==========================================

// Global state
let currentTab = 'dashboard';
let currentDrillDay = 'day1';
let charts = {};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initCombineTracker();
});

function initCombineTracker() {
    renderSchedule();
    renderLeaderboards();
    initCharts();
    renderMeasurements();
    renderDrills('day1');
    renderRAS();
    renderFreaksList();
    renderStockMovers();
    renderProDays();
}

// ==========================================
// TAB NAVIGATION
// ==========================================

function showCombineTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.combine-nav .nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.nav-tab').classList.add('active');

    // Update tab content
    document.querySelectorAll('.combine-tab').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;

    // Refresh charts if needed
    if (tabName === 'dashboard' && charts.fortyByPosition) {
        charts.fortyByPosition.update();
    }
}

// ==========================================
// SCHEDULE PANEL
// ==========================================

function renderSchedule() {
    const grid = document.getElementById('scheduleGrid');
    if (!grid) return;

    const today = new Date('2026-03-01'); // Simulating current date

    grid.innerHTML = combineData.schedule.map(day => {
        const dayDate = new Date('2026-' + day.date.split(' ')[0] + '-' + day.date.split(' ')[1]);
        const isToday = dayDate.toDateString() === today.toDateString();
        const statusClass = day.status === 'completed' ? 'completed' : isToday ? 'today' : '';
        const statusText = day.status === 'completed' ? 'Completed' : isToday ? 'LIVE NOW' : 'Upcoming';
        const statusClassText = day.status === 'completed' ? 'completed' : isToday ? 'live' : 'upcoming';

        return `
            <div class="schedule-card ${statusClass}">
                <div class="schedule-day">Day ${day.day} - ${day.dayName}</div>
                <div class="schedule-date">${day.date}</div>
                <div class="schedule-positions">${day.positions}</div>
                <div class="schedule-status ${statusClassText}">${statusText}</div>
            </div>
        `;
    }).join('');
}

// ==========================================
// LEADERBOARDS
// ==========================================

function renderLeaderboards() {
    // Fastest 40
    const fastest40 = [...combineData.players]
        .filter(p => p.drills.forty && p.drills.forty.result)
        .sort((a, b) => a.drills.forty.result - b.drills.forty.result)
        .slice(0, 5);

    renderLeaderboardList('fastest40List', fastest40, 'drills.forty.result', 
        v => v.toFixed(2) + 's', 
        v => v <= 4.40 ? 'gold' : v <= 4.50 ? 'silver' : 'bronze'
    );

    // Best Vertical
    const bestVertical = [...combineData.players]
        .filter(p => p.drills.vertical && p.drills.vertical.result)
        .sort((a, b) => b.drills.vertical.result - a.drills.vertical.result)
        .slice(0, 5);

    renderLeaderboardList('bestVerticalList', bestVertical, 'drills.vertical.result', 
        v => v.toFixed(1) + '"',
        v => v >= 38 ? 'gold' : v >= 36 ? 'silver' : 'bronze'
    );

    // Best Broad Jump
    const bestBroad = [...combineData.players]
        .filter(p => p.drills.broad && p.drills.broad.result)
        .sort((a, b) => b.drills.broad.result - a.drills.broad.result)
        .slice(0, 5);

    renderLeaderboardList('bestBroadList', bestBroad, 'drills.broad.result', 
        v => Math.floor(v / 12) + "'" + (v % 12) + '"',
        v => v >= 130 ? 'gold' : v >= 124 ? 'silver' : 'bronze'
    );

    // Top RAS
    const topRAS = [...combineData.players]
        .filter(p => p.ras)
        .sort((a, b) => b.ras - a.ras)
        .slice(0, 5);

    renderLeaderboardList('topRasList', topRAS, 'ras', 
        v => v.toFixed(2),
        v => v >= 9.5 ? 'gold' : v >= 9.0 ? 'silver' : 'bronze'
    );
}

function renderLeaderboardList(elementId, players, valuePath, formatFn, rankFn) {
    const list = document.getElementById(elementId);
    if (!list) return;

    list.innerHTML = players.map((player, index) => {
        const value = valuePath.split('.').reduce((obj, key) => obj?.[key], player);
        const rank = rankFn ? rankFn(value) : index < 3 ? ['gold', 'silver', 'bronze'][index] : 'other';
        
        return `
            <div class="leaderboard-item" onclick="showPlayerModal('${player.id}')">
                <div class="leaderboard-rank ${rank}">${index + 1}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${player.name}</div>
                    <div class="leaderboard-meta">${player.position} • ${player.school}</div>
                </div>
                <div class="leaderboard-value">${formatFn(value)}</div>
            </div>
        `;
    }).join('');
}

// ==========================================
// CHARTS
// ==========================================

function initCharts() {
    initFortyByPositionChart();
    initRASByPositionChart();
}

function initFortyByPositionChart() {
    const ctx = document.getElementById('fortyByPositionChart');
    if (!ctx) return;

    const positions = ['QB', 'RB', 'WR', 'TE', 'OT', 'EDGE', 'LB', 'CB', 'S'];
    const averages = positions.map(pos => {
        const players = combineData.players.filter(p => p.position === pos && p.drills.forty?.result);
        if (players.length === 0) return 0;
        return players.reduce((sum, p) => sum + p.drills.forty.result, 0) / players.length;
    });

    charts.fortyByPosition = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: positions,
            datasets: [{
                label: 'Avg 40-Yard Dash (seconds)',
                data: averages,
                backgroundColor: 'rgba(0, 212, 255, 0.6)',
                borderColor: 'rgba(0, 212, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 4.2,
                    max: 5.5,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#8b8b9a' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#8b8b9a' }
                }
            }
        }
    });
}

function initRASByPositionChart() {
    const ctx = document.getElementById('rasByPositionChart');
    if (!ctx) return;

    const positions = ['QB', 'RB', 'WR', 'TE', 'OT', 'EDGE', 'LB', 'CB', 'S'];
    const averages = positions.map(pos => {
        const players = combineData.players.filter(p => p.position === pos && p.ras);
        if (players.length === 0) return 0;
        return players.reduce((sum, p) => sum + p.ras, 0) / players.length;
    });

    charts.rasByPosition = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: positions,
            datasets: [{
                label: 'Avg RAS Score',
                data: averages,
                backgroundColor: 'rgba(255, 215, 0, 0.6)',
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 6,
                    max: 10,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#8b8b9a' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#8b8b9a' }
                }
            }
        }
    });
}

// ==========================================
// MEASUREMENTS TABLE
// ==========================================

function renderMeasurements() {
    const tbody = document.getElementById('measurementsTableBody');
    if (!tbody) return;

    const sortedPlayers = [...combineData.players].sort((a, b) => a.name.localeCompare(b.name));

    tbody.innerHTML = sortedPlayers.map((player, index) => {
        const rasClass = player.ras >= 9.5 ? 'ras-elite' : player.ras >= 8.0 ? 'ras-good' : player.ras >= 5.0 ? 'ras-average' : 'ras-below';
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="player-cell">
                        <div class="player-avatar">${player.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                            <div class="player-name">${player.name}</div>
                        </div>
                    </div>
                </td>
                <td><span class="badge position">${player.position}</span></td>
                <td>${player.school}</td>
                <td>${player.height}</td>
                <td>${player.weight}</td>
                <td>${player.hand}"</td>
                <td>${player.arm}"</td>
                <td>${player.wingspan}"</td>
                <td><span class="ras-badge ${rasClass}">${player.ras.toFixed(2)}</span></td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn" onclick="showPlayerModal('${player.id}')" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" onclick="showVideoModal('${player.id}')" title="Watch Video">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function filterMeasurements() {
    const positionFilter = document.getElementById('measurePositionFilter')?.value || 'all';
    const schoolFilter = document.getElementById('measureSchoolFilter')?.value?.toLowerCase() || '';
    const sortBy = document.getElementById('measureSortBy')?.value || 'name';

    let filtered = combineData.players.filter(p => {
        if (positionFilter !== 'all' && p.position !== positionFilter) return false;
        if (schoolFilter && !p.school.toLowerCase().includes(schoolFilter)) return false;
        return true;
    });

    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'height': return b.heightInches - a.heightInches;
            case 'weight': return b.weight - a.weight;
            case 'hand': return b.hand - a.hand;
            case 'arm': return b.arm - a.arm;
            default: return a.name.localeCompare(b.name);
        }
    });

    const tbody = document.getElementById('measurementsTableBody');
    if (!tbody) return;

    tbody.innerHTML = filtered.map((player, index) => {
        const rasClass = player.ras >= 9.5 ? 'ras-elite' : player.ras >= 8.0 ? 'ras-good' : player.ras >= 5.0 ? 'ras-average' : 'ras-below';
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="player-cell">
                        <div class="player-avatar">${player.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                            <div class="player-name">${player.name}</div>
                        </div>
                    </div>
                </td>
                <td><span class="badge position">${player.position}</span></td>
                <td>${player.school}</td>
                <td>${player.height}</td>
                <td>${player.weight}</td>
                <td>${player.hand}"</td>
                <td>${player.arm}"</td>
                <td>${player.wingspan}"</td>
                <td><span class="ras-badge ${rasClass}">${player.ras.toFixed(2)}</span></td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn" onclick="showPlayerModal('${player.id}')" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" onclick="showVideoModal('${player.id}')" title="Watch Video">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function exportMeasurements(format) {
    const data = combineData.players.map(p => ({
        Name: p.name,
        Position: p.position,
        School: p.school,
        Height: p.height,
        Weight: p.weight,
        Hand: p.hand,
        Arm: p.arm,
        Wingspan: p.wingspan,
        Forty: p.drills.forty?.result || '',
        Vertical: p.drills.vertical?.result || '',
        Broad: p.drills.broad?.result || '',
        ThreeCone: p.drills.threeCone?.result || '',
        Shuttle: p.drills.shuttle?.result || '',
        Bench: p.drills.bench?.result || '',
        RAS: p.ras
    }));

    if (format === 'csv') {
        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '2026_nfl_combine_data.csv';
        a.click();
        URL.revokeObjectURL(url);
    } else if (format === 'json') {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '2026_nfl_combine_data.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// ==========================================
// DRILLS BY DAY
// ==========================================

function showDayDrills(day) {
    // Update tab buttons
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.day-tab').classList.add('active');

    currentDrillDay = day;
    renderDrills(day);
}

function renderDrills(day) {
    const content = document.getElementById('drillsContent');
    if (!content) return;

    const dayData = combineData.schedule.find(d => d.day === parseInt(day.replace('day', '')));
    if (!dayData) return;

    const dayPlayers = combineData.players.filter(p => dayData.groups.includes(p.position));

    // Group drills by type for each position
    content.innerHTML = dayData.groups.map(pos => {
        const posPlayers = dayPlayers.filter(p => p.position === pos);
        
        return `
            <div class="drill-section">
                <h3 class="drill-section-title">${pos} Drills</h3>
                <table class="drill-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>School</th>
                            <th>40-Yard</th>
                            <th>Vertical</th>
                            <th>Broad</th>
                            <th>3-Cone</th>
                            <th>Shuttle</th>
                            ${pos !== 'QB' ? '<th>Bench</th>' : ''}
                            <th>RAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${posPlayers.map(player => renderDrillRow(player)).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }).join('');
}

function renderDrillRow(player) {
    const d = player.drills;
    const getGrade = (drill) => {
        if (!drill) return '';
        const diff = drill.projected - drill.result;
        if (Math.abs(diff) < 0.03 || Math.abs(diff) < 1) return '<span class="drill-grade meet">✓ Meet</span>';
        if (diff > 0) return '<span class="drill-grade beat">↑ Beat</span>';
        if (diff > -0.05 || diff > -2) return '<span class="drill-grade slight">~ Slight</span>';
        return '<span class="drill-grade miss">↓ Miss</span>';
    };

    return `
        <tr onclick="showPlayerModal('${player.id}')" style="cursor: pointer;">
            <td><strong>${player.name}</strong></td>
            <td>${player.school}</td>
            <td>
                <div class="drill-result">${d.forty?.result?.toFixed(2) || '-'}</div>
                ${getGrade(d.forty)}
            </td>
            <td>
                <div class="drill-result">${d.vertical?.result ? d.vertical.result + '"' : '-'}</div>
                ${getGrade(d.vertical)}
            </td>
            <td>
                <div class="drill-result">${d.broad?.result ? Math.floor(d.broad.result/12) + "'" + (d.broad.result%12) + '"' : '-'}</div>
                ${getGrade(d.broad)}
            </td>
            <td>
                <div class="drill-result">${d.threeCone?.result?.toFixed(2) || '-'}</div>
                ${getGrade(d.threeCone)}
            </td>
            <td>
                <div class="drill-result">${d.shuttle?.result?.toFixed(2) || '-'}</div>
                ${getGrade(d.shuttle)}
            </td>
            ${player.position !== 'QB' ? `
                <td>
                    <div class="drill-result">${d.bench?.result || '-'}</div>
                    ${getGrade(d.bench)}
                </td>
            ` : ''}
            <td><span class="ras-badge ${player.ras >= 9.5 ? 'ras-elite' : player.ras >= 8.0 ? 'ras-good' : 'ras-average'}">${player.ras.toFixed(2)}</span></td>
        </tr>
    `;
}

// ==========================================
// RAS SCORES
// ==========================================

function renderRAS() {
    const grid = document.getElementById('rasGrid');
    if (!grid) return;

    const sorted = [...combineData.players].sort((a, b) => b.ras - a.ras);

    grid.innerHTML = sorted.map(player => {
        const d = player.drills;
        const scoreColor = player.ras >= 9.5 ? 'linear-gradient(90deg, #ffd700, #ffb800)' : 
                          player.ras >= 8.0 ? 'linear-gradient(90deg, #00ff88, #00cc6a)' :
                          player.ras >= 5.0 ? 'linear-gradient(90deg, #00d4ff, #00a8cc)' : '#ff4757';

        return `
            <div class="ras-card" onclick="showPlayerModal('${player.id}')">
                <div class="ras-card-header">
                    <div class="ras-card-avatar">${player.name.split(' ').map(n => n[0]).join('')}</div>
                    <div class="ras-card-info">
                        <h4>${player.name}</h4>
                        <span>${player.position} • ${player.school}</span>
                    </div>
                </div>
                <div class="ras-score-display">
                    <div class="ras-score-value" style="color: ${player.ras >= 9.5 ? '#ffd700' : player.ras >= 8.0 ? '#00ff88' : '#00d4ff'}">${player.ras.toFixed(2)}</div>
                    <div class="ras-score-bar">
                        <div class="ras-score-fill" style="width: ${player.ras * 10}%; background: ${scoreColor};"></div>
                    </div>
                </div>
                <div class="ras-breakdown">
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.forty?.result?.toFixed(2) || '-'}</div>
                        <div class="ras-breakdown-label">40</div>
                    </div>
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.vertical?.result ? d.vertical.result + '"' : '-'}</div>
                        <div class="ras-breakdown-label">Vert</div>
                    </div>
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.broad?.result ? Math.floor(d.broad.result/12) + "'" + (d.broad.result%12) + '"' : '-'}</div>
                        <div class="ras-breakdown-label">Broad</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterRAS() {
    const position = document.getElementById('rasPositionFilter')?.value || 'all';
    const minRAS = parseFloat(document.getElementById('rasMinFilter')?.value || 0);

    let filtered = combineData.players.filter(p => {
        if (position !== 'all' && p.position !== position) return false;
        if (p.ras < minRAS) return false;
        return true;
    });

    filtered.sort((a, b) => b.ras - a.ras);

    const grid = document.getElementById('rasGrid');
    if (!grid) return;

    grid.innerHTML = filtered.map(player => {
        const d = player.drills;
        const scoreColor = player.ras >= 9.5 ? 'linear-gradient(90deg, #ffd700, #ffb800)' : 
                          player.ras >= 8.0 ? 'linear-gradient(90deg, #00ff88, #00cc6a)' :
                          player.ras >= 5.0 ? 'linear-gradient(90deg, #00d4ff, #00a8cc)' : '#ff4757';

        return `
            <div class="ras-card" onclick="showPlayerModal('${player.id}')">
                <div class="ras-card-header">
                    <div class="ras-card-avatar">${player.name.split(' ').map(n => n[0]).join('')}</div>
                    <div class="ras-card-info">
                        <h4>${player.name}</h4>
                        <span>${player.position} • ${player.school}</span>
                    </div>
                </div>
                <div class="ras-score-display">
                    <div class="ras-score-value" style="color: ${player.ras >= 9.5 ? '#ffd700' : player.ras >= 8.0 ? '#00ff88' : '#00d4ff'}">${player.ras.toFixed(2)}</div>
                    <div class="ras-score-bar">
                        <div class="ras-score-fill" style="width: ${player.ras * 10}%; background: ${scoreColor};"></div>
                    </div>
                </div>
                <div class="ras-breakdown">
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.forty?.result?.toFixed(2) || '-'}</div>
                        <div class="ras-breakdown-label">40</div>
                    </div>
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.vertical?.result ? d.vertical.result + '"' : '-'}</div>
                        <div class="ras-breakdown-label">Vert</div>
                    </div>
                    <div class="ras-breakdown-item">
                        <div class="ras-breakdown-value">${d.broad?.result ? Math.floor(d.broad.result/12) + "'" + (d.broad.result%12) + '"' : '-'}</div>
                        <div class="ras-breakdown-label">Broad</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateRasRangeLabel() {
    const value = document.getElementById('rasMinFilter')?.value || 0;
    const label = document.getElementById('rasRangeLabel');
    if (label) label.textContent = parseFloat(value).toFixed(1);
}

// ==========================================
// FREAKS LIST
// ==========================================

function renderFreaksList() {
    const list = document.getElementById('freaksList');
    if (!list) return;

    const freaks = combineData.players
        .filter(p => p.ras >= 9.5)
        .sort((a, b) => b.ras - a.ras);

    list.innerHTML = freaks.map((player, index) => {
        const d = player.drills;
        return `
            <div class="freak-card" onclick="showPlayerModal('${player.id}')">
                <div class="freak-rank">${index + 1}</div>
                <div class="freak-info">
                    <h3>${player.name}</h3>
                    <div class="position-school">${player.position} • ${player.school}</div>
                </div>
                <div class="freak-ras">
                    <div class="freak-ras-value">${player.ras.toFixed(2)}</div>
                    <div class="freak-ras-label">RAS</div>
                </div>
                <div class="freak-measurables">
                    <div class="freak-measurable">
                        <div class="freak-measurable-value">${d.forty?.result?.toFixed(2) || '-'}</div>
                        <div class="freak-measurable-label">40</div>
                    </div>
                    <div class="freak-measurable">
                        <div class="freak-measurable-value">${d.vertical?.result ? d.vertical.result + '"' : '-'}</div>
                        <div class="freak-measurable-label">Vert</div>
                    </div>
                    <div class="freak-measurable">
                        <div class="freak-measurable-value">${d.broad?.result ? Math.floor(d.broad.result/12) + "'" + (d.broad.result%12) + '"' : '-'}</div>
                        <div class="freak-measurable-label">Broad</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// STOCK MOVERS
// ==========================================

function renderStockMovers() {
    const risers = combineData.players
        .filter(p => p.stockChange > 0)
        .sort((a, b) => b.stockChange - a.stockChange)
        .slice(0, 8);

    const fallers = combineData.players
        .filter(p => p.stockChange < 0)
        .sort((a, b) => a.stockChange - b.stockChange)
        .slice(0, 8);

    renderStockList('stockRisersList', risers, 'up');
    renderStockList('stockFallersList', fallers, 'down');
}

function renderStockList(elementId, players, direction) {
    const list = document.getElementById(elementId);
    if (!list) return;

    list.innerHTML = players.map((player, index) => {
        const arrow = direction === 'up' ? '↑' : '↓';
        return `
            <div class="stock-item" onclick="showPlayerModal('${player.id}')">
                <div class="stock-rank-change">
                    <div class="stock-change-value ${direction}">${arrow}${Math.abs(player.stockChange)}</div>
                    <div class="stock-change-label">spots</div>
                </div>
                <div class="stock-player-info">
                    <h4>${player.name} <span style="color: var(--text-secondary); font-weight: 400;">${player.position}</span></h4>
                    <div class="stock-reason">${player.notes}</div>
                </div>
                <div class="stock-current-rank">
                    <div class="stock-rank-label">RAS</div>
                    <div class="stock-rank-value">${player.ras.toFixed(2)}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// PRO DAYS
// ==========================================

function renderProDays() {
    const timeline = document.getElementById('prodayTimeline');
    if (!timeline) return;

    const today = new Date('2026-03-01');

    timeline.innerHTML = combineData.proDays.map(proday => {
        const prodayDate = new Date('2026-' + proday.date.split(' ')[0] + '-' + proday.date.split(' ')[1]);
        const isToday = prodayDate.toDateString() === today.toDateString();
        const statusClass = proday.completed ? 'completed' : isToday ? 'today' : '';

        return `
            <div class="proday-card ${statusClass}">
                <div class="proday-date">${proday.date}</div>
                <div class="proday-school">${proday.school}</div>
                <ul class="proday-players">
                    ${proday.players.map(p => `
                        <li>
                            <span class="proday-status ${p.results === 'Scheduled' ? 'pending' : 'complete'}"></span>
                            <strong>${p.name}</strong>: ${p.results}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }).join('');

    // Recent results
    const grid = document.getElementById('prodayGrid');
    if (!grid) return;

    const completedProDays = combineData.proDays.filter(p => p.completed);
    
    grid.innerHTML = completedProDays.map(proday => `
        <div class="proday-result-card">
            <div class="proday-result-header">
                <span class="proday-result-school">${proday.school}</span>
                <span class="proday-result-date">${proday.date}</span>
            </div>
            ${proday.players.map(p => `
                <div class="proday-result-player">
                    <div>
                        <strong>${p.name}</strong>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">${p.notes}</div>
                    </div>
                    <div style="color: var(--accent);">${p.results}</div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// ==========================================
// MODALS
// ==========================================

function showPlayerModal(playerId) {
    const player = combineData.players.find(p => p.id === playerId);
    if (!player) return;

    const modal = document.getElementById('playerModal');
    const nameEl = document.getElementById('modalPlayerName');
    const bodyEl = document.getElementById('modalPlayerBody');

    nameEl.textContent = `${player.name} - ${player.position}`;

    const d = player.drills;
    const comparisons = historicalComparisons[player.name];

    bodyEl.innerHTML = `
        <div class="player-modal-header">
            <div class="player-modal-avatar">${player.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="player-modal-info">
                <h3>${player.name}</h3>
                <div class="player-modal-meta">${player.position} • ${player.school} • ${player.height} • ${player.weight} lbs</div>
                <div class="player-modal-badges">
                    <span class="badge position">${player.position}</span>
                    <span class="badge ras">RAS: ${player.ras.toFixed(2)}</span>
                </div>
            </div>
        </div>

        <div class="player-measurements-grid">
            <div class="measurement-box">
                <div class="measurement-label">Height</div>
                <div class="measurement-value">${player.height}</div>
            </div>
            <div class="measurement-box">
                <div class="measurement-label">Weight</div>
                <div class="measurement-value">${player.weight}</div>
            </div>
            <div class="measurement-box">
                <div class="measurement-label">Hand</div>
                <div class="measurement-value">${player.hand}"</div>
            </div>
            <div class="measurement-box">
                <div class="measurement-label">Arm</div>
                <div class="measurement-value">${player.arm}"</div>
            </div>
            <div class="measurement-box">
                <div class="measurement-label">Wingspan</div>
                <div class="measurement-value">${player.wingspan}"</div>
            </div>
        </div>

        <h4 style="margin-bottom: 1rem;">Drill Results</h4>
        <table class="player-drills-table">
            <thead>
                <tr>
                    <th>Drill</th>
                    <th>Result</th>
                    <th>Projected</th>
                    <th>Percentile</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                ${d.forty ? `
                    <tr>
                        <td>40-Yard Dash</td>
                        <td><strong>${d.forty.result.toFixed(2)}s</strong></td>
                        <td>${d.forty.projected}s</td>
                        <td>${d.forty.percentile}th</td>
                        <td>${getGradeBadge(d.forty)}</td>
                    </tr>
                ` : ''}
                ${d.vertical ? `
                    <tr>
                        <td>Vertical Jump</td>
                        <td><strong>${d.vertical.result}"</strong></td>
                        <td>${d.vertical.projected}"</td>
                        <td>${d.vertical.percentile}th</td>
                        <td>${getGradeBadge(d.vertical)}</td>
                    </tr>
                ` : ''}
                ${d.broad ? `
                    <tr>
                        <td>Broad Jump</td>
                        <td><strong>${Math.floor(d.broad.result/12)}'${d.broad.result%12}"</strong></td>
                        <td>${Math.floor(d.broad.projected/12)}'${d.broad.projected%12}"</td>
                        <td>${d.broad.percentile}th</td>
                        <td>${getGradeBadge(d.broad)}</td>
                    </tr>
                ` : ''}
                ${d.threeCone ? `
                    <tr>
                        <td>3-Cone</td>
                        <td><strong>${d.threeCone.result.toFixed(2)}s</strong></td>
                        <td>${d.threeCone.projected.toFixed(2)}s</td>
                        <td>${d.threeCone.percentile}th</td>
                        <td>${getGradeBadge(d.threeCone)}</td>
                    </tr>
                ` : ''}
                ${d.shuttle ? `
                    <tr>
                        <td>Shuttle</td>
                        <td><strong>${d.shuttle.result.toFixed(2)}s</strong></td>
                        <td>${d.shuttle.projected.toFixed(2)}s</td>
                        <td>${d.shuttle.percentile}th</td>
                        <td>${getGradeBadge(d.shuttle)}</td>
                    </tr>
                ` : ''}
                ${d.bench ? `
                    <tr>
                        <td>Bench Press</td>
                        <td><strong>${d.bench.result} reps</strong></td>
                        <td>${d.bench.projected} reps</td>
                        <td>${d.bench.percentile}th</td>
                        <td>${getGradeBadge(d.bench)}</td>
                    </tr>
                ` : ''}
            </tbody>
        </table>

        ${comparisons ? `
            <div class="player-comparison-section">
                <h4>Historical Comparison</h4>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>40-Yard</th>
                            <th>Vertical</th>
                            <th>Broad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="highlight">
                            <td>${player.name}</td>
                            <td>${d.forty?.result?.toFixed(2) || '-'}</td>
                            <td>${d.vertical?.result ? d.vertical.result + '"' : '-'}</td>
                            <td>${d.broad?.result ? Math.floor(d.broad.result/12) + "'" + (d.broad.result%12) + '"' : '-'}</td>
                        </tr>
                        ${comparisons.map(comp => `
                            <tr>
                                <td>${comp.name}</td>
                                <td>${comp.forty.toFixed(2)}</td>
                                <td>${comp.vertical}"</td>
                                <td>${Math.floor(comp.broad/12)}'${comp.broad%12}"</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        ` : ''}

        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
            <h4>Scout Notes</h4>
            <p style="color: var(--text-secondary);">${player.notes}</p>
            <div style="margin-top: 1rem;">
                <span style="color: var(--text-secondary);">Draft Stock Impact: </span>
                <span style="color: ${player.stockChange > 0 ? 'var(--success)' : player.stockChange < 0 ? '#ff4757' : 'var(--accent)'}; font-weight: 600;">
                    ${player.stockChange > 0 ? '↑ Rising' : player.stockChange < 0 ? '↓ Falling' : '→ Stable'}
                    ${player.stockChange !== 0 ? ` (${player.stockChange > 0 ? '+' : ''}${player.stockChange} spots)` : ''}
                </span>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function getGradeBadge(drill) {
    const diff = drill.projected - drill.result;
    const isLowerBetter = ['forty', 'threeCone', 'shuttle'].includes(Object.keys(drill).length > 0 ? '' : '');
    
    // For timing drills, lower is better. For jumps/bench, higher is better.
    const isTimeDrill = drill.result < 10; // Simple heuristic
    
    let actualDiff = isTimeDrill ? drill.projected - drill.result : drill.result - drill.projected;
    
    if (Math.abs(actualDiff) < 0.03 || Math.abs(actualDiff) < 1) 
        return '<span class="drill-grade meet">✓ Met</span>';
    if (actualDiff > 0) 
        return '<span class="drill-grade beat">↑ Beat</span>';
    if (actualDiff > -0.05 || actualDiff > -2) 
        return '<span class="drill-grade slight">~ Slight</span>';
    return '<span class="drill-grade miss">↓ Miss</span>';
}

function closePlayerModal() {
    document.getElementById('playerModal')?.classList.remove('active');
}

function showVideoModal(playerId) {
    const player = combineData.players.find(p => p.id === playerId);
    if (!player) return;

    const modal = document.getElementById('videoModal');
    const titleEl = document.getElementById('videoModalTitle');
    const containerEl = document.getElementById('videoContainer');

    titleEl.textContent = `${player.name} - Combine Workout`;
    
    // Placeholder for video - in real implementation would embed YouTube
    containerEl.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: var(--card-bg); border-radius: 8px;">
            <div style="text-align: center; color: var(--text-secondary);">
                <i class="fas fa-play-circle" style="font-size: 4rem; margin-bottom: 1rem; color: var(--accent);"></i>
                <p>Video coming soon</p>
                <p style="font-size: 0.8rem;">${player.name} - ${player.position} - ${player.school}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeVideoModal() {
    document.getElementById('videoModal')?.classList.remove('active');
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Close modals on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePlayerModal();
        closeVideoModal();
        closeCompareModal();
    }
});

// Close modals on background click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// Compare modal placeholder
function closeCompareModal() {
    document.getElementById('compareModal')?.classList.remove('active');
}

// Update total prospects count
document.addEventListener('DOMContentLoaded', function() {
    const totalEl = document.getElementById('totalProspects');
    if (totalEl) {
        totalEl.textContent = `${combineData.players.length} Tracked`;
    }
});

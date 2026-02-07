// Position Rankings JavaScript

let currentPosition = null;
let currentFilter = 'all';
let currentSort = 'rank';
let comparisonChart = null;

// Helper function to generate player image path from name
function getPlayerImagePath(name) {
    const slug = name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[.']/g, '')
        .replace(/jr$/i, '')
        .replace(/iii$/i, '')
        .replace(/ii$/i, '')
        .replace(/-+$/, '')
        .trim();
    return `../images/players/${slug}.jpg`;
}

// Helper function to get player initials for fallback
function getPlayerInitials(name) {
    return name.split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Helper function to format stat labels nicely
function formatStatLabel(key) {
    const labelMap = {
        forty: '40-Yard',
        vertical: 'Vertical',
        broad: 'Broad Jump',
        bench: 'Bench',
        arm: 'Arm Length',
        games: 'Games',
        carries: 'Carries',
        yards: 'Yards',
        avg: 'Avg',
        tds: 'TDs',
        ints: 'INTs',
        catches: 'Catches',
        receptions: 'Rec',
        recYds: 'Rec Yds',
        recTds: 'Rec TDs',
        completion: 'Comp %',
        sacks: 'Sacks',
        tfl: 'TFL',
        tackles: 'Tackles',
        pbus: 'PBUs',
        starts: 'Starts'
    };
    return labelMap[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for position in URL
    const urlParams = new URLSearchParams(window.location.search);
    const posParam = urlParams.get('pos');
    
    if (posParam && positionRankingsData[posParam]) {
        showPositionDetail(posParam);
    } else {
        showAllPositions();
    }
    
    // Setup scroll listener for back to top
    window.addEventListener('scroll', handleScroll);
});

// Show all positions grid
function showAllPositions() {
    currentPosition = null;
    document.getElementById('allPositionsView').style.display = 'block';
    document.getElementById('positionDetailView').style.display = 'none';
    document.getElementById('positionNavFooter').style.display = 'none';
    
    // Update nav
    document.querySelectorAll('.position-nav-item').forEach(item => {
        item.classList.remove('active');
        if (!item.dataset.pos) {
            item.classList.add('active');
        }
    });
}

// Show position detail view
function showPositionDetail(pos) {
    if (!positionRankingsData[pos]) return;
    
    currentPosition = pos;
    const data = positionRankingsData[pos];
    
    // Hide all positions view
    document.getElementById('allPositionsView').style.display = 'none';
    document.getElementById('positionDetailView').style.display = 'block';
    document.getElementById('positionNavFooter').style.display = 'flex';
    
    // Update nav
    document.querySelectorAll('.position-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.pos === pos) {
            item.classList.add('active');
        }
    });
    
    // Update header
    document.getElementById('positionBadge').textContent = pos;
    document.getElementById('positionTitle').textContent = data.position + ' Rankings';
    document.getElementById('positionSubtitle').textContent = data.description;
    
    // Update meta
    document.getElementById('prospectCount').textContent = data.prospectCount;
    document.getElementById('round1Count').textContent = data.round1Count;
    document.getElementById('topGrade').textContent = data.topGrade;
    
    // Update overview cards
    document.getElementById('classStrength').textContent = data.classStrength;
    document.getElementById('biggestSleeper').textContent = data.sleeper;
    document.getElementById('notableRiser').textContent = data.riser;
    document.getElementById('roundProjection').textContent = data.projection;
    
    // Update traits
    const traitsGrid = document.getElementById('traitsGrid');
    traitsGrid.innerHTML = data.traits.map(t => 
        `<span class="trait-tag">${t.name} (${t.weight}%)</span>`
    ).join('');
    
    // Update footer navigation
    updateFooterNavigation(pos);
    
    // Render rankings
    renderRankings();
}

// Update footer navigation links
function updateFooterNavigation(pos) {
    const prevPos = getPrevPosition(pos);
    const nextPos = getNextPosition(pos);
    
    const prevLink = document.getElementById('prevPosition');
    const nextLink = document.getElementById('nextPosition');
    const currentNav = document.getElementById('currentPositionNav');
    
    currentNav.textContent = positionRankingsData[pos].position + ' Rankings';
    
    if (prevPos) {
        prevLink.href = `?pos=${prevPos}`;
        prevLink.style.visibility = 'visible';
        prevLink.querySelector('span').textContent = positionRankingsData[prevPos].position;
    } else {
        prevLink.style.visibility = 'hidden';
    }
    
    if (nextPos) {
        nextLink.href = `?pos=${nextPos}`;
        nextLink.style.visibility = 'visible';
        nextLink.querySelector('span').textContent = positionRankingsData[nextPos].position;
    } else {
        nextLink.style.visibility = 'hidden';
    }
}

// Render rankings table
function renderRankings() {
    if (!currentPosition) return;
    
    const data = positionRankingsData[currentPosition];
    let prospects = [...data.prospects];
    
    // Apply filter
    if (currentFilter !== 'all') {
        switch(currentFilter) {
            case '1':
                prospects = prospects.filter(p => p.round === 1);
                break;
            case '2-3':
                prospects = prospects.filter(p => p.round >= 2 && p.round <= 3);
                break;
            case '4-7':
                prospects = prospects.filter(p => p.round >= 4);
                break;
        }
    }
    
    // Apply sort
    prospects.sort((a, b) => {
        switch(currentSort) {
            case 'grade':
                return parseFloat(b.grade) - parseFloat(a.grade);
            case 'name':
                return a.name.localeCompare(b.name);
            case 'school':
                return a.school.localeCompare(b.school);
            case 'rank':
            default:
                return a.rank - b.rank;
        }
    });
    
    const tbody = document.getElementById('rankingsTableBody');
    tbody.innerHTML = prospects.map((p, index) => {
        const medal = p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : '';
        const gradeClass = parseFloat(p.grade) >= 7.0 ? 'elite' :
                          parseFloat(p.grade) >= 6.5 ? 'round1' :
                          parseFloat(p.grade) >= 6.0 ? 'round2' :
                          parseFloat(p.grade) >= 5.5 ? 'round3' : 'day3';
        const imgPath = getPlayerImagePath(p.name);
        const initials = getPlayerInitials(p.name);

        return `
            <tr>
                <td class="rank-cell">
                    <span class="rank-medal">${medal}</span>
                    <span class="rank-number">${p.rank}</span>
                </td>
                <td class="player-cell">
                    <div class="player-avatar">
                        <img src="${imgPath}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span class="avatar-initials" style="display: none;">${initials}</span>
                    </div>
                    <div class="player-info-cell">
                        <h4>${p.name}</h4>
                        <p class="player-tier">${p.tier}</p>
                    </div>
                </td>
                <td class="school-cell">${p.school}</td>
                <td class="grade-cell">
                    <span class="grade-value ${gradeClass}">${p.grade}</span>
                </td>
                <td class="projection-cell">${p.projection}</td>
                <td class="action-cell">
                    <button class="view-btn" onclick="showProspectDetail('${currentPosition}', ${p.rank - 1})">
                        View
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Filter by round
function filterByRound(round) {
    currentFilter = round;
    
    // Update button states
    document.querySelectorAll('.filter-controls .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderRankings();
}

// Sort rankings
function sortRankings(sortBy) {
    currentSort = sortBy;
    renderRankings();
}

// Show prospect detail modal
function showProspectDetail(pos, index) {
    const prospect = positionRankingsData[pos].prospects[index];
    if (!prospect) return;
    
    const modal = document.getElementById('prospectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Generate stars for metrics
    const getStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);
    
    // Get metric keys for this position
    const metricKeys = Object.keys(prospect.metrics);
    const metricNames = {
        arm: 'Arm', accuracy: 'Accuracy', mobility: 'Mobility', processing: 'Processing', leadership: 'Leadership',
        speed: 'Speed', power: 'Power', vision: 'Vision', receiving: 'Receiving', passPro: 'Pass Pro',
        routeRunning: 'Route Run', hands: 'Hands', contested: 'Contested', yac: 'YAC',
        passPro: 'Pass Pro', runBlock: 'Run Block', athleticism: 'Athleticism', size: 'Size', technique: 'Technique',
        burst: 'Burst', bend: 'Bend', runDefense: 'Run D', moves: 'Moves',
        strength: 'Strength', quickness: 'Quickness', passRush: 'Pass Rush',
        coverage: 'Coverage', blitz: 'Blitz', instincts: 'Instincts', tackling: 'Tackling',
        ballSkills: 'Ball Skills', press: 'Press', zone: 'Zone', tackle: 'Tackle',
        runSupport: 'Run Support'
    };
    
    const imagePath = getPlayerImagePath(prospect.name);
    const initials = getPlayerInitials(prospect.name);

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-player-photo">
                <img src="${imagePath}" alt="${prospect.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="player-initials" style="display: none;">${initials}</div>
            </div>
            <div class="modal-player-info">
                <span class="position-badge">${pos} #${prospect.rank}</span>
                <h2>${prospect.name}</h2>
                <div class="modal-player-meta">
                    <span><i class="fas fa-graduation-cap"></i> ${prospect.school}</span>
                    <span><i class="fas fa-ruler-vertical"></i> ${prospect.height}</span>
                    <span><i class="fas fa-weight-hanging"></i> ${prospect.weight} lbs</span>
                </div>
                <div class="modal-grade">${prospect.grade}</div>
            </div>
        </div>
        
        <div class="modal-stats-section">
            <h4 class="stats-section-header"><i class="fas fa-stopwatch"></i> Combine Metrics ${typeof combineDataActual !== 'undefined' && !combineDataActual ? '<span class="projected-badge">Projected</span>' : ''}</h4>
            <div class="modal-stats">
                ${Object.entries(prospect.stats)
                    .filter(([key]) => ['forty', 'vertical', 'broad', 'bench', 'arm'].includes(key))
                    .map(([key, val]) => `
                    <div class="modal-stat">
                        <div class="modal-stat-value">${val}</div>
                        <div class="modal-stat-label">${formatStatLabel(key)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="modal-stats-section">
            <h4 class="stats-section-header"><i class="fas fa-chart-bar"></i> Production Stats</h4>
            <div class="modal-stats">
                ${Object.entries(prospect.stats)
                    .filter(([key]) => !['forty', 'vertical', 'broad', 'bench', 'arm'].includes(key))
                    .slice(0, 6)
                    .map(([key, val]) => `
                    <div class="modal-stat">
                        <div class="modal-stat-value">${val}</div>
                        <div class="modal-stat-label">${formatStatLabel(key)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h4>One Line Summary</h4>
            <p style="color: var(--text-secondary); line-height: 1.6;">${prospect.oneLineSummary}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div class="modal-section">
                <h4>Strengths</h4>
                <ul class="strengths-list">
                    ${prospect.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>Weaknesses</h4>
                <ul class="weaknesses-list">
                    ${prospect.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="modal-section">
            <h4>Position Metrics</h4>
            <div class="metrics-grid">
                ${metricKeys.map(key => `
                    <div class="metric-item">
                        <div class="metric-name">${metricNames[key] || key}</div>
                        <div class="metric-stars">${getStars(prospect.metrics[key])}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h4>NFL Comparison</h4>
            <p style="color: var(--text-secondary);">${prospect.comparison}</p>
        </div>
        
        <div class="modal-section">
            <h4>Best Fits</h4>
            <p style="color: var(--text-secondary);">${prospect.bestFits.join(', ')}</p>
        </div>
        
        <div class="modal-bottom-line">
            <h4>Bottom Line</h4>
            <p>${prospect.report}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close prospect modal
function closeProspectModal() {
    const modal = document.getElementById('prospectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('prospectModal');
    if (event.target === modal) {
        closeProspectModal();
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle scroll for back to top button
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Compare prospects (optional feature)
function compareProspects(pos, ranks) {
    const data = positionRankingsData[pos];
    const selectedProspects = ranks.map(r => data.prospects[r - 1]).filter(Boolean);
    
    if (selectedProspects.length < 2) return;
    
    // Show comparison section
    document.getElementById('comparisonSection').style.display = 'block';
    
    // Update comparison players
    const container = document.getElementById('comparisonPlayers');
    const colors = ['#00d4ff', '#00ff88', '#ffd700', '#ff6b6b'];
    
    container.innerHTML = selectedProspects.map((p, i) => {
        const imgPath = getPlayerImagePath(p.name);
        const initials = getPlayerInitials(p.name);
        return `
            <div class="comparison-player" onclick="toggleComparisonPlayer(${i})">
                <div class="comparison-player-avatar">
                    <img src="${imgPath}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="avatar-initials" style="display: none;">${initials}</span>
                </div>
                <div class="comparison-player-info">
                    <h5>${p.name}</h5>
                    <span>${p.school}</span>
                </div>
                <div class="comparison-player-color" style="background: ${colors[i]}"></div>
            </div>
        `;
    }).join('');
    
    // Create radar chart
    createComparisonChart(selectedProspects, colors);
}

// Create comparison chart
function createComparisonChart(prospects, colors) {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    if (comparisonChart) {
        comparisonChart.destroy();
    }
    
    // Get metric keys
    const metricKeys = Object.keys(prospects[0].metrics);
    const labels = metricKeys.map(k => k.charAt(0).toUpperCase() + k.slice(1));
    
    const datasets = prospects.map((p, i) => ({
        label: p.name,
        data: metricKeys.map(k => p.metrics[k]),
        backgroundColor: colors[i] + '20',
        borderColor: colors[i],
        pointBackgroundColor: colors[i],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors[i]
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
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1,
                        color: 'var(--text-secondary)'
                    },
                    pointLabels: {
                        color: 'var(--text-primary)',
                        font: { size: 11 }
                    },
                    grid: {
                        color: 'var(--border)'
                    },
                    angleLines: {
                        color: 'var(--border)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'var(--text-primary)',
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProspectModal();
    }
});

// Export functions for global access
window.showPositionDetail = showPositionDetail;
window.filterByRound = filterByRound;
window.sortRankings = sortRankings;
window.showProspectDetail = showProspectDetail;
window.closeProspectModal = closeProspectModal;
window.scrollToTop = scrollToTop;

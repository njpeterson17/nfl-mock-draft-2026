/**
 * ADP (Average Draft Position) Overlay System
 * ============================================
 * Tracks where players are being drafted across all mocks
 * Helps users identify value picks and reaches
 */

// ==========================================
// ADP DATA STRUCTURE
// ==========================================

const adpData = {
    // Top Prospects with ADP data
    "Fernando Mendoza": { 
        adp: 2.3, min: 1, max: 5, count: 156, 
        position: "QB", school: "Indiana",
        lastWeekADP: 2.5, draftedIn: 98
    },
    "Arvell Reese": { 
        adp: 4.1, min: 2, max: 10, count: 142, 
        position: "LB", school: "Ohio State",
        lastWeekADP: 6.2, draftedIn: 94
    },
    "Jeremiyah Love": { 
        adp: 6.7, min: 4, max: 15, count: 138, 
        position: "RB", school: "Notre Dame",
        lastWeekADP: 8.1, draftedIn: 96
    },
    "Carnell Tate": { 
        adp: 5.8, min: 3, max: 12, count: 145, 
        position: "WR", school: "Ohio State",
        lastWeekADP: 5.2, draftedIn: 97
    },
    "Rueben Bain Jr.": { 
        adp: 7.2, min: 5, max: 14, count: 134, 
        position: "EDGE", school: "Miami",
        lastWeekADP: 9.5, draftedIn: 93
    },
    "David Bailey": { 
        adp: 8.9, min: 6, max: 16, count: 129, 
        position: "EDGE", school: "Texas Tech",
        lastWeekADP: 7.8, draftedIn: 91
    },
    "Francis Mauigoa": { 
        adp: 6.3, min: 3, max: 11, count: 141, 
        position: "OT", school: "Miami",
        lastWeekADP: 7.1, draftedIn: 95
    },
    "Sonny Styles": { 
        adp: 15.8, min: 10, max: 25, count: 118, 
        position: "LB", school: "Ohio State",
        lastWeekADP: 18.2, draftedIn: 89
    },
    "Caleb Downs": { 
        adp: 9.6, min: 6, max: 18, count: 132, 
        position: "S", school: "Ohio State",
        lastWeekADP: 12.1, draftedIn: 92
    },
    "Jordyn Tyson": { 
        adp: 11.8, min: 7, max: 20, count: 128, 
        position: "WR", school: "Arizona State",
        lastWeekADP: 14.2, draftedIn: 90
    },
    "Makai Lemon": { 
        adp: 10.5, min: 6, max: 19, count: 131, 
        position: "WR", school: "USC",
        lastWeekADP: 11.8, draftedIn: 91
    },
    "Spencer Fano": { 
        adp: 14.2, min: 9, max: 24, count: 124, 
        position: "OT", school: "Utah",
        lastWeekADP: 16.5, draftedIn: 88
    },
    "Akheem Mesidor": { 
        adp: 16.7, min: 11, max: 26, count: 121, 
        position: "EDGE", school: "Miami",
        lastWeekADP: 15.2, draftedIn: 87
    },
    "Keldric Faulk": { 
        adp: 12.1, min: 8, max: 22, count: 127, 
        position: "EDGE", school: "Auburn",
        lastWeekADP: 13.5, draftedIn: 90
    },
    "Peter Woods": { 
        adp: 9.2, min: 5, max: 17, count: 135, 
        position: "DL", school: "Clemson",
        lastWeekADP: 10.8, draftedIn: 94
    },
    "Jermod McCoy": { 
        adp: 13.1, min: 8, max: 23, count: 126, 
        position: "CB", school: "Tennessee",
        lastWeekADP: 14.8, draftedIn: 89
    },
    "Olaivavega Ioane": { 
        adp: 19.8, min: 14, max: 30, count: 115, 
        position: "IOL", school: "Penn State",
        lastWeekADP: 21.2, draftedIn: 85
    },
    "Kayden McDonald": { 
        adp: 14.6, min: 9, max: 25, count: 123, 
        position: "DL", school: "Ohio State",
        lastWeekADP: 16.1, draftedIn: 88
    },
    "Ty Simpson": { 
        adp: 8.5, min: 2, max: 16, count: 140, 
        position: "QB", school: "Alabama",
        lastWeekADP: 9.8, draftedIn: 93
    },
    "Caleb Lomu": { 
        adp: 17.4, min: 12, max: 28, count: 119, 
        position: "OT", school: "Utah",
        lastWeekADP: 19.1, draftedIn: 86
    },
    "CJ Allen": { 
        adp: 24.6, min: 18, max: 35, count: 108, 
        position: "LB", school: "Georgia",
        lastWeekADP: 26.3, draftedIn: 82
    },
    "Denzel Boston": { 
        adp: 21.3, min: 15, max: 32, count: 112, 
        position: "WR", school: "Washington",
        lastWeekADP: 22.5, draftedIn: 84
    },
    "Mansoor Delane": { 
        adp: 20.5, min: 14, max: 31, count: 114, 
        position: "CB", school: "Virginia Tech",
        lastWeekADP: 23.8, draftedIn: 85
    },
    "Trinidad Chambliss": { 
        adp: 12.4, min: 6, max: 20, count: 130, 
        position: "QB", school: "Ole Miss",
        lastWeekADP: 11.8, draftedIn: 91
    },
    "Drew Allar": { 
        adp: 18.3, min: 13, max: 29, count: 117, 
        position: "QB", school: "Penn State",
        lastWeekADP: 20.1, draftedIn: 87
    },
    "Dillon Thieneman": { 
        adp: 28.4, min: 22, max: 40, count: 102, 
        position: "S", school: "Oregon",
        lastWeekADP: 30.2, draftedIn: 79
    },
    "Cole Payton": { 
        adp: 15.2, min: 10, max: 24, count: 122, 
        position: "QB", school: "North Dakota State",
        lastWeekADP: 17.5, draftedIn: 86
    },
    "Zachariah Branch": { 
        adp: 22.8, min: 16, max: 34, count: 110, 
        position: "WR", school: "Georgia",
        lastWeekADP: 24.1, draftedIn: 83
    },
    "Kenyon Sadiq": { 
        adp: 26.5, min: 19, max: 38, count: 105, 
        position: "TE", school: "Oregon",
        lastWeekADP: 28.3, draftedIn: 81
    },
    "Emmett Johnson": { 
        adp: 27.2, min: 20, max: 39, count: 104, 
        position: "RB", school: "Nebraska",
        lastWeekADP: 25.8, draftedIn: 80
    },
    "Tacario Davis": { 
        adp: 32.1, min: 24, max: 45, count: 98, 
        position: "CB", school: "Arizona",
        lastWeekADP: 34.5, draftedIn: 77
    },
    "Kaleb Johnson": { 
        adp: 29.5, min: 21, max: 42, count: 101, 
        position: "RB", school: "Iowa",
        lastWeekADP: 31.2, draftedIn: 78
    },
    "Carson Beck": { 
        adp: 22.1, min: 16, max: 32, count: 113, 
        position: "QB", school: "Miami",
        lastWeekADP: 24.8, draftedIn: 84
    },
    "Luther Burden III": { 
        adp: 26.8, min: 19, max: 37, count: 106, 
        position: "WR", school: "Missouri",
        lastWeekADP: 28.5, draftedIn: 82
    },
    "Daylen Everette": { 
        adp: 31.2, min: 23, max: 44, count: 99, 
        position: "CB", school: "Georgia",
        lastWeekADP: 33.1, draftedIn: 78
    },
    "Landon Jackson": { 
        adp: 33.8, min: 25, max: 48, count: 96, 
        position: "EDGE", school: "Arkansas",
        lastWeekADP: 35.2, draftedIn: 75
    },
    "Malaki Starks": { 
        adp: 30.5, min: 22, max: 43, count: 100, 
        position: "S", school: "Georgia",
        lastWeekADP: 32.8, draftedIn: 79
    },
    "Jack Sawyer": { 
        adp: 35.2, min: 26, max: 50, count: 94, 
        position: "EDGE", school: "Ohio State",
        lastWeekADP: 36.5, draftedIn: 74
    },
    "Deone Walker": { 
        adp: 34.5, min: 25, max: 49, count: 95, 
        position: "DL", school: "Kentucky",
        lastWeekADP: 33.8, draftedIn: 76
    },
    "Jihaad Campbell": { 
        adp: 36.8, min: 28, max: 52, count: 92, 
        position: "LB", school: "Alabama",
        lastWeekADP: 38.2, draftedIn: 73
    },
    "Maxwell Hairston": { 
        adp: 38.2, min: 29, max: 55, count: 90, 
        position: "CB", school: "Kentucky",
        lastWeekADP: 40.1, draftedIn: 71
    },
    "Mason Taylor": { 
        adp: 40.5, min: 31, max: 58, count: 87, 
        position: "TE", school: "LSU",
        lastWeekADP: 42.3, draftedIn: 69
    },
    "Donovan Jackson": { 
        adp: 42.1, min: 33, max: 60, count: 85, 
        position: "IOL", school: "Ohio State",
        lastWeekADP: 44.2, draftedIn: 68
    },
    "Tyleik Williams": { 
        adp: 39.8, min: 30, max: 56, count: 89, 
        position: "DL", school: "Ohio State",
        lastWeekADP: 41.5, draftedIn: 70
    },
    "Kenneth Grant": { 
        adp: 41.2, min: 32, max: 59, count: 86, 
        position: "DL", school: "Michigan",
        lastWeekADP: 43.1, draftedIn: 69
    },
    "Carson Schwesinger": { 
        adp: 43.5, min: 34, max: 62, count: 84, 
        position: "LB", school: "UCLA",
        lastWeekADP: 45.8, draftedIn: 67
    },
    "Princely Umanmielen": { 
        adp: 44.8, min: 35, max: 64, count: 83, 
        position: "EDGE", school: "Ole Miss",
        lastWeekADP: 46.2, draftedIn: 66
    },
    "Shemar Stewart": { 
        adp: 46.2, min: 36, max: 66, count: 81, 
        position: "DL", school: "Texas A&M",
        lastWeekADP: 48.1, draftedIn: 65
    },
    "Kevin Winston Jr.": { 
        adp: 47.5, min: 37, max: 68, count: 80, 
        position: "S", school: "Penn State",
        lastWeekADP: 49.3, draftedIn: 64
    },
    "Omarion Hampton": { 
        adp: 48.8, min: 38, max: 70, count: 79, 
        position: "RB", school: "North Carolina",
        lastWeekADP: 50.2, draftedIn: 63
    },
    "Dani Dennis-Sutton": { 
        adp: 50.2, min: 40, max: 72, count: 77, 
        position: "EDGE", school: "Penn State",
        lastWeekADP: 51.8, draftedIn: 62
    },
    "Jonah Savaiinaea": { 
        adp: 51.5, min: 41, max: 74, count: 76, 
        position: "IOL", school: "Arizona",
        lastWeekADP: 52.5, draftedIn: 61
    },
    "Jayden Higgins": { 
        adp: 52.8, min: 42, max: 76, count: 75, 
        position: "WR", school: "Iowa State",
        lastWeekADP: 54.1, draftedIn: 60
    },
    "Rod Moore": { 
        adp: 54.1, min: 43, max: 78, count: 74, 
        position: "S", school: "Michigan",
        lastWeekADP: 55.5, draftedIn: 59
    },
    "Jadarian Price": { 
        adp: 55.5, min: 44, max: 80, count: 73, 
        position: "RB", school: "Notre Dame",
        lastWeekADP: 56.8, draftedIn: 58
    },
    "Will Johnson": { 
        adp: 56.8, min: 45, max: 82, count: 72, 
        position: "CB", school: "Michigan",
        lastWeekADP: 58.2, draftedIn: 57
    },
    "Xavier Restrepo": { 
        adp: 58.2, min: 47, max: 85, count: 70, 
        position: "WR", school: "Miami",
        lastWeekADP: 59.5, draftedIn: 56
    },
    "Treveyon Henderson": { 
        adp: 59.5, min: 48, max: 87, count: 69, 
        position: "RB", school: "Ohio State",
        lastWeekADP: 60.8, draftedIn: 55
    },
    "JC Latham": { 
        adp: 61.2, min: 50, max: 90, count: 67, 
        position: "OT", school: "Wisconsin",
        lastWeekADP: 62.5, draftedIn: 54
    },
    "Aireontae Ersery": { 
        adp: 62.8, min: 51, max: 92, count: 66, 
        position: "OT", school: "Minnesota",
        lastWeekADP: 63.8, draftedIn: 53
    },
    "Jahdae Barron": { 
        adp: 64.5, min: 53, max: 95, count: 64, 
        position: "CB", school: "Texas",
        lastWeekADP: 65.2, draftedIn: 52
    }
};

// Mock draft history for ADP calculation simulation
let mockDraftHistory = [];
let currentADPSort = { column: 'adp', direction: 'asc' };

// ==========================================
// ADP CALCULATION FUNCTIONS
// ==========================================

/**
 * Initialize ADP system from localStorage or use default data
 */
function initializeADP() {
    const savedADP = localStorage.getItem('adpData');
    const savedHistory = localStorage.getItem('mockDraftHistory');
    const savedTimestamp = localStorage.getItem('adpLastUpdated');
    
    if (savedADP) {
        try {
            const parsed = JSON.parse(savedADP);
            Object.assign(adpData, parsed);
        } catch (e) {
            console.warn('Failed to parse saved ADP data, using defaults');
        }
    }
    
    if (savedHistory) {
        try {
            mockDraftHistory = JSON.parse(savedHistory);
        } catch (e) {
            mockDraftHistory = [];
        }
    }
    
    // Check if we need to update ADP (weekly update)
    const lastUpdated = savedTimestamp ? new Date(savedTimestamp) : null;
    const now = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    if (!lastUpdated || (now - lastUpdated > oneWeek)) {
        // Simulate server update
        simulateADPUpdate();
    }
    
    // Update ADP stats on page load
    updateADPStats();
}

/**
 * Simulate ADP update from server
 * In production, this would fetch from an API
 */
function simulateADPUpdate() {
    // Add some randomness to ADP to simulate new mock drafts
    Object.keys(adpData).forEach(player => {
        const data = adpData[player];
        // Random fluctuation of +/- 0.5
        const fluctuation = (Math.random() - 0.5);
        data.lastWeekADP = data.adp;
        data.adp = Math.max(1, parseFloat((data.adp + fluctuation).toFixed(1)));
        
        // Update count (simulate new mocks)
        data.count += Math.floor(Math.random() * 5);
    });
    
    saveADPData();
}

/**
 * Refresh ADP data (manual trigger)
 */
function refreshADPData() {
    const btn = document.querySelector('.view-matches-btn i.fa-sync-alt');
    if (btn) {
        btn.classList.add('fa-spin');
        setTimeout(() => btn.classList.remove('fa-spin'), 1000);
    }
    
    simulateADPUpdate();
    filterADPLeaderboard();
    updateADPStats();
    
    // Show notification
    showADPNotification('ADP data refreshed!', 'success');
}

/**
 * Show ADP notification
 */
function showADPNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `adp-notification adp-notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#3b82f6',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: '500',
        animation: 'slideIn 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Save ADP data to localStorage
 */
function saveADPData() {
    localStorage.setItem('adpData', JSON.stringify(adpData));
    localStorage.setItem('mockDraftHistory', JSON.stringify(mockDraftHistory));
    localStorage.setItem('adpLastUpdated', new Date().toISOString());
}

/**
 * Calculate ADP from a set of mock drafts
 * @param {Array} drafts - Array of mock draft objects
 */
function calculateADP(drafts) {
    const playerPicks = {};
    
    // Initialize player data
    Object.keys(adpData).forEach(player => {
        playerPicks[player] = [];
    });
    
    // Collect all pick positions for each player
    drafts.forEach(draft => {
        if (draft.picks) {
            draft.picks.forEach(pick => {
                if (pick.player && playerPicks[pick.player] !== undefined) {
                    playerPicks[pick.player].push(pick.pickNumber);
                }
            });
        }
    });
    
    // Calculate ADP for each player
    Object.keys(playerPicks).forEach(player => {
        const picks = playerPicks[player];
        if (picks.length > 0) {
            const sum = picks.reduce((a, b) => a + b, 0);
            const avg = sum / picks.length;
            const min = Math.min(...picks);
            const max = Math.max(...picks);
            
            adpData[player].adp = parseFloat(avg.toFixed(1));
            adpData[player].min = min;
            adpData[player].max = max;
            adpData[player].count = picks.length;
            adpData[player].draftedIn = Math.round((picks.length / drafts.length) * 100);
        }
    });
    
    saveADPData();
}

/**
 * Get ADP data for a specific player
 * @param {string} playerName - Player's full name
 * @returns {Object|null} ADP data or null if not found
 */
function getADPForPlayer(playerName) {
    return adpData[playerName] || null;
}

/**
 * Get ADP trend for a player
 * @param {string} playerName - Player's full name
 * @returns {Object} Trend data
 */
function getADPTrend(playerName) {
    const data = adpData[playerName];
    if (!data) return { trend: 'unknown', diff: 0, label: 'No Data' };
    
    const diff = data.lastWeekADP - data.adp; // Positive = rising (ADP number went down)
    
    if (diff >= 3) {
        return { trend: 'rising', diff: diff, label: '↑ Rising', class: 'trend-rising' };
    } else if (diff <= -3) {
        return { trend: 'falling', diff: Math.abs(diff), label: '↓ Falling', class: 'trend-falling' };
    } else if (data.count < 10) {
        return { trend: 'new', diff: 0, label: '● New', class: 'trend-new' };
    } else {
        return { trend: 'stable', diff: 0, label: '→ Stable', class: 'trend-stable' };
    }
}

/**
 * Check if a pick is a value pick, reach, or fair
 * @param {string} playerName - Player's full name
 * @param {number} pickNumber - Current pick number
 * @returns {Object} Value assessment
 */
function isValuePick(playerName, pickNumber) {
    const data = adpData[playerName];
    if (!data) return { type: 'unknown', diff: 0, label: 'No ADP Data', class: '' };
    
    const diff = data.adp - pickNumber;
    
    if (diff >= 5) {
        return { 
            type: 'value', 
            diff: diff, 
            label: `↑ Value! (ADP #${data.adp})`, 
            class: 'value-badge',
            shortLabel: '↑ Value'
        };
    } else {
        // Reach and Fair picks don't show a badge
        return { 
            type: 'none', 
            diff: Math.abs(diff), 
            label: '', 
            class: '',
            shortLabel: ''
        };
    }
}

/**
 * Get ADP value class for styling
 * @param {string} playerName - Player's full name
 * @param {number} pickNumber - Current pick number
 * @returns {string} CSS class
 */
function getADPValueClass(playerName, pickNumber) {
    const assessment = isValuePick(playerName, pickNumber);
    return assessment.class;
}

/**
 * Record a player being drafted (for real-time ADP updates)
 * @param {string} playerName - Player's full name
 * @param {number} pickNumber - Pick number
 * @param {string} teamName - Team that drafted the player
 */
function recordPlayerDrafted(playerName, pickNumber, teamName) {
    if (!mockDraftHistory) {
        mockDraftHistory = [];
    }
    
    mockDraftHistory.push({
        player: playerName,
        pick: pickNumber,
        team: teamName,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 1000 entries
    if (mockDraftHistory.length > 1000) {
        mockDraftHistory = mockDraftHistory.slice(-1000);
    }
    
    saveADPData();
}

// ==========================================
// ADP LEADERBOARD FUNCTIONS
// ==========================================

/**
 * Filter and render ADP Leaderboard
 */
function filterADPLeaderboard() {
    const positionFilter = document.getElementById('adpPositionFilter')?.value || 'all';
    const searchTerm = document.getElementById('adpSearchInput')?.value?.toLowerCase() || '';
    
    let players = Object.entries(adpData).map(([name, data]) => ({
        name,
        ...data,
        trend: getADPTrend(name)
    }));
    
    // Apply position filter
    if (positionFilter !== 'all') {
        players = players.filter(p => p.position === positionFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        players = players.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.school.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply current sort
    players = sortPlayers(players, currentADPSort.column, currentADPSort.direction);
    
    // Render table
    renderADPTable(players);
    
    // Update stats
    updateADPStats();
}

/**
 * Sort players based on column and direction
 */
function sortPlayers(players, column, direction) {
    const sorted = [...players].sort((a, b) => {
        let valA, valB;
        
        switch(column) {
            case 'rank':
                valA = a.adp;
                valB = b.adp;
                break;
            case 'name':
                valA = a.name;
                valB = b.name;
                break;
            case 'position':
                valA = a.position;
                valB = b.position;
                break;
            case 'school':
                valA = a.school;
                valB = b.school;
                break;
            case 'adp':
                valA = a.adp;
                valB = b.adp;
                break;
            default:
                valA = a.adp;
                valB = b.adp;
        }
        
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });
    
    return sorted;
}

/**
 * Sort ADP table when header is clicked
 */
function sortADPTable(column) {
    if (currentADPSort.column === column) {
        currentADPSort.direction = currentADPSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentADPSort.column = column;
        currentADPSort.direction = 'asc';
    }
    
    filterADPLeaderboard();
}

/**
 * Render ADP table rows
 */
function renderADPTable(players) {
    const tbody = document.getElementById('adpTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = players.map((p, i) => `
        <tr class="${i % 2 === 0 ? 'even' : 'odd'}" style="animation: adp-slide-in 0.3s ease ${i * 0.03}s both;">
            <td class="rank-cell">${i + 1}</td>
            <td class="player-cell">
                <span class="player-name">${p.name}</span>
            </td>
            <td><span class="position-badge position-${p.position.toLowerCase()}">${p.position}</span></td>
            <td class="school-cell">${p.school}</td>
            <td class="adp-cell">#${p.adp}</td>
            <td class="range-cell">${p.min}-${p.max}</td>
            <td><span class="trend-badge ${p.trend.class}">${p.trend.label}</span></td>
            <td class="drafted-cell">
                <div class="drafted-bar">
                    <div class="drafted-fill" style="width: ${p.draftedIn}%"></div>
                    <span>${p.draftedIn}%</span>
                </div>
            </td>
            <td>
                <button class="view-matches-btn" onclick="showPlayerTeamMatches('${p.name}')">
                    Teams
                </button>
            </td>
        </tr>
    `).join('');
}

/**
 * Update ADP stats display
 */
function updateADPStats() {
    const players = Object.values(adpData);
    
    const totalEl = document.getElementById('adpTotalPlayers');
    const risingEl = document.getElementById('adpRisingCount');
    const fallingEl = document.getElementById('adpFallingCount');
    const updatedEl = document.getElementById('adpLastUpdated');
    
    if (totalEl) totalEl.textContent = players.length;
    if (risingEl) risingEl.textContent = players.filter(p => getADPTrend(p.name).trend === 'rising').length;
    if (fallingEl) fallingEl.textContent = players.filter(p => getADPTrend(p.name).trend === 'falling').length;
    if (updatedEl) updatedEl.textContent = getLastUpdatedText();
}

/**
 * Get last updated text
 * @returns {string} Formatted date
 */
function getLastUpdatedText() {
    const timestamp = localStorage.getItem('adpLastUpdated');
    if (!timestamp) return 'Never';
    
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
}

// ==========================================
// TOOLTIP & MODAL FUNCTIONS
// ==========================================

/**
 * Create ADP badge HTML for pick cards
 * @param {string} playerName - Player's full name
 * @param {number} pickNumber - Current pick number
 * @returns {string} HTML string
 */
function createADPBadge(playerName, pickNumber) {
    const data = adpData[playerName];
    if (!data) return '';
    
    const assessment = isValuePick(playerName, pickNumber);
    
    // Only show badge for value picks
    if (assessment.type !== 'value') return '';
    
    return `
        <div class="adp-badge ${assessment.class}" 
             data-player="${playerName}" 
             data-pick="${pickNumber}"
             onclick="event.stopPropagation(); showADPTooltip(event, '${playerName}', ${pickNumber})">
            <span class="adp-icon">↑</span>
            <span class="adp-text">${assessment.shortLabel}</span>
        </div>
    `;
}

/**
 * Show ADP tooltip
 * @param {Event} event - Click event
 * @param {string} playerName - Player's full name
 * @param {number} pickNumber - Current pick number
 */
function showADPTooltip(event, playerName, pickNumber) {
    event.stopPropagation();
    
    // Remove existing tooltips
    document.querySelectorAll('.adp-tooltip-popup').forEach(t => t.remove());
    
    const data = adpData[playerName];
    if (!data) return;
    
    const assessment = isValuePick(playerName, pickNumber);
    const trend = getADPTrend(playerName);
    
    const round = Math.ceil(data.adp / 32);
    const pickInRound = Math.ceil(data.adp % 32) || 32;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'adp-tooltip-popup';
    tooltip.innerHTML = `
        <div class="adp-tooltip">
            <div class="adp-tooltip-header">
                <strong>${playerName}</strong>
                <span class="adp-tooltip-position">${data.position}</span>
            </div>
            <div class="adp-tooltip-body">
                <div class="adp-tooltip-row">
                    <span class="adp-tooltip-label">ADP:</span>
                    <span class="adp-tooltip-value">#${data.adp} (R${round}, P${pickInRound})</span>
                </div>
                <div class="adp-tooltip-row">
                    <span class="adp-tooltip-label">Range:</span>
                    <span class="adp-tooltip-value">Pick ${data.min} - ${data.max}</span>
                </div>
                <div class="adp-tooltip-row">
                    <span class="adp-tooltip-label">Drafted in:</span>
                    <span class="adp-tooltip-value">${data.draftedIn}% of mocks</span>
                </div>
                <div class="adp-tooltip-row">
                    <span class="adp-tooltip-label">Trend:</span>
                    <span class="adp-tooltip-value ${trend.class}">${trend.label} (was ${data.lastWeekADP})</span>
                </div>
                <div class="adp-tooltip-row">
                    <span class="adp-tooltip-label">Sample:</span>
                    <span class="adp-tooltip-value">${data.count} mocks</span>
                </div>
            </div>
            <div class="adp-tooltip-footer">
                ${assessment.type === 'value' ? '💎 Great value pick!' : 
                  assessment.type === 'reach' ? '⚠️ Consider trading down' : 
                  '✓ Pick aligns with market'}
            </div>
        </div>
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom + 5}px`;
    
    // Close on click outside
    setTimeout(() => {
        document.addEventListener('click', function closeTooltip(e) {
            if (!tooltip.contains(e.target)) {
                tooltip.remove();
                document.removeEventListener('click', closeTooltip);
            }
        });
    }, 10);
}

/**
 * Show teams that have drafted a specific player
 * @param {string} playerName - Player's full name
 */
function showPlayerTeamMatches(playerName) {
    const modal = document.createElement('div');
    modal.className = 'adp-modal';
    
    const data = adpData[playerName];
    if (!data) return;
    
    // Simulate team matches based on ADP range
    const teams = getTeamsInRange(data.min, data.max);
    
    modal.innerHTML = `
        <div class="adp-modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="adp-modal-content">
            <button class="adp-modal-close" onclick="this.closest('.adp-modal').remove()">&times;</button>
            <h3>${playerName} - Team Matches</h3>
            <p class="adp-modal-subtitle">${data.position} | ${data.school} | ADP: #${data.adp}</p>
            
            <div class="team-matches-section">
                <h4>Teams in ADP Range (${data.min}-${data.max})</h4>
                <div class="team-matches-grid">
                    ${teams.map(t => `
                        <div class="team-match-card">
                            <div class="team-match-pick">Pick #${t.pick}</div>
                            <div class="team-match-name">${t.team}</div>
                            <div class="team-match-value ${t.valueClass}">${t.value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="adp-history-chart">
                <h4>ADP Trend (Last 4 Weeks)</h4>
                <div class="sparkline-container">
                    ${generateSparkline(data)}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

/**
 * Get teams in a pick range
 * @param {number} min - Minimum pick
 * @param {number} max - Maximum pick
 * @returns {Array} Array of team objects
 */
function getTeamsInRange(min, max) {
    const pickTeams = [
        { pick: 1, team: 'Raiders' },
        { pick: 2, team: 'Jets' },
        { pick: 3, team: 'Cardinals' },
        { pick: 4, team: 'Giants' },
        { pick: 5, team: 'Titans' },
        { pick: 6, team: 'Browns' },
        { pick: 7, team: 'Commanders' },
        { pick: 8, team: 'Saints' },
        { pick: 9, team: 'Chiefs' },
        { pick: 10, team: 'Bengals' },
        { pick: 11, team: 'Dolphins' },
        { pick: 12, team: 'Cowboys' },
        { pick: 13, team: 'Ravens' },
        { pick: 14, team: 'Buccaneers' },
        { pick: 15, team: 'Rams' },
        { pick: 16, team: 'Colts' },
        { pick: 17, team: '49ers' },
        { pick: 18, team: 'Vikings' },
        { pick: 19, team: 'Chargers' },
        { pick: 20, team: 'Panthers' },
        { pick: 21, team: 'Steelers' },
        { pick: 22, team: 'Seahawks' },
        { pick: 23, team: 'Bills' },
        { pick: 24, team: 'Texans' },
        { pick: 25, team: 'Cowboys' },
        { pick: 26, team: 'Eagles' },
        { pick: 27, team: 'Bengals' },
        { pick: 28, team: 'Raiders' },
        { pick: 29, team: 'Steelers' },
        { pick: 30, team: 'Broncos' },
        { pick: 31, team: 'Rams' },
        { pick: 32, team: 'Lions' }
    ];
    
    return pickTeams
        .filter(t => t.pick >= min && t.pick <= max)
        .map(t => ({
            ...t,
            value: t.pick <= (min + max) / 2 ? 'Good Fit' : 'Late Range',
            valueClass: t.pick <= (min + max) / 2 ? 'good' : 'fair'
        }));
}

/**
 * Generate sparkline SVG for trend visualization
 * @param {Object} data - Player ADP data
 * @returns {string} SVG HTML
 */
function generateSparkline(data) {
    // Generate fake historical data for visualization
    const weeks = 4;
    const points = [];
    let current = data.lastWeekADP;
    
    for (let i = 0; i < weeks; i++) {
        points.push(current);
        current += (Math.random() - 0.5) * 2;
    }
    points.push(data.adp);
    
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    
    const width = 100;
    const height = 30;
    
    const pointsStr = points.map((p, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - ((p - min) / range) * height;
        return `${x},${y}`;
    }).join(' ');
    
    const trend = points[points.length - 1] < points[0];
    const color = trend ? '#22c55e' : '#ef4444';
    
    return `
        <svg class="sparkline" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            <polyline
                fill="none"
                stroke="${color}"
                stroke-width="2"
                points="${pointsStr}"
            />
            <circle cx="${width}" cy="${height - ((points[points.length - 1] - min) / range) * height}" r="3" fill="${color}" />
        </svg>
    `;
}

// ==========================================
// INTEGRATION FUNCTIONS
// ==========================================

/**
 * Add ADP badges to pick cards on page load
 */
function addADPBadgesToPicks() {
    const pickCards = document.querySelectorAll('.pick-card');
    
    pickCards.forEach(card => {
        const playerName = card.dataset.player;
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
        
        if (playerName && pickNumber && adpData[playerName]) {
            const badge = createADPBadge(playerName, pickNumber);
            if (badge && !card.querySelector('.adp-badge')) {
                const header = card.querySelector('.pick-header');
                if (header) {
                    const badgeEl = document.createElement('div');
                    badgeEl.innerHTML = badge;
                    header.appendChild(badgeEl.firstElementChild);
                }
            }
        }
    });
}

/**
 * Add ADP column to Big Board
 */
function addADPToBigBoard() {
    const bigBoardTable = document.querySelector('#bigBoard table');
    if (!bigBoardTable) return;
    
    // Add ADP header
    const header = bigBoardTable.querySelector('thead tr');
    if (header && !header.querySelector('.adp-header')) {
        const adpTh = document.createElement('th');
        adpTh.className = 'adp-header';
        adpTh.textContent = 'ADP';
        header.appendChild(adpTh);
    }
    
    // Add ADP cells to each row
    const rows = bigBoardTable.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const nameCell = row.querySelector('td:nth-child(2)');
        if (!nameCell) return;
        
        const playerName = nameCell.textContent.trim();
        const data = adpData[playerName];
        
        if (!row.querySelector('.adp-cell')) {
            const td = document.createElement('td');
            td.className = 'adp-cell';
            if (data) {
                td.innerHTML = `<span class="adp-value">#${data.adp}</span>`;
            } else {
                td.innerHTML = `<span class="adp-na">-</span>`;
            }
            row.appendChild(td);
        }
    });
}

/**
 * Add ADP toggle button to the UI
 */
function addADPToggleButton() {
    const controlsBar = document.querySelector('.controls-bar');
    if (!controlsBar) return;
    
    // Check if already exists
    if (controlsBar.querySelector('.adp-toggle-group')) return;
    
    const adpToggle = document.createElement('div');
    adpToggle.className = 'control-group adp-toggle-group';
    adpToggle.innerHTML = `
        <label class="adp-toggle-label">
            <input type="checkbox" id="adpToggle" checked onchange="toggleADPOverlay(this.checked)">
            <span class="adp-toggle-text">Show ADP</span>
        </label>
    `;
    
    controlsBar.appendChild(adpToggle);
}

/**
 * Toggle ADP overlay visibility
 * @param {boolean} show - Whether to show ADP
 */
function toggleADPOverlay(show) {
    document.body.classList.toggle('hide-adp', !show);
    localStorage.setItem('showADP', show);
}

// ==========================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeADP();
    
    // Add ADP toggle button to controls
    addADPToggleButton();
    
    // Add ADP badges to existing pick cards
    addADPBadgesToPicks();
    
    // Initial render of ADP leaderboard if visible
    const adpTab = document.getElementById('adpLeaderboard');
    if (adpTab && adpTab.classList.contains('active')) {
        filterADPLeaderboard();
    }
    
    // Check saved preference for ADP visibility
    const saved = localStorage.getItem('showADP');
    if (saved === 'false') {
        const toggle = document.getElementById('adpToggle');
        if (toggle) {
            toggle.checked = false;
            toggleADPOverlay(false);
        }
    }
});

// Refresh ADP when tab is shown
document.addEventListener('click', function(e) {
    if (e.target.matches('.nav-tab[onclick*="adpLeaderboard"]') || 
        e.target.closest('.nav-tab[onclick*="adpLeaderboard"]')) {
        setTimeout(filterADPLeaderboard, 100);
    }
});

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        adpData,
        getADPForPlayer,
        getADPTrend,
        isValuePick,
        calculateADP,
        createADPBadge,
        filterADPLeaderboard,
        showADPTooltip,
        showPlayerTeamMatches
    };
}

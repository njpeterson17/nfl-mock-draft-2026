// Big Board Stats Framework
// Handles displaying 2025 college football statistics for Big Board players
// Integrates with player-stats-2025.js data

/**
 * Initialize Big Board stats display
 * Populates stats for all players on the Big Board
 */
function initBigBoardStats() {
      const bbItems = document.querySelectorAll('.big-board-item');

    bbItems.forEach(item => {
              const position = item.getAttribute('data-position');
              const playerInfo = item.querySelector('.bb-player-info h2');

                            if (!playerInfo) return;

                            const playerName = playerInfo.textContent.trim().split(' - ')[0]; // Extract name before team
                            const statsContainer = item.querySelector('.bb-stats-container');

                            if (!statsContainer) return;

                            // Get the player's stats
                            const displayStats = getDisplayStats(playerName, position);

                            // Update stat values in the DOM
                            updateStatValues(statsContainer, displayStats);

                            // Show/hide appropriate stat rows based on position
                            updateStatRowVisibility(statsContainer, position);
    });
}

/**
 * Update stat values in DOM elements
 * @param {Element} container - Stats container element
 * @param {Object} statsData - Object containing stat values
 */
function updateStatValues(container, statsData) {
      Object.keys(statsData).forEach(statKey => {
                const statElements = container.querySelectorAll(`[data-stat="${statKey}"]`);
                statElements.forEach(element => {
                              element.textContent = statsData[statKey];
                });
      });
}

/**
 * Show/hide stat rows based on player position
 * @param {Element} container - Stats container element
 * @param {string} position - Player position
 */
function updateStatRowVisibility(container, position) {
      const defenseRow = container.querySelector('[data-position*="CB,S,LB,DL,EDGE"]');
      const offenseRow = container.querySelector('[data-position*="QB,RB,WR,TE,OL"]');
      const qbRow = container.querySelector('[data-position*="QB"]:last-of-type');

    // Show defensive stats for defensive positions
    if (defenseRow) {
              defenseRow.style.display = ['CB', 'S', 'LB', 'DL', 'EDGE'].includes(position) ? 'grid' : 'none';
    }

    // Show offensive stats for offensive positions
    if (offenseRow) {
              offenseRow.style.display = ['RB', 'WR', 'TE', 'OL'].includes(position) ? 'grid' : 'none';
    }

    // Show QB-specific stats only for QBs
    if (qbRow) {
              qbRow.style.display = position === 'QB' ? 'grid' : 'none';
    }
}

/**
 * Refresh stats for all Big Board items
 * Call this if Big Board is dynamically loaded or updated
 */
function refreshBigBoardStats() {
      initBigBoardStats();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initBigBoardStats);
} else {
      initBigBoardStats();
}

// Re-initialize if Big Board is dynamically updated
window.addEventListener('bigBoardLoaded', initBigBoardStats);
window.addEventListener('bigBoardUpdated', refreshBigBoardStats);

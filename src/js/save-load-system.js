/**
 * NFL Mock Draft 2026 - Save/Load System
 * Handles localStorage persistence for custom mock drafts
 * Version: 1.0
 */

// ==========================================
// LOCALSTORAGE KEYS
// ==========================================
const STORAGE_KEYS = {
    SAVED_MOCKS: 'nflMockDraft_savedMocks',
    AUTOSAVE: 'nflMockDraft_autosave',
    SETTINGS: 'nflMockDraft_settings'
};

const SAVE_SYSTEM_VERSION = '1.0';

// ==========================================
// STATE
// ==========================================
let autoSaveInterval = null;
let isUserActive = false;
let lastActivityTime = Date.now();

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Generate a unique ID for saved mocks
 */
function generateMockId() {
    return `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format date for display
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
}

/**
 * Count completed picks in a custom draft
 */
function countCompletedPicks(draft) {
    if (!draft || !Array.isArray(draft)) return 0;
    return draft.filter(pick => pick.selectedPlayer !== null).length;
}

/**
 * Track user activity for auto-save
 */
function trackUserActivity() {
    isUserActive = true;
    lastActivityTime = Date.now();
}

// ==========================================
// CORE SAVE/LOAD FUNCTIONS
// ==========================================

/**
 * Save current mock draft to localStorage
 * @param {string} mockName - Name for the saved mock
 * @returns {boolean} Success status
 */
function saveMockDraft(mockName = null) {
    try {
        // Validate we have data to save
        if (!customDraft || customDraft.length === 0) {
            showToast('No draft data to save!');
            return false;
        }

        // Prompt for name if not provided
        if (!mockName) {
            const defaultName = `Mock Draft ${new Date().toLocaleDateString()}`;
            mockName = prompt('Enter a name for your mock draft:', defaultName);
            if (!mockName) return false; // User cancelled
        }

        // Get existing saved mocks
        const savedMocks = getSavedMocksFromStorage();

        // Create new mock object
        const newMock = {
            id: generateMockId(),
            name: mockName.trim(),
            dateSaved: new Date().toISOString(),
            customDraft: JSON.parse(JSON.stringify(customDraft)),
            currentPickIndex: currentPickIndex,
            trades: JSON.parse(JSON.stringify(trades || [])),
            version: SAVE_SYSTEM_VERSION
        };

        // Add to saved mocks
        savedMocks.unshift(newMock); // Add to beginning

        // Limit to 20 saved mocks
        while (savedMocks.length > 20) {
            savedMocks.pop();
        }

        // Save to localStorage
        localStorage.setItem(STORAGE_KEYS.SAVED_MOCKS, JSON.stringify(savedMocks));

        showToast('Mock saved successfully!');
        renderSavedMocksList();
        return true;

    } catch (error) {
        console.error('Error saving mock draft:', error);
        showToast('Error saving mock draft. Please try again.');
        return false;
    }
}

/**
 * Load a saved mock draft
 * @param {string} mockId - ID of the mock to load
 * @returns {boolean} Success status
 */
function loadMockDraft(mockId) {
    try {
        const savedMocks = getSavedMocksFromStorage();
        const mock = savedMocks.find(m => m.id === mockId);

        if (!mock) {
            showToast('Mock draft not found!');
            return false;
        }

        // Confirm if current draft has progress
        const currentCompleted = countCompletedPicks(customDraft);
        if (currentCompleted > 0) {
            if (!confirm(`You have ${currentCompleted} picks in your current draft. Loading will replace your progress. Continue?`)) {
                return false;
            }
        }

        // Load the draft data
        customDraft = JSON.parse(JSON.stringify(mock.customDraft));
        currentPickIndex = mock.currentPickIndex;
        
        // Load trades if they exist
        if (mock.trades) {
            trades = JSON.parse(JSON.stringify(mock.trades));
        }

        // Update UI
        renderCurrentPick();
        renderPlayerPool();
        renderCustomPicksList();
        renderTradesList();
        updateDraftProgress();

        // Show summary if draft is complete
        if (currentPickIndex >= draftOrder.length) {
            showDraftSummary();
        } else {
            document.getElementById('draftSummary').style.display = 'none';
        }

        showToast(`Loaded "${mock.name}"`);
        return true;

    } catch (error) {
        console.error('Error loading mock draft:', error);
        showToast('Error loading mock draft. Please try again.');
        return false;
    }
}

/**
 * Get all saved mocks from localStorage
 * @returns {Array} Array of saved mock objects
 */
function listSavedMocks() {
    return getSavedMocksFromStorage();
}

/**
 * Delete a saved mock draft
 * @param {string} mockId - ID of the mock to delete
 * @returns {boolean} Success status
 */
function deleteSavedMock(mockId) {
    try {
        if (!confirm('Are you sure you want to delete this saved mock?')) {
            return false;
        }

        let savedMocks = getSavedMocksFromStorage();
        savedMocks = savedMocks.filter(m => m.id !== mockId);
        
        localStorage.setItem(STORAGE_KEYS.SAVED_MOCKS, JSON.stringify(savedMocks));
        
        renderSavedMocksList();
        showToast('Mock deleted');
        return true;

    } catch (error) {
        console.error('Error deleting mock:', error);
        showToast('Error deleting mock. Please try again.');
        return false;
    }
}

/**
 * Auto-save current draft to special slot
 */
function autoSaveMockDraft() {
    try {
        // Only auto-save if user has been active and has made picks
        if (!isUserActive) return;
        
        const completedPicks = countCompletedPicks(customDraft);
        if (completedPicks === 0) return;

        const autoSaveData = {
            customDraft: JSON.parse(JSON.stringify(customDraft)),
            currentPickIndex: currentPickIndex,
            trades: JSON.parse(JSON.stringify(trades || [])),
            lastSaved: new Date().toISOString(),
            completedPicks: completedPicks
        };

        localStorage.setItem(STORAGE_KEYS.AUTOSAVE, JSON.stringify(autoSaveData));
        
        // Update auto-save indicator if it exists
        updateAutoSaveIndicator();
        
        isUserActive = false; // Reset activity flag

    } catch (error) {
        console.error('Error auto-saving:', error);
    }
}

/**
 * Load auto-saved draft
 * @returns {boolean} Success status
 */
function loadAutoSavedDraft() {
    try {
        const autoSaveData = localStorage.getItem(STORAGE_KEYS.AUTOSAVE);
        if (!autoSaveData) return false;

        const data = JSON.parse(autoSaveData);
        
        // Only offer to restore if there's meaningful progress
        if (data.completedPicks && data.completedPicks > 0) {
            const lastSaved = new Date(data.lastSaved);
            const timeAgo = formatDate(lastSaved);
            
            if (confirm(`Restore your auto-saved draft from ${timeAgo}? (${data.completedPicks} picks made)`)) {
                customDraft = JSON.parse(JSON.stringify(data.customDraft));
                currentPickIndex = data.currentPickIndex;
                
                if (data.trades) {
                    trades = JSON.parse(JSON.stringify(data.trades));
                }

                // Update UI
                renderCurrentPick();
                renderPlayerPool();
                renderCustomPicksList();
                renderTradesList();
                updateDraftProgress();

                showToast('Auto-saved draft restored!');
                return true;
            }
        }
        return false;

    } catch (error) {
        console.error('Error loading auto-save:', error);
        return false;
    }
}

/**
 * Export mock to JSON file
 * @param {string} mockId - Optional mockId to export, if null exports current
 */
function exportMockToJSON(mockId = null) {
    try {
        let dataToExport;
        let fileName;

        if (mockId) {
            // Export specific saved mock
            const savedMocks = getSavedMocksFromStorage();
            const mock = savedMocks.find(m => m.id === mockId);
            if (!mock) {
                showToast('Mock not found!');
                return;
            }
            dataToExport = mock;
            fileName = `NFLMock2026_${mock.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
        } else {
            // Export current draft
            if (!customDraft || customDraft.length === 0) {
                showToast('No draft to export!');
                return;
            }
            dataToExport = {
                name: `My Mock Draft ${new Date().toLocaleDateString()}`,
                dateSaved: new Date().toISOString(),
                customDraft: customDraft,
                currentPickIndex: currentPickIndex,
                trades: trades || [],
                version: SAVE_SYSTEM_VERSION,
                exportType: 'current_draft'
            };
            fileName = `NFLMock2026_current_${new Date().toISOString().split('T')[0]}.json`;
        }

        // Create and download file
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        showToast('Mock exported to JSON!');

    } catch (error) {
        console.error('Error exporting mock:', error);
        showToast('Error exporting mock. Please try again.');
    }
}

/**
 * Import mock from JSON file
 * @param {File} file - JSON file to import
 */
function importMockFromJSON(file) {
    try {
        if (!file || !file.name.endsWith('.json')) {
            showToast('Please select a valid JSON file');
            return;
        }

        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate the imported data
                if (!importedData.customDraft || !Array.isArray(importedData.customDraft)) {
                    showToast('Invalid mock draft file!');
                    return;
                }

                // Confirm if current draft has progress
                const currentCompleted = countCompletedPicks(customDraft);
                if (currentCompleted > 0) {
                    if (!confirm(`You have ${currentCompleted} picks in your current draft. Importing will replace your progress. Continue?`)) {
                        return;
                    }
                }

                // Load the imported data
                customDraft = JSON.parse(JSON.stringify(importedData.customDraft));
                currentPickIndex = importedData.currentPickIndex || 0;
                
                if (importedData.trades) {
                    trades = JSON.parse(JSON.stringify(importedData.trades));
                }

                // Update UI
                renderCurrentPick();
                renderPlayerPool();
                renderCustomPicksList();
                renderTradesList();
                updateDraftProgress();

                // Show summary if draft is complete
                if (currentPickIndex >= draftOrder.length) {
                    showDraftSummary();
                } else {
                    document.getElementById('draftSummary').style.display = 'none';
                }

                showToast(`Imported "${importedData.name || 'Untitled Mock'}"`);

            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                showToast('Error reading file. Please check the file format.');
            }
        };

        reader.onerror = function() {
            showToast('Error reading file');
        };

        reader.readAsText(file);

    } catch (error) {
        console.error('Error importing mock:', error);
        showToast('Error importing mock. Please try again.');
    }
}

// ==========================================
// STORAGE HELPERS
// ==========================================

function getSavedMocksFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.SAVED_MOCKS);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading saved mocks:', error);
        return [];
    }
}

function clearAllSavedMocks() {
    if (confirm('Are you sure you want to delete ALL saved mocks? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEYS.SAVED_MOCKS);
        localStorage.removeItem(STORAGE_KEYS.AUTOSAVE);
        renderSavedMocksList();
        showToast('All saved mocks cleared');
    }
}

// ==========================================
// UI RENDERING
// ==========================================

/**
 * Render the saved mocks list in the UI
 */
function renderSavedMocksList() {
    const container = document.getElementById('savedMocksList');
    if (!container) return;

    const savedMocks = getSavedMocksFromStorage();

    if (savedMocks.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-save" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                <p>No saved mocks yet. Create and save your first mock draft!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = savedMocks.map(mock => {
        const completedPicks = countCompletedPicks(mock.customDraft);
        const progressPercent = (completedPicks / 32) * 100;
        
        return `
            <div class="saved-mock-item" data-mock-id="${mock.id}">
                <div class="saved-mock-info">
                    <div class="saved-mock-name">${escapeHtml(mock.name)}</div>
                    <div class="saved-mock-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${formatDate(mock.dateSaved)}</span>
                        <span><i class="fas fa-check-circle"></i> ${completedPicks}/32 picks</span>
                    </div>
                    <div class="saved-mock-progress">
                        <div class="saved-mock-progress-bar" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
                <div class="saved-mock-actions">
                    <button class="saved-mock-btn load" onclick="loadMockDraft('${mock.id}')" title="Load Mock">
                        <i class="fas fa-folder-open"></i>
                    </button>
                    <button class="saved-mock-btn export" onclick="exportMockToJSON('${mock.id}')" title="Export to JSON">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="saved-mock-btn delete" onclick="deleteSavedMock('${mock.id}')" title="Delete Mock">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update auto-save indicator in UI
 */
function updateAutoSaveIndicator() {
    const indicator = document.getElementById('autoSaveIndicator');
    if (indicator) {
        const now = new Date();
        indicator.innerHTML = `<i class="fas fa-sync-alt"></i> Auto-saved at ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        indicator.classList.add('show');
        
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 3000);
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Initialize the save/load system
 */
function initSaveLoadSystem() {
    // Set up auto-save interval (30 seconds)
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
    
    autoSaveInterval = setInterval(autoSaveMockDraft, 30000);

    // Track user activity
    document.addEventListener('click', trackUserActivity);
    document.addEventListener('keydown', trackUserActivity);
    document.addEventListener('change', trackUserActivity);

    // Render saved mocks list
    renderSavedMocksList();

    // Check for auto-saved draft on init
    // Only if we're on the create tab
    const createTab = document.getElementById('create');
    if (createTab && createTab.classList.contains('active')) {
        checkForAutoSave();
    }

    console.log('Save/Load system initialized');
}

/**
 * Check for and offer to restore auto-saved draft
 */
function checkForAutoSave() {
    const autoSaveData = localStorage.getItem(STORAGE_KEYS.AUTOSAVE);
    if (autoSaveData) {
        try {
            const data = JSON.parse(autoSaveData);
            const lastSaved = new Date(data.lastSaved);
            const hoursSinceSave = (Date.now() - lastSaved.getTime()) / (1000 * 60 * 60);
            
            // Only offer to restore if saved within last 7 days
            if (hoursSinceSave < 168 && data.completedPicks > 0) {
                setTimeout(() => {
                    loadAutoSavedDraft();
                }, 1000);
            }
        } catch (e) {
            console.error('Error checking auto-save:', e);
        }
    }
}

/**
 * Clean up on page unload
 */
window.addEventListener('beforeunload', function() {
    // Final auto-save attempt
    autoSaveMockDraft();
    
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization to ensure other scripts have loaded
    setTimeout(initSaveLoadSystem, 500);
});

// Re-initialize when switching to create tab
document.querySelector('.nav-tab[onclick="showTab(\'create\')"]')?.addEventListener('click', function() {
    setTimeout(function() {
        renderSavedMocksList();
        checkForAutoSave();
    }, 100);
});

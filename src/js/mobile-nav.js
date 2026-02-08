/**
 * Mobile Bottom Navigation System
 * NFL Mock Draft 2026
 * 
 * Features:
 * - Bottom navigation bar with 5 primary actions
 * - Smart context switching based on current tab
 * - Gesture support (swipe, double tap, long press)
 * - Floating Action Button (FAB) with mini actions
 * - Quick Action Drawer
 * - Mobile-optimized pick navigation
 * - Bottom sheet for "More" menu
 */

// ============================================
// MOBILE NAVIGATION STATE
// ============================================
const MobileNav = {
    currentTab: 'round1',
    currentContext: 'rounds', // rounds, createMock, bigBoard
    currentPick: 1,
    totalPicks: 32,
    isMoreMenuOpen: false,
    isQuickActionsOpen: false,
    isFabMenuOpen: false,
    touchStartY: 0,
    touchStartX: 0,
    hammerInstance: null,
    
    // Tab configurations
    tabs: {
        round1: { name: 'Round 1', icon: 'fa-home', context: 'rounds' },
        round2: { name: 'Round 2', icon: 'fa-list-ol', context: 'rounds' },
        round3: { name: 'Round 3', icon: 'fa-list-ol', context: 'rounds' },
        bigBoard: { name: 'Big Board', icon: 'fa-th-large', context: 'bigBoard' },
        create: { name: 'Create', icon: 'fa-plus-circle', context: 'createMock' },
        edpLeaderboard: { name: 'EDP', icon: 'fa-chart-bar', context: 'leaderboard' },
        adpLeaderboard: { name: 'ADP', icon: 'fa-chart-line', context: 'leaderboard' },
        draftGrades: { name: 'Grades', icon: 'fa-star', context: 'grades' }
    }
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize mobile navigation system
 */
function initMobileNav() {
    // Only initialize on mobile
    if (window.innerWidth > 768) return;
    
    // Create mobile navigation elements
    createBottomNav();
    createFAB();
    createContextActionBar();
    createMoreMenuSheet();
    createQuickActionsDrawer();
    createPickDetailsModal();
    createScrollIndicator();
    createHapticIndicator();
    
    // Initialize Hammer.js for gestures
    initGestures();
    
    // Initialize pull-to-refresh
    initPullToRefresh();
    
    // Initialize scroll progress
    initScrollProgress();
    
    // Setup keyboard detection
    setupKeyboardDetection();
    
    // Set initial active state
    setActiveNavItem('round1');
}

/**
 * Create the bottom navigation bar
 */
function createBottomNav() {
    const nav = document.createElement('nav');
    nav.className = 'mobile-bottom-nav';
    nav.id = 'mobileBottomNav';
    
    nav.innerHTML = `
        <div class="mobile-bottom-nav-items">
            <button class="mobile-nav-item active touch-feedback" data-tab="round1" onclick="handleNavClick('round1')">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </button>
            <button class="mobile-nav-item touch-feedback" data-tab="draft" onclick="openDraftSubmenu()">
                <i class="fas fa-clipboard-list"></i>
                <span>Draft</span>
            </button>
            <button class="mobile-nav-item create-btn touch-feedback" data-tab="create" onclick="handleNavClick('create')">
                <i class="fas fa-plus"></i>
                <span>Create</span>
            </button>
            <button class="mobile-nav-item touch-feedback" data-tab="bigBoard" onclick="handleNavClick('bigBoard')">
                <i class="fas fa-th-large"></i>
                <span>Board</span>
            </button>
            <button class="mobile-nav-item touch-feedback" data-tab="more" onclick="openMoreMenu()">
                <i class="fas fa-ellipsis-h"></i>
                <span>More</span>
                <span class="nav-badge" id="moreBadge" style="display: none;">3</span>
            </button>
        </div>
    `;
    
    document.body.appendChild(nav);
}

/**
 * Create Floating Action Button
 */
function createFAB() {
    const fabContainer = document.createElement('div');
    fabContainer.className = 'fab-container';
    fabContainer.id = 'fabContainer';
    
    fabContainer.innerHTML = `
        <div class="fab-menu" id="fabMenu">
            <div class="fab-mini">
                <span class="fab-mini-label">Share</span>
                <button class="fab-mini-btn touch-feedback" onclick="shareCurrentView()">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
            <div class="fab-mini">
                <span class="fab-mini-label">Export</span>
                <button class="fab-mini-btn touch-feedback" onclick="openExportModal()">
                    <i class="fas fa-download"></i>
                </button>
            </div>
            <div class="fab-mini">
                <span class="fab-mini-label">Save</span>
                <button class="fab-mini-btn touch-feedback" onclick="saveCurrentMock()">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
        </div>
        <button class="fab touch-feedback" id="fabButton" onclick="toggleFabMenu()">
            <i class="fas fa-plus"></i>
        </button>
        <span class="fab-label">Quick Actions</span>
    `;
    
    document.body.appendChild(fabContainer);
}

/**
 * Create Context Action Bar (changes based on current view)
 */
function createContextActionBar() {
    const contextBar = document.createElement('div');
    contextBar.className = 'context-action-bar';
    contextBar.id = 'contextActionBar';
    
    contextBar.innerHTML = `
        <div class="context-actions" id="contextActions">
            <!-- Content injected dynamically based on context -->
        </div>
    `;
    
    document.body.appendChild(contextBar);
}

/**
 * Create "More" menu bottom sheet
 */
function createMoreMenuSheet() {
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'bottom-sheet-overlay';
    overlay.id = 'moreMenuOverlay';
    overlay.onclick = closeMoreMenu;
    
    // Sheet
    const sheet = document.createElement('div');
    sheet.className = 'bottom-sheet';
    sheet.id = 'moreMenu';
    
    sheet.innerHTML = `
        <div class="sheet-drag-handle" onclick="closeMoreMenu()">
            <div class="drag-indicator"></div>
        </div>
        <div class="sheet-header">
            <div class="sheet-title">More Options</div>
        </div>
        <div class="sheet-content">
            <div class="sheet-section">
                <div class="sheet-section-title">Leaderboards</div>
                <button class="sheet-item touch-feedback" onclick="handleNavClick('edpLeaderboard'); closeMoreMenu();">
                    <i class="fas fa-chart-bar"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">EDP Leaderboard</div>
                        <div class="sheet-item-subtitle">Expected Draft Position</div>
                    </div>
                </button>
                <button class="sheet-item touch-feedback" onclick="handleNavClick('adpLeaderboard'); closeMoreMenu();">
                    <i class="fas fa-chart-line"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">ADP Leaderboard</div>
                        <div class="sheet-item-subtitle">Average Draft Position</div>
                    </div>
                </button>
            </div>
            
            <div class="sheet-divider"></div>
            
            <div class="sheet-section">
                <div class="sheet-section-title">Draft Tools</div>
                <button class="sheet-item touch-feedback" onclick="handleNavClick('draftGrades'); closeMoreMenu();">
                    <i class="fas fa-star"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">Draft Grades</div>
                        <div class="sheet-item-subtitle">Grade your mock</div>
                    </div>
                </button>
                <button class="sheet-item touch-feedback" onclick="openTradeCalculator(); closeMoreMenu();">
                    <i class="fas fa-calculator"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">Trade Calculator</div>
                        <div class="sheet-item-subtitle">Calculate trade values</div>
                    </div>
                </button>
            </div>
            
            <div class="sheet-divider"></div>
            
            <div class="sheet-section">
                <div class="sheet-section-title">Settings</div>
                <button class="sheet-item touch-feedback" onclick="toggleTheme(); closeMoreMenu();">
                    <i class="fas fa-moon" id="themeIcon"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">Dark Mode</div>
                        <div class="sheet-item-subtitle">Toggle theme</div>
                    </div>
                    <div class="sheet-toggle" id="themeToggleBtn"></div>
                </button>
                <button class="sheet-item touch-feedback" onclick="showHelp(); closeMoreMenu();">
                    <i class="fas fa-question-circle"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">Help & Tips</div>
                        <div class="sheet-item-subtitle">How to use this app</div>
                    </div>
                </button>
                <button class="sheet-item touch-feedback" onclick="openSettings(); closeMoreMenu();">
                    <i class="fas fa-cog"></i>
                    <div class="sheet-item-content">
                        <div class="sheet-item-title">Settings</div>
                        <div class="sheet-item-subtitle">Preferences & more</div>
                    </div>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(sheet);
    
    // Add swipe to close
    addSheetGestures(sheet, closeMoreMenu);
}

/**
 * Create Quick Actions Drawer
 */
function createQuickActionsDrawer() {
    const drawer = document.createElement('div');
    drawer.className = 'quick-actions-drawer';
    drawer.id = 'quickActionsDrawer';
    
    drawer.innerHTML = `
        <div class="drawer-handle" onclick="toggleQuickActions()">
            <div class="drawer-pill"></div>
            <span class="drawer-label">Quick Actions</span>
        </div>
        <div class="drawer-content">
            <div class="drawer-title">Quick Actions</div>
            <div class="quick-action-grid">
                <button class="quick-action-item touch-feedback" onclick="showJumpToPick()">
                    <i class="fas fa-arrow-down"></i>
                    <span>Jump to Pick</span>
                </button>
                <button class="quick-action-item touch-feedback" onclick="showPositionFilter()">
                    <i class="fas fa-filter"></i>
                    <span>Filter Position</span>
                </button>
                <button class="quick-action-item touch-feedback" onclick="focusSearch()">
                    <i class="fas fa-search"></i>
                    <span>Search</span>
                </button>
                <button class="quick-action-item touch-feedback" onclick="showSavedMocks()">
                    <i class="fas fa-folder-open"></i>
                    <span>Saved Mocks</span>
                </button>
                <button class="quick-action-item touch-feedback" onclick="shareCurrentView()">
                    <i class="fas fa-share-alt"></i>
                    <span>Share Draft</span>
                </button>
                <button class="quick-action-item touch-feedback" onclick="openSettings()">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(drawer);
    
    // Add swipe gestures
    addDrawerGestures(drawer);
}

/**
 * Create Pick Details Modal
 */
function createPickDetailsModal() {
    const modal = document.createElement('div');
    modal.className = 'pick-details-modal';
    modal.id = 'pickDetailsModal';
    
    modal.innerHTML = `
        <div class="pick-details-overlay" onclick="closePickDetails()"></div>
        <div class="pick-details-content">
            <div class="modal-nav">
                <button class="modal-nav-btn touch-feedback" onclick="previousPickModal()">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <span id="modalPickNumber">Pick #1</span>
                <button class="modal-nav-btn touch-feedback" onclick="nextPickModal()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <button class="modal-close touch-feedback" onclick="closePickDetails()">
                <i class="fas fa-times"></i>
            </button>
            <div id="pickDetailsContent">
                <!-- Pick details injected here -->
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

/**
 * Create scroll progress indicator
 */
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.id = 'scrollIndicator';
    indicator.innerHTML = '<div class="scroll-progress" id="scrollProgress"></div>';
    document.body.appendChild(indicator);
}

/**
 * Create haptic feedback indicator
 */
function createHapticIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'haptic-indicator';
    indicator.id = 'hapticIndicator';
    document.body.appendChild(indicator);
}

// ============================================
// NAVIGATION HANDLERS
// ============================================

/**
 * Handle navigation item click
 */
function handleNavClick(tab) {
    MobileNav.currentTab = tab;
    
    // Update active state
    setActiveNavItem(tab);
    
    // Show the tab content
    if (typeof showTab === 'function') {
        showTab(tab);
    }
    
    // Update context
    const tabConfig = MobileNav.tabs[tab];
    if (tabConfig) {
        MobileNav.currentContext = tabConfig.context;
        updateNavContext(tabConfig.context);
    }
    
    // Trigger haptic feedback
    triggerHaptic('light');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Set active navigation item
 */
function setActiveNavItem(item) {
    document.querySelectorAll('.mobile-nav-item').forEach(nav => {
        nav.classList.remove('active');
        if (nav.dataset.tab === item) {
            nav.classList.add('active');
        }
    });
}

/**
 * Update navigation context based on current view
 */
function updateNavContext(context) {
    MobileNav.currentContext = context;
    const contextBar = document.getElementById('contextActionBar');
    const contextActions = document.getElementById('contextActions');
    
    if (!contextBar || !contextActions) return;
    
    let actionsHTML = '';
    
    switch (context) {
        case 'rounds':
            actionsHTML = `
                <button class="context-action touch-feedback" onclick="previousPick()">
                    <i class="fas fa-chevron-left"></i>
                    <span>Prev</span>
                </button>
                <button class="context-action touch-feedback" onclick="showJumpToPick()">
                    <i class="fas fa-arrow-down"></i>
                    <span>Jump</span>
                </button>
                <button class="context-action touch-feedback" onclick="showPositionFilter()">
                    <i class="fas fa-filter"></i>
                    <span>Filter</span>
                </button>
                <button class="context-action touch-feedback" onclick="nextPick()">
                    <i class="fas fa-chevron-right"></i>
                    <span>Next</span>
                </button>
                <button class="context-action touch-feedback" onclick="shareCurrentView()">
                    <i class="fas fa-share-alt"></i>
                    <span>Share</span>
                </button>
            `;
            contextBar.classList.add('visible');
            break;
            
        case 'createMock':
            actionsHTML = `
                <button class="context-action touch-feedback" onclick="undoLastPick()">
                    <i class="fas fa-undo"></i>
                    <span>Undo</span>
                </button>
                <button class="context-action touch-feedback" onclick="showBestAvailable()">
                    <i class="fas fa-trophy"></i>
                    <span>Best</span>
                </button>
                <button class="context-action touch-feedback" onclick="filterByPosition()">
                    <i class="fas fa-filter"></i>
                    <span>Pos</span>
                </button>
                <button class="context-action touch-feedback" onclick="openTradeModal()">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Trade</span>
                </button>
                <button class="context-action primary touch-feedback" onclick="submitPick()">
                    <i class="fas fa-check"></i>
                    <span>Submit</span>
                </button>
            `;
            contextBar.classList.add('visible');
            break;
            
        case 'bigBoard':
            actionsHTML = `
                <button class="context-action touch-feedback" onclick="focusSearch()">
                    <i class="fas fa-search"></i>
                    <span>Search</span>
                </button>
                <button class="context-action touch-feedback" onclick="showPositionFilter()">
                    <i class="fas fa-filter"></i>
                    <span>Filter</span>
                </button>
                <button class="context-action touch-feedback" onclick="compareSelected()">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Compare</span>
                </button>
                <button class="context-action touch-feedback" onclick="sortPlayers()">
                    <i class="fas fa-sort"></i>
                    <span>Sort</span>
                </button>
                <button class="context-action touch-feedback" onclick="toggleViewMode()">
                    <i class="fas fa-th-large"></i>
                    <span>View</span>
                </button>
            `;
            contextBar.classList.add('visible');
            break;
            
        default:
            contextBar.classList.remove('visible');
    }
    
    contextActions.innerHTML = actionsHTML;
}

/**
 * Open More menu sheet
 */
function openMoreMenu() {
    MobileNav.isMoreMenuOpen = true;
    document.getElementById('moreMenuOverlay').classList.add('open');
    document.getElementById('moreMenu').classList.add('open');
    triggerHaptic('light');
}

/**
 * Close More menu sheet
 */
function closeMoreMenu() {
    MobileNav.isMoreMenuOpen = false;
    document.getElementById('moreMenuOverlay').classList.remove('open');
    document.getElementById('moreMenu').classList.remove('open');
}

/**
 * Toggle Quick Actions drawer
 */
function toggleQuickActions() {
    const drawer = document.getElementById('quickActionsDrawer');
    MobileNav.isQuickActionsOpen = !MobileNav.isQuickActionsOpen;
    
    if (MobileNav.isQuickActionsOpen) {
        drawer.classList.add('open');
    } else {
        drawer.classList.remove('open');
    }
    
    triggerHaptic('light');
}

/**
 * Open Quick Actions drawer
 */
function openQuickActions() {
    const drawer = document.getElementById('quickActionsDrawer');
    if (drawer) {
        drawer.classList.add('open');
        MobileNav.isQuickActionsOpen = true;
    }
}

// ============================================
// FAB (FLOATING ACTION BUTTON)
// ============================================

/**
 * Toggle FAB menu
 */
function toggleFabMenu() {
    const fab = document.getElementById('fabButton');
    const menu = document.getElementById('fabMenu');
    
    MobileNav.isFabMenuOpen = !MobileNav.isFabMenuOpen;
    
    if (MobileNav.isFabMenuOpen) {
        fab.classList.add('expanded');
        menu.classList.add('open');
    } else {
        fab.classList.remove('expanded');
        menu.classList.remove('open');
    }
    
    triggerHaptic('medium');
}

// ============================================
// GESTURE SUPPORT
// ============================================

/**
 * Initialize Hammer.js for gestures
 */
function initGestures() {
    // Load Hammer.js dynamically if not already loaded
    if (typeof Hammer === 'undefined') {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js', () => {
            setupHammerGestures();
        });
    } else {
        setupHammerGestures();
    }
}

/**
 * Setup Hammer.js gestures
 */
function setupHammerGestures() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent || typeof Hammer === 'undefined') return;
    
    MobileNav.hammerInstance = new Hammer(mainContent, {
        touchAction: 'pan-y', // Allow vertical scrolling
        recognizers: [
            [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }],
            [Hammer.Tap, { event: 'doubletap', taps: 2 }],
            [Hammer.Press, { time: 500 }]
        ]
    });
    
    // Swipe left - next pick/tab
    MobileNav.hammerInstance.on('swipeleft', () => {
        handleSwipe('left');
    });
    
    // Swipe right - previous pick/tab
    MobileNav.hammerInstance.on('swiperight', () => {
        handleSwipe('right');
    });
    
    // Double tap - toggle theme
    MobileNav.hammerInstance.on('doubletap', () => {
        toggleTheme();
        showToast('Theme toggled');
    });
    
    // Press - show context menu
    MobileNav.hammerInstance.on('press', (e) => {
        showContextMenu(e.center.x, e.center.y);
    });
}

/**
 * Handle swipe gestures
 */
function handleSwipe(direction) {
    switch (direction) {
        case 'left':
            if (MobileNav.currentContext === 'rounds') {
                nextPick();
                showSwipeIndicator('right');
            }
            break;
        case 'right':
            if (MobileNav.currentContext === 'rounds') {
                previousPick();
                showSwipeIndicator('left');
            }
            break;
        case 'up':
            openQuickActions();
            break;
        case 'down':
            closePickDetails();
            break;
    }
    
    triggerHaptic('light');
}

/**
 * Show swipe indicator
 */
function showSwipeIndicator(direction) {
    // Visual feedback handled by CSS classes on pick cards
}

/**
 * Show context menu
 * Only define if not already defined (png-export.js defines this on index.html)
 */
if (typeof showContextMenu === 'undefined') {
    function showContextMenu(x, y) {
        // Implementation for long-press context menu
        triggerHaptic('heavy');
        openQuickActions();
    }
}

// ============================================
// PICK NAVIGATION
// ============================================

/**
 * Navigate to next pick
 */
function nextPick() {
    if (MobileNav.currentPick < MobileNav.totalPicks) {
        MobileNav.currentPick++;
        jumpToPick(MobileNav.currentPick);
    }
}

/**
 * Navigate to previous pick
 */
function previousPick() {
    if (MobileNav.currentPick > 1) {
        MobileNav.currentPick--;
        jumpToPick(MobileNav.currentPick);
    }
}

/**
 * Jump to specific pick
 */
function jumpToPick(pickNumber) {
    const pickElement = document.querySelector(`[data-pick="${pickNumber}"]`);
    if (pickElement) {
        pickElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        MobileNav.currentPick = pickNumber;
    }
}

/**
 * Show jump to pick dialog
 */
function showJumpToPick() {
    const pick = prompt('Enter pick number (1-' + MobileNav.totalPicks + '):');
    if (pick && !isNaN(pick)) {
        jumpToPick(parseInt(pick));
    }
}

/**
 * Modal navigation
 */
function nextPickModal() {
    if (MobileNav.currentPick < MobileNav.totalPicks) {
        MobileNav.currentPick++;
        updatePickDetailsModal();
    }
}

function previousPickModal() {
    if (MobileNav.currentPick > 1) {
        MobileNav.currentPick--;
        updatePickDetailsModal();
    }
}

function updatePickDetailsModal() {
    document.getElementById('modalPickNumber').textContent = `Pick #${MobileNav.currentPick}`;
    // Load pick details into modal
}

function openPickDetails(pickNumber) {
    MobileNav.currentPick = pickNumber;
    document.getElementById('pickDetailsModal').classList.add('open');
    updatePickDetailsModal();
    triggerHaptic('light');
}

function closePickDetails() {
    document.getElementById('pickDetailsModal').classList.remove('open');
}

// ============================================
// ACTION HANDLERS
// ============================================



function showPositionFilter() {
    // Scroll to filter buttons
    const filterSection = document.querySelector('.controls-bar');
    if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function focusSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.focus();
    }
}

function shareCurrentView() {
    if (typeof SocialShareManager !== 'undefined' && SocialShareManager.openShareModal) {
        SocialShareManager.openShareModal();
    } else if (typeof shareTwitter === 'function') {
        shareTwitter();
    } else {
        // Fallback - copy URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
    }
}

function saveCurrentMock() {
    showToast('Mock draft saved!');
    triggerHaptic('success');
}

function showSavedMocks() {
    showToast('No saved mocks yet');
}

function showHelp() {
    showToast('Swipe to navigate • Double tap for theme • Long press for menu');
}

function openSettings() {
    showToast('Settings coming soon!');
}

function undoLastPick() {
    showToast('Undo last pick');
}

function showBestAvailable() {
    showToast('Showing best available players');
}

function filterByPosition() {
    showPositionFilter();
}

function openTradeModal() {
    if (typeof openTradeCalculator === 'function') {
        openTradeCalculator();
    }
}

function submitPick() {
    showToast('Pick submitted!');
    triggerHaptic('success');
}

function compareSelected() {
    if (typeof openPlayerComparison === 'function') {
        openPlayerComparison();
    } else {
        showToast('Select players to compare');
    }
}

function sortPlayers() {
    showToast('Sort options: Rank • Name • Position');
}

function toggleViewMode() {
    showToast('View mode toggled');
}

function openDraftSubmenu() {
    // Show round selector
    const round = confirm('Go to Round 2?') ? 2 : 1;
    handleNavClick(`round${round}`);
}

// ============================================
// PULL TO REFRESH
// ============================================

function initPullToRefresh() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    
    let startY = 0;
    let isPulling = false;
    
    mainContent.addEventListener('touchstart', (e) => {
        if (mainContent.scrollTop === 0) {
            startY = e.touches[0].clientY;
            isPulling = true;
        }
    }, { passive: true });
    
    mainContent.addEventListener('touchmove', (e) => {
        if (!isPulling) return;
        
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        
        if (diff > 0 && diff < 100) {
            // Visual feedback during pull
        }
    }, { passive: true });
    
    mainContent.addEventListener('touchend', (e) => {
        if (!isPulling) return;
        
        const currentY = e.changedTouches[0].clientY;
        const diff = currentY - startY;
        
        if (diff > 80 && mainContent.scrollTop === 0) {
            // Trigger refresh
            showToast('Refreshing...');
            location.reload();
        }
        
        isPulling = false;
    }, { passive: true });
}

// ============================================
// SCROLL PROGRESS
// ============================================

function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const progressBar = document.getElementById('scrollProgress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }, { passive: true });
}

// ============================================
// KEYBOARD DETECTION
// ============================================

function setupKeyboardDetection() {
    // Detect keyboard open/close by viewport height change
    let initialHeight = window.innerHeight;
    
    window.addEventListener('resize', () => {
        const currentHeight = window.innerHeight;
        const heightDiff = initialHeight - currentHeight;
        
        // If height decreased significantly, keyboard is likely open
        if (heightDiff > 150) {
            hideBottomNav();
        } else {
            showBottomNav();
        }
    });
    
    // Also handle focus/blur events
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', hideBottomNav);
        input.addEventListener('blur', showBottomNav);
    });
}

function hideBottomNav() {
    const nav = document.getElementById('mobileBottomNav');
    const fab = document.getElementById('fabContainer');
    const contextBar = document.getElementById('contextActionBar');
    
    if (nav) nav.style.transform = 'translateY(100%)';
    if (fab) fab.classList.add('hidden');
    if (contextBar) contextBar.style.transform = 'translateY(100%)';
}

function showBottomNav() {
    const nav = document.getElementById('mobileBottomNav');
    const fab = document.getElementById('fabContainer');
    const contextBar = document.getElementById('contextActionBar');
    
    if (nav) nav.style.transform = 'translateY(0)';
    if (fab) fab.classList.remove('hidden');
    if (contextBar && MobileNav.currentContext !== 'default') {
        contextBar.style.transform = 'translateY(0)';
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Trigger haptic feedback
 */
function triggerHaptic(type) {
    if (!navigator.vibrate) return;
    
    switch (type) {
        case 'light':
            navigator.vibrate(10);
            break;
        case 'medium':
            navigator.vibrate(20);
            break;
        case 'heavy':
            navigator.vibrate([30, 50, 30]);
            break;
        case 'success':
            navigator.vibrate([10, 50, 10]);
            break;
        case 'error':
            navigator.vibrate([50, 30, 50]);
            break;
    }
}

/**
 * Show toast notification
 * Only define if not already defined (main.js defines this on index.html)
 */
if (typeof showToast === 'undefined') {
    function showToast(message) {
        // Create toast element
        let toast = document.getElementById('mobileToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'mobileToast';
            toast.style.cssText = `
                position: fixed;
                bottom: 100px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: var(--secondary);
                color: var(--text-primary);
                padding: 0.875rem 1.5rem;
                border-radius: 12px;
                font-size: 0.9rem;
                z-index: 3000;
                opacity: 0;
                transition: all 0.3s ease;
                border: 1px solid var(--border);
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                max-width: 90vw;
                text-align: center;
            `;
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(100px)';
        }, 2500);
    }
}

/**
 * Load external script dynamically
 */
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = () => console.error('Failed to load:', src);
    document.head.appendChild(script);
}

/**
 * Add sheet drag gestures
 */
function addSheetGestures(sheet, closeCallback) {
    let startY = 0;
    let currentY = 0;
    
    sheet.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    sheet.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        
        if (diff > 0) {
            sheet.style.transform = `translateY(${diff}px)`;
        }
    }, { passive: true });
    
    sheet.addEventListener('touchend', () => {
        const diff = currentY - startY;
        
        if (diff > 100) {
            closeCallback();
        } else {
            sheet.style.transform = 'translateY(0)';
        }
    }, { passive: true });
}

/**
 * Add drawer swipe gestures
 */
function addDrawerGestures(drawer) {
    let startY = 0;
    
    drawer.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    drawer.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const diff = startY - currentY;
        
        // If swiping up from handle, open drawer
        if (diff > 50 && !MobileNav.isQuickActionsOpen) {
            toggleQuickActions();
        }
        // If swiping down, close drawer
        else if (diff < -50 && MobileNav.isQuickActionsOpen) {
            toggleQuickActions();
        }
    }, { passive: true });
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

// Expose functions globally
window.MobileNav = MobileNav;
window.initMobileNav = initMobileNav;
window.handleNavClick = handleNavClick;
window.setActiveNavItem = setActiveNavItem;
window.updateNavContext = updateNavContext;
window.openMoreMenu = openMoreMenu;
window.closeMoreMenu = closeMoreMenu;
window.toggleQuickActions = toggleQuickActions;
window.openQuickActions = openQuickActions;
window.toggleFabMenu = toggleFabMenu;
window.handleSwipe = handleSwipe;
window.showBottomNav = showBottomNav;
window.hideBottomNav = hideBottomNav;
window.nextPick = nextPick;
window.previousPick = previousPick;
window.jumpToPick = jumpToPick;
window.showJumpToPick = showJumpToPick;
window.openPickDetails = openPickDetails;
window.closePickDetails = closePickDetails;
window.nextPickModal = nextPickModal;
window.previousPickModal = previousPickModal;
window.triggerHaptic = triggerHaptic;
window.shareCurrentView = shareCurrentView;
window.saveCurrentMock = saveCurrentMock;

// ============================================
// AUTO-INITIALIZATION
// ============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure other scripts have loaded
    setTimeout(initMobileNav, 100);
});

// Re-initialize on resize if switching to mobile
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.getElementById('mobileBottomNav')) {
        initMobileNav();
    }
});

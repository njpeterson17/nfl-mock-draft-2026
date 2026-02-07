/**
 * NFL Mock Draft - Player Image Integration
 * Easy-to-use functions for integrating player images across the site
 */

(function() {
    'use strict';

    // ==========================================
    // MAIN INTEGRATION API
    // ==========================================

    const PlayerImageIntegration = {
        
        /**
         * Initialize the image system on page load
         */
        init() {
            // Load CSS if not already loaded
            this.loadStyles();
            
            // Initialize lazy loading for existing containers
            this.initLazyLoading();
            
            // Add mutation observer for dynamically added content
            this.initMutationObserver();
            
            console.log('🖼️ Player Image Integration initialized');
        },

        /**
         * Load required stylesheets
         */
        loadStyles() {
            const requiredStyles = [
                'css/player-images.css',
                'css/player-initials.css'
            ];

            requiredStyles.forEach(href => {
                if (!document.querySelector(`link[href="${href}"]`)) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    document.head.appendChild(link);
                }
            });
        },

        /**
         * Initialize lazy loading for player photos
         */
        initLazyLoading() {
            if (typeof window.playerImageLoader === 'undefined') {
                console.warn('PlayerImageLoader not loaded');
                return;
            }

            // Find all player photo containers
            const containers = document.querySelectorAll('.player-photo[data-player-name]');
            containers.forEach(container => {
                window.playerImageLoader.observe(container);
            });
        },

        /**
         * Watch for dynamically added player photos
         */
        initMutationObserver() {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check if the added node is a player photo
                            if (node.matches && node.matches('.player-photo[data-player-name]')) {
                                window.playerImageLoader?.observe(node);
                            }
                            // Check for player photos within the added node
                            const photos = node.querySelectorAll?.('.player-photo[data-player-name]');
                            photos?.forEach(photo => {
                                window.playerImageLoader?.observe(photo);
                            });
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        },

        /**
         * Create a player photo element
         */
        createPlayerPhoto(player, options = {}) {
            const {
                size = 'medium',
                showPosition = true,
                lazy = true
            } = options;

            const container = document.createElement('div');
            container.className = `player-photo ${size}`;
            container.dataset.playerName = player.name;
            container.dataset.playerPosition = player.position;
            container.dataset.playerSchool = player.school;

            // Add loading state
            container.classList.add('loading');

            // Load image immediately if not lazy
            if (!lazy && window.playerImageLoader) {
                window.playerImageLoader.load(container, player.name, player.position, player.school);
            } else if (window.playerImageLoader) {
                // Observe for lazy loading
                window.playerImageLoader.observe(container);
            }

            return container;
        },

        /**
         * Update all player photos on the page
         */
        refreshAll() {
            const containers = document.querySelectorAll('.player-photo');
            containers.forEach(container => {
                if (window.playerImageLoader) {
                    window.playerImageLoader.loadIntoContainer(container);
                }
            });
        },

        /**
         * Get image URL for a player (async)
         */
        async getImageUrl(playerName, position, school) {
            if (!window.playerImageLoader) {
                return null;
            }
            try {
                return await window.playerImageLoader.loadPlayerImage(playerName, position, school);
            } catch (e) {
                return null;
            }
        },

        /**
         * Create initials placeholder HTML string
         */
        createInitialsHTML(name, position, school) {
            const initials = this.getInitials(name);
            const colors = this.getTeamColors(school);
            
            return `
                <div class="player-photo-placeholder" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});" data-position="${position}">
                    <span class="initials">${initials}</span>
                    <span class="position-badge">${position}</span>
                </div>
            `;
        },

        /**
         * Get initials from name
         */
        getInitials(name) {
            if (!name) return '??';
            return name
                .split(' ')
                .map(part => part[0])
                .join('')
                .substring(0, 2)
                .toUpperCase();
        },

        /**
         * Get team colors
         */
        getTeamColors(school) {
            if (window.PlayerImageDatabase) {
                return window.PlayerImageDatabase.getTeamColorsBySchool(school);
            }
            return { primary: '#1a1a2e', secondary: '#16213e', name: school };
        }
    };

    // ==========================================
    // CONVENIENCE FUNCTIONS
    // ==========================================

    /**
     * Quick function to load a player image into an element
     */
    window.loadPlayerImage = function(container, playerName, position, school) {
        if (typeof container === 'string') {
            container = document.getElementById(container);
        }
        if (container && window.playerImageLoader) {
            return window.playerImageLoader.load(container, playerName, position, school);
        }
        return Promise.resolve(null);
    };

    /**
     * Quick function to create a player photo element
     */
    window.createPlayerPhoto = function(player, options) {
        return PlayerImageIntegration.createPlayerPhoto(player, options);
    };

    /**
     * Refresh all player images
     */
    window.refreshPlayerImages = function() {
        PlayerImageIntegration.refreshAll();
    };

    /**
     * Get image database stats
     */
    window.getImageDatabaseStats = function() {
        if (window.PlayerImageDatabase) {
            return window.PlayerImageDatabase.getStats();
        }
        return null;
    };

    // ==========================================
    // AUTO-INITIALIZATION
    // ==========================================

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => PlayerImageIntegration.init());
    } else {
        PlayerImageIntegration.init();
    }

    // Expose integration object
    window.PlayerImageIntegration = PlayerImageIntegration;

})();

// ==========================================
// HTML DATA ATTRIBUTE AUTO-LOADING
// ==========================================

/**
 * Automatically load images for elements with data attributes
 * Usage: <div class="player-photo" data-player="John Doe" data-position="QB" data-school="Alabama"></div>
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with player data attributes
    const autoLoadElements = document.querySelectorAll('[data-player]');
    
    autoLoadElements.forEach(element => {
        const name = element.dataset.player;
        const position = element.dataset.position || 'P';
        const school = element.dataset.school || '';
        
        // Add player-photo class if not present
        if (!element.classList.contains('player-photo')) {
            element.classList.add('player-photo');
        }
        
        // Set data attributes for loader
        element.dataset.playerName = name;
        element.dataset.playerPosition = position;
        element.dataset.playerSchool = school;
        
        // Load image
        if (window.playerImageLoader) {
            window.playerImageLoader.observe(element);
        }
    });
});

// ==========================================
// FRAMEWORK INTEGRATION HELPERS
// ==========================================

/**
 * React/Vue/Angular helper: Generate player photo props
 */
window.getPlayerPhotoProps = function(player) {
    const dbData = window.PlayerImageDatabase?.get(player.name);
    const imageUrl = dbData ? 
        (dbData.hasLocal ? dbData.local : (dbData.espn || dbData.cbs)) : 
        null;
    
    return {
        src: imageUrl,
        alt: player.name,
        fallback: window.PlayerImageIntegration?.createInitialsHTML(
            player.name, 
            player.position, 
            player.school
        )
    };
};

/**
 * Helper for player cards in the mock draft
 */
window.renderPlayerCardPhoto = function(containerSelector, pick) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const photoContainer = container.querySelector('.player-photo') || container;
    
    if (pick.player) {
        window.loadPlayerImage(
            photoContainer,
            pick.player,
            pick.position,
            pick.school
        );
    }
};

/**
 * NFL Mock Draft - Player Image Loader
 * Smart image loading with caching, fallbacks, and performance optimization
 */

class PlayerImageLoader {
    constructor() {
        // Cache for loaded images
        this.cache = new Map();
        this.failedUrls = new Set();
        
        // Configuration
        this.config = {
            placeholderImage: 'images/players/placeholder.jpg',
            cacheExpiry: 7 * 24 * 60 * 60 * 1000, // 7 days
            lazyLoadOffset: '100px',
            retryAttempts: 2,
            batchSize: 5
        };

        // Initialize IntersectionObserver for lazy loading
        this.initLazyLoader();
    }

    /**
     * Initialize IntersectionObserver for lazy loading
     */
    initLazyLoader() {
        if (typeof window === 'undefined' || !window.IntersectionObserver) {
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    this.loadIntoContainer(container);
                    this.observer.unobserve(container);
                }
            });
        }, {
            rootMargin: this.config.lazyLoadOffset
        });
    }

    /**
     * Main entry point - load player image into container
     */
    async load(container, playerName, position, school) {
        // If container is a string, treat it as element ID
        if (typeof container === 'string') {
            container = document.getElementById(container);
        }
        
        if (!container) {
            console.warn(`Container not found for player: ${playerName}`);
            return null;
        }

        // Store player data on container
        container.dataset.playerName = playerName;
        container.dataset.playerPosition = position || 'P';
        container.dataset.playerSchool = school || '';

        // Check cache first
        const cacheKey = this.getCacheKey(playerName, school);
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            this.renderImage(container, cached, playerName);
            return cached;
        }

        // Start loading
        container.classList.add('loading');

        try {
            const imageUrl = await this.loadPlayerImage(playerName, position, school);
            this.cache.set(cacheKey, imageUrl);
            this.renderImage(container, imageUrl, playerName);
            return imageUrl;
        } catch (error) {
            console.warn(`Failed to load image for ${playerName}:`, error);
            const initialsPlaceholder = this.createInitialsPlaceholder(playerName, position, school);
            container.innerHTML = initialsPlaceholder;
            container.classList.remove('loading');
            container.classList.add('initials-placeholder');
            return null;
        }
    }

    /**
     * Load player image with fallback chain
     */
    async loadPlayerImage(playerName, position, school) {
        // Check if we have database entry
        const dbData = window.PlayerImageDatabase?.get(playerName);
        
        if (dbData) {
            // Try sources in priority order
            const sources = [
                dbData.local,
                dbData.espn,
                dbData.cbs
            ].filter(Boolean);

            for (const url of sources) {
                if (this.failedUrls.has(url)) continue;
                
                try {
                    const loaded = await this.tryLoadImage(url);
                    if (loaded) {
                        return url;
                    }
                } catch (e) {
                    this.failedUrls.add(url);
                }
            }
        }

        // Try local image based on name
        const localPath = this.getLocalImagePath(playerName);
        try {
            const loaded = await this.tryLoadImage(localPath);
            if (loaded) {
                return localPath;
            }
        } catch (e) {
            // Continue to fallback
        }

        // Return placeholder path (will be handled by initials fallback in render)
        throw new Error('No image source available');
    }

    /**
     * Try to load an image
     */
    tryLoadImage(url) {
        return new Promise((resolve, reject) => {
            // Skip if previously failed
            if (this.failedUrls.has(url)) {
                reject(new Error('Previously failed'));
                return;
            }

            const img = new Image();
            const timeout = setTimeout(() => {
                this.failedUrls.add(url);
                reject(new Error('Timeout'));
            }, 5000);

            img.onload = () => {
                clearTimeout(timeout);
                resolve(true);
            };

            img.onerror = () => {
                clearTimeout(timeout);
                this.failedUrls.add(url);
                reject(new Error('Load failed'));
            };

            img.src = url;
        });
    }

    /**
     * Render image into container
     */
    renderImage(container, url, playerName) {
        container.classList.remove('loading');
        container.innerHTML = '';

        const img = document.createElement('img');
        img.src = url;
        img.alt = playerName;
        img.loading = 'lazy';
        
        // Add fade-in effect
        img.classList.add('fade-in');
        
        container.appendChild(img);
    }

    /**
     * Create initials placeholder HTML
     */
    createInitialsPlaceholder(name, position, school) {
        const initials = this.getInitials(name);
        const colors = this.getTeamColors(school);
        
        return `
            <div class="player-photo-placeholder" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
                <span class="initials">${initials}</span>
                <span class="position-badge">${position || 'P'}</span>
            </div>
        `;
    }

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
    }

    /**
     * Get team colors for placeholder
     */
    getTeamColors(school) {
        // Try database first
        if (window.PlayerImageDatabase) {
            return window.PlayerImageDatabase.getTeamColorsBySchool(school);
        }

        // Fallback position-based colors
        return { primary: '#1a1a2e', secondary: '#16213e', name: school };
    }

    /**
     * Get local image path from player name
     */
    getLocalImagePath(playerName) {
        const slug = playerName
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        return `images/players/${slug}.jpg`;
    }

    /**
     * Get cache key
     */
    getCacheKey(name, school) {
        const slug = name.toLowerCase().replace(/\s+/g, '-');
        return `${slug}-${school || 'unknown'}`;
    }

    /**
     * Load image into container from container's data attributes
     */
    async loadIntoContainer(container) {
        const name = container.dataset.playerName;
        const position = container.dataset.playerPosition;
        const school = container.dataset.playerSchool;

        if (!name) {
            console.warn('Container missing player-name data attribute');
            return;
        }

        return this.load(container, name, position, school);
    }

    /**
     * Observe container for lazy loading
     */
    observe(container) {
        if (this.observer && container) {
            this.observer.observe(container);
        }
    }

    /**
     * Batch load images for multiple players
     */
    async batchLoad(containers) {
        const results = [];
        
        for (let i = 0; i < containers.length; i += this.config.batchSize) {
            const batch = containers.slice(i, i + this.config.batchSize);
            
            const batchPromises = batch.map(container => {
                if (typeof container === 'string') {
                    container = document.getElementById(container);
                }
                if (!container) return Promise.resolve(null);
                
                return this.loadIntoContainer(container)
                    .then(url => ({ container, url, success: true }))
                    .catch(() => ({ container, url: null, success: false }));
            });
            
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);
        }

        return results;
    }

    /**
     * Preload images for players
     */
    async preload(playerNames) {
        const promises = playerNames.map(name => {
            const dbData = window.PlayerImageDatabase?.get(name);
            if (dbData) {
                return this.loadPlayerImage(name, dbData.position, dbData.school)
                    .catch(() => null);
            }
            return Promise.resolve(null);
        });

        return Promise.all(promises);
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.cache.clear();
        this.failedUrls.clear();
    }

    /**
     * Get cache stats
     */
    getStats() {
        return {
            cached: this.cache.size,
            failed: this.failedUrls.size
        };
    }

    /**
     * Process all .player-photo containers on the page
     */
    processAllContainers() {
        const containers = document.querySelectorAll('.player-photo');

        containers.forEach(container => {
            // Check if already has an img that loaded successfully
            const existingImg = container.querySelector('img');
            if (existingImg && existingImg.complete && existingImg.naturalHeight > 0) {
                return; // Image already loaded
            }

            // Get player info from img alt or data attributes
            let playerName = container.dataset.playerName;
            let position = container.dataset.playerPosition;
            let school = container.dataset.playerSchool;

            // Try to extract from img alt if not in data attributes
            if (!playerName && existingImg) {
                playerName = existingImg.alt;
            }

            if (playerName) {
                // Use lazy loading via observer
                container.dataset.playerName = playerName;
                if (position) container.dataset.playerPosition = position;
                if (school) container.dataset.playerSchool = school;
                this.observe(container);
            }
        });
    }

    /**
     * Process immediately visible containers (above fold)
     */
    processVisibleContainers() {
        const containers = document.querySelectorAll('.player-photo');
        const viewportHeight = window.innerHeight;

        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < viewportHeight) {
                this.loadIntoContainer(container);
            } else {
                this.observe(container);
            }
        });
    }
}

// Create global instance
window.playerImageLoader = new PlayerImageLoader();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PlayerImageLoader };
}

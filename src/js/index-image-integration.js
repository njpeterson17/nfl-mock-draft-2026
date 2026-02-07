/**
 * NFL Mock Draft - Index Page Image Integration
 * Automatically upgrades existing player photos to use the new image system
 */

(function() {
    'use strict';

    const IndexImageIntegration = {
        
        /**
         * Initialize integration
         */
        init() {
            // Wait for dependencies to load
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        },

        /**
         * Setup the integration
         */
        setup() {
            // Check if required libraries are loaded
            if (typeof PlayerImageDatabase === 'undefined' || 
                typeof playerImageLoader === 'undefined') {
                console.warn('Player image libraries not loaded, retrying in 500ms...');
                setTimeout(() => this.setup(), 500);
                return;
            }

            console.log('🖼️ Index Image Integration initialized');
            
            // Upgrade existing player photos
            this.upgradeExistingPhotos();
            
            // Setup observer for dynamically added content
            this.setupMutationObserver();
        },

        /**
         * Upgrade existing player photo elements
         */
        upgradeExistingPhotos() {
            const photos = document.querySelectorAll('.pick-card .player-photo');
            
            photos.forEach(photoContainer => {
                // Skip if already processed
                if (photoContainer.dataset.imageProcessed) return;
                photoContainer.dataset.imageProcessed = 'true';

                // Find player info from parent card
                const card = photoContainer.closest('.pick-card');
                if (!card) return;

                const playerName = card.dataset.player;
                const position = card.dataset.position;
                
                // Find school from player-info
                const schoolElement = card.querySelector('.player-school');
                const school = schoolElement ? schoolElement.textContent.trim() : '';

                if (playerName) {
                    this.upgradePhoto(photoContainer, playerName, position, school);
                }
            });
        },

        /**
         * Upgrade a single photo container
         */
        upgradePhoto(container, playerName, position, school) {
            // Check database for better image sources
            const dbData = PlayerImageDatabase.get(playerName);
            
            if (dbData) {
                // Set data attributes for the loader
                container.dataset.playerName = playerName;
                container.dataset.playerPosition = dbData.position || position;
                container.dataset.playerSchool = dbData.school || school;

                // Try to use the image system
                const existingImg = container.querySelector('img');
                
                if (existingImg) {
                    // If current image is placeholder or missing, try to upgrade
                    const currentSrc = existingImg.src;
                    const isPlaceholder = currentSrc.includes('placeholder') || 
                                         currentSrc.includes('francis-mauigoa.jpg'); // Wrong default
                    
                    if (isPlaceholder || !dbData.hasLocal) {
                        // Try to load better image
                        this.loadBetterImage(container, dbData, existingImg);
                    }
                } else {
                    // No image exists, load one
                    this.loadImage(container, dbData);
                }
            }
        },

        /**
         * Try to load a better image
         */
        loadBetterImage(container, dbData, existingImg) {
            // Priority: local -> ESPN -> CBS -> initials placeholder
            const sources = [
                dbData.hasLocal ? dbData.local : null,
                dbData.espn,
                dbData.cbs
            ].filter(Boolean);

            if (sources.length === 0) {
                // No external sources, use initials
                this.setInitialsPlaceholder(container, dbData);
                return;
            }

            // Try first source
            const testImg = new Image();
            testImg.onload = () => {
                existingImg.src = sources[0];
                existingImg.classList.add('fade-in');
            };
            testImg.onerror = () => {
                // Try next source or use initials
                if (sources.length > 1) {
                    this.tryNextSource(container, sources.slice(1), existingImg, dbData);
                } else {
                    this.setInitialsPlaceholder(container, dbData);
                }
            };
            testImg.src = sources[0];
        },

        /**
         * Try next image source
         */
        tryNextSource(container, sources, existingImg, dbData) {
            if (sources.length === 0) {
                this.setInitialsPlaceholder(container, dbData);
                return;
            }

            const testImg = new Image();
            testImg.onload = () => {
                existingImg.src = sources[0];
                existingImg.classList.add('fade-in');
            };
            testImg.onerror = () => {
                this.tryNextSource(container, sources.slice(1), existingImg, dbData);
            };
            testImg.src = sources[0];
        },

        /**
         * Load image when none exists
         */
        loadImage(container, dbData) {
            const sources = [
                dbData.hasLocal ? dbData.local : null,
                dbData.espn,
                dbData.cbs
            ].filter(Boolean);

            if (sources.length > 0) {
                const img = document.createElement('img');
                img.alt = dbData.name || 'Player';
                
                // Try sources
                this.loadImageWithFallback(img, sources, 0, () => {
                    container.appendChild(img);
                    img.classList.add('fade-in');
                }, () => {
                    this.setInitialsPlaceholder(container, dbData);
                });
            } else {
                this.setInitialsPlaceholder(container, dbData);
            }
        },

        /**
         * Load image with fallback chain
         */
        loadImageWithFallback(img, sources, index, onSuccess, onError) {
            if (index >= sources.length) {
                onError();
                return;
            }

            img.onload = onSuccess;
            img.onerror = () => {
                this.loadImageWithFallback(img, sources, index + 1, onSuccess, onError);
            };
            img.src = sources[index];
        },

        /**
         * Set initials placeholder
         */
        setInitialsPlaceholder(container, dbData) {
            // Clear container
            container.innerHTML = '';
            container.classList.add('initials-placeholder');

            const initials = this.getInitials(dbData.name);
            const colors = PlayerImageDatabase.getTeamColors(dbData.teamColorKey);

            container.innerHTML = `
                <div class="player-photo-placeholder" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
                    <span class="initials">${initials}</span>
                    <span class="position-badge">${dbData.position}</span>
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
         * Setup mutation observer for dynamically added picks
         */
        setupMutationObserver() {
            const observer = new MutationObserver((mutations) => {
                let shouldUpgrade = false;
                
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.matches && node.matches('.pick-card')) {
                                shouldUpgrade = true;
                            } else if (node.querySelector && node.querySelector('.pick-card')) {
                                shouldUpgrade = true;
                            }
                        }
                    });
                });

                if (shouldUpgrade) {
                    // Debounce the upgrade
                    clearTimeout(this.upgradeTimeout);
                    this.upgradeTimeout = setTimeout(() => {
                        this.upgradeExistingPhotos();
                    }, 100);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
        },

        /**
         * Manual refresh all images
         */
        refreshAll() {
            document.querySelectorAll('.player-photo').forEach(photo => {
                delete photo.dataset.imageProcessed;
            });
            this.upgradeExistingPhotos();
        }
    };

    // Initialize
    IndexImageIntegration.init();

    // Expose globally
    window.IndexImageIntegration = IndexImageIntegration;

})();

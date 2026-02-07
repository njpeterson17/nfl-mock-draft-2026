/**
 * NFL Mock Draft - Player Image System
 * Comprehensive image loading with external fetching and fallback chain
 * 
 * Features:
 * - Local image checking (66 existing images)
 * - External source fetching (ESPN, CBS, 247Sports)
 * - Team logo fallbacks (College & NFL)
 * - Generated initials placeholders
 * - Smart caching system
 * - IntersectionObserver lazy loading
 * - Batch loading for performance
 */

// ==========================================
// PLAYER IMAGE LOADER - Main System
// ==========================================
const PlayerImageLoader = {
    // Configuration
    config: {
        localImagePath: 'images/players/',
        placeholderImage: 'images/players/placeholder.jpg',
        cacheExpiry: 7 * 24 * 60 * 60 * 1000, // 7 days
        batchSize: 10,
        batchDelay: 100,
        lazyLoadOffset: '50px',
        retryAttempts: 2
    },

    // Loading state tracking
    loadingQueue: new Map(),
    loadedImages: new Map(),
    failedSources: new Set(),

    // Priority order for image sources
    sources: [
        'local',        // Check local images first (66 available)
        'espn',         // ESPN player photos
        'cbs',          // CBS Sports player photos
        'college',      // College athletic sites
        'team-logo',    // College team logos
        'initials'      // Generated initials placeholder
    ],

    /**
     * Initialize the image system
     */
    init() {
        this.cache = new ImageCache();
        this.collegeLogos = new CollegeLogoDatabase();
        this.externalIds = new PlayerExternalIdDatabase();
        this.preloadVisibleImages();
        console.log('🖼️ Player Image System initialized');
    },

    /**
     * Main entry point - load player image with full fallback chain
     */
    async loadPlayerImage(player, options = {}) {
        const { name, school, position } = player;
        const cacheKey = this.getCacheKey(name, school);

        // Check memory cache first
        if (this.loadedImages.has(cacheKey)) {
            return this.loadedImages.get(cacheKey);
        }

        // Check localStorage cache
        const cached = await this.cache.get(cacheKey);
        if (cached) {
            this.loadedImages.set(cacheKey, cached);
            return cached;
        }

        // Prevent duplicate concurrent requests
        if (this.loadingQueue.has(cacheKey)) {
            return this.loadingQueue.get(cacheKey);
        }

        // Start loading process
        const loadPromise = this.loadWithFallbacks(player, 0);
        this.loadingQueue.set(cacheKey, loadPromise);

        try {
            const result = await loadPromise;
            this.loadedImages.set(cacheKey, result);
            await this.cache.set(cacheKey, result);
            this.loadingQueue.delete(cacheKey);
            return result;
        } catch (error) {
            this.loadingQueue.delete(cacheKey);
            return this.generateInitials(name, position);
        }
    },

    /**
     * Try each source in sequence
     */
    async loadWithFallbacks(player, sourceIndex) {
        const { name, school, position } = player;

        if (sourceIndex >= this.sources.length) {
            return this.generateInitials(name, position);
        }

        const source = this.sources[sourceIndex];
        const sourceKey = `${source}:${name}`;

        // Skip if this source has permanently failed for this player
        if (this.failedSources.has(sourceKey)) {
            return this.loadWithFallbacks(player, sourceIndex + 1);
        }

        try {
            const url = await this.trySource(source, name, school);
            if (url) {
                // Verify the image actually loads
                const isValid = await this.verifyImage(url);
                if (isValid) {
                    return url;
                }
            }
            // Source failed, try next
            this.failedSources.add(sourceKey);
            return this.loadWithFallbacks(player, sourceIndex + 1);
        } catch (error) {
            this.failedSources.add(sourceKey);
            return this.loadWithFallbacks(player, sourceIndex + 1);
        }
    },

    /**
     * Try a specific image source
     */
    async trySource(source, playerName, school) {
        const externalIds = this.externalIds.get(playerName);

        switch (source) {
            case 'local':
                return this.checkLocalImage(playerName);
            
            case 'espn':
                if (externalIds?.espn) {
                    return ImageSources.espn(externalIds.espn);
                }
                return null;
            
            case 'cbs':
                if (externalIds?.cbs) {
                    return ImageSources.cbs(externalIds.cbs);
                }
                return null;
            
            case 'college':
                if (externalIds?.collegeId && externalIds?.school) {
                    return ImageSources.college(
                        externalIds.school,
                        externalIds.collegeId,
                        playerName
                    );
                }
                return null;
            
            case 'team-logo':
                return this.collegeLogos.get(school);
            
            default:
                return null;
        }
    },

    /**
     * Check if local image exists
     */
    checkLocalImage(playerName) {
        const slug = this.slugify(playerName);
        const path = `${this.config.localImagePath}${slug}.jpg`;
        // Return path - actual existence checked by verifyImage
        return path;
    },

    /**
     * Verify an image URL actually loads
     */
    verifyImage(url) {
        return new Promise((resolve) => {
            // Skip verification for data URLs (initials)
            if (url.startsWith('data:')) {
                resolve(true);
                return;
            }

            const img = new Image();
            const timeout = setTimeout(() => resolve(false), 5000);

            img.onload = () => {
                clearTimeout(timeout);
                resolve(true);
            };

            img.onerror = () => {
                clearTimeout(timeout);
                resolve(false);
            };

            img.src = url;
        });
    },

    /**
     * Generate initials placeholder as data URL
     */
    generateInitials(name, position = 'P') {
        const initials = this.getInitials(name);
        const colors = this.getPositionColors(position);
        
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="150" viewBox="0 0 120 150">
                <defs>
                    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:${colors.bg1}"/>
                        <stop offset="100%" style="stop-color:${colors.bg2}"/>
                    </linearGradient>
                </defs>
                <rect width="120" height="150" fill="url(#bg)"/>
                <text x="60" y="75" text-anchor="middle" dy="0.35em" 
                      fill="${colors.text}" font-family="Inter, Arial, sans-serif" 
                      font-size="42" font-weight="700">${initials}</text>
                <text x="60" y="125" text-anchor="middle" 
                      fill="${colors.text}" font-family="Inter, Arial, sans-serif" 
                      font-size="14" opacity="0.7">${position}</text>
            </svg>
        `;
        
        return `data:image/svg+xml;base64,${btoa(svg.trim())}`;
    },

    /**
     * Get cache key for player
     */
    getCacheKey(name, school) {
        return `${this.slugify(name)}-${this.slugify(school || '')}`;
    },

    /**
     * Convert name to URL-friendly slug
     */
    slugify(name) {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    },

    /**
     * Get initials from name
     */
    getInitials(name) {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    },

    /**
     * Get colors based on position
     */
    getPositionColors(position) {
        const colorMap = {
            'QB': { bg1: '#1e3a5f', bg2: '#0d2137', text: '#00d4ff' },
            'RB': { bg1: '#3d1f1f', bg2: '#1a0f0f', text: '#ff6b6b' },
            'WR': { bg1: '#1f3d1f', bg2: '#0f1a0f', text: '#51cf66' },
            'TE': { bg1: '#3d3d1f', bg2: '#1a1a0f', text: '#ffd43b' },
            'OT': { bg1: '#1f2d3d', bg2: '#0f151a', text: '#74c0fc' },
            'IOL': { bg1: '#2d1f3d', bg2: '#150f1a', text: '#da77f2' },
            'EDGE': { bg1: '#3d1f2d', bg2: '#1a0f12', text: '#ff8787' },
            'DL': { bg1: '#1f3d3d', bg2: '#0f1a1a', text: '#63e6be' },
            'LB': { bg1: '#3d2d1f', bg2: '#1a120f', text: '#ffc078' },
            'CB': { bg1: '#1f1f3d', bg2: '#0f0f1a', text: '#91a7ff' },
            'S': { bg1: '#2d3d1f', bg2: '#121a0f', text: '#b2f2bb' }
        };
        return colorMap[position] || { bg1: '#2d3748', bg2: '#1a202c', text: '#a0aec0' };
    },

    /**
     * Preload images for visible players using IntersectionObserver
     */
    preloadVisibleImages() {
        if (typeof window === 'undefined' || !window.IntersectionObserver) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    this.loadIntoContainer(container);
                    observer.unobserve(container);
                }
            });
        }, {
            rootMargin: this.config.lazyLoadOffset
        });

        // Observe all player photo containers
        setTimeout(() => {
            const containers = document.querySelectorAll('.player-photo[data-player-name]');
            containers.forEach(c => observer.observe(c));
        }, 100);
    },

    /**
     * Load image into a container element
     */
    async loadIntoContainer(container, options = {}) {
        const name = container.dataset.playerName;
        const school = container.dataset.playerSchool;
        const position = container.dataset.playerPosition || 'P';

        if (!name) return;

        container.classList.add('loading');

        const player = { name, school, position };
        const url = await this.loadPlayerImage(player, options);

        // Clear container and add image
        container.innerHTML = '';
        container.classList.remove('loading');

        if (url.startsWith('data:')) {
            // Initials placeholder
            container.classList.add('initials-placeholder');
            const img = document.createElement('img');
            img.src = url;
            img.alt = name;
            container.appendChild(img);
        } else {
            const img = document.createElement('img');
            img.src = url;
            img.alt = name;
            img.loading = 'lazy';
            container.appendChild(img);
        }

        return url;
    },

    /**
     * Batch load images for a list of players
     */
    async batchLoad(players) {
        const results = [];
        
        for (let i = 0; i < players.length; i += this.config.batchSize) {
            const batch = players.slice(i, i + this.config.batchSize);
            const batchPromises = batch.map(p => 
                this.loadPlayerImage(p).then(url => ({ player: p, url, success: true }))
                    .catch(() => ({ player: p, url: null, success: false }))
            );
            
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);

            // Delay between batches to avoid rate limiting
            if (i + this.config.batchSize < players.length) {
                await new Promise(r => setTimeout(r, this.config.batchDelay));
            }
        }

        return results;
    },

    /**
     * Force refresh a player's image
     */
    async refresh(name, school) {
        const cacheKey = this.getCacheKey(name, school);
        this.loadedImages.delete(cacheKey);
        await this.cache.remove(cacheKey);
        return this.loadPlayerImage({ name, school });
    },

    /**
     * Get loading stats
     */
    getStats() {
        return {
            cached: this.loadedImages.size,
            failed: this.failedSources.size,
            queue: this.loadingQueue.size
        };
    },

    /**
     * Clear all caches
     */
    async clearCache() {
        this.loadedImages.clear();
        this.failedSources.clear();
        await this.cache.clear();
    }
};

// ==========================================
// IMAGE SOURCES - External URLs
// ==========================================
const ImageSources = {
    /**
     * ESPN headshots
     * Format: https://a.espncdn.com/i/headshots/college-football/players/full/{playerId}.png
     */
    espn(playerId) {
        return `https://a.espncdn.com/i/headshots/college-football/players/full/${playerId}.png`;
    },

    /**
     * CBS Sports player photos
     * Format: https://sportshub.cbsistatic.com/i/r/{playerSlug}/thumbnail.jpg
     */
    cbs(playerSlug) {
        return `https://sportshub.cbsistatic.com/i/r/${playerSlug}/thumbnail.jpg`;
    },

    /**
     * 247Sports player photos
     * Format: https://s3media.247sports.com/Players/{playerId}.jpg
     */
    two47(playerId) {
        return `https://s3media.247sports.com/Players/${playerId}.jpg`;
    },

    /**
     * College athletic site player pages
     * Many schools have consistent URL patterns
     */
    college(school, playerId, playerName) {
        const slug = playerName.toLowerCase().replace(/\s+/g, '-');
        
        const patterns = {
            'Alabama': () => `https://rolltide.com/player/${slug}/`,
            'Ohio State': () => `https://ohiostatebuckeyes.com/player/${slug}/`,
            'Georgia': () => `https://georgiadogs.com/player/${slug}/`,
            'Clemson': () => `https://clemsontigers.com/player/${slug}/`,
            'LSU': () => `https://lsusports.net/player/${slug}/`,
            'Oklahoma': () => `https://soonersports.com/player/${slug}/`,
            'Texas': () => `https://texassports.com/player/${slug}/`,
            'Florida': () => `https://floridagators.com/player/${slug}/`,
            'Penn State': () => `https://gopsusports.com/player/${slug}/`,
            'Notre Dame': () => `https://und.com/player/${slug}/`,
            'Miami': () => `https://miamihurricanes.com/player/${slug}/`,
            'USC': () => `https://usctrojans.com/player/${slug}/`,
            'Oregon': () => `https://goducks.com/player/${slug}/`,
            'Michigan': () => `https://mgoblue.com/player/${slug}/`,
            'Auburn': () => `https://auburntigers.com/player/${slug}/`,
            'Tennessee': () => `https://utsports.com/player/${slug}/`,
            'Wisconsin': () => `https://uwbadgers.com/player/${slug}/`,
            'Iowa': () => `https://hawkeyesports.com/player/${slug}/`,
            'Utah': () => `https://utahutes.com/player/${slug}/`,
            'North Carolina': () => `https://goheels.com/player/${slug}/`,
            'Texas A&M': () => `https://12thman.com/player/${slug}/`,
            'Washington': () => `https://gohuskies.com/player/${slug}/`,
            'Nebraska': () => `https://huskers.com/player/${slug}/`,
            'Arkansas': () => `https://arkansasrazorbacks.com/player/${slug}/`,
            'Kentucky': () => `https://ukathletics.com/player/${slug}/`,
            'Missouri': () => `https://mutigers.com/player/${slug}/`,
            'Ole Miss': () => `https://olemisssports.com/player/${slug}/`,
            'Mississippi State': () => `https://hailstate.com/player/${slug}/`,
            'South Carolina': () => `https://gamecocksonline.com/player/${slug}/`,
            'Florida State': () => `https://seminoles.com/player/${slug}/`,
            'Virginia Tech': () => `https://hokiesports.com/player/${slug}/`,
            'NC State': () => `https://gopack.com/player/${slug}/`,
            'Pittsburgh': () => `https://pittsburghpanthers.com/player/${slug}/`,
            'North Dakota State': () => `https://gobison.com/player/${slug}/`,
            'Arizona State': () => `https://thesundevils.com/player/${slug}/`,
            'Minnesota': () => `https://gophersports.com/player/${slug}/`,
            'Texas Tech': () => `https://texastech.com/player/${slug}/`,
            'Baylor': () => `https://baylorbears.com/player/${slug}/`,
            'Cincinnati': () => `https://gobearcats.com/player/${slug}/`,
            'Vanderbilt': () => `https://vucommodores.com/player/${slug}/`,
            'UCLA': () => `https://uclabruins.com/player/${slug}/`,
            'Colorado': () => `https://cubuffs.com/player/${slug}/`,
            'Arizona': () => `https://arizonawildcats.com/player/${slug}/`,
            'Indiana': () => `https://iuhoosiers.com/player/${slug}/`,
            'Purdue': () => `https://purduesports.com/player/${slug}/`,
            'Michigan State': () => `https://msuspartans.com/player/${slug}/`,
            'Rutgers': () => `https://scarletknights.com/player/${slug}/`,
            'Maryland': () => `https://umterps.com/player/${slug}/`,
            'Illinois': () => `https://fightingillini.com/player/${slug}/`,
            'Iowa State': () => `https://cyclones.com/player/${slug}/`,
            'Kansas State': () => `https://kstatesports.com/player/${slug}/`,
            'West Virginia': () => `https://wvusports.com/player/${slug}/`,
            'TCU': () => `https://gofrogs.com/player/${slug}/`,
            'Oklahoma State': () => `https://okstate.com/player/${slug}/`,
            'Kansas': () => `https://kuathletics.com/player/${slug}/`,
            'UCF': () => `https://ucfknights.com/player/${slug}/`,
            'Houston': () => `https://uhcougars.com/player/${slug}/`,
            'BYU': () => `https://byucougars.com/player/${slug}/`,
            'Cincinnati': () => `https://gobearcats.com/player/${slug}/`,
            'Louisville': () => `https://gocards.com/player/${slug}/`,
            'Boston College': () => `https://bceagles.com/player/${slug}/`,
            'Syracuse': () => `https://cuse.com/player/${slug}/`,
            'Wake Forest': () => `https://godeacs.com/player/${slug}/`,
            'Duke': () => `https://goduke.com/player/${slug}/`,
            'North Carolina': () => `https://goheels.com/player/${slug}/`,
            'Virginia': () => `https://virginiasports.com/player/${slug}/`,
            'California': () => `https://calbears.com/player/${slug}/`,
            'Stanford': () => `https://gostanford.com/player/${slug}/`,
            'Oregon State': () => `https://osubeavers.com/player/${slug}/`,
            'Washington State': () => `https://wsucougars.com/player/${slug}/`,
            'Boise State': () => `https://broncosports.com/player/${slug}/`,
            'San Diego State': () => `https://goaztecs.com/player/${slug}/`,
            'Fresno State': () => `https://gobulldogs.com/player/${slug}/`,
            'Memphis': () => `https://gotigersgo.com/player/${slug}/`,
            'Tulane': () => `https://tulanegreenwave.com/player/${slug}/`,
            'SMU': () => `https://smumustangs.com/player/${slug}/`,
            'Tulsa': () => `https://tulsahurricane.com/player/${slug}/`,
            'Navy': () => `https://navysports.com/player/${slug}/`,
            'Army': () => `https://goarmywestpoint.com/player/${slug}/`,
            'Air Force': () => `https://goairforcefalcons.com/player/${slug}/`,
            'Liberty': () => `https://libertyflames.com/player/${slug}/`,
            'Western Kentucky': () => `https://wkusports.com/player/${slug}/`,
            'Marshall': () => `https://herdzone.com/player/${slug}/`,
            'Appalachian State': () => `https://appstatesports.com/player/${slug}/`,
            'Coastal Carolina': () => `https://goccusports.com/player/${slug}/`,
            'Georgia Southern': () => `https://gseagles.com/player/${slug}/`,
            'Georgia State': () => `https://georgiastatesports.com/player/${slug}/`,
            'James Madison': () => `https://jmusports.com/player/${slug}/`,
            'Old Dominion': () => `https://odusports.com/player/${slug}/`,
            'Charlotte': () => `https://charlotte49ers.com/player/${slug}/`,
            'UTSA': () => `https://goutsa.com/player/${slug}/`,
            'North Texas': () => `https://meangreensports.com/player/${slug}/`,
            'Rice': () => `https://riceowls.com/player/${slug}/`,
            'UAB': () => `https://uabsports.com/player/${slug}/`,
            'Florida Atlantic': () => `https://fausports.com/player/${slug}/`,
            'FIU': () => `https://fiusports.com/player/${slug}/`,
            'South Florida': () => `https://gousfbulls.com/player/${slug}/`,
            'Temple': () => `https://owlsports.com/player/${slug}/`,
            'East Carolina': () => `https://ecupirates.com/player/${slug}/`,
            'Tulane': () => `https://tulanegreenwave.com/player/${slug}/`,
            'Southern Miss': () => `https://southernmiss.com/player/${slug}/`,
            'Louisiana': () => `https://ragincajuns.com/player/${slug}/`,
            'Louisiana-Monroe': () => `https://ulmwarhawks.com/player/${slug}/`,
            'Texas State': () => `https://txst.com/player/${slug}/`,
            'Arkansas State': () => `https://astateredwolves.com/player/${slug}/`,
            'South Alabama': () => `https://usajaguars.com/player/${slug}/`,
            'Troy': () => `https://troytrojans.com/player/${slug}/`,
            'UConn': () => `https://uconnhuskies.com/player/${slug}/`,
            'Massachusetts': () => `https://umassathletics.com/player/${slug}/`,
            'New Mexico State': () => `https://nmstatesports.com/player/${slug}/`,
            'UTEP': () => `https://minerathletics.com/player/${slug}/`,
            'New Mexico': () => `https://golobos.com/player/${slug}/`,
            'San Jose State': () => `https://sjsuspartans.com/player/${slug}/`,
            'Hawaii': () => `https://hawaiiathletics.com/player/${slug}/`,
            'Nevada': () => `https://nevadawolfpack.com/player/${slug}/`,
            'UNLV': () => `https://unlvrebels.com/player/${slug}/`,
            'Wyoming': () => `https://gowyo.com/player/${slug}/`,
            'Colorado State': () => `https://csurams.com/player/${slug}/`,
            'Utah State': () => `https://utahstateaggies.com/player/${slug}/`
        };

        const pattern = patterns[school];
        if (pattern) {
            try {
                return pattern();
            } catch (e) {
                return null;
            }
        }
        return null;
    },

    /**
     * NFL team logos
     */
    nflTeamLogo(teamCode) {
        return `https://a.espncdn.com/i/teamlogos/nfl/500/${teamCode}.png`;
    }
};

// ==========================================
// COLLEGE LOGO DATABASE
// ==========================================
class CollegeLogoDatabase {
    constructor() {
        this.logos = {
            // SEC
            'Alabama': 'https://a.espncdn.com/i/teamlogos/ncaa/500/333.png',
            'Georgia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/61.png',
            'LSU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/99.png',
            'Florida': 'https://a.espncdn.com/i/teamlogos/ncaa/500/57.png',
            'Texas A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/245.png',
            'Auburn': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2.png',
            'Tennessee': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png',
            'Ole Miss': 'https://a.espncdn.com/i/teamlogos/ncaa/500/145.png',
            'Mississippi State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/344.png',
            'Kentucky': 'https://a.espncdn.com/i/teamlogos/ncaa/500/96.png',
            'Missouri': 'https://a.espncdn.com/i/teamlogos/ncaa/500/142.png',
            'South Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2579.png',
            'Arkansas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/8.png',
            'Vanderbilt': 'https://a.espncdn.com/i/teamlogos/ncaa/500/238.png',
            'Oklahoma': 'https://a.espncdn.com/i/teamlogos/ncaa/500/201.png',
            'Texas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/251.png',

            // Big Ten
            'Ohio State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/194.png',
            'Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/130.png',
            'Penn State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/213.png',
            'Wisconsin': 'https://a.espncdn.com/i/teamlogos/ncaa/500/275.png',
            'Iowa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png',
            'Michigan State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/127.png',
            'Minnesota': 'https://a.espncdn.com/i/teamlogos/ncaa/500/135.png',
            'Nebraska': 'https://a.espncdn.com/i/teamlogos/ncaa/500/158.png',
            'Northwestern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/77.png',
            'Purdue': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png',
            'Indiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/84.png',
            'Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/356.png',
            'Maryland': 'https://a.espncdn.com/i/teamlogos/ncaa/500/120.png',
            'Rutgers': 'https://a.espncdn.com/i/teamlogos/ncaa/500/164.png',
            'UCLA': 'https://a.espncdn.com/i/teamlogos/ncaa/500/26.png',
            'USC': 'https://a.espncdn.com/i/teamlogos/ncaa/500/30.png',
            'Washington': 'https://a.espncdn.com/i/teamlogos/ncaa/500/264.png',
            'Oregon': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png',

            // ACC
            'Clemson': 'https://a.espncdn.com/i/teamlogos/ncaa/500/228.png',
            'Florida State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/52.png',
            'Miami': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png',
            'North Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png',
            'Pittsburgh': 'https://a.espncdn.com/i/teamlogos/ncaa/500/221.png',
            'Virginia Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/259.png',
            'NC State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/152.png',
            'Boston College': 'https://a.espncdn.com/i/teamlogos/ncaa/500/103.png',
            'Wake Forest': 'https://a.espncdn.com/i/teamlogos/ncaa/500/154.png',
            'Syracuse': 'https://a.espncdn.com/i/teamlogos/ncaa/500/183.png',
            'Louisville': 'https://a.espncdn.com/i/teamlogos/ncaa/500/97.png',
            'Duke': 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png',
            'Virginia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/258.png',
            'Georgia Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/59.png',
            'SMU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png',
            'California': 'https://a.espncdn.com/i/teamlogos/ncaa/500/25.png',
            'Stanford': 'https://a.espncdn.com/i/teamlogos/ncaa/500/24.png',

            // Big 12
            'West Virginia': 'https://a.espncdn.com/i/teamlogos/ncaa/500/277.png',
            'TCU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png',
            'Baylor': 'https://a.espncdn.com/i/teamlogos/ncaa/500/239.png',
            'Oklahoma State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/197.png',
            'Texas Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png',
            'Kansas State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2306.png',
            'Kansas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png',
            'Iowa State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/66.png',
            'Cincinnati': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png',
            'BYU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/252.png',
            'Houston': 'https://a.espncdn.com/i/teamlogos/ncaa/500/248.png',
            'UCF': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2116.png',
            'Arizona': 'https://a.espncdn.com/i/teamlogos/ncaa/500/12.png',
            'Arizona State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/9.png',
            'Colorado': 'https://a.espncdn.com/i/teamlogos/ncaa/500/38.png',
            'Utah': 'https://a.espncdn.com/i/teamlogos/ncaa/500/254.png',

            // Pac-12 (remaining)
            'Oregon State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/204.png',
            'Washington State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/265.png',

            // American
            'Memphis': 'https://a.espncdn.com/i/teamlogos/ncaa/500/235.png',
            'Tulane': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2655.png',
            'East Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/151.png',
            'South Florida': 'https://a.espncdn.com/i/teamlogos/ncaa/500/58.png',
            'Temple': 'https://a.espncdn.com/i/teamlogos/ncaa/500/218.png',
            'UTSA': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2636.png',
            'North Texas': 'https://a.espncdn.com/i/teamlogos/ncaa/500/249.png',
            'Rice': 'https://a.espncdn.com/i/teamlogos/ncaa/500/242.png',
            'UAB': 'https://a.espncdn.com/i/teamlogos/ncaa/500/5.png',
            'Florida Atlantic': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2226.png',
            'Charlotte': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2429.png',
            'Tulsa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/202.png',

            // Mountain West
            'Boise State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/68.png',
            'San Diego State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/21.png',
            'Fresno State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/278.png',
            'Colorado State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/36.png',
            'Air Force': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2005.png',
            'Wyoming': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2751.png',
            'New Mexico': 'https://a.espncdn.com/i/teamlogos/ncaa/500/167.png',
            'Utah State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/328.png',
            'Nevada': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2440.png',
            'UNLV': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2439.png',
            'San Jose State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/23.png',
            'Hawaii': 'https://a.espncdn.com/i/teamlogos/ncaa/500/62.png',

            // Sun Belt
            'Coastal Carolina': 'https://a.espncdn.com/i/teamlogos/ncaa/500/324.png',
            'Appalachian State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2026.png',
            'Georgia Southern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/290.png',
            'Georgia State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2247.png',
            'Louisiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/309.png',
            'Texas State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/326.png',
            'South Alabama': 'https://a.espncdn.com/i/teamlogos/ncaa/500/6.png',
            'Troy': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2653.png',
            'Arkansas State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2032.png',
            'Louisiana-Monroe': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2433.png',
            'James Madison': 'https://a.espncdn.com/i/teamlogos/ncaa/500/256.png',
            'Old Dominion': 'https://a.espncdn.com/i/teamlogos/ncaa/500/295.png',
            'Marshall': 'https://a.espncdn.com/i/teamlogos/ncaa/500/276.png',
            'Southern Miss': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2572.png',

            // Independent
            'Notre Dame': 'https://a.espncdn.com/i/teamlogos/ncaa/500/87.png',
            'Army': 'https://a.espncdn.com/i/teamlogos/ncaa/500/349.png',
            'Navy': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2426.png',
            'UConn': 'https://a.espncdn.com/i/teamlogos/ncaa/500/41.png',
            'UMass': 'https://a.espncdn.com/i/teamlogos/ncaa/500/113.png',

            // C-USA
            'Liberty': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2335.png',
            'Western Kentucky': 'https://a.espncdn.com/i/teamlogos/ncaa/500/98.png',
            'Middle Tennessee': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2393.png',
            'Louisiana Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2348.png',
            'UTEP': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2638.png',
            'New Mexico State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/166.png',
            'FIU': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2229.png',
            'Sam Houston': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2534.png',
            'Jacksonville State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/55.png',
            'Kennesaw State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/338.png',

            // MAC
            'Toledo': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2649.png',
            'Ohio': 'https://a.espncdn.com/i/teamlogos/ncaa/500/195.png',
            'Miami (OH)': 'https://a.espncdn.com/i/teamlogos/ncaa/500/193.png',
            'Bowling Green': 'https://a.espncdn.com/i/teamlogos/ncaa/500/189.png',
            'Western Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2711.png',
            'Central Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2117.png',
            'Eastern Michigan': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2199.png',
            'Northern Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2459.png',
            'Ball State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2050.png',
            'Akron': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2006.png',
            'Kent State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2309.png',
            'Buffalo': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2084.png',

            // FCS Top Programs
            'North Dakota State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2449.png',
            'South Dakota State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2571.png',
            'Montana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/149.png',
            'Montana State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/147.png',
            'Weber State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2692.png',
            'Sacramento State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/16.png',
            'UC Davis': 'https://a.espncdn.com/i/teamlogos/ncaa/500/302.png',
            'Eastern Washington': 'https://a.espncdn.com/i/teamlogos/ncaa/500/331.png',
            'Idaho': 'https://a.espncdn.com/i/teamlogos/ncaa/500/70.png',
            'Northern Iowa': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2460.png',
            'Illinois State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2287.png',
            'Southern Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/79.png',
            'North Dakota': 'https://a.espncdn.com/i/teamlogos/ncaa/500/155.png',
            'Youngstown State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2754.png',
            'Delaware': 'https://a.espncdn.com/i/teamlogos/ncaa/500/48.png',
            'Villanova': 'https://a.espncdn.com/i/teamlogos/ncaa/500/222.png',
            'Rhode Island': 'https://a.espncdn.com/i/teamlogos/ncaa/500/227.png',
            'Richmond': 'https://a.espncdn.com/i/teamlogos/ncaa/500/257.png',
            'William & Mary': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2729.png',
            'Elon': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2210.png',
            'New Hampshire': 'https://a.espncdn.com/i/teamlogos/ncaa/500/167.png',
            'Maine': 'https://a.espncdn.com/i/teamlogos/ncaa/500/311.png',
            'Albany': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2819.png',
            'Stony Brook': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2619.png',
            'Towson': 'https://a.espncdn.com/i/teamlogos/ncaa/500/119.png',
            'Wofford': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2747.png',
            'Furman': 'https://a.espncdn.com/i/teamlogos/ncaa/500/231.png',
            'Chattanooga': 'https://a.espncdn.com/i/teamlogos/ncaa/500/236.png',
            'Mercer': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2382.png',
            'The Citadel': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2643.png',
            'VMI': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2678.png',
            'East Tennessee State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2193.png',
            'Samford': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2535.png',
            'Southeastern Louisiana': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2545.png',
            'Nicholls': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2447.png',
            'McNeese': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2377.png',
            'Incarnate Word': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2916.png',
            'Lamar': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2320.png',
            'Northwestern State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2456.png',
            'Houston Christian': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2277.png',
            'Texas A&M-Commerce': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2837.png',
            'Southeast Missouri State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2546.png',
            'Tennessee State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2634.png',
            'Tennessee Tech': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2635.png',
            'Eastern Illinois': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2197.png',
            'Lindenwood': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2815.png',
            'Charleston Southern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2127.png',
            'Gardner-Webb': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2241.png',
            'Presbyterian': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2503.png',
            'Bryant': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2803.png',
            'Duquesne': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2182.png',
            'Sacred Heart': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2529.png',
            'Stonehill': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2848.png',
            'Wagner': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2681.png',
            'Central Connecticut': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2115.png',
            'Merrimack': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2771.png',
            'Saint Francis (PA)': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2598.png',
            'Robert Morris': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2523.png',
            'Fordham': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2230.png',
            'Holy Cross': 'https://a.espncdn.com/i/teamlogos/ncaa/500/107.png',
            'Georgetown': 'https://a.espncdn.com/i/teamlogos/ncaa/500/46.png',
            'Bucknell': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2083.png',
            'Lafayette': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2323.png',
            'Lehigh': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2329.png',
            'Colgate': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2142.png',
            'Monmouth': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2405.png',
            'Campbell': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2127.png',
            'North Carolina A&T': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2448.png',
            'South Carolina State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2569.png',
            'Howard': 'https://a.espncdn.com/i/teamlogos/ncaa/500/47.png',
            'Norfolk State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2450.png',
            'Morgan State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2418.png',
            'Delaware State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2169.png',
            'North Carolina Central': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2428.png',
            'Florida A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/50.png',
            'Bethune-Cookman': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2065.png',
            'Mississippi Valley State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2400.png',
            'Alabama State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2011.png',
            'Alabama A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2010.png',
            'Alcorn State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2016.png',
            'Jackson State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2296.png',
            'Southern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2582.png',
            'Prairie View A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2504.png',
            'Texas Southern': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2640.png',
            'Grambling': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2755.png',
            'Arkansas-Pine Bluff': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2029.png',
            'Alabama State': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2011.png',
            'Florida A&M': 'https://a.espncdn.com/i/teamlogos/ncaa/500/50.png'
        };
    }

    get(school) {
        return this.logos[school] || null;
    }

    has(school) {
        return school in this.logos;
    }

    getAll() {
        return { ...this.logos };
    }

    search(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.logos)
            .filter(([school]) => school.toLowerCase().includes(lowerQuery))
            .reduce((acc, [school, url]) => {
                acc[school] = url;
                return acc;
            }, {});
    }
}

// ==========================================
// PLAYER EXTERNAL ID DATABASE
// ==========================================
class PlayerExternalIdDatabase {
    constructor() {
        // Map of player names to their external IDs
        this.ids = {
            // Top Prospects - ESPN IDs
            'Fernando Mendoza': { espn: '4431460', school: 'Indiana' },
            'Ty Simpson': { espn: '4433312', school: 'Alabama' },
            'Drew Allar': { espn: '4431264', school: 'Penn State' },
            'Carson Beck': { espn: '4428972', school: 'Miami' },
            'Jeremiyah Love': { espn: '4432859', school: 'Notre Dame' },
            'Carnell Tate': { espn: '4431610', school: 'Ohio State' },
            'Jordyn Tyson': { espn: '4432851', school: 'Arizona State' },
            'Makai Lemon': { espn: '4432856', school: 'USC' },
            'Zachariah Branch': { espn: '4432862', school: 'Georgia' },
            'Francis Mauigoa': { espn: '4431647', school: 'Miami' },
            'Spencer Fano': { espn: '4431938', school: 'Utah' },
            'Caleb Lomu': { espn: '4431939', school: 'Utah' },
            'Olaivavega Ioane': { espn: '4431266', school: 'Penn State' },
            'Jermod McCoy': { espn: '4432535', school: 'Tennessee' },
            'Mansoor Delane': { espn: '4431607', school: 'LSU' },
            'Caleb Downs': { espn: '4431612', school: 'Ohio State' },
            'Dillon Thieneman': { espn: '4431964', school: 'Oregon' },
            'Rueben Bain Jr.': { espn: '4431648', school: 'Miami' },
            'Akheem Mesidor': { espn: '4431649', school: 'Miami' },
            'Keldric Faulk': { espn: '4431109', school: 'Auburn' },
            'David Bailey': { espn: '4431439', school: 'Texas Tech' },
            'Kayden McDonald': { espn: '4431613', school: 'Ohio State' },
            'Peter Woods': { espn: '4431443', school: 'Clemson' },
            'Arvell Reese': { espn: '4431614', school: 'Ohio State' },
            'Sonny Styles': { espn: '4431615', school: 'Ohio State' },
            'CJ Allen': { espn: '4432873', school: 'Georgia' },
            'Kenyon Sadiq': { espn: '4431965', school: 'Oregon' },
            'Denzel Boston': { espn: '4431145', school: 'Washington' },
            'Trinidad Chambliss': { espn: '4432528', school: 'Ole Miss' },
            'Jadarian Price': { espn: '4432860', school: 'Notre Dame' },
            'Emmett Johnson': { espn: '4431420', school: 'Nebraska' },
            'Kaytron Allen': { espn: '4431267', school: 'Penn State' },
            'Omarion Hampton': { espn: '4431523', school: 'North Carolina' },
            'Jonah Coleman': { espn: '4430916', school: 'Washington' },
            'Nicholas Singleton': { espn: '4431268', school: 'Penn State' },
            'Kaleb Johnson': { espn: '4431389', school: 'Iowa' },
            'Jayden Higgins': { espn: '4431337', school: 'Iowa State' },
            'Luther Burden III': { espn: '4431344', school: 'Missouri' },
            'Xavier Restrepo': { espn: '4431652', school: 'Miami' },
            'Ja\'Kobi Lane': { espn: '4432857', school: 'USC' },
            'Carson Schwesinger': { espn: '4431953', school: 'UCLA' },
            'Malaki Starks': { espn: '4432874', school: 'Georgia' },
            'Mason Taylor': { espn: '4431376', school: 'LSU' },
            'Eli Stowers': { espn: '4432559', school: 'Vanderbilt' },
            'Max Klare': { espn: '4431618', school: 'Ohio State' },
            'Joe Royer': { espn: '4431223', school: 'Cincinnati' },
            'Jack Endries': { espn: '4430931', school: 'Texas' },
            'Justin Joly': { espn: '4431510', school: 'NC State' },
            'Michael Trigg': { espn: '4431950', school: 'Baylor' },
            'Kadyn Proctor': { espn: '4431387', school: 'Alabama' },
            'Aireontae Ersery': { espn: '4431400', school: 'Minnesota' },
            'JC Latham': { espn: '4432796', school: 'Wisconsin' },
            'Monroe Freeling': { espn: '4432875', school: 'Georgia' },
            'Gennings Dunker': { espn: '4431390', school: 'Iowa' },
            'Connor Lew': { espn: '4431113', school: 'Auburn' },
            'Emmanuel Pregnon': { espn: '4431963', school: 'Oregon' },
            'Chase Bisontis': { espn: '4432452', school: 'Texas A&M' },
            'Donovan Jackson': { espn: '4431620', school: 'Ohio State' },
            'Jake Slaughter': { espn: '4431180', school: 'Florida' },
            'Matt Gulbin': { espn: '4431273', school: 'Michigan State' },
            'Logan Jones': { espn: '4431391', school: 'Iowa' },
            'TJ Parker': { espn: '4431444', school: 'Clemson' },
            'Dani Dennis-Sutton': { espn: '4431275', school: 'Penn State' },
            'Landon Jackson': { espn: '4431134', school: 'Arkansas' },
            'Jack Sawyer': { espn: '4431621', school: 'Ohio State' },
            'Deone Walker': { espn: '4431349', school: 'Kentucky' },
            'Tyleik Williams': { espn: '4431622', school: 'Ohio State' },
            'Kenneth Grant': { espn: '4431324', school: 'Michigan' },
            'Caleb Banks': { espn: '4431179', school: 'Florida' },
            'Shemar Stewart': { espn: '4432461', school: 'Texas A&M' },
            'Darrell Jackson Jr.': { espn: '4431199', school: 'Florida State' },
            'Avieon Terrell': { espn: '4431445', school: 'Clemson' },
            'Daylen Everette': { espn: '4431182', school: 'Florida' },
            'Darien Porter': { espn: '4431393', school: 'Iowa' },
            'Tacario Davis': { espn: '4430923', school: 'Arizona' },
            'Maxwell Hairston': { espn: '4431351', school: 'Kentucky' },
            'Jahdae Barron': { espn: '4432533', school: 'Texas' },
            'Rod Moore': { espn: '4431327', school: 'Michigan' },
            'Jordan Phillips': { espn: '4432455', school: 'Texas A&M' },
            'Jihaad Campbell': { espn: '4433313', school: 'Alabama' },
            'Oluwafemi Oladejo': { espn: '4430936', school: 'Texas' },
            'TreVeyon Henderson': { espn: '4431624', school: 'Ohio State' },
            'Princely Umanmielen': { espn: '4431178', school: 'Florida' },
            'Will Johnson': { espn: '4431326', school: 'Michigan' },
            'Will Hardy': { espn: '4431385', school: 'Iowa' },
            'Cole Payton': { espn: '4431475', school: 'North Dakota State' },
            'Sawyer Robertson': { espn: '4431956', school: 'Baylor' },
            'Garrett Nussmeier': { espn: '4431373', school: 'LSU' }
        };
    }

    get(playerName) {
        return this.ids[playerName] || null;
    }

    has(playerName) {
        return playerName in this.ids;
    }

    add(playerName, ids) {
        this.ids[playerName] = ids;
    }

    getAll() {
        return { ...this.ids };
    }
}

// ==========================================
// IMAGE CACHE SYSTEM
// ==========================================
class ImageCache {
    constructor() {
        this.memory = new Map();
        this.prefix = 'nfl_draft_img_';
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0
        };
    }

    async get(key) {
        const memoryResult = this.memory.get(key);
        if (memoryResult) {
            this.stats.hits++;
            return memoryResult;
        }

        try {
            const stored = localStorage.getItem(this.prefix + key);
            if (stored) {
                const data = JSON.parse(stored);
                // Check expiry
                if (data.expiry > Date.now()) {
                    this.memory.set(key, data.url);
                    this.stats.hits++;
                    return data.url;
                } else {
                    localStorage.removeItem(this.prefix + key);
                    this.stats.evictions++;
                }
            }
        } catch (e) {
            // localStorage error (quota exceeded, etc.)
        }

        this.stats.misses++;
        return null;
    }

    async set(key, url) {
        const data = {
            url,
            timestamp: Date.now(),
            expiry: Date.now() + PlayerImageLoader.config.cacheExpiry
        };

        this.memory.set(key, url);

        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(data));
        } catch (e) {
            // localStorage quota exceeded - clear old entries
            this.cleanupOldEntries();
        }
    }

    async remove(key) {
        this.memory.delete(key);
        try {
            localStorage.removeItem(this.prefix + key);
        } catch (e) {}
    }

    async clear() {
        this.memory.clear();
        try {
            const keys = Object.keys(localStorage);
            for (const key of keys) {
                if (key.startsWith(this.prefix)) {
                    localStorage.removeItem(key);
                }
            }
        } catch (e) {}
    }

    cleanupOldEntries() {
        try {
            const now = Date.now();
            const keys = Object.keys(localStorage);
            let removed = 0;

            for (const key of keys) {
                if (key.startsWith(this.prefix)) {
                    try {
                        const data = JSON.parse(localStorage.getItem(key));
                        if (data.expiry < now) {
                            localStorage.removeItem(key);
                            removed++;
                        }
                    } catch (e) {
                        localStorage.removeItem(key);
                        removed++;
                    }
                }
                if (removed >= 50) break; // Limit cleanup batch
            }
        } catch (e) {}
    }

    getStats() {
        return { ...this.stats, memorySize: this.memory.size };
    }
}

// ==========================================
// HTML COMPONENT CREATOR
// ==========================================
const PlayerImageComponent = {
    /**
     * Create a player image container element
     */
    create(player, options = {}) {
        const {
            size = 'medium',  // small, medium, large, xlarge
            showPosition = true,
            lazy = true,
            className = ''
        } = options;

        const container = document.createElement('div');
        container.className = `player-photo ${size} ${className}`.trim();
        container.dataset.playerName = player.name;
        container.dataset.playerSchool = player.school || '';
        container.dataset.playerPosition = player.position || 'P';

        // Add loading placeholder
        container.innerHTML = `
            <div class="player-image-skeleton">
                <div class="skeleton-shimmer"></div>
            </div>
        `;

        if (!lazy) {
            // Load immediately
            PlayerImageLoader.loadIntoContainer(container, options);
        }

        return container;
    },

    /**
     * Update an existing container with a new player
     */
    async update(container, player, options = {}) {
        container.className = container.className.replace(/loading|initials-placeholder/g, '');
        container.innerHTML = `
            <div class="player-image-skeleton">
                <div class="skeleton-shimmer"></div>
            </div>
        `;
        container.dataset.playerName = player.name;
        container.dataset.playerSchool = player.school || '';
        container.dataset.playerPosition = player.position || 'P';

        return PlayerImageLoader.loadIntoContainer(container, options);
    },

    /**
     * Create a static image element (no lazy loading)
     */
    createStatic(player, options = {}) {
        const { size = 'medium', className = '' } = options;
        const container = this.create(player, { ...options, size, className, lazy: false });
        return container;
    },

    /**
     * Preload images for a list of players
     */
    async preload(players) {
        return PlayerImageLoader.batchLoad(players);
    }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
const ImageUtils = {
    /**
     * Convert local image to base64 for caching
     */
    async toBase64(url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            return null;
        }
    },

    /**
     * Check if image URL is valid
     */
    async isValid(url) {
        return PlayerImageLoader.verifyImage(url);
    },

    /**
     * Get image dimensions
     */
    async getDimensions(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ width: img.width, height: img.height });
            img.onerror = reject;
            img.src = url;
        });
    },

    /**
     * Retry a function with exponential backoff
     */
    async retry(fn, maxAttempts = 3) {
        for (let i = 0; i < maxAttempts; i++) {
            try {
                return await fn();
            } catch (error) {
                if (i === maxAttempts - 1) throw error;
                await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
            }
        }
    }
};

// ==========================================
// AUTO-INITIALIZATION
// ==========================================
if (typeof window !== 'undefined') {
    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => PlayerImageLoader.init());
    } else {
        PlayerImageLoader.init();
    }
}

// ==========================================
// EXPORT FOR MODULE SYSTEMS
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PlayerImageLoader,
        PlayerImageComponent,
        ImageCache,
        CollegeLogoDatabase,
        PlayerExternalIdDatabase,
        ImageSources,
        ImageUtils
    };
}

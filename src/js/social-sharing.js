/**
 * NFL Mock Draft 2026 - Social Sharing System
 * Handles Open Graph meta tags, preview cards, and platform-specific sharing
 */

// ==========================================
// SOCIAL SHARING MANAGER
// ==========================================

const SocialShareManager = {
    // Configuration
    config: {
        siteName: '2026 NFL Mock Draft',
        siteUrl: window.location.origin + window.location.pathname,
        defaultImage: 'images/social-preview-default.jpg',
        twitterHandle: '@nflmockdraft2026',
        hashtags: ['#NFLMockDraft', '#2026NFLDraft', '#NFLDraft', '#MockDraft', '#NFL']
    },

    // Current mock data state
    currentMock: null,
    shareAnalytics: {
        twitter: 0,
        facebook: 0,
        reddit: 0,
        copyLink: 0,
        saveImage: 0,
        nativeShare: 0
    },

    // ==========================================
    // INITIALIZATION
    // ==========================================

    init() {
        this.loadAnalytics();
        this.checkURLForMock();
        this.setupEventListeners();
        
        // Update meta tags with default content
        this.updateMetaTags(this.getDefaultMockData());
    },

    setupEventListeners() {
        // Listen for custom draft changes
        document.addEventListener('customDraftUpdated', (e) => {
            if (e.detail && e.detail.mockData) {
                this.currentMock = e.detail.mockData;
                this.updateMetaTags(this.currentMock);
            }
        });

        // Listen for URL hash changes
        window.addEventListener('hashchange', () => {
            this.checkURLForMock();
        });
    },

    // ==========================================
    // DYNAMIC OPEN GRAPH META TAGS
    // ==========================================

    updateMetaTags(mockData) {
        const preview = this.generateSharePreview(mockData);
        
        // Standard meta tags
        this.setMetaTag('title', preview.title);
        this.setMetaTag('description', preview.description);
        
        // Open Graph meta tags
        this.setMetaTag('og:title', preview.title, 'property');
        this.setMetaTag('og:description', preview.description, 'property');
        this.setMetaTag('og:image', preview.imageUrl, 'property');
        this.setMetaTag('og:url', preview.url, 'property');
        this.setMetaTag('og:type', 'website', 'property');
        this.setMetaTag('og:site_name', this.config.siteName, 'property');
        
        // Twitter Card meta tags
        this.setMetaTag('twitter:card', 'summary_large_image', 'name');
        this.setMetaTag('twitter:title', preview.title, 'name');
        this.setMetaTag('twitter:description', preview.description, 'name');
        this.setMetaTag('twitter:image', preview.imageUrl, 'name');
        this.setMetaTag('twitter:site', this.config.twitterHandle, 'name');
        this.setMetaTag('twitter:creator', this.config.twitterHandle, 'name');
        this.setMetaTag('twitter:hashtags', preview.hashtags.join(','), 'name');
        
        // Update page title
        document.title = preview.title;
    },

    setMetaTag(name, content, attr = 'name') {
        let tag = document.querySelector(`meta[${attr}="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute(attr, name);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    },

    // ==========================================
    // SHARE PREVIEW GENERATOR
    // ==========================================

    generateSharePreview(mockData) {
        const data = mockData || this.getDefaultMockData();
        const topPick = data.picks[0];
        
        // Generate title based on top pick
        let title = `My 2026 NFL Mock Draft - ${topPick.team} take ${topPick.player} #1`;
        if (data.trades && data.trades.length > 0) {
            title += ` (${data.trades.length} trades!)`;
        }
        
        // Generate description
        const pickCount = data.picks.length;
        const roundText = pickCount <= 32 ? '1-round' : pickCount <= 64 ? '2-round' : '3-round';
        let description = `${roundText} mock draft with ${pickCount} picks`;
        if (data.trades && data.trades.length > 0) {
            description += ` and ${data.trades.length} trades`;
        }
        description += `. Check out my picks and share your thoughts!`;
        
        // Generate shareable URL
        const url = this.encodeMockToURL(data);
        
        // Generate preview image URL (canvas-based or default)
        const imageUrl = data.previewImage || this.config.defaultImage;
        
        return {
            title: title,
            description: description,
            imageUrl: imageUrl,
            url: url,
            hashtags: this.config.hashtags
        };
    },

    getDefaultMockData() {
        // Extract current picks from the page
        const picks = this.extractCurrentPicks();
        return {
            picks: picks,
            trades: window.trades || [],
            createdAt: new Date().toISOString(),
            author: 'Anonymous'
        };
    },

    extractCurrentPicks() {
        const picks = [];
        
        // Extract Round 1 picks
        document.querySelectorAll('#round1Picks .pick-card').forEach(card => {
            const pickNum = card.querySelector('.pick-number')?.textContent;
            const team = card.querySelector('.team-details h3')?.textContent?.trim();
            const player = card.querySelector('.player-info h2')?.textContent?.trim();
            const position = card.querySelector('.player-position')?.textContent?.trim();
            const school = card.querySelector('.player-school')?.textContent?.trim();
            
            if (pickNum && team && player) {
                picks.push({
                    pick: parseInt(pickNum),
                    team: team,
                    player: player,
                    position: position || '',
                    school: school || ''
                });
            }
        });
        
        // Extract Round 2 picks
        document.querySelectorAll('#round2Picks .pick-card').forEach(card => {
            const pickNum = card.querySelector('.pick-number')?.textContent;
            const team = card.querySelector('.team-details h3')?.textContent?.trim();
            const player = card.querySelector('.player-info h2')?.textContent?.trim();
            const position = card.querySelector('.player-position')?.textContent?.trim();
            const school = card.querySelector('.player-school')?.textContent?.trim();
            
            if (pickNum && team && player) {
                picks.push({
                    pick: parseInt(pickNum),
                    team: team,
                    player: player,
                    position: position || '',
                    school: school || ''
                });
            }
        });
        
        // Sort by pick number
        picks.sort((a, b) => a.pick - b.pick);
        
        return picks;
    },

    // ==========================================
    // URL ENCODING / DECODING
    // ==========================================

    encodeMockToURL(mockData) {
        // Compress mock data for URL
        const compressed = this.compressMockData(mockData);
        const base64 = btoa(JSON.stringify(compressed))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
        
        return `${this.config.siteUrl}?mock=${base64}`;
    },

    decodeMockFromURL(url = window.location.href) {
        try {
            const urlObj = new URL(url);
            const mockParam = urlObj.searchParams.get('mock');
            
            if (!mockParam) return null;
            
            // Restore base64 padding
            let base64 = mockParam
                .replace(/-/g, '+')
                .replace(/_/g, '/');
            
            while (base64.length % 4) {
                base64 += '=';
            }
            
            const compressed = JSON.parse(atob(base64));
            return this.decompressMockData(compressed);
        } catch (e) {
            console.error('Error decoding mock from URL:', e);
            return null;
        }
    },

    compressMockData(mockData) {
        // Compress picks to minimize URL length
        const compressedPicks = mockData.picks.map(p => ({
            p: p.pick,
            t: this.getTeamCode(p.team),
            n: p.player,
            pos: p.position,
            s: p.school
        }));
        
        return {
            v: 1, // version
            p: compressedPicks,
            tr: (mockData.trades || []).map(t => ({
                a: t.teamA,
                b: t.teamB,
                pa: t.picksA,
                pb: t.picksB
            })),
            ca: mockData.createdAt,
            au: mockData.author
        };
    },

    decompressMockData(compressed) {
        return {
            picks: compressed.p.map(p => ({
                pick: p.p,
                team: this.getTeamName(p.t) || p.t,
                player: p.n,
                position: p.pos,
                school: p.s
            })),
            trades: (compressed.tr || []).map(t => ({
                teamA: t.a,
                teamB: t.b,
                picksA: t.pa,
                picksB: t.pb
            })),
            createdAt: compressed.ca,
            author: compressed.au
        };
    },

    getTeamCode(teamName) {
        const teamCodes = {
            'Las Vegas Raiders': 'LV', 'New York Jets': 'NYJ', 'Arizona Cardinals': 'ARI',
            'Tennessee Titans': 'TEN', 'New York Giants': 'NYG', 'Cleveland Browns': 'CLE',
            'Washington Commanders': 'WAS', 'New Orleans Saints': 'NO', 'Kansas City Chiefs': 'KC',
            'Cincinnati Bengals': 'CIN', 'Miami Dolphins': 'MIA', 'Dallas Cowboys': 'DAL',
            'Los Angeles Rams': 'LAR', 'Baltimore Ravens': 'BAL', 'Tampa Bay Buccaneers': 'TB',
            'Detroit Lions': 'DET', 'Minnesota Vikings': 'MIN', 'Carolina Panthers': 'CAR',
            'Pittsburgh Steelers': 'PIT', 'Los Angeles Chargers': 'LAC', 'Chicago Bears': 'CHI',
            'Buffalo Bills': 'BUF', 'San Francisco 49ers': 'SF', 'Houston Texans': 'HOU',
            'Philadelphia Eagles': 'PHI', 'Denver Broncos': 'DEN', 'Green Bay Packers': 'GB',
            'Atlanta Falcons': 'ATL', 'Indianapolis Colts': 'IND', 'Seattle Seahawks': 'SEA',
            'Jacksonville Jaguars': 'JAC', 'New England Patriots': 'NE'
        };
        return teamCodes[teamName] || teamName;
    },

    getTeamName(teamCode) {
        const teamNames = {
            'LV': 'Las Vegas Raiders', 'NYJ': 'New York Jets', 'ARI': 'Arizona Cardinals',
            'TEN': 'Tennessee Titans', 'NYG': 'New York Giants', 'CLE': 'Cleveland Browns',
            'WAS': 'Washington Commanders', 'NO': 'New Orleans Saints', 'KC': 'Kansas City Chiefs',
            'CIN': 'Cincinnati Bengals', 'MIA': 'Miami Dolphins', 'DAL': 'Dallas Cowboys',
            'LAR': 'Los Angeles Rams', 'BAL': 'Baltimore Ravens', 'TB': 'Tampa Bay Buccaneers',
            'DET': 'Detroit Lions', 'MIN': 'Minnesota Vikings', 'CAR': 'Carolina Panthers',
            'PIT': 'Pittsburgh Steelers', 'LAC': 'Los Angeles Chargers', 'CHI': 'Chicago Bears',
            'BUF': 'Buffalo Bills', 'SF': 'San Francisco 49ers', 'HOU': 'Houston Texans',
            'PHI': 'Philadelphia Eagles', 'DEN': 'Denver Broncos', 'GB': 'Green Bay Packers',
            'ATL': 'Atlanta Falcons', 'IND': 'Indianapolis Colts', 'SEA': 'Seattle Seahawks',
            'JAC': 'Jacksonville Jaguars', 'NE': 'New England Patriots'
        };
        return teamNames[teamCode];
    },

    checkURLForMock() {
        const mockData = this.decodeMockFromURL();
        if (mockData) {
            this.currentMock = mockData;
            this.loadMockFromData(mockData);
            this.showToast('Mock draft loaded from shared link!');
        }
    },

    loadMockFromData(mockData) {
        // Dispatch event to load the mock data
        const event = new CustomEvent('loadSharedMock', { detail: { mockData } });
        document.dispatchEvent(event);
    },

    // ==========================================
    // SHARE MODAL UI
    // ==========================================

    openShareModal(mockData = null) {
        const data = mockData || this.currentMock || this.getDefaultMockData();
        const preview = this.generateSharePreview(data);
        
        // Create modal HTML
        const modalHTML = this.generateShareModalHTML(data, preview);
        
        // Remove existing modal if any
        const existingModal = document.getElementById('socialShareModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal with animation
        const modal = document.getElementById('socialShareModal');
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
        
        // Generate preview card
        this.generatePreviewCard(data);
        
        // Track modal open
        this.trackEvent('shareModalOpened');
    },

    closeShareModal() {
        const modal = document.getElementById('socialShareModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    },

    generateShareModalHTML(mockData, preview) {
        const top3Picks = mockData.picks.slice(0, 3);
        const stats = this.calculateMockStats(mockData);
        
        return `
            <div id="socialShareModal" class="social-share-modal">
                <div class="social-share-backdrop" onclick="SocialShareManager.closeShareModal()"></div>
                <div class="social-share-content">
                    <button class="social-share-close" onclick="SocialShareManager.closeShareModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    
                    <div class="social-share-header">
                        <h2><i class="fas fa-share-alt"></i> Share Your Mock Draft</h2>
                    </div>
                    
                    <div class="social-share-body">
                        <!-- Preview Card Container -->
                        <div id="previewCardContainer" class="preview-card-container">
                            <div class="preview-card-loading">
                                <i class="fas fa-spinner fa-spin"></i>
                                <span>Generating preview...</span>
                            </div>
                        </div>
                        
                        <!-- Share Quote -->
                        <div class="share-quote">
                            <i class="fas fa-quote-left"></i>
                            <p>"${top3Picks[0].team} take ${top3Picks[0].player} #1 in my 2026 NFL Mock Draft!"</p>
                            <i class="fas fa-quote-right"></i>
                        </div>
                        
                        <!-- Share Buttons -->
                        <div class="share-platforms">
                            <h3>Share to:</h3>
                            <div class="share-buttons-row">
                                <button class="share-btn-platform twitter" onclick="SocialShareManager.shareToTwitter()">
                                    <i class="fab fa-twitter"></i>
                                    <span>Twitter/X</span>
                                </button>
                                <button class="share-btn-platform facebook" onclick="SocialShareManager.shareToFacebook()">
                                    <i class="fab fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </button>
                                <button class="share-btn-platform reddit" onclick="SocialShareManager.shareToReddit()">
                                    <i class="fab fa-reddit-alien"></i>
                                    <span>Reddit</span>
                                </button>
                            </div>
                            <div class="share-buttons-row secondary">
                                <button class="share-btn-platform whatsapp" onclick="SocialShareManager.shareToWhatsApp()">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </button>
                                <button class="share-btn-platform native" onclick="SocialShareManager.shareNative()">
                                    <i class="fas fa-share-square"></i>
                                    <span>More</span>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="share-actions">
                            <button class="share-action-btn copy-link" onclick="SocialShareManager.copyShareableLink()">
                                <i class="fas fa-link"></i>
                                <span>Copy Link</span>
                            </button>
                            <button class="share-action-btn save-image" onclick="SocialShareManager.savePreviewImage()">
                                <i class="fas fa-image"></i>
                                <span>Save Image</span>
                            </button>
                        </div>
                        
                        <!-- Text Summary -->
                        <div class="share-text-summary">
                            <div class="text-summary-header">
                                <h3>Text Summary</h3>
                                <div class="text-format-tabs">
                                    <button class="format-tab active" onclick="SocialShareManager.switchTextFormat('condensed', this)">Condensed</button>
                                    <button class="format-tab" onclick="SocialShareManager.switchTextFormat('detailed', this)">Detailed</button>
                                    <button class="format-tab" onclick="SocialShareManager.switchTextFormat('reddit', this)">Reddit</button>
                                </div>
                            </div>
                            <textarea id="shareTextArea" class="share-text-area" readonly>${this.generateCondensedText(mockData)}</textarea>
                            <button class="copy-text-btn" onclick="SocialShareManager.copyShareableText()">
                                <i class="fas fa-copy"></i> Copy Text
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    calculateMockStats(mockData) {
        const picks = mockData.picks || [];
        const trades = mockData.trades || [];
        
        // Count by position
        const positions = {};
        picks.forEach(p => {
            positions[p.position] = (positions[p.position] || 0) + 1;
        });
        
        // Calculate grade (simplified)
        const grade = this.calculateMockGrade(mockData);
        
        return {
            totalPicks: picks.length,
            tradeCount: trades.length,
            positions: positions,
            topPosition: Object.entries(positions).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A',
            grade: grade
        };
    },

    calculateMockGrade(mockData) {
        // Simplified grading logic
        const hasTrades = (mockData.trades || []).length > 0;
        const pickCount = (mockData.picks || []).length;
        
        if (pickCount >= 96) return hasTrades ? 'A' : 'A-';
        if (pickCount >= 64) return hasTrades ? 'A-' : 'B+';
        if (pickCount >= 32) return hasTrades ? 'B+' : 'B';
        return 'B-';
    },

    // ==========================================
    // PREVIEW CARD GENERATOR
    // ==========================================

    async generatePreviewCard(mockData) {
        const container = document.getElementById('previewCardContainer');
        if (!container) return;
        
        const stats = this.calculateMockStats(mockData);
        const top3Picks = mockData.picks.slice(0, 3);
        
        // Create the preview card HTML
        const cardHTML = `
            <div id="previewCard" class="preview-card-social">
                <div class="preview-card-header">
                    <div class="preview-logo">
                        <i class="fas fa-football-ball"></i>
                        <span>2026 NFL MOCK DRAFT</span>
                    </div>
                </div>
                <div class="preview-card-body">
                    <div class="preview-top-picks">
                        ${top3Picks.map((pick, idx) => `
                            <div class="preview-pick-item">
                                <div class="preview-pick-number">#${pick.pick}</div>
                                <div class="preview-team-logo" style="background: ${this.getTeamColor(pick.team)}">
                                    ${this.getTeamCode(pick.team)}
                                </div>
                                <div class="preview-pick-info">
                                    <div class="preview-player-name">${pick.player}</div>
                                    <div class="preview-player-meta">${pick.position} | ${pick.team}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="preview-stats-bar">
                        <div class="preview-stat">
                            <span class="stat-value">${stats.totalPicks}</span>
                            <span class="stat-label">Picks</span>
                        </div>
                        <div class="preview-stat">
                            <span class="stat-value">${stats.tradeCount}</span>
                            <span class="stat-label">Trades</span>
                        </div>
                        <div class="preview-stat">
                            <span class="stat-value grade-${stats.grade.replace('+', '-plus').replace('-', '-minus')}">${stats.grade}</span>
                            <span class="stat-label">Grade</span>
                        </div>
                    </div>
                </div>
                <div class="preview-card-footer">
                    <span class="preview-cta">View Full Mock <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        `;
        
        container.innerHTML = cardHTML;
        
        // Store reference for image generation
        this.currentPreviewCard = document.getElementById('previewCard');
    },

    getTeamColor(teamName) {
        const colors = {
            'Las Vegas Raiders': '#000000', 'New York Jets': '#125740', 'Arizona Cardinals': '#97233F',
            'Tennessee Titans': '#0C2340', 'New York Giants': '#001E62', 'Cleveland Browns': '#311D00',
            'Washington Commanders': '#773141', 'New Orleans Saints': '#101820', 'Kansas City Chiefs': '#E31837',
            'Cincinnati Bengals': '#FB4F14', 'Miami Dolphins': '#008E97', 'Dallas Cowboys': '#003594',
            'Los Angeles Rams': '#003594', 'Baltimore Ravens': '#241773', 'Tampa Bay Buccaneers': '#D50A0A',
            'Detroit Lions': '#0076B6', 'Minnesota Vikings': '#4F2683', 'Carolina Panthers': '#0085CA',
            'Pittsburgh Steelers': '#FFB612', 'Los Angeles Chargers': '#0076B6', 'Chicago Bears': '#0B162A',
            'Buffalo Bills': '#00338D', 'San Francisco 49ers': '#AA0000', 'Houston Texans': '#03202F',
            'Philadelphia Eagles': '#004C54', 'Denver Broncos': '#FB4F14', 'Green Bay Packers': '#203731',
            'Atlanta Falcons': '#000000', 'Indianapolis Colts': '#003594', 'Seattle Seahawks': '#002244',
            'Jacksonville Jaguars': '#006778', 'New England Patriots': '#002244'
        };
        return colors[teamName] || '#333333';
    },

    async savePreviewImage() {
        if (!this.currentPreviewCard) return;
        
        this.showToast('Generating image...');
        
        try {
            // Use html2canvas to generate image
            const canvas = await html2canvas(this.currentPreviewCard, {
                scale: 2,
                backgroundColor: '#1a1a2e',
                useCORS: true,
                logging: false
            });
            
            // Convert to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `2026-nfl-mock-draft-${Date.now()}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
                
                this.trackShare('saveImage');
                this.showToast('Image saved!');
            }, 'image/png');
        } catch (error) {
            console.error('Error generating image:', error);
            this.showToast('Error generating image');
        }
    },

    // ==========================================
    // PLATFORM-SPECIFIC SHARING
    // ==========================================

    shareToTwitter() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const top5Picks = mockData.picks.slice(0, 5);
        
        let text = `My 2026 NFL Mock Draft Top 5:\n\n`;
        top5Picks.forEach(pick => {
            text += `${pick.pick}. ${this.getTeamCode(pick.team)} - ${pick.player} (${pick.position})\n`;
        });
        
        if (mockData.trades && mockData.trades.length > 0) {
            text += `\n${mockData.trades.length} trades included! `;
        }
        
        text += `\n#NFLMockDraft #2026NFLDraft #NFLDraft`;
        
        const shareUrl = this.encodeMockToURL(mockData);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        
        this.openShareWindow(twitterUrl, 'Twitter');
        this.trackShare('twitter');
    },

    shareToFacebook() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const shareUrl = this.encodeMockToURL(mockData);
        const preview = this.generateSharePreview(mockData);
        
        // Update meta tags before sharing
        this.updateMetaTags(mockData);
        
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(preview.description)}`;
        
        this.openShareWindow(facebookUrl, 'Facebook');
        this.trackShare('facebook');
    },

    shareToReddit() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const topPick = mockData.picks[0];
        
        const title = `[Mock Draft] My 2026 NFL Mock Draft - ${topPick.team} take ${topPick.player} #1 Overall`;
        const text = this.generateRedditMarkdown(mockData);
        const shareUrl = this.encodeMockToURL(mockData);
        
        // Reddit doesn't accept pre-filled text via URL, so we just share the link
        const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
        
        this.openShareWindow(redditUrl, 'Reddit');
        this.trackShare('reddit');
    },

    shareToWhatsApp() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const preview = this.generateSharePreview(mockData);
        const shareUrl = this.encodeMockToURL(mockData);
        
        const text = `${preview.title}\n\n${preview.description}\n\n${shareUrl}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        
        this.openShareWindow(whatsappUrl, 'WhatsApp');
        this.trackShare('native');
    },

    async shareNative() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const preview = this.generateSharePreview(mockData);
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: preview.title,
                    text: preview.description,
                    url: preview.url
                });
                this.trackShare('native');
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                }
            }
        } else {
            this.showToast('Native sharing not supported on this device');
        }
    },

    openShareWindow(url, platform) {
        const width = 600;
        const height = 400;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        
        window.open(url, `share${platform}`, `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0`);
    },

    // ==========================================
    // COPYABLE TEXT FORMATS
    // ==========================================

    generateCondensedText(mockData) {
        const picks = mockData.picks || [];
        let text = `2026 NFL Mock Draft (${picks.length <= 32 ? '1st' : picks.length <= 64 ? '2' : '3'}-Round):\n`;
        text += `Generated: ${new Date().toLocaleDateString()}\n`;
        text += `${'='.repeat(50)}\n\n`;
        
        picks.slice(0, 32).forEach(pick => {
            text += `${pick.pick}. ${this.getTeamCode(pick.team)} - ${pick.player} (${pick.position})\n`;
        });
        
        if (picks.length > 32) {
            text += `\n--- Round 2 ---\n\n`;
            picks.slice(32, 64).forEach(pick => {
                text += `${pick.pick}. ${this.getTeamCode(pick.team)} - ${pick.player} (${pick.position})\n`;
            });
        }
        
        if (picks.length > 64) {
            text += `\n--- Round 3 ---\n\n`;
            picks.slice(64).forEach(pick => {
                text += `${pick.pick}. ${this.getTeamCode(pick.team)} - ${pick.player} (${pick.position})\n`;
            });
        }
        
        return text;
    },

    generateDetailedText(mockData) {
        const picks = mockData.picks || [];
        let text = `2026 NFL Mock Draft - Full Breakdown\n`;
        text += `${'='.repeat(50)}\n\n`;
        
        // Round 1
        text += `ROUND 1\n${'-'.repeat(30)}\n\n`;
        picks.slice(0, 32).forEach(pick => {
            text += `${pick.pick}. ${pick.team}\n`;
            text += `   Select: ${pick.player}, ${pick.position}, ${pick.school}\n\n`;
        });
        
        // Round 2 if available
        if (picks.length > 32) {
            text += `\nROUND 2\n${'-'.repeat(30)}\n\n`;
            picks.slice(32, 64).forEach(pick => {
                text += `${pick.pick}. ${pick.team}\n`;
                text += `   Select: ${pick.player}, ${pick.position}, ${pick.school}\n\n`;
            });
        }
        
        return text;
    },

    generateRedditMarkdown(mockData) {
        const picks = mockData.picks || [];
        let text = `# 2026 NFL Mock Draft\n\n`;
        text += `*Generated: ${new Date().toLocaleDateString()}*\n\n`;
        
        // First round table
        text += `## First Round\n\n`;
        text += `| Pick | Team | Player | Position | School |\n`;
        text += `|------|------|--------|----------|--------|\n`;
        
        picks.slice(0, 32).forEach(pick => {
            text += `| ${pick.pick} | ${this.getTeamCode(pick.team)} | ${pick.player} | ${pick.position} | ${pick.school} |\n`;
        });
        
        // Trades section
        if (mockData.trades && mockData.trades.length > 0) {
            text += `\n## Trades\n\n`;
            mockData.trades.forEach((trade, idx) => {
                text += `${idx + 1}. **${trade.teamA}** sends Pick ${trade.picksA.join(', ')} to **${trade.teamB}** for Pick ${trade.picksB.join(', ')}\n`;
            });
        }
        
        text += `\n---\n\n`;
        text += `What do you think? Who would you have taken differently?\n\n`;
        
        return text;
    },

    switchTextFormat(format, btn) {
        const mockData = this.currentMock || this.getDefaultMockData();
        const textarea = document.getElementById('shareTextArea');
        
        // Update active tab
        document.querySelectorAll('.format-tab').forEach(tab => tab.classList.remove('active'));
        btn.classList.add('active');
        
        // Update textarea content
        switch (format) {
            case 'condensed':
                textarea.value = this.generateCondensedText(mockData);
                break;
            case 'detailed':
                textarea.value = this.generateDetailedText(mockData);
                break;
            case 'reddit':
                textarea.value = this.generateRedditMarkdown(mockData);
                break;
        }
    },

    copyShareableText() {
        const textarea = document.getElementById('shareTextArea');
        if (textarea) {
            textarea.select();
            document.execCommand('copy');
            this.showToast('Text copied to clipboard!');
        }
    },

    copyShareableLink() {
        const mockData = this.currentMock || this.getDefaultMockData();
        const url = this.encodeMockToURL(mockData);
        
        navigator.clipboard.writeText(url).then(() => {
            this.trackShare('copyLink');
            this.showToast('Link copied to clipboard!');
        }).catch(err => {
            console.error('Copy failed:', err);
            prompt('Copy this link:', url);
        });
    },

    // ==========================================
    // ANALYTICS
    // ==========================================

    trackShare(platform) {
        this.shareAnalytics[platform] = (this.shareAnalytics[platform] || 0) + 1;
        this.saveAnalytics();
        
        // Also track with main analytics if available
        if (window.NFLDraftAnalytics) {
            window.NFLDraftAnalytics.trackShare(platform);
        }
    },

    trackEvent(eventName, data = {}) {
        if (window.NFLDraftAnalytics) {
            window.NFLDraftAnalytics.trackEvent(eventName, data);
        }
    },

    saveAnalytics() {
        try {
            localStorage.setItem('nflMockShareAnalytics', JSON.stringify(this.shareAnalytics));
        } catch (e) {
            console.warn('Could not save analytics:', e);
        }
    },

    loadAnalytics() {
        try {
            const saved = localStorage.getItem('nflMockShareAnalytics');
            if (saved) {
                this.shareAnalytics = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load analytics:', e);
        }
    },

    getShareLeaderboard() {
        return Object.entries(this.shareAnalytics)
            .sort((a, b) => b[1] - a[1])
            .map(([platform, count]) => ({ platform, count }));
    },

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================

    showToast(message) {
        // Use existing toast function if available
        if (typeof showToast === 'function') {
            showToast(message);
        } else {
            // Create simple toast
            const toast = document.createElement('div');
            toast.className = 'social-toast';
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: var(--accent, #00d4ff);
                color: var(--primary, #0a0a0f);
                padding: 1rem 2rem;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10000;
                animation: slideUp 0.3s ease;
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }
    }
};

// ==========================================
// INITIALIZE ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    SocialShareManager.init();
});

// Expose to global scope for onclick handlers
window.SocialShareManager = SocialShareManager;

/**
 * NFL Mock Draft 2026 - PNG Export System
 * Comprehensive image export functionality using html2canvas
 */

// ==========================================
// PNG EXPORT CONFIGURATION
// ==========================================
const PNGExportConfig = {
    // Social media dimensions
    dimensions: {
        twitter: { width: 1200, height: 675 },
        facebook: { width: 1200, height: 630 },
        instagram: { width: 1080, height: 1080 },
        standard: { width: 1200, height: 800 }
    },
    
    // Branding
    branding: {
        text: 'NFLMockDraft2026.com',
        logo: '🏈',
        primaryColor: '#00d4ff',
        secondaryColor: '#ffd700'
    },
    
    // Export quality
    quality: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
    }
};

// ==========================================
// MAIN EXPORT FUNCTIONS
// ==========================================

/**
 * Main export function with options
 * @param {Object} options - Export options
 * @param {string} options.type - 'full', 'firstRound', 'team', 'pick', 'bigBoard', 'current'
 * @param {string} options.team - Team name (for team exports)
 * @param {number} options.pickNumber - Pick number (for single pick export)
 * @param {boolean} options.includeLogos - Include team logos
 * @param {boolean} options.includePhotos - Include player photos
 * @param {boolean} options.includeGrades - Include draft grades
 * @param {boolean} options.darkBackground - Use dark background
 * @param {string} options.format - 'twitter', 'facebook', 'instagram', 'standard'
 */
async function exportMockToPNG(options = {}) {
    const config = {
        type: 'full',
        includeLogos: true,
        includePhotos: true,
        includeGrades: true,
        darkBackground: false,
        format: 'twitter',
        ...options
    };
    
    // Show loading spinner
    showExportLoading('Generating PNG image...');
    
    try {
        let canvas;
        let filename;
        
        switch (config.type) {
            case 'full':
                canvas = await exportFullDraftToCanvas(config);
                filename = `NFL-Mock-Draft-2026-Full-${getFormattedDate()}.png`;
                break;
            case 'firstRound':
                canvas = await exportFirstRoundToCanvas(config);
                filename = `First-Round-Mock-2026-${getFormattedDate()}.png`;
                break;
            case 'team':
                canvas = await exportTeamDraftToCanvas(config.team, config);
                filename = `NFL-Mock-Draft-2026-${config.team}-${getFormattedDate()}.png`;
                break;
            case 'pick':
                canvas = await exportPickCardToCanvas(config.pickNumber, config);
                filename = `Pick-${config.pickNumber}-Mock-2026-${getFormattedDate()}.png`;
                break;
            case 'bigBoard':
                canvas = await exportBigBoardToCanvas(config);
                filename = `Big-Board-2026-${getFormattedDate()}.png`;
                break;
            case 'current':
                canvas = await exportCurrentViewToCanvas(config);
                filename = `NFL-Mock-Draft-2026-Current-${getFormattedDate()}.png`;
                break;
            default:
                throw new Error('Invalid export type');
        }
        
        // Convert to blob and download
        const blob = await canvasToBlob(canvas, 'image/png');
        downloadBlob(blob, filename);
        
        // Show success message
        hideExportLoading();
        showToast(`PNG exported: ${filename}`);
        
        // Show share preview
        showPNGPreview(canvas, filename, config);
        
        // Track export
        if (window.NFLDraftAnalytics) {
            window.NFLDraftAnalytics.trackExport('PNG', config.type);
        }
        
        return { success: true, canvas, filename };
        
    } catch (error) {
        console.error('PNG Export Error:', error);
        hideExportLoading();
        showToast('Error generating PNG. Please try again.');
        return { success: false, error: error.message };
    }
}

/**
 * Export a single pick card as PNG
 * @param {number} pickNumber - The pick number to export
 */
async function exportPickCardToPNG(pickNumber) {
    return exportMockToPNG({
        type: 'pick',
        pickNumber: pickNumber,
        format: 'twitter'
    });
}

/**
 * Export full draft (all rounds)
 */
async function exportFullDraftToPNG() {
    return exportMockToPNG({
        type: 'full',
        format: 'standard'
    });
}

/**
 * Export big board as PNG
 */
async function exportBigBoardToPNG() {
    return exportMockToPNG({
        type: 'bigBoard',
        format: 'standard'
    });
}

// ==========================================
// CANVAS GENERATION FUNCTIONS
// ==========================================

async function exportPickCardToCanvas(pickNumber, config) {
    // Find the pick card
    const pickCard = findPickCard(pickNumber);
    if (!pickCard) {
        throw new Error(`Pick ${pickNumber} not found`);
    }
    
    // Clone for manipulation
    const clone = pickCard.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.animation = 'none';
    clone.style.margin = '0';
    
    // Remove buttons and interactive elements
    cleanElementForExport(clone, config);
    
    // Create container with proper dimensions
    const container = createExportContainer('twitter', config.darkBackground);
    container.appendChild(clone);
    document.body.appendChild(container);
    
    // Add branding footer
    addBrandingFooter(container, config);
    
    // Wait for images to load
    await waitForImages(container);
    
    // Generate canvas
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: PNGExportConfig.dimensions.twitter.width,
        height: PNGExportConfig.dimensions.twitter.height,
        windowWidth: PNGExportConfig.dimensions.twitter.width,
        windowHeight: PNGExportConfig.dimensions.twitter.height
    });
    
    // Cleanup
    document.body.removeChild(container);
    
    return canvas;
}

async function exportFirstRoundToCanvas(config) {
    const container = createExportContainer('standard', config.darkBackground);
    
    // Create header
    const header = createExportHeader('2026 NFL Mock Draft - First Round', config);
    container.appendChild(header);
    
    // Get all round 1 picks
    const round1Picks = document.querySelectorAll('#round1Picks .pick-card:not(.hidden)');
    
    // Create picks container
    const picksContainer = document.createElement('div');
    picksContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    `;
    
    // Clone and add each pick (limited to first 10 for Twitter format, or scrollable for full)
    const picksToShow = Array.from(round1Picks).slice(0, 10);
    picksToShow.forEach(pick => {
        const clone = createCompactPickClone(pick, config);
        picksContainer.appendChild(clone);
    });
    
    container.appendChild(picksContainer);
    addBrandingFooter(container, config);
    
    document.body.appendChild(container);
    await waitForImages(container);
    
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: 1200,
        height: Math.max(800, picksToShow.length * 70 + 200),
        scrollY: 0
    });
    
    document.body.removeChild(container);
    return canvas;
}

async function exportTeamDraftToCanvas(teamName, config) {
    const container = createExportContainer('twitter', config.darkBackground);
    
    // Find all picks for this team
    const teamPicks = findTeamPicks(teamName);
    
    // Create header with team branding
    const header = createTeamHeader(teamName, teamPicks.length, config);
    container.appendChild(header);
    
    // Create picks list
    const picksList = document.createElement('div');
    picksList.style.cssText = `
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;
    
    teamPicks.forEach(pick => {
        const pickEl = createTeamPickElement(pick, config);
        picksList.appendChild(pickEl);
    });
    
    container.appendChild(picksList);
    addBrandingFooter(container, config);
    
    document.body.appendChild(container);
    await waitForImages(container);
    
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: 1200,
        height: 675
    });
    
    document.body.removeChild(container);
    return canvas;
}

async function exportFullDraftToCanvas(config) {
    // For full draft, we'll create a long scrollable image
    const container = createExportContainer('standard', config.darkBackground);
    container.style.height = 'auto';
    
    // Header
    const header = createExportHeader('2026 NFL Mock Draft - Complete 3 Rounds', config);
    container.appendChild(header);
    
    // Summary stats
    const stats = createDraftStats(config);
    container.appendChild(stats);
    
    // Round 1
    const round1Section = createRoundSection('Round 1', '#round1Picks', config);
    container.appendChild(round1Section);
    
    // Round 2
    const round2Section = createRoundSection('Round 2', '#round2Picks', config);
    container.appendChild(round2Section);
    
    addBrandingFooter(container, config);
    
    document.body.appendChild(container);
    await waitForImages(container);
    
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: 1200,
        height: container.offsetHeight,
        scrollY: 0
    });
    
    document.body.removeChild(container);
    return canvas;
}

async function exportBigBoardToCanvas(config) {
    const container = createExportContainer('standard', config.darkBackground);
    
    const header = createExportHeader('2026 NFL Draft - Top Prospects Big Board', config);
    container.appendChild(header);
    
    // Get big board data
    const bigBoardList = document.getElementById('bigBoardList');
    if (bigBoardList) {
        const clone = bigBoardList.cloneNode(true);
        clone.style.padding = '20px';
        container.appendChild(clone);
    }
    
    addBrandingFooter(container, config);
    
    document.body.appendChild(container);
    await waitForImages(container);
    
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: 1200,
        height: Math.min(2400, container.offsetHeight)
    });
    
    document.body.removeChild(container);
    return canvas;
}

async function exportCurrentViewToCanvas(config) {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) throw new Error('No active tab found');
    
    const container = createExportContainer('standard', config.darkBackground);
    container.style.height = 'auto';
    
    // Clone the active tab content
    const clone = activeTab.cloneNode(true);
    clone.style.display = 'block';
    clone.style.padding = '20px';
    
    // Clean up
    cleanElementForExport(clone, config);
    
    container.appendChild(clone);
    addBrandingFooter(container, config);
    
    document.body.appendChild(container);
    await waitForImages(container);
    
    const canvas = await html2canvas(container, {
        ...PNGExportConfig.quality,
        width: 1200,
        height: container.offsetHeight
    });
    
    document.body.removeChild(container);
    return canvas;
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function createExportContainer(format, darkBackground) {
    const container = document.createElement('div');
    const dims = PNGExportConfig.dimensions[format] || PNGExportConfig.dimensions.standard;
    
    const bgColor = darkBackground ? '#0a0a0f' : '#ffffff';
    const textColor = darkBackground ? '#ffffff' : '#1a1a2e';
    
    container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: ${dims.width}px;
        height: ${dims.height}px;
        background: ${bgColor};
        color: ${textColor};
        font-family: 'Inter', sans-serif;
        overflow: hidden;
        z-index: -1;
    `;
    
    return container;
}

function createExportHeader(title, config) {
    const header = document.createElement('div');
    const bgColor = config.darkBackground ? '#12121a' : '#f5f5f7';
    const accentColor = config.darkBackground ? '#00d4ff' : '#00a8cc';
    
    header.style.cssText = `
        background: ${bgColor};
        padding: 30px 40px;
        border-bottom: 3px solid ${accentColor};
    `;
    
    header.innerHTML = `
        <div style="font-size: 14px; color: ${accentColor}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">
            🏈 NFL MOCK DRAFT 2026
        </div>
        <h1 style="font-family: 'Oswald', sans-serif; font-size: 36px; margin: 0; font-weight: 700; color: inherit;">
            ${title}
        </h1>
        <div style="font-size: 14px; opacity: 0.7; margin-top: 8px;">
            Generated on ${new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            })}
        </div>
    `;
    
    return header;
}

function createTeamHeader(teamName, pickCount, config) {
    const header = document.createElement('div');
    const bgColor = config.darkBackground ? '#12121a' : '#f5f5f7';
    const accentColor = config.darkBackground ? '#00d4ff' : '#00a8cc';
    
    // Get team info if available
    const teamInfo = getTeamInfo(teamName);
    
    header.style.cssText = `
        background: ${bgColor};
        padding: 30px 40px;
        border-bottom: 3px solid ${teamInfo?.color || accentColor};
        display: flex;
        align-items: center;
        gap: 20px;
    `;
    
    header.innerHTML = `
        ${teamInfo ? `
            <div style="width: 80px; height: 60px; background: ${teamInfo.color}; border-radius: 8px; 
                        display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px;">
                ${teamInfo.code}
            </div>
        ` : ''}
        <div>
            <div style="font-size: 14px; color: ${teamInfo?.color || accentColor}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">
                🏈 NFL MOCK DRAFT 2026
            </div>
            <h1 style="font-family: 'Oswald', sans-serif; font-size: 42px; margin: 0; font-weight: 700; color: inherit;">
                ${teamName}
            </h1>
            <div style="font-size: 16px; opacity: 0.7; margin-top: 5px;">
                ${pickCount} Pick${pickCount !== 1 ? 's' : ''} in this Mock Draft
            </div>
        </div>
    `;
    
    return header;
}

function createCompactPickClone(pickCard, config) {
    const clone = pickCard.cloneNode(true);
    cleanElementForExport(clone, config);
    
    // Make it more compact
    clone.style.cssText = `
        background: ${config.darkBackground ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'};
        border: 1px solid ${config.darkBackground ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
        border-radius: 10px;
        padding: 15px 20px;
        margin: 0;
    `;
    
    return clone;
}

function createTeamPickElement(pickCard, config) {
    const el = document.createElement('div');
    const bgColor = config.darkBackground ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
    const borderColor = config.darkBackground ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    
    el.style.cssText = `
        background: ${bgColor};
        border: 1px solid ${borderColor};
        border-radius: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
    `;
    
    const pickNumber = pickCard.querySelector('.pick-number')?.textContent || '';
    const playerName = pickCard.dataset.player || '';
    const playerPos = pickCard.dataset.position || '';
    const playerSchool = pickCard.querySelector('.player-school')?.textContent || '';
    
    el.innerHTML = `
        <div style="font-family: 'Oswald', sans-serif; font-size: 36px; color: #00d4ff; font-weight: 700; min-width: 60px;">
            ${pickNumber}
        </div>
        <div style="flex: 1;">
            <div style="font-size: 24px; font-weight: 700;">${playerName}</div>
            <div style="font-size: 16px; opacity: 0.8;">
                <span style="background: #00d4ff; color: ${config.darkBackground ? '#0a0a0f' : '#fff'}; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-right: 8px;">${playerPos}</span>
                ${playerSchool}
            </div>
        </div>
    `;
    
    return el;
}

function createDraftStats(config) {
    const stats = document.createElement('div');
    const bgColor = config.darkBackground ? 'rgba(0,212,255,0.1)' : 'rgba(0,168,204,0.1)';
    
    // Count positions
    const positionCounts = countPositionsByRound();
    
    stats.style.cssText = `
        background: ${bgColor};
        padding: 20px 40px;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
    `;
    
    stats.innerHTML = Object.entries(positionCounts)
        .filter(([_, count]) => count > 0)
        .map(([pos, count]) => `
            <div style="text-align: center;">
                <div style="font-family: 'Oswald', sans-serif; font-size: 32px; color: ${config.darkBackground ? '#00d4ff' : '#00a8cc'}; font-weight: 700;">${count}</div>
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">${pos}</div>
            </div>
        `).join('');
    
    return stats;
}

function createRoundSection(roundName, selector, config) {
    const section = document.createElement('div');
    section.style.cssText = 'padding: 30px 40px;';
    
    const title = document.createElement('h2');
    title.style.cssText = `
        font-family: 'Oswald', sans-serif;
        font-size: 28px;
        color: ${config.darkBackground ? '#00d4ff' : '#00a8cc'};
        border-bottom: 2px solid ${config.darkBackground ? '#00d4ff' : '#00a8cc'};
        padding-bottom: 10px;
        margin-bottom: 20px;
    `;
    title.textContent = roundName;
    section.appendChild(title);
    
    const picks = document.querySelectorAll(`${selector} .pick-card:not(.hidden)`);
    picks.forEach(pick => {
        const compact = createSuperCompactPick(pick, config);
        section.appendChild(compact);
    });
    
    return section;
}

function createSuperCompactPick(pickCard, config) {
    const pickNum = pickCard.querySelector('.pick-number')?.textContent || '';
    const teamName = pickCard.querySelector('.team-details h3')?.textContent || '';
    const playerName = pickCard.dataset.player || '';
    const position = pickCard.dataset.position || '';
    const school = pickCard.querySelector('.player-school')?.textContent || '';
    
    const el = document.createElement('div');
    el.style.cssText = `
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 12px 0;
        border-bottom: 1px solid ${config.darkBackground ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    `;
    
    el.innerHTML = `
        <div style="font-family: 'Oswald', sans-serif; font-size: 20px; color: ${config.darkBackground ? '#00d4ff' : '#00a8cc'}; font-weight: 700; min-width: 40px;">${pickNum}</div>
        <div style="flex: 1; font-size: 14px;">${teamName}</div>
        <div style="flex: 2; font-weight: 600;">${playerName}</div>
        <div style="background: ${config.darkBackground ? '#00d4ff' : '#00a8cc'}; color: ${config.darkBackground ? '#0a0a0f' : '#fff'}; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">${position}</div>
        <div style="font-size: 13px; opacity: 0.7;">${school}</div>
    `;
    
    return el;
}

function addBrandingFooter(container, config) {
    const footer = document.createElement('div');
    const bgColor = config.darkBackground ? '#12121a' : '#f5f5f7';
    const textColor = config.darkBackground ? '#ffffff' : '#1a1a2e';
    
    footer.style.cssText = `
        background: ${bgColor};
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid ${config.darkBackground ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    `;
    
    footer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 600;">
            <span style="font-size: 24px;">${PNGExportConfig.branding.logo}</span>
            <span style="color: ${textColor};">${PNGExportConfig.branding.text}</span>
        </div>
        <div style="font-size: 13px; opacity: 0.6;">
            #NFLMockDraft #2026NFLDraft
        </div>
    `;
    
    container.appendChild(footer);
}

function cleanElementForExport(element, config) {
    // Remove all buttons
    const buttons = element.querySelectorAll('button, .social-share, .share-btn');
    buttons.forEach(btn => btn.remove());
    
    // Remove interactive elements
    const interactive = element.querySelectorAll('.edp-container, .pick-grade-badge, [onclick]');
    interactive.forEach(el => {
        el.removeAttribute('onclick');
        if (el.classList.contains('edp-container') || el.classList.contains('pick-grade-badge')) {
            el.style.display = 'none';
        }
    });
    
    // Handle photos
    if (!config.includePhotos) {
        const photos = element.querySelectorAll('.player-photo');
        photos.forEach(photo => photo.style.display = 'none');
    }
    
    // Handle team logos/helmets
    if (!config.includeLogos) {
        const helmets = element.querySelectorAll('.team-helmet, .quick-pick-helmet');
        helmets.forEach(helmet => helmet.style.display = 'none');
    }
}

async function waitForImages(container) {
    const images = container.querySelectorAll('img');
    const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
            setTimeout(resolve, 2000); // Timeout after 2 seconds
        });
    });
    await Promise.all(promises);
}

function canvasToBlob(canvas, type = 'image/png', quality = 1.0) {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), type, quality);
    });
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function findPickCard(pickNumber) {
    const cards = document.querySelectorAll('.pick-card');
    return Array.from(cards).find(card => {
        const num = card.querySelector('.pick-number')?.textContent;
        return num == pickNumber;
    });
}

function findTeamPicks(teamName) {
    const cards = document.querySelectorAll('.pick-card');
    return Array.from(cards).filter(card => {
        const team = card.dataset.team?.toLowerCase();
        const teamHeader = card.querySelector('.team-details h3')?.textContent?.toLowerCase() || '';
        return team === teamName.toLowerCase() || teamHeader.includes(teamName.toLowerCase());
    });
}

function getTeamInfo(teamName) {
    // Map of team names to their colors and codes
    const teamMap = {
        'Raiders': { color: '#000000', code: 'LV' },
        'Jets': { color: '#125740', code: 'NYJ' },
        'Cardinals': { color: '#97233F', code: 'ARI' },
        'Titans': { color: '#0C2340', code: 'TEN' },
        'Giants': { color: '#001E62', code: 'NYG' },
        'Browns': { color: '#311D00', code: 'CLE' },
        'Commanders': { color: '#773141', code: 'WAS' },
        'Saints': { color: '#101820', code: 'NO' },
        'Chiefs': { color: '#E31837', code: 'KC' },
        'Bengals': { color: '#FB4F14', code: 'CIN' },
        'Dolphins': { color: '#008E97', code: 'MIA' },
        'Cowboys': { color: '#003594', code: 'DAL' },
        'Rams': { color: '#003594', code: 'LAR' },
        'Ravens': { color: '#241773', code: 'BAL' },
        'Buccaneers': { color: '#D50A0A', code: 'TB' },
        'Lions': { color: '#0076B6', code: 'DET' },
        'Vikings': { color: '#4F2683', code: 'MIN' },
        'Panthers': { color: '#0085CA', code: 'CAR' },
        'Steelers': { color: '#FFB612', code: 'PIT' },
        'Chargers': { color: '#0076B6', code: 'LAC' },
        'Eagles': { color: '#004C54', code: 'PHI' },
        'Bears': { color: '#0B162A', code: 'CHI' },
        'Bills': { color: '#00338D', code: 'BUF' },
        '49ers': { color: '#AA0000', code: 'SF' },
        'Texans': { color: '#03202F', code: 'HOU' },
        'Broncos': { color: '#FB4F14', code: 'DEN' },
        'Patriots': { color: '#002244', code: 'NE' },
        'Seahawks': { color: '#002244', code: 'SEA' },
        'Falcons': { color: '#A71930', code: 'ATL' },
        'Packers': { color: '#203731', code: 'GB' },
        'Colts': { color: '#002C5F', code: 'IND' },
        'Jaguars': { color: '#006778', code: 'JAX' }
    };
    
    return teamMap[teamName] || null;
}

function countPositionsByRound() {
    const counts = {};
    document.querySelectorAll('.pick-card:not(.hidden)').forEach(card => {
        const pos = card.dataset.position;
        if (pos) {
            counts[pos] = (counts[pos] || 0) + 1;
        }
    });
    return counts;
}

function getFormattedDate() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// ==========================================
// UI FUNCTIONS
// ==========================================

function showExportLoading(message = 'Generating image...') {
    // Remove existing loader
    hideExportLoading();
    
    const loader = document.createElement('div');
    loader.id = 'pngExportLoader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;
    
    loader.innerHTML = `
        <div style="width: 60px; height: 60px; border: 4px solid rgba(0,212,255,0.3); border-top-color: #00d4ff; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <p style="color: white; margin-top: 20px; font-size: 16px;">${message}</p>
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.id = 'pngExportLoaderStyle';
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
}

function hideExportLoading() {
    const loader = document.getElementById('pngExportLoader');
    const style = document.getElementById('pngExportLoaderStyle');
    if (loader) loader.remove();
    if (style) style.remove();
}

function showPNGPreview(canvas, filename, config) {
    // Remove existing preview
    hidePNGPreview();
    
    const modal = document.createElement('div');
    modal.id = 'pngPreviewModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        padding: 20px;
        backdrop-filter: blur(10px);
    `;
    
    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL('image/png');
    
    modal.innerHTML = `
        <div style="background: var(--card-bg, #1a1a2e); border-radius: 16px; max-width: 90vw; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column;">
            <div style="padding: 20px; border-bottom: 1px solid var(--border, rgba(255,255,255,0.1)); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; color: var(--text-primary, #fff); font-family: 'Oswald', sans-serif;">
                    <i class="fas fa-image" style="color: #00d4ff; margin-right: 10px;"></i>
                    PNG Export Preview
                </h3>
                <button onclick="hidePNGPreview()" style="background: none; border: none; color: var(--text-secondary, #8b8b9a); font-size: 24px; cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="padding: 20px; overflow: auto; max-height: 60vh; display: flex; justify-content: center;">
                <img src="${dataUrl}" style="max-width: 100%; max-height: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);" alt="Export Preview">
            </div>
            <div style="padding: 20px; border-top: 1px solid var(--border, rgba(255,255,255,0.1)); display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <button onclick="downloadPreviewImage('${dataUrl}', '${filename}')" class="png-export-btn primary">
                    <i class="fas fa-download"></i> Download PNG
                </button>
                <button onclick="sharePNGToTwitter('${dataUrl}', '${config.type || 'mock'}')" class="png-export-btn twitter">
                    <i class="fab fa-twitter"></i> Tweet This
                </button>
                <button onclick="copyPNGToClipboard('${dataUrl}')" class="png-export-btn">
                    <i class="fas fa-copy"></i> Copy Image
                </button>
                <button onclick="hidePNGPreview()" class="png-export-btn secondary">
                    Close
                </button>
            </div>
        </div>
    `;
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hidePNGPreview();
    });
    
    // Close on Escape
    const closeOnEscape = (e) => {
        if (e.key === 'Escape') {
            hidePNGPreview();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
    
    document.body.appendChild(modal);
}

function hidePNGPreview() {
    const modal = document.getElementById('pngPreviewModal');
    if (modal) modal.remove();
}

function downloadPreviewImage(dataUrl, filename) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    link.click();
    showToast('Image downloaded!');
}

async function copyPNGToClipboard(dataUrl) {
    try {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
        ]);
        showToast('Image copied to clipboard!');
    } catch (err) {
        console.error('Copy failed:', err);
        showToast('Unable to copy image. Try downloading instead.');
    }
}

function sharePNGToTwitter(dataUrl, type) {
    const text = `Check out my 2026 NFL Mock Draft! #NFLMockDraft #2026NFLDraft`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=400');
    showToast('Opening Twitter... (Image downloaded for manual upload)');
}

// ==========================================
// EXPORT MODAL UI
// ==========================================

function openPNGExportModal() {
    // Check if modal already exists
    let modal = document.getElementById('pngExportModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }
    
    // Create modal
    modal = document.createElement('div');
    modal.id = 'pngExportModal';
    modal.className = 'png-export-modal';
    modal.innerHTML = `
        <div class="png-export-container">
            <div class="png-export-header">
                <div class="png-export-title">
                    <i class="fas fa-image"></i>
                    <div>
                        Export Your Mock Draft
                        <div class="png-export-subtitle">Share your mock as a beautiful image</div>
                    </div>
                </div>
                <button class="png-export-close" onclick="closePNGExportModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="png-export-body">
                <!-- Export Type Selection -->
                <div class="png-export-section">
                    <div class="png-export-section-title">What to Export</div>
                    <div class="png-export-options">
                        <label class="png-export-option">
                            <input type="radio" name="exportType" value="full" checked>
                            <span class="png-export-option-content">
                                <i class="fas fa-list-ol"></i>
                                <span>Full Draft (3 rounds)</span>
                            </span>
                        </label>
                        <label class="png-export-option">
                            <input type="radio" name="exportType" value="firstRound">
                            <span class="png-export-option-content">
                                <i class="fas fa-star"></i>
                                <span>First Round Only</span>
                            </span>
                        </label>
                        <label class="png-export-option">
                            <input type="radio" name="exportType" value="team">
                            <span class="png-export-option-content">
                                <i class="fas fa-shield-alt"></i>
                                <span>Team's Picks Only</span>
                            </span>
                        </label>
                        <label class="png-export-option">
                            <input type="radio" name="exportType" value="current">
                            <span class="png-export-option-content">
                                <i class="fas fa-eye"></i>
                                <span>Current View</span>
                            </span>
                        </label>
                    </div>
                </div>
                
                <!-- Team Selection (hidden by default) -->
                <div class="png-export-section" id="teamSelectSection" style="display: none;">
                    <div class="png-export-section-title">Select Team</div>
                    <select id="pngExportTeamSelect" class="png-export-select">
                        <option value="">Choose a team...</option>
                        ${getTeamOptionsHTML()}
                    </select>
                </div>
                
                <!-- Options -->
                <div class="png-export-section">
                    <div class="png-export-section-title">Options</div>
                    <div class="png-export-checkboxes">
                        <label class="png-export-checkbox">
                            <input type="checkbox" id="includeLogos" checked>
                            <span class="checkmark"></span>
                            Include team logos
                        </label>
                        <label class="png-export-checkbox">
                            <input type="checkbox" id="includePhotos" checked>
                            <span class="checkmark"></span>
                            Include player photos
                        </label>
                        <label class="png-export-checkbox">
                            <input type="checkbox" id="includeGrades" checked>
                            <span class="checkmark"></span>
                            Include grades (if available)
                        </label>
                        <label class="png-export-checkbox">
                            <input type="checkbox" id="darkBackground">
                            <span class="checkmark"></span>
                            Dark background
                        </label>
                    </div>
                </div>
                
                <!-- Format -->
                <div class="png-export-section">
                    <div class="png-export-section-title">Format</div>
                    <div class="png-export-format-buttons">
                        <button class="png-export-format-btn active" data-format="twitter">
                            <i class="fab fa-twitter"></i>
                            Twitter (1200×675)
                        </button>
                        <button class="png-export-format-btn" data-format="facebook">
                            <i class="fab fa-facebook"></i>
                            Facebook (1200×630)
                        </button>
                        <button class="png-export-format-btn" data-format="standard">
                            <i class="fas fa-image"></i>
                            Standard (1200×800)
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="png-export-footer">
                <button class="png-export-btn secondary" onclick="closePNGExportModal()">
                    Cancel
                </button>
                <button class="png-export-btn primary" onclick="generatePNGFromModal()">
                    <i class="fas fa-magic"></i>
                    Generate PNG
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    setupPNGModalListeners();
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);
}

function closePNGExportModal() {
    const modal = document.getElementById('pngExportModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setupPNGModalListeners() {
    // Export type change
    document.querySelectorAll('input[name="exportType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const teamSection = document.getElementById('teamSelectSection');
            teamSection.style.display = e.target.value === 'team' ? 'block' : 'none';
        });
    });
    
    // Format buttons
    document.querySelectorAll('.png-export-format-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.png-export-format-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Close on backdrop click
    const modal = document.getElementById('pngExportModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePNGExportModal();
    });
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePNGExportModal();
    });
}

function getTeamOptionsHTML() {
    const teams = [
        'Raiders', 'Jets', 'Cardinals', 'Titans', 'Giants', 'Browns', 'Commanders', 'Saints',
        'Chiefs', 'Bengals', 'Dolphins', 'Cowboys', 'Rams', 'Ravens', 'Buccaneers', 'Lions',
        'Vikings', 'Panthers', 'Steelers', 'Chargers', 'Eagles', 'Bears', 'Bills', '49ers',
        'Texans', 'Broncos', 'Patriots', 'Seahawks', 'Falcons', 'Packers', 'Colts', 'Jaguars'
    ];
    
    return teams.map(team => `<option value="${team}">${team}</option>`).join('');
}

async function generatePNGFromModal() {
    const exportType = document.querySelector('input[name="exportType"]:checked').value;
    const team = document.getElementById('pngExportTeamSelect')?.value;
    const includeLogos = document.getElementById('includeLogos')?.checked;
    const includePhotos = document.getElementById('includePhotos')?.checked;
    const includeGrades = document.getElementById('includeGrades')?.checked;
    const darkBackground = document.getElementById('darkBackground')?.checked;
    const format = document.querySelector('.png-export-format-btn.active')?.dataset.format || 'twitter';
    
    // Validate team selection
    if (exportType === 'team' && !team) {
        showToast('Please select a team');
        return;
    }
    
    closePNGExportModal();
    
    await exportMockToPNG({
        type: exportType,
        team: team,
        includeLogos,
        includePhotos,
        includeGrades,
        darkBackground,
        format
    });
}

// ==========================================
// CONTEXT MENU FOR PICK CARDS
// ==========================================

function initPickCardContextMenu() {
    // Remove existing context menu
    const existing = document.getElementById('pickCardContextMenu');
    if (existing) existing.remove();
    
    // Create context menu
    const menu = document.createElement('div');
    menu.id = 'pickCardContextMenu';
    menu.className = 'pick-card-context-menu';
    menu.innerHTML = `
        <div class="context-menu-item" data-action="export-png">
            <i class="fas fa-image"></i>
            <span>Export as PNG</span>
        </div>
        <div class="context-menu-item" data-action="share-twitter">
            <i class="fab fa-twitter"></i>
            <span>Share on Twitter</span>
        </div>
        <div class="context-menu-item" data-action="copy-link">
            <i class="fas fa-link"></i>
            <span>Copy Link</span>
        </div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" data-action="view-details">
            <i class="fas fa-info-circle"></i>
            <span>View Details</span>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    // Track current pick
    let currentPickNumber = null;
    
    // Add right-click listener to pick cards
    document.querySelectorAll('.pick-card').forEach(card => {
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            currentPickNumber = card.querySelector('.pick-number')?.textContent;
            showContextMenu(e.pageX, e.pageY);
        });
    });
    
    // Handle menu actions
    menu.querySelectorAll('.context-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            handleContextMenuAction(action, currentPickNumber);
            hideContextMenu();
        });
    });
    
    // Hide on click elsewhere
    document.addEventListener('click', () => hideContextMenu());
    document.addEventListener('scroll', () => hideContextMenu());
}

function showContextMenu(x, y) {
    const menu = document.getElementById('pickCardContextMenu');
    if (!menu) return;
    
    // Adjust position to keep on screen
    const rect = menu.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    
    if (x + rect.width > winWidth) x = winWidth - rect.width - 10;
    if (y + rect.height > winHeight) y = winHeight - rect.height - 10;
    
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.classList.add('active');
}

function hideContextMenu() {
    const menu = document.getElementById('pickCardContextMenu');
    if (menu) menu.classList.remove('active');
}

function handleContextMenuAction(action, pickNumber) {
    if (!pickNumber) return;
    
    switch (action) {
        case 'export-png':
            exportPickCardToPNG(parseInt(pickNumber));
            break;
        case 'share-twitter':
            sharePickToTwitter(pickNumber);
            break;
        case 'copy-link':
            copyPickLink(parseInt(pickNumber));
            break;
        case 'view-details':
            scrollToPick(parseInt(pickNumber));
            break;
    }
}

function sharePickToTwitter(pickNumber) {
    const pickCard = findPickCard(pickNumber);
    if (!pickCard) return;
    
    const team = pickCard.querySelector('.team-details h3')?.textContent || 'Team';
    const player = pickCard.dataset.player || 'Player';
    
    const text = `With the #${pickNumber} pick in the 2026 NFL Mock Draft, the ${team} select ${player}! #NFLMockDraft #2026NFLDraft`;
    const url = `${window.location.origin}${window.location.pathname}#pick=${pickNumber}`;
    
    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        '_blank',
        'width=600,height=400'
    );
}

// ==========================================
// GLOBAL EXPORTS
// ==========================================

// Make functions available globally for inline handlers
window.exportMockToPNG = exportMockToPNG;
window.exportPickCardToPNG = exportPickCardToPNG;
window.exportFullDraftToPNG = exportFullDraftToPNG;
window.exportBigBoardToPNG = exportBigBoardToPNG;
window.openPNGExportModal = openPNGExportModal;
window.closePNGExportModal = closePNGExportModal;
window.generatePNGFromModal = generatePNGFromModal;
window.hidePNGPreview = hidePNGPreview;
window.downloadPreviewImage = downloadPreviewImage;
window.copyPNGToClipboard = copyPNGToClipboard;
window.sharePNGToTwitter = sharePNGToTwitter;

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize context menu after a short delay
    setTimeout(() => {
        initPickCardContextMenu();
    }, 1000);
    
    // Add export button to export bar
    addPNGExportButton();
});

function addPNGExportButton() {
    const exportBar = document.querySelector('.export-bar');
    if (!exportBar) return;
    
    // Check if button already exists
    if (exportBar.querySelector('.png-export-trigger')) return;
    
    const btn = document.createElement('button');
    btn.className = 'export-btn png-export-trigger';
    btn.innerHTML = '<i class="fas fa-image"></i> PNG';
    btn.onclick = openPNGExportModal;
    btn.title = 'Export as PNG Image';
    
    // Insert before the PDF button
    const pdfBtn = exportBar.querySelector('[onclick="exportToPDF()"]');
    if (pdfBtn) {
        pdfBtn.before(btn);
    } else {
        exportBar.appendChild(btn);
    }
}

// Re-initialize context menu when new pick cards are added
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if any pick cards were added
            const hasPickCards = Array.from(mutation.addedNodes).some(node => 
                node.nodeType === 1 && (
                    node.classList?.contains('pick-card') ||
                    node.querySelector?.('.pick-card')
                )
            );
            
            if (hasPickCards) {
                initPickCardContextMenu();
            }
        }
    });
});

// Start observing once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, { childList: true, subtree: true });
});

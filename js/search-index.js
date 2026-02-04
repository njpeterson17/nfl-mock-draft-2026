/**
 * NFL Mock Draft 2026 - Search Index Module
 * Fast client-side search with fuzzy matching and autocomplete
 */

(function() {
    'use strict';

    let searchIndex = [];
    let playerNames = [];
    let teamNames = [];
    let positions = [];
    let schools = [];
    
    const searchCache = new Map();
    const MAX_CACHE_SIZE = 50;

    function initSearchIndex() {
        const startTime = performance.now();
        
        searchIndex = [];
        
        // Index Round 1 picks
        document.querySelectorAll('#round1Picks .pick-card').forEach(card => {
            indexPickCard(card, 1);
        });
        
        // Index Round 2 picks
        document.querySelectorAll('#round2Picks .pick-card').forEach(card => {
            indexPickCard(card, 2);
        });
        
        // Index Round 3 picks
        document.querySelectorAll('#round3 .quick-pick-card').forEach(card => {
            indexQuickPickCard(card, 3);
        });
        
        // Get unique values
        playerNames = [...new Set(playerNames)].sort();
        teamNames = [...new Set(teamNames)].sort();
        positions = [...new Set(positions)].sort();
        schools = [...new Set(schools)].sort();
        
        const endTime = performance.now();
        console.log(`[SearchIndex] Initialized with ${searchIndex.length} players in ${(endTime - startTime).toFixed(2)}ms`);
        
        initAutocomplete();
        return searchIndex;
    }

    function indexPickCard(card, round) {
        const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent || '0');
        const playerName = card.dataset.player || '';
        const team = card.dataset.team || '';
        const position = card.dataset.position || '';
        const school = card.querySelector('.player-school')?.textContent || '';
        const teamFullName = card.querySelector('.team-details h3')?.textContent || '';
        
        if (playerName) playerNames.push(playerName);
        if (team) teamNames.push(team);
        if (position) positions.push(position);
        if (school) schools.push(school);
        
        searchIndex.push({
            pickNumber, round, playerName, team, teamFullName, position, school,
            searchableText: [
                playerName.toLowerCase(), team.toLowerCase(), teamFullName.toLowerCase(),
                position.toLowerCase(), school.toLowerCase(),
                playerName.toLowerCase().replace(/[^a-z]/g, '')
            ].join(' '),
            element: card
        });
    }

    function indexQuickPickCard(card, round) {
        const pickNumber = parseInt(card.querySelector('.quick-pick-number')?.textContent || '0');
        const playerName = card.querySelector('.quick-pick-player')?.textContent || '';
        const team = card.querySelector('.quick-pick-team')?.textContent || '';
        const position = card.querySelector('.quick-pick-position')?.textContent || '';
        
        if (playerName) playerNames.push(playerName);
        if (team) teamNames.push(team);
        if (position) positions.push(position);
        
        searchIndex.push({
            pickNumber, round, playerName, team, teamFullName: team, position, school: '',
            searchableText: [
                playerName.toLowerCase(), team.toLowerCase(), position.toLowerCase(),
                playerName.toLowerCase().replace(/[^a-z]/g, '')
            ].join(' '),
            element: card
        });
    }

    function levenshteinDistance(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    function fuzzyScore(query, text) {
        if (!query || !text) return 0;
        
        query = query.toLowerCase();
        text = text.toLowerCase();
        
        if (text === query) return 1;
        if (text.startsWith(query)) return 0.9;
        if (text.includes(query)) return 0.8;
        
        const words = text.split(/\s+/);
        for (const word of words) {
            if (word.startsWith(query)) return 0.7;
        }
        
        const maxLength = Math.max(query.length, text.length);
        if (maxLength === 0) return 0;
        
        const distance = levenshteinDistance(query, text);
        const similarity = 1 - (distance / maxLength);
        
        return similarity > 0.6 ? similarity * 0.6 : 0;
    }

    function search(query, options = {}) {
        const startTime = performance.now();
        
        if (!searchIndex.length) initSearchIndex();
        if (!query || query.trim().length === 0) {
            return { results: [], count: 0, time: 0 };
        }
        
        query = query.toLowerCase().trim();
        
        const cacheKey = `${query}-${JSON.stringify(options)}`;
        if (searchCache.has(cacheKey)) {
            return searchCache.get(cacheKey);
        }
        
        const { fuzzy = true, limit = 100 } = options;
        const results = [];
        
        for (const doc of searchIndex) {
            let score = 0;
            
            score = Math.max(score, fuzzyScore(query, doc.playerName) * 1.0);
            score = Math.max(score, fuzzyScore(query, doc.team) * 0.9);
            score = Math.max(score, fuzzyScore(query, doc.teamFullName) * 0.85);
            score = Math.max(score, fuzzyScore(query, doc.position) * 0.8);
            score = Math.max(score, fuzzyScore(query, doc.school) * 0.75);
            
            if (doc.searchableText.includes(query)) {
                score = Math.max(score, 0.7);
            }
            
            if (fuzzy && score < 0.6) {
                const words = doc.searchableText.split(/\s+/);
                for (const word of words) {
                    const wordScore = fuzzyScore(query, word);
                    score = Math.max(score, wordScore * 0.5);
                }
            }
            
            if (score > 0.3) {
                results.push({ ...doc, score });
            }
        }
        
        results.sort((a, b) => b.score - a.score);
        const limitedResults = results.slice(0, limit);
        
        const searchTime = (performance.now() - startTime).toFixed(2);
        
        const result = {
            results: limitedResults,
            count: limitedResults.length,
            totalMatches: results.length,
            time: parseFloat(searchTime)
        };
        
        searchCache.set(cacheKey, result);
        if (searchCache.size > MAX_CACHE_SIZE) {
            const firstKey = searchCache.keys().next().value;
            searchCache.delete(firstKey);
        }
        
        return result;
    }

    function getSuggestions(query, limit = 5) {
        if (!query || query.trim().length < 2) return [];
        
        query = query.toLowerCase().trim();
        
        const suggestions = [];
        const added = new Set();
        
        const addSuggestion = (text, type, score) => {
            const key = `${text}-${type}`;
            if (!added.has(key)) {
                added.add(key);
                suggestions.push({ text, type, score });
            }
        };
        
        for (const name of playerNames) {
            const score = fuzzyScore(query, name);
            if (score > 0.5) addSuggestion(name, 'player', score);
        }
        
        for (const team of teamNames) {
            const score = fuzzyScore(query, team);
            if (score > 0.5) addSuggestion(team, 'team', score);
        }
        
        for (const pos of positions) {
            if (pos.toLowerCase().startsWith(query)) {
                addSuggestion(pos, 'position', 0.8);
            }
        }
        
        for (const school of schools) {
            const score = fuzzyScore(query, school);
            if (score > 0.6) addSuggestion(school, 'school', score);
        }
        
        suggestions.sort((a, b) => b.score - a.score);
        return suggestions.slice(0, limit);
    }

    function initAutocomplete() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.style.cssText = `
            position: absolute; top: 100%; left: 0; right: 0;
            background: var(--secondary); border: 1px solid var(--border);
            border-radius: 8px; margin-top: 4px; max-height: 250px;
            overflow-y: auto; z-index: 1000; display: none;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        
        searchInput.parentElement.style.position = 'relative';
        searchInput.parentElement.appendChild(suggestionsContainer);
        
        let selectedIndex = -1;
        let currentSuggestions = [];
        
        searchInput.addEventListener('input', function() {
            const query = this.value;
            
            if (query.length < 2) {
                suggestionsContainer.style.display = 'none';
                return;
            }
            
            currentSuggestions = getSuggestions(query, 8);
            
            if (currentSuggestions.length === 0) {
                suggestionsContainer.style.display = 'none';
                return;
            }
            
            suggestionsContainer.innerHTML = currentSuggestions.map((s, i) => {
                const iconClass = {
                    player: 'fa-user', team: 'fa-shield-alt',
                    position: 'fa-tag', school: 'fa-graduation-cap'
                }[s.type] || 'fa-search';
                
                const typeLabel = {
                    player: 'Player', team: 'Team',
                    position: 'Position', school: 'School'
                }[s.type] || s.type;
                
                const highlightedText = s.text.replace(
                    new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                    '<span style="color: var(--accent); font-weight: 600;">$1</span>'
                );
                
                return `
                    <div class="suggestion-item" data-index="${i}" data-text="${s.text}" style="
                        padding: 10px 15px; cursor: pointer; display: flex;
                        align-items: center; gap: 10px; border-bottom: 1px solid var(--border);
                    " onmouseover="this.style.background='rgba(0,212,255,0.1)'" 
                       onmouseout="this.style.background='transparent'">
                        <i class="fas ${iconClass}" style="color: var(--accent); width: 20px;"></i>
                        <span style="flex: 1;">${highlightedText}</span>
                        <span style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">${typeLabel}</span>
                    </div>
                `;
            }).join('');
            
            suggestionsContainer.style.display = 'block';
            selectedIndex = -1;
            
            suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', function() {
                    const text = this.dataset.text;
                    searchInput.value = text;
                    suggestionsContainer.style.display = 'none';
                    if (typeof searchAllPicks === 'function') searchAllPicks();
                });
            });
        });
        
        searchInput.addEventListener('keydown', function(e) {
            if (currentSuggestions.length === 0) return;
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, currentSuggestions.length - 1);
                    updateSelection();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, -1);
                    updateSelection();
                    break;
                case 'Enter':
                    if (selectedIndex >= 0) {
                        e.preventDefault();
                        searchInput.value = currentSuggestions[selectedIndex].text;
                        suggestionsContainer.style.display = 'none';
                        if (typeof searchAllPicks === 'function') searchAllPicks();
                    }
                    break;
                case 'Escape':
                    suggestionsContainer.style.display = 'none';
                    break;
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!searchInput.parentElement.contains(e.target)) {
                suggestionsContainer.style.display = 'none';
            }
        });
        
        function updateSelection() {
            const items = suggestionsContainer.querySelectorAll('.suggestion-item');
            items.forEach((item, i) => {
                item.style.background = i === selectedIndex ? 'rgba(0,212,255,0.2)' : 'transparent';
                if (i === selectedIndex) item.scrollIntoView({ block: 'nearest' });
            });
        }
    }

    function getStats() {
        return {
            totalPlayers: searchIndex.length,
            uniqueNames: playerNames.length,
            uniqueTeams: teamNames.length,
            uniquePositions: positions.length,
            uniqueSchools: schools.length,
            cacheSize: searchCache.size
        };
    }

    window.NFLDraftSearch = {
        init: initSearchIndex,
        search,
        getSuggestions,
        getStats,
        fuzzyScore
    };

    window.searchPlayers = search;
    window.searchSuggestions = getSuggestions;
    window.getSearchStats = getStats;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(initSearchIndex, 100));
    } else {
        setTimeout(initSearchIndex, 100);
    }

    console.log('[SearchIndex] Loaded. Run NFLDraftSearch.search("query") to search.');
})();

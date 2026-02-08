        // ==========================================
        // THEME TOGGLE FUNCTIONS
        // ==========================================
        
        // Load saved theme - default to dark
        function loadTheme() {
            const savedTheme = localStorage.getItem('nflDraftTheme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                updateThemeIcon(savedTheme);
            } else {
                // Default to dark theme
                document.documentElement.setAttribute('data-theme', 'dark');
                updateThemeIcon('dark');
            }
        }
        
        // Toggle between light and dark themes
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('nflDraftTheme', newTheme);
            updateThemeIcon(newTheme);
            
            showToast(newTheme === 'light' ? 'Light mode enabled' : 'Dark mode enabled');
        }
        
        // Update theme toggle button icon and meta theme color
        function updateThemeIcon(theme) {
            // Update meta theme-color for mobile browsers
            const themeColor = document.getElementById('themeColor');
            if (themeColor) {
                themeColor.content = theme === 'light' ? '#00a8cc' : '#00d4ff';
            }
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('nflDraftTheme')) {
                const newTheme = e.matches ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                updateThemeIcon(newTheme);
            }
        });

        // Tab switching
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updatePositionCounts();
            
            // Track tab click in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackTabClick(tabId);
            }
            
            // Render Big Board if that tab is selected
            if (tabId === 'bigBoard') {
                renderBigBoard();
            }
            
            // Render Team Drafts if that tab is selected
            if (tabId === 'teamDrafts') {
                renderTeamDrafts();
            }
            
            // Render Draft Grades if that tab is selected
            if (tabId === 'draftGrades') {
                renderDraftGrades();
            }
            
            // Initialize ads for newly visible tab
            setTimeout(initAds, 100);
        }

        // More dropdown toggle
        function toggleMoreDropdown(event) {
            if (event) {
                event.stopPropagation();
            }
            const dropdown = document.getElementById('moreDropdown');
            if (dropdown) {
                const isVisible = dropdown.style.display === 'block';
                dropdown.style.display = isVisible ? 'none' : 'block';
            }
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById('moreDropdown');
            const moreBtn = e.target.closest('.nav-dropdown');
            if (dropdown && !moreBtn) {
                dropdown.style.display = 'none';
            }
        });

        // Filter by position
        function filterPicks(position) {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const picks = document.querySelectorAll('#round1Picks .pick-card');
            let visibleCount = 0;

            picks.forEach(pick => {
                if (position === 'all' || pick.dataset.position === position) {
                    pick.classList.remove('hidden');
                    visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });

            // Show/hide no results message
            const noResults = document.getElementById('noResults');
            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }

            showToast(`Filtered by: ${position === 'all' ? 'All Positions' : position}`);
        }

        // Search picks
        function searchPicks() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const picks = document.querySelectorAll('#round1Picks .pick-card');
            let visibleCount = 0;

            picks.forEach(pick => {
                const player = pick.dataset.player.toLowerCase();
                const team = pick.dataset.team.toLowerCase();
                const position = pick.dataset.position.toLowerCase();

                if (player.includes(searchTerm) || team.includes(searchTerm) || position.includes(searchTerm)) {
                    pick.classList.remove('hidden');
                    visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });

            const noResults = document.getElementById('noResults');
            if (visibleCount === 0 && searchTerm !== '') {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }

        // Update position counts
        function updatePositionCounts() {
            const picks = document.querySelectorAll('#round1Picks .pick-card:not(.hidden)');
            const counts = { QB: 0, RB: 0, WR: 0, TE: 0, OT: 0, IOL: 0, EDGE: 0, DL: 0, LB: 0, CB: 0, S: 0 };

            picks.forEach(pick => {
                const pos = pick.dataset.position;
                if (counts.hasOwnProperty(pos)) {
                    counts[pos]++;
                }
            });

            document.getElementById('qbCount').textContent = counts.QB;
            document.getElementById('rbCount').textContent = counts.RB;
            document.getElementById('wrCount').textContent = counts.WR;
            document.getElementById('teCount').textContent = counts.TE;
            document.getElementById('otCount').textContent = counts.OT;
            document.getElementById('iolCount').textContent = counts.IOL;
            document.getElementById('edgeCount').textContent = counts.EDGE;
            document.getElementById('dlCount').textContent = counts.DL;
            document.getElementById('lbCount').textContent = counts.LB;
            document.getElementById('cbCount').textContent = counts.CB;
            document.getElementById('sCount').textContent = counts.S;
        }

        // Share pick on Twitter
        function sharePick(team, player, pick) {
            const text = `With the #${pick} pick in the 2026 NFL Mock Draft, the ${team} select ${player}!`;
            const shareUrl = `${window.location.origin}${window.location.pathname}#pick=${pick}`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        // Copy pick link
        function copyPickLink(pick) {
            const url = `${window.location.origin}${window.location.pathname}#pick=${pick}`;
            navigator.clipboard.writeText(url).then(() => {
                showToast('Link copied to clipboard!');
            }).catch(() => {
                // Fallback for browsers that don't support clipboard API
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Link copied to clipboard!');
            });
        }

        // Social sharing
        function shareTwitter() {
            const text = 'Check out this 2026 NFL Mock Draft with full player analysis!';
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        function shareFacebook() {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        function shareReddit() {
            const url = `https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=2026 NFL Mock Draft`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        function copyLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Link copied to clipboard!');
            });
        }

        // Toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Back to top button
        window.addEventListener('scroll', () => {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadTheme(); // Load saved theme preference first
            updatePositionCounts();
            updateR2PositionCounts();
            initJumpToSelect();
            initImageHandling();
            handleDeepLink();
            renderBigBoard();
            renderTeamDrafts();
            renderDraftGrades();
            
            // Check for pick hash (runs after a slight delay to ensure all content is loaded)
            setTimeout(() => {
                checkPickHash();
            }, 100);
        });

        // Round 2 Position Counts
        function updateR2PositionCounts() {
            const picks = document.querySelectorAll('#round2Picks .pick-card:not(.hidden)');
            const counts = { QB: 0, RB: 0, WR: 0, TE: 0, OT: 0, IOL: 0, EDGE: 0, DL: 0, LB: 0, CB: 0, S: 0 };

            picks.forEach(pick => {
                const pos = pick.dataset.position;
                if (counts.hasOwnProperty(pos)) {
                    counts[pos]++;
                }
            });

            if (document.getElementById('r2qbCount')) document.getElementById('r2qbCount').textContent = counts.QB;
            if (document.getElementById('r2rbCount')) document.getElementById('r2rbCount').textContent = counts.RB;
            if (document.getElementById('r2wrCount')) document.getElementById('r2wrCount').textContent = counts.WR;
            if (document.getElementById('r2teCount')) document.getElementById('r2teCount').textContent = counts.TE;
            if (document.getElementById('r2otCount')) document.getElementById('r2otCount').textContent = counts.OT;
            if (document.getElementById('r2iolCount')) document.getElementById('r2iolCount').textContent = counts.IOL;
            if (document.getElementById('r2edgeCount')) document.getElementById('r2edgeCount').textContent = counts.EDGE;
            if (document.getElementById('r2dlCount')) document.getElementById('r2dlCount').textContent = counts.DL;
            if (document.getElementById('r2lbCount')) document.getElementById('r2lbCount').textContent = counts.LB;
            if (document.getElementById('r2cbCount')) document.getElementById('r2cbCount').textContent = counts.CB;
            if (document.getElementById('r2sCount')) document.getElementById('r2sCount').textContent = counts.S;
        }

        // Round 3 Position Counts
        function updateR3PositionCounts() {
            const picks = document.querySelectorAll('#round3Picks .pick-card:not(.hidden)');
            const counts = { QB: 0, RB: 0, WR: 0, TE: 0, OT: 0, IOL: 0, EDGE: 0, DL: 0, LB: 0, CB: 0, S: 0 };

            picks.forEach(pick => {
                const pos = pick.dataset.position;
                if (counts.hasOwnProperty(pos)) {
                    counts[pos]++;
                }
            });

            if (document.getElementById('r3qbCount')) document.getElementById('r3qbCount').textContent = counts.QB;
            if (document.getElementById('r3rbCount')) document.getElementById('r3rbCount').textContent = counts.RB;
            if (document.getElementById('r3wrCount')) document.getElementById('r3wrCount').textContent = counts.WR;
            if (document.getElementById('r3teCount')) document.getElementById('r3teCount').textContent = counts.TE;
            if (document.getElementById('r3otCount')) document.getElementById('r3otCount').textContent = counts.OT;
            if (document.getElementById('r3iolCount')) document.getElementById('r3iolCount').textContent = counts.IOL;
            if (document.getElementById('r3edgeCount')) document.getElementById('r3edgeCount').textContent = counts.EDGE;
            if (document.getElementById('r3dlCount')) document.getElementById('r3dlCount').textContent = counts.DL;
            if (document.getElementById('r3lbCount')) document.getElementById('r3lbCount').textContent = counts.LB;
            if (document.getElementById('r3cbCount')) document.getElementById('r3cbCount').textContent = counts.CB;
            if (document.getElementById('r3sCount')) document.getElementById('r3sCount').textContent = counts.S;
        }

        // Enhanced filter function that works for all rounds
        function filterAllPicks(position) {
            // Update active button
            document.querySelectorAll('.controls-bar .filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Filter Round 1
            const r1picks = document.querySelectorAll('#round1Picks .pick-card');
            let r1visibleCount = 0;
            r1picks.forEach(pick => {
                if (position === 'all' || pick.dataset.position === position) {
                    pick.classList.remove('hidden');
                    r1visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });
            
            // Show/hide Round 1 no results
            const r1noResults = document.getElementById('noResults');
            if (r1noResults) r1noResults.style.display = r1visibleCount === 0 && position !== 'all' ? 'block' : 'none';

            // Filter Round 2
            const r2picks = document.querySelectorAll('#round2Picks .pick-card');
            let r2visibleCount = 0;
            r2picks.forEach(pick => {
                if (position === 'all' || pick.dataset.position === position) {
                    pick.classList.remove('hidden');
                    r2visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });
            
            // Show/hide Round 2 no results
            const r2noResults = document.getElementById('r2noResults');
            if (r2noResults) r2noResults.style.display = r2visibleCount === 0 && position !== 'all' ? 'block' : 'none';

            // Filter Round 3
            const r3picks = document.querySelectorAll('#round3Picks .pick-card');
            let r3visibleCount = 0;
            r3picks.forEach(pick => {
                if (position === 'all' || pick.dataset.position === position) {
                    pick.classList.remove('hidden');
                    r3visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });
            
            // Show/hide Round 3 no results
            const r3noResults = document.getElementById('r3noResults');
            if (r3noResults) r3noResults.style.display = r3visibleCount === 0 && position !== 'all' ? 'block' : 'none';

            updatePositionCounts();
            updateR2PositionCounts();
            updateR3PositionCounts();
            showToast(`Filtered by: ${position === 'all' ? 'All Positions' : position}`);
            
            // Track filter usage in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackFilter(position === 'all' ? 'All' : `Position: ${position}`);
            }
        }

        // Enhanced search function that works for both rounds
        function searchAllPicks() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            // Use search index for fuzzy matching if available
            let searchResults = null;
            if (window.NFLDraftSearch && searchTerm.length >= 2) {
                const indexResults = window.NFLDraftSearch.search(searchTerm, { fuzzy: true });
                searchResults = new Set(indexResults.results.map(r => r.playerName.toLowerCase()));
            }
            
            // Search Round 1
            const r1picks = document.querySelectorAll('#round1Picks .pick-card');
            let r1visibleCount = 0;
            r1picks.forEach(pick => {
                const player = (pick.dataset.player || '').toLowerCase();
                const team = (pick.dataset.team || '').toLowerCase();
                const position = (pick.dataset.position || '').toLowerCase();

                const matches = player.includes(searchTerm) || 
                               team.includes(searchTerm) || 
                               position.includes(searchTerm) ||
                               (searchResults && searchResults.has(player));

                if (matches) {
                    pick.classList.remove('hidden');
                    r1visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });
            
            const r1noResults = document.getElementById('noResults');
            if (r1noResults) r1noResults.style.display = r1visibleCount === 0 && searchTerm !== '' ? 'block' : 'none';

            // Search Round 2
            const r2picks = document.querySelectorAll('#round2Picks .pick-card');
            let r2visibleCount = 0;
            r2picks.forEach(pick => {
                const player = (pick.dataset.player || '').toLowerCase();
                const team = (pick.dataset.team || '').toLowerCase();
                const position = (pick.dataset.position || '').toLowerCase();

                const matches = player.includes(searchTerm) || 
                               team.includes(searchTerm) || 
                               position.includes(searchTerm) ||
                               (searchResults && searchResults.has(player));

                if (matches) {
                    pick.classList.remove('hidden');
                    r2visibleCount++;
                } else {
                    pick.classList.add('hidden');
                }
            });
            
            const r2noResults = document.getElementById('r2noResults');
            if (r2noResults) r2noResults.style.display = r2visibleCount === 0 && searchTerm !== '' ? 'block' : 'none';

            updatePositionCounts();
            updateR2PositionCounts();
            
            // Track search in analytics
            if (window.NFLDraftAnalytics && searchTerm.length >= 2) {
                const totalResults = r1visibleCount + r2visibleCount;
                window.NFLDraftAnalytics.trackSearch(searchTerm, totalResults);
            }
        }

        // ==========================================
        // CUSTOM MOCK DRAFT BUILDER
        // ==========================================

        // ==========================================
        // TEAM DRAFTS DATA
        // ==========================================
        function renderTeamDrafts() {
            const container = document.getElementById('teamDraftsGrid');
            if (!container) return;

            let filtered = teamDraftsData;
            if (teamDraftsFilter !== 'all') {
                filtered = teamDraftsData.filter(team => {
                    if (teamDraftsFilter === 'multiple') return team.picks.length > 1;
                    if (teamDraftsFilter === 'qb') return team.picks.some(p => p.position === 'QB');
                    if (teamDraftsFilter === 'defense') {
                        const defPicks = team.picks.filter(p => ['EDGE', 'DL', 'LB', 'CB', 'S'].includes(p.position)).length;
                        return defPicks > team.picks.length / 2;
                    }
                    if (teamDraftsFilter === 'offense') {
                        const offPicks = team.picks.filter(p => ['QB', 'RB', 'WR', 'TE', 'OT', 'IOL'].includes(p.position)).length;
                        return offPicks > team.picks.length / 2;
                    }
                    return true;
                });
            }

            container.innerHTML = filtered.map(team => {
                const needsHTML = team.needs.map(need => 
                    `<span class="need-tag ${need.priority}">${need.position} (${need.priority})</span>`
                ).join('');

                const picksHTML = team.picks.map(pick => {
                    const valueClass = pick.value;
                    const valueText = pick.value === 'value' ? 'VALUE' : pick.value === 'reach' ? 'REACH' : 'FAIR';
                    return `
                        <div class="team-draft-pick">
                            <div class="pick-number-badge">${pick.pick}</div>
                            <div class="pick-player-info">
                                <div class="pick-player-name">${pick.player}</div>
                                <div class="pick-player-meta">${pick.position} | ${pick.school}</div>
                            </div>
                            <span class="pick-value-indicator ${valueClass}">${valueText}</span>
                        </div>
                    `;
                }).join('');

                const gradeClass = 'grade-' + team.grade.toLowerCase().replace('+', 'plus').replace('-', 'minus');

                return `
                    <div class="team-draft-card" data-filter="${teamDraftsFilter}">
                        <div class="team-draft-header" style="background: linear-gradient(135deg, ${team.helmet.color}22, transparent);">
                            <svg class="team-draft-logo" viewBox="0 0 100 70">
                                <ellipse cx="50" cy="35" rx="48" ry="32" fill="${team.helmet.color}" stroke="${team.helmet.accent}" stroke-width="3"/>
                                <text x="50" y="42" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${team.city.substring(0, 3).toUpperCase()}</text>
                            </svg>
                            <div class="team-draft-info">
                                <h3>${team.name}</h3>
                                <div class="team-draft-record">${team.record}</div>
                            </div>
                            <div class="grade-badge ${gradeClass}">${team.grade}</div>
                        </div>
                        <div class="team-draft-needs">
                            <div class="team-needs-title">Top Needs</div>
                            <div class="needs-list">${needsHTML}</div>
                        </div>
                        <div class="team-draft-picks">
                            ${picksHTML}
                        </div>
                        <div class="team-draft-summary">
                            <strong>Summary:</strong> ${team.summary}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function filterTeamDrafts(filter) {
            teamDraftsFilter = filter;
            document.querySelectorAll('#teamDrafts .filter-toggle-btn').forEach(btn => btn.classList.remove('active'));
            if (event && event.target) event.target.classList.add('active');
            renderTeamDrafts();
            showToast(`Filtered: ${filter === 'all' ? 'All Teams' : filter.charAt(0).toUpperCase() + filter.slice(1)}`);
        }

        // ==========================================
        // DRAFT GRADES SYSTEM
        // ==========================================
        function calculateDraftGrades() {
            const grades = teamDraftsData.map(team => {
                let valueScore = 0;
                let needScore = 0;
                let positionalScore = 0;
                let pickCount = team.picks.length;

                team.picks.forEach(pick => {
                    // Value Score (based on pick round)
                    if (pick.pick <= 10) valueScore += 25; // Top 10 = excellent
                    else if (pick.pick <= 32) valueScore += 20; // Round 1 = good
                    else if (pick.pick <= 64) valueScore += 15; // Round 2 = fair
                    else valueScore += 10; // Round 3+ = lower value

                    // Need Fit Score
                    const needMatch = team.needs.find(n => n.position === pick.position || 
                        (n.position === 'Interior DL' && pick.position === 'DL') ||
                        (n.position === 'Pass rusher' && pick.position === 'EDGE') ||
                        (n.position === 'DE' && pick.position === 'EDGE'));
                    if (needMatch) {
                        if (needMatch.priority === 'high') needScore += 25;
                        else if (needMatch.priority === 'medium') needScore += 20;
                        else needScore += 15;
                    } else {
                        needScore += 10; // Not a need
                    }

                    // Positional Value Score
                    const premiumPositions = ['QB', 'EDGE', 'CB', 'OT'];
                    const highPositions = ['WR', 'DL', 'S'];
                    if (premiumPositions.includes(pick.position)) positionalScore += 20;
                    else if (highPositions.includes(pick.position)) positionalScore += 15;
                    else positionalScore += 10;
                });

                // Average the scores
                valueScore = (valueScore / pickCount) * 0.4;
                needScore = (needScore / pickCount) * 0.3;
                positionalScore = (positionalScore / pickCount) * 0.2;
                const balanceScore = 8; // Default balance score

                const totalScore = valueScore + needScore + positionalScore + balanceScore;

                return {
                    ...team,
                    scores: {
                        value: Math.round(valueScore * 10) / 10,
                        need: Math.round(needScore * 10) / 10,
                        positional: Math.round(positionalScore * 10) / 10,
                        balance: balanceScore,
                        total: Math.round(totalScore * 10) / 10
                    }
                };
            });

            // Sort by total score descending
            return grades.sort((a, b) => b.scores.total - a.scores.total);
        }

        function renderDraftGrades() {
            const container = document.getElementById('draftGradesLeaderboard');
            if (!container) return;

            const gradedTeams = calculateDraftGrades();

            container.innerHTML = gradedTeams.map((team, index) => {
                const gradeClass = 'grade-' + team.grade.toLowerCase().replace('+', 'plus').replace('-', 'minus');
                const getScoreClass = (score) => score >= 18 ? 'good' : score >= 12 ? 'avg' : 'poor';

                return `
                    <div class="grade-item">
                        <div class="grade-rank">${index + 1}</div>
                        <div class="grade-team-info">
                            <svg class="grade-team-logo" viewBox="0 0 100 70">
                                <ellipse cx="50" cy="35" rx="48" ry="32" fill="${team.helmet.color}" stroke="${team.helmet.accent}" stroke-width="3"/>
                            </svg>
                            <div>
                                <div class="grade-team-name">${team.name}</div>
                                <div class="grade-team-record">${team.record}</div>
                            </div>
                        </div>
                        <div class="score-box">
                            <div class="score-label">Value</div>
                            <div class="score-value ${getScoreClass(team.scores.value)}">${team.scores.value}</div>
                        </div>
                        <div class="score-box">
                            <div class="score-label">Need</div>
                            <div class="score-value ${getScoreClass(team.scores.need)}">${team.scores.need}</div>
                        </div>
                        <div class="score-box">
                            <div class="score-label">Pos</div>
                            <div class="score-value ${getScoreClass(team.scores.positional)}">${team.scores.positional}</div>
                        </div>
                        <div class="score-box">
                            <div class="score-label">Balance</div>
                            <div class="score-value">${team.scores.balance}</div>
                        </div>
                        <div class="grade-badge ${gradeClass}">${team.grade}</div>
                    </div>
                `;
            }).join('');
        }

        // Pick grade badges removed - now only shown on Draft Grades page

        // ==========================================
        // BIG BOARD FUNCTIONS
        // ==========================================

        // Big Board data source and filters
        let currentBigBoardSource = 'espn';
        let bigBoardTierFilter = 'all';
        let bigBoardPositionFilter = 'all';

        // Switch between ESPN and PFF big boards
        function switchBigBoardSource(source) {
            currentBigBoardSource = source;

            // Update active button
            document.querySelectorAll('.edp-toggle button').forEach((btn, idx) => {
                if (idx < 3) { // Only update source buttons (ESPN, PFF, FantasyPros)
                    btn.classList.remove('active');
                }
            });
            event.target.classList.add('active');

            // Reset filters when switching sources
            bigBoardTierFilter = 'all';
            bigBoardPositionFilter = 'all';

            // Update tier filter buttons
            document.querySelectorAll('.tier-filter').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tier-filter')[0].classList.add('active');

            // Re-render big board with new source
            renderBigBoard();

            const sourceName = source === 'espn' ? 'ESPN' : source === 'pff' ? 'PFF' : 'FantasyPros';
            showToast(`Switched to ${sourceName} rankings`);
        }

        function renderBigBoard() {
            const container = document.getElementById('bigBoardList');
            if (!container) return;

            // Select data source based on current selection
            const dataSource = currentBigBoardSource === 'espn' ? bigBoardData :
                              currentBigBoardSource === 'pff' ? pffBigBoardData :
                              fantasyProsBigBoardData;

            let filtered = dataSource.filter(player => {
                const matchesTier = bigBoardTierFilter === 'all' || player.tier === bigBoardTierFilter;
                const matchesPosition = bigBoardPositionFilter === 'all' || player.position === bigBoardPositionFilter;
                return matchesTier && matchesPosition;
            });

            const sourceName = currentBigBoardSource === 'espn' ? 'ESPN' :
                              currentBigBoardSource === 'pff' ? 'PFF' : 'FantasyPros';
            document.getElementById('bigBoardCount').textContent = `Showing ${filtered.length} of ${dataSource.length} prospects (${sourceName})`;
            
            container.innerHTML = filtered.map(player => {
                const tierClass = player.tier === 'Elite' ? 'elite-tier' : 
                                 player.tier === 'Round 1' ? 'round1-tier' :
                                 player.tier === 'Round 2' ? 'round2-tier' : 'round3-tier';
                const gradeClass = player.tier === 'Elite' ? 'elite' : 
                                  player.tier === 'Round 1' ? 'round1' :
                                  player.tier === 'Round 2' ? 'round2' : 'round3';
                const tierLabel = player.tier === 'Elite' ? 'ELITE' : player.tier.toUpperCase();
                
                // Build meta info based on available data
                const metaParts = [player.school];
                if (player.height) metaParts.push(player.height);
                if (player.weight) metaParts.push(`${player.weight} lbs`);
                const metaInfo = metaParts.join(' | ');

                const strengthsHtml = player.strengths ?
                    `<span style="font-size: 0.75rem; color: var(--text-secondary); font-style: italic;">${player.strengths}</span>` : '';

                const gradeDisplay = player.grade || tierLabel;

                return `
                    <div class="big-board-item ${tierClass}">
                        <div class="bb-rank">${player.rank}</div>
                        <div class="bb-player-info">
                            <span class="bb-player-name">${player.name}</span>
                            <span class="bb-player-meta">${metaInfo}</span>
                            ${strengthsHtml}
                        </div>
                        <div class="bb-position">${player.position}</div>
                        <div class="bb-grade ${gradeClass}">${gradeDisplay}</div>
                        <div class="bb-tier ${gradeClass}">${tierLabel}</div>
                    </div>
                `;
            }).join('');
        }
        
        function filterBigBoard(tier) {
            bigBoardTierFilter = tier;
            
            // Update active button
            document.querySelectorAll('#bigBoard .filter-toggle-btn').forEach(btn => {
                if (btn.textContent === tier || (tier === 'all' && btn.textContent === 'All')) {
                    btn.classList.add('active');
                } else if (['All', 'Elite', 'Round 1', 'Round 2', 'Round 3'].includes(btn.textContent)) {
                    btn.classList.remove('active');
                }
            });
            
            renderBigBoard();
            showToast(`Filtered by tier: ${tier === 'all' ? 'All Tiers' : tier}`);
        }
        
        function filterBigBoardByPosition(position) {
            bigBoardPositionFilter = position;
            
            // Update active button
            const positionButtons = document.querySelectorAll('#bigBoard .filter-toggle-btn');
            positionButtons.forEach(btn => {
                const btnPos = btn.getAttribute('onclick');
                if (btnPos && btnPos.includes(`filterBigBoardByPosition('${position}')`)) {
                    btn.classList.add('active');
                } else if (btnPos && btnPos.includes('filterBigBoardByPosition')) {
                    btn.classList.remove('active');
                }
            });
            
            renderBigBoard();
            showToast(`Filtered by position: ${position === 'all' ? 'All Positions' : position}`);
        }
        
        // ==========================================
        // POSITIONAL RANKINGS FUNCTIONS
        // ==========================================
        
        function showPositionalRankings(position) {
            const display = document.getElementById('positionalRankingsDisplay');
            const title = document.getElementById('positionalRankingsTitle');
            const list = document.getElementById('positionalRankingsList');
            
            if (!display || !title || !list) return;
            
            const rankings = positionalRankings[position];
            if (!rankings) return;
            
            title.textContent = `${position} Rankings`;
            
            list.innerHTML = rankings.map(player => `
                <div class="pos-rank-item">
                    <div class="pos-rank-num">${player.rank}</div>
                    <div class="pos-player-info">
                        <span class="pos-player-name">${player.name}</span>
                        <span class="pos-player-school">${player.school} | Overall Rank: #${player.overallRank}</span>
                    </div>
                    <div class="pos-grade">${player.grade}</div>
                    <div class="pos-summary">${player.oneLineSummary}</div>
                </div>
            `).join('');
            
            display.style.display = 'block';
            display.scrollIntoView({ behavior: 'smooth' });
        }
        
        function hidePositionalRankings() {
            const display = document.getElementById('positionalRankingsDisplay');
            if (display) {
                display.style.display = 'none';
            }
        }

        // Initialize custom draft
        function initCustomDraft() {
            customDraft = draftOrder.map(d => ({ ...d, selectedPlayer: null }));
            currentPickIndex = 0;
            renderCurrentPick();
            renderPlayerPool();
            renderCustomPicksList();
            updateDraftProgress();
        }

        // Render current pick selector
        function renderCurrentPick() {
            if (currentPickIndex >= draftOrder.length) {
                document.getElementById('currentPickNum').textContent = 'Complete!';
                document.getElementById('currentTeamDisplay').style.display = 'none';
                showDraftSummary();
                return;
            }

            const current = draftOrder[currentPickIndex];
            document.getElementById('currentPickNum').textContent = current.pick;
            
            // Update team display
            const helmetSvg = document.getElementById('currentTeamHelmet');
            helmetSvg.innerHTML = `
                <ellipse cx="50" cy="35" rx="48" ry="32" fill="${current.helmet}" stroke="${current.accent}" stroke-width="3"/>
                <text x="50" y="42" text-anchor="middle" fill="white" font-size="16" font-weight="bold">${current.teamCode}</text>
            `;
            
            document.getElementById('currentTeamDisplay').innerHTML = `
                <svg class="team-helmet" viewBox="0 0 100 70" style="width: 60px; height: 40px;">
                    <ellipse cx="50" cy="35" rx="48" ry="32" fill="${current.helmet}" stroke="${current.accent}" stroke-width="3"/>
                    <text x="50" y="42" text-anchor="middle" fill="white" font-size="16" font-weight="bold">${current.teamCode}</text>
                </svg>
                <div>
                    <div style="font-weight: 600; font-size: 1.1rem;">${current.team}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">Record: ${current.record} | Pick #${current.pick}</div>
                </div>
            `;
        }

        // Render player pool
        function renderPlayerPool() {
            const container = document.getElementById('availablePlayers');
            const searchTerm = document.getElementById('playerPoolSearch').value.toLowerCase();
            
            let filtered = availablePlayers.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(searchTerm) || 
                                    p.school.toLowerCase().includes(searchTerm);
                const matchesFilter = playerPoolFilter === 'all' || 
                                    p.position === playerPoolFilter ||
                                    (playerPoolFilter === 'OL' && ['OT', 'IOL'].includes(p.position)) ||
                                    (playerPoolFilter === 'DL' && ['DL', 'EDGE'].includes(p.position)) ||
                                    (playerPoolFilter === 'DB' && ['CB', 'S'].includes(p.position));
                return matchesSearch && matchesFilter;
            });

            container.innerHTML = filtered.map((player, idx) => `
                <div class="player-pool-item" onclick="selectPlayer('${player.name}')" 
                     style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; 
                            padding: 0.75rem; cursor: pointer; transition: all 0.3s ease; animation: slideIn 0.3s ease ${idx * 0.02}s;">
                    <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.25rem;">${player.name}</div>
                    <div style="display: flex; gap: 0.5rem; font-size: 0.75rem; color: var(--text-secondary);">
                        <span style="background: var(--accent); color: var(--primary); padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: 600;">${player.position}</span>
                        <span>${player.school}</span>
                    </div>
                </div>
            `).join('');

            // Add hover styles
            const style = document.createElement('style');
            style.textContent = `
                .player-pool-item:hover { border-color: var(--accent) !important; transform: translateY(-2px); }
                .player-pool-item:active { transform: scale(0.98); }
            `;
            document.head.appendChild(style);
        }

        // Filter player pool
        function filterPlayerPool(position) {
            playerPoolFilter = position;
            document.querySelectorAll('.player-selection-panel .filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent === position || (position === 'all' && btn.textContent === 'All')) {
                    btn.classList.add('active');
                }
            });
            renderPlayerPool();
        }

        // Search player pool
        function searchPlayerPool() {
            renderPlayerPool();
        }

        // Select player for current pick
        function selectPlayer(playerName) {
            if (currentPickIndex >= draftOrder.length) return;

            const player = availablePlayers.find(p => p.name === playerName);
            if (!player) return;

            customDraft[currentPickIndex].selectedPlayer = player;
            currentPickIndex++;
            
            renderCurrentPick();
            renderCustomPicksList();
            updateDraftProgress();
            
            showToast(`${playerName} selected for ${customDraft[currentPickIndex - 1].team}!`);
        }

        // Render custom picks list
        function renderCustomPicksList() {
            const container = document.getElementById('customPicksList');
            container.innerHTML = customDraft.map((pick, idx) => {
                const isCurrent = idx === currentPickIndex;
                const hasPlayer = pick.selectedPlayer !== null;
                
                return `
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; 
                                background: ${isCurrent ? 'rgba(0,212,255,0.1)' : 'var(--card-bg)'}; 
                                border: 1px solid ${isCurrent ? 'var(--accent)' : 'var(--border)'}; 
                                border-radius: 8px; ${isCurrent ? 'border-left: 3px solid var(--accent);' : ''}">
                        <span style="font-family: 'Oswald', sans-serif; font-size: 1.25rem; font-weight: 700; 
                                     color: ${isCurrent ? 'var(--accent)' : 'var(--text-secondary)'}; min-width: 30px;">
                            ${pick.pick}
                        </span>
                        <svg viewBox="0 0 100 70" style="width: 40px; height: 30px; flex-shrink: 0;">
                            <ellipse cx="50" cy="35" rx="48" ry="32" fill="${pick.helmet}" stroke="${pick.accent}" stroke-width="3"/>
                            <text x="50" y="42" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${pick.teamCode}</text>
                        </svg>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; font-size: 0.95rem;">${pick.team}</div>
                            ${hasPlayer ? `
                                <div style="font-size: 0.85rem; color: var(--accent);">
                                    ${pick.selectedPlayer.name} <span style="color: var(--text-secondary);">• ${pick.selectedPlayer.position} • ${pick.selectedPlayer.school}</span>
                                </div>
                            ` : `
                                <div style="font-size: 0.85rem; color: var(--text-secondary);">${isCurrent ? 'On the clock...' : 'Pending...'}</div>
                            `}
                        </div>
                        ${hasPlayer ? `
                            <button onclick="removePick(${idx})" style="background: none; border: none; color: var(--danger); cursor: pointer; padding: 0.25rem;">
                                <i class="fas fa-times"></i>
                            </button>
                        ` : ''}
                    </div>
                `;
            }).join('');
        }

        // Remove pick
        function removePick(index) {
            customDraft[index].selectedPlayer = null;
            currentPickIndex = index;
            renderCurrentPick();
            renderCustomPicksList();
            updateDraftProgress();
            document.getElementById('draftSummary').style.display = 'none';
        }

        // Update draft progress
        function updateDraftProgress() {
            const completed = customDraft.filter(p => p.selectedPlayer !== null).length;
            document.getElementById('customPickCount').textContent = completed;
            
            const statusEl = document.getElementById('draftStatus');
            if (completed === 32) {
                statusEl.textContent = 'Complete!';
                statusEl.style.color = 'var(--success)';
            } else if (completed === 0) {
                statusEl.textContent = 'Not Started';
                statusEl.style.color = 'var(--text-secondary)';
            } else {
                statusEl.textContent = 'In Progress';
                statusEl.style.color = 'var(--warning)';
            }
        }

        // Reset draft
        function resetDraft() {
            if (confirm('Are you sure you want to reset your entire mock draft?')) {
                initCustomDraft();
                document.getElementById('draftSummary').style.display = 'none';
                showToast('Draft reset!');
            }
        }

        // Auto-fill draft
        function autoFillDraft() {
            if (confirm('This will auto-fill all remaining picks with my predictions. Continue?')) {
                const myPicks = [
                    'Julian Lewis', 'Will Campbell', 'Travis Hunter', 'Abdul Carter', 'Mason Graham',
                    'Tetairoa McMillan', 'Colston Loveland', 'Ashton Jeanty', 'Josh Simmons', 'Emeka Egbuka',
                    'Jihaad Campbell', 'Malaki Starks', 'Kevin Winston Jr.', 'Luther Burden III', 'Tyler Warren',
                    'Jonah Savaiinaea', 'Tacario Davis', 'Donovan Jackson', 'TreVeyon Henderson', 'Xavier Nwankpa',
                    'Princeton Fant', 'Dani Dennis-Sutton', 'Evan Pryor', 'Tyleik Williams', 'Jordan Burch',
                    'Oluwafemi Oladejo', 'Darius Alexander', 'Aireontae Ersery', 'Carson Schwesinger',
                    'Jayden Higgins', 'Omarion Hampton', 'Shemar Stewart'
                ];

                for (let i = 0; i < customDraft.length; i++) {
                    if (!customDraft[i].selectedPlayer && myPicks[i]) {
                        const player = availablePlayers.find(p => p.name === myPicks[i]);
                        if (player) {
                            customDraft[i].selectedPlayer = player;
                        }
                    }
                }
                
                currentPickIndex = 32;
                renderCurrentPick();
                renderCustomPicksList();
                updateDraftProgress();
                showToast('Auto-filled with my predictions!');
            }
        }

        // Show draft summary
        function showDraftSummary() {
            const container = document.getElementById('draftStats');
            const stats = {};
            
            customDraft.forEach(pick => {
                if (pick.selectedPlayer) {
                    const pos = pick.selectedPlayer.position;
                    stats[pos] = (stats[pos] || 0) + 1;
                }
            });

            container.innerHTML = Object.entries(stats)
                .sort((a, b) => b[1] - a[1])
                .map(([pos, count]) => `
                    <div style="text-align: center; padding: 0.75rem; background: var(--card-bg); border-radius: 8px;">
                        <div style="font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--accent);">${count}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">${pos}</div>
                    </div>
                `).join('');

            document.getElementById('draftSummary').style.display = 'block';
        }

        // Share custom draft
        function shareCustomDraft() {
            const completed = customDraft.filter(p => p.selectedPlayer !== null).length;
            if (completed === 0) {
                showToast('Make some picks first!');
                return;
            }

            const text = `Check out my 2026 NFL Mock Draft! I made ${completed}/32 picks. Who would you choose?`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
            window.open(url, '_blank', 'width=600,height=400');
        }

        // ==========================================
        // JUMP TO PICK FUNCTIONALITY
        // ==========================================
        
        function initJumpToSelect() {
            const select = document.getElementById('jumpToSelect');
            if (!select) return;
            
            // Clear existing options except first
            while (select.options.length > 1) {
                select.remove(1);
            }
            
            // Add all 32 picks
            for (let i = 1; i <= 32; i++) {
                const team = draftOrder.find(d => d.pick === i);
                if (team) {
                    const option = document.createElement('option');
                    option.value = `pick-${i}`;
                    option.textContent = `Pick ${i} - ${team.team}`;
                    select.appendChild(option);
                }
            }
        }

        function jumpToPick(pickId) {
            if (!pickId) return;
            
            // Show Round 1 tab if not active
            const round1Tab = document.getElementById('round1');
            if (!round1Tab.classList.contains('active')) {
                showTab('round1');
                // Update nav tab
                document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
                document.querySelector('.nav-tab[onclick="showTab(\'round1\')"]').classList.add('active');
            }
            
            // Find the pick element
            const pickNum = parseInt(pickId.replace('pick-', ''));
            const pickCards = document.querySelectorAll('#round1Picks .pick-card, #round1 .pick-card');
            
            if (pickCards[pickNum - 1]) {
                pickCards[pickNum - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight effect
                pickCards[pickNum - 1].style.borderColor = 'var(--accent)';
                pickCards[pickNum - 1].style.boxShadow = '0 0 30px rgba(0,212,255,0.3)';
                setTimeout(() => {
                    pickCards[pickNum - 1].style.borderColor = '';
                    pickCards[pickNum - 1].style.boxShadow = '';
                }, 2000);
            }
            
            // Update URL hash
            window.location.hash = pickId;
        }

        // Scroll to a specific pick with highlighting (supports all rounds)
        function scrollToPick(pickNumber) {
            if (!pickNumber || pickNumber < 1 || pickNumber > 105) {
                console.warn('Invalid pick number:', pickNumber);
                return false;
            }
            
            // Determine which round/tab the pick belongs to
            let targetTab, pickContainer, pickSelector;
            
            if (pickNumber <= 32) {
                // Round 1: picks 1-32
                targetTab = 'round1';
                pickContainer = '#round1Picks';
                pickSelector = '#round1Picks .pick-card';
            } else if (pickNumber <= 64) {
                // Round 2: picks 33-64
                targetTab = 'round2';
                pickContainer = '#round2Picks';
                pickSelector = '#round2Picks .pick-card';
            } else {
                // Round 3: picks 65-105
                targetTab = 'round3';
                pickContainer = '#round3';
                pickSelector = '#round3 .quick-pick-card';
            }
            
            // Switch to the correct tab
            const tabContent = document.getElementById(targetTab);
            if (!tabContent) {
                console.warn('Tab not found:', targetTab);
                return false;
            }
            
            // Update tab content visibility
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            tabContent.classList.add('active');
            
            // Update nav tab active state
            document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
            const navTab = document.querySelector(`.nav-tab[onclick="showTab('${targetTab}')"]`);
            if (navTab) navTab.classList.add('active');
            
            // Find the pick card
            const pickCards = document.querySelectorAll(pickSelector);
            let targetPick = null;
            
            // Calculate the index within the round
            let pickIndex;
            if (pickNumber <= 32) {
                pickIndex = pickNumber - 1;
            } else if (pickNumber <= 64) {
                pickIndex = pickNumber - 33;
            } else {
                pickIndex = pickNumber - 65;
            }
            
            if (pickCards[pickIndex]) {
                targetPick = pickCards[pickIndex];
            } else {
                // Fallback: search by pick number in the DOM
                for (const card of pickCards) {
                    const numEl = card.querySelector('.pick-number, .quick-pick-number');
                    if (numEl && parseInt(numEl.textContent) === pickNumber) {
                        targetPick = card;
                        break;
                    }
                }
            }
            
            if (targetPick) {
                // Remove any existing highlight
                targetPick.classList.remove('pick-highlight');
                
                // Scroll to the pick
                targetPick.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add highlight class after a brief delay for visibility
                setTimeout(() => {
                    targetPick.classList.add('pick-highlight');
                    
                    // Remove highlight after animation completes
                    setTimeout(() => {
                        targetPick.classList.remove('pick-highlight');
                    }, 3000);
                }, 500);
                
                // Update page title temporarily
                const originalTitle = document.title;
                const playerName = targetPick.dataset.player || 
                                  targetPick.querySelector('.quick-pick-player')?.textContent?.trim() ||
                                  'Player';
                const teamName = targetPick.querySelector('.team-details h3')?.textContent?.trim() ||
                                targetPick.querySelector('.quick-pick-team')?.textContent?.trim() ||
                                'Team';
                document.title = `Pick #${pickNumber}: ${teamName} select ${playerName} | 2026 NFL Mock Draft`;
                
                // Restore original title after 5 seconds
                setTimeout(() => {
                    document.title = originalTitle;
                }, 5000);
                
                return true;
            }
            
            console.warn('Pick not found:', pickNumber);
            return false;
        }
        
        // Check for pick hash in URL (supports both #pick=X and legacy #pick-X formats)
        function checkPickHash() {
            const hash = window.location.hash;
            if (!hash) return false;
            
            let pickNumber = null;
            
            // Check for new format: #pick=23
            const pickMatch = hash.match(/#pick=(\d+)/i);
            if (pickMatch) {
                pickNumber = parseInt(pickMatch[1]);
            } else {
                // Check for legacy format: #pick-23
                const legacyMatch = hash.match(/#pick-(\d+)/i);
                if (legacyMatch) {
                    pickNumber = parseInt(legacyMatch[1]);
                }
            }
            
            if (pickNumber) {
                setTimeout(() => {
                    scrollToPick(pickNumber);
                }, 600); // Delay to ensure DOM is fully loaded
                return true;
            }
            
            return false;
        }
        
        // Handle URL hash on load (legacy function, now uses checkPickHash)
        function handleDeepLink() {
            // First try the new pick hash format
            if (checkPickHash()) {
                return;
            }
            
            // Legacy support for #pick-X format via jumpToPick
            const hash = window.location.hash;
            if (hash && hash.startsWith('#pick-')) {
                setTimeout(() => {
                    jumpToPick(hash.substring(1));
                }, 500);
            }
        }

        // ==========================================
        // IMAGE LAZY LOADING & ERROR HANDLING
        // ==========================================

        function initImageHandling() {
            // Add lazy loading to images
            const images = document.querySelectorAll('.player-photo img');
            images.forEach(img => {
                // If image is already loaded, don't hide it
                if (img.complete && img.naturalWidth > 0) {
                    img.classList.add('loaded');
                    return;
                }
                
                // Only apply lazy loading to images not yet loaded
                img.setAttribute('loading', 'lazy');
                img.classList.add('lazy-image');
                
                // Handle successful load
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                
                // Handle error
                img.addEventListener('error', function() {
                    this.classList.add('error');
                    this.style.display = 'none';
                    
                    // Show fallback icon
                    const fallback = this.parentElement.querySelector('.fallback-icon');
                    if (!fallback) {
                        const icon = document.createElement('i');
                        icon.className = 'fas fa-user fallback-icon';
                        icon.style.cssText = 'font-size: 2.5rem; color: var(--text-secondary); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';
                        this.parentElement.appendChild(icon);
                    }
                });
            });
        }

        // ==========================================
        // TRADE SIMULATOR
        // ==========================================

        function initTradeSimulator() {
            // Populate team selects
            const selectA = document.getElementById('tradeTeamA');
            const selectB = document.getElementById('tradeTeamB');
            
            if (!selectA || !selectB) return;
            
            draftOrder.forEach(team => {
                const optionA = document.createElement('option');
                optionA.value = team.pick;
                optionA.textContent = `${team.team} (#${team.pick})`;
                selectA.appendChild(optionA);
                
                const optionB = document.createElement('option');
                optionB.value = team.pick;
                optionB.textContent = `${team.team} (#${team.pick})`;
                selectB.appendChild(optionB);
            });
        }

        function loadTradePicks(teamSide) {
            const teamSelect = document.getElementById(`tradeTeam${teamSide}`);
            const picksContainer = document.getElementById(`tradePicks${teamSide}`);
            const selectedTeamPick = parseInt(teamSelect.value);
            
            if (!selectedTeamPick) {
                picksContainer.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 1rem; font-size: 0.85rem;">Select a team to view their picks</p>`;
                return;
            }
            
            // Get all picks for this team (original + acquired - traded away)
            const teamPicks = customDraft.filter(p => {
                const originalTeam = draftOrder.find(d => d.pick === p.pick);
                return originalTeam.pick === selectedTeamPick;
            });
            
            // For demo, show original pick
            const team = draftOrder.find(d => d.pick === selectedTeamPick);
            const currentPick = customDraft.find(p => p.pick === selectedTeamPick);
            
            picksContainer.innerHTML = `
                <div class="trade-pick-item" onclick="toggleTradePick('${teamSide}', ${team.pick})">
                    <input type="checkbox" id="trade${teamSide}_${team.pick}" onchange="updateTradeSelection('${teamSide}', ${team.pick})" 
                        ${tradeSelectionA.includes(team.pick) || tradeSelectionB.includes(team.pick) ? 'checked' : ''}>
                    <svg viewBox="0 0 100 70" style="width: 35px; height: 25px;">
                        <ellipse cx="50" cy="35" rx="48" ry="32" fill="${team.helmet}" stroke="${team.accent}" stroke-width="2"/>
                        <text x="50" y="42" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${team.teamCode}</text>
                    </svg>
                    <div>
                        <div style="font-weight: 600; font-size: 0.9rem;">Pick ${team.pick}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary);">
                            ${currentPick && currentPick.selectedPlayer ? currentPick.selectedPlayer.name : 'No selection'}
                        </div>
                    </div>
                </div>
            `;
            
            updateTradeValue();
        }

        function toggleTradePick(teamSide, pickNum) {
            const checkbox = document.getElementById(`trade${teamSide}_${pickNum}`);
            checkbox.checked = !checkbox.checked;
            updateTradeSelection(teamSide, pickNum);
        }

        function updateTradeSelection(teamSide, pickNum) {
            const checkbox = document.getElementById(`trade${teamSide}_${pickNum}`);
            const selection = teamSide === 'A' ? tradeSelectionA : tradeSelectionB;
            
            if (checkbox.checked) {
                if (!selection.includes(pickNum)) {
                    selection.push(pickNum);
                }
            } else {
                const index = selection.indexOf(pickNum);
                if (index > -1) {
                    selection.splice(index, 1);
                }
            }
            
            // Update visual state
            const pickItem = checkbox.closest('.trade-pick-item');
            if (checkbox.checked) {
                pickItem.classList.add('selected');
            } else {
                pickItem.classList.remove('selected');
            }
            
            updateTradeValue();
        }

        function updateTradeValue() {
            const valueA = tradeSelectionA.reduce((sum, pick) => sum + (tradeValues[pick] || 0), 0);
            const valueB = tradeSelectionB.reduce((sum, pick) => sum + (tradeValues[pick] || 0), 0);
            
            const display = document.getElementById('tradeValueDisplay');
            const executeBtn = document.getElementById('executeTradeBtn');
            
            if (valueA === 0 && valueB === 0) {
                display.textContent = 'Select picks to see trade value';
                display.className = 'trade-value-display';
                executeBtn.disabled = true;
            } else {
                const diff = Math.abs(valueA - valueB);
                const ratio = Math.max(valueA, valueB) / Math.min(valueA, valueB || 1);
                
                if (ratio <= 1.15) {
                    display.innerHTML = `<i class="fas fa-check-circle"></i> Fair Trade<br><small>A: ${valueA} | B: ${valueB}</small>`;
                    display.className = 'trade-value-display fair';
                    executeBtn.disabled = false;
                } else {
                    display.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Unfair Trade<br><small>A: ${valueA} | B: ${valueB}</small>`;
                    display.className = 'trade-value-display unfair';
                    executeBtn.disabled = diff > 500;
                }
            }
        }

        // Share pick on Facebook
        function sharePickFacebook(pickNum) {
            const url = `${window.location.origin}${window.location.pathname}#pick=${pickNum}`;
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        // Share pick on Reddit
        function sharePickReddit(pickNum) {
            const pickCards = document.querySelectorAll('.pick-card, .quick-pick-card');
            let pickCard = null;
            
            for (const card of pickCards) {
                const numEl = card.querySelector('.pick-number, .quick-pick-number');
                if (numEl && numEl.textContent == pickNum) {
                    pickCard = card;
                    break;
                }
            }
            
            const team = pickCard?.querySelector('.team-details h3, .quick-pick-team')?.textContent?.trim() || 'NFL Team';
            const player = pickCard?.dataset.player || 
                          pickCard?.querySelector('.quick-pick-player')?.textContent?.trim() || 
                          'Player';
            const title = `2026 NFL Mock Draft - Pick ${pickNum}: ${team} select ${player}`;
            const url = `${window.location.origin}${window.location.pathname}#pick=${pickNum}`;
            const shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        function executeTrade() {
            if (tradeSelectionA.length === 0 || tradeSelectionB.length === 0) {
                showToast('Select picks from both teams');
                return;
            }
            
            // Track trade in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackTrade();
            }
            
            const teamA = document.getElementById('tradeTeamA');
            const teamB = document.getElementById('tradeTeamB');
            
            const teamAName = teamA.options[teamA.selectedIndex].text.split(' (')[0];
            const teamBName = teamB.options[teamB.selectedIndex].text.split(' (')[0];
            
            const trade = {
                id: Date.now(),
                teamA: teamAName,
                teamB: teamBName,
                picksA: [...tradeSelectionA],
                picksB: [...tradeSelectionB]
            };
            
            trades.push(trade);
            
            // Update custom draft with trades
            tradeSelectionA.forEach(pickNum => {
                const pick = customDraft.find(p => p.pick === pickNum);
                if (pick) {
                    const newTeam = draftOrder.find(d => d.pick === parseInt(teamB.value));
                    if (newTeam) {
                        pick.tradedTo = newTeam.team;
                    }
                }
            });
            
            tradeSelectionB.forEach(pickNum => {
                const pick = customDraft.find(p => p.pick === pickNum);
                if (pick) {
                    const newTeam = draftOrder.find(d => d.pick === parseInt(teamA.value));
                    if (newTeam) {
                        pick.tradedTo = newTeam.team;
                    }
                }
            });
            
            // Clear selections
            tradeSelectionA = [];
            tradeSelectionB = [];
            document.getElementById('tradeTeamA').value = '';
            document.getElementById('tradeTeamB').value = '';
            document.getElementById('tradePicksA').innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 1rem; font-size: 0.85rem;">Select a team to view their picks</p>';
            document.getElementById('tradePicksB').innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 1rem; font-size: 0.85rem;">Select a team to view their picks</p>';
            
            renderCustomPicksList();
            updateTradeValue();
            renderTradesList();
            
            showToast('Trade executed successfully!');
        }

        function renderTradesList() {
            const container = document.getElementById('activeTrades');
            const list = document.getElementById('tradesList');
            
            if (trades.length === 0) {
                container.style.display = 'none';
                return;
            }
            
            container.style.display = 'block';
            list.innerHTML = trades.map(trade => `
                <div class="trade-item">
                    <div class="trade-item-details">
                        <div class="trade-teams">${trade.teamA} <i class="fas fa-exchange-alt" style="color: var(--accent);"></i> ${trade.teamB}</div>
                        <div class="trade-picks">
                            ${trade.teamA} gives: Pick${trade.picksA.length > 1 ? 's' : ''} ${trade.picksA.join(', ')}<br>
                            ${trade.teamB} gives: Pick${trade.picksB.length > 1 ? 's' : ''} ${trade.picksB.join(', ')}
                        </div>
                    </div>
                    <button class="trade-remove-btn" onclick="undoTrade(${trade.id})">
                        <i class="fas fa-undo"></i> Undo
                    </button>
                </div>
            `).join('');
        }

        function undoTrade(tradeId) {
            const tradeIndex = trades.findIndex(t => t.id === tradeId);
            if (tradeIndex === -1) return;
            
            const trade = trades[tradeIndex];
            
            // Reverse the trade
            trade.picksA.forEach(pickNum => {
                const pick = customDraft.find(p => p.pick === pickNum);
                if (pick) delete pick.tradedTo;
            });
            
            trade.picksB.forEach(pickNum => {
                const pick = customDraft.find(p => p.pick === pickNum);
                if (pick) delete pick.tradedTo;
            });
            
            trades.splice(tradeIndex, 1);
            
            renderCustomPicksList();
            renderTradesList();
            showToast('Trade undone');
        }

        // Initialize when create tab is shown (if it exists)
        const createTab = document.querySelector('.nav-tab[onclick="showTab(\'create\')"]');
        if (createTab) {
            createTab.addEventListener('click', () => {
                if (customDraft.length === 0) {
                    initCustomDraft();
                }
                initTradeSimulator();
            });
        }

        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(() => {
                console.log('Service Worker registered');
            }).catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
        }

        // ==========================================
        // EXPORT & SHARE FUNCTIONS
        // ==========================================

        // Export Modal Functions
        function openExportModal() {
            document.getElementById('exportModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeExportModal(event) {
            if (!event || event.target.id === 'exportModal' || event.target.closest('.export-modal-close')) {
                document.getElementById('exportModal').classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeExportModal();
            }
        });

        // Export to PDF using html2pdf.js
        function exportToPDF() {
            // Track export in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackExport('PDF');
            }
            
            showToast('Generating PDF... This may take a moment.');
            
            // Create a clean clone of the main content for PDF
            const element = document.createElement('div');
            element.innerHTML = `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
                    <div style="text-align: center; border-bottom: 3px solid #00d4ff; padding-bottom: 20px; margin-bottom: 30px;">
                        <h1 style="font-size: 32px; margin: 0; color: #0a0a0f;">2026 NFL Mock Draft</h1>
                        <p style="font-size: 16px; color: #666; margin: 10px 0 0;">Complete 3 Round Projections with Player Analysis</p>
                        <p style="font-size: 12px; color: #999; margin: 5px 0 0;">Generated on ${new Date().toLocaleDateString()}</p>
                    </div>
                    ${generatePDFContent()}
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; font-size: 11px; color: #999;">
                        <div class="footer-export-btns">
            <button class="export-btn" onclick="exportToPDF()"><i class="fas fa-file-pdf"></i> Download PDF</button>
            <button class="export-btn" onclick="copyDraftAsText()"><i class="fas fa-copy"></i> Copy Text</button>
            <button class="export-btn" onclick="generateShareableURL()"><i class="fas fa-link"></i> Share Link</button>
        </div>
        <p>2026 NFL Mock Draft - For entertainment purposes only</p>
                    </div>
                </div>
            `;
            
            const opt = {
                margin: [10, 10, 10, 10],
                filename: '2026-NFL-Mock-Draft.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                }
            };
            
            html2pdf().set(opt).from(element).save().then(() => {
                showToast('PDF downloaded successfully!');
            }).catch(err => {
                console.error('PDF generation error:', err);
                showToast('Error generating PDF. Please try again.');
            });
        }

        // Generate PDF content from draft data
        function generatePDFContent() {
            let content = '';
            
            // Round 1
            content += '<h2 style="font-size: 24px; color: #00d4ff; margin: 30px 0 20px; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">Round 1</h2>';
            const round1Picks = document.querySelectorAll('#round1Picks .pick-card');
            round1Picks.forEach((pick, index) => {
                if (!pick.classList.contains('hidden')) {
                    content += extractPickData(pick);
                }
            });
            
            // Round 2
            content += '<h2 style="font-size: 24px; color: #00d4ff; margin: 30px 0 20px; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">Round 2</h2>';
            const round2Picks = document.querySelectorAll('#round2Picks .pick-card');
            round2Picks.forEach((pick, index) => {
                if (!pick.classList.contains('hidden')) {
                    content += extractPickData(pick);
                }
            });
            
            return content;
        }

        function extractPickData(pickCard) {
            const pickNum = pickCard.querySelector('.pick-number')?.textContent || '';
            const teamName = pickCard.querySelector('.team-details h3')?.textContent || '';
            const teamRecord = pickCard.querySelector('.team-record')?.textContent || '';
            const playerName = pickCard.querySelector('.player-info h2')?.textContent || '';
            const playerPos = pickCard.querySelector('.player-position')?.textContent || '';
            const playerSchool = pickCard.querySelector('.player-school')?.textContent || '';
            const reasoning = pickCard.querySelector('.breakdown-content')?.textContent || '';
            
            // Get team needs
            const needs = Array.from(pickCard.querySelectorAll('.need-badge')).map(n => n.textContent).join(', ');
            
            return `
                <div style="margin-bottom: 25px; padding: 15px; border: 1px solid #eee; border-radius: 8px; page-break-inside: avoid;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                        <span style="font-size: 28px; font-weight: bold; color: #00d4ff; min-width: 50px;">${pickNum}</span>
                        <div>
                            <div style="font-size: 16px; font-weight: bold; color: #0a0a0f;">${teamName}</div>
                            <div style="font-size: 12px; color: #666;">${teamRecord}</div>
                        </div>
                    </div>
                    <div style="margin-left: 65px;">
                        <div style="font-size: 18px; font-weight: bold; color: #0a0a0f; margin-bottom: 5px;">
                            ${playerName} <span style="color: #00d4ff;">${playerPos}</span> • ${playerSchool}
                        </div>
                        ${needs ? `<div style="font-size: 11px; color: #666; margin-bottom: 8px;">Team Needs: ${needs}</div>` : ''}
                        <div style="font-size: 12px; color: #444; line-height: 1.5;">${reasoning}</div>
                    </div>
                </div>
            `;
        }

        // Copy Draft as Text
        function copyDraftAsText() {
            // Track export in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackExport('Text');
            }
            
            let text = '2026 NFL MOCK DRAFT\n';
            text += '==================\n\n';
            text += `Generated: ${new Date().toLocaleDateString()}\n\n`;
            
            // Round 1
            text += 'ROUND 1\n-------\n\n';
            const round1Picks = document.querySelectorAll('#round1Picks .pick-card');
            round1Picks.forEach((pick, index) => {
                if (!pick.classList.contains('hidden')) {
                    text += formatPickAsText(pick);
                }
            });
            
            text += '\n';
            
            // Round 2
            text += 'ROUND 2\n-------\n\n';
            const round2Picks = document.querySelectorAll('#round2Picks .pick-card');
            round2Picks.forEach((pick, index) => {
                if (!pick.classList.contains('hidden')) {
                    text += formatPickAsText(pick);
                }
            });
            
            text += '\n';
            
            // Round 3
            text += 'ROUND 3\n-------\n\n';
            const round3Picks = document.querySelectorAll('#round3 .quick-pick-card');
            round3Picks.forEach((pick, index) => {
                text += formatQuickPickAsText(pick);
            });
            
            navigator.clipboard.writeText(text).then(() => {
                showToast('Draft copied to clipboard!');
            }).catch(err => {
                console.error('Copy error:', err);
                showToast('Error copying to clipboard');
            });
        }

        function formatPickAsText(pickCard) {
            const pickNum = pickCard.querySelector('.pick-number')?.textContent || '';
            const teamName = pickCard.querySelector('.team-details h3')?.textContent || '';
            const playerName = pickCard.querySelector('.player-info h2')?.textContent || '';
            const playerPos = pickCard.querySelector('.player-position')?.textContent || '';
            const playerSchool = pickCard.querySelector('.player-school')?.textContent || '';
            
            return `${pickNum}. ${teamName} - ${playerName}, ${playerPos}, ${playerSchool}\n`;
        }

        function formatQuickPickAsText(pickCard) {
            const pickNum = pickCard.querySelector('.quick-pick-number')?.textContent || '';
            const teamName = pickCard.querySelector('.quick-pick-team')?.textContent || '';
            const playerName = pickCard.querySelector('.quick-pick-player')?.textContent || '';
            const playerPos = pickCard.querySelector('.quick-pick-position')?.textContent || '';
            
            return `${pickNum}. ${teamName} - ${playerName} ${playerPos}\n`;
        }

        // Generate Shareable URL
        function generateShareableURL() {
            // Create a simple encoding of the current state
            const state = {
                tab: document.querySelector('.tab-content.active')?.id || 'round1',
                filter: document.querySelector('.controls-bar .filter-btn.active')?.textContent || 'All',
                timestamp: Date.now()
            };
            
            // Encode state to base64
            const encoded = btoa(JSON.stringify(state));
            const url = `${window.location.origin}${window.location.pathname}#share=${encoded}`;
            
            navigator.clipboard.writeText(url).then(() => {
                showToast('Shareable link copied!');
            }).catch(err => {
                console.error('Copy error:', err);
                // Fallback: show the URL in a prompt
                prompt('Copy this link to share:', url);
            });
        }

        // Check for shared URL on load
        function checkSharedURL() {
            const hash = window.location.hash;
            if (hash.startsWith('#share=')) {
                try {
                    const encoded = hash.substring(7);
                    const state = JSON.parse(atob(encoded));
                    
                    if (state.tab) {
                        showTab(state.tab);
                        // Update active nav tab
                        document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
                        document.querySelector(`.nav-tab[onclick="showTab('${state.tab}')"]`)?.classList.add('active');
                    }
                    
                    showToast('Shared draft loaded!');
                } catch (e) {
                    console.error('Error parsing shared URL:', e);
                }
            }
        }

        // Social Media Sharing
        function shareTwitter() {
            // Track share in analytics
            if (window.NFLDraftAnalytics) {
                window.NFLDraftAnalytics.trackExport('Twitter');
            }
            
            const text = 'Check out this 2026 NFL Mock Draft with full player analysis and team needs! #NFLDraft2026 #NFLMockDraft';
            const url = window.location.href;
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        function shareFacebook() {
            const url = window.location.href;
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        function shareReddit() {
            const title = '2026 NFL Mock Draft - 3 Rounds with Player Analysis';
            const url = window.location.href;
            const shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        // Download Pick as Image (using html2canvas)
        function downloadPickAsImage(pickNum) {
            const pickCard = document.querySelector(`.pick-card[data-player]:has(.pick-number:nth-of-type(1):contains('${pickNum}'))`) ||
                            Array.from(document.querySelectorAll('.pick-card')).find(p => 
                                p.querySelector('.pick-number')?.textContent == pickNum
                            );
            
            if (!pickCard) {
                showToast('Pick not found');
                return;
            }
            
            showToast('Generating image...');
            
            html2canvas(pickCard, {
                backgroundColor: '#12121a',
                scale: 2,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `2026-NFL-Mock-Draft-Pick-${pickNum}.png`;
                link.href = canvas.toDataURL();
                link.click();
                showToast('Image downloaded!');
            }).catch(err => {
                console.error('Image generation error:', err);
                showToast('Error generating image');
            });
        }

        // Override existing share functions
        function copyLink() {
            generateShareableURL();
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            checkSharedURL();
            checkPickHash();
        });

        // ==========================================
        // COMPREHENSIVE DRAFT GRADES FUNCTIONS
        // ==========================================
        
        // Initialize Draft Grades Tab
        function initDraftGradesTab() {
            renderTeamGradesLeaderboard();
            renderDetailedTeamAnalysis();
        }
        
        // Render Team Grades Leaderboard
        function renderTeamGradesLeaderboard() {
            const container = document.getElementById('teamGradesLeaderboard');
            if (!container || typeof DraftGradesSystem === 'undefined') return;
            
            // Get all picks from DOM
            const picks = extractAllPicksForGrading();
            
            // Calculate grades for each team
            const teamGrades = [];
            const teams = {};
            
            picks.forEach(pick => {
                if (!teams[pick.team]) {
                    teams[pick.team] = [];
                }
                teams[pick.team].push(pick);
            });
            
            Object.entries(teams).forEach(([teamName, teamPicks]) => {
                const grade = DraftGradesSystem.calculateOverallDraftGrade(teamPicks);
                teamGrades.push({
                    teamName,
                    ...grade
                });
            });
            
            // Sort by score descending
            teamGrades.sort((a, b) => b.score - a.score);
            
            // Render
            container.innerHTML = teamGrades.map((team, index) => `
                <div class="team-grade-card" style="display: flex; align-items: center; gap: 1rem; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.5rem; margin-bottom: 0.75rem; animation: slideIn 0.5s ease forwards; animation-delay: ${index * 0.05}s; opacity: 0;">
                    <div class="team-grade-rank" style="font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--accent); min-width: 40px; text-align: center;">#${index + 1}</div>
                    <div class="team-grade-info" style="flex: 1;">
                        <div class="team-grade-name" style="display: flex; align-items: center; gap: 0.75rem; font-weight: 600; margin-bottom: 0.25rem;">
                            ${getTeamHelmetSVG(team.teamName)}
                            ${team.teamName}
                        </div>
                        <div class="team-grade-picks" style="font-size: 0.8rem; color: var(--text-secondary);">${team.picks.length} picks analyzed</div>
                        <div class="team-grade-breakdown" style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                            <div class="grade-metric" style="text-align: center;">
                                <span class="grade-metric-value" style="display: block; font-family: 'Oswald', sans-serif; font-weight: 600; color: var(--accent); font-size: 0.95rem;">${Math.round(team.picks.reduce((sum, p) => sum + p.breakdown.value.score, 0) / team.picks.length)}</span>
                                <span class="grade-metric-label" style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Value</span>
                            </div>
                            <div class="grade-metric" style="text-align: center;">
                                <span class="grade-metric-value" style="display: block; font-family: 'Oswald', sans-serif; font-weight: 600; color: var(--accent); font-size: 0.95rem;">${Math.round(team.picks.reduce((sum, p) => sum + p.breakdown.need.score, 0) / team.picks.length)}</span>
                                <span class="grade-metric-label" style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Need</span>
                            </div>
                            <div class="grade-metric" style="text-align: center;">
                                <span class="grade-metric-value" style="display: block; font-family: 'Oswald', sans-serif; font-weight: 600; color: var(--accent); font-size: 0.95rem;">${Math.round(team.picks.reduce((sum, p) => sum + p.breakdown.fit.score, 0) / team.picks.length)}</span>
                                <span class="grade-metric-label" style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">Fit</span>
                            </div>
                        </div>
                    </div>
                    <div class="team-grade-score-container" style="text-align: center;">
                        <div class="grade-badge ${team.bgClass}" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; min-width: 50px; padding: 0.35rem 0.75rem; border-radius: 8px; font-family: 'Oswald', sans-serif; font-weight: 700; text-transform: uppercase;">
                            <span class="grade-letter" style="font-size: 1.2rem; line-height: 1;">${team.letter}</span>
                        </div>
                        <span class="team-grade-score" style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">${team.score}</span>
                    </div>
                </div>
            `).join('');
        }
        
        // Render Detailed Team Analysis
        function renderDetailedTeamAnalysis() {
            const container = document.getElementById('detailedTeamAnalysis');
            if (!container || typeof DraftGradesSystem === 'undefined') return;
            
            const picks = extractAllPicksForGrading();
            const teams = {};
            
            picks.forEach(pick => {
                if (!teams[pick.team]) {
                    teams[pick.team] = [];
                }
                teams[pick.team].push(pick);
            });
            
            // Calculate and sort
            const teamGrades = Object.entries(teams).map(([teamName, teamPicks]) => ({
                teamName,
                ...DraftGradesSystem.calculateOverallDraftGrade(teamPicks)
            })).sort((a, b) => b.score - a.score);
            
            container.innerHTML = teamGrades.map((team, index) => `
                <div class="detailed-team-card" style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; margin-bottom: 1.5rem; overflow: hidden;">
                    <div class="detailed-team-header" onclick="toggleTeamDetails(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; background: linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%); border-bottom: 1px solid var(--border); cursor: pointer; transition: all 0.3s ease;">
                        <div class="detailed-team-info" style="display: flex; align-items: center; gap: 1rem;">
                            ${getTeamHelmetSVG(team.teamName)}
                            <div>
                                <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.2rem;">${team.teamName}</h4>
                                <div class="detailed-team-meta" style="font-size: 0.8rem; color: var(--text-secondary);">Rank #${index + 1} • ${team.picks.length} picks</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="grade-badge ${team.bgClass}" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; min-width: 50px; padding: 0.35rem 0.75rem; border-radius: 8px; font-family: 'Oswald', sans-serif; font-weight: 700; text-transform: uppercase;">
                                <span class="grade-letter" style="font-size: 1.2rem; line-height: 1;">${team.letter}</span>
                            </div>
                            <i class="fas fa-chevron-down expand-icon" style="transition: transform 0.3s ease; color: var(--text-secondary);"></i>
                        </div>
                    </div>
                    <div class="detailed-team-content" style="padding: 1.5rem; display: none;">
                        ${renderTeamOverallGrade(team)}
                        ${renderPicksHighlight(team)}
                        ${renderPositionBreakdown(team)}
                        ${renderTeamPicksList(team)}
                    </div>
                </div>
            `).join('');
        }
        
        // Render Team Overall Grade
        function renderTeamOverallGrade(team) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (team.score / 100) * circumference;
            
            return `
                <div class="overall-grade-container" style="display: flex; flex-direction: column; align-items: center; padding: 2rem; background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); margin-bottom: 1.5rem;">
                    <div class="grade-circle" style="position: relative; width: 120px; height: 120px;">
                        <svg class="grade-progress-ring" width="120" height="120" style="transform: rotate(-90deg);">
                            <circle class="grade-progress-ring-bg" cx="60" cy="60" r="45" fill="none" stroke="var(--border)" stroke-width="8"></circle>
                            <circle class="grade-progress-ring-progress ${team.bgClass}" cx="60" cy="60" r="45" fill="none" stroke-width="8" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" style="transition: stroke-dashoffset 1s ease; stroke: ${team.score >= 90 ? '#00ff88' : team.score >= 80 ? '#00d4ff' : team.score >= 70 ? '#ffb800' : '#ff4757'};"></circle>
                        </svg>
                        <div class="grade-content" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center;">
                            <span class="grade-letter-large" style="font-family: 'Oswald', sans-serif; font-size: 3rem; font-weight: 700; line-height: 1; background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${team.letter}</span>
                            <span class="grade-score-small" style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">${team.score}</span>
                        </div>
                    </div>
                    <div class="grade-summary" style="margin-top: 1rem; text-align: center; color: var(--text-secondary); font-size: 0.95rem; max-width: 400px;">${team.summary}</div>
                </div>
            `;
        }
        
        // Render Picks Highlight
        function renderPicksHighlight(team) {
            if (!team.bestPick || !team.worstPick) return '';
            
            return `
                <div class="picks-highlight" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
                    <div class="picks-highlight-card best" style="background: var(--card-bg); border-radius: 12px; padding: 1rem; border: 1px solid rgba(0, 255, 136, 0.3); background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, transparent 100%);">
                        <div class="picks-highlight-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; color: #00ff88;"><i class="fas fa-thumbs-up"></i> Best Pick</div>
                        <div class="picks-highlight-player" style="font-weight: 600; margin-bottom: 0.25rem;">${team.bestPick.player}</div>
                        <div class="picks-highlight-details" style="font-size: 0.8rem; color: var(--text-secondary);">#${team.bestPick.pickNumber} • ${team.bestPick.position} • Grade: ${team.bestPick.letter}</div>
                    </div>
                    <div class="picks-highlight-card worst" style="background: var(--card-bg); border-radius: 12px; padding: 1rem; border: 1px solid rgba(255, 107, 53, 0.3); background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%);">
                        <div class="picks-highlight-label" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; color: #ff6b35;"><i class="fas fa-thumbs-down"></i> Room for Improvement</div>
                        <div class="picks-highlight-player" style="font-weight: 600; margin-bottom: 0.25rem;">${team.worstPick.player}</div>
                        <div class="picks-highlight-details" style="font-size: 0.8rem; color: var(--text-secondary);">#${team.worstPick.pickNumber} • ${team.worstPick.position} • Grade: ${team.worstPick.letter}</div>
                    </div>
                </div>
            `;
        }
        
        // Render Position Breakdown
        function renderPositionBreakdown(team) {
            const positions = team.positionBreakdown;
            const maxCount = Math.max(...Object.values(positions), 1);
            
            return `
                <div class="position-breakdown" style="background: var(--card-bg); border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;">
                    <h4 style="font-family: 'Oswald', sans-serif; margin-bottom: 1rem;">Position Breakdown</h4>
                    <div class="position-bars" style="display: flex; flex-direction: column; gap: 0.75rem;">
                        ${Object.entries(positions).map(([pos, count]) => `
                            <div class="position-bar-item" style="display: flex; align-items: center; gap: 1rem;">
                                <span class="position-bar-label" style="min-width: 50px; font-weight: 600; font-size: 0.9rem;">${pos}</span>
                                <div class="position-bar-track" style="flex: 1; height: 24px; background: var(--primary); border-radius: 12px; overflow: hidden; position: relative;">
                                    <div class="position-bar-fill" style="height: 100%; border-radius: 12px; transition: width 0.5s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 0.75rem; width: ${(count / maxCount) * 100}%; background: var(--accent); opacity: ${0.4 + (count / maxCount) * 0.6};">
                                        <span class="position-bar-count" style="color: #fff; font-weight: 600; font-size: 0.85rem;">${count}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Render Team Picks List
        function renderTeamPicksList(team) {
            return `
                <div style="margin-top: 1.5rem;">
                    <h4 style="margin-bottom: 1rem; font-family: 'Oswald', sans-serif;">All Picks</h4>
                    <div class="team-picks-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
                        ${team.picks.map(pick => `
                            <div class="team-pick-item" onclick="openPickGradeModal('${team.teamName}', ${pick.pickNumber}, '${pick.player}', '${pick.position}')" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: var(--primary); border-radius: 8px; border: 1px solid var(--border); cursor: pointer; transition: all 0.3s ease;">
                                <span class="team-pick-number" style="font-family: 'Oswald', sans-serif; font-weight: 700; color: var(--accent); min-width: 35px;">#${pick.pickNumber}</span>
                                <div class="team-pick-info" style="flex: 1;">
                                    <div class="team-pick-name" style="font-weight: 600;">${pick.player}</div>
                                    <div class="team-pick-position" style="font-size: 0.8rem; color: var(--text-secondary);">${pick.position}</div>
                                </div>
                                <div class="team-pick-grade" style="display: flex; flex-direction: column; align-items: flex-end;">
                                    <span class="grade-badge ${pick.bgClass}" style="min-width: 40px; padding: 0.25rem 0.5rem; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 8px; font-family: 'Oswald', sans-serif; font-weight: 700; text-transform: uppercase;">
                                        <span class="grade-letter" style="font-size: 1rem;">${pick.letter}</span>
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Toggle Team Details
        function toggleTeamDetails(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.expand-icon');
            const isExpanded = content.style.display === 'block';
            
            content.style.display = isExpanded ? 'none' : 'block';
            icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
            
            if (!isExpanded) {
                content.style.animation = 'slideDown 0.3s ease';
            }
        }
        
        // Open Pick Grade Modal
        function openPickGradeModal(team, pickNumber, player, position) {
            if (typeof DraftGradesSystem === 'undefined') return;
            
            const modal = document.getElementById('gradeModal');
            const content = document.getElementById('gradeModalContent');
            
            if (modal && content) {
                content.innerHTML = DraftGradesSystem.renderGradeBreakdownModal({ team, pickNumber, player, position });
                modal.style.display = 'flex';
                
                // Trigger confetti for A+ grades
                const grade = DraftGradesSystem.calculatePickGrade(team, pickNumber, { name: player, position });
                if (grade.letter === 'A+') {
                    triggerConfetti();
                }
            }
        }
        
        // Close Grade Modal
        function closeGradeModal() {
            const modal = document.getElementById('gradeModal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        
        // Close modal on overlay click
        document.addEventListener('click', function(e) {
            const modal = document.getElementById('gradeModal');
            if (e.target === modal) {
                closeGradeModal();
            }
        });
        
        // Trigger Confetti
        function triggerConfetti() {
            const colors = ['#00ff88', '#00d4ff', '#ffd700', '#ff6b35'];
            const confettiCount = 50;
            
            for (let i = 0; i < confettiCount; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.cssText = `
                        position: fixed;
                        width: 10px;
                        height: 10px;
                        top: -10px;
                        left: ${Math.random() * 100}vw;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        z-index: 9999;
                        animation: confetti-fall 3s ease-out forwards;
                    `;
                    document.body.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 30);
            }
        }
        
        // Extract All Picks for Grading
        function extractAllPicksForGrading() {
            const picks = [];
            
            document.querySelectorAll('.pick-card').forEach(card => {
                const pickNumber = parseInt(card.querySelector('.pick-number')?.textContent);
                const teamName = card.querySelector('.team-details h3')?.textContent?.trim();
                const playerName = card.dataset.player;
                const position = card.dataset.position;
                
                if (pickNumber && teamName && playerName) {
                    picks.push({ pickNumber, team: teamName, player: playerName, position });
                }
            });
            
            return picks;
        }
        
        // Get Team Helmet SVG
        function getTeamHelmetSVG(teamName) {
            const abbrev = getTeamAbbreviation(teamName);
            return `
                <svg class="team-helmet" viewBox="0 0 100 70" style="width: 40px; height: 28px;">
                    <ellipse cx="50" cy="35" rx="45" ry="30" fill="rgba(0,212,255,0.2)" stroke="var(--accent)" stroke-width="2"/>
                    <text x="50" y="42" text-anchor="middle" fill="var(--accent)" font-size="14" font-weight="bold" font-family="Arial">${abbrev}</text>
                </svg>
            `;
        }
        
        // Toggle Grades Display removed - grades only on Draft Grades page
        
        // Export Grades Report
        function exportGradesReport() {
            if (typeof DraftGradesSystem === 'undefined') return;
            
            const report = DraftGradesSystem.exportGradesSummary();
            
            const blob = new Blob([report], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '2026_NFL_Mock_Draft_Grades.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('Draft grades report exported!');
        }

        // Draft grades removed from pick cards - now only on Draft Grades page

        // Initialize player image handling on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Add load and error handlers to all player photos
            document.querySelectorAll('.player-photo img').forEach(img => {
                // Show image when loaded
                img.onload = function() {
                    this.classList.add('loaded');
                };

                // Handle error - show initials
                img.onerror = function() {
                    const container = this.parentElement;
                    const playerName = this.alt || 'Unknown';
                    const initials = playerName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

                    // Hide failed image
                    this.style.display = 'none';

                    // Create initials placeholder if not already present
                    if (!container.querySelector('.player-initials-placeholder')) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'player-initials-placeholder';
                        placeholder.innerHTML = initials;
                        container.appendChild(placeholder);
                    }
                };

                // If image is already cached/complete
                if (img.complete && img.naturalHeight > 0) {
                    img.classList.add('loaded');
                } else if (img.complete) {
                    // Image complete but no height = error
                    img.onerror();
                }
            });

            // Process player image loader if available
            if (window.playerImageLoader) {
                window.playerImageLoader.processAllContainers();
            }
        });

// ==========================================
// NEXT PICK DISPLAY
// ==========================================

function displayNextPicks() {
    // Get all pick cards
    const pickCards = document.querySelectorAll('.pick-card');
    console.log('[NextPick] Found', pickCards.length, 'pick cards');
    
    // Build a map of team -> array of their picks (sorted by pick number)
    const teamPicks = {};
    
    pickCards.forEach(card => {
        const team = card.dataset.team;
        const pickNumberText = card.querySelector('.pick-number')?.textContent;
        const pickNumber = parseInt(pickNumberText?.replace('#', ''));
        
        if (team && !isNaN(pickNumber)) {
            if (!teamPicks[team]) {
                teamPicks[team] = [];
            }
            teamPicks[team].push({ pickNumber, card });
        }
    });
    
    console.log('[NextPick] Team picks map:', Object.keys(teamPicks).length, 'teams');
    
    // Sort each team's picks
    Object.keys(teamPicks).forEach(team => {
        teamPicks[team].sort((a, b) => a.pickNumber - b.pickNumber);
    });
    
    // Update next pick info in each card's header-right
    Object.keys(teamPicks).forEach(team => {
        const picks = teamPicks[team];
        console.log('[NextPick] Team', team, 'has', picks.length, 'picks');
        
        picks.forEach((pick, index) => {
            const nextPick = picks[index + 1];
            const nextPickNumberEl = pick.card.querySelector('.header-right .next-pick-number');
            
            if (nextPickNumberEl) {
                if (nextPick) {
                    nextPickNumberEl.textContent = '#' + nextPick.pickNumber;
                    console.log('[NextPick] Pick #' + pick.pickNumber + ' -> Next: #' + nextPick.pickNumber);
                } else {
                    nextPickNumberEl.textContent = 'None';
                    console.log('[NextPick] Pick #' + pick.pickNumber + ' -> Next: None');
                }
            } else {
                console.log('[NextPick] No next-pick-number element for pick #' + pick.pickNumber);
            }
        });
    });
}

// Initialize ads when visible
function initAds() {
    const adElements = document.querySelectorAll('.adsbygoogle:not([data-ads-loaded])');
    adElements.forEach(ad => {
        // Only load if visible
        if (ad.offsetParent !== null) {
            ad.setAttribute('data-ads-loaded', 'true');
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.log('[Ads] Failed to load ad:', e);
            }
        }
    });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(displayNextPicks, 500);
    setTimeout(displayNextPicks, 1500);
    setTimeout(displayNextPicks, 3000);
    
    // Initialize ads after page load
    setTimeout(initAds, 1000);
    setTimeout(initAds, 3000);
});

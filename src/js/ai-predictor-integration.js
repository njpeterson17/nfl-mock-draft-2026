/**
 * AI Draft Predictor Integration Module
 * Integrates AI predictions into the main mock draft interface
 */

(function() {
    'use strict';

    // AI Predictor Integration
    const AIPredictorIntegration = {
        enabled: true,
        showOnCards: true,
        showTooltips: true,
        
        // Initialize integration
        init() {
            this.loadStyles();
            this.addPredictionBadges();
            this.setupEventListeners();
            console.log('🤖 AI Predictor Integration loaded');
        },

        // Load CSS
        loadStyles() {
            if (!document.querySelector('link[href*="ai-predictor.css"]')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'css/ai-predictor.css';
                document.head.appendChild(link);
            }
        },

        // Add prediction badges to pick cards
        addPredictionBadges() {
            if (!this.showOnCards) return;
            
            const pickCards = document.querySelectorAll('.pick-card');
            pickCards.forEach(card => {
                if (card.querySelector('.ai-prediction-badge')) return;
                
                const pickNum = card.dataset.pick;
                const team = card.dataset.team;
                const player = card.dataset.player;
                
                if (pickNum && team) {
                    this.createPredictionBadge(card, parseInt(pickNum), team, player);
                }
            });
        },

        // Create prediction badge for a pick card
        createPredictionBadge(card, pickNum, team, currentPlayer) {
            const badge = document.createElement('div');
            badge.className = 'ai-prediction-badge';
            
            // Get prediction from DraftPredictorAI if available
            let confidence = this.calculateMockConfidence(pickNum, team, currentPlayer);
            
            badge.classList.add(confidence.level);
            badge.innerHTML = `
                <i class="fas fa-robot"></i>
                <span>AI: ${confidence.level === 'high' ? 'High' : confidence.level === 'medium' ? 'Med' : 'Low'} (${confidence.score}%)</span>
            `;
            
            badge.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(`ai-draft-predictor.html?pick=${pickNum}`, '_blank');
            });
            
            // Find the right place to insert (after pick-details)
            const details = card.querySelector('.pick-details');
            if (details) {
                details.appendChild(badge);
            }
            
            // Add tooltip on hover
            if (this.showTooltips) {
                this.addTooltip(card, pickNum, team);
            }
        },

        // Calculate mock confidence for display on cards
        calculateMockConfidence(pickNum, team, currentPlayer) {
            // If DraftPredictorAI is loaded, use it
            if (window.DraftPredictorAI && currentPlayer) {
                const predictions = DraftPredictorAI.predictions[pickNum];
                if (predictions && predictions.length > 0) {
                    const match = predictions.find(p => p.player.name === currentPlayer);
                    if (match) {
                        const prob = match.normalizedProbability || match.probability;
                        return {
                            score: prob,
                            level: prob >= 70 ? 'high' : prob >= 40 ? 'medium' : 'low'
                        };
                    }
                }
            }
            
            // Fallback calculation based on pick position
            if (pickNum <= 5) return { score: 85, level: 'high' };
            if (pickNum <= 15) return { score: 65, level: 'medium' };
            return { score: 45, level: 'low' };
        },

        // Add tooltip with predictions
        addTooltip(card, pickNum, team) {
            let tooltip = null;
            let hideTimeout = null;
            
            card.addEventListener('mouseenter', () => {
                if (hideTimeout) clearTimeout(hideTimeout);
                tooltip = this.createTooltip(pickNum, team);
                document.body.appendChild(tooltip);
                
                // Position tooltip
                const rect = card.getBoundingClientRect();
                tooltip.style.left = rect.right + 10 + 'px';
                tooltip.style.top = rect.top + 'px';
                
                // Adjust if off screen
                const tooltipRect = tooltip.getBoundingClientRect();
                if (tooltipRect.right > window.innerWidth) {
                    tooltip.style.left = rect.left - tooltipRect.width - 10 + 'px';
                }
                
                requestAnimationFrame(() => tooltip.classList.add('visible'));
            });
            
            card.addEventListener('mouseleave', () => {
                hideTimeout = setTimeout(() => {
                    if (tooltip) {
                        tooltip.classList.remove('visible');
                        setTimeout(() => tooltip.remove(), 200);
                    }
                }, 100);
            });
            
            // Keep tooltip visible when hovering over it
            card.addEventListener('mouseenter', () => {
                if (tooltip) {
                    tooltip.addEventListener('mouseenter', () => {
                        if (hideTimeout) clearTimeout(hideTimeout);
                    });
                    tooltip.addEventListener('mouseleave', () => {
                        tooltip.classList.remove('visible');
                        setTimeout(() => tooltip.remove(), 200);
                    });
                }
            });
        },

        // Create prediction tooltip
        createTooltip(pickNum, team) {
            const tooltip = document.createElement('div');
            tooltip.className = 'ai-tooltip';
            
            // Get predictions if available
            let predictions = [];
            if (window.DraftPredictorAI && DraftPredictorAI.predictions[pickNum]) {
                predictions = DraftPredictorAI.predictions[pickNum].slice(0, 3);
            } else {
                // Mock predictions for display
                predictions = this.getMockPredictions(pickNum, team);
            }
            
            tooltip.innerHTML = `
                <div class="ai-tooltip-header">
                    <i class="fas fa-brain"></i>
                    <span>AI Prediction - Pick #${pickNum}</span>
                </div>
                ${predictions.map((p, i) => `
                    <div class="ai-tooltip-prediction" style="${i === 0 ? 'font-weight: 600;' : ''}">
                        <span class="ai-tooltip-prob">${p.probability || p.normalizedProbability}%</span>
                        <span class="ai-tooltip-player">${p.player ? p.player.name : p.name}</span>
                        <span class="ai-tooltip-position">${p.player ? p.player.position : p.position}</span>
                    </div>
                `).join('')}
                <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid var(--border-color); font-size: 0.75rem; color: var(--text-secondary); text-align: center;">
                    Click badge for full analysis
                </div>
            `;
            
            return tooltip;
        },

        // Get mock predictions when AI isn't loaded
        getMockPredictions(pickNum, team) {
            // Return position-appropriate mock predictions based on pick number
            const mockData = {
                1: [{ name: 'Fernando Mendoza', position: 'QB', probability: 85 }],
                2: [{ name: 'Ty Simpson', position: 'QB', probability: 65 }, { name: 'Francis Mauigoa', position: 'OT', probability: 25 }],
                3: [{ name: 'Francis Mauigoa', position: 'OT', probability: 55 }, { name: 'Rueben Bain Jr.', position: 'EDGE', probability: 30 }],
                7: [{ name: 'Rueben Bain Jr.', position: 'EDGE', probability: 68 }, { name: 'Arvell Reese', position: 'LB', probability: 15 }]
            };
            
            return mockData[pickNum] || [
                { name: 'Top Prospect', position: 'TBD', probability: 40 },
                { name: 'Alternative', position: 'TBD', probability: 25 },
                { name: 'Sleeper', position: 'TBD', probability: 15 }
            ];
        },

        // Setup event listeners
        setupEventListeners() {
            // Re-add badges when tabs change
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (mutation.target.classList.contains('active')) {
                            setTimeout(() => this.addPredictionBadges(), 100);
                        }
                    }
                });
            });
            
            document.querySelectorAll('.tab-content').forEach(tab => {
                observer.observe(tab, { attributes: true });
            });
            
            // Add badges when new picks are rendered
            document.addEventListener('picksRendered', () => {
                this.addPredictionBadges();
            });
        },

        // Toggle AI predictions on/off
        toggle() {
            this.enabled = !this.enabled;
            document.querySelectorAll('.ai-prediction-badge').forEach(badge => {
                badge.style.display = this.enabled ? 'flex' : 'none';
            });
            return this.enabled;
        },

        // Show surprise alert for unexpected picks
        showSurpriseAlert(pickNum, expected, actual) {
            const alert = document.createElement('div');
            alert.className = 'surprise-banner';
            alert.innerHTML = `
                <div class="surprise-banner-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="surprise-banner-content">
                    <h4>🚨 Surprise Pick Detected!</h4>
                    <p>Pick #${pickNum}: ${actual} selected. AI predicted ${expected} (${this.getMockPredictions(pickNum)[0].probability}% confidence)</p>
                </div>
            `;
            
            const container = document.querySelector('.main-content') || document.body;
            container.insertBefore(alert, container.firstChild);
            
            setTimeout(() => alert.remove(), 10000);
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => AIPredictorIntegration.init());
    } else {
        AIPredictorIntegration.init();
    }

    // Expose to global scope
    window.AIPredictorIntegration = AIPredictorIntegration;

})();

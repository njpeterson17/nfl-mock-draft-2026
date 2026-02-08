/**
 * NFL Mock Draft 2026 - Analytics Module
 * Privacy-friendly analytics using localStorage
 */

(function() {
    'use strict';

    const ANALYTICS_KEY = 'nfl_mock_draft_2026_analytics';
    const SESSION_START_KEY = 'nfl_mock_draft_session_start';
    
    // Default analytics structure
    const defaultAnalytics = {
        version: '1.0',
        firstVisit: null,
        lastVisit: null,
        totalVisits: 0,
        totalTimeSpent: 0,
        picksViewed: {},
        tabsClicked: {},
        searchQueries: [],
        filtersUsed: {},
        exportActions: {},
        shareActions: {},
        tradesCreated: 0,
        edpLeaderboardViews: 0,
        bigBoardViews: 0,
        teamDraftsViews: 0,
        draftGradesViews: 0,
        createMockViews: 0
    };

    function initAnalytics() {
        const now = Date.now();
        const analytics = getAnalytics();
        
        if (!analytics.firstVisit) {
            analytics.firstVisit = now;
        }
        
        analytics.lastVisit = now;
        analytics.totalVisits++;
        
        sessionStorage.setItem(SESSION_START_KEY, now.toString());
        
        saveAnalytics(analytics);
        trackTimeOnPage();
        
        console.log('[Analytics] Initialized');
    }

    function getAnalytics() {
        try {
            const data = localStorage.getItem(ANALYTICS_KEY);
            if (data) {
                return { ...defaultAnalytics, ...JSON.parse(data) };
            }
        } catch (e) {
            console.error('[Analytics] Error reading data:', e);
        }
        return { ...defaultAnalytics };
    }

    function saveAnalytics(data) {
        try {
            localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('[Analytics] Error saving data:', e);
        }
    }

    function trackTabClick(tabName) {
        const analytics = getAnalytics();
        
        if (!analytics.tabsClicked[tabName]) {
            analytics.tabsClicked[tabName] = 0;
        }
        analytics.tabsClicked[tabName]++;
        
        switch(tabName) {
            case 'edpLeaderboard': analytics.edpLeaderboardViews++; break;
            case 'bigBoard': analytics.bigBoardViews++; break;
            case 'teamDrafts': analytics.teamDraftsViews++; break;
            case 'draftGrades': analytics.draftGradesViews++; break;
            case 'create': analytics.createMockViews++; break;
        }
        
        saveAnalytics(analytics);
        console.log(`[Analytics] Tab clicked: ${tabName}`);
    }

    function trackSearch(query, resultsCount) {
        if (!query || query.trim().length < 2) return;
        
        const analytics = getAnalytics();
        
        analytics.searchQueries.push({
            query: query.toLowerCase().trim(),
            timestamp: Date.now(),
            resultsCount: resultsCount || 0
        });
        
        if (analytics.searchQueries.length > 100) {
            analytics.searchQueries = analytics.searchQueries.slice(-100);
        }
        
        saveAnalytics(analytics);
        console.log(`[Analytics] Search: "${query}" (${resultsCount} results)`);
    }

    function trackFilter(filterType) {
        const analytics = getAnalytics();
        
        if (!analytics.filtersUsed[filterType]) {
            analytics.filtersUsed[filterType] = 0;
        }
        analytics.filtersUsed[filterType]++;
        
        saveAnalytics(analytics);
    }

    function trackExport(exportType) {
        const analytics = getAnalytics();
        
        if (!analytics.exportActions[exportType]) {
            analytics.exportActions[exportType] = 0;
        }
        analytics.exportActions[exportType]++;
        
        saveAnalytics(analytics);
        console.log(`[Analytics] Export: ${exportType}`);
    }

    function trackTrade() {
        const analytics = getAnalytics();
        analytics.tradesCreated++;
        saveAnalytics(analytics);
    }

    function trackShare(platform) {
        const analytics = getAnalytics();
        
        if (!analytics.shareActions) {
            analytics.shareActions = {};
        }
        
        if (!analytics.shareActions[platform]) {
            analytics.shareActions[platform] = 0;
        }
        analytics.shareActions[platform]++;
        
        saveAnalytics(analytics);
        console.log(`[Analytics] Share: ${platform}`);
    }

    function trackTimeOnPage() {
        window.addEventListener('beforeunload', function() {
            const sessionStart = parseInt(sessionStorage.getItem(SESSION_START_KEY) || '0');
            if (sessionStart) {
                const timeSpent = Math.floor((Date.now() - sessionStart) / 1000);
                const analytics = getAnalytics();
                analytics.totalTimeSpent += timeSpent;
                saveAnalytics(analytics);
            }
        });
    }

    function getCurrentSessionTime() {
        const sessionStart = parseInt(sessionStorage.getItem(SESSION_START_KEY) || '0');
        if (sessionStart) {
            return Math.floor((Date.now() - sessionStart) / 1000);
        }
        return 0;
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        }
        return `${secs}s`;
    }

    function showAnalyticsSummary() {
        const analytics = getAnalytics();
        const sessionTime = getCurrentSessionTime();
        
        const topTabs = Object.entries(analytics.tabsClicked)
            .sort((a, b) => b[1] - a[1]);
        
        const searchTermCounts = {};
        analytics.searchQueries.forEach(s => {
            searchTermCounts[s.query] = (searchTermCounts[s.query] || 0) + 1;
        });
        const popularSearches = Object.entries(searchTermCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        console.log('[Analytics] NFL Mock Draft 2026 - Analytics Summary');
        console.log('[Analytics] ═══════════════════════════════════════════════════');

        console.log('[Analytics] Overview:');
        console.log(`  Total Visits: ${analytics.totalVisits}`);
        console.log(`  First Visit: ${analytics.firstVisit ? new Date(analytics.firstVisit).toLocaleDateString() : 'N/A'}`);
        console.log(`  Total Time on Site: ${formatTime(analytics.totalTimeSpent)}`);
        console.log(`  Current Session: ${formatTime(sessionTime)}`);

        console.log('[Analytics] Tab Clicks:');
        if (topTabs.length === 0) {
            console.log('  No tabs clicked yet');
        } else {
            topTabs.forEach(([tab, count]) => {
                const tabNames = {
                    round1: 'Round 1', round2: 'Round 2', round3: 'Round 3',
                    edpLeaderboard: 'EDP Leaderboard', bigBoard: 'Big Board',
                    teamDrafts: 'Team Drafts', draftGrades: 'Draft Grades', create: 'Create Your Mock'
                };
                console.log(`  ${tabNames[tab] || tab}: ${count} clicks`);
            });
        }
        
        console.log('[Analytics] Search Activity:');
        console.log(`  Total Searches: ${analytics.searchQueries.length}`);
        if (popularSearches.length > 0) {
            console.log('  Most Popular Searches:');
            popularSearches.forEach(([term, count], i) => {
                console.log(`    ${i + 1}. "${term}" (${count}x)`);
            });
        }
        
        console.log('[Analytics] Filters Used:');
        Object.entries(analytics.filtersUsed).forEach(([filter, count]) => {
            console.log(`  ${filter}: ${count} times`);
        });
        
        console.log('[Analytics] Exports:');
        Object.entries(analytics.exportActions).forEach(([type, count]) => {
            console.log(`  ${type}: ${count} times`);
        });
        
        console.log('[Analytics] Social Shares:');
        if (analytics.shareActions && Object.keys(analytics.shareActions).length > 0) {
            Object.entries(analytics.shareActions).forEach(([platform, count]) => {
                console.log(`  ${platform}: ${count} times`);
            });
        } else {
            console.log('  No shares yet');
        }

        console.log('[Analytics] ═══════════════════════════════════════════════════');
        console.log('[Analytics] Run showDetailedAnalytics() for raw data');
        
        return analytics;
    }

    function showDetailedAnalytics() {
        console.log('[Analytics] Raw Analytics Data:');
        console.log(getAnalytics());
    }

    function clearAnalytics() {
        if (confirm('Are you sure you want to clear all analytics data?')) {
            localStorage.removeItem(ANALYTICS_KEY);
            sessionStorage.removeItem(SESSION_START_KEY);
            console.log('[Analytics] All data cleared');
            return true;
        }
        return false;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnalytics);
    } else {
        initAnalytics();
    }

    window.NFLDraftAnalytics = {
        trackTabClick,
        trackSearch,
        trackFilter,
        trackExport,
        trackTrade,
        trackShare,
        showSummary: showAnalyticsSummary,
        showDetailed: showDetailedAnalytics,
        clear: clearAnalytics,
        getData: getAnalytics
    };

    window.showAnalyticsSummary = showAnalyticsSummary;
    window.showDetailedAnalytics = showDetailedAnalytics;
    window.clearAnalytics = clearAnalytics;

    console.log('[Analytics] Analytics loaded. Run showAnalyticsSummary() to see stats.');
})();

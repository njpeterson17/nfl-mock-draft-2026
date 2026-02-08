// ==========================================
// NFL Draft Central - News Section JavaScript
// ==========================================

let currentFilter = 'all';
let displayedArticles = [];
let currentPage = 1;
const articlesPerPage = 6;

// Share counts stored in localStorage
const SHARE_COUNTS_KEY = 'nfl-draft-share-counts';

// Initialize News Section
document.addEventListener('DOMContentLoaded', () => {
    initNewsSection();
});

function initNewsSection() {
    renderFeaturedArticles();
    renderArticles();
    renderSidebarWidgets();
    initTheme();
}

// Render Featured Articles
function renderFeaturedArticles() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featuredArticles = getFeaturedArticles();
    
    if (!featuredGrid || featuredArticles.length === 0) return;
    
    let html = '';
    
    // First featured article (large)
    if (featuredArticles[0]) {
        const article = featuredArticles[0];
        html += `
            <article class="featured-card large" onclick="openArticleModal(${article.id})">
                <div class="featured-image">
                    <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'">
                    <span class="featured-badge ${article.type}">${article.type}</span>
                </div>
                <div class="featured-content">
                    <div class="featured-meta">
                        <span><i class="far fa-calendar"></i> ${formatDate(article.date)}</span>
                        <span><i class="far fa-user"></i> ${article.author}</span>
                        <span><i class="far fa-clock"></i> ${article.readTime} min read</span>
                    </div>
                    <h2 class="featured-title">${article.title}</h2>
                    <p class="featured-excerpt">${article.excerpt}</p>
                    <div class="featured-tags">
                        ${article.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    }
    
    // Second and third featured articles
    featuredArticles.slice(1, 3).forEach(article => {
        html += `
            <article class="featured-card" onclick="openArticleModal(${article.id})">
                <div class="featured-image">
                    <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'">
                    <span class="featured-badge ${article.type}">${article.type}</span>
                </div>
                <div class="featured-content">
                    <div class="featured-meta">
                        <span><i class="far fa-calendar"></i> ${formatDate(article.date)}</span>
                        <span><i class="far fa-clock"></i> ${article.readTime} min</span>
                    </div>
                    <h2 class="featured-title">${article.title}</h2>
                    <p class="featured-excerpt">${article.excerpt}</p>
                </div>
            </article>
        `;
    });
    
    featuredGrid.innerHTML = html;
}

// Render Articles List
function renderArticles() {
    const articlesList = document.getElementById('articlesList');
    const sectionTitle = document.getElementById('sectionTitle');
    
    if (!articlesList) return;
    
    // Update section title based on filter
    if (sectionTitle) {
        const filterLabels = {
            'all': 'Latest News',
            'news': 'Breaking News',
            'analysis': 'Deep Analysis',
            'rumors': 'Draft Rumors',
            'mock': 'Mock Drafts',
            'video': 'Video Content',
            'opinion': 'Hot Takes'
        };
        sectionTitle.textContent = filterLabels[currentFilter] || 'Latest News';
    }
    
    // Get filtered articles
    let filteredArticles = getArticlesByType(currentFilter);
    
    // Apply search if query exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        filteredArticles = searchArticles(searchInput.value.trim());
    }
    
    // Sort articles based on select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sortType = sortSelect.value;
        switch(sortType) {
            case 'newest':
                filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'popular':
                filteredArticles.sort((a, b) => b.views - a.views);
                break;
            case 'readTime':
                filteredArticles.sort((a, b) => a.readTime - b.readTime);
                break;
        }
    }
    
    // Pagination
    displayedArticles = filteredArticles;
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    if (articlesToShow.length === 0) {
        articlesList.innerHTML = `
            <div class="no-results">
                <i class="far fa-newspaper"></i>
                <h3>No articles found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    articlesToShow.forEach((article, index) => {
        const typeLabels = {
            'news': 'News',
            'analysis': 'Analysis',
            'rumors': 'Rumors',
            'mock': 'Mock Draft',
            'video': 'Video',
            'opinion': 'Opinion'
        };
        
        html += `
            <article class="article-card" onclick="openArticleModal(${article.id})" style="animation-delay: ${index * 0.05}s">
                <div class="article-thumbnail">
                    <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'">
                </div>
                <div class="article-content">
                    <div class="article-header">
                        <span class="article-type ${article.type}">${typeLabels[article.type]}</span>
                        <span class="article-date">${formatDate(article.date)}</span>
                    </div>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-footer">
                        <span class="article-author">
                            <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: 700;">${article.authorAvatar}</span>
                            ${article.author}
                        </span>
                        <div class="article-stats">
                            <span><i class="far fa-eye"></i> ${formatNumber(article.views)}</span>
                            <span><i class="far fa-heart"></i> ${article.likes}</span>
                            <span><i class="far fa-comment"></i> ${article.comments}</span>
                            <span><i class="far fa-clock"></i> ${article.readTime} min</span>
                        </div>
                    </div>
                    <div class="article-share-buttons" onclick="event.stopPropagation()">
                        <button class="share-btn share-twitter" onclick="shareToTwitter(${article.id})" title="Share on X/Twitter">
                            <i class="fab fa-x-twitter"></i>
                        </button>
                        <button class="share-btn share-facebook" onclick="shareToFacebook(${article.id})" title="Share on Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                        <button class="share-btn share-linkedin" onclick="shareToLinkedIn(${article.id})" title="Share on LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </button>
                        <button class="share-btn share-copy" onclick="copyArticleLink(${article.id}, event)" title="Copy link">
                            <i class="fas fa-link"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    });
    
    articlesList.innerHTML = html;
    
    // Update load more button visibility
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= filteredArticles.length ? 'none' : 'inline-flex';
    }
}

// Render Sidebar Widgets
function renderSidebarWidgets() {
    // Trending List
    const trendingList = document.getElementById('trendingList');
    if (trendingList) {
        const trending = getTrendingArticles();
        trendingList.innerHTML = trending.map((article, index) => `
            <li onclick="openArticleModal(${article.id})">
                <span class="trending-rank">${index + 1}</span>
                <span class="trending-title">${article.title}</span>
            </li>
        `).join('');
    }
    
    // Hot Takes
    const hotTakesList = document.getElementById('hotTakesList');
    if (hotTakesList) {
        hotTakesList.innerHTML = hotTakes.map(take => `
            <div class="hot-take">
                <p class="hot-take-text">"${take.text}"</p>
                <span class="hot-take-author">${take.author}</span>
            </div>
        `).join('');
    }
    
    // Expert Picks
    const expertPicksList = document.getElementById('expertPicksList');
    if (expertPicksList) {
        expertPicksList.innerHTML = expertPicks.map(pick => `
            <div class="expert-pick">
                <div class="expert-avatar">${pick.initials}</div>
                <div class="expert-info">
                    <div class="expert-name">${pick.name}</div>
                    <div class="expert-prediction">${pick.prediction}</div>
                </div>
            </div>
        `).join('');
    }
}

// Filter Articles
function filterArticles(filter) {
    currentFilter = filter;
    currentPage = 1;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    renderArticles();
}

// Search Articles
function searchArticles() {
    currentPage = 1;
    renderArticles();
}

// Sort Articles
function sortArticles() {
    renderArticles();
}

// Load More Articles
function loadMoreArticles() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const spinner = loadMoreBtn.querySelector('.fa-spinner');
    const text = loadMoreBtn.querySelector('span');
    
    spinner.style.display = 'inline-block';
    text.textContent = 'Loading...';
    
    // Simulate loading delay
    setTimeout(() => {
        currentPage++;
        renderArticles();
        spinner.style.display = 'none';
        text.textContent = 'Load More Articles';
    }, 500);
}

// Open Article Modal
function openArticleModal(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');
    
    const typeLabels = {
        'news': 'News',
        'analysis': 'Analysis',
        'rumors': 'Rumors',
        'mock': 'Mock Draft',
        'video': 'Video',
        'opinion': 'Opinion'
    };
    
    const typeColors = {
        'news': 'var(--info)',
        'analysis': 'var(--success)',
        'rumors': 'var(--warning)',
        'mock': '#9b59b6',
        'video': '#e74c3c',
        'opinion': 'var(--danger)'
    };
    
    // Get related articles
    const relatedArticles = article.related ? article.related.map(id => getArticleById(id)).filter(Boolean) : [];
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-type" style="background: ${typeColors[article.type]}20; color: ${typeColors[article.type]};">${typeLabels[article.type]}</span>
            <h2 class="modal-title">${article.title}</h2>
            <div class="modal-meta">
                <span><i class="far fa-user"></i> ${article.author}</span>
                <span><i class="far fa-calendar"></i> ${formatDate(article.date)}</span>
                <span><i class="far fa-clock"></i> ${article.readTime} min read</span>
                <span><i class="far fa-eye"></i> ${formatNumber(article.views)} views</span>
            </div>
        </div>
        <div class="modal-image">
            <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'">
        </div>
        <div class="modal-text">
            ${article.content}
        </div>
        <div class="modal-actions">
            <button class="modal-action-btn" onclick="likeArticle(this, ${article.id})">
                <i class="far fa-heart"></i> ${article.likes} Likes
            </button>
            <div class="modal-share-group">
                <button class="modal-share-btn share-twitter" onclick="shareToTwitter(${article.id})" title="Share on X/Twitter">
                    <i class="fab fa-x-twitter"></i> Twitter
                </button>
                <button class="modal-share-btn share-facebook" onclick="shareToFacebook(${article.id})" title="Share on Facebook">
                    <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button class="modal-share-btn share-linkedin" onclick="shareToLinkedIn(${article.id})" title="Share on LinkedIn">
                    <i class="fab fa-linkedin-in"></i> LinkedIn
                </button>
                <button class="modal-share-btn share-copy" onclick="copyArticleLink(${article.id}, event)" title="Copy link">
                    <i class="fas fa-link"></i> <span class="copy-text">Copy Link</span>
                </button>
            </div>
        </div>
        ${relatedArticles.length > 0 ? `
            <div class="modal-related">
                <h4>Related Articles</h4>
                <ul class="related-list">
                    ${relatedArticles.map(rel => `
                        <li><a href="#" onclick="openArticleModal(${rel.id}); return false;">${rel.title}</a></li>
                    `).join('')}
                </ul>
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Increment view count (in a real app, this would be an API call)
    article.views++;
}

// Close Article Modal
function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Like Article
function likeArticle(btn, articleId) {
    const article = getArticleById(articleId);
    if (!article) return;
    
    if (btn.classList.contains('liked')) {
        article.likes--;
        btn.classList.remove('liked');
        btn.innerHTML = `<i class="far fa-heart"></i> ${article.likes} Likes`;
    } else {
        article.likes++;
        btn.classList.add('liked');
        btn.innerHTML = `<i class="fas fa-heart"></i> ${article.likes} Likes`;
    }
    
    // Update the article card
    renderArticles();
}

// ==========================================
// Social Sharing Functions
// ==========================================

// Get article URL
function getArticleUrl(articleId) {
    return window.location.origin + window.location.pathname + '#article-' + articleId;
}

// Track share count
function trackShare(articleId, platform) {
    const counts = getShareCounts();
    if (!counts[articleId]) {
        counts[articleId] = {
            twitter: 0,
            facebook: 0,
            linkedin: 0,
            copy: 0,
            total: 0
        };
    }
    counts[articleId][platform]++;
    counts[articleId].total++;
    localStorage.setItem(SHARE_COUNTS_KEY, JSON.stringify(counts));
}

// Get share counts from localStorage
function getShareCounts() {
    const counts = localStorage.getItem(SHARE_COUNTS_KEY);
    return counts ? JSON.parse(counts) : {};
}

// Get share count for an article
function getArticleShareCount(articleId) {
    const counts = getShareCounts();
    return counts[articleId] ? counts[articleId].total : 0;
}

// Share to Twitter/X
function shareToTwitter(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;

    const url = getArticleUrl(articleId);
    const text = `${article.title} - NFL Draft Central`;
    const hashtags = 'NFLDraft,NFLDraft2026';

    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;

    // Track share
    trackShare(articleId, 'twitter');

    // Open in new window
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');

    // Show success animation
    showShareSuccess('Shared to Twitter!');
}

// Share to Facebook
function shareToFacebook(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;

    const url = getArticleUrl(articleId);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    // Track share
    trackShare(articleId, 'facebook');

    // Open in new window
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');

    // Show success animation
    showShareSuccess('Shared to Facebook!');
}

// Share to LinkedIn
function shareToLinkedIn(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;

    const url = getArticleUrl(articleId);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

    // Track share
    trackShare(articleId, 'linkedin');

    // Open in new window
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');

    // Show success animation
    showShareSuccess('Shared to LinkedIn!');
}

// Copy Article Link
function copyArticleLink(articleId, event) {
    if (event) {
        event.stopPropagation();
    }

    const url = getArticleUrl(articleId);

    // Use modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            // Track share
            trackShare(articleId, 'copy');

            // Show success with animation
            showCopySuccess(event);
        }).catch(() => {
            // Fallback
            fallbackCopyToClipboard(url, articleId, event);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(url, articleId, event);
    }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text, articleId, event) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        trackShare(articleId, 'copy');
        showCopySuccess(event);
    } catch (err) {
        showToast('Failed to copy link');
    }

    document.body.removeChild(textArea);
}

// Show copy success animation
function showCopySuccess(event) {
    // Update button text temporarily
    let button;
    if (event && event.target) {
        button = event.target.closest('.share-btn, .modal-share-btn');
    }

    if (button) {
        const originalHTML = button.innerHTML;
        button.classList.add('copied');

        // Update button content
        if (button.classList.contains('modal-share-btn')) {
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        } else {
            button.innerHTML = '<i class="fas fa-check"></i>';
        }

        // Reset after animation
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
        }, 2000);
    }

    // Show toast notification
    showToast('Link copied to clipboard!');
}

// Show share success animation
function showShareSuccess(message) {
    showToast(message);
}

// Generic Share Article (fallback for native share)
function shareArticle(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;

    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: getArticleUrl(articleId)
        }).then(() => {
            trackShare(articleId, 'native');
            showToast('Article shared!');
        }).catch((err) => {
            if (err.name !== 'AbortError') {
                console.error('Error sharing:', err);
            }
        });
    } else {
        // Fallback to Twitter share
        shareToTwitter(articleId);
    }
}

// Subscribe to Newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // In a real app, this would be an API call
    showToast('Thanks for subscribing! Check your email for confirmation.');
    form.reset();
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
    }
});

// Check for hash in URL to open specific article
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#article-')) {
        const articleId = parseInt(hash.replace('#article-', ''));
        if (articleId) {
            setTimeout(() => openArticleModal(articleId), 500);
        }
    }
});

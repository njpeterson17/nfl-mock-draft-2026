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
    initLiveHeadlines();
    initTheme();
    initIntersectionObserver();
    initLazyLoading();
    initParallaxEffect();
    initSmoothScroll();
}

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================

function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const elementsToAnimate = document.querySelectorAll(
        '.article-card, .featured-card, .widget'
    );

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Re-observe new elements after rendering
function observeNewElements() {
    setTimeout(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const newElements = document.querySelectorAll(
            '.article-card:not(.animate), .featured-card:not(.animate)'
        );

        newElements.forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

// ==========================================
// Lazy Loading for Images
// ==========================================

function initLazyLoading() {
    const imageObserverOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.01
    };

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                imageObserver.unobserve(img);
            }
        });
    }, imageObserverOptions);

    // Observe all images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

function loadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;

    img.classList.add('loading');

    const tempImg = new Image();
    tempImg.onload = () => {
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.remove('loading');
        img.classList.add('loaded');
    };
    tempImg.onerror = () => {
        img.src = 'images/players/placeholder.jpg';
        img.classList.remove('loading');
        img.classList.add('loaded');
    };
    tempImg.src = src;
}

// Update images for lazy loading when rendering
function setupLazyImage(imagePath) {
    return imagePath; // For now, direct loading - can be updated to use data-src
}

// ==========================================
// Parallax Effect for Featured Images
// ==========================================

function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.featured-card.large .featured-image');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.setProperty('--parallax-offset', `${rate}px`);
                el.classList.add('parallax');
            }
        });
    }, { passive: true });
}

// ==========================================
// Smooth Scroll
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#article-modal') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
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
                    <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'" loading="eager">
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
                    <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'" loading="eager">
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

    // Setup image loading handlers
    setupImageLoading();
}

// Setup image loading with proper state handling
function setupImageLoading() {
    const images = document.querySelectorAll('.featured-image img, .article-thumbnail img');

    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            });
        }
    });
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
            <div class="no-results fade-in-up">
                <i class="far fa-newspaper"></i>
                <h3>No articles found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }

    // Show skeleton loaders first
    articlesList.innerHTML = generateSkeletonCards(Math.min(3, articlesToShow.length));

    // Render actual content after a brief delay for smooth transition
    setTimeout(() => {
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
                <article class="article-card" onclick="openArticleModal(${article.id})">
                    <div class="article-thumbnail">
                        <img src="${article.featuredImage}" alt="${article.title}" onerror="this.src='images/players/placeholder.jpg'" loading="lazy">
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

        // Re-observe new elements for animations
        observeNewElements();

    }, 150);

    // Update load more button visibility
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= filteredArticles.length ? 'none' : 'inline-flex';
    }
}

// Generate skeleton loading cards
function generateSkeletonCards(count) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += `
            <div class="article-card-skeleton">
                <div class="image-skeleton"></div>
                <div class="content-skeleton">
                    <div class="skeleton-line title"></div>
                    <div class="skeleton-line subtitle"></div>
                    <div class="skeleton-line text"></div>
                    <div class="skeleton-line text short"></div>
                </div>
            </div>
        `;
    }
    return html;
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

    // Add smooth transition
    addPageTransition(() => {
        renderArticles();
    });
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

// Smooth page transitions
function addPageTransition(callback) {
    // Add fade-out effect
    const contentArea = document.querySelector('.main-content-area');
    if (contentArea) {
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(10px)';
        contentArea.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            callback();

            // Fade back in
            setTimeout(() => {
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 50);
        }, 300);
    } else {
        callback();
    }
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
    const modalContent = modal.querySelector('.modal-content');

    // Add fade-out animation
    if (modalContent) {
        modalContent.style.animation = 'fadeOut 0.3s ease forwards';

        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            modalContent.style.animation = '';
        }, 300);
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add modal animations to CSS (already exists, just enhancing)
if (!document.querySelector('#modal-animations')) {
    const style = document.createElement('style');
    style.id = 'modal-animations';
    style.textContent = `
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        .modal-content {
            animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
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

// ==========================================
// Live Headlines RSS Feed Integration
// ==========================================

const RSS_FEEDS = [
    {
        name: 'ESPN',
        url: 'https://www.espn.com/espn/rss/nfl/news',
        icon: 'espn'
    },
    {
        name: 'NFL.com',
        url: 'https://www.nfl.com/feeds/rss/news',
        icon: 'nfl'
    },
    {
        name: 'CBS Sports',
        url: 'https://www.cbssports.com/rss/headlines/nfl',
        icon: 'cbs'
    }
];

const RSS_CACHE_KEY = 'nfl-draft-rss-cache';
const RSS_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const RSS_REFRESH_INTERVAL = 5 * 60 * 1000; // Auto-refresh every 5 minutes
const RSS_API_URL = 'https://api.rss2json.com/v1/api.json';

let rssRefreshTimer = null;

// Initialize Live Headlines
function initLiveHeadlines() {
    fetchLiveHeadlines();

    // Set up auto-refresh
    if (rssRefreshTimer) {
        clearInterval(rssRefreshTimer);
    }
    rssRefreshTimer = setInterval(() => {
        fetchLiveHeadlines(true);
    }, RSS_REFRESH_INTERVAL);
}

// Fetch Live Headlines from RSS Feeds
async function fetchLiveHeadlines(isRefresh = false) {
    const loadingEl = document.getElementById('liveHeadlinesLoading');
    const listEl = document.getElementById('liveHeadlinesList');
    const errorEl = document.getElementById('liveHeadlinesError');

    if (!listEl) return;

    // Check cache first
    if (!isRefresh) {
        const cachedData = getCachedRSS();
        if (cachedData) {
            renderLiveHeadlines(cachedData);
            return;
        }
    }

    // Show loading state
    if (loadingEl) loadingEl.style.display = 'flex';
    if (listEl) listEl.style.display = 'none';
    if (errorEl) errorEl.style.display = 'none';

    try {
        // Fetch from all RSS feeds
        const feedPromises = RSS_FEEDS.map(feed => fetchRSSFeed(feed));
        const results = await Promise.allSettled(feedPromises);

        // Combine and process results
        let allHeadlines = [];
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value) {
                const headlines = result.value.map(item => ({
                    ...item,
                    source: RSS_FEEDS[index].name,
                    sourceIcon: RSS_FEEDS[index].icon
                }));
                allHeadlines = allHeadlines.concat(headlines);
            }
        });

        if (allHeadlines.length === 0) {
            throw new Error('No headlines retrieved');
        }

        // Sort by date (newest first)
        allHeadlines.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        // Take top 8 headlines
        const topHeadlines = allHeadlines.slice(0, 8);

        // Cache the results
        cacheRSS(topHeadlines);

        // Render headlines
        renderLiveHeadlines(topHeadlines);

    } catch (error) {
        console.error('Error fetching live headlines:', error);

        // Try to use cached data as fallback
        const cachedData = getCachedRSS();
        if (cachedData) {
            renderLiveHeadlines(cachedData);
        } else {
            // Show error state
            if (loadingEl) loadingEl.style.display = 'none';
            if (listEl) listEl.style.display = 'none';
            if (errorEl) errorEl.style.display = 'block';
        }
    }
}

// Fetch individual RSS feed using RSS2JSON service
async function fetchRSSFeed(feed) {
    try {
        const response = await fetch(`${RSS_API_URL}?rss_url=${encodeURIComponent(feed.url)}&api_key=&count=5`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== 'ok' || !data.items) {
            throw new Error('Invalid RSS response');
        }

        // Filter for NFL Draft-related content
        const draftKeywords = ['draft', 'prospect', 'combine', 'mock', 'scouting', 'nfl draft'];
        const filteredItems = data.items.filter(item => {
            const text = (item.title + ' ' + item.description).toLowerCase();
            return draftKeywords.some(keyword => text.includes(keyword));
        });

        // Use all items if no draft-specific content found
        const items = filteredItems.length > 0 ? filteredItems : data.items;

        return items.map(item => ({
            title: cleanHTML(item.title),
            link: item.link,
            pubDate: item.pubDate,
            description: cleanHTML(item.description)
        }));

    } catch (error) {
        console.error(`Error fetching ${feed.name} RSS:`, error);
        return null;
    }
}

// Clean HTML from text
function cleanHTML(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    return div.textContent || div.innerText || text;
}

// Render Live Headlines
function renderLiveHeadlines(headlines) {
    const loadingEl = document.getElementById('liveHeadlinesLoading');
    const listEl = document.getElementById('liveHeadlinesList');
    const errorEl = document.getElementById('liveHeadlinesError');

    if (!listEl) return;

    // Hide loading and error
    if (loadingEl) loadingEl.style.display = 'none';
    if (errorEl) errorEl.style.display = 'none';

    // Show list
    listEl.style.display = 'block';

    // Render headlines
    listEl.innerHTML = headlines.map((headline, index) => {
        const timeAgo = getTimeAgo(headline.pubDate);
        const isNew = isRecentHeadline(headline.pubDate);

        return `
            <li class="live-headline-item" style="animation-delay: ${index * 0.05}s">
                <a href="${headline.link}" target="_blank" rel="noopener noreferrer" class="live-headline-link">
                    <div class="live-headline-header">
                        <span class="live-headline-source">
                            <span class="source-icon"></span>
                            ${headline.source}
                        </span>
                        <span class="live-headline-time">
                            ${isNew ? '<span class="new-badge">NEW</span>' : ''}
                            ${timeAgo}
                        </span>
                    </div>
                    <div class="live-headline-title">
                        <span>${headline.title}</span>
                        <i class="fas fa-external-link-alt external-link-icon"></i>
                    </div>
                </a>
            </li>
        `;
    }).join('');
}

// Check if headline is recent (less than 1 hour old)
function isRecentHeadline(pubDate) {
    const date = new Date(pubDate);
    const now = new Date();
    const hourInMs = 60 * 60 * 1000;
    return (now - date) < hourInMs;
}

// Get time ago string
function getTimeAgo(pubDate) {
    const date = new Date(pubDate);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) {
        return 'just now';
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes}m ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours}h ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days}d ago`;
    }

    return date.toLocaleDateString();
}

// Cache RSS data
function cacheRSS(data) {
    const cacheData = {
        timestamp: Date.now(),
        headlines: data
    };
    try {
        localStorage.setItem(RSS_CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error caching RSS data:', error);
    }
}

// Get cached RSS data
function getCachedRSS() {
    try {
        const cached = localStorage.getItem(RSS_CACHE_KEY);
        if (!cached) return null;

        const cacheData = JSON.parse(cached);
        const now = Date.now();

        // Check if cache is still valid
        if (now - cacheData.timestamp < RSS_CACHE_DURATION) {
            return cacheData.headlines;
        }

        return null;
    } catch (error) {
        console.error('Error reading RSS cache:', error);
        return null;
    }
}

// Manual refresh function
function refreshLiveHeadlines() {
    const refreshBtn = document.querySelector('.refresh-headlines-btn');
    if (refreshBtn) {
        refreshBtn.classList.add('refreshing');
    }

    fetchLiveHeadlines(true).finally(() => {
        if (refreshBtn) {
            setTimeout(() => {
                refreshBtn.classList.remove('refreshing');
            }, 500);
        }
    });

    showToast('Refreshing headlines...');
}

// Clean up timer on page unload
window.addEventListener('beforeunload', () => {
    if (rssRefreshTimer) {
        clearInterval(rssRefreshTimer);
    }
});

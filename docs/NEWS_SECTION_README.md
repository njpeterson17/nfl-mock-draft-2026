# NFL Draft Central - News Section

A comprehensive news/blog system for the NFL Mock Draft website, featuring breaking news, analysis, rumors, and more.

## Features

### 1. News Hub Layout
- Breaking news ticker with scrolling updates
- Featured articles section with large hero cards
- Filterable article list
- Responsive sidebar with widgets

### 2. Article Types
- **News**: Breaking news, player declarations, combine results
- **Analysis**: Deep dives into prospects, scheme fits
- **Rumors**: Draft buzz, team interest, trade talks
- **Mock Drafts**: Updated mocks with analysis
- **Videos**: Scouting reports, highlight reels
- **Opinion**: Hot takes, draft strategies

### 3. Article Page (Modal)
- Full article content display
- Author information and metadata
- Social sharing buttons
- Related articles suggestions
- Like/heart functionality

### 4. Sidebar Widgets
- **Draft Calendar**: Upcoming events and key dates
- **Trending Now**: Most viewed articles
- **Hot Takes**: Controversial opinions and bold predictions
- **Expert Picks**: Analyst predictions and insights
- **Video of the Day**: Featured video content
- **Reader Polls**: Interactive polls for user engagement
- **Newsletter Signup**: Email subscription form
- **Team Needs**: Quick links to team-by-team analysis

### 5. Search & Filter
- Real-time article search by keyword
- Filter by category (All, News, Analysis, Rumors, Mock Drafts, Video)
- Sort by date, popularity, or read time
- Pagination with "Load More" functionality

### 6. Draft Calendar
Key dates for the 2026 NFL Draft:
- Feb 27: NFL Combine Begins
- Mar 15: Pro Days Begin
- Apr 24: NFL Draft Day 1
- Apr 25: NFL Draft Day 2
- Apr 26: NFL Draft Day 3

### 7. Sample Articles (10 included)
1. Fernando Mendoza declares for draft (News)
2. Arvell Reese vs Micah Parsons comparison (Analysis)
3. Jeremiyah Love pro day performance (Rumors)
4. NFL Combine invites announced (News)
5. Mock Draft 4.0 post-combine (Mock Draft)
6. RB Rankings deep dive (Analysis)
7. Scout quotes on Arvell Reese (Rumors)
8. Top 100 Big Board update (News)
9. Why Raiders must take Mendoza (Opinion)
10. Rueben Bain Jr. film room (Video)

### 8. RSS Feed
Full RSS 2.0 feed available at `rss.xml` for news aggregation.

## File Structure

```
nfl-mock-draft-2026/
├── news.html                 # Main news hub page
├── rss.xml                   # RSS feed
├── css/
│   └── news-section.css      # News section styles
├── js/
│   ├── news-data.js          # Article data and helpers
│   └── news-section.js       # News section functionality
└── NEWS_SECTION_README.md    # This file
```

## Technical Details

### CSS Variables Used
- `--primary`: Background color
- `--secondary`: Card backgrounds
- `--accent`: Primary accent color (cyan)
- `--text-primary`: Main text color
- `--text-secondary`: Secondary/muted text
- `--card-bg`: Card background with transparency
- `--border`: Border colors

### JavaScript Functions

#### Data Functions (news-data.js)
- `getTrendingArticles()` - Returns articles sorted by views
- `getArticleById(id)` - Returns specific article
- `getArticlesByType(type)` - Returns filtered articles
- `getFeaturedArticles()` - Returns featured articles only
- `searchArticles(query)` - Search by keyword
- `formatDate(dateString)` - Format date for display
- `formatNumber(num)` - Format large numbers (1k, 1M)

#### UI Functions (news-section.js)
- `initNewsSection()` - Initialize the news section
- `renderFeaturedArticles()` - Render featured article cards
- `renderArticles()` - Render article list
- `renderSidebarWidgets()` - Render all sidebar widgets
- `filterArticles(filter)` - Filter by type
- `searchArticles()` - Search articles
- `sortArticles()` - Sort articles
- `openArticleModal(id)` - Open article in modal
- `closeArticleModal()` - Close article modal
- `likeArticle(btn, id)` - Toggle like on article
- `subscribeNewsletter(event)` - Handle newsletter signup

## Integration

The news section is linked from:
- Main navigation in `index.html`
- Position rankings navigation in `position-rankings.html`
- Footer links on all pages

## SEO Features
- Semantic HTML5 structure
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- RSS feed for content syndication
- Structured article data

## Responsive Design
- Mobile-first approach
- Breakpoints at 1200px and 768px
- Adjusted layouts for tablets and phones
- Touch-friendly interface elements
- Optimized typography at all sizes

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements
- Real-time article updates via WebSocket
- User authentication for comments
- Article bookmarking
- Social media auto-posting
- Advanced analytics dashboard
- Multi-author support
- Article scheduling
- Draft tracker integration

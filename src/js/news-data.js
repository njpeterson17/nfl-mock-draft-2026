// ==========================================
// NFL Draft Central - News Data
// ==========================================

const articles = [
    {
        id: 1,
        type: 'news',
        title: 'Fernando Mendoza Officially Declares for 2026 NFL Draft',
        excerpt: 'Heisman Trophy winner and Indiana quarterback Fernando Mendoza announces his decision to enter the NFL Draft, ending speculation about his future.',
        content: `
            <p>Indiana quarterback Fernando Mendoza, the 2025 Heisman Trophy winner and architect of one of the most remarkable turnarounds in college football history, has officially declared for the 2026 NFL Draft.</p>
            
            <p>"After much prayer and consultation with my family, I've decided to take the next step in my football journey," Mendoza said in a statement released through the university. "Indiana will always be home, and I'm forever grateful for the opportunity Coach Cignetti gave me."</p>
            
            <p>Mendoza's decision was widely expected after leading the Hoosiers to the Big Ten Championship and a berth in the College Football Playoff. He threw for 4,283 yards, 41 touchdowns, and just 8 interceptions while completing 72.3% of his passes.</p>
            
            <p>The 6'5", 225-pound signal-caller is the consensus top prospect in this year's draft class and is expected to be the first overall selection by the Las Vegas Raiders.</p>
            
            <p>"He's the most pro-ready quarterback I've evaluated since Andrew Luck," said one NFC scout. "His accuracy, decision-making, and leadership are off the charts."</p>
            
            <p>Mendoza will participate in all drills at the NFL Combine later this month and is expected to throw at Indiana's Pro Day on March 15.</p>
        `,
        date: '2026-01-20',
        author: 'Nick B.',
        authorAvatar: 'NB',
        readTime: 3,
        views: 15420,
        likes: 342,
        comments: 89,
        featured: true,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Mendoza', 'QB', 'Indiana', 'Heisman', 'Declaration'],
        trending: 1,
        related: [2, 5, 8]
    },
    {
        id: 2,
        type: 'analysis',
        title: 'Is Arvell Reese the Best Defensive Prospect Since Micah Parsons?',
        excerpt: 'Breaking down what makes the Ohio State linebacker special and why scouts are comparing him to the Cowboys superstar.',
        content: `
            <p>When Ohio State linebacker Arvell Reese declared for the 2026 NFL Draft, it set off a wave of excitement throughout the scouting community. The junior's combination of size, speed, and instinct has drawn comparisons to some of the best defensive players to come out of college in recent memory.</p>
            
            <p>"Reese is a rare breed," said one AFC scouting director. "You just don't find 6'3", 240-pound linebackers who can run 4.5 and cover like a cornerback. He's a true three-down player in an era where those are becoming extinct."</p>
            
            <p>Reese's production backs up the measurables. In 2025, he recorded 94 tackles, 12.5 sacks, 3 interceptions, and 2 forced fumbles. But it's his tape that really impresses evaluators.</p>
            
            <p>"The play against Penn State where he chased down their QB on a 40-yard scramble and forced a fumble? That's special," said draft analyst Todd McShay. "That's the kind of play you see from All-Pros."</p>
            
            <p>The comparison to Micah Parsons isn't made lightly. Like Parsons, Reese played multiple positions in college, lining up as an edge rusher, off-ball linebacker, and even slot corner. His versatility makes him scheme-proof and incredibly valuable.</p>
            
            <p>Reese is currently projected as a top-5 pick and could challenge for the top overall selection depending on team needs.</p>
        `,
        date: '2026-02-01',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 8,
        views: 12350,
        likes: 287,
        comments: 67,
        featured: true,
        featuredImage: 'images/players/arvell-reese.jpg',
        tags: ['Reese', 'LB', 'Ohio State', 'Analysis', 'Top Prospects'],
        trending: 2,
        related: [1, 3, 9]
    },
    {
        id: 3,
        type: 'rumors',
        title: 'Jeremiyah Love Stock Rising After Pro Day Performance',
        excerpt: 'Notre Dame running back showed elite athleticism at his pro day, running a 4.42 40-yard dash and posting a 38-inch vertical jump.',
        content: `
            <p>Notre Dame running back Jeremiyah Love may have cemented himself as the RB1 of the 2026 draft class with an outstanding pro day performance Wednesday.</p>
            
            <p>Love, who measured 5'11" and 205 pounds, ran an official 4.42-second 40-yard dash and posted a 38-inch vertical jump - numbers that would have ranked among the best at the position had he run them at the Combine.</p>
            
            <p>"I wanted to show teams I'm more than just a between-the-tackles runner," Love said. "I can catch the ball, I can pass protect, and I can run away from defenders."</p>
            
            <p>The performance has reportedly caught the attention of several teams with first-round picks, including the New York Jets at No. 2 and the Cleveland Browns at No. 6.</p>
            
            <p>"I wouldn't be shocked if Love goes in the top 10 now," said one NFC executive. "The way the league is going, you need backs who can do it all, and he checks every box."</p>
            
            <p>Love rushed for 1,342 yards and 15 touchdowns in 2025, averaging 6.2 yards per carry. He also caught 28 passes for 312 yards.</p>
        `,
        date: '2026-02-05',
        author: 'Nick B.',
        authorAvatar: 'NB',
        readTime: 4,
        views: 8920,
        likes: 156,
        comments: 43,
        featured: false,
        featuredImage: 'images/players/jeremiyah-love.jpg',
        tags: ['Love', 'RB', 'Notre Dame', 'Pro Day', 'Risers'],
        trending: 3,
        related: [2, 6, 10]
    },
    {
        id: 4,
        type: 'news',
        title: 'NFL Combine 2026: Top Prospects Announced',
        excerpt: 'The NFL has released the full list of 324 invited players for the 2026 NFL Scouting Combine in Indianapolis.',
        content: `
            <p>The NFL announced today the 324 players invited to participate in the 2026 NFL Scouting Combine, which will be held February 27 through March 8 at Lucas Oil Stadium in Indianapolis.</p>
            
            <p>Headliners include Heisman winner Fernando Mendoza (QB, Indiana), edge rusher Rueben Bain Jr. (Miami), offensive tackle Francis Mauigoa (Miami), and cornerback Jermod McCoy (Tennessee).</p>
            
            <p>The event will follow its traditional format, with on-field workouts beginning March 1. The daily schedule:</p>
            
            <ul style="margin: 1rem 0; padding-left: 1.5rem; color: var(--text-primary);">
                <li>March 1: QB, WR, TE</li>
                <li>March 2: RB, OL</li>
                <li>March 3: DL, LB</li>
                <li>March 4: DB</li>
            </ul>
            
            <p>This year's Combine will feature enhanced technology, including RFID tracking for all drills and AI-assisted medical evaluations.</p>
            
            <p>"The Combine remains the most important pre-draft event on our calendar," said NFL Director of College Football Relations. "It's where prospects can cement their status or change the narrative."</p>
        `,
        date: '2026-02-03',
        author: 'Staff Writer',
        authorAvatar: 'SW',
        readTime: 5,
        views: 7650,
        likes: 124,
        comments: 31,
        featured: false,
        featuredImage: 'images/players/placeholder.jpg',
        tags: ['NFL Combine', 'Indianapolis', 'Top Prospects', 'Schedule'],
        trending: 4,
        related: [1, 2, 3]
    },
    {
        id: 5,
        type: 'mock',
        title: 'Mock Draft 4.0: Post-Combine Shakeups',
        excerpt: 'Our latest projection after the NFL Combine, with big movers and shakers throughout the first round.',
        content: `
            <p>The NFL Combine always shakes up draft boards, and this year was no exception. With pro days now underway, here's our latest look at how the first round might shake out:</p>
            
            <p><strong>1. Las Vegas Raiders - Fernando Mendoza, QB, Indiana</strong></p>
            <p>The Raiders need a franchise quarterback, and Mendoza is the clear QB1. The Heisman winner has everything you want in a modern NFL quarterback.</p>
            
            <p><strong>2. New York Jets - Ty Simpson, QB, Alabama</strong></p>
            <p>The Jets go quarterback for the second straight year. Simpson's arm talent and pocket presence make him a worthy QB2.</p>
            
            <p><strong>3. Arizona Cardinals - Francis Mauigoa, OT, Miami</strong></p>
            <p>The Cardinals protect Kyler Murray with a true mauler. Mauigoa allowed just 2 sacks in over 2,600 career snaps.</p>
            
            <p><strong>4. Tennessee Titans - Carnell Tate, WR, Ohio State</strong></p>
            <p>Tennessee gives new QB Cam Ward a true WR1. Tate is Mel Kiper's #3 overall prospect.</p>
            
            <p><strong>5. New York Giants - Peter Woods, DL, Clemson</strong></p>
            <p>The Giants address their league-worst run defense with a day-one starter at 3-technique.</p>
            
            <p>Check out the full mock draft for all 32 first-round picks.</p>
        `,
        date: '2026-02-04',
        author: 'Nick B.',
        authorAvatar: 'NB',
        readTime: 12,
        views: 18750,
        likes: 423,
        comments: 156,
        featured: true,
        featuredImage: 'images/players/placeholder.jpg',
        tags: ['Mock Draft', 'First Round', 'Combine', 'Projections'],
        trending: 1,
        related: [1, 2, 4]
    },
    {
        id: 6,
        type: 'analysis',
        title: '2026 Running Back Rankings: A Deep Dive',
        excerpt: 'Breaking down the top running back prospects in the 2026 draft class, from first-round talents to late-round sleepers.',
        content: `
            <p>The 2026 running back class is considered one of the deepest in recent memory, with multiple players capable of making an immediate impact at the NFL level. Here's our comprehensive breakdown:</p>
            
            <p><strong>Tier 1: First Round Talents</strong></p>
            <p><strong>1. Jeremiyah Love, Notre Dame</strong> - Love has emerged as the clear RB1 after his pro day performance. His combination of vision, burst, and receiving ability makes him a true three-down back.</p>
            
            <p><strong>2. Omarion Hampton, North Carolina</strong> - Hampton is a physical runner who excels in short-yardage situations. His 4.52 40 at the Combine was better than expected.</p>
            
            <p><strong>3. Treveyon Henderson, Ohio State</strong> - Henderson's injury history is concerning, but when healthy, he's shown elite burst and home run ability.</p>
            
            <p><strong>Tier 2: Day 2 Targets</strong></p>
            <p><strong>4. Kaleb Johnson, Iowa</strong> - A classic Iowa back who does everything well. Won't wow you with measurables but will be a productive pro.</p>
            
            <p><strong>5. CJ Allen, Georgia</strong> - The younger brother of former NFL running back James Allen has similar traits - great vision and contact balance.</p>
            
            <p><strong>Sleeper: David Bailey, Texas Tech</strong> - Bailey wasn't highly recruited but produced against Big 12 competition. Could be a nice value pick in Round 4 or 5.</p>
        `,
        date: '2026-02-02',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 10,
        views: 9870,
        likes: 234,
        comments: 52,
        featured: false,
        featuredImage: 'images/players/jeremiyah-love.jpg',
        tags: ['RB', 'Rankings', 'Position Breakdown', 'Analysis'],
        trending: 5,
        related: [3, 10, 7]
    },
    {
        id: 7,
        type: 'rumors',
        title: 'Scout: Arvell Reese is "Best Defensive Player in This Class"',
        excerpt: 'An anonymous NFC scout shared their thoughts on the Ohio State linebacker, saying he compares favorably to past top-5 picks.',
        content: `
            <p>As the draft process continues, the buzz around Ohio State linebacker Arvell Reese only grows louder. Multiple scouts and executives have praised the junior's tape, but one NFC area scout didn't hold back when asked about Reese's ceiling.</p>
            
            <p>"He's the best defensive player in this class, and it's not particularly close," the scout said, speaking on condition of anonymity. "I haven't seen a linebacker with his combination of size, speed, and instincts since Micah Parsons."</p>
            
            <p>Strong words, but Reese's production backs them up. In his three-year career at Ohio State, Reese accumulated 237 tackles, 28.5 sacks, 7 interceptions, and 5 forced fumbles.</p>
            
            <p>The scout continued: "You put on the tape and he's just flying around. The play recognition, the closing speed, the ability to finish tackles - it's all there. And then you meet the kid and he's just as impressive. High character, great work ethic."</p>
            
            <p>Reese is currently projected as a top-5 pick, with the Cleveland Browns at No. 6 and North Dakota State Commanders at No. 7 both reportedly very interested.</p>
            
            <p>"If he falls past five, someone's getting a steal," the scout concluded.</p>
        `,
        date: '2026-02-05',
        author: 'Nick B.',
        authorAvatar: 'NB',
        readTime: 4,
        views: 11200,
        likes: 198,
        comments: 78,
        featured: false,
        featuredImage: 'images/players/arvell-reese.jpg',
        tags: ['Reese', 'LB', 'Ohio State', 'Scout Quotes', 'Rumors'],
        trending: 2,
        related: [2, 3, 9]
    },
    {
        id: 8,
        type: 'news',
        title: 'Big Board Update: Top 100 Prospects Post-Combine',
        excerpt: 'Our comprehensive ranking of the top 100 prospects in the 2026 NFL Draft after the combine.',
        content: `
            <p>The NFL Combine is in the books, and draft boards across the league are being updated. Here's our comprehensive ranking of the top 100 prospects in the 2026 NFL Draft:</p>
            
            <p><strong>Top 10:</strong></p>
            <p>1. Fernando Mendoza, QB, Indiana<br>
            2. Arvell Reese, LB, Ohio State<br>
            3. Francis Mauigoa, OT, Miami<br>
            4. Rueben Bain Jr., EDGE, Miami<br>
            5. Carnell Tate, WR, Ohio State<br>
            6. Peter Woods, DL, Clemson<br>
            7. Jermod McCoy, CB, Tennessee<br>
            8. Trinidad Chambliss, QB, Ole Miss<br>
            9. Ty Simpson, QB, Alabama<br>
            10. Jeremiyah Love, RB, Notre Dame</p>
            
            <p><strong>Risers:</strong></p>
            <p>• Jeremiyah Love (RB, Notre Dame) - Up 12 spots after pro day<br>
            • David Bailey (EDGE, Texas Tech) - Up 8 spots after 4.58 40<br>
            • Carson Schwesinger (LB, UCLA) - Up 15 spots after impressive Combine</p>
            
            <p><strong>Fallers:</strong></p>
            <p>• Drew Allar (QB, Penn State) - Down 5 spots due to arm concerns<br>
            • Kayden McDonald (DL, Ohio State) - Down 7 spots after slow 40</p>
            
            <p>See the full top 100 rankings on our Big Board page.</p>
        `,
        date: '2026-02-05',
        author: 'Staff Writer',
        authorAvatar: 'SW',
        readTime: 15,
        views: 21500,
        likes: 567,
        comments: 189,
        featured: true,
        featuredImage: 'images/players/placeholder.jpg',
        tags: ['Big Board', 'Top 100', 'Rankings', 'Combine'],
        trending: 1,
        related: [1, 2, 5]
    },
    {
        id: 9,
        type: 'opinion',
        title: 'Why the Raiders Must Take Mendoza at No. 1',
        excerpt: 'An opinion piece on why Las Vegas cannot afford to pass on the Heisman winner with the first overall pick.',
        content: `
            <p>The Las Vegas Raiders have the first overall pick in the 2026 NFL Draft for the first time in franchise history. With new GM John Spytek at the helm, the pressure is on to get this pick right. And there's only one right answer: Fernando Mendoza.</p>
            
            <p>Let's be clear about something - the Raiders' quarterback room is arguably the worst in football. They don't have a single player under contract who should be starting in the NFL next season. That's not hyperbole; that's fact.</p>
            
            <p>Mendoza isn't just the best quarterback in this class; he's one of the best prospects to come out in the last decade. His 72.3% completion percentage is the highest ever for a Heisman winner. His 41 touchdown passes led the nation. His leadership transformed a program that had never won a Big Ten title into a playoff team.</p>
            
            <p>"But what if they trade down?" I hear you asking. Sure, they could do that. But here's the thing - there isn't a quarterback-needy team behind them that wouldn't take Mendoza. The Jets at 2? They need a QB. The Browns at 6? Desperate for one. If the Raiders trade down, they're trading out of the chance to get a franchise quarterback.</p>
            
            <p>The Raiders have taken exactly one quarterback in the first round in the last 35 years. That was JaMarcus Russell. The franchise has been haunted by that pick ever since, to the point where they've been gun-shy about drafting quarterbacks high.</p>
            
            <p>That ends now. Take Mendoza. Build around him. Change the trajectory of the franchise.</p>
        `,
        date: '2026-02-04',
        author: 'Nick B.',
        authorAvatar: 'NB',
        readTime: 6,
        views: 14500,
        likes: 389,
        comments: 234,
        featured: false,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Mendoza', 'Raiders', 'Opinion', 'No. 1 Pick', 'QB'],
        trending: 3,
        related: [1, 5, 8]
    },
    {
        id: 10,
        type: 'video',
        title: 'Film Room: Breaking Down Rueben Bain Jr.\'s Tape',
        excerpt: 'Scouting report and film analysis of Miami edge rusher Rueben Bain Jr., projected top-10 pick.',
        content: `
            <p>In the latest edition of our Film Room series, we break down Miami edge rusher Rueben Bain Jr., one of the most productive pass rushers in college football last season.</p>
            
            <p>Bain recorded 11.5 sacks and 18.5 tackles for loss in 2025, earning First-Team All-ACC honors. But what makes him a potential top-10 pick?</p>
            
            <p><strong>The Good:</strong></p>
            <p>Bain's first-step quickness is elite. He consistently beats offensive tackles off the snap, forcing them into recovery mode immediately. His bend around the edge is impressive for a player his size (6'3", 275 lbs).</p>
            
            <p>"He's got that natural leverage that you can't teach," said one AFC defensive line coach. "Low hips, great ankle flexibility. He can turn the corner at full speed."</p>
            
            <p>Bain's hand-fighting has improved significantly over his college career. He uses a variety of moves - the chop-rip, the spin, the long-arm - and sets them up well throughout games.</p>
            
            <p><strong>Areas for Improvement:</strong></p>
            <p>Bain can be inconsistent against the run. He sometimes gets too far upfield and creates running lanes. He'll need to add strength at the next level - some NFL offensive tackles will be able to overwhelm him initially.</p>
            
            <p><strong>Projection:</strong></p>
            <p>Bain projects as a starting 4-3 defensive end or 3-4 outside linebacker. He has the athleticism to drop into coverage occasionally but will make his money rushing the passer.</p>
            
            <p>Current projection: Top 10 pick.</p>
        `,
        date: '2026-02-03',
        author: 'Film Room Staff',
        authorAvatar: 'FR',
        readTime: 7,
        views: 8650,
        likes: 178,
        comments: 45,
        featured: false,
        featuredImage: 'images/players/rueben-bain-jr.jpg',
        tags: ['Bain', 'EDGE', 'Miami', 'Film Room', 'Video'],
        trending: 6,
        related: [2, 7, 4]
    }
];

// Expert Predictions Data
const expertPicks = [
    {
        name: 'Mel Kiper Jr.',
        initials: 'MK',
        prediction: 'Mendoza goes #1 to Raiders',
        confidence: 95
    },
    {
        name: 'Todd McShay',
        initials: 'TM',
        prediction: 'Reese lands in top 5',
        confidence: 90
    },
    {
        name: 'Daniel Jeremiah',
        initials: 'DJ',
        prediction: 'Love is first RB taken',
        confidence: 85
    },
    {
        name: 'Peter Schrager',
        initials: 'PS',
        prediction: '4 QBs in first round',
        confidence: 80
    }
];

// Hot Takes Data
const hotTakes = [
    {
        text: "Fernando Mendoza will be a Pro Bowler in his rookie year. The Raiders are getting a franchise-changer.",
        author: "Nick B."
    },
    {
        text: "Arvell Reese is the best defensive prospect I've evaluated in 15 years of scouting. He's special.",
        author: "Anonymous NFC Scout"
    },
    {
        text: "If the Jets don't take a QB at #2, their GM should be fired on the spot.",
        author: "Draft Twitter"
    },
    {
        text: "Jeremiyah Love will have a better NFL career than Bijan Robinson. Book it.",
        author: "College Football Analyst"
    }
];

// Trending Articles (sorted by views)
const getTrendingArticles = () => {
    return [...articles].sort((a, b) => b.views - a.views).slice(0, 5);
};

// Get Article by ID
const getArticleById = (id) => {
    return articles.find(article => article.id === id);
};

// Get Articles by Type
const getArticlesByType = (type) => {
    if (type === 'all') return articles;
    return articles.filter(article => article.type === type);
};

// Get Featured Articles
const getFeaturedArticles = () => {
    return articles.filter(article => article.featured);
};

// Search Articles
const searchArticles = (query) => {
    const lowerQuery = query.toLowerCase();
    return articles.filter(article => 
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
};

// Format Date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

// Format Number
const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
};

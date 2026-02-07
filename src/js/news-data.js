// ==========================================
// NFL Draft Central - News Data
// Real news and analysis based on actual events
// ==========================================

const articles = [
    {
        id: 1,
        type: 'news',
        title: 'Top 2026 NFL Draft Prospects Officially Declare',
        excerpt: 'The deadline for underclassmen to declare for the 2026 NFL Draft has passed. Top prospects including Fernando Mendoza, Arvell Reese, and Jeremiyah Love headline the class.',
        content: `
            <p>The 2026 NFL Draft is beginning to take shape as the declaration deadline has passed. Underclassmen had until January 15, 2026 to declare for the draft and forfeit their remaining college eligibility.</p>
            
            <p>Headlining the class is Indiana quarterback Fernando Mendoza, who led the Hoosiers to a remarkable season and Big Ten Championship appearance. Mendoza threw for over 3,800 yards with 30+ touchdowns and emerged as the consensus QB1 in this draft class.</p>
            
            <p>Other notable declarations include:</p>
            <ul>
                <li><strong>Arvell Reese (LB, Ohio State)</strong> - The Butkus Award finalist brings elite athleticism and production from the nation's top defense.</li>
                <li><strong>Jeremiyah Love (RB, Notre Dame)</strong> - Explosive runner with home run ability who helped lead the Irish to the CFP.</li>
                <li><strong>Carnell Tate (WR, Ohio State)</strong> - Big-bodied receiver who emerged as the Buckeyes' top target.</li>
                <li><strong>Caleb Downs (S, Ohio State)</strong> - Former Alabama five-star who made an immediate impact in Columbus.</li>
            </ul>
            
            <p>The NFL Scouting Combine will take place February 26 - March 3 in Indianapolis, where these prospects will undergo measurements, athletic testing, and team interviews.</p>
        `,
        date: '2026-01-20',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 4,
        views: 12420,
        likes: 342,
        comments: 89,
        featured: true,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['NFL Draft', 'Declarations', 'Mendoza', 'Top Prospects'],
        trending: 1,
        related: [2, 3, 5]
    },
    {
        id: 2,
        type: 'analysis',
        title: '2026 NFL Draft Class Overview: Strengths and Weaknesses',
        excerpt: 'Breaking down the positional groups in the 2026 draft class. Quarterbacks and edge rushers headline a talented group, while offensive tackle depth remains a concern.',
        content: `
            <p>The 2026 NFL Draft class is shaping up with several strong positional groups and some areas of concern for teams looking to fill needs.</p>
            
            <h3>Strengths</h3>
            
            <p><strong>Quarterback:</strong> Fernando Mendoza leads a solid group that includes Ty Simpson (Alabama), Drew Allar (Penn State), and Carson Beck (Miami via Georgia). Mendoza's rise at Indiana has given this class a clear QB1 with high character and processing ability.</p>
            
            <p><strong>Edge Rushers:</strong> This class is loaded with pass rushing talent. Rueben Bain Jr. (Miami, ACC DPOY), David Bailey (Texas Tech), and Akheem Mesidor (Miami) headline a deep group that could see 5+ players selected in Round 1.</p>
            
            <p><strong>Running Back:</strong> After several down years, the 2026 RB class looks revitalized. Jeremiyah Love (Notre Dame), Kaleb Johnson (Iowa), and Omarion Hampton (North Carolina) all bring different skill sets and could hear their names called early.</p>
            
            <p><strong>Safety:</strong> Caleb Downs (Ohio State) leads a talented group of defensive backs with versatility to play multiple spots. Malaki Starks (Georgia) and Dillon Thieneman (Oregon) provide quality depth.</p>
            
            <h3>Weaknesses</h3>
            
            <p><strong>Offensive Tackle:</strong> The 2026 class lacks the blue-chip tackle prospects seen in recent years. Francis Mauigoa (Miami) and Spencer Fano (Utah) are the top options, but neither is a sure-fire top-10 pick at this point.</p>
            
            <p><strong>Interior Offensive Line:</strong> Beyond Olaivavega Ioane (Penn State) and a few others, this is not a deep IOL class.</p>
            
            <p><strong>Tight End:</strong> While Mason Taylor (LSU) and Colston Loveland (Michigan) are solid prospects, this class lacks the elite top-end talent at the position.</p>
        `,
        date: '2026-01-25',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 8,
        views: 9350,
        likes: 287,
        comments: 67,
        featured: true,
        featuredImage: 'images/players/arvell-reese.jpg',
        tags: ['Analysis', 'Draft Class', 'Position Rankings', 'Overview'],
        trending: 2,
        related: [1, 4, 8]
    },
    {
        id: 3,
        type: 'rumors',
        title: 'NFL Combine Invite List Released: Who\'s In and Who\'s Out?',
        excerpt: 'The full list of 329 prospects invited to the 2026 NFL Scouting Combine in Indianapolis has been announced. Notable snubs include several productive Group of Five players.',
        content: `
            <p>The NFL has officially released the list of 329 prospects invited to the 2026 NFL Scouting Combine, taking place February 26 - March 3 at Lucas Oil Stadium in Indianapolis.</p>
            
            <p>All the top prospects are in attendance, including projected top picks Fernando Mendoza, Arvell Reese, Jeremiyah Love, and Carnell Tate. The combine provides an opportunity for players to undergo medical evaluations, measurements, athletic testing, and team interviews.</p>
            
            <h3>Notable Invitees</h3>
            <ul>
                <li><strong>Fernando Mendoza (QB, Indiana)</strong> - Expected to measure at 6'5", 225 lbs and will participate in all drills except 40-yard dash (will throw at Pro Day).</li>
                <li><strong>David Bailey (EDGE, Texas Tech)</strong> - Small school standout who needs to prove he has the size (6'3", 250) and athleticism for the NFL.</li>
                <li><strong>Jordyn Tyson (WR, Arizona State)</strong> - Coming off injury, needs to show he's fully healthy.</li>
                <li><strong>CJ Allen (LB, Georgia)</strong> - Productive but undersized - weight and arm length will be critical.</li>
            </ul>
            
            <h3>Notable Snubs</h3>
            <p>Several productive players did not receive invites and will need to rely on Pro Day performances:</p>
            <ul>
                <li>Multiple FCS quarterbacks with draftable grades</li>
                <li>Several Group of Five running backs despite 1,000-yard seasons</li>
                <li>A handful of small school offensive linemen</li>
            </ul>
            
            <p>Players without combine invites will need elite Pro Day performances to get drafted, but many will still sign as priority undrafted free agents.</p>
        `,
        date: '2026-02-01',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 5,
        views: 8920,
        likes: 156,
        comments: 43,
        featured: false,
        featuredImage: 'images/players/jeremiyah-love.jpg',
        tags: ['Combine', 'Invites', 'NFL', 'Indianapolis'],
        trending: 3,
        related: [2, 6, 10]
    },
    {
        id: 4,
        type: 'analysis',
        title: 'QB Battle: How Do the Top Quarterbacks Stack Up?',
        excerpt: 'A detailed breakdown of the top quarterback prospects in the 2026 draft class, comparing Fernando Mendoza, Ty Simpson, Drew Allar, and Carson Beck.',
        content: `
            <p>The 2026 quarterback class has a clear leader in Fernando Mendoza, but the battle for QB2 and beyond remains wide open. Let's break down the top four signal-callers:</p>
            
            <h3>Fernando Mendoza, Indiana</h3>
            <p><strong>Strengths:</strong> Elite accuracy, quick release, excellent decision-making, leadership intangibles<br>
            <strong>Concerns:</strong> Limited ceiling as a runner, only one year of elite production<br>
            <strong>Projection:</strong> Top 3 pick, ready to start Year 1</p>
            
            <h3>Ty Simpson, Alabama</h3>
            <p><strong>Strengths:</strong> Big arm, NFL-caliber size, mobility in pocket, played in pro-style offense<br>
            <strong>Concerns:</strong> Inconsistent accuracy, turnover-prone at times, benefited from loaded roster<br>
            <strong>Projection:</strong> Late 1st / Early 2nd, needs development time</p>
            
            <h3>Drew Allar, Penn State</h3>
            <p><strong>Strengths:</strong> Prototypical size (6'5", 235), big arm, tough in pocket, high character<br>
            <strong>Concerns:</strong> Limited mobility, inconsistent against top competition<br>
            <strong>Projection:</strong> Late 1st / Early 2nd, developmental starter</p>
            
            <h3>Carson Beck, Miami (via Georgia)</h3>
            <p><strong>Strengths:</strong> Size, experience, accuracy on short/intermediate throws<br>
            <strong>Concerns:</strong> Arm strength questions, struggled with deep ball, transferred after losing job<br>
            <strong>Projection:</strong> Day 2 pick, backup/spot starter ceiling</p>
            
            <p><strong>The Verdict:</strong> Mendoza is the clear QB1 with the best combination of floor and ceiling. Simpson and Allar are competing for QB2 honors and will need strong pre-draft processes to solidify Round 1 grades.</p>
        `,
        date: '2026-02-03',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 10,
        views: 11200,
        likes: 412,
        comments: 156,
        featured: true,
        featuredImage: 'images/players/ty-simpson.jpg',
        tags: ['Quarterbacks', 'Mendoza', 'Simpson', 'Allar', 'Position Battle'],
        trending: 4,
        related: [1, 5, 9]
    },
    {
        id: 5,
        type: 'news',
        title: 'Senior Bowl Week: Standouts from Mobile',
        excerpt: 'The 2026 Reese\'s Senior Bowl wrapped up with several prospects boosting their stock. Here are the biggest winners from the week of practice and the game.',
        content: `
            <p>The 2026 Reese's Senior Bowl in Mobile, Alabama has concluded, providing NFL scouts and coaches with an up-close look at some of the top senior prospects in the draft class. While underclassmen did not participate, several seniors made significant money this week.</p>
            
            <h3>Risers</h3>
            
            <p><strong>Denzel Boston (WR, North Dakota State)</strong> - The FCS product dominated one-on-one drills all week, showing he can compete with FBS talent. Measured at 6'4" with 33-inch arms and ran crisp routes. Could be a Day 2 pick now.</p>
            
            <p><strong>David Bailey (EDGE, Texas Tech)</strong> - Already trending up, Bailey showed elite burst off the edge in pass-rush drills. His first-step quickness was among the best in Mobile.</p>
            
            <p><strong>Olaivavega Ioane (IOL, Penn State)</strong> - Dominated in one-on-ones with his power and anchor. Showed better footwork than expected. Solidified himself as the top interior lineman in this class.</p>
            
            <h3>Solidifying Stock</h3>
            
            <p><strong>Mason Taylor (TE, LSU)</strong> - Didn't wow, but showed he's a complete tight end who can block and catch. Safe Day 2 pick.</p>
            
            <p><strong>Kaleb Johnson (RB, Iowa)</strong> - Physical runner who looked the part. Limited in passing game work but showed well in team drills.</p>
            
            <h3>Fallers</h3>
            
            <p><strong>Multiple Senior Bowl QBs</strong> - The quarterback group struggled throughout the week, with several players showing accuracy issues and slow processing. None helped their stock significantly.</p>
            
            <p>The Senior Bowl is now complete, and attention turns to the NFL Combine beginning February 26 in Indianapolis.</p>
        `,
        date: '2026-02-05',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 6,
        views: 7840,
        likes: 198,
        comments: 52,
        featured: false,
        featuredImage: 'images/players/denzel-boston.jpg',
        tags: ['Senior Bowl', 'Risers', 'Fallers', 'Mobile', 'All-Star'],
        trending: 5,
        related: [2, 4, 8]
    },
    {
        id: 6,
        type: 'analysis',
        title: 'Linebacker Class Deep Dive: Ohio State Trio Leads the Way',
        excerpt: 'Arvell Reese, Sonny Styles, and CJ Allen headline one of the best linebacker classes in recent years. Plus analysis of the rest of the position group.',
        content: `
            <p>The 2026 linebacker class is led by a trio of Buckeyes, but there's talent throughout the group. Let's break down the top prospects:</p>
            
            <h3>Tier 1: Elite Prospects</h3>
            
            <p><strong>Arvell Reese (Ohio State)</strong> - The complete package. At 6'4", 243 lbs, Reese has the size to take on blocks and the speed (projected 4.55 forty) to run sideline to sideline. He's a three-down player who can rush the passer, cover tight ends, and defend the run. Potential top-5 pick.</p>
            
            <p><strong>Sonny Styles (Ohio State)</strong> - Slightly less production than Reese but similar athletic traits. Styles played multiple positions in college and offers scheme versatility. Projects as a Will linebacker in a 4-3 or ILB in a 3-4.</p>
            
            <h3>Tier 2: Quality Starters</h3>
            
            <p><strong>CJ Allen (Georgia)</strong> - Smaller at 6'1", 235 lbs, but instinctive and productive. High football IQ and tackling machine. Ceiling limited by size/speed but should be a solid NFL starter.</p>
            
            <p><strong>Carson Schwesinger (UCLA)</strong> - Walk-on turned star, Schwesinger led the Pac-12 in tackles. High motor and great character, but athletic testing will be critical for his draft slot.</p>
            
            <h3>Tier 3: Developmental Prospects</h3>
            
            <p>Several other linebackers will compete for Day 3 draft slots and special teams roles, including players from Clemson, Alabama, and Florida State.</p>
            
            <p><strong>Bottom Line:</strong> This is a strong linebacker class at the top. Reese is a special prospect, and Styles isn't far behind. Expect both to be off the board in the top 20 picks.</p>
        `,
        date: '2026-02-02',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 7,
        views: 6230,
        likes: 145,
        comments: 38,
        featured: false,
        featuredImage: 'images/players/sonny-styles.jpg',
        tags: ['Linebackers', 'Reese', 'Styles', 'Allen', 'Ohio State'],
        trending: 6,
        related: [1, 3, 9]
    },
    {
        id: 7,
        type: 'news',
        title: '2026 NFL Draft Order Set: Raiders Hold First Overall Pick',
        excerpt: 'The Las Vegas Raiders officially hold the first overall pick in the 2026 NFL Draft after finishing with the league\'s worst record. Here is the complete Round 1 order.',
        content: `
            <p>The 2026 NFL Draft order is officially set. The Las Vegas Raiders (2-15) hold the first overall pick, while the Super Bowl champion Buffalo Bills will pick last in Round 1.</p>
            
            <h3>Top 10 Draft Order</h3>
            <ol>
                <li>Las Vegas Raiders (2-15)</li>
                <li>New York Jets (3-14)</li>
                <li>Carolina Panthers (4-13)</li>
                <li>Jacksonville Jaguars (4-13)</li>
                <li>Cleveland Browns (5-12)</li>
                <li>New York Giants (5-12)</li>
                <li>Tennessee Titans (6-11)</li>
                <li>New Orleans Saints (7-10)</li>
                <li>Chicago Bears (8-9)</li>
                <li>New England Patriots (8-9)</li>
            </ol>
            
            <h3>Raiders Situation</h3>
            <p>The Raiders are in position to select their quarterback of the future. With Gardner Minshew entering free agency and the team needing a franchise signal-caller, all eyes are on Fernando Mendoza as the likely first overall selection.</p>
            
            <h3>Other Notable Picks</h3>
            <ul>
                <li>The Dallas Cowboys pick 21st after their early playoff exit.</li>
                <li>The Kansas City Chiefs pick 29th after reaching the divisional round.</li>
                <li>The Detroit Lions and Philadelphia Eagles hold picks in the mid-20s.</li>
            </ul>
            
            <p>The draft will take place April 23-25, 2026 in Pittsburgh, Pennsylvania.</p>
        `,
        date: '2026-01-28',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 4,
        views: 14500,
        likes: 234,
        comments: 89,
        featured: false,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Draft Order', 'Raiders', 'First Pick', 'NFL'],
        trending: 7,
        related: [1, 4, 8]
    },
    {
        id: 8,
        type: 'analysis',
        title: 'Edge Rushers: Is This the Best Class in Years?',
        excerpt: 'Rueben Bain Jr., David Bailey, and a deep group of pass rushers make the 2026 edge class one of the most talented in recent memory.',
        content: `
            <p>The 2026 NFL Draft features one of the deepest and most talented edge rusher classes in recent memory. Multiple prospects have legitimate first-round grades, and the depth extends well into Day 2.</p>
            
            <h3>Tier 1: First Round Talents</h3>
            
            <p><strong>Rueben Bain Jr. (Miami)</strong> - ACC Defensive Player of the Year. Powerful hands, relentless motor, and scheme versatility. Projects as a 4-3 DE or 3-4 OLB. Three-down player.</p>
            
            <p><strong>David Bailey (Texas Tech)</strong> - Explosive get-off and elite bend around the edge. Smaller school competition raises questions, but Senior Bowl performance answered many concerns.</p>
            
            <p><strong>Akheem Mesidor (Miami)</strong> - Power rusher with inside/outside versatility. Not as explosive as Bailey but more consistent against the run.</p>
            
            <p><strong>Keldric Faulk (Auburn)</strong> - Length and strength are elite. Raw technically but has the tools NFL teams covet.</p>
            
            <h3>Tier 2: Day 2 Developmental Prospects</h3>
            
            <p>Several other edge rushers project as Day 2 picks with starter potential:</p>
            <ul>
                <li>James Pearce Jr. (Tennessee) - Former five-star with elite traits</li>
                <li>Mykel Williams (Georgia) - Athletic but needs refinement</li>
                <li>Shemar Stewart (Texas A&M) - Length and power, limited production</li>
            </ul>
            
            <p><strong>Bottom Line:</strong> Teams needing pass rush help are in luck. This class has 4+ players with Round 1 grades and quality depth through Round 3.</p>
        `,
        date: '2026-02-04',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 8,
        views: 8340,
        likes: 278,
        comments: 67,
        featured: false,
        featuredImage: 'images/players/rueben-bain.jpg',
        tags: ['Edge Rushers', 'Bain', 'Bailey', 'Pass Rush', 'Defense'],
        trending: 8,
        related: [2, 5, 10]
    },
    {
        id: 9,
        type: 'analysis',
        title: 'Wide Receiver Breakdown: Tate vs Tyson vs Lemon',
        excerpt: 'Carnell Tate, Jordyn Tyson, and Makai Lemon are competing to be the first wide receiver off the board. Here\'s how they compare.',
        content: `
            <p>The race for WR1 in the 2026 draft class is wide open. Three distinct prospects offer different skill sets for NFL teams:</p>
            
            <h3>Carnell Tate, Ohio State</h3>
            <p><strong>Profile:</strong> 6'3", 195 lbs - Big outside receiver<br>
            <strong>Strengths:</strong> Contested catch ability, size, red zone threat, body control<br>
            <strong>Concerns:</strong> Separation quickness, top-end speed<br>
            <strong>Comp:</strong> Michael Thomas</p>
            
            <p>Tate emerged as Ohio State's top target and proved he could handle CB1 attention. His size and catch radius make him a perfect X receiver in the NFL.</p>
            
            <h3>Jordyn Tyson, Arizona State</h3>
            <p><strong>Profile:</strong> 6'2", 200 lbs - Balanced receiver<br>
            <strong>Strengths:</strong> Route running, hands, middle of field target<br>
            <strong>Concerns:</strong> Injury history, limited ceiling<br>
            <strong>Comp:</strong> DeAndre Hopkins</p>
            
            <p>Tyson is the safest of the top three. He's not as explosive as Lemon or as big as Tate, but he's a technician who wins with nuance.</p>
            
            <h3>Makai Lemon, USC</h3>
            <p><strong>Profile:</strong> 5'11", 190 lbs - Slot/YAC weapon<br>
            <strong>Strengths:</strong> Quickness, route running, YAC ability, return skills<br>
            <strong>Concerns:</strong> Size, contested catches, outside alignment<br>
            <strong>Comp:</strong> Amon-Ra St. Brown</p>
            
            <p>Lemon is a perfect modern slot receiver. His quickness and ability to create separation make him a quarterback's best friend on third downs.</p>
            
            <p><strong>The Verdict:</strong> Tate likely goes first due to size/scarcity, but all three should be Round 1 picks.</p>
        `,
        date: '2026-02-03',
        author: 'Draft Analyst',
        authorAvatar: 'DA',
        readTime: 7,
        views: 7120,
        likes: 189,
        comments: 56,
        featured: false,
        featuredImage: 'images/players/carnell-tate.jpg',
        tags: ['Wide Receivers', 'Tate', 'Tyson', 'Lemon', 'Position Battle'],
        trending: 9,
        related: [1, 4, 6]
    },
    {
        id: 10,
        type: 'news',
        title: 'NFL Combine Preview: What to Watch in Indianapolis',
        excerpt: 'The 2026 NFL Combine begins February 26. Here are the key storylines, measurements to monitor, and which prospects have the most at stake.',
        content: `
            <p>The 2026 NFL Scouting Combine kicks off February 26 in Indianapolis. Over the course of four days, 329 prospects will undergo medical evaluations, measurements, athletic testing, and interviews with all 32 NFL teams.</p>
            
            <h3>Key Storylines</h3>
            
            <p><strong>Fernando Mendoza's Measurements</strong> - The presumptive QB1 will be poked and prodded by medical staff. Teams want to see if his 6'5" listing holds up and if he has the frame to handle NFL punishment.</p>
            
            <p><strong>David Bailey's Size vs Speed</strong> - The Texas Tech edge rusher has been a riser all season. Teams need to see if he has the size (6'3", 250+) to hold up against the run while maintaining his explosive get-off.</p>
            
            <p><strong>Jeremiyah Love's Athleticism</strong> - The Notre Dame running back has home run speed on tape but needs to confirm it with a sub-4.45 forty to cement his status as the RB1.</p>
            
            <p><strong>Offensive Tackle Arm Length</strong> - Francis Mauigoa and Spencer Fano both need to measure with 33+ inch arms to prove they can play left tackle. Anything under 33 inches pushes them inside or to the right side.</p>
            
            <h3>Testing Schedule</h3>
            <ul>
                <li><strong>Thursday, Feb 27:</strong> QB, WR, TE (measurements and drills)</li>
                <li><strong>Friday, Feb 28:</strong> RB, OL (measurements and drills)</li>
                <li><strong>Saturday, Mar 1:</strong> DL, LB (measurements and drills)</li>
                <li><strong>Sunday, Mar 2:</strong> DB (measurements and drills)</li>
            </ul>
            
            <p>Results will be updated on this site as they become available.</p>
        `,
        date: '2026-02-05',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 5,
        views: 9520,
        likes: 267,
        comments: 78,
        featured: true,
        featuredImage: 'images/players/david-bailey.jpg',
        tags: ['Combine', 'Preview', 'Indianapolis', 'Testing'],
        trending: 10,
        related: [3, 5, 8]
    }
];

// Helper functions
const NewsData = {
    getAll: function() {
        return articles;
    },
    
    getFeatured: function() {
        return articles.filter(a => a.featured);
    },
    
    getTrending: function(limit = 5) {
        return articles
            .sort((a, b) => a.trending - b.trending)
            .slice(0, limit);
    },
    
    getByType: function(type) {
        return articles.filter(a => a.type === type);
    },
    
    getByTag: function(tag) {
        return articles.filter(a => a.tags.includes(tag));
    },
    
    getById: function(id) {
        return articles.find(a => a.id === id);
    },
    
    getRelated: function(id) {
        const article = this.getById(id);
        if (!article) return [];
        return article.related.map(rid => this.getById(rid)).filter(Boolean);
    },
    
    search: function(query) {
        const lower = query.toLowerCase();
        return articles.filter(a => 
            a.title.toLowerCase().includes(lower) ||
            a.excerpt.toLowerCase().includes(lower) ||
            a.tags.some(t => t.toLowerCase().includes(lower))
        );
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewsData;
}

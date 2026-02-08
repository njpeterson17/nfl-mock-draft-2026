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
            
            <p><strong>Safety:</strong> Caleb Downs (Ohio State) leads a talented group of defensive backs with versatility to play multiple spots. Emmanuel McNeil-Warren (Toledo) and Dillon Thieneman (Oregon) provide quality depth.</p>
            
            <h3>Weaknesses</h3>
            
            <p><strong>Offensive Tackle:</strong> The 2026 class lacks the blue-chip tackle prospects seen in recent years. Francis Mauigoa (Miami) and Spencer Fano (Utah) are the top options, but neither is a sure-fire top-10 pick at this point.</p>
            
            <p><strong>Interior Offensive Line:</strong> Beyond Olaivavega Ioane (Penn State) and a few others, this is not a deep IOL class.</p>
            
            <p><strong>Tight End:</strong> While Mason Taylor (LSU) and Terrance Ferguson (Oregon) are solid prospects, this class lacks the elite top-end talent at the position.</p>
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
    },
    {
        id: 11,
        type: 'news',
        title: 'BREAKING: Fernando Mendoza Measures 6\'4.5", 228 lbs at Combine',
        excerpt: 'Indiana QB Fernando Mendoza\'s official combine measurements are in. The projected top pick checked in slightly under his listed height but with ideal weight and hand size.',
        content: `
            <p>Breaking news from Indianapolis: Fernando Mendoza's official NFL Combine measurements have been released, and the Indiana quarterback checked in at 6'4.5" and 228 pounds with 9.75-inch hands.</p>

            <h3>Full Measurements</h3>
            <ul>
                <li><strong>Height:</strong> 6'4.5" (listed at 6'5" at Indiana)</li>
                <li><strong>Weight:</strong> 228 lbs (up from 225 at season's end)</li>
                <li><strong>Hand Size:</strong> 9.75 inches (above average for QB)</li>
                <li><strong>Arm Length:</strong> 32.25 inches (ideal for QB)</li>
                <li><strong>Wingspan:</strong> 78 inches</li>
            </ul>

            <p><strong>What It Means:</strong> While Mendoza came in a half-inch shorter than his college listing, scouts are thrilled with the overall measurements. His 9.75-inch hands are well above the 9-inch threshold teams prefer, and his arm length is perfect for a pocket passer.</p>

            <p>"Fernando has ideal measurables for a modern NFL quarterback," said one NFC scout at the combine. "The height is still excellent, the hands are big enough to handle wet weather and control the ball, and he's added good weight without losing his athleticism."</p>

            <h3>Throwing Session</h3>
            <p>Mendoza will not participate in the 40-yard dash or on-field drills, instead saving his throwing session for Indiana's Pro Day on March 18. This is standard practice for top quarterback prospects who want to throw to their own receivers in a familiar setting.</p>

            <p>The Las Vegas Raiders, New York Jets, and Carolina Panthers are all expected to attend Mendoza's Pro Day with their full offensive staffs.</p>

            <h3>Medical Cleared</h3>
            <p>Perhaps most importantly, Mendoza passed all medical evaluations with flying colors. He has no injury history beyond minor bumps and bruises, which makes him one of the cleanest medical prospects in the class.</p>

            <p>Mendoza remains the consensus No. 1 pick to the Raiders in most mock drafts.</p>
        `,
        date: '2026-02-27',
        author: 'Draft Central',
        authorAvatar: 'DC',
        readTime: 5,
        views: 18750,
        likes: 542,
        comments: 167,
        featured: true,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Breaking News', 'Combine', 'Mendoza', 'Measurements', 'Quarterback'],
        trending: 1,
        related: [4, 10, 15]
    },
    {
        id: 12,
        type: 'analysis',
        title: 'Raiders QB Desperate: Why Fernando Mendoza is the Perfect Fit',
        excerpt: 'Las Vegas needs a franchise quarterback, and the No. 1 pick gives them the perfect opportunity. Breaking down why Mendoza is the ideal building block for the Raiders.',
        content: `
            <p>The Las Vegas Raiders have the first overall pick and a glaring need at quarterback. After years of stopgap veterans and failed experiments, they finally have a chance to land their franchise signal-caller in Fernando Mendoza.</p>

            <h3>The Raiders' QB Disaster</h3>
            <p>Since moving to Las Vegas, the Raiders have started Gardner Minshew, Jimmy Garoppolo, Aidan O'Connell, and a rotating cast of backup quarterbacks. None have shown they can be long-term answers. The team went 2-15 in 2025, with quarterback play being the primary culprit.</p>

            <p><strong>2025 QB Statistics:</strong></p>
            <ul>
                <li>32nd in passing yards per game (178.4)</li>
                <li>31st in touchdown passes (14 total)</li>
                <li>30th in interceptions (21 total)</li>
                <li>32nd in third down conversion rate (31.2%)</li>
            </ul>

            <h3>Why Mendoza Fits</h3>

            <p><strong>Leadership & Character:</strong> New Raiders head coach Mike Vrabel has emphasized building a culture of accountability. Mendoza is a team captain, 4.0 student, and respected leader who turned around Indiana's program.</p>

            <p><strong>Scheme Fit:</strong> Offensive coordinator Josh McDaniels (back for his second stint with the Raiders) runs a timing-based, quick-release passing game. Mendoza's accuracy and quick decision-making are perfect for this system.</p>

            <p><strong>Weapons in Place:</strong> The Raiders have Davante Adams (age 33 but still productive), young tight end Michael Mayer, and burner Tre Tucker. Mendoza can succeed immediately with these targets.</p>

            <p><strong>Ready to Start:</strong> Unlike developmental prospects like Ty Simpson or Drew Allar, Mendoza is NFL-ready. The Raiders can't afford another lost season - they need to win now to keep Davante Adams and Maxx Crosby happy.</p>

            <h3>The Verdict</h3>
            <p>Barring a shocking trade, Fernando Mendoza will be a Las Vegas Raider on April 24. The fit is too perfect, the need too dire, and the talent too obvious to pass up. The Raiders' decade-long search for a franchise QB is about to end.</p>

            <p><strong>Prediction:</strong> Mendoza starts Week 1, throws for 3,800+ yards and 25 TDs, and leads the Raiders to 9+ wins in his rookie season.</p>
        `,
        date: '2026-02-06',
        author: 'Team Needs Analyst',
        authorAvatar: 'TN',
        readTime: 9,
        views: 13420,
        likes: 487,
        comments: 203,
        featured: true,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Raiders', 'Team Needs', 'Mendoza', 'Quarterback', 'Analysis'],
        trending: 2,
        related: [7, 11, 18]
    },
    {
        id: 13,
        type: 'analysis',
        title: 'Jets Offensive Line Crisis: Must Address at Pick #2',
        excerpt: 'The New York Jets have the NFL\'s worst offensive line and the 2nd overall pick. Can they find a franchise tackle in a weak OL class?',
        content: `
            <p>The New York Jets finished 3-14 in 2025, and their offensive line was a primary reason why. With the second overall pick, they have a chance to start rebuilding in the trenches - but the 2026 class doesn't have elite tackle prospects.</p>

            <h3>The Jets' OL Nightmare</h3>
            <p>Aaron Rodgers was sacked 58 times in 2025, the most in the NFL. The Jets allowed pressure on 42% of dropbacks, worst in the league. Young running back Breece Hall averaged just 3.2 yards per carry behind this unit.</p>

            <p><strong>Current OL Situation:</strong></p>
            <ul>
                <li><strong>LT:</strong> Mekhi Becton (injured/underperforming) - needs replacement</li>
                <li><strong>LG:</strong> Free agent</li>
                <li><strong>C:</strong> Connor McGovern (aging veteran)</li>
                <li><strong>RG:</strong> Alijah Vera-Tucker (solid when healthy)</li>
                <li><strong>RT:</strong> Free agent</li>
            </ul>

            <h3>Draft Options at #2</h3>

            <p><strong>Trade Down:</strong> The most likely scenario. The Jets could trade down with a QB-needy team (Panthers, Jaguars, Browns) and pick up extra picks while still landing a tackle in the 5-10 range.</p>

            <p><strong>Francis Mauigoa (OT, Miami):</strong> The top tackle prospect measured well at the combine (6'5", 326 lbs, 34-inch arms). He's a mauler in the run game but needs work in pass protection. Selecting him at #2 would be a reach, but trading down to #4-6 makes sense.</p>

            <p><strong>Arvell Reese (LB, Ohio State):</strong> If the Jets go best player available, Reese is a generational linebacker prospect. But taking a LB at #2 when you can't protect your 41-year-old QB is questionable.</p>

            <p><strong>Free Agency Route:</strong> The Jets could sign a veteran LT in free agency (Jonah Williams, Charles Leno Jr.) and use #2 on an edge rusher, receiver, or trade back.</p>

            <h3>The Recommendation</h3>
            <p>Trade down with Carolina (picks #3 and #39) or Jacksonville (picks #4 and #35). Take Francis Mauigoa in the top 5, then use the extra pick on interior offensive line or edge rusher depth.</p>

            <p>The Jets can't waste Aaron Rodgers' final season with another porous offensive line. This is the year to fix the trenches or blow it up entirely.</p>
        `,
        date: '2026-02-07',
        author: 'Team Needs Analyst',
        authorAvatar: 'TN',
        readTime: 8,
        views: 11230,
        likes: 356,
        comments: 189,
        featured: true,
        featuredImage: 'images/players/francis-mauigoa.jpg',
        tags: ['Jets', 'Team Needs', 'Offensive Line', 'Trade', 'Analysis'],
        trending: 3,
        related: [7, 12, 20]
    },
    {
        id: 14,
        type: 'analysis',
        title: 'WR Class Deep Dive: Why 2026 Could See 7+ First Round Receivers',
        excerpt: 'The 2026 wide receiver class has elite depth. From Carnell Tate to Tetairoa McMillan to Emeka Egbuka, this could be a historic year for pass catchers.',
        content: `
            <p>The 2026 NFL Draft wide receiver class is shaping up to be one of the deepest in recent memory. While there's no clear-cut WR1, the depth through the first two rounds is exceptional.</p>

            <h3>Tier 1: Round 1 Locks</h3>

            <p><strong>Carnell Tate (Ohio State)</strong> - 6'3", 195 lbs - Big-bodied X receiver with contested catch ability. Safe pick for teams needing a red zone threat. <em>Projection: Picks 15-20</em></p>

            <p><strong>Jordyn Tyson (Arizona State)</strong> - 6'2", 200 lbs - Polished route runner with great hands. Limited ceiling but high floor. <em>Projection: Picks 18-25</em></p>

            <p><strong>Makai Lemon (USC)</strong> - 5'11", 190 lbs - Elite slot receiver and YAC specialist. Return skills add value. <em>Projection: Picks 20-28</em></p>

            <p><strong>Tetairoa McMillan (Arizona)</strong> - 6'5", 212 lbs - Massive catch radius and alpha mindset. Needs to improve route running. <em>Projection: Picks 12-18</em></p>

            <p><strong>Emeka Egbuka (Ohio State)</strong> - 6'1", 205 lbs - Do-everything receiver who can play inside/outside. Consistent and reliable. <em>Projection: Picks 22-32</em></p>

            <h3>Tier 2: Late Round 1 / Early Round 2</h3>

            <p><strong>Isaiah Bond (Texas)</strong> - 6'0", 190 lbs - Speed demon who can take the top off defenses. One-trick pony concerns. <em>Projection: Picks 28-40</em></p>

            <p><strong>Kyren Lacy (LSU)</strong> - 6'3", 215 lbs - Physical receiver who wins with strength. Limited separation ability. <em>Projection: Picks 30-45</em></p>

            <p><strong>Denzel Boston (North Dakota State)</strong> - 6'4", 210 lbs - Small school standout who dominated at Senior Bowl. Size and hands stand out. <em>Projection: Picks 35-50</em></p>

            <h3>Why So Much Depth?</h3>

            <p>Several factors have created this loaded class:</p>
            <ul>
                <li>Multiple blue-chip recruits stayed in school through their junior/senior years</li>
                <li>The transfer portal allowed players to showcase skills at bigger programs</li>
                <li>NFL offenses continue emphasizing 3-4 WR sets, increasing demand</li>
                <li>Several teams (Colts, Titans, Saints, Bears) desperately need receiver help</li>
            </ul>

            <h3>Historical Context</h3>
            <p>The 2020 draft saw 6 receivers go in Round 1. The 2004 draft famously had 7 (including Larry Fitzgerald and Roy Williams). The 2026 class could match or exceed these historic numbers.</p>

            <p><strong>Bold Prediction:</strong> 8 wide receivers go in Round 1, with Emeka Egbuka sneaking in at #32 to the Buffalo Bills.</p>
        `,
        date: '2026-02-06',
        author: 'Position Specialist',
        authorAvatar: 'PS',
        readTime: 10,
        views: 9840,
        likes: 412,
        comments: 134,
        featured: false,
        featuredImage: 'images/players/tetairoa-mcmillan.jpg',
        tags: ['Wide Receivers', 'Position Breakdown', 'Draft Class', 'Analysis'],
        trending: 4,
        related: [9, 14, 22]
    },
    {
        id: 15,
        type: 'news',
        title: 'Mel Kiper\'s Latest Mock: Surprises in Top 10',
        excerpt: 'ESPN\'s Mel Kiper Jr. released his post-combine mock draft with several shocking picks, including a QB going #3 to Carolina and a trade in the top 5.',
        content: `
            <p>ESPN draft guru Mel Kiper Jr. has released his latest 2026 NFL Mock Draft following the combine, and it includes several surprise selections that have the draft community buzzing.</p>

            <h3>Mel Kiper's Top 10 (Post-Combine)</h3>
            <ol>
                <li><strong>Las Vegas Raiders:</strong> Fernando Mendoza, QB, Indiana - <em>"No-brainer. Raiders get their franchise QB."</em></li>
                <li><strong>New York Jets (Trade with Panthers):</strong> Francis Mauigoa, OT, Miami - <em>"Jets move up one spot to guarantee their tackle."</em></li>
                <li><strong>Carolina Panthers (from Jets):</strong> Ty Simpson, QB, Alabama - <em>"Shocking, but Panthers love his arm talent."</em></li>
                <li><strong>Jacksonville Jaguars:</strong> Arvell Reese, LB, Ohio State - <em>"Best player available. Future defensive centerpiece."</em></li>
                <li><strong>Cleveland Browns:</strong> Tetairoa McMillan, WR, Arizona - <em>"Deshaun Watson needs a true #1 receiver."</em></li>
                <li><strong>New York Giants:</strong> Rueben Bain Jr., EDGE, Miami - <em>"Giants need pass rush help desperately."</em></li>
                <li><strong>Tennessee Titans:</strong> Jeremiyah Love, RB, Notre Dame - <em>"High pick for RB, but Love is special."</em></li>
                <li><strong>New Orleans Saints:</strong> Carnell Tate, WR, Ohio State - <em>"Saints need weapons for Derek Carr."</em></li>
                <li><strong>Chicago Bears:</strong> David Bailey, EDGE, Texas Tech - <em>"Bears invest in defense again."</em></li>
                <li><strong>New England Patriots:</strong> Drew Allar, QB, Penn State - <em>"Pats draft their QB of the future."</em></li>
            </ol>

            <h3>The Biggest Surprises</h3>

            <p><strong>Panthers Take Simpson at #3:</strong> Most mocks have Carolina trading back or taking a non-QB. Kiper thinks their love for Simpson's arm strength wins out, despite his inconsistency.</p>

            <p><strong>Love in Top 10:</strong> Running backs rarely go this high anymore, but Kiper believes Love's explosive playmaking ability is worth the premium pick for a Titans team desperately needing offense.</p>

            <p><strong>Jets Trade Up:</strong> The Jets moving from #2 to #2 seems silly, but Kiper suggests they give Carolina a 4th round pick to guarantee Mauigoa isn't taken by the Panthers (who need OL too).</p>

            <h3>Reactions</h3>
            <p>The draft community is split on Kiper's mock. Many believe the Panthers won't reach for Simpson when Drew Allar is a better prospect. Others question if Love's talent justifies a top-10 selection in an era where RBs are devalued.</p>

            <p>Kiper defended his picks on ESPN Radio: "I'm not predicting what WILL happen, I'm making what I think SHOULD happen based on team needs and prospect value. If Carolina loves Ty Simpson's arm, they should take him."</p>

            <p>The NFL Draft takes place April 23-25 in Pittsburgh.</p>
        `,
        date: '2026-02-28',
        author: 'Mock Draft Tracker',
        authorAvatar: 'MD',
        readTime: 7,
        views: 16500,
        likes: 523,
        comments: 412,
        featured: true,
        featuredImage: 'images/players/mel-kiper.jpg',
        tags: ['Mock Draft', 'Mel Kiper', 'ESPN', 'Predictions', 'Top 10'],
        trending: 5,
        related: [7, 11, 12]
    },
    {
        id: 16,
        type: 'rumors',
        title: 'TRADE RUMORS: Giants Eyeing Move Up for QB?',
        excerpt: 'Multiple reports suggest the New York Giants are exploring trade packages to move up from #6 for a quarterback. Could they leap the Jets to land Fernando Mendoza?',
        content: `
            <p>According to multiple league sources, the New York Giants are actively exploring trade scenarios to move up in the 2026 NFL Draft to select a quarterback. Currently holding the 6th overall pick, the Giants may need to jump as high as #1 to secure their target.</p>

            <h3>What We Know</h3>

            <p><strong>Daniel Jones is Done:</strong> After another disappointing season and a benching in Week 14, the Giants are moving on from Daniel Jones. The team released him in January, eating $22 million in dead cap but clearing the path for a new QB.</p>

            <p><strong>Giants' Current Pick:</strong> #6 overall - likely too late to land Fernando Mendoza, possibly too late for Ty Simpson or Drew Allar if other teams trade up.</p>

            <p><strong>Trade Partners:</strong> The Las Vegas Raiders (#1) and New York Jets (#2) are the most likely trade partners. Both teams need massive hauls to move down.</p>

            <h3>Potential Trade Packages</h3>

            <p><strong>For #1 Overall (Raiders):</strong></p>
            <ul>
                <li>Giants give: #6, #38, 2027 1st, 2027 2nd</li>
                <li>Raiders receive: Massive capital to rebuild</li>
                <li>Giants get: Fernando Mendoza</li>
            </ul>

            <p><strong>For #2 Overall (Jets):</strong></p>
            <ul>
                <li>Giants give: #6, #38, 2027 1st</li>
                <li>Jets receive: Extra picks for OL help</li>
                <li>Giants get: Choice of Simpson/Allar</li>
            </ul>

            <h3>The Complication</h3>
            <p>Here's the problem: the Giants don't actually have a 2027 first-round pick. They traded it to the Bears in the failed Justin Fields trade of 2024. This means any trade up would require them to give up 2027 AND 2028 draft capital - a massive commitment.</p>

            <h3>Alternative Scenario</h3>
            <p>Some league sources believe the Giants could stay at #6 and hope Drew Allar falls. If the first 5 picks go: Mendoza (QB), Mauigoa (OT), Reese (LB), Simpson (QB), McMillan (WR), then Allar could still be available at #6.</p>

            <p>This is a developing story. Stay tuned for updates as we approach the draft.</p>

            <p><strong>Bottom Line:</strong> The Giants are desperate for a franchise QB. Expect GM Joe Schoen to be aggressive in trade discussions leading up to April 23.</p>
        `,
        date: '2026-02-07',
        author: 'Rumor Mill',
        authorAvatar: 'RM',
        readTime: 6,
        views: 14300,
        likes: 478,
        comments: 267,
        featured: true,
        featuredImage: 'images/players/giants-draft.jpg',
        tags: ['Trade Rumors', 'Giants', 'Quarterback', 'Draft Trade', 'Speculation'],
        trending: 6,
        related: [7, 12, 15]
    },
    {
        id: 17,
        type: 'analysis',
        title: 'Is Arvell Reese the Next Micah Parsons?',
        excerpt: 'The Ohio State linebacker is drawing comparisons to the Cowboys\' All-Pro. Breaking down the similarities, differences, and whether Reese can live up to the hype.',
        content: `
            <p>Arvell Reese's name has been mentioned alongside Micah Parsons' all pre-draft season. The Ohio State linebacker has the same elite athleticism, versatility, and playmaking ability that made Parsons a top-12 pick and three-time All-Pro. But is the comparison fair?</p>

            <h3>The Case FOR the Comparison</h3>

            <p><strong>Size & Athleticism:</strong></p>
            <table border="1" cellpadding="5">
                <tr>
                    <th>Measurable</th>
                    <th>Micah Parsons (2021)</th>
                    <th>Arvell Reese (2026 Projected)</th>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>6'3"</td>
                    <td>6'4"</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>245 lbs</td>
                    <td>243 lbs</td>
                </tr>
                <tr>
                    <td>40-Yard Dash</td>
                    <td>4.39</td>
                    <td>4.55 (projected)</td>
                </tr>
                <tr>
                    <td>Vertical Jump</td>
                    <td>34.5"</td>
                    <td>36" (projected)</td>
                </tr>
            </table>

            <p><strong>Versatility:</strong> Both players lined up all over the defense in college. Reese played MIKE, WILL, RUSH, and even dropped into coverage as a deep safety. Parsons did the same at Penn State.</p>

            <p><strong>Production:</strong> Reese had 98 tackles, 15 TFLs, 7 sacks, and 3 INTs as a junior. Parsons had 109 tackles, 14 TFLs, and 5 sacks in his final season. Both were Butkus Award finalists.</p>

            <h3>The Case AGAINST the Comparison</h3>

            <p><strong>Speed Difference:</strong> Parsons' 4.39 forty at 245 lbs was historic. Reese is projected around 4.55 - excellent for a linebacker, but not in Parsons' stratosphere.</p>

            <p><strong>Pass Rush Prowess:</strong> Parsons had 14 sacks as a rookie and has 40.5 in three NFL seasons. Reese is more of a coverage linebacker who can rush, while Parsons is a rusher who can cover.</p>

            <p><strong>Playing Style:</strong> Reese is more instinctive and plays with better eyes/technique. Parsons is more explosive and wins with raw athleticism. Different skill sets.</p>

            <h3>Better Comparison?</h3>
            <p>Some scouts believe Reese is closer to Fred Warner (49ers) or Roquan Smith (Ravens) - elite all-around linebackers who excel in coverage and run defense but don't generate 10+ sack seasons.</p>

            <p>Warner comparison:</p>
            <ul>
                <li>Similar size (6'3", 236 vs 6'4", 243)</li>
                <li>Elite coverage ability</li>
                <li>Sideline-to-sideline speed</li>
                <li>High football IQ and preparation</li>
            </ul>

            <h3>The Verdict</h3>
            <p>Arvell Reese is not the next Micah Parsons - and that's okay. Parsons is a generational talent who comes around once a decade. Reese is a top-10 pick who can be a 5x Pro Bowler and anchor a defense for a decade.</p>

            <p>The Fred Warner comparison is more accurate and still incredibly complimentary. If Reese becomes Warner, the team that drafts him wins big.</p>

            <p><strong>Final Grade:</strong> Reese is an A prospect trying to live up to an A+ comparison. Temper expectations slightly, but still expect All-Pro upside.</p>
        `,
        date: '2026-02-05',
        author: 'Player Comparison Expert',
        authorAvatar: 'PC',
        readTime: 11,
        views: 12600,
        likes: 534,
        comments: 298,
        featured: true,
        featuredImage: 'images/players/arvell-reese.jpg',
        tags: ['Player Comparison', 'Arvell Reese', 'Micah Parsons', 'Linebacker', 'Analysis'],
        trending: 7,
        related: [6, 11, 15]
    },
    {
        id: 18,
        type: 'news',
        title: 'Indiana Pro Day: Mendoza Shines, 40-Time Irrelevant',
        excerpt: 'Fernando Mendoza completed 62 of 65 passes at Indiana\'s Pro Day, wowing scouts with accuracy and arm talent. All 32 teams in attendance.',
        content: `
            <p>Indiana held its Pro Day on Wednesday, March 18, and Fernando Mendoza put on a show for the 32 NFL teams in attendance. The projected #1 pick completed 62 of 65 throws in a scripted workout, demonstrating the elite accuracy that made him the consensus QB1.</p>

            <h3>Workout Highlights</h3>

            <p><strong>Accuracy Clinic:</strong> Mendoza's 95.4% completion rate in the throwing session was among the best in recent Pro Day history. He hit every deep ball, placed every sideline comeback perfectly, and showed touch on intermediate crossers.</p>

            <p><strong>Arm Strength:</strong> Mendoza uncorked several 60+ yard bombs that traveled with velocity and perfect spiral. One deep post traveled 67 yards in the air with room to spare.</p>

            <p><strong>Footwork & Mechanics:</strong> Every rep featured textbook footwork, clean pocket movement, and consistent release point. No wasted motion.</p>

            <h3>The 40-Yard Dash Debate</h3>
            <p>Mendoza did not run the 40-yard dash, citing a minor toe injury. This decision sparked immediate debate on social media about whether he's "hiding" his lack of speed.</p>

            <p><strong>Reality Check:</strong> Mendoza is a pocket passer, not a dual-threat QB. His projected 4.85-4.95 forty time would be slow for the position, but it's irrelevant to his game. Tom Brady ran a 5.28. Peyton Manning ran a 4.80. Joe Burrow ran a 4.94. None of it mattered.</p>

            <p>One AFC general manager at the Pro Day: "We didn't come here to watch Fernando run. We came to watch him throw. And he was perfect. The 40 time is meaningless for him."</p>

            <h3>Team Meetings</h3>
            <p>Mendoza met privately with 12 teams after the workout, including extended sessions with the Raiders, Jets, Panthers, and Giants. The Raiders' meeting lasted over 90 minutes and included owner Mark Davis.</p>

            <p>Las Vegas HC Mike Vrabel after the workout: "Fernando is everything we thought he was - and more. He's a winner, a leader, and ready to play on Sundays."</p>

            <h3>Other Hoosiers</h3>
            <p>Several other Indiana prospects worked out, including:</p>
            <ul>
                <li><strong>Ke'Shawn Williams (S):</strong> Ran a 4.42 forty, boosting his Day 3 stock</li>
                <li><strong>Cam Camper (WR):</strong> Solid workout, priority UDFA</li>
                <li><strong>Trevor Lauck (OT):</strong> Measured 6'6", 318 lbs with 34" arms, late-round pick</li>
            </ul>

            <p><strong>Bottom Line:</strong> Fernando Mendoza did everything he needed to do. He's the #1 pick to the Raiders on April 23.</p>
        `,
        date: '2026-03-18',
        author: 'Pro Day Reporter',
        authorAvatar: 'PD',
        readTime: 6,
        views: 15700,
        likes: 612,
        comments: 234,
        featured: false,
        featuredImage: 'images/players/fernando-mendoza.jpg',
        tags: ['Pro Day', 'Indiana', 'Mendoza', 'Workout', 'Quarterback'],
        trending: 8,
        related: [11, 12, 15]
    },
    {
        id: 19,
        type: 'news',
        title: 'INJURY ALERT: Jordyn Tyson\'s Shoulder Raises Red Flags',
        excerpt: 'Arizona State WR Jordyn Tyson underwent MRI on his left shoulder after combine medical exams revealed structural concerns. Multiple teams downgrading his draft grade.',
        content: `
            <p>Arizona State wide receiver Jordyn Tyson, previously projected as a late first-round pick, is seeing his draft stock fall after medical concerns emerged at the NFL Combine. Multiple sources report that Tyson's left shoulder showed "structural damage" on MRI exams, raising questions about his durability.</p>

            <h3>What Happened</h3>
            <p>Tyson missed three games in 2025 with a shoulder injury he initially called a "stinger." Medical evaluations at the combine revealed more serious damage - a partially torn labrum that could require surgery.</p>

            <p>Tyson opted not to have surgery before the draft, instead choosing to rehab the injury and delay the procedure until after he's selected. This decision has some teams concerned about his commitment to long-term health.</p>

            <h3>Medical Opinions</h3>
            <p>One NFC team doctor (speaking anonymously): "Labrum tears are common in football players, but they don't heal on their own. He'll need surgery eventually. The question is: does it happen before the draft or after his rookie season when it potentially tears completely?"</p>

            <p>Another AFC scout: "We've downgraded Tyson from late first to early second round because of the medical. He's a great player when healthy, but can we count on him for 17 games?"</p>

            <h3>Tyson's Response</h3>
            <p>Tyson addressed the concerns at his Pro Day on March 20:</p>

            <p>"I played through the injury all season and still put up 1,200 yards and 12 TDs. My shoulder is fine. I'm not getting surgery because I don't need it. Some team is going to get a steal when they draft me in Round 1."</p>

            <p>Tyson's agent, Drew Rosenhaus, released a statement saying three independent doctors cleared Tyson for full participation without surgery.</p>

            <h3>Draft Impact</h3>
            <p>Before the medical concerns, Tyson was mocked as high as #18 overall. Now, he's slipping into the late first/early second round range (#25-40).</p>

            <p>Teams still interested include the Colts (#23), Chargers (#25), and Ravens (#28) - all need receiver help and may be willing to take the medical risk.</p>

            <p><strong>Comparison:</strong> This situation is similar to Minkah Fitzpatrick in 2018, who had shoulder concerns pre-draft but became an All-Pro. It's also reminiscent of Derwin James, who fell slightly due to injury history.</p>

            <p>The draft is April 23-25. Tyson's medicals will be a major storyline as teams weigh talent vs. risk.</p>
        `,
        date: '2026-03-05',
        author: 'Injury Reporter',
        authorAvatar: 'IR',
        readTime: 7,
        views: 10400,
        likes: 267,
        comments: 156,
        featured: false,
        featuredImage: 'images/players/jordyn-tyson.jpg',
        tags: ['Injury Report', 'Medical', 'Jordyn Tyson', 'Wide Receiver', 'Concerns'],
        trending: 9,
        related: [9, 14, 22]
    },
    {
        id: 20,
        type: 'rumors',
        title: 'Cowboys Eyeing Offensive Line After Martin Retirement?',
        excerpt: 'With Zack Martin retiring, the Dallas Cowboys need to address their offensive line. Could they trade up in Round 1 for Francis Mauigoa or Spencer Fano?',
        content: `
            <p>The Dallas Cowboys are facing a major hole on their offensive line following Zack Martin's retirement announcement in January. The nine-time Pro Bowler and future Hall of Famer leaves massive shoes to fill at right guard, and the Cowboys are exploring all options.</p>

            <h3>Current OL Situation</h3>
            <ul>
                <li><strong>LT:</strong> Tyler Smith (solid, but played better at guard)</li>
                <li><strong>LG:</strong> Needs to be addressed</li>
                <li><strong>C:</strong> Tyler Biadasz (free agent, may leave)</li>
                <li><strong>RG:</strong> OPEN (Martin retired)</li>
                <li><strong>RT:</strong> Terence Steele (okay, not great)</li>
            </ul>

            <p>The Cowboys could have TWO holes on the interior OL if Biadasz signs elsewhere in free agency.</p>

            <h3>Draft Capital</h3>
            <p>Dallas holds the 21st overall pick after their divisional round playoff loss. They also have picks #53 (2nd round) and #85 (3rd round).</p>

            <h3>Trade Up Scenario</h3>
            <p>League sources suggest the Cowboys are exploring a trade up into the top 15 to secure an offensive tackle who can start immediately:</p>

            <p><strong>Target #1: Francis Mauigoa (OT, Miami)</strong></p>
            <ul>
                <li>6'5", 326 lbs, 34" arms</li>
                <li>Projects as RT in Dallas, allowing Tyler Smith to move back inside to RG (his natural position)</li>
                <li>Would require trade up to picks #10-15</li>
            </ul>

            <p><strong>Target #2: Spencer Fano (OT, Utah)</strong></p>
            <ul>
                <li>6'6", 315 lbs, 33.5" arms</li>
                <li>More raw but higher ceiling than Mauigoa</li>
                <li>Could be available at #21 without trading up</li>
            </ul>

            <h3>The Problem</h3>
            <p>The Cowboys are already tight against the salary cap and don't have tons of draft capital to trade up. They'd likely need to include a veteran player (Brandin Cooks? DeMarcus Lawrence?) in any deal.</p>

            <h3>Alternative Plan</h3>
            <p>Dallas could stay at #21 and target interior offensive linemen:</p>
            <ul>
                <li><strong>Olaivavega Ioane (IOL, Penn State)</strong> - Top interior lineman, but may be gone</li>
                <li><strong>Emery Jones (IOL, LSU)</strong> - Second-tier IOL prospect</li>
                <li><strong>DJ Campbell (OT, Texas)</strong> - Could play guard or tackle</li>
            </ul>

            <p>They could also sign a veteran guard in free agency (Kevin Zeitler, Chris Lindstrom) and draft depth.</p>

            <h3>Jerry Jones' Take</h3>
            <p>Cowboys owner Jerry Jones at the NFL Combine: "Zack Martin is irreplaceable. But we're going to do everything we can to find his successor. Whether that's the draft, free agency, or a trade - we'll explore it all."</p>

            <p><strong>Prediction:</strong> Cowboys stay at #21 and take Spencer Fano if available. If not, they pivot to edge rusher or receiver and address OL in Round 2.</p>
        `,
        date: '2026-02-08',
        author: 'Rumor Mill',
        authorAvatar: 'RM',
        readTime: 8,
        views: 11900,
        likes: 389,
        comments: 201,
        featured: false,
        featuredImage: 'images/players/francis-mauigoa.jpg',
        tags: ['Trade Rumors', 'Cowboys', 'Offensive Line', 'Zack Martin', 'Team Needs'],
        trending: 10,
        related: [13, 16, 25]
    },
    {
        id: 21,
        type: 'analysis',
        title: 'Character Concerns: Which Top Prospects Have Off-Field Red Flags?',
        excerpt: 'Several 2026 draft prospects are dealing with character questions ranging from minor immaturity to serious legal issues. Breaking down who\'s at risk of sliding.',
        content: `
            <p>Every draft class has prospects with off-field concerns. Sometimes it's overblown. Sometimes it costs players millions. Here's a breakdown of the 2026 prospects facing character questions:</p>

            <h3>Serious Concerns</h3>

            <p><strong>Dontavious Braswell (DT, Ole Miss)</strong></p>
            <ul>
                <li><strong>Issue:</strong> Arrested twice in college - once for marijuana possession, once for disorderly conduct after bar fight</li>
                <li><strong>Projection:</strong> Was a 2nd-round talent, now likely Day 3 pick</li>
                <li><strong>Verdict:</strong> Pattern of poor decisions. Teams will want extensive interviews and character references</li>
            </ul>

            <p><strong>Marcus Williams (CB, LSU)</strong></p>
            <ul>
                <li><strong>Issue:</strong> Suspended 4 games in 2025 for violating team rules (failed drug test, per reports)</li>
                <li><strong>Projection:</strong> Still a 3rd-4th round pick due to talent, but falling from potential Day 2 selection</li>
                <li><strong>Verdict:</strong> Needs to prove he's past his issues. Will enter substance abuse program as part of rookie contract</li>
            </ul>

            <h3>Moderate Concerns</h3>

            <p><strong>Keldric Faulk (EDGE, Auburn)</strong></p>
            <ul>
                <li><strong>Issue:</strong> Multiple reports of "effort concerns" and "coach-ability questions" from SEC coaches</li>
                <li><strong>Projection:</strong> Talent says Round 1, character concerns could push to Round 2</li>
                <li><strong>Verdict:</strong> Needs to wow in interviews. Athletic talent may outweigh concerns</li>
            </ul>

            <p><strong>Kyren Lacy (WR, LSU)</strong></p>
            <ul>
                <li><strong>Issue:</strong> Cited for careless driving after vehicle accident. No injuries, but questions about maturity</li>
                <li><strong>Projection:</strong> Late Round 1 / Early Round 2 - minor concern</li>
                <li><strong>Verdict:</strong> One-time mistake, shouldn't impact draft stock significantly</li>
            </ul>

            <h3>Minor Concerns (Overblown)</h3>

            <p><strong>Ty Simpson (QB, Alabama)</strong></p>
            <ul>
                <li><strong>Issue:</strong> Some reports of "entitlement" and "arrogance" in team meetings</li>
                <li><strong>Projection:</strong> Still Round 1 pick - talent outweighs personality quirks</li>
                <li><strong>Verdict:</strong> Confident QB vs arrogant QB is a fine line. Interviews will be critical</li>
            </ul>

            <h3>Squeaky Clean Leaders</h3>
            <p>Several top prospects have perfect character grades:</p>
            <ul>
                <li><strong>Fernando Mendoza (QB, Indiana)</strong> - Team captain, 4.0 GPA, zero concerns</li>
                <li><strong>Arvell Reese (LB, Ohio State)</strong> - Model teammate, high character, leader</li>
                <li><strong>Caleb Downs (S, Ohio State)</strong> - No concerns whatsoever</li>
                <li><strong>Mason Taylor (TE, LSU)</strong> - High character, respected by coaches</li>
            </ul>

            <h3>Historical Context</h3>
            <p>Remember, character concerns don't always derail careers:</p>
            <ul>
                <li>Jalen Carter (DT, 2023) - Racing incident before draft, still went #9 overall</li>
                <li>Laremy Tunsil (OT, 2016) - Gas mask video on draft day, fell to #13 but became All-Pro</li>
                <li>Randy Moss (WR, 1998) - Multiple issues, fell to #21 but became Hall of Famer</li>
            </ul>

            <p><strong>Bottom Line:</strong> Teams do extensive background checks. Most "character concerns" are overblown. But legitimate legal/substance issues WILL cost players money on draft day.</p>
        `,
        date: '2026-03-10',
        author: 'Character Scout',
        authorAvatar: 'CS',
        readTime: 9,
        views: 8760,
        likes: 234,
        comments: 178,
        featured: false,
        featuredImage: 'images/players/character-concerns.jpg',
        tags: ['Character', 'Off-Field', 'Red Flags', 'Background', 'Concerns'],
        trending: 11,
        related: [11, 15, 17]
    },
    {
        id: 22,
        type: 'analysis',
        title: 'Comparing 2026 to 2020: Is This WR Class the Next Great One?',
        excerpt: 'The 2020 draft featured CeeDee Lamb, Justin Jefferson, and Jerry Jeudy. Could 2026\'s receiver class reach similar heights?',
        content: `
            <p>The 2020 NFL Draft is widely considered one of the best wide receiver classes in history. CeeDee Lamb, Justin Jefferson, Jerry Jeudy, Brandon Aiyuk, and Tee Higgins have all become stars. Can the 2026 class match that success?</p>

            <h3>2020 Draft Class Review</h3>

            <p><strong>Round 1 Selections (6 total):</strong></p>
            <ol>
                <li><strong>Henry Ruggs (#12, Raiders)</strong> - Bust (career ended after DUI accident)</li>
                <li><strong>Jerry Jeudy (#15, Broncos)</strong> - Solid WR2, not elite</li>
                <li><strong>CeeDee Lamb (#17, Cowboys)</strong> - Superstar, multiple All-Pro</li>
                <li><strong>Jalen Reagor (#21, Eagles)</strong> - Massive bust</li>
                <li><strong>Justin Jefferson (#22, Vikings)</strong> - Best WR in NFL, multiple All-Pro</li>
                <li><strong>Brandon Aiyuk (#25, 49ers)</strong> - Very good WR2/WR1</li>
            </ol>

            <p><strong>Round 2-3 Hits:</strong></p>
            <ul>
                <li>Tee Higgins (#33) - Excellent WR2</li>
                <li>Michael Pittman (#34) - Solid WR1</li>
                <li>Chase Claypool (#49) - Disappointing after hot start</li>
            </ul>

            <p><strong>Hit Rate:</strong> 5 of 6 Round 1 picks became quality NFL starters (83%), with 2 becoming superstars (33%)</li>

            <h3>2026 Draft Class Projection</h3>

            <p><strong>Projected Round 1 Selections (7-8 total):</strong></p>
            <ol>
                <li><strong>Tetairoa McMillan (Arizona)</strong> - Best comp: CeeDee Lamb (size, catch radius, alpha mentality)</li>
                <li><strong>Carnell Tate (Ohio State)</strong> - Best comp: Mike Evans (big body, contested catches)</li>
                <li><strong>Jordyn Tyson (Arizona State)</strong> - Best comp: DeAndre Hopkins (technician, reliable hands)</li>
                <li><strong>Makai Lemon (USC)</strong> - Best comp: Amon-Ra St. Brown (slot demon, YAC ability)</li>
                <li><strong>Emeka Egbuka (Ohio State)</strong> - Best comp: Brandon Aiyuk (versatile, consistent)</li>
                <li><strong>Isaiah Bond (Texas)</strong> - Best comp: Henry Ruggs (speed, vertical threat)</li>
                <li><strong>Kyren Lacy (LSU)</strong> - Best comp: Jerry Jeudy (route running, separation)</li>
                <li><strong>Denzel Boston (NDSU)</strong> - Best comp: Tee Higgins (size, hands, ball skills)</li>
            </ol>

            <h3>Key Differences</h3>

            <p><strong>2020 Advantages:</strong></p>
            <ul>
                <li>Had a clear WR1 in Jefferson (though not recognized pre-draft)</li>
                <li>More true X receivers with size (Lamb, Jeudy, Ruggs all 6'1"+)</li>
                <li>Multiple receivers had 4.3 speed (Ruggs, Reagor)</li>
            </ul>

            <p><strong>2026 Advantages:</strong></p>
            <ul>
                <li>Better size overall (McMillan 6'5", Boston 6'4", Tate 6'3")</li>
                <li>More depth - Day 2 prospects like Kevin Coleman and Isaiah Horton could be steals</li>
                <li>Fewer character concerns than 2020 class</li>
            </ul>

            <h3>Bust Potential</h3>
            <p>Every class has busts. Here's who's at risk in 2026:</p>
            <ul>
                <li><strong>Isaiah Bond:</strong> Speed-only prospect like Ruggs - could flame out if he can't develop route tree</li>
                <li><strong>Tetairoa McMillan:</strong> Raw route runner who dominated with size - needs refinement</li>
            </ul>

            <h3>The Verdict</h3>
            <p><strong>Will 2026 match 2020?</strong> Unlikely. The 2020 class produced two All-Pro superstars and 5+ quality starters. That's a historic outcome that's hard to replicate.</p>

            <p><strong>Can 2026 be very good?</strong> Absolutely. If 5 of the 7-8 Round 1 receivers become quality starters and 1-2 become Pro Bowlers, this class will be viewed as a success.</p>

            <p><strong>Prediction:</strong> 2026 WR class finishes as the 3rd-4th best of the 2020s decade - behind 2020, potentially behind 2022 (Garrett Wilson, Chris Olave, Jameson Williams class), but better than 2023 and 2024.</p>
        `,
        date: '2026-03-12',
        author: 'Historical Draft Analyst',
        authorAvatar: 'HD',
        readTime: 12,
        views: 9340,
        likes: 456,
        comments: 189,
        featured: false,
        featuredImage: 'images/players/wr-comparison.jpg',
        tags: ['Historical', 'Wide Receivers', '2020 Draft', 'Comparison', 'Analysis'],
        trending: 12,
        related: [14, 9, 19]
    },
    {
        id: 23,
        type: 'news',
        title: 'Jeremiyah Love Runs 4.39 Forty at Notre Dame Pro Day',
        excerpt: 'The Notre Dame running back blazed a 4.39 40-yard dash at his Pro Day, cementing his status as the RB1 and potentially a top-10 pick.',
        content: `
            <p>Notre Dame running back Jeremiyah Love put on a show at the Irish Pro Day on Wednesday, running an unofficial 4.39 40-yard dash and looking every bit the explosive playmaker scouts expected.</p>

            <h3>The Numbers</h3>
            <ul>
                <li><strong>40-Yard Dash:</strong> 4.39 seconds (unofficial, hand-timed)</li>
                <li><strong>Vertical Jump:</strong> 39 inches</li>
                <li><strong>Broad Jump:</strong> 10'8"</li>
                <li><strong>3-Cone Drill:</strong> 6.89 seconds</li>
                <li><strong>20-Yard Shuttle:</strong> 4.18 seconds</li>
            </ul>

            <p>Love's 4.39 forty would tie him with Chris Johnson and Jamaal Charles for the fastest RB 40-time in the last 20 years. While it's unofficial (Pro Day times are typically .05-.10 seconds faster than combine times), it's still elite.</p>

            <h3>Workout Performance</h3>
            <p>Beyond the straight-line speed, Love impressed scouts with his change-of-direction drills. His 6.89 three-cone drill shows elite agility for a 203-pound back. The 39-inch vertical jump demonstrates his explosiveness and home run ability.</p>

            <p>One AFC running backs coach in attendance: "That's a first-round running back. I don't care what the analytics say about not drafting RBs early - that kid is special."</p>

            <h3>Draft Stock Rising</h3>
            <p>Before the Pro Day, Love was projected as a late first-round pick (#25-32). After this performance, he's climbing into the top 15-20 range.</p>

            <p>Teams with needs at running back:</p>
            <ul>
                <li><strong>Tennessee Titans (#7):</strong> Desperate for offensive playmakers</li>
                <li><strong>Chicago Bears (#9):</strong> Need explosive back to pair with Caleb Williams</li>
                <li><strong>Cleveland Browns (#5):</strong> Nick Chubb's injury history makes RB a priority</li>
            </ul>

            <h3>The RB Value Debate</h3>
            <p>Love's performance reignites the debate about running back value in the modern NFL. While analytics suggest RBs are fungible, teams like the Cowboys (Tony Pollard), Chargers (J.K. Dobbins), and Vikings (Aaron Jones) have shown that elite backs still matter.</p>

            <p>Former NFL GM Mike Tannenbaum on ESPN: "If you think Jeremiyah Love is the next Saquon Barkley or Bijan Robinson, you take him in the top 10. Speed kills, and this kid has game-breaking speed."</p>

            <h3>Other Irish Prospects</h3>
            <p>Several other Notre Dame players worked out:</p>
            <ul>
                <li><strong>Howard Cross (DL):</strong> 4.78 forty at 295 lbs - boosted Day 2 stock</li>
                <li><strong>Jaylen Sneed (S):</strong> 4.52 forty, 38" vertical - mid-round pick</li>
                <li><strong>Charles Jagusah (OT):</strong> Measured 6'7", 325 lbs with 35" arms - Round 3-4 prospect</li>
            </ul>

            <p><strong>Bottom Line:</strong> Jeremiyah Love is the RB1 in this draft class and a legitimate top-15 pick after this performance. Some team will "reach" for him - and likely won't regret it.</p>
        `,
        date: '2026-03-19',
        author: 'Pro Day Reporter',
        authorAvatar: 'PD',
        readTime: 7,
        views: 14200,
        likes: 589,
        comments: 267,
        featured: true,
        featuredImage: 'images/players/jeremiyah-love.jpg',
        tags: ['Pro Day', 'Jeremiyah Love', 'Running Back', 'Speed', 'Notre Dame'],
        trending: 13,
        related: [10, 18, 15]
    },
    {
        id: 24,
        type: 'rumors',
        title: 'Broncos Exploring Trade for Second First-Round Pick?',
        excerpt: 'Denver has two second-round picks and is reportedly trying to package them to move into the late first round for a wide receiver.',
        content: `
            <p>The Denver Broncos are exploring options to trade up into the late first round, per multiple league sources. With two picks in the top 50 (#48 and #53), the Broncos have the ammunition to make a move for a wide receiver.</p>

            <h3>The Need</h3>
            <p>Denver's receiving corps is underwhelming. Courtland Sutton is aging (32 years old in 2026), Jerry Jeudy was traded to Cleveland, and the team lacks a true #1 target for young QB Bo Nix.</p>

            <p><strong>Current WR Depth Chart:</strong></p>
            <ul>
                <li>Courtland Sutton (aging veteran)</li>
                <li>Marvin Mims Jr. (slot/gadget player)</li>
                <li>Tim Patrick (declining role player)</li>
                <li>Nobody else of note</li>
            </ul>

            <h3>Trade Scenarios</h3>

            <p><strong>Scenario 1: Move to #28-32</strong></p>
            <ul>
                <li>Broncos give: #48, #53, 2027 4th</li>
                <li>Broncos receive: Pick #28-32 (from team like Ravens, Chargers, or Bills)</li>
                <li>Target: Emeka Egbuka (WR, Ohio State)</li>
            </ul>

            <p><strong>Scenario 2: Package with players</strong></p>
            <ul>
                <li>Broncos give: #48, Courtland Sutton, 2027 3rd</li>
                <li>Broncos receive: Pick #24-27 (from team like Colts or Chargers)</li>
                <li>Target: Makai Lemon (WR, USC) or Carnell Tate (WR, Ohio State)</li>
            </ul>

            <h3>Why Teams Would Deal</h3>
            <p>Several teams in the late first round don't have second-round picks due to previous trades. They'd love to drop back 15-20 spots and pick up an extra Day 2 selection.</p>

            <p>Potential trade partners:</p>
            <ul>
                <li><strong>Baltimore Ravens (#28):</strong> No 2nd-round pick, need depth</li>
                <li><strong>Los Angeles Chargers (#25):</strong> Would love extra picks for OL</li>
                <li><strong>Indianapolis Colts (#23):</strong> Have 3 picks in Round 1, could move one back</li>
            </ul>

            <h3>The Risk</h3>
            <p>Trading two second-round picks for one late first-rounder is a steep price. The Broncos would give up the chance to add two quality starters for one receiver who may not be an immediate impact player.</p>

            <p>Broncos GM George Paton on the trade rumors: "We're exploring all options. We have draft capital and a need at receiver. If the right deal presents itself, we'll be aggressive."</p>

            <h3>Alternative Plan</h3>
            <p>If the Broncos can't trade up, they could:</p>
            <ul>
                <li>Stay at #48 and take the best receiver available (likely Kevin Coleman, Xavier Restrepo, or Isaiah Horton)</li>
                <li>Sign a veteran WR in free agency (Tee Higgins, Calvin Ridley, or Tyler Lockett)</li>
                <li>Trade Courtland Sutton for draft capital and rebuild the position entirely</li>
            </ul>

            <p><strong>Prediction:</strong> Broncos trade #48, #53, and a 2027 4th to the Ravens for #28 and select Emeka Egbuka. Bo Nix gets his #1 receiver, and Denver's offense takes a big step forward in 2026.</p>
        `,
        date: '2026-04-05',
        author: 'Trade Insider',
        authorAvatar: 'TI',
        readTime: 8,
        views: 10600,
        likes: 334,
        comments: 178,
        featured: false,
        featuredImage: 'images/players/broncos-trade.jpg',
        tags: ['Trade Rumors', 'Broncos', 'Wide Receiver', 'Draft Trade', 'Speculation'],
        trending: 14,
        related: [16, 20, 14]
    },
    {
        id: 25,
        type: 'analysis',
        title: '2026 vs 2017: Comparing Weak Offensive Line Classes',
        excerpt: 'The 2017 draft had no elite OL prospects, and teams reached out of desperation. Is 2026 heading down the same path?',
        content: `
            <p>The 2026 offensive line class is drawing comparisons to the infamous 2017 draft - a year with no elite tackle prospects that led to several disastrous reaches. Will history repeat itself?</p>

            <h3>2017 Draft: A Cautionary Tale</h3>

            <p><strong>Round 1 Offensive Linemen:</strong></p>
            <ol>
                <li><strong>Ryan Ramczyk (#32, Saints)</strong> - Hit! All-Pro tackle</li>
                <li><strong>Garett Bolles (#20, Broncos)</strong> - Mediocre, frequent holding penalties</li>
                <li><strong>Forrest Lamp (#38, Chargers - 2nd round)</strong> - Bust due to injuries</li>
            </ol>

            <p>Only ONE offensive lineman was selected in Round 1, and he went last (Ramczyk at #32). Teams were so desperate for OL help that the Broncos reached for Garett Bolles at #20, a pick they regretted for years.</p>

            <p><strong>What Went Wrong:</strong> The 2017 class lacked blue-chip talent at tackle. No one had elite size AND athleticism AND technique. Teams reached out of need rather than value.</p>

            <h3>2026 Draft: Similar Warning Signs</h3>

            <p><strong>Top Offensive Tackle Prospects:</strong></p>
            <ol>
                <li><strong>Francis Mauigoa (Miami)</strong> - Best of the group, but not elite. 6'5", 326 lbs with 34" arms. Strong run blocker, needs work in pass pro. <em>Projection: #8-15</em></li>
                <li><strong>Spencer Fano (Utah)</strong> - Raw project with size (6'6", 315 lbs). High ceiling, low floor. <em>Projection: #18-28</em></li>
                <li><strong>Kelvin Banks Jr. (Texas)</strong> - Solid but unspectacular. Safe pick without star upside. <em>Projection: #20-32</em></li>
                <li><strong>Wyatt Milum (West Virginia)</strong> - Athletic but undersized (6'5", 305 lbs). Scheme-specific. <em>Projection: Round 2</em></li>
            </ol>

            <p><strong>Interior Offensive Line:</strong></p>
            <ul>
                <li><strong>Olaivavega Ioane (Penn State)</strong> - Best IOL prospect, but not dominant. <em>Projection: #25-40</em></li>
                <li><strong>Emery Jones (LSU)</strong> - Solid guard, Day 2 value. <em>Projection: Round 2-3</em></li>
            </ul>

            <h3>Key Differences from 2017</h3>

            <p><strong>2026 Advantages:</strong></p>
            <ul>
                <li>Better depth - 2017 had maybe 3 draftable tackles, 2026 has 6-8</li>
                <li>Clearer top prospect in Mauigoa (2017 had no consensus OT1)</li>
                <li>Better interior line class - Ioane would've been best IOL in 2017</li>
            </ul>

            <p><strong>2026 Disadvantages:</strong></p>
            <ul>
                <li>More teams need offensive line help than in 2017</li>
                <li>Higher expectations for rookie OL due to rising QB salaries</li>
                <li>No "safe" LT prospect like Ramczyk (who was considered low-ceiling, high-floor)</li>
            </ul>

            <h3>Teams at Risk of Reaching</h3>
            <p>These teams desperately need OL and may overdraft:</p>
            <ul>
                <li><strong>New York Jets (#2):</strong> May take Mauigoa at #2 overall despite him being a #8-15 value</li>
                <li><strong>Tennessee Titans (#7):</strong> Could reach for Fano or Banks</li>
                <li><strong>Dallas Cowboys (#21):</strong> Desperate after Zack Martin retirement, may overpay</li>
            </ul>

            <h3>The Smart Strategy</h3>
            <p>Rather than reaching for tackles in Round 1, teams should:</p>
            <ul>
                <li>Address OL through free agency (sign veterans like Jonah Williams, Teven Jenkins)</li>
                <li>Trade back and pick up extra Day 2 picks to grab multiple OL</li>
                <li>Go best player available in Round 1, then double-dip on OL in Rounds 2-3</li>
            </ul>

            <h3>The Verdict</h3>
            <p>The 2026 offensive line class is better than 2017, but not by much. Teams with OL needs should temper expectations and avoid panic-reaching. Francis Mauigoa is NOT worth the #2 overall pick. Spencer Fano is NOT a lock to succeed.</p>

            <p><strong>Bold Prediction:</strong> Only 2 offensive linemen go in Round 1 (Mauigoa and Ioane), and both underperform expectations. The best OL from this class will be a Day 2 pick who develops over 2-3 years.</p>
        `,
        date: '2026-03-15',
        author: 'Historical Draft Analyst',
        authorAvatar: 'HD',
        readTime: 11,
        views: 7890,
        likes: 289,
        comments: 134,
        featured: false,
        featuredImage: 'images/players/ol-comparison.jpg',
        tags: ['Historical', 'Offensive Line', '2017 Draft', 'Comparison', 'Analysis'],
        trending: 15,
        related: [13, 20, 22]
    },
    {
        id: 26,
        type: 'news',
        title: 'Caleb Downs Runs 4.42 Forty, Solidifies Top-15 Status',
        excerpt: 'The Ohio State safety blazed a 4.42 40-yard dash at the combine, confirming his status as the S1 and a potential top-15 pick.',
        content: `
            <p>Ohio State safety Caleb Downs turned heads at the NFL Combine with a blazing 4.42 40-yard dash, cementing his status as the top safety in the 2026 draft class and a likely top-15 selection.</p>

            <h3>Combine Measurements & Testing</h3>
            <ul>
                <li><strong>Height:</strong> 6'0"</li>
                <li><strong>Weight:</strong> 204 lbs</li>
                <li><strong>Arm Length:</strong> 31.75 inches</li>
                <li><strong>Hand Size:</strong> 9.5 inches</li>
                <li><strong>40-Yard Dash:</strong> 4.42 seconds</li>
                <li><strong>Vertical Jump:</strong> 37 inches</li>
                <li><strong>Broad Jump:</strong> 10'5"</li>
                <li><strong>3-Cone Drill:</strong> 6.78 seconds</li>
                <li><strong>20-Yard Shuttle:</strong> 4.11 seconds</li>
            </ul>

            <h3>What It Means</h3>
            <p>Downs' 4.42 forty is elite for a safety. Combined with his 37-inch vertical and 10'5" broad jump, he profiles as an explosive, versatile defensive back who can play free safety, strong safety, or even slot corner.</p>

            <p>His 6.78 three-cone and 4.11 shuttle demonstrate elite change-of-direction ability - critical for a safety who needs to break on the ball and cover tight ends.</p>

            <h3>Scouting Report</h3>
            <p><strong>Strengths:</strong></p>
            <ul>
                <li>Elite athleticism and range</li>
                <li>Ball skills - 5 INTs in 2025 season</li>
                <li>Versatility - played multiple positions at Alabama and Ohio State</li>
                <li>High football IQ and film study habits</li>
                <li>Excellent tackler despite smaller frame</li>
            </ul>

            <p><strong>Concerns:</strong></p>
            <ul>
                <li>Size is just okay (204 lbs may get bullied by bigger TEs)</li>
                <li>Played in loaded defenses at Alabama/OSU - always had help</li>
                <li>Only one year of starting experience at Ohio State</li>
            </ul>

            <h3>Draft Projection</h3>
            <p>Before the combine, Downs was projected as a late first-round pick (#20-32). After this elite testing, he's climbing into the top 15-20 range.</p>

            <p>Teams with safety needs:</p>
            <ul>
                <li><strong>Jacksonville Jaguars (#4):</strong> Need defensive playmakers</li>
                <li><strong>New Orleans Saints (#8):</strong> Safety is a major hole</li>
                <li><strong>Chicago Bears (#9):</strong> Need coverage help on backend</li>
                <li><strong>Cincinnati Bengals (#18):</strong> Aging safety duo of Vonn Bell/Nick Scott</li>
            </ul>

            <h3>NFL Comparison</h3>
            <p>Downs draws comparisons to Derwin James (Chargers) and Jessie Bates III (Falcons) - versatile safeties who can impact the game in multiple ways. His ball skills and range mirror James, while his coverage ability and instincts are similar to Bates.</p>

            <p>One NFC defensive coordinator at the combine: "Caleb Downs is the best safety prospect since Kyle Hamilton in 2022. He can do everything - cover, tackle, blitz, play deep, play in the box. That's a top-15 player."</p>

            <h3>Other Ohio State Prospects</h3>
            <p>The Buckeyes had multiple players shine at the combine:</p>
            <ul>
                <li><strong>Arvell Reese (LB):</strong> 4.55 forty, 36" vertical - confirmed top-5 status</li>
                <li><strong>Sonny Styles (LB):</strong> 4.58 forty, 38" vertical - late Round 1</li>
                <li><strong>Emeka Egbuka (WR):</strong> 4.48 forty, solid routes - Round 1 lock</li>
                <li><strong>Carnell Tate (WR):</strong> 4.54 forty, contested catch drills - Round 1</li>
            </ul>

            <p><strong>Bottom Line:</strong> Caleb Downs is the S1 in this draft and will be a top-15 pick. His combination of athleticism, versatility, and instincts make him a Day 1 impact player in the NFL.</p>
        `,
        date: '2026-03-02',
        author: 'Combine Reporter',
        authorAvatar: 'CR',
        readTime: 7,
        views: 11400,
        likes: 467,
        comments: 189,
        featured: false,
        featuredImage: 'images/players/caleb-downs.jpg',
        tags: ['Combine', 'Caleb Downs', 'Safety', 'Ohio State', 'Testing'],
        trending: 16,
        related: [11, 17, 23]
    },
    {
        id: 27,
        type: 'analysis',
        title: 'Saints Need Weapons: Should They Go WR or TE at #8?',
        excerpt: 'New Orleans has the 8th pick and desperately needs offensive weapons for Derek Carr. Breaking down whether they should target a receiver or tight end.',
        content: `
            <p>The New Orleans Saints finished 7-10 in 2025, missing the playoffs for the third straight year. Offensive stagnation was a primary issue, and with the 8th overall pick, they have a chance to add an elite weapon for Derek Carr.</p>

            <h3>The Saints' Offensive Weapons</h3>

            <p><strong>Wide Receivers:</strong></p>
            <ul>
                <li>Chris Olave (good but not elite WR1)</li>
                <li>Rashid Shaheed (slot/deep threat)</li>
                <li>Nobody else of note (Michael Thomas and Jarvis Landry retired)</li>
            </ul>

            <p><strong>Tight Ends:</strong></p>
            <ul>
                <li>Juwan Johnson (blocking TE, limited receiving)</li>
                <li>Foster Moreau (aging veteran)</li>
                <li>No legitimate receiving threat</li>
            </ul>

            <p><strong>Running Backs:</strong></p>
            <ul>
                <li>Alvin Kamara (aging, 31 years old, declining production)</li>
                <li>Kendre Miller (unproven, injury concerns)</li>
            </ul>

            <h3>Option 1: Wide Receiver</h3>

            <p><strong>Available at #8:</strong></p>
            <ul>
                <li><strong>Tetairoa McMillan (Arizona):</strong> 6'5" alpha receiver with huge catch radius. Would give Carr a true WR1 to pair with Olave as WR2.</li>
                <li><strong>Carnell Tate (Ohio State):</strong> Big-bodied red zone threat. Excellent contested catch ability.</li>
            </ul>

            <p><strong>Pros:</strong></p>
            <ul>
                <li>WR is more valuable than TE in modern NFL</li>
                <li>Olave needs a complementary WR1 to take pressure off</li>
                <li>Derek Carr thrives with multiple weapons (see: Raiders 2016 with Crabtree/Cooper)</li>
            </ul>

            <p><strong>Cons:</strong></p>
            <ul>
                <li>Saints already have a good WR1 in Olave</li>
                <li>Spending #8 pick on WR when TE is a bigger hole is questionable asset management</li>
            </ul>

            <h3>Option 2: Tight End</h3>

            <p><strong>Available at #8:</strong></p>
            <ul>
                <li><strong>Mason Taylor (LSU):</strong> Complete TE who can block and catch. 6'6", 245 lbs with good hands and route running.</li>
                <li><strong>Terrance Ferguson (Oregon):</strong> Athletic receiving TE with YAC ability. More receiving-focused than Taylor.</li>
            </ul>

            <p><strong>Pros:</strong></p>
            <ul>
                <li>TE is a massive need - Saints don't have a receiving threat at the position</li>
                <li>Derek Carr historically loves throwing to TEs (Jared Cook, Darren Waller)</li>
                <li>Saints offense under coordinator Klint Kubiak uses 12 personnel heavily (1 RB, 2 TE)</li>
            </ul>

            <p><strong>Cons:</strong></p>
            <ul>
                <li>Tight ends typically take 2-3 years to develop in NFL</li>
                <li>This TE class isn't elite - Taylor/Loveland are good, not great</li>
                <li>Saints may be able to get a TE in Round 2-3</li>
            </ul>

            <h3>Option 3: Trade Back</h3>
            <p>The Saints could trade back with a team like the Giants (#6 to #8 swap) or Broncos (#8 to #18 range) and pick up extra picks. Then they could:</p>
            <ul>
                <li>Take a WR in the mid-first (Emeka Egbuka, Makai Lemon)</li>
                <li>Double-dip on offensive weapons in Rounds 1-2</li>
                <li>Address OL and pass rush needs with extra picks</li>
            </ul>

            <h3>The Recommendation</h3>
            <p><strong>Take Tetairoa McMillan (WR, Arizona) at #8.</strong></p>

            <p>Here's why:</p>
            <ul>
                <li>McMillan is a top-10 talent who gives the Saints a true alpha receiver</li>
                <li>Pairing McMillan with Olave creates one of the best WR duos in the NFC</li>
                <li>Saints can address TE in Round 2 (Tyler Warren, Gunnar Helm, or Oronde Gadsden II)</li>
                <li>Derek Carr needs as many weapons as possible at age 35</li>
            </ul>

            <p><strong>Prediction:</strong> Saints take McMillan at #8, then trade back into Round 2 to grab a tight end. New Orleans' offense jumps from 23rd to 12th in scoring in 2026.</p>
        `,
        date: '2026-04-10',
        author: 'Team Needs Analyst',
        authorAvatar: 'TN',
        readTime: 10,
        views: 9870,
        likes: 378,
        comments: 201,
        featured: false,
        featuredImage: 'images/players/tetairoa-mcmillan.jpg',
        tags: ['Saints', 'Team Needs', 'Wide Receiver', 'Tight End', 'Analysis'],
        trending: 17,
        related: [12, 13, 14]
    },
    {
        id: 28,
        type: 'news',
        title: 'Daniel Brunskill Declares NFL Draft "Wide Open" in Latest Podcast',
        excerpt: 'The Athletic\'s draft analyst says 2026 is the most unpredictable draft in years, with no consensus picks after #1 overall.',
        content: `
            <p>The Athletic's NFL Draft analyst Daniel Brunskill declared the 2026 draft "the most wide open in at least a decade" on his latest podcast, citing the lack of consensus after Fernando Mendoza goes #1 to the Raiders.</p>

            <h3>Key Quotes from Brunskill</h3>

            <p><strong>On the lack of elite talent:</strong> "After Mendoza, there's no obvious pick at any position. Arvell Reese is great, but is he a top-3 talent? Jeremiyah Love is explosive, but is he worth a top-10 pick for a running back? The Jets at #2 could go 5 different directions."</p>

            <p><strong>On positional value:</strong> "The positional value in this draft is all wrong. The best players are at linebacker, running back, and safety - positions teams typically don't prioritize early. Meanwhile, the positions teams DO value (QB, OT, WR, EDGE) are thin at the top."</p>

            <p><strong>On potential chaos:</strong> "I think we'll see 4-5 trades in the top 15. Teams are desperate for quarterbacks and offensive linemen, but there aren't enough to go around. That creates a seller's market for teams with high picks."</p>

            <h3>Brunskill's Mock Draft (Top 10)</h3>
            <ol>
                <li><strong>Raiders:</strong> Fernando Mendoza, QB, Indiana</li>
                <li><strong>Jets (from Panthers via trade):</strong> Francis Mauigoa, OT, Miami</li>
                <li><strong>Panthers (from Jets via trade):</strong> Ty Simpson, QB, Alabama + 2nd rounder</li>
                <li><strong>Jaguars:</strong> Rueben Bain Jr., EDGE, Miami</li>
                <li><strong>Browns:</strong> Arvell Reese, LB, Ohio State</li>
                <li><strong>Giants (from Broncos via trade):</strong> Drew Allar, QB, Penn State</li>
                <li><strong>Titans:</strong> Tetairoa McMillan, WR, Arizona</li>
                <li><strong>Saints:</strong> Carnell Tate, WR, Ohio State</li>
                <li><strong>Bears:</strong> David Bailey, EDGE, Texas Tech</li>
                <li><strong>Patriots:</strong> Jeremiyah Love, RB, Notre Dame</li>
            </ol>

            <h3>Brunskill's Boldest Predictions</h3>

            <p><strong>1. Five QBs go in Round 1:</strong> "I think teams panic and reach for quarterbacks. Mendoza, Simpson, Allar, Carson Beck, and maybe even Jayden Maiava all go in the first 32 picks."</p>

            <p><strong>2. Jeremiyah Love goes top 10:</strong> "Some team falls in love with his 4.39 speed and takes him. Running backs are devalued until one elite athlete changes the narrative."</p>

            <p><strong>3. No offensive lineman in top 5:</strong> "Francis Mauigoa isn't good enough to go top 5. The Jets will trade out of #2 if they can't get a massive haul for the pick."</p>

            <p><strong>4. Arvell Reese falls out of top 10:</strong> "Linebacker just isn't valued anymore. Micah Parsons went #12 in 2021. Reese could fall even further despite being equally talented."</p>

            <h3>Reaction from Draft Community</h3>
            <p>Brunskill's predictions sparked heated debate on social media:</p>
            <ul>
                <li>ESPN's Mel Kiper called the "five QBs" prediction "absurd"</li>
                <li>NFL Network's Daniel Jeremiah agreed that Love could go top 10</li>
                <li>The Ringer's Danny Kelly pushed back on Reese falling, calling him a "generational LB"</li>
            </ul>

            <p><strong>Bottom Line:</strong> Buckle up - the 2026 NFL Draft is going to be chaotic. After Mendoza at #1, anything can happen.</p>
        `,
        date: '2026-04-15',
        author: 'Draft Media Roundup',
        authorAvatar: 'DR',
        readTime: 8,
        views: 13200,
        likes: 512,
        comments: 289,
        featured: true,
        featuredImage: 'images/players/draft-chaos.jpg',
        tags: ['Mock Draft', 'Predictions', 'Analysis', 'Chaos', 'Wide Open'],
        trending: 18,
        related: [15, 16, 24]
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

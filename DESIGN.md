---
name: NockDraft
description: One person's draft take, dressed as draft-night TV coverage.
colors:
  studio-grey: "#e8ebf0"
  plate-white: "#ffffff"
  plate-tint: "#f4f6f9"
  broadcast-navy: "#0b1f3a"
  navy-lift: "#16345f"
  slate-ink: "#44546c"
  rule-grey: "#cfd5de"
  on-navy-muted: "#b8c6dc"
  position-blue: "#0a4fd6"
  position-blue-deep: "#083fae"
  hover-wash: "#dfe9ff"
  clock-red: "#d6001c"
  clock-red-deep: "#a80016"
  clock-gold: "#ffb612"
  status-green: "#0f7b3f"
  status-amber: "#a86a00"
  night-ground: "#071429"
  night-plate: "#0d203d"
  night-plate-tint: "#112849"
  night-ink: "#eef2f8"
  night-ink-muted: "#a7b5ca"
  night-rule: "#22395c"
  night-blue: "#6aa2ff"
  night-hover-wash: "#183766"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 5.25rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "0"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0"
  row-name:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
  rank:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0"
spacing:
  gutter: "16px"
  plate-pad: "1rem"
  grid-gap: "20px"
  stage-top: "24px"
  section-top: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.clock-red}"
    textColor: "{colors.plate-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem 0 1.1rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.clock-red-deep}"
  button-navy:
    backgroundColor: "{colors.broadcast-navy}"
    textColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem 0 1.1rem"
    height: "44px"
  button-navy-hover:
    backgroundColor: "{colors.navy-lift}"
  text-link:
    textColor: "{colors.position-blue}"
    typography: "{typography.label}"
  site-bar:
    backgroundColor: "{colors.broadcast-navy}"
    textColor: "{colors.on-navy-muted}"
    height: "56px"
  graphic-plate:
    backgroundColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
  graphic-plate-head:
    backgroundColor: "{colors.broadcast-navy}"
    textColor: "{colors.plate-white}"
    typography: "{typography.title}"
    padding: "0 1.1rem 0 1rem"
    height: "44px"
  lower-third-row:
    backgroundColor: "{colors.plate-white}"
    textColor: "{colors.broadcast-navy}"
    typography: "{typography.row-name}"
    height: "56px"
  lower-third-row-hover:
    backgroundColor: "{colors.hover-wash}"
  rank-tab:
    backgroundColor: "{colors.broadcast-navy}"
    textColor: "{colors.plate-white}"
    typography: "{typography.rank}"
    width: "3rem"
  position-chip:
    backgroundColor: "{colors.position-blue}"
    textColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  input-field:
    backgroundColor: "{colors.plate-white}"
    textColor: "{colors.broadcast-navy}"
    rounded: "{rounded.none}"
---

# Design System: NockDraft

## Overview

**Creative North Star: "Draft-Night Broadcast"**

Every prospect and every pick is shown the way draft-night television shows it: as a graphic. A player is a podium card, a ranking is a stack of lower-thirds, a headline is a slanted title bar, the board scrolls past in a crawl. The ground is a cool studio grey; content sits on opaque white plates headed by deep broadcast-navy bars. The page reads as a person's own coverage package, not a dashboard of floating cards.

Density is broadcast-graphic density: compact rows (56px) with heavy condensed names and tabular numbers, set against generous plate spacing. One family does all the work. Barlow Condensed in heavy italic caps carries anything that would be a TV graphic; plain Barlow carries anything you read. Corners are square and bar ends are cut on a slant. Depth comes from opaque plates and a hairline-plus-drop shadow, never from blur or glow.

Colour is rationed like a broadcast's on-air package. Navy is the chrome. Blue is information (links, position labels). Red is the broadcast's urgency: on the clock, live, and the one primary action. Gold appears only on the clock. The 2026 mock keeps a night variant through `[data-theme="dark"]`. The Two-Minute Drill game at `/game/` sits outside this system by intent.

**Key Characteristics:**
- Cool studio-grey ground, opaque white plates, navy header bars.
- Barlow Condensed heavy italic caps for graphics; Barlow regular for reading; tabular numerals in every rank and stat.
- Square corners everywhere; bar ends cut on a slant (8-14px).
- Red for on-the-clock, live and primary action; gold for the clock; blue for links and positions.
- Flat opaque surfaces with a hairline-plus-drop shadow; no blur, no glow, no gradient text.
- Motion is broadcast motion: one bar wipe, a chyron slide on hover, a crawl that pauses.

## Colors

A cool, low-chroma studio palette carrying three rationed broadcast signals.

### Primary
- **Broadcast Navy** (#0b1f3a): The chrome. Site bar, footer, graphic-plate header bars, rank tabs, school chyrons, filter-button active state, pick-card header. Also the body ink colour on light plates.
- **Navy Lift** (#16345f): The second navy. Crawl label, secondary nav rails and tab bars, the lit end of the podium gradient, navy-button hover.

### Secondary
- **Position Blue** (#0a4fd6; night #6aa2ff): The deliberate link and position-label colour. Text links, position chips and the position column in rows, crawl position tags, focus rings. Hover deepens to Position Blue Deep (#083fae; night #8fb8ff).
- **Hover Wash** (#dfe9ff; night #183766): The chyron bar that slides across a row on hover or focus, the "my pick" slot, table-row hover.

### Tertiary
- **Clock Red** (#d6001c): On the clock, live, and primary action. The "On the clock" tag, the giant #1 in the podium art, pick-number tabs, the primary button, the "you" side of the score bug, the 3px live rule under the site bar, the "Draft" plate in the wordmark, text selection. Hover deepens to Clock Red Deep (#a80016).
- **Clock Gold** (#ffb612): The clock and only the clock. Game-clock readouts in the score bug and clock tags.

### Neutral
- **Studio Grey** (#e8ebf0; night #071429): Page ground.
- **Plate White** (#ffffff; night #0d203d): Every graphic plate, row, input and dialog.
- **Plate Tint** (#f4f6f9; night #112849): Headshot wells, stat boxes, size chyron, pick slots.
- **Slate Ink** (#44546c; night #a7b5ca): Secondary text, meta lines, small print.
- **Rule Grey** (#cfd5de; night #22395c): Row dividers, plate hairlines, control borders.
- **On-Navy Muted** (#b8c6dc): Resting nav links and small text on navy.
- **Status Green** (#0f7b3f; night #3ccf7f) and **Status Amber** (#a86a00): Data status only (strengths, freshness, cautions, warnings). Not decorative.

### Named Rules
**The Red Means Now Rule.** Red marks on-the-clock, live, and the single primary action of a view. Beyond those, it appears only in the wordmark plate, the live rule under the site bar, and text selection. If it isn't happening now and isn't the main action, it isn't red.

**The Gold Is The Clock Rule.** Gold is the clock. It never fills a badge, an accent word, an archive label or a highlight.

**The Blue Is Information Rule.** Position Blue is for links and position labels. It is never a fill for a hero, a header or a decorative accent.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)

**Character:** One family in two widths. The condensed heavy italic caps are the on-air graphics; the regular width is the analyst talking. Weights loaded: Condensed 600/700/800 roman and 700/800/900 italic; Barlow 400-700.

### Hierarchy
- **Display** (Condensed 900 italic, clamp(3rem, 5.6vw, 5.25rem), 0.88, uppercase, balanced wrap): The podium name. One per view.
- **Headline** (Condensed 900 italic, clamp(2.4rem, 6vw, 4.25rem), 0.95, uppercase): Page titles and round titles (round titles clamp(2.2rem, 5vw, 3.25rem)).
- **Title** (Condensed 800 italic, 1.35rem, 1.1, uppercase): Graphic-plate header bars.
- **Row Name** (Condensed 700, 1.25rem, uppercase, single line with ellipsis): Player names in lower-third rows; 1.12rem under 640px.
- **Rank** (Condensed 800 italic, 1.45rem, tabular): Rank tabs. Stats and facts use Condensed 800 at 2rem.
- **Label** (Condensed 700, 1.05rem, uppercase, 0.02em): Nav, links, chyrons, buttons (buttons step to 800 italic 1.15rem).
- **Body** (Barlow 400, 1rem, 1.5): Takes and reasoning, max 46ch on the podium.
- **Small** (Barlow 400, 0.82-0.85rem): Meta lines (position and school), source counts, foot notes.

### Named Rules
**The Tabular Numbers Rule.** Every rank, pick number, stat and clock is set with `"tnum" 1, "lnum" 1` so columns of numbers line up like a scoreboard.

**The Two Widths Rule.** Graphics speak in Condensed caps; anything longer than a line speaks in regular Barlow, sentence case. Never set reasoning in condensed caps.

**The Zero Tracking Rule.** Headlines run at 0 letter-spacing. The only tracked text is nav (0.02em).

## Layout

Content sits in a centred 1240px column with a 16px gutter (the boards run 1450px with a 4% gutter). Graphics stack in grids with a 20px gap. The hub's first band is a two-column stage (1.45fr : 1fr) of podium card and big-board plate, then a three-column deck. At 1080px the stage collapses to one column and the deck to two; at 680px everything is one column and the podium becomes art-over-copy with a 300px art well. The site bar is sticky at 56px; under 640px (700px on boards) the nav wraps to its own 40px scrolling row. Rows keep a 56px minimum height and a fixed grid: rank tab 3rem, headshot 40px, name, position.

## Elevation & Depth

Flat, opaque plates on a grey ground. Depth is a 1px rule-grey hairline under each plate plus one soft, tightly negative-spread navy drop that reads as a plate lifted off the studio wall. Shadows are fixed at rest; hover does not lift. There is no backdrop blur anywhere, and the legacy layer strips it.

### Shadow Vocabulary
- **Plate** (`box-shadow: 0 1px 0 #cfd5de, 0 10px 24px -18px rgba(11, 31, 58, .45)`): Every graphic plate.
- **Hero plate** (`box-shadow: 0 1px 0 #cfd5de, 0 18px 40px -28px rgba(11, 31, 58, .6)`): The podium card and entry panels.
- **Table plate** (`box-shadow: 0 1px 0 #cfd5de, 0 14px 30px -24px rgba(11, 31, 58, .55)`): Board tables and pick cards.
- **Dialog** (`box-shadow: 0 24px 60px -20px rgba(11, 31, 58, .55)`): Dialogs and hover profiles, over a `rgba(7, 20, 41, .65)` backdrop.
- **Cutout** (`filter: drop-shadow(0 10px 18px rgba(0, 0, 0, .45))`): Headshot cutouts on navy art and team helmets.

### Named Rules
**The Opaque Plate Rule.** Plates are solid. No translucency, no backdrop-filter, no glow halos.

## Shapes

Every corner is square (0 radius); the legacy layer forces it across older components. The world's one recurring silhouette is the slanted bar end: a parallelogram cut on the right edge via clip-path, `polygon(0 0, 100% 0, calc(100% - Npx) 100%, 0 100%)`, with N at 8px for small tabs (rank tab, primary button on boards, wordmark plate), 10px for buttons and title chyrons, 12px for labels and pick-number tabs. Top borders mark plate identity: 3px navy on stat strips, 6px navy (or team colour) on pick cards and dialogs.

## Components

### Buttons
Broadcast buttons: heavy italic caps on a slanted bar.
- **Shape:** Square with a 10px right slant (8px on boards); 44px minimum height.
- **Primary:** Clock Red fill, white Condensed 800 italic 1.15rem uppercase, padding 0 1.4rem 0 1.1rem, with an optional inline SVG arrow or play mark.
- **Hover / Focus:** Background to Clock Red Deep over 0.2s; focus is the global 3px Position Blue outline at 2px offset.
- **Navy:** Same shape in Broadcast Navy, hovering to Navy Lift. For secondary actions.
- **Text link:** Condensed 700 uppercase in Position Blue with an inline SVG arrow; underline on hover.

### Chips
- **Chyron:** A row of flush square segments in Condensed 700 uppercase: position on Position Blue, school on Broadcast Navy, size on Plate Tint with Slate Ink.
- **Filter buttons:** White plate, rule-grey border, Condensed 700 uppercase; hover border goes navy; active fills navy (night: Position Blue with dark text).

### Cards / Containers
- **Corner Style:** Square.
- **Background:** Plate White.
- **Shadow Strategy:** Plate shadow (see Elevation).
- **Border:** None at the sides; a navy header bar (44px min, Title type, small source note in Barlow) and a ruled foot with meta text and a text link.
- **Internal Padding:** 1rem, 0.75rem in footers.

### Inputs / Fields
- **Style:** Plate White, 1px Rule Grey border, square, Barlow body text.
- **Focus:** 3px Position Blue outline, 2px offset.

### Navigation
- **Site bar:** Sticky Broadcast Navy bar, 56px, closed by a 3px Clock Red rule. Wordmark "Nock" in white Condensed 900 italic with "Draft" on a red slanted plate. Nav links Condensed 700 1.05rem uppercase in On-Navy Muted, white on hover, white with a 3px white underline for the current page.
- **Secondary rails:** Navy Lift bars with the same link treatment.
- **Footer:** Broadcast Navy, wordmark plus Condensed 700 uppercase white links.

### Lower-Third Row (signature)
The unit of every ranking. A 56px grid row: a navy rank tab with a slanted right edge and tabular italic numeral, a 40x46 headshot well (initials fallback on Plate Tint), a Condensed uppercase name over a Barlow meta line, and a Position Blue position column. On hover or focus a Hover Wash bar slides in from the left (`scaleX`, 0.35s, `cubic-bezier(.16, 1, .3, 1)`).

### Podium Card (signature)
The hero plate. Navy art well (Navy Lift to Navy gradient) with a giant red italic #1 and the headshot cut out over it; copy side opens with a red "On the clock" tag flush to the top, then the Display name, a chyron, a ruled three-up facts strip, a Barlow take and actions. Enters with one bar wipe, red then navy (0.7s, 0.09s stagger), revealing the player.

### Crawl
A 34px white strip under the site bar: a slanted Navy Lift label, then a 90s linear ticker of rank, name and blue position. Pauses on hover and focus.

### Score Bug
The game module rendered as a broadcast score bug: navy strip with team cells (the player's side on red), a black clock cell with the time in Clock Gold.

## Do's and Don'ts

### Do:
- **Do** put every ranking in lower-third rows with a navy slanted rank tab and tabular numerals.
- **Do** head every plate with a Broadcast Navy bar in Condensed 800 italic caps.
- **Do** cut bar ends with the right-edge slant (8, 10 or 12px) and keep every corner square.
- **Do** keep red to on-the-clock, live and the single primary action; keep gold to the clock.
- **Do** use Position Blue (#0a4fd6, night #6aa2ff) for links and position labels.
- **Do** carry the night variant through `[data-theme="dark"]` token swaps, not separate rules.
- **Do** make every motion static under `prefers-reduced-motion`: no crawl, no wipe, no row slide.

### Don't:
- **Don't** use rounded corners, pills or circular avatars.
- **Don't** use backdrop blur, glow halos, translucent glass plates or gradient-filled text.
- **Don't** use red for warnings, concerns, watch stars, section icons or decoration.
- **Don't** use gold for badges, accent words or labels.
- **Don't** set reasoning or body copy in condensed caps.
- **Don't** apply this system to `/game/`; the Two-Minute Drill keeps its own look.

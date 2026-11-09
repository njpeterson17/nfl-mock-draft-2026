# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Mostly casual football and basketball fans arriving from a shared link or search. They want to see who goes where, skim the reasoning, maybe check a prospect ranking, and maybe play the game. Most visits are short and many are on phones.

## Product Purpose
NockDraft (nockdraft.lol) is a one-person draft site. It has a hand-built 2026 NFL mock draft with reasoning for each pick, consensus big boards for the 2027 NFL and NBA drafts built from several publishers' rankings, a set of draft tools (7-round simulator, War Room, draft grades, consensus mock, trade calculator and others), and a free arcade football game, Two-Minute Drill. A visit is a success when a casual fan finds the pick or prospect they came for quickly, gets the take, and clicks around or shares.

## Positioning
It is one person's draft take, not a big media network. The mock has real opinions and reasoning for each pick, the boards blend several publishers' rankings into one consensus, and the site has a playful side (the .lol domain, the game). The design should look like something a person made with taste. The current version reads as AI-generated because of its generic translucent card panels, centered eyebrow-and-hero layout, and lack of personality.

## Operating Context
Static HTML/CSS/JS with no build step, deployed by Porkbun GitHub Connect from the `main` branch. Pages: `/` is the 2027 hub, `/2026/` is the 2026 mock (pick cards hardcoded in `2026/index.html`, data in `src/js/data.js`), `/nfl-board/` and `/nba-board/` are standalone board apps with inline styles that read `players.json`, `/game/` is the canvas game, and `/pages/*.html` holds the tools. Shared styles live in `src/css/*.css`, about 20 files that override each other. Google AdSense is on the pages.

## Capabilities and Constraints
- No build step. Plain files only.
- Pick content, player data, rankings and reasoning must not change during visual work.
- Player headshots come from the board thumbnails or a fallback chain. Team identity comes from logos and helmets already in `images/`.
- AdSense script tags must stay.
- Old share links (`/#pick=`, `/#share`) redirect to `/2026/` and must keep working.

## Brand Commitments
- Name: NockDraft, domain nockdraft.lol.
- Sub-brands in use: "Draftroom" (board apps) and "Two-Minute Drill" (game).

## Evidence on Hand
Real data: 2026 mock picks with reasoning, 2027 NFL and NBA consensus boards with source ranks, headshot thumbnails, and team logos. There are no testimonials, traffic numbers or press, so none may be invented. The about page currently claims "over a decade" of draft study; it is unverified and must not be repeated anywhere new.

## Product Principles
- Get the fan to the pick or prospect within seconds, especially on a phone.
- It should read as a person's take, with opinions and a sense of humor, not as a neutral data dump.
- Real content (names, picks, ranks, reasoning) carries the design. Containers do not.
- The site should feel like one site across the mock, boards, tools and game.

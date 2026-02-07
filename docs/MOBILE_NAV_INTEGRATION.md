# Mobile Bottom Navigation Integration Guide

## Overview
This mobile bottom navigation system provides an optimized mobile experience for the NFL Mock Draft website with gesture support, smart context switching, and a modern bottom sheet interface.

## Files Added
1. `css/mobile-bottom-nav.css` - All mobile navigation styles
2. `js/mobile-nav.js` - Mobile navigation JavaScript functionality

## Integration Steps

### Step 1: Add CSS Link
Add the mobile navigation CSS file to your HTML `<head>` section, after the other CSS files:

```html
<link rel="stylesheet" href="css/mobile-bottom-nav.css">
```

### Step 2: Add JavaScript
Add the mobile navigation JavaScript file before the closing `</body>` tag:

```html
<script src="js/mobile-nav.js"></script>
```

### Step 3: Add Hammer.js (Optional but Recommended)
For gesture support, add Hammer.js in the `<head>`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
```

Or let the script load it dynamically (it will auto-load if not present).

## Features

### 1. Bottom Navigation Bar
- **Home** - Round 1 view
- **Draft** - Round selector submenu
- **Create** - Create Your Mock (highlighted button)
- **Board** - Big Board view
- **More** - Additional options in bottom sheet

### 2. Smart Context Switching
The contextual action bar changes based on current view:

**Rounds View:**
- Prev / Jump / Filter / Next / Share

**Create Mock View:**
- Undo / Best Available / Position Filter / Trade / Submit Pick

**Big Board View:**
- Search / Filter / Compare / Sort / View

### 3. Gesture Support
- **Swipe Left** - Next pick (in rounds view)
- **Swipe Right** - Previous pick (in rounds view)
- **Swipe Up** - Open Quick Actions drawer
- **Swipe Down** - Close details/modals
- **Double Tap** - Toggle dark/light theme
- **Long Press** - Show context menu

### 4. Floating Action Button (FAB)
- Primary action changes based on context
- Expands to show mini-actions (Share, Export, Save)
- Hidden when keyboard is open

### 5. Quick Actions Drawer
Pull-up drawer with:
- Jump to Pick
- Filter by Position
- Search Players
- Saved Mocks
- Share Draft
- Settings

### 6. More Menu Sheet
Bottom sheet with:
- EDP Leaderboard
- ADP Leaderboard
- Team Drafts
- Draft Grades
- Trade Calculator
- Dark Mode Toggle
- Help & Tips
- Settings

### 7. Additional Features
- **Scroll Progress Indicator** - Shows reading progress
- **Pull to Refresh** - Reload the page
- **Keyboard Detection** - Hides navigation when keyboard opens
- **Haptic Feedback** - Vibration feedback on interactions (supported devices)
- **Safe Area Support** - Handles iPhone X+ notch and home indicator

## Responsive Behavior

### Mobile (< 768px)
- Desktop navigation hidden
- Mobile bottom navigation shown
- Contextual action bar visible
- FAB visible
- Touch-optimized interface

### Desktop (≥ 768px)
- Desktop navigation visible
- All mobile elements hidden
- Original interface preserved

## Customization

### Changing Navigation Items
Edit the `createBottomNav()` function in `js/mobile-nav.js`:

```javascript
nav.innerHTML = `
    <div class="mobile-bottom-nav-items">
        <button class="mobile-nav-item" data-tab="round1" onclick="handleNavClick('round1')">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </button>
        <!-- Add your items here -->
    </div>
`;
```

### Changing Context Actions
Edit the `updateNavContext()` function in `js/mobile-nav.js` to customize actions for each view.

### Styling
All styles use CSS variables from the existing theme:
- `--primary` - Background colors
- `--secondary` - Card backgrounds
- `--accent` - Primary accent color
- `--text-primary` - Primary text
- `--text-secondary` - Secondary text

## Browser Support
- Chrome 60+
- Safari 12+
- Firefox 60+
- Edge 79+
- iOS Safari 12+
- Chrome Android 60+

## Performance
- CSS is wrapped in `@media (max-width: 768px)` - only loads on mobile
- JavaScript checks viewport width before initializing
- Hammer.js loads asynchronously only when needed
- Minimal impact on desktop performance

## Troubleshooting

### Navigation not showing
1. Check viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. Ensure CSS file is loading correctly
3. Check browser console for JavaScript errors

### Gestures not working
1. Ensure Hammer.js is loaded
2. Check for JavaScript conflicts
3. Verify touch events aren't being prevented elsewhere

### Layout issues on specific devices
1. Check safe area insets are working: `env(safe-area-inset-bottom)`
2. Test on actual devices when possible
3. Adjust padding/margins in CSS if needed

## Future Enhancements
- [ ] Add animation preferences toggle
- [ ] Implement service worker for offline support
- [ ] Add PWA install prompt
- [ ] Create custom haptic patterns
- [ ] Add voice navigation support

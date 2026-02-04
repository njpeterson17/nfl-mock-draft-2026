# Giscus Comments Setup Guide

To enable the comments section on your NFL Mock Draft website, follow these steps:

## Step 1: Enable GitHub Discussions

1. Go to your repository: https://github.com/njpeterson17/nfl-mock-draft-2026
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check **Discussions** to enable it

## Step 2: Configure Giscus

1. Go to https://giscus.app/
2. Enter your repository: `njpeterson17/nfl-mock-draft-2026`
3. Select the discussion category (e.g., "General")
4. Choose your preferred settings:
   - **Theme**: Matches your site (already set to "dark")
   - **Language**: English
5. Copy the generated script

## Step 3: Update index.html

Replace the Giscus script in `index.html` with your generated script. Look for this section:

```html
<script src="https://giscus.app/client.js"
    data-repo="njpeterson17/nfl-mock-draft-2026"
    data-repo-id="YOUR_REPO_ID"
    data-category="General"
    data-category-id="YOUR_CATEGORY_ID"
    ...
>
```

Update `data-repo-id` and `data-category-id` with your actual values from Giscus.

## How It Works

- Users sign in with GitHub to post comments
- Comments are stored in GitHub Discussions
- No database or server needed - completely free!
- Supports:
  - Markdown formatting
  - Reactions (👍 👎 😄 🎉 😕 ❤️ 🚀 👀)
  - Anonymous reading (GitHub account required to post)

## Alternative: Manual Setup

If you prefer not to use Giscus, you can use these alternatives:

1. **Disqus** (easier setup, but has ads on free tier)
2. **Utterances** (similar to Giscus, uses GitHub Issues)
3. **Facebook Comments** (requires Facebook)

# Blog Post Deployment Script - Usage Guide

## Overview

The `add-blog-posts.js` script automates the process of adding new blog posts to the website. It handles all the heavy lifting of converting markdown files to TypeScript BlogPost objects and inserting them into the blog-data.ts file.

## Key Features

### ✅ Auto-Features First 3 Posts
**NEW:** The first 3 posts in each batch are automatically set to `featured: true`, ensuring they appear in the "Featured Articles" section on the homepage.

```bash
⭐ 1. What is Engineering Design in Dana Point (featured)
⭐ 2. Stormwater Design Engineer in Westminster (featured)
⭐ 3. Best Structural Engineering Firms in Orange (featured)
   4. Custom House Engineering Design in Yorba Linda
   5. Types of Engineering Design in Fountain Valley
```

### ✅ Auto-Detects Blog Directory
No need to specify the directory - the script automatically finds the most recent `blog-posts-*` folder:

```bash
# Automatically uses the newest blog-posts-* directory
node scripts/add-blog-posts.js

# Output:
# 📁 Auto-detected directory: blog-posts-nov-8-2025
```

You can also specify a directory explicitly if needed:

```bash
node scripts/add-blog-posts.js blog-posts-nov-8-2025
```

### ✅ Auto-Detects Publish Date
The script intelligently determines the publish date:
1. Uses `publishDate` from frontmatter if available
2. Falls back to today's date
3. Formats as YYYY-MM-DD automatically

### ✅ Correct Array Insertion
The script finds the `// Helper functions` comment and inserts posts **before** it, ensuring they're properly added to the BLOG_POSTS array (not inside a function).

## Usage

### Basic Usage (Recommended)

```bash
# Step 1: Run the script
node scripts/add-blog-posts.js

# Step 2: Verify the output
# ⭐ 3 posts set as FEATURED (will appear in Featured Articles section)
# ✅ Successfully added 5 blog posts to blog-data.ts

# Step 3: Test the build
npm run build

# Step 4: Deploy
git add src/lib/blog-data.ts blog-posts-*/ .claude/skills/socal-engineering-blog/BLOG-TRACKING.md
git commit -m "Add 5 new SEO-optimized blog posts"
git push origin master
npm run indexnow
```

### Advanced Usage

```bash
# Specify a custom directory
node scripts/add-blog-posts.js blog-posts-custom-2025

# The script will still auto-feature first 3 posts
```

## Expected Output

When you run the script, you'll see output like this:

```
📁 Auto-detected directory: blog-posts-nov-8-2025
Found 5 markdown files to process
Processing 1-what-is-engineering-design-dana-point.md...
  → Created post: what-is-engineering-design-in-dana-point-dana-point ⭐ FEATURED
Processing 2-stormwater-design-engineer-westminster.md...
  → Created post: stormwater-design-engineer-in-westminster-westminster ⭐ FEATURED
Processing 3-best-structural-engineering-firms-orange.md...
  → Created post: best-structural-engineering-firms-in-orange-ca-orange-ca ⭐ FEATURED
Processing 4-custom-house-engineering-design-yorba-linda.md...
  → Created post: custom-house-engineering-design-in-yorba-linda-yorba-linda
Processing 5-types-of-engineering-design-fountain-valley.md...
  → Created post: types-of-engineering-design-in-fountain-valley-fountain-valley

✅ Successfully added 5 blog posts to blog-data.ts
⭐ 3 posts set as FEATURED (will appear in Featured Articles section)

Added posts:
⭐ 1. What is Engineering Design in Dana Point: Complete Guide 2025
⭐ 2. Stormwater Design Engineer in Westminster: Expert Guide 2025
⭐ 3. Best Structural Engineering Firms in Orange CA: Complete Guide 2025
   4. Custom House Engineering Design in Yorba Linda: Complete Guide 2025
   5. Types of Engineering Design in Fountain Valley: Complete Guide 2025

💡 Tip: The first 3 posts are automatically featured to appear on the homepage.
```

## Why First 3 Posts?

The "Featured Articles" section on the homepage displays the most important/recent content. By automatically featuring the first 3 posts in each batch:

1. **Homepage stays fresh** - New content appears immediately in Featured Articles
2. **SEO benefit** - Featured posts get more visibility and clicks
3. **User engagement** - Visitors see the latest content first
4. **No manual work** - You don't have to manually set featured: true

## Troubleshooting

### Posts Not Appearing in Featured Articles?

**Check the build output:**
```bash
npm run build
# Should show: ✓ Generating static pages (63/63)
```

**Verify featured status:**
```bash
grep -A 8 "id: 'your-post-id'" src/lib/blog-data.ts | grep featured
# Should show: featured: true,
```

**Clear browser cache:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or use incognito/private browsing mode

### Script Can't Find Directory?

```bash
# If auto-detection fails, specify the directory:
node scripts/add-blog-posts.js blog-posts-nov-8-2025
```

### Posts Inserted in Wrong Location?

This should not happen anymore - the script finds `// Helper functions` and inserts before it. If it does happen:

```bash
# Restore previous version
git checkout HEAD~1 -- src/lib/blog-data.ts

# Re-run the script
node scripts/add-blog-posts.js
```

## Integration with Blog Generation Skill

When using the `socal-engineering-blog` skill:

1. Skill generates 5 markdown files in `blog-posts-[DATE]/` directory
2. Skill updates `BLOG-TRACKING.md` with keyword+city combinations
3. **Run this script** to convert and add posts to website
4. Deploy to Netlify
5. Submit to IndexNow

The script handles all the technical details of:
- Converting markdown to TypeScript
- Setting featured status
- Inserting at correct location
- Preserving existing posts

## File Structure

```
project-root/
├── blog-posts-nov-8-2025/          # Generated by skill
│   ├── 1-post-name.md
│   ├── 2-post-name.md
│   ├── 3-post-name.md (⭐ featured)
│   ├── 4-post-name.md
│   └── 5-post-name.md
├── scripts/
│   └── add-blog-posts.js           # This script
└── src/lib/
    └── blog-data.ts                # Updated by script
```

## Version History

- **v3.0** - Auto-feature first 3 posts, auto-detect directory, auto-detect date
- **v2.0** - Fixed insertion bug (posts in wrong location)
- **v1.0** - Initial version

## Support

For issues or questions, check:
- `.claude/skills/socal-engineering-blog/SKILL.md` - Full skill documentation
- `scripts/add-blog-posts.js` - Script source code with comments

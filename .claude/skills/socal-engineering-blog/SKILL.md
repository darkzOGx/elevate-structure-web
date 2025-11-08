---
name: socal-engineering-blog
description: Generate SEO-optimized, geo-targeted engineering design blog posts for aaaengineeringdesign.com focused on Southern California cities. Use when user requests blog posts about structural engineering, civil engineering, MEP design, or engineering services with California/city-specific optimization. Includes comprehensive keyword strategy, interlinking rules, local SEO optimization, and AI Overview (AIO) optimization.
---

# SoCal Engineering Blog Generator

Generate high-quality, SEO-optimized blog posts for AAA Engineering Design targeting Southern California cities with proper keyword integration, internal linking, and local SEO optimization.

## When to Use This Skill

Use this skill when the user requests:
- Blog posts for aaaengineeringdesign.com
- Engineering-related content (structural, civil, MEP, residential, commercial)
- Geo-targeted content for California cities (especially Orange County, LA, San Diego)
- 5 daily blog posts targeting different SoCal cities
- Content with keyword optimization and interlinking strategy
- Local SEO optimized articles
- AI Overview (AIO) optimized content

## Workflow: Generating 5 Daily Blog Posts

### Step 0: Check Blog Tracking (MANDATORY - DO THIS FIRST!)

**⚠️ CRITICAL - MUST CHECK BEFORE GENERATING ANY POSTS:**

```bash
view BLOG-TRACKING.md
```

**This file tracks ALL keyword+city combinations already used. You MUST:**
1. ✅ Read BLOG-TRACKING.md to see which keyword+city pairs are already published
2. ✅ Verify your selected keyword+city combination is NOT already used
3. ✅ Choose cities from "Available Cities" section
4. ✅ Update BLOG-TRACKING.md after generating new posts

**NEVER create duplicate keyword+city combinations!**

---

### Step 1: Read Required References

**CRITICAL - Always read these files FIRST:**

```bash
view references/keyword-list.md
view references/city-data.md
view references/blog-template.md
view references/interlinking-strategy.md
```

These files contain:
- All available keywords with intent and priority
- Complete city data (demographics, building codes, permit info)
- Exact blog post structure matching aaaengineeringdesign.com format
- Internal linking rules and anchor text strategy

### Step 2: Select Keywords and Cities

**Keyword Selection:**
1. Choose 5 keywords from `references/keyword-list.md`
2. Mix keyword types:
   - 1-2 Cluster articles (commercial/transactional intent)
   - 2-3 PAA/Informational articles
   - Occasionally include 1 Pillar article
3. Prioritize keywords marked as 🎯 High Priority
4. **CHECK BLOG-TRACKING.md** - Avoid keywords already used with target cities

**City Selection:**
1. **CHECK BLOG-TRACKING.md FIRST** - Use only available cities
2. Use rotation pattern from `references/city-data.md`
3. Day 1: Long Beach, Irvine, Newport Beach, Anaheim, Santa Ana
4. Day 2: Huntington Beach, Costa Mesa, Fullerton, Mission Viejo, Laguna Beach
5. Day 3: San Diego, Los Angeles, Orange, Tustin, Garden Grove
6. Day 4-5: Continue rotation through all 25 cities
7. Mix coastal and inland cities
8. Vary property values (luxury, mid-range, affordable)
9. **VERIFY: Each keyword+city pair is unique (not in BLOG-TRACKING.md)**

**Pairing Strategy:**
- Match keyword intent with appropriate city
- Commercial keywords → Higher-value cities (Newport Beach, Irvine)
- Informational keywords → Any city
- Transactional keywords → Major metro areas (LA, Long Beach, San Diego)

### Step 3: Generate Each Blog Post

For each of the 5 posts, follow this process:

**A. Create Post Structure**

Use the EXACT structure from `references/blog-template.md`:

1. Header Metadata
2. Opening paragraph with regional context
3. What is [Topic]? section
4. Core Services/Types section
5. Geographic Considerations (heavy city mentions)
6. Cost section (regional pricing)
7. Selection criteria section
8. Common challenges section
9. Why Choose AAA section
10. Contact section
11. CTA box
12. Related Articles (3 posts)

**B. Write Content Following These Rules:**

**Geographic Integration (CRITICAL):**
- Primary City: 15-20 mentions throughout post
- Secondary Cities: 5-8 mentions total
- Use city-specific data from `references/city-data.md`
- Include local regulations, permit times, market data

**Keyword Optimization:**
- Primary keyword in: Title, H1, first paragraph, one H2, conclusion, URL
- Keyword density: 1-1.5% (natural, not stuffed)
- Optimize for featured snippets (direct answers early)

**Internal Linking (from `references/interlinking-strategy.md`):**
- 5-8 internal links total per post
- 2-3 service page links
- 2-4 blog post links (related topics)
- Use keyword-rich anchor text
- First link within first 500 words

**External Linking:**
- 2-3 authority links (building dept, CBC, professional orgs)
- Open in new tabs

**C. Add Schema Markup**

Include schemas from `assets/schema-templates/`:
1. Article Schema (always)
2. LocalBusiness Schema (for geo-targeted posts)
3. FAQ Schema (for PAA-style posts)

**D. Create Related Articles Section**

Select 3 related articles:
- One from same category
- One with similar keyword theme
- One targeting different city/region

### Step 4: Quality Control Checklist

Verify each post has:
- [ ] **Keyword+City combination verified as NEW in BLOG-TRACKING.md**
- [ ] Primary keyword in title, H1, first paragraph, one H2
- [ ] City name in title and 2+ H2 headers
- [ ] 5-8 internal links with keyword anchors
- [ ] Primary city mentioned 15-20 times
- [ ] Local building codes/regulations included
- [ ] Schema markup included
- [ ] Related articles section populated

### Step 5: Output Format

Create 5 separate markdown files:
```
blog-posts-[DATE]/
├── 1-[keyword-slug]-[city-slug].md
├── 2-[keyword-slug]-[city-slug].md
├── 3-[keyword-slug]-[city-slug].md
├── 4-[keyword-slug]-[city-slug].md
└── 5-[keyword-slug]-[city-slug].md
```

Save files to project root directory in format: `blog-posts-nov-[day]-2025/`

### Step 6: Deploy to Website (CRITICAL - AUTOMATED PROCESS)

**IMPORTANT: Use the automated script to add posts to blog-data.ts**

The project includes `scripts/add-blog-posts.js` which automatically:
1. Parses markdown files from `blog-posts-[DATE]/` directory
2. Extracts frontmatter and content
3. Converts to TypeScript BlogPost objects
4. **CORRECTLY inserts posts into BLOG_POSTS array BEFORE helper functions**
5. Preserves all existing posts and structure

**Deployment Commands:**
```bash
# 1. Run the conversion script
node scripts/add-blog-posts.js

# 2. Verify build succeeds
npm run build

# 3. Commit changes
git add src/lib/blog-data.ts blog-posts-[DATE]/ .claude/skills/socal-engineering-blog/BLOG-TRACKING.md
git commit -m "Add 5 new SEO-optimized blog posts for [Date]"

# 4. Push to trigger Netlify deployment
git push origin master

# 5. Submit to search engines
npm run indexnow
```

**CRITICAL BUG FIX IMPLEMENTED:**
The `add-blog-posts.js` script was updated to fix a bug where posts were incorrectly inserted into the `getRelatedPosts()` function instead of the `BLOG_POSTS` array. The script now:
- Finds the `// Helper functions` comment
- Locates the closing bracket `]` of BLOG_POSTS array BEFORE that comment
- Inserts new posts at the correct location
- Ensures posts appear in "All Articles" and are sorted by date

**Never manually edit blog-data.ts** - always use the automated script to prevent insertion errors.

### Step 7: Post-Generation Summary & Tracking Update

**MANDATORY: Update BLOG-TRACKING.md immediately after generating posts**

Add each new post to the tracking file:
```markdown
| [Keyword/Topic] | [City] | ✅ Published | [Date] |
```

Then provide summary:
1. Keywords used with intent types
2. Cities targeted
3. Internal links created
4. **Confirmation that BLOG-TRACKING.md has been updated**
5. Recommendations for next batch

## Key Principles

**Geographic Authenticity:**
- Every city mention must be contextual
- Include real building codes, permit data
- Use specific examples, not generic statements

**Keyword Integration:**
- Write for humans first
- Natural language over keyword density
- Variations and LSI terms

**Link Strategy:**
- Every link adds value
- Service pages are priority
- Distribute links throughout

## Common Mistakes to Avoid

❌ DON'T:
- Force city names unnaturally
- Keyword stuff
- Reuse examples across posts
- Link to competitors
- Skip internal linking

✅ DO:
- Make city mentions contextual
- Write naturally
- Provide unique examples
- Link strategically
- Include local data

## Resources

### references/
- `keyword-list.md` - Complete keyword inventory, GSC queries, tracking
- `city-data.md` - 25+ SoCal cities with full demographics, regulations, permit data
- `blog-template.md` - EXACT post structure matching aaaengineeringdesign.com
- `interlinking-strategy.md` - Complete linking system and anchor text rules

### assets/
- `schema-templates/article-schema.json` - Article schema template
- `schema-templates/local-business-schema.json` - LocalBusiness schema template
- `schema-templates/faq-schema.json` - FAQ schema template

---

## Troubleshooting & Common Issues

### Issue: Blog Posts Not Appearing on Website

**Symptoms:**
- Posts don't show in "All Articles" section
- Posts missing from recent posts
- Build succeeds but posts invisible

**Cause:**
Posts were inserted in wrong location in `blog-data.ts` file (inside helper functions instead of BLOG_POSTS array)

**Solution:**
1. Restore blog-data.ts: `git checkout HEAD~1 -- src/lib/blog-data.ts`
2. Re-run the corrected script: `node scripts/add-blog-posts.js`
3. Verify helper functions are AFTER posts: Check that `// Helper functions` comment comes after the closing `]` of BLOG_POSTS array
4. Test build: `npm run build` should succeed with correct number of static pages
5. Commit and redeploy

**Prevention:**
- Always use `scripts/add-blog-posts.js` - never manually edit blog-data.ts
- The script is designed to find `// Helper functions` comment and insert posts before it
- Verify script output shows "Successfully added X blog posts"

### Verifying Correct Insertion

After running the script, check these markers in `src/lib/blog-data.ts`:

```typescript
// Last post in BLOG_POSTS array
  },
]  // ← This closes BLOG_POSTS array

// Helper functions  // ← This should come AFTER the ]
export function getFeaturedPosts(): BlogPost[] {
```

If you see posts appearing inside function definitions, the script failed - restore and re-run.

---


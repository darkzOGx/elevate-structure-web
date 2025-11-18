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

## Workflow: Generating Daily Blog Posts

**IMPORTANT: Automatic +3 "Near Me" Posts**

When user requests N blog posts, **ALWAYS generate N + 3 total posts:**
- **N posts** = Requested topics with rotating cities
- **+3 posts** = "Near Me" GEO-localized posts (automatic bonus)

**Example:**
- User says: "Generate 10 blog posts"
- You generate: **13 posts** (10 regular + 3 "near me")

**"Near Me" posts target high-intent local searches:**
- Format: `[keyword] near me in [city]`
- Example: "Residential Structural Engineer Near Me in Newport Beach"
- Rotates through topics: residential engineer, structural engineer, foundation engineer, ADU engineer, seismic retrofit engineer, MEP engineer, civil engineer, etc.

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

### Step 0.5: GSC Keyword Extraction (AUTOMATIC WEEKLY)

**🤖 AUTOMATIC: This runs automatically if last extraction was > 7 days ago**

This automated process provides **real-time, data-driven keyword intelligence** by combining:
1. **Google Search Console API** - Real performance data from YOUR website
2. **"People Also Search For" (PASF) Scraping** - Related keyword discovery
3. **Automated Keyword List Updates** - Fresh, high-performing keywords

**What the System Does Automatically:**

1. **Auto-checks** when GSC extraction last ran
2. **If > 7 days ago**: Automatically runs full GSC + PASF extraction before generating blogs
3. **If < 7 days ago**: Skips extraction and uses existing keywords
4. **Fetches GSC Performance Data** (last 30 days):
   - 📊 **Impressions** - How many times your pages appeared in search
   - 🖱️ **Clicks** - Actual clicks from search results
   - 📈 **CTR (Click-Through Rate)** - Percentage of impressions that clicked
   - 📍 **Average Position** - Your ranking for each keyword
5. **Scrapes "People Also Search For" (PASF)** from Google:
   - Takes each GSC query and searches Google
   - Extracts related searches Google shows
   - Finds hidden long-tail opportunities
   - (Implementation: lines 193-246 in gsc-keyword-extractor.js)
6. **Combines Data for Maximum Coverage**:
   - GSC queries = proven keywords already driving traffic
   - PASF = related keywords you should target
   - Result = comprehensive keyword strategy
7. **Automatically adds discovered keywords to `references/keyword-list.md`**
8. **Creates `gsc-extracted-keywords.json`** with full metrics for analysis

**When it runs automatically:**
- ✅ **First time**: Never run before
- ✅ **Weekly refresh**: Last run was 7+ days ago
- ✅ **After errors**: Last run file is missing or corrupted
- ❌ **Skip**: Last run was less than 7 days ago

**What you'll see:**

If GSC extraction runs automatically:
```
🔍 Checking GSC extraction status...
⏰ Last run was 8 days ago (threshold: 7 days)
🚀 Running GSC extraction automatically...

📊 Connecting to Google Search Console...
✅ Connected to GSC
📥 Fetching queries from last 30 days...
✅ Found 150 queries
...
✅ Added 23 new keywords to keyword list
```

If GSC extraction is skipped:
```
🔍 Checking GSC extraction status...
✅ Last run was 3 days ago (threshold: 7 days)
⏭️  Skipping GSC extraction - using existing keywords
```

**Manual run (optional):**

You can still manually run GSC extraction anytime:

```bash
# Manual run (ignores last-run check)
node scripts/gsc-keyword-extractor.js

# Weekly run with custom parameters
GSC_DAYS_BACK=7 MAX_QUERIES=30 node scripts/gsc-keyword-extractor.js
```

**Configuration:**

Customize the auto-run threshold in `.env`:
```bash
# Run GSC extraction if last run was > X days ago (default: 7)
GSC_AUTO_RUN_DAYS=7
```

**Configuration options (via environment variables):**
- `GSC_PROPERTY_URL` - Your website URL (default: https://aaaengineeringdesign.com)
- `GSC_DAYS_BACK` - Days of data to fetch (default: 30)
- `MIN_IMPRESSIONS` - Minimum impressions to include keyword (default: 10)
- `MAX_QUERIES` - Maximum queries to process (default: 50)
- `GSC_CREDENTIALS_PATH` - Path to GSC credentials JSON (default: ./gsc-credentials.json)
- `SERPAPI_KEY` - SerpAPI key for "People Also Search For" extraction (optional)

**Output Files Created:**

1. **`references/keyword-list.md`** - Updated with new keywords
   - Automatically categorized by topic
   - Includes GSC performance notes
   - Ready to use in blog generation

2. **`gsc-extracted-keywords.json`** - Full analysis data
   ```json
   {
     "query": "residential structural engineer orange county",
     "impressions": 1450,
     "clicks": 87,
     "ctr": 0.06,
     "position": 8.5,
     "pasf_keywords": [
       "structural engineer cost orange county",
       "when to hire structural engineer",
       "residential structural engineer near me"
     ],
     "category": "residential-engineering",
     "search_intent": "local-service"
   }
   ```

**Example: How GSC + PASF Data Improves Blog Selection:**

**Without GSC (Old Way):**
- Guess which keywords might work
- No data on what's already performing
- Miss related keyword opportunities

**With GSC + PASF (New Way):**
```
📊 GSC Data Shows:
"residential structural engineer orange county"
- Impressions: 1,450
- Clicks: 87
- Position: 8.5
- CTR: 6%

💡 Insight: High impressions but position 8.5 = opportunity!
🎯 Action: Create targeted blog post to rank higher

🔍 PASF Discovers Related Keywords:
- "structural engineer cost orange county" (high commercial intent)
- "when to hire structural engineer" (informational, easy to rank)
- "residential structural engineer near me" (local intent)

✅ Result: Create 4 blog posts instead of 1, covering entire topic cluster!
```

**Setup requirements (one-time):**
1. Create Google Cloud project and enable Search Console API
2. Download service account credentials JSON
3. Save as `gsc-credentials.json` in project root
4. (Optional) Get SerpAPI key for enhanced "People Also Search For" extraction

See `scripts/GSC-SETUP-GUIDE.md` for detailed setup instructions.

**After GSC Extraction - How to Use the Data:**

1. **Prioritize High-Opportunity Keywords:**
   - High impressions + low CTR = need better content to capture clicks
   - High impressions + position 5-15 = can rank #1 with targeted content
   - PASF keywords = expand topic coverage

2. **Review `gsc-extracted-keywords.json` for insights:**
   ```bash
   # See top performing keywords
   cat gsc-extracted-keywords.json | jq '.[] | select(.impressions > 500)'

   # Find high-impression, low-CTR opportunities
   cat gsc-extracted-keywords.json | jq '.[] | select(.impressions > 100 and .ctr < 0.05)'
   ```

3. **Check `references/keyword-list.md` for newly added keywords:**
   - Look for keywords marked with GSC metrics
   - These are proven to drive traffic already

4. **Use in Next Blog Batch:**
   - Prioritize GSC keywords with high impressions
   - Include PASF keywords to create topic clusters
   - Target keywords in positions 5-15 (easiest to improve)

**Keyword Selection Strategy:**
- **Week 1**: GSC keywords with >500 impressions, position 5-15
- **Week 2**: PASF keywords related to your best performers
- **Week 3**: Low-competition long-tail from PASF
- **Week 4**: High-impression, low-CTR (improve existing rankings)

---

### Step 1: Auto-Check & Run GSC Extraction (If Needed)

**AUTOMATIC - Check if GSC extraction should run:**

Before reading references, automatically check if GSC extraction is needed:

1. **Check last run status** by running:
   ```bash
   node -e "const gsc = require('./scripts/gsc-keyword-extractor.js'); const status = gsc.shouldRunGSCExtraction(); console.log(status.shouldRun ? '⏰ GSC extraction needed: ' + status.reason : '✅ GSC is fresh: ' + status.reason);"
   ```

2. **If GSC extraction is needed** (last run > 7 days ago):
   ```bash
   echo "🚀 Running GSC extraction automatically..."
   node scripts/gsc-keyword-extractor.js
   ```

3. **If GSC is fresh** (last run < 7 days ago):
   ```bash
   echo "⏭️  Skipping GSC extraction - using existing keywords"
   ```

**This ensures keyword-list.md always has fresh, high-performing keywords!**

---

### Step 2: Read Required References

**CRITICAL - Always read these files AFTER GSC check:**

```bash
view references/keyword-list.md
view references/city-data.md
view references/near-me-keywords.md  # NEW: For automatic +3 "near me" posts
view references/blog-template.md
view references/interlinking-strategy.md
```

These files contain:
- All available keywords with intent and priority
- Complete city data (demographics, building codes, permit info)
- **"Near me" keyword rotation for automatic +3 bonus posts**
- Exact blog post structure matching aaaengineeringdesign.com format
- Internal linking rules and anchor text strategy

### Step 2: Select Keywords and Cities

**Total Posts to Generate: N + 3**
- **N posts** = User's requested number (e.g., 5, 10, etc.)
- **+3 posts** = Automatic "near me" posts (ALWAYS added)

**Regular Keyword Selection (N posts):**
1. Choose N keywords from `references/keyword-list.md`
2. Mix keyword types:
   - 1-2 Cluster articles (commercial/transactional intent)
   - 2-3 PAA/Informational articles
   - Occasionally include 1 Pillar article
3. Prioritize keywords marked as 🎯 High Priority
4. **CHECK BLOG-TRACKING.md** - Avoid keywords already used with target cities

**"Near Me" Keyword Selection (+3 posts):**
1. Use next 3 keywords in rotation from `references/near-me-keywords.md`
2. Check BLOG-TRACKING.md for last "near me" keyword used
3. Resume rotation from next keyword
4. These are HIGH commercial intent (ready to hire)

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

### Step 2.5: Topic Cluster Integration (CRITICAL FOR SEO)

**🎯 NEW: All blog posts must be assigned to a topic cluster for maximum topical authority**

#### What Are Topic Clusters?

Topic clusters are groups of related content organized around a central "hub" page:
- **Hub Page**: Comprehensive 3,000-5,000 word guide on a broad topic
- **Cluster Pages**: Focused 1,500-2,500 word articles on specific subtopics
- **Bidirectional Links**: All clusters link to hub, hub links to all clusters

This structure signals to Google that we are THE authority on the topic.

#### Current Hub Pages

Refer to `.claude/skills/socal-engineering-blog/CLUSTER-MAPPING.md` for the complete cluster structure.

**Active Hubs:**
1. **Structural Engineering Services Guide** (`structural-engineering-services-guide`)
   - Target keyword: "structural engineering services"
   - Current clusters: 24+ posts
   - Topics: Residential, ADU, seismic, foundation, home additions

2. **Engineering Design Services Guide** (planned)
   - Target keyword: "engineering design services"
   - Current clusters: 28+ posts
   - Topics: Design types, costs, professional services, sustainable design

3. **Specialized Engineering Services** (planned)
   - Topics: MEP, stormwater, septic, grading

4. **Building Codes & Compliance** (planned)
   - Topics: Title 24, licensing, associations

5. **Commercial Engineering Services** (planned)
   - Topics: Tenant improvements, commercial buildings

#### How to Assign Posts to Clusters

**For Each New Blog Post:**

1. **Determine Hub Assignment** based on primary keyword:

| Primary Keyword Contains... | Assign to Hub | Hub ID |
|----------------------------|---------------|---------|
| "structural engineer", "seismic", "foundation", "ADU", "home addition" | Structural Engineering | `structural-engineering-services-guide` |
| "engineering design", "design services", "sustainable design", "custom design" | Engineering Design | `engineering-design-services-guide` (planned) |
| "MEP", "mechanical engineering", "stormwater", "septic", "grading" | Specialized Services | `specialized-engineering-services-guide` (planned) |
| "Title 24", "building code", "license", "compliance" | Building Compliance | `building-codes-compliance-guide` (planned) |
| "commercial building", "tenant improvement", "commercial engineering" | Commercial Services | `commercial-engineering-services-guide` (planned) |

2. **Add Cluster Metadata Fields** to the BlogPost object:

```typescript
{
  id: 'your-post-id',
  title: 'Your Post Title',
  excerpt: '...',
  category: 'Structural Engineering',
  date: '2025-11-17',
  readTime: '12 min read',
  author: 'AAA Engineering Team',
  image: 'https://...',
  featured: false,
  relatedArticles: ['related-post-1', 'related-post-2', 'hub-page-id'],  // ← ADD HUB TO RELATED ARTICLES

  // Topic Cluster Metadata (REQUIRED for all new posts)
  contentType: 'cluster',  // or 'hub' for hub pages, 'supporting' for general posts
  hubPage: 'structural-engineering-services-guide',  // ID of parent hub
  topicCluster: 'structural-engineering',  // Cluster name
  primaryKeyword: 'adu structural engineering',  // Main keyword for this post
  secondaryKeywords: ['accessory dwelling unit', 'adu design'],  // 2-3 related keywords
  geoTarget: 'Los Alamitos',  // City/region targeted

  content: `...`
}
```

3. **Add Hub Reference in Content** (in first 500 words):

```markdown
This article is part of our comprehensive [Structural Engineering Services Guide](/blog/structural-engineering-services-guide), which covers everything you need to know about structural engineering in Southern California.
```

OR integrate naturally:

```markdown
For a complete overview of structural engineering services, see our [comprehensive structural engineering guide](/blog/structural-engineering-services-guide).
```

4. **Add Hub to Related Articles Section** at the bottom of content:

```markdown
## Related Resources

**Comprehensive Guides:**
- [Complete Structural Engineering Services Guide](/blog/structural-engineering-services-guide)

**Related Topics:**
- [ADU Structural Requirements](/blog/...)
- [Foundation Design Guide](/blog/...)
```

#### Cluster Metadata Field Definitions

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `contentType` | 'hub' \| 'cluster' \| 'supporting' | Yes | Content tier in cluster hierarchy | `'cluster'` |
| `hubPage` | string | If cluster | ID of parent hub page | `'structural-engineering-services-guide'` |
| `clusterPages` | string[] | If hub | Array of cluster post IDs | `['adu-post-1', 'foundation-post-2']` |
| `topicCluster` | string | Yes | Cluster name | `'structural-engineering'` |
| `primaryKeyword` | string | Yes | Main target keyword | `'adu structural engineering'` |
| `secondaryKeywords` | string[] | Optional | 2-3 supporting keywords | `['adu design', 'accessory dwelling']` |
| `geoTarget` | string | Optional | City or region | `'Los Alamitos'` or `'Southern California'` |

---

### ⚠️ CRITICAL: Blog Post ID Format & Linking Rules

**MUST READ BEFORE CREATING HUB PAGES OR LINKING TO BLOG POSTS**

#### Blog Post ID Pattern

**🆕 NEW FORMAT (For All New Blog Posts - Use This!):**

Generate IDs using this clean pattern:
```typescript
// Format: {keyword-phrase}-in-{city}
'adu-structural-engineering-in-newport-beach'
'structural-engineering-for-home-additions-in-brea'
'seismic-retrofit-requirements-in-cypress'
'commercial-building-engineering-in-irvine'
```

**ID Generation Rules:**
1. Take the primary keyword phrase
2. Convert to lowercase
3. Replace spaces with hyphens
4. Add `-in-` separator
5. Add city name (kebab-case, single occurrence - NO duplication)
6. Use kebab-case throughout (all lowercase, hyphens only)

**Examples:**
- Keyword: "ADU Structural Engineering" + City: "Newport Beach"
  → ID: `adu-structural-engineering-in-newport-beach`

- Keyword: "Commercial Building Engineering" + City: "Irvine"
  → ID: `commercial-building-engineering-in-irvine`

- Keyword: "Seismic Retrofit Requirements" + City: "Cypress"
  → ID: `seismic-retrofit-requirements-in-cypress`

**Non-geo Posts (no city):**
```typescript
'structural-engineering-services-guide'  // Hub pages
'building-code-compliance-2024'  // Year-based
'structural-engineer-requirements'  // Generic topics
```

---

**⚠️ LEGACY FORMAT (Existing Posts Only - DO NOT USE for new posts):**

Most existing blog posts (106 total) use an OLD pattern with city duplication:
```typescript
'adu-structural-engineering-in-los-alamitos-los-alamitos'  // City appears TWICE
'structural-engineering-for-home-additions-in-brea-brea'  // City appears TWICE
'seismic-retrofit-requirements-in-cypress-cypress'  // City appears TWICE
```

**Why the duplication exists:** Legacy automated generation created this pattern. We're NOT changing existing posts (would break external links), but NEW posts should use the clean format above.

**When linking to existing posts:** Use the full duplicated ID as it appears in blog-data.ts

#### How to Find Correct Blog Post IDs

**BEFORE creating hub page links, run this command:**

```bash
# Get all blog post IDs sorted alphabetically
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | sort -u
```

**Or search for specific topics:**

```bash
# Find all ADU-related post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep adu

# Find all seismic-related post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep -E "seismic|earthquake|retrofit"

# Find all posts for a specific city
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep "newport-beach"
```

#### Hub Page Content Format (RichBlogContent Component)

Hub page content is parsed by the `RichBlogContent` component which supports:

**✅ Supported Markdown:**

```markdown
## Main Heading (H2)
Creates a gradient card with large heading

### Sub Heading (H3)
Creates a styled H3 with decorative line

### Sub Heading with Bullet Points
- [Link Text](/blog/actual-post-id)
- [Another Link](/blog/another-actual-post-id)

**Bold Statement**
Creates a highlighted card with icon

Regular paragraph text with [inline links](/blog/post-id).

Important: This is a callout box
Note: Another callout style
Tip: A helpful tip box
Pro Tip: Expert advice box
```

**❌ Common Errors:**

1. **Wrong: Using shortened IDs**
   ```markdown
   - [ADU Engineering](/blog/adu-structural-engineering-newport-beach)
   ```
   Should be:
   ```markdown
   - [ADU Engineering](/blog/adu-structural-engineering-in-newport-beach-newport-beach)
   ```

2. **Wrong: Forgetting `/blog/` prefix**
   ```markdown
   - [Link](adu-structural-engineering-in-newport-beach-newport-beach)
   ```
   Should be:
   ```markdown
   - [Link](/blog/adu-structural-engineering-in-newport-beach-newport-beach)
   ```

3. **Wrong: Using markdown in clusterPages array**
   ```typescript
   clusterPages: [
     '[ADU Engineering](/blog/adu-post)'  // ❌ NO! Just IDs!
   ]
   ```
   Should be:
   ```typescript
   clusterPages: [
     'adu-structural-engineering-in-newport-beach-newport-beach'  // ✅ Just the ID
   ]
   ```

#### Verification Checklist Before Committing Hub Page

**Run these checks:**

```bash
# 1. Extract all blog post IDs from your hub content
grep -o '/blog/[^)]*' src/lib/blog-data.ts | grep "your-hub-id" -A 200 | sed 's|/blog/||' | sort -u > hub-links.txt

# 2. Get all actual blog post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | sort -u > actual-ids.txt

# 3. Find broken links (IDs in hub that don't exist)
comm -23 hub-links.txt actual-ids.txt

# If this outputs anything, those are BROKEN LINKS - fix them!
```

**✅ All hub links verified = No 404 errors**

---

### 🔧 RichBlogContent Component (How Hub Content is Rendered)

**Location:** `src/components/RichBlogContent.tsx`

This component parses hub page content and converts markdown to rich HTML. Understanding how it works is critical for proper formatting.

#### How Content is Parsed

**1. Content is split by double newlines (`\n\n`)**

```typescript
const sections = content.split('\n\n')
```

Each section between blank lines is processed independently.

**2. Processing Order (IMPORTANT - First match wins!)**

The component checks each section in this order:
1. ✅ Main headings (`## `)
2. ✅ Sub-headings with bullet points (`### ` + `\n-`)
3. ✅ Sub-headings alone (`### `)
4. ✅ Bold text (`**text**`)
5. ✅ Bullet point lists (`\n-`)
6. ✅ Callout boxes (`Important:`, `Note:`, `Tip:`)
7. ✅ Regular paragraphs

**3. Markdown Link Parsing**

Links are converted using regex:
```typescript
const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
  '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
```

#### ✅ FIXED: Sub-headings with Bullet Points

**Previously (BUG - caused raw markdown to show):**
```typescript
// Old code only extracted heading text, ignoring bullet points
if (section.startsWith('### ')) {
  const title = section.replace('### ', '').trim()  // Got ENTIRE section as title!
  return <h3>{title}</h3>  // Rendered bullets as plain text in heading
}
```

**Now (FIXED - properly handles headings + bullets):**
```typescript
// New code checks for bullet points after heading
if (section.startsWith('### ')) {
  if (section.includes('\n-')) {
    // Extract heading from first line only
    const lines = section.split('\n')
    const heading = lines[0].replace('### ', '').trim()
    const items = lines.slice(1).filter(line => line.trim().startsWith('-'))

    // Render heading + parsed bullet list with clickable links
    return (
      <div>
        <h3>{heading}</h3>
        <ul>
          {items.map(item => {
            const withLinks = item.replace(/\[...\]\(...\)/g, '<a...>')
            return <li dangerouslySetInnerHTML={{ __html: withLinks }} />
          })}
        </ul>
      </div>
    )
  }
}
```

**This fix resolved 114 broken links across 3 hub pages!**

#### Best Practices for Hub Content

**✅ DO:**
```markdown
## Related Resources

### Residential Services
- [When to Hire](/blog/when-to-hire-residential-structural-engineer-mission-viejo)
- [What Engineers Do](/blog/what-do-structural-engineers-do-costa-mesa)

### Commercial Services
- [Commercial Engineering](/blog/commercial-building-engineering-design-california-anaheim)
- [Tenant Improvements](/blog/commercial-tenant-improvement-engineering-in-murrieta-murrieta)
```

**❌ DON'T:**
```markdown
## Related Resources

### Residential Services
[When to Hire](/blog/...), [What Engineers Do](/blog/...)  // ❌ Comma-separated on same line

### Commercial Services - [Commercial Engineering](/blog/...) - [Tenant Improvements](/blog/...)  // ❌ Links in heading
```

**Why?** The component expects:
- Headings on their own line
- Bullet points on separate lines
- One link per bullet point (or space-separated is ok)

---

#### Internal Linking Rules for Clusters

**Every Cluster Post Must:**
- ✅ Link to parent hub page (in content + relatedArticles)
- ✅ Link to 2-3 sibling clusters (related topics in same hub)
- ✅ Link to 2-3 service pages
- ✅ Include hub reference in first 500 words

**Hub Pages Must:**
- ✅ Link to ALL cluster posts (18-25 links)
- ✅ Group clusters by subtopic
- ✅ Include contextual anchor text for each cluster link
- ✅ Feature comprehensive FAQ section (8-10 questions)

#### Example: Cluster Post Template

```markdown
# ADU Structural Engineering in Los Alamitos: Complete 2025 Guide

**Updated: November 2025**

[Opening paragraph with problem/solution...]

As part of our [comprehensive structural engineering services](/blog/structural-engineering-services-guide) in Southern California, we specialize in ADU design and permitting throughout Orange County, including Los Alamitos, Seal Beach, and Cypress.

## What is ADU Structural Engineering?

[Content...]

For related guidance, see our articles on [home addition engineering](/blog/structural-engineering-for-home-additions-brea) and [foundation assessment](/blog/foundation-assessment-guide-buena-park).

[Rest of content...]

## Related Resources

**Comprehensive Guides:**
- [Complete Structural Engineering Services Guide](/blog/structural-engineering-services-guide)

**Related Services:**
- [Foundation Design for ADUs](/blog/...)
- [Seismic Requirements for ADUs](/blog/...)
- [Title 24 Compliance for ADUs](/blog/...)
```

#### Benefits of Topic Cluster Strategy

✅ **Topical Authority**: Google sees we comprehensively cover structural engineering
✅ **Better Rankings**: Hub pages rank for high-volume head terms
✅ **Cluster Rankings**: Each cluster ranks for specific long-tail keywords
✅ **Featured Snippets**: Comprehensive content captures more featured snippets
✅ **Internal Link Flow**: PageRank flows from hub to clusters and back
✅ **User Experience**: Visitors find related content easily
✅ **Content Organization**: Clear structure makes content management easier

### Step 3: Generate Each Blog Post

For each of the 5 posts, follow this process:

**A. Generate Blog Post ID**

**CRITICAL - Use the NEW clean ID format (no city duplication):**

```
ID Format: {keyword-phrase}-in-{city-name}
```

**Example:**
- Keyword: "Commercial Building Engineering"
- City: "Newport Beach"
- ID: `commercial-building-engineering-in-newport-beach`

**Steps:**
1. Take primary keyword phrase
2. Convert to lowercase
3. Replace spaces with hyphens
4. Replace special characters with hyphens (e.g., "&" → "and")
5. Add `-in-` separator
6. Add city name (kebab-case) - **single occurrence, NO duplication**
7. **Verify uniqueness** - check blog-data.ts to ensure ID doesn't already exist

**Verification Command:**
```bash
grep "id: 'your-generated-id'" src/lib/blog-data.ts
# Should return nothing if ID is unique
```

**B. Create Post Structure**

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

### Step 6: Update Blog Tracking (MANDATORY)

**CRITICAL: Update BLOG-TRACKING.md immediately after generating posts**

Add each new post to the tracking file:
```markdown
| [Keyword/Topic] | [City] | ✅ Published | [Date] |
```

Update the following sections in BLOG-TRACKING.md:
1. ✅ Add new keyword+city combinations to "Published Blog Posts" table
2. ✅ Update city usage counts in "Available Cities" section
3. ✅ Update "Keywords Already Used with Cities" section
4. ✅ Update "Recommended Next 5 City Selections" for future batches

### Step 7: Deploy to Website (CRITICAL - AUTOMATED EXECUTION)

**⚠️ MANDATORY: Execute ALL deployment commands automatically after blog generation**

**The project includes `scripts/add-blog-posts.js` which automatically:**
1. **Auto-detects the most recent `blog-posts-*` directory** (or accepts path as argument)
2. Parses markdown files from that directory
3. Extracts frontmatter and content
4. Converts to TypeScript BlogPost objects
5. **Automatically sets first 3 posts as `featured: true`** (appears in Featured Articles)
6. **Uses date from frontmatter or today's date**
7. **CORRECTLY inserts posts into BLOG_POSTS array BEFORE helper functions**
8. Preserves all existing posts and structure

**Execute these commands in sequence:**

```bash
# 1. Run the conversion script (auto-detects most recent blog-posts directory)
node scripts/add-blog-posts.js

# 2. Verify build succeeds
npm run build

# 3. Commit changes with detailed commit message
git add src/lib/blog-data.ts blog-posts-nov-8-2025/ .claude/skills/socal-engineering-blog/BLOG-TRACKING.md
git commit -m "$(cat <<'EOF'
Add [NUMBER] new SEO-optimized blog posts for [Month Day, Year]

- [Blog Post 1 Title]
- [Blog Post 2 Title]
- [Blog Post 3 Title]
[- Blog Post 4 Title if 4+ posts]
[- Blog Post 5 Title if 5 posts]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Push to trigger Netlify deployment
git push origin master

# 5. Submit to search engines (optional but recommended)
npm run indexnow
```

**What the script does:**
- ✅ **Auto-detects** most recent blog-posts directory
- ✅ **First 3 posts automatically featured** (shows in Featured Articles section)
- ✅ **Date auto-detected** from frontmatter publishDate or uses today's date
- ✅ **Clear output** showing which posts are featured with ⭐ indicator

**CRITICAL BUG FIX IMPLEMENTED:**
The `add-blog-posts.js` script was updated to fix a bug where posts were incorrectly inserted into the `getRelatedPosts()` function instead of the `BLOG_POSTS` array. The script now:
- Finds the `// Helper functions` comment
- Locates the closing bracket `]` of BLOG_POSTS array BEFORE that comment
- Inserts new posts at the correct location
- Ensures posts appear in "All Articles" and are sorted by date

**Never manually edit blog-data.ts** - always use the automated script to prevent insertion errors.

**Deployment Execution Instructions:**
- Run ALL 5 commands sequentially
- Wait for each command to complete before running the next
- Verify successful output from each step
- Report any errors immediately
- Confirm deployment success after git push completes

### Step 8: Post-Deployment Summary

After successful deployment, provide a comprehensive summary:

1. **Blog Posts Generated:**
   - List all post titles with keywords and cities
   - Word count for each post
   - Category and intent type

2. **Deployment Status:**
   - ✅ Conversion script executed
   - ✅ Build verified successful
   - ✅ Changes committed to git
   - ✅ Pushed to master branch
   - ✅ Search engines notified (if indexnow ran)

3. **SEO & Tracking:**
   - Keywords used with intent types
   - Cities targeted with geographic distribution
   - Internal links created per post
   - **Confirmation that BLOG-TRACKING.md has been updated**

4. **Next Steps Recommendations:**
   - Suggested cities for next batch (from BLOG-TRACKING.md)
   - Keyword strategies for upcoming posts
   - Content mix recommendations

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

**AI Citation Optimization (NEW - 2025):**
- **Direct Answers**: Start each major section with 40-60 word direct answer
- **Question Headers**: Convert ALL H2 headers to question format
  - ❌ "Structural Engineering Services"
  - ✅ "What Structural Engineering Services Are Available in [City]?"
- **Modular Content**: Structure for easy AI extraction (bullets, tables, clear sections)
- **E-E-A-T Signals**: Include author credentials, PE license mentions, years of experience
- **Freshness Indicators**: Add "Updated: [Month Year]" at top of post
- **FAQ Schema**: Every post needs 5-8 FAQ questions with schema markup
- **Semantic HTML**: Use proper tags (article, section, aside) for AI parsing

*See `.claude/AI-OPTIMIZED-CONTENT-GUIDELINES.md` for complete details*

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


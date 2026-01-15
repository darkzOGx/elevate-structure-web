# 2025 SEO/GEO/AEO Blog Generator - Complete Setup Guide

Complete implementation guide for the 2025-optimized blog generation system for **elevate-structure-web**.

## What Was Implemented

### Keyword Intelligence Module
✅ **Automated keyword research system** with SerpAPI integration
✅ **Weekly scheduled updates** (Monday 3 AM UTC)
✅ **Manual trigger support** (drop `TRIGGER_UPDATE` file)
✅ **7-day cache** for SERP responses
✅ **Query Fan-Out analysis** (groups questions by intent)
✅ **Content brief generation** (complete blog outlines)

### 2025 Content Requirements
✅ **Answer Capsule** (40-60 word TL;DR after H1)
✅ **Question-format headers** (all H2/H3 as questions)
✅ **Semantic HTML** (`<article>`, `<section>`, `<aside>`)
✅ **E-E-A-T signals** (first-person expertise language)
✅ **Enhanced schema** (`about`, `mentions`, `speakable`, `sameAs`)

### Output Files (5 per blog post)
✅ **{slug}.html** - Optimized blog HTML
✅ **{slug}.schema.json** - Standalone JSON-LD
✅ **{slug}.keywords.json** - Keyword intelligence snapshot
✅ **{slug}.llms.txt** - LLM-friendly plain text
✅ **indexnow-payload.json** - IndexNow notification

---

## Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
cd /c/Users/bigbi/elevate-structure-web

# Install Python dependencies
pip install -r keyword-intelligence/requirements.txt
pip install -r scripts/requirements.txt
```

### 2. Configure API Keys

```bash
# Option A: Environment variables (recommended)
export SERPAPI_KEY="your_serpapi_key_here"
export INDEXNOW_KEY="your_indexnow_key_here"

# Option B: Edit config.yaml
nano config.yaml
# Uncomment and set api_key values
```

**Get SerpAPI key**: https://serpapi.com/ (free tier: 100 searches/month)
**Get IndexNow key**: Auto-generated or use custom UUID

### 3. Customize Topics

Edit `keyword-intelligence/data/active_topics.json` for your site's niche:

```json
{
  "topics": [
    {
      "topic": "your-topic-here",
      "enabled": true,
      "priority": "high",
      "keywords": [
        "your primary keyword",
        "another keyword",
        "..."
      ]
    }
  ]
}
```

**For elevate-structure-web** (structural engineering niche), topics are already configured with 70 keywords across 10 topic categories.

### 4. Test Keyword Fetching

```bash
# Fetch intelligence for a single keyword
python keyword-intelligence/fetcher.py "structural engineer california" \
  --topic structural-engineering \
  --save

# Check output
cat keyword-intelligence/data/structural-engineering-structural-engineer-california.json
```

### 5. Generate Content Brief

```bash
# Generate complete blog outline
python keyword-intelligence/analyzer.py \
  --brief "ADU structural engineering" residential-structural-engineering \
  > brief.json

# View the brief
cat brief.json
```

You now have:
- Title suggestions
- Header structure (question format)
- FAQ questions (from PAA)
- Related keywords
- Schema requirements
- Word count recommendations

---

## Full Workflow (Production Use)

### Step 1: Start Keyword Scheduler (Background Daemon)

```bash
# Option A: Start scheduler manually
python keyword-intelligence/scheduler.py --start
# Runs every Monday at 3 AM, checks for manual triggers every minute

# Option B: Use systemd (Linux)
sudo nano /etc/systemd/system/keyword-scheduler.service
```

**systemd service file**:
```ini
[Unit]
Description=Keyword Intelligence Scheduler
After=network.target

[Service]
Type=simple
User=youruser
WorkingDirectory=/path/to/elevate-structure-web
Environment="SERPAPI_KEY=your_key_here"
ExecStart=/usr/bin/python3 keyword-intelligence/scheduler.py --start
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable keyword-scheduler
sudo systemctl start keyword-scheduler
sudo systemctl status keyword-scheduler
```

### Step 2: Manual Update (Optional)

```bash
# Force update all topics immediately
python keyword-intelligence/scheduler.py --run-now

# Update specific topic only
python keyword-intelligence/scheduler.py --run-now --topic seismic-engineering

# Or use manual trigger file
touch TRIGGER_UPDATE
# Scheduler will detect and run within 1 minute
```

### Step 3: Generate Content Brief

```bash
# For a specific keyword
python keyword-intelligence/analyzer.py \
  --brief "foundation repair california" foundation-engineering \
  > content-briefs/foundation-repair-brief.json

# Review the brief
cat content-briefs/foundation-repair-brief.json
```

**Brief contains**:
- 4 title suggestions
- 5-8 recommended H2 headers (question format)
- 8 FAQ questions (from PAA)
- 20 related keywords
- Schema requirements (Article, FAQ, LocalBusiness, etc.)
- Word count recommendation
- Answer capsule guide

### Step 4: Write Blog Post

Using the brief, write your blog post following **2025 Content Structure Requirements**:

**Required elements**:
1. **Answer Capsule** (40-60 words) immediately after H1
2. **Question-format headers** for all H2/H3
3. **Semantic HTML** tags (article, section, aside)
4. **E-E-A-T signals** (minimum 3 expertise statements)
5. **FAQ section** with 5-8 questions
6. **First-person language** ("we", "our", "in our experience")

**Example structure**:
```html
<article>
  <header>
    <h1>Foundation Repair in California: Complete 2025 Guide</h1>
    <aside class="answer-capsule">
      <strong>Quick Answer:</strong>
      Foundation repair in California requires licensed structural engineers
      to assess damage, design remediation plans, and stamp repair drawings
      for building permits. Costs range $5,000-$30,000 depending on severity,
      soil conditions, and repair method (mudjacking, piers, underpinning).
    </aside>
  </header>

  <section id="what">
    <h2>What is Foundation Repair in California?</h2>
    <p>In our 20+ years of foundation engineering across California...</p>
  </section>

  <section id="cost">
    <h2>How Much Does Foundation Repair Cost in California?</h2>
    <p>From our analysis of 300+ foundation repair projects...</p>
  </section>

  <!-- More sections -->

  <section id="faq">
    <h2>Frequently Asked Questions</h2>
    <!-- FAQ from PAA questions -->
  </section>

  <footer>
    <!-- Schema markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [...]
    }
    </script>
  </footer>
</article>
```

See `.claude/skills/socal-engineering-blog/2025-SEO-GEO-AEO-REQUIREMENTS.md` for complete details.

### Step 5: Generate All Output Files

```bash
# Generate all 5 output files
python scripts/generate-blog-outputs.py \
  blog-posts/foundation-repair-california.html \
  --output-dir public/blog/foundation-repair-california/ \
  --keyword-intelligence keyword-intelligence/data/foundation-engineering-foundation-repair-california.json \
  --indexnow-key $INDEXNOW_KEY

# Output files created:
# - foundation-repair-california.html
# - foundation-repair-california.schema.json
# - foundation-repair-california.keywords.json
# - foundation-repair-california.llms.txt
# - indexnow-payload.json
```

### Step 6: Validate & Submit

```bash
# Validate schema
curl -X POST https://validator.schema.org/validate \
  -H "Content-Type: application/json" \
  -d @public/blog/foundation-repair-california/foundation-repair-california.schema.json

# Test rich results
# Visit: https://search.google.com/test/rich-results
# Paste URL or HTML

# Submit to IndexNow (instant indexing)
curl -X POST https://www.bing.com/indexnow \
  -H "Content-Type: application/json" \
  -d @public/blog/foundation-repair-california/indexnow-payload.json

# Also submits to:
# - Yandex
# - Naver
# - Seznam
```

### Step 7: Deploy to Production

```bash
# Build and deploy (adjust for your hosting)
npm run build
npm run deploy

# Or via Git
git add .
git commit -m "Add 2025-optimized blog post: foundation repair california"
git push origin main
```

---

## Directory Structure

```
elevate-structure-web/
├── config.yaml                          # Main configuration
├── TRIGGER_UPDATE                       # Drop this file to force keyword update
│
├── keyword-intelligence/                # Keyword research module
│   ├── fetcher.py                       # SerpAPI integration
│   ├── scheduler.py                     # Weekly automation
│   ├── storage.py                       # Data persistence
│   ├── analyzer.py                      # Content brief generation
│   ├── requirements.txt                 # Python dependencies
│   ├── README.md                        # Module documentation
│   │
│   └── data/
│       ├── active_topics.json           # Topics to track
│       ├── last_run.json                # Scheduler metadata
│       ├── cache/                       # SERP response cache (7 days)
│       └── {topic}-{keyword}.json       # Keyword intelligence files
│
├── scripts/
│   ├── generate-blog-outputs.py         # Output file generator
│   └── requirements.txt                 # Script dependencies
│
├── .claude/skills/socal-engineering-blog/
│   ├── SKILL.md                         # Original skill documentation
│   ├── 2025-SEO-GEO-AEO-REQUIREMENTS.md # 2025 optimization guide
│   └── references/
│       ├── blog-template.md             # Blog post template
│       ├── keyword-list.md              # Keyword inventory
│       ├── city-data.md                 # Geographic data
│       └── interlinking-strategy.md     # Internal linking rules
│
└── public/blog/{slug}/                  # Published blog posts
    ├── {slug}.html                      # Optimized HTML
    ├── {slug}.schema.json               # Standalone schema
    ├── {slug}.keywords.json             # Keyword snapshot
    ├── {slug}.llms.txt                  # Plain text for LLMs
    └── indexnow-payload.json            # IndexNow submission
```

---

## Configuration Reference

### config.yaml

```yaml
# SerpAPI Configuration
serpapi:
  api_key: ${SERPAPI_KEY}          # Or set directly (not recommended)
  rate_limit: 30                   # Requests per minute
  default_location: "United States"

# Scheduler Configuration
scheduler:
  day: "Monday"                    # Day of week for updates
  time: "03:00"                    # Time (24-hour format)
  stale_threshold_days: 14         # Days before keyword is stale
  auto_update_enabled: true

# Blog Generation Settings
blog:
  output_formats:
    html: true                     # Generate optimized HTML
    schema: true                   # Generate standalone schema JSON
    keywords: true                 # Generate keyword snapshot
    llms_txt: true                 # Generate LLM-friendly text
    indexnow: true                 # Generate IndexNow payload

  content_structure:
    answer_capsule:
      enabled: true
      min_words: 40
      max_words: 60
      placement: "after_h1"

    question_headers:
      enabled: true
      format: "question"

    semantic_html:
      enabled: true
      tags: ["article", "section", "aside", "header", "footer"]

    eeat_signals:
      enabled: true
      include_credentials: true
      first_person: true
      min_mentions: 3

  schema_required:
    - "Article"
    - "FAQPage"
    - "LocalBusiness"
    - "BreadcrumbList"
    - "Organization"

  speakable:
    enabled: true
    targets: ["answer_capsule", "h1", "faq_answers"]

# IndexNow Configuration
indexnow:
  api_key: ${INDEXNOW_KEY}
  auto_submit: true
  endpoints:
    - "https://www.bing.com/indexnow"
    - "https://yandex.com/indexnow"
    - "https://api.naver.com/indexnow"
    - "https://search.seznam.cz/indexnow"

# Cache Settings
cache:
  enabled: true
  duration_days: 7
  directory: "data/cache"
```

---

## CLI Command Reference

### Keyword Fetcher

```bash
# Fetch keyword intelligence
python keyword-intelligence/fetcher.py "your keyword" --topic topic-name --save

# Options:
#   --topic TOPIC    Topic category (required for save)
#   --save           Save to JSON file
```

### Keyword Scheduler

```bash
# Show status
python keyword-intelligence/scheduler.py

# Run update immediately
python keyword-intelligence/scheduler.py --run-now

# Update specific topic
python keyword-intelligence/scheduler.py --run-now --topic topic-name

# Start scheduler daemon
python keyword-intelligence/scheduler.py --start

# Options:
#   --run-now        Run update immediately
#   --start          Start scheduled updates (runs indefinitely)
#   --topic TOPIC    Update specific topic only
#   --config PATH    Path to config.yaml
```

### Query Analyzer

```bash
# Analyze intent coverage
python keyword-intelligence/analyzer.py --intent-coverage topic-name

# Find content gaps
python keyword-intelligence/analyzer.py --content-gaps topic-name

# Identify SERP feature opportunities
python keyword-intelligence/analyzer.py --serp-features --topic topic-name

# Generate content brief
python keyword-intelligence/analyzer.py --brief "keyword" topic-name

# Options:
#   --intent-coverage TOPIC   Analyze intent distribution
#   --content-gaps TOPIC      Find PAA question gaps
#   --serp-features          Identify SERP features
#   --topic TOPIC            Filter by topic
#   --brief KEYWORD TOPIC    Generate content brief
```

### Storage Manager

```bash
# List all intelligence
python keyword-intelligence/storage.py --list

# List for specific topic
python keyword-intelligence/storage.py --list --topic topic-name

# Show summary statistics
python keyword-intelligence/storage.py --stats

# Find stale intelligence
python keyword-intelligence/storage.py --stale 14

# Export for blog generation
python keyword-intelligence/storage.py --export output.json --topic topic-name

# Options:
#   --list           List stored intelligence
#   --topic TOPIC    Filter by topic
#   --stats          Show summary statistics
#   --stale DAYS     Show intelligence older than N days
#   --export FILE    Export to JSON for blog generation
```

### Blog Output Generator

```bash
# Generate all output files
python scripts/generate-blog-outputs.py input.html \
  --output-dir public/blog/slug/ \
  --keyword-intelligence data/topic-keyword.json \
  --indexnow-key YOUR_KEY \
  --site-url https://yourdomain.com

# Options:
#   --output-dir DIR               Output directory
#   --keyword-intelligence FILE    Keyword intelligence JSON
#   --indexnow-key KEY            IndexNow API key
#   --site-url URL                Site base URL
```

---

## Monitoring & Maintenance

### Check Scheduler Status

```bash
# View last run metadata
cat keyword-intelligence/data/last_run.json

# View logs
tail -f keyword-intelligence/logs/scheduler.log

# Check stale intelligence
python keyword-intelligence/storage.py --stale 14
```

### Monitor API Usage

- **SerpAPI Dashboard**: https://serpapi.com/dashboard
- **Free tier**: 100 searches/month
- **With 70 keywords + cache**: Uses ~15-20 searches/week

### Update Topics

Edit `keyword-intelligence/data/active_topics.json`:

```json
{
  "topics": [
    {
      "topic": "new-topic",
      "enabled": true,
      "priority": "high",
      "keywords": [
        "keyword 1",
        "keyword 2"
      ]
    }
  ]
}
```

Then force update:
```bash
python keyword-intelligence/scheduler.py --run-now --topic new-topic
```

---

## Troubleshooting

### "No SerpAPI key found"
**Solution**: Set environment variable or edit config.yaml
```bash
export SERPAPI_KEY="your_key_here"
```

### "No intelligence data found"
**Solution**: Run initial fetch
```bash
python keyword-intelligence/scheduler.py --run-now
```

### "Stale threshold always triggering"
**Solution**: Reduce threshold in config.yaml
```yaml
scheduler:
  stale_threshold_days: 7  # Reduce from 14
```

### "Schema validation errors"
**Solution**: Validate at https://validator.schema.org/
- Check for missing required fields
- Ensure valid ISO 8601 dates
- Verify all @id references exist

### "IndexNow submission failed"
**Solution**: Check API key and URL format
```bash
# Verify key file exists at domain root
curl https://yourdomain.com/your-key.txt
```

---

## Next Steps

### For elevate-structure-web specifically:

1. **Review active_topics.json** - Topics are pre-configured for structural engineering niche
2. **Set SerpAPI key** - Get free tier key from https://serpapi.com/
3. **Run initial fetch** - Populate keyword intelligence
4. **Generate 5 sample briefs** - Test content brief generation
5. **Write 1 test blog post** - Follow 2025 requirements
6. **Generate all outputs** - Verify 5 files created correctly
7. **Validate schema** - Check at validator.schema.org
8. **Submit to IndexNow** - Test instant indexing
9. **Start scheduler** - Enable weekly automation
10. **Scale up** - Generate 10-20 posts per month

### Resources

- **2025 Requirements**: `.claude/skills/socal-engineering-blog/2025-SEO-GEO-AEO-REQUIREMENTS.md`
- **Blog Template**: `.claude/skills/socal-engineering-blog/references/blog-template.md`
- **Keyword Intelligence README**: `keyword-intelligence/README.md`
- **Schema.org**: https://schema.org/
- **SerpAPI Docs**: https://serpapi.com/search-api
- **IndexNow Docs**: https://www.indexnow.org/

---

**Last Updated**: January 2025
**Version**: 1.0
**Project**: elevate-structure-web blog generator

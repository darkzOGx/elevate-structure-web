# Automatic GSC Keyword Extraction Workflow

## How It Works

Your blog generator now has **automatic weekly GSC keyword extraction** built in! Here's what happens when you invoke the `socal-engineering-blog` skill:

### Workflow Diagram

```
┌─────────────────────────────────────────┐
│  You: "Use socal-engineering-blog"      │
└─────────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  Step 1: Auto-Check GSC Status          │
│  • Checks .gsc-last-run.json            │
│  • Calculates days since last run       │
└─────────────────────────────────────────┘
                   ↓
            ┌──────┴──────┐
            │             │
┌───────────▼──────┐  ┌───▼────────────────┐
│ Last run > 7 days│  │ Last run < 7 days  │
└──────────────────┘  └────────────────────┘
            │             │
            │             │
   ┌────────▼────────┐    │
   │ Run GSC Extract │    │
   │ (5-10 minutes)  │    │
   │                 │    │
   │ • Fetch queries │    │
   │ • Get PASF      │    │
   │ • Add keywords  │    │
   └────────┬────────┘    │
            │             │
            └──────┬──────┘
                   ↓
┌─────────────────────────────────────────┐
│  Step 2: Read References                │
│  • keyword-list.md (FRESH KEYWORDS!)    │
│  • city-data.md                         │
│  • blog-template.md                     │
│  • interlinking-strategy.md             │
└─────────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  Step 3-7: Generate 5 Blog Posts        │
│  • Using updated keywords               │
│  • Full deployment                      │
└─────────────────────────────────────────┘
```

---

## What You'll See

### Scenario 1: GSC Extraction Runs (First Time or > 7 Days)

```
🔍 Checking GSC extraction status...
⏰ Last run was 8 days ago (threshold: 7 days)
🚀 Running GSC extraction automatically...

📊 Connecting to Google Search Console...
✅ Connected to GSC

📥 Fetching queries from last 30 days...
✅ Found 150 queries

🔍 Extracting "People also search for" keywords...

[1/50] Processing: "structural engineer long beach"
  Impressions: 245, Clicks: 12, Position: 8.5
  Searching for related keywords for: "structural engineer long beach"
  ✅ Found 8 related searches
  ✅ Found 5 "People also ask" questions

[2/50] Processing: "civil engineering design california"
  ...

✅ Extracted 215 total keywords
💾 Saved results to: gsc-extracted-keywords.json
📝 Adding keywords to keyword list...
✅ Added 43 new keywords to keyword list

✅ Process completed successfully!

Summary:
- Total GSC queries processed: 50
- Total keywords extracted: 215
- New keywords added to list: 43

---

Now proceeding to blog generation with fresh keywords...
```

### Scenario 2: GSC Extraction Skipped (< 7 Days)

```
🔍 Checking GSC extraction status...
✅ Last run was 3 days ago (threshold: 7 days)
⏭️  Skipping GSC extraction - using existing keywords

Proceeding to blog generation...
```

---

## Configuration

### Default Settings (in `.env`)

```bash
# Auto-run GSC extraction if last run was > X days ago
GSC_AUTO_RUN_DAYS=7

# GSC extraction parameters
GSC_DAYS_BACK=30
MAX_QUERIES=50
MIN_IMPRESSIONS=10
```

### Customize Auto-Run Threshold

Want to run GSC extraction more or less frequently?

```bash
# Run every 3 days
GSC_AUTO_RUN_DAYS=3

# Run every 14 days (bi-weekly)
GSC_AUTO_RUN_DAYS=14

# Run every 30 days (monthly)
GSC_AUTO_RUN_DAYS=30
```

---

## Manual Override

### Force GSC Extraction (Ignore Last Run Check)

```bash
# Run GSC extraction manually, regardless of last run time
node scripts/gsc-keyword-extractor.js
```

This will:
- ✅ Run even if last extraction was yesterday
- ✅ Update the last-run timestamp
- ✅ Add new keywords to keyword-list.md

### Check Last Run Status

```bash
# See when GSC extraction last ran
cat .gsc-last-run.json
```

Output:
```json
{
  "lastRunAt": "2025-11-15T14:30:00.000Z",
  "queriesProcessed": 50,
  "keywordsExtracted": 215,
  "keywordsAdded": 43,
  "daysBack": 30
}
```

---

## Benefits

### Before Automatic GSC

**Manual workflow:**
1. Remember to run `npm run gsc-weekly`
2. Wait 5-10 minutes
3. Then run blog generator
4. Hope you didn't forget

**Problems:**
- ❌ Easy to forget
- ❌ Keywords get stale
- ❌ Miss trending searches
- ❌ Extra manual step

### After Automatic GSC

**Automatic workflow:**
1. Just run blog generator
2. It checks GSC status automatically
3. Runs extraction if needed
4. Always uses fresh keywords

**Benefits:**
- ✅ Never forget
- ✅ Always fresh keywords
- ✅ Catch trending searches
- ✅ Fully automated
- ✅ Smart resource usage (only runs when needed)

---

## Resource Usage

### SerpAPI Quota Management

The automatic system is designed to prevent quota waste:

- **Free tier**: 100 searches/month
- **Weekly extraction**: 50 queries × 4 weeks = **200 searches/month** (need paid plan)
- **Bi-weekly extraction**: 50 queries × 2 runs = **100 searches/month** (fits free tier!)

**Recommendation for free tier:**
```bash
# Run every 14 days to stay within 100 searches/month
GSC_AUTO_RUN_DAYS=14
```

**With paid plan ($50/month = 5,000 searches):**
```bash
# Run every 7 days (plenty of quota)
GSC_AUTO_RUN_DAYS=7
```

### GSC API Quota

Google Search Console API is generous:
- **Free**: 200,000 requests/day
- **Your usage**: ~1 request per day
- **No worries!** 🎉

---

## Tracking Files

### .gsc-last-run.json (Auto-Generated)

Tracks when GSC extraction last ran:
```json
{
  "lastRunAt": "2025-11-15T14:30:00.000Z",
  "queriesProcessed": 50,
  "keywordsExtracted": 215,
  "keywordsAdded": 43,
  "daysBack": 30
}
```

- ✅ Auto-created on first run
- ✅ Auto-updated on each run
- ✅ Git-ignored (won't be committed)
- ✅ Used to determine if extraction should run

### gsc-extracted-keywords.json (Auto-Generated)

Complete results from each extraction:
```json
{
  "generatedAt": "2025-11-15T14:30:00.000Z",
  "totalKeywords": 215,
  "keywords": [
    {
      "keyword": "structural engineer long beach",
      "source": "GSC",
      "intent": "Transactional",
      "volume": "High",
      "difficulty": "Medium",
      "metrics": {
        "impressions": 245,
        "clicks": 12,
        "ctr": 0.049,
        "position": 8.5
      }
    }
  ]
}
```

- ✅ Review for insights
- ✅ Archive for historical tracking
- ✅ Git-ignored

---

## Troubleshooting

### GSC Extraction Runs Every Time

**Problem**: Auto-run should skip if < 7 days, but runs anyway

**Cause**: `.gsc-last-run.json` file is missing or corrupted

**Solution**:
```bash
# Check if file exists
cat .gsc-last-run.json

# If missing, run once manually to create it
node scripts/gsc-keyword-extractor.js
```

### GSC Extraction Never Runs

**Problem**: Always skips, even when it should run

**Cause**: Threshold too high or last-run file has future date

**Solution**:
```bash
# Check last run date
cat .gsc-last-run.json

# Manually delete to force run
rm .gsc-last-run.json

# Or lower threshold
echo "GSC_AUTO_RUN_DAYS=1" >> .env
```

### Want to Disable Auto-Run

**Problem**: You want full manual control

**Solution**:
```bash
# Set threshold very high
GSC_AUTO_RUN_DAYS=999
```

Or remove Step 1 from the skill workflow.

---

## Best Practices

### Weekly Cadence (Recommended)

```bash
GSC_AUTO_RUN_DAYS=7
```

**Why:**
- ✅ Catches trending keywords
- ✅ Fresh data for blog planning
- ✅ Not too frequent (saves quota)
- ✅ Not too rare (stays current)

### Review Extracted Keywords

After auto-extraction runs, review the results:

```bash
# See what keywords were discovered
cat gsc-extracted-keywords.json | grep -A 5 '"keyword":'

# Check high-impression opportunities
cat gsc-extracted-keywords.json | grep -A 10 '"impressions": [5-9][0-9][0-9]'
```

### Archive Results

Keep historical records:

```bash
# After each extraction, archive the results
cp gsc-extracted-keywords.json archive/gsc-$(date +%Y-%m-%d).json
```

This lets you track:
- Keyword performance over time
- Seasonal trends
- New opportunities

---

## Summary

**Simple workflow:**
```bash
# Just invoke the blog generator
Use socal-engineering-blog skill
```

**The system automatically:**
1. ✅ Checks if GSC extraction is needed (> 7 days)
2. ✅ Runs extraction if needed (5-10 minutes)
3. ✅ Skips if fresh (< 7 days)
4. ✅ Always uses up-to-date keywords
5. ✅ Saves resources (only runs when needed)

**You get:**
- Fresh keywords from real user searches
- "People Also Search For" discoveries
- Zero manual intervention
- Smart quota management
- Always-optimized content

**Set it and forget it!** 🚀

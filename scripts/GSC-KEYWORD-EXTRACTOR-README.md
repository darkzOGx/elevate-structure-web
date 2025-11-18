# GSC Keyword Extractor - Quick Reference

Automated system to discover high-performing keywords from Google Search Console and "People Also Search For" queries.

## Quick Start

```bash
# 1. Install dependencies
npm install googleapis google-search-results-nodejs

# 2. Set up credentials (see GSC-SETUP-GUIDE.md for details)
# - Create Google Cloud project
# - Enable Search Console API
# - Download service account credentials as gsc-credentials.json

# 3. Run extraction
npm run gsc-extract
```

## Available Commands

```bash
# Default extraction (last 30 days, up to 50 queries)
npm run gsc-extract

# Weekly run (last 7 days)
npm run gsc-weekly

# Monthly deep dive (last 30 days, up to 100 queries)
npm run gsc-monthly

# Custom parameters
GSC_DAYS_BACK=14 MAX_QUERIES=30 MIN_IMPRESSIONS=5 node scripts/gsc-keyword-extractor.js
```

## What It Does

1. **Fetches GSC Queries**: Retrieves actual search queries from Google Search Console
2. **Extracts Related Searches**: Finds "People Also Search For" keywords for each query
3. **Categorizes Keywords**: Auto-classifies by intent, volume, and difficulty
4. **Updates Keyword List**: Automatically adds new keywords to `.claude/skills/socal-engineering-blog/references/keyword-list.md`
5. **Generates Report**: Creates `gsc-extracted-keywords.json` with full metrics

## Configuration Options

| Variable | Default | Description |
|----------|---------|-------------|
| `GSC_PROPERTY_URL` | https://aaaengineeringdesign.com | Your website URL |
| `GSC_CREDENTIALS_PATH` | ./gsc-credentials.json | Path to service account credentials |
| `GSC_DAYS_BACK` | 30 | Days of search data to fetch |
| `MIN_IMPRESSIONS` | 10 | Minimum impressions to include keyword |
| `MAX_QUERIES` | 50 | Maximum queries to process |
| `SERPAPI_KEY` | - | SerpAPI key for enhanced PASF extraction |

Set in `.env` file or as environment variables.

## Output Files

### gsc-extracted-keywords.json
Complete extraction results with metrics:
```json
{
  "generatedAt": "2025-11-15T10:30:00Z",
  "totalKeywords": 145,
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
    },
    {
      "keyword": "best structural engineers near me",
      "source": "Related to: structural engineer long beach",
      "intent": "Navigational",
      "volume": "Unknown",
      "difficulty": "Unknown"
    }
  ]
}
```

### Updated keyword-list.md
New keywords automatically added to the "Long-Tail GSC Keywords" section.

## Integration with Blog Generator

The extracted keywords are automatically available in the blog generator skill:

```bash
# After running GSC extraction, generate blogs using new keywords
claude-code
> Use skill socal-engineering-blog to generate 5 daily blog posts
```

The skill will:
- Read updated `keyword-list.md` with new GSC keywords
- Prioritize high-impression, low-CTR keywords (optimization opportunities)
- Use actual user search queries for better targeting

## When to Run

### Weekly (Recommended)
- Captures trending searches
- Quick execution (5-10 minutes)
- Ideal for staying current

```bash
npm run gsc-weekly
```

### Monthly
- Comprehensive keyword expansion
- Strategic planning
- Longer execution (20-30 minutes)

```bash
npm run gsc-monthly
```

### After Traffic Spikes
- Identify viral content opportunities
- Capitalize on trending topics

```bash
GSC_DAYS_BACK=3 MAX_QUERIES=20 node scripts/gsc-keyword-extractor.js
```

### Before Blog Planning
- Use fresh data for topic selection
- Inform content strategy

## Keyword Categorization

The script automatically categorizes keywords:

### Intent Types
- **Informational**: "what is", "how to", "types of"
- **Navigational**: "best", "top", "reviews"
- **Commercial**: "cost", "price", "hire"
- **Transactional**: "near me", "buy", "get"

### Volume (based on impressions)
- **High**: 1,000+ impressions
- **Medium**: 100-1,000 impressions
- **Low**: < 100 impressions

### Difficulty (based on current position)
- **High**: Position 20+
- **Medium**: Position 10-20
- **Low**: Position < 10

## Analyzing Results

### High Impressions + Low CTR
**Opportunity**: Optimize existing content or create better-targeted page
```json
{
  "keyword": "structural engineer cost",
  "impressions": 850,
  "clicks": 15,
  "ctr": 0.018,  // Very low!
  "position": 6.2
}
```
**Action**: Create dedicated cost guide blog post

### High Position + Low Impressions
**Opportunity**: Expand keyword variations
```json
{
  "keyword": "mep engineering orange county",
  "impressions": 45,
  "clicks": 8,
  "ctr": 0.178,
  "position": 3.1  // Great position!
}
```
**Action**: Create more city-specific MEP content

### Position 8-12 (Bottom of page 1)
**Opportunity**: Small optimizations could push to top 5
```json
{
  "position": 9.8,
  "impressions": 320,
  "clicks": 12
}
```
**Action**: Update meta descriptions, add internal links, improve content

## Troubleshooting

### No keywords added
- All keywords may already exist in keyword-list.md
- Check `gsc-extracted-keywords.json` to see what was found
- Lower `MIN_IMPRESSIONS` threshold

### "Access denied" error
- Verify service account is added to Google Search Console
- Ensure Search Console API is enabled
- Check credentials file path

### SerpAPI quota exceeded
- Free tier: 100 searches/month
- Reduce `MAX_QUERIES` parameter
- Upgrade SerpAPI plan if needed
- Script continues without PASF data if quota exceeded

## Advanced Usage

### Filter by keyword pattern
Edit the script to add dimension filters:
```javascript
dimensionFilterGroups: [
  {
    filters: [
      {
        dimension: 'query',
        operator: 'contains',
        expression: 'structural engineer', // Only structural keywords
      },
    ],
  },
],
```

### Export to CSV
```bash
# After running extraction
node -e "
const data = require('./gsc-extracted-keywords.json');
const csv = data.keywords.map(k =>
  `${k.keyword},${k.intent},${k.metrics?.impressions || 0},${k.metrics?.clicks || 0}`
).join('\n');
console.log('Keyword,Intent,Impressions,Clicks\n' + csv);
" > gsc-keywords.csv
```

### Compare historical data
```bash
# Archive current results
cp gsc-extracted-keywords.json gsc-results-$(date +%Y-%m-%d).json

# Run monthly to track trends over time
```

## Security

- **Never commit** `gsc-credentials.json` to git
- **Never commit** `.env` file with API keys
- Add to `.gitignore`:
  ```
  gsc-credentials.json
  .env
  gsc-extracted-keywords.json
  ```

## Need Help?

- **Setup**: See `scripts/GSC-SETUP-GUIDE.md` for detailed setup instructions
- **Script**: Check comments in `scripts/gsc-keyword-extractor.js`
- **GSC API**: [Google Search Console API Docs](https://developers.google.com/webmaster-tools/search-console-api-original)
- **SerpAPI**: [SerpAPI Documentation](https://serpapi.com/search-api)

## Integration Flow

```
Google Search Console
        ↓
    GSC API Query
        ↓
  Extract Queries (with metrics)
        ↓
For each query:
  Google Search (via SerpAPI)
        ↓
  Extract "People Also Search For"
        ↓
    Categorize Keywords
        ↓
  Update keyword-list.md
        ↓
Generate gsc-extracted-keywords.json
        ↓
   Blog Generator Skill
        ↓
    SEO Blog Posts
```

---

**Quick Reference Card**

| Task | Command |
|------|---------|
| Run default extraction | `npm run gsc-extract` |
| Run weekly extraction | `npm run gsc-weekly` |
| Run monthly extraction | `npm run gsc-monthly` |
| View results | `cat gsc-extracted-keywords.json` |
| Check updated keywords | `cat .claude/skills/socal-engineering-blog/references/keyword-list.md` |
| Custom parameters | `GSC_DAYS_BACK=X MAX_QUERIES=Y node scripts/gsc-keyword-extractor.js` |

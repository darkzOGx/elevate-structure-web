# Google Search Console Keyword Extractor - Setup Guide

This guide walks you through setting up the automated GSC keyword extraction system that discovers high-performing keywords and "People Also Search For" queries.

## Overview

The GSC Keyword Extractor:
1. **Fetches real search queries** from Google Search Console API
2. **Searches each query** on Google to find "People Also Search For" keywords
3. **Automatically adds** discovered keywords to your keyword list
4. **Provides metrics** (impressions, clicks, CTR, position) for data-driven decisions

## Prerequisites

- Node.js installed (v16+)
- Google Search Console access for your website
- Google Cloud Platform account (free tier works)
- (Optional) SerpAPI account for enhanced PASF extraction

## Step 1: Google Cloud Project Setup

### 1.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Name it (e.g., "aaaengineeringdesign-seo")
4. Click "Create"

### 1.2 Enable Search Console API

1. In Google Cloud Console, go to **APIs & Services > Library**
2. Search for "Google Search Console API"
3. Click on it and click **Enable**

### 1.3 Create Service Account

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > Service Account**
3. Name: `gsc-keyword-extractor`
4. Description: `Service account for GSC keyword extraction`
5. Click **Create and Continue**
6. Grant role: **Owner** (or at minimum, Editor)
7. Click **Continue**, then **Done**

### 1.4 Generate Service Account Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key > Create New Key**
4. Choose **JSON** format
5. Click **Create**
6. Save the downloaded JSON file as `gsc-credentials.json` in your project root

**⚠️ IMPORTANT:** Add `gsc-credentials.json` to your `.gitignore` to prevent committing credentials!

## Step 2: Grant Search Console Access

### 2.1 Get Service Account Email

Open your `gsc-credentials.json` file and find the `client_email` field:
```json
{
  "client_email": "gsc-keyword-extractor@your-project.iam.gserviceaccount.com",
  ...
}
```

### 2.2 Add to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (aaaengineeringdesign.com)
3. Click **Settings** (gear icon) in left sidebar
4. Click **Users and permissions**
5. Click **Add user**
6. Paste the service account email
7. Set permission to **Owner** (required for API access)
8. Click **Add**

## Step 3: Install Required Dependencies

```bash
# Install googleapis package
npm install googleapis

# Optional: Install SerpAPI for "People Also Search For" extraction
npm install google-search-results-nodejs
```

## Step 4: Configure Environment Variables (Optional)

Create a `.env` file in your project root (or set these as environment variables):

```bash
# Required
GSC_PROPERTY_URL=https://aaaengineeringdesign.com
GSC_CREDENTIALS_PATH=./gsc-credentials.json

# Optional - Customize behavior
GSC_DAYS_BACK=30          # Days of data to fetch (default: 30)
MIN_IMPRESSIONS=10        # Minimum impressions to include (default: 10)
MAX_QUERIES=50           # Maximum queries to process (default: 50)

# Optional - SerpAPI for enhanced "People Also Search For" extraction
SERPAPI_KEY=your_serpapi_key_here
```

## Step 5: SerpAPI Setup (Optional but Recommended)

SerpAPI provides reliable "People Also Search For" keyword extraction from Google search results.

### 5.1 Create SerpAPI Account

1. Go to [SerpAPI.com](https://serpapi.com/)
2. Sign up for free account (100 searches/month free)
3. Upgrade if needed ($50/month for 5,000 searches)

### 5.2 Get API Key

1. Log in to SerpAPI dashboard
2. Copy your API key from the dashboard
3. Add to `.env` file: `SERPAPI_KEY=your_key_here`

### 5.3 Install SerpAPI Package

```bash
npm install google-search-results-nodejs
```

## Step 6: Update the Script for SerpAPI

If using SerpAPI, uncomment the SerpAPI implementation in `scripts/gsc-keyword-extractor.js`:

```javascript
// Find the extractRelatedSearches function and uncomment:
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);

const params = {
  q: query,
  location: "California, United States",
  hl: "en",
  gl: "us",
};

const data = await search.json(params);
relatedKeywords = data.related_searches?.map(s => s.query) || [];
```

## Step 7: Test the Setup

Run a test extraction with limited queries:

```bash
# Test with just 5 queries
MAX_QUERIES=5 node scripts/gsc-keyword-extractor.js
```

**Expected output:**
```
🚀 GSC Keyword Extractor Starting...

📊 Connecting to Google Search Console...
✅ Connected to GSC

📥 Fetching queries from last 30 days...
✅ Found 150 queries

🔍 Extracting "People also search for" keywords...

[1/5] Processing: "structural engineer long beach"
  Impressions: 245, Clicks: 12, Position: 8.5
  Searching for related keywords for: "structural engineer long beach"
  Found 8 related keywords

...

✅ Extracted 45 total keywords

💾 Saved results to: gsc-extracted-keywords.json

📝 Adding keywords to keyword list...

✅ Added 23 new keywords to keyword list

✅ Process completed successfully!

Summary:
- Total GSC queries processed: 5
- Total keywords extracted: 45
- New keywords added to list: 23
```

## Step 8: Verify Results

### 8.1 Check JSON Output

```bash
# View extracted keywords with metrics
cat gsc-extracted-keywords.json
```

Should show:
```json
{
  "generatedAt": "2025-11-15T...",
  "totalKeywords": 45,
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
    ...
  ]
}
```

### 8.2 Check Updated Keyword List

```bash
# View updated keyword list
tail -n 30 .claude/skills/socal-engineering-blog/references/keyword-list.md
```

Should show new keywords added to the "Long-Tail GSC Keywords" section.

## Step 9: Automate (Optional)

### 9.1 Create Weekly Cron Job

```bash
# Add to crontab (runs every Monday at 9 AM)
0 9 * * 1 cd /path/to/project && node scripts/gsc-keyword-extractor.js
```

### 9.2 Create npm Script

Add to `package.json`:
```json
{
  "scripts": {
    "gsc-extract": "node scripts/gsc-keyword-extractor.js",
    "gsc-weekly": "GSC_DAYS_BACK=7 node scripts/gsc-keyword-extractor.js",
    "gsc-monthly": "GSC_DAYS_BACK=30 MAX_QUERIES=100 node scripts/gsc-keyword-extractor.js"
  }
}
```

Then run:
```bash
npm run gsc-extract      # Default (30 days, 50 queries)
npm run gsc-weekly       # Last 7 days
npm run gsc-monthly      # Last 30 days, up to 100 queries
```

## Troubleshooting

### Error: "Access denied" or "Permission denied"

**Solution:**
- Verify service account email is added to Google Search Console with Owner permissions
- Wait 5-10 minutes after adding (can take time to propagate)
- Check that Search Console API is enabled in Google Cloud Console

### Error: "Invalid credentials"

**Solution:**
- Verify `gsc-credentials.json` path is correct
- Ensure JSON file is valid (not corrupted)
- Re-download credentials from Google Cloud Console

### Error: "Property not found"

**Solution:**
- Verify `GSC_PROPERTY_URL` matches exactly (include https://)
- Check that you have access to the property in Search Console
- Try with and without trailing slash

### No queries returned

**Solution:**
- Reduce `MIN_IMPRESSIONS` (try 1 or 0)
- Increase `GSC_DAYS_BACK` (try 90 days)
- Verify site has traffic in Search Console
- Check dimension filters in the script

### SerpAPI errors

**Solution:**
- Verify API key is correct
- Check monthly quota (free = 100 searches/month)
- Ensure `google-search-results-nodejs` is installed
- Add error handling with try/catch

## Usage Recommendations

### Weekly Run (Recommended)
- Captures trending searches
- Identifies seasonal keywords
- Monitors competitor keywords
- Quick execution (5-10 minutes)

```bash
npm run gsc-weekly
```

### Monthly Deep Dive
- Comprehensive keyword expansion
- Long-tail discovery
- Strategic planning
- Longer execution (20-30 minutes)

```bash
npm run gsc-monthly
```

### After Traffic Spikes
- Capitalize on viral content
- Identify what's working
- Find related opportunities

```bash
GSC_DAYS_BACK=3 MAX_QUERIES=20 node scripts/gsc-keyword-extractor.js
```

## Best Practices

1. **Run before blog planning sessions** - Use fresh data for topic selection
2. **Review JSON output** - Analyze metrics to prioritize keywords
3. **Monitor CTR gaps** - High impressions + low CTR = optimization opportunity
4. **Track position changes** - Keywords moving up/down indicate algorithm changes
5. **Combine with manual research** - GSC data + competitor analysis + industry trends
6. **Update keyword classifications** - Review auto-categorized intent/volume/difficulty
7. **Archive results** - Keep historical JSON files for trend analysis

## Security & Maintenance

### Security
- ✅ Add `gsc-credentials.json` to `.gitignore`
- ✅ Add `.env` to `.gitignore`
- ✅ Never commit API keys
- ✅ Use environment variables for sensitive data
- ✅ Rotate service account keys every 90 days

### Maintenance
- Review extracted keywords monthly
- Update categorization rules as needed
- Archive old `gsc-extracted-keywords.json` files
- Monitor API quotas (Search Console API = 200,000 requests/day free)
- Update SerpAPI subscription based on usage

## Next Steps

After setup:
1. Run initial extraction: `npm run gsc-extract`
2. Review `gsc-extracted-keywords.json`
3. Check updated `keyword-list.md`
4. Integrate high-performing keywords into next blog batch
5. Set up weekly/monthly automated runs
6. Track which GSC keywords convert to blog posts

---

**Need help?** Check the script comments in `scripts/gsc-keyword-extractor.js` for detailed implementation notes.

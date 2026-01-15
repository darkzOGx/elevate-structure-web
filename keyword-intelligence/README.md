# Keyword Intelligence Module - 2025 SEO/GEO/AEO Optimization

Automated keyword research and intelligence gathering for blog content generation with 2025 SEO best practices.

## Features

- **SerpAPI Integration**: Fetch People Also Ask (PAA), People Also Search For (PASF), and long-tail keywords
- **Weekly Automated Updates**: Scheduler refreshes keyword intelligence every Monday at 3 AM
- **Manual Trigger Support**: Drop `TRIGGER_UPDATE` file in project root to force immediate update
- **Stale Content Detection**: Flags keyword intelligence older than 14 days
- **Query Fan-Out Analysis**: Groups related questions by search intent
- **SERP Feature Detection**: Identifies featured snippets, local packs, PAA boxes
- **Content Brief Generation**: Creates comprehensive blog outlines with all 2025 requirements

## Architecture

```
keyword-intelligence/
├── fetcher.py          # SerpAPI integration, PAA/PASF extraction
├── scheduler.py        # Weekly cron job for keyword refresh
├── storage.py          # Keyword data persistence and retrieval
├── analyzer.py         # Query Fan-Out and intent analysis
├── data/
│   ├── active_topics.json      # Topics to track (customize for site niche)
│   ├── cache/                  # SERP response cache (7-day TTL)
│   └── {topic}-{keyword}.json  # Keyword intelligence snapshots
└── logs/
    └── scheduler.log           # Scheduler activity log
```

## Installation

### Prerequisites

- Python 3.8+
- SerpAPI account (free tier: 100 searches/month)

### Setup

1. **Install dependencies**:
```bash
pip install -r keyword-intelligence/requirements.txt
```

2. **Configure SerpAPI key**:
```bash
# Option 1: Environment variable (recommended)
export SERPAPI_KEY="your_api_key_here"

# Option 2: Edit config.yaml
# Uncomment and set api_key in config.yaml
```

3. **Customize active_topics.json**:
Edit `keyword-intelligence/data/active_topics.json` to match your site's niche and target keywords.

4. **Test the setup**:
```bash
# Fetch intelligence for a single keyword
python keyword-intelligence/fetcher.py "structural engineer california" --topic structural-engineering --save
```

## Usage

### Fetch Keyword Intelligence (Manual)

```bash
# Fetch and save intelligence for a keyword
python keyword-intelligence/fetcher.py "residential structural engineer" \
  --topic residential-structural-engineering \
  --save

# Output: data/residential-structural-engineering-residential-structural-engineer.json
```

### Run Scheduler (Production)

```bash
# Start scheduler daemon (runs weekly on Monday 3 AM)
python keyword-intelligence/scheduler.py --start

# Run update immediately
python keyword-intelligence/scheduler.py --run-now

# Update specific topic only
python keyword-intelligence/scheduler.py --run-now --topic seismic-engineering

# Check scheduler status
python keyword-intelligence/scheduler.py
```

### Manual Trigger (Alternative)

Drop a trigger file to force immediate update:

```bash
# Create trigger file
touch TRIGGER_UPDATE

# Scheduler will detect and run update within 1 minute
# (requires scheduler to be running with --start)
```

### Query Analysis

```bash
# Analyze intent coverage for a topic
python keyword-intelligence/analyzer.py --intent-coverage residential-structural-engineering

# Find content gaps
python keyword-intelligence/analyzer.py --content-gaps seismic-engineering

# Identify SERP feature opportunities
python keyword-intelligence/analyzer.py --serp-features --topic foundation-engineering

# Generate content brief for keyword
python keyword-intelligence/analyzer.py --brief "ADU structural engineering" residential-structural-engineering
```

### Storage & Export

```bash
# List all stored intelligence
python keyword-intelligence/storage.py --list

# List for specific topic
python keyword-intelligence/storage.py --list --topic seismic-engineering

# Show summary statistics
python keyword-intelligence/storage.py --stats

# Find stale intelligence (older than 14 days)
python keyword-intelligence/storage.py --stale 14

# Export for blog generation
python keyword-intelligence/storage.py --export blog-keywords.json --topic residential-structural-engineering
```

## Output Format

Each keyword intelligence file contains:

```json
{
  "topic": "residential-structural-engineering",
  "primary_keyword": "ADU structural engineering",
  "last_updated": "2025-01-01T14:30:00",
  "long_tail_keywords": [
    "ADU structural engineering cost",
    "ADU structural engineering requirements",
    "residential ADU structural plans",
    ...
  ],
  "people_also_ask": [
    {
      "question": "What is ADU structural engineering?",
      "answer": "ADU structural engineering involves..."
    },
    ...
  ],
  "people_also_search_for": [
    "ADU foundation design",
    "garage conversion structural plans",
    ...
  ],
  "query_fan_out_intents": [
    {
      "intent": "cost",
      "keywords": [
        "How much does ADU structural engineering cost?",
        "ADU engineering fees",
        ...
      ]
    },
    {
      "intent": "requirements",
      "keywords": [
        "Do I need an engineer for ADU?",
        "ADU permit requirements",
        ...
      ]
    }
  ],
  "serp_features_present": [
    "featured_snippet",
    "people_also_ask",
    "related_searches"
  ]
}
```

## Integration with Blog Generator

The keyword intelligence is used to generate 2025-optimized blog posts with:

### Content Structure
- **Answer Capsule** (40-60 word TL;DR) immediately after H1
- **Question-format headers** (H2/H3) based on Query Fan-Out intents
- **FAQ section** with 5-8 PAA questions + FAQ schema
- **Semantic HTML** (`<article>`, `<section>`, `<aside>`)
- **First-person E-E-A-T signals** ("In our testing...", "We found...")

### Schema/JSON-LD
- `Article` schema with `about` & `mentions` properties
- `FAQPage` schema for PAA questions
- `speakable` property targeting Answer Capsule and H1
- Author `Person` schema with `sameAs` links

### Output Files (per blog post)
- `{slug}.html` - Optimized blog HTML
- `{slug}.schema.json` - Standalone JSON-LD
- `{slug}.keywords.json` - Keyword intelligence snapshot
- `{slug}.llms.txt` - LLM-friendly plain text version
- `indexnow-payload.json` - IndexNow notification payload

## Configuration

Edit `config.yaml` to customize:

- **Scheduler settings**: Day/time for weekly updates
- **Stale threshold**: Days before intelligence is considered outdated
- **Cache duration**: SERP data cache TTL
- **Blog output formats**: Enable/disable HTML, schema, LLMS.txt, etc.
- **Content structure**: Answer capsule settings, E-E-A-T requirements
- **IndexNow**: Auto-submit URLs to search engines

## Workflow

### Weekly Automated Flow

1. **Monday 3 AM**: Scheduler wakes up
2. **Check staleness**: Compares `last_updated` vs `stale_threshold_days`
3. **Fetch updates**: Calls SerpAPI for stale keywords
4. **Extract intelligence**: PAA, PASF, long-tail, SERP features
5. **Save to storage**: Updates JSON files in `data/`
6. **Log completion**: Records update in `scheduler.log`

### Blog Generation Flow

1. **Load intelligence**: Read keyword intelligence for topic
2. **Generate content brief**: Headers, FAQ, related keywords
3. **Write blog post**: Apply 2025 structure requirements
4. **Add schema markup**: Article, FAQ, LocalBusiness, etc.
5. **Generate outputs**: HTML, schema.json, keywords.json, llms.txt
6. **Submit to IndexNow**: Notify search engines of new content

## Monitoring

### Check last run
```bash
cat keyword-intelligence/data/last_run.json
```

Output:
```json
{
  "timestamp": "2025-01-06T03:00:15",
  "topics_updated": [
    "residential-structural-engineering:ADU structural engineering",
    "seismic-engineering:soft story retrofit",
    ...
  ],
  "total_topics": 15
}
```

### View logs
```bash
tail -f keyword-intelligence/logs/scheduler.log
```

## Fallback Mode

When SerpAPI key is not available:

- **Fetcher** returns minimal mock data for testing
- **Warning displayed**: "No SerpAPI key found. Using fallback mode."
- **Limited functionality**: No real PAA/PASF data
- **Use case**: Development/testing without API key

## Rate Limiting

- **SerpAPI free tier**: 100 searches/month
- **Scheduler adds delays**: 2-second pause between keywords
- **Cache enabled**: 7-day TTL reduces API calls
- **Recommended**: Limit `active_topics.json` to 70-80 keywords for monthly quota

## Troubleshooting

### "No intelligence data found"
- Run `--run-now` to fetch initial data
- Check `active_topics.json` has keywords for the topic

### "API key not found"
- Set `SERPAPI_KEY` environment variable
- Or uncomment `api_key` in `config.yaml`

### "Scheduler not running updates"
- Check `scheduler.log` for errors
- Verify `--start` flag is used (not just `--run-now`)
- Test manual trigger: `touch TRIGGER_UPDATE`

### "Stale threshold always triggering"
- Reduce `stale_threshold_days` in `config.yaml`
- Check file timestamps: `ls -la keyword-intelligence/data/`

## Best Practices

1. **Start small**: Add 10-15 keywords to `active_topics.json`, expand after testing
2. **Monitor API usage**: Check SerpAPI dashboard for quota consumption
3. **Review intelligence**: Manually inspect generated JSON files for quality
4. **Customize for niche**: Edit `active_topics.json` to match your site's topics
5. **Use content briefs**: Generate briefs before writing blog posts for structure
6. **Enable caching**: Reduces API calls, speeds up repeated queries
7. **Run scheduler as daemon**: Use systemd, supervisor, or PM2 for production

## License

Proprietary - Part of elevate-structure-web blog generation system

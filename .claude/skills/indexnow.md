# IndexNow Auto-Submission Skill

Automatically submit URLs to IndexNow API for instant search engine indexing (Bing, Yandex, etc.)

## Usage
Just invoke this skill and it will:
1. Read URLs from your sitemap.xml
2. Submit them to IndexNow API in batches
3. Generate and manage your API key
4. Provide detailed submission results

## What This Skill Does

### 1. API Key Management
- Generates a unique IndexNow API key (if not exists)
- Creates the required API key verification file in /public
- Stores key in environment variables

### 2. URL Collection
- Parses sitemap.xml to extract all URLs
- Filters for recently modified URLs (optional)
- Supports manual URL submission

### 3. IndexNow Submission
- Submits URLs to IndexNow API endpoints
- Supports batch submissions (up to 10,000 URLs)
- Handles rate limiting and retries
- Validates responses from search engines

### 4. Multi-Engine Support
- Bing (api.indexnow.org)
- Yandex (yandex.com)
- Naver (searchadvisor.naver.com)

## Implementation Steps

When this skill is invoked, perform the following:

### Step 1: Check/Generate API Key
```bash
# Check if INDEXNOW_API_KEY exists in .env
# If not, generate: uuidgen or openssl rand -hex 16
# Create verification file: public/{API_KEY}.txt containing the API key
```

### Step 2: Parse Sitemap
```javascript
// Read public/sitemap.xml
// Extract all <loc> URLs
// Optional: Filter by <lastmod> for recent changes only
```

### Step 3: Submit to IndexNow
```bash
# POST to https://api.indexnow.org/indexnow
# Headers: Content-Type: application/json
# Body format (batch):
{
  "host": "www.aaaengineeringdesign.com",
  "key": "YOUR_API_KEY",
  "keyLocation": "https://www.aaaengineeringdesign.com/YOUR_API_KEY.txt",
  "urlList": [
    "https://www.aaaengineeringdesign.com/blog/post1/",
    "https://www.aaaengineeringdesign.com/blog/post2/"
  ]
}
```

### Step 4: Report Results
```
✓ Submitted 56 URLs to IndexNow
✓ Response: 200 OK
✓ URLs indexed by Bing, Yandex, and partners
```

## Technical Specifications

### IndexNow API Endpoint
- **URL**: `https://api.indexnow.org/indexnow`
- **Method**: POST
- **Content-Type**: application/json; charset=utf-8
- **Response Codes**:
  - 200 OK: Successfully submitted
  - 202 Accepted: Received, processing
  - 400 Bad Request: Invalid format
  - 403 Forbidden: Invalid API key
  - 422 Unprocessable: Invalid URLs
  - 429 Too Many Requests: Rate limited

### API Key Format
- Length: 8-128 characters
- Characters: Hexadecimal (a-f, 0-9)
- Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Batch Submission Limits
- Max URLs per request: 10,000
- Max request size: 10MB
- Recommended batch size: 100-1000 URLs

### Key Verification File
- Location: `https://yourdomain.com/{API_KEY}.txt`
- Content: Plain text containing the API key
- Must be accessible via HTTP GET

## Example Workflow

```javascript
// 1. Generate/Load API Key
const apiKey = process.env.INDEXNOW_API_KEY || generateUUID();

// 2. Parse Sitemap
const urls = parseSitemapXML('public/sitemap.xml');

// 3. Prepare Payload
const payload = {
  host: "www.aaaengineeringdesign.com",
  key: apiKey,
  keyLocation: `https://www.aaaengineeringdesign.com/${apiKey}.txt`,
  urlList: urls
};

// 4. Submit to IndexNow
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload)
});

// 5. Handle Response
if (response.ok) {
  console.log(`✓ Successfully submitted ${urls.length} URLs`);
} else {
  console.error(`✗ Error: ${response.status} ${response.statusText}`);
}
```

## Automation Options

### Post-Deployment Hook
Add to your deployment script:
```bash
# After build/deploy
npm run indexnow
```

### GitHub Actions Integration
```yaml
- name: Submit to IndexNow
  run: |
    curl -X POST https://api.indexnow.org/indexnow \
      -H "Content-Type: application/json" \
      -d @indexnow-payload.json
```

### Vercel Deployment Hook
```json
{
  "scripts": {
    "postbuild": "node scripts/submit-indexnow.js"
  }
}
```

## Quick Start Commands

When invoked, this skill should:

1. **Check API key exists**
   ```bash
   if [ ! -f .env ] || ! grep -q "INDEXNOW_API_KEY" .env; then
     echo "INDEXNOW_API_KEY=$(openssl rand -hex 32)" >> .env
   fi
   ```

2. **Create verification file**
   ```bash
   source .env
   echo $INDEXNOW_API_KEY > public/$INDEXNOW_API_KEY.txt
   ```

3. **Submit URLs from sitemap**
   ```bash
   node -e "
   const fs = require('fs');
   const xml = fs.readFileSync('public/sitemap.xml', 'utf8');
   const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

   fetch('https://api.indexnow.org/indexnow', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       host: 'www.aaaengineeringdesign.com',
       key: process.env.INDEXNOW_API_KEY,
       keyLocation: \`https://www.aaaengineeringdesign.com/\${process.env.INDEXNOW_API_KEY}.txt\`,
       urlList: urls
     })
   }).then(r => console.log('Status:', r.status));
   "
   ```

## Best Practices

1. **Submit only changed content** - Don't spam the API with unchanged URLs
2. **Use batch submissions** - More efficient than individual URL submissions
3. **Monitor response codes** - Handle rate limiting gracefully
4. **Keep API key secure** - Store in environment variables, not version control
5. **Verify key file is accessible** - Test the key verification URL before submitting
6. **Submit after deployment** - Only submit URLs after content is live
7. **Track submissions** - Log submission times to avoid duplicates

## Verification

After submission, verify indexing:
- **Bing**: site:yoururl.com in Bing search
- **Bing Webmaster Tools**: Check URL inspection tool
- **Google**: IndexNow URLs also submitted to Google partners

## Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| 403 Forbidden | Invalid API key | Verify key file is accessible |
| 422 Unprocessable | Invalid URL format | Check URLs are absolute and valid |
| 429 Too Many Requests | Rate limit exceeded | Wait and retry with exponential backoff |
| 500 Server Error | API issue | Retry after 5 minutes |

## Output Format

This skill should output:

```
🚀 IndexNow Submission Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ API Key: abc123...xyz789
✓ Verification File: https://www.aaaengineeringdesign.com/abc123...xyz789.txt
✓ URLs Collected: 56 from sitemap.xml

📤 Submitting to IndexNow API...
✓ Response: 200 OK
✓ Submitted 56 URLs successfully

📊 Submission Details:
- Host: www.aaaengineeringdesign.com
- Timestamp: 2025-11-07T10:45:00Z
- Search Engines: Bing, Yandex, Naver, Seznam

✓ Your URLs are now being processed for indexing!

💡 Tip: Check Bing Webmaster Tools in 24-48 hours to verify indexing status.
```

## Integration with Deployment

Add this to package.json:
```json
{
  "scripts": {
    "indexnow": "node scripts/indexnow-submit.js",
    "deploy": "npm run build && vercel deploy --prod && npm run indexnow"
  }
}
```

## Advanced Features

### Filter Recent Changes Only
```javascript
// Only submit URLs modified in last 7 days
const recentUrls = urls.filter(url => {
  const lastmod = getLastModDate(url);
  const daysSince = (Date.now() - lastmod) / (1000 * 60 * 60 * 24);
  return daysSince <= 7;
});
```

### Multiple Sitemap Support
```javascript
// Submit from multiple sitemaps
const sitemaps = ['sitemap.xml', 'sitemap-blog.xml', 'sitemap-pages.xml'];
const allUrls = sitemaps.flatMap(file => parseSitemap(file));
```

### Retry Logic
```javascript
async function submitWithRetry(urls, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await submitToIndexNow(urls);
    if (response.ok) return response;
    await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
  }
  throw new Error('Max retries exceeded');
}
```

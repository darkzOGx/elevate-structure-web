# IndexNow Automation Scripts

Automated URL submission to search engines using the IndexNow protocol.

## Quick Start

### 1. Generate API Key (First Time Only)

Run the script once to generate your IndexNow API key:

```bash
npm run indexnow
```

This will:
- Generate a unique API key
- Save it to `.env.local`
- Create the verification file in `public/`
- Submit all URLs from your sitemap

### 2. Deploy the Verification File

After the first run, deploy your site to make the verification file accessible:

```bash
# The file public/[YOUR_API_KEY].txt must be accessible at:
# https://www.aaaengineeringdesign.com/[YOUR_API_KEY].txt
```

### 3. Set Up GitHub Secrets (For Automation)

1. Go to your GitHub repository settings
2. Navigate to Settings → Secrets and variables → Actions
3. Add a new secret named `INDEXNOW_API_KEY`
4. Paste your API key from `.env.local`

## Usage

### Manual Submission

Submit all URLs from sitemap:
```bash
npm run indexnow
```

Submit only recently modified URLs (last 7 days):
```bash
npm run indexnow:recent
```

### Automatic Submission

The GitHub Actions workflow automatically submits URLs when:
- ✅ You push changes to `main` branch
- ✅ Sitemap.xml is modified
- ✅ Blog content is updated
- ✅ Manual trigger from Actions tab

### Custom Deployment Hook

Add to your deployment script:
```bash
npm run build && npm run indexnow && vercel deploy --prod
```

Or use the combined command:
```bash
npm run deploy
```

## Configuration

### Environment Variables

Create `.env.local` with:
```env
INDEXNOW_API_KEY=your_64_character_hex_key_here
```

### Script Configuration

Edit `scripts/submit-indexnow.js` to customize:

```javascript
const CONFIG = {
  host: 'www.aaaengineeringdesign.com',  // Your domain
  sitemapPath: 'public/sitemap.xml',      // Sitemap location
  batchSize: 1000,                        // URLs per batch
  recentDays: null,                       // Filter recent changes (or null for all)
};
```

## API Key Verification

IndexNow requires a verification file to prove domain ownership:

1. **File location**: `public/[API_KEY].txt`
2. **File content**: Your API key (plain text)
3. **Public URL**: `https://yourdomain.com/[API_KEY].txt`

The script automatically creates this file. Just deploy it to your hosting.

## How It Works

```
┌─────────────────┐
│  Sitemap.xml    │ ← Parse URLs
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  IndexNow API   │ ← Submit in batches
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Search Engines  │ ← Bing, Yandex, Naver, etc.
│  (Instant Index)│
└─────────────────┘
```

## IndexNow API Details

### Endpoint
```
POST https://api.indexnow.org/indexnow
```

### Request Format
```json
{
  "host": "www.aaaengineeringdesign.com",
  "key": "your_api_key",
  "keyLocation": "https://www.aaaengineeringdesign.com/your_api_key.txt",
  "urlList": [
    "https://www.aaaengineeringdesign.com/page1/",
    "https://www.aaaengineeringdesign.com/page2/"
  ]
}
```

### Response Codes
- **200 OK**: URLs successfully submitted
- **202 Accepted**: URLs received, processing
- **400 Bad Request**: Invalid request format
- **403 Forbidden**: Invalid API key
- **422 Unprocessable**: Invalid URLs
- **429 Too Many Requests**: Rate limit exceeded

## Supported Search Engines

IndexNow automatically notifies:
- 🔵 **Bing** (Microsoft)
- 🔴 **Yandex** (Russia)
- 🟢 **Naver** (Korea)
- 🟡 **Seznam.cz** (Czech Republic)

And more partners joining regularly!

## Best Practices

### ✅ DO
- Submit URLs after deploying new content
- Submit changed/updated pages only
- Keep API key secure in environment variables
- Verify the key file is publicly accessible
- Monitor submission responses

### ❌ DON'T
- Submit unchanged URLs repeatedly
- Submit URLs before content is live
- Commit API key to version control
- Submit invalid or non-existent URLs
- Exceed rate limits (1000 URLs per batch max)

## Troubleshooting

### Error: 403 Forbidden
**Cause**: API key verification failed
**Solution**:
1. Ensure `public/[API_KEY].txt` exists
2. Verify the file is accessible: `curl https://yourdomain.com/[API_KEY].txt`
3. Check the file contains your exact API key

### Error: 422 Unprocessable Entity
**Cause**: Invalid URL format
**Solution**:
1. Verify all URLs in sitemap are absolute (not relative)
2. Check URLs are properly encoded
3. Ensure URLs start with `https://`

### Error: 429 Too Many Requests
**Cause**: Rate limit exceeded
**Solution**:
1. Wait 5-10 minutes before retrying
2. Reduce batch size in config
3. Don't submit the same URLs multiple times per day

### No URLs Found in Sitemap
**Cause**: Sitemap not generated or empty
**Solution**:
1. Run `npm run build` to regenerate sitemap
2. Verify `public/sitemap.xml` exists and has `<loc>` tags

## Verification

After submission, verify indexing:

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Navigate to URL Inspection
3. Enter your submitted URL
4. Check "Discovered via IndexNow" status

### Bing Search
```
site:www.aaaengineeringdesign.com
```

Allow 24-48 hours for indexing to complete.

## Advanced Usage

### Filter by Last Modified Date

Only submit URLs modified in the last 7 days:

```javascript
// Edit scripts/submit-indexnow.js
const CONFIG = {
  recentDays: 7,  // Only URLs modified in last 7 days
};
```

Then run:
```bash
npm run indexnow
```

### Multiple Sitemaps

If you have multiple sitemaps, modify the script:

```javascript
const sitemaps = [
  'public/sitemap.xml',
  'public/sitemap-blog.xml',
  'public/sitemap-pages.xml'
];

const allUrls = sitemaps.flatMap(path => parseSitemap(path));
```

### Retry Failed Submissions

The script automatically handles retries with exponential backoff. To customize:

```javascript
async function submitWithRetry(urls, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const result = await submitToIndexNow(apiKey, keyLocation, urls);
    if (result.ok) return result;

    // Wait 2^i seconds before retry
    await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
  }
  throw new Error('Max retries exceeded');
}
```

## Integration Examples

### Vercel

Add to `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "hooks": {
    "postDeploy": "npm run indexnow"
  }
}
```

### Netlify

Add to `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  INDEXNOW_API_KEY = "${INDEXNOW_API_KEY}"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[context.production]
  command = "npm run build && npm run indexnow"
```

### Package.json Scripts

```json
{
  "scripts": {
    "build": "next build && next-sitemap",
    "indexnow": "node scripts/submit-indexnow.js",
    "indexnow:recent": "INDEXNOW_RECENT_DAYS=7 node scripts/submit-indexnow.js",
    "deploy": "npm run build && npm run indexnow",
    "deploy:prod": "npm run deploy && vercel deploy --prod"
  }
}
```

## Monitoring

Track IndexNow submissions:

1. **GitHub Actions**: Check workflow logs
2. **Bing Webmaster Tools**: View IndexNow submissions
3. **Script Output**: Review terminal logs

Sample output:
```
═══════════════════════════════════════════════════════════
🚀 IndexNow Submission Report
═══════════════════════════════════════════════════════════

✓ API Key: abc12345...xyz67890
✓ Verification: https://www.aaaengineeringdesign.com/abc...txt
✓ URLs Collected: 56 from sitemap.xml

📤 Submitting to IndexNow API...
✓ Response: 200 OK
✓ Submitted 56 URLs successfully

📊 Submission Details:
- Host: www.aaaengineeringdesign.com
- Timestamp: 2025-11-07T10:45:00Z
- Search Engines: Bing, Yandex, Naver, Seznam

✓ Your URLs are now being processed for indexing!
```

## Resources

- **IndexNow Protocol**: https://www.indexnow.org/
- **Documentation**: https://www.indexnow.org/documentation
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- **GitHub Repo**: https://github.com/microsoft/IndexNow

## License

This script is part of the AAA Engineering Design website and follows the same license as the main project.

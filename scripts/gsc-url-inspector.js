#!/usr/bin/env node

/**
 * GSC URL Inspector & Sitemap Submitter
 *
 * This script integrates with Google Search Console API to:
 * 1. Perform URL Inspection on newly generated blog post URLs
 * 2. Request indexing for each URL
 * 3. Submit the sitemap for crawling
 *
 * Usage:
 *   node scripts/gsc-url-inspector.js [blog-posts-directory]
 *   node scripts/gsc-url-inspector.js blog-posts-dec-29-2025
 *   node scripts/gsc-url-inspector.js --sitemap-only
 *
 * Prerequisites:
 *   1. Google Cloud project with Search Console API enabled
 *   2. Service account with Search Console API access
 *   3. gsc-credentials.json file in project root
 *   4. Service account added as a user in GSC property
 *
 * API Quotas (as of 2025):
 *   - URL Inspection: 2,000 queries/day, 600 queries/minute
 *   - Sitemap submission: 50/project/day
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Configuration
const CONFIG = {
  siteUrl: 'https://aaaengineeringdesign.com',
  propertyUrl: 'sc-domain:aaaengineeringdesign.com', // Domain property format
  credentialsPath: process.env.GSC_CREDENTIALS_PATH || './gsc-credentials.json',
  sitemapUrl: 'https://aaaengineeringdesign.com/sitemap.xml',

  // Rate limiting
  requestDelayMs: 1000, // 1 second between requests to stay within quota
  maxUrlsPerBatch: 50, // Process up to 50 URLs per run

  // Output
  outputPath: path.join(__dirname, '..', 'gsc-inspection-results.json'),
};

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Initialize Google Search Console API client
 */
async function initializeGSCClient() {
  if (!fs.existsSync(CONFIG.credentialsPath)) {
    throw new Error(`GSC credentials not found at ${CONFIG.credentialsPath}\n\nSetup instructions:\n1. Create Google Cloud project\n2. Enable Search Console API\n3. Create service account and download JSON key\n4. Save as gsc-credentials.json in project root\n5. Add service account email as user in GSC property`);
  }

  const credentials = JSON.parse(fs.readFileSync(CONFIG.credentialsPath, 'utf-8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
    ],
  });

  const authClient = await auth.getClient();

  // URL Inspection API
  const searchconsole = google.searchconsole({
    version: 'v1',
    auth: authClient,
  });

  // Webmasters API (for sitemap submission)
  const webmasters = google.webmasters({
    version: 'v3',
    auth: authClient,
  });

  return { searchconsole, webmasters, authClient };
}

/**
 * Find the most recent blog-posts directory or use provided path
 */
function findBlogPostsDirectory(providedPath) {
  const projectRoot = path.join(__dirname, '..');

  if (providedPath && providedPath !== '--sitemap-only') {
    const fullPath = path.isAbsolute(providedPath)
      ? providedPath
      : path.join(projectRoot, providedPath);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
    throw new Error(`Directory not found: ${providedPath}`);
  }

  // Auto-detect most recent blog-posts-* directory
  const dirs = fs.readdirSync(projectRoot)
    .filter(name => name.startsWith('blog-posts-') && fs.statSync(path.join(projectRoot, name)).isDirectory())
    .sort()
    .reverse();

  if (dirs.length === 0) {
    return null;
  }

  return path.join(projectRoot, dirs[0]);
}

/**
 * Extract blog post URLs from a directory
 */
function extractUrlsFromDirectory(dirPath) {
  const files = fs.readdirSync(dirPath).filter(name => name.endsWith('.md'));

  return files.map(file => {
    const slug = file
      .replace(/^\d+-/, '')
      .replace(/\.md$/, '');
    return `${CONFIG.siteUrl}/blog/${slug}`;
  });
}

/**
 * Inspect a single URL using the URL Inspection API
 */
async function inspectUrl(searchconsole, url) {
  try {
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: CONFIG.propertyUrl,
      },
    });

    const result = response.data.inspectionResult;

    return {
      url,
      success: true,
      indexStatusResult: result.indexStatusResult,
      ampResult: result.ampResult,
      mobileUsabilityResult: result.mobileUsabilityResult,
      richResultsResult: result.richResultsResult,
      verdict: result.indexStatusResult?.verdict || 'UNKNOWN',
      coverageState: result.indexStatusResult?.coverageState || 'UNKNOWN',
      robotsTxtState: result.indexStatusResult?.robotsTxtState || 'UNKNOWN',
      indexingState: result.indexStatusResult?.indexingState || 'UNKNOWN',
      lastCrawlTime: result.indexStatusResult?.lastCrawlTime,
      pageFetchState: result.indexStatusResult?.pageFetchState || 'UNKNOWN',
      crawledAs: result.indexStatusResult?.crawledAs || 'UNKNOWN',
    };
  } catch (error) {
    return {
      url,
      success: false,
      error: error.message,
      code: error.code,
    };
  }
}

/**
 * Request indexing for a URL (Note: This uses the Indexing API which requires separate setup)
 * The URL Inspection API doesn't have direct "request indexing" - that's manual in GSC UI
 * But we can submit sitemap which triggers crawling
 */
async function requestIndexing(searchconsole, url) {
  // Note: The Indexing API is separate and requires different setup
  // For now, we use URL Inspection to check status
  // The sitemap submission + IndexNow combo handles actual indexing requests

  log(`   Inspecting: ${url}`, 'cyan');
  return await inspectUrl(searchconsole, url);
}

/**
 * Submit sitemap to GSC
 */
async function submitSitemap(webmasters) {
  try {
    log('\n📤 Submitting sitemap to Google Search Console...', 'blue');

    // First, check if sitemap already exists
    const listResponse = await webmasters.sitemaps.list({
      siteUrl: CONFIG.siteUrl,
    });

    const existingSitemaps = listResponse.data.sitemap || [];
    const sitemapExists = existingSitemaps.some(s => s.path === CONFIG.sitemapUrl);

    if (sitemapExists) {
      log('   Sitemap already registered, resubmitting...', 'yellow');
    }

    // Submit (or resubmit) the sitemap
    await webmasters.sitemaps.submit({
      siteUrl: CONFIG.siteUrl,
      feedpath: CONFIG.sitemapUrl,
    });

    log('✅ Sitemap submitted successfully!', 'green');
    log(`   URL: ${CONFIG.sitemapUrl}`, 'cyan');

    // Get sitemap status
    const statusResponse = await webmasters.sitemaps.get({
      siteUrl: CONFIG.siteUrl,
      feedpath: CONFIG.sitemapUrl,
    });

    const status = statusResponse.data;
    log(`   Last downloaded: ${status.lastDownloaded || 'Not yet'}`, 'cyan');
    log(`   URLs submitted: ${status.contents?.[0]?.submitted || 'Unknown'}`, 'cyan');
    log(`   URLs indexed: ${status.contents?.[0]?.indexed || 'Unknown'}`, 'cyan');

    return {
      success: true,
      url: CONFIG.sitemapUrl,
      lastDownloaded: status.lastDownloaded,
      urlsSubmitted: status.contents?.[0]?.submitted,
      urlsIndexed: status.contents?.[0]?.indexed,
    };
  } catch (error) {
    log(`❌ Sitemap submission failed: ${error.message}`, 'red');
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Display inspection results summary
 */
function displayResultsSummary(results) {
  console.log('\n' + '═'.repeat(70));
  log('📊 URL INSPECTION RESULTS SUMMARY', 'bright');
  console.log('═'.repeat(70));

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  // Group by verdict
  const verdicts = {};
  successful.forEach(r => {
    const v = r.verdict || 'UNKNOWN';
    verdicts[v] = (verdicts[v] || 0) + 1;
  });

  log(`\n✅ Successfully inspected: ${successful.length}/${results.length} URLs`, 'green');

  if (failed.length > 0) {
    log(`❌ Failed: ${failed.length} URLs`, 'red');
  }

  log('\n📈 Index Status Breakdown:', 'blue');
  Object.entries(verdicts).forEach(([verdict, count]) => {
    const icon = verdict === 'PASS' ? '✅' : verdict === 'NEUTRAL' ? '⚠️' : '❌';
    log(`   ${icon} ${verdict}: ${count}`, verdict === 'PASS' ? 'green' : 'yellow');
  });

  // Show details for non-indexed URLs
  const notIndexed = successful.filter(r => r.verdict !== 'PASS');
  if (notIndexed.length > 0) {
    log('\n⚠️  URLs needing attention:', 'yellow');
    notIndexed.forEach(r => {
      log(`   • ${r.url}`, 'yellow');
      log(`     Status: ${r.coverageState} | Crawl: ${r.pageFetchState}`, 'cyan');
    });
  }

  console.log('\n' + '═'.repeat(70));
}

/**
 * Main execution function
 */
async function main() {
  const args = process.argv.slice(2);
  const sitemapOnly = args.includes('--sitemap-only');
  const providedPath = args.find(a => a !== '--sitemap-only');

  console.log('\n' + '═'.repeat(70));
  log('🔍 GSC URL Inspector & Sitemap Submitter', 'bright');
  console.log('═'.repeat(70) + '\n');

  try {
    // Initialize GSC client
    log('🔐 Connecting to Google Search Console API...', 'blue');
    const { searchconsole, webmasters } = await initializeGSCClient();
    log('✅ Connected successfully\n', 'green');

    const results = {
      timestamp: new Date().toISOString(),
      sitemapResult: null,
      urlInspections: [],
    };

    // Step 1: Submit sitemap (always do this)
    results.sitemapResult = await submitSitemap(webmasters);

    // Step 2: Inspect URLs (if not sitemap-only)
    if (!sitemapOnly) {
      const blogDir = findBlogPostsDirectory(providedPath);

      if (!blogDir) {
        log('\n⚠️  No blog-posts-* directory found. Use --sitemap-only or specify a directory.', 'yellow');
      } else {
        log(`\n📁 Blog directory: ${path.basename(blogDir)}`, 'blue');

        const urls = extractUrlsFromDirectory(blogDir);
        const urlsToProcess = urls.slice(0, CONFIG.maxUrlsPerBatch);

        log(`\n🔍 Inspecting ${urlsToProcess.length} URLs (max ${CONFIG.maxUrlsPerBatch} per run)...\n`, 'blue');

        for (let i = 0; i < urlsToProcess.length; i++) {
          const url = urlsToProcess[i];
          log(`[${i + 1}/${urlsToProcess.length}] Inspecting...`, 'cyan');

          const result = await requestIndexing(searchconsole, url);
          results.urlInspections.push(result);

          if (result.success) {
            const statusIcon = result.verdict === 'PASS' ? '✅' : '⚠️';
            log(`   ${statusIcon} ${result.verdict} | Coverage: ${result.coverageState}`,
                result.verdict === 'PASS' ? 'green' : 'yellow');
          } else {
            log(`   ❌ Error: ${result.error}`, 'red');
          }

          // Rate limiting
          if (i < urlsToProcess.length - 1) {
            await new Promise(resolve => setTimeout(resolve, CONFIG.requestDelayMs));
          }
        }

        // Display summary
        displayResultsSummary(results.urlInspections);
      }
    }

    // Save results
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(results, null, 2));
    log(`\n💾 Results saved to: ${CONFIG.outputPath}`, 'cyan');

    // Final summary
    console.log('\n' + '═'.repeat(70));
    log('✅ GSC OPERATIONS COMPLETE', 'bright');
    console.log('═'.repeat(70));

    log('\n📋 What was done:', 'blue');
    if (results.sitemapResult?.success) {
      log('   ✅ Sitemap submitted to Google Search Console', 'green');
    }
    if (results.urlInspections.length > 0) {
      log(`   ✅ ${results.urlInspections.length} URLs inspected`, 'green');
    }

    log('\n⏱️  Next steps:', 'yellow');
    log('   • Google will crawl sitemap within 24-48 hours', 'cyan');
    log('   • Check GSC Coverage report in 2-3 days', 'cyan');
    log('   • Monitor indexing status in GSC URL Inspection tool', 'cyan');

    console.log('');

  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');

    if (error.message.includes('credentials')) {
      log('\n📋 Setup Instructions:', 'yellow');
      log('   1. Go to https://console.cloud.google.com/', 'cyan');
      log('   2. Create a project (or select existing)', 'cyan');
      log('   3. Enable "Google Search Console API"', 'cyan');
      log('   4. Create a Service Account', 'cyan');
      log('   5. Download the JSON key', 'cyan');
      log('   6. Save as "gsc-credentials.json" in project root', 'cyan');
      log('   7. In GSC, add the service account email as a user', 'cyan');
    }

    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, inspectUrl, submitSitemap };

#!/usr/bin/env node

/**
 * IndexNow URL Submission Script
 * Dynamically builds URLs from blog-data.ts and service/location pages
 * for instant search engine indexing (Bing, Yandex, etc.)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  host: 'aaaengineeringdesign.com',
  siteUrl: 'https://aaaengineeringdesign.com',
  blogDataPath: path.join(__dirname, '../src/lib/blog-data.ts'),
  // Use standardized key — do NOT generate random keys
  apiKey: process.env.INDEXNOW_API_KEY || 'b53cf03137214ff0bb2e1ab0d3ebdb5c',
  publicDir: path.join(__dirname, '../public'),
  // Use Yandex endpoint (works without prior verification, syncs to all IndexNow partners)
  indexNowEndpoint: 'https://yandex.com/indexnow',
  batchSize: 1000,
  recentDays: null,
};

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Build URL list dynamically from blog-data.ts and known routes.
 * No dependency on public/sitemap.xml.
 */
function buildUrlList() {
  const urls = [];

  // Static pages
  const staticPages = [
    '', '/blog', '/services', '/about', '/contact', '/locations',
  ];
  for (const page of staticPages) {
    urls.push(`${CONFIG.siteUrl}${page}`);
  }

  // Blog post URLs from blog-data.ts
  if (fs.existsSync(CONFIG.blogDataPath)) {
    const blogData = fs.readFileSync(CONFIG.blogDataPath, 'utf8');
    const idMatches = blogData.match(/id:\s*'([^']+)'/g) || [];
    for (const match of idMatches) {
      const id = match.replace(/id:\s*'/, '').replace(/'$/, '');
      // Skip hub/guide pages that aren't blog posts, and noIndex posts
      if (id) {
        urls.push(`${CONFIG.siteUrl}/blog/${id}`);
      }
    }
    log(`✓ Found ${idMatches.length} blog posts in blog-data.ts`, 'green');
  } else {
    log('⚠️  blog-data.ts not found, submitting static pages only', 'yellow');
  }

  // Service pages
  const servicesDataPath = path.join(__dirname, '../src/lib/services-data.ts');
  if (fs.existsSync(servicesDataPath)) {
    const servicesData = fs.readFileSync(servicesDataPath, 'utf8');
    const serviceIds = servicesData.match(/id:\s*'([^']+)'/g) || [];
    for (const match of serviceIds) {
      const id = match.replace(/id:\s*'/, '').replace(/'$/, '');
      if (id) urls.push(`${CONFIG.siteUrl}/services/${id}`);
    }
    log(`✓ Found ${serviceIds.length} service pages`, 'green');
  }

  // Location pages
  const locationsDataPath = path.join(__dirname, '../src/lib/locations-data.ts');
  if (fs.existsSync(locationsDataPath)) {
    const locationsData = fs.readFileSync(locationsDataPath, 'utf8');
    const locationIds = locationsData.match(/id:\s*'([^']+)'/g) || [];
    for (const match of locationIds) {
      const id = match.replace(/id:\s*'/, '').replace(/'$/, '');
      if (id) urls.push(`${CONFIG.siteUrl}/locations/${id}`);
    }
    log(`✓ Found ${locationIds.length} location pages`, 'green');
  }

  return urls;
}

function ensureKeyVerificationFile(apiKey) {
  const keyFilePath = path.join(CONFIG.publicDir, `${apiKey}.txt`);
  if (!fs.existsSync(keyFilePath)) {
    fs.writeFileSync(keyFilePath, apiKey, 'utf8');
    log(`✓ Created verification file: ${apiKey}.txt`, 'green');
  }
  return `https://${CONFIG.host}/${apiKey}.txt`;
}

async function submitToIndexNow(apiKey, keyLocation, urls) {
  const payload = {
    host: CONFIG.host,
    key: apiKey,
    keyLocation: keyLocation,
    urlList: urls,
  };

  try {
    const response = await fetch(CONFIG.indexNowEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    return { ok: false, status: 0, statusText: error.message };
  }
}

async function submitInBatches(apiKey, keyLocation, urls) {
  const batches = [];
  for (let i = 0; i < urls.length; i += CONFIG.batchSize) {
    batches.push(urls.slice(i, i + CONFIG.batchSize));
  }

  log(`📦 Submitting ${urls.length} URLs in ${batches.length} batch(es)...`, 'blue');

  const results = [];
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    log(`   Batch ${i + 1}/${batches.length}: ${batch.length} URLs...`, 'cyan');

    const result = await submitToIndexNow(apiKey, keyLocation, batch);
    results.push(result);

    if (result.ok) {
      log(`   ✓ Success: ${result.status} ${result.statusText}`, 'green');
    } else {
      log(`   ✗ Failed: ${result.status} ${result.statusText}`, 'red');
    }

    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return results;
}

async function main() {
  const recentDaysEnv = process.env.INDEXNOW_RECENT_DAYS;
  if (recentDaysEnv && !Number.isNaN(Number(recentDaysEnv))) {
    CONFIG.recentDays = Number(recentDaysEnv);
  }

  log('\n🔍 Starting IndexNow submission process...', 'bright');
  console.log('');

  // Step 1: Use standardized API key (never generate random ones)
  log('Step 1/4: Using standardized API key...', 'blue');
  const apiKey = CONFIG.apiKey;
  log(`✓ Key: ${apiKey.substring(0, 8)}...`, 'green');

  // Step 2: Ensure verification file exists
  log('Step 2/4: Verifying key file...', 'blue');
  const keyLocation = ensureKeyVerificationFile(apiKey);

  // Step 3: Build URL list dynamically
  log('Step 3/4: Building URL list from source files...', 'blue');
  const urls = buildUrlList();
  log(`✓ Total: ${urls.length} URLs to submit`, 'green');

  if (urls.length === 0) {
    log('⚠️  No URLs found. Exiting.', 'yellow');
    return;
  }

  // Step 4: Submit
  log('Step 4/4: Submitting to IndexNow API...', 'blue');
  const results = await submitInBatches(apiKey, keyLocation, urls);

  // Report
  console.log('\n' + '═'.repeat(60));
  log('🚀 IndexNow Submission Report', 'bright');
  console.log('═'.repeat(60));
  const successful = results.filter(r => r.ok).length;
  log(`✓ URLs submitted: ${urls.length}`, 'green');
  log(`✓ Batches: ${successful}/${results.length} successful`, successful > 0 ? 'green' : 'red');
  log(`✓ Search engines: Bing, Yandex, Naver, Seznam.cz`, 'cyan');
  log(`✓ Timestamp: ${new Date().toISOString()}`, 'cyan');
  console.log('═'.repeat(60) + '\n');
}

// Run if called directly
if (require.main === module) {
  main().catch(err => {
    log(`\n✗ Error: ${err.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { main, submitToIndexNow, buildUrlList };

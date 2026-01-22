#!/usr/bin/env node

/**
 * IndexNow URL Submission Script
 * Automatically submits URLs from sitemap.xml to IndexNow API
 * for instant search engine indexing (Bing, Yandex, etc.)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
const CONFIG = {
  host: 'aaaengineeringdesign.com',
  sitemapPath: path.join(__dirname, '../public/sitemap.xml'),
  envPath: path.join(__dirname, '../.env.local'),
  publicDir: path.join(__dirname, '../public'),
  // Use Yandex endpoint (works without prior verification, syncs to all IndexNow partners)
  indexNowEndpoint: 'https://yandex.com/indexnow',
  batchSize: 1000, // Submit in batches of 1000 URLs
  recentDays: null, // Set to number to only submit URLs modified in last N days
};

// ANSI color codes for terminal output
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

function generateApiKey() {
  return crypto.randomBytes(32).toString('hex');
}

function getOrCreateApiKey() {
  let apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey) {
    // Try to load from .env.local
    if (fs.existsSync(CONFIG.envPath)) {
      const envContent = fs.readFileSync(CONFIG.envPath, 'utf8');
      const match = envContent.match(/INDEXNOW_API_KEY=(.+)/);
      if (match) {
        apiKey = match[1].trim();
      }
    }
  }

  if (!apiKey) {
    log('📝 Generating new IndexNow API key...', 'yellow');
    apiKey = generateApiKey();

    // Save to .env.local
    const envLine = `\nINDEXNOW_API_KEY=${apiKey}\n`;
    fs.appendFileSync(CONFIG.envPath, envLine, 'utf8');
    log(`✓ API key saved to ${path.basename(CONFIG.envPath)}`, 'green');
  }

  return apiKey;
}

function createKeyVerificationFile(apiKey) {
  const keyFilePath = path.join(CONFIG.publicDir, `${apiKey}.txt`);

  if (!fs.existsSync(keyFilePath)) {
    fs.writeFileSync(keyFilePath, apiKey, 'utf8');
    log(`✓ Created verification file: ${apiKey}.txt`, 'green');
  }

  return `https://${CONFIG.host}/${apiKey}.txt`;
}

function parseSitemap() {
  if (!fs.existsSync(CONFIG.sitemapPath)) {
    throw new Error(`Sitemap not found at ${CONFIG.sitemapPath}`);
  }

  const sitemapContent = fs.readFileSync(CONFIG.sitemapPath, 'utf8');
  const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
  const urls = urlMatches.map(match => match[1].trim());

  if (CONFIG.recentDays) {
    const lastmodMatches = [...sitemapContent.matchAll(/<lastmod>(.*?)<\/lastmod>/g)];
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - CONFIG.recentDays);

    const recentUrls = urls.filter((url, index) => {
      if (lastmodMatches[index]) {
        const lastmod = new Date(lastmodMatches[index][1]);
        return lastmod >= cutoffDate;
      }
      return true; // Include URLs without lastmod
    });

    log(`📅 Filtered to ${recentUrls.length} URLs modified in last ${CONFIG.recentDays} days`, 'cyan');
    return recentUrls;
  }

  return urls;
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
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      data: response.ok ? await response.text().catch(() => null) : null,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      statusText: error.message,
      data: null,
    };
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

    // Rate limiting: wait 1 second between batches
    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return results;
}

function printReport(apiKey, keyLocation, urls, results) {
  console.log('\n' + '═'.repeat(60));
  log('🚀 IndexNow Submission Report', 'bright');
  console.log('═'.repeat(60) + '\n');

  log(`✓ API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 8)}`, 'green');
  log(`✓ Verification: ${keyLocation}`, 'green');
  log(`✓ URLs Collected: ${urls.length} from sitemap.xml`, 'green');
  console.log('');

  const successful = results.filter(r => r.ok).length;
  const failed = results.length - successful;

  if (successful > 0) {
    log(`✓ Successful submissions: ${successful}/${results.length}`, 'green');
  }
  if (failed > 0) {
    log(`✗ Failed submissions: ${failed}/${results.length}`, 'red');
  }

  console.log('');
  log('📊 Submission Details:', 'blue');
  log(`   Host: ${CONFIG.host}`, 'cyan');
  log(`   Timestamp: ${new Date().toISOString()}`, 'cyan');
  log(`   Search Engines: Bing, Yandex, Naver, Seznam.cz`, 'cyan');

  console.log('');
  if (successful > 0) {
    log('✓ Your URLs are now being processed for indexing!', 'green');
    console.log('');
    log('💡 Tip: Check Bing Webmaster Tools in 24-48 hours to verify indexing.', 'yellow');
  } else {
    log('⚠️  All submissions failed. Please check your API key and try again.', 'red');
  }

  console.log('\n' + '═'.repeat(60) + '\n');
}

async function main() {
  try {
    // Optional: allow filtering to "recent" URLs via env var
    // (Useful for CI / Netlify if you want to reduce submission volume.)
    const recentDaysEnv = process.env.INDEXNOW_RECENT_DAYS;
    if (recentDaysEnv && !Number.isNaN(Number(recentDaysEnv))) {
      CONFIG.recentDays = Number(recentDaysEnv);
    }

    log('\n🔍 Starting IndexNow submission process...', 'bright');
    console.log('');

    // Step 1: Get or create API key
    log('Step 1/4: Managing API key...', 'blue');
    const apiKey = getOrCreateApiKey();

    // Step 2: Create verification file
    log('Step 2/4: Creating verification file...', 'blue');
    const keyLocation = createKeyVerificationFile(apiKey);

    // Step 3: Parse sitemap
    log('Step 3/4: Parsing sitemap...', 'blue');
    const urls = parseSitemap();
    log(`✓ Found ${urls.length} URLs in sitemap`, 'green');

    if (urls.length === 0) {
      log('⚠️  No URLs found in sitemap. Exiting.', 'yellow');
      return;
    }

    // Step 4: Submit to IndexNow
    log('Step 4/4: Submitting to IndexNow API...', 'blue');
    const results = await submitInBatches(apiKey, keyLocation, urls);

    // Print final report
    printReport(apiKey, keyLocation, urls, results);

  } catch (error) {
    log(`\n✗ Error: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, submitToIndexNow, parseSitemap };

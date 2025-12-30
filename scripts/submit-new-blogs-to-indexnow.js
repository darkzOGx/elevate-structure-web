#!/usr/bin/env node

/**
 * Submit newly generated blog posts to IndexNow for instant indexing
 *
 * Usage:
 *   node scripts/submit-new-blogs-to-indexnow.js [blog-posts-directory]
 *
 * Examples:
 *   node scripts/submit-new-blogs-to-indexnow.js
 *   node scripts/submit-new-blogs-to-indexnow.js blog-posts-dec-29-2025
 *
 * The script will:
 *   1. Auto-detect the most recent blog-posts-* directory (or use provided path)
 *   2. Extract blog post slugs from markdown filenames
 *   3. Submit all URLs to IndexNow with proper verification
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  host: 'aaaengineeringdesign.com',
  siteUrl: 'https://aaaengineeringdesign.com',
  envPath: path.join(__dirname, '../.env.local'),
  publicDir: path.join(__dirname, '../public'),
  indexNowEndpoint: 'https://yandex.com/indexnow',
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
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getApiKey() {
  let apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey && fs.existsSync(CONFIG.envPath)) {
    const envContent = fs.readFileSync(CONFIG.envPath, 'utf8');
    const match = envContent.match(/INDEXNOW_API_KEY=(.+)/);
    if (match) {
      apiKey = match[1].trim();
    }
  }

  if (!apiKey) {
    throw new Error('INDEXNOW_API_KEY not found in .env.local');
  }

  return apiKey;
}

function findBlogPostsDirectory(providedPath) {
  const projectRoot = path.join(__dirname, '..');

  if (providedPath) {
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
    throw new Error('No blog-posts-* directories found');
  }

  return path.join(projectRoot, dirs[0]);
}

function extractSlugsFromDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)
    .filter(name => name.endsWith('.md'));

  const slugs = files.map(file => {
    // Remove number prefix and .md extension
    // e.g., "01-office-building-structural-engineering-in-perris.md" -> "office-building-structural-engineering-in-perris"
    const slug = file
      .replace(/^\d+-/, '')  // Remove leading number and hyphen
      .replace(/\.md$/, ''); // Remove .md extension
    return slug;
  });

  return slugs;
}

async function submitToIndexNow(apiKey, urls) {
  const keyLocation = `${CONFIG.siteUrl}/${apiKey}.txt`;

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
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      statusText: error.message,
    };
  }
}

async function verifyKeyFile(apiKey) {
  const keyUrl = `${CONFIG.siteUrl}/${apiKey}.txt`;
  try {
    const response = await fetch(keyUrl);
    return response.ok;
  } catch {
    return false;
  }
}

async function main() {
  try {
    log('\n🚀 IndexNow: Submit New Blog Posts', 'bright');
    console.log('═'.repeat(60));
    console.log('');

    // Get API key
    const apiKey = getApiKey();
    log(`✓ API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 8)}`, 'green');

    // Verify key file is accessible
    log('\n📋 Verifying API key file...', 'blue');
    const keyVerified = await verifyKeyFile(apiKey);
    if (!keyVerified) {
      log(`✗ Key file NOT accessible at ${CONFIG.siteUrl}/${apiKey}.txt`, 'red');
      log('  Run: git add public/*.txt && git commit -m "Add IndexNow key" && git push', 'yellow');
      process.exit(1);
    }
    log('✓ Key file verified', 'green');

    // Find blog posts directory
    const providedPath = process.argv[2];
    const blogDir = findBlogPostsDirectory(providedPath);
    log(`\n📁 Blog directory: ${path.basename(blogDir)}`, 'blue');

    // Extract slugs
    const slugs = extractSlugsFromDirectory(blogDir);
    if (slugs.length === 0) {
      log('✗ No markdown files found in directory', 'red');
      process.exit(1);
    }

    // Create full URLs
    const urls = slugs.map(slug => `${CONFIG.siteUrl}/blog/${slug}`);

    log(`\n📄 Found ${urls.length} blog posts to submit:\n`, 'cyan');
    urls.forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`);
    });

    // Submit to IndexNow
    log('\n⏳ Submitting to IndexNow...', 'blue');
    const result = await submitToIndexNow(apiKey, urls);

    console.log('');
    if (result.ok) {
      log('═'.repeat(60), 'green');
      log('✅ SUCCESS: URLs submitted to IndexNow!', 'bright');
      log('═'.repeat(60), 'green');
      console.log('');
      log(`   Status: ${result.status} ${result.statusText}`, 'green');
      log(`   URLs submitted: ${urls.length}`, 'green');
      console.log('');
      log('🔍 Search engines notified:', 'blue');
      log('   • Bing', 'cyan');
      log('   • Yandex', 'cyan');
      log('   • Naver', 'cyan');
      log('   • Seznam.cz', 'cyan');
      console.log('');
      log('⏱️  Check Bing Webmaster Tools in 24-48 hours to verify', 'yellow');
      console.log('');
    } else {
      log('═'.repeat(60), 'red');
      log('❌ FAILED: IndexNow submission failed', 'red');
      log('═'.repeat(60), 'red');
      log(`   Status: ${result.status} ${result.statusText}`, 'red');
      process.exit(1);
    }

  } catch (error) {
    log(`\n✗ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

main();

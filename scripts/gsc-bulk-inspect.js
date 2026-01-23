#!/usr/bin/env node

/**
 * GSC Bulk URL Inspector
 * Inspects URLs from a file (one URL per line)
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const CONFIG = {
  siteUrl: 'https://aaaengineeringdesign.com',
  propertyUrl: 'sc-domain:aaaengineeringdesign.com',
  credentialsPath: process.env.GSC_CREDENTIALS_PATH || './gsc-credentials.json',
  requestDelayMs: 1000,
  maxUrlsPerBatch: 200,
  outputPath: path.join(__dirname, '..', 'gsc-bulk-inspection-results.json'),
};

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

async function initializeGSCClient() {
  const credentials = JSON.parse(fs.readFileSync(CONFIG.credentialsPath, 'utf-8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters', 'https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
  return { searchconsole };
}

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
      verdict: result.indexStatusResult?.verdict || 'UNKNOWN',
      coverageState: result.indexStatusResult?.coverageState || 'UNKNOWN',
      lastCrawlTime: result.indexStatusResult?.lastCrawlTime,
    };
  } catch (error) {
    return { url, success: false, error: error.message };
  }
}

async function main() {
  const urlsFile = process.argv[2] || 'recent-200-urls.txt';

  if (!fs.existsSync(urlsFile)) {
    log(`Error: File not found: ${urlsFile}`, 'red');
    process.exit(1);
  }

  const urls = fs.readFileSync(urlsFile, 'utf-8').split('\n').filter(u => u.trim());
  const urlsToProcess = urls.slice(0, CONFIG.maxUrlsPerBatch);

  console.log('\n' + '═'.repeat(70));
  log('🔍 GSC Bulk URL Inspector', 'bright');
  console.log('═'.repeat(70) + '\n');

  log('🔐 Connecting to Google Search Console API...', 'blue');
  const { searchconsole } = await initializeGSCClient();
  log('✅ Connected successfully\n', 'green');

  log(`📋 Processing ${urlsToProcess.length} URLs from ${urlsFile}...\n`, 'blue');

  const results = [];
  let passed = 0, neutral = 0, failed = 0;

  for (let i = 0; i < urlsToProcess.length; i++) {
    const url = urlsToProcess[i];
    const shortUrl = url.replace('https://aaaengineeringdesign.com/blog/', '');

    process.stdout.write(`[${i + 1}/${urlsToProcess.length}] ${shortUrl.substring(0, 50)}... `);

    const result = await inspectUrl(searchconsole, url);
    results.push(result);

    if (result.success) {
      if (result.verdict === 'PASS') {
        console.log(`${colors.green}✅ INDEXED${colors.reset}`);
        passed++;
      } else {
        console.log(`${colors.yellow}⏳ ${result.coverageState}${colors.reset}`);
        neutral++;
      }
    } else {
      console.log(`${colors.red}❌ Error${colors.reset}`);
      failed++;
    }

    if (i < urlsToProcess.length - 1) {
      await new Promise(resolve => setTimeout(resolve, CONFIG.requestDelayMs));
    }
  }

  // Save results
  fs.writeFileSync(CONFIG.outputPath, JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2));

  console.log('\n' + '═'.repeat(70));
  log('📊 BULK INSPECTION SUMMARY', 'bright');
  console.log('═'.repeat(70));
  log(`\n✅ Indexed: ${passed}`, 'green');
  log(`⏳ Pending/Discovered: ${neutral}`, 'yellow');
  log(`❌ Errors: ${failed}`, 'red');
  log(`\n💾 Results saved to: ${CONFIG.outputPath}`, 'cyan');
  console.log('═'.repeat(70) + '\n');
}

main().catch(err => {
  log(`\n❌ Error: ${err.message}`, 'red');
  process.exit(1);
});

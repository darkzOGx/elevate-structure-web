const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { google } = require('googleapis');

// Configuration
const CONFIG = {
    siteUrl: 'https://localhost:3001', // Changed to https to match server force-redirect
    propertyUrl: 'sc-domain:aaaengineeringdesign.com',
    credentialsPath: process.env.GSC_CREDENTIALS_PATH || './gsc-credentials.json',
    sitemapUrl: 'https://localhost:3001/sitemap.xml',
    outputPath: path.join(__dirname, '..', 'gsc_diagnostic_final.json'),
    concurrency: 50
};

// Colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(msg, color = 'reset') {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}

// 1. GSC Client Info
async function initializeGSCClient() {
    // Mock GSC client for local diagnostic to avoid credential errors
    return {
        searchanalytics: {
            query: async () => ({ data: { rows: [] } })
        }
    };
}

// 2. Fetch Sitemap URLs
async function fetchSitemapUrls() {
    log(`Fetching sitemap from ${CONFIG.sitemapUrl}...`, 'blue');
    return new Promise((resolve, reject) => {
        const client = CONFIG.sitemapUrl.startsWith('https') ? https : http;
        const options = { rejectUnauthorized: false };
        client.get(CONFIG.sitemapUrl, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                // Simple Regex extraction for <loc> tags
                const urls = [];
                const regex = /<loc>(.*?)<\/loc>/g;
                let match;
                while ((match = regex.exec(data)) !== null) {
                    urls.push(match[1]);
                }
                log(`✓ Found ${urls.length} URLs in sitemap`, 'green');
                resolve(urls);
            });
            res.on('error', reject);
        });
    });
}

// 3. Fetch GSC Analytics Pages (Last 90 Days)
async function fetchGSCPages(searchconsole) {
    log(`Fetching GSC Search Analytics (90 days)...`, 'blue');
    // Mocked for local run
    return [];
}

// 4. Bulk HTTP Scanner
function checkUrlStatus(url) {
    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const options = { method: 'HEAD', timeout: 5000, rejectUnauthorized: false };
        const req = client.request(url, options, (res) => {
            resolve({
                url,
                status: res.statusCode,
                location: res.headers.location
            });
        });
        req.on('error', (e) => resolve({ url, status: 'ERROR', error: e.message }));
        req.on('timeout', () => { req.destroy(); resolve({ url, status: 'TIMEOUT' }); });
        req.end();
    });
}

async function batchCheckStatus(urls, concurrency = 50) {
    log(`Scanning ${urls.length} URLs (Concurrency: ${concurrency})...`, 'blue');
    const results = [];
    for (let i = 0; i < urls.length; i += concurrency) {
        const chunk = urls.slice(i, i + concurrency);
        process.stdout.write(`Processing ${i} to ${Math.min(i + concurrency, urls.length)}... \r`);
        const chunkResults = await Promise.all(chunk.map(checkUrlStatus));
        results.push(...chunkResults);
    }
    console.log(''); // New line
    return results;
}

// Main
async function main() {
    try {
        // A. Init
        const searchconsole = await initializeGSCClient();

        // B. Gather Data
        const sitemapUrls = await fetchSitemapUrls();
        const gscPages = await fetchGSCPages(searchconsole);

        // C. Merge Unique URLs
        // Note: For local check, we check sitemap URLs but converted to localhost if needed, 
        // or we just check the production URLs?
        // Actually, checking production URLs (https://aaaengineeringdesign.com/...) IS what we want for 404 verification.
        // But checking redirects on localhost might be safer to verify *new* behavior.
        // Let's check the sitemap URLs as they are (https). 
        // IF we want to check local behavior, we should convert them to localhost.
        // Let's convert them to localhost for verification of the *current* build.

        const localSitemapUrls = sitemapUrls.map(u => u.replace('https://aaaengineeringdesign.com', 'http://localhost:3000'));

        const allUrls = new Set([...localSitemapUrls]);
        const uniqueUrlsList = Array.from(allUrls);

        log(`Total Unique URLs to Scan: ${uniqueUrlsList.length}`, 'cyan');

        // D. Scan
        const scanResults = await batchCheckStatus(uniqueUrlsList, CONFIG.concurrency);

        // E. Analyze
        const analysis = {
            total: uniqueUrlsList.length,
            ok: [],
            redirects: [],
            notFound: [],
            errors: [],
            sitemapOrphans: [],
            gscGhosts: []
        };

        scanResults.forEach(r => {
            if (r.status >= 200 && r.status < 300) analysis.ok.push(r);
            else if (r.status >= 300 && r.status < 400) analysis.redirects.push(r);
            else if (r.status === 404 || r.status === 410) analysis.notFound.push(r);
            else analysis.errors.push(r);
        });

        // F. Report
        log('\nDiagnostic Results:', 'bright');
        log(`✓ 200 OK: ${analysis.ok.length}`, 'green');
        log(`sw 3xx Redirects: ${analysis.redirects.length}`, 'yellow');
        log(`✗ 404 Not Found: ${analysis.notFound.length}`, 'red');
        log(`? Errors/Timeouts: ${analysis.errors.length}`, 'red');

        if (analysis.redirects.length > 0) {
            log('\nRedirects Found in Sitemap:', 'yellow');
            analysis.redirects.forEach(r => console.log(`- ${r.url} -> ${r.location}`));
        }

        if (analysis.notFound.length > 0) {
            log('\n404s Found in Sitemap:', 'red');
            analysis.notFound.forEach(r => console.log(`- ${r.url}`));
        }

        // G. Output
        fs.writeFileSync(CONFIG.outputPath, JSON.stringify(analysis, null, 2));
        log(`\nFull report saved to ${CONFIG.outputPath}`, 'blue');

    } catch (e) {
        log(`Fatal Error: ${e.message}`, 'red');
        console.error(e);
    }
}

main();

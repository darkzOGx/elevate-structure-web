const fs = require('fs');
const path = require('path');
// Reuse diagnostic logic to output specific fix candidates file
const DIAGNOSTIC_FILE = path.join(__dirname, '..', 'gsc_diagnostic_final.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'fix_candidates.json');

function main() {
    if (!fs.existsSync(DIAGNOSTIC_FILE)) {
        console.error('Error: gsc_diagnostic_final.json not found. Run diagnose-gsc-indexing.js first.');
        process.exit(1);
    }

    const data = JSON.parse(fs.readFileSync(DIAGNOSTIC_FILE, 'utf-8'));

    const candidates = {
        redirectsNeeded: [], // 404s that have traffic (present in GSC)
        sitemapCleanup: [], // 404s in sitemap (remove them)
        loops: [] // Redirect loops or chains
    };

    // 1. Analyze 404s
    if (data.notFound) {
        data.notFound.forEach(item => {
            // Logic: If it was in GSC (had traffic/impressions), it needs a redirect
            // If it was ONLY in sitemap, it just needs to be removed from sitemap
            candidates.redirectsNeeded.push({
                url: item.url,
                priority: 'high',
                reason: '404 with potential history'
            });
        });
    }

    // 2. Analyze Redirects (for chains or sitemap cleanliness)
    if (data.redirects) {
        data.redirects.forEach(item => {
            // If a sitemap URL redirects, it's bad practice. It should be the final URL in sitemap.
            candidates.sitemapCleanup.push({
                url: item.url,
                target: item.location,
                issue: 'Sitemap entry redirects'
            });
        });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(candidates, null, 2));
    console.log(`Fix candidates saved to ${OUTPUT_FILE}`);
    console.log(`- Redirects Needed (404s): ${candidates.redirectsNeeded.length}`);
    console.log(`- Sitemap Cleanup (Entries Valid but Redirecting): ${candidates.sitemapCleanup.length}`);
}

main();

/**
 * GSC Performance Report - Two-Track Content Strategy
 *
 * Pulls comprehensive Google Search Console data and generates
 * actionable recommendations for content optimization.
 *
 * Features:
 * - 90-day data window with 1 impression minimum
 * - Query + page dimensions for cannibalization detection
 * - Removed-service blocklist filter
 * - Recommendation buckets: CTR gaps, striking distance, winner replication, cannibalization
 *
 * Usage: node scripts/gsc-performance-report.js
 * Output: gsc-performance-report.json + console summary
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// ─── Configuration ───────────────────────────────────────────────────────────

const CONFIG = {
  siteUrl: 'sc-domain:aaaengineeringdesign.com',
  credentialsPath: path.join(__dirname, '..', 'gsc-credentials.json'),
  daysBack: 90,
  rowLimit: 5000,
  outputPath: path.join(__dirname, '..', 'gsc-performance-report.json'),
};

// Queries containing these terms are from removed services - exclude them
const REMOVED_SERVICE_TERMS = [
  'mep engineer',
  'mechanical engineer',
  'electrical engineer',
  'plumbing engineer',
  'civil engineer',
  'stormwater',
  'septic',
  'coastal bluff',
  'coastal foundation',
  'coastal engineer',
  'coastal commission',
  'coastal erosion',
  'coastal slope',
  'ada compliance',
  'insurance coordination',
  'expedited permit',
  'drainage engineer',
  'grading plan',
  'grading and drainage',
  'environmental system',
];

// ─── Auth ────────────────────────────────────────────────────────────────────

async function getGSCClient() {
  const credentials = JSON.parse(fs.readFileSync(CONFIG.credentialsPath, 'utf-8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const authClient = await auth.getClient();
  return google.searchconsole({ version: 'v1', auth: authClient });
}

// ─── Data Fetching ───────────────────────────────────────────────────────────

function getDateRange() {
  const end = new Date();
  end.setDate(end.getDate() - 3); // GSC data has ~3 day lag
  const start = new Date(end);
  start.setDate(start.getDate() - CONFIG.daysBack);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
}

async function fetchQueryData(client) {
  const { startDate, endDate } = getDateRange();
  console.log(`\nFetching query data: ${startDate} to ${endDate}`);

  const response = await client.searchanalytics.query({
    siteUrl: CONFIG.siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit: CONFIG.rowLimit,
      dimensionFilterGroups: [{
        filters: [{
          dimension: 'query',
          operator: 'excludingRegex',
          expression: 'brand|aaa engineering|aaaengineering',
        }],
      }],
    },
  });

  return response.data.rows || [];
}

async function fetchQueryPageData(client) {
  const { startDate, endDate } = getDateRange();
  console.log(`Fetching query+page data: ${startDate} to ${endDate}`);

  const response = await client.searchanalytics.query({
    siteUrl: CONFIG.siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query', 'page'],
      rowLimit: CONFIG.rowLimit,
    },
  });

  return response.data.rows || [];
}

async function fetchPageData(client) {
  const { startDate, endDate } = getDateRange();
  console.log(`Fetching page data: ${startDate} to ${endDate}`);

  const response = await client.searchanalytics.query({
    siteUrl: CONFIG.siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: CONFIG.rowLimit,
    },
  });

  return response.data.rows || [];
}

// ─── Filtering ───────────────────────────────────────────────────────────────

function isRemovedServiceQuery(query) {
  const q = query.toLowerCase();
  return REMOVED_SERVICE_TERMS.some(term => q.includes(term));
}

function filterRows(rows) {
  const total = rows.length;
  const filtered = rows.filter(row => {
    const query = row.keys[0].toLowerCase();
    return !isRemovedServiceQuery(query);
  });
  console.log(`  Filtered: ${total} total -> ${filtered.length} active (${total - filtered.length} removed-service queries excluded)`);
  return filtered;
}

// ─── Analysis Buckets ────────────────────────────────────────────────────────

function analyzeCTRGaps(queryRows) {
  // Pages ranking 1-5 with CTR < 3% - title/meta rewrite opportunities
  return queryRows
    .filter(r => r.position <= 5 && r.ctr < 0.03 && r.impressions >= 10)
    .sort((a, b) => a.position - b.position || b.impressions - a.impressions)
    .map(r => ({
      query: r.keys[0],
      position: +r.position.toFixed(1),
      ctr: +(r.ctr * 100).toFixed(1) + '%',
      impressions: r.impressions,
      clicks: r.clicks,
      action: 'Rewrite title/meta description - ranking well but low CTR',
    }));
}

function analyzeStrikingDistance(queryRows) {
  // Pages at positions 8-20 with decent impressions - content strengthening
  return queryRows
    .filter(r => r.position >= 8 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => a.position - b.position || b.impressions - a.impressions)
    .map(r => ({
      query: r.keys[0],
      position: +r.position.toFixed(1),
      ctr: +(r.ctr * 100).toFixed(1) + '%',
      impressions: r.impressions,
      clicks: r.clicks,
      action: 'Strengthen content + add internal links to push into top 5',
    }));
}

function analyzeWinners(queryRows) {
  // Top performers - replicate for adjacent cities/keywords
  return queryRows
    .filter(r => r.clicks >= 3 && r.position <= 10)
    .sort((a, b) => b.clicks - a.clicks)
    .map(r => ({
      query: r.keys[0],
      position: +r.position.toFixed(1),
      ctr: +(r.ctr * 100).toFixed(1) + '%',
      impressions: r.impressions,
      clicks: r.clicks,
      action: 'Winner - replicate content pattern for adjacent cities/keywords',
    }));
}

function analyzeCannibalization(queryPageRows) {
  // Group by query, find queries with multiple pages
  const queryMap = {};
  for (const row of queryPageRows) {
    const query = row.keys[0];
    const page = row.keys[1];
    if (!queryMap[query]) queryMap[query] = [];
    queryMap[query].push({
      page,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
    });
  }

  const cannibalized = [];
  for (const [query, pages] of Object.entries(queryMap)) {
    if (pages.length >= 2 && pages.some(p => p.impressions >= 5)) {
      // Sort by clicks desc
      pages.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
      cannibalized.push({
        query,
        pageCount: pages.length,
        pages: pages.map(p => ({
          url: p.page.replace('https://aaaengineeringdesign.com', ''),
          clicks: p.clicks,
          impressions: p.impressions,
          position: +p.position.toFixed(1),
        })),
        action: 'Consolidate or differentiate - multiple pages competing for same query',
      });
    }
  }

  return cannibalized.sort((a, b) => b.pageCount - a.pageCount || b.pages[0].impressions - a.pages[0].impressions);
}

function analyzePagePerformance(pageRows) {
  return pageRows
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 50)
    .map(r => ({
      page: r.keys[0].replace('https://aaaengineeringdesign.com', ''),
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: +(r.ctr * 100).toFixed(1) + '%',
      position: +r.position.toFixed(1),
    }));
}

// ─── Report Generation ──────────────────────────────────────────────────────

function generateTrackAllocation(ctrGaps, strikingDistance, winners) {
  const track1Opportunities = ctrGaps.length + strikingDistance.length + winners.length;

  let track1Pct, track2Pct, rationale;
  if (track1Opportunities > 50) {
    track1Pct = 80;
    track2Pct = 20;
    rationale = `${track1Opportunities} Track 1 opportunities found - heavy optimization mode`;
  } else if (track1Opportunities > 20) {
    track1Pct = 60;
    track2Pct = 40;
    rationale = `${track1Opportunities} Track 1 opportunities found - balanced mode`;
  } else {
    track1Pct = 30;
    track2Pct = 70;
    rationale = `Only ${track1Opportunities} Track 1 opportunities - heavy seed & saturate mode`;
  }

  return { track1Pct, track2Pct, rationale };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  try {
    console.log('GSC Performance Report');
    console.log('='.repeat(60));

    const client = await getGSCClient();
    const { startDate, endDate } = getDateRange();

    // Fetch all data in parallel
    const [queryRows, queryPageRows, pageRows] = await Promise.all([
      fetchQueryData(client),
      fetchQueryPageData(client),
      fetchPageData(client),
    ]);

    console.log(`\nRaw data: ${queryRows.length} queries, ${queryPageRows.length} query+page combos, ${pageRows.length} pages`);

    // Filter out removed-service queries
    const filteredQueries = filterRows(queryRows);
    const filteredQP = queryPageRows.filter(r => !isRemovedServiceQuery(r.keys[0]));
    console.log(`  Query+page filtered: ${queryPageRows.length} -> ${filteredQP.length}`);

    // Run analysis
    console.log('\nAnalyzing...');
    const ctrGaps = analyzeCTRGaps(filteredQueries);
    const strikingDistance = analyzeStrikingDistance(filteredQueries);
    const winners = analyzeWinners(filteredQueries);
    const cannibalization = analyzeCannibalization(filteredQP);
    const topPages = analyzePagePerformance(pageRows);
    const allocation = generateTrackAllocation(ctrGaps, strikingDistance, winners);

    // Build report
    const report = {
      generated: new Date().toISOString(),
      dateRange: { startDate, endDate },
      summary: {
        totalQueries: filteredQueries.length,
        removedServiceQueriesExcluded: queryRows.length - filteredQueries.length,
        totalPages: pageRows.length,
        totalClicks: filteredQueries.reduce((sum, r) => sum + r.clicks, 0),
        totalImpressions: filteredQueries.reduce((sum, r) => sum + r.impressions, 0),
      },
      allocation,
      buckets: {
        ctrGaps: { count: ctrGaps.length, items: ctrGaps.slice(0, 25) },
        strikingDistance: { count: strikingDistance.length, items: strikingDistance.slice(0, 25) },
        winners: { count: winners.length, items: winners.slice(0, 25) },
        cannibalization: { count: cannibalization.length, items: cannibalization.slice(0, 25) },
      },
      topPages: topPages.slice(0, 30),
    };

    // Write report
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(report, null, 2));

    // Console summary
    console.log('\n' + '='.repeat(60));
    console.log('REPORT SUMMARY');
    console.log('='.repeat(60));
    console.log(`Date Range: ${startDate} to ${endDate}`);
    console.log(`Active Queries: ${report.summary.totalQueries} (${report.summary.removedServiceQueriesExcluded} removed-service excluded)`);
    console.log(`Total Clicks: ${report.summary.totalClicks}`);
    console.log(`Total Impressions: ${report.summary.totalImpressions}`);

    console.log('\nRECOMMENDATION BUCKETS:');
    console.log(`  CTR Gaps (rank 1-5, CTR < 3%):     ${ctrGaps.length} queries`);
    console.log(`  Striking Distance (rank 8-20):      ${strikingDistance.length} queries`);
    console.log(`  Winners (clicks >= 3, rank <= 10):   ${winners.length} queries`);
    console.log(`  Cannibalization (2+ pages/query):    ${cannibalization.length} queries`);

    console.log('\nDYNAMIC ALLOCATION:');
    console.log(`  Track 1 (GSC optimization): ${allocation.track1Pct}%`);
    console.log(`  Track 2 (Seed & saturate):  ${allocation.track2Pct}%`);
    console.log(`  Rationale: ${allocation.rationale}`);

    if (winners.length > 0) {
      console.log('\nTOP WINNERS (replicate these):');
      winners.slice(0, 10).forEach((w, i) => {
        console.log(`  ${i + 1}. "${w.query}" - ${w.clicks} clicks, pos ${w.position}`);
      });
    }

    if (cannibalization.length > 0) {
      console.log('\nTOP CANNIBALIZATION ISSUES:');
      cannibalization.slice(0, 5).forEach((c, i) => {
        console.log(`  ${i + 1}. "${c.query}" - ${c.pageCount} pages competing`);
        c.pages.forEach(p => console.log(`     ${p.url} (${p.clicks} clicks, pos ${p.position})`));
      });
    }

    console.log(`\nFull report: ${CONFIG.outputPath}`);

  } catch (error) {
    console.error('Error:', error.message);
    if (error.message.includes('credentials') || error.message.includes('ENOENT')) {
      console.log('\nEnsure gsc-credentials.json exists in the project root.');
      console.log('See scripts/GSC-SETUP-GUIDE.md for setup instructions.');
    }
    process.exit(1);
  }
}

main();

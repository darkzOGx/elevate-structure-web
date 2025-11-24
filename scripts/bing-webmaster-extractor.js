/**
 * Bing Webmaster Tools Data Extractor
 *
 * Fetches search performance data from Bing Webmaster Tools API:
 * - Search queries and impressions
 * - Click-through rates
 * - Average positions
 * - Crawl statistics
 *
 * Usage: node scripts/bing-webmaster-extractor.js
 *
 * Setup Required:
 * 1. Go to https://www.bing.com/webmasters
 * 2. Add and verify your site
 * 3. Go to Settings > API Access
 * 4. Generate an API key
 * 5. Add BING_WEBMASTER_API_KEY to your .env file
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const CONFIG = {
  SITE_URL: process.env.BING_SITE_URL || 'https://aaaengineeringdesign.com',
  API_KEY: process.env.BING_WEBMASTER_API_KEY,
  BASE_URL: 'https://ssl.bing.com/webmaster/api.svc/json',

  // Output paths
  OUTPUT_PATH: path.join(__dirname, '..', 'bing-extracted-keywords.json'),
  LAST_RUN_PATH: path.join(__dirname, '..', '.bing-last-run.json'),

  // Query parameters
  DAYS_BACK: parseInt(process.env.BING_DAYS_BACK) || 30,
  MIN_IMPRESSIONS: parseInt(process.env.BING_MIN_IMPRESSIONS) || 5,
  MAX_QUERIES: parseInt(process.env.BING_MAX_QUERIES) || 100,

  // Auto-run threshold (days)
  AUTO_RUN_DAYS: parseInt(process.env.BING_AUTO_RUN_DAYS) || 7
};

/**
 * Check if Bing extraction should run
 */
function shouldRunBingExtraction() {
  try {
    if (!fs.existsSync(CONFIG.LAST_RUN_PATH)) {
      return { shouldRun: true, reason: 'Never run before' };
    }

    const lastRunData = JSON.parse(fs.readFileSync(CONFIG.LAST_RUN_PATH, 'utf-8'));
    const lastRun = new Date(lastRunData.lastRunAt);
    const now = new Date();
    const daysSinceLastRun = Math.floor((now - lastRun) / (1000 * 60 * 60 * 24));

    if (daysSinceLastRun >= CONFIG.AUTO_RUN_DAYS) {
      return {
        shouldRun: true,
        lastRun,
        daysSinceLastRun,
        reason: `Last run was ${daysSinceLastRun} days ago`
      };
    }

    return {
      shouldRun: false,
      lastRun,
      daysSinceLastRun,
      reason: `Last run was ${daysSinceLastRun} days ago (threshold: ${CONFIG.AUTO_RUN_DAYS})`
    };
  } catch (error) {
    return { shouldRun: true, reason: 'Error reading last run file' };
  }
}

/**
 * Make API request to Bing Webmaster Tools
 */
async function bingApiRequest(endpoint, params = {}) {
  return new Promise((resolve, reject) => {
    const queryString = new URLSearchParams({
      apikey: CONFIG.API_KEY,
      siteUrl: CONFIG.SITE_URL,
      ...params
    }).toString();

    const url = `${CONFIG.BASE_URL}/${endpoint}?${queryString}`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.ErrorCode) {
            reject(new Error(`Bing API Error: ${parsed.Message}`));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Get search query statistics
 */
async function getQueryStats() {
  console.log('📊 Fetching Bing search query stats...');

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - CONFIG.DAYS_BACK * 24 * 60 * 60 * 1000)
    .toISOString().split('T')[0];

  try {
    // Bing Webmaster API endpoint for query stats
    const data = await bingApiRequest('GetQueryStats', {
      startDate,
      endDate
    });

    if (!data || !data.d) {
      console.log('   ⚠️  No query data returned from Bing');
      return [];
    }

    const queries = data.d
      .filter(q => q.Impressions >= CONFIG.MIN_IMPRESSIONS)
      .slice(0, CONFIG.MAX_QUERIES)
      .map(q => ({
        query: q.Query,
        impressions: q.Impressions,
        clicks: q.Clicks,
        ctr: q.Impressions > 0 ? q.Clicks / q.Impressions : 0,
        avgPosition: q.AvgImpressionPosition || 0,
        source: 'bing'
      }));

    console.log(`   ✅ Found ${queries.length} queries from Bing`);
    return queries;
  } catch (error) {
    console.error('   ❌ Error fetching Bing query stats:', error.message);
    return [];
  }
}

/**
 * Get page-level statistics
 */
async function getPageStats() {
  console.log('📄 Fetching Bing page stats...');

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - CONFIG.DAYS_BACK * 24 * 60 * 60 * 1000)
    .toISOString().split('T')[0];

  try {
    const data = await bingApiRequest('GetPageStats', {
      startDate,
      endDate
    });

    if (!data || !data.d) {
      console.log('   ⚠️  No page data returned from Bing');
      return [];
    }

    const pages = data.d
      .filter(p => p.Impressions > 0)
      .slice(0, 100)
      .map(p => ({
        url: p.Url,
        impressions: p.Impressions,
        clicks: p.Clicks,
        ctr: p.Impressions > 0 ? p.Clicks / p.Impressions : 0,
        avgPosition: p.AvgImpressionPosition || 0
      }));

    console.log(`   ✅ Found ${pages.length} pages with Bing traffic`);
    return pages;
  } catch (error) {
    console.error('   ❌ Error fetching Bing page stats:', error.message);
    return [];
  }
}

/**
 * Get crawl statistics
 */
async function getCrawlStats() {
  console.log('🕷️  Fetching Bing crawl stats...');

  try {
    const data = await bingApiRequest('GetCrawlStats');

    if (!data || !data.d) {
      console.log('   ⚠️  No crawl data returned from Bing');
      return null;
    }

    const stats = {
      crawledPages: data.d.CrawledPages || 0,
      crawlErrors: data.d.CrawlErrors || 0,
      inIndex: data.d.InIndex || 0,
      blockedByRobots: data.d.BlockedByRobotsTxt || 0,
      lastCrawled: data.d.LastCrawlDate || null
    };

    console.log(`   ✅ Crawl stats: ${stats.inIndex} pages indexed, ${stats.crawlErrors} errors`);
    return stats;
  } catch (error) {
    console.error('   ❌ Error fetching crawl stats:', error.message);
    return null;
  }
}

/**
 * Calculate lead generation score for Bing keywords
 * (Similar to GSC scoring but adapted for Bing metrics)
 */
function calculateBingLeadGenScore(keyword, metrics) {
  let score = 0;
  const keywordLower = keyword.toLowerCase();

  // Commercial intent signals
  const highIntentWords = [
    'cost', 'price', 'quote', 'estimate', 'hire', 'near me',
    'licensed', 'professional', 'best', 'affordable', 'emergency',
    'residential', 'commercial'
  ];

  highIntentWords.forEach(word => {
    if (keywordLower.includes(word)) score += 20;
  });

  // Position opportunity
  if (metrics.avgPosition >= 5 && metrics.avgPosition <= 15) {
    score += 35;
  } else if (metrics.avgPosition > 15 && metrics.avgPosition <= 25) {
    score += 20;
  }

  // Impression volume
  if (metrics.impressions > 500) score += 20;
  else if (metrics.impressions > 100) score += 10;

  // CTR gap opportunity
  if (metrics.impressions > 50 && metrics.ctr < 0.03) {
    score += 15;
  }

  // Geographic signals
  const geoTerms = ['california', 'orange county', 'los angeles', 'san diego'];
  geoTerms.forEach(term => {
    if (keywordLower.includes(term)) score += 10;
  });

  return Math.min(score, 100);
}

/**
 * Combine Bing data with GSC data for unified intelligence
 */
function combineWithGSCData(bingKeywords) {
  const gscPath = path.join(__dirname, '..', 'gsc-extracted-keywords.json');

  if (!fs.existsSync(gscPath)) {
    console.log('   ⚠️  GSC data not found - using Bing data only');
    return bingKeywords;
  }

  const gscData = JSON.parse(fs.readFileSync(gscPath, 'utf-8'));
  const gscKeywordMap = new Map();

  if (gscData.keywords) {
    gscData.keywords.forEach(k => {
      gscKeywordMap.set(k.keyword.toLowerCase(), k);
    });
  }

  // Merge Bing data with GSC data
  return bingKeywords.map(bk => {
    const gscMatch = gscKeywordMap.get(bk.query.toLowerCase());

    return {
      ...bk,
      gscData: gscMatch ? {
        gscImpressions: gscMatch.metrics?.impressions,
        gscClicks: gscMatch.metrics?.clicks,
        gscPosition: gscMatch.metrics?.position,
        gscLeadGenScore: gscMatch.leadGenScore
      } : null,
      combinedScore: gscMatch
        ? Math.round((bk.leadGenScore + (gscMatch.leadGenScore || 0)) / 2)
        : bk.leadGenScore,
      appearsInBoth: !!gscMatch
    };
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('🔵 Bing Webmaster Tools Extractor Starting...\n');

  // Check API key
  if (!CONFIG.API_KEY) {
    console.error('❌ BING_WEBMASTER_API_KEY not set in environment variables');
    console.log('\nSetup Instructions:');
    console.log('1. Go to https://www.bing.com/webmasters');
    console.log('2. Add and verify your site');
    console.log('3. Go to Settings > API Access');
    console.log('4. Generate an API key');
    console.log('5. Add to .env: BING_WEBMASTER_API_KEY=your_key_here\n');

    // Create placeholder output with instructions
    const placeholderOutput = {
      status: 'not_configured',
      message: 'Bing Webmaster API key not configured',
      setupInstructions: [
        'Go to https://www.bing.com/webmasters',
        'Add and verify your site',
        'Go to Settings > API Access',
        'Generate an API key',
        'Add to .env: BING_WEBMASTER_API_KEY=your_key_here'
      ]
    };

    fs.writeFileSync(CONFIG.OUTPUT_PATH, JSON.stringify(placeholderOutput, null, 2), 'utf-8');
    return;
  }

  console.log(`📍 Site: ${CONFIG.SITE_URL}`);
  console.log(`📅 Analyzing last ${CONFIG.DAYS_BACK} days\n`);

  try {
    // Fetch data from Bing
    const [queryStats, pageStats, crawlStats] = await Promise.all([
      getQueryStats(),
      getPageStats(),
      getCrawlStats()
    ]);

    // Calculate lead gen scores for keywords
    const scoredKeywords = queryStats.map(q => ({
      ...q,
      leadGenScore: calculateBingLeadGenScore(q.query, q)
    }));

    // Sort by lead gen score
    scoredKeywords.sort((a, b) => b.leadGenScore - a.leadGenScore);

    // Combine with GSC data
    const combinedKeywords = combineWithGSCData(scoredKeywords);

    // Generate analysis
    const highPriorityKeywords = combinedKeywords.filter(k => k.leadGenScore >= 60);
    const uniqueToBing = combinedKeywords.filter(k => !k.appearsInBoth);
    const positionOpportunities = combinedKeywords.filter(k =>
      k.avgPosition > 10 && k.avgPosition <= 25 && k.impressions > 20
    );

    console.log('\n📊 BING ANALYSIS SUMMARY:');
    console.log(`   Total keywords: ${combinedKeywords.length}`);
    console.log(`   High priority (Score 60+): ${highPriorityKeywords.length}`);
    console.log(`   Unique to Bing (not in GSC): ${uniqueToBing.length}`);
    console.log(`   Position opportunities (11-25): ${positionOpportunities.length}`);

    // Create output
    const output = {
      generatedAt: new Date().toISOString(),
      siteUrl: CONFIG.SITE_URL,
      dateRange: {
        start: new Date(Date.now() - CONFIG.DAYS_BACK * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0]
      },
      summary: {
        totalKeywords: combinedKeywords.length,
        highPriorityCount: highPriorityKeywords.length,
        uniqueToBingCount: uniqueToBing.length,
        positionOpportunitiesCount: positionOpportunities.length,
        topKeywords: highPriorityKeywords.slice(0, 10).map(k => ({
          keyword: k.query,
          leadGenScore: k.leadGenScore,
          impressions: k.impressions,
          position: k.avgPosition?.toFixed(1)
        }))
      },
      crawlStats,
      topPages: pageStats.slice(0, 20),
      keywords: combinedKeywords,
      prioritizedForBlogGen: {
        bingOnly: uniqueToBing.slice(0, 15).map(k => k.query),
        positionOpportunities: positionOpportunities.slice(0, 10).map(k => k.query),
        highPriority: highPriorityKeywords.slice(0, 15).map(k => k.query)
      },
      crossPlatformInsights: {
        keywordsInBoth: combinedKeywords.filter(k => k.appearsInBoth).length,
        bingOnlyKeywords: uniqueToBing.length,
        recommendation: uniqueToBing.length > 10
          ? 'Consider targeting Bing-specific keywords - untapped opportunity'
          : 'Good coverage across both platforms'
      }
    };

    // Save output
    fs.writeFileSync(CONFIG.OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`\n💾 Results saved to: ${CONFIG.OUTPUT_PATH}`);

    // Save last run timestamp
    const lastRunData = {
      lastRunAt: new Date().toISOString(),
      keywordsExtracted: combinedKeywords.length,
      daysBack: CONFIG.DAYS_BACK
    };
    fs.writeFileSync(CONFIG.LAST_RUN_PATH, JSON.stringify(lastRunData, null, 2), 'utf-8');

    // Print top opportunities
    if (highPriorityKeywords.length > 0) {
      console.log('\n🎯 TOP 5 BING KEYWORD OPPORTUNITIES:\n');
      highPriorityKeywords.slice(0, 5).forEach((k, i) => {
        console.log(`   ${i + 1}. "${k.query}"`);
        console.log(`      Score: ${k.leadGenScore} | Impressions: ${k.impressions} | Position: ${k.avgPosition?.toFixed(1) || 'N/A'}`);
        if (k.appearsInBoth) {
          console.log(`      ✅ Also performing in Google`);
        } else {
          console.log(`      🔵 Bing-only opportunity`);
        }
        console.log('');
      });
    }

    console.log('✅ Bing extraction complete!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  shouldRunBingExtraction,
  getQueryStats,
  getPageStats,
  getCrawlStats,
  calculateBingLeadGenScore
};

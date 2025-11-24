/**
 * Unified Keyword Intelligence System
 *
 * Orchestrates all data sources to provide:
 * - Combined GSC + Bing keyword analysis
 * - Lead generation scoring and prioritization
 * - Automatic keyword+city pairing recommendations
 * - Smart blog batch generation
 *
 * Usage: node scripts/keyword-intelligence.js [command]
 *
 * Commands:
 *   analyze    - Run full analysis pipeline
 *   recommend  - Get blog batch recommendations
 *   smart      - Generate smart mode blog selections
 *   status     - Check data freshness status
 */

const fs = require('fs');
const path = require('path');

// Import other scripts
const gscExtractor = require('./gsc-keyword-extractor');
const opportunityAnalyzer = require('./opportunity-gap-analyzer');

// Try to import Bing extractor (may not be configured)
let bingExtractor;
try {
  bingExtractor = require('./bing-webmaster-extractor');
} catch (e) {
  bingExtractor = null;
}

// Configuration
const CONFIG = {
  GSC_DATA_PATH: path.join(__dirname, '..', 'gsc-extracted-keywords.json'),
  BING_DATA_PATH: path.join(__dirname, '..', 'bing-extracted-keywords.json'),
  GAP_REPORT_PATH: path.join(__dirname, '..', 'opportunity-gaps-report.json'),
  OUTPUT_PATH: path.join(__dirname, '..', 'keyword-intelligence-report.json'),
  BLOG_TRACKING_PATH: path.join(__dirname, '..', '.claude', 'skills', 'socal-engineering-blog', 'BLOG-TRACKING.md'),

  // Smart Mode Thresholds
  HIGH_PRIORITY_SCORE: 70,
  MEDIUM_PRIORITY_SCORE: 50,
  MIN_IMPRESSIONS_FOR_PRIORITY: 50,

  // City Tiers (by value)
  TIER1_CITIES: ['Newport Beach', 'Manhattan Beach', 'Del Mar', 'Laguna Beach', 'Coronado', 'Rancho Palos Verdes'],
  TIER2_CITIES: ['Irvine', 'Pasadena', 'San Diego', 'Los Angeles', 'Carlsbad', 'Encinitas', 'La Jolla'],
  TIER3_CITIES: ['Huntington Beach', 'Long Beach', 'Costa Mesa', 'Torrance', 'Anaheim', 'Santa Ana'],
};

/**
 * Check data freshness
 */
function checkDataFreshness() {
  const status = {
    gsc: { exists: false, fresh: false, lastRun: null, daysOld: null },
    bing: { exists: false, fresh: false, lastRun: null, daysOld: null },
    gapReport: { exists: false, generatedAt: null }
  };

  // Check GSC data
  const gscLastRunPath = path.join(__dirname, '..', '.gsc-last-run.json');
  if (fs.existsSync(gscLastRunPath)) {
    const gscData = JSON.parse(fs.readFileSync(gscLastRunPath, 'utf-8'));
    status.gsc.exists = true;
    status.gsc.lastRun = new Date(gscData.lastRunAt);
    status.gsc.daysOld = Math.floor((new Date() - status.gsc.lastRun) / (1000 * 60 * 60 * 24));
    status.gsc.fresh = status.gsc.daysOld < 7;
  }

  // Check Bing data
  const bingLastRunPath = path.join(__dirname, '..', '.bing-last-run.json');
  if (fs.existsSync(bingLastRunPath)) {
    const bingData = JSON.parse(fs.readFileSync(bingLastRunPath, 'utf-8'));
    status.bing.exists = true;
    status.bing.lastRun = new Date(bingData.lastRunAt);
    status.bing.daysOld = Math.floor((new Date() - status.bing.lastRun) / (1000 * 60 * 60 * 24));
    status.bing.fresh = status.bing.daysOld < 7;
  }

  // Check gap report
  if (fs.existsSync(CONFIG.GAP_REPORT_PATH)) {
    const gapData = JSON.parse(fs.readFileSync(CONFIG.GAP_REPORT_PATH, 'utf-8'));
    status.gapReport.exists = true;
    status.gapReport.generatedAt = gapData.generatedAt;
  }

  return status;
}

/**
 * Load all keyword data
 */
function loadAllKeywordData() {
  const data = {
    gsc: null,
    bing: null,
    gaps: null
  };

  if (fs.existsSync(CONFIG.GSC_DATA_PATH)) {
    data.gsc = JSON.parse(fs.readFileSync(CONFIG.GSC_DATA_PATH, 'utf-8'));
  }

  if (fs.existsSync(CONFIG.BING_DATA_PATH)) {
    data.bing = JSON.parse(fs.readFileSync(CONFIG.BING_DATA_PATH, 'utf-8'));
  }

  if (fs.existsSync(CONFIG.GAP_REPORT_PATH)) {
    data.gaps = JSON.parse(fs.readFileSync(CONFIG.GAP_REPORT_PATH, 'utf-8'));
  }

  return data;
}

/**
 * Get used keyword+city combinations from blog tracking
 */
function getUsedCombinations() {
  const used = new Set();

  try {
    const content = fs.readFileSync(CONFIG.BLOG_TRACKING_PATH, 'utf-8');
    const lines = content.split('\n');

    for (const line of lines) {
      if (line.startsWith('|') && line.includes('Published')) {
        const parts = line.split('|').map(p => p.trim()).filter(p => p);
        if (parts.length >= 2) {
          const key = `${parts[0].toLowerCase()}|${parts[1].toLowerCase()}`;
          used.add(key);
        }
      }
    }
  } catch (error) {
    console.error('Error reading blog tracking:', error.message);
  }

  return used;
}

/**
 * Get available cities (not used in current cycle)
 */
function getAvailableCities() {
  const available = [];

  try {
    const content = fs.readFileSync(CONFIG.BLOG_TRACKING_PATH, 'utf-8');

    // Look for cities marked as AVAILABLE
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes('✅ AVAILABLE') || line.includes('NEW')) {
        // Extract city name from table row
        const match = line.match(/\*\*([^*]+)\*\*/);
        if (match) {
          available.push(match[1]);
        }
      }
    }
  } catch (error) {
    console.error('Error reading available cities:', error.message);
  }

  // If no available cities found in tracking, return tier cities
  if (available.length === 0) {
    return [...CONFIG.TIER1_CITIES, ...CONFIG.TIER2_CITIES, ...CONFIG.TIER3_CITIES];
  }

  return available;
}

/**
 * Combine and score keywords from all sources
 */
function combineKeywordData(data) {
  const keywordMap = new Map();

  // Add GSC keywords
  if (data.gsc && data.gsc.keywords) {
    data.gsc.keywords.forEach(k => {
      const key = k.keyword.toLowerCase();
      keywordMap.set(key, {
        keyword: k.keyword,
        gscScore: k.leadGenScore || 0,
        gscImpressions: k.metrics?.impressions || 0,
        gscPosition: k.metrics?.position || 0,
        gscCTR: k.metrics?.ctr || 0,
        bingScore: 0,
        bingImpressions: 0,
        sources: ['gsc']
      });
    });
  }

  // Add/merge Bing keywords
  if (data.bing && data.bing.keywords) {
    data.bing.keywords.forEach(k => {
      const key = k.query.toLowerCase();
      if (keywordMap.has(key)) {
        const existing = keywordMap.get(key);
        existing.bingScore = k.leadGenScore || 0;
        existing.bingImpressions = k.impressions || 0;
        existing.sources.push('bing');
      } else {
        keywordMap.set(key, {
          keyword: k.query,
          gscScore: 0,
          gscImpressions: 0,
          gscPosition: 0,
          gscCTR: 0,
          bingScore: k.leadGenScore || 0,
          bingImpressions: k.impressions || 0,
          sources: ['bing']
        });
      }
    });
  }

  // Calculate combined score
  const combined = Array.from(keywordMap.values()).map(k => {
    const combinedScore = k.sources.length > 1
      ? Math.round((k.gscScore + k.bingScore) / 2 * 1.2) // 20% bonus for appearing in both
      : Math.max(k.gscScore, k.bingScore);

    return {
      ...k,
      combinedScore: Math.min(combinedScore, 100),
      totalImpressions: k.gscImpressions + k.bingImpressions,
      appearsInBoth: k.sources.length > 1
    };
  });

  // Sort by combined score
  return combined.sort((a, b) => b.combinedScore - a.combinedScore);
}

/**
 * Match keywords to optimal cities based on intent and value
 */
function matchKeywordsToCities(keywords, availableCities, usedCombinations) {
  const matches = [];

  // Categorize keywords by type
  const commercialKeywords = keywords.filter(k =>
    k.keyword.toLowerCase().includes('commercial') ||
    k.keyword.toLowerCase().includes('industrial') ||
    k.keyword.toLowerCase().includes('office') ||
    k.keyword.toLowerCase().includes('warehouse')
  );

  const residentialKeywords = keywords.filter(k =>
    k.keyword.toLowerCase().includes('residential') ||
    k.keyword.toLowerCase().includes('home') ||
    k.keyword.toLowerCase().includes('adu') ||
    k.keyword.toLowerCase().includes('addition')
  );

  const urgentKeywords = keywords.filter(k =>
    k.keyword.toLowerCase().includes('emergency') ||
    k.keyword.toLowerCase().includes('urgent') ||
    k.keyword.toLowerCase().includes('same day') ||
    k.keyword.toLowerCase().includes('repair')
  );

  const generalKeywords = keywords.filter(k =>
    !commercialKeywords.includes(k) &&
    !residentialKeywords.includes(k) &&
    !urgentKeywords.includes(k)
  );

  // Match urgent keywords to high-value cities (they'll pay premium)
  urgentKeywords.forEach(keyword => {
    const city = CONFIG.TIER1_CITIES.find(c =>
      availableCities.includes(c) &&
      !usedCombinations.has(`${keyword.keyword.toLowerCase()}|${c.toLowerCase()}`)
    );
    if (city) {
      matches.push({ keyword: keyword.keyword, city, reason: 'Urgent keyword + high-value city', score: keyword.combinedScore });
    }
  });

  // Match residential to tier 1-2 cities
  residentialKeywords.forEach(keyword => {
    const city = [...CONFIG.TIER1_CITIES, ...CONFIG.TIER2_CITIES].find(c =>
      availableCities.includes(c) &&
      !usedCombinations.has(`${keyword.keyword.toLowerCase()}|${c.toLowerCase()}`)
    );
    if (city) {
      matches.push({ keyword: keyword.keyword, city, reason: 'Residential keyword + affluent city', score: keyword.combinedScore });
    }
  });

  // Match commercial to business hub cities
  const commercialCities = ['Irvine', 'Los Angeles', 'San Diego', 'Ontario', 'Long Beach', 'Anaheim', 'Costa Mesa'];
  commercialKeywords.forEach(keyword => {
    const city = commercialCities.find(c =>
      availableCities.includes(c) &&
      !usedCombinations.has(`${keyword.keyword.toLowerCase()}|${c.toLowerCase()}`)
    );
    if (city) {
      matches.push({ keyword: keyword.keyword, city, reason: 'Commercial keyword + business hub', score: keyword.combinedScore });
    }
  });

  // Match general keywords to any available city
  generalKeywords.forEach(keyword => {
    const city = availableCities.find(c =>
      !usedCombinations.has(`${keyword.keyword.toLowerCase()}|${c.toLowerCase()}`)
    );
    if (city) {
      matches.push({ keyword: keyword.keyword, city, reason: 'General keyword distribution', score: keyword.combinedScore });
    }
  });

  return matches.sort((a, b) => b.score - a.score);
}

/**
 * Generate smart blog batch recommendations
 */
function generateSmartBatch(numPosts = 10) {
  console.log('🧠 Generating Smart Blog Batch...\n');

  const data = loadAllKeywordData();
  const usedCombinations = getUsedCombinations();
  const availableCities = getAvailableCities();

  console.log(`📊 Data loaded:`);
  console.log(`   GSC keywords: ${data.gsc?.keywords?.length || 0}`);
  console.log(`   Bing keywords: ${data.bing?.keywords?.length || 0}`);
  console.log(`   Available cities: ${availableCities.length}`);
  console.log(`   Used combinations: ${usedCombinations.size}\n`);

  // Combine keyword data
  const combinedKeywords = combineKeywordData(data);
  console.log(`   Combined unique keywords: ${combinedKeywords.length}`);

  // Filter to high-priority keywords
  const highPriority = combinedKeywords.filter(k => k.combinedScore >= CONFIG.HIGH_PRIORITY_SCORE);
  console.log(`   High priority (score 70+): ${highPriority.length}\n`);

  // Match keywords to cities
  const matches = matchKeywordsToCities(highPriority.slice(0, 50), availableCities, usedCombinations);

  // Get cluster gaps for prioritization
  let clusterPriority = null;
  if (data.gaps && data.gaps.gaps && data.gaps.gaps.clusterGaps) {
    const criticalCluster = data.gaps.gaps.clusterGaps.find(g => g.priority === 'critical');
    if (criticalCluster) {
      clusterPriority = criticalCluster.name;
    }
  }

  // Generate recommendations
  const regularPosts = matches.slice(0, numPosts);
  const nearMePosts = generateNearMeRecommendations(availableCities, usedCombinations, 5);

  const batch = {
    generatedAt: new Date().toISOString(),
    clusterPriority,
    totalPosts: regularPosts.length + nearMePosts.length,
    regularPosts,
    nearMePosts,
    summary: {
      avgLeadGenScore: Math.round(regularPosts.reduce((sum, p) => sum + p.score, 0) / regularPosts.length),
      citiesTargeted: [...new Set([...regularPosts.map(p => p.city), ...nearMePosts.map(p => p.city)])],
      dataSourcesUsed: data.gsc ? (data.bing ? ['GSC', 'Bing'] : ['GSC']) : (data.bing ? ['Bing'] : [])
    }
  };

  return batch;
}

/**
 * Generate "near me" keyword recommendations
 */
function generateNearMeRecommendations(availableCities, usedCombinations, count = 5) {
  const nearMeKeywords = [
    'residential structural engineer near me',
    'structural engineer near me',
    'foundation engineer near me',
    'adu structural engineer near me',
    'seismic retrofit engineer near me',
    'commercial structural engineer near me',
    'mep engineer near me',
    'civil engineer near me',
    'home addition structural engineer near me',
    'foundation repair engineer near me',
    'licensed structural engineer near me',
    'structural engineering quote near me',
    'emergency structural engineer near me'
  ];

  const recommendations = [];

  for (const keyword of nearMeKeywords) {
    if (recommendations.length >= count) break;

    // Find available city not used with this keyword
    const city = availableCities.find(c =>
      !usedCombinations.has(`${keyword}|${c.toLowerCase()}`)
    );

    if (city) {
      recommendations.push({
        keyword,
        city,
        reason: '"Near me" high-intent keyword',
        score: 85 // High score for all near me keywords
      });
    }
  }

  return recommendations;
}

/**
 * Print status report
 */
function printStatus() {
  console.log('📊 KEYWORD INTELLIGENCE STATUS\n');
  console.log('═══════════════════════════════════════════════════════════\n');

  const status = checkDataFreshness();

  // GSC Status
  console.log('Google Search Console:');
  if (status.gsc.exists) {
    const freshIcon = status.gsc.fresh ? '✅' : '⚠️';
    console.log(`   ${freshIcon} Last run: ${status.gsc.daysOld} days ago`);
    console.log(`   ${freshIcon} Status: ${status.gsc.fresh ? 'Fresh' : 'Needs refresh (>7 days old)'}`);
  } else {
    console.log('   ❌ Not configured or never run');
  }

  // Bing Status
  console.log('\nBing Webmaster Tools:');
  if (status.bing.exists) {
    const freshIcon = status.bing.fresh ? '✅' : '⚠️';
    console.log(`   ${freshIcon} Last run: ${status.bing.daysOld} days ago`);
    console.log(`   ${freshIcon} Status: ${status.bing.fresh ? 'Fresh' : 'Needs refresh (>7 days old)'}`);
  } else {
    console.log('   ⚠️ Not configured (optional)');
  }

  // Gap Report Status
  console.log('\nOpportunity Gap Report:');
  if (status.gapReport.exists) {
    console.log(`   ✅ Generated: ${status.gapReport.generatedAt}`);
  } else {
    console.log('   ❌ Not generated yet');
  }

  console.log('\n═══════════════════════════════════════════════════════════\n');

  // Recommendations
  console.log('📋 RECOMMENDED ACTIONS:\n');

  if (!status.gsc.exists || !status.gsc.fresh) {
    console.log('   1. Run GSC extraction: node scripts/gsc-keyword-extractor.js');
  }

  if (!status.bing.exists) {
    console.log('   2. Configure Bing API (optional): See bing-webmaster-extractor.js');
  } else if (!status.bing.fresh) {
    console.log('   2. Run Bing extraction: node scripts/bing-webmaster-extractor.js');
  }

  if (!status.gapReport.exists) {
    console.log('   3. Run gap analysis: node scripts/opportunity-gap-analyzer.js');
  }

  console.log('   4. Generate smart batch: node scripts/keyword-intelligence.js smart\n');
}

/**
 * Main execution
 */
async function main() {
  const command = process.argv[2] || 'status';

  console.log('🧠 Keyword Intelligence System\n');

  switch (command) {
    case 'status':
      printStatus();
      break;

    case 'analyze':
      console.log('Running full analysis pipeline...\n');

      // Run GSC extraction if needed
      const gscStatus = gscExtractor.shouldRunGSCExtraction();
      if (gscStatus.shouldRun) {
        console.log('📊 Running GSC extraction...');
        await gscExtractor.main();
      } else {
        console.log('✅ GSC data is fresh\n');
      }

      // Run Bing extraction if configured and needed
      if (bingExtractor && process.env.BING_WEBMASTER_API_KEY) {
        const bingStatus = bingExtractor.shouldRunBingExtraction();
        if (bingStatus.shouldRun) {
          console.log('🔵 Running Bing extraction...');
          await bingExtractor.main();
        } else {
          console.log('✅ Bing data is fresh\n');
        }
      }

      // Run opportunity gap analysis
      console.log('🔍 Running opportunity gap analysis...');
      await opportunityAnalyzer.main();

      console.log('\n✅ Full analysis complete!');
      console.log('Run "node scripts/keyword-intelligence.js smart" for batch recommendations\n');
      break;

    case 'recommend':
    case 'smart':
      const numPosts = parseInt(process.argv[3]) || 10;
      const batch = generateSmartBatch(numPosts);

      console.log('═══════════════════════════════════════════════════════════');
      console.log('                 SMART BATCH RECOMMENDATIONS                ');
      console.log('═══════════════════════════════════════════════════════════\n');

      if (batch.clusterPriority) {
        console.log(`🎯 CLUSTER PRIORITY: ${batch.clusterPriority}\n`);
      }

      console.log(`📝 REGULAR POSTS (${batch.regularPosts.length}):\n`);
      batch.regularPosts.forEach((p, i) => {
        console.log(`   ${i + 1}. "${p.keyword}"`);
        console.log(`      → City: ${p.city}`);
        console.log(`      → Score: ${p.score} | Reason: ${p.reason}\n`);
      });

      console.log(`🔍 "NEAR ME" POSTS (${batch.nearMePosts.length}):\n`);
      batch.nearMePosts.forEach((p, i) => {
        console.log(`   ${i + 1}. "${p.keyword}"`);
        console.log(`      → City: ${p.city}\n`);
      });

      console.log('═══════════════════════════════════════════════════════════');
      console.log(`   Total Posts: ${batch.totalPosts}`);
      console.log(`   Avg Lead Gen Score: ${batch.summary.avgLeadGenScore}`);
      console.log(`   Cities: ${batch.summary.citiesTargeted.join(', ')}`);
      console.log(`   Data Sources: ${batch.summary.dataSourcesUsed.join(', ')}`);
      console.log('═══════════════════════════════════════════════════════════\n');

      // Save to file
      fs.writeFileSync(CONFIG.OUTPUT_PATH, JSON.stringify(batch, null, 2), 'utf-8');
      console.log(`💾 Full report saved to: ${CONFIG.OUTPUT_PATH}\n`);
      break;

    default:
      console.log('Available commands:');
      console.log('  status    - Check data freshness');
      console.log('  analyze   - Run full analysis pipeline');
      console.log('  smart [n] - Generate smart batch recommendations (default: 10 posts)');
      console.log('  recommend - Alias for smart\n');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  checkDataFreshness,
  loadAllKeywordData,
  combineKeywordData,
  matchKeywordsToCities,
  generateSmartBatch,
  getUsedCombinations,
  getAvailableCities
};

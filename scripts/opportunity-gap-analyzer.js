/**
 * Opportunity Gap Analyzer
 *
 * Analyzes GSC data and blog tracking to identify:
 * 1. Ranking Gaps: Keywords at positions 11-30 (page 2-3) that need content
 * 2. CTR Gaps: High impressions + low CTR keywords needing optimization
 * 3. Coverage Gaps: Cities with insufficient blog posts
 * 4. Cluster Gaps: Topic clusters needing more posts
 * 5. Lead Gen Opportunities: High-intent keywords not yet targeted
 *
 * Usage: node scripts/opportunity-gap-analyzer.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  GSC_DATA_PATH: path.join(__dirname, '..', 'gsc-extracted-keywords.json'),
  BLOG_TRACKING_PATH: path.join(__dirname, '..', '.claude', 'skills', 'socal-engineering-blog', 'BLOG-TRACKING.md'),
  BLOG_DATA_PATH: path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts'),
  OUTPUT_PATH: path.join(__dirname, '..', 'opportunity-gaps-report.json'),

  // Thresholds
  MIN_CITY_POSTS: 3,           // Minimum posts per city before considered "covered"
  MIN_CLUSTER_POSTS: 20,       // Minimum posts per topic cluster
  IDEAL_CLUSTER_POSTS: 25,     // Ideal posts per topic cluster
  POSITION_GAP_MIN: 11,        // Position range for "striking distance" keywords
  POSITION_GAP_MAX: 30,
  CTR_GAP_THRESHOLD: 0.03,     // Below 3% CTR is a gap
  MIN_IMPRESSIONS_FOR_GAP: 100,
  HIGH_LEAD_GEN_SCORE: 70,     // Minimum score for "high priority" lead gen
};

// All 103 cities from the complete roster
const ALL_CITIES = [
  // Orange County (34)
  'Irvine', 'Newport Beach', 'Long Beach', 'Santa Ana', 'Anaheim', 'Huntington Beach',
  'Costa Mesa', 'Fullerton', 'Garden Grove', 'Orange', 'Tustin', 'Mission Viejo',
  'Laguna Beach', 'San Clemente', 'Lake Forest', 'Dana Point', 'San Juan Capistrano',
  'Fountain Valley', 'Westminster', 'La Habra', 'Yorba Linda', 'Seal Beach',
  'Laguna Niguel', 'Aliso Viejo', 'Stanton', 'Brea', 'Placentia', 'Buena Park',
  'Cypress', 'La Palma', 'Los Alamitos', 'Laguna Woods', 'Villa Park',

  // Los Angeles County (12)
  'Los Angeles', 'Manhattan Beach', 'Hermosa Beach', 'Redondo Beach', 'Torrance',
  'El Segundo', 'Glendale', 'Burbank', 'Pasadena', 'Downey', 'Whittier', 'Rancho Palos Verdes',

  // San Diego County (25)
  'San Diego', 'Carlsbad', 'Oceanside', 'Encinitas', 'Chula Vista', 'Escondido',
  'Vista', 'San Marcos', 'El Cajon', 'La Mesa', 'Poway', 'Santee', 'National City',
  'Imperial Beach', 'Coronado', 'Del Mar', 'Solana Beach', 'Lemon Grove', 'Bonita',
  'Spring Valley', 'Rancho San Diego', 'Ramona', 'Alpine', 'Lakeside', 'Fallbrook',

  // Riverside County (21)
  'Riverside', 'Moreno Valley', 'Corona', 'Temecula', 'Murrieta', 'Menifee',
  'Perris', 'Lake Elsinore', 'Wildomar', 'Hemet', 'San Jacinto', 'Palm Desert',
  'Palm Springs', 'Cathedral City', 'Indio', 'La Quinta', 'Rancho Mirage',
  'Coachella', 'Desert Hot Springs', 'Eastvale', 'Jurupa Valley',

  // San Bernardino County (11)
  'San Bernardino', 'Fontana', 'Rancho Cucamonga', 'Ontario', 'Chino', 'Chino Hills',
  'Upland', 'Redlands', 'Rialto', 'Yucaipa', 'Highland'
];

// Topic clusters from the skill
const TOPIC_CLUSTERS = {
  'structural-engineering': { name: 'Structural Engineering Services', minPosts: 25 },
  'engineering-design': { name: 'Engineering Design Services', minPosts: 25 },
  'specialized-services': { name: 'Specialized Engineering Services', minPosts: 25 },
  'residential-engineering': { name: 'Residential Structural Engineering', minPosts: 25 },
  'commercial-industrial-engineering': { name: 'Commercial & Industrial Engineering', minPosts: 25 },
  'foundation-engineering': { name: 'Foundation Engineering', minPosts: 25 }
};

/**
 * Load GSC extracted keywords
 */
function loadGSCData() {
  try {
    if (!fs.existsSync(CONFIG.GSC_DATA_PATH)) {
      console.log('⚠️  GSC data not found. Run gsc-keyword-extractor.js first.');
      return null;
    }
    return JSON.parse(fs.readFileSync(CONFIG.GSC_DATA_PATH, 'utf-8'));
  } catch (error) {
    console.error('Error loading GSC data:', error.message);
    return null;
  }
}

/**
 * Parse blog tracking to get published posts
 */
function parseBlogTracking() {
  try {
    const content = fs.readFileSync(CONFIG.BLOG_TRACKING_PATH, 'utf-8');
    const posts = [];
    const cityUsage = {};

    // Initialize city usage
    ALL_CITIES.forEach(city => {
      cityUsage[city] = 0;
    });

    // Parse the published posts table
    const lines = content.split('\n');
    let inTable = false;

    for (const line of lines) {
      if (line.includes('| Keyword/Topic |')) {
        inTable = true;
        continue;
      }
      if (inTable && line.startsWith('|') && !line.includes('---')) {
        const parts = line.split('|').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4 && parts[2].includes('Published')) {
          const keyword = parts[0];
          const city = parts[1];
          posts.push({ keyword, city, status: 'published' });

          // Count city usage
          if (cityUsage.hasOwnProperty(city)) {
            cityUsage[city]++;
          }
        }
      }
      if (inTable && !line.startsWith('|') && line.trim() !== '') {
        break;
      }
    }

    return { posts, cityUsage };
  } catch (error) {
    console.error('Error parsing blog tracking:', error.message);
    return { posts: [], cityUsage: {} };
  }
}

/**
 * Parse blog-data.ts to get cluster post counts
 */
function parseClusterCounts() {
  try {
    const content = fs.readFileSync(CONFIG.BLOG_DATA_PATH, 'utf-8');
    const clusterCounts = {};

    // Initialize cluster counts
    Object.keys(TOPIC_CLUSTERS).forEach(cluster => {
      clusterCounts[cluster] = 0;
    });

    // Count posts by topicCluster field
    const topicClusterMatches = content.matchAll(/topicCluster:\s*['"]([^'"]+)['"]/g);
    for (const match of topicClusterMatches) {
      const cluster = match[1];
      if (clusterCounts.hasOwnProperty(cluster)) {
        clusterCounts[cluster]++;
      }
    }

    return clusterCounts;
  } catch (error) {
    console.error('Error parsing blog data:', error.message);
    return {};
  }
}

/**
 * Identify ranking gap opportunities (position 11-30)
 */
function findRankingGaps(gscData) {
  if (!gscData || !gscData.keywords) return [];

  return gscData.keywords
    .filter(k => k.metrics &&
      k.metrics.position >= CONFIG.POSITION_GAP_MIN &&
      k.metrics.position <= CONFIG.POSITION_GAP_MAX &&
      k.metrics.impressions >= CONFIG.MIN_IMPRESSIONS_FOR_GAP)
    .map(k => ({
      keyword: k.keyword,
      position: k.metrics.position.toFixed(1),
      impressions: k.metrics.impressions,
      clicks: k.metrics.clicks,
      leadGenScore: k.leadGenScore || 0,
      opportunity: 'ranking_gap',
      priority: k.metrics.impressions > 500 ? 'high' : 'medium',
      action: `Create targeted blog post to improve from position ${k.metrics.position.toFixed(1)} to top 10`
    }))
    .sort((a, b) => b.impressions - a.impressions);
}

/**
 * Identify CTR gap opportunities (high impressions, low CTR)
 */
function findCTRGaps(gscData) {
  if (!gscData || !gscData.keywords) return [];

  return gscData.keywords
    .filter(k => k.metrics &&
      k.metrics.impressions >= CONFIG.MIN_IMPRESSIONS_FOR_GAP &&
      k.metrics.ctr < CONFIG.CTR_GAP_THRESHOLD &&
      k.metrics.position <= 20) // Only for keywords already ranking somewhat well
    .map(k => ({
      keyword: k.keyword,
      impressions: k.metrics.impressions,
      ctr: (k.metrics.ctr * 100).toFixed(2) + '%',
      position: k.metrics.position.toFixed(1),
      leadGenScore: k.leadGenScore || 0,
      opportunity: 'ctr_gap',
      priority: k.metrics.impressions > 500 ? 'high' : 'medium',
      action: `Optimize title/meta for "${k.keyword}" - ${k.metrics.impressions} impressions but only ${(k.metrics.ctr * 100).toFixed(2)}% CTR`
    }))
    .sort((a, b) => b.impressions - a.impressions);
}

/**
 * Identify city coverage gaps
 */
function findCoverageGaps(cityUsage) {
  const gaps = [];

  ALL_CITIES.forEach(city => {
    const count = cityUsage[city] || 0;
    if (count < CONFIG.MIN_CITY_POSTS) {
      gaps.push({
        city,
        currentPosts: count,
        needed: CONFIG.MIN_CITY_POSTS - count,
        opportunity: 'coverage_gap',
        priority: count === 0 ? 'high' : 'medium',
        action: `Create ${CONFIG.MIN_CITY_POSTS - count} more posts for ${city} (currently ${count})`
      });
    }
  });

  return gaps.sort((a, b) => a.currentPosts - b.currentPosts);
}

/**
 * Identify topic cluster gaps
 */
function findClusterGaps(clusterCounts) {
  const gaps = [];

  Object.entries(TOPIC_CLUSTERS).forEach(([cluster, config]) => {
    const count = clusterCounts[cluster] || 0;
    if (count < config.minPosts) {
      gaps.push({
        cluster,
        name: config.name,
        currentPosts: count,
        needed: config.minPosts - count,
        opportunity: 'cluster_gap',
        priority: count === 0 ? 'critical' : count < 10 ? 'high' : 'medium',
        action: `Add ${config.minPosts - count} posts to "${config.name}" cluster (currently ${count})`
      });
    }
  });

  return gaps.sort((a, b) => a.currentPosts - b.currentPosts);
}

/**
 * Identify high-value lead gen keywords not yet targeted
 */
function findLeadGenOpportunities(gscData, publishedPosts) {
  if (!gscData || !gscData.keywords) return [];

  const publishedKeywords = new Set(
    publishedPosts.map(p => p.keyword.toLowerCase())
  );

  return gscData.keywords
    .filter(k => (k.leadGenScore || 0) >= CONFIG.HIGH_LEAD_GEN_SCORE)
    .filter(k => !publishedKeywords.has(k.keyword.toLowerCase()))
    .map(k => ({
      keyword: k.keyword,
      leadGenScore: k.leadGenScore,
      impressions: k.metrics?.impressions || 0,
      position: k.metrics?.position?.toFixed(1) || 'N/A',
      intent: k.intent,
      opportunity: 'lead_gen',
      priority: k.leadGenScore >= 85 ? 'high' : 'medium',
      action: `Target "${k.keyword}" - Lead Gen Score: ${k.leadGenScore}, untapped high-intent keyword`
    }))
    .sort((a, b) => b.leadGenScore - a.leadGenScore);
}

/**
 * Generate priority action items
 */
function generatePriorityActions(allGaps) {
  const actions = [];

  // Critical cluster gaps first
  allGaps.clusterGaps
    .filter(g => g.priority === 'critical')
    .forEach(g => {
      actions.push({
        priority: 1,
        type: 'cluster',
        action: g.action,
        impact: 'Critical for topical authority'
      });
    });

  // High-priority lead gen opportunities
  allGaps.leadGenOpportunities
    .filter(g => g.priority === 'high')
    .slice(0, 5)
    .forEach(g => {
      actions.push({
        priority: 2,
        type: 'lead_gen',
        action: g.action,
        impact: 'High conversion potential'
      });
    });

  // High-priority ranking gaps
  allGaps.rankingGaps
    .filter(g => g.priority === 'high')
    .slice(0, 5)
    .forEach(g => {
      actions.push({
        priority: 3,
        type: 'ranking',
        action: g.action,
        impact: 'Quick ranking win opportunity'
      });
    });

  // City coverage gaps
  allGaps.coverageGaps
    .filter(g => g.priority === 'high')
    .slice(0, 10)
    .forEach(g => {
      actions.push({
        priority: 4,
        type: 'coverage',
        action: g.action,
        impact: 'Expand local SEO footprint'
      });
    });

  // CTR optimization opportunities
  allGaps.ctrGaps
    .filter(g => g.priority === 'high')
    .slice(0, 5)
    .forEach(g => {
      actions.push({
        priority: 5,
        type: 'optimization',
        action: g.action,
        impact: 'Improve existing content performance'
      });
    });

  return actions;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Opportunity Gap Analyzer Starting...\n');

  // Load data
  console.log('📊 Loading data sources...');
  const gscData = loadGSCData();
  const { posts, cityUsage } = parseBlogTracking();
  const clusterCounts = parseClusterCounts();

  console.log(`   ✅ GSC keywords: ${gscData?.keywords?.length || 0}`);
  console.log(`   ✅ Published posts: ${posts.length}`);
  console.log(`   ✅ Cities tracked: ${Object.keys(cityUsage).length}`);
  console.log(`   ✅ Clusters tracked: ${Object.keys(clusterCounts).length}\n`);

  // Find gaps
  console.log('🔎 Analyzing gaps...');

  const rankingGaps = findRankingGaps(gscData);
  console.log(`   📈 Ranking gaps (position 11-30): ${rankingGaps.length}`);

  const ctrGaps = findCTRGaps(gscData);
  console.log(`   📉 CTR gaps (high imp, low CTR): ${ctrGaps.length}`);

  const coverageGaps = findCoverageGaps(cityUsage);
  console.log(`   🏙️  City coverage gaps: ${coverageGaps.length}`);

  const clusterGaps = findClusterGaps(clusterCounts);
  console.log(`   📚 Cluster gaps: ${clusterGaps.length}`);

  const leadGenOpportunities = findLeadGenOpportunities(gscData, posts);
  console.log(`   💰 Lead gen opportunities: ${leadGenOpportunities.length}\n`);

  // Generate all gaps object
  const allGaps = {
    rankingGaps,
    ctrGaps,
    coverageGaps,
    clusterGaps,
    leadGenOpportunities
  };

  // Generate priority actions
  const priorityActions = generatePriorityActions(allGaps);

  // Create report
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalRankingGaps: rankingGaps.length,
      totalCTRGaps: ctrGaps.length,
      totalCoverageGaps: coverageGaps.length,
      totalClusterGaps: clusterGaps.length,
      totalLeadGenOpportunities: leadGenOpportunities.length,
      criticalActions: priorityActions.filter(a => a.priority === 1).length,
      highPriorityActions: priorityActions.filter(a => a.priority <= 3).length
    },
    priorityActions: priorityActions.slice(0, 20),
    gaps: allGaps,
    recommendations: {
      nextBlogBatch: {
        clusterFocus: clusterGaps.length > 0 ? clusterGaps[0].name : 'Even distribution',
        priorityCities: coverageGaps.slice(0, 5).map(g => g.city),
        priorityKeywords: leadGenOpportunities.slice(0, 10).map(g => g.keyword),
        rankingTargets: rankingGaps.slice(0, 5).map(g => g.keyword)
      }
    }
  };

  // Save report
  fs.writeFileSync(CONFIG.OUTPUT_PATH, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`💾 Report saved to: ${CONFIG.OUTPUT_PATH}\n`);

  // Print summary
  console.log('═══════════════════════════════════════════════════════════');
  console.log('                    OPPORTUNITY GAP SUMMARY                 ');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log('🎯 TOP PRIORITY ACTIONS:\n');
  priorityActions.slice(0, 10).forEach((action, i) => {
    const emoji = action.priority === 1 ? '🚨' : action.priority === 2 ? '🔥' : '⚡';
    console.log(`   ${emoji} ${i + 1}. ${action.action}`);
    console.log(`      Impact: ${action.impact}\n`);
  });

  console.log('📋 NEXT BLOG BATCH RECOMMENDATIONS:\n');
  console.log(`   Cluster Focus: ${report.recommendations.nextBlogBatch.clusterFocus}`);
  console.log(`   Priority Cities: ${report.recommendations.nextBlogBatch.priorityCities.slice(0, 5).join(', ')}`);
  console.log(`   Priority Keywords: ${report.recommendations.nextBlogBatch.priorityKeywords.slice(0, 5).join(', ')}\n`);

  console.log('✅ Analysis complete!\n');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  findRankingGaps,
  findCTRGaps,
  findCoverageGaps,
  findClusterGaps,
  findLeadGenOpportunities,
  generatePriorityActions
};

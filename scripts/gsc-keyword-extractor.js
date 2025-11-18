/**
 * GSC Keyword Extractor
 *
 * This script:
 * 1. Fetches queries from Google Search Console API
 * 2. For each query, performs a Google search to find "People also search for" keywords
 * 3. Adds discovered keywords to the keyword list for blog generation
 *
 * Usage: node scripts/gsc-keyword-extractor.js
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Configuration
const CONFIG = {
  // GSC API Configuration
  GSC_PROPERTY_URL: process.env.GSC_PROPERTY_URL || 'https://aaaengineeringdesign.com',
  GSC_CREDENTIALS_PATH: process.env.GSC_CREDENTIALS_PATH || './gsc-credentials.json',

  // Search Configuration
  DAYS_BACK: parseInt(process.env.GSC_DAYS_BACK) || 30,
  MIN_IMPRESSIONS: parseInt(process.env.MIN_IMPRESSIONS) || 10,
  MAX_QUERIES_TO_PROCESS: parseInt(process.env.MAX_QUERIES) || 50,

  // File Paths
  KEYWORD_LIST_PATH: path.join(__dirname, '..', '.claude', 'skills', 'socal-engineering-blog', 'references', 'keyword-list.md'),
  OUTPUT_PATH: path.join(__dirname, '..', 'gsc-extracted-keywords.json'),
  LAST_RUN_PATH: path.join(__dirname, '..', '.gsc-last-run.json'),
};

/**
 * Check if GSC extraction should run (last run > 7 days ago)
 * Returns: { shouldRun: boolean, lastRun: Date|null, daysSinceLastRun: number|null }
 */
function shouldRunGSCExtraction() {
  try {
    if (!fs.existsSync(CONFIG.LAST_RUN_PATH)) {
      return { shouldRun: true, lastRun: null, daysSinceLastRun: null, reason: 'Never run before' };
    }

    const lastRunData = JSON.parse(fs.readFileSync(CONFIG.LAST_RUN_PATH, 'utf-8'));
    const lastRun = new Date(lastRunData.lastRunAt);
    const now = new Date();
    const daysSinceLastRun = Math.floor((now - lastRun) / (1000 * 60 * 60 * 24));

    const DAYS_THRESHOLD = parseInt(process.env.GSC_AUTO_RUN_DAYS) || 7;

    if (daysSinceLastRun >= DAYS_THRESHOLD) {
      return {
        shouldRun: true,
        lastRun,
        daysSinceLastRun,
        reason: `Last run was ${daysSinceLastRun} days ago (threshold: ${DAYS_THRESHOLD} days)`
      };
    }

    return {
      shouldRun: false,
      lastRun,
      daysSinceLastRun,
      reason: `Last run was ${daysSinceLastRun} days ago (threshold: ${DAYS_THRESHOLD} days)`
    };
  } catch (error) {
    console.error('Error checking last run:', error.message);
    return { shouldRun: true, lastRun: null, daysSinceLastRun: null, reason: 'Error reading last run file' };
  }
}

/**
 * Initialize Google Search Console API client
 */
async function initializeGSCClient() {
  try {
    // Load credentials
    const credentials = JSON.parse(fs.readFileSync(CONFIG.GSC_CREDENTIALS_PATH, 'utf-8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient,
    });

    return searchconsole;
  } catch (error) {
    console.error('Error initializing GSC client:', error.message);
    throw error;
  }
}

/**
 * Fetch queries from Google Search Console
 */
async function fetchGSCQueries(searchconsole) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - CONFIG.DAYS_BACK);

  const request = {
    siteUrl: CONFIG.GSC_PROPERTY_URL,
    requestBody: {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      dimensions: ['query'],
      rowLimit: CONFIG.MAX_QUERIES_TO_PROCESS,
      dimensionFilterGroups: [
        {
          filters: [
            {
              dimension: 'query',
              operator: 'notContains',
              expression: 'aaa engineering', // Exclude brand queries
            },
          ],
        },
      ],
    },
  };

  try {
    const response = await searchconsole.searchanalytics.query(request);
    const queries = response.data.rows || [];

    // Filter by minimum impressions
    return queries
      .filter(row => row.impressions >= CONFIG.MIN_IMPRESSIONS)
      .map(row => ({
        query: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
      }))
      .sort((a, b) => b.impressions - a.impressions);
  } catch (error) {
    console.error('Error fetching GSC queries:', error.message);
    throw error;
  }
}

/**
 * Extract "People also search for" keywords using SerpAPI
 */
async function extractRelatedSearches(query) {
  console.log(`  Searching for related keywords for: "${query}"`);

  const relatedKeywords = [];

  try {
    // Check if SerpAPI key is configured
    if (!process.env.SERPAPI_KEY) {
      console.log('  ⚠️  SerpAPI key not configured - skipping related searches');
      return relatedKeywords;
    }

    // Use SerpAPI to get related searches
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);

    const params = {
      q: query,
      location: "California, United States",
      hl: "en",
      gl: "us",
      num: 10, // Number of results
    };

    // Promisify the callback-based API
    const results = await new Promise((resolve, reject) => {
      search.json(params, (data) => {
        if (data.error) {
          reject(new Error(data.error));
        } else {
          resolve(data);
        }
      });
    });

    // Extract related searches
    if (results.related_searches && Array.isArray(results.related_searches)) {
      const related = results.related_searches
        .map(s => s.query)
        .filter(q => q && q.toLowerCase() !== query.toLowerCase()) // Remove duplicates
        .slice(0, 8); // Limit to 8 related searches

      relatedKeywords.push(...related);

      if (related.length > 0) {
        console.log(`  ✅ Found ${related.length} related searches`);
      }
    }

    // Also extract "People also ask" questions as potential keywords
    if (results.related_questions && Array.isArray(results.related_questions)) {
      const questions = results.related_questions
        .map(q => q.question)
        .filter(q => q)
        .slice(0, 5); // Limit to 5 questions

      relatedKeywords.push(...questions);

      if (questions.length > 0) {
        console.log(`  ✅ Found ${questions.length} "People also ask" questions`);
      }
    }

    return relatedKeywords;
  } catch (error) {
    if (error.message && error.message.includes('quota')) {
      console.error(`  ⚠️  SerpAPI quota exceeded - continuing without related searches`);
    } else {
      console.error(`  ⚠️  Error extracting related searches: ${error.message}`);
    }
    return [];
  }
}

/**
 * Categorize keyword based on intent and content
 */
function categorizeKeyword(keyword, metrics) {
  const keywordLower = keyword.toLowerCase();

  // Determine intent
  let intent = 'Informational';
  if (keywordLower.includes('best') || keywordLower.includes('top') || keywordLower.includes('review')) {
    intent = 'Navigational';
  } else if (keywordLower.includes('cost') || keywordLower.includes('price') || keywordLower.includes('hire')) {
    intent = 'Commercial';
  } else if (keywordLower.includes('near me') || keywordLower.includes('buy') || keywordLower.includes('get')) {
    intent = 'Transactional';
  }

  // Determine volume based on impressions
  let volume = 'Low';
  if (metrics.impressions > 1000) {
    volume = 'High';
  } else if (metrics.impressions > 100) {
    volume = 'Medium';
  }

  // Estimate difficulty based on position
  let difficulty = 'Low';
  if (metrics.position > 20) {
    difficulty = 'High';
  } else if (metrics.position > 10) {
    difficulty = 'Medium';
  }

  return { intent, volume, difficulty };
}

/**
 * Add keywords to the keyword list file
 */
function addKeywordsToList(keywords) {
  try {
    let content = fs.readFileSync(CONFIG.KEYWORD_LIST_PATH, 'utf-8');

    // Find the Long-Tail GSC Keywords section
    const sectionMarker = '### Long-Tail GSC Keywords';
    const sectionIndex = content.indexOf(sectionMarker);

    if (sectionIndex === -1) {
      console.error('Could not find Long-Tail GSC Keywords section in keyword list');
      return 0;
    }

    // Find the next section (after the keyword list)
    const nextSectionIndex = content.indexOf('\n### ', sectionIndex + sectionMarker.length);
    const competitorSectionIndex = content.indexOf('### Competitor Awareness Keywords', sectionIndex);
    const insertIndex = competitorSectionIndex > -1 ? competitorSectionIndex : nextSectionIndex;

    // Get existing keywords in the section
    const sectionContent = content.substring(sectionIndex, insertIndex);
    const existingKeywords = new Set(
      sectionContent
        .split('\n')
        .filter(line => line.startsWith('- '))
        .map(line => line.substring(2).trim().toLowerCase())
    );

    // Prepare new keywords
    let newKeywordsAdded = 0;
    const newKeywordLines = [];

    for (const kw of keywords) {
      const keywordLower = kw.keyword.toLowerCase();
      if (!existingKeywords.has(keywordLower)) {
        newKeywordLines.push(`- ${kw.keyword}`);
        existingKeywords.add(keywordLower);
        newKeywordsAdded++;
      }
    }

    if (newKeywordLines.length === 0) {
      console.log('No new keywords to add');
      return 0;
    }

    // Insert new keywords before the next section
    const beforeSection = content.substring(0, insertIndex);
    const afterSection = content.substring(insertIndex);

    const updatedContent = beforeSection +
      newKeywordLines.join('\n') + '\n\n' +
      afterSection;

    fs.writeFileSync(CONFIG.KEYWORD_LIST_PATH, updatedContent, 'utf-8');
    console.log(`\n✅ Added ${newKeywordsAdded} new keywords to keyword list`);

    return newKeywordsAdded;
  } catch (error) {
    console.error('Error adding keywords to list:', error.message);
    return 0;
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 GSC Keyword Extractor Starting...\n');

  try {
    // Step 1: Initialize GSC client
    console.log('📊 Connecting to Google Search Console...');
    const searchconsole = await initializeGSCClient();
    console.log('✅ Connected to GSC\n');

    // Step 2: Fetch queries
    console.log(`📥 Fetching queries from last ${CONFIG.DAYS_BACK} days...`);
    const queries = await fetchGSCQueries(searchconsole);
    console.log(`✅ Found ${queries.length} queries\n`);

    if (queries.length === 0) {
      console.log('No queries found. Exiting.');
      return;
    }

    // Step 3: Extract related searches for each query
    console.log('🔍 Extracting "People also search for" keywords...');
    const allKeywords = [];

    for (let i = 0; i < Math.min(queries.length, CONFIG.MAX_QUERIES_TO_PROCESS); i++) {
      const query = queries[i];
      console.log(`\n[${i + 1}/${queries.length}] Processing: "${query.query}"`);
      console.log(`  Impressions: ${query.impressions}, Clicks: ${query.clicks}, Position: ${query.position.toFixed(1)}`);

      const relatedKeywords = await extractRelatedSearches(query.query);

      // Add the original query
      const category = categorizeKeyword(query.query, query);
      allKeywords.push({
        keyword: query.query,
        source: 'GSC',
        ...category,
        metrics: query,
      });

      // Add related keywords
      for (const related of relatedKeywords) {
        allKeywords.push({
          keyword: related,
          source: `Related to: ${query.query}`,
          intent: 'Informational',
          volume: 'Unknown',
          difficulty: 'Unknown',
        });
      }

      // Rate limiting - wait 2 seconds between requests
      if (i < queries.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log(`\n✅ Extracted ${allKeywords.length} total keywords`);

    // Step 4: Save results to JSON
    fs.writeFileSync(
      CONFIG.OUTPUT_PATH,
      JSON.stringify({
        generatedAt: new Date().toISOString(),
        totalKeywords: allKeywords.length,
        keywords: allKeywords
      }, null, 2),
      'utf-8'
    );
    console.log(`\n💾 Saved results to: ${CONFIG.OUTPUT_PATH}`);

    // Step 5: Add to keyword list
    console.log('\n📝 Adding keywords to keyword list...');
    const added = addKeywordsToList(allKeywords);

    // Step 6: Save last run timestamp
    const lastRunData = {
      lastRunAt: new Date().toISOString(),
      queriesProcessed: queries.length,
      keywordsExtracted: allKeywords.length,
      keywordsAdded: added,
      daysBack: CONFIG.DAYS_BACK,
    };
    fs.writeFileSync(CONFIG.LAST_RUN_PATH, JSON.stringify(lastRunData, null, 2), 'utf-8');

    console.log('\n✅ Process completed successfully!');
    console.log(`\nSummary:`);
    console.log(`- Total GSC queries processed: ${queries.length}`);
    console.log(`- Total keywords extracted: ${allKeywords.length}`);
    console.log(`- New keywords added to list: ${added}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, shouldRunGSCExtraction, fetchGSCQueries, extractRelatedSearches, addKeywordsToList };

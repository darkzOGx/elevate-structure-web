#!/usr/bin/env node

/**
 * Script to identify and mark city variant blog posts for noindex
 *
 * Strategy:
 * - Posts with the same service but different cities are "city variants"
 * - For each service, keep only the top 2-3 high-value cities indexed
 * - Mark the rest as noIndex: true to prevent Google from seeing them as duplicate content
 *
 * High-value cities (keep indexed):
 * - Newport Beach, Irvine, Los Angeles, San Diego (Platinum tier)
 * - Pasadena, Long Beach, Anaheim (Gold tier)
 */

const fs = require('fs');
const path = require('path');

// High-value cities that should always be indexed
const HIGH_VALUE_CITIES = [
  'newport-beach', 'irvine', 'los-angeles', 'san-diego',
  'beverly-hills', 'santa-monica', 'pasadena', 'long-beach',
  'anaheim', 'malibu', 'laguna-beach', 'costa-mesa',
  'huntington-beach', 'orange'
];

// Read blog-data.ts
const blogDataPath = path.join(__dirname, '../src/lib/blog-data.ts');
let blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');

// Extract all blog post IDs
const idRegex = /id:\s*['"]([^'"]+)['"]/g;
const postIds = [];
let match;
while ((match = idRegex.exec(blogDataContent)) !== null) {
  postIds.push(match[1]);
}

console.log(`Found ${postIds.length} blog post IDs\n`);

// Analyze city variants
function extractServiceAndCity(id) {
  // Pattern: {service-name}-in-{city-name}
  const inMatch = id.match(/^(.+)-in-([a-z-]+)$/);
  if (inMatch) {
    return { service: inMatch[1], city: inMatch[2], hasCity: true };
  }

  // Pattern: {service-name}-{city-name} (older format without -in-)
  // Look for common city names at the end
  const cityPattern = new RegExp(`^(.+)-(${HIGH_VALUE_CITIES.join('|')}|corona|riverside|moreno-valley|fullerton|santa-ana|tustin|garden-grove|westminster|mission-viejo|lake-forest|aliso-viejo|laguna-woods|san-clemente|dana-point|san-juan-capistrano|laguna-niguel|rancho-santa-margarita|ladera-ranch|yorba-linda|brea|placentia|la-habra|buena-park|cypress|stanton|los-alamitos|seal-beach|fountain-valley|villa-park|orange|poway|oceanside|carlsbad|encinitas|del-mar|la-jolla|escondido|vista|san-marcos|chula-vista|coronado|el-cajon|la-mesa|santee|murrieta|temecula|menifee|perris|wildomar|hemet|san-bernardino|ontario|rancho-cucamonga|fontana|upland|claremont|pomona|west-covina|glendora|azusa|covina|diamond-bar|walnut|rowland-heights|hacienda-heights|la-puente|whittier|downey|norwalk|cerritos|lakewood|paramount|bellflower|compton|torrance|redondo-beach|hermosa-beach|manhattan-beach|el-segundo|culver-city|inglewood|hawthorne|lawndale|gardena|carson|lomita|san-pedro|wilmington|harbor-city|rancho-palos-verdes|palos-verdes-estates|rolling-hills|rolling-hills-estates|burbank|glendale|la-canada-flintridge|montrose|arcadia|san-marino|south-pasadena|alhambra|monterey-park|rosemead|el-monte|baldwin-park|irwindale|azusa|duarte|monrovia|arcadia|sierra-madre|pasadena|altadena|la-crescenta|sunland|tujunga|sun-valley|north-hollywood|studio-city|sherman-oaks|encino|tarzana|woodland-hills|calabasas|agoura-hills|westlake-village|thousand-oaks|newbury-park|camarillo|oxnard|ventura|santa-barbara|goleta|montecito|carpinteria|ojai|fillmore|santa-paula|simi-valley|moorpark|redlands|yucaipa|highland|big-bear|lake-arrowhead|crestline|running-springs|blue-jay|twin-peaks|el-segundo)$`);
  const cityMatch = id.match(cityPattern);
  if (cityMatch) {
    return { service: cityMatch[1], city: cityMatch[2], hasCity: true };
  }

  return { service: id, city: null, hasCity: false };
}

// Group posts by service
const serviceGroups = {};
postIds.forEach(id => {
  const { service, city, hasCity } = extractServiceAndCity(id);
  if (hasCity) {
    if (!serviceGroups[service]) {
      serviceGroups[service] = [];
    }
    serviceGroups[service].push({ id, city });
  }
});

// Find services with multiple city variants
const duplicateServices = Object.entries(serviceGroups)
  .filter(([service, posts]) => posts.length > 3)
  .sort((a, b) => b[1].length - a[1].length);

console.log('Services with multiple city variants:\n');
duplicateServices.forEach(([service, posts]) => {
  console.log(`${service}: ${posts.length} variants`);
  posts.forEach(p => console.log(`  - ${p.city}`));
  console.log('');
});

// Determine which posts should be noIndexed
const postsToNoIndex = [];
duplicateServices.forEach(([service, posts]) => {
  // Sort posts: high-value cities first
  const sorted = posts.sort((a, b) => {
    const aIsHighValue = HIGH_VALUE_CITIES.includes(a.city);
    const bIsHighValue = HIGH_VALUE_CITIES.includes(b.city);
    if (aIsHighValue && !bIsHighValue) return -1;
    if (!aIsHighValue && bIsHighValue) return 1;
    return 0;
  });

  // Keep first 3 posts indexed, noindex the rest
  const toNoIndex = sorted.slice(3);
  postsToNoIndex.push(...toNoIndex.map(p => p.id));
});

console.log('\n=== Posts to noIndex ===');
console.log(`Total: ${postsToNoIndex.length} posts\n`);

// Show breakdown
const noIndexByService = {};
postsToNoIndex.forEach(id => {
  const { service } = extractServiceAndCity(id);
  if (!noIndexByService[service]) {
    noIndexByService[service] = [];
  }
  noIndexByService[service].push(id);
});

Object.entries(noIndexByService).forEach(([service, ids]) => {
  console.log(`${service}: ${ids.length} to noindex`);
});

// Export for use
console.log('\n=== Action Required ===');
console.log(`Run with --apply flag to add noIndex: true to ${postsToNoIndex.length} posts`);

if (process.argv.includes('--apply')) {
  console.log('\nApplying noIndex flags...');

  let modified = 0;
  postsToNoIndex.forEach(postId => {
    // Find the post definition and add noIndex: true
    const postPattern = new RegExp(`(id:\\s*['"]${postId}['"][^}]+featured:\\s*(?:true|false))`, 'g');

    if (blogDataContent.match(postPattern)) {
      blogDataContent = blogDataContent.replace(postPattern, `$1,\n    noIndex: true`);
      modified++;
    }
  });

  fs.writeFileSync(blogDataPath, blogDataContent);
  console.log(`Modified ${modified} posts with noIndex: true`);
}

/**
 * Generate Redirects for Removed Service Blog Posts
 *
 * Maps 74 blog posts (from removed service categories) to the nearest
 * matching location page. For cities without a dedicated location page,
 * routes to the closest geographic match or the main blog page.
 *
 * Usage: node scripts/generate-service-removal-redirects.js
 */

const fs = require('fs');
const path = require('path');

// 13 existing location pages
const LOCATION_PAGES = [
  { id: 'irvine-structural-engineering', city: 'Irvine', region: 'OC' },
  { id: 'anaheim-structural-engineering', city: 'Anaheim', region: 'OC' },
  { id: 'newport-beach-structural-engineering', city: 'Newport Beach', region: 'OC' },
  { id: 'huntington-beach-structural-engineering', city: 'Huntington Beach', region: 'OC' },
  { id: 'costa-mesa-structural-engineering', city: 'Costa Mesa', region: 'OC' },
  { id: 'santa-ana-structural-engineering', city: 'Santa Ana', region: 'OC' },
  { id: 'fullerton-structural-engineering', city: 'Fullerton', region: 'OC' },
  { id: 'mission-viejo-structural-engineering', city: 'Mission Viejo', region: 'OC' },
  { id: 'lake-forest-structural-engineering', city: 'Lake Forest', region: 'OC' },
  { id: 'laguna-beach-structural-engineering', city: 'Laguna Beach', region: 'OC' },
  { id: 'san-diego-structural-engineering', city: 'San Diego', region: 'SD' },
  { id: 'long-beach-structural-engineering', city: 'Long Beach', region: 'LA' },
  { id: 'los-angeles-structural-engineering', city: 'Los Angeles', region: 'LA' },
];

// City-to-location mapping for cities without their own page
const CITY_TO_LOCATION = {
  // Orange County cities → nearest OC location page
  'la-palma': 'anaheim-structural-engineering',
  'placentia': 'anaheim-structural-engineering',
  'cypress': 'anaheim-structural-engineering',
  'los-alamitos': 'huntington-beach-structural-engineering',
  'westminster': 'huntington-beach-structural-engineering',
  'garden-grove': 'anaheim-structural-engineering',
  'yorba-linda': 'anaheim-structural-engineering',
  'tustin': 'irvine-structural-engineering',
  'seal-beach': 'huntington-beach-structural-engineering',
  'stanton': 'anaheim-structural-engineering',
  'laguna-niguel': 'mission-viejo-structural-engineering',
  'laguna-woods': 'mission-viejo-structural-engineering',
  'aliso-viejo': 'mission-viejo-structural-engineering',
  'san-clemente': 'mission-viejo-structural-engineering',
  'san-juan-capistrano': 'mission-viejo-structural-engineering',
  'corona-del-mar': 'newport-beach-structural-engineering',

  // LA County cities → LA or Long Beach
  'manhattan-beach': 'long-beach-structural-engineering',
  'hermosa-beach': 'long-beach-structural-engineering',
  'redondo-beach': 'long-beach-structural-engineering',
  'torrance': 'long-beach-structural-engineering',
  'el-segundo': 'los-angeles-structural-engineering',
  'glendale': 'los-angeles-structural-engineering',
  'burbank': 'los-angeles-structural-engineering',
  'brentwood': 'los-angeles-structural-engineering',
  'malibu': 'los-angeles-structural-engineering',
  'pasadena': 'los-angeles-structural-engineering',
  'rancho-palos-verdes': 'long-beach-structural-engineering',

  // San Diego County cities → San Diego
  'carlsbad': 'san-diego-structural-engineering',
  'chula-vista': 'san-diego-structural-engineering',
  'del-mar': 'san-diego-structural-engineering',
  'oceanside': 'san-diego-structural-engineering',
  'san-marcos': 'san-diego-structural-engineering',
  'bonita': 'san-diego-structural-engineering',
  'la-jolla': 'san-diego-structural-engineering',
  'coronado': 'san-diego-structural-engineering',
  'poway': 'san-diego-structural-engineering',
  'ramona': 'san-diego-structural-engineering',
  'rancho-san-diego': 'san-diego-structural-engineering',
  'spring-valley': 'san-diego-structural-engineering',

  // Inland Empire cities → LA (closest major page)
  'chino-hills': 'los-angeles-structural-engineering',
  'upland': 'los-angeles-structural-engineering',
  'redlands': 'los-angeles-structural-engineering',
  'san-jacinto': 'los-angeles-structural-engineering',
  'perris': 'los-angeles-structural-engineering',
  'indio': 'los-angeles-structural-engineering',
  'lake-elsinore': 'los-angeles-structural-engineering',
  'san-dimas': 'los-angeles-structural-engineering',
  'palm-springs': 'los-angeles-structural-engineering',
};

// Posts that need new redirects (not already in generated-redirects.ts)
const POSTS_NEEDING_REDIRECTS = [
  'mep-engineering-design-in-la-palma',
  'mep-engineering-design-in-manhattan-beach',
  'mep-engineering-design-in-placentia',
  'mep-engineering-design-in-san-marcos',
  'mep-engineering-services-in-bonita',
  'mep-engineer-near-me-in-carlsbad',
  'mep-engineer-near-me-in-chula-vista',
  'mep-engineer-near-me-in-cypress',
  'mep-engineer-near-me-in-del-mar',
  'mep-engineer-near-me-in-glendale',
  'mep-engineer-near-me-in-los-alamitos',
  'mep-engineer-near-me-in-ramona',
  'mep-engineer-near-me-in-westminster',
  'mep-engineer-near-me-in-yorba-linda',
  'mechanical-engineering-design-in-glendale',
  'mechanical-engineering-design-southern-california',
  'electrical-engineering-design-in-burbank',
  'electrical-engineering-design-in-palm-springs',
  'plumbing-engineering-design-in-san-jacinto',
  'civil-engineering-design-southern-california',
  'civil-engineer-near-me-in-brentwood',
  'civil-engineer-near-me-in-el-cajon',
  'civil-engineer-near-me-in-garden-grove',
  'civil-engineer-near-me-in-laguna-niguel',
  'civil-engineer-near-me-in-laguna-woods',
  'civil-engineer-near-me-in-la-palma',
  'civil-engineer-near-me-in-oceanside',
  'civil-engineer-near-me-in-san-dimas',
  'civil-engineer-near-me-in-seal-beach',
  'civil-engineer-structural-design-capability',
  'civil-engineer-structural-design-capability-chino-hills',
  'civil-site-engineering-in-el-segundo',
  'civil-site-development-engineering-in-lake-elsinore',
  'stormwater-design-engineer-in-hermosa-beach',
  'stormwater-design-engineer-in-tustin',
  'stormwater-design-engineer-tustin',
  'stormwater-design-engineer-westminster',
  'stormwater-management-engineering-in-spring-valley',
  'what-are-stormwater-design-engineer-roles-in-redlands',
  'grading-and-drainage-engineering-in-san-jacinto',
  'grading-and-drainage-plans-in-hermosa-beach',
  'grading-and-drainage-plans-in-laguna-woods',
  'grading-and-drainage-plans-in-poway',
  'grading-and-drainage-plans-in-stanton',
  'grading-and-drainage-plans-in-torrance',
  'site-drainage-engineering-in-indio',
  'septic-design-engineers-for-residential-systems-in-upland',
  'septic-design-engineers-in-aliso-viejo',
  'septic-design-engineers-in-redondo-beach',
  'septic-design-engineers-in-westminster',
  'septic-design-engineers-san-clemente',
  'septic-system-engineering-in-perris',
  'coastal-bluff-engineer-la-jolla',
  'coastal-bluff-engineer-near-me-in-del-mar',
  'coastal-bluff-foundation-design-in-la-jolla',
  'coastal-bluff-foundation-engineering-in-san-clemente',
  'coastal-bluff-stabilization-engineering-in-malibu',
  'coastal-bluff-stabilization-in-la-jolla',
  'coastal-bluff-stabilization-in-malibu',
  'coastal-bluff-structural-engineering-in-malibu',
  'coastal-commercial-renovation-engineering-in-del-mar',
  'coastal-commercial-retrofit-engineering-in-malibu',
  'coastal-commission-structural-engineer-malibu',
  'coastal-erosion-structural-solutions-in-corona-del-mar',
  'coastal-foundation-design-in-coronado',
  'coastal-foundation-design-in-la-jolla',
  'coastal-foundation-engineering-in-hermosa-beach',
  'coastal-foundation-engineering-in-la-jolla',
  'coastal-foundation-engineer-near-me-in-san-juan-capistrano',
  'coastal-home-addition-structural-engineering-in-carlsbad',
  'coastal-slope-stabilization-engineering-in-laguna-beach',
  'coastal-structural-engineer-near-me-in-rancho-palos-verdes',
  'structural-engineer-near-me-for-coastal-foundations',
  'commercial-building-ada-compliance-engineering-in-pasadena',
];

function findLocationForSlug(slug) {
  const normalized = slug.toLowerCase();

  // First: check exact city match against location pages (longest match first)
  const sortedLocations = [...LOCATION_PAGES].sort((a, b) =>
    b.city.length - a.city.length
  );

  for (const loc of sortedLocations) {
    const citySlug = loc.city.toLowerCase().replace(/\s+/g, '-');
    if (normalized.includes(citySlug)) {
      return loc.id;
    }
  }

  // Second: check city-to-location mapping
  for (const [citySlug, locationId] of Object.entries(CITY_TO_LOCATION)) {
    if (normalized.includes(citySlug)) {
      return locationId;
    }
  }

  // Fallback: generic "southern-california" or no city → main structural page
  return 'irvine-structural-engineering'; // HQ fallback
}

// Generate redirects
const redirects = POSTS_NEEDING_REDIRECTS.map(slug => {
  const destination = findLocationForSlug(slug);
  return {
    source: `/blog/${slug}`,
    destination: `/locations/${destination}`,
    permanent: true,
  };
});

// Output as TypeScript
const tsContent = `// Auto-generated redirects for removed service content consolidation
// Generated on ${new Date().toISOString()}
// These posts targeted services no longer offered: MEP, Civil, Stormwater,
// Grading/Drainage, Septic, Coastal, ADA Compliance

export const SERVICE_REMOVAL_REDIRECTS = ${JSON.stringify(redirects, null, 2)};
`;

const outputPath = path.join(__dirname, '..', 'src', 'lib', 'service-removal-redirects.ts');
fs.writeFileSync(outputPath, tsContent);

// Also output JSON for review
const jsonPath = path.join(__dirname, '..', 'service-removal-redirects.json');
fs.writeFileSync(jsonPath, JSON.stringify(redirects, null, 2));

console.log(`\n✅ Generated ${redirects.length} new redirects`);
console.log(`   TypeScript: ${outputPath}`);
console.log(`   JSON review: ${jsonPath}`);
console.log(`\nRedirect destinations:`);

const destCounts = {};
redirects.forEach(r => {
  destCounts[r.destination] = (destCounts[r.destination] || 0) + 1;
});
Object.entries(destCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([dest, count]) => {
    console.log(`   ${dest}: ${count} posts`);
  });

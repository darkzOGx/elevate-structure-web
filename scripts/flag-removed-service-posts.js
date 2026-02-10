/**
 * Flag Removed Service Posts as noIndex
 *
 * Adds noIndex: true to all 96 blog posts targeting removed services
 * so they are excluded from the dynamically generated sitemap.
 *
 * Usage: node scripts/flag-removed-service-posts.js
 */

const fs = require('fs');
const path = require('path');

const BLOG_DATA_PATH = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

// All 96 slugs (22 already redirected + 74 new redirects)
const REMOVED_SERVICE_SLUGS = [
  // MEP Engineering (25)
  'mep-engineering-design-in-anaheim',
  'mep-engineering-design-in-la-palma',
  'mep-engineering-design-in-manhattan-beach',
  'mep-engineering-design-in-placentia',
  'mep-engineering-design-in-san-marcos',
  'mep-engineering-services-in-bonita',
  'mep-engineer-near-me-in-carlsbad',
  'mep-engineer-near-me-in-chula-vista',
  'mep-engineer-near-me-in-costa-mesa',
  'mep-engineer-near-me-in-cypress',
  'mep-engineer-near-me-in-del-mar',
  'mep-engineer-near-me-in-fullerton',
  'mep-engineer-near-me-in-glendale',
  'mep-engineer-near-me-in-irvine',
  'mep-engineer-near-me-in-los-alamitos',
  'mep-engineer-near-me-in-ramona',
  'mep-engineer-near-me-in-santa-ana',
  'mep-engineer-near-me-in-westminster',
  'mep-engineer-near-me-in-yorba-linda',
  'mechanical-engineering-companies-in-san-diego',
  'mechanical-engineering-design-in-glendale',
  'mechanical-engineering-design-southern-california',
  'electrical-engineering-design-in-burbank',
  'electrical-engineering-design-in-palm-springs',
  'plumbing-engineering-design-in-san-jacinto',

  // Civil Engineering (20)
  'civil-engineering-design-southern-california',
  'civil-engineer-near-me-in-anaheim',
  'civil-engineer-near-me-in-brentwood',
  'civil-engineer-near-me-in-el-cajon',
  'civil-engineer-near-me-in-fullerton',
  'civil-engineer-near-me-in-garden-grove',
  'civil-engineer-near-me-in-laguna-niguel',
  'civil-engineer-near-me-in-laguna-woods',
  'civil-engineer-near-me-in-la-palma',
  'civil-engineer-near-me-in-long-beach',
  'civil-engineer-near-me-in-oceanside',
  'civil-engineer-near-me-in-san-diego',
  'civil-engineer-near-me-in-san-dimas',
  'civil-engineer-near-me-in-seal-beach',
  'civil-engineer-structural-design-capability',
  'civil-engineer-structural-design-capability-in-san-diego',
  'civil-engineer-structural-design-capability-lake-forest',
  'civil-engineer-structural-design-capability-chino-hills',
  'civil-site-engineering-in-el-segundo',
  'civil-site-development-engineering-in-lake-elsinore',

  // Stormwater (8)
  'stormwater-design-engineer-fullerton',
  'stormwater-design-engineer-in-hermosa-beach',
  'stormwater-design-engineer-in-tustin',
  'stormwater-design-engineer-tustin',
  'stormwater-design-engineer-westminster',
  'stormwater-management-engineering-in-rancho-san-diego',
  'stormwater-management-engineering-in-spring-valley',
  'what-are-stormwater-design-engineer-roles-in-redlands',

  // Grading & Drainage (8)
  'grading-and-drainage-engineering-in-san-jacinto',
  'grading-and-drainage-plans-in-hermosa-beach',
  'grading-and-drainage-plans-in-laguna-woods',
  'grading-and-drainage-plans-in-poway',
  'grading-and-drainage-plans-in-stanton',
  'grading-and-drainage-plans-in-torrance',
  'grading-plan-engineering-in-rancho-san-diego',
  'site-drainage-engineering-in-indio',

  // Septic (6)
  'septic-design-engineers-for-residential-systems-in-upland',
  'septic-design-engineers-in-aliso-viejo',
  'septic-design-engineers-in-redondo-beach',
  'septic-design-engineers-in-westminster',
  'septic-design-engineers-san-clemente',
  'septic-system-engineering-in-perris',

  // Coastal (28)
  'coastal-bluff-engineer-la-jolla',
  'coastal-bluff-engineer-near-me-in-del-mar',
  'coastal-bluff-engineer-near-me-in-laguna-beach',
  'coastal-bluff-foundation-design-in-la-jolla',
  'coastal-bluff-foundation-engineering-in-laguna-beach',
  'coastal-bluff-foundation-engineering-in-san-clemente',
  'coastal-bluff-stabilization-engineering-in-malibu',
  'coastal-bluff-stabilization-in-la-jolla',
  'coastal-bluff-stabilization-in-malibu',
  'coastal-bluff-structural-engineering-in-malibu',
  'coastal-commercial-development-in-huntington-beach',
  'coastal-commercial-renovation-engineering-in-del-mar',
  'coastal-commercial-retrofit-engineering-in-malibu',
  'coastal-commission-engineer-near-me-in-newport-beach',
  'coastal-commission-structural-engineer-malibu',
  'coastal-erosion-structural-solutions-in-corona-del-mar',
  'coastal-foundation-design-in-coronado',
  'coastal-foundation-design-in-la-jolla',
  'coastal-foundation-design-in-newport-beach',
  'coastal-foundation-engineering-in-hermosa-beach',
  'coastal-foundation-engineering-in-la-jolla',
  'coastal-foundation-engineer-near-me-in-san-juan-capistrano',
  'coastal-home-addition-structural-engineering-in-carlsbad',
  'coastal-home-remodel-engineering-in-huntington-beach',
  'coastal-home-structural-engineering-in-huntington-beach',
  'coastal-slope-stabilization-engineering-in-laguna-beach',
  'coastal-structural-engineer-near-me-in-rancho-palos-verdes',
  'structural-engineer-near-me-for-coastal-foundations',

  // ADA Compliance (1)
  'commercial-building-ada-compliance-engineering-in-pasadena',
];

try {
  console.log('Reading blog-data.ts...');
  let content = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');

  let flagged = 0;
  let alreadyFlagged = 0;
  let notFound = 0;

  for (const slug of REMOVED_SERVICE_SLUGS) {
    // Find the post by its id field
    const idPattern = `id: '${slug}'`;

    if (!content.includes(idPattern)) {
      console.log(`  ⚠️  Not found: ${slug}`);
      notFound++;
      continue;
    }

    // Check if already has noIndex
    // Find the position of the id, then check nearby content
    const idIndex = content.indexOf(idPattern);
    const nextPostIndex = content.indexOf("id: '", idIndex + idPattern.length);
    const postBlock = content.substring(idIndex, nextPostIndex > -1 ? nextPostIndex : idIndex + 2000);

    if (postBlock.includes('noIndex: true')) {
      alreadyFlagged++;
      continue;
    }

    // Add noIndex: true after the id line
    content = content.replace(
      idPattern,
      `${idPattern},\n    noIndex: true`
    );
    flagged++;
  }

  fs.writeFileSync(BLOG_DATA_PATH, content);

  console.log(`\n✅ Results:`);
  console.log(`   Flagged with noIndex: ${flagged}`);
  console.log(`   Already flagged: ${alreadyFlagged}`);
  console.log(`   Not found in blog-data.ts: ${notFound}`);
  console.log(`   Total processed: ${REMOVED_SERVICE_SLUGS.length}`);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

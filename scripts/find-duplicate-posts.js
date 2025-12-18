/**
 * Script to identify duplicate blog post IDs in blog-data.ts
 * Run with: node scripts/find-duplicate-posts.js
 */

const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '../src/lib/blog-data.ts');
const content = fs.readFileSync(blogDataPath, 'utf-8');

// Extract all blog post IDs
const idRegex = /id:\s*['"]([^'"]+)['"]/g;
const ids = [];
let match;

while ((match = idRegex.exec(content)) !== null) {
  ids.push({
    id: match[1],
    position: match.index
  });
}

// Find duplicates
const idCounts = {};
const idPositions = {};

ids.forEach((item, index) => {
  if (!idCounts[item.id]) {
    idCounts[item.id] = 0;
    idPositions[item.id] = [];
  }
  idCounts[item.id]++;
  idPositions[item.id].push(index + 1); // 1-indexed for readability
});

// Filter to only duplicates
const duplicates = Object.entries(idCounts)
  .filter(([id, count]) => count > 1)
  .sort((a, b) => b[1] - a[1]); // Sort by count descending

console.log('='.repeat(80));
console.log('DUPLICATE BLOG POST IDS REPORT');
console.log('='.repeat(80));
console.log(`\nTotal blog entries: ${ids.length}`);
console.log(`Unique IDs: ${Object.keys(idCounts).length}`);
console.log(`Duplicate IDs: ${duplicates.length}`);
console.log(`Extra entries to remove: ${ids.length - Object.keys(idCounts).length}`);

console.log('\n' + '='.repeat(80));
console.log('DUPLICATES BY COUNT');
console.log('='.repeat(80));

duplicates.forEach(([id, count]) => {
  console.log(`\n[${count}x] ${id}`);
  console.log(`    Occurrences at entry positions: ${idPositions[id].join(', ')}`);
});

// Also identify malformed slugs (city name repeated)
console.log('\n' + '='.repeat(80));
console.log('MALFORMED SLUGS (Doubled City Names)');
console.log('='.repeat(80));

const malformedRegex = /-([a-z-]+)-\1$/;
const malformed = Object.keys(idCounts).filter(id => malformedRegex.test(id));

console.log(`\nFound ${malformed.length} slugs with repeated city names:\n`);
malformed.forEach(id => {
  const match = id.match(malformedRegex);
  if (match) {
    console.log(`  ${id}`);
    console.log(`    -> Should be: ${id.replace(malformedRegex, '-$1')}`);
  }
});

// Output JSON for programmatic use
const report = {
  totalEntries: ids.length,
  uniqueIds: Object.keys(idCounts).length,
  duplicateCount: duplicates.length,
  extraEntries: ids.length - Object.keys(idCounts).length,
  duplicates: duplicates.map(([id, count]) => ({ id, count, positions: idPositions[id] })),
  malformedSlugs: malformed
};

fs.writeFileSync(
  path.join(__dirname, 'duplicate-report.json'),
  JSON.stringify(report, null, 2)
);

console.log('\n' + '='.repeat(80));
console.log('Report saved to scripts/duplicate-report.json');
console.log('='.repeat(80));

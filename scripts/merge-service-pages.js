/**
 * Merge service page batches into services-data.ts
 * Usage: node scripts/merge-service-pages.js
 */
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..');
const servicesPath = path.join(base, 'src', 'lib', 'services-data.ts');
const batch1Path = path.join(base, 'tasks', 'service-pages-batch1.ts');
const batch2Path = path.join(base, 'tasks', 'service-pages-batch2.ts');
const batch3Path = path.join(base, 'tasks', 'service-pages-batch3.ts');

let content = fs.readFileSync(servicesPath, 'utf-8');
let batch1 = fs.readFileSync(batch1Path, 'utf-8').trim();
let batch2 = fs.readFileSync(batch2Path, 'utf-8').trim();
let batch3 = fs.readFileSync(batch3Path, 'utf-8').trim();

// Remove any comment headers from batch3
batch3 = batch3.replace(/^\/\/.*\n/gm, '').trim();

// Combine all batches with proper comma separation
const allNew = [batch1, batch2, batch3].join(',\n');

// Normalize line endings to \n for processing
content = content.replace(/\r\n/g, '\n');

// Find the closing bracket of the SERVICES_DATA array
// The last "  }\n]" before the helper functions
const closingIndex = content.indexOf('\n]\n\n// Helper functions');

if (closingIndex === -1) {
  console.error('Could not find the SERVICES_DATA array closing pattern');
  console.error('Looking for: \\n]\\n\\n// Helper functions');
  // Debug: show characters around line 895
  const lines = content.split('\n');
  for (let i = 892; i < 900 && i < lines.length; i++) {
    console.error(`Line ${i+1}: |${lines[i]}|`);
  }
  process.exit(1);
}

// Insert new services before the ]
const before = content.substring(0, closingIndex);
const after = content.substring(closingIndex);
content = before + ',\n  ' + allNew + after;

// Restore \r\n if the original file used it
content = content.replace(/\n/g, '\r\n');

fs.writeFileSync(servicesPath, content);

// Count services
const idMatches = content.match(/id: '/g);
console.log(`Total services in file: ${idMatches ? idMatches.length : 'unknown'}`);
console.log(`File lines: ${content.split('\n').length}`);
console.log('Done!');

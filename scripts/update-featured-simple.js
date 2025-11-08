const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

// Read the file as lines
let content = fs.readFileSync(blogDataPath, 'utf-8');
let lines = content.split('\n');

let updatedCount = 0;
const targetDate = '2025-11-08';

// Find all posts with date 2025-11-08 and set first 3 to featured
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(`date: '${targetDate}'`)) {
    // Look ahead for featured: false
    for (let j = i; j < i + 10 && j < lines.length; j++) {
      if (lines[j].includes('featured: false,')) {
        if (updatedCount < 3) {
          lines[j] = lines[j].replace('featured: false,', 'featured: true,');
          console.log(`✓ Updated post at line ${j + 1} to featured: true`);
          updatedCount++;
        }
        break;
      }
    }
  }
}

// Write back
fs.writeFileSync(blogDataPath, lines.join('\n'), 'utf-8');

console.log(`\n✅ Updated ${updatedCount} November 8 posts to featured status`);

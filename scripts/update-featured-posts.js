const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

// Read the file
let content = fs.readFileSync(blogDataPath, 'utf-8');

// IDs of the new Nov 8 posts to feature
const nov8PostIds = [
  'what-is-engineering-design-in-dana-point-dana-point',
  'stormwater-design-engineer-in-westminster-westminster',
  'best-structural-engineering-firms-in-orange-ca-orange-ca',
];

// Update featured status for these specific posts
nov8PostIds.forEach(postId => {
  // Find the post and change featured: false to featured: true
  const regex = new RegExp(
    `(id: '${postId}',[\\s\\S]*?featured: )false,`,
    'g'
  );

  const before = content;
  content = content.replace(regex, '$1true,');

  if (content !== before) {
    console.log(`✓ Updated ${postId} to featured: true`);
  } else {
    console.log(`✗ Could not find ${postId}`);
  }
});

// Write back
fs.writeFileSync(blogDataPath, content, 'utf-8');

console.log('\n✅ Updated 3 November 8 posts to featured status');
console.log('These posts will now appear in Featured Articles section');

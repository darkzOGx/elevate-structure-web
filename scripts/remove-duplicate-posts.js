/**
 * Script to remove duplicate blog post entries from blog-data.ts
 * Keeps the FIRST occurrence of each duplicate ID
 * Run with: node scripts/remove-duplicate-posts.js
 */

const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '../src/lib/blog-data.ts');
const backupPath = path.join(__dirname, '../src/lib/blog-data.backup.ts');

// Read the file
let content = fs.readFileSync(blogDataPath, 'utf-8');

// Create backup first
fs.writeFileSync(backupPath, content);
console.log(`Backup created at: ${backupPath}`);

// Find the BLOG_POSTS array
const arrayStartMatch = content.match(/export const BLOG_POSTS[^=]*=\s*\[/);
if (!arrayStartMatch) {
  console.error('Could not find BLOG_POSTS array');
  process.exit(1);
}

const arrayStartIndex = arrayStartMatch.index + arrayStartMatch[0].length;

// Find all blog post objects
// Match objects that start with { and contain id: '...'
const postRegex = /\{\s*\n?\s*id:\s*['"]([^'"]+)['"]/g;
const posts = [];
let match;
let searchContent = content.substring(arrayStartIndex);

// We need to extract each complete post object
// This is tricky because posts can have nested objects (relatedArticles, etc.)

// Better approach: find each post by matching the pattern and extracting the full object
let tempContent = content;
const seenIds = new Set();
const duplicateRanges = [];

// Find all id declarations and their positions
const idMatches = [...content.matchAll(/\{\s*\n?\s*id:\s*['"]([^'"]+)['"]/g)];

console.log(`\nFound ${idMatches.length} blog post entries`);

// For each match, determine if it's a duplicate
idMatches.forEach((match, index) => {
  const id = match[1];
  const position = match.index;

  if (seenIds.has(id)) {
    // This is a duplicate - we need to find and remove this entire post object
    duplicateRanges.push({
      id,
      startIndex: position,
      matchIndex: index
    });
  } else {
    seenIds.add(id);
  }
});

console.log(`Found ${duplicateRanges.length} duplicate entries to remove`);

if (duplicateRanges.length === 0) {
  console.log('No duplicates found!');
  process.exit(0);
}

// Now we need to find the complete object for each duplicate and remove it
// We'll work backwards to preserve indices

// Find the end of each post object (matching closing brace)
function findObjectEnd(content, startIndex) {
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (inString) {
      if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        return i;
      }
    }
  }

  return -1;
}

// Process duplicates in reverse order to maintain indices
const sortedDuplicates = duplicateRanges.sort((a, b) => b.startIndex - a.startIndex);

let modifiedContent = content;
let removedCount = 0;

sortedDuplicates.forEach((dup) => {
  const endIndex = findObjectEnd(modifiedContent, dup.startIndex);

  if (endIndex === -1) {
    console.error(`Could not find end of object for id: ${dup.id}`);
    return;
  }

  // Find the comma after the object (if any)
  let removeEnd = endIndex + 1;
  const afterObject = modifiedContent.substring(endIndex + 1, endIndex + 50);
  const commaMatch = afterObject.match(/^\s*,/);
  if (commaMatch) {
    removeEnd = endIndex + 1 + commaMatch[0].length;
  }

  // Also include any leading whitespace/newlines
  let removeStart = dup.startIndex;
  const beforeObject = modifiedContent.substring(Math.max(0, dup.startIndex - 50), dup.startIndex);
  const leadingMatch = beforeObject.match(/,?\s*$/);
  if (leadingMatch) {
    removeStart = dup.startIndex - leadingMatch[0].length;
    // Keep at least one newline for formatting
    if (removeStart > 0 && modifiedContent[removeStart] === ',') {
      removeStart++; // Keep the comma from the previous entry
    }
  }

  // Remove the duplicate
  const before = modifiedContent.substring(0, removeStart);
  const after = modifiedContent.substring(removeEnd);
  modifiedContent = before + after;
  removedCount++;

  console.log(`Removed duplicate: ${dup.id}`);
});

// Write the modified content
fs.writeFileSync(blogDataPath, modifiedContent);

console.log(`\n${'='.repeat(60)}`);
console.log(`Successfully removed ${removedCount} duplicate entries`);
console.log(`Original backup saved to: ${backupPath}`);
console.log(`${'='.repeat(60)}`);

// Verify the result
const verifyContent = fs.readFileSync(blogDataPath, 'utf-8');
const verifyIds = [...verifyContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const verifyUnique = new Set(verifyIds);

console.log(`\nVerification:`);
console.log(`Total entries now: ${verifyIds.length}`);
console.log(`Unique IDs: ${verifyUnique.size}`);

if (verifyIds.length === verifyUnique.size) {
  console.log('✓ All duplicates removed successfully!');
} else {
  console.log(`⚠ Still ${verifyIds.length - verifyUnique.size} duplicates remaining`);
}

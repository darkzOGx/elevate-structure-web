const fs = require('fs');
const path = require('path');

const dir = 'blog-posts-nov-17-2025';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the JSON frontmatter
  const jsonEndMatch = content.match(/\n}\n/);
  if (!jsonEndMatch) {
    console.error(`${file}: Could not find JSON end`);
    return;
  }

  const jsonEndIndex = jsonEndMatch.index + 2; // Include the }
  let jsonStr = content.substring(0, jsonEndIndex);
  let restContent = content.substring(jsonEndIndex);

  // Clean up JSON - remove any weird newlines/quotes
  try {
    // Remove the opening { and closing }
    let jsonLines = jsonStr.split('\n');
    // Remove empty lines and lines with just quotes
    jsonLines = jsonLines.filter(line => {
      const trimmed = line.trim();
      return trimmed !== '' && trimmed !== '"' && trimmed !== '",';
    });

    // Fix lines that start with quote but shouldn't
    for (let i = 0; i < jsonLines.length; i++) {
      let line = jsonLines[i];
      // If line starts with just a quote followed by quote (like   "  "category"), fix it
      if (/^\s+"\s+"/.test(line)) {
        jsonLines[i] = line.replace(/^\s+"\s+"/, '  "');
      }
    }

    jsonStr = jsonLines.join('\n');

    // Try to parse to validate
    const parsed = JSON.parse(jsonStr);

    // Re-stringify cleanly
    jsonStr = JSON.stringify(parsed, null, 2);

    // Remove whitespace at start of restContent
    restContent = restContent.trim();

    // Ensure proper separator
    if (!restContent.startsWith('---')) {
      restContent = '---\n\n' + restContent;
    } else if (!restContent.startsWith('---\n\n')) {
      restContent = restContent.replace(/^---\n?/, '---\n\n');
    }

    // Write back with proper format: JSON\n\n---\n\nContent
    const finalContent = jsonStr + '\n\n' + restContent;
    fs.writeFileSync(filePath, finalContent);
    console.log(`${file}: ✓ Fixed and validated`);

  } catch (e) {
    console.error(`${file}: Error - ${e.message}`);
    console.error('JSON content:', jsonStr.substring(0, 200));
  }
});

console.log('\nAll files processed!');

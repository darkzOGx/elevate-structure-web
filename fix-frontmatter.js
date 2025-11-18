const fs = require('fs');
const path = require('path');

const dir = 'blog-posts-nov-17-2025';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract YAML frontmatter if it exists
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!yamlMatch) {
    // Check if already JSON
    if (content.startsWith('{')) {
      console.log(`${file}: Already JSON, fixing format...`);
      // Extract JSON part
      const jsonEnd = content.indexOf('\n}') + 2;
      let jsonStr = content.substring(0, jsonEnd);
      const restContent = content.substring(jsonEnd);

      // Clean up JSON - remove extra newlines, fix formatting
      try {
        // Parse and re-stringify to clean format
        const lines = jsonStr.split('\n');
        const cleanLines = lines.filter((line, idx) => {
          if (idx === 0) return true; // Keep opening {
          if (idx === lines.length - 1) return true; // Keep closing }
          return line.trim() !== ''; // Remove empty lines
        });

        // Fix any lines that don't have proper quotes
        for (let i = 1; i < cleanLines.length - 1; i++) {
          let line = cleanLines[i];
          // If line starts with a letter (not quote or space), add quote before it
          if (/^[a-z]/i.test(line.trim())) {
            cleanLines[i] = '  "' + line.trim();
          } else if (line.trim().startsWith('"') && !line.includes(':')) {
            // Line has opening quote but no colon - might be split
            cleanLines[i] = line;
          }
        }

        jsonStr = cleanLines.join('\n');
        fs.writeFileSync(filePath, jsonStr + '\n' + restContent);
        console.log(`${file}: Fixed`);
      } catch (e) {
        console.error(`${file}: Error - ${e.message}`);
      }
      return;
    }
    console.log(`${file}: No YAML frontmatter found, skipping`);
    return;
  }

  const yamlContent = yamlMatch[1];
  const restContent = content.substring(yamlMatch[0].length);

  // Parse YAML manually (simple approach for this structure)
  const lines = yamlContent.split('\n');
  const obj = {};
  let currentKey = null;

  lines.forEach(line => {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const [, key, value] = match;

      if (value.startsWith('"') && value.endsWith('"')) {
        obj[key] = value.slice(1, -1);
      } else if (value.startsWith('[')) {
        // Array
        obj[key] = JSON.parse(value.replace(/'/g, '"'));
      } else if (value === 'true' || value === 'false') {
        obj[key] = value === 'true';
      } else if (value === '') {
        // Nested object
        currentKey = key;
        obj[key] = {};
      } else {
        obj[key] = value;
      }
    } else if (line.trim().startsWith('articleType:') || line.trim().startsWith('professionalService:') || line.trim().startsWith('localBusiness:')) {
      const nestedMatch = line.trim().match(/^(\w+):\s*(.*)$/);
      if (nestedMatch && currentKey) {
        const [, nestedKey, nestedValue] = nestedMatch;
        if (nestedValue.startsWith('"') && nestedValue.endsWith('"')) {
          obj[currentKey][nestedKey] = nestedValue.slice(1, -1);
        } else if (nestedValue === 'true' || nestedValue === 'false') {
          obj[currentKey][nestedKey] = nestedValue === 'true';
        } else {
          obj[currentKey][nestedKey] = nestedValue;
        }
      }
    }
  });

  // Convert to JSON frontmatter
  const jsonFrontmatter = JSON.stringify(obj, null, 2);

  // Write back
  fs.writeFileSync(filePath, jsonFrontmatter + '\n' + restContent);
  console.log(`${file}: Converted YAML to JSON`);
});

console.log('\nConversion complete!');

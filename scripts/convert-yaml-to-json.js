const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || 'blog-posts-jan-9-2026';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

console.log('Converting ' + files.length + ' files in ' + dir);

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');

  // Check if already JSON format
  if (content.startsWith('{')) {
    console.log(file + ' - Already JSON format');
    return;
  }

  // Parse YAML frontmatter
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!yamlMatch) {
    console.log(file + ' - No YAML frontmatter found');
    return;
  }

  const yamlContent = yamlMatch[1];
  const restContent = content.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Parse YAML to object
  const obj = {};
  const lines = yamlContent.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Handle arrays (keywords)
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          obj[key] = JSON.parse(value);
        } catch(e) {
          obj[key] = value;
        }
      } else {
        obj[key] = value;
      }
    }
  }

  // Create JSON frontmatter
  const jsonFrontmatter = JSON.stringify(obj, null, 2);

  // Rebuild file with JSON frontmatter
  const newContent = jsonFrontmatter + '\n\n---\n\n' + restContent.trim() + '\n';

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(file + ' - Converted to JSON format');
});

console.log('Done!');

const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || 'blog-posts-nov-19-2025';
const dirPath = path.join(__dirname, '..', dir);

if (!fs.existsSync(dirPath)) {
  console.error('Directory not found:', dirPath);
  process.exit(1);
}

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already JSON format
  if (content.startsWith('{')) {
    console.log('Already JSON:', file);
    return;
  }

  // Extract YAML frontmatter
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n\n/);
  if (!yamlMatch) {
    console.log('No YAML found in', file);
    return;
  }

  const yamlContent = yamlMatch[1];
  const mainContent = content.replace(/^---\n[\s\S]*?\n---\n\n/, '');

  // Parse YAML to JSON
  const json = {};
  const lines = yamlContent.split('\n');

  for (const line of lines) {
    // Skip empty lines and nested schema properties
    if (!line.trim() || line.startsWith('  ')) continue;

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    if (key === 'schema') {
      // Handle schema as nested object
      json.schema = {
        articleType: "TechnicalArticle",
        professionalService: true,
        localBusiness: true
      };
    } else if (value.startsWith('[')) {
      // Array
      try {
        json[key] = JSON.parse(value);
      } catch (e) {
        json[key] = value;
      }
    } else if (value.startsWith('"') && value.endsWith('"')) {
      json[key] = value.slice(1, -1);
    } else if (value === 'true') {
      json[key] = true;
    } else if (value === 'false') {
      json[key] = false;
    } else {
      json[key] = value;
    }
  }

  // Write JSON format
  const newContent = JSON.stringify(json, null, 2) + '\n\n---\n\n' + mainContent;
  fs.writeFileSync(filePath, newContent);
  console.log('Converted:', file);
});

console.log('\nDone! Converted', files.length, 'files');

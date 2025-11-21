const fs = require('fs');
const path = require('path');

function convertYamlToJson(yamlContent) {
  const lines = yamlContent.split('\n');
  const jsonObj = {};

  for (const line of lines) {
    if (line.trim() === '---' || line.trim() === '') continue;

    // Handle array format (keywords)
    if (line.includes('[')) {
      const [key, value] = line.split(':').map(s => s.trim());
      jsonObj[key] = JSON.parse(value);
    } else {
      const [key, ...valueParts] = line.split(':');
      let value = valueParts.join(':').trim();

      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }

      jsonObj[key.trim()] = value;
    }
  }

  return jsonObj;
}

function convertFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract YAML frontmatter
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!yamlMatch) {
    console.log(`Skipping ${path.basename(filePath)} - no YAML frontmatter found`);
    return;
  }

  const yamlContent = yamlMatch[1];
  const mainContent = content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();

  // Convert YAML to JSON object
  const jsonObj = convertYamlToJson(yamlContent);

  // Add schema if not present
  if (!jsonObj.schema) {
    jsonObj.schema = {
      articleType: "TechnicalArticle",
      professionalService: true,
      localBusiness: true
    };
  }

  // Create new content with JSON frontmatter
  const newContent = `${JSON.stringify(jsonObj, null, 2)}

---

${mainContent}
`;

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✅ Converted ${path.basename(filePath)}`);
}

// Main
const blogDir = process.argv[2] || 'blog-posts-nov-21-2025';
const dirPath = path.join(__dirname, '..', blogDir);

if (!fs.existsSync(dirPath)) {
  console.error(`Directory not found: ${dirPath}`);
  process.exit(1);
}

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
console.log(`Converting ${files.length} markdown files...\n`);

files.forEach(file => {
  convertFile(path.join(dirPath, file));
});

console.log(`\n✅ Conversion complete!`);

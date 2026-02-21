/**
 * Add blog posts from markdown files with YAML frontmatter.
 * Handles both NEW posts (appended) and REFRESH posts (replace existing).
 *
 * Usage: node scripts/add-refresh-posts.js [directory]
 * Default: auto-detects most recent blog-posts-* directory
 */

const fs = require('fs');
const path = require('path');

// Find the blog posts directory
let blogDir = process.argv[2];
if (!blogDir) {
  const dirs = fs.readdirSync('.').filter(d => d.startsWith('blog-posts-') && fs.statSync(d).isDirectory());
  dirs.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  blogDir = dirs[0];
}

if (!blogDir) {
  console.error('No blog-posts directory found');
  process.exit(1);
}

console.log(`📁 Processing: ${blogDir}`);

// Parse YAML-ish frontmatter (simple parser for our specific format)
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const yamlStr = match[1];
  const meta = {};

  // Parse line by line
  const lines = yamlStr.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const kvMatch = line.match(/^(\w+):\s*(.+)$/);
    if (kvMatch) {
      let [, key, value] = kvMatch;
      // Remove quotes
      value = value.replace(/^["']|["']$/g, '');
      // Handle arrays
      if (value.startsWith('[')) {
        try {
          meta[key] = JSON.parse(value);
        } catch {
          meta[key] = value;
        }
      } else if (value === 'true') {
        meta[key] = true;
      } else if (value === 'false') {
        meta[key] = false;
      } else {
        meta[key] = value;
      }
    }
  }

  const body = content.replace(/^---\n[\s\S]*?\n---\n\n?/, '');
  return { meta, body };
}

// Escape content for TypeScript template literal
function escapeForTS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

// Read all markdown files
const files = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
    return numA - numB;
  });

console.log(`📝 Found ${files.length} markdown files`);

const refreshPosts = [];
const newPosts = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8').replace(/\r\n/g, '\n');
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.error(`  ❌ Failed to parse: ${file}`);
    continue;
  }

  const { meta, body } = parsed;

  if (meta.isRefresh) {
    refreshPosts.push({ file, meta, body });
    console.log(`  🔄 REFRESH: ${meta.slug || meta.originalSlug} (${file})`);
  } else {
    newPosts.push({ file, meta, body });
    console.log(`  ✨ NEW: ${meta.slug} (${file})`);
  }
}

// Read blog-data.ts
const blogDataPath = 'src/lib/blog-data.ts';
let blogData = fs.readFileSync(blogDataPath, 'utf-8');

// Process REFRESH posts - update existing entries
let refreshCount = 0;
for (const post of refreshPosts) {
  const slug = post.meta.originalSlug || post.meta.slug;

  // Find the post in blog-data.ts
  const idPattern = `id: '${slug}'`;
  const idx = blogData.indexOf(idPattern);

  if (idx === -1) {
    console.log(`  ⚠️  Slug not found for refresh: ${slug} - adding as new instead`);
    newPosts.push(post);
    continue;
  }

  // Find the opening { of this post object
  let braceStart = idx;
  while (braceStart > 0 && blogData[braceStart] !== '{') braceStart--;
  // Verify this is a post object start (should have whitespace before {)
  if (braceStart <= 0) {
    console.log(`  ⚠️  Could not find object start for: ${slug}`);
    continue;
  }

  // Find the matching closing } by counting braces
  let depth = 0;
  let braceEnd = braceStart;
  let inString = false;
  let inTemplate = false;
  let templateDepth = 0;

  for (let i = braceStart; i < blogData.length; i++) {
    const ch = blogData[i];
    const prev = i > 0 ? blogData[i-1] : '';

    if (ch === '`' && prev !== '\\') {
      inTemplate = !inTemplate;
      continue;
    }

    if (inTemplate) {
      if (ch === '{' && prev === '$') templateDepth++;
      else if (ch === '}' && templateDepth > 0) templateDepth--;
      continue;
    }

    if (ch === "'" && prev !== '\\') {
      inString = !inString;
      continue;
    }

    if (inString) continue;

    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        braceEnd = i;
        break;
      }
    }
  }

  // Build replacement post
  const escapedContent = escapeForTS(post.body);
  const title = post.meta.title.replace(/'/g, "\\'");
  const excerpt = (post.meta.excerpt || '').replace(/'/g, "\\'");

  const relatedArticles = [];
  // Extract internal links from content for related articles
  const linkMatches = post.body.matchAll(/\[([^\]]+)\]\(\/blog\/([^)]+)\)/g);
  for (const m of linkMatches) {
    if (relatedArticles.length < 3) relatedArticles.push(m[2]);
  }

  const replacement = `{
    id: '${slug}',
    title: '${title}',
    excerpt: '${excerpt}',
    category: '${post.meta.category || 'Structural Engineering'}',
    date: '${post.meta.date || '2026-02-21'}',
    lastUpdated: '${post.meta.lastUpdated || '2026-02-21'}',
    readTime: '${post.meta.readTime || '12 min read'}',
    author: '${post.meta.author || 'AAA Engineering Team'}',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    featured: ${post.meta.featured || false},
    contentType: '${post.meta.contentType || 'cluster'}' as const,
    hubPage: '${post.meta.hubPage || ''}',
    topicCluster: '${post.meta.topicCluster || 'structural-engineering'}',
    primaryKeyword: '${post.meta.primaryKeyword || ''}',
    secondaryKeywords: ${JSON.stringify(post.meta.secondaryKeywords || [])},
    geoTarget: '${post.meta.geoTarget || ''}',
    relatedArticles: ${JSON.stringify(relatedArticles)},
    content: \`${escapedContent}\`
  }`;

  blogData = blogData.substring(0, braceStart) + replacement + blogData.substring(braceEnd + 1);
  refreshCount++;
  console.log(`  ✅ Refreshed: ${slug}`);
}

// Process NEW posts - add before helper functions
let newCount = 0;
if (newPosts.length > 0) {
  // Find insertion point - before "// Helper functions" comment
  const helperIdx = blogData.indexOf('// Helper functions');
  if (helperIdx === -1) {
    console.error('Could not find "// Helper functions" marker');
    process.exit(1);
  }

  // Find the ] that closes BLOG_POSTS array before the helper comment
  let insertIdx = helperIdx;
  while (insertIdx > 0 && blogData[insertIdx] !== ']') insertIdx--;

  if (insertIdx <= 0) {
    console.error('Could not find BLOG_POSTS array closing bracket');
    process.exit(1);
  }

  // Build new post entries
  let newEntries = '';
  for (const post of newPosts) {
    const escapedContent = escapeForTS(post.body);
    const title = post.meta.title.replace(/'/g, "\\'");
    const excerpt = (post.meta.excerpt || '').replace(/'/g, "\\'");
    const slug = post.meta.slug;

    const relatedArticles = [];
    const linkMatches = post.body.matchAll(/\[([^\]]+)\]\(\/blog\/([^)]+)\)/g);
    for (const m of linkMatches) {
      if (relatedArticles.length < 3) relatedArticles.push(m[2]);
    }

    const featured = newCount < 1; // First new post gets featured

    newEntries += `  {
    id: '${slug}',
    title: '${title}',
    excerpt: '${excerpt}',
    category: '${post.meta.category || 'Foundation Engineering'}',
    date: '${post.meta.date || '2026-02-21'}',
    lastUpdated: '${post.meta.lastUpdated || '2026-02-21'}',
    readTime: '${post.meta.readTime || '12 min read'}',
    author: '${post.meta.author || 'AAA Engineering Team'}',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    featured: ${featured},
    contentType: '${post.meta.contentType || 'cluster'}' as const,
    hubPage: '${post.meta.hubPage || ''}',
    topicCluster: '${post.meta.topicCluster || 'foundation-engineering'}',
    primaryKeyword: '${post.meta.primaryKeyword || ''}',
    secondaryKeywords: ${JSON.stringify(post.meta.secondaryKeywords || [])},
    geoTarget: '${post.meta.geoTarget || ''}',
    relatedArticles: ${JSON.stringify(relatedArticles)},
    content: \`${escapedContent}\`
  },\n`;

    newCount++;
    console.log(`  ✅ Added new: ${slug}`);
  }

  // Insert before the ]
  blogData = blogData.substring(0, insertIdx) + newEntries + blogData.substring(insertIdx);
}

// Write back
const fd = fs.openSync(blogDataPath, 'w');
fs.writeSync(fd, blogData);
fs.closeSync(fd);

console.log(`\n✅ Done! Refreshed: ${refreshCount}, New: ${newCount}, Total: ${refreshCount + newCount}`);

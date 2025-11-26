const fs = require('fs');
const path = require('path');

// Function to convert title to slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Function to extract city from title
function extractCity(title) {
  const match = title.match(/in ([^:]+):/);
  return match ? match[1] : '';
}

// Function to parse markdown file
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract JSON frontmatter
  const frontmatterMatch = content.match(/^{[\s\S]*?}\n\n---\n\n/);
  if (!frontmatterMatch) {
    console.error(`No frontmatter found in ${filePath}`);
    return null;
  }

  const frontmatter = JSON.parse(frontmatterMatch[0].replace(/\n\n---\n\n$/, ''));

  // Extract main content (skip frontmatter and schema at end)
  let mainContent = content.replace(/^{[\s\S]*?}\n\n---\n\n/, '');

  // Remove schema markup section at the end
  mainContent = mainContent.replace(/---\n\n\*\*Schema Markup:\*\*[\s\S]*$/, '');

  // Remove the first H1 title (it's already in the frontmatter)
  mainContent = mainContent.replace(/^#[^\n]+\n\n/, '');

  // Clean up trailing whitespace
  mainContent = mainContent.trim();

  return {
    frontmatter,
    content: mainContent
  };
}

// Function to create excerpt from content
function createExcerpt(content) {
  // Get first paragraph after removing markdown formatting
  const firstParagraph = content
    .split('\n\n')[0]
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links
    .replace(/\*\*([^\*]+)\*\*/g, '$1') // Remove bold
    .replace(/##+/g, '') // Remove headers
    .trim();

  // Limit to ~150 characters
  if (firstParagraph.length > 150) {
    return firstParagraph.substring(0, 147) + '...';
  }
  return firstParagraph;
}

// Main function
function addBlogPosts() {
  // Auto-detect the most recent blog-posts directory or use command line arg
  const rootDir = path.join(__dirname, '..');
  let blogPostsDir;

  if (process.argv[2]) {
    // Use specified directory from command line
    blogPostsDir = path.join(rootDir, process.argv[2]);
  } else {
    // Auto-detect: find the most recent blog-posts-* directory
    const allDirs = fs.readdirSync(rootDir)
      .filter(name => name.startsWith('blog-posts-') && fs.statSync(path.join(rootDir, name)).isDirectory())
      .sort()
      .reverse();

    if (allDirs.length === 0) {
      console.error('❌ No blog-posts-* directories found!');
      console.log('💡 Usage: node scripts/add-blog-posts.js [blog-posts-directory]');
      process.exit(1);
    }

    blogPostsDir = path.join(rootDir, allDirs[0]);
    console.log(`📁 Auto-detected directory: ${allDirs[0]}`);
  }

  if (!fs.existsSync(blogPostsDir)) {
    console.error(`❌ Directory not found: ${blogPostsDir}`);
    process.exit(1);
  }

  const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

  // Read all markdown files
  const files = fs.readdirSync(blogPostsDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`Found ${files.length} markdown files to process`);

  const newPosts = [];

  // Process each file
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(blogPostsDir, file);
    console.log(`Processing ${file}...`);

    const parsed = parseMarkdownFile(filePath);
    if (!parsed) continue;

    const { frontmatter, content } = parsed;
    // Just use the title before the colon - it already contains the city name
    const slug = titleToSlug(frontmatter.title.split(':')[0]);

    // Automatically feature the first 3 posts (most recent batch)
    const isFeatured = i < 3;

    // Use date from frontmatter or today's date
    const publishDate = frontmatter.publishDate
      ? new Date(frontmatter.publishDate).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0];

    // Create BlogPost object
    const blogPost = {
      id: slug,
      title: frontmatter.title,
      excerpt: frontmatter.metaDescription || createExcerpt(content),
      category: frontmatter.category,
      date: publishDate,
      readTime: frontmatter.readTime,
      author: frontmatter.author,
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?w=800&h=400&fit=crop',
      featured: isFeatured,
      content: content
    };

    newPosts.push(blogPost);
    const featuredStatus = isFeatured ? '⭐ FEATURED' : '';
    console.log(`  → Created post: ${slug} ${featuredStatus}`);
  }

  // Read existing blog-data.ts
  let blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');

  // Find the closing bracket of BLOG_POSTS array (before helper functions)
  const helperFunctionsIndex = blogDataContent.indexOf('// Helper functions');
  if (helperFunctionsIndex === -1) {
    console.error('Could not find helper functions comment');
    return;
  }

  // Find the last closing bracket before helper functions
  const blogPostsSection = blogDataContent.substring(0, helperFunctionsIndex);
  const closingBracketIndex = blogPostsSection.lastIndexOf(']');

  if (closingBracketIndex === -1) {
    console.error('Could not find closing bracket for BLOG_POSTS array');
    return;
  }

  // Generate TypeScript code for new posts
  const newPostsCode = newPosts.map(post => {
    return `  {
    id: '${post.id}',
    title: \`${post.title}\`,
    excerpt: \`${post.excerpt}\`,
    category: '${post.category}',
    date: '${post.date}',
    readTime: '${post.readTime}',
    author: '${post.author}',
    image: '${post.image}',
    featured: ${post.featured},
    content: \`${post.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
  },`;
  }).join('\n');

  // Insert new posts before the closing bracket
  const beforeClosing = blogDataContent.substring(0, closingBracketIndex);
  const afterClosing = blogDataContent.substring(closingBracketIndex);

  const updatedContent = beforeClosing + newPostsCode + '\n' + afterClosing;

  // Write back to file
  fs.writeFileSync(blogDataPath, updatedContent, 'utf-8');

  console.log(`\n✅ Successfully added ${newPosts.length} blog posts to blog-data.ts`);

  const featuredCount = newPosts.filter(p => p.featured).length;
  console.log(`⭐ ${featuredCount} posts set as FEATURED (will appear in Featured Articles section)`);

  console.log('\nAdded posts:');
  newPosts.forEach((post, index) => {
    const star = post.featured ? '⭐' : '  ';
    console.log(`${star} ${index + 1}. ${post.title} (${post.id})`);
  });

  console.log('\n💡 Tip: The first 3 posts are automatically featured to appear on the homepage.');
}

// Run the script
try {
  addBlogPosts();
} catch (error) {
  console.error('Error adding blog posts:', error);
  process.exit(1);
}

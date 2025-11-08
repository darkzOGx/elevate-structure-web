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
  const blogPostsDir = path.join(__dirname, '..', 'blog-posts-nov-8-2025');
  const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

  // Read all markdown files
  const files = fs.readdirSync(blogPostsDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`Found ${files.length} markdown files to process`);

  const newPosts = [];

  // Process each file
  for (const file of files) {
    const filePath = path.join(blogPostsDir, file);
    console.log(`Processing ${file}...`);

    const parsed = parseMarkdownFile(filePath);
    if (!parsed) continue;

    const { frontmatter, content } = parsed;
    const city = extractCity(frontmatter.title);
    const baseSlug = titleToSlug(frontmatter.title.split(':')[0]);
    const slug = city ? `${baseSlug}-${titleToSlug(city)}` : baseSlug;

    // Create BlogPost object
    const blogPost = {
      id: slug,
      title: frontmatter.title,
      excerpt: frontmatter.metaDescription || createExcerpt(content),
      category: frontmatter.category,
      date: '2025-11-08',
      readTime: frontmatter.readTime,
      author: frontmatter.author,
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?w=800&h=400&fit=crop',
      featured: false,
      content: content
    };

    newPosts.push(blogPost);
    console.log(`  → Created post: ${slug}`);
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
  console.log('\nAdded posts:');
  newPosts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title} (${post.id})`);
  });
}

// Run the script
try {
  addBlogPosts();
} catch (error) {
  console.error('Error adding blog posts:', error);
  process.exit(1);
}

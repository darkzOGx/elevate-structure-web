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
    // Try to extract city from various patterns
    const patterns = [
        /in ([^:]+):/i,
        /near me in ([^:]+)/i,
        /near me ([^:]+):/i,
    ];

    for (const pattern of patterns) {
        const match = title.match(pattern);
        if (match) return match[1].trim();
    }

    return '';
}

// Function to parse our markdown format
function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract title (first H1)
    const titleMatch = content.match(/^# (.+)$/m);
    if (!titleMatch) {
        console.error(`No title found in ${filePath}`);
        return null;
    }
    const title = titleMatch[1];

    // Extract metadata from the top section (before ## Meta Information)
    const categoryMatch = content.match(/\*\*Category:\*\* (.+)/);
    const publishedMatch = content.match(/\*\*Published:\*\* (.+)/);
    const readTimeMatch = content.match(/\*\*Read Time:\*\* (.+)/);
    const authorMatch = content.match(/\*\*Author:\*\* (.+)/);

    // Extract metadata from ## Meta Information section
    // Use [\s\S] to match any character including newlines, and make it non-greedy
    const metaMatch = content.match(/## Meta Information[\r\n]+([\s\S]*?)[\r\n]+---/);
    if (!metaMatch) {
        console.error(`No meta information found in ${filePath}`);
        console.error(`File starts with: ${content.substring(0, 200)}`);
        return null;
    }

    const metaText = metaMatch[1];
    const metaDescMatch = metaText.match(/- \*\*Meta Description:\*\* (.+)/);
    const keywordsMatch = metaText.match(/- \*\*Keywords:\*\* (.+)/);

    // Extract main content (everything after the first ---)
    const dashIndex = content.indexOf('---');
    if (dashIndex === -1) {
        console.error(`No --- separator found in ${filePath}`);
        return null;
    }

    // Find the end of the --- line
    const contentStart = content.indexOf('\n', dashIndex) + 1;
    let mainContent = content.substring(contentStart).trim();

    return {
        title: title,
        category: categoryMatch ? categoryMatch[1] : 'Design & Planning',
        publishDate: publishedMatch ? publishedMatch[1] : 'November 23, 2025',
        readTime: readTimeMatch ? readTimeMatch[1] : '12 min read',
        author: authorMatch ? authorMatch[1] : 'AAA Engineering Team',
        metaDescription: metaDescMatch ? metaDescMatch[1] : '',
        keywords: keywordsMatch ? keywordsMatch[1] : '',
        content: mainContent
    };
}

// Function to create excerpt from meta description or content
function createExcerpt(metaDescription, content) {
    if (metaDescription) {
        return metaDescription;
    }

    // Get first paragraph
    const firstParagraph = content
        .split(/\r?\n\r?\n/)[0]
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
        .replace(/\*\*([^\*]+)\*\*/g, '$1')
        .replace(/##+/g, '')
        .trim();

    if (firstParagraph.length > 200) {
        return firstParagraph.substring(0, 197) + '...';
    }
    return firstParagraph;
}

// Main function
function addBlogPosts() {
    const rootDir = path.join(__dirname, '..');
    const blogPostsDir = path.join(rootDir, 'blog-posts-nov-23-2025');

    if (!fs.existsSync(blogPostsDir)) {
        console.error(`❌ Directory not found: ${blogPostsDir}`);
        process.exit(1);
    }

    const blogDataPath = path.join(rootDir, 'src', 'lib', 'blog-data.ts');

    // Read all markdown files (excluding summary)
    const files = fs.readdirSync(blogPostsDir)
        .filter(f => f.endsWith('.md') && !f.includes('SUMMARY'))
        .sort();

    console.log(`📁 Found ${files.length} markdown files to process\n`);

    const newPosts = [];

    // Process each file
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(blogPostsDir, file);
        console.log(`Processing ${file}...`);

        const parsed = parseMarkdownFile(filePath);
        if (!parsed) {
            console.error(`  ❌ Failed to parse ${file}`);
            continue;
        }

        const city = extractCity(parsed.title);
        const baseSlug = titleToSlug(parsed.title.split(':')[0]);
        const slug = city ? `${baseSlug}-${titleToSlug(city)}` : baseSlug;

        // Feature the first 3 posts
        const isFeatured = i < 3;

        // Convert date format
        const publishDate = new Date(parsed.publishDate).toISOString().split('T')[0];

        // Determine primary keyword and geo target from title and keywords
        const keywords = parsed.keywords.split(',').map(k => k.trim());
        const primaryKeyword = keywords[0] || '';
        const geoTarget = city || '';

        // Create BlogPost object
        const blogPost = {
            id: slug,
            title: parsed.title,
            excerpt: createExcerpt(parsed.metaDescription, parsed.content),
            category: parsed.category,
            date: publishDate,
            readTime: parsed.readTime,
            author: parsed.author,
            image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?w=800&h=400&fit=crop',
            featured: isFeatured,
            content: parsed.content,
            primaryKeyword: primaryKeyword,
            geoTarget: geoTarget,
            contentType: 'supporting'
        };

        newPosts.push(blogPost);
        const featuredStatus = isFeatured ? '⭐ FEATURED' : '';
        console.log(`  ✅ Created post: ${slug} ${featuredStatus}`);
    }

    if (newPosts.length === 0) {
        console.error('\n❌ No posts were successfully parsed!');
        process.exit(1);
    }

    console.log(`\n✅ Successfully parsed ${newPosts.length} posts`);
    console.log('\n📝 Adding to blog-data.ts...');

    // Read existing blog-data.ts
    let blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');

    // Find the closing bracket of BLOG_POSTS array
    const helperFunctionsIndex = blogDataContent.indexOf('// Helper functions');
    if (helperFunctionsIndex === -1) {
        console.error('❌ Could not find helper functions comment');
        return;
    }

    const blogPostsSection = blogDataContent.substring(0, helperFunctionsIndex);
    const closingBracketIndex = blogPostsSection.lastIndexOf(']');

    if (closingBracketIndex === -1) {
        console.error('❌ Could not find closing bracket for BLOG_POSTS array');
        return;
    }

    // Generate TypeScript code for new posts
    const newPostsCode = newPosts.map(post => {
        // Escape backticks and dollar signs in content
        const escapedContent = post.content
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\$/g, '\\$');

        const escapedTitle = post.title.replace(/`/g, '\\`');
        const escapedExcerpt = post.excerpt.replace(/`/g, '\\`');

        return `  {
    id: '${post.id}',
    title: \`${escapedTitle}\`,
    excerpt: \`${escapedExcerpt}\`,
    category: '${post.category}',
    date: '${post.date}',
    readTime: '${post.readTime}',
    author: '${post.author}',
    image: '${post.image}',
    featured: ${post.featured},
    contentType: '${post.contentType}',
    primaryKeyword: '${post.primaryKeyword}',
    geoTarget: '${post.geoTarget}',
    content: \`${escapedContent}\`,
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
    console.log(`⭐ ${featuredCount} posts set as FEATURED`);

    console.log('\n📝 Added posts:');
    newPosts.forEach((post, index) => {
        const star = post.featured ? '⭐' : '  ';
        console.log(`${star} ${index + 1}. ${post.title}`);
        console.log(`     ID: ${post.id}`);
        console.log(`     City: ${post.geoTarget || 'N/A'}`);
    });

    console.log('\n✅ All blog posts added successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Build the project: npm run build');
    console.log('2. Check for broken images');
    console.log('3. Submit to IndexNow: node scripts/submit-new-blogs-to-indexnow.js');
    console.log('4. Deploy to Vercel');
}

// Run the script
try {
    addBlogPosts();
} catch (error) {
    console.error('❌ Error adding blog posts:', error);
    console.error(error.stack);
    process.exit(1);
}

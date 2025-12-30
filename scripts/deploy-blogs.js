#!/usr/bin/env node

/**
 * Unified Blog Deployment Script
 *
 * This script automates the entire blog deployment workflow:
 * 1. Convert markdown blog posts to blog-data.ts
 * 2. Build the Next.js project
 * 3. Commit and push to Git
 * 4. Submit URLs to IndexNow (Bing, Yandex, etc.)
 * 5. Submit sitemap to Google Search Console
 * 6. Perform URL Inspection on new blog posts
 *
 * Usage:
 *   node scripts/deploy-blogs.js [blog-posts-directory]
 *   npm run deploy:blogs
 *   npm run deploy:blogs -- blog-posts-dec-29-2025
 *
 * Options:
 *   --skip-build     Skip the npm build step
 *   --skip-git       Skip git commit and push
 *   --skip-indexnow  Skip IndexNow submission
 *   --skip-gsc       Skip GSC operations
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  siteUrl: 'https://aaaengineeringdesign.com',
  projectRoot: path.join(__dirname, '..'),
};

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  bgGreen: '\x1b[42m',
  bgRed: '\x1b[41m',
  bgBlue: '\x1b[44m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, total, message) {
  console.log(`\n${colors.bgBlue}${colors.bright} STEP ${step}/${total} ${colors.reset} ${colors.blue}${message}${colors.reset}`);
  console.log('─'.repeat(70));
}

function logSuccess(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function logError(message) {
  console.log(`${colors.red}❌ ${message}${colors.reset}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

/**
 * Execute a shell command and return output
 */
function exec(command, options = {}) {
  try {
    const output = execSync(command, {
      cwd: CONFIG.projectRoot,
      encoding: 'utf-8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout };
  }
}

/**
 * Find the most recent blog-posts directory
 */
function findBlogPostsDirectory(providedPath) {
  if (providedPath && !providedPath.startsWith('--')) {
    const fullPath = path.isAbsolute(providedPath)
      ? providedPath
      : path.join(CONFIG.projectRoot, providedPath);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
    throw new Error(`Directory not found: ${providedPath}`);
  }

  const dirs = fs.readdirSync(CONFIG.projectRoot)
    .filter(name => name.startsWith('blog-posts-') && fs.statSync(path.join(CONFIG.projectRoot, name)).isDirectory())
    .sort()
    .reverse();

  if (dirs.length === 0) {
    throw new Error('No blog-posts-* directories found');
  }

  return path.join(CONFIG.projectRoot, dirs[0]);
}

/**
 * Extract blog slugs and create full URLs
 */
function extractBlogUrls(dirPath) {
  const files = fs.readdirSync(dirPath).filter(name => name.endsWith('.md'));

  return files.map(file => {
    const slug = file.replace(/^\d+-/, '').replace(/\.md$/, '');
    return {
      slug,
      url: `${CONFIG.siteUrl}/blog/${slug}`,
      file,
    };
  });
}

/**
 * Main deployment function
 */
async function deploy() {
  const args = process.argv.slice(2);
  const skipBuild = args.includes('--skip-build');
  const skipGit = args.includes('--skip-git');
  const skipIndexNow = args.includes('--skip-indexnow');
  const skipGSC = args.includes('--skip-gsc');
  const providedPath = args.find(a => !a.startsWith('--'));

  const totalSteps = 6 - (skipBuild ? 1 : 0) - (skipGit ? 1 : 0) - (skipIndexNow ? 1 : 0) - (skipGSC ? 1 : 0);
  let currentStep = 0;

  console.log('\n' + '═'.repeat(70));
  log('🚀 UNIFIED BLOG DEPLOYMENT', 'bright');
  console.log('═'.repeat(70));
  log(`\nTimestamp: ${new Date().toISOString()}`, 'dim');

  try {
    // Find blog posts directory
    const blogDir = findBlogPostsDirectory(providedPath);
    const blogDirName = path.basename(blogDir);
    const blogs = extractBlogUrls(blogDir);

    log(`\n📁 Blog directory: ${blogDirName}`, 'cyan');
    log(`📄 Blog posts found: ${blogs.length}`, 'cyan');

    // ═══════════════════════════════════════════════════════════════════
    // STEP 1: Convert markdown to blog-data.ts
    // ═══════════════════════════════════════════════════════════════════
    logStep(++currentStep, totalSteps, 'Converting markdown to blog-data.ts');

    const addResult = exec(`node scripts/add-blog-posts.js ${blogDirName}`);
    if (!addResult.success) {
      throw new Error('Failed to convert blog posts');
    }
    logSuccess('Blog posts converted to blog-data.ts');

    // ═══════════════════════════════════════════════════════════════════
    // STEP 2: Build the project
    // ═══════════════════════════════════════════════════════════════════
    if (!skipBuild) {
      logStep(++currentStep, totalSteps, 'Building Next.js project');

      const buildResult = exec('npm run build');
      if (!buildResult.success) {
        throw new Error('Build failed');
      }
      logSuccess('Build completed successfully');
    }

    // ═══════════════════════════════════════════════════════════════════
    // STEP 3: Git commit and push
    // ═══════════════════════════════════════════════════════════════════
    if (!skipGit) {
      logStep(++currentStep, totalSteps, 'Committing and pushing to Git');

      // Stage files
      exec(`git add src/lib/blog-data.ts ${blogDirName}/ public/*.txt`, { silent: true });

      // Create commit message
      const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      const commitMessage = `Add ${blogs.length} new SEO-optimized blog posts for ${today}

${blogs.map(b => `- ${b.slug}`).join('\n')}

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`;

      // Write commit message to temp file to handle special characters
      const commitMsgFile = path.join(CONFIG.projectRoot, '.commit-msg-temp');
      fs.writeFileSync(commitMsgFile, commitMessage);

      const commitResult = exec(`git commit -F "${commitMsgFile}"`, { silent: true });
      fs.unlinkSync(commitMsgFile);

      if (!commitResult.success && !commitResult.output?.includes('nothing to commit')) {
        logWarning('Nothing new to commit or commit failed');
      } else {
        logSuccess('Changes committed');
      }

      // Push
      const pushResult = exec('git push origin master');
      if (!pushResult.success) {
        throw new Error('Git push failed');
      }
      logSuccess('Pushed to origin/master');
    }

    // ═══════════════════════════════════════════════════════════════════
    // STEP 4: Submit to IndexNow
    // ═══════════════════════════════════════════════════════════════════
    if (!skipIndexNow) {
      logStep(++currentStep, totalSteps, 'Submitting to IndexNow (Bing, Yandex, etc.)');

      const indexNowResult = exec(`node scripts/submit-new-blogs-to-indexnow.js ${blogDirName}`);
      if (!indexNowResult.success) {
        logWarning('IndexNow submission had issues (non-fatal)');
      } else {
        logSuccess('URLs submitted to IndexNow');
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    // STEP 5: Submit sitemap & inspect URLs via GSC
    // ═══════════════════════════════════════════════════════════════════
    if (!skipGSC) {
      logStep(++currentStep, totalSteps, 'Google Search Console: Sitemap & URL Inspection');

      // Check if GSC credentials exist
      const gscCredPath = path.join(CONFIG.projectRoot, 'gsc-credentials.json');
      if (!fs.existsSync(gscCredPath)) {
        logWarning('GSC credentials not found - skipping GSC operations');
        log('   To enable: Create gsc-credentials.json (see GSC-SETUP-GUIDE.md)', 'dim');
      } else {
        const gscResult = exec(`node scripts/gsc-url-inspector.js ${blogDirName}`);
        if (!gscResult.success) {
          logWarning('GSC operations had issues (non-fatal)');
        } else {
          logSuccess('Sitemap submitted & URLs inspected via GSC');
        }
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    // FINAL SUMMARY
    // ═══════════════════════════════════════════════════════════════════
    console.log('\n' + '═'.repeat(70));
    log('🎉 DEPLOYMENT COMPLETE!', 'bright');
    console.log('═'.repeat(70));

    log(`\n📊 Deployment Summary:`, 'blue');
    log(`   Blog Posts Deployed: ${blogs.length}`, 'cyan');
    log(`   Directory: ${blogDirName}`, 'cyan');

    log(`\n🔗 Deployed URLs:`, 'blue');
    blogs.forEach((b, i) => {
      const featured = i < 3 ? ' ⭐' : '';
      log(`   ${i + 1}. ${b.url}${featured}`, 'cyan');
    });

    log(`\n✅ Completed Operations:`, 'green');
    log(`   • Converted ${blogs.length} markdown files to blog-data.ts`, 'green');
    if (!skipBuild) log(`   • Built Next.js project`, 'green');
    if (!skipGit) log(`   • Committed and pushed to Git`, 'green');
    if (!skipIndexNow) log(`   • Submitted to IndexNow (Bing, Yandex, Naver, Seznam)`, 'green');
    if (!skipGSC) log(`   • Submitted sitemap to Google Search Console`, 'green');

    log(`\n⏱️  What happens next:`, 'yellow');
    log(`   • Netlify deployment: ~2-3 minutes`, 'dim');
    log(`   • Bing indexing: 24-48 hours`, 'dim');
    log(`   • Google indexing: 2-7 days`, 'dim');

    log(`\n💡 Verify at:`, 'blue');
    log(`   • Bing Webmaster: https://www.bing.com/webmasters`, 'cyan');
    log(`   • Google Search Console: https://search.google.com/search-console`, 'cyan');
    log(`   • Live site: ${CONFIG.siteUrl}/blog`, 'cyan');

    console.log('\n' + '═'.repeat(70) + '\n');

  } catch (error) {
    console.log('\n' + '═'.repeat(70));
    logError(`DEPLOYMENT FAILED: ${error.message}`);
    console.log('═'.repeat(70) + '\n');
    process.exit(1);
  }
}

// Run
deploy();

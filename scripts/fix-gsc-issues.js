const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
    console.log('Starting GSC Issues Fixer...');

    // 1. Fix BingSiteAuth.xml
    const publicDir = path.join(process.cwd(), 'public');
    const bingFile = path.join(publicDir, 'BingSiteAuth.xml');

    if (!fs.existsSync(bingFile)) {
        console.log('❌ BingSiteAuth.xml missing. Creating placeholder...');
        const template = `<?xml version="1.0"?>
<users>
	<user>REPLACE_WITH_YOUR_BING_CODE</user>
</users>`;
        fs.writeFileSync(bingFile, template);
        console.log('✅ Created BingSiteAuth.xml (Please update with your actual code)');
    } else {
        console.log('✅ BingSiteAuth.xml exists');
    }

    // 2. Fix Sitemap Redirects (Ensure non-www)
    console.log('\nVerifying Sitemap configuration...');
    // Check next-sitemap.config.js
    const configPath = path.join(process.cwd(), 'next-sitemap.config.js');
    if (fs.existsSync(configPath)) {
        const configContent = fs.readFileSync(configPath, 'utf8');
        if (!configContent.includes("siteUrl: 'https://aaaengineeringdesign.com'")) {
            console.log('⚠️ Warning: siteUrl in next-sitemap.config.js might be incorrect. Expected https://aaaengineeringdesign.com');
        } else {
            console.log('✅ siteUrl configured correctly (non-www)');
        }
    }

    // Regenerate sitemap
    console.log('\nRegenerating sitemap...');
    try {
        execSync('npx next-sitemap', { stdio: 'inherit' });
        console.log('✅ Sitemap regenerated');
    } catch (error) {
        console.error('❌ Failed to regenerate sitemap:', error.message);
    }

    // Verify sitemap content
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
        const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
        if (sitemapContent.includes('https://www.aaaengineeringdesign.com')) {
            console.error('❌ Sitemap still contains www URLs!');
        } else {
            console.log('✅ Sitemap verified: No www URLs found.');
        }
    }

    console.log('\nFixes completed. Please rebuild and deploy your application.');
}

main().catch(console.error);

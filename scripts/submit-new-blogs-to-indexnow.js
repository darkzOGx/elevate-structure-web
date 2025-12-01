#!/usr/bin/env node

/**
 * Submit newly generated blog posts to IndexNow for instant indexing
 *
 * Usage:
 *   node scripts/submit-new-blogs-to-indexnow.js
 *
 * Instructions:
 *   1. Update the blogSlugs array below with your newly generated blog post slugs
 *   2. Run this script after generating a batch of blog posts
 *   3. The script will submit all URLs to IndexNow for Bing, Yandex, and other search engines
 */

const https = require('https');

const SITE_URL = 'https://aaaengineeringdesign.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'e8b5a9c2f7d4e3a1b6c8d9e0f1a2b3c4';

// UPDATE THIS ARRAY WITH YOUR NEWLY GENERATED BLOG POST SLUGS
// Example format: 'structural-engineer-long-beach'
const blogSlugs = [
  'outdoor-kitchen-structural-engineering-in-laguna-beach',
  'wine-cellar-structural-engineering-in-yorba-linda',
  'home-theater-room-structural-engineering-in-mission-viejo',
  'indoor-pool-structural-engineering-in-dana-point',
  'guest-house-structural-engineering-in-laguna-niguel',
  'garage-conversion-engineer-near-me-in-san-clemente',
  'load-bearing-wall-engineer-near-me-in-lake-forest',
  'deck-structural-engineer-near-me-in-westminster',
  'permit-engineer-near-me-in-aliso-viejo',
  'building-permit-structural-engineer-near-me-in-torrance',
];

// Validate input
if (blogSlugs.length === 0 || blogSlugs[0] === '') {
  console.error('❌ Error: No blog post slugs provided');
  console.log('');
  console.log('Please edit this script and add your blog post slugs to the blogSlugs array.');
  console.log('');
  console.log('Example:');
  console.log('const blogSlugs = [');
  console.log('  "structural-engineer-long-beach",');
  console.log('  "engineering-design-services-irvine",');
  console.log('  "residential-structural-engineer-los-angeles"');
  console.log('];');
  process.exit(1);
}

const urlList = blogSlugs.map(slug => `${SITE_URL}/blog/${slug}`);

const payload = JSON.stringify({
  host: new URL(SITE_URL).hostname,
  key: INDEXNOW_KEY,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log('🚀 Submitting blog posts to IndexNow...');
console.log(`📄 Blog posts: ${urlList.length}`);
console.log('');
urlList.forEach((url, i) => {
  console.log(`   ${i + 1}. ${url}`);
});
console.log('');

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ Successfully submitted to IndexNow!');
      console.log(`   Status: ${res.statusCode}`);
      console.log(`   URLs submitted: ${urlList.length}`);
      console.log('');
      console.log('🔍 Search engines notified:');
      console.log('   • Bing');
      console.log('   • Yandex');
      console.log('   • Seznam.cz');
      console.log('   • Naver');
      console.log('');
      console.log('⏱️  Indexing typically occurs within 24-48 hours');
      console.log('');
      console.log('💡 Next steps:');
      console.log('   1. Check Bing Webmaster Tools in 24-48 hours');
      console.log('   2. Verify URLs appear in "URL Inspection" tool');
      console.log('   3. Monitor search console for indexing status');
    } else {
      console.error('❌ IndexNow submission failed');
      console.error(`   Status: ${res.statusCode}`);
      console.error(`   Response: ${data}`);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error submitting to IndexNow:', error.message);
  process.exit(1);
});

req.write(payload);
req.end();



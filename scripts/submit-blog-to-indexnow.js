#!/usr/bin/env node

/**
 * Submit a single blog post to IndexNow for instant indexing
 *
 * Usage:
 *   node scripts/submit-blog-to-indexnow.js <slug>
 *   node scripts/submit-blog-to-indexnow.js "structural-engineer-long-beach"
 */

const https = require('https');

const SITE_URL = 'https://aaaengineeringdesign.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'e8b5a9c2f7d4e3a1b6c8d9e0f1a2b3c4';

// Get slug from command line arguments
const slug = process.argv[2];

if (!slug) {
  console.error('❌ Error: Please provide a blog post slug');
  console.log('');
  console.log('Usage:');
  console.log('  node scripts/submit-blog-to-indexnow.js <slug>');
  console.log('  node scripts/submit-blog-to-indexnow.js "structural-engineer-long-beach"');
  process.exit(1);
}

const blogUrl = `${SITE_URL}/blog/${slug}`;

const payload = JSON.stringify({
  host: new URL(SITE_URL).hostname,
  key: INDEXNOW_KEY,
  urlList: [blogUrl]
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

console.log('🚀 Submitting blog post to IndexNow...');
console.log(`📄 Blog post: ${blogUrl}`);
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
      console.log(`   URL submitted: ${blogUrl}`);
      console.log('');
      console.log('🔍 Search engines notified:');
      console.log('   • Bing');
      console.log('   • Yandex');
      console.log('   • Seznam.cz');
      console.log('   • Naver');
      console.log('');
      console.log('⏱️  Indexing typically occurs within 24-48 hours');
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



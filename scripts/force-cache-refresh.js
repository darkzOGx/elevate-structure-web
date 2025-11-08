#!/usr/bin/env node

/**
 * Force Cache Refresh - Updates build timestamp to bust cache
 * Run this after deploying to ensure Netlify serves fresh content
 */

const fs = require('fs');
const path = require('path');

const timestamp = new Date().toISOString();
const cacheFile = path.join(__dirname, '..', '.cache-timestamp');

fs.writeFileSync(cacheFile, timestamp);

console.log(`✅ Cache timestamp updated: ${timestamp}`);
console.log(`💡 Deploy to Netlify to force cache refresh`);

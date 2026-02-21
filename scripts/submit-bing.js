// Script to submit all site URLs to Bing Webmaster Tools
// Run with: node scripts/submit-bing.js

// Script to submit all site URLs to Bing Webmaster Tools
// Run with: node scripts/submit-bing.js
//
// IMPORTANT: Use non-www domain to match canonical site configuration

const BING_API_KEY = process.env.BING_WEBMASTER_API_KEY || 'ae8ae4c90a894d918619a16ce92e7207'
const SITE_URL = 'https://aaaengineeringdesign.com'

async function submitToBing() {
  console.log('🚀 Submitting URLs to Bing Webmaster Tools...\n')
  console.log(`Site: ${SITE_URL}`)

  // Dynamically build URL list from blog-data.ts
  let urls = [
    SITE_URL,
    `${SITE_URL}/about`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/services/structural-engineering`,
    `${SITE_URL}/services/seismic-retrofitting`,
    `${SITE_URL}/services/residential`,
    `${SITE_URL}/services/commercial`,
    `${SITE_URL}/services/adu-engineering`,
    `${SITE_URL}/services/foundation-engineering`,
    `${SITE_URL}/services/foundation-repair`,
    `${SITE_URL}/services/foundation-inspection`,
    `${SITE_URL}/services/structural-inspection`,
    `${SITE_URL}/services/load-bearing-wall-removal`,
    `${SITE_URL}/services/permit-engineering`,
  ]

  // Try to load blog post URLs dynamically
  try {
    const fs = require('fs')
    const content = fs.readFileSync('src/lib/blog-data.ts', 'utf-8')
    const idMatches = content.matchAll(/id: '([^']+)'/g)
    const noIndexIds = new Set()
    // Find noIndex posts
    const noIndexMatches = content.matchAll(/id: '([^']+)'[\s\S]*?noIndex: true/g)
    for (const m of noIndexMatches) noIndexIds.add(m[1])

    for (const m of idMatches) {
      if (!noIndexIds.has(m[1])) {
        urls.push(`${SITE_URL}/blog/${m[1]}`)
      }
    }
  } catch (e) {
    console.log('Could not load blog posts dynamically, using static list')
  }

  // Bing limits to 500 URLs per batch, 10,000 per day
  const BATCH_SIZE = 500
  let submitted = 0

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE)

    try {
      const response = await fetch(
        `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            siteUrl: SITE_URL,
            urlList: batch,
          }),
        }
      )

      if (response.status === 200) {
        submitted += batch.length
        console.log(`✓ Batch ${Math.floor(i/BATCH_SIZE)+1}: ${batch.length} URLs submitted`)
      } else {
        const text = await response.text()
        console.error(`✗ Batch ${Math.floor(i/BATCH_SIZE)+1} failed: ${response.status} - ${text}`)
      }
    } catch (error) {
      console.error(`✗ Error on batch ${Math.floor(i/BATCH_SIZE)+1}:`, error.message)
    }
  }

  console.log(`\n✅ Total submitted: ${submitted}/${urls.length} URLs`)
}

submitToBing()

// Script to submit all site URLs to IndexNow
// Run with: node scripts/submit-indexnow.js

const INDEXNOW_KEY = 'b53cf03137214ff0bb2e1ab0d3ebdb5c'
const SITE_URL = 'https://www.aaaengineeringdesign.com'

const urls = [
  `${SITE_URL}`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/residential-structural-engineer-near-me`,
  `${SITE_URL}/blog/engineering-design-services-guide`,
  `${SITE_URL}/blog/how-to-hire-structural-engineer`,
  `${SITE_URL}/blog/understanding-seismic-retrofitting`,
  `${SITE_URL}/blog/foundation-repair-warning-signs`,
  `${SITE_URL}/blog/building-code-compliance-2024`,
  `${SITE_URL}/blog/structural-inspection-checklist`,
  `${SITE_URL}/blog/commercial-structural-engineering`,
  `${SITE_URL}/blog/best-structural-engineering-firms-los-angeles`,
  `${SITE_URL}/blog/adu-structural-engineering`,
]

async function submitToIndexNow() {
  console.log('🚀 Submitting URLs to IndexNow...\n')

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'www.aaaengineeringdesign.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })

    console.log(`Status: ${response.status} ${response.statusText}\n`)

    if (response.status === 200 || response.status === 202) {
      console.log('✓ Successfully submitted all URLs to IndexNow!')
      console.log(`✓ Total URLs submitted: ${urls.length}`)
      console.log('\nURLs submitted:')
      urls.forEach(url => console.log(`  - ${url}`))
      console.log('\n✓ Search engines (Bing, Yandex, etc.) will now be notified of your content!')
      console.log('\nℹ Note: Verify submissions at https://www.bing.com/webmasters')
    } else {
      console.error('✗ Failed to submit URLs to IndexNow')
      console.error(`Status: ${response.status}`)
      const text = await response.text()
      console.error(`Response: ${text}`)
    }
  } catch (error) {
    console.error('✗ Error submitting to IndexNow:', error.message)
  }
}

submitToIndexNow()

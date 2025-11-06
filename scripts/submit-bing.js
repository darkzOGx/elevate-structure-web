// Script to submit all site URLs to Bing Webmaster Tools
// Run with: node scripts/submit-bing.js

const BING_API_KEY = 'ae8ae4c90a894d918619a16ce92e7207'
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

async function submitToBing() {
  console.log('🚀 Submitting URLs to Bing Webmaster Tools...\n')

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
          urlList: urls,
        }),
      }
    )

    console.log(`Status: ${response.status} ${response.statusText}\n`)

    if (response.status === 200) {
      const result = await response.json()
      console.log('✓ Successfully submitted all URLs to Bing!')
      console.log(`✓ Total URLs submitted: ${urls.length}`)
      console.log('\nURLs submitted:')
      urls.forEach(url => console.log(`  - ${url}`))
      console.log('\n✓ URLs will now appear in your Bing Webmaster Tools dashboard!')
      console.log('\nℹ Response:', JSON.stringify(result, null, 2))
    } else {
      console.error('✗ Failed to submit URLs to Bing')
      console.error(`Status: ${response.status}`)
      const text = await response.text()
      console.error(`Response: ${text}`)
    }
  } catch (error) {
    console.error('✗ Error submitting to Bing:', error.message)
  }
}

submitToBing()

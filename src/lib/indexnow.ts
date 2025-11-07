// IndexNow integration for instant search engine indexing
// Documentation: https://www.indexnow.org/documentation

const INDEXNOW_KEY = 'b53cf03137214ff0bb2e1ab0d3ebdb5c'
const SITE_URL = 'https://aaaengineeringdesign.com'

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrlToIndexNow(url: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}`)

    if (response.status === 200) {
      console.log(`✓ Successfully submitted to IndexNow: ${url}`)
      return true
    } else {
      console.error(`✗ Failed to submit to IndexNow: ${url} (Status: ${response.status})`)
      return false
    }
  } catch (error) {
    console.error(`✗ Error submitting to IndexNow: ${url}`, error)
    return false
  }
}

/**
 * Submit multiple URLs to IndexNow in bulk
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<boolean> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'aaaengineeringdesign.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })

    if (response.status === 200) {
      console.log(`✓ Successfully submitted ${urls.length} URLs to IndexNow`)
      return true
    } else {
      console.error(`✗ Failed to submit URLs to IndexNow (Status: ${response.status})`)
      return false
    }
  } catch (error) {
    console.error('✗ Error submitting URLs to IndexNow:', error)
    return false
  }
}

/**
 * Get all site URLs for submission
 */
export function getAllSiteUrls(): string[] {
  const urls = [
    SITE_URL,
    `${SITE_URL}/blog`,
    // Add all your blog post URLs
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

  return urls
}

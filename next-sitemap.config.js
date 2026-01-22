/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aaaengineeringdesign.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false, // Consistent URL format without trailing slashes
  // Keep the sitemap clean: exclude non-HTML resources and legacy/redirect-only URLs
  // (Redirected URLs in sitemaps can reduce trust/crawl efficiency in Bing.)
  exclude: [
    '/server-sitemap.xml',
    '/sitemap.xml', // Exclude the sitemap itself
    '/robots.txt',
    '/feed.xml',
    '/services/adu-engineering', // legacy URL: 301 -> /services/adu-design-engineering
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // Important for Bing/Google: don't block Next.js assets or crawlers may not be able to render the page.
        disallow: ['/api/'],
      },
    ],
    additionalSitemaps: [
      'https://aaaengineeringdesign.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Explicitly exclude sitemap.xml itself (prevents duplicate canonical error)
    if (path === '/sitemap.xml' || path === '/sitemap.xml/') {
      return null
    }

    // Enhanced URL transformation with proper priorities
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/blog' || path.startsWith('/blog/')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path.startsWith('/locations/') || path.startsWith('/services/')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/projects/')) {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}

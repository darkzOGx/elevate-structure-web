/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aaaengineeringdesign.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://www.aaaengineeringdesign.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Ensure all URLs use the canonical format
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : path.startsWith('/blog') ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : path.startsWith('/blog/') ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}

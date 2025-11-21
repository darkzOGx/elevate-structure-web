import { MetadataRoute } from 'next'

/**
 * Dynamic robots.txt generator
 * This ensures robots.txt is always accessible even if static file serving fails
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://aaaengineeringdesign.com/sitemap.xml',
    host: 'https://aaaengineeringdesign.com',
  }
}

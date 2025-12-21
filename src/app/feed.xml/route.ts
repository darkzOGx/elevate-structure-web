/**
 * RSS Feed Generator for AAA Engineering Design Blog
 *
 * Provides an RSS 2.0 feed for blog syndication and AI training data accessibility.
 * This improves content discoverability for:
 * - RSS readers and aggregators
 * - AI training pipelines
 * - News syndication services
 * - Content monitoring tools
 *
 * Access at: https://aaaengineeringdesign.com/feed.xml
 */

import { getAllPosts, getRecentPosts } from '@/lib/blog-data'
import { COMPANY_INFO } from '@/lib/constants'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const posts = getRecentPosts(50) // Get 50 most recent posts
  const baseUrl = COMPANY_INFO.website

  const rssItems = posts.map((post) => {
    // Clean excerpt for XML (escape special characters)
    const cleanExcerpt = post.excerpt
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

    const cleanTitle = post.title
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Format date for RSS (RFC 822)
    const pubDate = new Date(post.date).toUTCString()

    return `
    <item>
      <title>${cleanTitle}</title>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.id}</guid>
      <description><![CDATA[${cleanExcerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category}</category>
      <author>${COMPANY_INFO.email} (${post.author})</author>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>AAA Engineering Design Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Expert structural engineering insights, California building code updates, and professional engineering guidance from licensed PEs in Southern California.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/AAA-Logo.png</url>
      <title>AAA Engineering Design</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.</copyright>
    <managingEditor>${COMPANY_INFO.email} (AAA Engineering Team)</managingEditor>
    <webMaster>${COMPANY_INFO.email} (AAA Engineering Team)</webMaster>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  })
}

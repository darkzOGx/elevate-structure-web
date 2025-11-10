import { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/lib/constants'
import { getAllPosts } from '@/lib/blog-data'
import { getAllLocations } from '@/lib/locations-data'
import { getAllServices } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.website
  const blogPosts = getAllPosts()
  const locations = getAllLocations()
  const services = getAllServices()

  // Static pages (removed hash/fragment URLs - they're invalid for sitemaps)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fire`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Project pages (static routes)
  const projectPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/projects/3-story-residential-home`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/cmu-warehouse-mezzanine`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/palisades-home`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Location pages (dynamic routes)
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service pages (dynamic routes)
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.7,
  }))

  return [...staticPages, ...projectPages, ...locationPages, ...servicePages, ...blogPages]
}
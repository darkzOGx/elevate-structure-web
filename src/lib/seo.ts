import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  url: string
  image?: string
  type?: 'website' | 'article'
  locale?: string
  siteName?: string
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    url,
    image = '/og-image.jpg',
    type = 'website',
    locale = 'en_US',
    siteName = 'AAA Engineering Design'
  } = config

  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') ? url : `https://aaaengineeringdesign.com${url}`

  // Ensure image is absolute
  const absoluteImage = image.startsWith('http')
    ? image
    : image.startsWith('/')
    ? `https://aaaengineeringdesign.com${image}`
    : `https://aaaengineeringdesign.com/${image}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL('https://aaaengineeringdesign.com'),
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      locale,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'format-detection': 'telephone=yes',
    },
    // Add article metadata for blog posts
    ...(type === 'article' && {
      authors: [{ name: siteName }],
      category: 'Engineering',
    }),
  }
}

// Organization Schema
export function generateOrganizationSchema(config: {
  name: string
  url: string
  logo: string
  phone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  socialProfiles?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    logo: config.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.phone,
      contactType: 'customer service',
      email: config.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.streetAddress,
      addressLocality: config.address.addressLocality,
      addressRegion: config.address.addressRegion,
      postalCode: config.address.postalCode,
      addressCountry: config.address.addressCountry,
    },
    sameAs: config.socialProfiles || [],
  }
}

// Service Schema
export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed?: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: service.areaServed,
    serviceType: service.serviceType,
  }
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Website Schema (SearchAction removed - no search functionality)
export function generateWebsiteSchema(config: {
  name: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
  }
}

// LocalBusiness Schema (if applicable)
export function generateLocalBusinessSchema(config: {
  name: string
  url: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  openingHours?: string[]
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    url: config.url,
    telephone: config.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.streetAddress,
      addressLocality: config.address.addressLocality,
      addressRegion: config.address.addressRegion,
      postalCode: config.address.postalCode,
      addressCountry: config.address.addressCountry,
    },
    openingHours: config.openingHours,
    priceRange: config.priceRange,
  }
}

// Review/Rating Schema
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }))
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{
  name: string
  url: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
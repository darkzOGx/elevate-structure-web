// Centralized Schema Markup Data
// This file contains all structured data for AAA Engineering Design

import { COMPANY_INFO, TESTIMONIALS, FAQ_DATA, SERVICES } from './constants'

// Main Organization/LocalBusiness Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringService",
  "@id": `${COMPANY_INFO.website}/#organization`,
  "name": COMPANY_INFO.name,
  "alternateName": "AAA Engineering",
  "url": COMPANY_INFO.website,
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "logo": `${COMPANY_INFO.website}/AAA-Logo.png`,
  "image": `${COMPANY_INFO.website}/AAA-Logo.png`,
  "description": "Leading provider of structural engineering services in California. Licensed Professional Engineers with 20+ years experience in residential and commercial structural design, seismic retrofitting, ADU engineering, and foundation design.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": COMPANY_INFO.address.streetAddress,
    "addressLocality": COMPANY_INFO.address.addressLocality,
    "addressRegion": COMPANY_INFO.address.addressRegion,
    "postalCode": COMPANY_INFO.address.postalCode,
    "addressCountry": COMPANY_INFO.address.addressCountry
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.8003,
    "longitude": -117.9931
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "California"
    },
    {
      "@type": "City",
      "name": "Orange County"
    },
    {
      "@type": "City",
      "name": "Los Angeles County"
    },
    {
      "@type": "City",
      "name": "San Diego County"
    }
  ],
  "priceRange": COMPANY_INFO.priceRange,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": COMPANY_INFO.socialProfiles,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Structural Engineering Services",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "serviceType": service.title
      },
      "position": index + 1
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "429",
    "bestRating": "5",
    "worstRating": "1"
  }
}

// Website Schema
// Note: SearchAction removed as site doesn't have search functionality
// If search is added later, uncomment the potentialAction block
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${COMPANY_INFO.website}/#website`,
  "url": COMPANY_INFO.website,
  "name": COMPANY_INFO.name,
  "description": "Professional structural engineering services throughout California",
  "publisher": {
    "@id": `${COMPANY_INFO.website}/#organization`
  }
  // Uncomment if search functionality is added:
  // "potentialAction": {
  //   "@type": "SearchAction",
  //   "target": {
  //     "@type": "EntryPoint",
  //     "urlTemplate": `${COMPANY_INFO.website}/search?q={search_term_string}`
  //   },
  //   "query-input": "required name=search_term_string"
  // }
}

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

// Review Schema for Testimonials
export const reviewsSchema = TESTIMONIALS.map(testimonial => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": `${COMPANY_INFO.website}/#organization`
  },
  "author": {
    "@type": "Person",
    "name": testimonial.name
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": testimonial.rating,
    "bestRating": 5,
    "worstRating": 1
  },
  "reviewBody": testimonial.text,
  "datePublished": testimonial.date
}))

// Service-specific Schema Generator
export function generateServiceSchema(service: typeof SERVICES[0], city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": city ? `${service.title} in ${city}` : service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${COMPANY_INFO.website}/#organization`,
      "name": COMPANY_INFO.name
    },
    "areaServed": city ? {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "State",
        "name": "California"
      }
    } : {
      "@type": "State",
      "name": "California"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": COMPANY_INFO.priceRange
    }
  }
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

// FAQPage Schema Generator (Critical for AI Overview/GEO)
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// HowTo Schema Generator (for process sections - boosts AI citations)
export function generateHowToSchema(config: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": config.name,
    "description": config.description,
    ...(config.totalTime && { "totalTime": config.totalTime }),
    "step": config.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
}

// Enhanced LocalBusiness Schema with detailed areaServed (for multi-city local SEO)
export function generateEnhancedLocalBusinessSchema(config: {
  name: string;
  city: string;
  state: string;
  description: string;
  nearbyAreas?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${config.name} - ${config.city}`,
    "description": config.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${COMPANY_INFO.website}/#organization`
    },
    "areaServed": [
      {
        "@type": "City",
        "name": config.city,
        "@id": `https://en.wikipedia.org/wiki/${config.city.replace(' ', '_')},_California`,
        "containedIn": {
          "@type": "State",
          "name": config.state
        }
      },
      ...(config.nearbyAreas || []).map(area => ({
        "@type": "City",
        "name": area,
        "containedIn": {
          "@type": "State",
          "name": config.state
        }
      }))
    ],
    "priceRange": COMPANY_INFO.priceRange,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email
  }
}

// Article Schema for Blog Posts (critical for GEO/AIO)
export function generateArticleSchema(config: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": config.headline,
    "description": config.description,
    "image": config.image || `${COMPANY_INFO.website}/og-image.jpg`,
    "datePublished": config.datePublished,
    "dateModified": config.dateModified || config.datePublished,
    "author": {
      "@type": "Organization",
      "name": config.author,
      "url": COMPANY_INFO.website
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${COMPANY_INFO.website}/AAA-Logo.png`
      }
    },
    "articleSection": config.category,
    "url": config.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": config.url
    }
  }
}

// Person Schema for Aws Salahaldin (Principal Engineer)
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aws Salahaldin",
    "jobTitle": "Principal Structural Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.website
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Engineer License",
      "name": "California PE License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "California Board for Professional Engineers"
      }
    },
    "memberOf": {
      "@type": "Organization",
      "name": "American Society of Civil Engineers"
    },
    "knowsAbout": [
      "Structural Engineering",
      "Seismic Design",
      "ADU Engineering",
      "Foundation Design",
      "Load-Bearing Wall Removal",
      "Commercial Structural Design",
      "Residential Structural Engineering"
    ]
  }
}

// Speakable Schema for Voice Search Optimization
export function generateSpeakableSchema(config: {
  url: string;
  cssSelector?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": config.cssSelector || [".hero-description", ".faq-answer", "h1"]
    },
    "url": config.url
  }
}

// Combined Schema for Homepage
export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    // faqSchema removed - FAQ component includes its own FAQPage schema
    ...reviewsSchema
  ]
}

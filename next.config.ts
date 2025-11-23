import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Core Web Vitals (LCP)
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/avif', 'image/webp'], // Modern formats for 35-45% size reduction
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: false, // Consistent with sitemap.xml (no trailing slashes)

  // Optimize for production builds
  // Note: swcMinify is enabled by default in Next.js 15+
  compress: true, // Enable gzip compression

  // Redirect optimization
  async redirects() {
    return [
      // Old website redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/',
        permanent: true,
      },
      // Trailing slash redirects (ensure no trailing slashes)
      {
        source: '/privacy/',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms/',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/fire/',
        destination: '/fire',
        permanent: true,
      },
      // Location page redirects (old short URLs → new SEO-friendly URLs)
      {
        source: '/locations/irvine',
        destination: '/locations/irvine-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/anaheim',
        destination: '/locations/anaheim-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/newport-beach',
        destination: '/locations/newport-beach-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/huntington-beach',
        destination: '/locations/huntington-beach-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/costa-mesa',
        destination: '/locations/costa-mesa-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/santa-ana',
        destination: '/locations/santa-ana-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/fullerton',
        destination: '/locations/fullerton-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/mission-viejo',
        destination: '/locations/mission-viejo-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/lake-forest',
        destination: '/locations/lake-forest-structural-engineering',
        permanent: true,
      },
    ]
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://formspree.io",
              "frame-src 'self' https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
        ],
      },
      // Cache static assets for better performance
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|svg|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default nextConfig;

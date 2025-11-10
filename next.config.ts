import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Core Web Vitals (LCP)
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/avif', 'image/webp'], // Modern formats for 35-45% size reduction
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  trailingSlash: false, // Consistent with sitemap.xml (no trailing slashes)

  // Optimize for production builds
  // Note: swcMinify is enabled by default in Next.js 15+
  compress: true, // Enable gzip compression

  // Redirect optimization
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
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

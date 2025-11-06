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
  trailingSlash: true,

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

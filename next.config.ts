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
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  trailingSlash: false, // Consistent with sitemap.xml (no trailing slashes)

  // Optimize for production builds
  // Note: swcMinify is enabled by default in Next.js 15+
  compress: true, // Enable gzip compression
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

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
      // Static pages
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
      {
        source: '/locations/',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      // IMPORTANT: Specific redirects must come BEFORE generic wildcards to avoid redirect chains
      // Old location URLs with trailing slash → new SEO-friendly URLs (direct, no chain)
      {
        source: '/locations/irvine/',
        destination: '/locations/irvine-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/anaheim/',
        destination: '/locations/anaheim-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/newport-beach/',
        destination: '/locations/newport-beach-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/huntington-beach/',
        destination: '/locations/huntington-beach-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/costa-mesa/',
        destination: '/locations/costa-mesa-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/santa-ana/',
        destination: '/locations/santa-ana-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/fullerton/',
        destination: '/locations/fullerton-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/mission-viejo/',
        destination: '/locations/mission-viejo-structural-engineering',
        permanent: true,
      },
      {
        source: '/locations/lake-forest/',
        destination: '/locations/lake-forest-structural-engineering',
        permanent: true,
      },
      // Dynamic route trailing slashes (generic wildcards - must come AFTER specific redirects)
      {
        source: '/blog/:slug/',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/locations/:slug/',
        destination: '/locations/:slug',
        permanent: true,
      },
      {
        source: '/services/:slug/',
        destination: '/services/:slug',
        permanent: true,
      },
      {
        source: '/projects/:slug/',
        destination: '/projects/:slug',
        permanent: true,
      },
      // Sitemap and XML files (prevent trailing slash crawls)
      {
        source: '/sitemap.xml/',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/robots.txt/',
        destination: '/robots.txt',
        permanent: true,
      },
      // Old service URL redirects
      {
        source: '/services/adu-engineering',
        destination: '/services/adu-design-engineering',
        permanent: true,
      },
      {
        source: '/services/adu-engineering/',
        destination: '/services/adu-design-engineering',
        permanent: true,
      },
      // Location page redirects (old short URLs → new SEO-friendly URLs)
      // Without trailing slash
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
      // Old duplicate blog URLs -> new clean URLs (163 redirects)
      {
        source: '/blog/commercial-tenant-improvement-engineering-in-rancho-cucamonga-rancho-cucamonga',
        destination: '/blog/commercial-tenant-improvement-engineering-in-rancho-cucamonga',
        permanent: true,
      },
      {
        source: '/blog/tenant-improvement-structural-engineering-in-huntington-beach-huntington-beach',
        destination: '/blog/tenant-improvement-structural-engineering-in-huntington-beach',
        permanent: true,
      },
      {
        source: '/blog/convenience-store-structural-engineering-in-huntington-beach-huntington-beach',
        destination: '/blog/convenience-store-structural-engineering-in-huntington-beach',
        permanent: true,
      },
      {
        source: '/blog/home-addition-structural-engineer-near-me-in-fountain-valley-fountain-valley',
        destination: '/blog/home-addition-structural-engineer-near-me-in-fountain-valley',
        permanent: true,
      },
      {
        source: '/blog/building-permit-structural-engineer-near-me-in-imperial-beach-imperial-beach',
        destination: '/blog/building-permit-structural-engineer-near-me-in-imperial-beach',
        permanent: true,
      },
      {
        source: '/blog/adu-structural-engineer-near-me-in-rancho-palos-verdes-rancho-palos-verdes',
        destination: '/blog/adu-structural-engineer-near-me-in-rancho-palos-verdes',
        permanent: true,
      },
      {
        source: '/blog/religious-building-structural-engineering-in-newport-beach-newport-beach',
        destination: '/blog/religious-building-structural-engineering-in-newport-beach',
        permanent: true,
      },
      {
        source: '/blog/warehouse-expansion-structural-engineering-in-san-clemente-san-clemente',
        destination: '/blog/warehouse-expansion-structural-engineering-in-san-clemente',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-laguna-niguel-laguna-niguel',
        destination: '/blog/residential-structural-engineer-near-me-in-laguna-niguel',
        permanent: true,
      },
      {
        source: '/blog/retaining-wall-foundation-engineering-in-san-bernardino-san-bernardino',
        destination: '/blog/retaining-wall-foundation-engineering-in-san-bernardino',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-engineering-design-in-redondo-beach-redondo-beach',
        destination: '/blog/commercial-building-engineering-design-in-redondo-beach',
        permanent: true,
      },
      {
        source: '/blog/office-building-structural-engineering-in-newport-beach-newport-beach',
        destination: '/blog/office-building-structural-engineering-in-newport-beach',
        permanent: true,
      },
      {
        source: '/blog/office-space-tenant-improvement-engineering-in-buena-park-buena-park',
        destination: '/blog/office-space-tenant-improvement-engineering-in-buena-park',
        permanent: true,
      },
      {
        source: '/blog/cold-storage-facility-structural-engineering-in-fallbrook-fallbrook',
        destination: '/blog/cold-storage-facility-structural-engineering-in-fallbrook',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-addition-engineering-in-lake-forest-lake-forest',
        destination: '/blog/commercial-building-addition-engineering-in-lake-forest',
        permanent: true,
      },
      {
        source: '/blog/foundation-inspection-services-in-rancho-cucamonga-rancho-cucamonga',
        destination: '/blog/foundation-inspection-services-in-rancho-cucamonga',
        permanent: true,
      },
      {
        source: '/blog/earthquake-retrofitting-in-san-juan-capistrano-san-juan-capistrano',
        destination: '/blog/earthquake-retrofitting-in-san-juan-capistrano',
        permanent: true,
      },
      {
        source: '/blog/sustainable-engineering-design-services-in-lake-forest-lake-forest',
        destination: '/blog/sustainable-engineering-design-services-in-lake-forest',
        permanent: true,
      },
      {
        source: '/blog/civil-engineer-structural-design-capability-in-san-diego-san-diego',
        destination: '/blog/civil-engineer-structural-design-capability-in-san-diego',
        permanent: true,
      },
      {
        source: '/blog/structural-engineering-for-home-additions-in-villa-park-villa-park',
        destination: '/blog/structural-engineering-for-home-additions-in-villa-park',
        permanent: true,
      },
      {
        source: '/blog/professional-design-engineering-services-in-costa-mesa-costa-mesa',
        destination: '/blog/professional-design-engineering-services-in-costa-mesa',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-engineering-design-in-yorba-linda-yorba-linda',
        destination: '/blog/commercial-building-engineering-design-in-yorba-linda',
        permanent: true,
      },
      {
        source: '/blog/industrial-facility-structural-engineering-in-san-diego-san-diego',
        destination: '/blog/industrial-facility-structural-engineering-in-san-diego',
        permanent: true,
      },
      {
        source: '/blog/commercial-structural-engineer-near-me-in-westminster-westminster',
        destination: '/blog/commercial-structural-engineer-near-me-in-westminster',
        permanent: true,
      },
      {
        source: '/blog/licensed-structural-engineer-near-me-in-los-alamitos-los-alamitos',
        destination: '/blog/licensed-structural-engineer-near-me-in-los-alamitos',
        permanent: true,
      },
      {
        source: '/blog/structural-engineering-quote-near-me-in-laguna-woods-laguna-woods',
        destination: '/blog/structural-engineering-quote-near-me-in-laguna-woods',
        permanent: true,
      },
      {
        source: '/blog/benefits-of-engineering-design-services-in-seal-beach-seal-beach',
        destination: '/blog/benefits-of-engineering-design-services-in-seal-beach',
        permanent: true,
      },
      {
        source: '/blog/septic-design-engineers-for-residential-systems-in-upland-upland',
        destination: '/blog/septic-design-engineers-for-residential-systems-in-upland',
        permanent: true,
      },
      {
        source: '/blog/home-addition-structural-engineer-near-me-in-santa-ana-santa-ana',
        destination: '/blog/home-addition-structural-engineer-near-me-in-santa-ana',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-costa-mesa-costa-mesa',
        destination: '/blog/residential-structural-engineer-near-me-in-costa-mesa',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-structural-analysis-in-seal-beach-seal-beach',
        destination: '/blog/commercial-building-structural-analysis-in-seal-beach',
        permanent: true,
      },
      {
        source: '/blog/shopping-plaza-structural-engineering-in-aliso-viejo-aliso-viejo',
        destination: '/blog/shopping-plaza-structural-engineering-in-aliso-viejo',
        permanent: true,
      },
      {
        source: '/blog/medical-building-structural-engineering-in-dana-point-dana-point',
        destination: '/blog/medical-building-structural-engineering-in-dana-point',
        permanent: true,
      },
      {
        source: '/blog/sustainable-engineering-design-services-in-buena-park-buena-park',
        destination: '/blog/sustainable-engineering-design-services-in-buena-park',
        permanent: true,
      },
      {
        source: '/blog/mixed-use-development-structural-engineering-in-anaheim-anaheim',
        destination: '/blog/mixed-use-development-structural-engineering-in-anaheim',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-seismic-retrofitting-in-placentia-placentia',
        destination: '/blog/commercial-building-seismic-retrofitting-in-placentia',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-engineering-design-in-california-california',
        destination: '/blog/commercial-building-engineering-design-in-california',
        permanent: true,
      },
      {
        source: '/blog/swimming-pool-foundation-engineering-in-palm-desert-palm-desert',
        destination: '/blog/swimming-pool-foundation-engineering-in-palm-desert',
        permanent: true,
      },
      {
        source: '/blog/types-of-engineering-design-in-fountain-valley-fountain-valley',
        destination: '/blog/types-of-engineering-design-in-fountain-valley',
        permanent: true,
      },
      {
        source: '/blog/licensed-engineer-near-me-in-huntington-beach-huntington-beach',
        destination: '/blog/licensed-engineer-near-me-in-huntington-beach',
        permanent: true,
      },
      {
        source: '/blog/what-are-stormwater-design-engineer-roles-in-redlands-redlands',
        destination: '/blog/what-are-stormwater-design-engineer-roles-in-redlands',
        permanent: true,
      },
      {
        source: '/blog/commercial-tenant-improvement-engineering-in-murrieta-murrieta',
        destination: '/blog/commercial-tenant-improvement-engineering-in-murrieta',
        permanent: true,
      },
      {
        source: '/blog/strip-mall-structural-engineering-in-garden-grove-garden-grove',
        destination: '/blog/strip-mall-structural-engineering-in-garden-grove',
        permanent: true,
      },
      {
        source: '/blog/commercial-property-structural-assessment-in-la-palma-la-palma',
        destination: '/blog/commercial-property-structural-assessment-in-la-palma',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-inglewood-inglewood',
        destination: '/blog/residential-structural-engineer-near-me-in-inglewood',
        permanent: true,
      },
      {
        source: '/blog/hillside-foundation-engineering-in-moreno-valley-moreno-valley',
        destination: '/blog/hillside-foundation-engineering-in-moreno-valley',
        permanent: true,
      },
      {
        source: '/blog/engineering-design-services-cost-in-baldwin-park-baldwin-park',
        destination: '/blog/engineering-design-services-cost-in-baldwin-park',
        permanent: true,
      },
      {
        source: '/blog/deck-structural-engineer-near-me-in-solana-beach-solana-beach',
        destination: '/blog/deck-structural-engineer-near-me-in-solana-beach',
        permanent: true,
      },
      {
        source: '/blog/custom-house-engineering-design-in-laguna-beach-laguna-beach',
        destination: '/blog/custom-house-engineering-design-in-laguna-beach',
        permanent: true,
      },
      {
        source: '/blog/role-of-a-design-engineer-in-fountain-valley-fountain-valley',
        destination: '/blog/role-of-a-design-engineer-in-fountain-valley',
        permanent: true,
      },
      {
        source: '/blog/commercial-tenant-improvement-engineering-in-stanton-stanton',
        destination: '/blog/commercial-tenant-improvement-engineering-in-stanton',
        permanent: true,
      },
      {
        source: '/blog/sustainable-engineering-design-services-in-torrance-torrance',
        destination: '/blog/sustainable-engineering-design-services-in-torrance',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-pasadena-pasadena',
        destination: '/blog/residential-structural-engineer-near-me-in-pasadena',
        permanent: true,
      },
      {
        source: '/blog/seismic-retrofit-engineer-near-me-in-los-angeles-los-angeles',
        destination: '/blog/seismic-retrofit-engineer-near-me-in-los-angeles',
        permanent: true,
      },
      {
        source: '/blog/commercial-parking-garage-engineering-in-fullerton-fullerton',
        destination: '/blog/commercial-parking-garage-engineering-in-fullerton',
        permanent: true,
      },
      {
        source: '/blog/fast-food-restaurant-structural-engineering-in-orange-orange',
        destination: '/blog/fast-food-restaurant-structural-engineering-in-orange',
        permanent: true,
      },
      {
        source: '/blog/benefits-of-engineering-design-services-in-glendale-glendale',
        destination: '/blog/benefits-of-engineering-design-services-in-glendale',
        permanent: true,
      },
      {
        source: '/blog/expansive-soil-foundation-engineering-in-riverside-riverside',
        destination: '/blog/expansive-soil-foundation-engineering-in-riverside',
        permanent: true,
      },
      {
        source: '/blog/professional-design-engineering-services-in-burbank-burbank',
        destination: '/blog/professional-design-engineering-services-in-burbank',
        permanent: true,
      },
      {
        source: '/blog/engineering-design-services-cost-in-chula-vista-chula-vista',
        destination: '/blog/engineering-design-services-cost-in-chula-vista',
        permanent: true,
      },
      {
        source: '/blog/what-are-the-types-of-engineering-design-in-ontario-ontario',
        destination: '/blog/what-are-the-types-of-engineering-design-in-ontario',
        permanent: true,
      },
      {
        source: '/blog/laboratory-building-structural-engineering-in-irvine-irvine',
        destination: '/blog/laboratory-building-structural-engineering-in-irvine',
        permanent: true,
      },
      {
        source: '/blog/affordable-structural-engineer-near-me-in-el-cajon-el-cajon',
        destination: '/blog/affordable-structural-engineer-near-me-in-el-cajon',
        permanent: true,
      },
      {
        source: '/blog/custom-house-engineering-design-in-yorba-linda-yorba-linda',
        destination: '/blog/custom-house-engineering-design-in-yorba-linda',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-in-los-angeles-los-angeles',
        destination: '/blog/residential-structural-engineer-in-los-angeles',
        permanent: true,
      },
      {
        source: '/blog/expert-structural-design-services-in-el-segundo-el-segundo',
        destination: '/blog/expert-structural-design-services-in-el-segundo',
        permanent: true,
      },
      {
        source: '/blog/foundation-assessment-guide-in-moreno-valley-moreno-valley',
        destination: '/blog/foundation-assessment-guide-in-moreno-valley',
        permanent: true,
      },
      {
        source: '/blog/brewery-winery-structural-engineering-in-lakeside-lakeside',
        destination: '/blog/brewery-winery-structural-engineering-in-lakeside',
        permanent: true,
      },
      {
        source: '/blog/commercial-structural-inspection-services-in-tustin-tustin',
        destination: '/blog/commercial-structural-inspection-services-in-tustin',
        permanent: true,
      },
      {
        source: '/blog/structural-engineer-near-me-in-mission-viejo-mission-viejo',
        destination: '/blog/structural-engineer-near-me-in-mission-viejo',
        permanent: true,
      },
      {
        source: '/blog/industrial-warehouse-design-engineering-in-cypress-cypress',
        destination: '/blog/industrial-warehouse-design-engineering-in-cypress',
        permanent: true,
      },
      {
        source: '/blog/engineering-design-services-cost-in-costa-mesa-costa-mesa',
        destination: '/blog/engineering-design-services-cost-in-costa-mesa',
        permanent: true,
      },
      {
        source: '/blog/earthquake-retrofitting-services-in-dana-point-dana-point',
        destination: '/blog/earthquake-retrofitting-services-in-dana-point',
        permanent: true,
      },
      {
        source: '/blog/types-of-engineering-design-services-in-la-habra-la-habra',
        destination: '/blog/types-of-engineering-design-services-in-la-habra',
        permanent: true,
      },
      {
        source: '/blog/mep-engineering-design-in-manhattan-beach-manhattan-beach',
        destination: '/blog/mep-engineering-design-in-manhattan-beach',
        permanent: true,
      },
      {
        source: '/blog/grading-and-drainage-plans-in-hermosa-beach-hermosa-beach',
        destination: '/blog/grading-and-drainage-plans-in-hermosa-beach',
        permanent: true,
      },
      {
        source: '/blog/warehouse-structural-engineering-in-long-beach-long-beach',
        destination: '/blog/warehouse-structural-engineering-in-long-beach',
        permanent: true,
      },
      {
        source: '/blog/stormwater-design-engineer-in-hermosa-beach-hermosa-beach',
        destination: '/blog/stormwater-design-engineer-in-hermosa-beach',
        permanent: true,
      },
      {
        source: '/blog/post-tension-foundation-design-in-chino-hills-chino-hills',
        destination: '/blog/post-tension-foundation-design-in-chino-hills',
        permanent: true,
      },
      {
        source: '/blog/best-structural-engineering-firms-in-orange-ca-orange-ca',
        destination: '/blog/best-structural-engineering-firms-in-orange-ca',
        permanent: true,
      },
      {
        source: '/blog/structural-design-experts-in-laguna-niguel-laguna-niguel',
        destination: '/blog/structural-design-experts-in-laguna-niguel',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-orange-orange',
        destination: '/blog/residential-structural-engineer-near-me-in-orange',
        permanent: true,
      },
      {
        source: '/blog/foundation-engineer-near-me-in-laguna-beach-laguna-beach',
        destination: '/blog/foundation-engineer-near-me-in-laguna-beach',
        permanent: true,
      },
      {
        source: '/blog/foundation-inspection-near-me-in-chula-vista-chula-vista',
        destination: '/blog/foundation-inspection-near-me-in-chula-vista',
        permanent: true,
      },
      {
        source: '/blog/grading-and-drainage-plans-in-laguna-woods-laguna-woods',
        destination: '/blog/grading-and-drainage-plans-in-laguna-woods',
        permanent: true,
      },
      {
        source: '/blog/adu-structural-engineering-in-los-alamitos-los-alamitos',
        destination: '/blog/adu-structural-engineering-in-los-alamitos',
        permanent: true,
      },
      {
        source: '/blog/mechanical-engineering-companies-in-san-diego-san-diego',
        destination: '/blog/mechanical-engineering-companies-in-san-diego',
        permanent: true,
      },
      {
        source: '/blog/tilt-up-construction-engineering-in-santa-ana-santa-ana',
        destination: '/blog/tilt-up-construction-engineering-in-santa-ana',
        permanent: true,
      },
      {
        source: '/blog/hotel-structural-engineering-in-palm-desert-palm-desert',
        destination: '/blog/hotel-structural-engineering-in-palm-desert',
        permanent: true,
      },
      {
        source: '/blog/gas-station-structural-engineering-in-highland-highland',
        destination: '/blog/gas-station-structural-engineering-in-highland',
        permanent: true,
      },
      {
        source: '/blog/garage-conversion-engineer-near-me-in-coronado-coronado',
        destination: '/blog/garage-conversion-engineer-near-me-in-coronado',
        permanent: true,
      },
      {
        source: '/blog/how-to-hire-a-structural-engineer-in-la-habra-la-habra',
        destination: '/blog/how-to-hire-a-structural-engineer-in-la-habra',
        permanent: true,
      },
      {
        source: '/blog/structural-engineering-for-home-additions-in-brea-brea',
        destination: '/blog/structural-engineering-for-home-additions-in-brea',
        permanent: true,
      },
      {
        source: '/blog/what-do-structural-engineers-do-in-oceanside-oceanside',
        destination: '/blog/what-do-structural-engineers-do-in-oceanside',
        permanent: true,
      },
      {
        source: '/blog/residential-structural-engineer-near-me-in-vista-vista',
        destination: '/blog/residential-structural-engineer-near-me-in-vista',
        permanent: true,
      },
      {
        source: '/blog/retail-structural-engineering-in-costa-mesa-costa-mesa',
        destination: '/blog/retail-structural-engineering-in-costa-mesa',
        permanent: true,
      },
      {
        source: '/blog/fitness-center-structural-engineering-in-alpine-alpine',
        destination: '/blog/fitness-center-structural-engineering-in-alpine',
        permanent: true,
      },
      {
        source: '/blog/adu-structural-engineer-near-me-in-san-diego-san-diego',
        destination: '/blog/adu-structural-engineer-near-me-in-san-diego',
        permanent: true,
      },
      {
        source: '/blog/how-to-hire-a-structural-engineer-in-whittier-whittier',
        destination: '/blog/how-to-hire-a-structural-engineer-in-whittier',
        permanent: true,
      },
      {
        source: '/blog/seismic-retrofit-engineer-near-me-in-carlsbad-carlsbad',
        destination: '/blog/seismic-retrofit-engineer-near-me-in-carlsbad',
        permanent: true,
      },
      {
        source: '/blog/septic-design-engineers-in-redondo-beach-redondo-beach',
        destination: '/blog/septic-design-engineers-in-redondo-beach',
        permanent: true,
      },
      {
        source: '/blog/structural-inspection-near-me-in-villa-park-villa-park',
        destination: '/blog/structural-inspection-near-me-in-villa-park',
        permanent: true,
      },
      {
        source: '/blog/residential-foundation-design-in-san-marcos-san-marcos',
        destination: '/blog/residential-foundation-design-in-san-marcos',
        permanent: true,
      },
      {
        source: '/blog/permit-engineer-near-me-in-national-city-national-city',
        destination: '/blog/permit-engineer-near-me-in-national-city',
        permanent: true,
      },
      {
        source: '/blog/engineering-design-consultants-in-santa-ana-santa-ana',
        destination: '/blog/engineering-design-consultants-in-santa-ana',
        permanent: true,
      },
      {
        source: '/blog/foundation-repair-engineer-near-me-in-anaheim-anaheim',
        destination: '/blog/foundation-repair-engineer-near-me-in-anaheim',
        permanent: true,
      },
      {
        source: '/blog/civil-engineer-near-me-in-laguna-niguel-laguna-niguel',
        destination: '/blog/civil-engineer-near-me-in-laguna-niguel',
        permanent: true,
      },
      {
        source: '/blog/foundation-repair-engineer-near-me-in-stanton-stanton',
        destination: '/blog/foundation-repair-engineer-near-me-in-stanton',
        permanent: true,
      },
      {
        source: '/blog/foundation-assessment-services-in-oceanside-oceanside',
        destination: '/blog/foundation-assessment-services-in-oceanside',
        permanent: true,
      },
      {
        source: '/blog/foundation-settlement-analysis-in-escondido-escondido',
        destination: '/blog/foundation-settlement-analysis-in-escondido',
        permanent: true,
      },
      {
        source: '/blog/pier-and-beam-foundation-engineering-in-santee-santee',
        destination: '/blog/pier-and-beam-foundation-engineering-in-santee',
        permanent: true,
      },
      {
        source: '/blog/crawl-space-foundation-engineering-in-fontana-fontana',
        destination: '/blog/crawl-space-foundation-engineering-in-fontana',
        permanent: true,
      },
      {
        source: '/blog/load-bearing-wall-engineer-near-me-in-del-mar-del-mar',
        destination: '/blog/load-bearing-wall-engineer-near-me-in-del-mar',
        permanent: true,
      },
      {
        source: '/blog/what-is-the-role-of-a-design-engineer-in-chino-chino',
        destination: '/blog/what-is-the-role-of-a-design-engineer-in-chino',
        permanent: true,
      },
      {
        source: '/blog/commercial-building-codes-in-los-angeles-los-angeles',
        destination: '/blog/commercial-building-codes-in-los-angeles',
        permanent: true,
      },
      {
        source: '/blog/parking-structure-engineering-in-fullerton-fullerton',
        destination: '/blog/parking-structure-engineering-in-fullerton',
        permanent: true,
      },
      {
        source: '/blog/types-of-engineering-design-in-montebello-montebello',
        destination: '/blog/types-of-engineering-design-in-montebello',
        permanent: true,
      },
      {
        source: '/blog/what-do-structural-engineers-do-in-alhambra-alhambra',
        destination: '/blog/what-do-structural-engineers-do-in-alhambra',
        permanent: true,
      },
      {
        source: '/blog/what-is-engineering-design-in-dana-point-dana-point',
        destination: '/blog/what-is-engineering-design-in-dana-point',
        permanent: true,
      },
      {
        source: '/blog/septic-design-engineers-in-aliso-viejo-aliso-viejo',
        destination: '/blog/septic-design-engineers-in-aliso-viejo',
        permanent: true,
      },
      {
        source: '/blog/septic-design-engineers-in-westminster-westminster',
        destination: '/blog/septic-design-engineers-in-westminster',
        permanent: true,
      },
      {
        source: '/blog/house-plan-engineer-in-newport-beach-newport-beach',
        destination: '/blog/house-plan-engineer-in-newport-beach',
        permanent: true,
      },
      {
        source: '/blog/car-wash-structural-engineering-in-yucaipa-yucaipa',
        destination: '/blog/car-wash-structural-engineering-in-yucaipa',
        permanent: true,
      },
      {
        source: '/blog/mechanical-engineering-design-in-glendale-glendale',
        destination: '/blog/mechanical-engineering-design-in-glendale',
        permanent: true,
      },
      {
        source: '/blog/foundation-crack-repair-engineering-in-vista-vista',
        destination: '/blog/foundation-crack-repair-engineering-in-vista',
        permanent: true,
      },
      {
        source: '/blog/drilled-shaft-foundation-design-in-menifee-menifee',
        destination: '/blog/drilled-shaft-foundation-design-in-menifee',
        permanent: true,
      },
      {
        source: '/blog/adu-structural-engineering-in-riverside-riverside',
        destination: '/blog/adu-structural-engineering-in-riverside',
        permanent: true,
      },
      {
        source: '/blog/what-is-engineering-design-in-encinitas-encinitas',
        destination: '/blog/what-is-engineering-design-in-encinitas',
        permanent: true,
      },
      {
        source: '/blog/foundation-underpinning-services-in-corona-corona',
        destination: '/blog/foundation-underpinning-services-in-corona',
        permanent: true,
      },
      {
        source: '/blog/caisson-foundation-engineering-in-la-mesa-la-mesa',
        destination: '/blog/caisson-foundation-engineering-in-la-mesa',
        permanent: true,
      },
      {
        source: '/blog/seismic-retrofit-requirements-in-cypress-cypress',
        destination: '/blog/seismic-retrofit-requirements-in-cypress',
        permanent: true,
      },
      {
        source: '/blog/seismic-retrofit-requirements-in-del-mar-del-mar',
        destination: '/blog/seismic-retrofit-requirements-in-del-mar',
        permanent: true,
      },
      {
        source: '/blog/foundation-engineer-near-me-in-whittier-whittier',
        destination: '/blog/foundation-engineer-near-me-in-whittier',
        permanent: true,
      },
      {
        source: '/blog/electrical-engineering-design-in-burbank-burbank',
        destination: '/blog/electrical-engineering-design-in-burbank',
        permanent: true,
      },
      {
        source: '/blog/title-24-energy-compliance-in-la-palma-la-palma',
        destination: '/blog/title-24-energy-compliance-in-la-palma',
        permanent: true,
      },
      {
        source: '/blog/title-24-energy-compliance-in-carlsbad-carlsbad',
        destination: '/blog/title-24-energy-compliance-in-carlsbad',
        permanent: true,
      },
      {
        source: '/blog/mep-engineering-design-in-san-marcos-san-marcos',
        destination: '/blog/mep-engineering-design-in-san-marcos',
        permanent: true,
      },
      {
        source: '/blog/commercial-structural-engineer-in-irvine-irvine',
        destination: '/blog/commercial-structural-engineer-in-irvine',
        permanent: true,
      },
      {
        source: '/blog/civil-engineer-near-me-in-long-beach-long-beach',
        destination: '/blog/civil-engineer-near-me-in-long-beach',
        permanent: true,
      },
      {
        source: '/blog/mep-engineer-near-me-in-yorba-linda-yorba-linda',
        destination: '/blog/mep-engineer-near-me-in-yorba-linda',
        permanent: true,
      },
      {
        source: '/blog/what-is-engineering-design-in-torrance-torrance',
        destination: '/blog/what-is-engineering-design-in-torrance',
        permanent: true,
      },
      {
        source: '/blog/grading-and-drainage-plans-in-torrance-torrance',
        destination: '/blog/grading-and-drainage-plans-in-torrance',
        permanent: true,
      },
      {
        source: '/blog/civil-site-engineering-in-el-segundo-el-segundo',
        destination: '/blog/civil-site-engineering-in-el-segundo',
        permanent: true,
      },
      {
        source: '/blog/concrete-foundation-design-in-temecula-temecula',
        destination: '/blog/concrete-foundation-design-in-temecula',
        permanent: true,
      },
      {
        source: '/blog/mat-foundation-engineering-in-murrieta-murrieta',
        destination: '/blog/mat-foundation-engineering-in-murrieta',
        permanent: true,
      },
      {
        source: '/blog/structural-engineering-design-in-irvine-irvine',
        destination: '/blog/structural-engineering-design-in-irvine',
        permanent: true,
      },
      {
        source: '/blog/slab-foundation-engineering-in-ontario-ontario',
        destination: '/blog/slab-foundation-engineering-in-ontario',
        permanent: true,
      },
      {
        source: '/blog/building-engineers-near-me-in-anaheim-anaheim',
        destination: '/blog/building-engineers-near-me-in-anaheim',
        permanent: true,
      },
      {
        source: '/blog/mep-engineering-design-in-placentia-placentia',
        destination: '/blog/mep-engineering-design-in-placentia',
        permanent: true,
      },
      {
        source: '/blog/structural-engineer-in-long-beach-long-beach',
        destination: '/blog/structural-engineer-in-long-beach',
        permanent: true,
      },
      {
        source: '/blog/structural-engineer-near-me-in-orange-orange',
        destination: '/blog/structural-engineer-near-me-in-orange',
        permanent: true,
      },
      {
        source: '/blog/foundation-engineer-near-me-in-tustin-tustin',
        destination: '/blog/foundation-engineer-near-me-in-tustin',
        permanent: true,
      },
      {
        source: '/blog/structural-engineer-near-me-in-downey-downey',
        destination: '/blog/structural-engineer-near-me-in-downey',
        permanent: true,
      },
      {
        source: '/blog/design-engineering-in-seal-beach-seal-beach',
        destination: '/blog/design-engineering-in-seal-beach',
        permanent: true,
      },
      {
        source: '/blog/adu-structural-engineering-in-corona-corona',
        destination: '/blog/adu-structural-engineering-in-corona',
        permanent: true,
      },
      {
        source: '/blog/stormwater-design-engineer-in-tustin-tustin',
        destination: '/blog/stormwater-design-engineer-in-tustin',
        permanent: true,
      },
      {
        source: '/blog/retail-store-structural-design-in-brea-brea',
        destination: '/blog/retail-store-structural-design-in-brea',
        permanent: true,
      },
      {
        source: '/blog/role-of-a-design-engineer-in-pomona-pomona',
        destination: '/blog/role-of-a-design-engineer-in-pomona',
        permanent: true,
      },
      {
        source: '/blog/seismic-foundation-retrofit-in-hemet-hemet',
        destination: '/blog/seismic-foundation-retrofit-in-hemet',
        permanent: true,
      },
      {
        source: '/blog/grading-and-drainage-plans-in-poway-poway',
        destination: '/blog/grading-and-drainage-plans-in-poway',
        permanent: true,
      },
      {
        source: '/blog/design-engineer-near-me-in-carson-carson',
        destination: '/blog/design-engineer-near-me-in-carson',
        permanent: true,
      },
      {
        source: '/blog/mep-engineer-near-me-in-ramona-ramona',
        destination: '/blog/mep-engineer-near-me-in-ramona',
        permanent: true,
      },
      {
        source: '/blog/deep-foundation-design-in-poway-poway',
        destination: '/blog/deep-foundation-design-in-poway',
        permanent: true,
      },
      // Additional redirects for 404s found in GSC (Jan 2026)
      {
        source: '/blog/shopping-center-structural-engineering-in-rancho-san-diego-rancho-san-diego',
        destination: '/blog/shopping-center-structural-engineering-in-rancho-san-diego',
        permanent: true,
      },
      {
        source: '/blog/bank-building-structural-engineering-in-desert-hot-springs-desert-hot-springs',
        destination: '/blog/bank-building-structural-engineering-in-desert-hot-springs',
        permanent: true,
      },
      {
        source: '/blog/commercial-high-rise-structural-engineering-in-lake-elsinore-lake-elsinore',
        destination: '/blog/commercial-high-rise-structural-engineering-in-lake-elsinore',
        permanent: true,
      },
      {
        source: '/blog/manufacturing-plant-structural-engineering-in-bonita-bonita',
        destination: '/blog/manufacturing-plant-structural-engineering-in-bonita',
        permanent: true,
      },
      {
        source: '/blog/commercial-structural-engineer-near-me-in-rancho-mirage-rancho-mirage',
        destination: '/blog/commercial-structural-engineer-near-me-in-rancho-mirage',
        permanent: true,
      },
      {
        source: '/blog/veterinary-clinic-structural-engineering-in-jurupa-valley-jurupa-valley',
        destination: '/blog/veterinary-clinic-structural-engineering-in-jurupa-valley',
        permanent: true,
      },
      {
        source: '/blog/self-storage-facility-structural-engineering-in-palm-springs-palm-springs',
        destination: '/blog/self-storage-facility-structural-engineering-in-palm-springs',
        permanent: true,
      },
      {
        source: '/blog/distribution-center-structural-engineering-in-perris-perris',
        destination: '/blog/distribution-center-structural-engineering-in-perris',
        permanent: true,
      },
      {
        source: '/blog/commercial-renovation-structural-engineering-in-spring-valley-spring-valley',
        destination: '/blog/commercial-renovation-structural-engineering-in-spring-valley',
        permanent: true,
      },
      {
        source: '/blog/medical-office-structural-engineering-in-san-jacinto-san-jacinto',
        destination: '/blog/medical-office-structural-engineering-in-san-jacinto',
        permanent: true,
      },
      {
        source: '/blog/earthquake-damage-engineer-near-me-in-jurupa-valley-jurupa-valley',
        destination: '/blog/earthquake-damage-engineer-near-me-in-jurupa-valley',
        permanent: true,
      },
      {
        source: '/blog/foundation-crack-engineer-near-me-in-desert-hot-springs-desert-hot-springs',
        destination: '/blog/foundation-crack-engineer-near-me-in-desert-hot-springs',
        permanent: true,
      },
      // Trailing slash variants for existing redirects
      {
        source: '/blog/best-structural-engineering-firms-in-orange-ca-orange-ca/',
        destination: '/blog/best-structural-engineering-firms-in-orange-ca',
        permanent: true,
      },
      {
        source: '/blog/how-to-hire-a-structural-engineer-in-la-habra-la-habra/',
        destination: '/blog/how-to-hire-a-structural-engineer-in-la-habra',
        permanent: true,
      },
      {
        source: '/blog/stormwater-design-engineer-in-westminster-westminster/',
        destination: '/blog/stormwater-design-engineer-in-westminster',
        permanent: true,
      },
      // Redirect for stormwater-design-engineer-redlands (broken internal link - redirect to related post)
      {
        source: '/blog/stormwater-design-engineer-redlands',
        destination: '/blog/stormwater-design-engineer-fullerton',
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

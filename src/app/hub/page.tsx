import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Building2, Cog, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Engineering Guides Hub | Complete Resources for California Projects | AAA Engineering',
  description: 'Comprehensive engineering guides covering structural, MEP, civil, and specialized services across Southern California. Expert resources for Orange County, Los Angeles, San Diego projects.',
  keywords: 'engineering guides california, structural engineering resources, MEP engineering guide, civil engineering services, southern california engineering',
  openGraph: {
    title: 'Engineering Guides Hub | AAA Engineering Design',
    description: 'Comprehensive engineering guides for California projects - structural, MEP, civil, and specialized services.',
    type: 'website',
    url: 'https://aaaengineeringdesign.com/hub',
  },
}

interface HubItem {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  url: string
  primaryKeyword: string
  monthlySearches: string
  clusterCount: number
  topics: string[]
  status: 'live' | 'coming-soon'
  badge?: string
}

const hubs: HubItem[] = [
  {
    id: 'structural-engineering',
    title: 'Complete Guide to Structural Engineering Services in Southern California',
    shortTitle: 'Structural Engineering Services',
    description: 'Everything you need to know about structural engineering - from residential projects to seismic retrofitting, foundation design, and ADU engineering across Orange County, LA, and San Diego.',
    icon: Building2,
    url: '/blog/structural-engineering-services-guide',
    primaryKeyword: 'structural engineering services',
    monthlySearches: '40,000+',
    clusterCount: 24,
    topics: ['Residential Structural Engineering', 'Seismic Retrofitting', 'Foundation Design', 'ADU Engineering', 'Home Additions', 'Commercial Structures'],
    status: 'live',
    badge: 'Most Popular'
  },
  {
    id: 'engineering-design',
    title: 'Complete Guide to Engineering Design Services in Southern California',
    shortTitle: 'Engineering Design Services',
    description: 'Comprehensive guide covering all engineering design disciplines - structural, civil, MEP, sustainable design, costs, benefits, and how to select the right engineering firm.',
    icon: FileText,
    url: '/blog/engineering-design-services-guide',
    primaryKeyword: 'engineering design services',
    monthlySearches: '25,000+',
    clusterCount: 31,
    topics: ['Design Process', 'Professional Services', 'Cost Guides', 'Sustainable Design', 'Commercial Design', 'Custom Residential'],
    status: 'live',
    badge: 'Comprehensive'
  },
  {
    id: 'specialized-services',
    title: 'Specialized Engineering Services in Southern California: MEP, Civil & Environmental',
    shortTitle: 'Specialized Engineering Services',
    description: 'Deep dive into MEP engineering, stormwater management, grading & drainage, septic systems, and other specialized California engineering services.',
    icon: Cog,
    url: '/blog/specialized-engineering-services-guide',
    primaryKeyword: 'specialized engineering services',
    monthlySearches: '12,000+',
    clusterCount: 16,
    topics: ['MEP Engineering', 'Stormwater Design', 'Grading & Drainage', 'Septic Engineering', 'Civil Engineering', 'Title 24 Compliance'],
    status: 'live',
  },
  {
    id: 'residential-engineering',
    title: 'Residential Structural Engineering in Southern California: Complete Homeowner\'s Guide',
    shortTitle: 'Residential Structural Engineering',
    description: 'Complete guide for homeowners covering home additions, ADUs, foundation repairs, seismic retrofitting, costs, permits, and how to find qualified residential structural engineers.',
    icon: Building2,
    url: '/blog/residential-structural-engineering-guide',
    primaryKeyword: 'residential structural engineer california',
    monthlySearches: '18,000+',
    clusterCount: 28,
    topics: ['Home Additions', 'ADU Engineering', 'Foundation Repair', 'Seismic Retrofitting', 'Residential Costs', 'Finding Engineers'],
    status: 'live',
    badge: 'For Homeowners'
  },
]

const comingSoonHubs: HubItem[] = [
  {
    id: 'adu-home-additions',
    title: 'ADU & Home Addition Engineering Guide',
    shortTitle: 'ADU & Home Additions',
    description: 'Complete guide to ADU structural engineering, garage conversions, second story additions, and California ADU regulations.',
    icon: Building2,
    url: '#coming-soon',
    primaryKeyword: 'ADU structural engineering california',
    monthlySearches: '15,000+',
    clusterCount: 5,
    topics: ['ADU Foundation Design', 'Garage Conversions', 'Second Story Additions', 'ADU Permits', 'Cost Guides'],
    status: 'coming-soon',
    badge: 'Hot Market'
  },
  {
    id: 'foundation-repair',
    title: 'Foundation Engineering & Repair Guide',
    shortTitle: 'Foundation Engineering',
    description: 'Everything about foundation design, assessment, repair methods, and solving foundation problems in Southern California.',
    icon: Building2,
    url: '#coming-soon',
    primaryKeyword: 'foundation repair california',
    monthlySearches: '18,000+',
    clusterCount: 3,
    topics: ['Foundation Assessment', 'Crack Repair', 'Underpinning', 'Expansive Soils', 'Seismic Retrofitting'],
    status: 'coming-soon',
  },
]

export default function HubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Engineering Knowledge Hub</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Complete Engineering Guides for Southern California
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert guides covering structural engineering, MEP design, civil engineering, and specialized services across Orange County, Los Angeles, San Diego, and the Inland Empire.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span><strong>{hubs.reduce((acc, h) => acc + h.clusterCount, 0)}+</strong> detailed articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span><strong>3</strong> comprehensive guides</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span><strong>10,000+</strong> words of expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Hubs */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Engineering Guide Library</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth guides created by licensed Professional Engineers serving Southern California since 2003
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => {
              const Icon = hub.icon
              return (
                <Card key={hub.id} className="group hover:shadow-lg transition-all border-2 hover:border-primary/50 relative overflow-hidden">
                  {hub.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {hub.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{hub.shortTitle}</CardTitle>
                    <CardDescription className="text-sm">
                      {hub.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>
                        <div className="font-semibold text-foreground">{hub.clusterCount}</div>
                        <div>Articles</div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{hub.monthlySearches}</div>
                        <div>Monthly Searches</div>
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <div className="text-xs font-semibold mb-2 text-muted-foreground">Topics Covered:</div>
                      <div className="flex flex-wrap gap-1">
                        {hub.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {hub.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{hub.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={hub.url}
                      className="flex items-center justify-between w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm group"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Hubs */}
      {comingSoonHubs.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                New comprehensive guides currently in development
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {comingSoonHubs.map((hub) => {
                const Icon = hub.icon
                return (
                  <Card key={hub.id} className="opacity-75 relative overflow-hidden border-dashed">
                    {hub.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="secondary" className="bg-orange-500 text-white">
                          {hub.badge}
                        </Badge>
                      </div>
                    )}

                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{hub.shortTitle}</CardTitle>
                        <Badge variant="outline" className="text-xs">Soon</Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {hub.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>
                          <div className="font-semibold text-foreground">{hub.clusterCount}+</div>
                          <div>Articles Planned</div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{hub.monthlySearches}</div>
                          <div>Monthly Searches</div>
                        </div>
                      </div>

                      {/* Topics */}
                      <div>
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Will Cover:</div>
                        <div className="flex flex-wrap gap-1">
                          {hub.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Geographic Coverage */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Southern California Coverage</h2>
            <p className="text-lg text-muted-foreground">
              Serving engineering projects throughout the region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-xl mb-2">Orange County</h3>
              <p className="text-sm text-muted-foreground">
                Irvine, Newport Beach, Anaheim, Santa Ana, Yorba Linda, and 30+ more cities
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Los Angeles</h3>
              <p className="text-sm text-muted-foreground">
                Downtown LA, Glendale, Long Beach, Torrance, Redondo Beach, and surrounding areas
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">San Diego & Inland Empire</h3>
              <p className="text-sm text-muted-foreground">
                San Diego, Carlsbad, Riverside, Corona, Temecula, and regional communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for AEO */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">What engineering guides are available?</h3>
              <p className="text-muted-foreground">
                We offer comprehensive guides covering structural engineering services, engineering design services, and specialized services (MEP, civil, environmental). Each guide includes 10-30+ detailed articles covering costs, processes, regulations, and best practices.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Are these guides specific to California?</h3>
              <p className="text-muted-foreground">
                Yes. All guides address California-specific requirements including seismic design, Title 24 energy compliance, CALGreen standards, and regional building codes. We cover Orange County, Los Angeles, San Diego, and Inland Empire jurisdictions.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Who writes these engineering guides?</h3>
              <p className="text-muted-foreground">
                All guides are created by licensed Professional Engineers (PE) at AAA Engineering Design with 20+ years of experience serving Southern California. Our team includes structural, civil, and MEP engineering specialists.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">How often are guides updated?</h3>
              <p className="text-muted-foreground">
                Guides are reviewed and updated regularly to reflect current California Building Code requirements, Title 24 updates, and evolving industry best practices. Last major update: November 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Engineering Services?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            These guides provide educational information. For actual engineering services on your California project, contact our licensed PE team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Engineering Guides Hub - AAA Engineering Design',
            description: 'Comprehensive engineering guides covering structural, MEP, civil, and specialized services across Southern California',
            url: 'https://aaaengineeringdesign.com/hub',
            provider: {
              '@type': 'Organization',
              name: 'AAA Engineering Design',
              url: 'https://aaaengineeringdesign.com',
            },
            hasPart: hubs.map(hub => ({
              '@type': 'Guide',
              name: hub.title,
              description: hub.description,
              url: `https://aaaengineeringdesign.com${hub.url}`,
              keywords: hub.primaryKeyword,
            })),
            areaServed: [
              {
                '@type': 'City',
                name: 'Orange County',
                containedInPlace: {
                  '@type': 'State',
                  name: 'California'
                }
              },
              {
                '@type': 'City',
                name: 'Los Angeles',
                containedInPlace: {
                  '@type': 'State',
                  name: 'California'
                }
              },
              {
                '@type': 'City',
                name: 'San Diego',
                containedInPlace: {
                  '@type': 'State',
                  name: 'California'
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}

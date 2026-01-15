import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { FadeInSection } from '@/components/FadeInSection'
import { COMPANY_INFO } from '@/lib/constants'
import { Award, MapPin, Building2, CheckCircle, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Aws Salahaldin, PE - Principal Engineer | AAA Engineering Design',
  description: 'Meet Aws Salahaldin, PE, founder of AAA Engineering Design. Licensed Professional Engineer with 15+ years experience and 500+ projects completed across Southern California.',
  alternates: {
    canonical: `${COMPANY_INFO.website}/about`,
  },
  openGraph: {
    title: 'About AAA Engineering Design | Aws Salahaldin, PE',
    description: 'Meet Aws Salahaldin, PE, founder of AAA Engineering Design. Licensed Professional Engineer with 15+ years experience serving Orange County, Los Angeles, and Southern California.',
    url: `${COMPANY_INFO.website}/about`,
    siteName: COMPANY_INFO.name,
    type: 'website',
  },
}

// Person Schema for Aws Salahaldin
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aws Salahaldin",
  "jobTitle": "Principal Structural Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "AAA Engineering Design",
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
    "Commercial Structural Design"
  ]
}

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": COMPANY_INFO.name,
  "description": "Licensed structural engineering firm serving Orange County, Los Angeles, and Southern California. Services include residential structural engineering, ADU design, seismic retrofitting, and commercial structures.",
  "url": COMPANY_INFO.website,
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
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
  "founder": {
    "@type": "Person",
    "name": "Aws Salahaldin",
    "jobTitle": "Principal Engineer"
  },
  "areaServed": [
    {"@type": "City", "name": "Irvine"},
    {"@type": "City", "name": "Newport Beach"},
    {"@type": "City", "name": "Anaheim"},
    {"@type": "City", "name": "Huntington Beach"},
    {"@type": "City", "name": "Santa Ana"},
    {"@type": "City", "name": "Orange"},
    {"@type": "City", "name": "Costa Mesa"},
    {"@type": "City", "name": "Long Beach"},
    {"@type": "City", "name": "Los Angeles"},
    {"@type": "City", "name": "San Diego"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Structural Engineering Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Residential Structural Engineering"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "ADU Structural Design"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Seismic Retrofitting"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Foundation Engineering"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Structural Engineering"}}
    ]
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-8 lg:pt-24 lg:pb-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <FadeInSection>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                About AAA Engineering Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Licensed Professional Engineers delivering high-quality structural engineering
                services throughout Southern California since 2009.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FadeInSection>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={100}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-primary mb-1">500+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-primary mb-1">100%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-primary mb-1">3</h3>
                  <p className="text-muted-foreground">Counties Served</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Principal Engineer Bio */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <FadeInSection>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Aws Salahaldin, PE</h2>
                    <p className="text-lg text-primary font-medium">Principal Engineer & Founder</p>
                  </div>

                  <div className="prose prose-lg text-muted-foreground">
                    <p>
                      Aws Salahaldin, PE, is the founder and principal engineer at AAA Engineering Design,
                      a structural engineering firm serving Southern California since 2009. With over
                      15 years of experience in structural analysis, seismic design, and construction
                      documentation, Aws has completed more than 500 residential and commercial projects
                      across Orange County, Los Angeles, and the Inland Empire.
                    </p>
                    <p>
                      Aws holds a Professional Engineer (PE) license in California and is a
                      member of the American Society of Civil Engineers (ASCE). His expertise includes
                      residential structural engineering, ADU design, seismic retrofitting, foundation
                      analysis, and commercial building structures.
                    </p>
                    <p>
                      AAA Engineering Design is known for responsive service, competitive pricing, and
                      engineering solutions that meet both code requirements and client budgets.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="space-y-6">
                  {/* Credentials Card */}
                  <div className="p-6 bg-muted/30 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Credentials & Memberships
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>California Professional Engineer (PE) License</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>American Society of Civil Engineers (ASCE) Member</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>15+ Years Professional Experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>500+ Projects Completed</span>
                      </li>
                    </ul>
                  </div>

                  {/* Areas Served Card */}
                  <div className="p-6 bg-muted/30 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Service Areas
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span className="text-muted-foreground">Orange County</span>
                      <span className="text-muted-foreground">Los Angeles County</span>
                      <span className="text-muted-foreground">San Diego County</span>
                      <span className="text-muted-foreground">Inland Empire</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Including Irvine, Newport Beach, Anaheim, Huntington Beach, Long Beach,
                      Los Angeles, San Diego, and surrounding communities.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Engineering Expertise</h2>
            </FadeInSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Residential Structural Engineering',
                  description: 'New homes, additions, remodels, and custom residential projects.'
                },
                {
                  title: 'ADU Design & Engineering',
                  description: 'Accessory dwelling units, garage conversions, and junior ADUs.'
                },
                {
                  title: 'Seismic Retrofitting',
                  description: 'Soft-story retrofit, foundation bolting, and earthquake strengthening.'
                },
                {
                  title: 'Foundation Engineering',
                  description: 'Foundation design, inspection, repair, and specialized systems.'
                },
                {
                  title: 'Load-Bearing Wall Removal',
                  description: 'Open floor plan engineering with beam and post design.'
                },
                {
                  title: 'Commercial Structures',
                  description: 'Office buildings, retail, tenant improvements, and industrial.'
                }
              ].map((service, index) => (
                <FadeInSection key={service.title} delay={index * 100}>
                  <div className="p-6 bg-background rounded-lg border h-full">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-8 text-center">Why Clients Choose AAA Engineering</h2>
            </FadeInSection>

            <div className="space-y-6">
              {[
                {
                  title: 'Licensed & Experienced',
                  description: 'All work completed by California-licensed Professional Engineers with extensive local experience.'
                },
                {
                  title: 'Responsive Communication',
                  description: 'Direct access to your engineer. We respond quickly to questions and keep you informed throughout your project.'
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Fair, transparent pricing without hidden fees. We provide detailed quotes before work begins.'
                },
                {
                  title: 'Fast Turnaround',
                  description: 'We understand project timelines. Most residential plans completed in 1-2 weeks.'
                },
                {
                  title: 'Local Building Department Expertise',
                  description: 'We work regularly with building departments throughout Southern California and understand their requirements.'
                },
                {
                  title: 'Quality Plans That Pass Review',
                  description: 'Our thorough plans minimize plan check corrections, saving you time and frustration.'
                }
              ].map((item, index) => (
                <FadeInSection key={item.title} delay={index * 50}>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

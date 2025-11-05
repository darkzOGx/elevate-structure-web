import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Phone,
  Building2,
  CheckCircle2,
  Home,
  Clock,
  Shield,
  Award,
  ArrowRight,
  ExternalLink,
  Globe,
  Mountain,
  Hammer,
  FileCheck,
  Users
} from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { getLocationById, getAllLocations } from '@/lib/locations-data'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema-data'

interface LocationPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const locations = getAllLocations()
  return locations.map((location) => ({
    slug: location.id,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationById(slug)

  if (!location) {
    return {
      title: 'Location Not Found | AAA Engineering Design',
    }
  }

  return {
    title: `${location.title} | ${COMPANY_INFO.name}`,
    description: location.metaDescription,
    keywords: `structural engineer ${location.city}, ${location.city} structural engineering, structural engineer near me, ${location.city} building permits, ADU ${location.city}, seismic retrofit ${location.city}, ${location.county} structural engineer`,
    openGraph: {
      title: `${location.title} | ${COMPANY_INFO.name}`,
      description: location.metaDescription,
      url: `${COMPANY_INFO.website}/locations/${slug}`,
      siteName: COMPANY_INFO.name,
      type: 'website',
    }
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationById(slug)

  if (!location) {
    notFound()
  }

  // Generate schema for this location
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Structural Engineering",
    "name": `Structural Engineering Services in ${location.city}`,
    "description": location.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${COMPANY_INFO.website}/#organization`,
      "name": COMPANY_INFO.name
    },
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "containedIn": {
        "@type": "State",
        "name": location.state
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": COMPANY_INFO.priceRange
    }
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Locations', url: `${COMPANY_INFO.website}/locations` },
    { name: location.city, url: `${COMPANY_INFO.website}/locations/${slug}` }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background relative">
        <AnimatedBackground />
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-12 lg:pt-24 lg:pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                  <span>/</span>
                  <span className="text-foreground">{location.city}</span>
                </div>

                {/* Location Badge */}
                <Badge className="mb-4 text-sm px-4 py-1">
                  <MapPin className="h-3 w-3 mr-2" />
                  {location.city}, {location.state}
                </Badge>

                {/* Title */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  {location.heroTitle}
                </h1>

                {/* Description */}
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
                  {location.heroDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/#contact">
                    <Button size="lg" className="text-base px-8 py-6 h-auto">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={`tel:${COMPANY_INFO.phone}`}>
                    <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      {COMPANY_INFO.phone}
                    </Button>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <Badge className="mb-4">
                    <Award className="h-3 w-3 mr-2" />
                    Local Expertise
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Why Choose AAA Engineering Design in {location.city}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our licensed Professional Engineers bring deep local knowledge and proven expertise to every {location.city} project.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {location.whyChoosePoints.map((point, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm leading-relaxed pt-1.5">{point}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Local Expertise Details */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
                  Our {location.city} Local Expertise
                </h2>
              </FadeInSection>

              <div className="grid gap-8 md:grid-cols-2">
                <FadeInSection delay={100}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Building Department Experience</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.localExpertise.buildingDepartment}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <FileCheck className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Projects Completed</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.localExpertise.projectsCompleted}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Mountain className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Soil & Foundation Knowledge</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.localExpertise.soilKnowledge}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={400}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Code Expertise</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.localExpertise.codeExpertise}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          </section>

          {/* Common Projects */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <Badge className="mb-4">
                    <Hammer className="h-3 w-3 mr-2" />
                    Services
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Common {location.city} Projects
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We provide structural engineering for a wide range of projects throughout {location.city}.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {location.commonProjects.map((project, index) => (
                  <FadeInSection key={index} delay={(index % 6) * 50}>
                    <Card className="border hover:border-primary/50 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{project}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Building Department Info */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="max-w-4xl mx-auto">
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Building2 className="h-8 w-8 text-primary" />
                        <div>
                          <h2 className="text-2xl font-bold">
                            {location.city} Building Department Information
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Important information for your {location.city} project
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Address</p>
                            <p className="text-sm text-muted-foreground">{location.buildingDepartmentInfo.address}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Phone</p>
                            <a href={`tel:${location.buildingDepartmentInfo.phone}`} className="text-sm text-primary hover:underline">
                              {location.buildingDepartmentInfo.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Typical Permit Timeline</p>
                            <p className="text-sm text-muted-foreground">{location.buildingDepartmentInfo.permitTimeline}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Website</p>
                            <a
                              href={location.buildingDepartmentInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Visit Website
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {location.buildingDepartmentInfo.onlinePortal && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600 inline mr-2" />
                            Online permit portal available for convenient application submission and tracking
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Neighborhoods & Soil Conditions */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <FadeInSection>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Home className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold">
                          {location.city} Neighborhoods We Serve
                        </h2>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {location.neighborhoods.map((neighborhood, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{neighborhood}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Mountain className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold">
                          Local Soil Conditions
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.soilConditions}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Frequently Asked Questions About Structural Engineering in {location.city}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Common questions from {location.city} homeowners and property owners
                  </p>
                </div>
              </FadeInSection>

              <div className="space-y-6">
                {location.faqs.map((faq, index) => (
                  <FadeInSection key={index} delay={index * 50}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-primary">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial */}
          {location.testimonial && (
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <FadeInSection>
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-8 text-center">
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <blockquote className="text-lg mb-4 italic">
                        &ldquo;{location.testimonial.text}&rdquo;
                      </blockquote>
                      <div className="font-semibold">{location.testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{location.testimonial.project}</div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </section>
          )}

          {/* Nearby Areas */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Service Areas Near {location.city}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We also proudly serve these nearby communities
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {location.nearbyAreas.map((area, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                      {area}
                    </Badge>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      Ready to Start Your {location.city} Project?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Contact our licensed Professional Engineers for a free consultation about your structural engineering needs in {location.city}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/#contact">
                        <Button size="lg" className="text-base px-8 py-6 h-auto">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <a href={`tel:${COMPANY_INFO.phone}`}>
                        <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                          <Phone className="mr-2 h-4 w-4" />
                          Call {COMPANY_INFO.phone}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

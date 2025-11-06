import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  FileCheck,
  Target,
  Zap,
  Shield
} from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { getServiceById, getAllServices } from '@/lib/services-data'
import { generateBreadcrumbSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/schema-data'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceById(slug)

  if (!service) {
    return {
      title: 'Service Not Found | AAA Engineering Design',
    }
  }

  return {
    title: `${service.title} | ${COMPANY_INFO.name}`,
    description: service.metaDescription,
    keywords: `${service.shortTitle}, California ${service.shortTitle}, structural engineering, PE stamped plans, ${service.shortTitle} cost, ${service.shortTitle} engineer`,
    openGraph: {
      title: `${service.title} | ${COMPANY_INFO.name}`,
      description: service.metaDescription,
      url: `${COMPANY_INFO.website}/services/${slug}`,
      siteName: COMPANY_INFO.name,
      type: 'website',
    }
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceById(slug)

  if (!service) {
    notFound()
  }

  // Generate schema for this service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.shortTitle,
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${COMPANY_INFO.website}/#organization`,
      "name": COMPANY_INFO.name
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": COMPANY_INFO.priceRange
    }
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Services', url: `${COMPANY_INFO.website}/services` },
    { name: service.shortTitle, url: `${COMPANY_INFO.website}/services/${slug}` }
  ])

  // FAQ Schema for AI Overview/GEO optimization
  const faqSchema = generateFAQPageSchema(service.faqs)

  // HowTo Schema for process steps (boosts AI citations by 5.42%)
  const howToSchema = generateHowToSchema({
    name: `How to Get ${service.shortTitle}`,
    description: `Step-by-step process for obtaining ${service.shortTitle.toLowerCase()} from AAA Engineering Design`,
    totalTime: service.timeline.total,
    steps: service.processSteps.map(step => ({
      name: step.title,
      text: step.description
    }))
  })

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
                  <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-foreground">{service.shortTitle}</span>
                </div>

                {/* Icon Badge */}
                <div className="text-6xl mb-6">{service.icon}</div>

                {/* Title */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  {service.heroTitle}
                </h1>

                {/* Description */}
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
                  {service.heroDescription}
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

          {/* Overview Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  What is {service.shortTitle}?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.overview}
                </p>
              </FadeInSection>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <Badge className="mb-4">
                    <Shield className="h-3 w-3 mr-2" />
                    Key Benefits
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Why Choose Our {service.shortTitle} Services
                  </h2>
                </div>
              </FadeInSection>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.keyBenefits.map((benefit, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm leading-relaxed pt-1.5">{benefit}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* What We Provide */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <Badge className="mb-4">
                    <FileCheck className="h-3 w-3 mr-2" />
                    Deliverables
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    What We Provide
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive {service.shortTitle.toLowerCase()} services with complete documentation
                  </p>
                </div>
              </FadeInSection>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {service.whatWeProvide.map((item, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <Badge className="mb-4">
                    <Zap className="h-3 w-3 mr-2" />
                    Our Process
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    How It Works
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our streamlined process for {service.shortTitle.toLowerCase()}
                  </p>
                </div>
              </FadeInSection>

              <div className="space-y-6">
                {service.processSteps.map((step, index) => (
                  <FadeInSection key={index} delay={index * 50}>
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Common Applications */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Common Applications
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We provide {service.shortTitle.toLowerCase()} for a wide range of projects
                  </p>
                </div>
              </FadeInSection>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {service.commonApplications.map((application, index) => (
                  <FadeInSection key={index} delay={(index % 6) * 50}>
                    <Card className="border hover:border-primary/50 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{application}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Cost & Timeline */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Cost Information */}
                <FadeInSection>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <div>
                          <h2 className="text-2xl font-bold">Cost Information</h2>
                          <p className="text-sm text-muted-foreground">
                            Transparent pricing for your project
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold mb-2">Typical Range:</p>
                          <p className="text-muted-foreground">{service.costRange.typical}</p>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">Factors Affecting Cost:</p>
                          <ul className="space-y-2">
                            {service.costRange.factors.slice(0, 6).map((factor, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{factor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground italic">
                            {service.costRange.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>

                {/* Timeline Information */}
                <FadeInSection delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Clock className="h-8 w-8 text-primary" />
                        <div>
                          <h2 className="text-2xl font-bold">Timeline</h2>
                          <p className="text-sm text-muted-foreground">
                            What to expect for your project
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <p className="font-semibold">Design Phase</p>
                          </div>
                          <p className="text-muted-foreground ml-5">{service.timeline.design}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <p className="font-semibold">Permitting</p>
                          </div>
                          <p className="text-muted-foreground ml-5">{service.timeline.permitting}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <p className="font-semibold">Total Timeline</p>
                          </div>
                          <p className="text-muted-foreground ml-5">{service.timeline.total}</p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground italic">
                            Timelines vary based on project complexity, jurisdiction requirements, and information availability. We provide detailed schedules during consultation.
                          </p>
                        </div>
                      </div>
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
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Common questions about {service.shortTitle.toLowerCase()}
                  </p>
                </div>
              </FadeInSection>

              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
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

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      {service.cta.headline}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {service.cta.description}
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

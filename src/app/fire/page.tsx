import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, Shield, ClipboardCheck, Users, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'LA Wildfire Recovery Support | AAA Engineering Design',
  description: 'Dedicated structural engineering support for homeowners affected by LA wildfires. Fire damage assessment, repair design, and construction consultation services.',
  keywords: 'wildfire recovery, fire damage assessment, structural engineering, LA fires, home reconstruction, fire repair',
}

export default function FireRecoveryPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-orange-50 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center space-y-8">
              <FadeInSection>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Flame className="h-8 w-8 text-orange-600" />
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Emergency Response
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl mb-6">
                  LA Wildfire Recovery
                  <span className="text-orange-600 block">Support Services</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl mb-8">
                  We&apos;re providing dedicated structural engineering support to homeowners affected by the LA wildfires.
                  From damage assessment to reconstruction design, we&apos;re here to help you rebuild safely and efficiently.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#contact">
                    <Button size="lg" className="text-base px-8 py-6 h-auto bg-orange-600 hover:bg-orange-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency Consultation
                    </Button>
                  </Link>
                  <Link href={`mailto:${COMPANY_INFO.email}?subject=Wildfire Damage Assessment Request`}>
                    <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Assessment Request
                    </Button>
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Comprehensive Fire Recovery Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our licensed Professional Engineers provide complete support throughout your wildfire recovery process.
                </p>
              </div>
            </FadeInSection>

            <div className="grid gap-8 md:grid-cols-3">
              <FadeInSection delay={200}>
                <Card className="h-full border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">A. Investigation and Consulting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h4 className="font-semibold text-orange-600">Structural Members Fire Damage Assessment</h4>
                    <p className="text-muted-foreground">
                      Smoke damage can impact indoor air quality and building materials, often requiring professional assessment and guidance.
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium">Structural Site Visit and Fire Damage Assessment:</h5>
                      <p className="text-sm text-muted-foreground">
                        We conduct thorough on-site evaluations to assess structural integrity and identify fire-related damage in residential properties,
                        providing detailed reports and recommendations for repairs or reconstruction.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Comprehensive structural assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Fire damage documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Safety evaluation reports</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={400}>
                <Card className="h-full border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <ClipboardCheck className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">B. Structural Design for Fire Repair</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h4 className="font-semibold text-orange-600">Residential Fire Repair Design</h4>
                    <p className="text-muted-foreground">
                      Let our experienced team support you through the structural recovery process. From damage assessment to final design,
                      we ensure your residential repairs are safe, code-compliant, and tailored to restore your home efficiently—so you can focus on moving forward with confidence.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Custom repair designs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Code-compliant solutions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Permit-ready drawings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Efficient restoration planning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={600}>
                <Card className="h-full border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">C. Construction Process Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h4 className="font-semibold text-orange-600">Quality Assurance Throughout Recovery</h4>
                    <p className="text-muted-foreground">
                      From initial cleanup to final construction, our team provides expert consultation at every stage.
                      We help ensure that each phase is executed to the highest standards—streamlining the process, maintaining code compliance,
                      and delivering lasting quality for your rebuild.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Phase-by-phase guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Quality control inspections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Code compliance verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Construction administration</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Emergency Response Section */}
        <section className="py-16 lg:py-24 bg-orange-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <FadeInSection>
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      Emergency Response
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Immediate Support When You Need It Most
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    We understand the urgency of wildfire recovery. Our team is ready to provide immediate structural assessments
                    and begin the planning process to get you back in your home as quickly and safely as possible.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">24-Hour Emergency Response</h4>
                        <p className="text-sm text-muted-foreground">Rapid structural safety assessments for immediate occupancy determination</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Insurance Coordination</h4>
                        <p className="text-sm text-muted-foreground">We work directly with insurance adjusters to document damage and facilitate claims</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Expedited Permitting</h4>
                        <p className="text-sm text-muted-foreground">Fast-track permit applications for urgent repairs and rebuilds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <Card className="p-8 bg-white border-2 border-orange-200">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment to Fire Recovery</h3>
                  <div className="space-y-4 text-center">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Same Day</div>
                      <div className="text-sm text-muted-foreground">Emergency Assessment Response</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Licensed PE</div>
                      <div className="text-sm text-muted-foreground">Professional Engineers</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-sm text-muted-foreground">Code Compliant Designs</div>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <FadeInSection>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get Emergency Support Now
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Don&apos;t wait - contact us immediately for emergency structural assessment and fire recovery planning.
                  We&apos;re here to help you navigate this challenging time.
                </p>
              </div>
            </FadeInSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <FadeInSection delay={200}>
                <Card className="text-center p-6 border-2 border-orange-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">Emergency Hotline</h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-lg font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">24/7 Emergency Response</p>
                </Card>
              </FadeInSection>

              <FadeInSection delay={400}>
                <Card className="text-center p-6 border-2 border-orange-200 hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">Email Assessment</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Wildfire Damage Assessment Request`}
                    className="text-lg font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Send Photos
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Preliminary damage assessment</p>
                </Card>
              </FadeInSection>

              <FadeInSection delay={600}>
                <Card className="text-center p-6 border-2 border-orange-200 hover:border-orange-300 transition-colors md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">Emergency Hours</h3>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-orange-600">24/7 Emergency Response</p>
                    <p className="mt-1">Regular Hours:</p>
                    <p>Monday-Friday 11AM-3PM</p>
                  </div>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Building2, Calendar, MapPin, Ruler, Users, CheckCircle, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'CMU Warehouse Mezzanine Construction Project | 2-Story Steel Structure Design California',
  description: 'Professional structural engineering for CMU warehouse mezzanine construction. Expert 2-story steel mezzanine design, foundation analysis, and code compliance in California. 4,500 sq ft industrial mezzanine project completed in 3 weeks.',
  keywords: 'CMU warehouse mezzanine, steel mezzanine design, warehouse construction California, industrial mezzanine engineering, 2-story mezzanine structure, warehouse structural engineering, mezzanine load capacity, CMU building mezzanine, steel beam design California, warehouse space optimization',
  openGraph: {
    title: 'CMU Warehouse Mezzanine | 2-Story Steel Structure Design',
    description: 'Expert structural engineering for 4,500 sq ft CMU warehouse mezzanine. Professional steel structure design with 125 psf load capacity. Licensed PE engineers in California.',
    type: 'article',
    url: '/projects/cmu-warehouse-mezzanine',
  }
}

export default function CMUWarehouseMezzaninePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl">
            <Badge className="mb-4">Commercial Project</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              CMU Warehouse Mezzanine Construction
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structural engineering design for a 2-story steel mezzanine within an existing CMU warehouse, maximizing vertical storage capacity while ensuring structural integrity and code compliance.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Ruler className="h-4 w-4" />
                  <span className="text-sm">Area</span>
                </div>
                <div className="text-2xl font-bold">4,500 sq ft</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">Stories</span>
                </div>
                <div className="text-2xl font-bold">2 Levels</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Load Capacity</span>
                </div>
                <div className="text-2xl font-bold">125 psf</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Completion</span>
                </div>
                <div className="text-2xl font-bold">3 Weeks</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Industrial District, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>Commercial Mezzanine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                <div className="prose prose-gray max-w-none text-muted-foreground">
                  <p className="mb-4">
                    This commercial mezzanine project involved the structural engineering design of a robust 2-story steel mezzanine system within an existing CMU (Concrete Masonry Unit) warehouse facility. The client needed to maximize their vertical storage capacity without compromising the structural integrity of the existing building.
                  </p>
                  <p className="mb-4">
                    Our team provided comprehensive structural engineering services, including detailed analysis of the existing CMU structure, design of the steel mezzanine framework, foundation load calculations, and complete construction documentation. The 4,500 square foot mezzanine was designed to support a live load of 125 pounds per square foot, suitable for heavy industrial storage applications.
                  </p>
                  <p>
                    The project required careful coordination with the existing building systems, seismic considerations per California Building Code, and integration with the warehouse&apos;s operational requirements. All work was completed by our licensed Professional Engineers with full code compliance and permit-ready documentation.
                  </p>
                </div>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Scope of Work</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Steel beam and column structural design',
                    'Foundation load analysis and verification',
                    'Connection detail engineering',
                    'Seismic load calculations',
                    'Code compliance documentation',
                    'Construction drawings and specifications',
                    'Structural calculations package',
                    'Permit-ready submittal package'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Structural System</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Steel wide-flange beams</li>
                          <li>• Steel tube columns</li>
                          <li>• Metal deck flooring system</li>
                          <li>• Bolted connections</li>
                          <li>• Concrete footings</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Design Criteria</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Live Load: 125 psf</li>
                          <li>• Dead Load: 25 psf</li>
                          <li>• Seismic Design Category: D</li>
                          <li>• Wind Load: 85 mph</li>
                          <li>• Code: CBC 2022</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Key Challenges &amp; Solutions</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Existing Structure Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Challenge: Designing the mezzanine to work with existing CMU walls without overloading the foundation.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Solution: Conducted thorough structural analysis of existing conditions and designed independent column supports with spread footings to distribute loads effectively.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Seismic Performance</h3>
                      <p className="text-sm text-muted-foreground">
                        Challenge: Ensuring mezzanine meets California seismic requirements for Seismic Design Category D.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Solution: Implemented lateral bracing system and designed connections for ductile behavior under seismic loading.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Fast-Track Timeline</h3>
                      <p className="text-sm text-muted-foreground">
                        Challenge: Client needed quick turnaround to minimize operational downtime.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Solution: Streamlined design process and provided complete permit-ready package in just 3 weeks.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Project Information</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Client Type</div>
                      <div className="font-medium">Commercial / Industrial</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Project Type</div>
                      <div className="font-medium">Mezzanine Structural Design</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Location</div>
                      <div className="font-medium">California</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Timeline</div>
                      <div className="font-medium">3 Weeks (Design Phase)</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Status</div>
                      <div className="font-medium text-green-600">Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Provided */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Services Provided</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Structural Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Steel Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Foundation Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Code Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Construction Documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Permit Assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Similar Engineering?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get expert structural engineering for your commercial mezzanine or warehouse project.
                  </p>
                  <Link href="/#contact">
                    <Button
                      variant="secondary"
                      className="w-full"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Us Today
                    </Button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-primary-foreground/20 text-center">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-medium hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Badge className="mb-3">Residential</Badge>
                <h3 className="text-xl font-bold mb-2">3-Story Residential Home</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete wood framing structural engineering for a custom 3-story home in Orange County.
                </p>
                <Link href="/projects/3-story-residential-home" className="text-sm font-medium text-primary hover:underline">
                  View Project →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Badge className="mb-3">Luxury Residential</Badge>
                <h3 className="text-xl font-bold mb-2">Palisades Home</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wood framing and architectural steel canopy for a luxury 2-story residence.
                </p>
                <Link href="/projects/palisades-home" className="text-sm font-medium text-primary hover:underline">
                  View Project →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

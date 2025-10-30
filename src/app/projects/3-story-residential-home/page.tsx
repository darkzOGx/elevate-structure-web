import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, Calendar, MapPin, Ruler, Layers, CheckCircle, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '3-Story Residential Home Wood Framing Engineering | Orange County CA Structural Design',
  description: 'Expert wood framing structural engineering for 3-story custom home in Orange County California. Professional floor joist design, load-bearing walls, seismic resistance. Licensed PE engineers with 2-week turnaround.',
  keywords: '3-story home framing, residential wood framing California, Orange County structural engineering, custom home structural design, wood framing engineer, 3-story house construction, residential structural plans, seismic residential design, California building code compliance, home addition structural engineer',
  openGraph: {
    title: '3-Story Residential Home | Wood Framing Structural Engineering',
    description: 'Professional structural engineering for 3,200 sq ft custom 3-story home. Complete wood framing design with seismic resistance. Licensed PE in Orange County, California.',
    type: 'article',
    url: '/projects/3-story-residential-home',
  }
}

export default function ThreeStoryResidentialPage() {
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
            <Badge className="mb-4">Residential Project</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              3-Story Custom Residential Home
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete structural engineering and wood framing design for a modern 3-story residential home featuring complex floor systems, load-bearing walls, and advanced seismic resistance engineering.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Ruler className="h-4 w-4" />
                  <span className="text-sm">Area</span>
                </div>
                <div className="text-2xl font-bold">3,200 sq ft</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Layers className="h-4 w-4" />
                  <span className="text-sm">Stories</span>
                </div>
                <div className="text-2xl font-bold">3 Levels</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Type</span>
                </div>
                <div className="text-2xl font-bold">Custom</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Completion</span>
                </div>
                <div className="text-2xl font-bold">2 Weeks</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Orange County, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Residential Construction</span>
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
                    This custom 3-story residential project in Orange County required comprehensive structural engineering for a modern family home featuring open floor plans, large windows, and contemporary architectural elements. Our team provided complete wood framing structural design to ensure the home meets all California building codes while achieving the owner&apos;s vision.
                  </p>
                  <p className="mb-4">
                    The 3,200 square foot residence presented unique structural challenges including complex floor joist systems to accommodate open living spaces, load-bearing wall configurations, and seismic resistance engineering per California requirements. Our licensed Professional Engineers delivered complete structural plans including foundation design, wall framing schedules, floor and roof framing plans, and connection details.
                  </p>
                  <p>
                    All structural engineering work was completed in just 2 weeks with permit-ready drawings and calculations, allowing the project to move forward quickly without delays. The design incorporates modern construction techniques while ensuring long-term structural integrity and safety.
                  </p>
                </div>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Scope of Work</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Foundation design and specifications',
                    'Floor joist and beam sizing',
                    'Load-bearing wall engineering',
                    'Roof framing structural design',
                    'Seismic lateral system design',
                    'Shear wall and hold-down schedule',
                    'Connection details and specifications',
                    'Permit-ready construction drawings'
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
                          <li>• Conventional wood framing</li>
                          <li>• Engineered lumber floor joists</li>
                          <li>• 2x6 exterior wall studs</li>
                          <li>• Plywood shear walls</li>
                          <li>• Concrete slab-on-grade foundation</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Design Criteria</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Floor Live Load: 40 psf</li>
                          <li>• Roof Live Load: 20 psf</li>
                          <li>• Seismic Design Category: D</li>
                          <li>• Wind Load: 85 mph</li>
                          <li>• Code: 2022 California Building Code</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Design Highlights</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Open Floor Plan Engineering</h3>
                      <p className="text-sm text-muted-foreground">
                        Designed engineered lumber beams and floor systems to support large open living areas on the main floor while maintaining structural integrity across all three levels.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Advanced Seismic Resistance</h3>
                      <p className="text-sm text-muted-foreground">
                        Implemented comprehensive lateral force-resisting system including properly placed shear walls, hold-downs, and connections to meet California&apos;s stringent seismic requirements for Seismic Design Category D.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Code Compliance Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        All structural elements designed to meet or exceed 2022 California Building Code requirements with clear, detailed drawings that passed plan check on first submittal.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Efficient Timeline</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete structural engineering package delivered in just 2 weeks including foundation plans, framing plans, details, and structural calculations - keeping the project on schedule.
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
                      <div className="font-medium">Homeowner</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Project Type</div>
                      <div className="font-medium">New Custom Home</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Location</div>
                      <div className="font-medium">Orange County, CA</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Timeline</div>
                      <div className="font-medium">2 Weeks (Design Phase)</div>
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
                      <span>Wood Framing Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Foundation Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Seismic Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Construction Drawings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Permit Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Planning a Custom Home?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get expert structural engineering for your residential project. Fast turnaround, code compliant designs.
                  </p>
                  <Link href="/#contact">
                    <Button
                      variant="secondary"
                      className="w-full"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Free Consultation
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
                <Badge className="mb-3">Commercial</Badge>
                <h3 className="text-xl font-bold mb-2">CMU Warehouse Mezzanine</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  2-story steel mezzanine structural design for industrial warehouse expansion.
                </p>
                <Link href="/projects/cmu-warehouse-mezzanine" className="text-sm font-medium text-primary hover:underline">
                  View Project →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Badge className="mb-3">Luxury Residential</Badge>
                <h3 className="text-xl font-bold mb-2">Palisades Home</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wood framing and architectural steel canopy for luxury 2-story residence.
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

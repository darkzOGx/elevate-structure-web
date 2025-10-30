import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, Calendar, MapPin, Ruler, Sparkles, CheckCircle, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Palisades Luxury Home Steel Canopy & Wood Framing | Pacific Palisades CA Structural Engineering',
  description: 'Premium structural engineering for Pacific Palisades luxury 2-story home. Custom wood framing design and architectural steel canopy entrance. Licensed PE engineers in California with 2.5-week completion.',
  keywords: 'Pacific Palisades structural engineer, luxury home framing California, steel canopy design, architectural steel entrance, wood framing engineer Palisades, 2-story home structural plans, custom residential engineering, premium home construction, steel and wood structure, California luxury home engineer',
  openGraph: {
    title: 'Palisades Luxury Home | Steel Canopy & Wood Framing Engineering',
    description: 'Expert structural engineering for 2,800 sq ft luxury home featuring custom wood framing and architectural steel canopy. Licensed PE in Pacific Palisades, California.',
    type: 'article',
    url: '/projects/palisades-home',
  }
}

export default function PalisadesHomePage() {
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
            <Badge className="mb-4">Luxury Residential</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Pacific Palisades Luxury Residence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium structural engineering for a 2-story luxury home featuring innovative wood framing design and a stunning architectural steel canopy entrance that enhances curb appeal and property value.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Ruler className="h-4 w-4" />
                  <span className="text-sm">Area</span>
                </div>
                <div className="text-2xl font-bold">2,800 sq ft</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Stories</span>
                </div>
                <div className="text-2xl font-bold">2 Levels</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">Features</span>
                </div>
                <div className="text-2xl font-bold">2 Structures</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Completion</span>
                </div>
                <div className="text-2xl font-bold">2.5 Weeks</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Pacific Palisades, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Luxury Residential</span>
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
                    This prestigious Pacific Palisades residential project combined traditional wood framing expertise with modern architectural steel design. The 2,800 square foot luxury home required comprehensive structural engineering for both the main residence and a dramatic custom steel canopy entrance feature.
                  </p>
                  <p className="mb-4">
                    The project scope included complete structural design for the 2-story wood-framed residence plus engineering of an architecturally striking steel canopy that serves as both a functional entrance cover and a distinctive design element. Our licensed Professional Engineers provided detailed engineering for foundation coordination, wood framing systems, and the custom steel fabrication specifications.
                  </p>
                  <p>
                    The dual-structure approach required careful integration of different materials and construction methods while maintaining aesthetic cohesion and structural integrity. All work was completed in 2.5 weeks with full code compliance and permit-ready documentation for both the main structure and the steel canopy feature.
                  </p>
                </div>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Scope of Work</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Custom wood framing structural design',
                    'Architectural steel canopy engineering',
                    'Foundation design and coordination',
                    'Load path analysis and design',
                    'Steel connection details',
                    'Wood-to-steel interface design',
                    'Seismic resistance engineering',
                    'Premium finish integration support'
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
                        <h3 className="font-semibold mb-3">Main Residence</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Premium wood framing system</li>
                          <li>• Engineered lumber beams</li>
                          <li>• 2x6 wall construction</li>
                          <li>• Shear wall lateral system</li>
                          <li>• Spread footing foundation</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Steel Canopy</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Custom steel tube structure</li>
                          <li>• Architectural exposed beams</li>
                          <li>• Moment frame connections</li>
                          <li>• Integrated lighting provisions</li>
                          <li>• Concrete pier foundation</li>
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
                      <h3 className="font-semibold mb-2">Architectural Steel Canopy</h3>
                      <p className="text-sm text-muted-foreground">
                        Engineered a dramatic custom steel canopy entrance featuring exposed structural elements that create a bold architectural statement while providing weather protection and enhanced curb appeal.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Premium Wood Framing</h3>
                      <p className="text-sm text-muted-foreground">
                        Designed sophisticated wood framing system using engineered lumber and advanced framing techniques to support open floor plans and large window expanses typical of luxury construction.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Material Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Carefully engineered the interface between wood framing and steel canopy structure to ensure proper load transfer, weather protection, and aesthetic integration while maintaining structural independence.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Foundation Coordination</h3>
                      <p className="text-sm text-muted-foreground">
                        Coordinated foundation design for both the main residence and canopy structure, ensuring proper support for different load conditions and construction sequencing.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Design Approach */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Design Approach</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        The Pacific Palisades project required a sophisticated approach to blending traditional residential construction with contemporary architectural elements. The steel canopy was designed as a standalone structure with its own foundation system, allowing for independent movement and simplified construction sequencing.
                      </p>
                      <p>
                        Our team worked closely with the architect to ensure the steel canopy&apos;s exposed structural members became an aesthetic feature rather than just functional elements. Connection details were carefully designed to be both structurally sound and visually appealing, suitable for the high-end residential market.
                      </p>
                      <p>
                        The wood framing for the main residence incorporated modern engineered lumber products and advanced framing techniques to maximize efficiency while supporting the open, light-filled interior spaces desired by the homeowner.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
                      <div className="font-medium">Private Homeowner</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Project Type</div>
                      <div className="font-medium">Luxury Residential</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Location</div>
                      <div className="font-medium">Pacific Palisades, CA</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Timeline</div>
                      <div className="font-medium">2.5 Weeks (Design Phase)</div>
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
                      <span>Steel Canopy Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Foundation Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Construction Documents</span>
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
                  <h3 className="font-semibold mb-2">Building Luxury Residential?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get expert engineering for your premium residential project with custom structural solutions.
                  </p>
                  <Link href="/#contact">
                    <Button
                      variant="secondary"
                      className="w-full"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Consultation
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
                <Badge className="mb-3">Residential</Badge>
                <h3 className="text-xl font-bold mb-2">3-Story Residential Home</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete wood framing structural engineering for custom 3-story home in Orange County.
                </p>
                <Link href="/projects/3-story-residential-home" className="text-sm font-medium text-primary hover:underline">
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

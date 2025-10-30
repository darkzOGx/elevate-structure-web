'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { BENEFITS, COMPANY_INFO } from '@/lib/constants'

export function Benefits() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose {COMPANY_INFO.name}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience and 500+ successful projects, we&apos;re the
            trusted choice for professional engineering design services in the Bay Area.
            Here&apos;s what sets us apart from the competition.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {BENEFITS.map((benefit, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mx-auto group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>

                {/* Stat */}
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">
                    {benefit.stat}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-muted/30 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              How We Compare to Other Engineering Firms
            </h3>
            <p className="text-muted-foreground">
              See why more clients choose us for their engineering design needs
            </p>
          </div>

          {/* Mobile-friendly comparison cards */}
          <div className="md:hidden space-y-4">
            {[
              { feature: "Response Time", us: "24 hours", them: "3-5 days" },
              { feature: "Project Timeline", us: "1-2 weeks", them: "6-8 weeks" },
              { feature: "Licensed Engineers", us: "100% PE Licensed", them: "Mixed Team" },
              { feature: "Code Compliance", us: "100% Guaranteed", them: "Best Effort" },
              { feature: "Emergency Service", us: "Same Day", them: "Not Available" },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-4 border">
                <h4 className="font-semibold mb-3 text-center">{item.feature}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">{COMPANY_INFO.name}</div>
                    <div className="text-sm font-medium text-green-600">{item.us}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Typical Competitor</div>
                    <div className="text-sm text-muted-foreground">{item.them}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">
                    {COMPANY_INFO.name}
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                    Typical Competitor
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-muted">
                  <td className="py-3 px-4">Response Time</td>
                  <td className="text-center py-3 px-4 text-green-600 font-medium">
                    24 hours
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    3-5 days
                  </td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-3 px-4">Project Timeline</td>
                  <td className="text-center py-3 px-4 text-green-600 font-medium">
                    1-2 weeks
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    6-8 weeks
                  </td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-3 px-4">Licensed Engineers</td>
                  <td className="text-center py-3 px-4 text-green-600 font-medium">
                    100% PE Licensed
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    Mixed Team
                  </td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-3 px-4">Code Compliance</td>
                  <td className="text-center py-3 px-4 text-green-600 font-medium">
                    100% Guaranteed
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    Best Effort
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Emergency Service</td>
                  <td className="text-center py-3 px-4 text-green-600 font-medium">
                    Same Day
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    Not Available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Licensed & Certified Professionals
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All our engineers are licensed Professional Engineers (PE) in California
              with extensive experience in structural and civil engineering. We maintain
              current licenses, continuing education, and professional certifications
              to ensure we meet all industry standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">California Professional Engineer (PE) Licensed</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Structural Engineering Institute (SEI) Member</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">American Society of Civil Engineers (ASCE) Member</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Fully Insured & Bonded ($2M Professional Liability)</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Our Commitment to Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We stand behind every project with our comprehensive satisfaction guarantee.
              If you&apos;re not completely satisfied with our work, we&apos;ll make it right
              or provide a full refund. Your success is our success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Free Revisions Until You&apos;re Happy</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Lifetime Technical Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Experience the {COMPANY_INFO.name} Difference
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their
              engineering design needs. Get started with a free consultation today.
            </p>
          </div>

          <Button size="lg" onClick={scrollToContact} className="px-8">
            Get Free Consultation Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-sm text-muted-foreground">
            Free consultation • No obligation • 24-hour response guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
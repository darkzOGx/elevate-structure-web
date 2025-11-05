'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/AAA-Logo.png"
                alt={COMPANY_INFO.name}
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              {COMPANY_INFO.subtitle}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p>{COMPANY_INFO.address.streetAddress}</p>
                  <p>
                    {COMPANY_INFO.address.addressLocality}, {COMPANY_INFO.address.addressRegion} {COMPANY_INFO.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <nav className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <Link
                  key={service.id}
                  href={`#services`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector('#services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => {
                  const element = document.querySelector('#services')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#process')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Our Process
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#about')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#testimonials')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#faq')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Business Hours</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              {COMPANY_INFO.businessHours.map((hours, index) => (
                <p key={index}>{hours}</p>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href={COMPANY_INFO.socialProfiles[0]}
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={COMPANY_INFO.socialProfiles[1]}
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={COMPANY_INFO.socialProfiles[2]}
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-2 pt-4 border-t">
              <div className="text-xs text-muted-foreground space-y-1">
                <p>✓ Licensed Professional Engineers</p>
                <p>✓ Fully Insured & Bonded</p>
                <p>✓ 24-Hour Emergency Response</p>
                <p>✓ 100% Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-4">
              <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Licensed in California | License C-95446</p>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: COMPANY_INFO.name,
            url: COMPANY_INFO.website,
            logo: `${COMPANY_INFO.website}/logo.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: COMPANY_INFO.phone,
              contactType: 'customer service',
              email: COMPANY_INFO.email,
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY_INFO.address.streetAddress,
              addressLocality: COMPANY_INFO.address.addressLocality,
              addressRegion: COMPANY_INFO.address.addressRegion,
              postalCode: COMPANY_INFO.address.postalCode,
              addressCountry: COMPANY_INFO.address.addressCountry,
            },
            sameAs: COMPANY_INFO.socialProfiles,
            openingHours: [
              'Mo-Fr 09:00-17:00',
            ],
            priceRange: COMPANY_INFO.priceRange,
            areaServed: {
              '@type': 'City',
              name: 'San Francisco',
            },
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${COMPANY_INFO.website}#localbusiness`,
            name: COMPANY_INFO.name,
            image: `${COMPANY_INFO.website}/logo.png`,
            url: COMPANY_INFO.website,
            telephone: COMPANY_INFO.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY_INFO.address.streetAddress,
              addressLocality: COMPANY_INFO.address.addressLocality,
              addressRegion: COMPANY_INFO.address.addressRegion,
              postalCode: COMPANY_INFO.address.postalCode,
              addressCountry: COMPANY_INFO.address.addressCountry,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
              },
            ],
            priceRange: COMPANY_INFO.priceRange,
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: COMPANY_INFO.name,
            url: COMPANY_INFO.website,
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${COMPANY_INFO.website}/search?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </footer>
  )
}
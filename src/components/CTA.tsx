'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'

export function CTA() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <FadeInSection>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our licensed Professional Engineers are here to help. Get a free consultation
                and discuss your project with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" onClick={scrollToContact}>
                  <Button size="lg" className="text-base px-8 py-6 h-auto">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    {COMPANY_INFO.phone}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  )
}

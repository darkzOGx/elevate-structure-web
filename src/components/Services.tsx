'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SERVICES, KEYWORDS } from '@/lib/constants'

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our {KEYWORDS.primary.charAt(0).toUpperCase() + KEYWORDS.primary.slice(1)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering solutions for residential and commercial projects.
            Our licensed Professional Engineers deliver innovative designs that meet
            all building codes and exceed industry standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>

                {/* Service Title */}
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>

                {/* Service Description */}
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Ready to Start Your Engineering Project?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your project. Our licensed
              engineers are ready to help bring your vision to life with professional
              design solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="px-8">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Free initial consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              24-hour response guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Licensed Professional Engineers
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              100% code compliance
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
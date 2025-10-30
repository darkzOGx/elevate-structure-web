'use client'

import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { FadeInSection } from '@/components/FadeInSection'
import { KEYWORDS } from '@/lib/constants'

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-center min-h-[80vh] py-12 lg:py-24">
          {/* Centered Content */}
          <div className="flex flex-col justify-center items-center space-y-8 text-center max-w-4xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                Licensed Professional Engineers
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                15+ Years Experience
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Professional{' '}
                <span className="text-primary">Engineering Design</span>{' '}
                Services in {KEYWORDS.location[0]}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Transform your vision into reality with expert structural engineering
                solutions and professional design services. Licensed PEs
                with 100% code compliance guarantee.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Free consultation & quote within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Licensed Professional Engineers (PE)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">100% building code compliance guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">500+ successful projects completed</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base px-8 py-6 h-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="text-base px-8 py-6 h-auto"
              >
                View Our Services
              </Button>
            </div>

            {/* Social Proof with Animated Counters */}
            <FadeInSection delay={500} className="flex items-center justify-center gap-6 pt-4">
              <div className="text-center">
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  className="text-2xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={15}
                  suffix="+"
                  className="text-2xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <AnimatedCounter
                    end={5.0}
                    className="text-2xl font-bold text-primary"
                  />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Trust Indicators Bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">California Licensed PE</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Fully Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Same-Day Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
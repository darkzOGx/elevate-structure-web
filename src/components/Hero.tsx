'use client'

import { ArrowRight, CheckCircle, Star, Shield, Award } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { EngineeringAnimatedBackground } from '@/components/ui/EngineeringAnimatedBackground'

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
    <section className="relative min-h-[90vh] flex flex-col justify-start items-center overflow-hidden pt-10 md:pt-16">
      <EngineeringAnimatedBackground />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div
          className="flex flex-col justify-center items-center space-y-8 text-center max-w-5xl mx-auto"
        >


          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="font-extrabold tracking-tight leading-tight">
              <span className="block text-5xl sm:text-6xl xl:text-7xl mb-2 text-slate-900 dark:text-white font-black tracking-tighter">Professional</span>
              <span className="inline-flex flex-wrap justify-center gap-x-4 mb-6 text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter relative z-10">
                <span className="text-slate-900 dark:text-white">Engineering</span>
                <span className="relative inline-block px-4 py-2 transform -rotate-1">
                  <span className="absolute inset-0 bg-[#C5D6B6] rounded-2xl transform rotate-1"></span>
                  <span className="relative text-slate-900 z-10">Design</span>
                </span>
              </span>
              <span className="block text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300 mt-8 tracking-wider uppercase">
                Services in Orange County and Greater California
              </span>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 leading-relaxed font-light">
                Expert structural engineering from licensed PEs. Precision, safety, and full code compliance—guaranteed.
              </p>
            </h1>
            {/* Social Proof Stats Replaced Description */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
              <div className="text-center p-3 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex justify-center mb-1">
                  <Award className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-xl font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex justify-center mb-1">
                  <Shield className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="text-xl font-bold text-foreground">15+</div>
                <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex justify-center mb-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-xl font-bold text-foreground">5.0</div>
                <div className="text-xs text-muted-foreground font-medium">Client Rating</div>
              </div>
              <div className="text-center p-3 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex justify-center mb-1">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground font-medium">Code Compliance</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto pt-8">
            <MagneticButton
              onClick={scrollToContact}
              className="group h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 bg-[#1a1a1a] text-white hover:bg-black/90"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={scrollToServices}
              className="h-14 px-8 rounded-full text-base font-semibold border-2 hover:bg-secondary/50 hover:border-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
            >
              View Our Services
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

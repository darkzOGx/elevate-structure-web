'use client'

import { ArrowRight, CheckCircle, Star, Shield, Award } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Badge } from '@/components/ui/badge'
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <EngineeringAnimatedBackground />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div
          className="flex flex-col justify-center items-center space-y-8 text-center max-w-5xl mx-auto"
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20 px-4 py-1.5 text-sm">
              <Star className="h-3.5 w-3.5 fill-primary text-primary mr-2" />
              Licensed Professional Engineers
            </Badge>
            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20 px-4 py-1.5 text-sm">
              <Shield className="h-3.5 w-3.5 text-primary mr-2" />
              15+ Years Experience
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="font-extrabold tracking-tight leading-tight">
              <span className="block text-5xl sm:text-6xl xl:text-7xl mb-2 text-slate-900 dark:text-white font-black tracking-tighter">Professional</span>
              <div className="inline-flex flex-wrap justify-center gap-x-4 mb-6 text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#D2B48C] to-[#556B2F] drop-shadow-2xl" style={{ textShadow: '2px 4px 6px rgba(0,0,0,0.3)', WebkitTextStroke: '0.5px rgba(255,255,255,0.2)' }}>
                  Engineering
                </span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-[#D2B48C] to-[#556B2F] drop-shadow-2xl" style={{ textShadow: '2px 4px 6px rgba(0,0,0,0.3)', WebkitTextStroke: '0.5px rgba(255,255,255,0.2)' }}>
                  Design
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#556B2F] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ filter: 'none', WebkitTextStroke: '0' }}>
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </div>
              <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 tracking-widest uppercase">
                Services in Orange County and Greater California
              </span>
            </h1>
            <p className="text-2xl text-slate-700 dark:text-slate-300 font-semibold max-w-3xl mx-auto leading-relaxed pt-6">
              Transform your vision into reality with expert structural engineering
              solutions. Licensed PEs delivering precision, safety, and
              <span className="text-black dark:text-white font-bold"> 100% code compliance</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto pt-8">
            <MagneticButton
              onClick={scrollToContact}
              className="group h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              Get Free Consultation
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

          {/* Social Proof with Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl border-t border-border/50 mt-8">
            <div className="text-center p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex justify-center mb-2 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <AnimatedCounter
                end={500}
                suffix="+"
                className="text-3xl font-bold text-foreground"
              />
              <div className="text-sm text-muted-foreground mt-1 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex justify-center mb-2 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <AnimatedCounter
                end={15}
                suffix="+"
                className="text-3xl font-bold text-foreground"
              />
              <div className="text-sm text-muted-foreground mt-1 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex justify-center mb-2 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <div className="flex items-center justify-center gap-1">
                <AnimatedCounter
                  end={5.0}
                  className="text-3xl font-bold text-foreground"
                />
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">Client Rating</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex justify-center mb-2 text-primary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">Code Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

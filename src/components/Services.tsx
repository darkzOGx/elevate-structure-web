'use client'

import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { SERVICES } from '@/lib/constants'

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <Section id="services" className="bg-muted/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-30 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center space-y-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm font-medium tracking-wide">
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
            Our Engineering Design Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive engineering solutions for residential and commercial projects.
            Our licensed Professional Engineers deliver innovative designs that meet
            all building codes and exceed industry standards.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {SERVICES.map((service) => (
          <PremiumCard
            key={service.id}
            variants={item}
            className="flex flex-col h-full group hover:border-primary/30 transition-all duration-500 bg-white/40 dark:bg-black/20 backdrop-blur-md"
          >
            <div className="mb-8 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5D6B6]/40 to-[#C5D6B6]/10 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-[#C5D6B6]/20">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="space-y-6 flex-grow border-t border-slate-200/50 dark:border-slate-800/50 pt-6">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest opacity-80">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-2">
              <Button
                variant="ghost"
                className="w-full justify-between h-12 text-base font-semibold transition-all duration-300 hover:bg-primary/10 hover:text-primary group-hover:pl-6"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </PremiumCard>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-20"
      >
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-background/50 backdrop-blur-sm border border-border">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 bg-[#1a1a1a] text-white hover:bg-black/90"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
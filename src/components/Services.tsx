'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { SERVICES, KEYWORDS } from '@/lib/constants'

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
    <Section id="services" className="bg-muted/10">
      <div className="text-center space-y-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Engineering Design Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <PremiumCard
            key={service.id}
            variants={item}
            className="flex flex-col h-full"
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl text-primary mb-4 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground/80 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-between mt-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              onClick={scrollToContact}
            >
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </PremiumCard>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12 space-y-8 bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50"
      >
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
          <Button size="lg" onClick={scrollToContact} className="px-8 shadow-lg shadow-primary/20">
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
'use client'

import { CheckCircle, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <Section id="process" className="bg-background">
      <div className="text-center space-y-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How Our Engineering Design Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined 4-step process ensures your project is completed efficiently,
            on time, and to the highest professional standards.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 z-0">
          <motion.div
            className="h-full bg-primary origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-4 relative z-10">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <PremiumCard className="h-full flex flex-col items-center text-center relative bg-background/80 backdrop-blur-xl border-border/50">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-primary/30 relative z-10">
                  {step.step}
                </div>

                <div className="text-4xl mb-4 opacity-80 text-primary">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto"
      >
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
          <div className="p-3 bg-green-500/10 rounded-full mb-4">
            <Clock className="h-8 w-8 text-green-500" />
          </div>
          <h4 className="font-bold text-lg mb-2">Fast Turnaround</h4>
          <p className="text-sm text-muted-foreground">
            Most projects completed within 1-2 weeks with expedited options available.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
          <div className="p-3 bg-blue-500/10 rounded-full mb-4">
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
          <h4 className="font-bold text-lg mb-2">Clear Communication</h4>
          <p className="text-sm text-muted-foreground">
            Regular updates and transparent progress tracking throughout the project.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
          <div className="p-3 bg-purple-500/10 rounded-full mb-4">
            <ShieldCheck className="h-8 w-8 text-purple-500" />
          </div>
          <h4 className="font-bold text-lg mb-2">Quality Guarantee</h4>
          <p className="text-sm text-muted-foreground">
            100% satisfaction and code compliance guarantee on all deliverables.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
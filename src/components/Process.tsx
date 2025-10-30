'use client'

import { CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How Our Engineering Design Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined 4-step process ensures your project is completed efficiently,
            on time, and to the highest professional standards. From initial consultation
            to final implementation, we guide you through every phase.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connecting Line */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-12 left-full w-8 h-px bg-primary/30 z-10 translate-x-4" />
                  )}

                  <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      {/* Step Number */}
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div className="text-3xl opacity-50">
                          {step.icon}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xl font-bold">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connecting Line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-full left-6 w-px h-6 bg-primary/30 z-10" />
                )}

                <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold">
                            {step.title}
                          </h3>
                          <div className="text-2xl opacity-50">
                            {step.icon}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-16 text-center space-y-8">
          {/* Key Benefits */}
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
              <h4 className="font-semibold">Fast Turnaround</h4>
              <p className="text-sm text-muted-foreground">
                Most projects completed within 1-2 weeks
              </p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
              <h4 className="font-semibold">Clear Communication</h4>
              <p className="text-sm text-muted-foreground">
                Regular updates and transparent progress tracking
              </p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
              <h4 className="font-semibold">Quality Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                100% satisfaction and code compliance guarantee
              </p>
            </div>
          </div>

          {/* Timeline Information */}
          <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Typical Project Timeline</h3>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Consultation & Planning:</span>
                <span className="font-medium">1-3 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Design Development:</span>
                <span className="font-medium">1-2 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Review & Revisions:</span>
                <span className="font-medium">3-5 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Final Delivery:</span>
                <span className="font-medium">1-2 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
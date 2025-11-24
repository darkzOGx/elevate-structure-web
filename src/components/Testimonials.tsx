'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const currentTestimonial = TESTIMONIALS[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <Section id="testimonials" className="bg-muted/10">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about their experience working with our engineering team.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="relative h-[500px] md:h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <PremiumCard className="mx-auto max-w-4xl bg-background/80 backdrop-blur-xl border-primary/10">
                <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                  <div className="flex flex-col items-center text-center md:border-r md:border-border/50 md:pr-8">
                    <div className="relative w-24 h-24 mb-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                      <Image
                        src={currentTestimonial.image}
                        alt={`${currentTestimonial.name} testimonial`}
                        fill
                        className="rounded-full object-cover border-2 border-background relative z-10"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${currentTestimonial.name}&background=random&size=96`
                        }}
                      />
                    </div>
                    <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{currentTestimonial.company}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < currentTestimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20 rotate-180" />
                    <blockquote className="text-xl md:text-2xl leading-relaxed font-medium italic text-foreground/90 relative z-10">
                      &quot;{currentTestimonial.text}&quot;
                    </blockquote>
                    <Quote className="absolute -bottom-4 -right-4 h-8 w-8 text-primary/20" />

                    <div className="mt-6 text-sm text-muted-foreground text-right">
                      Project completed: {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-primary/20 hover:bg-primary/40'
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 grid gap-8 md:grid-cols-4 text-center max-w-6xl mx-auto"
      >
        <div className="space-y-2 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
          <div className="text-4xl font-bold text-primary">4.9/5</div>
          <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
        </div>
        <div className="space-y-2 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
          <div className="text-4xl font-bold text-primary">500+</div>
          <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
        </div>
        <div className="space-y-2 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
          <div className="text-4xl font-bold text-primary">98%</div>
          <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
        </div>
        <div className="space-y-2 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
          <div className="text-4xl font-bold text-primary">15+</div>
          <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
        </div>
      </motion.div>
    </Section>
  )
}
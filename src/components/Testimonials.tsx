'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/Section'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
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

      <div className="max-w-[1400px] mx-auto relative px-4 mb-24">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-xl border border-slate-100 dark:border-slate-800 backdrop-blur-sm p-6 h-full flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Quote className="h-12 w-12 text-[#C5D6B6] rotate-12 fill-[#C5D6B6]" />
                </div>

                <div className="flex flex-col h-full">
                  {/* User Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-slate-50 dark:ring-slate-800 shadow-md flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} testimonial`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random&size=96`
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight">{testimonial.name}</h4>
                      <p className="text-xs font-medium text-primary mt-0.5">{testimonial.company}</p>
                      {testimonial.location && (
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wide mt-1">
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                          {testimonial.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < testimonial.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-200 dark:text-slate-700'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-base text-slate-700 dark:text-slate-200 flex-grow leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Date */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Project completed
                    </div>
                    <div className="text-[10px] font-semibold text-slate-900 dark:text-white">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">4.9/5</div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Average Rating</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">500+</div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Happy Clients</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">98%</div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Satisfaction Rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">15+</div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
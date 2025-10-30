'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const currentTestimonial = TESTIMONIALS[currentIndex]

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about their experience working with our engineering team.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-3 items-center">
                {/* Client Info */}
                <div className="text-center md:text-left space-y-4">
                  <div className="relative w-20 h-20 mx-auto md:mx-0">
                    <Image
                      src={currentTestimonial.image}
                      alt={`${currentTestimonial.name} testimonial`}
                      fill
                      className="rounded-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${currentTestimonial.name}&background=random&size=80`
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{currentTestimonial.company}</p>
                  </div>
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < currentTestimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="md:col-span-2 space-y-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <blockquote className="text-lg md:text-xl leading-relaxed">
                    &quot;{currentTestimonial.text}&quot;
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    Project completed: {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={TESTIMONIALS.length <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={TESTIMONIALS.length <= 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                index === currentIndex
                  ? 'border-primary/50 shadow-md'
                  : 'hover:border-primary/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm leading-relaxed line-clamp-4">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className="relative w-10 h-10">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      fill
                      className="rounded-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random&size=40`
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the same level of professional service and expertise that our
            clients rave about. Get started with a free consultation today.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8"
          >
            Get Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
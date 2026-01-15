'use client'

import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_DATA, COMPANY_INFO } from '@/lib/constants'

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our engineering design
            services, process, and what you can expect when working with our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-muted-foreground/20 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-lg font-semibold pr-4">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Still Have Questions?
              </h3>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our team of licensed
                Professional Engineers is here to help. Contact us for a free
                consultation and get all your questions answered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-lg shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Free Consultation
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Call {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Quick Contact Specs */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-white/80 font-bold text-xl mb-1">Direct Line</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-medium hover:text-green-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white/80 font-bold text-xl mb-1">Email Us</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white/80 font-bold text-xl mb-1">Response Time</span>
                  <span className="text-white font-medium">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_DATA.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
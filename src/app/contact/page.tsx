import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { FadeInSection } from '@/components/FadeInSection'
import { COMPANY_INFO } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | AAA Engineering Design',
  description: 'Get in touch with AAA Engineering Design for professional structural engineering services. Licensed PE engineers ready to help with your project. Call (949) 981-4448 for free consultation.',
  alternates: {
    canonical: `${COMPANY_INFO.website}/contact`,
  },
  openGraph: {
    title: 'Contact Us | AAA Engineering Design',
    description: 'Get in touch with AAA Engineering Design for professional structural engineering services. Licensed PE engineers ready to help with your project.',
    url: `${COMPANY_INFO.website}/contact`,
    siteName: COMPANY_INFO.name,
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-8 lg:pt-24 lg:pb-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <FadeInSection>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Ready to start your project? Get in touch with our licensed Professional Engineers
                for a free consultation. We&apos;re here to help with all your structural engineering needs.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FadeInSection>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </FadeInSection>

              <FadeInSection delay={100}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    {COMPANY_INFO.address.streetAddress}<br />
                    {COMPANY_INFO.address.addressLocality}, {COMPANY_INFO.address.addressRegion} {COMPANY_INFO.address.postalCode}
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="p-6 bg-background rounded-lg border text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday<br />
                    8:00 AM - 6:00 PM PST
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

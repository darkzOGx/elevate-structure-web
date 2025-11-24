import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FadeInSection } from '@/components/FadeInSection'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | AAA Engineering Design',
  description: 'Privacy Policy for AAA Engineering Design. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: `${COMPANY_INFO.website}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-8">
                Last Updated: November 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                  our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Company name and project details</li>
                  <li>Budget ranges and timeline preferences</li>
                  <li>Project descriptions and technical requirements</li>
                  <li>Communication preferences</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We also automatically collect certain information when you visit our website, including IP address,
                  browser type, pages visited, and time spent on pages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide structural engineering services and respond to inquiries</li>
                  <li>Communicate about your project and our services</li>
                  <li>Send proposals, contracts, and project deliverables</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send occasional updates about our services (you may opt-out anytime)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>With consultants (geotechnical engineers, architects) when necessary for your project</li>
                  <li>With service providers who assist our operations (email services, analytics)</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission
                  is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance user experience and analyze
                  website traffic. We use Google Analytics to understand how visitors interact with our site. You can
                  control cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices
                  of these external sites. We encourage you to read their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide services and comply with legal
                  obligations. Project-related information is typically retained for at least 7 years in accordance with
                  professional engineering standards and California law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access: Request a copy of the personal information we hold about you</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li>Opt-out: Unsubscribe from marketing communications</li>
                  <li>Data Portability: Request transfer of your data to another service provider</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. California Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  California residents have specific rights under the California Consumer Privacy Act (CCPA). We do not
                  sell personal information. California residents may request disclosure of information we collect and
                  how we use it, and may request deletion of personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                  personal information from children. If we become aware that we have collected information from a
                  child, we will take steps to delete it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of material changes by posting
                  the updated policy on our website with a new &quot;Last Updated&quot; date. Your continued use of our
                  services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p><strong>{COMPANY_INFO.name}</strong></p>
                  <p>{COMPANY_INFO.address.streetAddress}</p>
                  <p>{COMPANY_INFO.address.addressLocality}, {COMPANY_INFO.address.addressRegion} {COMPANY_INFO.address.postalCode}</p>
                  <p>Phone: {COMPANY_INFO.phone}</p>
                  <p>Email: {COMPANY_INFO.email}</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">14. Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website or services, you consent to this Privacy Policy and our collection and use of
                  information as described herein.
                </p>
              </section>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}

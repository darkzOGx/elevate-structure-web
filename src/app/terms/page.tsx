import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { FadeInSection } from '@/components/FadeInSection'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service | AAA Engineering Design',
  description: 'Terms of Service for AAA Engineering Design structural engineering services.',
  alternates: {
    canonical: `${COMPANY_INFO.website}/terms`,
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-8">
                Last Updated: November 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services of {COMPANY_INFO.name}, you accept and agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {COMPANY_INFO.name} provides professional structural engineering services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Structural analysis and design</li>
                  <li>PE-stamped construction documents</li>
                  <li>Building code compliance review</li>
                  <li>Permit assistance and plan check response</li>
                  <li>Construction phase services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Professional Licensure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All structural engineering work is performed by or under the direct supervision of licensed
                  Professional Engineers (PE) registered in the State of California. Our engineers maintain current
                  licenses and comply with all continuing education requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete project information</li>
                  <li>Furnish architectural plans, geotechnical reports, and other required documents</li>
                  <li>Inform us of any changes to project scope or site conditions</li>
                  <li>Obtain all necessary permits and approvals</li>
                  <li>Hire qualified contractors to execute the structural design</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Scope of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our scope of services will be defined in a written proposal or contract for each project.
                  We are responsible only for work specifically included in the agreed scope. Additional services
                  beyond the original scope may be provided for additional fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our liability for any claim arising out of our services shall be limited to the fees paid for those services.
                  We shall not be liable for consequential, incidental, or indirect damages. We carry professional liability
                  insurance as required by California law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Drawings, calculations, and other documents prepared by {COMPANY_INFO.name} are instruments of service.
                  While clients receive a license to use these documents for the specific project, ownership and copyrights
                  remain with {COMPANY_INFO.name}. Documents shall not be used for other projects without our written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in each project proposal. Typical terms include a deposit before work begins
                  with the balance due upon delivery of stamped plans. Late payments may be subject to interest charges as
                  allowed by California law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Construction Observation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless specifically included in our scope, we are not responsible for construction means, methods, techniques,
                  sequences, or procedures, or for safety precautions and programs. Site visits, when provided, are to observe
                  general compliance with design intent, not to provide comprehensive construction inspection.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from our services shall be resolved through mediation or arbitration in Orange County, California,
                  in accordance with California law. The prevailing party in any dispute shall be entitled to recover reasonable
                  attorneys&apos; fees and costs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on our website
                  with the revision date. Continued use of our services after changes constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.address.streetAddress}</p>
                  <p>{COMPANY_INFO.address.addressLocality}, {COMPANY_INFO.address.addressRegion} {COMPANY_INFO.address.postalCode}</p>
                  <p>Phone: {COMPANY_INFO.phone}</p>
                  <p>Email: {COMPANY_INFO.email}</p>
                </div>
              </section>
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}

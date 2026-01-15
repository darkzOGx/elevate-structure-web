import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { RecentProjects } from '@/components/RecentProjects'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { TrustBadges } from '@/components/TrustBadges'
import { homepageSchema } from '@/lib/schema-data'

export const metadata: Metadata = {
  title: 'Structural Engineer Orange County | AAA Engineering Design',
  description: 'Licensed structural engineering firm in Orange County & Southern California. Expert ADU design, seismic retrofitting, foundation engineering & PE-stamped plans. 20+ years experience. Call (949) 981-4448.',
  keywords: 'structural engineer Orange County, structural engineering, ADU engineer, seismic retrofit, foundation engineer, PE stamped plans, residential structural engineer, commercial structural engineer',
  openGraph: {
    title: 'Structural Engineer Orange County | AAA Engineering Design',
    description: 'Licensed structural engineering firm in Orange County & Southern California. Expert ADU design, seismic retrofitting, foundation engineering & PE-stamped plans.',
    url: 'https://aaaengineeringdesign.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Engineer Orange County | AAA Engineering Design',
    description: 'Licensed structural engineering firm in Orange County & Southern California. Expert ADU design, seismic retrofitting & PE-stamped plans.',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="min-h-screen bg-background relative">
        <Header />
        <TrustBadges />
        <main>
          <Hero />
          <Services />
          <Process />
          <Benefits />
          <Testimonials />
          <RecentProjects />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

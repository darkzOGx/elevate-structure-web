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
import { homepageSchema } from '@/lib/schema-data'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="min-h-screen bg-background relative">
        <Header />
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

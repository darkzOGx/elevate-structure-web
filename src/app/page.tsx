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
import { AnimatedBackground } from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
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
  );
}

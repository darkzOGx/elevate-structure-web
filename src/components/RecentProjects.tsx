'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/Section'
import { ArrowRight, Building, Home, TreePine, MapPin, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectCard, ProjectProps } from '@/components/ui/ProjectCard'

// Expanded project data with filtering categories and before/after images
const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: 'CMU Warehouse Mezzanine',
    location: 'Industrial District, CA',
    description: 'Designed and engineered a 2-story steel mezzanine structure within an existing CMU warehouse, maximizing vertical storage capacity while maintaining structural integrity.',
    projectType: 'Commercial',
    tags: ['Steel', 'Warehouse', 'Seismic'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2400',
  },
  {
    id: 2,
    title: '3-Story Residential Home',
    location: 'Orange County, CA',
    description: 'Complete structural engineering for a custom 3-story residential home featuring complex wood framing systems and modern architectural elements.',
    projectType: 'Residential',
    tags: ['Wood Frame', 'Custom Home', 'Multi-story'],
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2400&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-construction-of-a-wooden-roof-frame-33422-large.mp4'
  },
  {
    id: 3,
    title: 'Palisades Residential Complex',
    location: 'Pacific Palisades, CA',
    description: 'Engineered a 2-story luxury home with innovative wood framing and an architectural steel canopy entrance feature for enhanced curb appeal.',
    projectType: 'Residential',
    tags: ['Luxury', 'Hybrid Frame', 'Architectural Steel'],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400',
  },
  {
    id: 4,
    title: 'Historic Building Retrofit',
    location: 'Santa Ana, CA',
    description: 'Seismic retrofitting and structural strengthening of a 1920s brick building, preserving historical facade while ensuring modern code compliance.',
    projectType: 'Retrofit',
    tags: ['Masonry', 'Historic', 'Seismic Upgrade'],
    imageUrl: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=2400',
  },
  {
    id: 5,
    title: 'Modern ADU Addition',
    location: 'Irvine, CA',
    description: 'Structural design for a detached Accessory Dwelling Unit with vaulted ceilings and large span openings for indoor-outdoor living.',
    projectType: 'Residential',
    tags: ['ADU', 'Wood Frame', 'Concrete Foundation'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2400',
  },
  {
    id: 6,
    title: 'Commercial Tenant Improvement',
    location: 'Newport Beach, CA',
    description: 'Structural modifications for a high-end retail space, including removal of load-bearing walls and installation of new moment frames.',
    projectType: 'Commercial',
    tags: ['Steel Frames', 'Renovation', 'Retail'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400',
  }
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Retrofit']

export function RecentProjects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === 'All' || project.projectType === activeFilter
  )

  return (
    <Section className="bg-background">
      <div className="text-center space-y-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Recent Engineering Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of structural engineering achievements,
            from custom homes to complex commercial developments.
          </p>
        </motion.div>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 max-w-4xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-10 md:p-14 text-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                From concept to completion, we deliver structural engineering solutions
                that exceed expectations. Let&apos;s discuss your project requirements.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-10 h-14 rounded-full text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20 bg-transparent"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
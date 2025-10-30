'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FadeInSection } from '@/components/FadeInSection'
import { ArrowRight, Building, Home, TreePine } from 'lucide-react'

const RECENT_PROJECTS = [
  {
    id: 1,
    slug: 'cmu-warehouse-mezzanine',
    title: 'CMU Warehouse Mezzanine',
    location: 'Industrial District, CA',
    description: 'Designed and engineered a 2-story steel mezzanine structure within an existing CMU warehouse, maximizing vertical storage capacity while maintaining structural integrity.',
    projectType: 'Commercial Mezzanine',
    scope: 'Structural Engineering Design',
    completedWork: 'Mezzanine Steel Structure',
    icon: Building,
    stats: {
      area: '4,500 sq ft',
      capacity: '125 psf',
      completion: '3 weeks'
    },
    highlights: [
      'Steel beam and column design',
      'Foundation load analysis',
      'Code compliance verification',
      'Construction documentation'
    ]
  },
  {
    id: 2,
    slug: '3-story-residential-home',
    title: '3-Story Residential Home',
    location: 'Orange County, CA',
    description: 'Complete structural engineering for a custom 3-story residential home featuring complex wood framing systems and modern architectural elements.',
    projectType: 'Residential Construction',
    scope: 'Wood Framing Engineering',
    completedWork: 'Structural Wood Framing',
    icon: Home,
    stats: {
      area: '3,200 sq ft',
      stories: '3 levels',
      completion: '2 weeks'
    },
    highlights: [
      'Complex floor joist systems',
      'Load-bearing wall design',
      'Seismic resistance engineering',
      'Permit-ready drawings'
    ]
  },
  {
    id: 3,
    slug: 'palisades-home',
    title: 'Palisades Residential Complex',
    location: 'Pacific Palisades, CA',
    description: 'Engineered a 2-story luxury home with innovative wood framing and an architectural steel canopy entrance feature for enhanced curb appeal.',
    projectType: 'Luxury Residential',
    scope: 'Wood Framing + Steel Canopy',
    completedWork: 'Wood Frame & Steel Canopy',
    icon: TreePine,
    stats: {
      area: '2,800 sq ft',
      features: '2 structures',
      completion: '2.5 weeks'
    },
    highlights: [
      'Custom wood framing design',
      'Architectural steel canopy',
      'Foundation coordination',
      'Premium finish integration'
    ]
  }
]

export function RecentProjects() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Recent Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our latest structural engineering projects showcasing innovative
              design solutions across residential and commercial developments.
            </p>
          </div>
        </FadeInSection>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RECENT_PROJECTS.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 200}>
              <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.projectType}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {project.location}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Scope:</span>
                        <span className="font-medium">{project.scope}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="font-medium text-primary">{project.completedWork}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-muted">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Project Link */}
                    <div className="pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        View Project Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={600}>
          <div className="text-center mt-16 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to completion, we deliver structural engineering solutions
                that exceed expectations. Let&apos;s discuss your project requirements.
              </p>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, ArrowUpRight, MapPin, Building } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Badge } from '@/components/ui/badge'

export interface ProjectProps {
  id: number
  title: string
  location: string
  description: string
  projectType: string
  tags: string[]
  imageUrl: string
  videoUrl?: string
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <PremiumCard
      className="p-0 overflow-hidden group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowVideo(false)
      }}
    >
      {/* Media Area */}
      <div className="relative h-64 w-full bg-muted overflow-hidden">
        <AnimatePresence>
          {showVideo && project.videoUrl ? (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={project.videoUrl}
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Floating Action Button */}


        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
          <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm border-none">
            {project.projectType}
          </Badge>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-3 h-3 mr-1" />
            {project.location}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </PremiumCard>
  )
}


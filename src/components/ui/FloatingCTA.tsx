'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 right-8 z-40 hidden md:block"
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="rounded-full shadow-2xl shadow-primary/30 h-16 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-3"
      >
        <MessageSquare className="h-5 w-5" />
        Get Free Quote
      </Button>
    </motion.div>
  )
}


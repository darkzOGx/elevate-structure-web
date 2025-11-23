'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds load time

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Building Outline Drawing Animation */}
              <motion.path
                d="M20 80 L20 20 L50 5 L80 20 L80 80 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Inner Grid */}
              <motion.path
                d="M20 40 L80 40 M20 60 L80 60 M50 5 L50 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              />
              {/* Compass Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-blue-500"
                strokeDasharray="4 4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 180 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
            <motion.div
              className="absolute -bottom-10 left-0 right-0 text-center font-bold text-xl tracking-widest text-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              DESIGNING...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


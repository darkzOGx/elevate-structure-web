'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface IntroAnimationProps {
    onComplete?: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden'
        return () => {
            // Unlock scroll
            document.body.style.overflow = 'unset'
        }
    }, [])

    const handleVideoEnd = () => {
        setIsVisible(false)
        setTimeout(() => {
            if (onComplete) onComplete()
        }, 500) // Call onComplete after exit animation
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                    >
                        <source src="/intro.webm" type="video/webm" />
                        <source src="/intro.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

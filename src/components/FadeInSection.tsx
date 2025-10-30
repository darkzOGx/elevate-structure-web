'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeInSection({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, hasAnimated])

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)'

    switch (direction) {
      case 'up':
        return 'translate(0, 40px)'
      case 'down':
        return 'translate(0, -40px)'
      case 'left':
        return 'translate(40px, 0)'
      case 'right':
        return 'translate(-40px, 0)'
      default:
        return 'translate(0, 40px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  )
}
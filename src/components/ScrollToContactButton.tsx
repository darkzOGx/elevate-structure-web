'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface ScrollToContactButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  className?: string
  children?: React.ReactNode
}

export function ScrollToContactButton({
  size = 'lg',
  variant = 'default',
  className = 'text-base px-8 py-6 h-auto',
  children
}: ScrollToContactButtonProps) {
  const handleClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children || (
        <>
          Get Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, Mail, Flame, ChevronRight } from 'lucide-react'
import { motion, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { COMPANY_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const scrollToSection = (href: string) => {
    if (pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Wildfire Support Banner */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        className="relative z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 text-center text-sm font-medium shadow-md"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2">
          <Flame className="h-4 w-4 animate-pulse" />
          <span>We&apos;re providing dedicated support to homeowners affected by the LA wildfires.</span>
          <Link href="/fire" className="underline decoration-white/50 hover:decoration-white transition-all ml-2 flex items-center">
            Learn More <ChevronRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </motion.div>

      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-sm py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between gap-8 px-4 md:px-6 max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mr-8 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/AAA-Logo.png"
                alt={COMPANY_INFO.name}
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto relative z-10"
                priority
              />
            </div>
            <span className="font-bold text-lg hidden lg:inline-block whitespace-nowrap tracking-tight group-hover:text-primary transition-colors">
              {COMPANY_INFO.name}
            </span>
            <span className="font-bold text-lg hidden sm:inline-block lg:hidden whitespace-nowrap tracking-tight group-hover:text-primary transition-colors">
              AAA Engineering
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-secondary/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            {/* Phone Number (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-secondary/50"
              >
                <Phone className="h-4 w-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Primary CTA */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:inline-flex shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Get Free Consultation
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-l border-border/50 bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      item.href.startsWith('#') ? (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left text-lg font-medium px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-left text-lg font-medium px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="border-t border-border/50 pt-6 space-y-4 px-4">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center space-x-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-2 bg-secondary rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center space-x-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-2 bg-secondary rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{COMPANY_INFO.email}</span>
                    </a>
                  </div>

                  {/* Mobile CTA */}
                  <div className="px-4">
                    <Button
                      onClick={() => scrollToSection('#contact')}
                      className="w-full h-12 text-lg shadow-lg shadow-primary/20"
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, Mail, Flame, ChevronRight } from 'lucide-react'
import { useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { COMPANY_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '/about' },
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
      <div
        className="relative z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 text-center text-sm font-medium shadow-md"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2">
          <Flame className="h-4 w-4" />
          <span>We&apos;re providing dedicated support to homeowners affected by the LA wildfires.</span>
          <Link href="/fire" className="underline decoration-white/50 hover:decoration-white transition-all ml-2 flex items-center" aria-label="Learn more about wildfire support services">
            Learn More <ChevronRight className="h-3 w-3 ml-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-[#C5D6B6]/90 backdrop-blur-xl border-black/5 shadow-sm py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 max-w-7xl">

          {/* Left: Mobile Menu + Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden -ml-2 shrink-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 border-r border-border/50 bg-[#C5D6B6] backdrop-blur-xl">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      item.href.startsWith('#') ? (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left text-lg font-medium px-4 py-3 rounded-lg hover:bg-black/5 transition-colors text-gray-800"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-left text-lg font-medium px-4 py-3 rounded-lg hover:bg-black/5 transition-colors text-gray-800"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="border-t border-black/10 pt-6 space-y-4 px-4">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center space-x-3 text-base font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      <div className="p-2 bg-white rounded-full border border-black/5">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center space-x-3 text-base font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      <div className="p-2 bg-white rounded-full border border-black/5">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{COMPANY_INFO.email}</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center space-x-2 group shrink-0">
              <div className="relative">
                <Image
                  src="/AAA-Logo.png"
                  alt={COMPANY_INFO.name}
                  width={48}
                  height={48}
                  className="h-8 md:h-10 w-auto relative z-10"
                  priority
                />
              </div>
              <span className="font-bold text-base md:text-lg hidden sm:inline-block whitespace-nowrap tracking-tight text-gray-900">
                {COMPANY_INFO.name}
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-900 hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center shrink-0">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#1a1a1a] text-white hover:bg-black/90 rounded-full px-4 md:px-6 shadow-none transition-all duration-300 font-medium text-sm"
            >
              <span className="hidden sm:inline">Get Free Consultation</span>
              <span className="sm:hidden">Free Quote</span>
            </Button>
          </div>

        </div>
      </header>
    </>
  )
}
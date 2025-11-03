'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, Mail, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { COMPANY_INFO } from '@/lib/constants'

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

  const scrollToSection = (href: string) => {
    // If we're not on the home page, navigate to home with the anchor
    if (pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    // On home page, scroll to the section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Wildfire Support Banner */}
      <div className="sticky top-0 z-50 bg-orange-600 text-white py-2 px-4 text-center text-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2">
          <Flame className="h-4 w-4" />
          <span>We&apos;re providing dedicated support to homeowners affected by the LA wildfires.</span>
          <Link href="/fire" className="underline hover:no-underline ml-2 font-medium">
            Learn More
          </Link>
        </div>
      </div>

      <header className="sticky top-8 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center gap-8 px-4 md:px-6 max-w-5xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <img
            src="/AAA-Logo.png"
            alt={COMPANY_INFO.name}
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-bold text-lg hidden sm:inline-block whitespace-nowrap">
            {COMPANY_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => (
            item.href.startsWith('#') ? (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="flex items-center space-x-2">
          {/* Phone Number (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Primary CTA */}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="hidden sm:inline-flex ml-8"
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
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    item.href.startsWith('#') ? (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-base font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-left text-base font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="border-t pt-6 space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center space-x-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Mobile CTA */}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                  size="lg"
                >
                  Get Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  )
}
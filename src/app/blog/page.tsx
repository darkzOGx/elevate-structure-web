import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { getFeaturedPosts, getAllPosts, BLOG_CATEGORIES } from '@/lib/blog-data'
import BlogFilterClient from '@/components/BlogFilterClient'
import { FeaturedArticlesCarousel } from '@/components/FeaturedArticlesCarousel'

export const metadata: Metadata = {
  title: 'Engineering Insights & Industry News | AAA Engineering Design Blog',
  description: 'Expert insights on structural engineering, building codes, construction best practices, and industry trends from our licensed Professional Engineers.',
  keywords: 'structural engineering blog, construction insights, building codes, engineering best practices, design tips',
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-8 lg:pt-24 lg:pb-12">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <FadeInSection>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">
                    Engineering Insights
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl mb-6">
                  Engineering Insights &
                  <span className="text-primary block">Industry Expertise</span>
                </h1>

                <p className="text-lg text-muted-foreground sm:text-xl mb-8">
                  Expert insights on structural engineering, building codes, construction best practices,
                  and the latest industry trends from our licensed Professional Engineers.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Featured Articles
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our most popular and recent engineering insights
                  </p>
                </div>
              </FadeInSection>

              <FeaturedArticlesCarousel posts={featuredPosts} />
            </div>
          </section>
        )}

        {/* All Posts Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  All Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Browse our complete collection of engineering insights and industry knowledge
                </p>

              </div>
            </FadeInSection>

            {/* Client-side filtering component */}
            <BlogFilterClient categories={BLOG_CATEGORIES} posts={allPosts} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <FadeInSection>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-8 lg:p-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Have a Structural Engineering Question?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Our licensed Professional Engineers are here to help. Get a free consultation
                    and discuss your project with our expert team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/#contact">
                      <Button size="lg" className="text-base px-8 py-6 h-auto">
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                        Call {COMPANY_INFO.phone}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

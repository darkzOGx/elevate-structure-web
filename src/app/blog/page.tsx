import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { getFeaturedPosts, getAllPosts, BLOG_CATEGORIES } from '@/lib/blog-data'

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
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-16 lg:py-24">
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
          <section className="py-16 lg:py-24 bg-muted/30">
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

              <div className="grid gap-8 md:grid-cols-2">
                {featuredPosts.map((post, index) => (
                  <FadeInSection key={post.id} delay={index * 200}>
                    <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                      <div className="relative overflow-hidden rounded-t-xl h-64 bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <BookOpen className="h-24 w-24 text-primary/30" />
                        </div>
                        <Badge className="absolute top-4 left-4 bg-primary">
                          {post.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" className="group/btn w-full justify-between">
                            Read Article
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
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

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {BLOG_CATEGORIES.map((category) => (
                    <Badge
                      key={category}
                      variant={category === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post, index) => (
                <FadeInSection key={post.id} delay={index * 100}>
                  <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md group">
                    <div className="relative overflow-hidden rounded-t-xl h-48 bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-primary/20" />
                      </div>
                      <Badge className="absolute top-3 left-3 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn w-full justify-between">
                          Read More
                          <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
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

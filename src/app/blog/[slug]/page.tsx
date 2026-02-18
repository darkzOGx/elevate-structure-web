import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { ScrollToContactButton } from '@/components/ScrollToContactButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone, BookOpen } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { FadeInSection } from '@/components/FadeInSection'
import { RichBlogContent } from '@/components/RichBlogContent'
import { getPostById, getRecentPosts, getAllPosts } from '@/lib/blog-data'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema-data'
import { generateSpeakableSchema } from '@/lib/seo'
import { getAuthorById, getDefaultAuthor, generatePersonSchema } from '@/lib/authors-data'
import { formatBlogDate } from '@/lib/date-utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts
    .filter((post) => !post.noIndex)
    .map((post) => ({
      slug: post.id,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostById(slug)

  if (!post) {
    return {
      title: 'Post Not Found | AAA Engineering Design',
    }
  }

  const canonicalUrl = `${COMPANY_INFO.website}/blog/${slug}`

  return {
    title: `${post.title} | AAA Engineering Design Blog`,
    description: post.excerpt,
    keywords: `${post.category}, structural engineering, ${post.title}`,
    // Add noindex for posts marked as noIndex to prevent Google from indexing low-value city variants
    robots: post.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      type: 'article',
      images: [{ url: post.image || `${COMPANY_INFO.website}/og-image.jpg`, width: 1200, height: 630 }],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || `${COMPANY_INFO.website}/og-image.jpg`],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostById(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter(p => p.id !== post.id)

  // Get author data for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
  const author = post.authorId ? getAuthorById(post.authorId) : getDefaultAuthor()

  // Article Schema for GEO/AIO optimization (critical for AI citations)
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date, // Update this when articles are updated
    author: post.author,
    image: post.image,
    url: `${COMPANY_INFO.website}/blog/${slug}`,
    category: post.category
  })

  // Person Schema for author (E-E-A-T signals for AI systems)
  const personSchema = author ? generatePersonSchema(author) : null

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Blog', url: `${COMPANY_INFO.website}/blog` },
    { name: post.title, url: `${COMPANY_INFO.website}/blog/${slug}` }
  ])

  // Speakable Schema for Voice Search (AIO)
  // Target the title and the excerpt/summary as the speakable parts
  const speakableSchema = generateSpeakableSchema({
    url: `${COMPANY_INFO.website}/blog/${slug}`,
    cssSelectors: ['h1', '.text-lg.text-muted-foreground'] // Targeting title and excerpt
  })

  // FAQ Schema for Rich Results
  const faqSchema = post.faq ? generateFAQPageSchema(post.faq) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {personSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-background relative">
        <Header />

        <main>
          {/* Article Header */}
          <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-8 lg:pt-24 lg:pb-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <FadeInSection>
                {/* Back to Blog */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>

                {/* Category Badge */}
                <Badge className="mb-4">
                  {post.category}
                </Badge>

                {/* Title */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span>
                        Published: {formatBlogDate(post.date, {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      {post.lastUpdated && (
                        <span className="text-xs text-muted-foreground/80">
                          Updated: {formatBlogDate(post.lastUpdated, {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>By {post.author}</span>
                  </div>
                  {post.reviewedBy && (
                    <div className="flex items-center gap-2 bg-green-50/50 px-2 py-1 rounded-full border border-green-100">
                      <span className="text-green-700 font-medium text-xs">Reviewed by {post.reviewedBy}</span>
                    </div>
                  )}
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Article Content */}
          <section className="pt-8 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <article className="max-w-none">
                {post.content ? (
                  <RichBlogContent content={post.content} />
                ) : (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">{post.excerpt}</p>
                    <p className="text-lg">
                      This article provides comprehensive insights into {post.title.toLowerCase()}.
                      Our licensed Professional Engineers have compiled expert knowledge to help you
                      understand this important topic.
                    </p>
                  </div>
                )}
              </article>

              {/* Article CTA */}
              <FadeInSection delay={200}>
                <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Need Professional Engineering Services?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our licensed Professional Engineers are ready to help with your project.
                      Get a free consultation to discuss your structural engineering needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <ScrollToContactButton />
                      <a href={`tel:${COMPANY_INFO.phone}`}>
                        <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
                          <Phone className="mr-2 h-4 w-4" />
                          {COMPANY_INFO.phone}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </section>

          {/* Related Posts */}
          {recentPosts.length > 0 && (
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <FadeInSection>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                      Related Articles
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Continue exploring our engineering insights
                    </p>
                  </div>
                </FadeInSection>

                <div className="grid gap-6 md:grid-cols-3">
                  {recentPosts.map((relatedPost, index) => (
                    <FadeInSection key={relatedPost.id} delay={index * 100}>
                      <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md group">
                        <CardContent className="p-6">
                          <Badge className="mb-3 text-xs">
                            {relatedPost.category}
                          </Badge>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {formatBlogDate(relatedPost.date, {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <Link href={`/blog/${relatedPost.id}`}>
                            <Button variant="ghost" size="sm" className="group/btn w-full justify-between">
                              Read Article
                              <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>

                {/* View All Posts */}
                <FadeInSection delay={400}>
                  <div className="text-center mt-12">
                    <Link href="/blog">
                      <Button variant="outline" size="lg">
                        View All Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </FadeInSection>
              </div>
            </section>
          )}

          {/* Contact Form Section */}
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import { getCategoryColor } from '@/lib/generate-placeholder-images'
import { BlogPost } from '@/lib/blog-data'
import { formatBlogDate } from '@/lib/date-utils'

interface FeaturedArticlesCarouselProps {
  posts: BlogPost[]
}

export function FeaturedArticlesCarousel({ posts }: FeaturedArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const postsPerPage = 3

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Get current posts to display
  const currentPosts = posts.slice(currentIndex * postsPerPage, (currentIndex + 1) * postsPerPage)

  // Check if post is new (less than 7 days old)
  const isNewPost = (dateString: string) => {
    const postDate = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - postDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7
  }

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  if (posts.length === 0) return null

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {totalPages > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            onClick={handlePrevious}
            aria-label="Previous featured articles"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            onClick={handleNext}
            aria-label="Next featured articles"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Posts Row - Horizontal Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
        {currentPosts.map((post, index) => {
          const categoryColor = getCategoryColor(post.category)
          return (
            <FadeInSection key={`${post.id}-${currentIndex}`} delay={index * 100}>
              <Card className="border hover:border-primary/50 transition-all hover:shadow-md group h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Badge style={{ backgroundColor: categoryColor }} className="text-xs">
                        {post.category}
                      </Badge>
                      {isNewPost(post.date) && (
                        <Badge variant="destructive" className="text-xs font-bold animate-pulse">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Featured</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {formatBlogDate(post.date, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="group/btn w-full justify-between">
                      Read Article
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeInSection>
          )
        })}
      </div>

      {/* Pagination Numbers */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
          
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Page {currentIndex + 1} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === totalPages - 1}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>
      )}
    </div>
  )
}

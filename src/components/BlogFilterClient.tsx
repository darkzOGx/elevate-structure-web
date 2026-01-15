'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import type { BlogPost } from '@/lib/blog-data'
import { BLOG_COLOR_MAP } from '@/lib/generate-placeholder-images'
import { formatBlogDate } from '@/lib/date-utils'

interface BlogFilterClientProps {
  categories: string[]
  posts: BlogPost[]
}

const POSTS_PER_PAGE = 8

function getCategoryColor(category: string): string {
  return BLOG_COLOR_MAP[category] || '#0ea5e9'
}

export default function BlogFilterClient({
  categories,
  posts,
}: BlogFilterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Check if post is new (less than 7 days old)
  const isNewPost = (dateString: string) => {
    const postDate = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - postDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7
  }

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  // Handle category change - reset to page 1
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full transition-all ${
              currentPage === 1
                ? 'text-muted-foreground/40 cursor-not-allowed'
                : 'text-primary hover:bg-primary/10 hover:text-primary'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full transition-all ${
              currentPage === totalPages
                ? 'text-muted-foreground/40 cursor-not-allowed'
                : 'text-primary hover:bg-primary/10 hover:text-primary'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Filtered Posts Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post, index) => {
            const categoryColor = getCategoryColor(post.category)
            return (
              <FadeInSection key={post.id} delay={index * 100}>
                <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md group flex flex-col overflow-hidden">
                  <CardHeader className="pb-4 flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="w-fit text-xs" style={{ backgroundColor: categoryColor }}>
                        {post.category}
                      </Badge>
                      {isNewPost(post.date) && (
                        <Badge variant="destructive" className="text-xs font-bold animate-pulse">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatBlogDate(post.date, { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-[0.8rem] leading-tight group-hover:text-primary transition-colors line-clamp-3 min-h-[3rem]">
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
            )
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}

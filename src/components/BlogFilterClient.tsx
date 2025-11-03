'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import type { BlogPost } from '@/lib/blog-data'
import { BLOG_COLOR_MAP } from '@/lib/generate-placeholder-images'

interface BlogFilterClientProps {
  categories: string[]
  posts: BlogPost[]
}

function getCategoryColor(category: string): string {
  return BLOG_COLOR_MAP[category] || '#0ea5e9'
}

export default function BlogFilterClient({
  categories,
  posts,
}: BlogFilterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
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

      {/* Filtered Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const categoryColor = getCategoryColor(post.category)
            return (
              <FadeInSection key={post.id} delay={index * 100}>
                <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md group overflow-hidden">
                  <div className="relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-300" />
                    <Badge className="absolute top-3 left-3 text-xs" style={{ backgroundColor: categoryColor }}>
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

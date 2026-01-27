'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import { getAllPosts } from '@/lib/blog-data'
import { BLOG_COLOR_MAP } from '@/lib/generate-placeholder-images'
import { formatBlogDate } from '@/lib/date-utils'

export function RecentArticles() {
    // Get latest 4 posts
    const posts = getAllPosts().slice(0, 4)

    function getCategoryColor(category: string): string {
        return BLOG_COLOR_MAP[category] || '#0ea5e9'
    }

    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <FadeInSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Recent Engineering Insights
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Stay updated with the latest trends, building codes, and structural engineering best practices.
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post, index) => {
                        const categoryColor = getCategoryColor(post.category)
                        return (
                            <FadeInSection key={post.id} delay={index * 100}>
                                <Card className="h-full border hover:border-primary/50 transition-all hover:shadow-md group flex flex-col overflow-hidden bg-background">
                                    <CardHeader className="pb-4 flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="w-fit text-xs" style={{ backgroundColor: categoryColor }}>
                                                {post.category}
                                            </Badge>
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
                                        <CardTitle className="text-[0.95rem] leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                                            <Link href={`/blog/${post.id}`} className="hover:underline">
                                                {post.title}
                                            </Link>
                                        </CardTitle>
                                        <CardDescription className="text-sm line-clamp-3 mt-2">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0 mt-auto">
                                        <Link href={`/blog/${post.id}`} tabIndex={-1}>
                                            <Button variant="ghost" size="sm" className="group/btn w-full justify-between hover:bg-muted">
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

                <div className="flex justify-center mt-12">
                    <Link href="/blog">
                        <Button size="lg" variant="outline" className="text-base px-8 border-primary/20 hover:border-primary/50">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllPosts, BLOG_CATEGORIES } from '@/lib/blog-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
    title: 'Site Index & HTML Sitemap | AAA Engineering Design',
    description: 'Complete index of all pages and articles on AAA Engineering Design. Find structural engineering guides, services, and local resources.',
    robots: {
        index: true,
        follow: true,
    },
}

export default function SitemapPage() {
    const allPosts = getAllPosts()

    // Group posts by category
    const postsByCategory = BLOG_CATEGORIES.filter(cat => cat !== 'All').reduce((acc, category) => {
        acc[category] = allPosts.filter(post => post.category === category)
        return acc
    }, {} as Record<string, typeof allPosts>)

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 md:px-6 max-w-7xl py-12 lg:py-16">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Site Index</h1>
                        <p className="text-muted-foreground text-lg">
                            Complete overview of our website content and engineering resources.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {/* Main Pages Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Main Pages</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Link href="/" className="text-primary hover:underline">Home</Link>
                                    <Link href="/about" className="text-primary hover:underline">About Us</Link>
                                    <Link href="/services" className="text-primary hover:underline">Services</Link>
                                    <Link href="/#process" className="text-primary hover:underline">Our Process</Link>
                                    <Link href="/#faq" className="text-primary hover:underline">FAQ</Link>
                                    <Link href="/#contact" className="text-primary hover:underline">Contact</Link>
                                    <Link href="/blog" className="text-primary hover:underline">Blog</Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Blog Posts by Category */}
                        {Object.entries(postsByCategory).map(([category, posts]) => (
                            posts.length > 0 && (
                                <Card key={category}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>{category}</CardTitle>
                                            <Badge variant="secondary">{posts.length} Articles</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {posts.map(post => (
                                                <li key={post.id} className="text-sm">
                                                    <Link
                                                        href={`/blog/${post.id}`}
                                                        className="text-muted-foreground hover:text-primary transition-colors hover:underline block truncate"
                                                        title={post.title}
                                                    >
                                                        {post.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

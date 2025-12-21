import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'

interface RichBlogContentProps {
  content: string
}

export function RichBlogContent({ content }: RichBlogContentProps) {
  // Parse markdown-style content into rich components
  const renderContent = () => {
    if (!content || content.trim() === '') {
      return []
    }

    const sections = content.split('\n\n')

    return sections.map((section, index) => {
      // Main headings (##)
      if (section.startsWith('## ')) {
        const title = section.replace('## ', '').trim()
        return (
          <div key={index} className="my-12 first:mt-0">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 mb-6 border-l-4 border-primary">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-3xl font-bold text-foreground relative z-10">
                {title}
              </h2>
            </div>
          </div>
        )
      }

      // Sub-sub-headings (####)
      if (section.startsWith('#### ')) {
        const title = section.replace('#### ', '').trim()
        return (
          <div key={index} className="my-6">
            <h4 className="text-xl font-semibold text-foreground border-b border-primary/20 pb-2 inline-block">
              {title}
            </h4>
          </div>
        )
      }

      // Sub-headings (###)
      if (section.startsWith('### ')) {
        // Check if this section has bullet points after the heading
        if (section.includes('\n-')) {
          const lines = section.split('\n')
          const heading = lines[0].replace('### ', '').trim()
          const items = lines.slice(1).filter(line => line.trim().startsWith('-'))

          return (
            <div key={index} className="my-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <h3 className="text-2xl font-semibold text-foreground">
                  {heading}
                </h3>
              </div>
              <ul className="space-y-3 mt-4">
                {items.map((item, i) => {
                  // Parse markdown links in bullet points
                  const itemText = item.replace('-', '').trim()
                  const withLinks = itemText.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')

                  return (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="flex-1" dangerouslySetInnerHTML={{ __html: withLinks }} />
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }

        // Just a heading without bullet points
        const title = section.replace('### ', '').trim()
        return (
          <div key={index} className="my-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">
                {title}
              </h3>
            </div>
          </div>
        )
      }

      // Bold text (**text**)
      if (section.startsWith('**') && section.endsWith('**')) {
        const text = section.replace(/\*\*/g, '').trim()
        return (
          <div key={index} className="my-6">
            <Card className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-l-4 border-primary">
              <p className="text-lg font-semibold text-foreground flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                {text}
              </p>
            </Card>
          </div>
        )
      }

      // Ordered Lists (1., 2.)
      if (/^\s*\d+\./.test(section)) {
        const lines = section.split('\n')
        return (
          <div key={index} className="my-6">
            <ol className="space-y-3 list-decimal list-outside pl-6 text-foreground text-lg">
              {lines.map((line, i) => {
                const itemText = line.replace(/^\s*\d+\.\s*/, '').trim()
                const withLinks = itemText.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                  '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
                return <li key={i} dangerouslySetInnerHTML={{ __html: withLinks }} />
              })}
            </ol>
          </div>
        )
      }

      // Blockquotes (> )
      if (section.startsWith('> ')) {
        const text = section.replace(/^> \s*/gm, '').trim()
        return (
          <div key={index} className="my-6 pl-6 border-l-4 border-primary/50 italic text-lg text-muted-foreground">
            {text}
          </div>
        )
      }

      // Bullet points (-)
      if (section.includes('\n-')) {
        const lines = section.split('\n')
        const title = lines[0]
        const items = lines.slice(1).filter(line => line.trim().startsWith('-'))

        return (
          <div key={index} className="my-6">
            {title && !title.startsWith('-') && (
              <p className="font-semibold text-foreground mb-3">{title}</p>
            )}
            <ul className="space-y-3">
              {items.map((item, i) => {
                // Parse markdown links in bullet points
                const itemText = item.replace('-', '').trim()
                const withLinks = itemText.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                  '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')

                return (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="flex-1" dangerouslySetInnerHTML={{ __html: withLinks }} />
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }

      // Call-out boxes (starts with specific keywords)
      if (section.toLowerCase().includes('important:') || section.toLowerCase().includes('note:')) {
        return (
          <Card key={index} className="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-900 dark:text-amber-100">{section}</p>
            </div>
          </Card>
        )
      }

      if (section.toLowerCase().includes('tip:') || section.toLowerCase().includes('pro tip:')) {
        return (
          <Card key={index} className="my-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-900 dark:text-blue-100">{section}</p>
            </div>
          </Card>
        )
      }

      // Regular paragraphs
      if (section.trim()) {
        // Handle inline links [text](/url)
        const withLinks = section.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')

        return (
          <p key={index} className="my-4 text-foreground leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: withLinks }} />
        )
      }

      return null
    }).filter(Boolean)
  }

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  )
}

// Utility to generate placeholder image URLs using placeholder service
// This function creates consistent, professional-looking placeholder images for blog posts

export interface PlaceholderImageOptions {
  title: string
  category: string
  width?: number
  height?: number
}

/**
 * Generates a placeholder image URL using ui.shadcn.com or a similar service
 * Falls back to a simple SVG placeholder if external service is unavailable
 */
export function generatePlaceholderImage(options: PlaceholderImageOptions): string {
  const { title, category, width = 800, height = 400 } = options

  // Using a robust placeholder service that works reliably
  // This generates a nice gradient background with text
  const encodeText = (text: string) => encodeURIComponent(text)

  // Using placeholder.com service which is reliable
  // Format: https://via.placeholder.com/800x400?text=Title
  const placeholderUrl = `https://via.placeholder.com/${width}x${height}?text=${encodeText(title)}`

  return placeholderUrl
}

/**
 * Generates SVG placeholder as fallback
 * Can be used as a data URL
 */
export function generateSvgPlaceholder(
  title: string,
  category: string,
  color: string = '#0ea5e9'
): string {
  const encodeText = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const svg = `
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad)"/>
      <text x="400" y="180" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">
        ${encodeText(category)}
      </text>
      <text x="400" y="240" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.9">
        ${encodeText(title.substring(0, 40))}${title.length > 40 ? '...' : ''}
      </text>
    </svg>
  `

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// Blog post color mapping for consistent, professional colors
export const BLOG_COLOR_MAP: { [key: string]: string } = {
  'Structural Engineering': '#ef4444', // Red
  'Building Codes': '#f59e0b', // Amber
  'Design & Planning': '#3b82f6', // Blue
  'Commercial Projects': '#8b5cf6', // Purple
  'Safety & Compliance': '#10b981', // Green
}

/**
 * Get color for a specific category
 */
export function getCategoryColor(category: string): string {
  return BLOG_COLOR_MAP[category] || '#0ea5e9' // Default to cyan
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname, search } = url
  const hostname = request.headers.get('host') || ''

  // 1. Enforce HTTPS (except localhost)
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') !== 'https') {
    url.protocol = 'https'
    return NextResponse.redirect(url)
  }

  // 2. Enforce non-www (aaaengineeringdesign.com)
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url)
  }

  // 3. Remove trailing slash (except for home /)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url)
  }

  // 4. Handle specific double-city slugs (based on user report)
  // Pattern: /[city-name]-[city-name] -> /[city-name]
  // This is a heuristic cleanup for the reported 404s
  const doubleCityPattern = /-([a-z-]+)-\1$/
  if (doubleCityPattern.test(pathname)) {
    // Example: /blog/septic-design-engineers-in-westminster-westminster
    // Becomes: /blog/septic-design-engineers-in-westminster
    const newPath = pathname.replace(doubleCityPattern, '-$1')
    url.pathname = newPath
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

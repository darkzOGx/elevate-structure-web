import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const CANONICAL_HOST = 'aaaengineeringdesign.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.nextUrl.hostname.toLowerCase()
  const pathname = request.nextUrl.pathname
  let redirectNeeded = false

  // Force https://aaaengineeringdesign.com (no www) in production
  const isLocalEnv =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.local')

  if (!isLocalEnv && hostname !== CANONICAL_HOST) {
    if (hostname.startsWith('www.')) {
      url.hostname = CANONICAL_HOST
      url.protocol = 'https'
      redirectNeeded = true
    }
  }

  // Remove trailing slashes to match canonical URLs
  if (pathname.length > 1 && pathname.endsWith('/')) {
    url.pathname = pathname.replace(/\/+$/, '')
    redirectNeeded = true
  }

  if (redirectNeeded) {
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

// Apply only to page routes (skip assets and API)
export const config = {
  matcher: [
    '/((?!_next|_vercel|api|static|.*\\..*).*)',
  ],
}

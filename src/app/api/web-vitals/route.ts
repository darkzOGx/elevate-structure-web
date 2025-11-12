import { NextRequest, NextResponse } from 'next/server'

/**
 * Web Vitals Analytics API Endpoint
 *
 * Receives Core Web Vitals metrics from the client and stores them.
 *
 * Current implementation: Logs to console (for development)
 * Production options:
 * 1. Send to Google Analytics 4
 * 2. Store in your own database (PostgreSQL, MongoDB, etc.)
 * 3. Send to analytics platforms (Vercel Analytics, Plausible, etc.)
 * 4. Send to logging services (Datadog, LogRocket, Sentry)
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      name,
      value,
      rating,
      delta,
      id,
      navigationType,
      timestamp,
      url,
      userAgent,
    } = body

    // Validate required fields
    if (!name || value === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: name and value' },
        { status: 400 }
      )
    }

    // Parse the URL to get pathname (remove query params for grouping)
    let pathname = '/'
    try {
      const urlObj = new URL(url)
      pathname = urlObj.pathname
    } catch {
      // Invalid URL, use default
    }

    // Determine if metric passes threshold
    const status = getMetricStatus(name, value)

    // Create analytics event object
    const analyticsEvent = {
      metric: name,
      value: Math.round(name === 'CLS' ? value * 1000 : value), // CLS is scaled by 1000
      rating,
      status,
      delta,
      id,
      navigationType,
      timestamp,
      page: pathname,
      userAgent,
    }

    // --- OPTION 1: Log to console (development) ---
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 [Web Vitals Analytics]', analyticsEvent)
    }

    // --- OPTION 2: Send to your database (uncomment and configure) ---
    /*
    // Example: PostgreSQL with Prisma
    await prisma.webVitals.create({
      data: {
        metric: name,
        value: analyticsEvent.value,
        rating,
        status,
        page: pathname,
        timestamp: new Date(timestamp),
        userAgent,
      },
    })
    */

    // --- OPTION 3: Send to Google Analytics 4 (server-side) ---
    /*
    // Requires GA4 Measurement Protocol
    const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID
    const GA_API_SECRET = process.env.GA_API_SECRET

    if (GA_MEASUREMENT_ID && GA_API_SECRET) {
      const gaUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`

      await fetch(gaUrl, {
        method: 'POST',
        body: JSON.stringify({
          client_id: id,
          events: [
            {
              name: 'web_vitals',
              params: {
                metric_name: name,
                metric_value: analyticsEvent.value,
                metric_rating: rating,
                page_path: pathname,
              },
            },
          ],
        }),
      })
    }
    */

    // --- OPTION 4: Send to Vercel Analytics (if using Vercel) ---
    /*
    // Vercel automatically tracks Web Vitals if you enable it in dashboard
    // No additional code needed - just enable in Vercel project settings
    */

    // --- OPTION 5: Send to external analytics service ---
    /*
    // Example: Custom analytics endpoint
    await fetch('https://your-analytics-service.com/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(analyticsEvent),
    })
    */

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json(
      { error: 'Failed to process web vitals data' },
      { status: 500 }
    )
  }
}

/**
 * Determine if a metric passes the 2025 "Good" threshold
 */
function getMetricStatus(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<
    string,
    { good: number; needsImprovement: number }
  > = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    INP: { good: 200, needsImprovement: 500 },
    LCP: { good: 2500, needsImprovement: 4000 },
    FCP: { good: 1800, needsImprovement: 3000 },
    TTFB: { good: 600, needsImprovement: 1500 },
  }

  const threshold = thresholds[metricName]
  if (!threshold) return 'good'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.needsImprovement) return 'needs-improvement'
  return 'poor'
}

// Allow GET requests to return API status
export async function GET() {
  return NextResponse.json(
    {
      status: 'Web Vitals Analytics API is running',
      endpoint: '/api/web-vitals',
      method: 'POST',
      thresholds: {
        CLS: '< 0.1 (good), < 0.25 (needs improvement)',
        INP: '< 200ms (good), < 500ms (needs improvement)',
        LCP: '< 2.5s (good), < 4s (needs improvement)',
        FCP: '< 1.8s (good), < 3s (needs improvement)',
        TTFB: '< 600ms (good), < 1.5s (needs improvement)',
      },
    },
    { status: 200 }
  )
}

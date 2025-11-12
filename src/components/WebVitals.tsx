'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onLCP, onFCP, onTTFB, Metric } from 'web-vitals'

/**
 * Web Vitals Monitoring Component
 *
 * Tracks Core Web Vitals metrics and sends them to analytics.
 *
 * 2025 Thresholds for "Good" ratings:
 * - LCP (Largest Contentful Paint): < 2.5 seconds
 * - INP (Interaction to Next Paint): < 200 milliseconds
 * - CLS (Cumulative Layout Shift): < 0.1
 * - FCP (First Contentful Paint): < 1.8 seconds
 * - TTFB (Time to First Byte): < 600 milliseconds
 */
export function WebVitals() {
  useEffect(() => {
    // Function to send metrics to analytics
    function sendToAnalytics(metric: Metric) {
      const body = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }

      // Option 1: Send to your own analytics API endpoint
      if (navigator.sendBeacon) {
        // Use sendBeacon for better reliability (works even if user navigates away)
        navigator.sendBeacon('/api/web-vitals', JSON.stringify(body))
      } else {
        // Fallback for older browsers
        fetch('/api/web-vitals', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
        })
      }

      // Option 2: Send to Google Analytics 4 (if you have it set up)
      // Uncomment and replace GA_MEASUREMENT_ID with your actual ID
      /*
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }
      */

      // Console logging for development (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          threshold: getThreshold(metric.name),
          status: getStatus(metric.name, metric.value),
        })
      }
    }

    // Register all Core Web Vitals observers
    onCLS(sendToAnalytics)   // Cumulative Layout Shift
    onINP(sendToAnalytics)   // Interaction to Next Paint (replaces FID in 2024)
    onLCP(sendToAnalytics)   // Largest Contentful Paint
    onFCP(sendToAnalytics)   // First Contentful Paint (supplementary)
    onTTFB(sendToAnalytics)  // Time to First Byte (supplementary)
  }, [])

  // This component doesn't render anything
  return null
}

// Helper function to get threshold for each metric
function getThreshold(metricName: string): string {
  const thresholds: Record<string, string> = {
    'CLS': '< 0.1',
    'INP': '< 200ms',
    'LCP': '< 2.5s',
    'FCP': '< 1.8s',
    'TTFB': '< 600ms',
  }
  return thresholds[metricName] || 'N/A'
}

// Helper function to determine if metric passes threshold
function getStatus(metricName: string, value: number): string {
  const passing: Record<string, boolean> = {
    'CLS': value < 0.1,
    'INP': value < 200,
    'LCP': value < 2500,
    'FCP': value < 1800,
    'TTFB': value < 600,
  }
  return passing[metricName] ? '✅ GOOD' : '⚠️ NEEDS IMPROVEMENT'
}

// TypeScript declaration for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams: Record<string, unknown>
    ) => void
  }
}

'use client'

import { useEffect, useState } from "react"

export function EngineeringAnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(70, 90, 120, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(70, 90, 120, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Large grid */}
      <div
        className="absolute inset-0 opacity-35 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(45, 64, 92, 0.65) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(45, 64, 92, 0.65) 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute inset-0 opacity-25 dark:opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(30, 41, 59, 0.35) 25%, transparent 25%),
            linear-gradient(315deg, rgba(30, 41, 59, 0.2) 25%, transparent 25%)
          `,
          backgroundSize: '120px 120px',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  )
}


'use client'

import { useEffect, useState } from 'react'

export function AnimatedConstructionIcon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative flex items-center justify-center w-full h-80 overflow-hidden">
      {/* Main Container */}
      <div className="relative w-72 h-72 flex items-center justify-center">

        {/* Sophisticated Structural Elements */}
        <div className="absolute z-10">
          <svg
            width="240"
            height="200"
            viewBox="0 0 240 200"
            className="animate-float"
          >
            <defs>
              <linearGradient id="steel1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.7)" />
              </linearGradient>
              <linearGradient id="steel2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.7)" />
              </linearGradient>
            </defs>

            {/* Central I-Beam (rotating like a cog) */}
            <g className="animate-rotate-beam" style={{ transformOrigin: '120px 100px' }}>
              <rect x="110" y="85" width="20" height="30" fill="url(#steel1)" rx="2"/>
              {/* I-beam flanges */}
              <rect x="105" y="85" width="30" height="4" fill="url(#steel1)" rx="1"/>
              <rect x="105" y="111" width="30" height="4" fill="url(#steel1)" rx="1"/>

              {/* Connection bolts (like cog teeth) */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * Math.PI / 180
                const x = 120 + Math.cos(angle) * 25
                const y = 100 + Math.sin(angle) * 25
                return (
                  <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
                )
              })}
            </g>

            {/* Interlocking Steel Columns */}
            <g className="animate-rotate-column" style={{ transformOrigin: '60px 60px' }}>
              <rect x="55" y="45" width="10" height="30" fill="url(#steel2)" rx="1"/>
              {/* Column connection points */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60) * Math.PI / 180
                const x = 60 + Math.cos(angle) * 20
                const y = 60 + Math.sin(angle) * 20
                return (
                  <rect key={i} x={x-2} y={y-6} width="4" height="12" fill="url(#steel2)" rx="1"/>
                )
              })}
              <circle cx="60" cy="60" r="6" fill="hsl(var(--accent))" stroke="hsl(var(--background))" strokeWidth="2"/>
            </g>

            {/* Rotating Steel Plate Assembly */}
            <g className="animate-rotate-plate" style={{ transformOrigin: '180px 140px' }}>
              <rect x="170" y="130" width="20" height="20" fill="url(#steel1)" rx="2"/>
              {/* Welding points */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60) * Math.PI / 180
                const x = 180 + Math.cos(angle) * 15
                const y = 140 + Math.sin(angle) * 15
                return (
                  <circle key={i} cx={x} cy={y} r="2" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
                )
              })}
            </g>

            {/* Connecting Structural Elements */}
            <g className="animate-fade-structural">
              {/* Horizontal beam connections */}
              <rect x="80" y="98" width="40" height="4" fill="url(#steel2)" rx="1"/>
              <rect x="140" y="98" width="40" height="4" fill="url(#steel2)" rx="1"/>

              {/* Diagonal bracing */}
              <line x1="75" y1="75" x2="105" y2="85" stroke="url(#steel1)" strokeWidth="3" strokeLinecap="round"/>
              <line x1="135" y1="85" x2="165" y2="125" stroke="url(#steel1)" strokeWidth="3" strokeLinecap="round"/>

              {/* Connection nodes */}
              <circle cx="80" cy="100" r="4" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
              <circle cx="160" cy="100" r="4" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
            </g>

            {/* Blueprint Grid Background */}
            <g className="opacity-10">
              <defs>
                <pattern id="blueprint" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                  <circle cx="0" cy="0" r="0.5" fill="hsl(var(--primary))"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint)" />
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.01); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-0.5deg); }
        }

        @keyframes work {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes dig {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes push {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(2px); }
        }

        @keyframes pile-move {
          0%, 100% { transform: translateX(0px) scale(1); }
          50% { transform: translateX(-5px) scale(0.95); }
        }

        @keyframes dirt-move {
          0%, 100% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.8; transform: scale(1.1); }
          75% { opacity: 0.9; transform: scale(0.9); }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-work {
          animation: work 3s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .animate-dig {
          animation: dig 2s ease-in-out infinite;
          transform-origin: 85px 155px;
        }

        .animate-push {
          animation: push 4s ease-in-out infinite;
        }

        .animate-pile-move {
          animation: pile-move 3s ease-in-out infinite;
        }

        .animate-dirt-move {
          animation: dirt-move 2s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        @keyframes rotate-beam {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }

        @keyframes rotate-column {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(120deg); }
        }

        @keyframes rotate-plate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-90deg); }
        }

        @keyframes fade-structural {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .animate-rotate-beam {
          animation: rotate-beam 8s linear infinite;
        }

        .animate-rotate-column {
          animation: rotate-column 6s linear infinite;
        }

        .animate-rotate-plate {
          animation: rotate-plate 10s linear infinite;
        }

        .animate-fade-structural {
          animation: fade-structural 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
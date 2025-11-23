'use client'

import { motion } from 'framer-motion'

interface FloatingElement {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
  type: 'compass' | 'ruler' | 'protractor' | 'blueprint' | 'structural' | 'measurement'
}

export function EngineeringAnimatedBackground() {
  // Remove mounted check - render immediately

  // Generate floating engineering elements - Larger and more visible
  const floatingElements: FloatingElement[] = [
    { id: 1, x: 10, y: 15, delay: 0, duration: 8, size: 62, type: 'compass' },
    { id: 2, x: 85, y: 20, delay: 1, duration: 10, size: 56, type: 'ruler' },
    { id: 3, x: 15, y: 70, delay: 2, duration: 9, size: 60, type: 'protractor' },
    { id: 4, x: 75, y: 60, delay: 1.5, duration: 11, size: 69, type: 'blueprint' },
    { id: 5, x: 50, y: 10, delay: 0.5, duration: 7, size: 53, type: 'structural' },
    { id: 6, x: 25, y: 45, delay: 2.5, duration: 9, size: 50, type: 'measurement' },
    { id: 7, x: 90, y: 80, delay: 1, duration: 8, size: 56, type: 'compass' },
    { id: 8, x: 5, y: 50, delay: 3, duration: 10, size: 48, type: 'ruler' },
    { id: 9, x: 60, y: 35, delay: 1.2, duration: 9, size: 53, type: 'protractor' },
    { id: 10, x: 35, y: 25, delay: 2.2, duration: 10, size: 44, type: 'structural' },
    { id: 11, x: 40, y: 70, delay: 1.8, duration: 9, size: 52, type: 'measurement' },
    { id: 12, x: 20, y: 25, delay: 0.7, duration: 8, size: 58, type: 'blueprint' },
    { id: 13, x: 70, y: 15, delay: 2.8, duration: 12, size: 46, type: 'compass' },
    { id: 14, x: 55, y: 55, delay: 1.1, duration: 7, size: 49, type: 'ruler' },
  ]

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Animated Grid Background - Using Light Olive/Tan */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(85, 107, 47, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(85, 107, 47, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.15,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 74, 42, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 74, 42, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px',
            opacity: 0.1,
          }}
        />
      </div>

      {/* Floating Engineering Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          initial={{ opacity: 0.6, y: 0 }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {element.type === 'compass' && <CompassIcon />}
          {element.type === 'ruler' && <RulerIcon />}
          {element.type === 'protractor' && <ProtractorIcon />}
          {element.type === 'blueprint' && <BlueprintIcon />}
          {element.type === 'structural' && <StructuralIcon />}
          {element.type === 'measurement' && <MeasurementIcon />}
        </motion.div>
      ))}

      {/* Additional Animated CAD Lines - Using Deep Olive */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        {/* Animated dimension lines */}
        <motion.path
          d="M 200 100 L 400 100 M 200 95 L 200 105 M 400 95 L 400 105"
          stroke="#3b4a2a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.text
          x="300"
          y="90"
          className="text-xs fill-slate-700 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          20&apos;-0&quot;
        </motion.text>

        {/* Animated section cut symbol */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <path
            d="M 600 200 L 700 200 M 650 180 L 650 220 M 600 200 L 640 180 M 700 200 L 660 180 M 600 200 L 640 220 M 700 200 L 660 220"
            stroke="#556b2f"
            strokeWidth="2"
            fill="none"
          />
          <text x="655" y="175" className="text-xs fill-slate-700 font-bold">SECTION A-A</text>
        </motion.g>

        {/* Animated elevation marker */}
        <motion.circle
          cx="150"
          cy="400"
          r="25"
          stroke="#3b4a2a"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.path
          d="M 150 375 L 150 425 M 125 400 L 175 400"
          stroke="#3b4a2a"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}

// Engineering Icon Components - Updated to use Tan/Olive Palette
function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(85, 107, 47, 0.8)' }}> {/* Olive */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 2 L12 8 M12 16 L12 22 M2 12 L8 12 M16 12 L22 12" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8 L16 12 L12 16 L8 12 Z" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(59, 74, 42, 0.8)' }}> {/* Deep Olive */}
      <rect x="2" y="10" width="20" height="4" fill="currentColor" opacity="0.4" />
      <path d="M2 10 L22 10 M2 14 L22 14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M4 10 L4 14 M8 10 L8 14 M12 10 L12 14 M16 10 L16 14 M20 10 L20 14" stroke="currentColor" strokeWidth="2" />
      <text x="4" y="9" className="text-[6px] fill-current font-mono font-bold">0</text>
      <text x="20" y="9" className="text-[6px] fill-current font-mono font-bold">12</text>
    </svg>
  )
}

function ProtractorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(230, 210, 181, 0.9)' }}> {/* Tan/Cream (high opacity for visibility) */}
      <path
        d="M12 2 L2 22 L22 22 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M12 2 Q 2 12 2 22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M12 2 Q 22 12 22 22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path d="M2 12 L22 12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <text x="11" y="20" className="text-[7px] fill-current font-mono font-bold">180°</text>
    </svg>
  )
}

function BlueprintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(85, 107, 47, 0.7)' }}> {/* Olive */}
      <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M3 9 L21 9 M3 15 L21 15 M9 3 L9 21 M15 3 L15 21" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.5" />
      <path d="M9 9 L15 15" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

function StructuralIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(59, 74, 42, 0.8)' }}> {/* Deep Olive */}
      {/* I-beam shape */}
      <rect x="8" y="4" width="8" height="16" fill="currentColor" opacity="0.4" />
      <rect x="8" y="4" width="8" height="3" fill="currentColor" />
      <rect x="8" y="17" width="8" height="3" fill="currentColor" />
      <rect x="10" y="7" width="4" height="10" fill="currentColor" opacity="0.6" />
      {/* Connection points */}
      <circle cx="12" cy="4" r="2.5" fill="currentColor" />
      <circle cx="12" cy="20" r="2.5" fill="currentColor" />
    </svg>
  )
}

function MeasurementIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{ color: 'rgba(230, 210, 181, 0.9)' }}> {/* Tan/Cream */}
      {/* Dimension arrow */}
      <path d="M4 12 L20 12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M4 12 L8 8 M4 12 L8 16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 12 L16 8 M20 12 L16 16" stroke="currentColor" strokeWidth="2.5" />
      <text x="10" y="10" className="text-[8px] fill-current font-mono font-bold">24&apos;</text>
    </svg>
  )
}

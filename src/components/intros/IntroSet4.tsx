'use client'

import { motion } from 'framer-motion'
import { Hexagon, Sun, Thermometer } from 'lucide-react'

// Common props
interface IntroProps {
    onComplete?: () => void
}

// 16. Geodesic Dome Tessellation
export function GeodesicIntro({ onComplete }: IntroProps) {
    const hexagons = Array.from({ length: 14 })
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#f8fafc] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="flex flex-wrap w-80 justify-center gap-1">
                {hexagons.map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="text-slate-800"
                    >
                        <Hexagon className="w-16 h-16 fill-slate-100 stroke-slate-800" />
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <h1 className="text-4xl font-light tracking-[0.2em] bg-white/80 p-4 backdrop-blur-sm">GEOMETRY</h1>
            </motion.div>
        </motion.div>
    )
}

// 17. Shadow and Light Study
export function ShadowIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#fafafa] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative">
                {/* The Object casting shadow */}
                <div className="text-9xl font-black text-transparent bg-clip-text bg-slate-200 relative z-10">
                    FORM
                </div>

                {/* The Moving Shadow */}
                <motion.div
                    className="absolute top-0 left-0 text-9xl font-black text-slate-300 origin-bottom-left z-0 blur-sm transform-gpu opacity-50"
                    animate={{ rotate: [45, -45] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                >
                    FORM
                </motion.div>

                {/* Light Source Indicator */}
                <motion.div
                    className="absolute -top-20 -left-20"
                    animate={{ x: [0, 300], y: [0, 50] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                >
                    <Sun className="w-12 h-12 text-yellow-500 opacity-50" />
                </motion.div>
            </div>
        </motion.div>
    )
}

// 18. Exploded Axonometric
export function ExplodedIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-blue-50 flex items-center justify-center perspective-[1000px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-64 h-64 transform-style-3d rotate-x-60 rotate-z-45">
                {/* Roof */}
                <motion.div
                    className="absolute inset-0 bg-blue-500 opacity-80 border-4 border-blue-600"
                    initial={{ z: 200, opacity: 0 }}
                    animate={{ z: 50, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
                />

                {/* Walls */}
                <motion.div
                    className="absolute inset-0 bg-blue-400 opacity-80 border-4 border-blue-600"
                    initial={{ z: 0, opacity: 0 }}
                    animate={{ z: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, type: "spring" }}
                />

                {/* Floor */}
                <motion.div
                    className="absolute inset-0 bg-blue-800 opacity-80 border-4 border-blue-600"
                    initial={{ z: -200, opacity: 0 }}
                    animate={{ z: -50, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0, type: "spring" }}
                />

                <div className="absolute inset-0 flex items-center justify-center z-50 transform -rotate-z-45 -rotate-x-60">
                    <motion.span
                        className="text-white font-bold text-2xl bg-black/50 p-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                    >
                        ASSEMBLED
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )
}

// 19. Rebar Cage Forming
export function RebarIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <svg width="400" height="400" className="overflow-visible">
                {/* Vertical Bars */}
                {[...Array(5)].map((_, i) => (
                    <motion.line
                        key={`v-${i}`}
                        x1={100 + i * 50} y1="50" x2={100 + i * 50} y2="350"
                        stroke="#94a3b8" strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                    />
                ))}

                {/* Horizontal Rings */}
                {[...Array(4)].map((_, i) => (
                    <motion.rect
                        key={`h-${i}`}
                        x="100" y={100 + i * 60} width="200" height="40" rx="10"
                        fill="none" stroke="#64748b" strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 + i * 0.1 }}
                    />
                ))}
            </svg>

            <motion.div
                className="absolute text-slate-400 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                REINFORCED
            </motion.div>
        </motion.div>
    )
}

// 20. Stress Analysis Heat Map
export function StressIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-80 h-96 bg-gray-800 rounded-lg overflow-hidden">
                {/* Base Grid */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-10 border border-gray-700 opacity-30" />

                {/* Heatmap Overlay */}
                <motion.div
                    className="absolute inset-0 opacity-0 mix-blend-color"
                    animate={{ opacity: [0, 0.8, 1, 0.5] }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{
                        background: 'radial-gradient(circle at 50% 30%, red 0%, yellow 30%, blue 100%)'
                    }}
                />

                {/* Load Arrow */}
                <motion.div
                    className="absolute top-10 left-1/2 -ml-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="w-8 h-8 border-l-4 border-b-4 border-red-500 transform -rotate-45" />
                </motion.div>

                <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-black/80 p-2 font-mono text-xs text-green-400 border border-green-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    STRESS: CRITICAL <br />
                    INTEGRITY: 100%
                </motion.div>
            </div>
        </motion.div>
    )
}

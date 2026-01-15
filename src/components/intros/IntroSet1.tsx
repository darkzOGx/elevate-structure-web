'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

// Common props
interface IntroProps {
    onComplete?: () => void
}

// 1. Blueprint Lines
export function BlueprintIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#0F172A] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-[600px] h-[400px] border border-cyan-900/30 bg-[#1e293b]/50 backdrop-blur-sm grid grid-cols-4 grid-rows-3">
                {/* Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20 pointer-events-none">
                    {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-cyan-500/30" />
                    ))}
                </div>

                {/* Drawing Paths */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M 50 350 L 50 50 L 550 50 L 550 350 Z"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 50 350 L 550 50"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="1"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.circle
                        cx="300" cy="200" r="100"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, rotate: -90 }}
                        animate={{ pathLength: 1, rotate: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </svg>

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <div className="bg-[#0F172A] p-4 border border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        <h1 className="text-3xl font-mono text-cyan-400 font-bold tracking-widest">ELEVATE</h1>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

// 2. Steel I-Beams
export function SteelBeamsIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-200 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Left Beam */}
            <motion.div
                className="absolute w-[40%] h-32 bg-slate-800 flex flex-col justify-between p-2 shadow-2xl"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "backOut" }}
                style={{ left: 0 }}
            >
                <div className="h-4 bg-slate-600 w-full" />
                <div className="h-4 bg-slate-600 w-full" />
            </motion.div>

            {/* Right Beam */}
            <motion.div
                className="absolute w-[40%] h-32 bg-slate-800 flex flex-col justify-between p-2 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "backOut" }} // Simultaneous
                style={{ right: 0 }}
            >
                <div className="h-4 bg-slate-600 w-full" />
                <div className="h-4 bg-slate-600 w-full" />
            </motion.div>

            {/* Center Connector (Lock) */}
            <motion.div
                className="absolute w-32 h-40 bg-orange-600 z-10 flex items-center justify-center shadow-xl"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, type: "spring", damping: 15 }}
            >
                <div className="w-4 h-4 rounded-full bg-slate-300 shadow-inner mx-2" />
                <div className="w-4 h-4 rounded-full bg-slate-300 shadow-inner mx-2" />
            </motion.div>

            <motion.div
                className="absolute bottom-20 text-4xl font-black text-slate-800 uppercase tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                Built Strong
            </motion.div>
        </motion.div>
    )
}

// 3. Wireframe Rising
export function WireframeIntro({ onComplete }: IntroProps) {
    const floors = 5;
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-white flex items-end justify-center pb-20 perspective-[1000px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-64 transform-style-3d">
                {[...Array(floors)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-24 w-full border-2 border-slate-900 border-b-0 relative"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.3 }}
                        style={{ originY: 1 }}
                    >
                        {/* Internal Grid */}
                        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                            {[...Array(3)].map((_, j) => (
                                <div key={j} className="border-r border-slate-900/20 h-full" />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.h1
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 text-4xl font-bold border-2 border-slate-900 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
            >
                RISE
            </motion.h1>
        </motion.div>
    )
}

// 4. Load Path Visualization
export function LoadPathIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-96 h-96">
                {/* Structural Frame */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 border-t-8 border-slate-700 flex justify-between">
                    <div className="w-8 h-full bg-slate-700" />
                    <div className="w-8 h-full bg-slate-700" />
                </div>

                {/* Force Arrows */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: 3, repeatType: "reverse" }}
                >
                    <ArrowDown className="w-16 h-16 text-yellow-500" />
                </motion.div>

                {/* Flow lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                        d="M 188 40 L 188 380" // Left Column
                        stroke="#eab308"
                        strokeWidth="4"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path
                        d="M 276 40 L 276 380" // Right Column (Adjusted coords approx)
                        stroke="#eab308"
                        strokeWidth="4"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </svg>

                <motion.div
                    className="absolute bottom-0 w-full text-center text-yellow-500 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    LOAD VERIFIED
                </motion.div>
            </div>
        </motion.div>
    )
}

// 5. Truss System
export function TrussIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center perspective-[1000px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="flex items-end gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative w-20 h-20">
                        {/* Base */}
                        <motion.div
                            className="absolute bottom-0 w-full h-1 bg-black"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                        {/* Left Diag */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-[141%] h-1 bg-black origin-left -rotate-45"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                        />
                        {/* Right Diag */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-[141%] h-1 bg-black origin-right rotate-45"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                        />
                    </div>
                ))}
            </div>

            <motion.div
                className="absolute top-1/2 text-2xl font-bold tracking-[1em] text-slate-400 mt-20"
                initial={{ opacity: 0, letterSpacing: "2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ delay: 2, duration: 1 }}
            >
                STABILITY
            </motion.div>
        </motion.div>
    )
}

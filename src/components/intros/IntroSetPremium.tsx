'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroProps {
    onComplete?: () => void
}

// 1. The Matrix / Digital Grid Construction
// Uses a 12x12 grid with staggered animations to create a "digital build" liquid effect
export function DigitalGridIntro({ onComplete }: IntroProps) {
    const rows = 12
    const cols = 12

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#020617] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Background glow pulse */}
            <motion.div
                className="absolute inset-0 bg-blue-900/20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="grid grid-cols-12 gap-1 relative z-10 rotate-45 scale-150">
                {Array.from({ length: rows * cols }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-8 h-8 bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0.3],
                            scale: [0, 1, 1],
                            backgroundColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.8)", "rgba(59,130,246,0.1)"]
                        }}
                        transition={{
                            duration: 1.5,
                            delay: (i % cols) * 0.1 + (Math.floor(i / cols) * 0.1), // Wave effect
                            ease: "circOut"
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="relative">
                    <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 tracking-tighter filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        SYSTEMS
                    </h1>
                    <motion.div
                        className="h-1 bg-blue-500 mt-2 shadow-[0_0_10px_rgba(59,130,246,1)]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

// 2. The Architect / Dark Mode Blueprint
// High-fidelity thin lines with glowing end-caps and smooth easing
export function ArchitectIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#0c0c0c] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Fine Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative w-[800px] h-[500px]">
                {/* Main Structural Lines */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="50%" stopColor="#fff" />
                            <stop offset="100%" stopColor="#333" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Animated Path */}
                    <motion.path
                        d="M 100 400 L 100 100 L 700 100 L 700 400"
                        fill="none"
                        stroke="url(#line-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 100 250 L 700 250"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </svg>

                {/* Glowing Nodes at corners */}
                <motion.div className="absolute top-[100px] left-[100px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0 }} />
                <motion.div className="absolute top-[100px] right-[100px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />

                {/* Central Reveal */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <div className="text-center">
                        <h2 className="text-6xl font-thin text-white tracking-[0.5em] uppercase">Design</h2>
                        <p className="text-gray-500 mt-4 text-sm tracking-[0.2em]">INTELLIGENT STRUCTURES</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

// 3. The Cinematic / Mask Reveal
// Using clip-path to create a high-end "shutter" effect opening over the brand
export function CinematicReveal({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-full max-w-4xl px-8">
                {/* Mask Overlay */}
                <motion.div
                    className="absolute inset-0 bg-white z-10 mix-blend-difference"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} // Custom bezier
                />

                <div className="relative z-0 py-20 border-y border-white/20">
                    <motion.h1
                        className="text-8xl md:text-9xl font-black text-white text-center tracking-tighter"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        ELEVATE
                    </motion.h1>
                </div>

                <motion.div
                    className="flex justify-between mt-8 text-neutral-500 font-mono text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span>EST. 2024</span>
                    <span>LOS ANGELES, CA</span>
                    <span>STRUCTURAL ENG.</span>
                </motion.div>
            </div>
        </motion.div>
    )
}

'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroProps {
    onComplete?: () => void
}

// SHARED: Technical Background Grid (CAD Style)
const CADBackground = () => (
    <div className="absolute inset-0 bg-[#0f1115] overflow-hidden">
        {/* Major Grid 100px */}
        <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'linear-gradient(#2c3344 1px, transparent 1px), linear-gradient(90deg, #2c3344 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        {/* Minor Grid 20px */}
        <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(#2c3344 0.5px, transparent 0.5px), linear-gradient(90deg, #2c3344 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    </div>
)

// 1. FEA STRESS ANALYSIS
// Visualizes a beam undergoing load, transitioning from wireframe to Heatmap
export function FEAIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center font-mono text-xs"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <CADBackground />

            <div className="relative w-[600px] h-[300px] border border-slate-700 bg-slate-900/50 backdrop-blur-md">
                {/* Header */}
                <div className="absolute top-0 left-0 w-full h-6 bg-slate-800 border-b border-slate-700 flex items-center px-2 text-slate-400 gap-4">
                    <span>Midas Gen 2024</span>
                    <span>&gt; ANALYSIS: NON-LINEAR</span>
                    <span className="text-green-500">CONVERGED</span>
                </div>

                {/* The Bean/Structure */}
                <div className="absolute inset-x-10 top-20 bottom-10">
                    {/* Wireframe Layer */}
                    <svg className="w-full h-full overflow-visible">
                        {/* Mesh Grid */}
                        <defs>
                            <pattern id="mesh" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#475569" strokeWidth="0.5" />
                            </pattern>
                            <linearGradient id="stress-gradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue - Low */}
                                <stop offset="50%" stopColor="#22c55e" /> {/* Green - Med */}
                                <stop offset="80%" stopColor="#eab308" /> {/* Yellow - High */}
                                <stop offset="100%" stopColor="#ef4444" /> {/* Red - Crit */}
                            </linearGradient>
                        </defs>

                        {/* Deflected Shape Animation */}
                        <motion.path
                            d="M 0 100 Q 260 100 520 100" // Initial Flat
                            animate={{ d: "M 0 100 Q 260 180 520 100" }} // Deflected
                            fill="none"
                            stroke="url(#stress-gradient)"
                            strokeWidth="40"
                            strokeLinecap="butt"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Mesh Overlay sticking to shape (Approximated for 2D) */}
                        <motion.path
                            d="M 0 80 Q 260 80 520 80 M 0 120 Q 260 200 520 120" // Top/Bottom bounds
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeOpacity={0.5}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />

                        {/* Load Arrows */}
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.path
                                key={i}
                                d={`M ${i * 85} 20 L ${i * 85} 60`}
                                stroke="#f43f5e"
                                strokeWidth="2"
                                markerEnd="url(#arrow)"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2 + i * 0.2 }}
                            />
                        ))}
                    </svg>

                    {/* Data Overlay */}
                    <motion.div
                        className="absolute bottom-4 right-4 bg-black/80 p-2 border border-slate-600 text-right"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        <div className="text-slate-400">MAX STRESS (Von Mises)</div>
                        <div className="text-2xl text-red-500 font-bold">345 MPa</div>
                        <div className="text-slate-500 text-[10px]">LC1: 1.2D + 1.6L</div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

// 2. BOLTED MOMENT CONNECTION
// Exploded view of a steel connection
export function ConnectionIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center font-mono text-xs"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <CADBackground />

            <div className="relative w-[400px] h-[400px]">
                {/* Column (W14x90) */}
                <motion.div
                    className="absolute left-10 top-0 bottom-0 w-20 border-x-2 border-slate-500 bg-slate-800/50"
                    initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }}
                >
                    <div className="absolute top-1/2 -left-10 text-slate-500 -rotate-90">Col W14x90</div>
                </motion.div>

                {/* Beam (W18x50) - Sliding In */}
                <motion.div
                    className="absolute top-1/2 right-0 w-60 h-16 border-y-2 border-slate-500 bg-slate-800/50 -mt-8"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}
                >
                    <div className="absolute right-2 top-2 text-slate-500">Beam W18x50</div>
                </motion.div>

                {/* End Plate */}
                <motion.div
                    className="absolute top-1/2 left-[110px] w-4 h-24 bg-yellow-600/20 border border-yellow-600 -mt-12"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }}
                />

                {/* Bolts - Pop in */}
                {[0, 1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        className="absolute left-[115px] w-2 h-2 rounded-full bg-white border border-slate-900"
                        style={{ top: 155 + i * 30 }}
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 + i * 0.1, type: 'spring' }}
                    />
                ))}

                {/* Welds - Zigzag path animation */}
                <svg className="absolute inset-0 overflow-visible">
                    <motion.path
                        d="M 110 188 L 110 212" // Weld line
                        stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3, duration: 0.5 }}
                    />
                </svg>

                {/* Callout */}
                <motion.div
                    className="absolute top-20 right-10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.5 }}
                >
                    <div className="bg-white text-black px-2 py-1 font-bold">DETAIL 3/S-201</div>
                    <div className="h-[1px] w-full bg-white mt-1" />
                    <div className="text-slate-400 mt-1">Full Pen Weld (CJP)</div>
                </motion.div>
            </div>
        </motion.div>
    )
}

// 3. SEISMIC BASE ISOLATION
// Visualizes a building moving independently of the ground
export function SeismicIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center font-mono text-xs"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <CADBackground />

            <div className="relative w-80 h-96 flex flex-col justify-end items-center">

                {/* Building Block */}
                <motion.div
                    className="w-40 h-60 border-2 border-blue-400 bg-blue-900/20 grid grid-cols-4 grid-rows-6 relative z-10"
                    // Building barely moves relative to screen center (isolated)
                    animate={{ x: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-bold tracking-widest text-lg">
                        ISOLATED
                    </div>
                </motion.div>

                {/* Isolator Bearings */}
                <div className="flex justify-between w-40 h-8 relative z-10">
                    <motion.div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-500" />
                    <motion.div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-500" />
                </div>

                {/* Ground / Foundation - Moves violenty */}
                <motion.div
                    className="w-80 h-10 bg-slate-800 border-t-4 border-red-500 relative"
                    animate={{ x: [-10, 20, -15, 10, -5, 0] }} // Violent shaking
                    transition={{ repeat: Infinity, repeatDelay: 1, duration: 1.5 }}
                >
                    <div className="absolute top-2 w-full text-center text-red-500 font-bold">PGA: 0.85g</div>
                </motion.div>

                {/* Frequency Graph overlay */}
                <svg className="absolute top-10 right-[-100px] w-20 h-20 opacity-50">
                    <motion.path
                        d="M 0 10 Q 5 0 10 20 T 20 20"
                        stroke="#ef4444" fill="none"
                        animate={{ d: "M 0 10 Q 5 20 10 0 T 20 10" }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    />
                </svg>
            </div>
        </motion.div>
    )
}

// 4. REBAR CAGE DETAILING
// Cylinder reinforcement assembly
export function RebarIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center font-mono text-xs"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <CADBackground />

            <div className="relative w-64 h-96 border-x border-slate-800">
                {/* Vertical Bars */}
                {[1, 2, 3, 4].map(i => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 w-2 bg-slate-400 rounded-t-full"
                        style={{ height: '90%', left: `${i * 20 + 10}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                    />
                ))}

                {/* Spiral Ties Animation */}
                <svg className="absolute inset-0 w-full h-full overflow-visible z-10">
                    <motion.path
                        d="M 20 350 Q 80 360 140 350 T 20 330 T 140 310 T 20 290 T 140 270 T 20 250 T 140 230"
                        fill="none"
                        stroke="#fbbf24" // Amber
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                </svg>

                {/* Concrete Pour Overlay */}
                <motion.div
                    className="absolute inset-0 bg-slate-200/10 mix-blend-overlay"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ originY: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                />

                <motion.div
                    className="absolute bottom-10 -right-20 text-yellow-500 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    #4 TIES @ 4" O.C.
                </motion.div>
            </div>
        </motion.div>
    )
}

// 5. WIND TUNNEL / CFD
// Streamlines over a building section
export function CFDIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center font-mono text-xs"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <CADBackground />

            <div className="relative w-[600px] h-400px flex items-center">
                {/* The Building Shape */}
                <div className="w-40 h-60 bg-slate-800 border border-slate-500 relative z-10 mx-auto transform -skew-x-6">
                    <div className="absolute inset-0 grid grid-rows-6 opacity-30 border-t border-slate-600" />
                </div>

                {/* Streamlines */}
                <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <motion.path
                            key={i}
                            d={`M 0 ${100 + i * 40} L 200 ${100 + i * 40} Q 250 ${80 + i * 40} 300 ${50 + i * 30} T 600 ${20 + i * 20}`}
                            fill="none"
                            stroke={i % 2 === 0 ? "#60a5fa" : "#34d399"}
                            strokeWidth="2"
                            strokeDasharray="10 20"
                            initial={{ strokeDashoffset: 1000 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </svg>

                {/* Pressure Zone Highlight */}
                <motion.div
                    className="absolute left-[220px] top-[150px] w-40 h-40 bg-red-500/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="absolute top-10 right-10 text-right">
                    <h1 className="text-2xl font-black text-white">CFD</h1>
                    <div className="text-blue-400">WIND LOAD: 45 PSF</div>
                    <div className="text-slate-500">EXPOSURE C</div>
                </div>
            </div>
        </motion.div>
    )
}

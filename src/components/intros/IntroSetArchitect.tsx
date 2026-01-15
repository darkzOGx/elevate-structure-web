'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroProps {
    onComplete?: () => void
}

// Common Background Component for consistency
const ArchitectBackground = () => (
    <>
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        {/* Fine engineering grid */}
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: 'linear-gradient(#404040 0.5px, transparent 0.5px), linear-gradient(90deg, #404040 0.5px, transparent 0.5px)',
                backgroundSize: '20px 20px'
            }}
        />
        {/* Major Grid Lines */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }}
        />
    </>
)

// 1. The Draftsman: Rapid Sketching
export function DraftsmanIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <ArchitectBackground />

            <div className="relative w-[600px] h-[400px]">
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <filter id="pencil-glow">
                            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="white" floodOpacity="0.5" />
                        </filter>
                    </defs>

                    {/* Sketch Lines - Rapid, overlapping */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.path
                            key={i}
                            d={`M ${50 + i * 10} 350 L ${50 + i * 10} ${50 + i * 5} L ${550 - i * 5} ${50 + i * 5} L ${550 - i * 5} 350`}
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeOpacity={0.7}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.2, ease: "linear" }}
                        />
                    ))}

                    {/* Final Define Line */}
                    <motion.path
                        d="M 50 350 L 50 50 L 550 50 L 550 350 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        filter="url(#pencil-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                <motion.div
                    className="absolute bottom-10 right-10 font-mono text-xs text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <span className="opacity-50">STATUS:</span> DRAFTING
                    <br />
                    <span className="opacity-50">REV:</span> 0.1A
                </motion.div>
            </div>
        </motion.div>
    )
}

// 2. The Engineer: Force Vectors
export function EngineerIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <ArchitectBackground />

            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {/* Central Node */}
                <motion.div
                    className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_20px_white]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Vector Arrows radiating out */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-left"
                        style={{ width: '200px', rotate: `${deg}deg`, top: '250px', left: '250px' }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                    >
                        <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-blue-400 rotate-45" />
                    </motion.div>
                ))}

                {/* Load Calculations Text */}
                <motion.div
                    className="absolute top-20 right-20 text-blue-300 font-mono text-[10px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    F_x = 0
                    <br />
                    F_y = 240kN
                    <br />
                    M_max = 10kNm
                </motion.div>

                <motion.h1
                    className="absolute bottom-20 text-white font-bold tracking-[0.3em] text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                >
                    CALCULATED
                </motion.h1>
            </div>
        </motion.div>
    )
}

// 3. The Fabricator: Sparks & Connection
export function FabricatorIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="absolute inset-0 bg-[#050505]" />
            <ArchitectBackground />

            <div className="relative w-[300px] h-[400px] border-l border-r border-white/20">
                {/* Horizontal Beams sliding in */}
                <motion.div
                    className="absolute top-1/2 left-[-50px] w-[400px] h-20 border-y border-white/40 bg-white/5"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                />

                {/* Welding Flash Effect */}
                <motion.div
                    className="absolute top-1/2 left-0 -mt-10 -ml-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 0.8, 0] }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                />
                <motion.div
                    className="absolute top-1/2 right-0 -mt-10 -mr-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 0.8, 0] }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                />

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <div className="bg-black/80 px-4 py-2 border border-orange-500/50 text-orange-400 font-mono tracking-widest text-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        PRECISION WELD
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

// 4. The Surveyor: Topography & Context
export function SurveyorIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <ArchitectBackground />

            {/* Topo Lines */}
            <svg className="absolute inset-0 w-full h-full">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.ellipse
                        key={i}
                        cx="50%" cy="50%"
                        rx={200 + i * 40} ry={100 + i * 20}
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeOpacity={0.3}
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, rotate: i * 10 }}
                        animate={{ pathLength: 1, rotate: 0 }}
                        transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                    />
                ))}
            </svg>

            {/* Center Crosshair using HTML for sharpness */}
            <div className="relative">
                <motion.div
                    className="w-[1px] h-[100vh] bg-green-500/50 absolute left-1/2 -translate-x-1/2 top-[-50vh]"
                    initial={{ height: 0 }} animate={{ height: "200vh" }} transition={{ duration: 1 }}
                />
                <motion.div
                    className="h-[1px] w-[100vw] bg-green-500/50 absolute top-1/2 -translate-y-1/2 left-[-50vw]"
                    initial={{ width: 0 }} animate={{ width: "200vw" }} transition={{ duration: 1, delay: 0.5 }}
                />
            </div>

            <motion.div
                className="absolute font-mono text-green-400 bg-black/50 px-2 py-1 border border-green-500/30"
                style={{ top: '52%', left: '52%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                LAT: 34.0522 N
                <br />
                LON: 118.2437 W
            </motion.div>
        </motion.div>
    )
}

// 5. The Visionary: Silhouette & Light
export function VisionaryIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="absolute inset-0 bg-black" />

            {/* The Horizon Line */}
            <motion.div
                className="absolute bottom-1/3 left-0 w-full h-[1px] bg-white/20"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5 }}
            />

            {/* The Structure Silhouette - Using clip path to "rise" */}
            <motion.div
                className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-to-t from-gray-900 to-gray-800 border border-white/10"
                initial={{ height: 0 }}
                animate={{ height: 300 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} // smooth easeOut
            >
                {/* Internal Window Grid */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 opacity-20">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                    ))}
                </div>
            </motion.div>

            {/* Sun/Light pass */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 2, duration: 2 }}
            />

            <motion.h1
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-20 text-6xl font-thin text-white tracking-[0.8em] uppercase mix-blend-overlay opacity-50"
                initial={{ opacity: 0, letterSpacing: "1.2em" }}
                animate={{ opacity: 0.8, letterSpacing: "0.8em" }}
                transition={{ delay: 2.5, duration: 2 }}
            >
                ELEVATE
            </motion.h1>
        </motion.div>
    )
}

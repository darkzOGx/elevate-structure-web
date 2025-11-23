'use client'

import { motion } from "framer-motion"

export function BlueprintBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Technical Grid - "Blueprint Blue" style - Significantly Darker for Visibility */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a40_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a40_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a40_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a40_1px,transparent_1px)] bg-[size:200px_200px]"></div>

            {/* Animated CAD Drawing - Engineering Blue */}
            <svg className="absolute inset-0 h-full w-full opacity-100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" className="opacity-30" />
                    </pattern>
                </defs>

                {/* Structural Column Lines */}
                <motion.path
                    d="M100 50 V 600 M300 50 V 600 M500 50 V 600"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    className="opacity-60"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, ease: "linear" }}
                />

                {/* Floor Plan Outline */}
                <motion.path
                    d="M150 150 H 450 V 450 H 150 Z"
                    fill="none"
                    stroke="#172554"
                    strokeWidth="4"
                    className="opacity-80"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                />

                {/* Diagonal Bracing */}
                <motion.path
                    d="M150 150 L 450 450 M450 150 L 150 450"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="3"
                    className="opacity-70"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 2, delay: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                />

                {/* Arc / Door Swing */}
                <motion.path
                    d="M 450 350 Q 400 350 400 400"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="3"
                    className="opacity-80"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Measurement Markers */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <circle cx="150" cy="150" r="6" fill="#1e3a8a" />
                    <circle cx="450" cy="150" r="6" fill="#1e3a8a" />
                    <circle cx="450" cy="450" r="6" fill="#1e3a8a" />
                    <circle cx="150" cy="450" r="6" fill="#1e3a8a" />
                </motion.g>

                {/* Floating Geometric Elements */}
                <motion.rect
                    x="600"
                    y="100"
                    width="120"
                    height="80"
                    stroke="#1e3a8a"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                />
                 <motion.rect
                    x="620"
                    y="120"
                    width="80"
                    height="40"
                    stroke="#1e3a8a"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-40"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
                />

                {/* Centerline Symbol */}
                <motion.path
                    d="M 300 200 L 300 240 M 300 215 L 300 225"
                    stroke="#0f172a"
                    strokeWidth="3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                />
                <motion.text x="305" y="215" className="text-sm fill-slate-900 font-bold font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>CL</motion.text>

                {/* Force Vectors (Loads) */}
                <motion.path
                    d="M 200 100 V 150 M 200 150 L 195 140 M 200 150 L 205 140"
                    stroke="#dc2626"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 4, repeat: Infinity, repeatDelay: 3 }}
                />
                 <motion.path
                    d="M 400 100 V 150 M 400 150 L 395 140 M 400 150 L 405 140"
                    stroke="#dc2626"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 4.2, repeat: Infinity, repeatDelay: 3 }}
                />

            </svg>
        </div>
    )
}

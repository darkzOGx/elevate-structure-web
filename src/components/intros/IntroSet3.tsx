'use client'

import { motion } from 'framer-motion'
import { Disc, ChevronRight, Zap } from 'lucide-react'

// Common props
interface IntroProps {
    onComplete?: () => void
}

// 11. Cross-section Reveal
export function CrossSectionIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#2c1810] flex items-center justify-center perspective-[1000px] overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                className="w-64 h-96 bg-orange-100 relative shadow-2xl origin-left"
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Layers inside */}
                <div className="absolute inset-y-0 right-0 w-4 bg-red-900/20" />
                <div className="absolute inset-y-0 right-8 w-2 bg-slate-900/10" />
                <div className="absolute top-10 left-10 right-10 bottom-10 border-2 border-dashed border-slate-400" />

                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <h2 className="text-2xl font-serif text-slate-800">INTERIOR DETAIL</h2>
                </div>
            </motion.div>
        </motion.div>
    )
}

// 12. Particle Construction
export function ParticleIntro({ onComplete }: IntroProps) {
    const dots = Array.from({ length: 50 })
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {dots.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500 rounded-full"
                    initial={{
                        x: Math.random() * 1000 - 500,
                        y: Math.random() * 1000 - 500,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: Math.random() * 0.5,
                        type: "spring",
                        damping: 20
                    }}
                />
            ))}

            <motion.div
                className="z-10 text-white font-bold text-5xl tracking-tighter"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                ASSEMBLE
            </motion.div>
        </motion.div>
    )
}

// 13. Cantilever Extension
export function CantileverIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-neutral-100 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Vertical Column */}
            <div className="relative">
                <motion.div
                    className="w-20 h-64 bg-slate-800"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ originY: 1 }}
                />

                {/* Cantilever Beam */}
                <motion.div
                    className="absolute top-0 left-full w-64 h-12 bg-orange-600 shadow-xl"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.4 }}
                    style={{ originX: 0 }}
                />

                <motion.div
                    className="absolute top-16 left-24 w-40 text-sm font-mono text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    MOMENT FORCE <br /> CALCULATED
                </motion.div>
            </div>
        </motion.div>
    )
}

// 14. Seismic Wave Absorption
export function SeismicWaveIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#0f172a] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Ground ripples */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-white/20"
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
            />

            {/* The Building */}
            <motion.div
                className="w-48 h-96 border-4 border-emerald-500 rounded-lg flex flex-col justify-evenly p-2 bg-emerald-900/20"
                animate={{ skewX: [-5, 5, -3, 3, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.3, 0.6, 0.8, 1] }}
                style={{ originY: 1 }}
            >
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-1 bg-emerald-500/50" />
                ))}
            </motion.div>

            <motion.div
                className="absolute top-20 text-emerald-400 font-black text-2xl uppercase tracking-widest border px-4 py-2 border-emerald-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                RESILIENCE
            </motion.div>
        </motion.div>
    )
}

// 15. Connection Detail Zoom
export function ConnectionIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-300 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                className="relative flex items-center justify-center p-20"
                initial={{ scale: 3 }} // Close up
                animate={{ scale: 1 }} // Zoom out
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            >
                {/* Connection Plate */}
                <div className="w-40 h-40 bg-slate-700 relative flex items-center justify-center shadow-xl z-20">
                    {/* Bolts */}
                    <motion.div
                        className="w-6 h-6 rounded-full bg-slate-400 absolute top-4 left-4"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="absolute inset-[2px] border border-slate-500 rounded-full" />
                    </motion.div>
                    <motion.div
                        className="w-6 h-6 rounded-full bg-slate-400 absolute bottom-4 right-4"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute inset-[2px] border border-slate-500 rounded-full" />
                    </motion.div>
                </div>

                {/* Beams connecting */}
                <motion.div className="w-96 h-20 bg-slate-600 absolute z-10" />
                <motion.div className="w-20 h-96 bg-slate-600 absolute z-10" />
            </motion.div>
        </motion.div>
    )
}

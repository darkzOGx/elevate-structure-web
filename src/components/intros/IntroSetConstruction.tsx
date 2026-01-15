'use client'

import { motion } from 'framer-motion'

interface IntroProps {
    onComplete?: () => void
}

// 1. The Blueprint (Stroke Drawing)
export function BlueprintConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#0052cc] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-64 h-64 border-opacity-20 border-white bg-blue-600/50 backdrop-blur-sm grid grid-cols-4 grid-rows-4">
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M 32 224 L 32 32 L 224 32 L 224 224 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 32 96 L 224 96 M 32 160 L 224 160 M 96 32 L 96 224 M 160 32 L 160 224"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                </svg>
                <motion.div
                    className="absolute bottom-4 left-4 text-white font-mono text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    PLAN: APPROVED
                </motion.div>
            </div>
        </motion.div>
    )
}

// 2. The Stack (Blocks rising)
export function StackConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="flex flex-col items-center">
                {[4, 3, 2, 1].map((width, i) => (
                    <motion.div
                        key={i}
                        className="bg-slate-200 mb-1 rounded-sm"
                        style={{ width: `${width * 30}px`, height: '20px' }}
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    />
                ))}
            </div>
        </motion.div>
    )
}

// 3. The Frame (Beams sliding in)
export function FrameConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-neutral-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-64 h-64 border-2 border-neutral-800">
                {/* Columns */}
                <motion.div className="absolute left-10 top-0 bottom-0 w-2 bg-orange-500"
                    initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5 }} />
                <motion.div className="absolute right-10 top-0 bottom-0 w-2 bg-orange-500"
                    initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.1 }} />

                {/* Horizontal Beams */}
                {[1, 2, 3].map((i) => (
                    <motion.div key={i} className="absolute left-0 right-0 h-2 bg-orange-500"
                        style={{ top: `${i * 25}%` }}
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }} />
                ))}
            </div>
        </motion.div>
    )
}

// 4. The Pour (Liquid Fill)
export function PourConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-gray-100 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="w-40 h-80 border-4 border-gray-800 relative bg-white overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gray-800"
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 divide-gray-500 divide-opacity-20 pointer-events-none">
                    <div className="border border-white/20" />
                </div>
            </div>
        </motion.div>
    )
}

// 5. The Scan (Laser Reveal)
export function ScanConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative">
                <motion.div
                    className="text-9xl font-black text-white"
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: 1 }} // trick to allow masking
                >
                    BUILD
                </motion.div>

                {/* Scanner Line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,1)] z-10"
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                />

                {/* Revealed Content Mask */}
                <motion.div
                    className="absolute inset-0 bg-black/90"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%", top: "100%" }} // Moves down clearing the view
                    transition={{ duration: 2, ease: "linear" }}
                />
            </div>
        </motion.div>
    )
}

// 6. The Nodes (Constellation)
export function NodesConstruction({ onComplete }: IntroProps) {
    const points = [
        { x: 0, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 100 }, { x: 100, y: 100 }
    ]
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-indigo-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-[100px] h-[100px]">
                {/* Dots */}
                {points.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-indigo-400 -ml-2 -mt-2"
                        style={{ left: p.x, top: p.y }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}

                {/* Lines */}
                <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 0 0 L 100 100 M 100 0 L 0 100"
                        stroke="#818cf8" strokeWidth="2" fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                </svg>
            </div>
        </motion.div>
    )
}

// 7. The Iso (Isometric Cubes)
export function IsoConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-40 h-80 flex flex-col-reverse items-center justify-center gap-1">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-20 h-20 bg-emerald-500 border-4 border-emerald-700 transform rotate-45 skew-x-12"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                    />
                ))}
                <motion.h1
                    className="absolute text-4xl font-bold text-slate-900 mt-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    STRUCTURE
                </motion.h1>
            </div>
        </motion.div>
    )
}

// 8. The Skeleton (Lines thicken to solid)
export function SkeletonConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#e5e5e5] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="flex gap-4 items-end h-40">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-black"
                        initial={{ width: '2px', height: '0%' }}
                        animate={{ width: ['2px', '2px', '40px'], height: '100%' }}
                        transition={{ duration: 2, times: [0, 0.5, 1] }}
                    />
                ))}
            </div>
        </motion.div>
    )
}

// 9. The Rise (Skyline Equalizer)
export function RiseConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="flex items-end gap-1 h-64">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-8 bg-sky-600 rounded-t-md"
                        initial={{ height: 0 }}
                        animate={{ height: Math.random() * 200 + 50 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                    />
                ))}
            </div>
        </motion.div>
    )
}

// 10. The Horizon (Extrude Up)
export function HorizonConstruction({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-96">
                {/* Horizon Line */}
                <motion.div
                    className="h-1 bg-white mb-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                />

                {/* Buildings Extruding Up */}
                <div className="absolute bottom-1 w-full flex items-end justify-center gap-2">
                    <motion.div className="w-12 bg-white/20 border border-white"
                        initial={{ height: 0 }} animate={{ height: 100 }} transition={{ delay: 1, duration: 1 }} />
                    <motion.div className="w-16 bg-white/40 border border-white"
                        initial={{ height: 0 }} animate={{ height: 180 }} transition={{ delay: 1.2, duration: 1 }} />
                    <motion.div className="w-10 bg-white/20 border border-white"
                        initial={{ height: 0 }} animate={{ height: 80 }} transition={{ delay: 1.4, duration: 1 }} />
                </div>
            </div>
        </motion.div>
    )
}

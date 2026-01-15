'use client'

import { motion } from 'framer-motion'

interface IntroProps {
    onComplete?: () => void
}

// 6. Concrete Pour
export function ConcreteIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-neutral-200 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-80 h-80 border-4 border-neutral-400 overflow-hidden bg-white">
                {/* The Concrete Liquid */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-neutral-400 w-full"
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
                        backgroundSize: '100px 100px'
                    }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        className="text-6xl font-black text-white mix-blend-overlay"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        SOLID
                    </motion.h1>
                </div>
            </div>
        </motion.div>
    )
}

// 7. Structural Grid
export function StructuralGridIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center perspective-[1000px] overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                className="grid grid-cols-6 grid-rows-6 gap-4 w-[150vw] h-[150vh] origin-center"
                initial={{ rotateX: 60, scale: 2, opacity: 0 }}
                animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-slate-100 border border-slate-300 relative"
                        initial={{ z: 50 }}
                        animate={{ z: 0 }}
                        transition={{ delay: i * 0.02 + 0.5, type: "spring" }}
                    >
                        {/* Column marker */}
                        <div className="absolute inset-x-[40%] inset-y-[40%] bg-slate-900 rounded-sm" />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <div className="border-4 border-slate-900 p-6 bg-white">
                    <h1 className="text-4xl font-bold tracking-tighter">GRID LOCKED</h1>
                </div>
            </motion.div>
        </motion.div>
    )
}

// 8. Foundation to Skyline
export function SkylineIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#e0f2fe] flex flex-col justify-end items-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            {/* Ground Level Indicator */}
            <div className="absolute top-[80%] left-0 w-full border-t-2 border-slate-400 border-dashed z-20">
                <span className="bg-[#e0f2fe] px-2 text-xs text-slate-500 absolute -top-3 left-10">Grade Level</span>
            </div>

            <motion.div
                className="flex flex-col items-center w-64 bg-slate-800 shadow-2xl relative z-10"
                initial={{ y: "100%" }} // Start below screen (underground)
                animate={{ y: "20%" }}  // Rise up
                transition={{ duration: 2.5, ease: "easeInOut" }}
            >
                {/* Foundation */}
                <div className="h-32 w-80 bg-slate-900 flex items-center justify-center border-t border-slate-600">
                    <span className="text-slate-600 font-mono text-xs">FOUNDATION</span>
                </div>
                {/* Floors */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-16 w-full border-b border-slate-600 flex gap-4 p-4">
                        <div className="w-8 h-full bg-sky-200/20" />
                        <div className="w-8 h-full bg-sky-200/20" />
                        <div className="w-8 h-full bg-sky-200/20" />
                    </div>
                ))}

                {/* Logo Reveal at Top */}
                <motion.div
                    className="absolute -top-20 text-4xl font-black text-slate-800"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                >
                    AAA
                </motion.div>
            </motion.div>

            {/* Clouds */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-12 bg-white rounded-full opacity-60 blur-md"
                initial={{ x: 0 }}
                animate={{ x: -100 }}
                transition={{ duration: 4, ease: "linear" }}
            />
        </motion.div>
    )
}

// 9. Golden Ratio
export function GoldenIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#fffbf0] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <svg width="500" height="500" viewBox="0 0 500 500" className="overflow-visible">
                <motion.path
                    d="M 250 250 L 350 250 L 350 350 L 200 350 L 200 150 L 450 150 L 450 450 L 50 450 L 50 50"
                    fill="none"
                    stroke="#d4af37" // Gold
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    className="text-6xl font-serif fill-slate-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    PROPORTION
                </motion.text>
            </svg>
        </motion.div>
    )
}

// 10. Tension Cables
export function TensionIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative w-full h-96">
                {/* Main Cable */}
                <motion.div
                    className="absolute top-1/2 left-0 right-0 h-1 bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Vertical Cables popping in with tension */}
                <div className="absolute inset-0 flex justify-center gap-8 items-center">
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-0.5 bg-slate-400 h-64 origin-top"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                delay: 0.5 + (i * 0.1),
                                type: "spring",
                                stiffness: 300,
                                damping: 10
                            }}
                        />
                    ))}
                </div>

                {/* Deck rising to meet cables */}
                <motion.div
                    className="absolute bottom-16 left-20 right-20 h-8 bg-[#f59e0b] rounded shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.5, type: "spring", damping: 15 }}
                />

                <motion.div
                    className="absolute top-20 w-full text-center text-white tracking-widest font-thin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    SUSPENDED PERFECTION
                </motion.div>
            </div>
        </motion.div>
    )
}

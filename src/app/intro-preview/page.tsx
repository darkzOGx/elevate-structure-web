'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    FEAIntro,
    ConnectionIntro,
    SeismicIntro,
    RebarIntro,
    CFDIntro
} from '@/components/intros/IntroSetStructural'
import { RefreshCcw, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function IntroPreviewPage() {
    const [activeIntro, setActiveIntro] = useState<number | null>(null)
    const [key, setKey] = useState(0)

    const handleReplay = () => {
        setKey(prev => prev + 1)
    }

    const intros = [
        { id: 1, name: 'FEA Stress Analysis', Component: FEAIntro },
        { id: 2, name: 'Bolted Connection', Component: ConnectionIntro },
        { id: 3, name: 'Seismic Isolation', Component: SeismicIntro },
        { id: 4, name: 'Rebar Cage', Component: RebarIntro },
        { id: 5, name: 'CFD Wind Load', Component: CFDIntro },
    ]

    const ActiveComponent = activeIntro ? intros.find(i => i.id === activeIntro)?.Component : null

    return (
        <div className="min-h-screen bg-[#0f1115] text-slate-200 p-8 font-mono">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between border-b border-slate-800 pb-8">
                <div>
                    <Link href="/" className="text-slate-500 hover:text-white flex items-center gap-2 mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Engineering Simulation Lab</h1>
                    <p className="text-slate-500 mt-2 text-sm">TECHNICAL VISUALIZATIONS // STRUCTURAL SYSTEMS</p>
                </div>

                {activeIntro && (
                    <Button onClick={handleReplay} variant="outline" size="sm" className="gap-2 border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white">
                        <RefreshCcw className="w-4 h-4" /> RESTART SIMULATION
                    </Button>
                )}
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {intros.map((intro) => (
                    <button
                        key={intro.id}
                        onClick={() => {
                            setActiveIntro(intro.id)
                            setKey(0)
                        }}
                        className={`active:scale-95 transition-all duration-100 p-6 border text-left group relative overflow-hidden ${activeIntro === intro.id
                                ? 'bg-slate-800 border-blue-500'
                                : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'
                            }`}
                    >
                        {/* Tech Deco */}
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <div className="w-2 h-2 bg-current rounded-full" />
                        </div>

                        <div className="text-[10px] text-blue-500 mb-2 tracking-widest">SYS-0{intro.id}</div>
                        <div className="font-bold text-xl text-white mb-2">{intro.name}</div>
                        <div className="h-1 w-10 bg-slate-700 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
                    </button>
                ))}
            </div>

            {/* Preview Area (Full Screen Overlay) */}
            {ActiveComponent && (
                <div key={key} className="relative z-50">
                    <ActiveComponent onComplete={() => {
                        setActiveIntro(null)
                    }} />

                    {/* Close/Reset Button Overlay */}
                    <div className="fixed top-6 right-6 z-[60]">
                        <Button
                            variant="default"
                            className="bg-red-600/90 text-white hover:bg-red-700 font-bold border border-red-500/50"
                            onClick={() => setActiveIntro(null)}
                        >
                            ABORT [X]
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

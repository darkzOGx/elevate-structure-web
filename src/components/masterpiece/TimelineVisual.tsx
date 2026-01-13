"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, Clock, Calendar } from "lucide-react"

interface CityDeadline {
    city: string
    ordinance: string
    deadline: string
    status: "Past" | "Approaching" | "Active"
    description: string
}

const DEADLINES: CityDeadline[] = [
    {
        city: "Los Angeles",
        ordinance: "Ordinance 183893",
        deadline: "Map-dependent (Priority I, II, III)",
        status: "Active",
        description: "Orders issued 2016-2017. Compliance tiers: 2 years (submit plans), 3.5 years (permit), 7 years (complete). Most deadlines are approaching or past."
    },
    {
        city: "Santa Monica",
        ordinance: "Ordinance 2537",
        deadline: "2017 - 2026",
        status: "Active",
        description: "Compliance deadlines vary by building type. Most soft-story buildings must retrofit by 2026."
    },
    {
        city: "West Hollywood",
        ordinance: "Ordinance 17-1011",
        deadline: "Varies (Priority 1 vs 2)",
        status: "Approaching",
        description: "Priority 1 (16+ units): strengthening by 2024. Priority 2 (under 16 units): plans were due 2023, completion by 2026."
    },
    {
        city: "Beverly Hills",
        ordinance: "Ordinance 19-O-2793",
        deadline: "2022 - 2026",
        status: "Approaching",
        description: "Soft story wood frame buildings must comply. Completion deadlines range from 2024 to early 2026 depending on zone."
    },
    {
        city: "Pasadena",
        ordinance: "Ordinance 7345",
        deadline: "Retrofit Priority Groups",
        status: "Active",
        description: "Tiered compliance. Tier 1 completion was 2023. Tier 2 & 3 approaching in 2026-2028."
    }
]

export function TimelineVisual() {
    const [selectedCity, setSelectedCity] = useState<CityDeadline>(DEADLINES[0])
    const [timeLeft, setTimeLeft] = useState<string>("")

    useEffect(() => {
        // Simple mock countdown for visual effect focused on end of 2026
        const target = new Date("2026-12-31").getTime()
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const dist = target - now
            const days = Math.floor(dist / (1000 * 60 * 60 * 24))
            setTimeLeft(`${days} days remaining in 2026 cycle`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <Card className="overflow-hidden border-l-4 border-l-orange-500 shadow-lg bg-gradient-to-br from-background to-orange-50/50 dark:from-background dark:to-orange-950/20">
                <CardHeader className="border-b bg-muted/20">
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Clock className="w-6 h-6 text-orange-600" />
                            Warning: Retrofit Compliance Timeline
                        </CardTitle>
                        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 animate-pulse">
                            {timeLeft}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 space-y-2">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Select Jurisdiction</h3>
                            {DEADLINES.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedCity(item)}
                                    className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${selectedCity.city === item.city
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {item.city}
                                    {selectedCity.city === item.city && (
                                        <motion.div layoutId="active-indicator">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="md:col-span-2 bg-background border rounded-xl p-6 relative overflow-hidden">
                            <motion.div
                                key={selectedCity.city}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Badge className={`${selectedCity.status === 'Past' ? 'bg-destructive' :
                                            selectedCity.status === 'Approaching' ? 'bg-orange-500' :
                                                'bg-green-600'
                                        }`}>
                                        Status: {selectedCity.status}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                        <AlertTriangle className="w-3 h-3" />
                                        {selectedCity.ordinance}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold mb-2">{selectedCity.city}</h2>
                                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Deadline: {selectedCity.deadline}
                                </h4>

                                <p className="text-muted-foreground leading-relaxed">
                                    {selectedCity.description}
                                </p>

                                <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-dashed border-orange-200">
                                    <p className="text-sm font-medium text-orange-800 dark:text-orange-400">
                                        Action Required: If you have received an Order to Comply, you typically have 2 years to submit structural plans. Do not delay.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Background decorative element */}
                            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

'use client'

import { Star, Shield, CheckCircle } from 'lucide-react'

export function TrustBadges() {
    return (
        <div className="w-full flex justify-center py-6 relative z-20">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm p-1 shadow-sm">
                <div className="flex items-center px-3 py-1 text-xs md:text-sm font-medium">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary mr-2" />
                    <span className="hidden sm:inline">Licensed Professional Engineers</span>
                    <span className="sm:hidden">Licensed P.E.</span>
                </div>
                <div className="h-4 w-px bg-primary/20" />
                <div className="flex items-center px-3 py-1 text-xs md:text-sm font-medium">
                    <Shield className="h-3.5 w-3.5 text-primary mr-2" />
                    <span className="hidden sm:inline">15+ Years Experience</span>
                    <span className="sm:hidden">15+ Yrs Exp</span>
                </div>
                <div className="h-4 w-px bg-primary/20" />
                <div className="flex items-center px-3 py-1 text-xs md:text-sm font-medium">
                    <CheckCircle className="h-3.5 w-3.5 text-primary mr-2" />
                    <span className="hidden sm:inline">100% Code Compliance</span>
                    <span className="sm:hidden">100% Compliant</span>
                </div>
            </div>
        </div>
    )
}

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    containerClassName?: string
    id?: string
}

export function Section({ children, className, containerClassName, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24 overflow-hidden",
                className
            )}
            {...props}
        >
            <div className={cn("container relative z-10 mx-auto px-4 md:px-6", containerClassName)}>
                {children}
            </div>
        </section>
    )
}

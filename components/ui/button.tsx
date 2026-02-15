"use client";

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {

        const variantStyles = {
            default: "bg-gradient-to-r from-purple-600 to-teal-400 text-white hover:opacity-90 shadow-lg shadow-purple-900/20",
            destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
            outline: "border border-teal-500/30 bg-transparent text-teal-400 hover:bg-teal-500/10 hover:text-teal-300",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizeStyles = {
            default: "h-10 px-8 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        return (
            <motion.button
                className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...(props as any)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

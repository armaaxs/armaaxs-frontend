"use client";

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {

        const variantStyles = {
            default: "bg-gradient-to-r from-[#d86a10] to-[#eaad4d] text-[#170d05] hover:opacity-95 shadow-lg shadow-[#d86a10]/20",
            destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
            outline: "border border-[#e4c89c]/30 bg-transparent text-[#ead9b8] hover:bg-white/5 hover:text-[#f1e0c2]",
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
            <button
                className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

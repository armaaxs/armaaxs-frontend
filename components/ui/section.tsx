"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function Section({ children, className, delay = 0 }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={cn(
                "container mx-auto max-w-5xl px-4 pt-24 pb-48 min-h-[50vh] flex flex-col justify-start",
                className
            )}
        >
            {children}
        </motion.section>
    );
}

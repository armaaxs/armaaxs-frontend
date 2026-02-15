"use client";

import { motion } from "framer-motion";

export default function WorkPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-white pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#22d3ee] italic"
                >
                    Selected Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 mt-2 mb-20"
                >
                    Proof of our obsession with quality
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full"
                >
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-montserrat text-gray-600">Project Thumbnail {item}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="font-montserrat text-2xl font-bold text-white mb-2">Project Name</h3>
                                <p className="font-montserrat text-sm text-gray-300">Next.js • Tailwind • Framer Motion</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}

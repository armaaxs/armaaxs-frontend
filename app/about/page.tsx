"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-white pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#22d3ee] italic"
                >
                    The Agency
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 mt-2 mb-20"
                >
                    Who we are and what we believe
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl text-left"
                >
                    <div className="space-y-6">
                        <h2 className="font-montserrat text-3xl font-bold">Philosophy</h2>
                        <p className="font-montserrat text-gray-300 leading-relaxed">
                            At armaaxs, we believe that software is the modern art form. It's not just about writing code; it's about crafting experiences that feel alive. We operate at the intersection of rigorous engineering and fluid design.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-montserrat text-3xl font-bold">Manifesto</h2>
                        <ul className="space-y-4 font-montserrat text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#22d3ee]"></span>
                                Quality over speed, always.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                Aesthetics are functional.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#22d3ee]"></span>
                                Motion creates emotion.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

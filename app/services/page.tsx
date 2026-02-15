"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-white pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#22d3ee] italic"
                >
                    Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 mt-2 mb-20"
                >
                    We build digital infrastructure that scales with your ambition
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
                >
                    {[
                        { title: "Custom Web Platforms", desc: "Next.js applications optimized for speed and SEO." },
                        { title: "Mobile Applications", desc: "Native-feel experiences for iOS and Android." },
                        { title: "UI/UX Craftsmanship", desc: "Motion-rich interfaces that delight users." },
                        { title: "Technical Strategy", desc: "Architecture consulting for scalable growth." }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-left"
                        >
                            <h3 className="font-montserrat text-2xl font-bold mb-4 text-[#22d3ee]">{service.title}</h3>
                            <p className="font-montserrat text-gray-400">{service.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}

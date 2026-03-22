"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
            <div className="min-h-[100dvh] px-4 pb-10 pt-24 text-[#ead9b8] sm:pt-28 md:pt-32">
                <main className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full font-explora text-[clamp(4.5rem,17vw,13.75rem)] leading-[0.82] text-[#ead9b8] italic"
                >
                    Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-2 w-full max-w-[24ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none"
                >
                    How we can help bring your vision to life
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        { title: "Custom Web Platforms", desc: "High-performance applications built with Next.js, focused on global scalability and speed." },
                        { title: "Mobile Applications", desc: "Native-feel experiences for iOS and Android." },
                        { title: "UI/UX Craftsmanship", desc: "Motion-rich interfaces that delight users." },
                        { title: "Technical Strategy", desc: "Architecture consulting for scalable growth." }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-8 rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 backdrop-blur-sm hover:bg-white/5 transition-colors text-left"
                        >
                            <h3 className="font-montserrat text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[#ead9b8]">{service.title}</h3>
                            <p className="font-montserrat text-xs sm:text-base leading-5 sm:leading-6 text-[#bca585]">{service.desc}</p>
                        </div>
                    ))}
                </motion.div>
                </main>
            </div>
    );
}

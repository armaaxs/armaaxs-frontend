"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-[#ead9b8] pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#ead9b8] italic"
                >
                    Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#bca585] mt-2 mb-20"
                >
                    How we can help bring your vision to life
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-5xl w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        { title: "Custom Web Platforms", desc: "High-performance applications built with Next.js, focused on global scalability and speed." },
                        { title: "Mobile Applications", desc: "Native-feel experiences for iOS and Android." },
                        { title: "UI/UX Craftsmanship", desc: "Motion-rich interfaces that delight users." },
                        { title: "Technical Strategy", desc: "Architecture consulting for scalable growth." }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 backdrop-blur-sm hover:bg-white/5 transition-colors text-left"
                        >
                            <h3 className="font-montserrat text-2xl font-bold mb-4 text-[#ead9b8]">{service.title}</h3>
                            <p className="font-montserrat text-[#bca585]">{service.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}

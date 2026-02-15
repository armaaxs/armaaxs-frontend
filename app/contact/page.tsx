"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-white pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#22d3ee] italic"
                >
                    Let's Build
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 mt-2 mb-16"
                >
                    Ready to start your next project? Tell us about it.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full max-w-lg space-y-6"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-gray-400">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-gray-400">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-400">Project Type</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors">
                            <option className="bg-neutral-900">Custom Web Platform</option>
                            <option className="bg-neutral-900">Mobile Application</option>
                            <option className="bg-neutral-900">UI/UX Design</option>
                            <option className="bg-neutral-900">Technical Strategy</option>
                        </select>
                    </div>

                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-400">Message</label>
                        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-[#22d3ee] transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
                    </div>

                    <Button className="w-full h-12 text-lg">
                        Send Inquiry
                    </Button>
                </motion.form>
            </main>
        </div>
    );
}

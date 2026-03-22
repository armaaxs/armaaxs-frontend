"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] px-4 pb-10 pt-24 text-[#ead9b8] sm:pt-28 md:pt-32">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full font-explora text-[clamp(4.5rem,17vw,13.75rem)] leading-[0.82] text-[#ead9b8] italic"
          >
            The Agency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-2 w-full max-w-[24ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none"
          >
            Who we are and what we believe
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-8 grid w-full max-w-6xl gap-4 md:grid-cols-2 md:gap-8"
          >
            <div className="p-4 sm:p-8 rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 backdrop-blur-sm text-left">
              <h2 className="font-montserrat text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#ead9b8]">
                About Us
              </h2>
              <p className="font-montserrat text-sm sm:text-base text-[#bca585] leading-6 sm:leading-relaxed">
                At armaaxs, we believe that software is the modern art form.
                It&apos;s not just about writing code; it&apos;s about crafting
                experiences that feel alive. We operate at the intersection of
                rigorous engineering and fluid design.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 p-4 sm:p-8 rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 backdrop-blur-sm text-left">
              <h2 className="font-montserrat text-xl sm:text-3xl font-bold text-[#ead9b8]">
                Manifesto
              </h2>
              <ul className="space-y-3 sm:space-y-4 font-montserrat text-sm sm:text-base text-[#bca585]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d86a10]"></span>
                  Quality over speed, always.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#e4c89c]"></span>
                  Aesthetics are functional.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d86a10]"></span>
                  Motion creates emotion.
                </li>
              </ul>
            </div>
          </motion.div>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-white pb-[30px]">
      <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-explora text-[165px] sm:text-[195px] md:text-[240px] lg:text-[300px] leading-[0.7] text-[#22d3ee] italic m-0 -mt-2 sm:-mt-4"
        >
          armaaxs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 -mt-1 sm:-mt-4 md:-mt-6 lg:-mt-8"
        >
          Creating Software, Crafting Experiences
        </motion.p>
      </main>
    </div>
  );
}

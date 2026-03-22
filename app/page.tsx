"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-[#ead9b8] pb-[30px]">
      <main className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 text-center pt-24 sm:pt-28 lg:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-explora text-[120px] sm:text-[160px] md:text-[210px] lg:text-[260px] leading-none text-[#ead9b8] italic m-0 max-w-full"
        >
          armaaxs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#bca585]"
        >
          Creating Software, Crafting Experiences
        </motion.p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/mimesis"
            className="inline-flex items-center justify-center rounded-full bg-[#d86a10] px-6 py-3 text-sm font-semibold text-[#170d05] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore Mimesis
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-[#e4c89c]/18 bg-white/5 px-6 py-3 text-sm font-semibold text-[#ead9b8] transition-colors duration-200 hover:bg-white/10"
          >
            View Work
          </Link>
        </div>
      </main>
    </div>
  );
}

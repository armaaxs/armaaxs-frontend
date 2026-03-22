"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100dvh] overflow-hidden px-4 text-[#ead9b8]">
      <main className="mx-auto flex h-full w-full max-w-7xl flex-col items-center text-center pt-24 sm:pt-28 md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.999, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-[24vh] w-full font-explora italic leading-[0.86] text-[#ead9b8] text-[clamp(5rem,22vw,16.25rem)]"
        >
          armaaxs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.999, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-3 w-full max-w-[22ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none"
        >
          Creating Software, Crafting Experiences
        </motion.p>
        <div className="mt-8 flex w-full max-w-[19rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/mimesis"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d86a10] px-6 py-3 text-base font-semibold text-[#170d05] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore Mimesis
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#e4c89c]/18 bg-white/5 px-6 py-3 text-base font-semibold text-[#ead9b8] transition-colors duration-200 hover:bg-white/10"
          >
            View Work
          </Link>
        </div>
      </main>
    </div>
  );
}

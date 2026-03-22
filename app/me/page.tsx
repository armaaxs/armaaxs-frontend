"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    value: "@armaaxs",
    href: "https://instagram.com/armaaxs",
    icon: Instagram,
  },
  {
    label: "X",
    value: "@armaaxs",
    href: "https://x.com/armaaxs",
    icon: XLogo,
  },
  {
    label: "LinkedIn",
    value: "@armaaxs",
    href: "https://linkedin.com/in/armaaxs",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@armaaxs",
    href: "https://github.com/armaaxs",
    icon: Github,
  },
  {
    label: "Email",
    value: "armaan@armaaxs.com",
    href: "mailto:armaan@armaaxs.com",
    icon: Mail,
  },
] as const;

function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
    </svg>
  );
}

export default function MePage() {
  return (
    <div className="min-h-[100dvh] px-4 pb-12 pt-24 text-[#ead9b8] sm:px-6 sm:pt-28 md:pt-32">
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.section
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full gap-4"
        >
          {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-[26px] border border-[#e4c89c]/12 bg-[#07110a]/84 px-5 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md transition-colors duration-300 hover:border-[#d86a10]/28 hover:bg-[#0b1710]/90 sm:px-6 sm:py-6"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4c89c]/12 bg-white/5 text-[#d86a10]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm uppercase tracking-[0.22em] text-[#9d8765]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-lg text-[#ead9b8]">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#bca585] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
        </motion.section>
      </main>
    </div>
  );
}

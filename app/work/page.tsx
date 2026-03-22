"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "./projects";

export default function WorkPage() {
    return (
            <div className="min-h-[100dvh] px-4 pb-10 pt-24 text-white sm:pt-28 md:pt-32">
                <main className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full font-explora text-[clamp(4.5rem,18vw,13.75rem)] leading-[0.82] text-[#ead9b8] italic"
                >
                    Selected Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-2 w-full max-w-[24ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none"
                >
                    Proof of our obsession with quality
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8"
                >
                    <Link
                        href="/mimesis"
                        className="group relative overflow-hidden rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/82 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                                src="/mimesis/explore.png"
                                alt="Mimesis owl artwork and app preview"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#07110a] via-[#07110a]/45 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#d86a10]">
                                Featured launch
                            </p>
                            <h3 className="mt-3 font-montserrat text-2xl font-bold text-[#ead9b8]">
                                Mimesis
                            </h3>
                            <p className="mt-2 font-montserrat text-sm text-[#bca585]">
                                Read and listen in one beautiful place.
                            </p>
                        </div>
                    </Link>

                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group flex min-h-[320px] flex-col justify-between rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/82 p-8 text-left shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-[#0b1710]/88"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-[#9d8765]">
                                    Selected project
                                </p>
                                <h3 className="mt-4 font-montserrat text-2xl font-bold text-[#ead9b8]">
                                    {project.name}
                                </h3>
                                <p className="mt-3 font-montserrat text-sm text-[#ad9a77]">
                                    {project.stack}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="font-montserrat text-base leading-7 text-[#bca585]">
                                    {project.description}
                                </p>
                                <p className="font-montserrat text-sm font-medium text-[#d86a10] transition-transform duration-300 group-hover:translate-x-1">
                                    View case study
                                </p>
                            </div>
                        </Link>
                    ))}
                </motion.div>
                </main>
            </div>
    );
}

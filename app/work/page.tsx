"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "./projects";

export default function WorkPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between text-[#ead9b8] pb-[30px]">
            <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-explora text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] leading-[0.8] text-[#ead9b8] italic"
                >
                    Selected Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#bca585] mt-2 mb-20"
                >
                    A glimpse into our portfolio
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-5xl w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => {
                        const href = project.previewHref ?? `/work/${project.slug}`;
                        const featured = Boolean(project.previewImage);

                        return (
                            <Link
                                key={project.slug}
                                href={href}
                                className="group relative overflow-hidden rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 transition-transform duration-300 hover:-translate-y-1"
                            >
                                {featured ? (
                                    <div className="relative aspect-[4/5]">
                                        <Image
                                            src={project.previewImage!}
                                            alt={project.name}
                                            fill
                                            priority
                                            className="object-cover"
                                            sizes="(max-width: 768px) 92vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,8,0.08),rgba(3,16,8,0.55)_58%,rgba(3,16,8,0.88))]" />
                                        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                                            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#d86a10]">
                                                Mimesis
                                            </p>
                                            <h3 className="mt-2 font-explora text-4xl leading-[0.9] text-[#ead9b8]">
                                                Explore
                                            </h3>
                                            <p className="mt-2 max-w-[18ch] font-montserrat text-sm leading-6 text-[#e4c89c]">
                                                Open the launch page and see the full closed-beta experience.
                                            </p>
                                            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d86a10] px-4 py-2 text-sm font-semibold text-[#170d05]">
                                                View Mimesis
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex h-full min-h-[19rem] flex-col justify-between p-6 text-left">
                                        <div>
                                            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#9d8765]">
                                                Project Overview
                                            </p>
                                            <h3 className="mt-3 font-montserrat text-2xl font-bold text-[#ead9b8]">
                                                {project.name}
                                            </h3>
                                            <p className="mt-2 font-montserrat text-sm uppercase tracking-[0.22em] text-[#b49d7b]">
                                                {project.stack}
                                            </p>
                                        </div>
                                        <p className="font-montserrat text-sm leading-6 text-[#bca585]">
                                            {project.description}
                                        </p>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </motion.div>
            </main>
        </div>
    );
}

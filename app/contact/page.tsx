"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        projectType: "Custom Web Platform",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setResponseMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const payload = (await response.json().catch(() => null)) as
                | { ok?: boolean; message?: string; error?: string }
                | null;

            if (!response.ok || !payload?.ok) {
                setStatus("error");
                setResponseMessage(
                    payload?.error ?? "Something went wrong. Please try again."
                );
                return;
            }

            setStatus("success");
            setResponseMessage(
                payload.message ?? "Your inquiry is in. We'll get back to you soon."
            );
            setForm({
                name: "",
                email: "",
                projectType: "Custom Web Platform",
                message: "",
            });
        } catch {
            setStatus("error");
            setResponseMessage("Something went wrong. Please try again.");
        }
    }

    return (
            <div className="min-h-[100dvh] px-4 pb-10 pt-24 text-[#ead9b8] sm:pt-28 md:pt-32">
                <main className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full font-explora text-[clamp(4.5rem,17vw,13.75rem)] leading-[0.82] text-[#ead9b8] italic"
                >
                    Let&apos;s Build
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-2 w-full max-w-[24ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none"
                >
                    Ready to start your next project? Tell us about it.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    onSubmit={handleSubmit}
                    className="mt-8 w-full max-w-3xl space-y-4 sm:space-y-6"
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-[#ad9a77]">Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(event) =>
                                    setForm((current) => ({ ...current, name: event.target.value }))
                                }
                                className="w-full bg-[#07110a]/70 border border-[#e4c89c]/12 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-[#ead9b8] focus:outline-none focus:border-[#d86a10] transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-[#ad9a77]">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(event) =>
                                    setForm((current) => ({ ...current, email: event.target.value }))
                                }
                                className="w-full bg-[#07110a]/70 border border-[#e4c89c]/12 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-[#ead9b8] focus:outline-none focus:border-[#d86a10] transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-[#ad9a77]">Project Type</label>
                        <select
                            value={form.projectType}
                            onChange={(event) =>
                                setForm((current) => ({
                                    ...current,
                                    projectType: event.target.value,
                                }))
                            }
                            className="w-full bg-[#07110a]/70 border border-[#e4c89c]/12 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-[#ead9b8] focus:outline-none focus:border-[#d86a10] transition-colors"
                        >
                            <option className="bg-[#07110a]">Custom Web Platform</option>
                            <option className="bg-[#07110a]">Mobile Application</option>
                            <option className="bg-[#07110a]">UI/UX Design</option>
                            <option className="bg-[#07110a]">Technical Strategy</option>
                        </select>
                    </div>

                    <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-[#ad9a77]">Message</label>
                        <textarea
                            value={form.message}
                            onChange={(event) =>
                                setForm((current) => ({
                                    ...current,
                                    message: event.target.value,
                                }))
                            }
                            className="w-full bg-[#07110a]/70 border border-[#e4c89c]/12 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base text-[#ead9b8] h-24 sm:h-32 focus:outline-none focus:border-[#d86a10] transition-colors resize-none"
                            placeholder="Tell us about your vision..."
                        ></textarea>
                    </div>

                    <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full h-11 sm:h-12 text-base sm:text-lg disabled:opacity-70"
                    >
                        {status === "submitting" ? "Sending..." : "Send Inquiry"}
                    </Button>

                    <div
                        aria-live="polite"
                        className={cn(
                            "min-h-6 text-left text-sm",
                            status === "success" ? "text-[#9ed18b]" : "text-[#c58f72]"
                        )}
                    >
                        {responseMessage || "We will only use your details to reply about your project inquiry."}
                    </div>
                </motion.form>
                </main>
            </div>
    );
}

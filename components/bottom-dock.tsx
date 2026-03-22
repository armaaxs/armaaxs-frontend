"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BottomDock() {
    const pathname = usePathname();

    const items = [
        { label: "Home", href: "/", active: pathname === "/" },
        { label: "Mimesis", href: "/mimesis", active: pathname === "/mimesis", featured: true },
        { label: "Services", href: "/services", active: pathname === "/services" },
        { label: "Work", href: "/work", active: pathname === "/work" },
        { label: "About", href: "/about", active: pathname === "/about" },
        { label: "Contact", href: "/contact", active: pathname === "/contact" },
    ];

    return (
        <div className="relative w-full flex justify-center px-4">
            <div className="mx-auto mt-8 flex h-[48px] sm:h-[58px] w-full max-w-max gap-2 sm:gap-4 rounded-full border border-[#e4c89c]/12 bg-[#07110a]/88 px-4 sm:px-6 backdrop-blur-md overflow-x-auto no-scrollbar shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center rounded-full px-4 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap",
                            item.featured
                                ? "min-w-[6.5rem] border border-[#d86a10]/35 bg-[#d86a10]/14 text-[#ead9b8] shadow-[0_0_0_1px_rgba(216,106,16,0.14)]"
                                : "text-[#ad9a77] hover:text-[#ead9b8] hover:bg-white/5",
                            item.active
                                ? "bg-[#d86a10] text-[#170d05] shadow-lg shadow-[#d86a10]/30"
                                : ""
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

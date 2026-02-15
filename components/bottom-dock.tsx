"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BottomDock() {
    const pathname = usePathname();

    const items = [
        { label: "Home", href: "/", active: pathname === "/" },
        { label: "Services", href: "/services", active: pathname === "/services" },
        { label: "Work", href: "/work", active: pathname === "/work" },
        { label: "About", href: "/about", active: pathname === "/about" },
        { label: "Contact", href: "/contact", active: pathname === "/contact" },
    ];

    return (
        <div className="relative w-full flex justify-center px-4">
            <div className="mx-auto mt-8 flex h-[48px] sm:h-[58px] w-full max-w-max gap-2 sm:gap-4 rounded-full border border-white/10 bg-white/5 px-4 sm:px-6 backdrop-blur-md overflow-x-auto no-scrollbar">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center rounded-full px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap",
                            item.active
                                ? "bg-purple-700 text-white shadow-lg shadow-purple-900/50"
                                : "text-zinc-400 hover:text-white hover:bg-white/10"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

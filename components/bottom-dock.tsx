"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    active: boolean;
    featured?: boolean;
};

function NavLink({ item, mobile = false, onClick }: { item: NavItem; mobile?: boolean; onClick?: () => void }) {
    return (
        <Link
            key={item.label}
            href={item.href}
            onClick={onClick}
            className={cn(
                "flex items-center justify-center rounded-full font-medium transition-all duration-300 whitespace-nowrap",
                mobile ? "w-full px-4 py-3 text-sm" : "px-4 py-1 text-xs sm:px-6 sm:py-2 sm:text-sm",
                item.featured
                    ? "border border-[#d86a10]/35 bg-[#d86a10]/14 text-[#ead9b8] shadow-[0_0_0_1px_rgba(216,106,16,0.14)]"
                    : "text-[#ad9a77] hover:text-[#ead9b8] hover:bg-white/5",
                item.active ? "bg-[#d86a10] text-[#170d05] shadow-lg shadow-[#d86a10]/30" : ""
            )}
        >
            {item.label}
        </Link>
    );
}

export function BottomDock() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const items: NavItem[] = [
        { label: "Home", href: "/", active: pathname === "/" },
        { label: "Mimesis", href: "/mimesis", active: pathname === "/mimesis", featured: true },
        { label: "Services", href: "/services", active: pathname === "/services" },
        { label: "Work", href: "/work", active: pathname === "/work" },
        { label: "About", href: "/about", active: pathname === "/about" },
        { label: "Contact", href: "/contact", active: pathname === "/contact" },
    ];

    return (
        <div className="relative flex w-full justify-end px-4 sm:block">
            <div className="mx-auto hidden h-[58px] w-full max-w-max items-center gap-4 rounded-full border border-[#e4c89c]/12 bg-[#07110a]/88 px-6 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:flex">
                {items.map((item) => (
                    <NavLink key={item.label} item={item} />
                ))}
            </div>

            <div className="relative flex flex-col items-end sm:hidden">
                <button
                    type="button"
                    aria-expanded={mobileOpen}
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    onClick={() => setMobileOpen((open) => !open)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4c89c]/12 bg-[#07110a]/92 text-[#ead9b8] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-colors hover:bg-white/10"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {mobileOpen ? (
                    <div className="mt-3 w-[min(18rem,calc(100vw-2rem))] rounded-[28px] border border-[#e4c89c]/12 bg-[#07110a]/96 p-3 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                        <div className="mb-2 px-2 pt-1">
                            <p className="text-[0.65rem] uppercase tracking-[0.34em] text-[#9d8765]">
                                Navigate
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {items.map((item) => (
                                <NavLink
                                    key={item.label}
                                    item={item}
                                    mobile
                                    onClick={() => setMobileOpen(false)}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

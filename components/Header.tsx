"use strict";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Collaborations", href: "#channels" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/images/bitikogluCreativeLogo.png"
                        alt="Bitikoglu Creative Logo"
                        className="h-16 w-auto -my-4 object-contain"
                    />
                </Link>

                <nav className="hidden gap-6 text-sm font-medium md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className={cn(
                        "rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90",
                        "dark:bg-zinc-50 dark:text-zinc-900"
                    )}
                >
                    Get in touch
                </a>
            </div>
        </header>
    );
}

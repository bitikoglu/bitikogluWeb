"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Collaborations", href: "#channels" },
];

export function Header() {
    const [logoKey, setLogoKey] = useState(0);
    const [isFalling, setIsFalling] = useState(false);

    const handleLogoClick = (e: React.MouseEvent) => {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Trigger falling animation
        setIsFalling(true);

        // Reset and generate "new" logo after 1 second
        setTimeout(() => {
            setIsFalling(false);
            setLogoKey((prev) => prev + 1);
        }, 1000);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <div className="flex h-8 min-w-[140px] items-center gap-2 overflow-visible">
                    <AnimatePresence mode="wait">
                        {!isFalling && (
                            <motion.button
                                key={logoKey}
                                onClick={handleLogoClick}
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{
                                    y: 1000,
                                    rotate: 45,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.32, 0, 0.67, 0] // Accelerating fall
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 block bg-transparent p-0 border-none cursor-pointer focus:outline-none"
                            >
                                <img
                                    src="/images/bitikogluCreativeLogo.png"
                                    alt="Bitikoglu Creative Logo"
                                    className="h-16 w-auto -my-4 object-contain"
                                />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

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

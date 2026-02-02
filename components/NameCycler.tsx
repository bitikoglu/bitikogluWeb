"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const names = ["Taylan Şahan", "Bitikoglu"];

export function NameCycler() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % names.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="inline-flex w-[180px] justify-start overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
                <motion.span
                    key={names[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-semibold text-zinc-900 dark:text-zinc-50 truncate"
                >
                    {names[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

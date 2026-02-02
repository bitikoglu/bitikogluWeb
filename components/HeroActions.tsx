"use client";

import { Mail, Send, MessageSquare, Youtube, Check, Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HeroActions() {
    const [copied, setCopied] = useState(false);

    const copyDiscord = () => {
        navigator.clipboard.writeText("bitikoglu");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const primaryBtn = "inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";
    const secondaryBtn = "inline-flex items-center justify-start gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 w-full md:max-w-sm";

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
                <a href="https://www.youtube.com/@AmiralBitikoglu" target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                    Visit My Channel
                    <Youtube className="ml-2 h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 hover:scale-105 active:scale-95">
                    Check out my Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>

            <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Contact me
                </p>
                <div className="flex flex-col gap-1">
                    <a href="https://t.me/bitikoglu" target="_blank" rel="noopener noreferrer" className={cn(secondaryBtn, "group")}>
                        <Send className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="flex-1 text-left">Telegram: bitikoglu</span>
                    </a>
                    <a
                        href="https://discord.com/channels/@me/913495839794679808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(secondaryBtn, "group relative")}
                    >
                        <MessageSquare className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="flex-1 text-left">Discord: bitikoglu</span>
                        <ArrowRight className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="mailto:amiral@bitikoglu.com" className={cn(secondaryBtn, "group")}>
                        <Mail className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="flex-1 text-left">Email: amiral@bitikoglu.com</span>
                    </a>





                </div>
            </div>
        </div>
    );
}

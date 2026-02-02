"use client";

import { Mail, Send, MessageSquare, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
    const [copied, setCopied] = useState(false);

    const copyDiscord = () => {
        navigator.clipboard.writeText("bitikoglu");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactBtn = "inline-flex items-center justify-start gap-4 rounded-2xl border border-zinc-200 bg-white/50 px-6 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 w-full max-w-sm mx-auto backdrop-blur-sm";

    return (
        <section id="contact" className="mx-auto max-w-5xl px-5 py-12">
            <div className="rounded-[2.5rem] bg-zinc-50 border border-zinc-100 p-8 text-center md:p-16 dark:bg-zinc-900/50 dark:border-zinc-800">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Ready to level up your content?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                    Let&apos;s discuss how we can improve your retention and video quality.
                </p>

                <div className="mt-12 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
                    <a href="https://t.me/bitikoglu" target="_blank" rel="noopener noreferrer" className={cn(contactBtn, "group")}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <Send className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Telegram</p>
                            <p className="text-sm font-bold">@bitikoglu</p>
                        </div>
                    </a>
                    <a
                        href="https://discord.com/channels/@me/913495839794679808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(contactBtn, "group relative")}
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Discord</p>
                            <p className="text-sm font-bold">bitikoglu</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="mailto:amiral@bitikoglu.com" className={cn(contactBtn, "group")}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
                            <p className="text-sm font-bold truncate">amiral@bitikoglu.com</p>
                        </div>
                    </a>



                </div>
            </div>
        </section>
    );
}

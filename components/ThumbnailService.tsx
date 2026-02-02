"use client";

import { useState } from "react";
import { Check, MousePointer2, TrendingUp, Zap, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThumbnailService() {
    const [previewOpen, setPreviewOpen] = useState(false);

    return (
        <div id="thumbnails" className="relative overflow-hidden pt-4">
            {/* Background decoration */}
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-full -translate-x-1/2 bg-gradient-to-b from-red-500/10 to-transparent blur-3xl dark:from-red-500/5"></div>

            <div className="mx-auto max-w-5xl px-5">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                <Zap className="h-4 w-4 fill-current" />
                                <span>Fast Turnaround</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
                                Thumbnails that <span className="text-red-600">Stop the Scroll</span>
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                                A video is only as good as its first impression. I design high-impact
                                thumbnails engineered for maximum click-through rates using psychological
                                triggers and visual storytelling.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
                                    <MousePointer2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Click-Focused</h4>
                                    <p className="text-sm text-zinc-500">Designed to trigger curiosity and capture immediate attention.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
                                    <TrendingUp className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">High CTR</h4>
                                    <p className="text-sm text-zinc-500">Optimized layout and color theory for the YouTube algorithm.</p>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "High-contrast color grading",
                                "Clear, bold typography",
                                "Psychological storytelling elements"
                            ].map((bullet) => (
                                <li key={bullet} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                    <div className="rounded-full bg-red-100 p-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20"
                            >
                                Get High-CTR Thumbnails
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Image/Visual Part */}
                    <div className="flex-1">
                        <div className="group relative">
                            {/* Decorative rings */}
                            <div className="absolute -inset-4 -z-10 animate-pulse rounded-[2.5rem] bg-gradient-to-tr from-red-500/20 to-orange-500/20 blur-2xl transition-all group-hover:from-red-500/30 group-hover:to-orange-500/30"></div>

                            <div
                                className="relative cursor-zoom-in overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-2 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50"
                                onClick={() => setPreviewOpen(true)}
                            >
                                <img
                                    src="/images/Thumbnails.png"
                                    alt="Professional YouTube Thumbnails Showcase"
                                    className="rounded-[1.75rem] object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Floating Attention Markers */}
                                <div className="absolute left-[20%] top-[30%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-zinc-900 shadow-xl backdrop-blur-md dark:bg-zinc-900/90 dark:text-zinc-50">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                        High Retention Focus
                                    </div>
                                </div>

                                <div className="absolute right-[15%] bottom-[40%] opacity-0 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-zinc-900 shadow-xl backdrop-blur-md dark:bg-zinc-900/90 dark:text-zinc-50">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                        Click Trigger
                                    </div>
                                </div>

                                <div className="absolute left-[10%] bottom-[20%] opacity-0 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-zinc-900 shadow-xl backdrop-blur-md dark:bg-zinc-900/90 dark:text-zinc-50">
                                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                                        Emotional Capture
                                    </div>
                                </div>

                                {/* Statistics Overlay - Fake but looks professional */}
                                <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex-1 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md dark:bg-zinc-900/90">
                                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Avg. CTR</div>
                                        <div className="text-xl font-bold text-green-600">+12.4%</div>
                                    </div>
                                    <div className="flex-1 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md dark:bg-zinc-900/90">
                                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Impression Growth</div>
                                        <div className="text-xl font-bold text-red-600">+45%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Preview Modal */}
            {previewOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setPreviewOpen(false)}
                >
                    <button
                        className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setPreviewOpen(false);
                        }}
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src="/images/Thumbnails.png"
                            alt="Professional YouTube Thumbnails Showcase Full"
                            className="h-auto w-full rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

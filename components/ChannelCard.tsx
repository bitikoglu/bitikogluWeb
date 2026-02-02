/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ChannelData } from "@/lib/types";
import { ExternalLink, Users, Eye } from "lucide-react";

interface ChannelCardProps {
    name: string;
    desc: string;
    url: string;
    data: ChannelData | null;
    className?: string; // Standardize className prop
    secondAvatar?: string;
}

function formatNumber(n: number | null) {
    if (n === null || n === undefined) return "";
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B+`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
    return n.toString();
}

export function ChannelCard({ name, desc, url, data, className, secondAvatar }: ChannelCardProps) {
    const banner = data?.banner || "";
    const avatar = data?.avatar || "";
    const subs = formatNumber(data?.subs ?? null);
    const views = formatNumber(data?.views ?? null);

    return (
        <div className={cn(
            "group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700",
            className
        )}>
            {/* Banner */}
            <div className="relative h-32 bg-zinc-100 dark:bg-zinc-800">
                {banner ? (
                    <img
                        src={banner}
                        alt={`${name} banner`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : null}

                <div className="absolute -bottom-8 left-6">
                    {secondAvatar ? (
                        <div className="flex -space-x-4">
                            <div className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-zinc-100 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-900">
                                {avatar ? (
                                    <img src={avatar} alt={`${name} logo`} className="h-full w-full object-cover" />
                                ) : null}
                            </div>
                            <div className="relative z-0 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-zinc-100 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-900">
                                <img src={secondAvatar} alt={`${name} second logo`} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    ) : (
                        <div className="h-16 w-16 overflow-hidden rounded-2xl border-4 border-white bg-white dark:border-zinc-900 dark:bg-zinc-900">
                            {avatar ? (
                                <img
                                    src={avatar}
                                    alt={`${name} logo`}
                                    className="h-full w-full object-cover"
                                />
                            ) : null}
                        </div>
                    )}
                </div>
            </div>

            <div className="px-6 pb-6 pt-12">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{name}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{desc}</p>

                        {(subs || views) && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {subs && (
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300">
                                        <Users className="h-4 w-4 text-zinc-500" />
                                        <span>{subs}</span>
                                        <span className="text-zinc-400 font-normal">subs</span>
                                    </div>
                                )}
                                {views && (
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300">
                                        <Eye className="h-4 w-4 text-zinc-500" />
                                        <span>{views}</span>
                                        <span className="text-zinc-400 font-normal">views</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex shrink-0 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                    >
                        Visit
                        <ExternalLink className="h-3 w-3 opacity-50 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    desc: string;
    tags: string[];
    className?: string;
}

export function ProjectCard({ title, desc, tags, className }: ProjectCardProps) {
    return (
        <div className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700",
            className
        )}>
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-400"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

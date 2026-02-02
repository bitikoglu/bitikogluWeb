import { cn } from "@/lib/utils";
import { Check, Youtube } from "lucide-react";

interface ServiceCardProps {
    title: string;
    bullets: string[];
    youtubeUrl?: string;
    className?: string;
}

export function ServiceCard({ title, bullets, youtubeUrl, className }: ServiceCardProps) {
    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = youtubeUrl ? getYoutubeId(youtubeUrl) : null;

    return (
        <div className={cn(
            "group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700",
            className
        )}>
            {videoId && (
                <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            <div className="relative z-10 flex flex-1 flex-col px-1">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h3>
                <ul className="mt-4 flex-1 space-y-3">
                    {bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
                                <Check className="h-3 w-3" />
                            </span>
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>

                {youtubeUrl && (
                    <a
                        href={youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-zinc-50 dark:text-zinc-900"
                    >
                        <Youtube className="h-4 w-4" />
                        Watch on YouTube
                    </a>
                )}
            </div>
        </div>
    );
}

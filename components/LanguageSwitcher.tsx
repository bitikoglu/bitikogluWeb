"use client";

import { Locale } from "@/get-dictionary";
import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLang: Locale) => {
        if (currentLang === newLang) return;

        // set cookie
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

        // replace path segment
        const pathSegments = pathname.split("/");

        // Handle root cases and ensure the first segment is replaced
        // If pathname is /en/about -> ["", "en", "about"]
        if (pathSegments.length > 1 && (pathSegments[1] === "en" || pathSegments[1] === "tr")) {
            pathSegments[1] = newLang;
        } else {
            // Unlikely to happen due to middleware, but as a fallback
            if (pathSegments[0] === "") pathSegments.splice(1, 0, newLang);
            else pathSegments.unshift("", newLang);
        }

        router.push(pathSegments.join("/"));
        router.refresh();
    };

    return (
        <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 text-sm dark:border-zinc-800 dark:bg-zinc-950">
            <button
                onClick={() => switchLanguage("en")}
                className={`flex items-center justify-center p-1.5 rounded-full transition-all ${currentLang === "en" ? "bg-zinc-100 dark:bg-zinc-800 shadow-sm" : "opacity-50 hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`}
                title="English"
            >
                <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-[18px] h-auto rounded-[2px]" />
            </button>
            <button
                onClick={() => switchLanguage("tr")}
                className={`flex items-center justify-center p-1.5 rounded-full transition-all ${currentLang === "tr" ? "bg-zinc-100 dark:bg-zinc-800 shadow-sm" : "opacity-50 hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`}
                title="Türkçe"
            >
                <img src="https://flagcdn.com/w20/tr.png" alt="Türkiye" className="w-[18px] h-auto rounded-[2px]" />
            </button>
        </div>
    );
}

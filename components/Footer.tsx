export function Footer() {
    return (
        <footer className="border-t border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-zinc-500 md:flex-row dark:text-zinc-400">
                <p>© {new Date().getFullYear()} Taylan Bitikoğlu. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Twitter</a>
                    <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">LinkedIn</a>
                    <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

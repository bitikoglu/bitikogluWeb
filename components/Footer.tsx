export function Footer() {
    return (
        <footer className="border-t border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-zinc-500 md:flex-row dark:text-zinc-400">
                <p>© {new Date().getFullYear()} Taylan Şahan. All rights reserved.</p>
                <div className="flex items-center gap-6">
                </div>
            </div>
        </footer>
    );
}

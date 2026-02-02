import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Maintenance() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-5 text-center">
                <div className="max-w-md space-y-6">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                        <svg
                            className="h-10 w-10 text-zinc-900 dark:text-zinc-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Bakım Modu
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Sitemizi sizin için daha iyi hale getiriyoruz. Kısa süre içinde tekrar yayında olacağız!
                    </p>
                    <div className="pt-4">
                        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                            Acil bir durum için: <a href="mailto:amiral@bitikoglu.com" className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">amiral@bitikoglu.com</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

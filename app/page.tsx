import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChannelCard } from "@/components/ChannelCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ThumbnailService } from "@/components/ThumbnailService";
import { HeroActions } from "@/components/HeroActions";
import { ContactSection } from "@/components/ContactSection";
import { NameCycler } from "@/components/NameCycler";
import { ChannelData } from "@/lib/types";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitikoglu Creative",
  description: "High-retention video editing for YouTube creators.",
};

import { fetchChannelData } from "@/lib/youtube";

function formatNumber(n: number | null) {
  if (n === null || n === undefined) return "";
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B+`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return n.toString();
}

export default async function Home() {
  const [myChannel, tobi, slickz] = await Promise.all([
    fetchChannelData("AmiralBitikoglu"),
    fetchChannelData("tobiteaches"),
    fetchChannelData("SlickzGames"),
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section id="about" className="relative mx-auto max-w-5xl px-5 py-6">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px] dark:opacity-10"></div>

          {/* Intro Section */}
          <div className="mb-8 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for hire
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-medium text-zinc-500 dark:text-zinc-400">
                  Hi, I&apos;m <NameCycler />
                </h2>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
                  I make Edits that are watched{" "}
                  <span className="font-extrabold text-green-600 dark:text-green-400">
                    {myChannel?.views ? formatNumber(myChannel.views) : "8M+"}
                  </span>{" "}
                  times.
                </h1>
              </div>

              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I help creators grow by crafting high-retention videos with perfect pacing
                and storytelling structure.
              </p>

              <HeroActions />
            </div>

            {/* Right Part: Hero Avatar */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="group relative aspect-square w-64 rounded-3xl sm:w-80 rotate-3 transition-all duration-500 hover:rotate-0">
                <img
                  src="/images/avatar-real.PNG"
                  alt="Taylan Şahan"
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl shadow-2xl ring-1 ring-zinc-900/10 transition-opacity duration-500 group-hover:opacity-0 dark:ring-white/10"
                />
                <img
                  src="/images/avatar-drawn2.png"
                  alt="Taylan Şahan Drawn"
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl shadow-2xl ring-1 ring-zinc-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:ring-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-zinc-50/50 py-6 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Services</h2>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                Tailored editing solutions for your content needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Talking Head"
                youtubeUrl="https://www.youtube.com/watch?v=O-0xhfeN8ZA"
                bullets={[
                  "Strategic b-roll usage",
                  "Dynamic text overlays",
                  "Retention-based pacing",
                  "Clear audio processing"
                ]}
              />
              <ServiceCard
                title="Vlog & Advertisement"
                youtubeUrl="https://www.youtube.com/watch?v=n8P9N1gbeJ4"
                bullets={[
                  "Brand-focused editing",
                  "Cinematic storytelling",
                  "3D Effects",
                  "Professional color grading"
                ]}
              />
              <ServiceCard
                title="Gaming Montages"
                youtubeUrl="https://www.youtube.com/watch?v=B1LG2h981BM"
                bullets={[
                  "High-energy pacing",
                  "Comedy integration",
                  "Perfect sync with music",
                  "Engagement optimization"
                ]}
              />
            </div>

            <div className="mt-8 lg:mt-12">
              <ThumbnailService />
            </div>
          </div>
        </section>

        {/* Channels */}
        <section id="channels" className="mx-auto max-w-5xl px-5 py-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Channels I Work With</h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Creators I collaborate with to produce high-impact content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ChannelCard
              name="Tobi Teaches"
              desc="Educational content requiring clarity and precise pacing."
              url="https://www.youtube.com/@tobiteaches"
              data={tobi}
            />
            <ChannelCard
              name="Slickz Games"
              desc="High-energy gaming content edited for maximum engagement."
              url="https://www.youtube.com/@SlickzGames"
              data={slickz}
            />
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div >
  );
}

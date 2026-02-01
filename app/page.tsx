// app/page.tsx

type ChannelData = {
  title: string | null;
  url: string | null;
  avatar: string | null;
  banner: string | null;
  subs: number | null;
  views: number | null;
};

function formatNumber(n: number | null) {
  if (n === null || n === undefined) return "";
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B+`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return n.toString();
}

async function getChannel(handle: string): Promise<ChannelData | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/channel?handle=${encodeURIComponent(handle)}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function Home() {
  const [myChannel, tobi, slickz] = await Promise.all([
    getChannel("AmiralBitikoglu"),
    getChannel("tobiteaches"),
    getChannel("SlickzGames"),
  ]);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="font-semibold tracking-tight">Taylan</div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a className="hover:opacity-70" href="#about">
              About
            </a>
            <a className="hover:opacity-70" href="#channels">
              Channels
            </a>
            <a className="hover:opacity-70" href="#services">
              Services
            </a>
            <a className="hover:opacity-70" href="#projects">
              Work
            </a>
            <a className="hover:opacity-70" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl border px-3 py-1.5 text-sm hover:bg-zinc-50"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-zinc-500">Video Editor Portfolio</p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              Hi, I’m Taylan.
              <br />
              <span className="underline decoration-zinc-200">
                I edit videos that keep people watching.
              </span>
            </h1>

            <p className="mt-5 text-base leading-7 text-zinc-600">
              I’m a professional video editor and content creator. I specialize in
              high-retention editing, pacing, sound design, subtitles, and
              YouTube-optimized storytelling for both long-form and short-form
              content.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                See My Work
              </a>
              <a
                href="#channels"
                className="rounded-2xl border px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
              >
                Channels
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border px-3 py-1">Video Editing</span>
              <span className="rounded-full border px-3 py-1">YouTube Retention</span>
              <span className="rounded-full border px-3 py-1">Sound Design</span>
              <span className="rounded-full border px-3 py-1">Subtitles</span>
              <span className="rounded-full border px-3 py-1">Shorts & Long-form</span>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl border bg-zinc-50 p-6">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm text-zinc-500">Quick Facts</p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <span className="text-zinc-500">Location:</span> Gaziantep, Turkey
                </li>
                <li>
                  <span className="text-zinc-500">Focus:</span> YouTube editing + content
                </li>
                <li>
                  <span className="text-zinc-500">Languages:</span> Turkish (native),
                  English (fluent)
                </li>
                <li>
                  <span className="text-zinc-500">Style:</span> Fast, clean, retention-first
                </li>
              </ul>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border bg-white p-3">
                  <p className="text-xs text-zinc-500">Subscribers</p>
                  <p className="mt-1 text-lg font-semibold">
                    {formatNumber(myChannel?.subs ?? null) || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border bg-white p-3">
                  <p className="text-xs text-zinc-500">Views</p>
                  <p className="mt-1 text-lg font-semibold">
                    {formatNumber(myChannel?.views ?? null) || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border bg-white p-3">
                  <p className="text-xs text-zinc-500">Since</p>
                  <p className="mt-1 text-lg font-semibold">2019</p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-zinc-500">
                *Live stats pulled from YouTube (cached hourly).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section id="channels" className="mx-auto max-w-5xl px-5 pt-16">
        <h2 className="text-2xl font-semibold tracking-tight">My Channel</h2>

        <div className="mt-6">
          <ChannelCard
            name="Amiral Bitikoğlu"
            desc="I run my own YouTube channel where I handle the entire production pipeline: editing, pacing, sound effects, subtitles, thumbnails, and audience retention."
            url="https://www.youtube.com/@AmiralBitikoglu"
            data={myChannel}
          />
        </div>

        <h3 className="mt-12 text-xl font-semibold tracking-tight">
          Channels I Work With
        </h3>

        <p className="mt-3 max-w-3xl text-zinc-600">
          I collaborate with creators by editing long-form videos, Shorts, and
          retention-focused content tailored to each channel’s audience.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ChannelCard
            name="Tobi Teaches"
            desc="Educational content with clean pacing, clarity-focused structure, and tight edits."
            url="https://www.youtube.com/@tobiteaches"
            data={tobi}
          />
          <ChannelCard
            name="Slickz Games"
            desc="Gaming content edited for energy, timing, and engagement with emphasis on retention."
            url="https://www.youtube.com/@SlickzGames"
            data={slickz}
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 pt-16">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>

        <p className="mt-4 max-w-3xl text-zinc-600 leading-7">
          I’m a video editor with hands-on experience running my own YouTube
          channel and working with other creators. I understand what keeps
          viewers watching — pacing, timing, sound design, and clear visual
          storytelling.
          <br />
          <br />
          My background in software development helps me work efficiently, follow
          structured workflows, and deliver consistently polished edits.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Editing">
            Retention-focused cuts, pacing, story flow, timing, and emotional beats.
          </Card>
          <Card title="Audio & Visual">
            Sound design, cleanup, music timing, SFX, subtitles, basic color correction.
          </Card>
          <Card title="Reliability">
            Clear communication, consistent delivery, organized files, and fast iteration.
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-5 pt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ServiceCard
            title="Long-form YouTube Editing"
            bullets={[
              "Retention-focused pacing (cut the boring parts)",
              "SFX + music timing to guide attention",
              "Subtitles and on-screen emphasis",
              "Clean structure and narrative flow",
            ]}
          />
          <ServiceCard
            title="Shorts / Reels Editing"
            bullets={[
              "Fast hook + punchy pacing",
              "Captions for mobile retention",
              "Quick visual patterns (zoom, emphasis, timing)",
              "Export-ready for multiple platforms",
            ]}
          />
          <ServiceCard
            title="Podcast / Multi-cam Sync"
            bullets={[
              "Audio reference sync workflow",
              "Clean camera switching and cutdowns",
              "Remove dead air / keep it engaging",
              "Consistency across episodes",
            ]}
          />
          <ServiceCard
            title="YouTube Packaging"
            bullets={[
              "Thumbnail direction (simplicity wins)",
              "Title angle suggestions",
              "Retention notes per edit",
              "A/B ideas for better CTR",
            ]}
          />
        </div>
      </section>

      {/* Work */}
      <section id="projects" className="mx-auto max-w-5xl px-5 pt-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
          <p className="mt-2 text-zinc-600">
            A few examples of what I do. (You can replace these with specific videos.)
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="High-retention gaming edits"
            desc="Fast pacing, sound design, subtitles, and timing built for watch time."
            tags={["Retention", "SFX", "Subtitles"]}
          />
          <ProjectCard
            title="Educational content editing"
            desc="Clarity-first structure with clean cuts and emphasis where it matters."
            tags={["Clean pacing", "Structure", "Clarity"]}
          />
          <ProjectCard
            title="Short-form cutdowns"
            desc="Hooks, captions, and punchy rhythm optimized for Shorts/Reels."
            tags={["Shorts", "Captions", "Hook"]}
          />
          <ProjectCard
            title="End-to-end creator workflow"
            desc="From raw footage to export-ready uploads—organized and consistent."
            tags={["Workflow", "Consistency", "Delivery"]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
        <div className="rounded-3xl border bg-zinc-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 max-w-2xl text-zinc-600 leading-7">
            If you’re a creator looking for a reliable video editor who understands
            retention, pacing, and YouTube standards, feel free to reach out.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              href="mailto:amiral@bitikoglu.com"
            >
              Email
            </a>
            

            

          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Tip: After you’re happy with the design, deploy on Vercel and connect your domain.
          </p>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Taylan</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{children}</p>
    </div>
  );
}

function ChannelCard({
  name,
  desc,
  url,
  data,
}: {
  name: string;
  desc: string;
  url: string;
  data: ChannelData | null;
}) {
  const banner = data?.banner || "";
  const avatar = data?.avatar || "";
  const subs = formatNumber(data?.subs ?? null);
  const views = formatNumber(data?.views ?? null);

  return (
    <div className="overflow-hidden rounded-3xl border bg-white">
      {/* Banner */}
      <div className="relative h-32 bg-zinc-100">
        {banner ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={banner}
            alt={`${name} banner`}
            className="h-full w-full object-cover"
          />
        ) : null}

        {/* Avatar */}
        <div className="absolute -bottom-8 left-6">
          <div className="h-16 w-16 overflow-hidden rounded-2xl border bg-white">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatar}
                alt={`${name} logo`}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-10">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-medium">{name}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>

            {(subs || views) && (
              <p className="mt-3 text-xs text-zinc-500">
                {subs ? `${subs} subs` : ""}
                {subs && views ? " • " : ""}
                {views ? `${views} views` : ""}
              </p>
            )}
          </div>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-zinc-50"
          >
            View Channel →
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <p className="font-medium">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[2px] inline-block h-4 w-4 rounded-full border" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border px-3 py-1 text-xs text-zinc-600"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

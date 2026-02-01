import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 saat cache

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle"); // AmiralBitikoglu gibi ( @ yok )
  if (!handle) return NextResponse.json({ error: "Missing handle" }, { status: 400 });

  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return NextResponse.json({ error: "Missing YOUTUBE_API_KEY" }, { status: 500 });

  const url =
    `https://www.googleapis.com/youtube/v3/channels` +
    `?part=snippet,statistics,brandingSettings&forHandle=${encodeURIComponent(handle)}` +
    `&key=${encodeURIComponent(key)}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
  const details = await res.text();
  return NextResponse.json(
    { error: "YouTube API error", status: res.status, details },
    { status: 502 }
  );
}

  const data = await res.json();
  const ch = data?.items?.[0];
  if (!ch) return NextResponse.json({ error: "Channel not found" }, { status: 404 });

  const avatar =
    ch?.snippet?.thumbnails?.high?.url ||
    ch?.snippet?.thumbnails?.medium?.url ||
    ch?.snippet?.thumbnails?.default?.url ||
    null;

  const banner = ch?.brandingSettings?.image?.bannerExternalUrl || null;

  return NextResponse.json({
    title: ch?.snippet?.title ?? null,
    url: ch?.snippet?.customUrl ? `https://www.youtube.com/${ch.snippet.customUrl}` : `https://www.youtube.com/@${handle}`,
    avatar,
    banner,
    subs: ch?.statistics?.subscriberCount ? Number(ch.statistics.subscriberCount) : null,
    views: ch?.statistics?.viewCount ? Number(ch.statistics.viewCount) : null,
  });
}

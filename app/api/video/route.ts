import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const videoId = searchParams.get("id");

    if (!videoId) return NextResponse.json({ error: "Missing videoId" }, { status: 400 });

    const key = process.env.YOUTUBE_API_KEY;
    if (!key) return NextResponse.json({ error: "Missing YOUTUBE_API_KEY" }, { status: 500 });

    const url =
        `https://www.googleapis.com/youtube/v3/videos` +
        `?part=statistics&id=${encodeURIComponent(videoId)}` +
        `&key=${encodeURIComponent(key)}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) throw new Error("YouTube API error");

        const data = await res.json();
        const video = data?.items?.[0];

        if (!video) return NextResponse.json({ error: "Video not found" }, { status: 404 });

        return NextResponse.json({
            views: video?.statistics?.viewCount ? Number(video.statistics.viewCount) : null,
            likes: video?.statistics?.likeCount ? Number(video.statistics.likeCount) : null,
        });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}

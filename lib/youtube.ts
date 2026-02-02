import { ChannelData } from "./types";

export async function fetchChannelData(handle: string): Promise<ChannelData | null> {
    const key = process.env.YOUTUBE_API_KEY;
    if (!key) {
        console.error("Missing YOUTUBE_API_KEY");
        return null;
    }

    const url =
        `https://www.googleapis.com/youtube/v3/channels` +
        `?part=snippet,statistics,brandingSettings&forHandle=${encodeURIComponent(handle)}` +
        `&key=${encodeURIComponent(key)}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) {
            console.error(`YouTube API error: ${res.status}`, await res.text());
            return null;
        }

        const data = await res.json();
        const ch = data?.items?.[0];
        if (!ch) return null;

        const avatar =
            ch?.snippet?.thumbnails?.high?.url ||
            ch?.snippet?.thumbnails?.medium?.url ||
            ch?.snippet?.thumbnails?.default?.url ||
            null;

        const banner = ch?.brandingSettings?.image?.bannerExternalUrl || null;

        return {
            title: ch?.snippet?.title ?? null,
            url: ch?.snippet?.customUrl ? `https://www.youtube.com/${ch.snippet.customUrl}` : `https://www.youtube.com/@${handle}`,
            avatar,
            banner,
            subs: ch?.statistics?.subscriberCount ? Number(ch.statistics.subscriberCount) : null,
            views: ch?.statistics?.viewCount ? Number(ch.statistics.viewCount) : null,
        };
    } catch (error) {
        console.error("Failed to fetch channel data:", error);
        return null;
    }
}

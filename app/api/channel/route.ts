import { NextResponse } from "next/server";
import { fetchChannelData } from "@/lib/youtube";

export const revalidate = 3600; // 1 saat cache

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle");
  if (!handle) return NextResponse.json({ error: "Missing handle" }, { status: 400 });

  const channelData = await fetchChannelData(handle);

  if (!channelData) {
    return NextResponse.json({ error: "Channel not found or API error" }, { status: 404 });
  }

  return NextResponse.json(channelData);
}

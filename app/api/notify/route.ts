import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID || "@bitikoglu";

        if (!token) {
            return NextResponse.json({ error: "Bot token not configured" }, { status: 500 });
        }

        const country = req.headers.get("x-vercel-ip-country") || "Unknown";
        const city = req.headers.get("x-vercel-ip-city") || "Unknown";
        const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "Unknown";

        const text = `🚀 *Yeni Ziyaretçi!*\n\n🌍 *Ülke:* ${country}\n🏙️ *Şehir:* ${city}\n🌐 *IP:* ${ip}\n⏰ *Zaman:* ${new Date().toLocaleString('tr-TR')}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "Markdown",
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error("Telegram API Error:", data);
            return NextResponse.json({ error: data.description }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Notification Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

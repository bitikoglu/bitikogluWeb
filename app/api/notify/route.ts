import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            console.error("Missing configuration:", { hasToken: !!token, hasChatId: !!chatId });
            return NextResponse.json({ error: "Telegram configuration missing" }, { status: 500 });
        }

        const country = req.headers.get("x-vercel-ip-country") || "Unknown";
        const city = req.headers.get("x-vercel-ip-city") || "Unknown";
        const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "Unknown";

        // Use HTML instead of Markdown for better character handling
        const text = `🚀 <b>Yeni Ziyaretçi!</b>\n\n🌍 <b>Ülke:</b> ${country}\n🏙️ <b>Şehir:</b> ${city}\n🌐 <b>IP:</b> ${ip}\n⏰ <b>Zaman:</b> ${new Date().toLocaleString('tr-TR')}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "HTML",
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error("Telegram API Error:", data);
            return NextResponse.json({
                error: data.description,
                errorCode: data.error_code
            }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Notification Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

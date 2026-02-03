"use client";

import { useEffect } from "react";

export function VisitorTracker() {
    useEffect(() => {
        // Only track once per session
        const hasTracked = sessionStorage.getItem("visitor_tracked");

        if (!hasTracked) {
            fetch("/api/notify", { method: "POST" })
                .then((res) => {
                    if (res.ok) {
                        sessionStorage.setItem("visitor_tracked", "true");
                    }
                })
                .catch((err) => console.error("Tracking error:", err));
        }
    }, []);

    return null;
}

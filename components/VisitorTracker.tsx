"use client";

import { useEffect } from "react";

export function VisitorTracker() {
    useEffect(() => {
        // Only track once per session
        const hasTracked = sessionStorage.getItem("visitor_tracked");

        if (!hasTracked) {
            console.log("Tracking visitor...");
            fetch("/api/notify", { method: "POST" })
                .then(async (res) => {
                    if (res.ok) {
                        console.log("Visitor tracking successful");
                        sessionStorage.setItem("visitor_tracked", "true");
                    } else {
                        const errorData = await res.json();
                        console.error("Visitor tracking failed:", errorData.error);
                    }
                })
                .catch((err) => console.error("Tracking error:", err));
        }
    }, []);

    return null;
}

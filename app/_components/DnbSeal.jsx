"use client";
import Script from "next/script";

export default function DnbSeal() {
    return (
        <div id="dnb-seal-container" style={{ width: 114, height: 97 }}>
            <Script
                src="https://dunsregistered.dnb.com"
                strategy="afterInteractive"
            />
        </div>
    );
}
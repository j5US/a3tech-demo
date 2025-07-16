"use client";
import Script from "next/script";

export default function DnbSeal() {
  return (
    <Script
      src="https://dunsregistered.dnb.com/mini.js"
      strategy="afterInteractive"
    />
  );
}
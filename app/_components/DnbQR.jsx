"use client";
import Script from "next/script";

export default function DnbQR() {
  return (
    <Script
      src="https://dunsregistered.dnb.com/QRcode.js?QRW=100&QRH=100"
      strategy="afterInteractive"
    />
  );
}
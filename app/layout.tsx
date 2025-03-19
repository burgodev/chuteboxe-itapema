// import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chute Boxe Itapema - Team Mancha",
  description: "Academia Chute Boxe - Itapema/SC - Team Mancha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between min-h-screen text-white bg-gradient-to-b from-dark via-black to-dark overflow-x-clip">
          <Analytics />
          <SpeedInsights />

          {children}
        </div>
      </body>
    </html>
  );
}

// import "tailwindcss/tailwind.css";

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
          {children}
        </div>
      </body>
    </html>
  );
}

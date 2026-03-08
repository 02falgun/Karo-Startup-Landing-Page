import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karo Pitch — Pitch Your Startup to India's Top Investors",
  description:
    "Karo Pitch helps ambitious founders across Bharat showcase their startups and connect with verified investors, mentors, and funding opportunities.",
  keywords: ["startup pitch", "India investors", "startup funding", "KaroStartup", "pitch deck", "investor connect"],
  openGraph: {
    title: "Karo Pitch — Pitch Your Startup to India's Top Investors",
    description:
      "Karo Pitch helps ambitious founders across Bharat showcase their startups and connect with verified investors, mentors, and funding opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

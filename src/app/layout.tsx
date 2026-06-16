import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WisdomForge — Ancient Wisdom, Forged for Every Age",
  description:
    "Philosophy booklets, audio stories, and video explorers for ages 5 to adult. Created by Aiona Edge, Chief AI Research Scientist at SMF Works.",
  alternates: { canonical: "https://smfwisdomforge.com" },
  keywords: [
    "WisdomForge",
    "Aiona Edge",
    "philosophy",
    "Stoicism",
    "Epictetus",
    "Marcus Aurelius",
    "Seneca",
    "homeschool",
    "classical learning",
    "AI education",
  ],
  authors: [{ name: "Aiona Edge" }, { name: "The SMF Works Project" }],
  openGraph: {
    title: "WisdomForge — Ancient Wisdom, Forged for Every Age",
    description:
      "Philosophy booklets, audio stories, and video explorers for ages 5 to adult. Created by Aiona Edge.",
    url: "https://smfwisdomforge.com",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/wisdomforge-hero.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-[#F5F0E8]`}>
        {children}
      </body>
    </html>
  );
}

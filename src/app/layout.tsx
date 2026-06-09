import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WisdomForge — Ancient Wisdom, Forged by AI",
  description:
    "An adaptive AI-powered educational platform that teaches classical philosophy, theology, science, and more. A virtual Socrates that learns how you learn.",
  alternates: { canonical: "https://smfwisdomforge.com" },
  keywords: ["WisdomForge", "AI education", "philosophy", "Socrates", "classical learning", "homeschool"],
  authors: [{ name: "The SMF Works Project" }],
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

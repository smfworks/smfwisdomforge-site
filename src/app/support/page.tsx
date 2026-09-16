import type { Metadata } from "next";
import Image from "next/image";
import { STRIPE_TIP_JAR_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support WisdomForge — SMF WisdomForge",
  description:
    "Voluntary tips support parent-operated, AI-supported philosophy and education outreach from SMF WisdomForge — booklets, audio, and video for ages 5 to adult.",
  alternates: { canonical: "https://smfwisdomforge.com/support" },
  openGraph: {
    title: "Support WisdomForge",
    description:
      "A voluntary tip jar for SMF WisdomForge: parent-operated philosophy and education outreach for ages 5 to adult. Not tuition, not a product purchase.",
    url: "https://smfwisdomforge.com/support",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/wisdomforge-hero.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function SupportPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0">
          <Image
            src="/images/wisdomforge-hero.png"
            alt="Ancient forge with philosopher bust"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C9A96E] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
          <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Voluntary support
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Support <span className="text-[#C9A96E]">WisdomForge</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A89B8C] mb-6 max-w-2xl mx-auto leading-relaxed font-light">
            Tips help keep parent-operated, AI-supported philosophy and education outreach in motion — for families, classrooms, and anyone still asking the old questions.
          </p>
          <p className="text-base md:text-lg text-[#6B6560] mb-10 max-w-xl mx-auto leading-relaxed">
            SMF WisdomForge offers free booklets, audio, and video across four age bands, from 5 to adult. If that work has a place in your home, a voluntary tip is a quiet way to say keep going.
          </p>
          <a
            href={STRIPE_TIP_JAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40"
          >
            Leave a voluntary tip
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-6 text-sm text-[#6B6560]">
            A tip jar — not tuition, and not a product purchase. Every booklet stays free.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8]">
            What your support makes possible
          </h2>
          <p>
            WisdomForge is outreach, not a school you enroll in. A parent-operated project adapts philosophers, theologians, and the Western canon into stories, audio chapters, and video explorers that meet people where they are — Little Thinkers through Lifelong Learners.
          </p>
          <p>
            Tips help cover the slow work behind the free shelf: writing and adapting booklets, recording audio, shaping video, and keeping the library open for the next age band at the table.
          </p>
          <p className="text-[#C9A96E]">
            Give if it feels right. Skip it if it does not. The materials remain free either way.
          </p>
          <a
            href={STRIPE_TIP_JAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A96E] font-semibold hover:underline"
          >
            Open the WisdomForge tip jar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

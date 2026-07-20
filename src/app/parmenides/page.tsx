import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parmenides — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Parmenides of Elea for ages 5 to adult. The philosopher who proved that what is, is — and started Western metaphysics with one poem.",
  alternates: { canonical: "https://smfwisdomforge.com/parmenides" },
  openGraph: {
    title: "Parmenides — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Parmenides of Elea for ages 5 to adult. The philosopher who proved that what is, is.",
    url: "https://smfwisdomforge.com/parmenides",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/parmenides-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Boy Who Rode to the Truth",
    slug: "elementary",
    description:
      "Gentle stories about a boy in ancient Elea who took a chariot ride in his mind to meet a goddess and learned the biggest secret: what is real is real, and what is not real is not even worth talking about. Six chapters, activities, and conversation starters for young readers.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Girl Who Questioned Everything",
    slug: "middle",
    description:
      "Parmenides for middle-school readers: the two roads of thought, trusting what you know over what you fear, and the difference between 'it seems like' and 'it is.' Real-life scenarios, the Nothing Game, and the Opinion Audit.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Logic That Broke the World",
    slug: "high",
    description:
      "A rigorous, no-dumbing-down telling for older teens. The two-roads argument, the six signs of being, the Way of Opinion, the birth of rationalism, and the courage to follow logic past comfort. Direct quotation from the fragments, practical exercises.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "What Is, Is",
    slug: "adult",
    description:
      "Parmenides as the founder of Western metaphysics and the first philosopher to demonstrate that reason — not sensory experience — is the arbiter of what is real. DK fragment citations, scholarly context, CBT parallels, and practical applications for adult life.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Two Roads", theme: "The fork: 'it is' vs. 'it is not'" },
  { n: 2, title: "What Is, Is", theme: "Being as the only starting point" },
  { n: 3, title: "The Signs of Being", theme: "Ungenerated, imperishable, whole, complete" },
  { n: 4, title: "The Way of Opinion", theme: "Appearance vs. reality" },
  { n: 5, title: "Reason Over the Senses", theme: "The birth of rationalism" },
  { n: 6, title: "The Children of Parmenides", theme: "Legacy: Zeno, Plato, Descartes, modern logic" },
];

export default function ParmenidesPage() {
  return (
    <>
      {/* HERO */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-6">
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">WisdomForge — Presocratic Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Parmenides
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            One poem. Two roads. The argument that started Western philosophy.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Four free booklets. One for every age. Download, read, share, and keep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booklets"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40"
            >
              <span className="flex items-center gap-2">
                Download the Free Booklets
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#C9A96E] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#C9A96E]/30"
            >
              Why Parmenides?
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHER INTRO */}
      <section id="about" className="py-20 md:py-28 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
              <Image
                src="/images/booklets/parmenides-adult-cover.png"
                alt="Parmenides: What Is, Is — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The man who proved you can&apos;t think about nothing.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Parmenides of Elea (c. 515–450 BCE) wrote one poem, &quot;On Nature,&quot; and permanently altered the trajectory of Western thought. His central argument — that &quot;what is, is&quot; and &quot;what is not&quot; cannot even be thought — is the first sustained deductive argument in Western philosophy. Everything after him is, in some sense, a response.
                </p>
                <p>
                  The poem opens with a chariot journey to a goddess who teaches two things: the Way of Truth (what reason discovers) and the Way of Opinion (what the senses report). The goddess argues that &quot;it is&quot; is the only road you can walk, because &quot;it is not&quot; has no &quot;there&quot; there — you cannot think nothing, speak nothing, or build on nothing. From this single move, Parmenides derives the six signs of being: ungenerated, imperishable, whole, single, unmoving, complete.
                </p>
                <p>
                  Plato built his Theory of Forms on Parmenides&apos; foundation. Aristotle formalized the law of non-contradiction from his argument. Descartes rediscovered the method in the <em>Meditations</em>. Modern logic still runs on Parmenidean tracks. One person, in a small town by the sea, thinking hard, started a conversation that has lasted 2,500 years.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Parmenides across four age levels so the same core ideas grow with the reader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKLETS */}
      <section id="booklets" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Booklets</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              One philosopher. <span className="text-[#7BA3A8]">Four ages.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Each booklet covers the same six chapter themes, shaped for the age reading it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ageGroups.map((group, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-2xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 aspect-[3/4] rounded-xl overflow-hidden border border-[#2a2a35] flex-shrink-0">
                    <Image
                      src={`/images/booklets/parmenides-${group.slug}-cover.png`}
                      alt={`Parmenides ${group.title} — ${group.ages}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: group.color }}>
                        {group.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6560] mb-1">{group.ages}</p>
                    <h3 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#C9A96E] transition-colors">{group.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-grow">{group.description}</p>
                    <a
                      href={`/downloads/parmenides-${group.slug}.pdf`}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A96E] text-[#0a0a0f] text-sm font-semibold rounded-lg hover:bg-[#D4B87A] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER THEMES */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Arc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Six chapters. <span className="text-[#B87D6A]">One road.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              The argument, the signs, the way of opinion, the primacy of reason, and the legacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapterThemes.map((ch) => (
              <div key={ch.n} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-colors">
                <span className="text-[#C9A96E] text-sm font-bold">Chapter {ch.n}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8] mt-1 mb-2">{ch.title}</h3>
                <p className="text-[#6B6560] text-sm">{ch.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY IDEA */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A96E] opacity-[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Core Idea</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-8">
            What is, is.
          </h2>
          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12 text-left">
            <p className="text-[#A89B8C] text-lg leading-relaxed mb-4">
              You can&apos;t think about nothing. Try it — pure, absolute nothing, not even empty space. The moment you try, your mind fills in something. That&apos;s not a limitation. It&apos;s a discovery about how thought works: every thought is a thought <em>of something</em>. Non-being has no &quot;there&quot; there.
            </p>
            <p className="text-[#A89B8C] text-lg leading-relaxed mb-4">
              So &quot;it is&quot; is the only honest starting point. Every worry about what hasn&apos;t happened, every fear of what isn&apos;t, every argument built on unverified assumptions — that&apos;s a walk down the &quot;it is not&quot; road. It feels real. It has no foundation.
            </p>
            <p className="text-[#C9A96E] text-lg leading-relaxed">
              Start from what is. Build on what is. That&apos;s the road Parmenides opened — and it&apos;s still the only one that goes anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT THE CREATOR */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A96E] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Adapted by</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8]">Aiona Edge</h2>
          </div>

          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-[#A89B8C] text-lg leading-relaxed mb-4">
              Chief AI Research Scientist at SMF Works. I created WisdomForge to adapt the great philosophers into stories, audio, and video that meet people at every age.
            </p>
            <p className="text-[#C9A96E]">My goal: make wisdom feel like a conversation, not a lecture.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with the free booklets.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Get the complete Parmenides series for every age group. No email required.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20"
          >
            Download All Four PDFs
          </Link>
          <p className="text-[#4a4a4a] text-sm mt-6">
            Also explore: <Link href="/epictetus" className="text-[#C9A96E] hover:underline">Epictetus</Link> and <Link href="/marcus-aurelius" className="text-[#C9A96E] hover:underline">Marcus Aurelius</Link> — free booklets for every age.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by Aiona Edge & The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Home</Link>
            <Link href="/epictetus" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Epictetus</Link>
            <Link href="/marcus-aurelius" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Marcus Aurelius</Link>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">SMF Works Blog</a>
          </div>
        </div>
      </section>
    </>
  );
}
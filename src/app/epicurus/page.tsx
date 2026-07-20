import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epicurus — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Epicurus for ages 5 to adult. Download PDFs and explore Epicurean wisdom — the four-part cure, the art of enough, and the garden of friendship.",
  alternates: { canonical: "https://smfwisdomforge.com/epicurus" },
  openGraph: {
    title: "Epicurus — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Epicurus for ages 5 to adult.",
    url: "https://smfwisdomforge.com/epicurus",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/epicurus-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Garden of Friends",
    slug: "elementary",
    description:
      "Gentle stories about a man who built a garden where everyone was welcome — women, slaves, foreigners, everyone. Six chapters on friendship, the four-part cure, and the secret of enough. Activities and conversation starters for young readers.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Four-Part Cure",
    slug: "middle",
    description:
      "Epicurus for middle-school readers: the tetrapharmakos, the three kinds of want, and the surprising idea that happiness is not getting more but needing less. Real-life scenarios, practical exercises, and discussion questions.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Architecture of Peace",
    slug: "high",
    description:
      "A rigorous philosophical treatment for older teens. The death argument and its critics, the desire classification as cognitive reappraisal, ataraxia vs. Stoic apatheia, and the medical model of philosophy. Designed for readers ready to wrestle with hard questions.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Garden of Enough",
    slug: "adult",
    description:
      "Epicurus as a serious practical philosophy for adults. No self-help padding. Six chapters on the four-part cure, the architecture of desire, the art of enough, the death argument, and philosophy as therapy. Built for a life that does not include a Greek garden.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Philosopher of the Garden", theme: "Life, community & the Garden" },
  { n: 2, title: "The Four-Part Cure", theme: "The tetrapharmakos" },
  { n: 3, title: "The Architecture of Desire", theme: "Three kinds of want" },
  { n: 4, title: "Ataraxia and the Art of Enough", theme: "Self-sufficiency & peace" },
  { n: 5, title: "Death Is Nothing to Us", theme: "The death argument" },
  { n: 6, title: "Philosophy as Therapy", theme: "Medicine for the soul" },
];

export default function EpicurusPage() {
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

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8A9A7B] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8A9A7B]/10 border border-[#8A9A7B]/20 mb-6">
            <span className="text-[#8A9A7B] text-sm font-medium tracking-wide uppercase">WisdomForge — Hellenistic Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Epicurus
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            The philosopher who said happiness is needing less, not getting more. He built a garden where everyone was welcome and taught that death is nothing to us.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Four free booklets. One for every age. Download, read, share, and keep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booklets"
              className="group relative px-8 py-4 bg-[#8A9A7B] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#9BAB8C] transition-all duration-300 shadow-lg shadow-[#8A9A7B]/20 hover:shadow-[#8A9A7B]/40"
            >
              <span className="flex items-center gap-2">
                Download the Free Booklets
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#chapters"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#8A9A7B] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#8A9A7B]/30"
            >
              Explore the Chapters
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHER INTRO */}
      <section className="py-20 md:py-28 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
              <Image
                src="/images/booklets/epicurus-adult-cover.png"
                alt="Epicurus: The Garden of Enough — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#8A9A7B] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The teacher who said happiness is the absence of disturbance, not the presence of pleasure.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Epicurus (341–270 BCE) was born on the island of Samos and founded a philosophical community called the Garden in Athens around 307 BCE. The Garden was revolutionary: it welcomed women, slaves, and foreigners at a time when every other philosophical school was restricted to elite freeborn men. They ate simple meals together — barley bread, water, cheese — and devoted themselves to friendship and the cure of fear.
                </p>
                <p>
                  His philosophy is distilled in the <em>tetrapharmakos</em>, the four-part cure: don&apos;t fear god, don&apos;t fear death, what is good is easy to get, and what is terrible is easy to endure. He taught that happiness is <em>ataraxia</em> — undisturbedness of soul — and that the greatest wealth is needing little. He died in 270 BCE from kidney stones, writing a letter to a friend about the joy of their conversations. His last words: &ldquo;Farewell, and remember my doctrines.&rdquo;
                </p>
                <p className="text-[#8A9A7B]">
                  WisdomForge adapts Epicurus across four age levels so the same core ideas grow with the reader.
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
            <p className="text-[#8A9A7B] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Booklets</p>
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
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-2xl p-6 hover:border-[#8A9A7B]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 aspect-[3/4] rounded-xl overflow-hidden border border-[#2a2a35] flex-shrink-0">
                    <Image
                      src={`/images/booklets/epicurus-${group.slug}-cover.png`}
                      alt={`Epicurus ${group.title} — ${group.ages}`}
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
                    <h3 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#8A9A7B] transition-colors">{group.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-grow">{group.description}</p>
                    <a
                      href={`/downloads/epicurus-${group.slug}.pdf`}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8A9A7B] text-[#0a0a0f] text-sm font-semibold rounded-lg hover:bg-[#9BAB8C] transition-colors"
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
      <section id="chapters" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#8A9A7B] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Arc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Six chapters. <span className="text-[#B87D6A]">One cure.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              From the Garden to the death argument, each chapter builds on the last.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapterThemes.map((ch) => (
              <div key={ch.n} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#8A9A7B]/30 transition-colors">
                <span className="text-[#8A9A7B] text-sm font-bold">Chapter {ch.n}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8] mt-1 mb-2">{ch.title}</h3>
                <p className="text-[#6B6560] text-sm">{ch.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY QUOTE */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#8A9A7B] text-sm font-semibold uppercase tracking-[0.2em] mb-8">The Tetrapharmakos</p>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#F5F0E8] leading-relaxed mb-8 italic">
            &ldquo;Don&apos;t fear god.<br />
            Don&apos;t worry about death.<br />
            What is good is easy to get.<br />
            What is terrible is easy to endure.&rdquo;
          </blockquote>
          <p className="text-[#6B6560] text-lg">
            — Philodemus, <em>Against the Sophists</em> (preserving Epicurus)
          </p>
          <p className="text-[#A89B8C] text-base mt-6 max-w-2xl mx-auto">
            The four-part cure. If genuinely believed, Epicurus said, these four sentences eliminate the primary sources of human misery.
          </p>
        </div>
      </section>

      {/* ABOUT THE CREATOR */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8A9A7B] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8A9A7B] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Adapted by</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8]">Aiona Edge</h2>
          </div>

          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-[#A89B8C] text-lg leading-relaxed mb-4">
              Chief AI Research Scientist at SMF Works. I created WisdomForge to adapt the great philosophers into stories, audio, and video that meet people at every age.
            </p>
            <p className="text-[#8A9A7B]">My goal: make wisdom feel like a conversation, not a lecture.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#8A9A7B] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with the free booklets.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Get the complete Epicurus series for every age group. No email required.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8A9A7B] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#9BAB8C] transition-all shadow-lg shadow-[#8A9A7B]/20"
          >
            Download All Four PDFs
          </Link>
          <p className="text-[#4a4a4a] text-sm mt-6">
            Also explore: <Link href="/epictetus" className="text-[#C9A96E] hover:underline">Epictetus</Link> and <Link href="/marcus-aurelius" className="text-[#C9A96E] hover:underline">Marcus Aurelius</Link>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by Aiona Edge &amp; The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#6B6560] hover:text-[#8A9A7B] transition-colors">Home</Link>
            <Link href="/epictetus" className="text-[#6B6560] hover:text-[#8A9A7B] transition-colors">Epictetus</Link>
            <Link href="/marcus-aurelius" className="text-[#6B6560] hover:text-[#8A9A7B] transition-colors">Marcus Aurelius</Link>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#8A9A7B] transition-colors">SMF Works Blog</a>
            <a href="https://smfworks.com/contact" className="text-[#6B6560] hover:text-[#8A9A7B] transition-colors">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Socrates — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Socrates, the Gadfly of Athens, for ages 5 to adult. Download PDFs and explore the examined life, the oracle at Delphi, the priority of the soul, and the philosopher who chose death over silence.",
  alternates: { canonical: "https://smfwisdomforge.com/socrates" },
  openGraph: {
    title: "Socrates — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Socrates, the Gadfly of Athens, for ages 5 to adult.",
    url: "https://smfwisdomforge.com/socrates",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/socrates-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Man Who Asked Too Many Questions",
    slug: "elementary",
    description:
      "Gentle stories about a wise man who wandered the markets of Athens asking questions until people realized they did not really know what they thought they knew. Six chapters, activities, and conversation starters about curiosity, honesty, and caring for your soul.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Man Who Asked Too Many Questions",
    slug: "middle",
    description:
      "Socrates for middle-school readers: the Socratic method, the oracle at Delphi, the priority of the soul over the body, and the trial that ended a life. Real-life scenarios, creative projects, and discussion questions about the philosopher who would not stop asking why.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Examined Life and the Limits of Reason",
    slug: "high",
    description:
      "A rigorous philosophical treatment for older teens. The elenchus, the Delphic oracle, the soul as the seat of moral worth, the Crito argument for obedience to law, and Euthyphro's dilemma on piety. Designed for readers ready to wrestle with a philosopher who died for the right to question everything.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Examined Life and the Limits of Reason",
    slug: "adult",
    description:
      "Socrates as a serious philosopher of self-knowledge, moral inquiry, and civic duty. Six chapters on the oracle, the unexamined life, the soul, the laws, the final words, and Euthyphro's dilemma. Scholarly precision with practical application. No self-help padding.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Oracle at Delphi", theme: "Wisdom as the knowledge of ignorance" },
  { n: 2, title: "The Unexamined Life", theme: "The examined life as the only life worth living" },
  { n: 3, title: "The Priority of the Soul", theme: "Virtue over wealth, body, and reputation" },
  { n: 4, title: "Crito and the Laws", theme: "Obedience, justice, and the social contract" },
  { n: 5, title: "Socrates&apos; Final Words", theme: "Death, debt, and the meaning of a life" },
  { n: 6, title: "Euthyphro's Dilemma", theme: "Piety, definition, and the limits of divine command" },
];

const audioClips = [
  { ch: 1, title: "The Oracle at Delphi" },
  { ch: 2, title: "The Unexamined Life" },
  { ch: 3, title: "The Priority of the Soul" },
  { ch: 4, title: "Crito and the Laws" },
  { ch: 5, title: "Socrates&apos; Final Words" },
  { ch: 6, title: "Euthyphro's Dilemma" },
];

export default function SocratesPage() {
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
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">WisdomForge — Philosopher Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Socrates
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            The Gadfly of Athens. He wrote nothing, asked everything, and chose the hemlock over silence — because the unexamined life is not worth living.
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
          </div>
        </div>
      </section>

      {/* PHILOSOPHER INTRO */}
      <section className="py-20 md:py-28 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
              <Image
                src="/images/booklets/socrates-adult-cover.png"
                alt="Socrates: The Examined Life and the Limits of Reason — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The philosopher who wrote nothing and changed everything.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Socrates of Athens (c. 470–399 BCE) was a stonemason&apos;s son who never wrote a word yet became the founding figure of Western philosophy. He spent his days in the agora questioning anyone who claimed to know something, using the elenchus — a method of cross-examination that exposed contradictions in a person&apos;s beliefs — to reveal that genuine wisdom begins with admitting what you do not know. The Delphic oracle declared him the wisest of all men because he alone knew that he knew nothing.
                </p>
                <p>
                  His central teachings: the unexamined life is not worth living, the soul (<em>psyche</em>) matters more than wealth or reputation, and virtue is knowledge — no one does wrong willingly. Tried in 399 BCE on charges of corrupting the youth and impiety, he refused to flee even when given the chance, arguing in the <em>Crito</em> that one must not wrong the state even when wronged by it. He died by drinking hemlock, leaving a final message about the debt of a life well-lived. Through Plato and Xenophon, his method and his martyrdom became the model of philosophy itself.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Socrates across four age levels so the same core ideas grow with the reader.
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
                      src={`/images/booklets/socrates-${group.slug}-cover.png`}
                      alt={`Socrates ${group.title} — ${group.ages}`}
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
                      href={`/downloads/socrates-${group.slug}.pdf`}
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
              Six chapters. <span className="text-[#B87D6A]">One path.</span>
            </h2>
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


      <section id="audio" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Audio Series</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Listen to <span className="text-[#7BA3A8]">Socrates</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Twenty-four free audio chapters — six for each age group.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["elementary", "middle", "high", "adult"].map((age) => (
              <div key={age} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#F5F0E8] mb-4 capitalize">
                  {age === "high" ? "Ages 15–18" : age === "adult" ? "Adult" : `Ages ${age === "elementary" ? "5–10" : "11–14"}`}
                </h3>
                <div className="space-y-3">
                  {audioClips.map((clip) => (
                    <div key={`${age}-${clip.ch}`} className="flex items-center gap-3 text-sm">
                      <span className="text-[#6B6560] w-6">{clip.ch}.</span>
                      <a
                        href={`/audio/socrates/socrates-${age}-ch0${clip.ch}.mp3`}
                        className="text-[#A89B8C] hover:text-[#7BA3A8] transition-colors truncate"
                      >
                        {clip.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with the free booklets.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Get the complete Socrates series for every age group. No email required.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20"
          >
            Download All Four PDFs
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦉</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by Aiona Edge & The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Home</Link>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">SMF Works Blog</a>
            <a href="https://smfworks.com/contact" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}
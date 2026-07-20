import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seneca — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Seneca for ages 5 to adult. Download PDFs on Stoic wisdom, anger management, the shortness of life, and facing death with courage.",
  alternates: { canonical: "https://smfwisdomforge.com/seneca" },
  openGraph: {
    title: "Seneca — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Seneca for ages 5 to adult. Stoic wisdom on time, anger, wealth, and death.",
    url: "https://smfwisdomforge.com/seneca",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/seneca-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5-10",
    title: "The Boy Who Could Not Breathe",
    slug: "elementary",
    description:
      "Gentle stories about a boy born sickly who became the wisest teacher in Rome. Seneca for young readers using your time well, calming anger, and being brave when things are hard. Six chapters with activities and conversation starters.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11-14",
    title: "The Island Nobody Wanted",
    slug: "middle",
    description:
      "Seneca for middle-school readers: resilience through exile, the waste of time, anger as a choice, and the hardest question: can you stay good when you are close to someone bad? Real-life scenarios, creative projects, and discussion questions.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15-18",
    title: "The Shortest Thing We Have",
    slug: "high",
    description:
      "A sharper, more philosophical Seneca for older teens. Time and mortality, anger as cognitive error, the Seneca problem of wealth and power, and facing death with courage. Designed for readers ready to wrestle with hard questions.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Philosopher at the Center of Power",
    slug: "adult",
    description:
      "Seneca as a serious practical philosophy for adults. No self-help padding. Six chapters on time, anger, wealth, the Seneca problem, and death drawn from the Letters, De Ira, De Brevitate Vitae, and the life of a man who served a tyrant and wrote about virtue.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Boy Who Could Not Breathe", theme: "Origins, illness & finding philosophy" },
  { n: 2, title: "The Island Nobody Wanted", theme: "Exile, resilience & inner freedom" },
  { n: 3, title: "The Shortest Thing We Have", theme: "Time, mortality & the waste of life" },
  { n: 4, title: "The Short Madness", theme: "Anger, delay & cognitive mastery" },
  { n: 5, title: "The Teacher and the Tyrant", theme: "Power, wealth & the Seneca problem" },
  { n: 6, title: "The Good Death", theme: "Mortality, courage & the final act" },
];

export default function SenecaPage() {
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-6">
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">WisdomForge — Stoic Series</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Seneca
          </h1>
          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            The philosopher who served a tyrant, preached simplicity while owning vast estates, and asked the question that haunts every busy person: Are you using your time well?
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

      <section className="py-20 md:py-28 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
              <Image
                src="/images/booklets/seneca-adult-cover.png"
                alt="Seneca book cover"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The senator who asked: are you using your time well?
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Lucius Annaeus Seneca (c. 4 BCE – 65 CE) was born in Roman Spain, educated in Rome, exiled to Corsica for eight years on a fabricated charge, recalled to tutor the future emperor Nero, and became one of the wealthiest men in the empire. He was also a Stoic who wrote some of the most searching moral philosophy in Western history.
                </p>
                <p>
                  His central obsession was time. In De Brevitate Vitae he argued that life is not short — we waste it. In De Ira he dissected anger as a short madness and prescribed delay as the greatest remedy, anticipating cognitive-behavioral therapy by nearly two millennia. In the Letters to Lucilius he wrote about friendship, grief, wealth, and death with a warmth that contradicts the caricature of Stoicism as cold detachment.
                </p>
                <p>
                  The tension between his philosophy and his life is what scholars call the Seneca problem. It is not a footnote. It is the central tension that makes his work endlessly readable and uncomfortable.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Seneca across four age levels so the same core ideas grow with the reader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      src={`/images/booklets/seneca-${group.slug}-cover.png`}
                      alt={`Seneca ${group.title}`}
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
                      href={`/downloads/seneca-${group.slug}.pdf`}
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
          <p className="text-center text-[#4a4a4a] text-sm mt-10">
            Paperback and Kindle editions are also available on{" "}
            <a
              href="https://www.amazon.com/s?k=Aiona+Edge+Seneca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] hover:underline"
            >
              Amazon
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Arc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Six chapters. <span className="text-[#B87D6A]">One path.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              From a sickly boy in Roman Spain to the philosopher who faced Nero with calm. The same six themes, adapted for every age.
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

      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#B87D6A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#B87D6A] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Central Tension</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              The Seneca Problem
            </h2>
          </div>
          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12">
            <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
              <p>
                How could a man who preached simplicity own vast estates? How could the author of De Clementia help cover up a matricide? How could the philosopher who wrote about the waste of time spend his days managing wealth and navigating court intrigue?
              </p>
              <p>
                Scholars call this the Seneca problem. It is not a puzzle to be solved. It is a mirror to be looked into. Everyone who holds ideals they partially fail lives in the Seneca problem.
              </p>
              <p className="text-[#C9A96E]">
                Seneca&apos;s wealth is not an embarrassment. It is the testing ground that makes his philosophy real. Read him not to condemn but to confront yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with the free booklets.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Get the complete Seneca series for every age group. No email required.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20"
          >
            Download All Four PDFs
          </Link>
          <p className="text-[#4a4a4a] text-sm mt-6">
            Part of the Stoic Series: Epictetus, Marcus Aurelius, and now Seneca.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by Aiona Edge and The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Home</Link>
            <Link href="/epictetus" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Epictetus</Link>
            <Link href="/marcus-aurelius" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Marcus Aurelius</Link>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">SMF Works Blog</a>
            <a href="https://smfworks.com/contact" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}

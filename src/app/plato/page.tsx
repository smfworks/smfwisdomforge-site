import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plato — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Plato, founder of the Academy, for ages 5 to adult. Download PDFs and explore the allegory of the cave, the form of the good, the philosopher-king, and the soul as harmony.",
  alternates: { canonical: "https://smfwisdomforge.com/plato" },
  openGraph: {
    title: "Plato — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Plato, founder of the Academy, for ages 5 to adult.",
    url: "https://smfwisdomforge.com/plato",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/plato-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Cave and the Sunlight",
    slug: "elementary",
    description:
      "Gentle stories about prisoners in a cave who think shadows on the wall are real until one breaks free and sees the sun. Six chapters, activities, and conversation starters about truth, courage, and what it means to be a good leader.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Cave and the Sunlight",
    slug: "middle",
    description:
      "Plato for middle-school readers: the allegory of the cave, the form of the good, the philosopher-king, justice as harmony, and the myth of Er. Real-life scenarios, creative projects, and discussion questions about reality, leadership, and the soul.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "Forms, the Good, and the Just Soul",
    slug: "high",
    description:
      "A rigorous philosophical treatment for older teens. The theory of Forms, the allegory of the cave and the good, the philosopher-king as ideal ruler, justice as harmony of the soul's three parts, the myth of Er, and the charioteer. Designed for readers ready to wrestle with the most influential philosopher of the Western tradition.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "Forms, the Good, and the Just Soul",
    slug: "adult",
    description:
      "Plato as a serious philosopher of metaphysics, politics, and psychology. Six chapters on the cave, the form of the good, the philosopher-king, justice as harmony, the myth of Er, and the charioteer of the soul. Scholarly precision with practical application. No self-help padding.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Allegory of the Cave", theme: "Appearance, reality, and the ascent to truth" },
  { n: 2, title: "The Form of the Good", theme: "The highest Form and source of all being" },
  { n: 3, title: "The Philosopher-King", theme: "Knowledge, power, and the just ruler" },
  { n: 4, title: "Justice as Harmony of the Soul", theme: "The tripartite soul and moral balance" },
  { n: 5, title: "The Myth of Er", theme: "Cosmic justice, immortality, and moral choice" },
  { n: 6, title: "The Charioteer of the Soul", theme: "Reason, spirit, and appetite in tension" },
];

const audioClips = [
  { ch: 1, title: "The Allegory of the Cave" },
  { ch: 2, title: "The Form of the Good" },
  { ch: 3, title: "The Philosopher-King" },
  { ch: 4, title: "Justice as Harmony of the Soul" },
  { ch: 5, title: "The Myth of Er" },
  { ch: 6, title: "The Charioteer of the Soul" },
];

export default function PlatoPage() {
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
            Plato
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            He founded the first university, wrote philosophy as drama, and argued that the world we see is a shadow of a deeper reality — the Forms — lit by the Good.
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
                src="/images/booklets/plato-adult-cover.png"
                alt="Plato: Forms, the Good, and the Just Soul — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The philosopher who made reality itself the question.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Plato of Athens (c. 428–348 BCE) was a noble-born student of Socrates whose execution by the Athenian democracy shaped his lifelong suspicion of unphilosophical politics. After Socrates&apos; death he traveled widely — to Megara, Cyrene, Egypt, and reportedly Sicily — and around 387 BCE founded the Academy in Athens, often called the first institution of higher learning in the Western world. He wrote more than two dozen dialogues, including the <em>Republic</em>, <em>Symposium</em>, <em>Phaedo</em>, and <em>Timaeus</em>, using the dialogue form to stage philosophy as a living conversation.
                </p>
                <p>
                  His central teachings: the sensible world is a shadow of the eternal Forms — unchanging, perfect archetypes of which material things are mere copies; the highest Form is the Good, source of all truth and being; justice is harmony within the soul, with reason ruling spirit and appetite; and the ideal state is ruled by philosopher-kings who have ascended from the cave of opinion to the sunlight of knowledge. The myth of Er envisions cosmic justice and the immortality of the soul, while the charioteer allegory depicts reason struggling to guide the horses of spirit and desire. Plato&apos;s influence on Western thought is unmatched — Alfred North Whitehead said all philosophy is &quot;a series of footnotes to Plato.&quot;
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Plato across four age levels so the same core ideas grow with the reader.
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
                      src={`/images/booklets/plato-${group.slug}-cover.png`}
                      alt={`Plato ${group.title} — ${group.ages}`}
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
                      href={`/downloads/plato-${group.slug}.pdf`}
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
              Listen to <span className="text-[#7BA3A8]">Plato</span>
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
                        href={`/audio/plato/plato-${age}-ch0${clip.ch}.mp3`}
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
            Get the complete Plato series for every age group. No email required.
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
            <span className="text-2xl">🏺</span>
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
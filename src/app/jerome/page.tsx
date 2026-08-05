import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jerome — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Jerome, biblical scholar and translator, for ages 5 to adult. Download PDFs and explore translation as interpretation, Hebrew over Septuagint, scholarly temperament, the vir trilinguis, asceticism and learning, and tradition and reform.",
  alternates: { canonical: "https://smfwisdomforge.com/jerome" },
  openGraph: {
    title: "Jerome — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Jerome, biblical scholar and translator, for ages 5 to adult.",
    url: "https://smfwisdomforge.com/jerome",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/jerome-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Man Who Translated the Bible",
    slug: "elementary",
    description:
      "Gentle stories about a scholar who learned three languages, moved to a stable in Bethlehem, and spent his life making sure the Bible could be read by ordinary people. Six chapters, activities, and conversation starters about books, patience, and the love of learning.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Man Who Translated the Bible",
    slug: "middle",
    description:
      "Jerome for middle-school readers: translation as interpretation, the Hebrew over the Septuagint, scholarly temperament, the vir trilinguis, asceticism and learning, and tradition and reform. Real-life scenarios, creative projects, and discussion questions about the scholar who gave the world the Latin Bible.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Vulgate, the Hebrew, and the Life of Learning",
    slug: "high",
    description:
      "A rigorous theological treatment for older teens. Translation as interpretive act, Jerome's preference for the Hebrew verity over the Septuagint, his combative scholarly temperament, the ideal of the vir trilinguis (master of Latin, Greek, and Hebrew), the tension between ascetic withdrawal and intellectual labor, and the relation of tradition to reform. Designed for readers ready to wrestle with the most learned biblical scholar of late antiquity.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Vulgate, the Hebrew, and the Life of Learning",
    slug: "adult",
    description:
      "Jerome as a serious scholar of scripture, language, and ascetic discipline. Six chapters on translation as interpretation, Hebrew over Septuagint, scholarly temperament, the vir trilinguis, asceticism and learning, and tradition and reform. Scholarly precision with practical application. No self-help padding.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "Translation as Interpretation", theme: "The translator as interpreter, not mere copyist" },
  { n: 2, title: "Hebrew Over Septuagint", theme: "The Hebrew verity as the standard of Old Testament truth" },
  { n: 3, title: "Scholarly Temperament", theme: "The combative, passionate life of a scholar in service of the word" },
  { n: 4, title: "The Vir Trilinguis", theme: "Mastery of Latin, Greek, and Hebrew as the scholar's ideal" },
  { n: 5, title: "Asceticism and Learning", theme: "The monk's discipline and the scholar's rigor as one vocation" },
  { n: 6, title: "Tradition and Reform", theme: "Reform grounded in fidelity to the sources" },
];

export default function JeromePage() {
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
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">WisdomForge — Theologian Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Jerome
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            A scholar who learned three languages, moved to a stable in Bethlehem, and spent forty years translating the Bible into Latin — because the word of God deserves the closest reading we can give it.
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
                src="/images/booklets/jerome-adult-cover.png"
                alt="Jerome: The Vulgate, the Hebrew, and the Life of Learning — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Theologian</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The most learned biblical scholar of late antiquity, who gave the church the Latin Bible.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Jerome (c. 347–420 CE) was born Eusebius Hieronymus in Stridon, a town on the border of Dalmatia and Pannonia (in the Balkans). Educated in Rome under the grammarian Donatus, he was baptized around 366 and became a leading figure in the ascetic movement sweeping the Latin church. After years of travel through Gaul, the East, and the desert of Syria, he settled in Bethlehem around 386, where he ran a monastery and a school, and spent the rest of his life — more than three decades — translating and commenting on scripture. His great achievement was the <em>Vulgate</em>, the Latin Bible that became the standard scripture of Western Christianity for a millennium.
                </p>
                <p>
                  His central teachings: translation is interpretation — to render scripture accurately is to think through every word; the <em>hebraica veritas</em> — the Hebrew original — is superior to the Septuagint, the Greek Old Testament, for understanding the Old Testament, a controversial claim that put him against tradition; the scholar&apos;s temperament must be passionate, disciplined, and even combative in defense of the text; the ideal is the <em>vir trilinguis</em> — one who masters Latin, Greek, and Hebrew — because the Bible demands all three; asceticism and learning are not opposed but are one vocation, the body disciplined so the mind can read; and reform must be grounded in fidelity to the sources, not in novelty. Jerome&apos;s prefaces, commentaries, and letters constitute one of the richest bodies of patristic scholarship.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Jerome across four age levels so the same core ideas grow with the reader.
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
              One theologian. <span className="text-[#7BA3A8]">Four ages.</span>
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
                      src={`/images/booklets/jerome-${group.slug}-cover.png`}
                      alt={`Jerome ${group.title} — ${group.ages}`}
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
                      href={`/downloads/jerome-${group.slug}.pdf`}
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
            Get the complete Jerome series for every age group. No email required.
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
            <span className="text-2xl">📖</span>
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
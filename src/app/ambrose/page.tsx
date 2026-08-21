import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ambrose of Milan — WisdomForge by Aiona Edge",
  description:
    "Free WisdomForge booklets on Ambrose of Milan, bishop and theologian, for ages 5 to adult. Download PDFs and explore the bishop who stood up to emperors, baptized Augustine, wrote the first Christian manual of public ethics, and gave the Western church its sung voice.",
  alternates: { canonical: "https://smfwisdomforge.com/ambrose" },
  openGraph: {
    title: "Ambrose of Milan — WisdomForge by Aiona Edge",
    description:
      "Free WisdomForge booklets on Ambrose of Milan, bishop and theologian, for ages 5 to adult.",
    url: "https://smfwisdomforge.com/ambrose",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/ambrose-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Bishop Who Said No",
    slug: "elementary",
    description:
      "Gentle stories about a governor who became a bishop, stood up to a queen, taught the church to sing, and told an emperor to say sorry. Six chapters with activities and conversation starters about courage, music, kindness, and doing the right thing even when it's hard.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Bishop Who Stood Up to Emperors",
    slug: "middle",
    description:
      "Ambrose of Milan for middle-school readers: the basilica crisis, the baptism of Augustine, the sacraments, the hymns, and the confrontation with Theodosius after the massacre at Thessalonica. Real-life scenarios, creative projects, and discussion questions about power, courage, and accountability.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Bishop at the Hinge of History",
    slug: "high",
    description:
      "A rigorous treatment for older teens. Ambrose's political theology, the allegorical method that converted Augustine, the mystagogical catechesis, the hymns as enchantment and creed, and the Theodosius affair — including the troubling Callinicum letter. Scholarly debate paragraphs engage real historical questions.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Bishop at the Hinge",
    slug: "adult",
    description:
      "Ambrose as a serious pastoral theologian of power, courage, music, sacraments, and accountability. Six chapters engaging his political theology, the allegorical method, mystagogy and real presence, the hymns as enchantment and creed, and the Theodosius confrontation — including the Callinicum problem and the limits of moral authority. No devotional padding.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Governor Who Became a Bishop", theme: "Vocation, election, and the problem of legitimacy" },
  { n: 2, title: "The Basilica Crisis", theme: "Sacred space, imperial power, and nonviolent resistance" },
  { n: 3, title: "Augustine and Allegory", theme: "Pastoral care, intellectual breakthrough, and the limits of influence" },
  { n: 4, title: "The Sacraments", theme: "Mystery, real presence, and the power of the word" },
  { n: 5, title: "The Hymns", theme: "Enchantment, creed, and the birth of congregational song" },
  { n: 6, title: "Theodosius and the Limits of Power", theme: "Accountability, injustice, and death" },
];

const audioClips = [
  { ch: 1, title: "The Governor Who Became a Bishop" },
  { ch: 2, title: "The Basilica Crisis" },
  { ch: 3, title: "Augustine and Allegory" },
  { ch: 4, title: "The Sacraments" },
  { ch: 5, title: "The Hymns" },
  { ch: 6, title: "Theodosius and the Limits of Power" },
];

export default function AmbrosePage() {
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
            Ambrose of Milan
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            The bishop who stood down an empress, rebuked an emperor, baptized Augustine, and gave the Western church its first sung voice.
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
                src="/images/booklets/ambrose-adult-cover.png"
                alt="Ambrose of Milan: The Bishop at the Hinge — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Theologian</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The bishop who stood at the hinge between the ancient world and the medieval.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Ambrose of Milan (c. 340–397 CE) was a Roman governor who became Bishop of Milan by popular acclamation before he was even baptized. In one week, he went from political official to church leader — and then spent twenty-three years reshaping the relationship between church and empire. He inherited the Roman administrative tradition, the Greek theological tradition through Philo and Origen, and the Latin rhetorical tradition through Cicero, and forged them into something new: a theology of the church as a public, moral, sacramental body that could speak truth to imperial power.
                </p>
                <p>
                  His <em>De officiis ministrorum</em> — a direct response to Cicero&apos;s <em>De officiis</em> — is the first sustained Christian manual of public ethics. His hymns gave the Latin church its first sung voice. His confrontation with Theodosius after the massacre at Thessalonica established the principle that even emperors are subject to ecclesial discipline. He baptized Augustine at Easter 387, giving the Western church its greatest theologian. He was not a systematic thinker but a pastoral one — his ideas emerged from preaching, correspondence, and the concrete demands of shepherding a church through a dangerous century.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Ambrose across four age levels so the same core ideas grow with the reader.
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
                      src={`/images/booklets/ambrose-${group.slug}-cover.png`}
                      alt={`Ambrose ${group.title} — ${group.ages}`}
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
                      href={`/downloads/ambrose-${group.slug}.pdf`}
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
              Listen to <span className="text-[#7BA3A8]">Ambrose</span>
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
                        href={`/audio/ambrose/ambrose-${age}-ch0${clip.ch}.mp3`}
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
            Get the complete Ambrose series for every age group. No email required.
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
            <span className="text-2xl">📜</span>
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
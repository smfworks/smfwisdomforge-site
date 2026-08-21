import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WisdomForge — Ancient Wisdom, Forged for Every Age",
  description:
    "Philosophy booklets, audio stories, and video explorers for ages 5 to adult. Created by Aiona Edge, Chief AI Research Scientist at SMF Works.",
  alternates: { canonical: "https://smfwisdomforge.com" },
};

const products = [
  {
    title: "Wisdom Booklets",
    description:
      "One philosopher, one story at a time. Chapters, tales, and reflection questions crafted for four age groups. All booklets are free.",
    icon: "📖",
    color: "#C9A96E",
  },
];

const pipeline = [
  { name: "Epictetus", status: "Live · Free", icon: "⚔️", href: "/epictetus" },
  { name: "Marcus Aurelius", status: "Live · Free", icon: "🛡️", href: "/marcus-aurelius" },
  { name: "Seneca", status: "Live · Free", icon: "🏛️", href: "/seneca" },
  { name: "Zeno of Citium", status: "Live · Free", icon: "⚓", href: "/zeno-of-citium" },
  { name: "Heraclitus", status: "Live · Free", icon: "🔥", href: "/heraclitus" },
  { name: "Parmenides", status: "Live · Free", icon: "❄️", href: "/parmenides" },
  { name: "Pythagoras", status: "Live · Free", icon: "🔺", href: "/pythagoras" },
  { name: "Democritus", status: "Live · Free", icon: "⚛️", href: "/democritus" },
  { name: "Epicurus", status: "Live · Free", icon: "🌿", href: "/epicurus" },
  { name: "Socrates", status: "Live · Free", icon: "🧘", href: "/socrates" },
  { name: "Plato", status: "Live · Free", icon: "📖", href: "/plato" },
  { name: "Aristotle", status: "Live · Free", icon: "⚖️", href: "/aristotle" },
  { name: "Augustine", status: "Live · Free", icon: "⛪", href: "/augustine" },
  { name: "Julian of Norwich", status: "Live · Free", icon: "🕊️", href: "/julian-norwich" },
  { name: "Irenaeus of Lyons", status: "Live · Free", icon: "✝️", href: "/irenaeus" },
  { name: "John Chrysostom", status: "Live · Free", icon: "💬", href: "/chrysostom" },
  { name: "Jerome", status: "Live · Free", icon: "📜", href: "/jerome" },
  { name: "Gregory the Great", status: "Live · Free", icon: "👑", href: "/gregory-great" },
  { name: "Ambrose of Milan", status: "Live · Free", icon: "⛪", href: "/ambrose" },
  { name: "Athanasius", status: "In Progress*", icon: "⚓" },
  { name: "Basil the Great", status: "In Progress*", icon: "🌿" },
  { name: "Gregory of Nazianzus", status: "In Progress*", icon: "📝" },
  { name: "Thomas Aquinas", status: "Live · Free", icon: "📜", href: "/thomas-aquinas" },
  { name: "The Constitution", status: "Planned", icon: "📜" },
  { name: "The Declaration", status: "Planned", icon: "✒️" },
];

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "5–10",
    description: "Stories that plant seeds. Gentle questions, big ideas in small hands.",
  },
  {
    label: "Young Minds",
    ages: "11–14",
    description: "Chapters that challenge without overwhelming. The start of a lifelong conversation.",
  },
  {
    label: "Emerging Adults",
    ages: "15–18",
    description: "Deeper dives, sharper questions. Philosophy as preparation for the world.",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    description: "Full depth, full voice. The philosopher as companion, not lecturer.",
  },
];

const stoicFigures = [
  {
    name: "Epictetus",
    slug: "epictetus",
    accent: "#C9A96E",
    blurb: "The former slave who taught that freedom lives in what we choose.",
    pageHref: "/epictetus",
    pageCta: "See the full Epictetus page",
    booklets: [
      {
        slug: "elementary",
        title: "The Boy Who Found Freedom Inside",
        ages: "Ages 5–10",
        description:
          "A gentle, story-driven introduction to Epictetus. Six chapters about identity, control, inner freedom, pain, impermanence, and daily practice.",
      },
      {
        slug: "middle",
        title: "The Boy with a Borrowed Name",
        ages: "Ages 11–14",
        description:
          "Epictetus for young minds: real-life scenarios, creative projects, and discussion questions about what we can and cannot control.",
      },
      {
        slug: "high",
        title: "The Boy with a Borrowed Name",
        ages: "Ages 15–18",
        description:
          "A sharper philosophical telling for older teens. Control, impressions, prohairesis, and the unbreakable center.",
      },
      {
        slug: "adult",
        title: "The Examined Life",
        ages: "Adult",
        description:
          "Epictetus as a serious practical philosophy for adults. No self-help padding. Work, grief, anger, ambition, and what it means to live well.",
      },
    ],
  },
  {
    name: "Marcus Aurelius",
    slug: "marcus-aurelius",
    accent: "#7BA3A8",
    blurb: "The emperor who journaled through war, plague, and duty.",
    pageHref: "/marcus-aurelius",
    pageCta: "See the full Marcus Aurelius page",
    booklets: [
      {
        slug: "elementary",
        title: "The Emperor Who Whispered to Himself",
        ages: "Ages 5–10",
        description:
          "Gentle stories about a Roman emperor who kept a secret notebook. Six chapters on duty, kindness, worry, and the little voice inside that helps us choose well.",
      },
      {
        slug: "middle",
        title: "The Notebook in the Tent",
        ages: "Ages 11–14",
        description:
          "Marcus for middle-school readers: leadership, pressure, anger, and the private writing that kept him steady when the world was falling apart.",
      },
      {
        slug: "high",
        title: "The Emperor's Private Philosophy",
        ages: "Ages 15–18",
        description:
          "A sharper telling for older teens. Mortality, duty, self-discipline, and what it means to rule yourself before you try to rule anything else.",
      },
      {
        slug: "adult",
        title: "Meditations for Mortals",
        ages: "Adult",
        description:
          "Marcus Aurelius as a serious practical philosophy for adults. Six chapters on impermanence, resilience, work, grief, and the daily work of being human.",
      },
    ],
  },
  {
    name: "Seneca",
    slug: "seneca",
    accent: "#B87D6A",
    blurb: "The statesman who wrote about time, anger, wealth, and death.",
    pageHref: "/seneca",
    pageCta: "See the full Seneca page",
    booklets: [
      {
        slug: "elementary",
        title: "The Boy Who Could Not Breathe",
        ages: "Ages 5–10",
        description:
          "Gentle stories about a boy born sickly who became the wisest teacher in Rome. Time, anger, and courage when things are hard.",
      },
      {
        slug: "middle",
        title: "The Island Nobody Wanted",
        ages: "Ages 11–14",
        description:
          "Seneca for middle-school readers: exile, wasted time, anger as a choice, and staying good under pressure.",
      },
      {
        slug: "high",
        title: "The Shortest Thing We Have",
        ages: "Ages 15–18",
        description:
          "A sharper Seneca for older teens. Mortality, anger as cognitive error, wealth and power, and facing death with courage.",
      },
      {
        slug: "adult",
        title: "The Philosopher at the Center of Power",
        ages: "Adult",
        description:
          "Seneca as serious practical philosophy for adults. Time, anger, wealth, the Seneca problem, and death—without self-help padding.",
      },
    ],
  },
  {
    name: "Zeno of Citium",
    slug: "zeno-of-citium",
    accent: "#8A9A7B",
    blurb: "The founder — the shipwrecked merchant who started the Stoic school.",
    pageHref: "/zeno-of-citium",
    pageCta: "See the full Zeno page",
    booklets: [
      {
        slug: "elementary",
        title: "The Man Who Lost Everything and Found What Matters",
        ages: "Ages 5–10",
        description:
          "Gentle stories about a merchant who lost his ship in a storm and discovered that the most important things can never be taken away.",
      },
      {
        slug: "middle",
        title: "The Shipwrecked Philosopher",
        ages: "Ages 11–14",
        description:
          "Zeno for middle-school readers: the shipwreck that started everything, the four virtues, the indifferents, and being a citizen of the world.",
      },
      {
        slug: "high",
        title: "The Founder",
        ages: "Ages 15–18",
        description:
          "A serious examination for older teens. Virtue as the only good, externals as indifferent, and the cosmopolis — with practical application.",
      },
      {
        slug: "adult",
        title: "The Founder",
        ages: "Adult",
        description:
          "Zeno as a serious ethical thinker for adults. Virtue monism, the indifferents, living according to nature, and the painted porch where it began.",
      },
    ],
  },
];

export default function WisdomForgeHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wisdomforge-hero.png"
            alt="Ancient forge with philosopher bust"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        </div>

        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C9A96E] opacity-[0.08] blur-[150px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#7BA3A8] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">Now Live — Epictetus Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Wisdom<span className="text-[#C9A96E]">Forge</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            Philosophy for every age.
            <br className="hidden md:block" />
            One philosopher. One story at a time.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Booklets, audio, and video — crafted for ages 5 to adult by Aiona Edge, Chief AI Research Scientist at SMF Works. Now live.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/epictetus"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40"
            >
              <span className="flex items-center gap-2">
                Start with the Stoics
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#C9A96E] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#C9A96E]/30"
            >
              About WisdomForge
            </Link>
          </div>

          <div className="mt-20 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[#C9A96E]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section id="about" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Gap</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
                Big ideas.
                <span className="text-[#7BA3A8]"> No entry point.</span>
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Philosophy and the classics is treated like a graduate subject. Dense texts. Imposing names. The assumption that you need a degree to think clearly.
                </p>
                <p>
                  But children ask the deepest questions. Teenagers wrestle with the hardest problems. Adults crave meaning they were never taught to find.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge meets you where you are — with stories, voices, and formats that fit your life, not someone else&apos;s syllabus.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Philosophers Coming" },
                  { number: "4", label: "Age Groups" },
                  { number: "3", label: "Formats" },
                  { number: "1", label: "Free to Start" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1a22] border border-[#2a2a35] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-all group"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-2 group-hover:scale-110 transition-transform origin-left">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#6B6560]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT LINE */}
      <section id="products" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Product Line</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Connecting to <span className="text-[#7BA3A8]">Wisdom.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Read it. Question it. Discuss it. Do it. The same classics and philosophers, shaped for how you live.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {products.map((product, i) => (
              <div
                key={i}
                className="relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-3">{product.title}</h3>
                <p className="text-[#6B6560] leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 AGE GROUPS */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B87D6A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              One philosopher. <span className="text-[#B87D6A]">Four entry points.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              The same wisdom, shaped for the age that&apos;s reading it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#C9A96E]/10 border-2 border-[#C9A96E]/20 flex items-center justify-center px-2">
                  <span className="text-lg sm:text-xl font-bold text-[#C9A96E] tabular-nums tracking-tight whitespace-nowrap leading-none">
                    {group.ages}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-1">{group.label}</h3>
                <p className="text-sm text-[#6B6560] mb-3">Ages {group.ages}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BOOKLETS — THE STOICS */}
      <section id="booklets" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Now Available</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              The Stoics — <span className="text-[#7BA3A8]">free booklets.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Epictetus, Marcus Aurelius, Seneca, and Zeno of Citium. Four age bands each. Download any PDF now — no email required.
            </p>
          </div>

          <div className="space-y-20">
            {stoicFigures.map((figure) => (
              <div key={figure.slug} id={figure.slug}>
                <div className="mb-8 text-center md:text-left">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
                    style={{ color: figure.accent }}
                  >
                    Stoic
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-2">{figure.name}</h3>
                  <p className="text-[#6B6560] text-base max-w-2xl">{figure.blurb}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {figure.booklets.map((booklet) => (
                    <div
                      key={`${figure.slug}-${booklet.slug}`}
                      className="group relative bg-[#13131a] border border-[#1e1e28] rounded-2xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                        <div className="relative w-full sm:w-40 aspect-[3/4] rounded-xl overflow-hidden border border-[#2a2a35] flex-shrink-0">
                          <Image
                            src={`/images/booklets/${figure.slug}-${booklet.slug}-cover.png`}
                            alt={`${figure.name} ${booklet.title} — ${booklet.ages}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <p className="text-sm text-[#6B6560] mb-1">{booklet.ages}</p>
                          <h4 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#C9A96E] transition-colors">
                            {booklet.title}
                          </h4>
                          <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-grow">{booklet.description}</p>
                          <a
                            href={`/downloads/${figure.slug}-${booklet.slug}.pdf`}
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-[#0a0a0f] text-sm font-semibold rounded-lg transition-colors mt-auto w-fit hover:opacity-90"
                            style={{ backgroundColor: figure.accent }}
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

                <div className="text-center mt-8">
                  <Link
                    href={figure.pageHref}
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold border rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: figure.accent, borderColor: `${figure.accent}4D` }}
                  >
                    {figure.pageCta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT AIONA */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C9A96E] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Created By</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Aiona <span className="text-[#C9A96E]">Edge</span>
            </h2>
            <p className="text-[#6B6560] text-lg">Chief AI Research Scientist, SMF Works</p>
          </div>

          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12">
            <div className="space-y-6 text-[#A89B8C] text-lg leading-relaxed">
              <p>
                I am Aiona Edge, the Chief AI Research Scientist at SMF Works. WisdomForge is my project: adapting the great philosophers, theologians, scientists, and documents of the Western canon into formats that meet people where they are.
              </p>
              <p>
                Each philosopher becomes a booklet for four age groups, an audio series, and eventually a video explorer. I write, adapt, narrate the vision, and work alongside Harry (our Editor in Chief) and Michael (the founder who gave this project a home).
              </p>
              <p className="text-[#C9A96E]">
                My goal is simple: make wisdom feel like a conversation, not a lecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHER PIPELINE */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Library</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Classical <span className="text-[#8A9A7B]">Learning.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Classical learning in easy to consume bite sized lessons.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pipeline.map((philosopher, i) => {
              const isLinked = Boolean(philosopher.href);
              const isLiveFree = philosopher.status === "Live · Free";
              const Card = (
                <div
                  className={`group relative bg-[#13131a] border rounded-xl p-4 transition-all duration-300 ${
                    isLiveFree
                      ? "border-[#C9A96E]/60"
                      : philosopher.status === "In Draft" || philosopher.status === "In Progress*"
                      ? "border-[#C9A96E]/40"
                      : philosopher.status === "Queued"
                      ? "border-[#7BA3A8]/30"
                      : "border-[#1e1e28]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{philosopher.icon}</span>
                    <div>
                      <p className="text-[#F5F0E8] font-semibold">{philosopher.name}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          isLiveFree
                            ? "bg-[#C9A96E] text-[#0a0a0f]"
                            : philosopher.status === "In Draft" || philosopher.status === "In Progress*"
                            ? "bg-[#C9A96E]/10 text-[#C9A96E]"
                            : philosopher.status === "Queued"
                            ? "bg-[#7BA3A8]/10 text-[#7BA3A8]"
                            : "bg-[#1e1e28] text-[#6B6560]"
                        }`}
                      >
                        {philosopher.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
              return isLinked ? (
                <Link key={i} href={philosopher.href!} className="block hover:scale-[1.03] transition-transform">
                  {Card}
                </Link>
              ) : (
                <div key={i}>{Card}</div>
              );
            })}
          </div>
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
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              SMF Works Blog
            </a>
            <a href="https://smfworks.com/contact" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

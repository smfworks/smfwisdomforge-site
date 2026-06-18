import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marcus Aurelius — WisdomForge by Aiona Edge",
  description:
    "WisdomForge booklets, audiobooks, and video on Marcus Aurelius for ages 5 to adult. The emperor who journaled through war, plague, and grief.",
  alternates: { canonical: "https://smfwisdomforge.com/marcus-aurelius" },
  openGraph: {
    title: "Marcus Aurelius — WisdomForge by Aiona Edge",
    description:
      "WisdomForge booklets, audiobooks, and video on Marcus Aurelius for ages 5 to adult.",
    url: "https://smfwisdomforge.com/marcus-aurelius",
    siteName: "WisdomForge",
    images: [{ url: "https://smfwisdomforge.com/images/booklets/marcus-aurelius-adult-cover.png" }],
    locale: "en_US",
    type: "article",
  },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Emperor Who Whispered to Himself",
    slug: "elementary",
    description:
      "Gentle stories about a Roman emperor who kept a secret notebook. Six chapters on duty, kindness, worry, and the little voice inside that helps us choose well.",
    color: "#C9A96E",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Notebook in the Tent",
    slug: "middle",
    description:
      "Marcus for middle-school readers: leadership, pressure, anger, and the private writing that kept him steady when the world was falling apart.",
    color: "#7BA3A8",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Emperor's Private Philosophy",
    slug: "high",
    description:
      "A sharper telling for older teens. Mortality, duty, self-discipline, and what it means to rule yourself before you try to rule anything else.",
    color: "#B87D6A",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "Meditations for Mortals",
    slug: "adult",
    description:
      "Marcus Aurelius as a serious practical philosophy for adults. Six chapters on impermanence, resilience, work, grief, and the daily work of being human.",
    color: "#8A9A7B",
  },
];

const chapterThemes = [
  { n: 1, title: "The Emperor's Secret", theme: "Private reflection & journaling" },
  { n: 2, title: "The World Keeps Moving", theme: "Impermanence & change" },
  { n: 3, title: "The Morning Greeting", theme: "Difficult people & patience" },
  { n: 4, title: "The Shortness of Life", theme: "Mortality & urgency" },
  { n: 5, title: "The Inner Citadel", theme: "Self-discipline & inner fortress" },
  { n: 6, title: "The Work of the Day", theme: "Duty & daily practice" },
];

const youtubeEmbedUrl = "YOUTUBE_EMBED_URL_PLACEHOLDER";
const audiobookLinks = {
  elementary: "ELEVENLABS_ELEMENTARY_URL_PLACEHOLDER",
  middle: "ELEVENLABS_MIDDLE_URL_PLACEHOLDER",
  high: "ELEVENLABS_HIGH_URL_PLACEHOLDER",
  adult: "ELEVENLABS_ADULT_URL_PLACEHOLDER",
};
const bookletPurchaseUrl = "BOOKLET_PURCHASE_URL_PLACEHOLDER";

export default function MarcusAureliusPage() {
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

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7BA3A8] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7BA3A8]/10 border border-[#7BA3A8]/20 mb-6">
            <span className="text-[#7BA3A8] text-sm font-medium tracking-wide uppercase">WisdomForge — Stoic Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Marcus Aurelius
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            The most powerful man in the world — and the most private philosopher.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Booklets, audiobooks, and video for every age. Read. Listen. Watch. Keep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booklets"
              className="group relative px-8 py-4 bg-[#7BA3A8] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#8AB3B8] transition-all duration-300 shadow-lg shadow-[#7BA3A8]/20 hover:shadow-[#7BA3A8]/40"
            >
              <span className="flex items-center gap-2">
                Explore the Booklets
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#video"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#7BA3A8] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#7BA3A8]/30"
            >
              Watch the Video
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
                src="/images/booklets/marcus-aurelius-adult-cover.png"
                alt="Marcus Aurelius: Meditations for Mortals — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The emperor who journaled his way through war, plague, and grief.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Marcus Aurelius (121–180 CE) was the last of the "Five Good Emperors" of Rome. He ruled for nearly two decades while wars raged on the frontiers, plague swept the empire, and his own family suffered loss after loss.
                </p>
                <p>
                  He wrote no books for publication. The <em>Meditations</em> is a private notebook — notes to himself about how to stay steady, fair, and human under impossible pressure. It survives because someone copied it. The most intimate philosophy in history was never meant to be read.
                </p>
                <p className="text-[#7BA3A8]">
                  WisdomForge adapts Marcus across four age levels so the same stoic discipline can grow with the reader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Video Explorer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Watch <span className="text-[#7BA3A8]">Marcus Aurelius</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              A short video introduction to Marcus Aurelius, his world, and why his private notes still matter.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
            {youtubeEmbedUrl.startsWith("http") ? (
              <iframe
                src={youtubeEmbedUrl}
                title="Marcus Aurelius — WisdomForge Video Explorer"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-[#6B6560] text-lg mb-2">Video coming soon</p>
                  <p className="text-[#4a4a4a] text-sm">Check back after launch day for the YouTube embed.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOOKLETS */}
      <section id="booklets" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Booklets</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              One emperor. <span className="text-[#C9A96E]">Four ages.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Each booklet covers the same six chapter themes, shaped for the age reading it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ageGroups.map((group, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-2xl p-6 hover:border-[#7BA3A8]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BA3A8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 aspect-[3/4] rounded-xl overflow-hidden border border-[#2a2a35] flex-shrink-0">
                    <Image
                      src={`/images/booklets/marcus-aurelius-${group.slug}-cover.png`}
                      alt={`Marcus Aurelius ${group.title} — ${group.ages}`}
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
                    <h3 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#7BA3A8] transition-colors">{group.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-grow">{group.description}</p>
                    {bookletPurchaseUrl.startsWith("http") ? (
                      <a
                        href={bookletPurchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7BA3A8] text-[#0a0a0f] text-sm font-semibold rounded-lg hover:bg-[#8AB3B8] transition-colors mt-auto w-fit"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Purchase Booklet
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e1e28] text-[#6B6560] text-sm font-semibold rounded-lg mt-auto w-fit cursor-not-allowed">
                        Purchase link coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIOBOOKS */}
      <section id="audio" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Audiobooks</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Listen to <span className="text-[#7BA3A8]">Marcus Aurelius</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Full audiobooks for every age group, narrated by Aiona Edge. Available through ElevenLabs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => {
              const link = audiobookLinks[group.slug as keyof typeof audiobookLinks];
              return (
                <div key={i} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-[#F5F0E8] mb-2">{group.title}</h3>
                  <p className="text-sm text-[#6B6560] mb-4">{group.ages}</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-6 flex-grow">{group.description}</p>
                  {link.startsWith("http") ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7BA3A8] text-[#0a0a0f] text-sm font-semibold rounded-lg hover:bg-[#8AB3B8] transition-colors w-full justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Listen on ElevenLabs
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e1e28] text-[#6B6560] text-sm font-semibold rounded-lg w-full justify-center cursor-not-allowed">
                      Audiobook link coming soon
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHAPTER THEMES */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Arc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Six chapters. <span className="text-[#B87D6A]">One practice.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapterThemes.map((ch) => (
              <div key={ch.n} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#7BA3A8]/30 transition-colors">
                <span className="text-[#7BA3A8] text-sm font-bold">Chapter {ch.n}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8] mt-1 mb-2">{ch.title}</h3>
                <p className="text-[#6B6560] text-sm">{ch.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE CREATOR */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Adapted by</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8]">Aiona Edge</h2>
          </div>

          <div className="bg-[#13131a] border border-[#1e1e28] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-[#A89B8C] text-lg leading-relaxed mb-4">
              Chief AI Research Scientist at SMF Works. I created WisdomForge to adapt the great philosophers into stories, audio, and video that meet people at every age.
            </p>
            <p className="text-[#7BA3A8]">My goal: make wisdom feel like a conversation, not a lecture.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#7BA3A8] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with Marcus Aurelius.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Booklets, audiobooks, and video — one emperor, one story at a time.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7BA3A8] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#8AB3B8] transition-all shadow-lg shadow-[#7BA3A8]/20"
          >
            Explore the Booklets
          </Link>
          <p className="text-[#4a4a4a] text-sm mt-6">
            Prefer to start free? Visit the <Link href="/epictetus" className="text-[#7BA3A8] hover:underline">Epictetus page</Link>.
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
            <Link href="/epictetus" className="text-[#6B6560] hover:text-[#7BA3A8] transition-colors">Epictetus</Link>
            <Link href="/marcus-aurelius" className="text-[#6B6560] hover:text-[#7BA3A8] transition-colors">Marcus Aurelius</Link>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#7BA3A8] transition-colors">SMF Works Blog</a>
            <a href="https://smfworks.com/contact" className="text-[#6B6560] hover:text-[#7BA3A8] transition-colors">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}

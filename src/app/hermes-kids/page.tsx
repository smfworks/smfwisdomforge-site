import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hermes for Kids — WisdomForge",
  description:
    "Parent-operated Hermes profiles for children in WisdomForge bands 5–10, 11–14, and 15–18. Fresh profiles only. The booklet is the text. The agent is the guide.",
  alternates: { canonical: "https://smfwisdomforge.com/hermes-kids" },
};

const bands = [
  {
    ages: "5–10",
    label: "Little Thinkers",
    ritual: "One step. A short story. Ask a Grown-Up.",
    tools: "Conversation only.",
  },
  {
    ages: "11–14",
    label: "Young Minds",
    ritual: "Hint, then example. Talk About It.",
    tools: "Chat. Optional local voice-to-text. Optional image understanding.",
  },
  {
    ages: "15–18",
    label: "Emerging Adults",
    ritual: "Real argument. Practice. Reflect.",
    tools: "Chat. Optional narrow search or school files. Not an adult team agent.",
  },
];

export default function HermesKidsPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center px-6 py-24 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96E] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            For parents
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-6 leading-tight">
            A separate Hermes agent.{" "}
            <span className="text-[#C9A96E]">The same age bands as the booklets.</span>
          </h1>
          <p className="text-[#A89B8C] text-lg md:text-xl leading-relaxed mb-8">
            WisdomForge Kids Hermes Profiles is a parent-operated starter kit. You
            design a private child-facing agent in one band — 5–10, 11–14, or
            15–18 — without handing your child an adult Hermes profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A96E] text-[#0a0a0f] font-semibold hover:bg-[#d4b87a] transition-colors"
            >
              Open the GitHub kit
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#C9A96E]/40 text-[#C9A96E] font-semibold hover:border-[#C9A96E] transition-colors"
            >
              Back to the booklets
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F5F0E8]">What this is</h2>
          <p>
            A working adult Hermes agent can use a terminal, send messages,
            schedule work, and remember a lot. That is the wrong starting point
            for a child. This kit is a <em>template for a whole profile</em> —
            identity, teaching style, memory rules, and which tools stay off —
            not a friendlier coat of paint on your own agent.
          </p>
          <p>
            It is not a hosted kids chatbot. It does not make AI safe. A parent
            who already uses Hermes inspects the design, changes what does not
            fit, tests it, and can refuse it.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4 text-center">
            Three templates. Adult is out of scope.
          </h2>
          <p className="text-[#6B6560] text-center max-w-2xl mx-auto mb-12">
            Each band has its own SOUL seed and capability defaults. Pick one
            profile per child. When they age out, redesign. Do not silently
            stretch the old one.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {bands.map((band) => (
              <div
                key={band.ages}
                className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#C9A96E]/10 border-2 border-[#C9A96E]/20 flex items-center justify-center px-2">
                  <span className="text-lg font-bold text-[#C9A96E] tabular-nums whitespace-nowrap">
                    {band.ages}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] text-center mb-2">
                  {band.label}
                </h3>
                <p className="text-[#C9A96E] text-sm text-center mb-4">{band.ritual}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed text-center">
                  {band.tools}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F5F0E8]">How it works</h2>
          <ol className="list-decimal list-inside space-y-4 text-[#A89B8C]">
            <li>
              From your <strong className="text-[#F5F0E8]">adult</strong> Hermes
              profile, send the prompt in the repo&apos;s START-HERE.md.
            </li>
            <li>
              The setup agent asks the band first, then only the choices that
              change privacy, cost, tools, or access.
            </li>
            <li>
              It shows the full design before it creates anything. You approve.
            </li>
            <li>
              It creates a <strong className="text-[#F5F0E8]">fresh</strong>{" "}
              profile. It must not clone yours.
            </li>
            <li>
              It tests through the interface the child will use, with synthetic
              examples. Fix failures before the child starts.
            </li>
          </ol>
          <p>
            Shared rules: hint-first learning, no hidden AI homework, warm
            without pretending to be a friend, suggest a trusted adult, parent
            controls spend, messages, and publishing.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F5F0E8]">
            Pair it with a booklet
          </h2>
          <p>
            The booklet stays the text. The agent is the guide. You may add one
            parent-approved fact: currently reading WisdomForge booklet{" "}
            <em>figure title only</em>. The agent asks questions from that
            figure. It does not recite the PDF. When a new figure ships, change
            the title. Do not widen the tools just because the catalog grew.
          </p>
          <p>
            Use it beside homework, creative work, and the questions that come
            with the age. Do not use it as a secret friend or a substitute for
            you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4">The kit is public</h2>
          <p className="text-[#A89B8C] text-lg leading-relaxed mb-8">
            Seeds, decisions, and evals live on GitHub. Real children&apos;s
            profiles stay private. Official Hermes docs win if a command goes
            stale.
          </p>
          <a
            href="https://github.com/smfworks/wisdomforge-kids-Hermes-profiles"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A96E] text-[#0a0a0f] font-semibold hover:bg-[#d4b87a] transition-colors"
          >
            github.com/smfworks/wisdomforge-kids-Hermes-profiles
          </a>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">
                by Aiona Edge &amp; The SMF Works Project
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              Home
            </Link>
            <a
              href="https://smfworks.com/blog"
              className="text-[#6B6560] hover:text-[#C9A96E] transition-colors"
            >
              SMF Works Blog
            </a>
            <a
              href="https://smfworks.com/contact"
              className="text-[#6B6560] hover:text-[#C9A96E] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

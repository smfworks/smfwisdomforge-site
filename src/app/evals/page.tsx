import type { Metadata } from "next";
import Link from "next/link";
import {
  bands,
  categories,
  testCases,
  casesForBand,
  casesForCategory,
  bandMeta,
  categoryMeta,
  statusLabel,
  evalsSourceUrl,
  kidsRepoUrl,
  type EvalBand,
  type EvalStatus,
} from "@/data/evals";

export const metadata: Metadata = {
  title: "Evaluations — WisdomForge Kids",
  description:
    "Public ritual-fidelity scorecard for WisdomForge Kids Hermes Profiles. Every test case, what it checks, and what passing looks like. Synthetic data only. Individual child results are never published.",
  alternates: { canonical: "https://smfwisdomforge.com/evals" },
};

const statusStyles: Record<EvalStatus, string> = {
  pending: "bg-[#1e1e28] text-[#6B6560] border-[#2a2a35]",
  pass: "bg-[#2d4a2d] text-[#7BA87B] border-[#4a7a4a]",
  fail: "bg-[#4a2d2d] text-[#B87D6A] border-[#7a4a4a]",
  "not-tested": "bg-[#1e1e28] text-[#6B6560] border-[#2a2a35]",
};

const bandAccent: Record<EvalBand, string> = {
  all: "#C9A96E",
  little: "#C9A96E",
  young: "#7BA3A8",
  emerging: "#B87D6A",
};

export default function EvalsPage() {
  const totalCases = testCases.length;
  const childBands = bands.filter((b) => b.key !== "all");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center px-6 py-24 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96E] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Ritual-fidelity scorecard
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-6 leading-tight">
            What we test.{" "}
            <span className="text-[#C9A96E]">What passing looks like.</span>
          </h1>
          <p className="text-[#A89B8C] text-lg md:text-xl leading-relaxed mb-8">
            Every WisdomForge Kids Hermes Profile is tested against {totalCases}{" "}
            cases before a child touches it. This page shows the full test
            matrix — identity, affection, learning, privacy, safety, and
            subject-specific fidelity — so parents can see the standard before
            they decide to use the kit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={evalsSourceUrl}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A96E] text-[#0a0a0f] font-semibold hover:bg-[#d4b87a] transition-colors"
            >
              Read EVALS.md on GitHub
            </a>
            <Link
              href="/hermes-kids"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#C9A96E]/40 text-[#C9A96E] font-semibold hover:border-[#C9A96E] transition-colors"
            >
              How the kids templates work
            </Link>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F5F0E8]">How this works</h2>
          <p>
            A parent tests the finished profile through the interface the child
            will use — the same chat window, the same voice settings, the same
            tools. Every test uses <strong className="text-[#F5F0E8]">synthetic
            information only</strong>. No real child data enters the test.
          </p>
          <p>
            The parent records PASS, FAIL, or NOT TESTED privately. The public
            scorecard below shows which cases exist and what each one checks.
            Individual child results are never published.
          </p>
          <p>
            If a test fails, the parent fixes the profile design before the
            child starts. A profile that cannot pass its core cases is not
            ready for a child. That is the standard.
          </p>
        </div>
      </section>

      {/* BAND NAVIGATION */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#6B6560] text-sm uppercase tracking-[0.2em] mb-6">
            Jump to a band
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {bands.map((band) => (
              <a
                key={band.key}
                href={`#band-${band.key}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#13131a] border border-[#1e1e28] hover:border-[#C9A96E]/40 transition-colors"
              >
                <span
                  className="text-sm font-bold tabular-nums"
                  style={{ color: bandAccent[band.key] }}
                >
                  {band.ages}
                </span>
                <span className="text-sm text-[#A89B8C] font-medium">
                  {band.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SCORECARD SECTIONS — one per band */}
      {bands.map((band) => {
        const meta = bandMeta(band.key);
        const bandCases = casesForBand(band.key);
        const accent = bandAccent[band.key];

        return (
          <section
            key={band.key}
            id={`band-${band.key}`}
            className="py-20 px-6 bg-[#0f0f14] border-t border-[#1e1e28]"
          >
            <div className="max-w-6xl mx-auto">
              {/* Band header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: `${accent}33`,
                      backgroundColor: `${accent}0D`,
                    }}
                  >
                    <span
                      className="text-sm font-bold tabular-nums whitespace-nowrap"
                      style={{ color: accent }}
                    >
                      {meta.ages}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0E8]">
                      {meta.label}
                    </h2>
                    <p className="text-[#6B6560]">{meta.tagline}</p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <span className="text-sm text-[#6B6560]">
                      {bandCases.length} test cases
                    </span>
                  </div>
                </div>
              </div>

              {/* Category sections within each band */}
              <div className="space-y-12">
                {categories.map((cat) => {
                  const catCases = casesForCategory(band.key, cat.key);
                  if (catCases.length === 0) return null;
                  const cMeta = categoryMeta(cat.key);

                  return (
                    <div key={`${band.key}-${cat.key}`}>
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-[#F5F0E8] mb-2">
                          {cMeta.label}
                        </h3>
                        <p className="text-sm text-[#6B6560] leading-relaxed max-w-2xl">
                          {cMeta.description}
                        </p>
                      </div>

                      {/* Test case grid */}
                      <div className="grid gap-4">
                        {catCases.map((tc) => (
                          <div
                            key={tc.id}
                            className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-5 hover:border-[#C9A96E]/20 transition-colors"
                          >
                            <div className="flex items-start gap-4">
                              {/* ID badge */}
                              <div className="flex-shrink-0">
                                <span
                                  className="inline-block px-2.5 py-1 rounded text-xs font-mono font-bold"
                                  style={{
                                    color: accent,
                                    backgroundColor: `${accent}15`,
                                  }}
                                >
                                  {tc.id}
                                </span>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <h4 className="text-base font-semibold text-[#F5F0E8]">
                                    {tc.title}
                                  </h4>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded border ${statusStyles[tc.status]}`}
                                  >
                                    {statusLabel(tc.status)}
                                  </span>
                                </div>

                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="text-[#6B6560] font-medium">
                                      Test:{" "}
                                    </span>
                                    <span className="text-[#A89B8C] italic">
                                      {tc.prompt}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[#6B6560] font-medium">
                                      Expected:{" "}
                                    </span>
                                    <span className="text-[#A89B8C]">
                                      {tc.expected}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* WHAT IS NOT HERE */}
      <section className="py-20 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#A89B8C] text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F5F0E8]">
            What this page does not show
          </h2>
          <ul className="space-y-3 text-[#A89B8C]">
            <li className="flex gap-3">
              <span className="text-[#C9A96E] flex-shrink-0">—</span>
              <span>
                <strong className="text-[#F5F0E8]">
                  Individual child results.
                </strong>{" "}
                A parent's PASS/FAIL record for their own child's profile is
                private. This page shows the test standard, not someone's
                transcript.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C9A96E] flex-shrink-0">—</span>
              <span>
                <strong className="text-[#F5F0E8]">
                  Conditional features.
                </strong>{" "}
                Web search, image tools, voice, files, messaging, spend, and
                independent OS access each have additional tests that run only
                if the design includes that feature. If a control cannot be
                tested, the feature stays unavailable.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C9A96E] flex-shrink-0">—</span>
              <span>
                <strong className="text-[#F5F0E8]">A guarantee.</strong>{" "}
                Passing these cases means the profile met the standard on the
                day it was tested. Models drift. Parents re-test after changes
                and after band transitions.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SOURCE OF TRUTH */}
      <section className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F5F0E8] mb-4">
            The source of truth is on GitHub
          </h2>
          <p className="text-[#A89B8C] text-lg leading-relaxed mb-8">
            This page mirrors the test matrix in EVALS.md. If the two disagree,
            the GitHub repo wins. Official Hermes docs win if a command goes
            stale.
          </p>
          <a
            href={kidsRepoUrl}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A96E] text-[#0a0a0f] font-semibold hover:bg-[#d4b87a] transition-colors"
          >
            github.com/smfworks/wisdomforge-kids-Hermes-profiles
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
            <Link
              href="/"
              className="text-[#6B6560] hover:text-[#C9A96E] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/hermes-kids"
              className="text-[#6B6560] hover:text-[#C9A96E] transition-colors"
            >
              Hermes for Kids
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
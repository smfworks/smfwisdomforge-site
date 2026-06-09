import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WisdomForge — Ancient Wisdom, Forged by AI",
  description:
    "An adaptive AI-powered educational platform that teaches classical philosophy, theology, science, and more. A virtual Socrates that learns how you learn.",
  alternates: { canonical: "https://smfwisdomforge.com" },
};

const philosophers = [
  {
    name: "Socrates",
    role: "The Questioner",
    description: "Never gives answers. Only asks the question that breaks open understanding.",
    color: "#C9A96E",
    icon: "❓",
  },
  {
    name: "Marcus Aurelius",
    role: "The Stoic",
    description: "Teaches resilience in chaos. The mind is its own place.",
    color: "#7BA3A8",
    icon: "🛡️",
  },
  {
    name: "Epictetus",
    role: "The Disciplinarian",
    description: "Ruthless clarity on what you control — and what you don't.",
    color: "#B87D6A",
    icon: "⚔️",
  },
  {
    name: "Aristotle",
    role: "The Analyst",
    description: "Breaks the world into causes, categories, and the golden mean.",
    color: "#8A9A7B",
    icon: "🔍",
  },
];

const features = [
  {
    title: "Adaptive Learning",
    description: "The AI observes how you learn — your pace, your gaps, your style — and adjusts every lesson in real time.",
    icon: "🧠",
  },
  {
    title: "Multi-Agent Dialogue",
    description: "Multiple AI philosophers with distinct voices debate, question, and guide you through complex ideas.",
    icon: "💬",
  },
  {
    title: "Daily Wisdom Snippets",
    description: "Cinematic 12-second videos with ancient quotes, ambient music, and typography that stops the scroll.",
    icon: "🔥",
  },
  {
    title: "Personalized Pathways",
    description: "From elementary introductions to research-level analysis — the depth adjusts to where you actually are.",
    icon: "🎯",
  },
];

export default function WisdomForgePage() {
  return (
    <>
      {/* HERO — Immersive, Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/wisdomforge-hero.png"
            alt="Ancient forge with Socrates bust"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C9A96E] opacity-[0.08] blur-[150px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#7BA3A8] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#B87D6A] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 169, 110, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 169, 110, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">
              Coming Soon
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Wisdom
            <span className="text-[#C9A96E]">Forge</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            Ancient wisdom. Forged by AI. 
            <br className="hidden md:block" />
            Personalized for the way <em className="text-[#C9A96E] not-italic font-medium">you</em> think.
          </p>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            An adaptive learning platform where Socrates asks you the questions. 
            Where philosophy meets you exactly where you are.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40">
              <span className="flex items-center gap-2">
                Join the Waitlist
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <Link 
              href="#philosophers"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#C9A96E] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#C9A96E]/30"
            >
              Meet the Philosophers
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[#C9A96E]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* WHAT IS WISDOMFORGE — The Promise */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
                Education was built for factories.
                <span className="text-[#7BA3A8]"> You are not a factory.</span>
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  One curriculum. One pace. One path. If you didn't fit the mold, the mold didn't bend for you.
                </p>
                <p>
                  WisdomForge rejects that premise. It's not a course — it's a conversation. An AI that learns <em>about</em> you: your gaps, your style, your curiosities. Then adapts.
                </p>
                <p className="text-[#C9A96E]">
                  A virtual Socrates. Not a database with a chat interface. A mind that asks the next right question.
                </p>
              </div>
            </div>

            {/* Visual — Stats/Numbers */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "32+", label: "Philosophers & Thinkers" },
                  { number: "256", label: "Multi-Modal Modules" },
                  { number: "∞", label: "Learning Paths" },
                  { number: "1", label: "Virtual Socrates" },
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

      {/* FEATURES GRID */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              The Experience
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Not a course. A <span className="text-[#7BA3A8]">conversation.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Every interaction is shaped by who you are and where you're trying to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-8 hover:border-[#C9A96E]/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-3 group-hover:text-[#C9A96E] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#6B6560] leading-relaxed">{feature.description}</p>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHERS */}
      <section id="philosophers" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B87D6A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              The Voices
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Meet Your <span className="text-[#B87D6A]">Teachers</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Each philosopher is an AI agent with a distinct voice, approach, and wisdom tradition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophers.map((philosopher, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${philosopher.color}15`, border: `2px solid ${philosopher.color}30` }}
                >
                  {philosopher.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-1">{philosopher.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: philosopher.color }}>
                  {philosopher.role}
                </p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{philosopher.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SNIPPETS PREVIEW */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Video placeholder */}
            <div className="relative">
              <div className="aspect-video bg-[#13131a] rounded-xl border border-[#1e1e28] overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#C9A96E]/20 flex items-center justify-center group-hover:bg-[#C9A96E]/30 transition-all">
                    <svg className="w-8 h-8 text-[#C9A96E] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0f] to-transparent">
                  <p className="text-[#F5F0E8] text-sm italic mb-1">
                    "You have power over your mind — not outside events."
                  </p>
                  <p className="text-[#C9A96E] text-xs">— Marcus Aurelius</p>
                </div>
              </div>
              <p className="text-center text-[#4a4a4a] text-sm mt-4">Daily Wisdom Snippet Preview</p>
            </div>

            {/* Text */}
            <div>
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Daily Ritual
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
                Twelve seconds of wisdom. 
                <span className="text-[#7BA3A8]">Every day.</span>
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Cinematic typography. Ambient music. Ancient quotes that stop the scroll and start the thought.
                </p>
                <p>
                  Each snippet is handcrafted by code — unique every morning, delivered to your feed like a daily meditation.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['S', 'M', 'E', 'A'].map((letter, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#1a1a22] border-2 border-[#0a0a0f] flex items-center justify-center text-xs text-[#C9A96E] font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-[#6B6560] text-sm">4 philosopher voices, one daily moment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              The Architecture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              How It <span className="text-[#8A9A7B]">Works</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A96E]/30 via-[#7BA3A8]/30 to-[#8A9A7B]/30 hidden md:block" />

            {[
              {
                step: "01",
                title: "You Begin",
                description: "Tell WisdomForge what you're curious about. A question, a struggle, a topic you've always wanted to understand.",
              },
              {
                step: "02",
                title: "The Forge Listens",
                description: "The AI observes your learning style — how you process, where you pause, what resonates. It builds a learner profile just for you.",
              },
              {
                step: "03",
                title: "The Dialogue Begins",
                description: "Socrates asks. Marcus consoles. Aristotle clarifies. The right philosopher for the right moment, adapting as you grow.",
              },
              {
                step: "04",
                title: "Wisdom Compounds",
                description: "Each session deepens the next. The AI remembers. The path evolves. What started as curiosity becomes understanding.",
              },
            ].map((step, i) => (
              <div 
                key={i}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`inline-block ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <span className="text-[#C9A96E]/30 text-6xl font-bold">{step.step}</span>
                    <h3 className="text-xl font-bold text-[#F5F0E8] mt-2 mb-3">{step.title}</h3>
                    <p className="text-[#6B6560] leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full bg-[#1a1a22] border-2 border-[#C9A96E]/30 items-center justify-center z-10 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#C9A96E]" />
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.06] blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">
            The forge is heating up.
          </h2>
          <p className="text-xl text-[#A89B8C] mb-4">
            Be among the first to experience WisdomForge.
          </p>
          <p className="text-[#6B6560] mb-12 max-w-xl mx-auto">
            Early access members get lifetime founder pricing, direct input on feature development, and a front-row seat as we build the future of AI-powered education.
          </p>

          {/* Email capture */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-[#13131a] border border-[#2a2a35] rounded-lg text-[#F5F0E8] placeholder:text-[#4a4a4a] focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
            />
            <button className="px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20 whitespace-nowrap">
              Get Early Access
            </button>
          </div>

          <p className="text-[#4a4a4a] text-sm">
            No spam. Unsubscribe anytime. We respect your attention.
          </p>
        </div>
      </section>

      {/* FOOTER BRIDGE */}
      <section className="py-12 px-6 bg-[#0f0f14] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://smfworks.com/projects" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              All Projects
            </a>
            <a href="https://smfworks.com/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              Blog
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

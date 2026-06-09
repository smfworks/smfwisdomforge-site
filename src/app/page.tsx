export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          SMF WisdomForge
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">
          Great Thinkers. Timeless Wisdom. Modern Minds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-colors cursor-pointer">
            Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}

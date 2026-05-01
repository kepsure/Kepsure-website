const STATS = [
  { value: "15+", label: "Certified engineers" },
  { value: "120+", label: "Active SLAs" },
  { value: "10", label: "Years operating" },
  { value: "99.9%", label: "Service uptime" },
];

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400">
              By the numbers
            </span>
            <h2 className="font-display mt-3 text-4xl text-white md:text-5xl">
              A decade of running
              <br />
              business-critical IT.
            </h2>
          </div>
          <p className="text-white/65 md:max-w-md md:justify-self-end">
            Kepsure was founded by engineers who came from the inside of
            enterprise IT. The numbers below are the byproduct of doing the work
            properly — not a marketing ambition.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative bg-brand-900 p-8 transition hover:bg-brand-800 md:p-10"
            >
              <div className="font-display text-5xl text-white md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {s.label}
              </div>
              <div className="mt-5 h-px w-12 bg-accent-500 transition group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

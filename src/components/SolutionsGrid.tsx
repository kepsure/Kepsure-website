import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions";

export function SolutionsGrid() {
  return (
    <section className="relative bg-mist py-24">
      <div className="bg-dots-soft absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
              What we do
            </span>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Six solution lines.{" "}
              <span className="text-gradient">One accountable team.</span>
            </h2>
            <p className="mt-4 text-ink/65">
              From the firewall at the edge to the identity provider at the
              core, Kepsure designs, deploys and operates every layer your
              business depends on.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-500 hover:bg-brand-50"
          >
            All solutions
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/8"
              >
                <span
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-100/60 transition group-hover:scale-125"
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-800 text-white shadow-lg shadow-brand-700/15">
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </div>
                  <span className="absolute right-0 top-0 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.28em] text-brand-300">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-ink">{s.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-600">
                    {s.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition group-hover:gap-2">
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition group-hover:rotate-45"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

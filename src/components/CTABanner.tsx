import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 py-20 text-white">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-12 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-accent-300">
            Let&apos;s build it together
          </span>
          <h2 className="font-display mt-5 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Tell us where your IT
            <br />
            keeps you up at night.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            A 30-minute discovery call and we&apos;ll come back with a written
            view of risk, priority and effort — no slides, no soft-sell.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-accent-500 px-7 py-5 text-sm font-semibold text-brand-900 shadow-xl shadow-accent-500/30 transition hover:bg-accent-400"
            >
              <span>Book a discovery call</span>
              <ArrowRight
                className="h-5 w-5 transition group-hover:translate-x-1"
                strokeWidth={2.2}
              />
            </Link>
            <Link
              href="tel:+919904408606"
              className="group inline-flex items-center justify-between gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition hover:border-accent-400 hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-accent-400" strokeWidth={1.8} />
                +91 99044 08606
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

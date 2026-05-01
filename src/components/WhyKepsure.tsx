import { BadgeCheck, Wallet, TrendingUp, Headphones } from "lucide-react";

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Certified team",
    body: "Every project lead carries OEM certification (Cisco CCNP, Microsoft MCSE, VMware VCP, Barracuda, Sophos). No outsourcing the hard parts.",
  },
  {
    icon: Wallet,
    title: "Cost-effective by design",
    body: "Vendor-neutral architecture means we recommend what fits, not what we hold inventory on. Quotes itemise effort vs. licensing — no opaque bundles.",
  },
  {
    icon: TrendingUp,
    title: "Scalable roadmaps",
    body: "Designs that hold up as your headcount, traffic and risk surface grow. Year-three additions don't require year-one rework.",
  },
  {
    icon: Headphones,
    title: "Support that actually answers",
    body: "Tickets routed to senior engineers from the first response — no L1 gating that delays real fixes.",
  },
];

export function WhyKepsure() {
  return (
    <section className="relative overflow-hidden bg-mist py-24">
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-50/80 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
              Why Kepsure
            </span>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              An IT partner that{" "}
              <span className="text-gradient">behaves like an in-house team.</span>
            </h2>
            <p className="mt-5 text-ink/65">
              We win business when CIOs are tired of vendors who treat support
              as a cost centre. We keep it because we don't.
            </p>
            <div className="mt-8 rounded-2xl border border-brand-100 bg-white/70 p-6 backdrop-blur">
              <p className="font-display text-2xl leading-snug text-brand-800">
                &ldquo;The Kepsure team finished our network refresh two weeks
                ahead of plan. They flagged three latent issues we'd been
                ignoring for years and fixed them in scope.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 font-bold text-white">
                  RP
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    R. Pandya
                  </div>
                  <div className="text-xs text-ink/55">
                    Head of IT, Manufacturing &amp; Distribution
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group rounded-2xl border border-mist-2 bg-white p-6 transition hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display mt-5 text-lg text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Search, PencilRuler, Cog, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    body: "Workshops, audits and architecture reviews to understand the real constraints — budget, risk posture, regulatory load and team headcount.",
  },
  {
    n: "02",
    icon: PencilRuler,
    title: "Design",
    body: "A reference architecture mapped to phase-wise rollout, with vendor-neutral component selection and 5-year TCO modelling.",
  },
  {
    n: "03",
    icon: Cog,
    title: "Deploy",
    body: "Pre-staged kit, runbooks and weekend cutover windows. Project plans you can show to a CFO without redacting columns.",
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Support",
    body: "Tiered SLAs, monitoring, monthly service reviews and quarterly recovery drills — operational discipline as a service.",
  },
];

export function ProcessSteps() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            How we work
          </span>
          <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            Predictable engagements.
            <br />
            <span className="text-gradient">No surprises.</span>
          </h2>
          <p className="mt-4 text-ink/65">
            Every Kepsure engagement runs the same disciplined four-step path —
            from the first whiteboard sketch to year-five capacity planning.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-1/2 top-12 hidden h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block"
            aria-hidden
          />
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="relative">
                <div className="relative z-10 grid h-24 w-24 place-items-center rounded-3xl border-2 border-brand-100 bg-white shadow-md shadow-brand-700/5">
                  <Icon className="h-9 w-9 text-brand-700" strokeWidth={1.7} />
                  <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-accent-500 text-xs font-black text-white shadow-md">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

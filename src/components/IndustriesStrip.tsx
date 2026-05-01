import {
  Factory,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Briefcase,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Landmark, label: "BFSI" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics" },
  { icon: Briefcase, label: "Professional Services" },
];

export function IndustriesStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            Industries we serve
          </span>
          <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
            Eight sectors. Same engineering rigour.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-mist-2 bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <span className="text-xs font-semibold text-ink/75">
                  {i.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white">
      <div className="bg-grid absolute inset-0 opacity-[0.4]" aria-hidden />
      <div
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-300/30 blur-[100px]"
        aria-hidden
      />
      <div
        className="absolute -right-32 top-32 h-[28rem] w-[28rem] rounded-full bg-accent-300/30 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-700 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            A Total IT Solution Provider
          </span>

          <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-ink md:text-[64px] lg:text-[72px]">
            We engineer the IT
            <br />
            your business{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient-accent">runs on.</span>
              <span
                className="absolute inset-x-0 bottom-2 z-0 h-3 bg-accent-200/70"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-ink/70 md:text-xl">
            Cyber security, infrastructure, backup, email, licensing and
            enterprise platforms — planned, deployed and supported by a 15+
            engineer team holding Cisco, Microsoft, VMware and Barracuda
            certifications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/20 transition hover:bg-brand-800"
            >
              Request a consultation
              <ArrowRight
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-brand-800 backdrop-blur transition hover:border-brand-400 hover:bg-white"
            >
              Explore solutions
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-brand-100 pt-8 text-sm text-ink/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-700" strokeWidth={2} />
              ISO-aligned controls
            </div>
            <div className="hidden h-4 w-px bg-brand-100 md:block" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-700" strokeWidth={2} />
              Certified engineering team
            </div>
            <div className="hidden h-4 w-px bg-brand-100 md:block" />
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-700 text-[10px] font-black text-white">
                ★
              </span>
              Vendor-neutral advisory
            </div>
          </div>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-brand-700/10 via-accent-300/15 to-transparent blur-2xl" />
          <svg
            viewBox="0 0 480 480"
            className="relative h-[440px] w-[440px]"
            aria-hidden
          >
            <defs>
              <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#234a82" />
                <stop offset="100%" stopColor="#1a3a6b" />
              </linearGradient>
              <linearGradient id="orange" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fd9a1c" />
                <stop offset="100%" stopColor="#f39200" />
              </linearGradient>
            </defs>

            {/* Outer ring */}
            <circle
              cx="240"
              cy="240"
              r="200"
              fill="none"
              stroke="url(#navy)"
              strokeWidth="1.5"
              strokeDasharray="3 8"
              opacity="0.45"
            />
            {/* Mid ring */}
            <circle
              cx="240"
              cy="240"
              r="148"
              fill="none"
              stroke="url(#navy)"
              strokeWidth="2"
              opacity="0.18"
            />
            {/* Inner ring */}
            <circle
              cx="240"
              cy="240"
              r="98"
              fill="none"
              stroke="url(#orange)"
              strokeWidth="1.5"
              strokeDasharray="2 6"
              opacity="0.5"
            />

            {/* Shield core */}
            <g transform="translate(240 240)">
              <path
                d="M 0 -68 L 56 -42 L 56 8 C 56 38, 32 60, 0 70 C -32 60, -56 38, -56 8 L -56 -42 Z"
                fill="url(#navy)"
              />
              <path
                d="M -22 4 L -8 18 L 24 -16"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Orbiting service nodes */}
            {[
              { x: 240, y: 40, label: "Cloud" },
              { x: 432, y: 240, label: "Backup" },
              { x: 240, y: 440, label: "Mail" },
              { x: 48, y: 240, label: "Network" },
              { x: 376, y: 104, label: "SIEM" },
              { x: 376, y: 376, label: "Firewall" },
              { x: 104, y: 376, label: "Endpoint" },
              { x: 104, y: 104, label: "IAM" },
            ].map((n) => (
              <g key={n.label}>
                <line
                  x1="240"
                  y1="240"
                  x2={n.x}
                  y2={n.y}
                  stroke="url(#navy)"
                  strokeWidth="1"
                  opacity="0.18"
                />
                <circle cx={n.x} cy={n.y} r="22" fill="#ffffff" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="22"
                  fill="none"
                  stroke="url(#navy)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="'Space Grotesk', system-ui, sans-serif"
                  fontWeight="700"
                  fill="#1a3a6b"
                  letterSpacing="0.06em"
                >
                  {n.label.toUpperCase()}
                </text>
              </g>
            ))}

            {/* Accent dot pulse */}
            <circle cx="376" cy="104" r="6" fill="url(#orange)" />
            <circle cx="104" cy="376" r="6" fill="url(#orange)" />
          </svg>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute -bottom-2 -left-4 rounded-2xl border border-mist-2 bg-white/95 p-4 shadow-xl shadow-brand-900/10 backdrop-blur">
        <div className="font-display text-3xl text-brand-800">99.9%</div>
        <div className="text-xs uppercase tracking-widest text-ink/55">
          Service uptime
        </div>
      </div>
      <div className="absolute right-0 top-12 rounded-2xl border border-mist-2 bg-white/95 p-4 shadow-xl shadow-brand-900/10 backdrop-blur">
        <div className="font-display text-3xl text-brand-800">15+</div>
        <div className="text-xs uppercase tracking-widest text-ink/55">
          Certified engineers
        </div>
      </div>
    </div>
  );
}

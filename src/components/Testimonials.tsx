"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote as QuoteIcon, MessagesSquare } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  highlight?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Finished our network refresh two weeks ahead of plan. Flagged three latent issues we'd been ignoring for years.",
    name: "R. Pandya",
    role: "Head of IT · Manufacturing",
    initials: "RP",
    highlight: "two weeks ahead of plan",
  },
  {
    quote:
      "The kind of vendor where the senior engineer who scoped the deal also takes the call when something breaks.",
    name: "A. Mehta",
    role: "CTO · BFSI",
    initials: "AM",
  },
  {
    quote:
      "Migrated 40 mailboxes onto Microsoft 365 without a single user complaint on Monday morning.",
    name: "N. Trivedi",
    role: "Head of Tech · Real Estate",
    initials: "NT",
    highlight: "without a single user complaint",
  },
  {
    quote:
      "Quote arrives itemised — labour vs. licensing, day-one vs. recurring. Clearest IT proposals we've ever received.",
    name: "D. Bhatt",
    role: "CIO · Logistics",
    initials: "DB",
  },
  {
    quote:
      "Flagged a misconfigured firewall rule on day one of the audit that had been quietly there since 2019.",
    name: "K. Iyer",
    role: "Operations · Education",
    initials: "KI",
    highlight: "since 2019",
  },
  {
    quote:
      "We've been with Kepsure since 2018. The team that did our first Sophos rollout is still the team we call.",
    name: "S. Kapadia",
    role: "Director · Retail",
    initials: "SK",
  },
  {
    quote:
      "First responder on a P1 is always senior. Saves us hours on every incident — no L1 round-trip.",
    name: "R. Nair",
    role: "IT Lead · Pharma",
    initials: "RN",
    highlight: "always senior",
  },
  {
    quote:
      "First IT partner that actually says 'no' when a product isn't right. We trust the recommendations.",
    name: "P. Shah",
    role: "IT Manager · Healthcare",
    initials: "PS",
  },
];

// Two rows for the marquee — each duplicated for seamless loop.
const ROW_A = TESTIMONIALS.slice(0, 4);
const ROW_B = TESTIMONIALS.slice(4, 8);

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            <MessagesSquare className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span className="relative">
              In their own words
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-3xl text-ink md:text-4xl">
            What CIOs say about{" "}
            <span className="text-gradient">working with us.</span>
          </h2>
        </motion.div>
      </div>

      {/* Two horizontal marquee rows — opposite directions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="group mt-12 space-y-4"
      >
        <Row items={ROW_A} direction="left" speed={42} />
        <Row items={ROW_B} direction="right" speed={48} />
      </motion.div>
    </section>
  );
}

function Row({
  items,
  direction,
  speed,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  speed: number;
}) {
  const looped = [...items, ...items];
  return (
    <div
      className="relative py-3"
      style={{
        overflowX: "clip",
        overflowY: "visible",
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-4 [animation-play-state:running] group-hover:[animation-play-state:paused]"
        style={{
          animation: `${
            direction === "left" ? "marquee" : "marquee-reverse"
          } ${speed}s linear infinite`,
        }}
      >
        {looped.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  const renderQuote = () => {
    if (!t.highlight) return t.quote;
    const idx = t.quote.indexOf(t.highlight);
    if (idx === -1) return t.quote;
    return (
      <>
        {t.quote.slice(0, idx)}
        <span className="bg-accent-200/60 px-1">{t.highlight}</span>
        {t.quote.slice(idx + t.highlight.length)}
      </>
    );
  };
  return (
    <figure className="relative w-[360px] shrink-0 overflow-hidden rounded-2xl border border-mist-2 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/8 md:w-[420px]">
      <QuoteIcon
        className="absolute right-4 top-4 h-5 w-5 text-accent-200"
        strokeWidth={1.6}
      />
      <blockquote className="font-display pr-7 text-sm leading-snug text-brand-800 md:text-[15px]">
        &ldquo;{renderQuote()}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-[10px] font-bold text-white">
          {t.initials}
        </span>
        <span className="text-xs">
          <span className="block font-semibold text-ink">{t.name}</span>
          <span className="text-ink/55">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

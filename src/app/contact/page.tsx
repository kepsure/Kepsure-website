"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  LifeBuoy,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";

const ease = [0.16, 1, 0.3, 1] as const;

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.7v7.84h2.64ZM7.02 9.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08Zm11.32 9V14.06c0-2.52-1.34-3.69-3.13-3.69-1.45 0-2.1.8-2.46 1.36V10.5h-2.64v7.84h2.64v-4.38c0-.4.03-.79.15-1.07.32-.79 1.04-1.6 2.26-1.6 1.6 0 2.24 1.21 2.24 2.99v4.06h2.94Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Contact" },
          ]}
        />

        <FormSection />

        <Footer />
      </main>
    </>
  );
}

function FormSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
        style={{ animation: "blob-drift 28s ease-in-out 5s infinite reverse" }}
        aria-hidden
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24">
              <DirectLines />
            </div>
          </motion.aside>
        </div>

        {/* Full-width "Existing customer" banner below the form/aside */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-10"
        >
          <ExistingCustomerBanner />
        </motion.div>
      </div>
    </section>
  );
}

function DirectLines() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-mist-2 bg-gradient-to-br from-brand-50/50 via-white to-mist/40 p-7 shadow-sm">
      <span
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent-100/70 blur-2xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-brand-100/70 blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-700 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          Direct lines
        </span>
        <h3 className="font-display mt-3 text-2xl text-ink">
          Reach us anytime
        </h3>

        <ul className="mt-6 divide-y divide-mist-2">
          <ContactRow
            icon={Phone}
            label="Phone"
            value="+91 99044 08606"
            href="tel:+919904408606"
          />
          <ContactRow
            icon={Mail}
            label="HR / Admin email"
            value="hradmin@kepsure.com"
            href="mailto:hradmin@kepsure.com"
          />
          <ContactRow
            icon={Mail}
            label="Technical support"
            value="support@kepsuresupport.com"
            href="mailto:support@kepsuresupport.com"
          />
          <ContactRow
            icon={Clock}
            label="Support hours"
            value="10:00 AM – 6:00 PM · Mon–Sat"
          />
          <ContactRow
            icon={MapPin}
            label="Office"
            value="203, Mahavir Chamber, Ramnagar Chowk, Ram Nagar, Sabarmati, Ahmedabad — 380005"
            href="https://maps.app.goo.gl/3i4N5cVcwjBwEWvi7"
          />
        </ul>

        {/* Follow us — slotted inside the same card */}
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-mist-2 pt-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-ink/45">
            Follow us
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/kepsure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/kepsure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExistingCustomerBanner() {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-xl shadow-brand-700/15 md:p-10">
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-dashed border-accent-400/30"
        style={{ animation: "spin-slow 24s linear infinite" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 30% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 30% 30%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7 lg:col-span-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent-300">
            <LifeBuoy className="h-3 w-3" strokeWidth={2.4} />
            Existing customer
          </span>
          <h3 className="font-display mt-4 text-3xl text-white md:text-4xl">
            Skip the form —{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              open a ticket.
            </span>
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Live issues get SLA-bound responses on our ticketing portal.
            Senior engineers triage every priority-1 incident from the first
            response — no L1 round-trip.
          </p>
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <Link
            href="https://kepsuresupport.raiseaticket.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-2xl bg-accent-500 px-7 py-5 text-sm font-bold text-brand-900 shadow-xl shadow-accent-500/30 transition hover:bg-accent-400"
          >
            <span className="relative z-10">Open support portal</span>
            <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-brand-900/15 transition group-hover/cta:bg-brand-900 group-hover/cta:text-white">
              <ArrowUpRight
                className="h-4 w-4 transition group-hover/cta:rotate-45"
                strokeWidth={2.4}
              />
            </span>
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const isExternal = href?.startsWith("http");
  const inner = (
    <>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-mist-2 transition group-hover/row:bg-brand-700 group-hover/row:text-white">
        <Icon className="h-4 w-4" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/45">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-semibold text-ink break-words">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-ink/30 transition group-hover/row:text-brand-700"
          strokeWidth={2}
        />
      )}
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group/row flex items-start gap-3 py-3.5 transition"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-start gap-3 py-3.5">{inner}</div>
      )}
    </li>
  );
}

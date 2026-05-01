import Link from "next/link";
import {
  Ticket,
  Mail,
  Phone,
  Clock,
  Calendar,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Support",
  description:
    "Raise a ticket, email support or schedule a call with Kepsure&apos;s engineering team. SLA-bound responses, senior engineers on first contact.",
};

const CHANNELS = [
  {
    icon: Ticket,
    title: "Raise a ticket",
    body: "Track end-to-end through our ticketing portal. Best for issues with attachments, screenshots or longer history.",
    cta: "Open ticketing portal",
    href: "https://kepsuresupport.raiseaticket.com",
    external: true,
  },
  {
    icon: Mail,
    title: "Email support",
    body: "Drop a note describing the issue and we&apos;ll convert it into a tracked ticket within service hours.",
    cta: "support@kepsuresupport.com",
    href: "mailto:support@kepsuresupport.com",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "Best for live incidents. SLA customers get a senior engineer first; new enquiries are routed to our duty manager.",
    cta: "+91 99044 08606",
    href: "tel:+919904408606",
  },
  {
    icon: Calendar,
    title: "Schedule a session",
    body: "Reserve a 30-minute slot for design walkthroughs, capacity reviews or change discussions.",
    cta: "Book on Outlook",
    href: "https://outlook.office365.com/owa/calendar/kepsure@kepsure.com/bookings/",
    external: true,
  },
];

const PRIORITY_TABLE = [
  {
    p: "P1",
    title: "Business stopped",
    desc: "Production outage, ransomware, data loss in progress",
    response: "15 min",
    update: "Hourly",
  },
  {
    p: "P2",
    title: "Major impact",
    desc: "Site / app degraded, single-region outage, significant user pain",
    response: "1 hour",
    update: "Every 2h",
  },
  {
    p: "P3",
    title: "Minor impact",
    desc: "Workaround available, single-user issue, cosmetic defects",
    response: "4 hours",
    update: "Daily",
  },
  {
    p: "P4",
    title: "Request",
    desc: "Change request, advisory, scheduled work",
    response: "1 business day",
    update: "On milestone",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Support"
          title="Senior engineers on first response. Always."
          description="We don&apos;t L1-gate tickets. Whichever channel you use, the first person who looks at your issue is qualified to actually fix it."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Support" },
          ]}
        />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                const Comp: typeof Link = c.external ? ("a" as never) : Link;
                return (
                  <Comp
                    key={c.title}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group relative overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-ink/30 transition group-hover:text-brand-700"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="font-display mt-5 text-xl text-ink">
                      {c.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-ink/65"
                      dangerouslySetInnerHTML={{ __html: c.body }}
                    />
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      {c.cta}
                    </span>
                  </Comp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                  Service hours
                </span>
                <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                  Standard hours.
                  <br />
                  24×7 for SLA customers.
                </h2>
                <ul className="mt-8 space-y-4 text-sm text-ink/75">
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                      strokeWidth={1.8}
                    />
                    <div>
                      <div className="font-semibold text-ink">
                        Standard support
                      </div>
                      10:00 AM – 6:00 PM, Mon–Sat
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <LifeBuoy
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                      strokeWidth={1.8}
                    />
                    <div>
                      <div className="font-semibold text-ink">
                        Premium / 24×7 SLA
                      </div>
                      Round-the-clock for AMC and managed-service customers
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                  Priority matrix
                </span>
                <h3 className="font-display mt-3 text-2xl text-ink">
                  Response and update targets
                </h3>
                <div className="mt-6 overflow-hidden rounded-2xl border border-mist-2 bg-white">
                  <table className="w-full text-sm">
                    <thead className="bg-mist text-xs uppercase tracking-widest text-ink/55">
                      <tr>
                        <th className="px-5 py-3 text-left">Priority</th>
                        <th className="px-5 py-3 text-left">When</th>
                        <th className="px-5 py-3 text-left">First response</th>
                        <th className="px-5 py-3 text-left">Updates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRIORITY_TABLE.map((p) => (
                        <tr
                          key={p.p}
                          className="border-t border-mist-2 align-top"
                        >
                          <td className="px-5 py-4">
                            <span className="inline-flex rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-bold text-white">
                              {p.p}
                            </span>
                            <div className="mt-1.5 font-semibold text-ink">
                              {p.title}
                            </div>
                          </td>
                          <td className="px-5 py-4 text-ink/65">{p.desc}</td>
                          <td className="px-5 py-4 font-semibold text-ink">
                            {p.response}
                          </td>
                          <td className="px-5 py-4 text-ink/65">
                            {p.update}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

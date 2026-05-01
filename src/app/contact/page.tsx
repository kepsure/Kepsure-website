import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.7v7.84h2.64ZM7.02 9.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08Zm11.32 9V14.06c0-2.52-1.34-3.69-3.13-3.69-1.45 0-2.1.8-2.46 1.36V10.5h-2.64v7.84h2.64v-4.38c0-.4.03-.79.15-1.07.32-.79 1.04-1.6 2.26-1.6 1.6 0 2.24 1.21 2.24 2.99v4.06h2.94Z" />
    </svg>
  );
}
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Reach Kepsure Solutions — phone, email, support hours and a quick contact form to get a same-day response from our engineering team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact us"
          title="Tell us where it hurts. We&apos;ll come back with a written view."
          description="A 30-minute scoping conversation typically saves three months of misalignment. Drop a note below or use whichever channel you prefer."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Contact" },
          ]}
        />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-mist-2 bg-mist/50 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
                  Direct lines
                </span>
                <h3 className="font-display mt-3 text-2xl text-ink">
                  Reach us anytime
                </h3>
                <ul className="mt-6 space-y-5 text-sm">
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
                    value="Ahmedabad, Gujarat, India"
                  />
                </ul>

                <div className="mt-8 border-t border-mist-2 pt-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-ink/45">
                    Follow us
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href="https://facebook.com/kepsure"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="grid h-10 w-10 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 transition hover:border-accent-500 hover:text-accent-600"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com/company/kepsure"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="grid h-10 w-10 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 transition hover:border-accent-500 hover:text-accent-600"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-8 text-white shadow-lg shadow-brand-700/15">
                <h4 className="font-display text-xl">Existing customer?</h4>
                <p className="mt-2 text-sm text-white/75">
                  Skip the form — go straight to our ticketing portal for SLA
                  responses on live issues.
                </p>
                <Link
                  href="https://kepsuresupport.raiseaticket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-accent-400"
                >
                  Open support portal →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
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
  const inner = (
    <>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700 shadow-sm">
        <Icon className="h-4 w-4" strokeWidth={1.8} />
      </div>
      <div className="flex-1">
        <div className="text-[11px] font-bold uppercase tracking-widest text-ink/45">
          {label}
        </div>
        <div className="mt-0.5 font-semibold text-ink">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-3 hover:text-brand-700">
          {inner}
        </a>
      ) : (
        <div className="flex items-start gap-3">{inner}</div>
      )}
    </li>
  );
}

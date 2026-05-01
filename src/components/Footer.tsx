import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

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

const SOLUTIONS = [
  { href: "/solutions/cyber-security", label: "Cyber Security" },
  { href: "/solutions/it-infrastructure", label: "IT Infrastructure" },
  { href: "/solutions/data-backup-recovery", label: "Data Backup & Recovery" },
  { href: "/solutions/email-solutions", label: "Email Solutions" },
  { href: "/solutions/software-licensing", label: "Software Licensing" },
  { href: "/solutions/enterprise-solutions", label: "Enterprise Solutions" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-mist via-white to-mist/60 text-ink">
      {/* Top accent rule for clean handoff from the dark CTA above */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              A turnkey IT solutions partner — planning, design, implementation
              and ongoing support for businesses that depend on technology to
              run.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com/kepsure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/kepsure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-mist-2 bg-white text-brand-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink/70">
              {SOLUTIONS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-brand-700">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink/70">
              <li>
                <Link href="/about" className="transition hover:text-brand-700">
                  About Kepsure
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-brand-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition hover:text-brand-700"
                >
                  Product Zone
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="transition hover:text-brand-700"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-brand-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="transition hover:text-brand-700">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-ink/70">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  strokeWidth={1.8}
                />
                <a
                  href="tel:+919904408606"
                  className="transition hover:text-brand-700"
                >
                  +91 99044 08606
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:hradmin@kepsure.com"
                  className="transition hover:text-brand-700"
                >
                  hradmin@kepsure.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:support@kepsuresupport.com"
                  className="transition hover:text-brand-700"
                >
                  support@kepsuresupport.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  strokeWidth={1.8}
                />
                <a
                  href="https://maps.app.goo.gl/3i4N5cVcwjBwEWvi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-700"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                    Office
                  </span>
                  203, Mahavir Chamber, Ramnagar Chowk,
                  <br />
                  Ram Nagar, Sabarmati, Ahmedabad,
                  <br />
                  Gujarat 380005
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  strokeWidth={1.8}
                />
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                    Support hours
                  </span>
                  10:00 AM – 6:00 PM, Mon–Sat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-mist-2 pt-6 text-xs text-ink/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Kepsure Solutions Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5 md:gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-brand-700"
            >
              Privacy policy
            </Link>
            <Link
              href="/cookies"
              className="transition hover:text-brand-700"
            >
              Cookie policy
            </Link>
            <span className="hidden h-3 w-px bg-mist-2 md:inline-block" />
            <span className="ml-3 hidden font-semibold text-brand-700 md:inline-block md:ml-6">
              A Total IT Solution Provider.
            </span>
          </div>
          <p className="font-semibold text-brand-700 md:hidden">
            A Total IT Solution Provider.
          </p>
        </div>
      </div>
    </footer>
  );
}

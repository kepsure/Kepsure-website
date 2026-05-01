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
    <footer className="relative bg-ink text-white">
      <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
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
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-accent-500 hover:text-accent-400"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/kepsure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-accent-500 hover:text-accent-400"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent-400">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {SOLUTIONS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-accent-300">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent-400">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <Link href="/about" className="hover:text-accent-300">
                  About Kepsure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent-300">
                  Product Zone
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-accent-300">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-accent-300">
                  Admin Login
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/privacy"
                  className="text-white/55 hover:text-accent-300"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white/55 hover:text-accent-300"
                >
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-accent-400">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                  strokeWidth={1.8}
                />
                <a
                  href="tel:+919904408606"
                  className="hover:text-accent-300"
                >
                  +91 99044 08606
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:hradmin@kepsure.com"
                  className="hover:text-accent-300"
                >
                  hradmin@kepsure.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:support@kepsuresupport.com"
                  className="hover:text-accent-300"
                >
                  support@kepsuresupport.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                  strokeWidth={1.8}
                />
                <span>
                  <span className="block text-[11px] uppercase tracking-widest text-white/40">
                    Support hours
                  </span>
                  10:00 AM – 6:00 PM, Mon–Sat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Kepsure Solutions Pvt. Ltd. All rights
            reserved.
          </p>
          <p>A Total IT Solution Provider.</p>
        </div>
      </div>
    </footer>
  );
}

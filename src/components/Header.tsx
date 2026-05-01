"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ChevronDown } from "lucide-react";

const SOLUTIONS = [
  { href: "/solutions/cyber-security", label: "Cyber Security" },
  { href: "/solutions/it-infrastructure", label: "IT Infrastructure" },
  { href: "/solutions/data-backup-recovery", label: "Data Backup & Recovery" },
  { href: "/solutions/email-solutions", label: "Email Solutions" },
  { href: "/solutions/software-licensing", label: "Software Licensing" },
  { href: "/solutions/enterprise-solutions", label: "Enterprise Solutions" },
];

const NAV = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions", children: SOLUTIONS },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Product Zone" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-mist-2 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.children ? (
              <div
                key={n.href}
                className="relative"
                onMouseEnter={() => setOpenSolutions(true)}
                onMouseLeave={() => setOpenSolutions(false)}
              >
                <Link
                  href={n.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-brand-700 transition"
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.2} />
                </Link>
                {openSolutions && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-72 rounded-2xl border border-mist-2 bg-white p-2 shadow-xl shadow-brand-900/10">
                      {n.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-mist hover:text-brand-700"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink/80 hover:text-brand-700 transition"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="tel:+919904408606"
            className="text-sm font-semibold text-ink hover:text-brand-700"
          >
            +91 99044 08606
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-700/20 hover:bg-brand-800 transition"
          >
            Get a Quote
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mist-2"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-mist-2 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map((n) => (
              <div key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-mist hover:text-brand-700"
                >
                  {n.label}
                </Link>
                {n.children && (
                  <div className="ml-4 border-l border-mist-2 pl-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-ink/65 hover:text-brand-700"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

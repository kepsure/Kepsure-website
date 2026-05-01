"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const SUBJECTS = [
  "Cyber security",
  "IT infrastructure",
  "Backup & recovery",
  "Email solutions",
  "Software licensing",
  "Enterprise / managed services",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Hello Kepsure team,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0A--%0D%0A${encodeURIComponent(name)}%0D%0A${encodeURIComponent(company)}%0D%0A${encodeURIComponent(email)}`;
    const mailto = `mailto:hradmin@kepsure.com?subject=${encodeURIComponent(`[${subject}] ${name} — Kepsure enquiry`)}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent-500" strokeWidth={1.8} />
        <h3 className="font-display mt-5 text-2xl text-ink">
          Your draft is ready.
        </h3>
        <p className="mt-3 text-ink/65">
          Your email client should have opened with a pre-filled draft to{" "}
          <span className="font-semibold text-brand-800">
            hradmin@kepsure.com
          </span>
          . Hit send and we&apos;ll respond same business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-mist-2 bg-white p-8 shadow-sm md:p-10"
    >
      <h2 className="font-display text-2xl text-ink">Send us a note</h2>
      <p className="mt-2 text-sm text-ink/65">
        We respond within one business day. For live incidents,{" "}
        <a
          href="tel:+919904408606"
          className="font-semibold text-brand-700 hover:text-brand-800"
        >
          call directly
        </a>
        .
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" />
        <div>
          <Label>Topic</Label>
          <select
            name="subject"
            defaultValue=""
            required
            className="mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white"
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label>Tell us what you&apos;re trying to solve</Label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="A few lines on the problem, current setup or timing — we&apos;ll come back with the right person."
          className="mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white"
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/20 transition hover:bg-brand-800"
      >
        Send enquiry
        <Send className="h-4 w-4" strokeWidth={2} />
      </button>
      <p className="mt-3 text-xs text-ink/45">
        We will only use your details to respond to this enquiry. See our{" "}
        <a href="/privacy" className="underline hover:text-brand-700">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-widest text-ink/60">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white"
      />
    </div>
  );
}

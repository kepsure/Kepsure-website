import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        <section className="relative bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <div className="mb-10 flex items-center justify-between rounded-2xl border border-mist-2 bg-mist px-5 py-4 text-xs">
              <span className="font-semibold uppercase tracking-widest text-ink/55">
                Last updated
              </span>
              <span className="font-semibold text-brand-700">{lastUpdated}</span>
            </div>

            <article className="legal-prose">{children}</article>

            <div className="mt-12 rounded-2xl border border-mist-2 bg-mist p-6 text-sm text-ink/75">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-700">
                Questions about this policy?
              </span>
              <p className="mt-2">
                Contact{" "}
                <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-800">
                  Kepsure Solutions Pvt. Ltd.
                </Link>{" "}
                — email <a href="mailto:hradmin@kepsure.com" className="font-semibold text-brand-700 hover:text-brand-800">hradmin@kepsure.com</a> or call +91 99044 08606.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const VENDORS = [
  "CISCO",
  "MICROSOFT",
  "VMWARE",
  "BARRACUDA",
  "FORTINET",
  "SOPHOS",
  "VEEAM",
  "DELL",
  "HPE",
  "VERITAS",
];

export function TrustBar() {
  return (
    <section className="border-y border-mist-2 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.32em] text-brand-700/70">
          Authorised partner & certified across
        </p>
        <div className="mt-7 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {VENDORS.map((v) => (
            <div
              key={v}
              className="font-display select-none text-center text-sm font-bold tracking-[0.18em] text-ink/40 transition hover:text-brand-700 lg:text-base"
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

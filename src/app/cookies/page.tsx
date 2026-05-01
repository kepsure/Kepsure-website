import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Cookie policy",
  description:
    "What cookies kepsure.com uses, why we use them, and how to control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie policy"
      description="What we store on your device and why."
      lastUpdated="1 May 2026"
    >
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files that a website places on your device to
        remember information between visits. Some cookies are set by us
        directly; others are set by services we use, like our authentication
        provider.
      </p>

      <h2>2. The cookies we use</h2>
      <p>
        Kepsure Solutions keeps cookie use to a minimum. We do{" "}
        <strong>not</strong> use advertising, retargeting or third-party
        marketing cookies on this site.
      </p>

      <h3>Strictly necessary</h3>
      <ul>
        <li>
          <strong>Supabase auth cookies</strong> — set when an admin signs
          into <code>/admin</code>. Names typically begin with{" "}
          <code>sb-</code>. Lifetime: session + refresh token (revoked on
          sign-out).
        </li>
      </ul>

      <h3>Functional</h3>
      <p>
        We don&apos;t currently set optional functional cookies. Updates will
        appear here.
      </p>

      <h3>Analytics &amp; advertising</h3>
      <p>
        <strong>None.</strong> We don&apos;t run Google Analytics, Meta Pixel,
        Hotjar or similar tools. Server-side request logs include IP and
        timestamp but are not used to profile visitors.
      </p>

      <h2>3. Managing cookies</h2>
      <p>
        Because we only use strictly-necessary cookies, no consent banner is
        needed for non-essential tracking — there isn&apos;t any. If you want
        to clear or block cookies, every modern browser provides the option.
      </p>
      <p>
        If you block our auth cookies, the <code>/admin</code> panel will not
        work. This does not affect public visitors browsing solutions, services
        or the Product Zone.
      </p>

      <h2>4. Updates</h2>
      <p>
        We may update this policy if we add new functionality. Material
        changes will appear here with a revised &ldquo;Last updated&rdquo;
        date.
      </p>

      <h2>5. More information</h2>
      <p>
        See our <a href="/privacy">Privacy policy</a> for the broader picture
        of how we handle personal information.
      </p>
    </LegalPage>
  );
}

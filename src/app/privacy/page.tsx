import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy policy",
  description:
    "How Kepsure Solutions Pvt. Ltd. collects, stores and uses information from visitors to kepsure.com.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      description="What we collect, why we collect it, and how we keep it safe."
      lastUpdated="1 May 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        This privacy policy explains how{" "}
        <strong>Kepsure Solutions Pvt. Ltd.</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles personal information
        collected through our website and related services. You can reach our
        privacy team at{" "}
        <a href="mailto:hradmin@kepsure.com">hradmin@kepsure.com</a>.
      </p>

      <h2>2. What we collect</h2>
      <p>We collect only the information we need to do business with you:</p>
      <ul>
        <li>
          <strong>Contact form submissions</strong> — when you fill out the
          enquiry form on <a href="/contact">our contact page</a>, we receive
          your name, company, email, topic and message.
        </li>
        <li>
          <strong>Support tickets</strong> — when you raise a ticket via our
          ticketing portal or email support, we process the issue details to
          deliver service.
        </li>
        <li>
          <strong>Phone call records</strong> — if you call us, your number is
          visible via the carrier. We don&apos;t record calls.
        </li>
        <li>
          <strong>Server logs</strong> — like every website, our hosting
          provider (Vercel) records IP address, user agent, referrer and
          timestamp for diagnostic and security purposes.
        </li>
        <li>
          <strong>Admin authentication</strong> — only Kepsure staff hold
          admin accounts; their email and a hashed password are stored by
          Supabase Auth.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> use marketing tracking pixels, ad networks
        or third-party analytics that profile visitors.
      </p>

      <h2>3. How we use it</h2>
      <ul>
        <li>To respond to your enquiry and prepare a proposal.</li>
        <li>
          To deliver the products and services you request — including
          consulting, implementation, AMC and managed services.
        </li>
        <li>
          To send periodic order, contract or service-renewal updates related
          to an active engagement.
        </li>
        <li>
          To keep the website secure — abuse prevention and basic operational
          analytics from server logs.
        </li>
      </ul>
      <p>
        We will never use your information for unrelated marketing without
        your explicit opt-in.
      </p>

      <h2>4. Sharing &amp; third parties</h2>
      <ul>
        <li>
          <strong>Supabase</strong> — database and authentication. Hosted in
          AWS with industry-standard encryption at rest and in transit.
        </li>
        <li>
          <strong>Vercel</strong> — website hosting and edge delivery; server
          logs retained per Vercel&apos;s standard retention.
        </li>
        <li>
          <strong>Microsoft 365</strong> — email and calendar.
        </li>
      </ul>
      <p>
        We do not sell, rent or trade your personal information. Where we use
        OEMs (Cisco, Microsoft, VMware, Sophos, Veeam, Barracuda, HPE, etc.)
        to fulfil an order, the minimum data needed is shared.
      </p>

      <h2>5. Data retention</h2>
      <p>
        Enquiry data is kept for as long as is reasonably necessary to follow
        up and complete the engagement, plus a further period for accounting
        and statutory compliance. Server logs are typically retained for up
        to 90 days.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under Indian law (including the Digital Personal Data Protection Act,
        2023) you have the right to access, correct, request erasure of, or
        withdraw consent for processing of your personal information, and to
        lodge a complaint with the Data Protection Board of India. To
        exercise these rights, email{" "}
        <a href="mailto:hradmin@kepsure.com">hradmin@kepsure.com</a>. We will
        respond within 30 days.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard safeguards including TLS encryption in
        transit, encrypted storage at rest, role-based access on the admin
        panel and least-privilege keys for our database. No method of
        transmission over the internet is 100% secure, but we work hard to
        protect your information.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        Our services are intended for businesses and individuals 18 years and
        older. We do not knowingly collect personal information from children
        under 18.
      </p>

      <h2>9. Cookies</h2>
      <p>
        We use a minimal set of cookies — see our separate{" "}
        <a href="/cookies">Cookie policy</a> for details.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of the page reflects the latest
        revision. Material changes will be highlighted on the contact page
        for at least 30 days.
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { ImageProtection } from "@/components/ImageProtection";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kepsure-website.vercel.app";
const TITLE = "Kepsure Solutions — A Total IT Solution Provider";
const DESCRIPTION =
  "Kepsure Solutions Pvt. Ltd. is a turnkey IT services partner — cyber security, IT infrastructure, data backup & recovery, email solutions, software licensing and enterprise solutions for businesses across India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Kepsure Solutions",
  },
  description: DESCRIPTION,
  keywords: [
    "Kepsure Solutions",
    "IT solutions provider",
    "Cyber security services",
    "IT infrastructure management",
    "Data backup and recovery",
    "Email solutions enterprise",
    "Software licensing",
    "Virtualization SIEM IAM",
    "Managed IT services India",
  ],
  applicationName: "Kepsure Solutions",
  authors: [{ name: "Kepsure Solutions Pvt. Ltd." }],
  creator: "Kepsure Solutions Pvt. Ltd.",
  publisher: "Kepsure Solutions Pvt. Ltd.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Kepsure Solutions",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
        <ImageProtection />
      </body>
    </html>
  );
}

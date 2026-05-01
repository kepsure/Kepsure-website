import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Network,
  DatabaseBackup,
  Mail,
  FileKey,
  ServerCog,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  capabilities: string[];
  outcomes: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "cyber-security",
    name: "Cyber Security",
    tagline: "Defend, detect, respond.",
    summary:
      "End-to-end protection for endpoints, networks, identity and data — designed around your business risk profile, not a vendor catalogue.",
    icon: ShieldCheck,
    capabilities: [
      "Next-generation firewall & UTM (Sophos, Fortinet, SonicWall, Cisco)",
      "Endpoint Detection & Response (EDR / XDR)",
      "Email security gateway & anti-phishing",
      "Web application firewall and DDoS protection",
      "Vulnerability assessment & penetration testing",
      "Security awareness training for staff",
    ],
    outcomes: [
      {
        title: "Reduced attack surface",
        body: "Hardened perimeter, segmented networks, and least-privilege identity policies that close the doors attackers actually use.",
      },
      {
        title: "Faster incident response",
        body: "24/7 monitoring with playbooks for ransomware, phishing and data exfiltration — cut detection-to-containment from days to minutes.",
      },
    ],
    faqs: [
      {
        q: "Do you replace our existing security tools?",
        a: "Only when there's a clear gap. We start by auditing what you have, fix policy and tuning issues first, and recommend new investment only where it changes outcomes.",
      },
      {
        q: "Can you help with compliance reporting?",
        a: "Yes — we map controls to ISO 27001, RBI, SEBI, GDPR and SOC 2 frameworks, and produce evidence packs for auditors.",
      },
    ],
  },
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure",
    tagline: "Networks that don't get in the way.",
    summary:
      "Design, deploy and operate the wired, wireless and compute fabric your applications run on — built for uptime, throughput and quiet weekends.",
    icon: Network,
    capabilities: [
      "Structured cabling, LAN/WAN design & SD-WAN",
      "Enterprise Wi-Fi (Cisco, Aruba, Ruckus)",
      "Server & storage architecture (HPE, Dell, Lenovo)",
      "Hyperconverged infrastructure & VMware / Hyper-V",
      "Network monitoring, NMS dashboards, capacity planning",
      "On-site & remote infrastructure operations",
    ],
    outcomes: [
      {
        title: "Predictable performance",
        body: "Right-sized capacity with monitoring that tells you about a fan failure before users see a slow application.",
      },
      {
        title: "Vendor-neutral design",
        body: "We pick gear by fit and total cost over five years — not by what we have on the shelf.",
      },
    ],
    faqs: [
      {
        q: "Do you support multi-site rollouts?",
        a: "Yes — we standardise blueprints, ship pre-staged kit, and dispatch engineers for go-live. Recent work includes 12-branch rollouts in under six weeks.",
      },
      {
        q: "What about hybrid cloud?",
        a: "We design landing zones in Azure, AWS and OCI, and operate them alongside on-prem with a single change-management process.",
      },
    ],
  },
  {
    slug: "data-backup-recovery",
    name: "Data Backup & Recovery",
    tagline: "Every byte, every time.",
    summary:
      "Proven backup, replication and disaster-recovery so a ransomware event, a dropped table, or a flood becomes a calendar entry — not a crisis.",
    icon: DatabaseBackup,
    capabilities: [
      "Veeam, Acronis, Commvault and native cloud backup",
      "Air-gapped & immutable repositories (anti-ransomware)",
      "Cross-site replication and warm DR",
      "RPO / RTO design and tested recovery runbooks",
      "Long-term archival to S3 / Azure Blob / on-prem object",
      "Quarterly recovery drills with reports",
    ],
    outcomes: [
      {
        title: "Recovery you've actually tested",
        body: "We run live failover drills every quarter — when the real event arrives, the team has done it before.",
      },
      {
        title: "Ransomware containment",
        body: "Immutable copies and isolated restore environments mean an encrypted production estate doesn't take backups with it.",
      },
    ],
    faqs: [
      {
        q: "How do you size backup capacity?",
        a: "We profile change-rate, retention and growth over a 30-day window before sizing. Most quotes lean conservative on storage and tight on licensing.",
      },
      {
        q: "Do you offer DRaaS?",
        a: "Yes — fully managed warm-DR with quarterly invocations and signed RPO/RTO SLAs.",
      },
    ],
  },
  {
    slug: "email-solutions",
    name: "Email Solutions",
    tagline: "Reliable mail. Clean inboxes.",
    summary:
      "Cloud or on-premise mail platforms with the security, archival and continuity controls that real businesses need — minus the spam folder firefights.",
    icon: Mail,
    capabilities: [
      "Microsoft 365 & Google Workspace deployment / migration",
      "On-premise Exchange and Zimbra environments",
      "Mail archiving & e-discovery (Barracuda, Mimecast)",
      "Anti-phishing, DMARC, DKIM, SPF hardening",
      "Email continuity & spooling for outage windows",
      "MDM and conditional access for mobile mail",
    ],
    outcomes: [
      {
        title: "Migration without weekend pain",
        body: "Pre-staged co-existence, batch cutovers and single point of contact — most users notice nothing on Monday morning.",
      },
      {
        title: "Inboxes that actually filter",
        body: "Layered filtering plus DMARC enforcement — phishing complaints drop, and your domain stops being spoofed.",
      },
    ],
    faqs: [
      {
        q: "Microsoft 365 or on-premise Exchange?",
        a: "It depends on regulatory posture, integrations and headcount trajectory. We will recommend on the merits — including staying with what you have.",
      },
      {
        q: "Do you handle G Suite to M365 migrations?",
        a: "Yes — including shared drives, calendar permissions, and labels-to-categories mapping.",
      },
    ],
  },
  {
    slug: "software-licensing",
    name: "Software Licensing",
    tagline: "The right licences. Right-sized.",
    summary:
      "Authorised licensing for productivity, security, virtualisation and developer tooling — with renewal calendars and true-up advisory built in.",
    icon: FileKey,
    capabilities: [
      "Microsoft (M365, Windows, SQL, Visual Studio, Power Platform)",
      "Adobe, AutoCAD, Tally, SAP Business One",
      "Antivirus & EDR (Sophos, Quick Heal, Kaspersky, CrowdStrike)",
      "Virtualisation (VMware, Citrix, Microsoft Hyper-V)",
      "Backup, networking and monitoring stacks",
      "Annual true-up, renewal and audit advisory",
    ],
    outcomes: [
      {
        title: "No surprise renewals",
        body: "We track every entitlement with renewal dates 90 days out — quotes go on your calendar, not in a panic email.",
      },
      {
        title: "Right-sized spend",
        body: "Honest annual reviews trim shelfware and consolidate SKUs — typical savings 8–18% in year one.",
      },
    ],
    faqs: [
      {
        q: "Do you handle BYOL on cloud?",
        a: "Yes — Hybrid Benefit, AWS BYOL and Azure Reserved Instance planning is part of our advisory.",
      },
      {
        q: "Can you supply academic/non-profit licences?",
        a: "Yes — qualifying institutions get charity / academic SKUs where the OEM offers them.",
      },
    ],
  },
  {
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    tagline: "Engineered for scale.",
    summary:
      "Identity, virtualisation, load balancing, SIEM and cloud — composed into reference architectures that hold up as your headcount, traffic and risk grow.",
    icon: ServerCog,
    capabilities: [
      "Identity & Access Management (Azure AD, Okta, Keycloak)",
      "SIEM & SOC (Sentinel, Wazuh, Elastic, QRadar)",
      "Virtualisation (VMware vSphere, Hyper-V, Nutanix)",
      "Application delivery & load balancing (F5, NGINX+, HAProxy)",
      "Hybrid & multi-cloud (Azure, AWS, OCI)",
      "Privileged Access Management & secrets vaulting",
    ],
    outcomes: [
      {
        title: "One identity, every app",
        body: "Single sign-on, MFA and conditional access across SaaS and on-prem — onboarding/offboarding shrinks from days to minutes.",
      },
      {
        title: "Telemetry that earns its licence",
        body: "SIEM tuned to your environment — alert volume drops, but real incidents surface fast.",
      },
    ],
    faqs: [
      {
        q: "Do you build SOC capability or just hand over tools?",
        a: "We build playbooks, train your analysts, and stay on as L3 escalation — or run the SOC fully managed if you prefer.",
      },
      {
        q: "Can you integrate legacy apps with SSO?",
        a: "Yes — header injection, LDAP proxy, and SAML/OIDC bridges keep older apps in the SSO fabric.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | null {
  return SOLUTIONS.find((s) => s.slug === slug) ?? null;
}

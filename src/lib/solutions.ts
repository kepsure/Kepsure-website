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
  /** Hero image for the solution card. Drop a JPG at
   *  /public/solutions/{slug}.jpg and update this field to use it. */
  image: string;
  /** 2-paragraph long-form narrative for the detail page. */
  overview: string[];
  /** Quick-facts panel — short label/value pairs for the snapshot card. */
  quickFacts: { label: string; value: string }[];
  capabilities: string[];
  /** Vendor / tool stack, grouped by category. Rendered as pill cloud. */
  stack: { category: string; items: string[] }[];
  /** Short scenarios — typical deployments. */
  useCases: { title: string; body: string }[];
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
    image: "/solutions/Cyber_Security.jpeg",
    overview: [
      "Modern attacks rarely come from a single vector. A misconfigured firewall rule, an unpatched edge device, a phished credential — most breaches we investigate had warning signs nobody was watching. The fix is rarely a single product; it's a coherent programme.",
      "Kepsure designs cyber security around how your business actually works. We start by mapping what's worth protecting, then layer controls across perimeter, endpoint, identity, email and data. Whether you need an audit, a phased rollout or 24×7 SOC operations, we plug in at the layer that fits.",
    ],
    quickFacts: [
      { label: "Engagement", value: "Audit · Programme · Managed SOC" },
      { label: "Frameworks", value: "ISO 27001 · RBI · SEBI · SOC 2" },
      { label: "Lead time", value: "2-wk scope · 4–12 wk build" },
      { label: "Coverage", value: "Edge · Endpoint · Email · IAM · SIEM" },
    ],
    capabilities: [
      "Next-generation firewall & UTM (Sophos, Fortinet, SonicWall, Cisco)",
      "Endpoint Detection & Response (EDR / XDR)",
      "Email security gateway & anti-phishing",
      "Web application firewall and DDoS protection",
      "Vulnerability assessment & penetration testing",
      "Security awareness training for staff",
    ],
    stack: [
      {
        category: "Network defence",
        items: ["Sophos", "Fortinet", "Cisco", "SonicWall", "Palo Alto"],
      },
      {
        category: "Endpoint & EDR",
        items: [
          "CrowdStrike",
          "SentinelOne",
          "Sophos Intercept X",
          "Microsoft Defender",
        ],
      },
      {
        category: "Email security",
        items: ["Barracuda", "Mimecast", "Proofpoint"],
      },
      {
        category: "SIEM & SOC",
        items: ["Microsoft Sentinel", "Wazuh", "Splunk", "Elastic"],
      },
      {
        category: "Identity & MFA",
        items: ["Microsoft Entra", "Okta", "Duo"],
      },
    ],
    useCases: [
      {
        title: "Manufacturing plant",
        body: "Segmented OT/IT network, ransomware contained at the perimeter, signed RPO/RTO playbooks.",
      },
      {
        title: "BFSI branch network",
        body: "RBI-compliant logging, MFA-everywhere identity, quarterly red-team exercises.",
      },
      {
        title: "Healthcare practice",
        body: "Endpoint EDR + email gateway tuned for clinical workflow, audit-ready evidence pack.",
      },
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
    image: "/herosection/Infrastructure.jpeg",
    overview: [
      "A network is invisible until it isn't. The applications your team relies on — ERP, mail, ticketing, video — all assume bandwidth, low latency and consistent identity. When the underlying fabric drifts, every dependent service degrades, and the cause is rarely the one users complain about.",
      "Kepsure designs and operates the wired, wireless and compute fabric everything else runs on. We do greenfield builds, brownfield refresh, multi-site rollouts and steady-state operations — sized for traffic patterns now, with capacity headroom for the next five years.",
    ],
    quickFacts: [
      { label: "Engagement", value: "Greenfield · Refresh · Rollout · NOC" },
      { label: "Stack focus", value: "Cisco · HPE · VMware · Aruba" },
      { label: "Lead time", value: "12-branch rollout in 6 wks" },
      { label: "Coverage", value: "LAN · WAN · Wi-Fi · Compute · Storage" },
    ],
    capabilities: [
      "Structured cabling, LAN/WAN design & SD-WAN",
      "Enterprise Wi-Fi (Cisco, Aruba, Ruckus)",
      "Server & storage architecture (HPE, Dell, Lenovo)",
      "Hyperconverged infrastructure & VMware / Hyper-V",
      "Network monitoring, NMS dashboards, capacity planning",
      "On-site & remote infrastructure operations",
    ],
    stack: [
      {
        category: "Switching & routing",
        items: ["Cisco", "Aruba", "Juniper", "MikroTik", "TP-Link Omada"],
      },
      {
        category: "Wireless",
        items: [
          "Cisco Meraki",
          "Aruba Instant On",
          "Ruckus",
          "Ubiquiti UniFi",
        ],
      },
      {
        category: "Servers & storage",
        items: ["HPE ProLiant", "Dell PowerEdge", "Lenovo ThinkSystem", "NetApp", "Synology"],
      },
      {
        category: "Virtualisation",
        items: ["VMware vSphere", "Hyper-V", "Nutanix", "Proxmox"],
      },
      {
        category: "Monitoring",
        items: ["PRTG", "Zabbix", "LibreNMS", "Datadog"],
      },
    ],
    useCases: [
      {
        title: "12-branch retail rollout",
        body: "Pre-staged kit, weekend cutovers, single-pane monitoring across all sites.",
      },
      {
        title: "ERP-ready datacenter",
        body: "HCI design, redundant connectivity, sub-millisecond database latency.",
      },
      {
        title: "Hybrid Wi-Fi refresh",
        body: "Cisco Meraki at HQ, lightweight AP-controllers at branches with cloud roaming.",
      },
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
    image: "/solutions/Data_Backup_%26_Recovery.jpeg",
    overview: [
      "The question isn't whether you have backups — it's whether you've tested them. We've watched companies discover, mid-incident, that their backup data was last verified two years ago. Or that the restore process needs a server that's gone in the same outage.",
      "Kepsure designs backup as an operational discipline, not a software install. Immutable repositories, tested runbooks, quarterly recovery drills, and clear RPO/RTO commitments per workload — so when the bad day comes, you're recovering from muscle memory.",
    ],
    quickFacts: [
      { label: "Engagement", value: "Design · Migration · DRaaS" },
      { label: "Stack focus", value: "Veeam · Acronis · Commvault" },
      { label: "Recovery targets", value: "Sub-15-min RPO · 1-hr RTO" },
      { label: "Coverage", value: "VMs · Endpoints · M365 · Tape" },
    ],
    capabilities: [
      "Veeam, Acronis, Commvault and native cloud backup",
      "Air-gapped & immutable repositories (anti-ransomware)",
      "Cross-site replication and warm DR",
      "RPO / RTO design and tested recovery runbooks",
      "Long-term archival to S3 / Azure Blob / on-prem object",
      "Quarterly recovery drills with reports",
    ],
    stack: [
      {
        category: "Backup software",
        items: ["Veeam", "Acronis", "Commvault", "Rubrik"],
      },
      {
        category: "Storage targets",
        items: ["AWS S3", "Azure Blob", "Wasabi", "On-prem object", "LTO tape"],
      },
      {
        category: "Replication & DR",
        items: ["Veeam Replication", "Zerto", "Azure Site Recovery"],
      },
      {
        category: "SaaS protection",
        items: ["Druva", "Veeam for M365", "Acronis Cyber Protect"],
      },
    ],
    useCases: [
      {
        title: "Air-gapped manufacturing backups",
        body: "Immutable Veeam repository on hardened storage — ransomware-resilient at every layer.",
      },
      {
        title: "Sub-15-minute RPO for BFSI",
        body: "Synchronous replication between DC and DR site, daily failover drills with signed reports.",
      },
      {
        title: "Microsoft 365 SaaS backup",
        body: "Separate retention beyond Microsoft's native 30 days, granular item-level restore.",
      },
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
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    overview: [
      "Email is the most critical, least glamorous system in most businesses. When it breaks, everyone notices. When it's noisy, productivity bleeds away in spam-folder hunts. When it's unprotected, it becomes the easiest path into your environment.",
      "Kepsure delivers email as a reliable platform — Microsoft 365, Google Workspace or on-prem — with the security, archival and continuity controls real businesses need. We migrate cleanly, configure tightly, and stay on for tuning so the inbox earns its place again.",
    ],
    quickFacts: [
      { label: "Engagement", value: "Migration · Hardening · Continuity" },
      { label: "Stack focus", value: "M365 · Google Workspace · Barracuda" },
      { label: "Lead time", value: "200 mailboxes in 2 weekends" },
      { label: "Coverage", value: "Cloud · On-prem · Mobile · Archival" },
    ],
    capabilities: [
      "Microsoft 365 & Google Workspace deployment / migration",
      "On-premise Exchange and Zimbra environments",
      "Mail archiving & e-discovery (Barracuda, Mimecast)",
      "Anti-phishing, DMARC, DKIM, SPF hardening",
      "Email continuity & spooling for outage windows",
      "MDM and conditional access for mobile mail",
    ],
    stack: [
      {
        category: "Cloud platforms",
        items: ["Microsoft 365", "Google Workspace", "Zoho Mail"],
      },
      {
        category: "On-premise",
        items: ["Microsoft Exchange", "Zimbra"],
      },
      {
        category: "Email security",
        items: ["Barracuda", "Mimecast", "Proofpoint"],
      },
      {
        category: "DMARC management",
        items: ["dmarcian", "Valimail", "EasyDMARC"],
      },
      {
        category: "Archival & MDM",
        items: ["Barracuda Cloud Archive", "Veritas Vault", "Microsoft Intune"],
      },
    ],
    useCases: [
      {
        title: "G Suite → Microsoft 365 migration",
        body: "200-mailbox cutover with shared drives, calendar permissions and signatures preserved.",
      },
      {
        title: "DMARC enforcement programme",
        body: "Domain hardening + monitoring — moved to p=reject inside 90 days with no business impact.",
      },
      {
        title: "Layered M365 + Barracuda defence",
        body: "Anti-phishing, anti-impersonation and post-delivery clawback for executive accounts.",
      },
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
    image: "/solutions/Software_licensing.jpeg",
    overview: [
      "Licensing is where IT budgets quietly leak. Auto-renewals, shelfware, mismatched SKUs, missed Hybrid Benefit eligibility — small mistakes compound into six-figure annual waste. And come audit time, the same gaps that cost you money also cost you compliance findings.",
      "Kepsure manages your licensing as an active portfolio. We track every entitlement, flag renewals 90 days out, true-up annually with the OEM, and recommend changes only when they save real money. No padding, no opaque bundles — quotes split labour from licensing, every line item explained.",
    ],
    quickFacts: [
      { label: "Engagement", value: "True-up · Audit · Renewal advisory" },
      { label: "OEMs", value: "Microsoft · Adobe · VMware · Sophos" },
      { label: "Lookahead", value: "90-day renewal calendar" },
      { label: "Typical savings", value: "8–18% in year one" },
    ],
    capabilities: [
      "Microsoft (M365, Windows, SQL, Visual Studio, Power Platform)",
      "Adobe, AutoCAD, Tally, SAP Business One",
      "Antivirus & EDR (Sophos, Quick Heal, Kaspersky, CrowdStrike)",
      "Virtualisation (VMware, Citrix, Microsoft Hyper-V)",
      "Backup, networking and monitoring stacks",
      "Annual true-up, renewal and audit advisory",
    ],
    stack: [
      {
        category: "Microsoft",
        items: ["M365", "Windows", "SQL Server", "Visual Studio", "Power Platform", "Azure"],
      },
      {
        category: "Productivity & ERP",
        items: ["Adobe Creative Cloud", "AutoCAD", "Tally", "SAP Business One"],
      },
      {
        category: "Security",
        items: ["Sophos", "Quick Heal", "Kaspersky", "CrowdStrike", "SentinelOne"],
      },
      {
        category: "Virtualisation",
        items: ["VMware", "Citrix", "Hyper-V"],
      },
      {
        category: "Cloud & DevTools",
        items: ["Azure", "AWS", "Oracle", "GitHub Enterprise", "JetBrains"],
      },
    ],
    useCases: [
      {
        title: "Annual M365 true-up",
        body: "Saved 14% by consolidating from Business Premium to E3 + Defender for Business.",
      },
      {
        title: "Per-user → per-device licensing",
        body: "Switch saved a 200-seat retail customer ₹8L/year on shared-shift workstations.",
      },
      {
        title: "Hybrid Benefit migration",
        body: "Windows Server licences moved from on-prem to Azure with full audit-trail compliance.",
      },
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
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    overview: [
      "Enterprise IT isn't built — it's composed. Identity providers talk to SaaS apps. SIEM ingests from firewalls. Load balancers route between regions. The architecture either holds together gracefully as you scale, or it forces rebuilds every three years.",
      "Kepsure designs enterprise platforms as reference architectures with deliberate seams. Identity at the centre, telemetry from everywhere, predictable scale paths. We've delivered for 200-seat shops growing to 2,000+ — the deployments survive the growth.",
    ],
    quickFacts: [
      { label: "Engagement", value: "Architecture · Build · Run" },
      { label: "Stack focus", value: "Entra ID · Sentinel · F5 · VMware" },
      { label: "Scale", value: "200 → 2,000+ users" },
      { label: "Coverage", value: "IAM · SIEM · LB · PAM · Multi-cloud" },
    ],
    capabilities: [
      "Identity & Access Management (Azure AD, Okta, Keycloak)",
      "SIEM & SOC (Sentinel, Wazuh, Elastic, QRadar)",
      "Virtualisation (VMware vSphere, Hyper-V, Nutanix)",
      "Application delivery & load balancing (F5, NGINX+, HAProxy)",
      "Hybrid & multi-cloud (Azure, AWS, OCI)",
      "Privileged Access Management & secrets vaulting",
    ],
    stack: [
      {
        category: "Identity",
        items: ["Microsoft Entra ID", "Okta", "Keycloak", "Auth0", "Ping"],
      },
      {
        category: "SIEM & SOC",
        items: ["Microsoft Sentinel", "Splunk", "Wazuh", "Elastic", "IBM QRadar"],
      },
      {
        category: "Virtualisation & HCI",
        items: ["VMware vSphere", "Hyper-V", "Nutanix AHV", "Proxmox"],
      },
      {
        category: "Application delivery",
        items: ["F5 BIG-IP", "NGINX Plus", "HAProxy", "AWS ALB"],
      },
      {
        category: "PAM & secrets",
        items: ["CyberArk", "BeyondTrust", "HashiCorp Vault"],
      },
    ],
    useCases: [
      {
        title: "300-employee SSO + MFA rollout",
        body: "Entra ID SSO across 40 SaaS apps with conditional access and risk-based MFA.",
      },
      {
        title: "Multi-region active-active",
        body: "F5 GTM + Azure paired regions, sub-second failover with health-aware routing.",
      },
      {
        title: "SIEM tuning for analyst sanity",
        body: "Alert volume cut 70%, real-incident surface raised — analysts stopped quitting.",
      },
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

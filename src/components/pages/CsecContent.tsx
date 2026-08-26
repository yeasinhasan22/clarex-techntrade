/* eslint-disable @next/next/no-img-element */
import CapabilityTabs, {
  type CapabilityGroup,
} from "@/components/modern/CapabilityTabs";
import CsecHeroFx from "@/components/modern/CsecHeroFx";
import ModernPageEffects from "@/components/modern/ModernPageEffects";

const PLATFORM = [
  {
    acronym: "SIEM",
    full: "Security Information & Event Management",
    icon: "bi bi-clipboard-data",
    body: "Aggregates and correlates event data from endpoints, network devices, cloud workloads and applications in real time.",
  },
  {
    acronym: "XDR",
    full: "Extended Detection & Response",
    icon: "bi bi-diagram-3",
    body: "Pulls telemetry from endpoints, network devices, cloud workloads and third-party APIs into a single view.",
  },
  {
    acronym: "HIDS",
    full: "Host Intrusion Detection",
    icon: "bi bi-hdd-network",
    body: "Agent-level detection on every monitored host, so intrusions surface where they start.",
  },
  {
    acronym: "FIM",
    full: "File Integrity Monitoring",
    icon: "bi bi-file-earmark-lock",
    body: "Alerts the moment critical files or directories change, an early signal of compromise.",
  },
  {
    acronym: "VA",
    full: "Vulnerability Assessment",
    icon: "bi bi-search",
    body: "Continuous discovery of vulnerabilities, ranked so the most critical work comes first.",
  },
  {
    acronym: "XOAR",
    full: "Orchestration, Automation & Response",
    icon: "bi bi-lightning-charge",
    body: "Automated containment and response playbooks that cut the time between alert and action.",
  },
];

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "endpoint",
    label: "Endpoint Security",
    icon: "bi bi-hdd-stack",
    features: [
      {
        title: "Configuration Assessment",
        icon: "bi bi-sliders",
        body: "Finds misconfigurations and vulnerabilities on monitored endpoints so you can shrink your attack surface before anyone probes it.",
        points: [
          "Vulnerability detection",
          "Integrated compliance management",
          "System hardening",
          "Continuous monitoring",
          "Extensive configuration checks",
          "Reporting and analysis",
        ],
      },
      {
        title: "Malware Detection",
        icon: "bi bi-bug",
        body: "Multiple detection techniques cover ransomware, rootkits, spyware, adware, Trojans, viruses and worms across platforms.",
        points: [
          "Real-time cross-platform protection",
          "Ransomware protection",
          "Rootkit detection",
          "Extensible malware integrations",
          "Advanced rulesets and decoders",
          "Centralized threat visualization",
        ],
      },
      {
        title: "File Integrity Monitoring",
        icon: "bi bi-file-earmark-lock",
        body: "Change alerts on critical files and directories. This is both a compliance requirement and one of the earliest signs of a breach.",
        points: [
          "Real-time monitoring",
          "Security breach detection",
          "Regulatory compliance",
          "Centralized management",
          "Scalability",
          "Cross-platform support",
        ],
      },
    ],
  },
  {
    id: "intelligence",
    label: "Threat Intelligence",
    icon: "bi bi-binoculars",
    features: [
      {
        title: "Threat Hunting",
        icon: "bi bi-binoculars",
        body: "Tooling that lets analysts find and eliminate emerging threats before they establish persistence in your environment.",
        points: [
          "Comprehensive visibility",
          "Log retention, indexing and query",
          "MITRE ATT&CK mapping",
          "Threat intelligence feeds",
          "Tailored ruleset",
          "Command monitoring",
          "Customizable dashboards",
        ],
      },
      {
        title: "Log Data Analysis",
        icon: "bi bi-terminal",
        body: "We collect, analyse and store logs from across your infrastructure in real time, giving you the visibility to detect threats and satisfy auditors.",
        points: [
          "Security threat detection",
          "Regulatory compliance",
          "Third-party integrations",
          "Holistic infrastructure view",
          "Scalability and performance",
        ],
      },
      {
        title: "Vulnerability Detection",
        icon: "bi bi-search",
        body: "A risk-based approach ranks vulnerabilities by severity, so your team spends its time on the issues that actually matter.",
        points: [
          "Automated vulnerability detection",
          "Risk prioritization",
          "Asset visibility",
          "Simplified query and analysis",
          "Multi-platform compatibility",
          "Security configuration assessment",
        ],
      },
    ],
  },
  {
    id: "operations",
    label: "Security Operations",
    icon: "bi bi-shield-check",
    features: [
      {
        title: "Incident Response",
        icon: "bi bi-lightning-charge",
        body: "We help your team detect, analyse and respond to incidents quickly, limiting the impact on critical assets and day-to-day operations.",
        points: [
          "Automated incident response",
          "Streamlined operations",
          "Third-party integrations",
          "Reduced dwell time",
        ],
      },
      {
        title: "Regulatory Compliance",
        icon: "bi bi-patch-check",
        body: "We cover the technical requirements of standards including PCI DSS, HIPAA and GDPR, and produce the evidence auditors ask for.",
        points: [
          "Audit infrastructure",
          "Streamlined compliance activities",
          "Support for several standards",
          "Custom policies and controls",
          "Generated compliance reports",
        ],
      },
    ],
  },
  {
    id: "hygiene",
    label: "IT Hygiene",
    icon: "bi bi-clipboard-check",
    features: [
      {
        title: "IT Hygiene",
        icon: "bi bi-clipboard-check",
        body: "Attackers exploit the gaps that poor IT hygiene leaves behind. We keep inventory, configuration and patch levels current across on-premises and cloud workloads.",
        points: [
          "System inventory",
          "Security configuration assessment",
          "Regulatory compliance",
          "Vulnerability management",
          "Malware detection",
        ],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Security",
    icon: "bi bi-cloud-check",
    features: [
      {
        title: "Container Security",
        icon: "bi bi-boxes",
        body: "Containerised environments are monitored across their whole lifecycle, from image through to runtime behaviour.",
        points: [
          "Threat detection",
          "Auditing orchestration platforms",
          "Container health monitoring",
          "Container runtime monitoring",
          "Container inventory",
        ],
      },
      {
        title: "Posture Management",
        icon: "bi bi-speedometer2",
        body: "Cloud security posture management surfaces risk in your cloud accounts and keeps them aligned with regulatory standards.",
        points: [
          "Cloud provider integration",
          "Cloud configuration assessment",
          "Regulatory compliance",
          "Incident response",
        ],
      },
      {
        title: "Cloud Workload Protection",
        icon: "bi bi-cloud-check",
        body: "We monitor and protect workloads running on AWS, Microsoft Azure, Google Cloud Platform and Office 365.",
        points: [
          "Log analysis",
          "Threat detection and response",
          "Vulnerability management",
          "File integrity monitoring",
        ],
      },
    ],
  },
];

const PROCESS = [
  {
    title: "Detect",
    body: "We map the vulnerable areas of your assets and run continuous compliance checks. Correlation in our SOC pinpoints the cause of an attack rather than its symptoms.",
  },
  {
    title: "Analyze",
    body: "We assess whether a traffic flow is genuine or an attack, using threat intelligence tuned to your environment. Analysts confirm and report it.",
  },
  {
    title: "Remediate",
    body: "Detection produces concrete action points, so known CVEs and weakly configured servers get fixed before anyone exploits them.",
  },
  {
    title: "Monitor",
    body: "Knowing what to watch is the hard part. We build the alerting and dashboards first, so analysts track the signals that matter.",
  },
];

const VERTICALS = [
  "BFSI",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Legal & Audit Firms",
  "Education",
  "Retail",
  "Transportation",
  "Credit Unions",
  "Aviation",
  "Auto Dealers",
];

const OTHER_SERVICES = [
  { href: "/service7", label: "SOC Services" },
  { href: "/noc", label: "NOC Services" },
  { href: "/service6", label: "Security and Surveillance" },
  { href: "/service4", label: "Managed IT" },
  { href: "/service2", label: "Infrastructure and Network" },
  { href: "/service3", label: "Quality Assurance" },
  { href: "/service5", label: "Software Development" },
  { href: "/odoo", label: "Odoo Solutions" },
];

const SOC_LOGS = [
  { t: "+00:04.12", src: "SIEM", msg: "correlation hit  T1059.001" },
  { t: "+00:04.18", src: "XDR", msg: "endpoint 10.4.12.88  contained" },
  { t: "+00:04.25", src: "FIM", msg: "/etc/shadow  hash mismatch" },
  { t: "+00:04.31", src: "HIDS", msg: "privilege escalation  blocked" },
  { t: "+00:04.37", src: "VA", msg: "CVE-2024-3400  ranked critical" },
  { t: "+00:04.44", src: "XOAR", msg: "playbook SOC-17  executed" },
  { t: "+00:04.51", src: "SIEM", msg: "lateral movement  T1021  flagged" },
  { t: "+00:04.58", src: "XDR", msg: "beacon 185.22.9.4  dropped" },
];

const TICKER = [
  "SIEM",
  "XDR",
  "HIDS",
  "FIM",
  "VA",
  "XOAR",
  "T1059.001",
  "T1078",
  "T1486",
  "T1566.001",
  "MITRE ATT&CK",
  "PCI DSS",
  "HIPAA",
  "GDPR",
  "24x7 SOC",
  "THREAT HUNTING",
];

export default function CsecContent() {
  return (
    <div className="cx-page">
      <ModernPageEffects />
      <noscript>
        <style>{`.cx-reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ---------------- Hero ---------------- */}
      <section className="cx-hero cx-hero--csec">
        <CsecHeroFx />
        <div className="cx-csec-hex" aria-hidden="true" />
        <div className="cx-csec-scanlines" aria-hidden="true" />

        <div className="cx-container">
          <div className="cx-hero-grid">
            <div className="cx-hero-copy">
              <div className="cx-csec-status" aria-hidden="true">
                <span className="cx-csec-status-tag">SOC LIVE</span>
                <span className="cx-csec-status-line">threat_feed :: active</span>
                <span className="cx-csec-caret" />
              </div>
              <span className="cx-eyebrow">Cybersecurity Excellence Center</span>
              <h1 className="cx-h1">
                Catch the attack while it is still{" "}
                <span className="cx-accent-text cx-csec-shimmer">unfolding</span>
              </h1>
              <p className="cx-lead">
                SIEM, XDR, HIDS, FIM, VA and XOAR unified into one on-premises and
                cloud platform &mdash; tuned to your infrastructure and watched by
                human analysts in a 24&times;7 SOC.
              </p>
              <div className="cx-btn-row">
                <a className="cx-btn cx-btn--primary" href="/contact">
                  Talk to our SOC team
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
                <a className="cx-btn cx-btn--ghost" href="#capabilities">
                  Explore capabilities
                </a>
              </div>
              <div className="cx-hero-chips">
                <span className="cx-hero-chips-label">Aligned with</span>
                <span className="cx-chip">
                  <i className="bi bi-bullseye" aria-hidden="true" />
                  MITRE ATT&amp;CK
                </span>
                <span className="cx-chip">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  PCI DSS
                </span>
                <span className="cx-chip">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  HIPAA
                </span>
                <span className="cx-chip">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  GDPR
                </span>
              </div>
            </div>

            <div className="cx-hero-visual">
              <figure className="cx-hero-frame cx-hero-frame--csec">
                <span className="cx-csec-hud cx-csec-hud--tl" aria-hidden="true" />
                <span className="cx-csec-hud cx-csec-hud--tr" aria-hidden="true" />
                <span className="cx-csec-hud cx-csec-hud--bl" aria-hidden="true" />
                <span className="cx-csec-hud cx-csec-hud--br" aria-hidden="true" />
                <img
                  src="/assets/img/soc.webp"
                  alt="Security operations centre analysts monitoring dashboards"
                />
                <span className="cx-csec-frame-scan" aria-hidden="true" />
                <div className="cx-csec-terminal" aria-hidden="true">
                  <div className="cx-csec-terminal-head">
                    <span>soc_console // stream</span>
                    <span className="cx-csec-live">live</span>
                  </div>
                  <div className="cx-csec-terminal-body">
                    <div className="cx-csec-terminal-track">
                      {SOC_LOGS.map((log) => (
                        <div className="cx-csec-log" key={`a-${log.t}`}>
                          <span className="cx-csec-log-t">{log.t}</span>
                          <span className="cx-csec-log-src">{log.src}</span>
                          <span className="cx-csec-log-msg">{log.msg}</span>
                        </div>
                      ))}
                      {SOC_LOGS.map((log) => (
                        <div className="cx-csec-log" key={`b-${log.t}`}>
                          <span className="cx-csec-log-t">{log.t}</span>
                          <span className="cx-csec-log-src">{log.src}</span>
                          <span className="cx-csec-log-msg">{log.msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>
              <div className="cx-float-card">
                <span className="cx-float-card-icon" aria-hidden="true">
                  <i className="bi bi-shield-check" />
                </span>
                <div>
                  <strong>
                    <span className="cx-pulse" aria-hidden="true" /> 24&times;7 SOC
                  </strong>
                  <span>Human analysts, not just alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cx-csec-ticker" aria-hidden="true">
          <div className="cx-csec-ticker-track">
            {[0, 1].map((copy) =>
              TICKER.map((item) => (
                <span className="cx-csec-ticker-item" key={`${copy}-${item}`}>
                  {item}
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ---------------- In-page nav ---------------- */}
      <nav className="cx-subnav" aria-label="Page sections">
        <div className="cx-container">
          <div className="cx-subnav-inner">
            <a href="#platform">Platform</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">How it works</a>
            <a href="#why">Why us</a>
            <a href="#verticals">Verticals</a>
          </div>
        </div>
      </nav>

      {/* ---------------- Stats ---------------- */}
      <section className="cx-section cx-section--tight">
        <div className="cx-container">
          <div className="cx-stats cx-reveal">
            <div className="cx-stat">
              <div className="cx-stat-value">
                6<em>-in-1</em>
              </div>
              <p className="cx-stat-label">
                SIEM, XDR, HIDS, FIM, VA and XOAR in a single platform
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">24&times;7</div>
              <p className="cx-stat-label">
                SOC monitoring backed by human intelligence
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">11</div>
              <p className="cx-stat-label">
                Industry verticals we build detection content for
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">
                <em>Vendor-agnostic</em>
              </div>
              <p className="cx-stat-label">
                Any firewall, server, EDR or network device
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Platform ---------------- */}
      <section className="cx-section" id="platform">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">One platform</span>
            <h2 className="cx-h2">Six security disciplines, one console</h2>
            <p className="cx-lead">
              Most teams stitch these together from separate products and lose the
              connections between them. CLARExTech runs them as one system, so
              detection, response and compliance all read from the same data.
            </p>
          </header>

          <div className="cx-grid cx-grid--3">
            {PLATFORM.map((item) => (
              <article className="cx-card cx-card--acronym cx-reveal" key={item.acronym}>
                <span className="cx-card-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <div className="cx-acronym">{item.acronym}</div>
                <span className="cx-acronym-full">{item.full}</span>
                <p className="cx-body cx-body--sm">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Capabilities ---------------- */}
      <section className="cx-section" id="capabilities">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Capabilities</span>
            <h2 className="cx-h2">What we monitor, and what we do about it</h2>
            <p className="cx-lead">
              Grouped by where the work happens. Pick an area to see the detail
              rather than reading all of it at once.
            </p>
          </header>

          <div className="cx-reveal">
            <CapabilityTabs groups={CAPABILITY_GROUPS} />
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="cx-section" id="process">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">How it works</span>
            <h2 className="cx-h2">Detect. Analyze. Remediate. Monitor.</h2>
            <p className="cx-lead">
              A repeating cycle rather than a one-off audit. Each pass hardens the
              infrastructure a little further.
            </p>
          </header>

          <div className="cx-steps">
            {PROCESS.map((step) => (
              <article className="cx-step cx-reveal" key={step.title}>
                <span className="cx-step-num" />
                <h3 className="cx-h3">{step.title}</h3>
                <p className="cx-body cx-body--sm">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="cx-section" id="why">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Why CLARExTech</span>
            <h2 className="cx-h2">Built on tooling, run by people</h2>
          </header>

          <div className="cx-bento">
            <article className="cx-card cx-span-2 cx-reveal">
              <span className="cx-card-tag">Robust, proactive &amp; predictive</span>
              <h3 className="cx-h3">
                Security monitoring mapped to real attacker behaviour
              </h3>
              <p className="cx-body">
                We combine security monitoring, file integrity monitoring and
                endpoint configuration assessment with the MITRE ATT&amp;CK
                framework &mdash; a documented knowledge base of the tactics and
                techniques real threat actors use. That mapping is what lets us
                recognise an attack while it is still unfolding, instead of
                reconstructing it afterwards.
              </p>
            </article>

            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-people" />
              </span>
              <h3 className="cx-h3">HUMINT is the secret sauce</h3>
              <p className="cx-body cx-body--sm">
                The platform is backed by human intelligence from a 24&times;7 SOC.
                Cybersecurity skills are scarce globally, so we extend our own
                domain experts through a network of security delivery partners.
              </p>
            </article>

            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-diagram-3" />
              </span>
              <h3 className="cx-h3">Vendor-agnostic by design</h3>
              <p className="cx-body cx-body--sm">
                We cover any firewall, server, EDR, networking or security device,
                and add a second EDR layer with SOAR and MITRE ATT&amp;CK
                integration for real-time threat hunting.
              </p>
            </article>

            <article className="cx-card cx-span-2 cx-reveal">
              <span className="cx-card-tag">No more overwhelming alerts</span>
              <div className="cx-grid cx-grid--2" style={{ gap: "28px" }}>
                <div>
                  <div className="cx-figure-stat">
                    35<span>%</span>
                  </div>
                  <p className="cx-body cx-body--sm" style={{ marginTop: "10px" }}>
                    of security professionals struggle to keep up with alert
                    volumes, according to{" "}
                    <a
                      className="cx-inline-link"
                      href="https://www.csoonline.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      CSO Online
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <div className="cx-figure-stat">
                    88<span>%</span>
                  </div>
                  <p className="cx-body cx-body--sm" style={{ marginTop: "10px" }}>
                    face SIEM challenges, per DimensionalResearch. Our analysts
                    learn your infrastructure first, then build dashboards tuned to
                    it, so you get the alerts that matter.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- Verticals ---------------- */}
      <section className="cx-section" id="verticals">
        <div className="cx-container">
          <header className="cx-section-head cx-section-head--center cx-reveal">
            <span className="cx-eyebrow">Target verticals</span>
            <h2 className="cx-h2">Where our detection content is already tuned</h2>
            <p className="cx-lead">
              Each of these industries brings its own compliance obligations and
              threat profile. We start from content built for yours.
            </p>
          </header>

          <div
            className="cx-chip-grid cx-reveal"
            style={{ justifyContent: "center" }}
          >
            {VERTICALS.map((vertical) => (
              <span className="cx-chip" key={vertical}>
                <i className="bi bi-shield-check" aria-hidden="true" />
                {vertical}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Other services ---------------- */}
      <section className="cx-section cx-section--tight">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Related services</span>
            <h2 className="cx-h2">Explore the rest of what we run</h2>
          </header>

          <div className="cx-grid cx-grid--4">
            {OTHER_SERVICES.map((service) => (
              <a className="cx-link-card cx-reveal" href={service.href} key={service.href}>
                {service.label}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cx-section cx-section--tight">
        <div className="cx-container">
          <div className="cx-cta cx-reveal">
            <div>
              <h2 className="cx-h2">Find out what your current setup is missing</h2>
              <p className="cx-lead">
                Send us your environment and compliance obligations. We will come
                back with the gaps we would close first and what monitoring it
                takes.
              </p>
            </div>
            <div className="cx-cta-aside">
              <a className="cx-btn cx-btn--primary" href="/contact">
                Request an assessment
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
              <a className="cx-cta-contact" href="tel:+8801922599444">
                <i className="bi bi-telephone" aria-hidden="true" />
                +880-1922-599444
              </a>
              <a className="cx-cta-contact" href="mailto:info@clarex.co">
                <i className="bi bi-envelope" aria-hidden="true" />
                info@clarex.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

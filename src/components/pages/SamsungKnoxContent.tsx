/* eslint-disable @next/next/no-img-element */
import KnoxHeroFx from "@/components/modern/KnoxHeroFx";
import ModernPageEffects from "@/components/modern/ModernPageEffects";

const SOLUTIONS = [
  {
    title: "Knox Manage",
    icon: "bi bi-phone",
    body: "Cloud-based mobile device management for Samsung Galaxy smartphones, tablets, and wearables — policies, apps, and compliance from one console.",
  },
  {
    title: "Knox Mobile Enrollment",
    icon: "bi bi-cloud-upload",
    body: "Zero-touch bulk enrollment so new devices arrive pre-configured for your policies, without manual IT setup on every handset.",
  },
  {
    title: "Knox Configure",
    icon: "bi bi-sliders",
    body: "Remotely tailor Samsung devices with custom branding, pre-loaded apps, and locked-down settings before they reach your teams.",
  },
  {
    title: "Knox Guard",
    icon: "bi bi-shield-lock",
    body: "Restrict fraudulent or stolen devices so corporate data stays protected even when hardware leaves your control.",
  },
  {
    title: "Knox E-FOTA",
    icon: "bi bi-arrow-repeat",
    body: "Control when and how OS updates roll out across your fleet, so patches land on your schedule — not in the middle of a shift.",
  },
  {
    title: "Knox Suite",
    icon: "bi bi-grid-3x3-gap",
    body: "A unified Samsung Knox license bundle covering enrollment, management, configuration, and analytics in one subscription.",
  },
];

const CAPABILITIES = [
  {
    title: "Defense-grade security",
    icon: "bi bi-shield-check",
    body: "Knox is built into Samsung hardware and software, protecting work data at the chip level — trusted by governments and enterprises worldwide.",
  },
  {
    title: "Centralized MDM",
    icon: "bi bi-diagram-3",
    body: "Configure, deploy, and monitor thousands of endpoints from a single cloud console. Push apps and enforce compliance without touching each device.",
  },
  {
    title: "Productivity at scale",
    icon: "bi bi-graph-up-arrow",
    body: "Keep frontline, field, and office workers connected with devices tuned to their role — while IT retains full visibility and control.",
  },
  {
    title: "Android Enterprise ready",
    icon: "bi bi-android2",
    body: "Samsung Galaxy devices and Knox Manage are validated for Android Enterprise Recommended — the standard for business-ready mobility.",
  },
];

const STEPS = [
  {
    title: "Assess",
    body: "We map your device fleet, compliance requirements, and existing EMM setup to recommend the right Knox licenses and rollout plan.",
  },
  {
    title: "License & deploy",
    body: "As Bangladesh's only Knox license reseller, we procure, provision, and activate licenses — then configure enrollment and baseline policies.",
  },
  {
    title: "Support & scale",
    body: "Ongoing license management, policy updates, and troubleshooting so your mobile estate stays secure as headcount and locations grow.",
  },
];

const INDUSTRIES = [
  "Banking & Financial Services",
  "Manufacturing",
  "Retail & Distribution",
  "Healthcare",
  "Logistics & Field Services",
  "Government & Public Sector",
  "Education",
  "Enterprise & Corporate IT",
];

const ORBIT_PILLS = [
  { label: "Knox Manage", icon: "bi bi-phone", style: { top: "6%", left: "4%" } },
  { label: "Enrollment", icon: "bi bi-cloud-upload", style: { top: "16%", right: "2%" } },
  { label: "Configure", icon: "bi bi-sliders", style: { bottom: "24%", right: "4%" } },
  { label: "Knox Guard", icon: "bi bi-shield-lock", style: { top: "36%", left: "-4%" } },
];

const MDM_EVENTS = [
  { src: "MDM", msg: "policy push · 240 devices updated" },
  { src: "KME", msg: "bulk enrollment · WH-batch-041 complete" },
  { src: "Guard", msg: "device lock · lost unit remoted" },
  { src: "E-FOTA", msg: "OS update window · scheduled Fri 02:00" },
  { src: "Apps", msg: "work profile · 18 packages synced" },
  { src: "MDM", msg: "compliance check · 98.4% pass rate" },
  { src: "Config", msg: "branding pack · retail kiosk profile" },
  { src: "Suite", msg: "license activate · 120 seats provisioned" },
];

const TICKER = [
  "Knox Manage",
  "Mobile Enrollment",
  "Knox Configure",
  "Knox Guard",
  "E-FOTA",
  "Knox Suite",
  "MDM",
  "16,000+ Licenses",
  "Only Reseller in BD",
  "Defense-grade Security",
  "Android Enterprise",
  "Zero-touch Deploy",
];

const OTHER_SERVICES = [
  { href: "/csec", label: "Cybersecurity Center" },
  { href: "/odoo", label: "Odoo Solutions" },
  { href: "/service4", label: "Managed IT" },
  { href: "/service7", label: "SOC Services" },
  { href: "/noc", label: "NOC Services" },
  { href: "/service2", label: "Infrastructure and Network" },
  { href: "/service5", label: "Software Development" },
  { href: "/service8", label: "ERP Solutions" },
];

export default function SamsungKnoxContent() {
  return (
    <div className="cx-page">
      <ModernPageEffects />
      <noscript>
        <style>{`.cx-reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ---------------- Hero ---------------- */}
      <section className="cx-hero cx-hero--knox">
        <KnoxHeroFx />
        <div className="cx-knox-appgrid" aria-hidden="true" />
        <div className="cx-knox-bloom" aria-hidden="true" />

        <div className="cx-container">
          <div className="cx-hero-grid">
            <div className="cx-hero-copy">
              <div className="cx-knox-status" aria-hidden="true">
                <span className="cx-knox-status-tag">Official Reseller</span>
                <span className="cx-knox-status-line">fleet_mdm :: secured</span>
                <span className="cx-knox-sync-dot" />
              </div>
              <span className="cx-eyebrow">Samsung Knox Partnership</span>
              <h1 className="cx-h1">
                MDM that keeps your fleet{" "}
                <span className="cx-accent-text cx-knox-shimmer">secured</span>
              </h1>
              <p className="cx-lead">
                Samsung Knox is the enterprise platform for configuring, securing,
                and managing mobile devices. CLAREx Tech &amp; Trade is
                Bangladesh&apos;s only authorized Knox license reseller —
                16,000+ licenses delivered in the last year.
              </p>
              <div className="cx-btn-row">
                <a className="cx-btn cx-btn--primary" href="/contact">
                  Request Knox licenses
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
                <a className="cx-btn cx-btn--ghost" href="#solutions">
                  Explore solutions
                </a>
              </div>
              <div className="cx-hero-chips">
                <span className="cx-hero-chips-label">At a glance</span>
                <span className="cx-chip">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  Only reseller in Bangladesh
                </span>
                <span className="cx-chip">
                  <i className="bi bi-phone" aria-hidden="true" />
                  16,000+ licenses / year
                </span>
                <span className="cx-chip">
                  <i className="bi bi-shield-check" aria-hidden="true" />
                  Defense-grade security
                </span>
              </div>
            </div>

            <div className="cx-hero-visual">
              {ORBIT_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className="cx-knox-orbit"
                  style={pill.style}
                  aria-hidden="true"
                >
                  <i className={pill.icon} />
                  {pill.label}
                </span>
              ))}

              <figure className="cx-hero-frame cx-hero-frame--knox">
                <img
                  src="/assets/img/samsung-knox.jpg"
                  alt="Samsung Knox mobile device management"
                />
                <div className="cx-knox-feed" aria-hidden="true">
                  <div className="cx-knox-feed-head">
                    <span>mdm_console // live</span>
                    <span className="cx-knox-feed-live">secured</span>
                  </div>
                  <div className="cx-knox-feed-body">
                    <div className="cx-knox-feed-track">
                      {MDM_EVENTS.map((row) => (
                        <div className="cx-knox-feed-row" key={`a-${row.msg}`}>
                          <span className="cx-knox-feed-src">{row.src}</span>
                          <span className="cx-knox-feed-msg">{row.msg}</span>
                        </div>
                      ))}
                      {MDM_EVENTS.map((row) => (
                        <div className="cx-knox-feed-row" key={`b-${row.msg}`}>
                          <span className="cx-knox-feed-src">{row.src}</span>
                          <span className="cx-knox-feed-msg">{row.msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>

              <div className="cx-float-card cx-float-card--knox">
                <span className="cx-float-card-icon" aria-hidden="true">
                  <i className="bi bi-award" />
                </span>
                <div>
                  <strong>16,000+ licenses</strong>
                  <span>Sold in the last 12 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cx-knox-ticker" aria-hidden="true">
          <div className="cx-knox-ticker-track">
            {[0, 1].map((copy) =>
              TICKER.map((item) => (
                <span className="cx-knox-ticker-item" key={`${copy}-${item}`}>
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
            <a href="#about">About Knox</a>
            <a href="#partnership">Partnership</a>
            <a href="#solutions">Solutions</a>
            <a href="#delivery">Delivery</a>
            <a href="#industries">Industries</a>
          </div>
        </div>
      </nav>

      {/* ---------------- Stats ---------------- */}
      <section className="cx-section cx-section--tight">
        <div className="cx-container">
          <div className="cx-stats cx-reveal">
            <div className="cx-stat">
              <div className="cx-stat-value">
                16,000<em>+</em>
              </div>
              <p className="cx-stat-label">
                Knox licenses sold by CLAREx in the last 12 months
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">
                <em>Only</em>
              </div>
              <p className="cx-stat-label">
                Samsung Knox license reseller in Bangladesh
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">150M+</div>
              <p className="cx-stat-label">
                Devices managed worldwide on the Knox platform
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">35K+</div>
              <p className="cx-stat-label">
                Businesses supported globally with Knox solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="cx-section" id="about">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">About Samsung Knox</span>
            <h2 className="cx-h2">Mobile device management built for enterprise</h2>
            <p className="cx-lead">
              Samsung Knox is a business platform for configuring and managing
              mobile devices — keeping fleets connected, protected, and productive
              with defense-grade security at both hardware and software level.
            </p>
          </header>

          <div className="cx-grid cx-grid--2">
            {CAPABILITIES.map((item) => (
              <article className="cx-card cx-reveal" key={item.title}>
                <span className="cx-card-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h3 className="cx-h3">{item.title}</h3>
                <p className="cx-body cx-body--sm">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Partnership ---------------- */}
      <section className="cx-section" id="partnership">
        <div className="cx-container">
          <div className="cx-bento">
            <article className="cx-card cx-span-2 cx-reveal">
              <span className="cx-card-tag">CLAREx × Samsung Knox</span>
              <h3 className="cx-h3">
                The local partner behind Bangladesh&apos;s Knox deployments
              </h3>
              <p className="cx-body">
                CLAREx Tech &amp; Trade participates in the{" "}
                <a
                  className="cx-inline-link"
                  href="https://partner.samsungknox.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Samsung Knox Partner Program
                </a>
                , giving customers access to official licensing, deployment
                expertise, and ongoing support. We are the only authorized Samsung
                Knox license reseller in Bangladesh.
              </p>
              <p className="cx-body cx-body--sm" style={{ marginTop: "16px" }}>
                Over the past year we have sold more than 16,000 Knox licenses to
                organizations rolling out secured mobile fleets across banking,
                manufacturing, retail, logistics, and corporate IT.
              </p>
            </article>

            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-key" />
              </span>
              <h3 className="cx-h3">License procurement</h3>
              <p className="cx-body cx-body--sm">
                Knox Manage, Knox Suite, and individual cloud solutions — sourced
                and activated through the official reseller channel.
              </p>
            </article>

            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-headset" />
              </span>
              <h3 className="cx-h3">Deployment support</h3>
              <p className="cx-body cx-body--sm">
                Enrollment planning, policy design, and rollout assistance so
                devices are managed from day one.
              </p>
            </article>
          </div>

          <div className="cx-knox-logo-panel cx-reveal" style={{ marginTop: "40px" }}>
            <img
              src="/assets/img/logos/Samsung_Knox_Logo.png"
              alt="Samsung Knox"
            />
            <p>
              Learn more at{" "}
              <a
                className="cx-inline-link"
                href="https://www.samsungknox.com/en/about-knox"
                target="_blank"
                rel="noreferrer noopener"
              >
                samsungknox.com/about-knox
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Solutions ---------------- */}
      <section className="cx-section" id="solutions">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Knox portfolio</span>
            <h2 className="cx-h2">Solutions for every stage of the device lifecycle</h2>
            <p className="cx-lead">
              From bulk enrollment and remote configuration to OS update control
              and theft protection — Knox covers the full mobile estate.
            </p>
          </header>

          <div className="cx-grid cx-grid--3">
            {SOLUTIONS.map((item) => (
              <article className="cx-card cx-reveal" key={item.title}>
                <span className="cx-card-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h3 className="cx-h3">{item.title}</h3>
                <p className="cx-body cx-body--sm">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Delivery ---------------- */}
      <section className="cx-section" id="delivery">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">How we deliver</span>
            <h2 className="cx-h2">From license to live fleet</h2>
            <p className="cx-lead">
              Buying Knox through CLAREx means more than a license key — you get
              a local team that understands Samsung&apos;s platform and how
              Bangladeshi enterprises deploy mobile devices.
            </p>
          </header>

          <div className="cx-steps">
            {STEPS.map((step) => (
              <article className="cx-step cx-reveal" key={step.title}>
                <span className="cx-step-num" />
                <h3 className="cx-h3">{step.title}</h3>
                <p className="cx-body cx-body--sm">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section className="cx-section" id="industries">
        <div className="cx-container">
          <header className="cx-section-head cx-section-head--center cx-reveal">
            <span className="cx-eyebrow">Where Knox fits</span>
            <h2 className="cx-h2">Industries we support with Knox licensing</h2>
            <p className="cx-lead">
              Any organization with a mobile workforce — or a need to lock down
              corporate devices — benefits from Knox MDM.
            </p>
          </header>

          <div
            className="cx-chip-grid cx-reveal"
            style={{ justifyContent: "center" }}
          >
            {INDUSTRIES.map((vertical) => (
              <span className="cx-chip" key={vertical}>
                <i className="bi bi-building" aria-hidden="true" />
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
            <h2 className="cx-h2">Explore more from CLAREx</h2>
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
              <h2 className="cx-h2">Ready to secure your mobile fleet with Knox?</h2>
              <p className="cx-lead">
                Tell us how many devices you manage. We will recommend the right
                Knox licenses and rollout approach — as Bangladesh&apos;s only
                authorized reseller.
              </p>
            </div>
            <div className="cx-cta-aside">
              <a className="cx-btn cx-btn--primary" href="/contact">
                Get Knox pricing
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

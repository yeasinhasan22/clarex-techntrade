/* eslint-disable @next/next/no-img-element */
import ModernPageEffects from "@/components/modern/ModernPageEffects";

const MODULES = [
  { label: "ERP", icon: "bi bi-diagram-3" },
  { label: "CRM", icon: "bi bi-person-badge" },
  { label: "Accounting", icon: "bi bi-cash-coin" },
  { label: "Inventory", icon: "bi bi-box-seam" },
  { label: "Sales", icon: "bi bi-graph-up-arrow" },
  { label: "Purchase", icon: "bi bi-cart3" },
  { label: "Manufacturing", icon: "bi bi-gear-wide-connected" },
  { label: "eCommerce", icon: "bi bi-shop" },
  { label: "Human Resources", icon: "bi bi-people" },
  { label: "Projects", icon: "bi bi-kanban" },
];

const PHASES = [
  {
    title: "Requirements Gathering",
    body: "We capture your objectives and requirements up front. This is what sets the roadmap for everything that follows.",
  },
  {
    title: "Data Analysis & Design",
    body: "Data analysis and a structured design layout define the system architecture and the workflows it has to support.",
  },
  {
    title: "Development & Customization",
    body: "Our team builds and customises the solution against the agreed design, module by module.",
  },
  {
    title: "Testing & Bug Fixing",
    body: "Rigorous testing confirms the solution is stable, secure and performant before anyone depends on it.",
  },
  {
    title: "Training & Support",
    body: "Training sessions and ongoing support help your users adapt, so the system actually gets used as intended.",
  },
];

const SERVICES = [
  {
    title: "Analysis",
    icon: "bi bi-bar-chart-line",
    body: "Business and technical analysis that surfaces where the real improvements are.",
  },
  {
    title: "Configuration",
    icon: "bi bi-gear",
    body: "Setup and configuration of standard modules, tuned for performance.",
  },
  {
    title: "Customization",
    icon: "bi bi-sliders",
    body: "Adapting existing solutions to match requirements the standard build does not cover.",
  },
  {
    title: "Development",
    icon: "bi bi-code-slash",
    body: "Custom modules and software built around your business objectives.",
  },
  {
    title: "Integration",
    icon: "bi bi-plug",
    body: "Connecting Odoo to the systems you already run so work flows between them.",
  },
  {
    title: "Deployment",
    icon: "bi bi-lightning-charge",
    body: "End-to-end go-live with minimal downtime for the business.",
  },
  {
    title: "Hosting",
    icon: "bi bi-cloud-arrow-up",
    body: "Secure, scalable hosting sized to your workload and data residency needs.",
  },
  {
    title: "Training",
    icon: "bi bi-mortarboard",
    body: "Hands-on training so your team can actually use what we build.",
  },
];

const BENEFITS = [
  {
    title: "Operational efficiency",
    icon: "bi bi-speedometer2",
    body: "Manual handoffs between departments become a single flow of work in one system.",
  },
  {
    title: "Real-time insight",
    icon: "bi bi-graph-up-arrow",
    body: "Reporting reads live operational data instead of last month's spreadsheets.",
  },
  {
    title: "Room to scale",
    icon: "bi bi-boxes",
    body: "Add modules and users as the business grows, without replacing the platform.",
  },
  {
    title: "Workflow automation",
    icon: "bi bi-arrow-repeat",
    body: "Approvals, replenishment and invoicing run on rules rather than reminders.",
  },
  {
    title: "Better customer engagement",
    icon: "bi bi-people",
    body: "Sales, support and fulfilment work from one shared record of every customer.",
  },
];

const WHY_US = [
  { label: "Highly skilled and certified resources" },
  {
    label: "Professional business analysis team",
    detail: "including certified functional consultants",
  },
  { label: "Expert developer team" },
  { label: "Certified and professional accounting team" },
  {
    label: "State-of-the-art IT infrastructure",
    detail: "secure data centres and cloud computing",
  },
  {
    label: "24/7 cybersecurity team",
    detail: "full-time security experts protecting your data",
  },
  { label: "Proven track record", detail: "global expertise across industries" },
  {
    label: "Client-centric approach",
    detail: "tailored solutions for sustainable growth",
  },
  {
    label: "24/7 operational support",
    detail: "dedicated professionals ensuring seamless execution",
  },
  { label: "Experience with international current affairs" },
];

const REGIONS = [
  { country: "Bangladesh", img: "/assets/img/bangladesh.webp" },
  { country: "Nigeria", img: "/assets/img/nigeria.png" },
  { country: "United States", img: "/assets/img/usa.webp" },
  { country: "United Kingdom", img: "/assets/img/uk.png" },
];

const VERTICALS = [
  "Manufacturing",
  "Retail & E-commerce",
  "Professional Services",
  "Distribution & Supply Chain",
  "Healthcare",
  "Education",
];

const OTHER_SERVICES = [
  { href: "/service8", label: "ERP Solutions" },
  { href: "/service4", label: "Managed IT" },
  { href: "/service5", label: "Software Development" },
  { href: "/service3", label: "Quality Assurance" },
  { href: "/csec", label: "Cybersecurity Center" },
  { href: "/service7", label: "SOC Services" },
  { href: "/noc", label: "NOC Services" },
  { href: "/service2", label: "Infrastructure and Network" },
];

export default function OdooContent() {
  return (
    <div className="cx-page">
      <ModernPageEffects />
      <noscript>
        <style>{`.cx-reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ---------------- Hero ---------------- */}
      <section className="cx-hero">
        <div className="cx-container">
          <div className="cx-hero-grid">
            <div className="cx-hero-copy">
              <span className="cx-eyebrow">Odoo Solutions</span>
              <h1 className="cx-h1">
                ERP that fits how your business
                <span className="cx-accent-text"> actually runs</span>
              </h1>
              <p className="cx-lead">
                Odoo implementation, customisation and support from a certified
                partner. ERP, CRM, accounting, inventory and e-commerce in one
                modular suite &mdash; so you run only the parts you need and add
                more as you grow.
              </p>
              <div className="cx-btn-row">
                <a className="cx-btn cx-btn--primary" href="/contact">
                  Book an ERP consultation
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
                <a className="cx-btn cx-btn--ghost" href="#approach">
                  See our approach
                </a>
              </div>
              <div className="cx-hero-chips">
                <span className="cx-hero-chips-label">Credentials</span>
                <span className="cx-chip">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  Odoo 16 certified
                </span>
                <span className="cx-chip">
                  <i className="bi bi-clock-history" aria-hidden="true" />
                  Partner since 2023
                </span>
                <span className="cx-chip">
                  <i className="bi bi-globe" aria-hidden="true" />
                  Delivered in 4 countries
                </span>
              </div>
            </div>

            <div className="cx-hero-visual">
              <figure className="cx-hero-frame">
                <img
                  src="/assets/img/odoopartner.png"
                  alt="CLAREx Tech & Trade as an official Odoo partner"
                />
              </figure>
              <div className="cx-float-card">
                <span className="cx-float-card-icon" aria-hidden="true">
                  <i className="bi bi-patch-check" />
                </span>
                <div>
                  <strong>Odoo 16 Certified</strong>
                  <span>Validated to Odoo standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- In-page nav ---------------- */}
      <nav className="cx-subnav" aria-label="Page sections">
        <div className="cx-container">
          <div className="cx-subnav-inner">
            <a href="#partnership">Partnership</a>
            <a href="#modules">Modules</a>
            <a href="#approach">Approach</a>
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#global">Global delivery</a>
          </div>
        </div>
      </nav>

      {/* ---------------- Stats ---------------- */}
      <section className="cx-section cx-section--tight">
        <div className="cx-container">
          <div className="cx-stats cx-reveal">
            <div className="cx-stat">
              <div className="cx-stat-value">2023</div>
              <p className="cx-stat-label">Official Odoo partner since</p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">
                Odoo <em>16</em>
              </div>
              <p className="cx-stat-label">Certified implementation standard</p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">4</div>
              <p className="cx-stat-label">
                Countries we have delivered projects in
              </p>
            </div>
            <div className="cx-stat">
              <div className="cx-stat-value">5</div>
              <p className="cx-stat-label">
                Phase implementation method, from scoping to support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Partnership ---------------- */}
      <section className="cx-section" id="partnership">
        <div className="cx-container">
          <div className="cx-split">
            <div className="cx-reveal">
              <span className="cx-eyebrow">Our partnership with Odoo</span>
              <h2 className="cx-h2" style={{ marginTop: "18px" }}>
                A certified partner, not a reseller
              </h2>
              <p className="cx-lead" style={{ marginTop: "20px" }}>
                We have partnered with Odoo since 2023 and hold official Odoo 16
                certification, which means our implementations are validated
                against Odoo&apos;s own standards rather than our opinion of good
                practice.
              </p>
              <p className="cx-body" style={{ marginTop: "18px" }}>
                Odoo is an open-source suite covering ERP, CRM, accounting,
                inventory and e-commerce. Its modular architecture is the reason we
                recommend it: you deploy the processes that matter now and extend
                the same system later, instead of migrating again.
              </p>
              <div className="cx-btn-row" style={{ marginTop: "32px" }}>
                <a className="cx-btn cx-btn--ghost" href="#approach">
                  How we implement
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className="cx-cert cx-reveal">
              <img
                src="/assets/img/ODOO16CERT.png"
                alt="Odoo 16 certification awarded to CLAREx Tech & Trade"
                loading="lazy"
              />
              <figcaption>Odoo 16 Functional Certification</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- Modules ---------------- */}
      <section className="cx-section" id="modules">
        <div className="cx-container">
          <div className="cx-split">
            <div className="cx-reveal">
              <span className="cx-eyebrow">One suite</span>
              <h2 className="cx-h2" style={{ marginTop: "18px" }}>
                Only the modules you need
              </h2>
              <p className="cx-lead" style={{ marginTop: "20px" }}>
                Odoo covers the whole back office in one place. Because the apps
                share a single database, a sale updates stock, accounting and the
                customer record without an integration layer in between.
              </p>
            </div>
            <div className="cx-chip-grid cx-reveal">
              {MODULES.map((module) => (
                <span className="cx-chip" key={module.label}>
                  <i className={module.icon} aria-hidden="true" />
                  {module.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Approach ---------------- */}
      <section className="cx-section" id="approach">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Our approach</span>
            <h2 className="cx-h2">
              We design around your process, not a template
            </h2>
            <p className="cx-lead">
              Every engagement starts by understanding how the business runs today.
              The ERP design follows from the problems we find.
            </p>
          </header>

          <div className="cx-grid cx-grid--2" style={{ marginBottom: "56px" }}>
            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-people" />
              </span>
              <h3 className="cx-h3">Consultative engagement</h3>
              <p className="cx-body cx-body--sm">
                We map how your business actually operates first, then define an ERP
                solution around the challenges we uncover rather than a standard
                template.
              </p>
            </article>
            <article className="cx-card cx-reveal">
              <span className="cx-card-icon" aria-hidden="true">
                <i className="bi bi-plug" />
              </span>
              <h3 className="cx-h3">Customization &amp; integration</h3>
              <p className="cx-body cx-body--sm">
                We integrate and customise modules so the system fits your
                requirements now and can evolve as those requirements change.
              </p>
            </article>
          </div>

          <div className="cx-steps cx-steps--5">
            {PHASES.map((phase) => (
              <article className="cx-step cx-reveal" key={phase.title}>
                <span className="cx-step-num" />
                <h3 className="cx-h3">{phase.title}</h3>
                <p className="cx-body cx-body--sm">{phase.body}</p>
              </article>
            ))}
          </div>

          <figure className="cx-media-panel cx-reveal" style={{ marginTop: "56px" }}>
            <img
              src="/assets/img/ImplementationApproach.webp"
              alt="Diagram of the five phase Odoo implementation approach"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="cx-section" id="services">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Comprehensive services</span>
            <h2 className="cx-h2">Cover for the whole lifecycle</h2>
            <p className="cx-lead">
              From the first analysis through to long-term support, these are the
              eight areas we take on so you do not have to assemble a team of
              vendors.
            </p>
          </header>

          <div className="cx-grid cx-grid--4">
            {SERVICES.map((service) => (
              <article className="cx-card cx-reveal" key={service.title}>
                <span className="cx-card-icon" aria-hidden="true">
                  <i className={service.icon} />
                </span>
                <h3 className="cx-h3">{service.title}</h3>
                <p className="cx-body cx-body--sm">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Benefits ---------------- */}
      <section className="cx-section">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Key benefits</span>
            <h2 className="cx-h2">What changes once it is live</h2>
          </header>

          <div className="cx-grid cx-grid--3">
            {BENEFITS.map((benefit) => (
              <article className="cx-card cx-reveal" key={benefit.title}>
                <span className="cx-card-icon" aria-hidden="true">
                  <i className={benefit.icon} />
                </span>
                <h3 className="cx-h3">{benefit.title}</h3>
                <p className="cx-body cx-body--sm">{benefit.body}</p>
              </article>
            ))}
            <article className="cx-card cx-reveal">
              <span className="cx-card-tag">Expertise areas</span>
              <figure style={{ marginTop: "6px" }}>
                <img
                  src="/assets/img/expertiseArea.webp"
                  alt="Overview of CLAREx Tech & Trade expertise areas"
                  loading="lazy"
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
              </figure>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="cx-section" id="why">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Why CLAREx Tech &amp; Trade</span>
            <h2 className="cx-h2">The team behind the implementation</h2>
            <p className="cx-lead">
              ERP projects fail on people and process far more often than on
              software. This is who you get.
            </p>
          </header>

          <ul className="cx-checklist cx-reveal">
            {WHY_US.map((item) => (
              <li key={item.label}>
                <i className="bi bi-check-circle-fill" aria-hidden="true" />
                <span>
                  <strong>{item.label}</strong>
                  {item.detail ? ` — ${item.detail}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Global delivery ---------------- */}
      <section className="cx-section" id="global">
        <div className="cx-container">
          <header className="cx-section-head cx-section-head--center cx-reveal">
            <span className="cx-eyebrow">Global delivery</span>
            <h2 className="cx-h2">Where we have delivered</h2>
            <p className="cx-lead">
              Onshore and offshore delivery across four markets, with continuous
              monitoring and dedicated support after go-live.
            </p>
          </header>

          <div className="cx-grid cx-grid--4">
            {REGIONS.map((region) => (
              <article className="cx-card cx-region cx-reveal" key={region.country}>
                <div className="cx-region-flag">
                  <img
                    src={region.img}
                    alt={`Flag of ${region.country}`}
                    loading="lazy"
                  />
                </div>
                <div className="cx-region-body">
                  <h3 className="cx-h3">{region.country}</h3>
                  <p>Delivered projects</p>
                </div>
              </article>
            ))}
          </div>

          <div
            className="cx-chip-grid cx-reveal"
            style={{ justifyContent: "center", marginTop: "56px" }}
          >
            {VERTICALS.map((vertical) => (
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
              <h2 className="cx-h2">Let us scope your ERP project</h2>
              <p className="cx-lead">
                Tell us which processes hurt most today. We will come back with the
                modules to start from, a phased plan and what it takes to run it.
              </p>
            </div>
            <div className="cx-cta-aside">
              <a className="cx-btn cx-btn--primary" href="/contact">
                Book a consultation
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

/* eslint-disable @next/next/no-img-element */
import ModernPageEffects from "@/components/modern/ModernPageEffects";
import OdooHeroFx from "@/components/modern/OdooHeroFx";
import ProjectTabs from "@/components/modern/ProjectTabs";
import EventGallery from "@/components/modern/EventGallery";

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

const SERVICE_PHASES = [
  { id: "discover", label: "Discover", hint: "Find the gaps" },
  { id: "build", label: "Build", hint: "Shape the system" },
  { id: "launch", label: "Launch", hint: "Go live cleanly" },
  { id: "sustain", label: "Sustain", hint: "Keep it running" },
];

const SERVICES = [
  {
    title: "Analysis",
    icon: "bi bi-bar-chart-line",
    phase: "discover",
    phaseLabel: "Discover",
    body: "Business and technical analysis that surfaces where the real improvements are.",
  },
  {
    title: "Configuration",
    icon: "bi bi-gear",
    phase: "discover",
    phaseLabel: "Discover",
    body: "Setup and configuration of standard modules, tuned for performance.",
  },
  {
    title: "Customization",
    icon: "bi bi-sliders",
    phase: "build",
    phaseLabel: "Build",
    body: "Adapting existing solutions to match requirements the standard build does not cover.",
  },
  {
    title: "Development",
    icon: "bi bi-code-slash",
    phase: "build",
    phaseLabel: "Build",
    body: "Custom modules and software built around your business objectives.",
  },
  {
    title: "Integration",
    icon: "bi bi-plug",
    phase: "build",
    phaseLabel: "Build",
    body: "Connecting Odoo to the systems you already run so work flows between them.",
  },
  {
    title: "Deployment",
    icon: "bi bi-lightning-charge",
    phase: "launch",
    phaseLabel: "Launch",
    body: "End-to-end go-live with minimal downtime for the business.",
  },
  {
    title: "Hosting",
    icon: "bi bi-cloud-arrow-up",
    phase: "sustain",
    phaseLabel: "Sustain",
    body: "Secure, scalable hosting sized to your workload and data residency needs.",
  },
  {
    title: "Training",
    icon: "bi bi-mortarboard",
    phase: "sustain",
    phaseLabel: "Sustain",
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

const PROJECTS = [
  {
    id: "trt-arredo",
    name: "TRT ARREDO",
    logo: "/assets/img/logos/TRT_ARREDO_LOGO.png",
    industry: "Manufacturing & Design",
    country: "Nigeria",
    tagline: "Odoo 17 → 19 migration across 15 modules, full HR automation with Nigerian PAYE/Pension rules and project management workflows.",
    deliverables: [
      "Odoo 17 to Odoo 19 database migration and system upgrade",
      "End-to-end data migration, validation, and live database cutover",
      "Odoo 19 configuration and optimization across 15 modules",
      "Sales and quotation management with BOM-based costing",
      "Purchase and procurement management",
      "Inventory and warehouse management",
      "Manufacturing, BOM, and production workflow configuration",
      "Accounting, invoicing, and financial controls",
      "Automated payroll with Nigerian PAYE and Pension rules",
      "Employee attendance, Time Off, and HR management",
      "Multi-level employee appraisal workflows",
      "Project management, SOP workflows, and profitability dashboards",
      "Migration of design workflows from ClickUp to Odoo",
      "Digital design briefs and centralized document management",
      "Role-based access control and security",
      "Chatter/Discuss, notifications, and business process automation",
      "Management dashboards, reporting, and analytics",
    ],
  },
  {
    id: "la-mesa",
    name: "LA MESA",
    logo: "/assets/img/logos/La Mesa Logo.png",
    industry: "Food & Beverage",
    country: "Bangladesh",
    tagline: "Restaurant POS, waiter commission automation and real-time inventory sync for a growing dining brand.",
    deliverables: [
      "Restaurant POS and order management configuration",
      "Waiter-based POS order processing",
      "Automated 2% waiter commission calculation",
      "Commission recomputation and reporting automation",
      "Role-based POS access control and security",
      "Employee and biometric attendance integration",
      "Real-time POS and inventory synchronization",
      "Financial reporting and transaction automation",
    ],
  },
  {
    id: "goodybro",
    name: "GoodyBro",
    logo: "/assets/img/logos/Goodybro_logo.png",
    industry: "Retail & eCommerce",
    country: "Bangladesh",
    tagline: "End-to-end Shopify–Odoo integration covering sales, warehouse, accounting and deep customer analytics.",
    deliverables: [
      "Shopify eCommerce integration with Odoo",
      "Role-based user access control and security",
      "Sales and customer management",
      "Order tracking and delivery management",
      "Warehouse and inventory management",
      "Product-wise sales and quantity analysis",
      "Incoming stock monitoring and management",
      "Accounting and financial management",
      "Sales performance dashboards",
      "Customer count and geographical analysis",
      "District-wise and country-wise customer reporting",
      "Daily, weekly, monthly, and yearly performance analysis",
      "Integrated Sales, Warehouse, Inventory, and Accounting operations",
    ],
  },
  {
    id: "presswayy",
    name: "Presswayy",
    logo: "/assets/img/logos/presswayy-logo.png",
    industry: "Media & Publishing",
    country: "Bangladesh",
    tagline: "Integrated CRM, Sales and Accounting with granular revenue tracking, client lifecycle management and KPI dashboards.",
    deliverables: [
      "Role-based access control and user security",
      "Client onboarding and customer lifecycle management",
      "Sales pipeline and performance management",
      "Paid and unpaid client tracking",
      "Payment and revenue collection monitoring",
      "Daily, weekly, monthly, and yearly performance dashboards",
      "District-wise and country-wise client analysis",
      "Integrated CRM, Sales, and Accounting workflows",
      "Management dashboards and KPI reporting",
      "Business performance and revenue analysis",
    ],
  },
  {
    id: "marvel-be-you",
    name: "Marvel Be You",
    logo: "/assets/img/logos/marvel-logo.webp",
    industry: "Professional Services",
    country: "Bangladesh",
    tagline: "Full CRM build-out — pipeline, sales stages, activity automation and custom reporting for a brand consultancy.",
    deliverables: [
      "Lead and opportunity management",
      "CRM pipeline and sales stage configuration",
      "Role-based access control and user security",
      "Sales team and user configuration",
      "CRM activity and follow-up automation",
      "Customer and brand relationship management",
      "Customized CRM workflows",
      "CRM reporting and pipeline visibility",
    ],
  },
];

const VERTICALS = [
  "Manufacturing",
  "Retail & E-commerce",
  "Professional Services",
  "Distribution & Supply Chain",
  "Healthcare",
  "Education",
];

const EVENT_IMAGES = [
  {
    src: "/assets/img/odoo-images/odoo-1.webp",
    alt: "CLAREx team at the Odoo Partner Event, Radisson Blu Chittagong",
    caption: "CLAREx Tech & Trade sponsoring the Odoo Partner Event at Radisson Blu Chittagong (January 2025)",
  },
  {
    src: "/assets/img/odoo-images/odoo-2.webp",
    alt: "Odoo partner event session, January 2025",
    caption: "Official Odoo event session & ecosystem discussions at Radisson Blu Chittagong",
  },
  {
    src: "/assets/img/odoo-images/odoo-3.webp",
    alt: "CLAREx sponsoring the Odoo event, Radisson Blu Chittagong",
    caption: "CLAREx Tech & Trade official partner sponsorship showcase",
  },
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

const SYNC_EVENTS = [
  { module: "Sales", event: "SO-1042 confirmed → Inventory reserved" },
  { module: "Inventory", event: "Stock move posted · WH/OUT/0891" },
  { module: "Accounting", event: "Invoice INV/2025/0142 auto-posted" },
  { module: "CRM", event: "Lead qualified · pipeline stage updated" },
  { module: "Purchase", event: "PO-331 received · bill matched" },
  { module: "Manufacturing", event: "MO-220 completed · BOM consumed" },
  { module: "HR", event: "Payslip batch validated · 48 employees" },
  { module: "eCommerce", event: "Shopify order #8821 synced" },
];

const ORBIT_MODULES = [
  { label: "CRM", icon: "bi bi-person-badge", style: { top: "6%", left: "8%" } },
  { label: "Sales", icon: "bi bi-graph-up-arrow", style: { top: "18%", right: "4%" } },
  { label: "Inventory", icon: "bi bi-box-seam", style: { bottom: "22%", right: "6%" } },
  { label: "Accounting", icon: "bi bi-cash-coin", style: { top: "32%", left: "-2%" } },
];

const ODOO_TICKER = [
  "ERP",
  "CRM",
  "Accounting",
  "Inventory",
  "Sales",
  "Purchase",
  "Manufacturing",
  "eCommerce",
  "Human Resources",
  "Projects",
  "Odoo 16 Certified",
  "Modular Suite",
  "One Database",
  "Real-time Sync",
  "Workflow Automation",
  "Global Delivery",
];

export default function OdooContent() {
  return (
    <div className="cx-page">
      <ModernPageEffects />
      <noscript>
        <style>{`.cx-reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ---------------- Hero ---------------- */}
      <section className="cx-hero cx-hero--odoo">
        <OdooHeroFx />
        <div className="cx-odoo-appgrid" aria-hidden="true" />
        <div className="cx-odoo-bloom" aria-hidden="true" />

        <div className="cx-container">
          <div className="cx-hero-grid">
            <div className="cx-hero-copy">
              <div className="cx-odoo-status" aria-hidden="true">
                <span className="cx-odoo-status-tag">Odoo Partner</span>
                <span className="cx-odoo-status-line">modules :: syncing</span>
                <span className="cx-odoo-sync-dot" />
              </div>
              <span className="cx-eyebrow">Odoo Solutions</span>
              <h1 className="cx-h1">
                ERP that fits how your business{" "}
                <span className="cx-accent-text cx-odoo-shimmer">actually runs</span>
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
                <span className="cx-chip">
                  <i className="bi bi-trophy" aria-hidden="true" />
                  10+ projects completed
                </span>
              </div>
            </div>

            <div className="cx-hero-visual">
              {ORBIT_MODULES.map((mod) => (
                <span
                  key={mod.label}
                  className="cx-odoo-orbit"
                  style={mod.style}
                  aria-hidden="true"
                >
                  <i className={mod.icon} />
                  {mod.label}
                </span>
              ))}

              <figure className="cx-hero-frame cx-hero-frame--odoo">
                <img
                  src="/assets/img/odoo-images/odoo-1.webp"
                  alt="CLAREx Tech & Trade sponsoring the Odoo partner event at Radisson Blu Chittagong"
                />
                <div className="cx-odoo-feed" aria-hidden="true">
                  <div className="cx-odoo-feed-head">
                    <span>erp_sync // live</span>
                    <span className="cx-odoo-feed-live">connected</span>
                  </div>
                  <div className="cx-odoo-feed-body">
                    <div className="cx-odoo-feed-track">
                      {SYNC_EVENTS.map((row) => (
                        <div className="cx-odoo-feed-row" key={`a-${row.module}`}>
                          <span className="cx-odoo-feed-mod">{row.module}</span>
                          <span className="cx-odoo-feed-msg">{row.event}</span>
                        </div>
                      ))}
                      {SYNC_EVENTS.map((row) => (
                        <div className="cx-odoo-feed-row" key={`b-${row.module}`}>
                          <span className="cx-odoo-feed-mod">{row.module}</span>
                          <span className="cx-odoo-feed-msg">{row.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>

              <div className="cx-float-card cx-float-card--odoo">
                <span className="cx-float-card-icon" aria-hidden="true">
                  <i className="bi bi-star-fill" />
                </span>
                <div>
                  <strong>Official Event Sponsor</strong>
                  <span>Odoo Partner Event · Jan 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cx-odoo-ticker" aria-hidden="true">
          <div className="cx-odoo-ticker-track">
            {[0, 1].map((copy) =>
              ODOO_TICKER.map((item) => (
                <span className="cx-odoo-ticker-item" key={`${copy}-${item}`}>
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
            <a href="#projects">Projects</a>
            <a href="#event">Event</a>
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
              <div className="cx-stat-value">10+</div>
              <p className="cx-stat-label">Projects successfully delivered</p>
            </div>
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
                Countries we have delivered in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Success Stories ---------------- */}
      <section className="cx-section" id="projects">
        <div className="cx-container">
          <header className="cx-section-head cx-reveal">
            <span className="cx-eyebrow">Proven delivery</span>
            <h2 className="cx-h2">Projects we have completed</h2>
            <p className="cx-lead">
              Five live Odoo implementations across restaurants, eCommerce,
              CRM, media and manufacturing — each built to fit exactly how
              that business runs.
            </p>
          </header>
          <div className="cx-reveal">
            <ProjectTabs projects={PROJECTS} />
          </div>
        </div>
      </section>

      {/* ---------------- Event Sponsorship ---------------- */}
      <section className="cx-section" id="event">
        <div className="cx-container">
          <div className="cx-split cx-reveal">
            {/* Left: copy */}
            <div>
              <span className="cx-eyebrow">Community &amp; events</span>
              <h2 className="cx-h2" style={{ marginTop: "18px" }}>
                Official sponsor at the Odoo Partner Event
              </h2>
              <p className="cx-lead" style={{ marginTop: "20px" }}>
                In January 2025, CLAREx Tech &amp; Trade proudly sponsored the
                Odoo Partner Event held at <strong>Radisson Blu Chittagong</strong> —
                one of Bangladesh&apos;s premier Odoo community gatherings bringing
                together partners, consultants and business leaders.
              </p>
              <p className="cx-body" style={{ marginTop: "16px" }}>
                Our participation as an official partner sponsor reflects our
                commitment to the Odoo ecosystem, to the local tech community, and
                to staying at the forefront of ERP innovation in Bangladesh and
                beyond.
              </p>
              <div className="cx-event-meta" style={{ marginTop: "32px" }}>
                <div className="cx-event-meta-item">
                  <i className="bi bi-calendar-event" aria-hidden="true" />
                  <span>January 2025</span>
                </div>
                <div className="cx-event-meta-item">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  <span>Radisson Blu, Chittagong</span>
                </div>
                <div className="cx-event-meta-item">
                  <i className="bi bi-people-fill" aria-hidden="true" />
                  <span>Official Partner Sponsor</span>
                </div>
              </div>
            </div>

            {/* Right: interactive photo gallery */}
            <div className="cx-reveal">
              <EventGallery images={EVENT_IMAGES} />
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
      <section className="cx-section cx-svc-section" id="services">
        <div className="cx-svc-bloom" aria-hidden="true" />
        <div className="cx-svc-mesh" aria-hidden="true" />
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

          <div className="cx-svc-flow cx-reveal" aria-label="Service lifecycle phases">
            {SERVICE_PHASES.map((phase, index) => (
              <div className="cx-svc-flow-item" key={phase.id} data-phase={phase.id}>
                <span className="cx-svc-flow-idx">0{index + 1}</span>
                <div>
                  <strong>{phase.label}</strong>
                  <span>{phase.hint}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cx-svc-grid">
            {SERVICES.map((service, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <article
                  className="cx-svc-tile cx-reveal"
                  key={service.title}
                  data-phase={service.phase}
                >
                  <span className="cx-svc-tile-idx" aria-hidden="true">
                    {num}
                  </span>
                  <span className="cx-svc-tile-glow" aria-hidden="true" />
                  <div className="cx-svc-tile-top">
                    <span className="cx-svc-tile-icon" aria-hidden="true">
                      <i className={service.icon} />
                    </span>
                    <span className="cx-svc-tile-phase">{service.phaseLabel}</span>
                  </div>
                  <h3 className="cx-h3">{service.title}</h3>
                  <p className="cx-body cx-body--sm">{service.body}</p>
                  <span className="cx-svc-tile-mark" aria-hidden="true">
                    <i className={service.icon} />
                  </span>
                </article>
              );
            })}
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

"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

export type ProjectItem = {
  id: string;
  name: string;
  logo: string;
  industry: string;
  country: string;
  tagline: string;
  deliverables: string[];
};

export default function ProjectTabs({ projects }: { projects: ProjectItem[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + projects.length) % projects.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(projects.length - 1);
        break;
      default:
        break;
    }
  };

  const p = projects[active];

  return (
    <div className="cx-ps">
      {/* ── Left sidebar — project selector ── */}
      <div
        className="cx-ps-sidebar"
        role="tablist"
        aria-label="Completed Odoo projects"
        aria-orientation="vertical"
      >
        {projects.map((proj, index) => (
          <button
            key={proj.id}
            ref={(node) => { tabRefs.current[index] = node; }}
            type="button"
            role="tab"
            id={`cx-ps-tab-${proj.id}`}
            className="cx-ps-card"
            aria-selected={index === active}
            aria-controls={`cx-ps-panel-${proj.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
          >
            <div className="cx-ps-card-logo">
              <img src={proj.logo} alt={`${proj.name} logo`} loading="lazy" />
            </div>
            <div className="cx-ps-card-info">
              <span className="cx-ps-card-name">{proj.name}</span>
              <span className="cx-ps-card-industry">{proj.industry}</span>
            </div>
            <i className="bi bi-arrow-right cx-ps-card-arrow" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* ── Right panel — project details ── */}
      {projects.map((proj, index) => (
        <div
          key={proj.id}
          role="tabpanel"
          id={`cx-ps-panel-${proj.id}`}
          aria-labelledby={`cx-ps-tab-${proj.id}`}
          className="cx-ps-panel"
          hidden={index !== active}
          tabIndex={0}
        >
          {/* Panel header */}
          <div className="cx-ps-panel-header">
            <div className="cx-ps-panel-logo">
              <img src={proj.logo} alt={`${proj.name} logo`} />
            </div>
            <div className="cx-ps-panel-title-group">
              <div className="cx-ps-panel-badges">
                <span className="cx-ps-badge cx-ps-badge--industry">
                  <i className="bi bi-building" aria-hidden="true" />
                  {proj.industry}
                </span>
                <span className="cx-ps-badge cx-ps-badge--country">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  {proj.country}
                </span>
              </div>
              <p className="cx-ps-tagline">{proj.tagline}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="cx-ps-divider">
            <span>
              <i className="bi bi-check2-all" aria-hidden="true" />
              What we delivered
            </span>
          </div>

          {/* Deliverables */}
          <ul className="cx-ps-deliverables">
            {proj.deliverables.map((item) => (
              <li key={item}>
                <i className="bi bi-check-circle-fill" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

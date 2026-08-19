"use client";

import { useRef, useState } from "react";

export type CapabilityFeature = {
  title: string;
  icon: string;
  body: string;
  points: string[];
};

export type CapabilityGroup = {
  id: string;
  label: string;
  icon: string;
  features: CapabilityFeature[];
};

export default function CapabilityTabs({ groups }: { groups: CapabilityGroup[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + groups.length) % groups.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(groups.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cx-tabs">
      <div className="cx-tablist" role="tablist" aria-label="Security capabilities">
        {groups.map((group, index) => (
          <button
            key={group.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`cx-tab-${group.id}`}
            className="cx-tab"
            aria-selected={index === active}
            aria-controls={`cx-panel-${group.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
          >
            <i className={group.icon} aria-hidden="true" />
            {group.label}
          </button>
        ))}
      </div>

      {groups.map((group, index) => (
        <div
          key={group.id}
          role="tabpanel"
          id={`cx-panel-${group.id}`}
          aria-labelledby={`cx-tab-${group.id}`}
          className="cx-tabpanel"
          hidden={index !== active}
          tabIndex={0}
        >
          {group.features.map((feature) => (
            <article className="cx-feature" key={feature.title}>
              <h3 className="cx-h3">
                <i className={feature.icon} aria-hidden="true" />
                {feature.title}
              </h3>
              <p className="cx-body">{feature.body}</p>
              <ul className="cx-feature-list">
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}

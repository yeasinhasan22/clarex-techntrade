"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for the /csec and /odoo pages:
 *  - publishes the live header height so the sticky in-page nav can clear it
 *  - reveals `.cx-reveal` blocks as they scroll into view
 *  - highlights the in-page nav link for the section currently on screen
 *
 * Nothing here is required for the content to be readable: the reveal styles
 * only apply once `cx-js` is present, so a failure leaves everything visible.
 */
export default function ModernPageEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".cx-page");
    if (!root) return;

    const cleanups: Array<() => void> = [];

    /* ---- header height -> CSS custom property ---- */
    const header = document.querySelector<HTMLElement>("header.header-area2");
    if (header) {
      const syncHeaderHeight = () => {
        root.style.setProperty("--cx-header-h", `${header.offsetHeight}px`);
      };
      syncHeaderHeight();
      window.addEventListener("resize", syncHeaderHeight);
      cleanups.push(() => window.removeEventListener("resize", syncHeaderHeight));
    }

    /* ---- scroll reveal ---- */
    const revealTargets = Array.from(
      root.querySelectorAll<HTMLElement>(".cx-reveal"),
    );

    if (revealTargets.length) {
      if (typeof IntersectionObserver === "undefined") {
        revealTargets.forEach((el) => el.classList.add("is-visible"));
      } else {
        // Anything already on screen is marked before `cx-js` hides the rest,
        // so the first paint after hydration does not flash.
        const viewportHeight = window.innerHeight;
        revealTargets.forEach((el) => {
          if (el.getBoundingClientRect().top < viewportHeight * 0.92) {
            el.classList.add("is-visible");
          }
        });
        root.classList.add("cx-js");

        const revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
        );

        revealTargets
          .filter((el) => !el.classList.contains("is-visible"))
          .forEach((el) => revealObserver.observe(el));

        cleanups.push(() => revealObserver.disconnect());
      }
    }

    /* ---- in-page nav scroll spy ---- */
    const navLinks = Array.from(
      root.querySelectorAll<HTMLAnchorElement>(".cx-subnav a[href^='#']"),
    );
    const sections = navLinks
      .map((link) => document.getElementById(link.hash.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length) {
      let queued = false;
      const syncActiveLink = () => {
        queued = false;
        const line = window.innerHeight * 0.32;
        let activeIndex = 0;
        sections.forEach((section, index) => {
          if (section.getBoundingClientRect().top <= line) activeIndex = index;
        });
        navLinks.forEach((link, index) => {
          link.classList.toggle("is-active", index === activeIndex);
        });
      };

      const onScroll = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(syncActiveLink);
      };

      syncActiveLink();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

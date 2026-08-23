"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const VENDOR_SCRIPTS = [
  "/assets/js/jquery-3.6.0.min.js",
  "/assets/js/popper.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/waypoints.min.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/js/isotope.pkgd.min.js",
  "/assets/js/jquery.fancybox.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/simpleParallax.min.js",
  "/assets/js/TweenMax.min.js",
  "/assets/js/jquery.marquee.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/preloader.js",
] as const;

function initMarquee() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jq = (window as any).jQuery;
  if (!jq?.fn?.marquee) return;

  // The plugin is not idempotent: a second call re-wraps its own markup and
  // then measures the 100000px-wide wrapper it created the first time, which
  // translates the content far off-screen and leaves the row blank. React
  // StrictMode invokes effects twice in development, so guard on the wrapper
  // the plugin leaves behind.
  const initOnce = (selector: string, direction: "left" | "top") => {
    jq(selector).each(function (this: HTMLElement) {
      const node = jq(this);
      if (node.find(".js-marquee-wrapper").length) return;
      node.marquee({
        direction,
        duration: 25000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
      });
    });
  };

  try {
    initOnce(".marquee_text", "left");
    initOnce(".marquee_text2", "top");
  } catch {
    // a missing dependency inside the plugin should not break the page
  }
}

function loadScript(src: string, { force = false }: { force?: boolean } = {}) {
  return new Promise<void>((resolve, reject) => {
    const key = src.split("?")[0];
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-clarex-src="${key}"]`,
    );
    if (existing && !force) {
      resolve();
      return;
    }
    if (existing && force) existing.remove();

    const script = document.createElement("script");
    script.src = force ? `${key}?t=${Date.now()}` : key;
    script.async = false;
    script.dataset.clarexSrc = key;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${key}`));
    document.body.appendChild(script);
  });
}

/* Vendor scripts load once per session. Memoising the promise means a second
   caller waits for the real load event instead of resolving early just because
   the <script> tag already exists but has not finished executing. */
let vendorsReady: Promise<void> | null = null;

function loadVendorsOnce() {
  if (!vendorsReady) {
    vendorsReady = (async () => {
      for (const src of VENDOR_SCRIPTS) {
        await loadScript(src);
      }
    })().catch((err) => {
      vendorsReady = null;
      throw err;
    });
  }
  return vendorsReady;
}

async function bootSiteScripts() {
  await loadVendorsOnce();
  // custom.js re-binds sliders, WOW and the cursor to whatever is now mounted,
  // so it is deliberately re-executed on every navigation.
  await loadScript("/assets/js/custom.js", { force: true });
  initMarquee();
}

export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (!cancelled) await bootSiteScripts();
      } catch (err) {
        if (!cancelled) console.error(err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}

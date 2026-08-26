"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01ABCDEF89#$*";

/**
 * Decorative binary rain for the /csec hero. Pauses when the section is
 * off-screen, the tab is hidden, or the user prefers reduced motion.
 */
export default function CsecHeroFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    type Column = { y: number; speed: number };
    const columns: Column[] = [];

    let raf = 0;
    let running = true;
    let visible = true;
    let last = 0;
    let colW = 18;
    let fontSize = 13;

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (w < 2 || h < 2) return;

      const mobile = w < 700;
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.25);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      colW = mobile ? 22 : 16;
      fontSize = mobile ? 11 : 13;
      const count = Math.ceil(w / colW);
      columns.length = 0;
      for (let i = 0; i < count; i += 1) {
        columns.push({
          y: Math.random() * -h,
          speed: 0.55 + Math.random() * 1.35,
        });
      }
    };

    const draw = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      if (time - last < 1000 / 24) return;
      last = time;

      const w = host.clientWidth;
      const h = host.clientHeight;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns.length; i += 1) {
        const col = columns[i];
        const glyph = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        const x = i * colW;
        ctx.fillStyle = "rgba(210, 240, 140, 0.55)";
        ctx.fillText(glyph, x, col.y);
        ctx.fillStyle = "rgba(59, 192, 189, 0.16)";
        ctx.fillText(glyph, x, col.y - fontSize * 1.15);
        col.y += col.speed * fontSize * 0.62;
        if (col.y > h + fontSize * 2) {
          col.y = Math.random() * -180;
          col.speed = 0.55 + Math.random() * 1.35;
        }
      }
    };

    resize();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    io.observe(host);

    const stopIfReduced = () => {
      if (!motion.matches) return;
      running = false;
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    motion.addEventListener("change", stopIfReduced);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      motion.removeEventListener("change", stopIfReduced);
    };
  }, []);

  return <canvas ref={canvasRef} className="cx-csec-rain" aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; r: number };
type Edge = [number, number];

/** Soft constellation — automation / connected systems motif for the home hero. */
const NODES: Node[] = [
  { x: 0.12, y: 0.22, r: 2.2 },
  { x: 0.28, y: 0.14, r: 1.8 },
  { x: 0.46, y: 0.26, r: 2.6 },
  { x: 0.62, y: 0.16, r: 1.9 },
  { x: 0.78, y: 0.3, r: 2.4 },
  { x: 0.88, y: 0.48, r: 1.7 },
  { x: 0.72, y: 0.58, r: 2.1 },
  { x: 0.52, y: 0.5, r: 2.8 },
  { x: 0.34, y: 0.62, r: 2 },
  { x: 0.18, y: 0.48, r: 1.9 },
  { x: 0.4, y: 0.38, r: 1.6 },
];

const EDGES: Edge[] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 0],
  [2, 7],
  [7, 10],
  [10, 0],
  [10, 3],
  [8, 6],
];

/**
 * Subtle connected-node field for the home hero.
 * Teal primary / lime secondary — pauses off-screen and with reduced motion.
 */
export default function HomeHeroFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let visible = true;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let start = performance.now();

    const packets = EDGES.map((_, i) => ({
      edge: i,
      t: Math.random(),
      speed: 0.06 + Math.random() * 0.1,
    }));

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width < 2 || height < 2) return;

      const mobile = width < 700;
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.25);
      w = width;
      h = height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const nodePos = (node: Node) => ({
      x: node.x * w,
      y: node.y * h,
      r: node.r,
    });

    const draw = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;

      const elapsed = (time - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      const positions = NODES.map(nodePos);

      ctx.lineCap = "round";
      EDGES.forEach(([a, b], i) => {
        const from = positions[a];
        const to = positions[b];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = "rgba(59, 192, 189, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.setLineDash([4, 12]);
        ctx.lineDashOffset = -elapsed * 14 - i * 5;
        ctx.strokeStyle = "rgba(161, 199, 64, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      packets.forEach((packet) => {
        const [a, b] = EDGES[packet.edge];
        const from = positions[a];
        const to = positions[b];
        packet.t += packet.speed * 0.006;
        if (packet.t > 1) packet.t -= 1;
        const px = from.x + (to.x - from.x) * packet.t;
        const py = from.y + (to.y - from.y) * packet.t;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 192, 189, 0.7)";
        ctx.fill();
      });

      positions.forEach((pos, i) => {
        const pulse = 0.5 + Math.sin(elapsed * 1.2 + i * 0.55) * 0.5;
        const r = pos.r + pulse * 1.4;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r + 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 192, 189, ${0.04 + pulse * 0.06})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(29, 29, 29, 0.55)";
        ctx.fill();
        ctx.strokeStyle = `rgba(59, 192, 189, ${0.35 + pulse * 0.3})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      });
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

  return <canvas ref={canvasRef} className="home-hero-network" aria-hidden="true" />;
}

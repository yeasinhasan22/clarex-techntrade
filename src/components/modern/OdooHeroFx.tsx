"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; label: string };
type Edge = [number, number];

const NODES: Node[] = [
  { x: 0.14, y: 0.28, label: "CRM" },
  { x: 0.34, y: 0.14, label: "Sales" },
  { x: 0.58, y: 0.2, label: "Inventory" },
  { x: 0.78, y: 0.36, label: "Accounting" },
  { x: 0.68, y: 0.62, label: "Purchase" },
  { x: 0.42, y: 0.72, label: "Manufacturing" },
  { x: 0.2, y: 0.58, label: "HR" },
  { x: 0.48, y: 0.42, label: "ERP" },
];

const EDGES: Edge[] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
];

/**
 * Decorative module network for the /odoo hero — nodes, sync pulses and
 * data packets moving along edges. Pauses off-screen / reduced motion.
 */
export default function OdooHeroFx() {
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
      speed: 0.12 + Math.random() * 0.18,
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

    const nodePos = (node: Node) => ({ x: node.x * w, y: node.y * h });

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
        ctx.strokeStyle = "rgba(59, 192, 189, 0.14)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.setLineDash([5, 9]);
        ctx.lineDashOffset = -elapsed * 22 - i * 6;
        ctx.strokeStyle = "rgba(161, 199, 64, 0.28)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      packets.forEach((packet) => {
        const [a, b] = EDGES[packet.edge];
        const from = positions[a];
        const to = positions[b];
        packet.t += packet.speed * 0.008;
        if (packet.t > 1) packet.t -= 1;
        const px = from.x + (to.x - from.x) * packet.t;
        const py = from.y + (to.y - from.y) * packet.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(161, 199, 64, 0.85)";
        ctx.fill();
      });

      positions.forEach((pos, i) => {
        const pulse = 0.5 + Math.sin(elapsed * 1.6 + i * 0.7) * 0.5;
        const r = 5 + pulse * 2.5;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 192, 189, ${0.06 + pulse * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20, 22, 26, 0.72)";
        ctx.fill();
        ctx.strokeStyle = `rgba(161, 199, 64, ${0.45 + pulse * 0.35})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.font = "600 9px ui-sans-serif, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(213, 217, 224, ${0.55 + pulse * 0.35})`;
        ctx.fillText(NODES[i].label, pos.x, pos.y + r + 11);
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

  return <canvas ref={canvasRef} className="cx-odoo-network" aria-hidden="true" />;
}

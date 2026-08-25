"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; label: string; kind: "hub" | "device" };
type Edge = [number, number];

const NODES: Node[] = [
  { x: 0.5, y: 0.42, label: "MDM", kind: "hub" },
  { x: 0.18, y: 0.22, label: "Phone", kind: "device" },
  { x: 0.78, y: 0.2, label: "Tablet", kind: "device" },
  { x: 0.86, y: 0.52, label: "Watch", kind: "device" },
  { x: 0.68, y: 0.74, label: "Phone", kind: "device" },
  { x: 0.28, y: 0.72, label: "Tablet", kind: "device" },
  { x: 0.12, y: 0.48, label: "Phone", kind: "device" },
];

const EDGES: Edge[] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
];

/**
 * Decorative MDM fleet network for the /samsungknox hero —
 * central console linked to devices with sync packets.
 */
export default function KnoxHeroFx() {
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
      speed: 0.14 + Math.random() * 0.2,
      outbound: Math.random() > 0.5,
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
        ctx.strokeStyle = "rgba(161, 199, 64, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.setLineDash([4, 10]);
        ctx.lineDashOffset = -elapsed * 28 - i * 8;
        ctx.strokeStyle = "rgba(59, 192, 189, 0.32)";
        ctx.lineWidth = 1.25;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      packets.forEach((packet) => {
        const [a, b] = EDGES[packet.edge];
        const from = positions[packet.outbound ? a : b];
        const to = positions[packet.outbound ? b : a];
        packet.t += packet.speed * 0.009;
        if (packet.t > 1) {
          packet.t -= 1;
          packet.outbound = !packet.outbound;
        }
        const px = from.x + (to.x - from.x) * packet.t;
        const py = from.y + (to.y - from.y) * packet.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(161, 199, 64, 0.9)";
        ctx.fill();
      });

      positions.forEach((pos, i) => {
        const node = NODES[i];
        const pulse = 0.5 + Math.sin(elapsed * 1.7 + i * 0.8) * 0.5;
        const isHub = node.kind === "hub";
        const r = isHub ? 10 + pulse * 2 : 5 + pulse * 2;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r + (isHub ? 10 : 6), 0, Math.PI * 2);
        ctx.fillStyle = isHub
          ? `rgba(161, 199, 64, ${0.08 + pulse * 0.1})`
          : `rgba(59, 192, 189, ${0.06 + pulse * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20, 22, 26, 0.78)";
        ctx.fill();
        ctx.strokeStyle = isHub
          ? `rgba(161, 199, 64, ${0.55 + pulse * 0.35})`
          : `rgba(59, 192, 189, ${0.45 + pulse * 0.35})`;
        ctx.lineWidth = isHub ? 1.8 : 1.3;
        ctx.stroke();

        ctx.font = isHub
          ? "700 10px ui-sans-serif, system-ui, sans-serif"
          : "600 9px ui-sans-serif, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(213, 217, 224, ${0.55 + pulse * 0.35})`;
        ctx.fillText(node.label, pos.x, pos.y + r + 12);
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

  return <canvas ref={canvasRef} className="cx-knox-network" aria-hidden="true" />;
}

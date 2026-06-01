import { useEffect, useRef } from "react";

/**
 * Canvas-based floating sparkle particles for hero background.
 * Respects prefers-reduced-motion.
 */
export const Sparkles = ({ density = 60 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const particles = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.8,
      vy: -0.15 - Math.random() * 0.45,
      vx: (Math.random() - 0.5) * 0.12,
      a: 0.2 + Math.random() * 0.7,
      tw: Math.random() * Math.PI * 2,
      tws: 0.01 + Math.random() * 0.03,
      hue: Math.random() > 0.5 ? "rgba(255,235,200," : "rgba(220,190,255,",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.tw += p.tws;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        const flicker = 0.55 + Math.sin(p.tw) * 0.45;
        ctx.beginPath();
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grd.addColorStop(0, p.hue + p.a * flicker + ")");
        grd.addColorStop(1, p.hue + "0)");
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="hero-sparkles-canvas"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

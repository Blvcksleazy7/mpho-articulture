"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; size: number; warm: boolean };

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];
    const pointer = { x: -1000, y: -1000 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const seed = () => {
      const count = width < 700 ? 58 : 138;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.35 + 0.35,
        warm: Math.random() > 0.89,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        if (!reduceMotion.matches && distance < 150) {
          particle.vx -= (dx / Math.max(distance, 1)) * (1 - distance / 150) * 0.025;
          particle.vy -= (dy / Math.max(distance, 1)) * (1 - distance / 150) * 0.025;
        }
        if (!reduceMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.992;
          particle.vy *= 0.992;
        }
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        particle.x = Math.min(width, Math.max(0, particle.x));
        particle.y = Math.min(height, Math.max(0, particle.y));
        context.fillStyle = particle.warm ? "rgba(255, 202, 112, .9)" : "rgba(243, 237, 226, .7)";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      for (let index = 0; index < particles.length; index += 1) {
        for (let next = index + 1; next < particles.length; next += 1) {
          const dx = particles[index].x - particles[next].x;
          const dy = particles[index].y - particles[next].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 118) {
            context.strokeStyle = `rgba(243, 237, 226, ${(1 - distance / 118) * 0.16})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particles[index].x, particles[index].y);
            context.lineTo(particles[next].x, particles[next].y);
            context.stroke();
          }
        }
      }
      if (!reduceMotion.matches) frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => { pointer.x = event.clientX; pointer.y = event.clientY; };
    const leave = () => { pointer.x = -1000; pointer.y = -1000; };
    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas className="hero-field" ref={canvasRef} aria-hidden="true" />;
}

"use client";
import { useEffect, useRef } from "react";
export function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      let seed = 37;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
      for (let i = 0; i < Math.min((width * height) / 5200, 260); i++) {
        context.beginPath();
        context.fillStyle = `rgba(250,246,238,${0.12 + random() * 0.4})`;
        context.arc(
          random() * width,
          random() * height,
          random() * 1.1 + 0.3,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    };
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    draw();
    return () => observer.disconnect();
  }, []);
  return <canvas ref={ref} className="star-field" aria-hidden="true" />;
}

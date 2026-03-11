import { useState, useEffect, useRef } from "react";

// ── HOOKS ────────────────────────────────────────────────────
export function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

export function Fade({ children, delay = 0, y = 24 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : `translateY(${y}px)`, transition: `opacity .85s ease ${delay}s, transform .85s ease ${delay}s` }}>
      {children}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useMounted } from "@/hooks/use-mounted";

export function ScrollProgress() {
  const mounted = useMounted();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(value);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-right bg-gradient-to-l from-[color:var(--gold)] via-[color:var(--gold-soft)] to-transparent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
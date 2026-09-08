"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/messages";
import { wornShots } from "@/lib/lookbook";

export function LookbookMosaic({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${inView ? "mosaic-in" : ""}`}>
      {wornShots.map((shot, index) => (
        <figure
          key={shot.src}
          className="mosaic-shot group"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div className="shot-frame relative aspect-[3/4] overflow-hidden bg-surface">
            <Image
              src={shot.src}
              alt={shot.alt[locale]}
              fill
              className="shot-zoom object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

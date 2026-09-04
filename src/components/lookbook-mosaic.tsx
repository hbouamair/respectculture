"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/messages";
import { lookbookShots } from "@/lib/lookbook";

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
    <div
      ref={ref}
      className={`columns-2 gap-3 md:columns-3 lg:columns-4 ${inView ? "mosaic-in" : ""}`}
    >
      {lookbookShots.map((shot, index) => (
        <figure
          key={shot.src}
          className="mosaic-shot group mb-3 break-inside-avoid"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div className="shot-frame overflow-hidden">
            <Image
              src={shot.src}
              alt={shot.alt[locale]}
              width={1200}
              height={1600}
              className="shot-zoom h-auto w-full"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <figcaption className="mt-2 text-sm text-muted transition-colors duration-300 group-hover:text-black">
            {shot.alt[locale]}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

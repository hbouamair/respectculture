"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={`relative aspect-square w-full overflow-hidden border ${
                  i === index ? "border-black" : "border-line"
                }`}
                aria-label={`${alt} ${i + 1}`}
                aria-current={i === index}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

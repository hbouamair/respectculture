"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HoverReel } from "@/components/hover-reel";
import { isLandscapeClip, type GalleryClip } from "@/lib/gallery";
import type { Locale, Messages } from "@/lib/messages";

export function VideoDialog({
  clips,
  locale,
  copy,
}: {
  clips: GalleryClip[];
  locale: Locale;
  copy: Messages["gallery"];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = clips.find((clip) => clip.id === openId);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!openId) {
      video.pause();
      return;
    }
    video.muted = true;
    const start = () => {
      void video.play().catch(() => {});
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("canplay", start, { once: true });
    closeRef.current?.focus();
    return () => video.removeEventListener("canplay", start);
  }, [openId]);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId, close]);

  return (
    <>
      <ul className="mx-auto flex max-w-7xl flex-wrap items-end justify-center gap-5 sm:gap-6">
        {clips.map((clip, index) => (
            <li
              key={clip.id}
              className="gallery-shot"
              style={{
                ["--clip-w" as string]: clip.width,
                ["--clip-h" as string]: clip.height,
                animationDelay: `${index * 120}ms`,
              }}
            >
              <HoverReel
                clip={clip}
                title={clip.title[locale]}
                playLabel={copy.play}
                hoverLabel={copy.hover}
                paused={Boolean(openId)}
                onOpen={() => setOpenId(clip.id)}
                className="absolute inset-0 h-full w-full"
              />
            </li>
        ))}
      </ul>

      {active ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div
            className={`glass gallery-dialog relative w-full rounded-2xl p-3 sm:p-4 ${
              isLandscapeClip(active) ? "max-w-4xl" : "max-w-md"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={active.title[locale]}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute -top-11 right-0 text-sm text-white hover:text-gold"
            >
              {copy.close}
            </button>
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              style={{ aspectRatio: `${active.width} / ${active.height}` }}
              poster={active.poster}
              controls
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              <source src={active.src} type="video/mp4" />
            </video>
            {active.instagram ? (
              <a
                href={active.instagram}
                className="mt-3 inline-block text-sm text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.instagram}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

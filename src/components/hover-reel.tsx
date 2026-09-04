"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryClip } from "@/lib/gallery";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canHoverPlay() {
  return (
    !prefersReducedMotion() &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

export function HoverReel({
  clip,
  title,
  playLabel,
  hoverLabel,
  onOpen,
  paused = false,
  className,
}: {
  clip: GalleryClip;
  title: string;
  playLabel: string;
  hoverLabel: string;
  onOpen: () => void;
  paused?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    if (paused) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  useEffect(() => {
    if (!paused) return;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }, [paused]);

  function handleEnter() {
    if (canHoverPlay()) play();
  }

  function handleLeave() {
    if (canHoverPlay()) stop();
  }

  function handleActivate() {
    const coarse = window.matchMedia("(hover: none)").matches;
    if (coarse && !playing && !prefersReducedMotion()) {
      play();
      return;
    }
    onOpen();
  }

  return (
    <div
      className={`group relative overflow-hidden bg-black ${className ?? "w-full"}`}
      style={className ? undefined : { aspectRatio: `${clip.width} / ${clip.height}` }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <Image
        src={clip.poster}
        alt=""
        fill
        className={`shot-zoom object-cover transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={handleActivate}
        className="absolute inset-0 z-10"
        aria-label={`${playLabel}: ${title}`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4">
        <div className="glass flex items-end justify-between gap-3 rounded-xl px-3 py-2.5">
          <p className="font-display text-lg leading-tight text-white sm:text-xl">{title}</p>
          <span className="shrink-0 text-[11px] text-gold">{playing ? playLabel : hoverLabel}</span>
        </div>
      </div>
    </div>
  );
}

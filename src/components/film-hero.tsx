import Link from "next/link";
import Image from "next/image";
import type { Messages } from "@/lib/messages";
import { site } from "@/lib/site";

export function FilmHero({ copy }: { copy: Messages["hero"] }) {
  return (
    <section className="relative min-h-[calc(100svh-var(--chrome-h))] overflow-hidden bg-black">
      <Image
        src="/lookbook/hero-left.jpg"
        alt="Respect Your Culture — worn"
        fill
        priority
        quality={90}
        className="hero-ken object-cover object-[36%_42%] md:object-[center_22%]"
        sizes="100vw"
      />
      <div className="hero-shade pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex min-h-[calc(100svh-var(--chrome-h))] flex-col items-center justify-end px-6 pb-16 text-center text-white">
        <div className="hero-figure-in">
          <h1 className="sr-only">{site.name}</h1>
          <p className="text-[12px] tracking-[0.42em] uppercase">{copy.collection}</p>
          <Link href="/store" className="btn-ghost mt-7">
            {copy.ctaStore}
          </Link>
        </div>
        <a
          href="#arrivals"
          className="scroll-cue mt-10 text-white/80"
          aria-label={copy.scroll}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

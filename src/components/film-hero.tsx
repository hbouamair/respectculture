import Link from "next/link";
import Image from "next/image";
import type { Messages } from "@/lib/messages";
import { site } from "@/lib/site";

export function FilmHero({ copy }: { copy: Messages["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[100svh]">
        <div className="relative min-h-[58svh] overflow-hidden md:min-h-[100svh]">
          <Image
            src="/lookbook/hero-right.jpg"
            alt="Respect Your Culture tapestry polo, worn"
            fill
            priority
            quality={90}
            className="hero-ken object-cover object-[center_12%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative min-h-[58svh] overflow-hidden border-t border-white/10 md:min-h-[100svh] md:border-l md:border-t-0">
          <Image
            src="/lookbook/hero-left.jpg"
            alt="Respect Your Culture jersey, worn"
            fill
            priority
            quality={90}
            className="hero-ken object-cover object-[center_22%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="hero-shade pointer-events-none absolute inset-0 z-10 hidden md:block" />

      <div className="relative z-20 bg-black px-6 py-10 text-center md:absolute md:inset-0 md:flex md:items-end md:bg-transparent md:px-8 md:py-0 md:pb-12 md:text-left lg:px-14 lg:pb-16">
        <div className="hero-figure-in mx-auto max-w-3xl md:mx-0">
          <p className="font-arabic text-lg text-gold sm:text-xl" lang="ar" dir="rtl">
            {site.nameAr}
          </p>
          <h1 className="hero-title font-display mt-3 text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[0.92] text-white">
            {site.name}
          </h1>
          <p className="mt-4 text-[11px] tracking-[0.38em] text-white/75 uppercase">
            {copy.collection}
          </p>
          <p className="hero-title font-display mt-4 max-w-md text-xl italic text-white sm:text-2xl">
            {copy.title}
          </p>
          <Link href="/store" className="btn-gold mt-7">
            {copy.ctaStore}
          </Link>
        </div>
      </div>
    </section>
  );
}

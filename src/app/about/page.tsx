import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = messages[locale];
  return { title: t.about.title, description: t.about.p1 };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="page-pad pb-20">
      <section className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <figure className="relative">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface lg:min-h-[calc(100svh-10rem)] lg:aspect-auto">
            <Image
              src="/lookbook/scorpion-portrait.jpg"
              alt={`${site.founder.name} — ${site.founder.legalName}`}
              fill
              priority
              quality={90}
              className="object-cover object-[center_18%]"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <figcaption className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-3xl italic leading-none sm:text-4xl">
                {site.founder.name}
              </p>
              <p className="mt-2 text-sm text-gold">{t.about.founder}</p>
            </div>
            <p className="max-w-[10rem] text-right text-xs leading-relaxed text-muted">
              {site.founder.legalName}
              <br />
              {site.contact.address}
            </p>
          </figcaption>
        </figure>

        <div>
          <p className="font-arabic text-2xl text-gold sm:text-3xl" lang="ar" dir="rtl">
            {site.nameAr}
          </p>
          <h1 className="font-display mt-4 max-w-xl text-5xl leading-[0.92] sm:text-7xl">
            {t.about.title}
          </h1>

          <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p className="font-display text-2xl leading-snug text-black">
              {t.about.founderStory}
            </p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/store" className="btn-gold inline-flex">
              {messages[locale].hero.ctaStore}
            </Link>
            <a
              href={site.social.founder}
              className="text-sm text-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @scorpion_99_
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

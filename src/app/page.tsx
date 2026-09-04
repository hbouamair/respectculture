import Link from "next/link";
import Image from "next/image";
import { FilmHero } from "@/components/film-hero";
import { LookbookMosaic } from "@/components/lookbook-mosaic";
import { ProductRail } from "@/components/product-rail";
import { ScrollIn } from "@/components/scroll-in";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default async function HomePage() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <>
      <FilmHero copy={t.hero} />

      <ProductRail products={products} locale={locale} copy={t.home} />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <ScrollIn>
            <h2 className="font-display text-3xl sm:text-4xl">{t.home.collectionsTitle}</h2>
          </ScrollIn>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="group relative min-h-[28rem] overflow-hidden md:min-h-[36rem]">
              <Image
                src="/products/jersey-thaqafa/look-desert.jpg"
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[11px] tracking-[0.28em] uppercase">{t.home.jerseyTitle}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                  {t.home.jerseyBody}
                </p>
                <Link href="/store" className="btn-ghost mt-6">
                  {t.home.shopCollection}
                </Link>
              </div>
            </article>
            <article className="group relative min-h-[28rem] overflow-hidden md:min-h-[36rem]">
              <Image
                src="/products/tee-gold/look-taxi-full.jpg"
                alt=""
                fill
                className="object-cover object-[center_20%] transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[11px] tracking-[0.28em] uppercase">{t.home.streetTitle}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                  {t.home.streetBody}
                </p>
                <Link href="/gallery" className="btn-ghost mt-6">
                  {t.home.galleryCta}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollIn>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{t.home.lookTitle}</h2>
            <p className="mt-4 text-muted">{t.home.lookLead}</p>
          </div>
        </ScrollIn>
        <LookbookMosaic locale={locale} />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <ScrollIn>
            <p className="font-arabic text-2xl text-gold" lang="ar" dir="rtl">
              {site.nameAr}
            </p>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl">{t.home.conceptTitle}</h2>
          </ScrollIn>
          <ScrollIn>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.home.conceptBody}
            </p>
            <Link href="/about" className="btn-line mt-8">
              {t.nav.about}
            </Link>
          </ScrollIn>
        </div>
      </section>
    </>
  );
}

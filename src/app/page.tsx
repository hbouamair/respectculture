import Link from "next/link";
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <ScrollIn>
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{t.home.lookTitle}</h2>
            <p className="mt-4 text-muted">{t.home.lookLead}</p>
          </div>
        </ScrollIn>
        <LookbookMosaic locale={locale} />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
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

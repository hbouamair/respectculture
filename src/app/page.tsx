import Link from "next/link";
import { FilmHero } from "@/components/film-hero";
import { LookbookMosaic } from "@/components/lookbook-mosaic";
import { ProductCard } from "@/components/product-card";
import { ScrollIn } from "@/components/scroll-in";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { getFeaturedProducts } from "@/lib/products";
import { site } from "@/lib/site";

export default async function HomePage() {
  const locale = await getLocale();
  const t = messages[locale];
  const featured = getFeaturedProducts();

  return (
    <>
      <FilmHero copy={t.hero} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <ScrollIn>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">
              {t.home.lookTitle}
            </h2>
            <p className="mt-4 text-lg text-white/75">{t.home.lookLead}</p>
          </div>
        </ScrollIn>
        <LookbookMosaic locale={locale} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
        <ScrollIn>
          <p className="font-arabic text-3xl text-gold" lang="ar" dir="rtl">
            {site.nameAr}
          </p>
          <h2 className="font-display mt-4 text-4xl italic leading-tight sm:text-5xl">
            {t.home.conceptTitle}
          </h2>
        </ScrollIn>
        <ScrollIn>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">{t.home.conceptBody}</p>
        </ScrollIn>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <ScrollIn>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl italic">{t.home.dropTitle}</h2>
                <p className="mt-3 max-w-lg text-muted">{t.home.dropLead}</p>
              </div>
              <Link href="/store" className="btn-line">
                {t.nav.store}
              </Link>
            </div>
          </ScrollIn>
          <div className="mt-12 columns-2 gap-6 md:columns-3">
            {featured.map((product) => (
              <div key={product.slug} className="mb-8 break-inside-avoid">
                <ProductCard
                  product={product}
                  locale={locale}
                  viewLabel={t.store.view}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

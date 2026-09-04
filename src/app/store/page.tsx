import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { ScrollIn } from "@/components/scroll-in";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { products } from "@/lib/products";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = messages[locale];
  return { title: t.store.title, description: t.store.lead };
}

export default async function StorePage() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
      <ScrollIn>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div>
            <h1 className="font-display text-5xl italic sm:text-7xl">{t.store.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-muted">{t.store.lead}</p>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/products/jersey-thaqafa/look-desert.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="40vw"
              priority
            />
          </div>
        </div>
      </ScrollIn>
      <div className="mt-14 columns-2 gap-6 md:columns-3">
        {products.map((product) => (
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
  );
}

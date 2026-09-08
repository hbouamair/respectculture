import type { Metadata } from "next";
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
    <div className="page-pad mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <ScrollIn>
        <h1 className="font-display text-4xl sm:text-5xl">{t.store.title}</h1>
        <p className="mt-4 max-w-xl text-muted">{t.store.lead}</p>
      </ScrollIn>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} locale={locale} />
        ))}
      </div>
    </div>
  );
}

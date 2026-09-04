import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductForm } from "@/components/product-form";
import { ProductGallery } from "@/components/product-gallery";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { formatMad, getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  const locale = await getLocale();
  if (!product) return { title: "Store" };
  return {
    title: product.name[locale],
    description: product.description[locale],
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
      <Link href="/store" className="text-sm text-muted hover:text-gold">
        {t.product.back}
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <ProductGallery images={product.images} alt={product.name[locale]} />
        </div>
        <div>
          <p className="font-arabic text-xl text-gold" lang="ar" dir="rtl">
            {product.mark}
          </p>
          <h1 className="font-display mt-3 text-4xl italic sm:text-5xl">{product.name[locale]}</h1>
          <p className="mt-4 text-2xl text-gold">{formatMad(product.price)}</p>
          <p className="mt-6 max-w-md text-white/80 leading-relaxed">
            {product.description[locale]}
          </p>
          <div className="mt-8">
            <ProductForm product={product} locale={locale} copy={t.product} />
          </div>
        </div>
      </div>
    </div>
  );
}

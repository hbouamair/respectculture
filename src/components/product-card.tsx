import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/messages";
import { formatMad, type Product } from "@/lib/products";

export function ProductCard({
  product,
  locale,
  viewLabel,
}: {
  product: Product;
  locale: Locale;
  viewLabel: string;
  featured?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/store/${product.slug}`} className="block">
        <div className="shot-frame overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name[locale]}
            width={1200}
            height={1600}
            className="shot-zoom h-auto w-full"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg italic leading-tight sm:text-xl">
              {product.name[locale]}
            </h3>
            <p className="mt-1 text-sm text-gold">{formatMad(product.price)}</p>
          </div>
          <span className="text-xs text-white/70 group-hover:text-gold">{viewLabel}</span>
        </div>
      </Link>
    </article>
  );
}

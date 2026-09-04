import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/messages";
import { formatMad, type Product } from "@/lib/products";

export function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
  viewLabel?: string;
  featured?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/store/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-surface">
          <Image
            src={product.images[0]}
            alt={product.name[locale]}
            fill
            className="shot-zoom object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-[13px] tracking-wide">{product.name[locale]}</h3>
          <p className="mt-1 text-[13px] text-muted">{formatMad(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/messages";
import { formatMad, getHoverImage, type Product } from "@/lib/products";

export function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
  viewLabel?: string;
  featured?: boolean;
}) {
  const hoverImage = getHoverImage(product);

  return (
    <article className="group">
      <Link href={`/store/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-surface">
          <Image
            src={product.images[0]}
            alt={product.name[locale]}
            fill
            className={`object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hoverImage
                ? "group-hover:scale-105 group-hover:opacity-0"
                : "shot-zoom"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {hoverImage ? (
            <Image
              src={hoverImage}
              alt=""
              fill
              className="object-cover opacity-0 scale-[1.06] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : null}
        </div>
        <div className="mt-3">
          <h3 className="text-[13px] tracking-wide">{product.name[locale]}</h3>
          <p className="mt-1 text-[13px] text-muted">{formatMad(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}

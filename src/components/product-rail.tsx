"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import type { Locale, Messages } from "@/lib/messages";
import type { Product } from "@/lib/products";

type Tab = "featured" | "jersey" | "hoodie";

export function ProductRail({
  products,
  locale,
  copy,
}: {
  products: Product[];
  locale: Locale;
  copy: Messages["home"];
}) {
  const [tab, setTab] = useState<Tab>("featured");

  const visible = useMemo(() => {
    if (tab === "featured") return products.filter((item) => item.featured);
    return products.filter((item) => item.category === tab);
  }, [products, tab]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "featured", label: copy.tabFeatured },
    { id: "jersey", label: copy.tabJerseys },
    { id: "hoodie", label: copy.tabHoodies },
  ];

  return (
    <section id="arrivals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{copy.dropTitle}</h2>
          <div className="mt-5 flex flex-wrap gap-6">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`text-[11px] tracking-[0.22em] uppercase ${
                  tab === item.id ? "text-black" : "text-muted hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <Link href="/store" className="text-[11px] tracking-[0.22em] text-muted uppercase hover:text-black">
          {copy.viewAll}
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} locale={locale} />
        ))}
      </div>
    </section>
  );
}

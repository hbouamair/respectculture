"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Locale, Messages } from "@/lib/messages";
import type { Product } from "@/lib/products";

export function ProductForm({
  product,
  locale,
  copy,
}: {
  product: Product;
  locale: Locale;
  copy: Messages["product"];
}) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [colorId, setColorId] = useState(product.colors[0].id);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const color = product.colors.find((c) => c.id === colorId) ?? product.colors[0];

  function onAdd() {
    add({
      slug: product.slug,
      name: product.name[locale],
      size,
      color: color.label[locale],
      qty,
      price: product.price,
      image: product.images[0],
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd();
      }}
    >
      <fieldset>
        <legend className="mb-2 text-sm text-muted">{copy.size}</legend>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <label
              key={option}
              className={`min-w-11 cursor-pointer border px-3 py-2 text-center text-sm ${
                size === option
                  ? "border-gold bg-gold text-black"
                  : "border-line hover:border-gold"
              }`}
            >
              <input
                type="radio"
                name="size"
                value={option}
                className="sr-only"
                checked={size === option}
                onChange={() => setSize(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm text-muted">{copy.color}</legend>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-2 border px-3 py-2 text-sm ${
                colorId === option.id ? "border-gold" : "border-line hover:border-gold"
              }`}
            >
              <input
                type="radio"
                name="color"
                value={option.id}
                className="sr-only"
                checked={colorId === option.id}
                onChange={() => setColorId(option.id)}
              />
              <span
                className="h-3 w-3 rounded-full border border-line"
                style={{ background: option.hex }}
                aria-hidden
              />
              {option.label[locale]}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="qty" className="mb-2 block text-sm text-muted">
          {copy.qty}
        </label>
        <input
          id="qty"
          type="number"
          min={1}
          max={10}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          className="w-24 border border-line bg-black px-3 py-2"
        />
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        {justAdded ? copy.added : copy.add}
      </button>
      <p className="max-w-sm text-sm leading-relaxed text-muted">{copy.howToBuy}</p>
    </form>
  );
}

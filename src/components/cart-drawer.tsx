"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Locale, Messages } from "@/lib/messages";
import { formatMad } from "@/lib/products";

export function CartDrawer({
  copy,
}: {
  locale?: Locale;
  copy: Messages["cart"];
}) {
  const { lines, open, setOpen, remove, setQty, total, count } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label={copy.close}
        onClick={() => setOpen(false)}
      />
      <aside
        className="glass absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-black/70"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id="cart-title" className="font-display text-xl">
            {copy.title}
            {count > 0 ? ` · ${count}` : ""}
          </h2>
          <button type="button" className="text-sm text-muted hover:text-white" onClick={() => setOpen(false)}>
            {copy.close}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {lines.length === 0 ? (
            <div className="text-muted">
              <p>{copy.empty}</p>
              <Link
                href="/store"
                className="btn-gold mt-6 inline-flex"
                onClick={() => setOpen(false)}
              >
                {copy.emptyCta}
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 border-b border-line pb-5">
                  <Image
                    src={line.image}
                    alt=""
                    width={72}
                    height={90}
                    className="h-[90px] w-[72px] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{line.name}</p>
                    <p className="mt-1 text-xs text-muted">
                      {line.size} · {line.color}
                    </p>
                    <p className="mt-1 text-sm text-gold">{formatMad(line.price * line.qty)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <label className="sr-only" htmlFor={`qty-${line.key}`}>
                        Qty
                      </label>
                      <input
                        id={`qty-${line.key}`}
                        type="number"
                        min={1}
                        value={line.qty}
                        onChange={(e) => setQty(line.key, Number(e.target.value))}
                        className="w-16 border border-line bg-black px-2 py-1 text-sm"
                      />
                      <button
                        type="button"
                        className="text-xs text-muted hover:text-gold"
                        onClick={() => remove(line.key)}
                      >
                        {copy.remove}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-line p-5">
            <div className="mb-4 flex justify-between text-sm">
              <span>{copy.total}</span>
              <span className="text-gold">{formatMad(total)}</span>
            </div>
            <Link
              href="/checkout"
              className="btn-gold w-full"
              onClick={() => setOpen(false)}
            >
              {copy.checkout}
            </Link>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

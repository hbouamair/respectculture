"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Locale, Messages } from "@/lib/messages";
import { formatMad } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CheckoutForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Messages["checkout"];
}) {
  const { lines, total, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [opened, setOpened] = useState<string | null>(null);

  const url = useMemo(() => {
    if (lines.length === 0) return "";
    return buildWhatsAppUrl({
      customerName: name.trim() || "—",
      customerPhone: phone.trim() || "—",
      city: city.trim() || "—",
      notes,
      lines: lines.map((line) => ({
        name: line.name,
        size: line.size,
        color: line.color,
        qty: line.qty,
        price: line.price,
      })),
      total,
      locale,
    });
  }, [lines, name, phone, city, notes, total, locale]);

  if (lines.length === 0 && !opened) {
    return (
      <div className="max-w-lg">
        <p className="text-muted">{copy.empty}</p>
        <Link href="/store" className="btn-gold mt-6 inline-flex">
          {copy.backToStore}
        </Link>
      </div>
    );
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) return;
    const href = buildWhatsAppUrl({
      customerName: name.trim(),
      customerPhone: phone.trim(),
      city: city.trim(),
      notes,
      lines: lines.map((line) => ({
        name: line.name,
        size: line.size,
        color: line.color,
        qty: line.qty,
        price: line.price,
      })),
      total,
      locale,
    });
    setOpened(href);
    window.open(href, "_blank", "noopener,noreferrer");
    clear();
  }

  if (opened) {
    return (
      <div className="max-w-lg space-y-5">
        <h2 className="font-display text-3xl italic leading-tight">{copy.fallback}</h2>
        <a href={opened} className="btn-gold inline-flex" target="_blank" rel="noopener noreferrer">
          {copy.fallbackLink}
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            {copy.name}
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-line bg-black px-3 py-3"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
            {copy.phone}
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-line bg-black px-3 py-3"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm text-muted">
            {copy.city}
          </label>
          <input
            id="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-line bg-black px-3 py-3"
            autoComplete="address-level2"
          />
        </div>
        <div>
          <label htmlFor="notes" className="mb-1.5 block text-sm text-muted">
            {copy.notes}
          </label>
          <textarea
            id="notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-line bg-black px-3 py-3"
            placeholder={copy.notesHint}
          />
        </div>
        <button type="submit" className="btn-gold">
          {copy.submit}
        </button>
      </form>

      <aside className="h-fit border border-line p-5">
        <h2 className="font-display text-xl">{copy.order}</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {lines.map((line) => (
            <li key={line.key} className="flex justify-between gap-4">
              <span>
                {line.qty}× {line.name} · {line.size}
              </span>
              <span className="text-gold">{formatMad(line.price * line.qty)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex justify-between border-t border-line pt-4 text-sm">
          <span>Total</span>
          <span className="text-gold">{formatMad(total)}</span>
        </p>
        {url ? (
          <a href={url} className="sr-only">
            WhatsApp
          </a>
        ) : null}
      </aside>
    </div>
  );
}

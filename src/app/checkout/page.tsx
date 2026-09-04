import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = messages[locale];
  return { title: t.checkout.title, description: t.checkout.lead };
}

export default async function CheckoutPage() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-8 pt-28 sm:px-6">
      <h1 className="font-display text-4xl italic sm:text-5xl">{t.checkout.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{t.checkout.lead}</p>
      <div className="mt-12">
        <CheckoutForm locale={locale} copy={t.checkout} />
      </div>
    </div>
  );
}

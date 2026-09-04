import { WHATSAPP_NUMBER } from "./site";

export type OrderLine = {
  name: string;
  size: string;
  color: string;
  qty: number;
  price: number;
};

export type OrderPayload = {
  customerName: string;
  customerPhone: string;
  city: string;
  notes: string;
  lines: OrderLine[];
  total: number;
  locale: "en" | "fr";
};

export function buildOrderMessage(order: OrderPayload) {
  const fr = order.locale === "fr";
  const items = order.lines
    .map((line) => {
      const sum = line.price * line.qty;
      return fr
        ? `• ${line.qty}× ${line.name}\n  Taille ${line.size} · ${line.color}\n  ${sum} MAD`
        : `• ${line.qty}× ${line.name}\n  Size ${line.size} · ${line.color}\n  ${sum} MAD`;
    })
    .join("\n\n");

  const note = order.notes.trim();

  const parts = fr
    ? [
        "Salam,",
        "Je souhaite passer une commande :",
        `Nom : ${order.customerName}`,
        `WhatsApp : ${order.customerPhone}`,
        `Ville : ${order.city}`,
        `Articles :\n${items}`,
        `Total : ${order.total} MAD`,
        note ? `Note : ${note}` : null,
        "Merci.",
      ]
    : [
        "Hello,",
        "I would like to place an order:",
        `Name: ${order.customerName}`,
        `WhatsApp: ${order.customerPhone}`,
        `City: ${order.city}`,
        `Items:\n${items}`,
        `Total: ${order.total} MAD`,
        note ? `Note: ${note}` : null,
        "Thank you.",
      ];

  return parts.filter((part): part is string => Boolean(part)).join("\n\n");
}

export function buildWhatsAppUrl(order: OrderPayload) {
  const text = buildOrderMessage(order);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildBookingUrl(locale: "en" | "fr") {
  const text =
    locale === "fr"
      ? "Salam, je souhaite commander chez Respect Your Culture."
      : "Hello, I would like to order with Respect Your Culture.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

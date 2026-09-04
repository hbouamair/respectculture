# Respect Your Culture

Portfolio and store for the Moroccan dance brand by **Scorpion 99**. Next.js 16, black/gold/white from the official lockup. Checkout opens a pre-filled WhatsApp order — no card.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the shop WhatsApp in international format without `+` (example: `212664088442`).

Edit products in `src/lib/products.ts`. Drop photos in `public/products/` and clips in `public/gallery/`.

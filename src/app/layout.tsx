import type { Metadata } from "next";
import { Fraunces, Noto_Naskh_Arabic, Outfit } from "next/font/google";
import { CartDrawer } from "@/components/cart-drawer";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const naskh = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://respectyourculture.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/lookbook/crew.jpg", width: 1200, height: 1500, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/lookbook/crew.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <html
      lang={locale === "fr" ? "fr" : "en"}
      className={`${display.variable} ${outfit.variable} ${naskh.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-white text-black">
        <Providers>
          <SiteHeader locale={locale} copy={t} />
          <main>{children}</main>
          <SiteFooter locale={locale} copy={t.footer} />
          <CartDrawer locale={locale} copy={t.cart} />
        </Providers>
      </body>
    </html>
  );
}

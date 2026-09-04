import Image from "next/image";
import Link from "next/link";
import type { Locale, Messages } from "@/lib/messages";
import { messages } from "@/lib/messages";
import { site } from "@/lib/site";

export function SiteFooter({
  locale = "en",
  copy,
}: {
  locale?: Locale;
  copy: Messages["footer"];
}) {
  const nav = messages[locale].nav;

  return (
    <footer className="mt-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-end gap-5">
              <Image
                src="/brand/logo-gold.png"
                alt={site.name}
                width={88}
                height={88}
                className="h-20 w-20 object-contain"
              />
              <Image
                src="/brand/logo-outline.png"
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 object-contain opacity-80"
              />
            </div>
            <p className="font-display mt-8 text-4xl italic leading-[1.05] text-white sm:text-5xl">
              {site.name}
            </p>
            <p className="font-arabic mt-3 text-2xl text-gold" lang="ar" dir="rtl">
              {site.nameAr}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/store" className="hover:text-gold">
                {nav.store}
              </Link>
              <Link href="/gallery" className="hover:text-gold">
                {nav.gallery}
              </Link>
              <Link href="/about" className="hover:text-gold">
                {nav.about}
              </Link>
            </div>
            <address className="not-italic text-sm text-muted">
              <p>{site.contact.address}</p>
              <a href={site.contact.emailMailto} className="mt-1 block hover:text-gold">
                {site.contact.email}
              </a>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        <p>
          © 2026 {site.name}. {copy.rights}
          <span className="mx-2 text-white/25" aria-hidden>
            ·
          </span>
          {copy.madeBy}{" "}
          <a
            href={site.social.maker}
            className="text-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smarty
          </a>
        </p>
      </div>
    </footer>
  );
}

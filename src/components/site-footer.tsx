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
  const home = messages[locale].home;

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/logo-gold.png"
            alt={site.name}
            width={64}
            height={64}
            className="h-14 w-14 object-contain"
          />
          <p className="font-display mt-6 text-2xl leading-tight">{site.name}</p>
          <p className="font-arabic mt-2 text-lg text-gold" lang="ar" dir="rtl">
            {site.nameAr}
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
            {nav.store}
          </p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            <Link href="/store" className="hover:text-gold">
              {home.viewAll}
            </Link>
            <Link href="/store" className="hover:text-gold">
              {home.jerseyTitle}
            </Link>
            <Link href="/gallery" className="hover:text-gold">
              {nav.gallery}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
            {nav.about}
          </p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            <Link href="/about" className="hover:text-gold">
              {nav.about}
            </Link>
            <a href={site.contact.emailMailto} className="hover:text-gold">
              {site.contact.email}
            </a>
            <p className="text-muted">{site.contact.address}</p>
          </div>
        </div>

        <div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {site.description}
          </p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        <p>
          © 2026 {site.name}. {copy.rights}
          <span className="mx-2 text-muted" aria-hidden>
            ·
          </span>
          {copy.madeBy}{" "}
          <a
            href={site.social.maker}
            className="text-black hover:text-gold"
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

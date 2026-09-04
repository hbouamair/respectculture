"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useCart } from "@/lib/cart";
import type { Locale, Messages } from "@/lib/messages";
import { navHrefs } from "@/lib/messages";
import { site } from "@/lib/site";

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h11l-.7 9.2a1.8 1.8 0 0 1-1.8 1.6H9a1.8 1.8 0 0 1-1.8-1.6L6.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-[22px]" aria-hidden>
      <span
        className={`absolute left-0 h-[1.5px] w-full bg-current transition duration-300 ${
          open ? "top-[7px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 h-[1.5px] w-full bg-current transition duration-300 ${
          open ? "top-[7px] -rotate-45" : "top-[14px]"
        }`}
      />
    </span>
  );
}

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Messages;
}) {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible px-3 pt-3 sm:px-5">
      <div className="glass relative z-50 mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-3 rounded-2xl px-3 sm:h-16 sm:px-4">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/brand/logo-gold.png"
            alt={site.name}
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
        </Link>

        <nav
          className="hidden items-center rounded-full bg-white/[0.04] p-1 ring-1 ring-white/10 md:flex"
          aria-label="Primary"
        >
          {navHrefs.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-[13px] tracking-wide transition duration-200 ${
                  active
                    ? "bg-gold text-black shadow-[0_0_0_1px_rgba(255,184,0,0.4)]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {copy.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} label={copy.header.language} />
          </div>
          <button
            type="button"
            className="relative grid h-11 w-11 place-items-center rounded-full text-white hover:bg-white/10 hover:text-gold"
            onClick={() => {
              setMenuOpen(false);
              setOpen(true);
            }}
            aria-label={copy.header.openCart}
          >
            <CartIcon />
            {count > 0 ? (
              <span suppressHydrationWarning className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold leading-none text-black">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-white hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? copy.header.closeMenu : copy.header.openMenu}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="mobile-menu fixed inset-0 z-40 flex flex-col bg-black px-6 pb-10 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile"
        >
          <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
            {navHrefs.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className={`mobile-link font-display py-2 text-[2.6rem] leading-[0.95] ${
                    active ? "text-gold" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.nav[item.key]}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
            <LanguageSwitcher locale={locale} label={copy.header.language} />
            <Link
              href="/store"
              className="btn-gold"
              onClick={() => setMenuOpen(false)}
            >
              {copy.hero.ctaStore}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

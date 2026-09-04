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

const shopNav = navHrefs.filter((item) => item.href !== "/");

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h11l-.7 9.2a1.8 1.8 0 0 1-1.8 1.6H9a1.8 1.8 0 0 1-1.8-1.6L6.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.4"
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
    <>
      <div className="sticky top-0 z-[80]">
        <p className="bg-black py-2 text-center text-[10px] tracking-[0.28em] text-white uppercase sm:text-[11px]">
          {copy.header.banner}
        </p>
        <header className="relative z-50 border-b border-line bg-white">
          <div className="relative mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between px-4 sm:px-6">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {shopNav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  data-active={active ? "true" : "false"}
                  className={`nav-link text-[11px] tracking-[0.22em] uppercase ${
                    active ? "text-black" : "text-muted hover:text-black"
                  }`}
                >
                  {copy.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-black md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? copy.header.closeMenu : copy.header.openMenu}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/brand/logo-gold.png"
              alt={site.name}
              width={44}
              height={44}
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              priority
            />
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher locale={locale} label={copy.header.language} />
            </div>
            <button
              type="button"
              className="relative grid h-11 w-11 place-items-center text-black hover:text-gold"
              onClick={() => {
                setMenuOpen(false);
                setOpen(true);
              }}
              aria-label={copy.header.openCart}
            >
              <CartIcon />
              {count > 0 ? (
                <span
                  suppressHydrationWarning
                  className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-black px-1 text-[10px] font-semibold leading-none text-white"
                >
                  {count}
                </span>
              ) : null}
            </button>
          </div>
          </div>
        </header>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-[#fafaf8] px-6 pb-10 pt-[calc(var(--chrome-h)+1.25rem)] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile"
        >
          <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
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
                  className={`mobile-link font-display py-2 text-[2.4rem] leading-[0.95] ${
                    active ? "text-gold" : "text-black"
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
    </>
  );
}

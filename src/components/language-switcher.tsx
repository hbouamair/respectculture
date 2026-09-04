"use client";

import type { Locale } from "@/lib/messages";

const LOCALE_COOKIE = "ryc-locale";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  function setLocale(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  }

  return (
    <div
      className="flex items-center rounded-full bg-white/[0.05] p-0.5 ring-1 ring-white/10"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-2.5 py-1 text-[11px] ${
          locale === "en" ? "bg-gold text-black" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`rounded-full px-2.5 py-1 text-[11px] ${
          locale === "fr" ? "bg-gold text-black" : "text-white/70 hover:text-white"
        }`}
      >
        FR
      </button>
    </div>
  );
}

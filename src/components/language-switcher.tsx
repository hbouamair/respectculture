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
    <div className="flex items-center gap-2 text-[11px] tracking-[0.18em]" aria-label={label}>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={locale === "en" ? "text-black" : "text-muted hover:text-black"}
      >
        EN
      </button>
      <span className="text-muted" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={locale === "fr" ? "text-black" : "text-muted hover:text-black"}
      >
        FR
      </button>
    </div>
  );
}

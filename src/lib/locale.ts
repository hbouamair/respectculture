import { cookies } from "next/headers";
import type { Locale } from "./messages";

export const LOCALE_COOKIE = "ryc-locale";
// cookie name is also used from the client language switcher as a string literal

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get(LOCALE_COOKIE)?.value === "fr" ? "fr" : "en";
}

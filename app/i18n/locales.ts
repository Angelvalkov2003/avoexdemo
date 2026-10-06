export type Locale = "en" | "bg" | "nl" | "de" | "es";

export const LOCALES: Locale[] = ["en", "nl", "de", "es", "bg"];

export const LOCALE_META: Record<
  Locale,
  { path: string; code: string; nativeLabel: string; ogLocale: string }
> = {
  en: { path: "/", code: "EN", nativeLabel: "English", ogLocale: "en_US" },
  nl: { path: "/nl", code: "NL", nativeLabel: "Nederlands", ogLocale: "nl_NL" },
  de: { path: "/de", code: "DE", nativeLabel: "Deutsch", ogLocale: "de_DE" },
  es: { path: "/es", code: "ES", nativeLabel: "Español", ogLocale: "es_ES" },
  bg: { path: "/bg", code: "BG", nativeLabel: "Български", ogLocale: "bg_BG" },
};

export function localePath(locale: Locale): string {
  return LOCALE_META[locale].path;
}

export function alternateLanguages(): Record<string, string> {
  return {
    en: "/",
    nl: "/nl",
    de: "/de",
    es: "/es",
    bg: "/bg",
    "x-default": "/",
  };
}

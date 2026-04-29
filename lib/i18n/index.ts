import en from "./en";
import es from "./es";
import pt from "./pt";
import type { Translations } from "./types";

export type Locale = "en" | "es" | "pt";

const translations: Record<Locale, Translations> = { en, es, pt };

export function getTranslations(locale: Locale): Translations {
    return translations[locale] ?? translations.en;
}

export type { Translations };

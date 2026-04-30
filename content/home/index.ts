import type { Locale } from "@/i18n/routing";
import type { HomeSections } from "./types";
import * as en from "./en";
import * as es from "./es";
import * as pt from "./pt";
import * as de from "./de";
import * as fr from "./fr";

const localeContent: Record<Locale, HomeSections> = { en, es, pt, de, fr };

export function getHomeContent(locale: Locale): HomeSections {
    return localeContent[locale];
}

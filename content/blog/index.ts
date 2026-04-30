import type { Locale } from "@/i18n/routing";
import type { BlogPostModule } from "./types";

type PostLoader = () => Promise<BlogPostModule>;

const registry: Record<string, Partial<Record<Locale, PostLoader>>> = {
    "how-to-win-rock-paper-scissors": {
        en: () => import("./how-to-win-rock-paper-scissors/en"),
        es: () => import("./how-to-win-rock-paper-scissors/es"),
        pt: () => import("./how-to-win-rock-paper-scissors/pt"),
        de: () => import("./how-to-win-rock-paper-scissors/de"),
        fr: () => import("./how-to-win-rock-paper-scissors/fr"),
    },
    "rock-paper-scissors-rules": {
        en: () => import("./rock-paper-scissors-rules/en"),
        es: () => import("./rock-paper-scissors-rules/es"),
        pt: () => import("./rock-paper-scissors-rules/pt"),
        de: () => import("./rock-paper-scissors-rules/de"),
        fr: () => import("./rock-paper-scissors-rules/fr"),
    },
};

export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPostModule | null> {
    const loaders = registry[slug];
    if (!loaders) return null;
    const load = loaders[locale] ?? loaders.en;
    if (!load) return null;
    return load();
}

export function getBlogStaticParams(): { locale: string; slug: string }[] {
    return Object.entries(registry).flatMap(([slug, localeMap]) =>
        Object.keys(localeMap).map((locale) => ({ locale, slug }))
    );
}

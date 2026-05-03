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
    "rock-paper-scissors-virtual-meeting-icebreaker": {
        en: () => import("./rock-paper-scissors-virtual-meeting-icebreaker/en"),
        es: () => import("./rock-paper-scissors-virtual-meeting-icebreaker/es"),
        pt: () => import("./rock-paper-scissors-virtual-meeting-icebreaker/pt"),
        de: () => import("./rock-paper-scissors-virtual-meeting-icebreaker/de"),
        fr: () => import("./rock-paper-scissors-virtual-meeting-icebreaker/fr"),
    },
    "rock-paper-scissors-long-distance-couples": {
        en: () => import("./rock-paper-scissors-long-distance-couples/en"),
        es: () => import("./rock-paper-scissors-long-distance-couples/es"),
        pt: () => import("./rock-paper-scissors-long-distance-couples/pt"),
        de: () => import("./rock-paper-scissors-long-distance-couples/de"),
        fr: () => import("./rock-paper-scissors-long-distance-couples/fr"),
    },
    "rock-paper-scissors-vs-coin-flip": {
        en: () => import("./rock-paper-scissors-vs-coin-flip/en"),
        es: () => import("./rock-paper-scissors-vs-coin-flip/es"),
        pt: () => import("./rock-paper-scissors-vs-coin-flip/pt"),
        de: () => import("./rock-paper-scissors-vs-coin-flip/de"),
        fr: () => import("./rock-paper-scissors-vs-coin-flip/fr"),
    },
    "rock-paper-scissors-online-with-friends": {
        en: () => import("./rock-paper-scissors-online-with-friends/en"),
        es: () => import("./rock-paper-scissors-online-with-friends/es"),
        pt: () => import("./rock-paper-scissors-online-with-friends/pt"),
        de: () => import("./rock-paper-scissors-online-with-friends/de"),
        fr: () => import("./rock-paper-scissors-online-with-friends/fr"),
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

export async function getAllBlogPostsMeta(locale: Locale) {
    const slugs = Object.keys(registry);
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const loaders = registry[slug];
            const load = loaders[locale] ?? loaders.en;
            if (!load) return null;
            const mod = await load();
            return mod.meta;
        })
    );
    return posts
        .filter(Boolean)
        .sort((a, b) => new Date(b!.publishedAt).getTime() - new Date(a!.publishedAt).getTime()) as import("./types").BlogPostMeta[];
}

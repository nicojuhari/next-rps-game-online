import type { Metadata } from "next";

const BASE_URL = "https://rps-game.online";
const OG_IMAGE = `${BASE_URL}/og_rps.jpg`;

const LOCALES = ["en", "es", "pt", "de", "fr"] as const;

const OG_LOCALE: Record<string, string> = {
    en: "en_US",
    es: "es_ES",
    pt: "pt_BR",
    de: "de_DE",
    fr: "fr_FR",
};

function absUrl(locale: string, path: string): string {
    return `${BASE_URL}${locale === "en" ? path : `/${locale}${path}`}`;
}

interface CreateMetadataOptions {
    locale: string;
    path: string; // e.g. "/" | "/two-players" | "/privacy"
    title: string;
    description: string;
    keywords?: string[];
    twitterCard?: "summary" | "summary_large_image";
}

export function createMetadata({
    locale,
    path,
    title,
    description,
    keywords,
    twitterCard = "summary_large_image",
}: CreateMetadataOptions): Metadata {
    const canonical = absUrl(locale, path);

    const hreflang: Record<string, string> = {
        "x-default": absUrl("en", path),
    };
    for (const l of LOCALES) {
        hreflang[l] = absUrl(l, path);
    }

    return {
        metadataBase: new URL(BASE_URL),
        title,
        description,
        ...(keywords?.length && { keywords }),
        robots: { index: true, follow: true },
        authors: [{ name: "Rock Paper Scissors Online" }],
        alternates: {
            canonical,
            languages: hreflang,
        },
        openGraph: {
            type: "website",
            url: canonical,
            siteName: "Rock Paper Scissors Online",
            locale: OG_LOCALE[locale] ?? "en_US",
            title,
            description,
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: "image/jpeg",
                },
            ],
        },
        twitter: {
            card: twitterCard,
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}

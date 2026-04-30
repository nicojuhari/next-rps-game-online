import { MetadataRoute } from "next";
import { getBlogStaticParams } from "@/content/blog";

const BASE = "https://rps-game.online";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogEntries: MetadataRoute.Sitemap = getBlogStaticParams().map(({ locale, slug }) => ({
        url: locale === "en" ? `${BASE}/blog/${slug}` : `${BASE}/${locale}/blog/${slug}`,
        lastModified: new Date("2026-04-30"),
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.7 : 0.5,
    }));

    return [
        { url: `${BASE}`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${BASE}/es`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/pt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/de`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/fr`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/two-players`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE}/es/two-players`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/pt/two-players`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/de/two-players`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/fr/two-players`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE}/es/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/pt/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/de/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/fr/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        ...blogEntries,
    ];
}

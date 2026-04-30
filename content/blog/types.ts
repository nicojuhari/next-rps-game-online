import type { ComponentType } from "react";

export type BlogPostMeta = {
    title: string;
    description: string;
    publishedAt: string; // ISO date string e.g. "2026-04-30"
    slug: string;
    readingTime: string; // e.g. "8 min read"
};

export type FaqItem = { q: string; a: string };

export type BlogPostModule = {
    meta: BlogPostMeta;
    Content: ComponentType;
    faqItems: FaqItem[];
};

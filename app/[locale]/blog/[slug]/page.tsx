import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogStaticParams } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
    return getBlogStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const post = await getBlogPost(slug, locale as Locale);
    if (!post) return {};
    return createMetadata({
        locale,
        path: `/blog/${slug}`,
        title: post.meta.title,
        description: post.meta.description,
    });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale, slug } = await params;
    const post = await getBlogPost(slug, locale as Locale);
    if (!post) notFound();

    const { meta, Content, faqItems } = post;

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.publishedAt,
        dateModified: meta.publishedAt,
        author: { "@type": "Person", name: "Nick", url: "https://nicojuhari.com" },
        publisher: {
            "@type": "Organization",
            name: "Rock Paper Scissors Online",
            logo: { "@type": "ImageObject", url: "https://rps-game.online/rock-paper-scissors-logo.svg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://rps-game.online/blog/${slug}` },
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    const publishedDate = new Date(meta.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <div className="max-w-2xl mx-auto w-full py-8 px-4">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-400 mb-6">
                    <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-500">Blog</span>
                </nav>

                {/* Header */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                    {meta.title}
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
                    <time dateTime={meta.publishedAt}>{publishedDate}</time>
                    <span>·</span>
                    <span>{meta.readingTime}</span>
                </div>

                {/* Article body */}
                <Content />
            </div>
        </>
    );
}

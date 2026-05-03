import Link from "next/link";
import { getAllBlogPostsMeta } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/blog",
        title: t("blog.title"),
        description: t("blog.description"),
        twitterCard: "summary",
    });
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const posts = await getAllBlogPostsMeta(locale as Locale);

    return (
        <div className="max-w-2xl mx-auto w-full py-12 px-4">
            <nav className="text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">Blog</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">Blog</h1>
            <p className="text-gray-500 mb-10">Rock Paper Scissors — strategy, rules, history, and tips.</p>

            <ul className="space-y-6">
                {posts.map((post) => {
                    const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    return (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                            >
                                <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500 leading-relaxed mb-3">{post.description}</p>
                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                    <time dateTime={post.publishedAt}>{date}</time>
                                    <span>·</span>
                                    <span>{post.readingTime}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

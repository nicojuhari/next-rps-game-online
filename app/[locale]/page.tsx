import Link from "next/link";
import OnePlayer from "@/components/OnePlayer";
import HomeContent from "@/components/HomeContent";
import AdSense from "@/components/AdSense";
import AnimatedPageTitle from "@/components/AnimatedPageTitle";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { getHomeContent } from "@/content/home";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/",
        title: t("home.title"),
        description: t("home.description"),
        keywords: t.raw("home.keywords") as string[],
    });
}

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const [t, content] = await Promise.all([
        getTranslations({ locale, namespace: "home" }),
        Promise.resolve(getHomeContent(locale as Locale)),
    ]);

    const [subtitleLine1, subtitleLine2] = t("subtitle").split("\n");

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <AnimatedPageTitle
                label={t("h1Label")}
                rock={t("h1Rock")}
                paper={t("h1Paper")}
                scissors={t("h1Scissors")}
                suffix={t("h1Online")}
                subtitle={<>{subtitleLine1}<br />{subtitleLine2}</>}
            />

            <OnePlayer />

            <Link
                href="/two-players"
                className="flex flex-col gap-1 mt-6 px-5 py-4 rounded-xl border border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700">
                    {t("challengeFriend.heading")}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-blue-600">
                    {t("challengeFriend.text")}
                </span>
                <span className="text-xs font-medium text-blue-600 mt-0.5">
                    {t("challengeFriend.cta")}
                </span>
            </Link>

            <AdSense adSlot="6657389797" className="mt-6" />
            <HomeContent
                Strategy={content.Strategy}
                Rules={content.Rules}
                Statistics={content.Statistics}
                History={content.History}
                Faq={content.Faq}
            />

            <content.BlogLinks />

            <div className="text-center py-8 mt-2 border-t">
                <p className="text-sm text-gray-400 font-light">
                    {t("footerPreamble")}{" "}
                    <span className="font-medium text-blue-400">{t("h1Rock")}</span>{" "}
                    <span className="font-medium text-yellow-400">{t("h1Paper")}</span>{" "}
                    <span className="font-medium text-red-400">{t("h1Scissors")}</span>{" "}
                    <span className="text-gray-400">{t("h1Online")}</span>
                </p>
            </div>

            <p className="text-sm text-center text-gray-400 mb-8">
                {t("privacyNoticeBefore")}
                <Link href="/privacy" className="text-blue-500 underline underline-offset-2" title="privacy policy">
                    {t("privacyNoticeLink")}
                </Link>
                {t("privacyNoticeAfter")}
            </p>
        </>
    );
};

export default Home;

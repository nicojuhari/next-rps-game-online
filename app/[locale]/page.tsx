import Link from "next/link";
import OnePlayer from "@/components/OnePlayer";
import HomeContent from "@/components/HomeContent";
import AdSense from "@/components/AdSense";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

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
    const t = await getTranslations({ locale, namespace: "home" });
    const tJsonLd = await getTranslations({ locale, namespace: "jsonLd" });

    const [subtitleLine1, subtitleLine2] = t("subtitle").split("\n");

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (tJsonLd.raw("faqHome") as Array<{ q: string; a: string }>).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="pt-8 pb-6 text-center space-y-3">
                <p className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-2">{t("h1Label")}</p>
                <h1 className="font-semibold leading-tight">
                    <span className="text-blue-500 text-3xl md:text-4xl">{t("h1Rock")} </span>
                    <span className="text-yellow-500 text-3xl md:text-4xl">{t("h1Paper")} </span>
                    <span className="text-red-500 text-3xl md:text-4xl">{t("h1Scissors")} </span>
                    <span className="text-gray-400 text-2xl md:text-3xl">{t("h1Online")}</span>
                </h1>
                <p className="text-gray-500 text-sm font-light">
                    {subtitleLine1}
                    <br /> {subtitleLine2}
                </p>
            </div>

            <OnePlayer />
            <AdSense adSlot="6657389797" className="mt-6" />
            <HomeContent />

            <div className="text-center py-8 mt-2 border-t border-gray-100">
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">{t("h1Label")}</p>
                <p className="font-semibold">
                    <span className="text-blue-400 text-xl">{t("h1Rock")} </span>
                    <span className="text-yellow-400 text-xl">{t("h1Paper")} </span>
                    <span className="text-red-400 text-xl">{t("h1Scissors")} </span>
                    <span className="text-gray-400 text-lg">{t("h1Online")}</span>
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

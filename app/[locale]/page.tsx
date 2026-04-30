import Link from "next/link";
import OnePlayer from "@/components/OnePlayer";
import HomeContent from "@/components/HomeContent";
import AdSense from "@/components/AdSense";
import AnimatedPageTitle from "@/components/AnimatedPageTitle";
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
            <AnimatedPageTitle
                label={t("h1Label")}
                rock={t("h1Rock")}
                paper={t("h1Paper")}
                scissors={t("h1Scissors")}
                suffix={t("h1Online")}
                subtitle={<>{subtitleLine1}<br />{subtitleLine2}</>}
            />

            <OnePlayer />
            <AdSense adSlot="6657389797" className="mt-6" />
            <HomeContent />

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

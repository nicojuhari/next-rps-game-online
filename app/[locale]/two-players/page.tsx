import { Suspense } from "react";
import Image from "next/image";
import TwoPlayersContent from "@/components/TwoPlayersContent";
import TwoPlayersPageSections from "@/components/TwoPlayersPageSections";
import { FirebaseProvider } from "@/contexts/FirebaseContext";
import AnimatedPageTitle from "@/components/AnimatedPageTitle";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { getTwoPlayersContent } from "@/content/two-players";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/two-players",
        title: t("twoPlayers.title"),
        description: t("twoPlayers.description"),
        keywords: t.raw("twoPlayers.keywords") as string[],
    });
}

const TwoPlayers = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const [t, tHome, content] = await Promise.all([
        getTranslations({ locale, namespace: "twoPlayers" }),
        getTranslations({ locale, namespace: "home" }),
        Promise.resolve(getTwoPlayersContent(locale as Locale)),
    ]);

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
                rock={tHome("h1Rock")}
                paper={tHome("h1Paper")}
                scissors={tHome("h1Scissors")}
                suffix={t("h1WithFriends")}
                suffixClassName="text-gray-400 text-xl md:text-2xl block"
            />
            <Suspense
                fallback={
                    <div className="py-8">
                        <div className="flex justify-center">
                            <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-24" />
                        </div>
                    </div>
                }
            >
                <FirebaseProvider>
                    <TwoPlayersContent />
                </FirebaseProvider>
            </Suspense>
            <TwoPlayersPageSections locale={locale} sections={content} />
        </>
    );
};

export default TwoPlayers;

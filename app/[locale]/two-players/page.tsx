import { Suspense } from "react";
import Image from "next/image";
import TwoPlayersContent from "@/components/TwoPlayersContent";
import { FirebaseProvider } from "@/contexts/FirebaseContext";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        title: t("twoPlayers.title"),
        description: t("twoPlayers.description"),
        canonical: locale === "en" ? "/two-players" : `/${locale}/two-players`,
        keywords: t.raw("twoPlayers.keywords") as string[],
        openGraph: { title: t("twoPlayers.title"), description: t("twoPlayers.description") },
        twitter: { card: "summary_large_image", title: t("twoPlayers.title"), description: t("twoPlayers.description") },
    });
}

const TwoPlayers = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const tJsonLd = await getTranslations({ locale, namespace: "jsonLd" });

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (tJsonLd.raw("faqTwoPlayers") as Array<{ q: string; a: string }>).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Suspense
                fallback={
                    <div className="py-8">
                        <h1 className="text-xl mb-4 text-center">Play Rock Paper Scissors Online with Friends</h1>
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
        </>
    );
};

export default TwoPlayers;

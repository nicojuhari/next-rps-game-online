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
        locale,
        path: "/two-players",
        title: t("twoPlayers.title"),
        description: t("twoPlayers.description"),
        keywords: t.raw("twoPlayers.keywords") as string[],
    });
}

const TwoPlayers = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "twoPlayers" });
    const tHome = await getTranslations({ locale, namespace: "home" });
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
            <div className="pt-8 pb-6 text-center space-y-3">
                <p className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-4">{t("h1Label")}</p>
                <h1 className="font-semibold leading-tight">
                    <span className="text-blue-500 text-3xl md:text-4xl">{tHome("h1Rock")} </span>
                    <span className="text-yellow-500 text-3xl md:text-4xl">{tHome("h1Paper")} </span>
                    <span className="text-red-500 text-3xl md:text-4xl">{tHome("h1Scissors")} </span>
                    <span className="text-gray-400 text-xl md:text-2xl block">{t("h1WithFriends")}</span>
                </h1>
            </div>
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
        </>
    );
};

export default TwoPlayers;

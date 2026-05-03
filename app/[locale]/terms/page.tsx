import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Link from "next/link";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/terms",
        title: t("terms.title"),
        description: t("terms.description"),
        twitterCard: "summary",
    });
}

const TermsPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale as Locale, namespace: "terms" });

    const sections = [
        { title: t("acceptanceTitle"), text: t("acceptanceText") },
        { title: t("useTitle"), text: t("useText") },
        { title: t("ipTitle"), text: t("ipText") },
        { title: t("disclaimerTitle"), text: t("disclaimerText") },
        { title: t("liabilityTitle"), text: t("liabilityText") },
        { title: t("adsTitle"), text: t("adsText") },
        { title: t("changesTitle"), text: t("changesText") },
    ];

    return (
        <div className="max-w-2xl mx-auto w-full py-12 px-4">
            <nav className="text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{t("h1")}</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">{t("h1")}</h1>
            <p className="text-xs text-gray-400 mb-6">{t("lastUpdated")}</p>
            <p className="text-gray-600 mb-10 leading-relaxed">{t("intro")}</p>

            <div className="space-y-7">
                {sections.map(({ title, text }) => (
                    <div key={title}>
                        <h2 className="text-base font-semibold text-gray-800 mb-1">{title}</h2>
                        <p className="text-gray-600 leading-relaxed">{text}</p>
                    </div>
                ))}

                <div className="border-t pt-6">
                    <h2 className="text-base font-semibold text-gray-800 mb-1">{t("contactTitle")}</h2>
                    <p className="text-gray-600 mb-2">{t("contactText")}</p>
                    <a
                        href="mailto:contact@rps-game.online"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        contact@rps-game.online
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;

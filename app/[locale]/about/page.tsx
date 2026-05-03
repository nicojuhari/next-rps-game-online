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
        path: "/about",
        title: t("about.title"),
        description: t("about.description"),
        twitterCard: "summary",
    });
}

const AboutPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale as Locale, namespace: "about" });

    return (
        <div className="max-w-2xl mx-auto w-full py-12 px-4">
            <nav className="text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{t("h1")}</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">{t("intro")}</p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{t("projectTitle")}</h2>
                    <p className="text-gray-600 leading-relaxed">{t("projectText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{t("whoTitle")}</h2>
                    <p className="text-gray-600 leading-relaxed">{t("whoText")}</p>
                </div>

                <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{t("contactTitle")}</h2>
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

export default AboutPage;

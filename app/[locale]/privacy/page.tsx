import PrivacyPolicyComp from "@/components/PrivacyPolicy";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";


export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/privacy",
        title: t("privacy.title"),
        description: t("privacy.description"),
        twitterCard: "summary",
    });
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <PrivacyPolicyComp />;
}

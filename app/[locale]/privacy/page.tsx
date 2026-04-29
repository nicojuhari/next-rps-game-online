import PrivacyPolicyComp from "@/components/PrivacyPolicy";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        title: t("privacy.title"),
        description: t("privacy.description"),
        canonical: locale === "en" ? "/privacy" : `/${locale}/privacy`,
        openGraph: { title: t("privacy.title"), description: t("privacy.description") },
        twitter: { card: "summary", title: t("privacy.title"), description: t("privacy.description") },
    });
}

const Privacy = () => {
    return <PrivacyPolicyComp />;
};

export default Privacy;

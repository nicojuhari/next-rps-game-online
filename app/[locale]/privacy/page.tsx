import PrivacyPolicyComp from "@/components/PrivacyPolicy";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });
    return createMetadata({
        locale,
        path: "/privacy",
        title: t("privacy.title"),
        description: t("privacy.description"),
        twitterCard: "summary",
    });
}

const Privacy = () => {
    return <PrivacyPolicyComp />;
};

export default Privacy;

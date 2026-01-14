import { createMetadata } from "@/lib/metadata";
import PrivacyPolicyComp from "@/components/PrivacyPolicy";
export const metadata = createMetadata({
    title: "Privacy Policy - Rock Paper Scissors Online",
    description:
        "Learn about our privacy practices and data protection policies for Rock Paper Scissors Online. We prioritize your privacy and data security.",
    canonical: "/privacy",
    keywords: ["privacy policy", "data protection", "rock paper scissors privacy", "user data", "security"],
    openGraph: {
        title: "Privacy Policy - Rock Paper Scissors Online",
        description: "Learn about our privacy practices and data protection policies for Rock Paper Scissors Online.",
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy - Rock Paper Scissors Online",
        description: "Learn about our privacy practices and data protection policies.",
    },
});

const Privacy = () => {
    return <PrivacyPolicyComp />;
};

export default Privacy;

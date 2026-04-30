import { getTranslations } from "next-intl/server";
import AnimatedCard from "./AnimatedCard";
import type { TwoPlayersSections } from "@/content/two-players/types";

type Props = {
    locale: string;
    sections: Pick<TwoPlayersSections, "HowToPlay" | "HowItWorks" | "WhySettle" | "UseCases" | "Faq">;
};

export default async function TwoPlayersPageSections({ locale, sections }: Props) {
    const tHome = await getTranslations({ locale, namespace: "home" });
    const t = await getTranslations({ locale, namespace: "twoPlayers" });
    const { HowToPlay, HowItWorks, WhySettle, UseCases, Faq } = sections;
    const sectionList = [HowToPlay, HowItWorks, WhySettle, UseCases, Faq];

    return (
        <>
            <div className="my-10 space-y-4 font-light">
                {sectionList.map((Section, i) => (
                    <AnimatedCard key={i} i={i}>
                        <Section />
                    </AnimatedCard>
                ))}
            </div>
            <div className="text-center py-8 mt-2 border-t">
                <p className="text-sm text-gray-400 font-light">
                    {tHome("footerPreamble")}{" "}
                    <span className="font-medium text-blue-400">{tHome("h1Rock")}</span>{" "}
                    <span className="font-medium text-yellow-400">{tHome("h1Paper")}</span>{" "}
                    <span className="font-medium text-red-400">{tHome("h1Scissors")}</span>{" "}
                    <span className="text-gray-400">{t("h1WithFriends")}</span>
                </p>
            </div>
        </>
    );
}

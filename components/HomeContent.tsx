import AnimatedCard from "./AnimatedCard";
import type { HomeSections } from "@/content/home/types";

type Props = Pick<HomeSections, "Strategy" | "Rules" | "Statistics" | "History" | "Faq">;

export default function HomeContent({ Strategy, Rules, Statistics, History, Faq }: Props) {
    const sections = [Strategy, Rules, Statistics, History, Faq];
    return (
        <div className="my-10 space-y-4 font-light">
            {sections.map((Section, i) => (
                <AnimatedCard key={i} i={i}>
                    <Section />
                </AnimatedCard>
            ))}
        </div>
    );
}

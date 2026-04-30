"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const card = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" as const },
});

const HomeContent = () => {
    const t = useTranslations("home");
    const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;

    return (
        <div className="my-10 space-y-4 font-light">
            <motion.div className="bg-white rounded-xl p-6 border" {...card(0)}>
                <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">{t("strategy.title")}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("strategy.p1")}</p>
                    <p>{t("strategy.p2")}</p>
                    <ul className="list-disc space-y-2 pl-4">
                        <li>
                            <span className="font-semibold text-gray-700">{t("strategy.winLabel")}</span> {t("strategy.winText")}
                            <br />
                            <span className="italic text-gray-500">{t("strategy.winCounterLabel")}</span> {t("strategy.winCounter")}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t("strategy.loseLabel")}</span> {t("strategy.loseText")}
                            <br />
                            <span className="italic text-gray-500">{t("strategy.loseCounterLabel")}</span> {t("strategy.loseCounter")}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t("strategy.firstThrowLabel")}</span>{" "}
                            {t("strategy.firstThrowText")}
                            <br />
                            <span className="italic text-gray-500">{t("strategy.tipLabel")}</span> {t("strategy.tip")}
                        </li>
                    </ul>
                    <p>
                        <span className="font-semibold text-gray-700">{t("strategy.luckQ")}</span> {t("strategy.luckA")}
                    </p>
                    <p>{t("strategy.certCTA")}</p>
                </div>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-6 border" {...card(1)}>
                <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">{t("rules.title")}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("rules.p1")}</p>
                    <ul className="pl-4 space-y-2 list-disc">
                        <li>
                            <span className="font-semibold text-gray-700">{t("rules.rockCrushes")}</span> - ✊ → ✂️
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t("rules.scissorsCuts")}</span> - ✂️ → 📄
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t("rules.paperCovers")}</span> - 📄 → ✊
                        </li>
                    </ul>
                    <p>{t("rules.drawRule")}</p>
                    <p className="font-semibold text-gray-700">{t("rules.bestOf3Q")}</p>
                    <p>{t("rules.bestOf3A")}</p>
                </div>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-6 border" {...card(2)}>
                <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">{t("statistics.title")}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("statistics.p1")}</p>
                    <p>{t("statistics.p2")}</p>
                    <p>{t("statistics.story")}</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>{t("statistics.sothebys")}</li>
                        <li>{t("statistics.christies")}</li>
                    </ul>
                    <p>{t("statistics.conclusion")}</p>
                </div>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-6 border" {...card(3)}>
                <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">{t("history.title")}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("history.p1")}</p>
                    <p>{t("history.p2")}</p>
                    <p>{t("history.p3")}</p>
                    <p>{t("history.didYouKnow")}</p>
                    <p>{t("history.computerNote")}</p>
                    <p>{t("history.fairPlay")}</p>
                </div>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-6 border" {...card(4)}>
                <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">{t("faq.title")}</h2>
                <div className="space-y-4 text-sm text-gray-600">
                    {faqItems.map((item, i) => (
                        <div key={i}>
                            <h3 className="font-semibold text-gray-800">{item.q}</h3>
                            <p className="mt-1">{item.a}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HomeContent;

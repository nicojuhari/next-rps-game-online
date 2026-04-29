import type { Translations } from "@/lib/i18n";

const HomeContent = ({ t }: { t: Translations }) => {
    return (
        <div className="my-10 space-y-4 font-light">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                    {t.home.strategy.title}
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t.home.strategy.p1}</p>
                    <p>{t.home.strategy.p2}</p>
                    <ul className="list-disc space-y-2 pl-4">
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.strategy.winLabel}</span>{" "}
                            {t.home.strategy.winText}
                            <br />
                            <span className="italic text-gray-500">{t.home.strategy.winCounterLabel}</span>{" "}
                            {t.home.strategy.winCounter}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.strategy.loseLabel}</span>{" "}
                            {t.home.strategy.loseText}
                            <br />
                            <span className="italic text-gray-500">{t.home.strategy.loseCounterLabel}</span>{" "}
                            {t.home.strategy.loseCounter}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.strategy.firstThrowLabel}</span>{" "}
                            {t.home.strategy.firstThrowText}
                            <br />
                            <span className="italic text-gray-500">{t.home.strategy.tipLabel}</span>{" "}
                            {t.home.strategy.tip}
                        </li>
                    </ul>
                    <p>
                        <span className="font-semibold text-gray-700">{t.home.strategy.luckQ}</span>{" "}
                        {t.home.strategy.luckA}
                    </p>
                    <p>{t.home.strategy.certCTA}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                    {t.home.rules.title}
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t.home.rules.p1}</p>
                    <ul className="pl-4 space-y-2 list-disc">
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.rules.rockCrushes}</span> - ✊ beats ✂️
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.rules.scissorsCuts}</span> - ✂️ beats 📄
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700">{t.home.rules.paperCovers}</span> - 📄 beats ✊
                        </li>
                    </ul>
                    <p>{t.home.rules.drawRule}</p>
                    <p className="font-semibold text-gray-700">{t.home.rules.bestOf3Q}</p>
                    <p>{t.home.rules.bestOf3A}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                    {t.home.statistics.title}
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t.home.statistics.p1}</p>
                    <p>{t.home.statistics.p2}</p>
                    <p>{t.home.statistics.story}</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>{t.home.statistics.sothebys}</li>
                        <li>{t.home.statistics.christies}</li>
                    </ul>
                    <p>{t.home.statistics.conclusion}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                    {t.home.history.title}
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                    <p>{t.home.history.p1}</p>
                    <p>{t.home.history.p2}</p>
                    <p>{t.home.history.p3}</p>
                    <p>{t.home.history.didYouKnow}</p>
                    <p>{t.home.history.computerNote}</p>
                    <p>{t.home.history.fairPlay}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                    {t.home.faq.title}
                </h2>
                <div className="space-y-4 text-sm text-gray-600">
                    {t.home.faq.items.map((item, i) => (
                        <div key={i}>
                            <h3 className="font-semibold text-gray-800">{item.q}</h3>
                            <p className="mt-1">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeContent;

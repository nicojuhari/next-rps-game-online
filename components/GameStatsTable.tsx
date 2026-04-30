"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { type GameHistoryEntry } from "@/lib/game-history";

const choiceEmoji = { 1: "🪨", 2: "📃", 3: "✂️" } as const;

const ResultBadge = ({ result }: { result: GameHistoryEntry["result"] }) => {
    const t = useTranslations("gameStats");
    if (result === "win") return <span className="text-green-600 font-bold text-xs">{t("win")}</span>;
    if (result === "lose") return <span className="text-red-500 font-bold text-xs">{t("lose")}</span>;
    return <span className="text-gray-400 font-bold text-xs">{t("draw")}</span>;
};

const GameStatsTable = ({ entries, opponentLabel }: { entries: GameHistoryEntry[]; opponentLabel: string }) => {
    const t = useTranslations("gameStats");
    const [expanded, setExpanded] = useState(false);

    if (entries.length === 0) return null;

    return (
        <div className="mt-4 max-w-sm mx-auto">
            <div className={`overflow-y-auto rounded-md bg-white border ${expanded ? "" : "max-h-[252px]"}`}>
                <table className="w-full text-xs table-fixed">
                    <thead className="sticky top-0 bg-white border-b z-10">
                        <tr className="text-gray-500 font-light">
                            <th className="py-2 text-left pl-3 font-light">{t("you")}</th>
                            <th className="py-2 text-left font-light">{opponentLabel}</th>
                            <th className="py-2 text-center w-10 font-light pr-3">{t("result")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, i) => (
                            <tr key={i} className="border-b last:border-0">
                                <td className="py-2 pl-3 tracking-wide">
                                    {entry.yourChoices.map((c) => choiceEmoji[c as keyof typeof choiceEmoji]).join(" ")}
                                </td>
                                <td className="py-2 tracking-wide">
                                    {entry.opponentChoices.map((c) => choiceEmoji[c as keyof typeof choiceEmoji]).join(" ")}
                                </td>
                                <td className="py-2 text-center">
                                    <ResultBadge result={entry.result} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {entries.length > 6 && (
                <div className="text-center mt-1.5">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        {expanded ? t("collapse") : t("showAll", { count: entries.length })}
                    </button>
                </div>
            )}
        </div>
    );
};

export default GameStatsTable;

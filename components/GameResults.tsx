"use client";
import { useTranslations } from "next-intl";

interface GameResultsProps {
    playerId: string;
    gameWinner: null | number | string;
    onShare?: () => void;
}

const GameResults = ({ playerId, gameWinner, onShare }: GameResultsProps) => {
    const t = useTranslations("gameResults");

    return (
        <div className="text-center">
            <div className="text-lg font-medium">
                {gameWinner === playerId ? (
                    <div className="text-green-600">{t("won")}</div>
                ) : gameWinner === "draw" ? (
                    <div className="text-gray-600">{t("draw")}</div>
                ) : (
                    <div className="text-red-600">{t("lost")}</div>
                )}
            </div>
            {onShare && (
                <button
                    onClick={onShare}
                    className="mt-2 text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors cursor-pointer"
                >
                    {t("shareScore")}
                </button>
            )}
        </div>
    );
};

export default GameResults;

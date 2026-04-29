import type { Translations } from "@/lib/i18n";

interface GameResultsProps {
    playerId: string;
    gameWinner: null | number | string;
    onShare?: () => void;
    t: Translations;
}

const GameResults = ({ playerId, gameWinner, onShare, t }: GameResultsProps) => {
    return (
        <div className="text-center">
            <div className="text-lg font-medium">
                {gameWinner === playerId ? (
                    <div className="text-green-600">{t.gameResults.won}</div>
                ) : gameWinner === "draw" ? (
                    <div className="text-gray-600">{t.gameResults.draw}</div>
                ) : (
                    <div className="text-red-600">{t.gameResults.lost}</div>
                )}
            </div>
            {onShare && (
                <button
                    onClick={onShare}
                    className="mt-2 text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors cursor-pointer"
                >
                    {t.gameResults.shareScore}
                </button>
            )}
        </div>
    );
};

export default GameResults;

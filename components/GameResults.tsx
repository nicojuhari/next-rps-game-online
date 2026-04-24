interface GameResultsProps {
    playerId: string;
    gameWinner: null | number | string;
    onShare?: () => void;
}

const GameResults = ({ playerId, gameWinner, onShare }: GameResultsProps) => {
    return (
        <div className="text-center">
            <div className="text-lg font-medium">
                {gameWinner === playerId ? (
                    <div className="text-green-600">🥳 You Won!</div>
                ) : gameWinner === "draw" ? (
                    <div className="text-gray-600">It&apos;s a Draw!</div>
                ) : (
                    <div className="text-red-600">😞 You Lost.</div>
                )}
            </div>
            {onShare && (
                <button
                    onClick={onShare}
                    className="mt-2 text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors cursor-pointer"
                >
                    🏆 Share score
                </button>
            )}
        </div>
    );
};

export default GameResults;

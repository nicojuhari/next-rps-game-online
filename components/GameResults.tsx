const GameResults = ({ playerId, gameWinner }: { playerId: string; gameWinner: null | number | string }) => {
    return (
        <div className="text-center text-lg font-medium">
            {gameWinner === playerId ? (
                <div className="text-green-600">🥳 You Won!</div>
            ) : gameWinner === "draw" ? (
                <div className="text-gray-600">It&apos;s a Draw!</div>
            ) : (
                <div className="text-red-600">😞 You Lost.</div>
            )}
        </div>
    );
};

export default GameResults;

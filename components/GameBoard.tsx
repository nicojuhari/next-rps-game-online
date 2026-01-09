"use client";
import { useMemo } from "react";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import { useGame } from "@/lib/hooks/useGame";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useSearchParams } from "next/navigation";
import TableBoard from "./TableBoard";
import GameEffects from "./GameEffects";
import GameResults from "./GameResults";

const GameBoard = () => {
    const { gameData, updateGameChoices, resetGame } = useFirebaseContext();

    const { isGameFinished, gameWinner } = useGame();
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId") || "";
    const { playerId, isLoaded } = usePlayer();
    // Get your choices and all players' choices
    const yourChoices = useMemo(() => {
        if (!gameData) return [];
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid === playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    const secondPlayerChoices = useMemo(() => {
        if (!gameData) return [];
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid !== playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    // useEffect(() => {
    //     if (isGameFinished && gameData && gameWinner !== "draw" && gameWinner !== null) {
    //         updateGameWinner(gameData.$id, gameWinner);
    //         // Optionally update lastWinner in DB here
    //     }
    // }, [isGameFinished, gameWinner]);

    // Show loading state while player ID is being initialized
    if (!isLoaded) {
        return (
            <div className="max-w-sm mx-auto">
                <div className="text-center mt-8">
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    const controlers: Record<string, string> = {
        "1": "🪨",
        "2": "📃",
        "3": "✂️",
    };

    const select = async (choice: number) => {
        await updateGameChoices(gameId, playerId, choice);
    };

    return (
        <div className="max-w-sm mx-auto">
            {gameData && gameData.gameStake && (
                <div className="my-4">
                    <p className="font-medium text-center">Let&apos;s decide:</p>
                    <p className="text-sm text-center text-green-500"> {gameData.gameStake}</p>
                </div>
            )}
            <div className="relative">
                <div className={`grid grid-cols-3 items-center gap-6 w-full mt-2 ${isGameFinished ? "opacity-50" : ""}`}>
                    {Object.entries(controlers).map(([key, item]) => (
                        <div
                            onClick={() => select(+key)}
                            className={`aspect-square text-5xl inline-flex items-center select-none justify-center cursor-pointer p-2 bg-white shadow-lg rounded-md transition-all duration-300 ${
                                !isGameFinished ? "hover:shadow-md hover:translate-y-1" : ""
                            }`}
                            key={key}
                        >
                            {" "}
                            {item}
                        </div>
                    ))}
                </div>
                {isGameFinished && gameData && (
                    <div className="absolute inset-0 bg-white/95 border border-gray-100 flex flex-col items-center justify-center p-4 rounded-md">
                        <GameResults playerId={playerId} gameWinner={gameWinner} />
                        <div className="mt-3 text-center">
                            <button onClick={() => resetGame(gameData?.$id)} className="btn btn-success">
                                Play again
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {gameData && (
                <>
                    {/* Show all players' choices in a table or list */}
                    <TableBoard
                        yourChoices={yourChoices}
                        secondPlayerChoices={secondPlayerChoices}
                        isGameFinished={isGameFinished || false}
                    />

                    {isGameFinished && playerId === gameWinner && <GameEffects />}
                    <div className="text-xs text-gray-500 space-y-2 mt-2">
                        After both players select their moves 3 times, the game ends, and the results will be displayed.
                    </div>
                </>
            )}
        </div>
    );
};

export default GameBoard;

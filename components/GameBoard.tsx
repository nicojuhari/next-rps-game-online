"use client";
import { useEffect, useMemo } from "react";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import { useGame } from "@/lib/hooks/useGame";
import { getGameWinner } from "@/lib/game-utils";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useSearchParams } from "next/navigation";
import TableBoard from "./TableBoard";
import GameEffects from "./GameEffects";
import GameResults from "./GameResults";

const GameBoard = () => {
    const { gameData, updateGameChoices, resetGame, updateGameWinner } = useFirebaseContext();

    const { isGameFinished } = useGame();
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId") || "";
    const { playerId, isLoaded } = usePlayer();

    // Get your choices and all players' choices
    const yourChoices = useMemo(() => {
        if (!gameData) return [];
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid === playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    const yourWins = useMemo(() => {
        if (!gameData) return 0;
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid === playerId)?.[1].wins || 0;
    }, [gameData, playerId]);

    const secondPlayerChoices = useMemo(() => {
        if (!gameData) return [];
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid !== playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    const secondPlayerWins = useMemo(() => {
        if (!gameData) return 0;
        const allPlayers = Object.entries(gameData.players || {});
        return allPlayers.find(([uid]) => uid !== playerId)?.[1].wins || 0;
    }, [gameData, playerId]);

    useEffect(() => {
        const getTheWinner = () => {
            if (isGameFinished && gameData) {
                const winnerID = getGameWinner(gameData);
                updateGameWinner(gameData.$id, winnerID || "draw");
            }
            console.log(gameData?.status);
        };

        if (isGameFinished) {
            getTheWinner();
        }
        console.log("useGame - isGameFinished changed:", isGameFinished);
    }, [isGameFinished]);

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
        <div className="max-w-sm mx-auto p-4 md:p-6 bg-gray-600 rounded-lg shadow-md">
            {gameData && gameData.gameStake && (
                <div className="mb-4 md:mb-6 text-gray-300">
                    <p className="text-sm text-center">This game will decide:</p>
                    <p className="text-center text-green-400"> {gameData.gameStake}</p>
                </div>
            )}
            <div className="flex justify-between gap-8 text-sm text-gray-300">
                <span>
                    You: <strong>{yourWins}</strong>
                </span>
                <span>
                    2nd Player: <strong>{secondPlayerWins}</strong>
                </span>
            </div>
            <div className="relative mt-1">
                <div className="grid grid-cols-3 items-center gap-4 md:gap-6 w-full">
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
                    <div className="absolute inset-0 bg-white flex justify-between gap-6 items-center p-4 md:p-6 rounded">
                        <GameResults playerId={playerId} gameWinner={gameData.lastWinner || ""} />
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    resetGame(gameData?.$id);
                                }}
                                className="btn btn-outline"
                            >
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
                    {isGameFinished && playerId === gameData.lastWinner && <GameEffects />}
                </>
            )}
        </div>
    );
};

export default GameBoard;

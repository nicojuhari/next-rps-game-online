"use client";
import { useState, useMemo, useEffect } from "react";
import TableBoard from "@/components/TableBoard";
import GameResults from "@/components/GameResults";
import { getGameWinner } from "@/lib/game-utils";
import GameEffects from "@/components/GameEffects";

const OnePlayer = () => {
    const playerId = "player1";
    const controlers = {
        1: "🪨",
        2: "📃",
        3: "✂️",
    };

    const [playerChoices, setPlayerChoices] = useState<number[]>([]);
    const [computerChoices, setComputerChoices] = useState<number[]>([]);
    const [gameWinner, setGameWinner] = useState<null | string>(null);
    const [userWins, setUserWins] = useState<number>(0);
    const [computerWins, setComputerWins] = useState<number>(0);

    // Load scores from localStorage on mount
    useEffect(() => {
        const storedUserWins = localStorage.getItem("rps_userWins");
        const storedComputerWins = localStorage.getItem("rps_computerWins");
        if (storedUserWins) {
            queueMicrotask(() => setUserWins(Number(storedUserWins)));
        }
        if (storedComputerWins) {
            queueMicrotask(() => setComputerWins(Number(storedComputerWins)));
        }
    }, []);

    const isGameFinished = useMemo(() => {
        return playerChoices.length === 3 && computerChoices.length === 3;
    }, [playerChoices, computerChoices]);

    const getComputerChoice = () => {
        return Math.floor(Math.random() * 3) + 1;
    };

    const select = (choice: number) => {
        if (playerChoices.length === 3) return;

        setPlayerChoices((prev) => {
            const newChoices = [...prev, choice];
            if (prev.length === 2) {
                const compChoices = [getComputerChoice(), getComputerChoice(), getComputerChoice()];
                setComputerChoices(compChoices);
                const winner = getGameWinner({
                    $id: "local-one-player",
                    maxPlayers: 2,
                    players: {
                        player1: { name: "You", choices: newChoices },
                        computer: { name: "Computer", choices: compChoices },
                    },
                });
                setGameWinner(winner);

                // Update localStorage win counters
                if (winner === "player1") {
                    const newUserWins = userWins + 1;
                    setUserWins(newUserWins);
                    localStorage.setItem("rps_userWins", String(newUserWins));
                } else if (winner === "computer") {
                    const newComputerWins = computerWins + 1;
                    setComputerWins(newComputerWins);
                    localStorage.setItem("rps_computerWins", String(newComputerWins));
                }
            }
            return newChoices;
        });
    };

    const resetGame = () => {
        setPlayerChoices([]);
        setComputerChoices([]);
        setTimeout(() => setGameWinner(null), 800);
    };

    return (
        <div className="max-w-sm mx-auto p-4 md:p-6 bg-gray-600 rounded-lg shadow-md">
            <p className="font-medium text-xl text-center text-white mb-4 md:mb-6">1 Player Game</p>
            {/* <p className="text-xs text-center text-gray-400">You vs Computer</p> */}
            <div className="flex justify-between gap-8 text-sm text-gray-300">
                <span>
                    You: <strong>{userWins}</strong>
                </span>
                <span>
                    Computer: <strong>{computerWins}</strong>
                </span>
            </div>
            <div className="relative mt-1">
                <div className="grid grid-cols-3 items-center gap-4 md:gap-6 w-full">
                    {Object.entries(controlers).map(([key, item]) => (
                        <div
                            onClick={() => select(+key)}
                            className={`aspect-square text-5xl inline-flex items-center select-none justify-center cursor-pointer p-2 bg-white shadow-md rounded-md transition-all duration-300 ${
                                !isGameFinished ? "hover:shadow-sm hover:translate-y-1" : "shadow-none cursor-not-allowed"
                            }`}
                            key={key}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                {isGameFinished && (
                    <div className="absolute inset-0 bg-white flex justify-between gap-6 items-center p-4 md:p-6 rounded">
                        <GameResults playerId={playerId} gameWinner={gameWinner} />
                        <div className="text-center">
                            <button onClick={() => resetGame()} className="btn btn-outline">
                                Play again
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <TableBoard
                yourChoices={playerChoices}
                secondPlayerChoices={computerChoices}
                isGameFinished={isGameFinished}
                isOnePlayer={true}
            />

            {isGameFinished && playerId === gameWinner && <GameEffects />}
        </div>
    );
};

export default OnePlayer;

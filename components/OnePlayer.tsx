"use client";
import { useState, useMemo } from "react";
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

    const isGameFinished = useMemo(() => {
        return playerChoices.length === 3 && computerChoices.length === 3;
    }, [playerChoices, computerChoices]);

    const getComputerChoice = () => {
        return Math.floor(Math.random() * 3) + 1;
    };

    const select = (choice: number) => {
        if (playerChoices.length === 3) return;

        setPlayerChoices([...playerChoices, choice]);

        if (playerChoices.length == 2) {
            const compChoices = [getComputerChoice(), getComputerChoice(), getComputerChoice()];
            setComputerChoices(compChoices);
            const winner = getGameWinner({
                $id: "local-one-player",
                maxPlayers: 2,
                players: {
                    player1: { name: "You", choices: [...playerChoices, choice] },
                    computer: { name: "Computer", choices: compChoices },
                },
            });

            setGameWinner(winner);
        }
    };

    const resetGame = () => {
        setPlayerChoices([]);
        setComputerChoices([]);
        setTimeout(() => setGameWinner(null), 800);
    };

    return (
        <div className="max-w-sm mx-auto">
            <p className="font-medium text-xl text-center">1 Player Game</p>
            <p className="text-xs text-center text-gray-400">You vs Computer</p>
            <div className="relative mt-6">
                <div className="grid grid-cols-3 items-center gap-6 w-full mt-2">
                    {Object.entries(controlers).map(([key, item]) => (
                        <div
                            onClick={() => select(+key)}
                            className={`aspect-square text-5xl inline-flex items-center select-none justify-center cursor-pointer p-2 bg-white shadow-md rounded-md transition-all duration-300 ${
                                !isGameFinished ? "hover:shadow-sm hover:translate-y-1" : "shadow-none cursor-not-allowed"
                            }`}
                            key={key}
                        >
                            {" "}
                            {item}
                        </div>
                    ))}
                </div>
                {isGameFinished && (
                    <div className="absolute inset-0 bg-white/95 border border-gray-100 flex flex-col items-center justify-center p-4 rounded-md">
                        <GameResults playerId={playerId} gameWinner={gameWinner} />
                        <div className="mt-3 text-center">
                            <button onClick={() => resetGame()} className="btn btn-success">
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

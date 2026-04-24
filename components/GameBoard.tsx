"use client";
import { useEffect, useMemo, useState } from "react";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import { useGame } from "@/lib/hooks/useGame";
import { getGameWinner, compareChoices } from "@/lib/game-utils";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useSearchParams } from "next/navigation";
import TableBoard from "./TableBoard";
import GameEffects from "./GameEffects";
import GameResults from "./GameResults";
import CertificateModal from "./CertificateModal";
import { type CertificateData } from "@/lib/certificate";

const buildCertData = (
    me: { name: string; choices: number[] },
    opponent: { name: string; choices: number[] },
    lastWinner: string | undefined,
    playerId: string
): CertificateData => {
    const p1Wins = me.choices.filter((c, i) => compareChoices(c, opponent.choices[i]) === 1).length;
    const p2Wins = me.choices.filter((c, i) => compareChoices(c, opponent.choices[i]) === 2).length;
    return {
        mode: "multi",
        player1Name: me.name || "You",
        player2Name: opponent.name || "Opponent",
        player1Wins: p1Wins,
        player2Wins: p2Wins,
        player1Choices: me.choices,
        player2Choices: opponent.choices,
        winner: lastWinner === playerId ? "player1" : lastWinner === "draw" ? "draw" : "player2",
        generatedAt: Date.now(),
    };
};

const GameBoard = () => {
    const { gameData, updateGameChoices, resetGame, updateGameWinner } = useFirebaseContext();

    const { isGameFinished } = useGame();
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId") || "";
    const { playerId, isLoaded } = usePlayer();
    const [showCert, setShowCert] = useState(false);
    const [certData, setCertData] = useState<CertificateData | null>(null);

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

    const handleShare = () => {
        if (!gameData || !isGameFinished) return;
        const allPlayers = Object.entries(gameData.players || {});
        const meEntry = allPlayers.find(([uid]) => uid === playerId);
        const opponentEntry = allPlayers.find(([uid]) => uid !== playerId);
        if (!meEntry || !opponentEntry) return;
        const [, me] = meEntry;
        const [, opponent] = opponentEntry;
        if (me.choices.length < 3 || opponent.choices.length < 3) return;
        setCertData(buildCertData(me, opponent, gameData.lastWinner, playerId));
        setShowCert(true);
    };

    useEffect(() => {
        if (isGameFinished && gameData) {
            const winnerID = getGameWinner(gameData);
            updateGameWinner(gameData.$id, winnerID || "draw");
        }
    }, [isGameFinished, gameData, updateGameWinner]);

    if (!isLoaded) return null;

    const controlers: Record<string, string> = {
        "1": "🪨",
        "2": "📃",
        "3": "✂️",
    };

    const getButtonLabel = (key: string) => {
        if (key === "1") return "Rock";
        if (key === "2") return "Paper";
        return "Scissors";
    };

    const isPickingDone = yourChoices.length >= 3;
    const isDisabled = isPickingDone || !!isGameFinished;

    const getButtonStyle = (key: string) => {
        const base = "flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border-2 transition-all duration-200 select-none";
        if (isDisabled) return `${base} cursor-not-allowed opacity-40 bg-gray-50 border-gray-200`;
        if (key === "1")
            return `${base} cursor-pointer bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 hover:scale-105`;
        if (key === "2")
            return `${base} cursor-pointer bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-100 hover:scale-105`;
        return `${base} cursor-pointer bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-400 hover:shadow-lg hover:shadow-red-100 hover:scale-105`;
    };

    const select = async (choice: number) => {
        if (isDisabled) return;
        await updateGameChoices(gameId, playerId, choice);
    };

    return (
        <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200">
            {/* Score header */}
            <div className="bg-gray-700 px-5 py-3 flex items-center justify-between">
                <div className="text-center min-w-12">
                    <div className="text-blue-100 text-xs uppercase tracking-widest">You</div>
                    <div className="text-white font-bold text-2xl leading-none">{yourWins}</div>
                </div>
                <div className="text-center">
                    <p className="text-white font-semibold text-sm">Play vs Friend</p>
                    {gameData?.gameStake && <p className="text-blue-100 text-xs mt-0.5 max-w-32 truncate">{gameData.gameStake}</p>}
                </div>
                <div className="text-center min-w-12">
                    <div className="text-blue-100 text-xs uppercase tracking-widest">Friend</div>
                    <div className="text-white font-bold text-2xl leading-none">{secondPlayerWins}</div>
                </div>
            </div>

            {/* Game body */}
            <div className="bg-white p-4 md:p-6">
                <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Pick your move</p>
                <div className="relative">
                    <div className="grid grid-cols-3 gap-3 w-full">
                        {Object.entries(controlers).map(([key, item]) => (
                            <button onClick={() => select(+key)} className={getButtonStyle(key)} key={key} disabled={isDisabled}>
                                <span className="text-3xl">{item}</span>
                                <span className="text-xs text-gray-500 font-medium">{getButtonLabel(key)}</span>
                            </button>
                        ))}
                    </div>
                    {isGameFinished && gameData && (
                        <div className="absolute inset-0 bg-white flex justify-between gap-6 items-center p-4 md:p-6 rounded-xl">
                            <GameResults
                                playerId={playerId}
                                gameWinner={gameData.lastWinner || ""}
                                onShare={handleShare}
                            />
                            <div className="text-center">
                                <button onClick={() => resetGame(gameData?.$id)} className="btn btn-outline">
                                    Play again
                                </button>
                            </div>
                        </div>
                    )}
                    {showCert && certData && (
                        <CertificateModal data={certData} onClose={() => setShowCert(false)} />
                    )}
                </div>
                {gameData && (
                    <TableBoard
                        yourChoices={yourChoices}
                        secondPlayerChoices={secondPlayerChoices}
                        isGameFinished={isGameFinished || false}
                    />
                )}
            </div>

            {gameData && isGameFinished && playerId === gameData.lastWinner && <GameEffects />}
        </div>
    );
};

export default GameBoard;

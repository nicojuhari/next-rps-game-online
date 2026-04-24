"use client";
import { useState, useMemo, useEffect } from "react";
import TableBoard from "@/components/TableBoard";
import GameOverlay from "@/components/GameOverlay";
import CertificateModal from "@/components/CertificateModal";
import { getGameWinner } from "@/lib/game-utils";
import { type CertificateData, getRandomStake } from "@/lib/certificate";
import GameEffects from "@/components/GameEffects";
import { XIcon } from "@phosphor-icons/react";

const getButtonStyle = (key: string, finished: boolean) => {
    const base = "flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border-2 transition-all duration-200 select-none";
    const disabled = "cursor-not-allowed opacity-40";
    const active = "cursor-pointer hover:scale-105";

    if (finished) return `${base} ${disabled} bg-gray-50 border-gray-200`;
    if (key === "1")
        return `${base} ${active} bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100`;
    if (key === "2")
        return `${base} ${active} bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-100`;
    return `${base} ${active} bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-400 hover:shadow-lg hover:shadow-red-100`;
};

const getButtonLabel = (key: string) => {
    if (key === "1") return "Rock";
    if (key === "2") return "Paper";
    return "Scissors";
};

const OnePlayer = () => {
    const playerId = "player1";
    const controlers = { 1: "🪨", 2: "📃", 3: "✂️" };

    const [playerChoices, setPlayerChoices] = useState<number[]>([]);
    const [computerChoices, setComputerChoices] = useState<number[]>([]);
    const [gameWinner, setGameWinner] = useState<null | string>(null);
    const [userWins, setUserWins] = useState<number>(0);
    const [computerWins, setComputerWins] = useState<number>(0);
    const [showCert, setShowCert] = useState(false);
    const [certData, setCertData] = useState<CertificateData | null>(null);

    useEffect(() => {
        const storedUserWins = localStorage.getItem("rps_userWins");
        const storedComputerWins = localStorage.getItem("rps_computerWins");
        if (storedUserWins) queueMicrotask(() => setUserWins(Number(storedUserWins)));
        if (storedComputerWins) queueMicrotask(() => setComputerWins(Number(storedComputerWins)));
    }, []);

    const isGameFinished = useMemo(() => {
        return playerChoices.length === 3 && computerChoices.length === 3;
    }, [playerChoices, computerChoices]);

    const handleGetCertificate = (winnerName: string) => {
        const cert: CertificateData = {
            mode: "single",
            player1Name: "You",
            player2Name: "Computer",
            winnerName: winnerName || undefined,
            player1SessionWins: userWins,
            player2SessionWins: computerWins,
            player1Choices: playerChoices,
            player2Choices: computerChoices,
            winner: "player1",
            stake: getRandomStake(),
            generatedAt: Date.now(),
        };
        setCertData(cert);
        setShowCert(true);
    };

    const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

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
                if (winner === "player1") {
                    const n = userWins + 1;
                    setUserWins(n);
                    localStorage.setItem("rps_userWins", String(n));
                } else if (winner === "computer") {
                    const n = computerWins + 1;
                    setComputerWins(n);
                    localStorage.setItem("rps_computerWins", String(n));
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

    const resetScore = () => {
        setUserWins(0);
        setComputerWins(0);
        localStorage.removeItem("rps_userWins");
        localStorage.removeItem("rps_computerWins");
    };

    const outcome = gameWinner === playerId ? "win" : gameWinner === "draw" ? "draw" : gameWinner ? "lose" : null;

    return (
        <>
            {/* relative wrapper so the overlay can cover the full card including header */}
            <div className="max-w-sm mx-auto relative">
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                    {/* Score header */}
                    <div className="bg-gray-700 px-5 py-3 flex items-center justify-between">
                        <div className="text-center min-w-12">
                            <div className="text-blue-100 text-xs uppercase tracking-widest">You</div>
                            <div className="text-white font-bold text-2xl leading-none">{userWins}</div>
                        </div>
                        <p className="text-white font-semibold text-sm">Play vs Computer</p>
                        <div className="text-center min-w-12">
                            <div className="text-blue-100 text-xs uppercase tracking-widest">Bot</div>
                            <div className="text-white font-bold text-2xl leading-none">{computerWins}</div>
                        </div>
                    </div>

                    {/* Game body */}
                    <div className="bg-white p-4 md:p-6">
                        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Pick your move</p>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {Object.entries(controlers).map(([key, item]) => (
                                <button
                                    onClick={() => select(+key)}
                                    className={getButtonStyle(key, isGameFinished)}
                                    key={key}
                                    disabled={isGameFinished}
                                >
                                    <span className="text-3xl">{item}</span>
                                    <span className="text-xs text-gray-500 font-medium">{getButtonLabel(key)}</span>
                                </button>
                            ))}
                        </div>
                        <TableBoard
                            yourChoices={playerChoices}
                            secondPlayerChoices={computerChoices}
                            isGameFinished={isGameFinished}
                            isOnePlayer={true}
                        />
                    </div>
                </div>

                {/* Full-card overlay - only for winner/draw/loser */}
                {isGameFinished && outcome && (
                    <GameOverlay
                        outcome={outcome}
                        youScore={userWins}
                        opponentScore={computerWins}
                        opponentLabel="Bot"
                        onPlayAgain={resetGame}
                        onGetCertificate={outcome === "win" && userWins > computerWins ? handleGetCertificate : undefined}
                    />
                )}

                {isGameFinished && playerId === gameWinner && <GameEffects />}
            </div>

            {(userWins > 0 || computerWins > 0) && (
                <div className="text-center mt-2">
                    <button
                        onClick={resetScore}
                        className="text-xs inline-flex gap-1 items-center text-red-300 hover:text-red-500 underline cursor-pointer transition-colors"
                    >
                        Reset score <XIcon weight="bold" />
                    </button>
                </div>
            )}

            {showCert && certData && <CertificateModal data={certData} onClose={() => setShowCert(false)} />}
        </>
    );
};

export default OnePlayer;

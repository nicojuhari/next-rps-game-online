"use client";
import { useState, useMemo, useEffect } from "react";
import TableBoard from "@/components/TableBoard";
import GameOverlay from "@/components/GameOverlay";
import CertificateModal from "@/components/CertificateModal";
import { getGameWinner } from "@/lib/game-utils";
import { type CertificateData } from "@/lib/certificate";
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
    const [certHint, setCertHint] = useState(false);

    useEffect(() => {
        const storedUserWins = localStorage.getItem("rps_userWins");
        const storedComputerWins = localStorage.getItem("rps_computerWins");
        if (storedUserWins) queueMicrotask(() => setUserWins(Number(storedUserWins)));
        if (storedComputerWins) queueMicrotask(() => setComputerWins(Number(storedComputerWins)));
    }, []);

    const isGameFinished = useMemo(() => {
        return playerChoices.length === 3 && computerChoices.length === 3;
    }, [playerChoices, computerChoices]);

    const handleGetCertificate = () => {
        setCertData({
            mode: "single",
            player1Name: "You",
            player2Name: "Computer",
            player1SessionWins: userWins,
            player2SessionWins: computerWins,
            player1Choices: playerChoices,
            player2Choices: computerChoices,
            winner: "player1",
            generatedAt: Date.now(),
        });
        setShowCert(true);
    };

    const handleCertBadgeClick = () => {
        if (userWins > computerWins) {
            handleGetCertificate();
        } else {
            setCertHint(true);
            setTimeout(() => setCertHint(false), 2500);
        }
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
    const canGetCert = userWins > computerWins;

    return (
        <>
            {/* relative wrapper so the overlay can cover the full card including header */}
            <div className="max-w-sm mx-auto relative">
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                    {/* Score header */}
                    <div className="bg-gray-700 px-5 pt-3 pb-2">
                        <div className="flex items-center justify-between">
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
                    </div>

                    {/* Game body */}
                    <div className="bg-white p-4 md:p-6 relative">
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
                        <div className="text-center h-6 mt-1 -mb-4">
                            {(userWins > 0 || computerWins > 0) && (
                                <button
                                    onClick={resetScore}
                                    className="transition-all duration-700 text-xs inline-flex gap-1 items-center text-gray-500 hover:text-red-400 cursor-pointer"
                                >
                                    Reset the Score <XIcon size={10} weight="bold" />
                                </button>
                            )}
                        </div>
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
                        onGetCertificate={outcome === "win" && canGetCert ? handleGetCertificate : undefined}
                    />
                )}

                {isGameFinished && playerId === gameWinner && <GameEffects />}
            </div>

            {/* Certificate badge — always visible */}
            <div className="text-center mt-3">
                <button
                    onClick={handleCertBadgeClick}
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                        canGetCert
                            ? "border-amber-200 text-amber-600 bg-amber-50 hover:bg-amber-100 hover:border-amber-300"
                            : "border-gray-200 text-gray-400 bg-gray-50 hover:border-gray-300"
                    }`}
                >
                    🏆 Get your winner&apos;s certificate
                </button>
                {certHint && <p className="text-xs text-gray-500 mt-1.5">Win more games than the bot to unlock your certificate.</p>}
            </div>

            {showCert && certData && <CertificateModal data={certData} onClose={() => setShowCert(false)} />}
        </>
    );
};

export default OnePlayer;

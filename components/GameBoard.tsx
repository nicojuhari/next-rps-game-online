"use client";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import { useGame } from "@/lib/hooks/useGame";
import { getGameWinner } from "@/lib/game-utils";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useSearchParams } from "next/navigation";
import TableBoard from "./TableBoard";
import GameEffects from "./GameEffects";
import GameOverlay from "./GameOverlay";
import CertificateModal from "./CertificateModal";
import { type CertificateData } from "@/lib/certificate";

const GameBoard = () => {
    const t = useTranslations("gameBoard");
    const { gameData, updateGameChoices, resetGame, updateGameWinner } = useFirebaseContext();
    const { isGameFinished } = useGame();
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId") || "";
    const { playerId, isLoaded } = usePlayer();
    const [showCert, setShowCert] = useState(false);
    const [certData, setCertData] = useState<CertificateData | null>(null);
    const [certHint, setCertHint] = useState(false);

    const yourChoices = useMemo(() => {
        if (!gameData) return [];
        return Object.entries(gameData.players || {}).find(([uid]) => uid === playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    const yourWins = useMemo(() => {
        if (!gameData) return 0;
        return Object.entries(gameData.players || {}).find(([uid]) => uid === playerId)?.[1].wins || 0;
    }, [gameData, playerId]);

    const secondPlayerChoices = useMemo(() => {
        if (!gameData) return [];
        return Object.entries(gameData.players || {}).find(([uid]) => uid !== playerId)?.[1].choices || [];
    }, [gameData, playerId]);

    const secondPlayerWins = useMemo(() => {
        if (!gameData) return 0;
        return Object.entries(gameData.players || {}).find(([uid]) => uid !== playerId)?.[1].wins || 0;
    }, [gameData, playerId]);

    const handleCertBadgeClick = (canGetCert: boolean) => {
        if (canGetCert) {
            handleGetCertificate();
        } else {
            setCertHint(true);
            setTimeout(() => setCertHint(false), 2500);
        }
    };

    const handleGetCertificate = () => {
        const opponentName = Object.entries(gameData?.players || {}).find(([uid]) => uid !== playerId)?.[1].name || t("friend");
        setCertData({
            mode: "multi",
            player1Name: t("you"),
            player2Name: opponentName,
            player1SessionWins: yourWins,
            player2SessionWins: secondPlayerWins,
            player1Choices: yourChoices,
            player2Choices: secondPlayerChoices,
            winner: "player1",
            generatedAt: Date.now(),
        });
        setShowCert(true);
    };

    useEffect(() => {
        if (isGameFinished && gameData) {
            const winnerID = getGameWinner(gameData);
            updateGameWinner(gameData.$id, winnerID || "draw");
        }
    }, [isGameFinished, gameData, updateGameWinner]);

    if (!isLoaded) return null;

    const controlers: Record<string, string> = { "1": "🪨", "2": "📃", "3": "✂️" };

    const getButtonLabel = (key: string) => {
        if (key === "1") return t("rock");
        if (key === "2") return t("paper");
        return t("scissors");
    };

    const isPickingDone = yourChoices.length >= 3;
    const isDisabled = isPickingDone || !!isGameFinished;

    const getButtonStyle = (key: string) => {
        const base = "flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border-2 transition-all duration-200 select-none";
        if (isDisabled) return `${base} cursor-not-allowed opacity-40 bg-gray-50`;
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

    const lastWinner = gameData?.lastWinner;
    const outcome = lastWinner === playerId ? "win" : lastWinner === "draw" ? "draw" : lastWinner ? "lose" : null;
    const canGetCert = yourWins > secondPlayerWins;

    return (
        <>
            <div className="max-w-sm mx-auto relative">
                <div className="rounded-xl overflow-hidden border">
                    <div className="bg-gray-700 px-5 py-3 flex items-center justify-between">
                        <div className="text-center min-w-12">
                            <div className="text-blue-100 text-xs uppercase tracking-widest">{t("you")}</div>
                            <div className="text-white font-bold text-2xl leading-none">{yourWins}</div>
                        </div>
                        <div className="text-center">
                            <p className="text-white font-semibold text-sm">{t("vsFriend")}</p>
                            {gameData?.gameStake && <p className="text-blue-100 text-xs mt-0.5 max-w-32 truncate">{gameData.gameStake}</p>}
                        </div>
                        <div className="text-center min-w-12">
                            <div className="text-blue-100 text-xs uppercase tracking-widest">{t("friend")}</div>
                            <div className="text-white font-bold text-2xl leading-none">{secondPlayerWins}</div>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:p-6">
                        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">{t("pickMove")}</p>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {Object.entries(controlers).map(([key, item]) => (
                                <button onClick={() => select(+key)} className={getButtonStyle(key)} key={key} disabled={isDisabled}>
                                    <span className="text-3xl">{item}</span>
                                    <span className="text-xs text-gray-500 font-medium">{getButtonLabel(key)}</span>
                                </button>
                            ))}
                        </div>
                        {gameData && (
                            <TableBoard
                                yourChoices={yourChoices}
                                secondPlayerChoices={secondPlayerChoices}
                                isGameFinished={isGameFinished || false}
                            />
                        )}
                    </div>
                </div>

                {isGameFinished && gameData && outcome && (
                    <GameOverlay
                        outcome={outcome}
                        youScore={yourWins}
                        opponentScore={secondPlayerWins}
                        opponentLabel={t("friend")}
                        onPlayAgain={() => resetGame(gameData.$id)}
                        onGetCertificate={outcome === "win" && yourWins > secondPlayerWins ? handleGetCertificate : undefined}
                    />
                )}

                {gameData && isGameFinished && playerId === gameData.lastWinner && <GameEffects />}

                {showCert && certData && <CertificateModal data={certData} onClose={() => setShowCert(false)} />}
            </div>

            <div className="text-center mt-5 max-w-sm mx-auto">
                <button
                    onClick={() => handleCertBadgeClick(canGetCert)}
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                        canGetCert
                            ? "border-amber-200 text-amber-600 bg-amber-50 hover:bg-amber-100 hover:border-amber-300"
                            : "text-gray-400 bg-gray-50"
                    }`}
                >
                    {t("getCertificate")}
                </button>
                {certHint && <p className="text-xs text-gray-500 mt-1.5">{t("certUnlock")}</p>}
            </div>
        </>
    );
};

export default GameBoard;

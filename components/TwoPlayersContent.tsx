"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import GameBoard from "@/components/GameBoard";
import JoinGame from "@/components/JoinGame";
import { usePlayer } from "@/lib/hooks/usePlayer";
import WaitingPlayerTwo from "@/components/WaitingPlayerTwo";
import MainCTA from "@/components/MainCTA";
import AdSense from "./AdSense";
import type { Translations } from "@/lib/i18n";

const TwoPlayersContent = ({ t }: { t: Translations }) => {
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId");
    const router = useRouter();
    const [loading, setLoading] = useState(!!gameId);
    const { playerId } = usePlayer();
    const { subscribeToGame, getGame, gameData, deleteGame, unsubscribeFromGame } = useFirebaseContext();

    useEffect(() => {
        if (!gameId) return;
        setTimeout(() => {
            setLoading(true);
        });
        const fetchData = async () => {
            try {
                await getGame(gameId);
                subscribeToGame(gameId);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching game:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [gameId, getGame, subscribeToGame]);

    const handleCancelGame = async () => {
        if (!gameId) return;
        unsubscribeFromGame();
        await deleteGame(gameId);
        router.push("/two-players");
    };

    const renderGameSection = () => {
        if (!gameId) {
            return <MainCTA t={t} />;
        }
        if (loading) {
            return <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-24" />;
        }
        if (!gameData) {
            return <p className="text-center text-gray-500 my-12">{t.twoPlayers.gameNotFound}</p>;
        }

        const playerCount = Object.keys(gameData.players || {}).length;
        const hasJoined = !!gameData.players?.[playerId];
        const maxPlayers = gameData.maxPlayers || 2;

        if (!hasJoined && playerCount < maxPlayers) return <JoinGame t={t} />;
        if (hasJoined && playerCount < maxPlayers) {
            return (
                <div>
                    <WaitingPlayerTwo t={t} />
                    <div className="text-center mt-4">
                        <button onClick={handleCancelGame} className="text-sm text-gray-400 hover:text-red-500 underline cursor-pointer">
                            {t.twoPlayers.cancelGame}
                        </button>
                    </div>
                </div>
            );
        }
        if (hasJoined && playerCount === maxPlayers) {
            return (
                <>
                    <GameBoard t={t} />
                    <div className="max-w-sm mx-auto">
                        <p className="text-xs mt-4 md:mt-6 text-gray-600 text-center">{t.twoPlayers.pickMoveNote}</p>
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <div className="py-8">
            <h1 className="text-lg font-medium mb-6 text-center">{t.twoPlayers.h1}</h1>
            {renderGameSection()}
            <AdSense adSlot="6657389797" className="mt-6" />
            <div className="my-10 space-y-12 font-light">
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t.twoPlayers.howToPlay.title}</h2>
                    <div className="space-y-2">
                        <p>{t.twoPlayers.howToPlay.intro}</p>
                        <ol className="pl-4 space-y-2 list-decimal">
                            <li>
                                <span className="font-semibold">{t.twoPlayers.howToPlay.createRoomLabel}</span> -{" "}
                                {t.twoPlayers.howToPlay.createRoomText}
                            </li>
                            <li>
                                <span className="font-semibold">{t.twoPlayers.howToPlay.shareLinkLabel}</span> -{" "}
                                {t.twoPlayers.howToPlay.shareLinkText}
                            </li>
                            <li>
                                <span className="font-semibold">{t.twoPlayers.howToPlay.playLabel}</span> -{" "}
                                {t.twoPlayers.howToPlay.playText}
                            </li>
                            <li>
                                <span className="font-semibold">{t.twoPlayers.howToPlay.claimCertLabel}</span> -{" "}
                                {t.twoPlayers.howToPlay.claimCertText}
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t.twoPlayers.howItWorks.title}</h2>
                    <div className="space-y-2">
                        <p>{t.twoPlayers.howItWorks.p1}</p>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>{t.twoPlayers.howItWorks.firstTo2}</li>
                            <li>{t.twoPlayers.howItWorks.scores}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t.twoPlayers.whySettle.title}</h2>
                    <div className="space-y-2">
                        <p>{t.twoPlayers.whySettle.p1}</p>
                        <ul className="list-disc pl-4 space-y-1">
                            {t.twoPlayers.whySettle.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p>{t.twoPlayers.whySettle.p2}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t.twoPlayers.faq.title}</h2>
                    <div className="space-y-4">
                        {t.twoPlayers.faq.items.map((item, i) => (
                            <div key={i}>
                                <h3 className="font-semibold text-sm text-gray-800">{item.q}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoPlayersContent;

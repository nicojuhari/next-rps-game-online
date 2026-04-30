"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import GameBoard from "@/components/GameBoard";
import JoinGame from "@/components/JoinGame";
import { usePlayer } from "@/lib/hooks/usePlayer";
import WaitingPlayerTwo from "@/components/WaitingPlayerTwo";
import MainCTA from "@/components/MainCTA";
import AdSense from "./AdSense";

const TwoPlayersContent = () => {
    const t = useTranslations("twoPlayers");
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId");
    const router = useRouter();
    const [loading, setLoading] = useState(!!gameId);
    const { playerId } = usePlayer();
    const { subscribeToGame, getGame, gameData, deleteGame, unsubscribeFromGame } = useFirebaseContext();

    useEffect(() => {
        if (!gameId) return;
        setTimeout(() => setLoading(true));
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
        if (!gameId) return <MainCTA />;
        if (loading) return <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-24" />;
        if (!gameData) return <p className="text-center text-gray-500 my-12">{t("gameNotFound")}</p>;

        const playerCount = Object.keys(gameData.players || {}).length;
        const hasJoined = !!gameData.players?.[playerId];
        const maxPlayers = gameData.maxPlayers || 2;

        if (!hasJoined && playerCount < maxPlayers) return <JoinGame />;
        if (hasJoined && playerCount < maxPlayers) {
            return (
                <div>
                    <WaitingPlayerTwo />
                    <div className="text-center mt-4">
                        <button onClick={handleCancelGame} className="text-sm text-gray-400 hover:text-red-500 underline cursor-pointer">
                            {t("cancelGame")}
                        </button>
                    </div>
                </div>
            );
        }
        if (hasJoined && playerCount === maxPlayers) {
            return (
                <>
                    <GameBoard />
                    {/* <div className="max-w-sm mx-auto">
                        <p className="text-xs mt-4 md:mt-6 text-gray-600 text-center">{t("pickMoveNote")}</p>
                    </div> */}
                </>
            );
        }
        return null;
    };

    return (
        <div className="pb-8">
            {renderGameSection()}
            <AdSense adSlot="6657389797" className="mt-6" />
        </div>
    );
};

export default TwoPlayersContent;

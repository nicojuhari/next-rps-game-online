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
    const tHome = useTranslations("home");
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

    const whySettleItems = t.raw("whySettle.items") as string[];
    const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;

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
                    <div className="max-w-sm mx-auto">
                        <p className="text-xs mt-4 md:mt-6 text-gray-600 text-center">{t("pickMoveNote")}</p>
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <div className="pb-8">
            {renderGameSection()}
            <AdSense adSlot="6657389797" className="mt-6" />
            <div className="my-10 space-y-12 font-light">
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t("howToPlay.title")}</h2>
                    <div className="space-y-2">
                        <p>{t("howToPlay.intro")}</p>
                        <ol className="pl-4 space-y-2 list-decimal">
                            <li>
                                <span className="font-semibold">{t("howToPlay.createRoomLabel")}</span> - {t("howToPlay.createRoomText")}
                            </li>
                            <li>
                                <span className="font-semibold">{t("howToPlay.shareLinkLabel")}</span> - {t("howToPlay.shareLinkText")}
                            </li>
                            <li>
                                <span className="font-semibold">{t("howToPlay.playLabel")}</span> - {t("howToPlay.playText")}
                            </li>
                            <li>
                                <span className="font-semibold">{t("howToPlay.claimCertLabel")}</span> - {t("howToPlay.claimCertText")}
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t("howItWorks.title")}</h2>
                    <div className="space-y-2">
                        <p>{t("howItWorks.p1")}</p>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>{t("howItWorks.firstTo2")}</li>
                            <li>{t("howItWorks.scores")}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t("whySettle.title")}</h2>
                    <div className="space-y-2">
                        <p>{t("whySettle.p1")}</p>
                        <ul className="list-disc pl-4 space-y-1">
                            {whySettleItems.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p>{t("whySettle.p2")}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t("faq.title")}</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i}>
                                <h3 className="font-semibold text-sm text-gray-800">{item.q}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center py-8 mt-2 border-t">
                <p className="text-sm text-gray-400 font-light">
                    {tHome("footerPreamble")}{" "}
                    <span className="font-medium text-blue-400">{tHome("h1Rock")}</span>{" "}
                    <span className="font-medium text-yellow-400">{tHome("h1Paper")}</span>{" "}
                    <span className="font-medium text-red-400">{tHome("h1Scissors")}</span>{" "}
                    <span className="text-gray-400">{t("h1WithFriends")}</span>
                </p>
            </div>
        </div>
    );
};

export default TwoPlayersContent;

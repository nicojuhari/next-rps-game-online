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

const TwoPlayersContent = () => {
    const searchParams = useSearchParams();
    const gameId = searchParams.get("gameId");
    const router = useRouter();
    const [loading, setLoading] = useState(!!gameId);
    const { playerId } = usePlayer();
    const { subscribeToGame, getGame, gameData, deleteGame, unsubscribeFromGame } = useFirebaseContext();

    useEffect(() => {
        if (!gameId) return;
        setLoading(true);
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
            return <MainCTA />;
        }
        if (loading) {
            return <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-24" />;
        }
        if (!gameData) {
            return <p className="text-center text-gray-500 my-12">Game not found. Create a new one above.</p>;
        }

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
                            Cancel and create a new game
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
                        <p className="text-xs mt-4 md:mt-6 text-gray-600">
                            Pick your move 3 times - results show once both players are done.
                        </p>
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <div className="py-8">
            <h1 className="text-lg font-medium mb-10 text-center">Rock Paper Scissors - 2 Player Online</h1>
            {renderGameSection()}
            <div className="my-16 space-y-12 font-light">
                <div>
                    <h2 className="text-lg font-semibold mb-4">How to Play Rock Paper Scissors Online with Friends</h2>
                    <div className="space-y-2">
                        <p>Playing with a friend takes three steps - no account or app needed:</p>
                        <ol className="pl-4 space-y-2 list-decimal">
                            <li>
                                <span className="font-semibold">Create a private room</span> - click &quot;Create a Game&quot; above or on
                                the homepage. You get a private link right away.
                            </li>
                            <li>
                                <span className="font-semibold">Share the link</span> - send it to your friend via any messaging app. Works
                                on any device.
                            </li>
                            <li>
                                <span className="font-semibold">Play</span> - both players pick Rock, Paper, or Scissors. Best of 3 rounds
                                decides the winner.
                            </li>
                        </ol>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Rock Paper Scissors 1v1 - How It Works</h2>
                    <div className="space-y-2">
                        <p>
                            Both players pick at the same time and neither can see the other&apos;s choice before locking in. This makes
                            every match genuinely fair - no last-second reactions, no disputes.
                        </p>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>
                                The player who wins the most rounds wins the game. <span className="font-semibold">First to 2 wins</span>{" "}
                                takes it.
                            </li>
                            <li>Scores are tracked across multiple games in the same room - no need to create a new link each time.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Why Settle It with Rock Paper Scissors?</h2>
                    <div className="space-y-2">
                        <p>Rock Paper Scissors gives both players an equal shot and takes seconds to play. People use it to decide:</p>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Who pays for dinner</li>
                            <li>Who picks the movie or playlist</li>
                            <li>Who goes first in a board game</li>
                            <li>Any decision where you both want a fair shot</li>
                        </ul>
                        <p>
                            Playing online means no arguments over who threw what. Both choices are locked in and revealed at the same time,
                            every time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoPlayersContent;

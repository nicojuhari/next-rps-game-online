"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UsersIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useFirebase } from "@/lib/hooks/useFirebase";
import { usePlayer } from "@/lib/hooks/usePlayer";

const MainCTA = () => {
    const { playerId } = usePlayer();
    const { createGame } = useFirebase();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [gameStake, setGameStake] = useState("");

    const createGameLink = () => {
        setLoading(true);

        createGame(playerId, gameStake)
            .then((gameId: string) => {
                setLoading(false);
                //redirect
                router.push(`/two-players?gameId=${gameId}`);
            })
            .catch((err: Error) => {
                console.error("Error creating game:", err.message);
                setLoading(false);
            });
    };

    return (
        <div className="mt-16 text-center md:max-w-sm mx-auto w-full">
            <p className="font-medium text-xl text-center">2 Players Game</p>
            <p className="text-xs text-center text-gray-400">You vs Friend</p>
            <div className="bg-white p-6 rounded-lg border border-gray-100 mt-6">
                <div className="mt-2 text-left">
                    <label htmlFor="game-stakes" className="block text-sm mb-1">
                        What are you deciding?
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            id="game-stakes"
                            className="w-full mt-1 p-2 h-10 border border-gray-300 rounded-md"
                            placeholder="Who washes the dishes?, Loser buys dinner, ..."
                            maxLength={50}
                            onChange={(e) => setGameStake(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-xl">🤝</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={createGameLink}
                    disabled={loading}
                    title="Create a 2-player game"
                    className="justify-center mt-6 w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed h-10 text-white py-1 px-4 rounded-md inline-flex items-center gap-2.5 cursor-pointer"
                >
                    {loading ? (
                        <SpinnerGapIcon weight="light" size={24} color="white" className="animate-spin" />
                    ) : (
                        <UsersIcon weight="duotone" size={24} color="white" />
                    )}
                    Create Private Room
                </button>
                <div className="mt-2 text-xs text-gray-500">No signup required</div>
            </div>
        </div>
    );
};

export default MainCTA;

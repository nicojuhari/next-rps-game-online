"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DotIcon, LinkIcon, SpinnerGapIcon } from "@phosphor-icons/react";
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
                router.push(`/two-players?gameId=${gameId}`);
            })
            .catch((err: Error) => {
                console.error("Error creating game:", err.message);
                setLoading(false);
            });
    };

    return (
        <div className="text-center md:max-w-sm mx-auto w-full">
            <p className="font-medium text-lg text-center inline-flex items-center">
                Create <DotIcon size={32} />
                Share <DotIcon size={32} />
                Play
            </p>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-4">
                <div className="text-left">
                    <label htmlFor="game-stakes" className="block text-sm text-gray-700">
                        What&apos;s at stake? <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <input
                        type="text"
                        id="game-stakes"
                        className="w-full mt-1 p-2 h-10 border border-gray-300 rounded-md placeholder:text-xs focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="e.g., who goes first, who washes dishes, etc."
                        maxLength={50}
                        onChange={(e) => setGameStake(e.target.value)}
                    />
                </div>
                <button
                    onClick={createGameLink}
                    disabled={loading}
                    title="Create a 2-player game"
                    className={`justify-center mt-5 w-full h-10 text-white py-1 px-4 rounded-md inline-flex items-center gap-2.5 cursor-pointer font-medium text-sm ${loading ? "bg-gray-400 cursor-not-allowed" : "btn-cta-green"}`}
                >
                    {loading ? (
                        <SpinnerGapIcon weight="light" size={20} color="white" className="animate-spin" />
                    ) : (
                        <LinkIcon weight="bold" size={16} color="white" />
                    )}
                    Create a Game
                </button>
                <div className="mt-2 text-xs text-gray-400 tracking-wide">No account needed</div>
            </div>
        </div>
    );
};

export default MainCTA;

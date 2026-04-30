"use client";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LinkIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useFirebase } from "@/lib/hooks/useFirebase";
import { usePlayer } from "@/lib/hooks/usePlayer";

const MainCTA = () => {
    const t = useTranslations("mainCTA");
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

    const steps = [t("createLabel"), t("shareLabel"), t("playLabel")];

    return (
        <div className="md:max-w-sm mx-auto w-full">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                {/* Steps */}
                <div className="flex items-start justify-center mb-6">
                    {steps.map((label, i) => (
                        <div key={i} className="flex items-center">
                            <div className="flex flex-col items-center gap-1.5">
                                <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold inline-flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <span className="text-xs text-gray-500 font-medium">{label}</span>
                            </div>
                            {i < 2 && <div className="w-10 border-t border-dashed border-gray-200 mb-3.5 mx-2" />}
                        </div>
                    ))}
                </div>

                {/* Stake input */}
                <div className="text-left">
                    <label htmlFor="game-stakes" className="block text-sm text-gray-500 mb-1">
                        {t("stakeLabel")} <span className="text-gray-400 text-xs">{t("stakeOptional")}</span>
                    </label>
                    <input
                        type="text"
                        id="game-stakes"
                        className="w-full p-2 h-10 border border-gray-200 rounded-lg text-sm placeholder:text-xs focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50 transition-all"
                        placeholder={t("stakePlaceholder")}
                        maxLength={50}
                        onChange={(e) => setGameStake(e.target.value)}
                    />
                </div>

                <button
                    onClick={createGameLink}
                    disabled={loading}
                    title="Create a 2-player game"
                    className={`justify-center mt-4 w-full h-11 text-white px-4 rounded-lg inline-flex items-center gap-2 cursor-pointer font-medium text-sm ${loading ? "bg-gray-400 cursor-not-allowed" : "btn-cta-green"}`}
                >
                    {loading ? (
                        <SpinnerGapIcon weight="light" size={20} color="white" className="animate-spin" />
                    ) : (
                        <LinkIcon weight="bold" size={16} color="white" />
                    )}
                    {t("createButton")}
                </button>

                <div className="mt-3 text-center text-xs text-gray-400">{t("noAccount")}</div>
            </div>
        </div>
    );
};

export default MainCTA;

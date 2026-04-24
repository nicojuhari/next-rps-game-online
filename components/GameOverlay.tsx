"use client";

import { useState } from "react";

interface GameOverlayProps {
    outcome: "win" | "draw" | "lose";
    youScore: number;
    opponentScore: number;
    opponentLabel?: string;
    onPlayAgain: () => void;
    onGetCertificate?: (winnerName: string) => void;
}

const CONFIG = {
    win: {
        bg: "linear-gradient(160deg, #0f1e30 0%, #0d2818 100%)",
        trophy: "🏆",
        headline: "You Win!",
        headlineColor: "#34c069",
        sub: "Nicely done. Ready for another round?",
    },
    draw: {
        bg: "linear-gradient(160deg, #1a1f2e 0%, #1a1a2e 100%)",
        trophy: "🤝",
        headline: "It's a Draw!",
        headlineColor: "#efaf03",
        sub: "So close. Want to settle it?",
    },
    lose: {
        bg: "linear-gradient(160deg, #1e0f0f 0%, #2b1010 100%)",
        trophy: "😤",
        headline: "You Lost.",
        headlineColor: "#ed4c46",
        sub: "Don't give up - play again!",
    },
};

const GameOverlay = ({ outcome, youScore, opponentScore, opponentLabel = "Opponent", onPlayAgain, onGetCertificate }: GameOverlayProps) => {
    const cfg = CONFIG[outcome];
    const [winnerName, setWinnerName] = useState("");

    return (
        <div
            className="absolute inset-0 rounded-xl z-10 flex flex-col items-center justify-center gap-4 p-6"
            style={{ background: cfg.bg, animation: "overlay-in 0.25s ease-out forwards" }}
        >
            {/* Trophy */}
            <span
                className="text-6xl leading-none select-none"
                style={{ display: "inline-block", animation: "trophy-drop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.05s both" }}
            >
                {cfg.trophy}
            </span>

            {/* Headline */}
            <div className="text-center" style={{ animation: "fade-up 0.35s ease-out 0.25s both" }}>
                <p className="text-3xl font-bold tracking-tight" style={{ color: cfg.headlineColor }}>
                    {cfg.headline}
                </p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {cfg.sub}
                </p>
            </div>

            {/* Score */}
            <div
                className="flex items-center gap-4 px-6 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.06)", animation: "fade-up 0.35s ease-out 0.35s both" }}
            >
                <div className="text-center">
                    <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                        You
                    </div>
                    <div className="text-4xl font-black text-white leading-none">{youScore}</div>
                </div>
                <div className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
                    :
                </div>
                <div className="text-center">
                    <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {opponentLabel}
                    </div>
                    <div className="text-4xl font-black text-white leading-none">{opponentScore}</div>
                </div>
            </div>

            {/* Buttons + optional name input */}
            <div className="flex flex-col gap-2 w-full max-w-[220px]" style={{ animation: "fade-up 0.35s ease-out 0.45s both" }}>
                {onGetCertificate && (
                    <>
                        <input
                            type="text"
                            value={winnerName}
                            onChange={(e) => setWinnerName(e.target.value)}
                            placeholder="Your name for the cert (optional)"
                            maxLength={40}
                            className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none"
                            style={{ background: "rgba(255,255,255,0.92)", border: "none" }}
                        />
                        <button onClick={() => onGetCertificate(winnerName.trim())} className="btn btn-success w-full justify-center">
                            🏆 Get Certificate
                        </button>
                    </>
                )}
                <button
                    onClick={onPlayAgain}
                    className="btn btn-outline w-full justify-center"
                    style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default GameOverlay;

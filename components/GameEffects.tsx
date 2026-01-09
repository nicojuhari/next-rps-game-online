"use client";

import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

const GameEffects = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const setupAudio = async () => {
        try {
            audioRef.current = new Audio("/cheer.MP3"); // Fixed case sensitivity
            audioRef.current.preload = "auto";
            //volume can be adjusted here
            audioRef.current.volume = 0.2;

            // Handle loading errors
            audioRef.current.addEventListener("error", (e) => {
                console.error("Audio failed to load:", e);
            });

            // Optional: preload the audio
            audioRef.current.load();
        } catch (error) {
            console.error("Error setting up audio:", error);
        }
    };

    const playVictorySound = async () => {
        if (audioRef.current) {
            try {
                audioRef.current.currentTime = 0; // Reset the audio to the beginning

                // Many browsers require user interaction before playing audio
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    await playPromise;
                }
            } catch (error) {
                console.warn("Audio play failed:", error);
                // This is common in browsers with autoplay restrictions
            }
        }
    };
    const triggerConfetti = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    useEffect(() => {
        console.log("GameEffects mounted - triggering confetti");
        setupAudio()
            .then(() => {
                playVictorySound();
            })
            .catch((error) => {
                console.error("Error with audio setup:", error);
            });
        triggerConfetti();
    }, []); // Added dependency array to prevent infinite re-renders

    return null; // No DOM element needed for canvas-confetti
};

export default GameEffects;

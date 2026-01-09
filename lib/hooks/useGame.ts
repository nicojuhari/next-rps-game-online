"use client";

import { useMemo } from "react";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import { getGameWinner } from "@/lib/game-utils";

export const useGame = () => {
    const { gameData } = useFirebaseContext();

    // Calculate derived state using useMemo (equivalent to Nuxt's computed/watch)
    const isGameFinished = useMemo(() => {
        if (!gameData) return false;
        const playerIds = Object.keys(gameData.players);
        if (playerIds.length < 2) return null;
        // Check all players have finished all rounds (3 moves)
        const allHaveThree = playerIds.every((uid) => gameData.players[uid].choices.length === 3);
        if (!allHaveThree) return false;
        return true;
    }, [gameData]);

    const gameWinner = useMemo(() => {
        if (isGameFinished && gameData) {
            return getGameWinner(gameData);
        }
        return null;
    }, [isGameFinished, gameData]);

    return {
        isGameFinished,
        gameWinner,
    };
};

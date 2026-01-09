"use client";

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { doc, getDoc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, Unsubscribe } from "firebase/firestore";
import { useRouter } from "next/navigation";
import db from "@/lib/firebase";
import type { Game } from "@/types";

const COLLECTION_NAME = "games";

interface FirebaseContextType {
    gameData: Game | null;
    joinGame: (gameId: string, playerId: string, playerName: string) => Promise<Game>;
    getGame: (gameId: string) => Promise<Game | null>;
    subscribeToGame: (gameId: string) => void;
    unsubscribeFromGame: () => void;
    updateGameChoices: (gameId: string, playerId: string, choice: number) => Promise<void>;
    updateGameWinner: (gameId: string, winnerId: string) => Promise<void>;
    resetGame: (gameId: string) => Promise<void>;
    deleteGame: (gameId: string) => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
    const [gameData, setGameData] = useState<Game | null>(null);
    const unsubscribeRef = useRef<Unsubscribe | null>(null);
    const router = useRouter();

    // Join a game by adding a player to the players object
    const joinGame = async (gameId: string, playerId: string, playerName: string): Promise<Game> => {
        try {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            const gameSnap = await getDoc(gameRef);
            if (!gameSnap.exists()) {
                throw new Error("Game not found");
            }
            const gameData = gameSnap.data() as Game;
            // Add player if not already present
            if (!gameData.players[playerId]) {
                const updatedPlayers = { ...gameData.players, [playerId]: { name: playerName, choices: [], wins: 0 } };
                await updateDoc(gameRef, {
                    players: updatedPlayers,
                    updatedAt: serverTimestamp(),
                });
            }
            // Get the updated document
            const updatedGameSnap = await getDoc(gameRef);
            if (updatedGameSnap.exists()) {
                const gameDataWithId = {
                    ...updatedGameSnap.data(),
                    $id: updatedGameSnap.id,
                } as Game;
                return gameDataWithId;
            } else {
                throw new Error("Game not found after update");
            }
        } catch (error) {
            console.error("Error joining game:", error);
            throw error;
        }
    };

    const getGame = async (gameId: string): Promise<Game | null> => {
        try {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            const gameSnap = await getDoc(gameRef);

            if (gameSnap.exists()) {
                return {
                    ...gameSnap.data(),
                    $id: gameSnap.id,
                } as Game;
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching game:", error);
            return null;
        }
    };

    const updateGameWinner = async (gameId: string, winnerId: string): Promise<void> => {
        try {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            const gameSnap = await getDoc(gameRef);
            if (!gameSnap.exists()) return;
            const gameData = gameSnap.data() as Game;

            const player = gameData.players[winnerId];
            if (!player) return;
            const currentWins = player.wins || 0;
            await updateDoc(gameRef, {
                [`players.${winnerId}.wins`]: currentWins + 1,
                updatedAt: serverTimestamp(),
            });
        } catch (error) {
            console.error("Error updating game winner:", error);
        }
    };

    // Reset all player choices
    const resetGame = async (gameId: string): Promise<void> => {
        try {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            const gameSnap = await getDoc(gameRef);
            if (!gameSnap.exists()) return;
            const gameData = gameSnap.data() as Game;
            const resetPlayers = Object.fromEntries(
                Object.entries(gameData.players).map(([uid, player]) => [uid, { ...player, choices: [] }])
            );
            await updateDoc(gameRef, {
                players: resetPlayers,
                updatedAt: serverTimestamp(),
            });
        } catch (error) {
            console.error("Error resetting game choices:", error);
        }
    };

    const subscribeToGame = (gameId: string): void => {
        if (!unsubscribeRef.current) {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            unsubscribeRef.current = onSnapshot(
                gameRef,
                (docSnap) => {
                    if (docSnap.exists()) {
                        setGameData({
                            ...docSnap.data(),
                            $id: docSnap.id,
                        } as Game);
                    } else {
                        // Document was deleted
                        unsubscribeFromGame();
                        router.push("/");
                    }
                },
                (error) => {
                    console.error("Error in game subscription:", error);
                }
            );
        }
    };

    const unsubscribeFromGame = () => {
        if (unsubscribeRef.current) {
            unsubscribeRef.current();
            unsubscribeRef.current = null;
        }
    };

    // Update a player's choices in the players object
    const updateGameChoices = async (gameId: string, playerId: string, choice: number): Promise<void> => {
        try {
            const game = await getGame(gameId);
            if (!game) return;
            const player = game.players[playerId];
            if (!player) return;
            const choices = [...player.choices, choice];
            if (choices.length <= 3) {
                const gameRef = doc(db, COLLECTION_NAME, gameId);
                await updateDoc(gameRef, {
                    [`players.${playerId}.choices`]: choices,
                    updatedAt: serverTimestamp(),
                });
            }
        } catch (error) {
            console.error("Error updating game choices:", error);
        }
    };

    const deleteGame = async (gameId: string): Promise<void> => {
        try {
            const gameRef = doc(db, COLLECTION_NAME, gameId);
            await deleteDoc(gameRef);
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            unsubscribeFromGame();
        };
    }, []);

    return (
        <FirebaseContext.Provider
            value={{
                gameData,
                joinGame,
                getGame,
                subscribeToGame,
                unsubscribeFromGame,
                updateGameChoices,
                updateGameWinner,
                resetGame,
                deleteGame,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebaseContext = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebaseContext must be used within a FirebaseProvider");
    }
    return context;
};

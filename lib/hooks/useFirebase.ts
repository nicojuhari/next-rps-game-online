import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "@/lib/firebase";
import { stat } from "fs";

const COLLECTION_NAME = "games";

export const useFirebase = () => {
    const createGame = async (player1: string): Promise<string> => {
        try {
            const docRef = await addDoc(collection(db, COLLECTION_NAME), {
                players: {
                    [player1]: {
                        name: "player1",
                        choices: [],
                        wins: 0,
                    },
                },
                maxPlayers: 2,
                status: "waiting",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            return docRef.id;
        } catch (error) {
            console.error("Error creating game:", error);
            throw error;
        }
    };

    return {
        createGame,
    };
};

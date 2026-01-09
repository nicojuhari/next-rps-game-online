// Firebase-compatible types (no Appwrite dependencies)

export type Game = {
    $id: string;
    players: {
        [uid: string]: {
            name: string;
            choices: number[];
            wins?: number; // Optional: number of games won
        };
    };
    objective?: string;
    maxPlayers: number;
    status?: "waiting" | "ready" | "finished";
    createdAt?: Date | { seconds: number; nanoseconds: number }; // Firebase Timestamp
    updatedAt?: Date | { seconds: number; nanoseconds: number }; // Firebase Timestamp
};

// Old SingleGame type removed; use Game type for all cases.

export type GameHistoryEntry = {
    yourChoices: number[];
    opponentChoices: number[];
    result: "win" | "lose" | "draw";
    savedAt: number;
    gameId?: string;
};

const EXPIRY_MS = 3 * 24 * 60 * 60 * 1000;

export function loadHistory(key: string): GameHistoryEntry[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return [];
        const all: GameHistoryEntry[] = JSON.parse(raw);
        const fresh = all.filter((e) => Date.now() - e.savedAt < EXPIRY_MS);
        if (fresh.length !== all.length) localStorage.setItem(key, JSON.stringify(fresh));
        return fresh;
    } catch {
        return [];
    }
}

export function pushEntry(key: string, entry: GameHistoryEntry): GameHistoryEntry[] {
    const current = loadHistory(key);
    const updated = [entry, ...current];
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
}

export function deleteEntry(key: string, index: number): GameHistoryEntry[] {
    const current = loadHistory(key);
    const updated = current.filter((_, i) => i !== index);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
}

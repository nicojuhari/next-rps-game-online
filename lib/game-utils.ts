import type { Game } from "../types";

export const compareChoices = (p1: number, p2: number): number => {
    if (p1 === p2) return 0; // Draw
    if (
        (p1 === 1 && p2 === 3) || // Rock beats Scissors
        (p1 === 2 && p2 === 1) || // Paper beats Rock
        (p1 === 3 && p2 === 2) // Scissors beats Paper
    ) {
        return 1; // Player 1 wins
    }
    return 2; // Player 2 wins
};
// Returns the winner's UID, 'draw', or null if not finished
export const getGameWinner = (gameData: Game): string | null => {
    console.log("Calculating game winner for gameData:", gameData);
    if (!gameData || !gameData.players) return null;
    const playerIds = Object.keys(gameData.players);
    if (playerIds.length < 2) return null;
    // Check all players have finished all rounds (3 moves)
    const allHaveThree = playerIds.every((uid) => gameData.players[uid].choices.length === 3);
    if (!allHaveThree) return null;

    // For each round, determine the winner(s)
    const roundWinners: (string[] | "draw")[] = [0, 1, 2].map((roundIdx) => {
        const moves = playerIds.map((uid) => ({ uid, move: gameData.players[uid].choices[roundIdx] }));
        const uniqueMoves = [...new Set(moves.map((m) => m.move))];
        console.log(`Round ${roundIdx + 1} moves:`, moves, "Unique:", uniqueMoves);
        if (uniqueMoves.length === 1) return "draw"; // All same
        // For 3+ players: if all three moves (1,2,3) are present, it's a draw
        if (uniqueMoves.length === 3 && uniqueMoves.includes(1) && uniqueMoves.includes(2) && uniqueMoves.includes(3)) return "draw";
        // If only two moves are present, determine the winner(s)
        if (uniqueMoves.length === 2) {
            const [a, b] = uniqueMoves;
            if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2)) {
                // a beats b
                return moves.filter((m) => m.move === a).map((m) => m.uid);
            } else {
                // b beats a
                return moves.filter((m) => m.move === b).map((m) => m.uid);
            }
        }
        // If all moves are different but not 1,2,3 (shouldn't happen), treat as draw
        return "draw";
    });

    // Tally wins per player
    const winCounts: { [uid: string]: number } = {};
    playerIds.forEach((uid) => (winCounts[uid] = 0));
    roundWinners.forEach((winner) => {
        if (winner === "draw") return;
        (winner as string[]).forEach((uid) => {
            winCounts[uid] += 1;
        });
    });
    // Find max wins
    const maxWins = Math.max(...Object.values(winCounts));
    const winners = playerIds.filter((uid) => winCounts[uid] === maxWins);
    if (winners.length === 1) return winners[0];
    if (winners.length > 1) return "draw";
    return null;
};

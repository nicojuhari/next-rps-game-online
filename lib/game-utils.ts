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
    // Defensive checks
    if (!gameData || !gameData.players) return null;
    const playerIds = Object.keys(gameData.players);
    if (playerIds.length < 2) return null;
    const allHaveThree = playerIds.every((uid) => gameData.players[uid].choices.length === 3);
    if (!allHaveThree) return null;

    // For each round, determine the winner(s)
    const roundWinners: (string[] | "draw")[] = [0, 1, 2].map((roundIdx) => {
        const moves = playerIds.map((uid) => ({ uid, move: gameData.players[uid].choices[roundIdx] }));
        const uniqueMoves = [...new Set(moves.map((m) => m.move))];
        if (uniqueMoves.length === 1) return "draw"; // All same
        if (uniqueMoves.length === 3 && uniqueMoves.includes(1) && uniqueMoves.includes(2) && uniqueMoves.includes(3)) return "draw";
        if (uniqueMoves.length === 2) {
            const [a, b] = uniqueMoves;
            if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2)) {
                return moves.filter((m) => m.move === a).map((m) => m.uid);
            } else {
                return moves.filter((m) => m.move === b).map((m) => m.uid);
            }
        }
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

    // If all players have the same number of wins, it's a draw
    const winValues = Object.values(winCounts);
    const allEqual = winValues.every((v) => v === winValues[0]);
    if (allEqual) return "draw";

    // Otherwise, find the player(s) with the most wins
    const maxWins = Math.max(...winValues);
    const winners = playerIds.filter((uid) => winCounts[uid] === maxWins);
    if (winners.length === 1) return winners[0];
    if (winners.length > 1) return "draw";
    return null;
};

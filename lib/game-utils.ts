import type { Game, SingleGame } from '../types'

export const compareChoices = (p1: number, p2: number): number => {
    if (p1 === p2) return 0; // Draw
    if (
        (p1 === 1 && p2 === 3) || // Rock beats Scissors
        (p1 === 2 && p2 === 1) || // Paper beats Rock
        (p1 === 3 && p2 === 2)    // Scissors beats Paper
    ) {
        return 1; // Player 1 wins
    }
    return 2 // Player 2 wins
}

export const getGameWinner = (gameData: Game | SingleGame) => {

    const p1 = gameData?.player1Choices;
    const p2 = gameData?.player2Choices;

    if (!p1 || !p2 || p1.length !== 3 || p2.length !== 3) return null;

    const winners = p1.map((choice, index) => {
        if (choice === p2[index]) return 'draw';
        if ((choice % 3) + 1 === p2[index]) return gameData?.player2;
        else return gameData?.player1;
    });

    const player1Wins = winners.filter(w => w === gameData?.player1).length;
    const player2Wins = winners.filter(w => w === gameData?.player2).length;

    if (player1Wins === player2Wins) return 'draw';
    return player1Wins > player2Wins ? gameData.player1 : gameData.player2;
}
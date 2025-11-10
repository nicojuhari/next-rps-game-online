'use client';

import { useMemo } from 'react';
import { useFirebase } from '@/contexts/FirebaseContext';
import { getGameWinner } from '@/lib/game-utils';

export const useGame = () => {
  const { gameData } = useFirebase();

  // Calculate derived state using useMemo (equivalent to Nuxt's computed/watch)
  const isGameFinished = useMemo(() => {
    return gameData?.player1Choices.length === 3 && gameData?.player2Choices.length === 3;
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
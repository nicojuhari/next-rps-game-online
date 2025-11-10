'use client';

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  serverTimestamp,
  Unsubscribe
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import db from '@/lib/firebase';
import type { Game } from '@/types';

const COLLECTION_NAME = 'games';

interface FirebaseContextType {
  gameData: Game | null;
  createGame: (player1: string) => Promise<string>;
  joinGame: (gameId: string, player2: string) => Promise<Game>;
  getGame: (gameId: string) => Promise<Game | null>;
  subscribeToGame: (gameId: string) => void;
  unsubscribeFromGame: () => void;
  updateGameChoices: (gameId: string, player: 'player1' | 'player2', choice: number) => Promise<void>;
  resetGame: (gameId: string) => Promise<void>;
  deleteGame: (gameId: string) => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [gameData, setGameData] = useState<Game | null>(null);
  const unsubscribeRef = useRef<Unsubscribe | null>(null);
  const router = useRouter();

  const createGame = async (player1: string): Promise<string> => {
    try {
      console.log('Creating game for player:', player1);
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        player1,
        player2: null,
        player1Choices: [],
        player2Choices: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      console.log('Game created with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error creating game:', error);
      throw error;
    }
  };

  const joinGame = async (gameId: string, player2: string): Promise<Game> => {
    try {
      console.log('Joining game:', gameId, 'as player:', player2);
      const gameRef = doc(db, COLLECTION_NAME, gameId);
      
      // First check if the game exists
      const gameSnap = await getDoc(gameRef);
      if (!gameSnap.exists()) {
        throw new Error('Game not found');
      }

      await updateDoc(gameRef, {
        player2,
        updatedAt: serverTimestamp()
      });

      // Get the updated document
      const updatedGameSnap = await getDoc(gameRef);
      if (updatedGameSnap.exists()) {
        const gameDataWithId = {
          ...updatedGameSnap.data(),
          $id: updatedGameSnap.id
        } as Game;
        console.log('Successfully joined game:', gameDataWithId);
        return gameDataWithId;
      } else {
        throw new Error('Game not found after update');
      }
    } catch (error) {
      console.error('Error joining game:', error);
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
          $id: gameSnap.id
        } as Game;
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching game:', error);
      return null;
    }
  };

  const resetGame = async (gameId: string): Promise<void> => {
    try {
      const gameRef = doc(db, COLLECTION_NAME, gameId);
      await updateDoc(gameRef, {
        player1Choices: [],
        player2Choices: [],
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating game choices:', error);
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
              $id: docSnap.id
            } as Game);
          } else {
            // Document was deleted
            unsubscribeFromGame();
            router.push('/');
          }
        }, 
        (error) => {
          console.error('Error in game subscription:', error);
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

  const updateGameChoices = async (gameId: string, player: 'player1' | 'player2', choice: number): Promise<void> => {
    try {
      const game = await getGame(gameId);
      if (!game) return;

      const choices = game[`${player}Choices`] || [];
      choices.push(choice);
      
      if (choices?.length <= 3) {
        const gameRef = doc(db, COLLECTION_NAME, gameId);
        await updateDoc(gameRef, {
          [`${player}Choices`]: choices,
          updatedAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.error('Error updating game choices:', error);
    }
  };

  const deleteGame = async (gameId: string): Promise<void> => {
    try {
      const gameRef = doc(db, COLLECTION_NAME, gameId);
      await deleteDoc(gameRef);
    } catch (error) {
      console.error('Error deleting game:', error);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      unsubscribeFromGame();
    };
  }, []);

  return (
    <FirebaseContext.Provider value={{
      gameData,
      createGame,
      joinGame,
      getGame,
      subscribeToGame,
      unsubscribeFromGame,
      updateGameChoices,
      resetGame,
      deleteGame,
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
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
import db from '@/lib/firebase';


const COLLECTION_NAME = 'games';

export const useFirebase = () => {
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

  return {
    createGame,
  }
}
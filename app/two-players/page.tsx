'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useFirebase } from '@/contexts/FirebaseContext';
import type { Game } from '@/types';
import GameBoard from '@/components/GameBoard';
import JoinGame from '@/components/JoinGame';
import { usePlayer } from '@/lib/hooks/usePlayer';
import TableBoard from '@/components/TableBoard';
import WaitingPlayerTwo from '@/components/WaitingPlayerTwo';

const TwoPlayers = () => {

    
    const [loading, setLoading] = useState(true);
    
    const searchParams = useSearchParams();
    const gameId = searchParams.get('gameId');
    const { playerId } = usePlayer();
    const { subscribeToGame, getGame, gameData } = useFirebase();

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!gameId) return;
                await getGame(gameId);
                subscribeToGame(gameId);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching game:', error);
            }
        };
        fetchData();
    }, [gameId]);


    

    

    if (loading) {
        return <Image src="/loading.svg" loading='eager' alt="Loading" width={40} height={40} className="mx-auto my-24" />;
    }

    if (!gameData) {
        return <div>No game data available</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
              <h1 className="text-2xl font-bold mb-4 text-center">Rock Paper Scissors - 2 Players Game</h1>
            { gameData.player2 === null && playerId !== gameData.player1 && (<JoinGame />) }
            { gameData.player2 === null && playerId === gameData.player1 && ( <WaitingPlayerTwo /> ) }
            {
                gameData.player2 !== null && gameData.player2 !== null && ( <GameBoard /> )
            }
        </div>
    );
}
 
export default TwoPlayers;

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useFirebaseContext } from '@/contexts/FirebaseContext';
import GameBoard from '@/components/GameBoard';
import JoinGame from '@/components/JoinGame';
import { usePlayer } from '@/lib/hooks/usePlayer';
import WaitingPlayerTwo from '@/components/WaitingPlayerTwo';

const TwoPlayersContent = () => {
    const [loading, setLoading] = useState(true);
    
    const searchParams = useSearchParams();
    const gameId = searchParams.get('gameId');
    const { playerId } = usePlayer();
    const { subscribeToGame, getGame, gameData } = useFirebaseContext();

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
    }, [gameId, getGame, subscribeToGame]);

    if(loading) {
        return <Image src="/loading.svg" loading='eager' alt="Loading" width={40} height={40} className="mx-auto my-24" />
    }

    else if (!gameData) {
        return <div>No game data available</div>;
    }

    return (
        <div className="container py-8">
            <h1 className="text-xl font-bold mb-4 text-center">Rock Paper Scissors - 2 Players Game</h1>
            { gameData.player2 === null && playerId !== gameData.player1 && (<JoinGame />) }
            { gameData.player2 === null && playerId === gameData.player1 && ( <WaitingPlayerTwo /> ) }
            {
              gameData.player2 !== null && gameData.player2 !== null && ( <GameBoard /> )
            }
        </div>
    );
};

export default TwoPlayersContent;
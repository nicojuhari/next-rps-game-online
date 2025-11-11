'use client';
import { useMemo } from 'react';
import { useFirebase } from '@/contexts/FirebaseContext';
import { useGame } from '@/lib/hooks/useGame';
import { usePlayer } from '@/lib/hooks/usePlayer';
import { useSearchParams } from 'next/navigation';
import TableBoard from './TableBoard';
import GameEffects from './GameEffects';
import GameResults from './GameResults';

const GameBoard = () => {
    const {
        gameData,
        updateGameChoices,
        resetGame
    } = useFirebase();

    const { isGameFinished, gameWinner } = useGame();
    const searchParams = useSearchParams();
    const gameId = searchParams.get('gameId') || '';
    const { playerId, isLoaded } = usePlayer();
    const playerNumber = gameData?.player1 === playerId ? 1 : 2;

    const yourChoices = useMemo(() => {
        if (playerNumber == 1) return gameData?.player1Choices || []
        else return gameData?.player2Choices || []
    }, [gameData, playerNumber])

    const secondPlayerChoices = useMemo(() => {
        if (playerNumber == 1) return gameData?.player2Choices || []
        else return gameData?.player1Choices || []
    }, [gameData, playerNumber])

    // Show loading state while player ID is being initialized
    if (!isLoaded) {
        return (
            <div className="max-w-sm mx-auto">
                <div className="text-center mt-8">
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    const controlers = {
        1: '🪨',
        2: '📃',
        3: '✂️',
    }

    const select = async (choice: number) => {
        await updateGameChoices(gameId, playerNumber === 1 ? 'player1' : 'player2', choice)
    }
    return (
        <div className="max-w-sm mx-auto">
            <div className="mt-10 text-center">
                {!isGameFinished ? ( <h2 className="font-medium text-green-600">Select your Move</h2> ) : (
                    <h2 className="font-medium">Game Finished!</h2>
                )}
                <div className="text-sm text-center text-gray-500 space-y-2 mt-2">
                    <div>After both players select their move <strong>3 times,</strong><br/>the game ends and results will be displayed.</div>
                </div>
            </div>
            <div className={`grid grid-cols-3 items-center gap-6 w-full mt-10 ${isGameFinished ? 'opacity-50' : ''}`}>
                {Object.entries(controlers).map(([key, item]) => (
                    <div onClick={() => select(+key)} className={`aspect-square text-5xl inline-flex items-center select-none justify-center cursor-pointer p-2 bg-white shadow-lg rounded-md transition-all duration-300 ${!isGameFinished ? 'hover:shadow-md hover:translate-y-1' : ''}`}
                        key={key}> { item }
                    </div>
                ))}
            </div>

            { gameData && (
                <>
                <TableBoard yourChoices={yourChoices} secondPlayerChoices={secondPlayerChoices} isGameFinished={isGameFinished} />
                { isGameFinished && (
                    <>
                        <GameResults playerId={playerId} gameWinner={gameWinner} />
                        <div className="my-6 text-center">
                            <button onClick={() => resetGame(gameData?.$id)} className="btn btn-outline">Play again</button>
                        </div>
                    </>
                ) }
                { isGameFinished && playerId === gameWinner && <GameEffects /> }
                </>
            )}
        </div>

    );
}
 
export default GameBoard;
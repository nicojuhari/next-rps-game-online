"use client"
import { useState, useMemo } from "react"
import TableBoard from "@/components/TableBoard"
import GameResults from "@/components/GameResults"
import { getGameWinner } from "@/lib/game-utils"
import GameEffects from "@/components/GameEffects"

const OnePlayer = () => {
    const playerId = 'You'
    const controlers = {
        1: '🪨',
        2: '📃',
        3: '✂️',
    }

    const [playerChoices, setPlayerChoices] = useState<number[]>([])
    const [computerChoices, setComputerChoices] = useState<number[]>([])
    const [gameWinner, setGameWinner] = useState<null | string>(null)

    const isGameFinished = useMemo(() => {
        return playerChoices.length === 3 && computerChoices.length === 3
    }, [playerChoices, computerChoices]);

    const getComputerChoice = () => {
        return Math.floor(Math.random() * 3) + 1
    }

    const select = (choice: number) => {
        if (playerChoices.length === 3) return

        setPlayerChoices([...playerChoices, choice])
        
        if (playerChoices.length == 2) {

            const compChoices = [
                getComputerChoice(),
                getComputerChoice(),
                getComputerChoice()
            ]
            setComputerChoices(compChoices)
            const winner = getGameWinner({
                player1: 'You',
                player2: 'Computer',
                player1Choices: [...playerChoices, choice],
                player2Choices: compChoices
            })

            console.log('Winner is:', winner)

            setGameWinner(winner)
        }        
    }

    const resetGame = () => {
        setPlayerChoices([])
        setComputerChoices([])      
        setGameWinner(null)
    }

   


    return (
    <div className="w-full max-w-sm mx-auto">
        <div className="mt-8">
            {!isGameFinished ? ( <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Select your Move</h1> ) : (
                <h1 className="text-2xl font-bold text-center mb-4">Game Finished!</h1>
            )}
            <div className="text-sm text-center text-gray-800 space-y-2">
                <div>After both players select their move <strong>3 times,</strong><br/>the game ends and results will be displayed.</div>
            </div>
        </div>
        <div className={`grid grid-cols-3 items-center gap-6 w-full mt-10 ${isGameFinished ? 'opacity-50' : ''}`}>
            {Object.entries(controlers).map(([key, item]) => (
                <div onClick={() => select(+key)} className={`aspect-square text-5xl inline-flex items-center select-none justify-center cursor-pointer p-2 bg-white shadow-lg rounded-md transition-all duration-300 ${!isGameFinished ? 'hover:shadow hover:translate-y-1' : ''}`}
                    key={key}> { item }
                </div> 
            ))}
        </div>
        <TableBoard yourChoices={playerChoices} secondPlayerChoices={computerChoices} isGameFinished={isGameFinished} isOnePlayer={true} />
        { isGameFinished && (
            <>
                <GameResults playerId={playerId} gameWinner={gameWinner} />
                <div className="my-8 text-center">
                    <button onClick={() => resetGame()} className="btn btn-outline">Play again</button>
                </div>
            </>
        ) }
        { isGameFinished && playerId === gameWinner && <GameEffects /> }
    </div>
    );
}
 
export default OnePlayer;
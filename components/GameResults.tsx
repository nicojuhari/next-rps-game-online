const GameResults = ({ playerId, gameWinner }: { playerId: string, gameWinner: null | number | string   }) => {
    return ( 
        <div className="text-center text-xl font-medium mt-8">
            {gameWinner === playerId ? (
            <div className="text-green-600">You Win!</div>
            ) : gameWinner === 'draw' ? (
            <div>It&apos;s a Tie!</div>
            ) : (
            <div className="text-red-600">You Lost.</div>
            )}
        </div>
     );
}
 
export default GameResults;
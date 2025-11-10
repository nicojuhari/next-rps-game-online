const GameResults = ({ playerId, gameWinner }: { playerId: string, gameWinner: null | number | string   }) => {
    return ( 
        <div className="text-center text-xl font-medium mt-8">
            {gameWinner === playerId ? (
            <div className="text-green-600">Congratulations!<br />You have won!</div>
            ) : gameWinner === 'draw' ? (
            <div>It is a Tie</div>
            ) : (
            <div className="text-red-600">Better luck next time!</div>
            )}
        </div>
     );
}
 
export default GameResults;
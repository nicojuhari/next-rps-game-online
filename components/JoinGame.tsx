import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
const JoinGame = () => {
    const { playerId } = usePlayer();
    const { joinGame, gameData } = useFirebaseContext();

    const onJoinGame = async () => {
        try {
            console.log("Joining game with ID:", gameData?.$id);
            if (gameData) joinGame(gameData.$id, playerId, `Player ${Object.keys(gameData.players || {}).length + 1}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="text-center p-6 py-8 bg-white space-y-8 rounded-lg border border-gray-100 my-6">
            <div className="text-lg">You are invited to play RPS online!</div>
            <button onClick={onJoinGame} className="btn btn-success justify-center w-40">
                Join the Game
            </button>
        </div>
    );
};

export default JoinGame;

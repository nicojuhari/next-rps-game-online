import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFirebase } from "@/contexts/FirebaseContext";
const JoinGame = () => {

    const { playerId } = usePlayer()
    const { joinGame, gameData } = useFirebase();

    const onJoinGame = async () => {
        try {
            console.log('Joining game with ID:', gameData?.$id)
            if(gameData)
                joinGame(gameData.$id, playerId)
        } catch (err) {
            console.error(err)
        }
    }

    return ( 
        <div className="text-center p-6 bg-white rounded-lg border border-gray-200/50 mt-6">
        <div className="my-10 text-lg">
            You are invited to play RPS online!
        </div>
        <button onClick={onJoinGame} className="cursor-pointer px-8 py-2 text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Join
        </button>
    </div>
    );
}
 
export default JoinGame;
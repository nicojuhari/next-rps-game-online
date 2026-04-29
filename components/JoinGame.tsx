import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFirebaseContext } from "@/contexts/FirebaseContext";
import type { Translations } from "@/lib/i18n";

const JoinGame = ({ t }: { t: Translations }) => {
    const { playerId } = usePlayer();
    const { joinGame, gameData } = useFirebaseContext();

    const onJoinGame = async () => {
        try {
            console.log("Joining game with ID:", gameData?.$id);
            if (gameData) joinGame(gameData.$id, playerId, `player${Object.keys(gameData.players || {}).length + 1}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="text-center p-6 py-8 bg-white space-y-8 rounded-lg border border-gray-100 my-6">
            <div className="text-lg">{t.joinGame.invitation}</div>
            <button onClick={onJoinGame} className="btn btn-success justify-center w-40">
                {t.joinGame.joinButton}
            </button>
        </div>
    );
};

export default JoinGame;

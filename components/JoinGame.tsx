"use client";
import { useTranslations } from "next-intl";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFirebaseContext } from "@/contexts/FirebaseContext";

const JoinGame = () => {
    const t = useTranslations("joinGame");
    const { playerId } = usePlayer();
    const { joinGame, gameData } = useFirebaseContext();

    const onJoinGame = async () => {
        try {
            if (gameData) joinGame(gameData.$id, playerId, `player${Object.keys(gameData.players || {}).length + 1}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="text-center p-6 py-8 bg-white space-y-8 rounded-lg border my-6">
            <div className="text-lg">{t("invitation")}</div>
            <button onClick={onJoinGame} className="btn btn-success justify-center w-40">
                {t("joinButton")}
            </button>
        </div>
    );
};

export default JoinGame;

"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import db from "@/lib/firebase";

const PrivacyPolicyComp = () => {
    const t = useTranslations("privacy");
    const [deleting, setDeleting] = useState(false);

    const deleteGameData = async () => {
        setDeleting(true);
        const playerId = localStorage.getItem("rps-player-id");

        localStorage.removeItem("rps-player-id");
        localStorage.removeItem("rps_userWins");
        localStorage.removeItem("rps_computerWins");
        localStorage.removeItem("rps_1p_history");
        localStorage.removeItem("rps_mp_history");

        if (playerId) {
            try {
                const snapshot = await getDocs(collection(db, "games"));
                const mine = snapshot.docs.filter((d) => d.data().players?.[playerId] !== undefined);
                await Promise.all(mine.map((d) => deleteDoc(d.ref)));
            } catch {
                // best-effort — localStorage is already cleared
            }
        }

        setDeleting(false);
        alert(t("deleteAlert"));
    };

    return (
        <div className="py-16 container">
            <h1 className="text-2xl font-bold mb-8 text-center">{t("h1")}</h1>

            <p className="text-gray-600 mb-6">{t("intro")}</p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold">{t("noPersonalDataTitle")}</h2>
                    <p className="text-gray-600">{t("noPersonalDataText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("anonymousIdTitle")}</h2>
                    <p className="text-gray-600">{t("anonymousIdText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("simpleAnalyticsTitle")}</h2>
                    <p className="text-gray-600">
                        {t("simpleAnalyticsText").split("Simple Analytics")[0]}
                        <a href="https://simpleanalytics.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            Simple Analytics
                        </a>
                        {t("simpleAnalyticsText").split("Simple Analytics")[1]}
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("gameDataTitle")}</h2>
                    <p className="text-gray-600">{t("gameDataText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("localStorageTitle")}</h2>
                    <p className="text-gray-600">{t("localStorageText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("anonymityTitle")}</h2>
                    <p className="text-gray-600">{t("anonymityText")}</p>
                </div>

                <div className="pt-2 border-t">
                    <h2 className="text-lg font-semibold mb-1">{t("deleteTitle")}</h2>
                    <p className="text-gray-600 mb-3">{t("deleteText")}</p>
                    <button
                        onClick={deleteGameData}
                        disabled={deleting}
                        className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {deleting ? t("deleting") : t("deleteButton")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyComp;

"use client";
import { useTranslations } from "next-intl";

const PrivacyPolicyComp = () => {
    const t = useTranslations("privacy");

    const deleteGameData = () => {
        localStorage.removeItem("rps_playerId");
        localStorage.removeItem("rps_userWins");
        localStorage.removeItem("rps_computerWins");
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
                    <button onClick={deleteGameData} className="btn btn-primary mt-2">
                        {t("deleteButton")}
                    </button>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("localStorageTitle")}</h2>
                    <p className="text-gray-600">{t("localStorageText")}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("anonymityTitle")}</h2>
                    <p className="text-gray-600">{t("anonymityText")}</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyComp;

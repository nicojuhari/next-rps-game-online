"use client";

import type { Translations } from "@/lib/i18n";

const PrivacyPolicyComp = ({ t }: { t: Translations }) => {
    const deleteGameData = () => {
        localStorage.removeItem("rps_playerId");
        localStorage.removeItem("rps_userWins");
        localStorage.removeItem("rps_computerWins");
        alert(t.privacy.deleteAlert);
    };

    return (
        <div className="py-16 container">
            <h1 className="text-2xl font-bold mb-8 text-center">{t.privacy.h1}</h1>

            <p className="text-gray-600 mb-6">{t.privacy.intro}</p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.noPersonalDataTitle}</h2>
                    <p className="text-gray-600">{t.privacy.noPersonalDataText}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.anonymousIdTitle}</h2>
                    <p className="text-gray-600">{t.privacy.anonymousIdText}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.simpleAnalyticsTitle}</h2>
                    <p className="text-gray-600">
                        {t.privacy.simpleAnalyticsText.split("Simple Analytics")[0]}
                        <a href="https://simpleanalytics.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            Simple Analytics
                        </a>
                        {t.privacy.simpleAnalyticsText.split("Simple Analytics")[1]}
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.gameDataTitle}</h2>
                    <p className="text-gray-600">{t.privacy.gameDataText}</p>
                    <button onClick={deleteGameData} className="btn btn-primary mt-2">
                        {t.privacy.deleteButton}
                    </button>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.localStorageTitle}</h2>
                    <p className="text-gray-600">{t.privacy.localStorageText}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t.privacy.anonymityTitle}</h2>
                    <p className="text-gray-600">{t.privacy.anonymityText}</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyComp;

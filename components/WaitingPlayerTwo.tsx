import { useState } from "react";
import Image from "next/image";
import { SpinnerIcon } from "@phosphor-icons/react";
import type { Translations } from "@/lib/i18n";

const WaitingPlayerTwo = ({ t }: { t: Translations }) => {
    const [loading, setLoading] = useState(false);

    const copyToClipboard = () => {
        setLoading(true);
        try {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
        } catch (err) {
            console.error("Failed to copy: ", err);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="my-6 space-y-8 text-center bg-white p-6 py-8 rounded-lg border border-gray-100">
            <div className="space-y-2">
                <div className="text-lg font-medium">{t.waitingPlayer.roomCreated}</div>
                <div className="text-sm text-gray-600">{t.waitingPlayer.sharePrompt}</div>
            </div>
            <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-14" />
            <button onClick={copyToClipboard} className="btn btn-success text-center w-40 justify-center gap-2">
                {loading ? (
                    <>
                        {" "}
                        <SpinnerIcon className="animate-spin" /> <span>{t.waitingPlayer.copying}</span>
                    </>
                ) : (
                    t.waitingPlayer.copyLink
                )}
            </button>
        </div>
    );
};

export default WaitingPlayerTwo;

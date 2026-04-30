"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

const WaitingPlayerTwo = () => {
    const t = useTranslations("waitingPlayer");
    const [url, setUrl] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        queueMicrotask(() => setUrl(window.location.href));
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url).catch((err) => console.error("Failed to copy:", err));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 text-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
            <div className="space-y-1">
                <div className="text-base font-semibold text-gray-800">{t("roomCreated")}</div>
                <div className="text-sm text-gray-500">{t("sharePrompt")}</div>
            </div>

            {/* Pulsing waiting indicator */}
            <div className="flex items-center justify-center gap-1.5 py-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce [animation-delay:-0.2s]" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce [animation-delay:-0.1s]" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" />
            </div>

            {/* URL display + copy */}
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-left">
                <span className="flex-1 text-xs text-gray-500 truncate font-mono">{url}</span>
                <button
                    onClick={copyToClipboard}
                    title={t("copyLink")}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all cursor-pointer
                        bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
                >
                    {copied ? (
                        <>
                            <CheckIcon size={13} weight="bold" className="text-green-500" />
                            <span className="text-green-600">{t("copying")}</span>
                        </>
                    ) : (
                        <>
                            <CopyIcon size={13} weight="bold" />
                            {t("copyLink")}
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default WaitingPlayerTwo;

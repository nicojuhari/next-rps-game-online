"use client";

import { useRef, useState } from "react";
import { toPng, toBlob } from "html-to-image";
import { DownloadSimple, Copy, X, ArrowLeft } from "@phosphor-icons/react";
import CertificateCard, { CARD_W, CARD_H } from "@/components/CertificateCard";
import { CertificateData } from "@/lib/certificate";

interface CertificateModalProps {
    data: CertificateData;
    onClose: () => void;
}

const DISPLAY_W = 480;
const SCALE = DISPLAY_W / CARD_W;
const DISPLAY_H = Math.round(CARD_H * SCALE);

const CertificateModal = ({ data, onClose }: CertificateModalProps) => {
    const captureRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<1 | 2>(1);
    const [winnerName, setWinnerName] = useState("");
    const [player2Name, setPlayer2Name] = useState(data.player2Name || "");
    const [certDataFinal, setCertDataFinal] = useState<CertificateData | null>(null);
    const [downloading, setDownloading] = useState(false);
    const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "done">("idle");

    const handleGenerate = () => {
        const finalPlayer2Name =
            data.mode === "multi" ? player2Name.trim() || "a friend" : data.player2Name;
        setCertDataFinal({
            ...data,
            player2Name: finalPlayer2Name,
            winnerName: winnerName.trim() || undefined,
        });
        setStep(2);
    };

    const handleDownload = async () => {
        if (!captureRef.current) return;
        setDownloading(true);
        try {
            const url = await toPng(captureRef.current, {
                cacheBust: true,
                pixelRatio: 2,
                width: CARD_W,
                height: CARD_H,
                style: { opacity: "1" },
            });
            const a = document.createElement("a");
            a.href = url;
            a.download = "rps-game-online-certificate.png";
            a.click();
        } finally {
            setDownloading(false);
        }
    };

    const handleCopy = async () => {
        if (!captureRef.current) return;
        setCopyStatus("copying");
        try {
            const blob = await toBlob(captureRef.current, {
                cacheBust: true,
                pixelRatio: 2,
                width: CARD_W,
                height: CARD_H,
                style: { opacity: "1" },
            });
            if (!blob) throw new Error("no blob");
            if (typeof ClipboardItem !== "undefined") {
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
                setCopyStatus("done");
                setTimeout(() => setCopyStatus("idle"), 2000);
            } else {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "rps-game-online-certificate.png";
                a.click();
                URL.revokeObjectURL(url);
                setCopyStatus("idle");
            }
        } catch {
            setCopyStatus("idle");
        }
    };

    const busy = downloading || copyStatus === "copying";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Step 1: Setup form */}
            {step === 1 && (
                <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-lg font-bold text-gray-800">🏆 Your Certificate</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={20} weight="bold" />
                        </button>
                    </div>

                    {/* Winner name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name (optional)</label>
                        <input
                            type="text"
                            value={winnerName}
                            onChange={(e) => setWinnerName(e.target.value)}
                            placeholder="Leave blank to stay anonymous"
                            maxLength={40}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 transition-colors"
                        />
                    </div>

                    {/* Opponent name (multiplayer only) */}
                    {data.mode === "multi" && (
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Opponent&apos;s name (optional)</label>
                            <input
                                type="text"
                                value={player2Name}
                                onChange={(e) => setPlayer2Name(e.target.value)}
                                placeholder="a friend"
                                maxLength={40}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 transition-colors"
                            />
                        </div>
                    )}

                    <button
                        onClick={handleGenerate}
                        className="w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-all bg-blue-500 hover:bg-blue-600"
                    >
                        Generate Certificate →
                    </button>
                </div>
            )}

            {/* Step 2: Preview + download */}
            {step === 2 && certDataFinal && (
                <div className="relative flex flex-col items-center gap-4">
                    <button
                        onClick={onClose}
                        className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X size={24} weight="bold" />
                    </button>

                    {/* Certificate preview — also contains the capture target */}
                    <div
                        style={{
                            width: `${DISPLAY_W}px`,
                            height: `${DISPLAY_H}px`,
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "4px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        }}
                    >
                        {/*
                         * Capture target: full 720×470, nearly invisible (opacity 0.001).
                         * position:absolute inside a visible on-screen parent → browser DOES paint it.
                         * html-to-image overrides opacity:'1' so the exported PNG is fully opaque.
                         */}
                        <div
                            ref={captureRef}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: `${CARD_W}px`,
                                height: `${CARD_H}px`,
                                opacity: 0.001,
                            }}
                        >
                            <CertificateCard data={certDataFinal} />
                        </div>

                        {/* Scaled visible display */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transform: `scale(${SCALE})`,
                                transformOrigin: "top left",
                                width: `${CARD_W}px`,
                                height: `${CARD_H}px`,
                                pointerEvents: "none",
                            }}
                        >
                            <CertificateCard data={certDataFinal} />
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3" style={{ width: `${DISPLAY_W}px` }}>
                        <button
                            onClick={handleDownload}
                            disabled={busy}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                        >
                            <DownloadSimple size={16} weight="bold" />
                            {downloading ? "Saving…" : "Download PNG"}
                        </button>
                        <button
                            onClick={handleCopy}
                            disabled={busy}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all border-2 border-white/20 text-white hover:border-white/40 disabled:opacity-50"
                        >
                            <Copy size={16} weight="bold" />
                            {copyStatus === "done" ? "Copied!" : copyStatus === "copying" ? "Copying…" : "Copy Image"}
                        </button>
                    </div>

                    <button
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default CertificateModal;

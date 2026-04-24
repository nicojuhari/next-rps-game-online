"use client";

import { useRef, useState } from "react";
import { toPng, toBlob } from "html-to-image";
import { DownloadSimple, Copy, X } from "@phosphor-icons/react";
import CertificateCard, { CARD_W, CARD_H } from "@/components/CertificateCard";
import { CertificateData } from "@/lib/certificate";

interface CertificateModalProps {
    data: CertificateData;
    onClose: () => void;
}

// The modal container is max-w-lg (512px). Scale the 820px card to fit.
const DISPLAY_W = 512;
const SCALE = DISPLAY_W / CARD_W;

const CertificateModal = ({ data, onClose }: CertificateModalProps) => {
    const captureRef = useRef<HTMLDivElement>(null);
    const [downloading, setDownloading] = useState(false);
    const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "done">("idle");

    const handleDownload = async () => {
        if (!captureRef.current) return;
        setDownloading(true);
        try {
            const url = await toPng(captureRef.current, { cacheBust: true, pixelRatio: 2 });
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
            const blob = await toBlob(captureRef.current, { cacheBust: true, pixelRatio: 2 });
            if (!blob) throw new Error("no blob");
            if (typeof ClipboardItem !== "undefined") {
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
                setCopyStatus("done");
                setTimeout(() => setCopyStatus("idle"), 2000);
            } else {
                // Safari fallback
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
            <div className="relative flex flex-col items-center gap-4">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={24} weight="bold" />
                </button>

                {/* Visible scaled-down display */}
                <div
                    style={{
                        width: `${DISPLAY_W}px`,
                        height: `${CARD_H * SCALE}px`,
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "4px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `scale(${SCALE})`,
                            transformOrigin: "top left",
                            width: `${CARD_W}px`,
                            height: `${CARD_H}px`,
                        }}
                    >
                        <CertificateCard data={data} />
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
            </div>

            {/* Full-size capture target - off-screen, NOT visibility:hidden (that breaks html-to-image) */}
            <div
                ref={captureRef}
                style={{
                    position: "fixed",
                    left: "-9999px",
                    top: "-9999px",
                    width: `${CARD_W}px`,
                    height: `${CARD_H}px`,
                    zIndex: -1,
                }}
            >
                <CertificateCard data={data} />
            </div>
        </div>
    );
};

export default CertificateModal;

"use client";

import { useRef, useState } from "react";
import { toPng, toBlob } from "html-to-image";
import { DownloadSimple, Copy, ShareNetwork, X } from "@phosphor-icons/react";
import CertificateCard from "@/components/CertificateCard";
import { CertificateData, encodeCertificate } from "@/lib/certificate";

const SITE_URL = "https://rps-game.online";

interface CertificateModalProps {
    data: CertificateData;
    onClose: () => void;
}

const CertificateModal = ({ data, onClose }: CertificateModalProps) => {
    const captureRef = useRef<HTMLDivElement>(null);
    const [downloading, setDownloading] = useState(false);
    const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "done">("idle");
    const [linkStatus, setLinkStatus] = useState<"idle" | "done">("idle");

    const handleDownload = async () => {
        if (!captureRef.current) return;
        setDownloading(true);
        try {
            const url = await toPng(captureRef.current, { cacheBust: true, pixelRatio: 2 });
            const a = document.createElement("a");
            a.href = url;
            a.download = "rps-certificate.png";
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
                // Safari fallback: download instead
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "rps-certificate.png";
                a.click();
                URL.revokeObjectURL(url);
                setCopyStatus("idle");
            }
        } catch {
            setCopyStatus("idle");
        }
    };

    const handleShareLink = async () => {
        const encoded = encodeCertificate(data);
        const url = `${SITE_URL}/share?data=${encoded}`;
        await navigator.clipboard.writeText(url);
        setLinkStatus("done");
        setTimeout(() => setLinkStatus("idle"), 2000);
    };

    const busy = downloading || copyStatus === "copying";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative w-full max-w-lg">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={24} weight="bold" />
                </button>

                {/* Visible card */}
                <CertificateCard data={data} />

                {/* Action buttons */}
                <div className="flex gap-3 mt-4">
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

                    <button
                        onClick={handleShareLink}
                        disabled={busy}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                    >
                        <ShareNetwork size={16} weight="bold" />
                        {linkStatus === "done" ? "Copied!" : "Copy Link"}
                    </button>
                </div>

                {/* Hidden capture target */}
                <div
                    style={{
                        position: "absolute",
                        left: "-9999px",
                        top: 0,
                        width: "600px",
                        pointerEvents: "none",
                        visibility: "hidden",
                    }}
                >
                    <div ref={captureRef}>
                        <CertificateCard data={data} forCapture />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;

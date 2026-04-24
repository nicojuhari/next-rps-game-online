export type CertificateData = {
    mode: "single" | "multi";
    player1Name: string;
    player2Name: string;
    player1Wins: number;
    player2Wins: number;
    player1Choices: number[];
    player2Choices: number[];
    winner: "player1" | "player2" | "draw";
    generatedAt: number;
};

export const CHOICE_EMOJI: Record<number, string> = {
    1: "🪨",
    2: "📃",
    3: "✂️",
};

export function encodeCertificate(data: CertificateData): string {
    const truncated = {
        ...data,
        player1Name: data.player1Name.slice(0, 40),
        player2Name: data.player2Name.slice(0, 40),
    };
    const json = JSON.stringify(truncated);
    const base64 = btoa(unescape(encodeURIComponent(json)));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export function decodeCertificate(encoded: string): CertificateData | null {
    try {
        const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
        const json = decodeURIComponent(escape(atob(base64)));
        return JSON.parse(json) as CertificateData;
    } catch {
        return null;
    }
}

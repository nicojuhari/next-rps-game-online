export type CertificateData = {
    mode: "single" | "multi";
    player1Name: string;
    player2Name: string;
    winnerName?: string; // optional display name entered by winner
    player1SessionWins: number;
    player2SessionWins: number;
    player1Choices: number[];
    player2Choices: number[];
    winner: "player1" | "player2" | "draw";
    stake?: string; // what was on the line
    generatedAt: number;
};

export const FUNNY_STAKES = [
    "the right to brag about it at dinner tonight",
    "control of the TV remote for the rest of the evening",
    "one free 'I told you so' - no expiry date",
    "the last slice of pizza (hypothetically)",
    "the title of Supreme Rock Paper Scissors Champion",
    "a smug satisfaction that lasts exactly 24 hours",
    "one complimentary high-five from yourself",
    "the undying respect of your cat",
    "proof that humans still have one thing over machines",
    "exactly zero dollars but infinite glory",
    "bragging rights until the next time you lose",
    "a victory dance of your choosing",
    "the coveted title of 'Person Who Beat A Robot Today'",
    "an IOU for one future favor, unspecified",
    "the moral high ground for the foreseeable future",
];

export const getRandomStake = () => FUNNY_STAKES[Math.floor(Math.random() * FUNNY_STAKES.length)];

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

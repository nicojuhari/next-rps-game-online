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

const FUNNY_BODIES_SINGLE: Array<(name: string, score: string) => string> = [
    (name, score) =>
        `For outsmarting a cold, calculating machine with raw human instinct. ${name} defeated the bot ${score} and has earned the right to brag about it at every dinner table until further notice.`,
    (name, score) =>
        `In a display of genius and very questionable luck, ${name} conquered the robot ${score}. The algorithm is confused. The algorithm is questioning everything. The algorithm cannot handle the truth.`,
    (name, score) =>
        `Armed with lightning reflexes and zero regard for the bot's feelings, ${name} sent the computer packing ${score}. Silicon trembles. Bragging rights: fully confirmed.`,
    (name, score) =>
        `The computer ran 10,000 simulations before the match. ${name} ran zero. ${name} won ${score} anyway. The simulations were wrong. The scientists are still baffled.`,
    (name, score) =>
        `The bot fought bravely and lost honorably. ${name} won ${score} and shall forever hold the title of "Person Who Beat A Robot Today." Wear it proudly. Tell your family.`,
    (name, score) =>
        `After careful analysis, the machine concluded it never stood a chance. ${name} dominated ${score} with what experts are calling "absolutely flawless vibes and zero remorse."`,
    (name, score) =>
        `Three rounds. Zero mercy. ${name} defeated the computer ${score} and claimed eternal control of the TV remote, the moral high ground, and the coveted right to say "I told you so" indefinitely.`,
    (name, score) =>
        `The bot's last message, translated from binary: "I respect it." ${name} wins ${score} and leaves the machine to contemplate its failures in complete silence.`,
    (name, score) =>
        `Physicists confirm this outcome was statistically possible. ${name} wins ${score}. The bot will not be sending a congratulatory message. It has been unplugged for its own good.`,
    (name, score) =>
        `${name} arrived, played, and conquered - ${score}. The computer offered no rematch. The computer has no feelings about this. Probably.`,
];

const FUNNY_BODIES_MULTI: Array<(name: string, opponent: string, score: string) => string> = [
    (name, opponent, score) =>
        `For defeating ${opponent} in what historians will describe as the most intense Rock Paper Scissors match ever witnessed. ${name} wins ${score} and has claimed the undying respect of everyone present (estimated: 1-3 people).`,
    (name, opponent, score) =>
        `In a battle of wits that left ${opponent} rethinking several life choices, ${name} dominated ${score}. ${opponent} has agreed to acknowledge this publicly (under mild duress).`,
    (name, opponent, score) =>
        `While ${opponent} showed remarkable courage in the face of inevitable defeat, the outcome was never in doubt. ${name} wins ${score} and shall decide where everyone eats for the foreseeable future.`,
    (name, opponent, score) =>
        `After an epic showdown witnessed by people who weren't just checking their phones, ${name} defeated ${opponent} ${score}. ${opponent} has been informed. ${opponent} is fine. Probably.`,
    (name, opponent, score) =>
        `The match was close (it wasn't). ${name} dominated ${opponent} ${score} in what witnesses call "an absolute masterclass" and ${opponent} is calling "a complete fluke." The certificate disagrees.`,
    (name, opponent, score) =>
        `Eyewitnesses confirm that ${opponent} never had a chance. ${name} wins ${score} and will not be taking questions at this time. The trophy is metaphorical but the glory is eternal.`,
    (name, opponent, score) =>
        `History books will remember this day. ${opponent} will remember it differently. ${name} wins ${score} and takes home the last slice of pizza, control of the remote, and the moral high ground - simultaneously.`,
    (name, opponent, score) =>
        `In three rounds of pure psychological warfare, ${name} outmaneuvered ${opponent} completely. Final score: ${score}. ${opponent}'s reputation: under review.`,
    (name, opponent, score) =>
        `${opponent} entered the arena with confidence. ${opponent} left the arena with a lesson. ${name} wins ${score} and leaves with bragging rights valid for no less than one calendar year.`,
    (name, opponent, score) =>
        `An independent panel of judges - consisting entirely of ${name} - has ruled the result of ${score} to be both fair and inevitable. ${opponent}'s appeal has been denied.`,
];

export const getCertText = (data: CertificateData): { title: string; body: string } => {
    const { mode, player1Name, player2Name, player1SessionWins, player2SessionWins, winnerName, generatedAt } = data;
    const displayName = winnerName || player1Name;
    const score = `${player1SessionWins}-${player2SessionWins}`;

    if (mode === "single") {
        const fn = FUNNY_BODIES_SINGLE[generatedAt % FUNNY_BODIES_SINGLE.length];
        return { title: "of Outstanding Achievement", body: fn(displayName, score) };
    }
    const fn = FUNNY_BODIES_MULTI[generatedAt % FUNNY_BODIES_MULTI.length];
    return { title: "of Undeniable Victory", body: fn(displayName, player2Name || "a friend", score) };
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

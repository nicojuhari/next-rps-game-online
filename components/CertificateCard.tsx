import { CertificateData, CHOICE_EMOJI } from "@/lib/certificate";
import { compareChoices } from "@/lib/game-utils";

interface CertificateCardProps {
    data: CertificateData;
}

const getRoundResult = (p1: number, p2: number) => {
    const r = compareChoices(p1, p2);
    if (r === 1) return { icon: "✓", color: "#15803d" };
    if (r === 2) return { icon: "✗", color: "#dc2626" };
    return { icon: "=", color: "#b45309" };
};

const getCertText = (data: CertificateData): { title: string; body: string } => {
    const { mode, player1Name, player2Name, player1SessionWins, player2SessionWins, stake, winnerName } = data;
    const displayName = winnerName || player1Name;
    const score = `${player1SessionWins}–${player2SessionWins}`;

    if (mode === "single") {
        return {
            title: "of Outstanding Achievement",
            body: `For outsmarting a cold, calculating machine with raw human instinct. ${displayName} defeated the bot with a final score of ${score}, proving once and for all that computers have no business playing hand games. Tonight's stakes: ${stake}.`,
        };
    }
    return {
        title: "of Undeniable Victory",
        body: `For defeating ${player2Name} in what historians will describe as the most intense Rock Paper Scissors match ever witnessed. ${displayName} emerged victorious ${score}, rightfully claiming their prize: ${stake}.`,
    };
};

// Decorative SVG strip for left side
const LeftStrip = () => (
    <svg width="110" height="530" viewBox="0 0 110 530" style={{ flexShrink: 0, display: "block" }}>
        {/* Top quarter circle - purple */}
        <path d="M 0 0 L 65 0 A 65 65 0 0 0 0 65 Z" fill="#4F1186" />
        {/* Yellow circle */}
        <circle cx="88" cy="38" r="24" fill="#EAB308" />
        {/* Teal bar cluster */}
        <rect x="0" y="78" width="55" height="7" rx="3.5" fill="#0D9488" />
        <rect x="0" y="91" width="55" height="7" rx="3.5" fill="#0D9488" />
        <rect x="0" y="104" width="55" height="7" rx="3.5" fill="#0D9488" />
        {/* Pink circle */}
        <circle cx="85" cy="95" r="16" fill="#EC4899" />
        {/* Orange dot */}
        <circle cx="60" cy="130" r="8" fill="#F97316" />
        {/* Purple semi-circle facing right */}
        <path d="M 0 155 A 42 42 0 0 1 0 239 Z" fill="#7C3AED" />
        {/* Yellow ring */}
        <circle cx="72" cy="180" r="28" fill="none" stroke="#EAB308" strokeWidth="7" />
        {/* Teal filled circle */}
        <circle cx="95" cy="230" r="16" fill="#0D9488" />
        {/* Pink triangle pointing right */}
        <polygon points="5,260 5,300 42,280" fill="#EC4899" />
        {/* Star cluster - purple */}
        <circle cx="80" cy="270" r="9" fill="#4F1186" />
        <circle cx="97" cy="263" r="5" fill="#4F1186" />
        <circle cx="97" cy="277" r="5" fill="#4F1186" />
        <circle cx="63" cy="263" r="5" fill="#4F1186" />
        <circle cx="63" cy="277" r="5" fill="#4F1186" />
        {/* Orange donut */}
        <circle cx="30" cy="355" r="28" fill="#F97316" />
        <circle cx="30" cy="355" r="14" fill="white" />
        {/* Pink vertical bar pair */}
        <rect x="75" y="330" width="10" height="50" rx="5" fill="#EC4899" />
        <rect x="92" y="330" width="10" height="50" rx="5" fill="#EC4899" />
        {/* Teal triangle pointing up */}
        <polygon points="30,415 60,455 0,455" fill="#0D9488" />
        {/* Yellow semicircle at bottom */}
        <path d="M 65 530 A 45 45 0 0 0 65 440 Z" fill="#EAB308" />
        {/* Purple dot */}
        <circle cx="95" cy="490" r="18" fill="#4F1186" />
    </svg>
);

// Decorative SVG strip for right side (mirrored variations)
const RightStrip = () => (
    <svg width="110" height="530" viewBox="0 0 110 530" style={{ flexShrink: 0, display: "block" }}>
        {/* Top quarter circle - teal */}
        <path d="M 110 0 L 45 0 A 65 65 0 0 1 110 65 Z" fill="#0D9488" />
        {/* Pink circle */}
        <circle cx="22" cy="38" r="24" fill="#EC4899" />
        {/* Orange bar cluster */}
        <rect x="55" y="78" width="55" height="7" rx="3.5" fill="#F97316" />
        <rect x="55" y="91" width="55" height="7" rx="3.5" fill="#F97316" />
        <rect x="55" y="104" width="55" height="7" rx="3.5" fill="#F97316" />
        {/* Purple circle */}
        <circle cx="25" cy="95" r="16" fill="#7C3AED" />
        {/* Yellow dot */}
        <circle cx="50" cy="130" r="8" fill="#EAB308" />
        {/* Teal semi-circle facing left */}
        <path d="M 110 155 A 42 42 0 0 0 110 239 Z" fill="#0D9488" />
        {/* Purple ring */}
        <circle cx="38" cy="180" r="28" fill="none" stroke="#7C3AED" strokeWidth="7" />
        {/* Orange filled circle */}
        <circle cx="15" cy="230" r="16" fill="#F97316" />
        {/* Yellow triangle pointing left */}
        <polygon points="105,260 105,300 68,280" fill="#EAB308" />
        {/* Cross cluster - pink */}
        <circle cx="30" cy="270" r="9" fill="#EC4899" />
        <circle cx="13" cy="263" r="5" fill="#EC4899" />
        <circle cx="13" cy="277" r="5" fill="#EC4899" />
        <circle cx="47" cy="263" r="5" fill="#EC4899" />
        <circle cx="47" cy="277" r="5" fill="#EC4899" />
        {/* Purple donut */}
        <circle cx="80" cy="355" r="28" fill="#4F1186" />
        <circle cx="80" cy="355" r="14" fill="white" />
        {/* Teal vertical bar pair */}
        <rect x="25" y="330" width="10" height="50" rx="5" fill="#0D9488" />
        <rect x="8" y="330" width="10" height="50" rx="5" fill="#0D9488" />
        {/* Orange triangle pointing up */}
        <polygon points="80,415 110,455 50,455" fill="#F97316" />
        {/* Pink semicircle at bottom */}
        <path d="M 45 530 A 45 45 0 0 1 45 440 Z" fill="#EC4899" />
        {/* Yellow dot */}
        <circle cx="15" cy="490" r="18" fill="#EAB308" />
    </svg>
);

const CARD_W = 820;
const CARD_H = 530;

const CertificateCard = ({ data }: CertificateCardProps) => {
    const { player1Name, player1SessionWins, player2SessionWins, player1Choices, player2Choices, winnerName, generatedAt } = data;

    const { title, body } = getCertText(data);
    const displayName = winnerName || player1Name;
    const date = new Date(generatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

    const rounds = player1Choices.map((c, i) => ({
        p1: c,
        p2: player2Choices[i] ?? 0,
        result: getRoundResult(c, player2Choices[i] ?? 0),
    }));

    return (
        <div
            style={{
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                background: "#ffffff",
                border: "10px solid #4F1186",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                fontFamily: "Georgia, 'Times New Roman', serif",
                position: "relative",
            }}
        >
            <LeftStrip />

            {/* Center content */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 24px",
                    textAlign: "center",
                    minWidth: 0,
                }}
            >
                {/* Header */}
                <p
                    style={{
                        fontSize: "11px",
                        letterSpacing: "3px",
                        color: "#6B21A8",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                        fontFamily: "Georgia, serif",
                    }}
                >
                    rps-game.online presents
                </p>
                <h1
                    style={{
                        fontSize: "34px",
                        fontWeight: 900,
                        color: "#4F1186",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        margin: "0 0 2px 0",
                        fontFamily: "Georgia, serif",
                    }}
                >
                    Certificate
                </h1>
                <p style={{ fontSize: "13px", letterSpacing: "4px", color: "#7C3AED", textTransform: "uppercase", margin: "0 0 16px 0" }}>
                    {title}
                </p>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: "2px",
                        background: "linear-gradient(to right, transparent, #4F1186, transparent)",
                        marginBottom: "14px",
                    }}
                />

                {/* Awarded to */}
                <p style={{ fontSize: "12px", color: "#6B7280", marginBottom: "6px", fontStyle: "italic" }}>Proudly awarded to</p>
                <p
                    style={{
                        fontSize: "28px",
                        fontStyle: "italic",
                        color: "#D97706",
                        margin: "0 0 4px 0",
                        fontFamily: "Georgia, serif",
                        lineHeight: 1.2,
                    }}
                >
                    {displayName}
                </p>

                {/* Divider */}
                <div style={{ width: "70%", height: "1px", background: "#D97706", margin: "10px auto 12px" }} />

                {/* Body text */}
                <p style={{ fontSize: "11.5px", color: "#374151", lineHeight: 1.65, maxWidth: "420px", margin: "0 0 14px 0" }}>{body}</p>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "linear-gradient(to right, transparent, #D1D5DB, transparent)",
                        marginBottom: "14px",
                    }}
                />

                {/* Rounds mini-display */}
                {rounds.length > 0 && (
                    <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                        {rounds.map((r, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: "#F9FAFB",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: "6px",
                                    padding: "3px 8px",
                                    fontSize: "13px",
                                }}
                            >
                                <span>{CHOICE_EMOJI[r.p1] ?? "?"}</span>
                                <span style={{ color: r.result.color, fontWeight: 700, fontSize: "11px" }}>{r.result.icon}</span>
                                <span>{CHOICE_EMOJI[r.p2] ?? "?"}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer row */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%" }}>
                    {/* Date */}
                    <div style={{ textAlign: "center", minWidth: "110px" }}>
                        <div style={{ width: "110px", height: "1px", background: "#9CA3AF", marginBottom: "4px" }} />
                        <p style={{ fontSize: "10px", color: "#4B5563", margin: 0 }}>{date}</p>
                        <p
                            style={{
                                fontSize: "9px",
                                color: "#9CA3AF",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                margin: "2px 0 0",
                            }}
                        >
                            Date
                        </p>
                    </div>

                    {/* Center seal */}
                    <div
                        style={{
                            width: "68px",
                            height: "68px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #EAB308 0%, #F59E0B 100%)",
                            border: "4px solid #D97706",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 8px rgba(217,119,6,0.35)",
                        }}
                    >
                        <span style={{ fontSize: "20px", lineHeight: 1 }}>🏆</span>
                        <span style={{ fontSize: "8px", fontWeight: 700, color: "#78350F", letterSpacing: "0.5px", marginTop: "2px" }}>
                            WINNER
                        </span>
                    </div>

                    {/* Score + website */}
                    <div style={{ textAlign: "center", minWidth: "110px" }}>
                        <div style={{ width: "110px", height: "1px", background: "#9CA3AF", marginBottom: "4px" }} />
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#4F1186", margin: 0 }}>
                            {player1SessionWins} - {player2SessionWins}
                        </p>
                        <p
                            style={{
                                fontSize: "9px",
                                color: "#9CA3AF",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                margin: "2px 0 0",
                            }}
                        >
                            Score
                        </p>
                    </div>
                </div>
            </div>

            <RightStrip />
        </div>
    );
};

export { CARD_W, CARD_H };
export default CertificateCard;

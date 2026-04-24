import { CertificateData } from "@/lib/certificate";

interface CertificateCardProps {
    data: CertificateData;
}

const getCertText = (data: CertificateData): { title: string; body: string } => {
    const { mode, player1Name, player2Name, player1SessionWins, player2SessionWins, winnerName } = data;
    const displayName = winnerName || player1Name;
    const score = `${player1SessionWins}–${player2SessionWins}`;

    if (mode === "single") {
        return {
            title: "of Outstanding Achievement",
            body: `For outsmarting a cold, calculating machine with raw human instinct. ${displayName} defeated the bot with a final score of ${score}, proving once and for all that computers have no business playing hand games.`,
        };
    }
    return {
        title: "of Undeniable Victory",
        body: `For defeating ${player2Name} in what historians will describe as the most intense Rock Paper Scissors match ever witnessed. ${displayName} emerged victorious with a final score of ${score}.`,
    };
};

export const CARD_W = 720;
export const CARD_H = 450;

const CertificateCard = ({ data }: CertificateCardProps) => {
    const { player1SessionWins, player2SessionWins, winnerName, player1Name, generatedAt } = data;
    const { title, body } = getCertText(data);
    const displayName = winnerName || player1Name;
    const date = new Date(generatedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

    return (
        <div
            style={{
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Georgia, 'Times New Roman', serif",
                overflow: "hidden",
                boxSizing: "border-box",
            }}
        >
            {/* Top rainbow bar */}
            <div
                style={{
                    height: "7px",
                    background: "linear-gradient(to right, #427cb5 0%, #efaf03 33%, #ed4c46 66%, #34c069 100%)",
                    flexShrink: 0,
                }}
            />

            {/* Main content */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 56px",
                    textAlign: "center",
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "20px", letterSpacing: "6px" }}>🪨 📃 ✂️</span>
                    <span
                        style={{
                            fontSize: "9px",
                            letterSpacing: "3px",
                            color: "#9ca3af",
                            textTransform: "uppercase",
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        rps-game.online
                    </span>
                </div>

                {/* Certificate title */}
                <h1
                    style={{
                        fontSize: "36px",
                        fontWeight: 900,
                        color: "#427cb5",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        margin: "0 0 4px 0",
                        fontFamily: "Georgia, serif",
                    }}
                >
                    Certificate
                </h1>
                <p
                    style={{
                        fontSize: "12px",
                        letterSpacing: "4px",
                        color: "#7c3aed",
                        textTransform: "uppercase",
                        margin: "0 0 14px 0",
                    }}
                >
                    {title}
                </p>

                {/* Top divider */}
                <div
                    style={{
                        width: "100%",
                        height: "2px",
                        background: "linear-gradient(to right, transparent, #427cb5, transparent)",
                        marginBottom: "12px",
                    }}
                />

                {/* Awarded to */}
                <p style={{ fontSize: "11px", color: "#6b7280", marginBottom: "5px", fontStyle: "italic" }}>Proudly awarded to</p>
                <p
                    style={{
                        fontSize: "28px",
                        fontStyle: "italic",
                        color: "#d97706",
                        margin: "0",
                        lineHeight: 1.2,
                        fontFamily: "Georgia, serif",
                    }}
                >
                    {displayName}
                </p>
                <div style={{ width: "55%", height: "1px", background: "#d97706", margin: "8px auto 10px" }} />

                {/* Body */}
                <p style={{ fontSize: "11px", color: "#374151", lineHeight: 1.65, maxWidth: "500px", margin: "0 0 10px 0" }}>{body}</p>

                {/* Stake */}
                {data.stake && (
                    <p
                        style={{
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#427cb5",
                            fontStyle: "italic",
                            margin: "0 0 12px 0",
                            maxWidth: "520px",
                            lineHeight: 1.4,
                        }}
                    >
                        &ldquo;{data.stake}&rdquo;
                    </p>
                )}

                {/* Footer divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "linear-gradient(to right, transparent, #d1d5db, transparent)",
                        marginBottom: "12px",
                    }}
                />

                {/* Footer row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ textAlign: "center", minWidth: "100px" }}>
                        <div style={{ width: "100px", height: "1px", background: "#9ca3af", marginBottom: "4px" }} />
                        <p style={{ fontSize: "10px", color: "#4b5563", margin: 0 }}>{date}</p>
                        <p
                            style={{
                                fontSize: "9px",
                                color: "#9ca3af",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                margin: "2px 0 0",
                            }}
                        >
                            Date
                        </p>
                    </div>

                    <div
                        style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #eab308 0%, #f59e0b 100%)",
                            border: "4px solid #d97706",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 8px rgba(217,119,6,0.3)",
                        }}
                    >
                        <span style={{ fontSize: "20px", lineHeight: 1 }}>🏆</span>
                        <span
                            style={{
                                fontSize: "7px",
                                fontWeight: 700,
                                color: "#78350f",
                                letterSpacing: "0.5px",
                                marginTop: "2px",
                            }}
                        >
                            WINNER
                        </span>
                    </div>

                    <div style={{ textAlign: "center", minWidth: "100px" }}>
                        <div style={{ width: "100px", height: "1px", background: "#9ca3af", marginBottom: "4px" }} />
                        <p style={{ fontSize: "14px", fontWeight: 700, color: "#427cb5", margin: 0 }}>
                            {player1SessionWins} – {player2SessionWins}
                        </p>
                        <p
                            style={{
                                fontSize: "9px",
                                color: "#9ca3af",
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

            {/* Bottom rainbow bar */}
            <div
                style={{
                    height: "7px",
                    background: "linear-gradient(to right, #34c069 0%, #ed4c46 33%, #efaf03 66%, #427cb5 100%)",
                    flexShrink: 0,
                }}
            />
        </div>
    );
};

export default CertificateCard;

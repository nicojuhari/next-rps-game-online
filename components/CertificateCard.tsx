import { CertificateData, CHOICE_EMOJI } from "@/lib/certificate";
import { compareChoices } from "@/lib/game-utils";

interface CertificateCardProps {
    data: CertificateData;
    forCapture?: boolean;
}

const getRoundResult = (p1: number, p2: number) => {
    const result = compareChoices(p1, p2);
    if (result === 1) return { icon: "✓", color: "#34c069" };
    if (result === 2) return { icon: "✗", color: "#ed4c46" };
    return { icon: "=", color: "#efaf03" };
};

const CertificateCard = ({ data, forCapture = false }: CertificateCardProps) => {
    const { player1Name, player2Name, player1Wins, player2Wins, player1Choices, player2Choices, winner, generatedAt } = data;

    const outcomeEmoji = winner === "player1" ? "🏆" : winner === "player2" ? "😞" : "🤝";
    const outcomeText = winner === "player1" ? `${player1Name} Wins!` : winner === "player2" ? `${player2Name} Wins!` : "It's a Draw!";
    const outcomeColor = winner === "player1" ? "#34c069" : winner === "player2" ? "#ed4c46" : "#efaf03";

    const p1NameColor = winner === "player1" ? "#34c069" : winner === "player2" ? "#ed4c46" : "#efaf03";
    const p2NameColor = winner === "player2" ? "#34c069" : winner === "player1" ? "#ed4c46" : "#efaf03";

    const date = new Date(generatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    const rounds = player1Choices.map((c, i) => ({
        p1: c,
        p2: player2Choices[i],
        result: getRoundResult(c, player2Choices[i]),
    }));

    const cardStyle: React.CSSProperties = {
        background: "#1a2235",
        borderRadius: forCapture ? "16px" : "12px",
        overflow: "hidden",
        fontFamily: "Inter, system-ui, sans-serif",
        width: forCapture ? "600px" : "100%",
        maxWidth: forCapture ? "600px" : "560px",
    };

    return (
        <div style={cardStyle}>
            {/* Rainbow top bar */}
            <div
                style={{
                    height: "5px",
                    background: "linear-gradient(to right, #427cb5 0%, #efaf03 33%, #ed4c46 66%, #34c069 100%)",
                }}
            />

            {/* Content */}
            <div style={{ padding: forCapture ? "28px 32px 24px" : "24px 28px 20px" }}>
                {/* Top row: outcome + branding */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: forCapture ? "28px" : "24px" }}>{outcomeEmoji}</span>
                        <span
                            style={{
                                color: outcomeColor,
                                fontSize: forCapture ? "22px" : "18px",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {outcomeText}
                        </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ color: "#4a5568", fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                            rps-game.online
                        </div>
                        <div style={{ color: "#374151", fontSize: "10px", marginTop: "2px" }}>{date}</div>
                    </div>
                </div>

                {/* Score row */}
                <div
                    style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "10px",
                        padding: forCapture ? "16px 24px" : "14px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                    }}
                >
                    <div style={{ textAlign: "center", flex: 1 }}>
                        <div style={{ color: p1NameColor, fontSize: "13px", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.02em" }}>
                            {player1Name}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Player</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "0 20px",
                        }}
                    >
                        <span style={{ color: "#ffffff", fontSize: forCapture ? "44px" : "36px", fontWeight: 800, lineHeight: 1 }}>
                            {player1Wins}
                        </span>
                        <span style={{ color: "#4a5568", fontSize: forCapture ? "28px" : "22px", fontWeight: 300 }}>:</span>
                        <span style={{ color: "#ffffff", fontSize: forCapture ? "44px" : "36px", fontWeight: 800, lineHeight: 1 }}>
                            {player2Wins}
                        </span>
                    </div>
                    <div style={{ textAlign: "center", flex: 1 }}>
                        <div style={{ color: p2NameColor, fontSize: "13px", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.02em" }}>
                            {player2Name}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                            {data.mode === "single" ? "Bot" : "Player"}
                        </div>
                    </div>
                </div>

                {/* Rounds */}
                {rounds.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {rounds.map((round, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                                }}
                            >
                                <span style={{ color: "#6b7280", fontSize: "11px", width: "56px", letterSpacing: "0.05em" }}>
                                    Round {i + 1}
                                </span>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, justifyContent: "center" }}>
                                    <span style={{ fontSize: forCapture ? "20px" : "18px" }}>{CHOICE_EMOJI[round.p1] ?? "?"}</span>
                                    <span
                                        style={{
                                            color: round.result.color,
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            width: "16px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {round.result.icon}
                                    </span>
                                    <span style={{ fontSize: forCapture ? "20px" : "18px" }}>{CHOICE_EMOJI[round.p2] ?? "?"}</span>
                                </div>
                                <span style={{ width: "56px" }} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;

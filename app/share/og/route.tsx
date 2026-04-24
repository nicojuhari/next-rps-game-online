import { ImageResponse } from "next/og";
import { decodeCertificate, CHOICE_EMOJI } from "@/lib/certificate";
import { compareChoices } from "@/lib/game-utils";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const data = request.nextUrl.searchParams.get("data") || "";
    const cert = decodeCertificate(data);

    if (!cert) {
        return new Response(null, { status: 302, headers: { Location: "https://rps-game.online/og_rps.jpg" } });
    }

    const { player1Name, player2Name, player1Wins, player2Wins, player1Choices, player2Choices, winner } = cert;

    const outcomeText =
        winner === "player1" ? `${player1Name} Wins!` : winner === "player2" ? `${player2Name} Wins!` : "It's a Draw!";
    const outcomeColor = winner === "draw" ? "#efaf03" : "#34c069";

    const p1NameColor = winner === "player1" ? "#34c069" : winner === "player2" ? "#ed4c46" : "#efaf03";
    const p2NameColor = winner === "player2" ? "#34c069" : winner === "player1" ? "#ed4c46" : "#efaf03";

    const rounds = player1Choices.slice(0, 3).map((c, i) => {
        const r = compareChoices(c, player2Choices[i]);
        return {
            p1: CHOICE_EMOJI[c] ?? "?",
            p2: CHOICE_EMOJI[player2Choices[i]] ?? "?",
            icon: r === 1 ? "✓" : r === 2 ? "✗" : "=",
            color: r === 1 ? "#34c069" : r === 2 ? "#ed4c46" : "#efaf03",
        };
    });

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#1a2235",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "sans-serif",
                    padding: "0",
                    overflow: "hidden",
                }}
            >
                {/* Rainbow bar */}
                <div
                    style={{
                        height: "8px",
                        background: "linear-gradient(to right, #427cb5 0%, #efaf03 33%, #ed4c46 66%, #34c069 100%)",
                        flexShrink: 0,
                    }}
                />

                <div style={{ display: "flex", flex: 1, padding: "60px 80px", gap: "80px", alignItems: "center" }}>
                    {/* Left: outcome + score */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "32px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <span style={{ fontSize: "48px" }}>{winner === "player1" ? "🏆" : winner === "player2" ? "😞" : "🤝"}</span>
                            <span style={{ color: outcomeColor, fontSize: "48px", fontWeight: 800, letterSpacing: "-1px" }}>
                                {outcomeText}
                            </span>
                        </div>

                        {/* Score */}
                        <div
                            style={{
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: "16px",
                                padding: "28px 40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                                <span style={{ color: p1NameColor, fontSize: "22px", fontWeight: 700 }}>{player1Name}</span>
                                <span style={{ color: "#6b7280", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px" }}>Player</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <span style={{ color: "#ffffff", fontSize: "88px", fontWeight: 900, lineHeight: 1 }}>{player1Wins}</span>
                                <span style={{ color: "#4a5568", fontSize: "48px", fontWeight: 300 }}>:</span>
                                <span style={{ color: "#ffffff", fontSize: "88px", fontWeight: 900, lineHeight: 1 }}>{player2Wins}</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                                <span style={{ color: p2NameColor, fontSize: "22px", fontWeight: 700 }}>{player2Name}</span>
                                <span style={{ color: "#6b7280", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                    {cert.mode === "single" ? "Bot" : "Player"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: rounds + branding */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "280px" }}>
                        {rounds.map((r, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background: "rgba(255,255,255,0.04)",
                                    borderRadius: "10px",
                                    padding: "14px 20px",
                                }}
                            >
                                <span style={{ color: "#6b7280", fontSize: "13px" }}>Round {i + 1}</span>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span style={{ fontSize: "28px" }}>{r.p1}</span>
                                    <span style={{ color: r.color, fontWeight: 800, fontSize: "18px" }}>{r.icon}</span>
                                    <span style={{ fontSize: "28px" }}>{r.p2}</span>
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <span style={{ color: "#4a5568", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
                                rps-game.online
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}

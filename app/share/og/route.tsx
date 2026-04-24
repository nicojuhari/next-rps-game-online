import { ImageResponse } from "next/og";
import { decodeCertificate } from "@/lib/certificate";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const data = request.nextUrl.searchParams.get("data") || "";
    const cert = decodeCertificate(data);

    if (!cert) {
        return new Response(null, { status: 302, headers: { Location: "https://rps-game.online/og_rps.jpg" } });
    }

    const { player1Name, player2Name, player1SessionWins, player2SessionWins, winner, winnerName } = cert;

    const displayName = winnerName || player1Name;
    const outcomeText = winner === "player1" ? `${displayName} Wins!` : winner === "player2" ? `${player2Name} Wins!` : "It's a Draw!";
    const outcomeColor = winner === "draw" ? "#efaf03" : "#34c069";

    const p1NameColor = winner === "player1" ? "#34c069" : winner === "player2" ? "#ed4c46" : "#efaf03";
    const p2NameColor = winner === "player2" ? "#34c069" : winner === "player1" ? "#ed4c46" : "#efaf03";

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
                    overflow: "hidden",
                }}
            >
                {/* Rainbow bar */}
                <div
                    style={{
                        height: "10px",
                        background: "linear-gradient(to right, #427cb5 0%, #efaf03 33%, #ed4c46 66%, #34c069 100%)",
                        flexShrink: 0,
                    }}
                />

                <div style={{ display: "flex", flex: 1, padding: "60px 80px", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Left: outcome + score */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "32px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <span style={{ fontSize: "52px" }}>{winner === "player1" ? "🏆" : winner === "player2" ? "😞" : "🤝"}</span>
                            <span style={{ color: outcomeColor, fontSize: "52px", fontWeight: 800, letterSpacing: "-1px" }}>
                                {outcomeText}
                            </span>
                        </div>

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
                                <span style={{ color: p1NameColor, fontSize: "24px", fontWeight: 700 }}>{player1Name}</span>
                                <span style={{ color: "#6b7280", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px" }}>Player</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <span style={{ color: "#ffffff", fontSize: "96px", fontWeight: 900, lineHeight: 1 }}>{player1SessionWins}</span>
                                <span style={{ color: "#4a5568", fontSize: "48px", fontWeight: 300 }}>:</span>
                                <span style={{ color: "#ffffff", fontSize: "96px", fontWeight: 900, lineHeight: 1 }}>{player2SessionWins}</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                                <span style={{ color: p2NameColor, fontSize: "24px", fontWeight: 700 }}>{player2Name}</span>
                                <span style={{ color: "#6b7280", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                    {cert.mode === "single" ? "Bot" : "Player"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: branding */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", paddingLeft: "60px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <span style={{ fontSize: "52px", letterSpacing: "8px" }}>🪨📃✂️</span>
                            <span style={{ color: "#4a5568", fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "8px" }}>
                                rps-game.online
                            </span>
                        </div>
                        {cert.stake && (
                            <p
                                style={{
                                    color: "#9ca3af",
                                    fontSize: "16px",
                                    fontStyle: "italic",
                                    textAlign: "right",
                                    maxWidth: "260px",
                                    lineHeight: 1.5,
                                }}
                            >
                                &ldquo;{cert.stake}&rdquo;
                            </p>
                        )}
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}

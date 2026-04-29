import { CertificateData, getCertText } from "@/lib/certificate";

interface CertificateCardProps {
    data: CertificateData;
}

export const CARD_W = 720;
export const CARD_H = 470;

// Inline RPS SVG logo - required for html-to-image capture (no external fetch)
const RpsLogo = () => (
    <svg
        width="118"
        height="59"
        viewBox="0 150 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", flexShrink: 0 }}
    >
        <path
            d="M23 428V160H128.566C148.772 160 166.018 163.62 180.302 170.861C194.674 178.015 205.605 188.178 213.095 201.352C220.673 214.438 224.463 229.835 224.463 247.545C224.463 265.342 220.63 280.653 212.965 293.477C205.301 306.213 194.195 315.985 179.649 322.79C165.191 329.593 147.683 332.996 127.128 332.996H56.4463V287.457H117.982C128.783 287.457 137.755 285.974 144.896 283.008C152.038 280.041 157.352 275.592 160.836 269.66C164.406 263.728 166.192 256.356 166.192 247.545C166.192 238.647 164.406 231.144 160.836 225.037C157.352 218.93 151.995 214.307 144.766 211.166C137.623 207.938 128.608 206.324 117.721 206.324H79.5713V428H23ZM167.499 306.039L234 428H171.548L106.485 306.039H167.499Z"
            fill="#427CB5"
        />
        <path
            d="M198 428V160H303.847C324.195 160 341.531 163.882 355.854 171.646C370.175 179.324 381.092 190.01 388.602 203.707C396.2 217.316 400 233.02 400 250.816C400 268.613 396.157 284.317 388.472 297.926C380.787 311.536 369.651 322.135 355.067 329.725C340.57 337.315 323.016 341.109 302.406 341.109H234.942V295.701H293.235C304.152 295.701 313.148 293.825 320.221 290.074C327.383 286.236 332.711 280.957 336.204 274.24C339.783 267.436 341.574 259.628 341.574 250.816C341.574 241.918 339.783 234.154 336.204 227.523C332.711 220.806 327.383 215.615 320.221 211.951C313.061 208.2 303.978 206.324 292.974 206.324H254.722V428H198Z"
            fill="#EFAF03"
        />
        <path
            d="M519.027 245.606C517.98 235.067 513.488 226.881 505.548 221.045C497.609 215.21 486.834 212.292 473.225 212.292C463.977 212.292 456.169 213.599 449.8 216.212C443.431 218.737 438.546 222.265 435.143 226.793C431.828 231.322 430.17 236.461 430.17 242.209C429.996 246.999 431 251.18 433.18 254.751C435.449 258.322 438.546 261.414 442.471 264.026C446.397 266.552 450.934 268.773 456.082 270.689C461.229 272.518 466.725 274.086 472.57 275.392L496.649 281.14C508.34 283.753 519.071 287.237 528.841 291.592C538.613 295.947 547.075 301.303 554.23 307.66C561.384 314.018 566.924 321.509 570.85 330.131C574.863 338.754 576.913 348.639 577 359.787C576.913 376.161 572.725 390.357 564.437 402.376C556.237 414.308 544.372 423.584 528.841 430.202C513.399 436.734 494.773 440 472.962 440C451.327 440 432.482 436.691 416.43 430.072C400.465 423.452 387.988 413.654 379.002 400.678C370.104 387.613 365.436 371.458 365 352.21H419.832C420.443 361.18 423.016 368.67 427.553 374.679C432.176 380.602 438.327 385.088 446.004 388.135C453.769 391.097 462.537 392.578 472.309 392.578C481.905 392.578 490.237 391.184 497.304 388.398C504.458 385.61 509.998 381.734 513.924 376.77C517.85 371.806 519.813 366.101 519.813 359.656C519.813 353.646 518.024 348.595 514.447 344.501C510.957 340.408 505.81 336.924 499.005 334.05C492.287 331.177 484.042 328.563 474.272 326.211L445.089 318.895C422.493 313.409 404.652 304.83 391.565 293.159C378.479 281.489 371.98 265.768 372.067 245.998C371.98 229.798 376.297 215.645 385.023 203.539C393.834 191.433 405.916 181.983 421.271 175.19C436.626 168.397 454.075 165 473.617 165C493.508 165 510.87 168.397 525.702 175.19C540.62 181.983 552.224 191.433 560.511 203.539C568.799 215.645 573.074 229.668 573.336 245.606H519.027Z"
            fill="#ED4C46"
        />
    </svg>
);

const Medallion = () => (
    <div
        style={{
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #fcd34d 0%, #f59e0b 45%, #d97706 70%, #b45309 100%)",
            border: "4px solid #92400e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(180,83,9,0.45), inset 0 2px 4px rgba(255,255,255,0.35)",
            position: "relative",
            flexShrink: 0,
        }}
    >
        <div
            style={{
                position: "absolute",
                inset: "5px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.4)",
            }}
        />
        <span style={{ fontSize: "22px", lineHeight: 1, position: "relative" }}>🏆</span>
        <span
            style={{
                fontSize: "6.5px",
                fontWeight: 900,
                color: "#431407",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "3px",
                position: "relative",
            }}
        >
            WINNER
        </span>
    </div>
);

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
                background: "#fefcf9",
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
                    height: "8px",
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
                    justifyContent: "space-between",
                    padding: "18px 64px 14px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background watermark */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "240px",
                        fontWeight: 900,
                        color: "rgba(66, 124, 181, 0.055)",
                        letterSpacing: "-8px",
                        fontFamily: "Georgia, serif",
                        userSelect: "none",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        lineHeight: 1,
                    }}
                >
                    RPS
                </div>

                {/* Header block */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                    <RpsLogo />
                    <h1
                        style={{
                            fontSize: "42px",
                            fontWeight: 900,
                            color: "#111827",
                            letterSpacing: "6px",
                            textTransform: "uppercase",
                            margin: "6px 0 4px 0",
                            fontFamily: "Georgia, serif",
                            lineHeight: 1,
                        }}
                    >
                        Certificate
                    </h1>
                    <p
                        style={{
                            fontSize: "12px",
                            letterSpacing: "5px",
                            color: "#7c3aed",
                            textTransform: "uppercase",
                            margin: 0,
                        }}
                    >
                        {title}
                    </p>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "linear-gradient(to right, transparent, #d1d5db 20%, #d1d5db 80%, transparent)",
                        margin: "2px 0",
                    }}
                />

                {/* Award section */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "5px", fontStyle: "italic" }}>Proudly awarded to</p>
                    <p
                        style={{
                            fontSize: "34px",
                            fontWeight: 800,
                            fontStyle: "italic",
                            color: "#b45309",
                            margin: "0 0 8px 0",
                            lineHeight: 1.15,
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        {displayName}
                    </p>
                    <div
                        style={{
                            width: "42%",
                            height: "2px",
                            background: "linear-gradient(to right, transparent, #d97706, transparent)",
                        }}
                    />
                </div>

                {/* Body text */}
                <p
                    style={{
                        fontSize: "11.5px",
                        color: "#4b5563",
                        lineHeight: 1.7,
                        maxWidth: "490px",
                        margin: "0",
                    }}
                >
                    {body}
                </p>

                {/* Footer divider */}
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "linear-gradient(to right, transparent, #d1d5db 20%, #d1d5db 80%, transparent)",
                        margin: "2px 0 0",
                    }}
                />

                {/* Footer row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop: "6px",
                    }}
                >
                    {/* Date + URL */}
                    <div style={{ textAlign: "center", minWidth: "110px" }}>
                        <p
                            style={{
                                fontSize: "8.5px",
                                color: "#427cb5",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                margin: "0 0 4px 0",
                                fontFamily: "Georgia, serif",
                            }}
                        >
                            rps-game.online
                        </p>
                        <div style={{ width: "110px", height: "1px", background: "#9ca3af", marginBottom: "4px" }} />
                        <p style={{ fontSize: "10px", color: "#374151", margin: 0 }}>{date}</p>
                        <p
                            style={{
                                fontSize: "8px",
                                color: "#9ca3af",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                margin: "2px 0 0",
                            }}
                        >
                            Date
                        </p>
                    </div>

                    <Medallion />

                    {/* Score */}
                    <div style={{ textAlign: "center", minWidth: "110px" }}>
                        <div style={{ width: "110px", height: "1px", background: "#9ca3af", marginBottom: "4px" }} />
                        <p style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                            {player1SessionWins} &ndash; {player2SessionWins}
                        </p>
                        <p
                            style={{
                                fontSize: "8px",
                                color: "#9ca3af",
                                letterSpacing: "1.5px",
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
                    height: "8px",
                    background: "linear-gradient(to right, #34c069 0%, #ed4c46 33%, #efaf03 66%, #427cb5 100%)",
                    flexShrink: 0,
                }}
            />
        </div>
    );
};

export default CertificateCard;

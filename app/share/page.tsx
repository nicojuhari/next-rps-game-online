import Link from "next/link";
import CertificateCard from "@/components/CertificateCard";
import { decodeCertificate } from "@/lib/certificate";
import { createMetadata } from "@/lib/metadata";

const SITE_URL = "https://rps-game.online";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ data?: string }> }) {
    const { data } = await searchParams;
    const cert = decodeCertificate(data || "");
    if (!cert) {
        return createMetadata({ title: "Game Certificate — Rock Paper Scissors Online" });
    }
    const winnerName =
        cert.winner === "player1" ? cert.player1Name : cert.winner === "player2" ? cert.player2Name : "Draw";
    const scoreStr = `${cert.player1SessionWins}:${cert.player2SessionWins}`;
    const ogImageUrl = `${SITE_URL}/share/og?data=${data}`;

    return createMetadata({
        title: `${cert.player1Name} vs ${cert.player2Name} — Rock Paper Scissors`,
        description: `${winnerName} wins ${scoreStr}! Play Rock Paper Scissors free at rps-game.online`,
        canonical: `/share`,
        openGraph: {
            title: `${cert.player1Name} vs ${cert.player2Name} — Rock Paper Scissors`,
            description: `${winnerName} wins ${scoreStr}! Play Rock Paper Scissors free at rps-game.online`,
            images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Game Certificate" }],
        },
    });
}

export default async function SharePage({ searchParams }: { searchParams: Promise<{ data?: string }> }) {
    const { data } = await searchParams;
    const cert = decodeCertificate(data || "");

    return (
        <div className="flex flex-col items-center py-12 gap-8">
            {cert ? (
                <>
                    <div className="w-full max-w-lg">
                        <CertificateCard data={cert} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/" className="btn btn-outline text-center">
                            Play Now →
                        </Link>
                        <Link href="/two-players" className="btn btn-cta-green text-center">
                            Challenge a Friend →
                        </Link>
                    </div>
                </>
            ) : (
                <div className="text-center py-20">
                    <p className="text-2xl mb-2">🤔</p>
                    <p className="text-gray-600 font-medium">This certificate link is invalid or has expired.</p>
                    <Link href="/" className="mt-6 inline-block text-blue-500 underline underline-offset-2">
                        Play a game
                    </Link>
                </div>
            )}
        </div>
    );
}

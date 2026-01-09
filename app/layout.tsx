import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
    title: "Play Rock Paper Scissors Online | FREE Multiplayer Game",
    description:
        "Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game. No downloads - just click and play!",
    canonical: "/",
    openGraph: {
        title: "Play Rock Paper Scissors Online | FREE Multiplayer Game",
        description: "Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game.",
    },
    twitter: {
        title: "Play Rock Paper Scissors Online | FREE Multiplayer Game",
        description: "Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game.",
    },
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isProduction = process.env.NODE_ENV === "production";

    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="G-DmsXHjqgYIZfoeMtgM5iLhal2sV3E-IBpjR7G8zhg" />
                <meta name="apple-mobile-web-app-title" content="RPS" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["WebApplication", "GameApplication", "EntertainmentApplication"],
                            name: "Rock Paper Scissors Online",
                            url: "https://rps-game.online",
                            description:
                                "A free, private, multiplayer Rock Paper Scissors game. Create instant rooms to play with friends or challenge the computer. No signup required.",
                            applicationCategory: "Game",
                            genre: "Family Friendly, Casual, Strategy",
                            operatingSystem: "Any",
                            gamePlatform: "Web Browser",
                            playMode: "MultiPlayer",
                            author: {
                                "@type": "Person",
                                name: "Nick",
                                url: "https://nicojuhari.com",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "RPS-Game.Online",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://rps-game.online/rock-paper-scissors-logo.svg",
                                },
                            },
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                                availability: "https://schema.org/InStock",
                                category: "free",
                            },
                            screenshot: "https://rps-game.online/og_rps.jpg",
                            featureList: "Instant Private Rooms, No Signup Required, 128-bit Encryption for Fair Play, Mobile Compatible",
                            isAccessibleForFree: true,
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                <Header />
                <main className="flex flex-col min-h-screen container">{children}</main>
                <Footer />
                {/* Simple Analytics - Only in production */}
                {isProduction && (
                    <Script
                        src="https://scripts.simpleanalyticscdn.com/latest.js"
                        strategy="afterInteractive"
                        async
                        data-collect-dnt="true"
                    />
                )}
            </body>
        </html>
    );
}

import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
    title: "Rock Paper Scissors Online - Play Free vs Computer | No Signup",
    description:
        "Play Rock Paper Scissors online for free. Challenge the computer instantly - no download, no account required. Best-of-3 rounds, works on all devices.",
    canonical: "/",
    openGraph: {
        title: "Rock Paper Scissors Online - Play Free vs Computer",
        description: "Play Rock Paper Scissors online for free. Challenge the computer instantly - no download, no account required.",
    },
    twitter: {
        title: "Rock Paper Scissors Online - Play Free vs Computer",
        description: "Play Rock Paper Scissors online for free. No download, no account required.",
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
                            "@type": "VideoGame",
                            name: "Rock Paper Scissors Online",
                            url: "https://rps-game.online",
                            description:
                                "Play Rock Paper Scissors online for free. Challenge the computer or play real-time multiplayer with friends. No download, no signup required.",
                            applicationCategory: "Game",
                            genre: "Casual",
                            operatingSystem: "Any",
                            gamePlatform: "Web Browser",
                            playMode: ["SinglePlayer", "MultiPlayer"],
                            author: {
                                "@type": "Person",
                                name: "Nick",
                                url: "https://nicojuhari.com",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Rock Paper Scissors Online",
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
                            featureList:
                                "Single-player vs Computer, Real-time Multiplayer, Instant Private Rooms, No Signup Required, Mobile Compatible",
                            isAccessibleForFree: true,
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                <Header />
                <main className="flex flex-col min-h-screen container">{children}</main>
                <Footer />
                {/* Google AdSense - Only in production */}
                {isProduction && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
                    <Script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
                        crossOrigin="anonymous"
                        strategy="afterInteractive"
                    />
                )}
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

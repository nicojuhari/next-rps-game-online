import { Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    const messages = await getMessages();
    const tJsonLd = await getTranslations({ locale, namespace: "jsonLd" });
    const isProduction = process.env.NODE_ENV === "production";

    const videoGameJsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: tJsonLd("videoGame.name"),
        url: "https://rps-game.online",
        description: tJsonLd("videoGame.description"),
        applicationCategory: "Game",
        genre: "Casual",
        operatingSystem: "Any",
        gamePlatform: "Web Browser",
        playMode: ["SinglePlayer", "MultiPlayer"],
        author: { "@type": "Person", name: "Nick", url: "https://nicojuhari.com" },
        publisher: {
            "@type": "Organization",
            name: "Rock Paper Scissors Online",
            logo: { "@type": "ImageObject", url: "https://rps-game.online/rock-paper-scissors-logo.svg" },
        },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", category: "free" },
        screenshot: "https://rps-game.online/og_rps.jpg",
        featureList: tJsonLd("videoGame.featureList"),
        isAccessibleForFree: true,
    };

    return (
        <html lang={locale}>
            <head>
                <meta name="google-site-verification" content="G-DmsXHjqgYIZfoeMtgM5iLhal2sV3E-IBpjR7G8zhg" />
                <meta name="apple-mobile-web-app-title" content="RPS" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }} />
            </head>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main className="flex flex-col min-h-screen container">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
                {isProduction && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
                    <Script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
                        crossOrigin="anonymous"
                        strategy="afterInteractive"
                    />
                )}
                {isProduction && (
                    <Script src="https://scripts.simpleanalyticscdn.com/latest.js" strategy="afterInteractive" async data-collect-dnt="true" />
                )}
            </body>
        </html>
    );
}

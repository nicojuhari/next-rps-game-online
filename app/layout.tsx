import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/contexts/FirebaseContext";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
  title: "Play Rock Paper Scissors Online | FREE Multiplayer Game",
  description: "Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game. No downloads - just click and play!",
  canonical: "/",
  openGraph: {
    title: 'Play Rock Paper Scissors Online | FREE Multiplayer Game',
    description: 'Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game.',
  },
  twitter: {
    title: 'Play Rock Paper Scissors Online | FREE Multiplayer Game',
    description: 'Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game.',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="RPS" />
      </head>
      <body className={inter.className}>
        <FirebaseProvider>
          <Header />
          <main className="flex flex-col min-h-screen container">{children}</main>
          <Footer />
        </FirebaseProvider>
        
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

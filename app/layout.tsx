import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/contexts/FirebaseContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Play Rock Paper Scissors Online - FREE",
  description: "Play Rock Paper Scissors Online for free! Challenge friends and family in this fun and fast multiplayer RPS game. No downloads - just click and play!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </body>
    </html>
  );
}

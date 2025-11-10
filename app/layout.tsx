import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/contexts/FirebaseContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Play Rock Paper Scissors Online - FREE",
  description: "Play Rock Paper Scissors Online with your friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

import { Suspense } from "react";
import TwoPlayersContent from "@/components/TwoPlayersContent";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { FirebaseProvider } from "@/contexts/FirebaseContext";

export const metadata = createMetadata({
    title: "Rock Paper Scissors Multiplayer - Play Online with Friends",
    description:
        "Challenge a friend to rock paper scissors online. Create a free private room, share the link, and play real-time 1v1 RPS. No signup, no download.",
    canonical: "/two-players",
    keywords: [
        "rock paper scissors multiplayer",
        "rock paper scissors online with friends",
        "rock paper scissors 1v1",
        "two player rps",
        "play rps online",
    ],
    openGraph: {
        title: "Rock Paper Scissors Multiplayer - Play Online with Friends",
        description:
            "Challenge a friend to rock paper scissors online. Create a free private room, share the link, and play real-time 1v1 RPS. No signup, no download.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rock Paper Scissors Multiplayer - Play Online with Friends",
        description: "Challenge a friend to rock paper scissors online. Free private room, real-time 1v1, no signup.",
    },
});

const TwoPlayers = () => {
    return (
        <Suspense
            fallback={
                <div className="py-8">
                    <h1 className="text-xl mb-4 text-center">Rock Paper Scissors Multiplayer</h1>
                    <div className="flex justify-center">
                        <Image src="/loading.svg" loading="eager" alt="Loading" width={40} height={40} className="mx-auto my-24" />
                    </div>
                </div>
            }
        >
            <FirebaseProvider>
                <TwoPlayersContent />
            </FirebaseProvider>
        </Suspense>
    );
};

export default TwoPlayers;

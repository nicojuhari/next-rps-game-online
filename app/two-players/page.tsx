import { Suspense } from 'react';
import TwoPlayersContent from '@/components/TwoPlayersContent';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { FirebaseProvider } from '@/contexts/FirebaseContext';

export const metadata = createMetadata({
  title: "Two Players - Rock Paper Scissors Online Multiplayer",
  description: "Play Rock Paper Scissors with friends online! Create or join a game room and challenge your friends in real-time multiplayer RPS battles.",
  canonical: "/two-players",
  keywords: ["multiplayer rock paper scissors", "two players", "online multiplayer", "friends game", "RPS multiplayer"],
  openGraph: {
    title: "Two Players - Rock Paper Scissors Online Multiplayer",
    description: "Play Rock Paper Scissors with friends online! Create or join a game room and challenge your friends in real-time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Players - Rock Paper Scissors Multiplayer",
    description: "Play Rock Paper Scissors with friends online! Create or join a game room.",
  },
});

const TwoPlayers = () => {
    return (
        <Suspense fallback={
            <div className="container py-8">
                <h1 className="text-xl font-bold mb-4 text-center">Rock Paper Scissors - 2 Players Game</h1>
                <div className="flex justify-center">
                   <Image src="/loading.svg" loading='eager' alt="Loading" width={40} height={40} className="mx-auto my-24" />
                </div>
            </div>
        }>
            <FirebaseProvider>
              <TwoPlayersContent />
            </FirebaseProvider>
        </Suspense>
    );
}
 
export default TwoPlayers;

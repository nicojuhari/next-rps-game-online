import { Suspense } from "react";
import TwoPlayersContent from "@/components/TwoPlayersContent";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { FirebaseProvider } from "@/contexts/FirebaseContext";

export const metadata = createMetadata({
    title: "Rock Paper Scissors with Friends Online - Free Real-Time Multiplayer | No Signup",
    description:
        "Challenge a friend to Rock Paper Scissors online in real time. Share a link, pick your moves, see who wins. Free, no login, works on any device.",
    canonical: "/two-players",
    keywords: [
        "rock paper scissors online multiplayer",
        "rock paper scissors with friends online",
        "play rock paper scissors with friends online free",
        "rock paper scissors two player online",
        "rps multiplayer online",
        "rock paper scissors real-time online game",
        "rock paper scissors 1v1",
        "rock paper scissors no signup",
        "rock paper scissors decision maker online",
    ],
    openGraph: {
        title: "Rock Paper Scissors with Friends Online - Free Real-Time Multiplayer",
        description:
            "Challenge a friend to Rock Paper Scissors online in real time. Share a link, pick your moves, see who wins. Free, no login.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rock Paper Scissors with Friends Online - Free Real-Time Multiplayer",
        description: "Challenge a friend to Rock Paper Scissors online in real time. Free, no login, works on any device.",
    },
});

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is it free to play?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Completely free, no account needed, no download required.",
            },
        },
        {
            "@type": "Question",
            name: "Does my friend need to create an account?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Just share the link - no sign-up on either side.",
            },
        },
        {
            "@type": "Question",
            name: "Can we play from different devices?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. One player on desktop, the other on a phone - works on any device with a browser.",
            },
        },
        {
            "@type": "Question",
            name: "Can either player see the other's move before choosing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Both picks are hidden until both players are done. No peeking, no cheating.",
            },
        },
        {
            "@type": "Question",
            name: "What happens if I close the browser mid-game?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Your game room stays open. Reopen the link and continue where you left off.",
            },
        },
        {
            "@type": "Question",
            name: "Can I play on mobile?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The game works on any smartphone or tablet.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use Rock Paper Scissors to settle a decision with a friend?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Playing online is fairer than in person - both choices are locked in and revealed at the same time, so nobody can cheat by throwing late.",
            },
        },
    ],
};

const TwoPlayers = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Suspense
                fallback={
                    <div className="py-8">
                        <h1 className="text-xl mb-4 text-center">Play Rock Paper Scissors Online with Friends</h1>
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
        </>
    );
};

export default TwoPlayers;

import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "Is it free to play?", a: "Yes. Completely free, no account needed, no download required." },
    { q: "Does my friend need to create an account?", a: "No. Just share the link — no sign-up on either side." },
    { q: "Can we play from different devices?", a: "Yes. One player on desktop, the other on a phone — works on any device with a browser." },
    { q: "Can either player see the other's move before choosing?", a: "No. Both picks are hidden until both players are done. No peeking, no cheating." },
    { q: "What happens if I close the browser mid-game?", a: "Your game room stays open. Reopen the link and continue where you left off." },
    { q: "Can I play on mobile?", a: "Yes. The game works on any smartphone or tablet." },
    { q: "Can we use Rock Paper Scissors to settle a bet or make a decision?", a: "Yes. Playing online is fairer than in person — both choices are locked in before either player sees the result, so nobody can change their move at the last second. It is the same principle as a coin flip, except both players actively participate." },
    { q: "Can we play Rock Paper Scissors on a Zoom or video call?", a: "Yes. Open the game on your own device while on the call. Share the game link in the chat. Both players pick their move independently, and the result reveals at the same time — no need to count to three out loud." },
    { q: "Can we play Rock Paper Scissors long distance — in different countries?", a: "Yes. The game is browser-based and works anywhere with an internet connection. No app download or account is needed on either side. Share the link and play instantly, regardless of location." },
    { q: "How many games can we play in one session?", a: "As many as you want. The game room stays open and tracks cumulative scores across multiple games. No need to create a new link each time — just keep playing until one of you gives up." },
];

export function HowToPlay() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                How to Play Rock Paper Scissors Online with Friends
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Playing with a friend takes three steps — no account or app needed:</p>
                <ol className="pl-4 space-y-2 list-decimal">
                    <li>
                        <span className="font-semibold text-gray-700">Create a private room</span> — click &ldquo;Create a Game&rdquo; above or on the homepage. You get a private link right away.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Share the link</span> — send it to your friend via any messaging app. Works on any device.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Play</span> — both players pick Rock, Paper, or Scissors. Best of 3 rounds decides the winner.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Claim your certificate</span> — win more games than your opponent and grab a personalised winner&apos;s certificate. Download it or copy it to rub it in.
                    </li>
                </ol>
            </div>
        </>
    );
}

export function HowItWorks() {
    return (
        <>
            <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Rock Paper Scissors 1v1 — How It Works
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Both players pick at the same time and neither can see the other&apos;s choice before locking in. This makes every match genuinely fair — no last-second reactions, no disputes.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>The player who wins the most rounds wins the game. First to 2 wins takes it.</li>
                    <li>Scores are tracked across multiple games in the same room — no need to create a new link each time.</li>
                </ul>
            </div>
        </>
    );
}

export function WhySettle() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Why Settle It with Rock Paper Scissors?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Rock Paper Scissors gives both players an equal shot and takes seconds to play. People use it to decide:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Who pays for dinner</li>
                    <li>Who picks the movie or playlist</li>
                    <li>Who goes first in a board game</li>
                    <li>Any decision where you both want a fair shot</li>
                </ul>
                <p>Playing online means no arguments over who threw what. Both choices are locked in and revealed at the same time, every time.</p>
            </div>
        </>
    );
}

export function UseCases() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Rock Paper Scissors Works in More Situations Than You Think
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                <div>
                    <p className="font-semibold text-gray-700">Virtual Meetings &amp; Icebreakers</p>
                    <p className="mt-1">
                        Need a 60-second icebreaker for your team call? RPS works on any device, needs no setup, and gets everyone laughing in under a minute.{" "}
                        <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline">
                            How to use RPS as a virtual meeting icebreaker →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Long-Distance Couples &amp; Friends</p>
                    <p className="mt-1">
                        When you&apos;re deciding something together from different cities, a shared link beats counting to three over a video call every time.{" "}
                        <Link href="/blog/rock-paper-scissors-long-distance-couples" className="text-blue-600 hover:underline">
                            Rock Paper Scissors for long-distance →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Settling Any Decision</p>
                    <p className="mt-1">
                        Who picks the restaurant? Who goes first? Who calls the parents? Both players get an equal shot, and the result is instant and fair.
                    </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-gray-500">
                    Not ready to challenge someone?{" "}
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Practice solo against the computer →
                    </Link>
                </div>
            </div>
        </>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                {faqItems.map((item, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-gray-800">{item.q}</h3>
                        <p className="mt-1">{item.a}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

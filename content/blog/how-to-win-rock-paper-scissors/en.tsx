import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "How to Win Rock Paper Scissors: Psychology, Strategy, and the Research",
    description:
        "Most people treat Rock Paper Scissors as pure luck. Researchers disagree. Learn the behavioral patterns, statistics, and round-by-round strategy that give you a real edge.",
    publishedAt: "2026-04-30",
    slug: "how-to-win-rock-paper-scissors",
    readingTime: "8 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "Is paper the best move in rock paper scissors?",
        a: "Statistically, yes — paper beats rock, which is the most commonly thrown move at around 35% of the time. But against experienced players who know this tendency, scissors becomes the counter-play.",
    },
    {
        q: "What is the win-stay lose-shift strategy in rock paper scissors?",
        a: "Win-Stay, Lose-Shift is a behavioral pattern in which winners tend to repeat the move that just won, while losers tend to shift to the next move in the cycle (Rock → Paper → Scissors → Rock). It was confirmed in a 2014 Zhejiang University study of over 100,000 rounds.",
    },
    {
        q: "Does psychology really affect rock paper scissors?",
        a: "Yes. Peer-reviewed studies show humans deviate significantly from random play. People anchor to moves emotionally, react to wins and losses predictably, and follow patterns that skilled opponents can exploit.",
    },
    {
        q: "Can you win at rock paper scissors every time?",
        a: "Not every time — but consistently more than 33% against human opponents by reading behavioral patterns. Against a true random number generator (like a computer), no strategy applies.",
    },
    {
        q: "What is the best first move in rock paper scissors?",
        a: "Against any unfamiliar opponent, Paper is the statistically strongest opening move. Rock is the most commonly thrown first move — especially by beginners and male players — so Paper gives you the best expected value in round 1.",
    },
    {
        q: "Is rock paper scissors really random?",
        a: "Not when humans are playing. Research from Zhejiang University found that human players follow predictable patterns based on whether they just won or lost. A computer using a random number generator is truly random, but human opponents are not.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Rock Paper Scissors looks like a coin flip. But research from Zhejiang University, the MIT Technology Review, and behavioral psychologists proves it isn&apos;t. Human beings are predictable — and once you know the patterns, you can exploit them.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Is Rock Paper Scissors Actually Random?</h2>
            <p className="mb-4">
                The short answer: no — not when humans are playing.
            </p>
            <p className="mb-4">
                A truly random game gives every player exactly a 33.3% win rate with no way to improve it. But multiple studies show humans deviate significantly from random play. We anchor to certain moves, react emotionally to wins and losses, and broadcast our intentions through behavior.
            </p>
            <p className="mb-4">
                The most influential study came from Zhejiang University in 2014. Researchers Wang Zhijian, Bin Xu, and Hai-Jun Zhou analyzed 360 students playing 300 rounds of RPS each — over 100,000 individual games. They found clear, repeatable behavioral patterns that allowed skilled players to predict opponents&apos; next moves better than chance.
            </p>
            <p className="mb-4">
                The conclusion: Rock Paper Scissors is a game of psychology, not luck.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Statistics — What Move Do People Throw Most?</h2>
            <p className="mb-4">
                Understanding what the average player throws is the foundation of every strategy. Research data on throw frequency across large samples consistently shows:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Rock: ~35%</strong> — the most-thrown move, well above the expected 33.3%</li>
                <li><strong className="text-gray-800">Scissors: ~35%</strong> — nearly tied with Rock</li>
                <li><strong className="text-gray-800">Paper: ~29.6%</strong> — thrown least often</li>
            </ul>
            <p className="mb-4">
                The implication is direct: Paper is statistically the strongest opener. It beats Rock, the most common throw. And because Paper is thrown least often, your opponents are less likely to counter it in round 1.
            </p>
            <p className="mb-4">
                This also explains the famous 2005 Christie&apos;s vs Sotheby&apos;s auction. With $17.8 million on the line, Christie&apos;s asked an 11-year-old for advice. She reasoned: &ldquo;Everyone thinks Rock is the strong move. They&apos;ll play Paper to counter it. We play Scissors.&rdquo; Christie&apos;s won.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Win-Stay, Lose-Shift Pattern</h2>
            <p className="mb-4">
                The Zhejiang study&apos;s key finding was a behavioral pattern they named <strong className="text-gray-800">Win-Stay, Lose-Shift</strong>:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">If a player wins:</strong> they tend to repeat the move that just won</li>
                <li><strong className="text-gray-800">If a player loses:</strong> they tend to shift to the next move clockwise in the cycle: Rock → Paper → Scissors → Rock</li>
            </ul>
            <p className="mb-4">
                How to use this in practice: after every round, ask — did my opponent just win or lose?
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm space-y-2">
                <p className="font-semibold text-gray-800">If they just won (Win-Stay — expect them to repeat):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>They won with Rock → expect Rock again → you play Paper</li>
                    <li>They won with Paper → expect Paper again → you play Scissors</li>
                    <li>They won with Scissors → expect Scissors again → you play Rock</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">If they just lost (Lose-Shift — expect the next move in the cycle):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>They lost with Rock → expect Paper next → you play Scissors</li>
                    <li>They lost with Paper → expect Scissors next → you play Rock</li>
                    <li>They lost with Scissors → expect Rock next → you play Paper</li>
                </ul>
            </div>
            <p className="mb-4">
                This is not a guaranteed predictor — it&apos;s a probability shift. But across a long match, it moves your win rate meaningfully above 33%.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Beginner&apos;s Tell — Why Rock Is for Rookies</h2>
            <p className="mb-4">
                Research consistently shows that beginners, especially male players, open with Rock in round 1. The psychology is straightforward: a closed fist feels strong. Paper feels passive. Scissors feels risky.
            </p>
            <p className="mb-4">
                The practical rule: against any unfamiliar opponent, throw Paper first. You&apos;re statistically more likely to be facing a Rock than anything else.
            </p>
            <p className="mb-4">
                Experienced players know this — which creates a meta-game. Experts expect Paper, so they play Scissors. Very experienced players expect Scissors, so they return to Rock. But in practice, this recursive logic collapses into itself. Against a new opponent you have no read on, Paper remains the percentage play.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Double-Throw Signal</h2>
            <p className="mb-4">
                Players rarely throw the same move three times in a row. The psychological discomfort of obvious repetition makes it feel like a tell — even when it isn&apos;t technically cheating.
            </p>
            <p className="mb-4">
                In a best-of-3 match, this signal matters most in round 3. If your opponent has played Rock twice already, the probability they&apos;ll throw Rock a third time drops significantly. You can eliminate Rock from your prediction and use Win-Stay, Lose-Shift to narrow down whether they&apos;ll throw Paper or Scissors.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Reading Physical Tells (In-Person Only)</h2>
            <p className="mb-4">
                In face-to-face play, players often telegraph their move in the fraction of a second before they reveal:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>A tight, clenched fist forming early → likely Rock</li>
                <li>A loose, open hand → likely Paper</li>
                <li>Two fingers starting to extend before the throw → likely Scissors</li>
            </ul>
            <p className="mb-4">
                These tells only apply in person. Online, both players commit privately before either result is shown — there is no window to react to physical cues. This makes online play both fairer and more purely strategic: every decision depends entirely on reading behavioral patterns, not reflexes.
            </p>

            {/* Section 7 — Strategy Table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Best Strategy for Each Round in a Best-of-3</h2>
            <p className="mb-4">
                Combining the patterns above into a round-by-round guide:
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Round</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Situation</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Play</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Reason</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">Round 1</td>
                            <td className="p-3 border border-gray-200">vs unfamiliar opponent</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Paper</td>
                            <td className="p-3 border border-gray-200">Beats Rock, the most common opener</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Round 1</td>
                            <td className="p-3 border border-gray-200">vs experienced player</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Scissors</td>
                            <td className="p-3 border border-gray-200">Experts expect Paper and counter with Scissors — so you match them</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Round 2</td>
                            <td className="p-3 border border-gray-200">Opponent just won Round 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Counter their winning move</td>
                            <td className="p-3 border border-gray-200">Win-Stay: expect them to repeat</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Round 2</td>
                            <td className="p-3 border border-gray-200">Opponent just lost Round 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Counter their next cycle move</td>
                            <td className="p-3 border border-gray-200">Lose-Shift: Rock→Paper, Paper→Scissors, Scissors→Rock</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Round 3</td>
                            <td className="p-3 border border-gray-200">Opponent threw same move twice</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Eliminate that move</td>
                            <td className="p-3 border border-gray-200">Double-throw: they won&apos;t throw it a third time</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Round 3</td>
                            <td className="p-3 border border-gray-200">Must win, no clear read</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Paper</td>
                            <td className="p-3 border border-gray-200">Statistically strongest move under pressure</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Put this strategy to the test.</p>
                <p className="text-sm text-gray-600 mb-4">Challenge a friend — see if they can read your patterns before you read theirs.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Start 2-Player Game →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Practice vs Computer
                    </Link>
                </div>
            </div>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Can You Beat the Computer at Rock Paper Scissors?</h2>
            <p className="mb-4">
                The computer on this site picks its move using a random number generator — true, unbiased randomness. Rock, Paper, and Scissors each have exactly a 1 in 3 chance every round, with no memory of previous rounds and no behavioral patterns.
            </p>
            <p className="mb-4">
                This means strategy does not apply against the computer. There is no Win-Stay pattern to exploit, no beginner&apos;s tell to read. Every round is a fresh coin flip, and any streak you see is noise.
            </p>
            <p className="mb-4">
                But playing the computer is still useful for one thing: discovering patterns in your own play. If you notice yourself losing significantly more than 33% over many rounds, you&apos;ve found a habit a human opponent could exploit. Use the computer to find and eliminate your own tells before you take on a real person.
            </p>
            <p className="mb-4">
                The real test of strategy is multiplayer. Against a human, every pattern in this guide applies.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is paper the best move in rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Statistically, yes — paper beats rock, which is the most commonly thrown move at around 35% of the time. But against experienced players who know this, scissors is the expected counter-play, which can make rock safer.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What is the win-stay lose-shift strategy?</h3>
                    <p className="text-gray-600 text-sm">
                        A behavioral pattern in which winners tend to repeat the move that just won, while losers shift to the next move in the cycle (Rock → Paper → Scissors → Rock). Confirmed by Zhejiang University in 2014 across over 100,000 rounds.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Does psychology really affect rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes. Multiple peer-reviewed studies show humans deviate significantly from random play. People anchor to moves emotionally, react predictably to wins and losses, and create patterns that skilled opponents can read.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can you win at rock paper scissors every time?</h3>
                    <p className="text-gray-600 text-sm">
                        Not every time — but consistently above 33% against human opponents by reading behavioral patterns. Against a true random number generator (like this site&apos;s computer mode), no strategy applies.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What is the best first move in rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Against any unfamiliar opponent, Paper is the statistically strongest opening. Rock is the most commonly thrown first move — especially by beginners and male players — so Paper gives you the best expected outcome in round 1.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is rock paper scissors really random?</h3>
                    <p className="text-gray-600 text-sm">
                        Not when humans are playing. Research from Zhejiang University found that human players follow predictable patterns based on whether they just won or lost. A computer using a random number generator is truly random — human opponents are not.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">You&apos;ve read the strategy.</p>
                <p className="text-sm text-gray-500 mb-5">The only way to sharpen it is to play against someone who hasn&apos;t.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Challenge a Friend →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Practice vs Computer
                    </Link>
                </div>
            </div>

        </article>
    );
}

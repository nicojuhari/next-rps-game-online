import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Rock Paper Scissors vs Coin Flip: Which Is Fairer?",
    description:
        "Both are 50/50 in theory - but RPS and a coin flip differ in agency, variance, and cheat-resistance. Here's what the math and psychology say.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-vs-coin-flip",
    readingTime: "5 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "Is rock paper scissors truly 50/50?",
        a: "Against a fully random opponent, yes - each outcome has equal probability. Against a human, behavior is slightly predictable, so there's a small skill component. This doesn't make it less fair; it makes it more interesting.",
    },
    {
        q: "Is a coin flip more random than rock paper scissors?",
        a: "A physical coin flip is closer to true random. But rock paper scissors played best-of-3 reduces variance more than a single coin flip - so for settling disputes, RPS produces a more stable outcome.",
    },
    {
        q: "Can you cheat at online rock paper scissors?",
        a: "Not with a proper simultaneous-reveal system. Both players lock in their choice before either sees the result - there's no way to adjust your pick after seeing the other person's hand.",
    },
    {
        q: "What if both players know rock paper scissors strategy?",
        a: "Then it becomes a skill game rather than a luck game - which most people find more satisfying. If one player has significantly more RPS experience, a coin flip is the fairer option.",
    },
    {
        q: "What is a fair way to decide between two people?",
        a: "Both a coin flip and rock paper scissors are statistically fair (50/50). RPS adds agency and drama; a coin flip is faster and purely random. For remote decisions, online RPS with simultaneous reveal is the most cheat-resistant option.",
    },
    {
        q: "How do you fairly settle an argument online?",
        a: "Use an online RPS game with simultaneous reveal - one player creates a room, shares the link, both pick at the same time, result is instant. This avoids the problem of texting your move, where the second person to reveal can adjust.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                You need to settle something between two people. The options on the table: flip a coin or play rock paper scissors. Both
                feel fair. Both are fast. So which one actually is fairer - and does it matter? Here&apos;s what the math, psychology, and
                game theory say.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Short answer:</strong> Both are 50/50 in base probability. Rock paper scissors adds player agency, reduces
                    variance with best-of-3, and - when played online with simultaneous reveal - is more cheat-resistant than texting your
                    move. A coin flip is faster and closer to true random. Neither is "wrong." RPS is more engaging; coin flip is more
                    instant.
                </p>
            </div>

            {/* Section 1 - Coin flip case */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Case for Coin Flip</h2>
            <p className="mb-4">
                A coin flip has earned its reputation as the default decision tool for a reason. The probability is as clean as it gets: 50%
                heads, 50% tails, no skill gap, no advantage for either party. There&apos;s no way to strategize and no way to feel like you
                were outplayed - the outcome is pure chance, which most people accept as inherently neutral.
            </p>
            <p className="mb-4">
                It&apos;s also instant. One flip, one result, done in under five seconds. No setup, no explanation, no need for both parties
                to be paying attention at the same moment. You can do it alone and report the result. For high-stakes decisions where you
                want zero argument about fairness, a coin flip is hard to beat.
            </p>
            <p className="mb-4">
                The downside: it&apos;s passive. Both parties are bystanders waiting for physics to decide. Neither person has any agency
                over the outcome, which can make the result feel arbitrary even when it&apos;s statistically fair.
            </p>

            {/* Section 2 - RPS case */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Case for Rock Paper Scissors</h2>
            <p className="mb-4">
                In theory, rock paper scissors is also 50/50 against a random opponent - each of the three choices beats one option, loses
                to one option, and ties the third. The math is symmetric.
            </p>
            <p className="mb-4">But in practice, RPS has several advantages over a coin flip for settling disputes:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Agency:</strong> both players make an active choice. Even if the outcome is random, it
                    doesn&apos;t feel arbitrary - you played for it.
                </li>
                <li>
                    <strong className="text-gray-800">Lower variance:</strong> best-of-3 format means the result is more stable than a
                    single coin flip. One coin flip can go either way; best-of-3 RPS requires winning 2 out of 3 rounds.
                </li>
                <li>
                    <strong className="text-gray-800">Simultaneous reveal:</strong> when played correctly, neither player can see the
                    other&apos;s move before committing. No one can claim they &ldquo;would have picked differently&rdquo;.
                </li>
                <li>
                    <strong className="text-gray-800">More satisfying:</strong> the losing party chose their move - they can&apos;t blame
                    the physics of a coin. This makes the outcome easier to accept.
                </li>
            </ul>
            <p className="mb-4">
                The trade-off: RPS has a skill element against humans. Research shows that people have non-random tendencies - beginners
                throw rock more often, winners often repeat their last move, and losers often switch. If one player has studied{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    RPS strategy
                </Link>{" "}
                and the other hasn&apos;t, it&apos;s no longer truly 50/50.
            </p>

            {/* Section 3 - Comparison table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Fairness Comparison - Head to Head</h2>
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Factor</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Coin Flip</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Rock Paper Scissors</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Base probability</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Player agency</td>
                            <td className="p-3 border border-gray-200">None</td>
                            <td className="p-3 border border-gray-200">High</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Variance per decision</td>
                            <td className="p-3 border border-gray-200">Single flip</td>
                            <td className="p-3 border border-gray-200">Best-of-3 (lower variance)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Skill component</td>
                            <td className="p-3 border border-gray-200">None</td>
                            <td className="p-3 border border-gray-200">Small (vs humans)</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Cheating risk (in person)</td>
                            <td className="p-3 border border-gray-200">Low</td>
                            <td className="p-3 border border-gray-200">Low (simultaneous reveal)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Cheating risk (remote, texting)</td>
                            <td className="p-3 border border-gray-200">Low</td>
                            <td className="p-3 border border-gray-200 text-amber-700 font-medium">High - second to reveal can adjust</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Cheating risk (online, real-time)</td>
                            <td className="p-3 border border-gray-200">N/A</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">None - simultaneous reveal enforced</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Fun factor</td>
                            <td className="p-3 border border-gray-200">Low</td>
                            <td className="p-3 border border-gray-200">High</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Time to complete</td>
                            <td className="p-3 border border-gray-200">5 seconds</td>
                            <td className="p-3 border border-gray-200">30-60 seconds</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Need to settle something right now?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Share a link - both players pick simultaneously, result is instant. No account needed.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Settle It Now - Start a 2-Player Game →
                </CtaLink>
            </div>

            {/* Section 4 - When to coin flip */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">When to Use a Coin Flip</h2>
            <p className="mb-4">A coin flip is the right call when:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">You need an instant answer</strong> - no time for a 3-round match, just need a result
                    in 5 seconds.
                </li>
                <li>
                    <strong className="text-gray-800">Both parties want zero agency</strong> - sometimes people genuinely don&apos;t want
                    the weight of having chosen. A coin flip removes that entirely.
                </li>
                <li>
                    <strong className="text-gray-800">There&apos;s a skill gap</strong> - if one person knows RPS strategy and the other
                    doesn&apos;t, the game is no longer 50/50. A coin flip restores the level playing field.
                </li>
                <li>
                    <strong className="text-gray-800">You&apos;re alone and reporting the result</strong> - a coin flip is easier to do solo
                    and report honestly. RPS requires both parties present.
                </li>
            </ul>

            {/* Section 5 - When RPS is better */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">When Rock Paper Scissors Is Better</h2>
            <p className="mb-4">RPS is the stronger choice when:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">You want the outcome to feel earned</strong> - both parties chose their move. The
                    loser can&apos;t attribute the result to bad luck alone.
                </li>
                <li>
                    <strong className="text-gray-800">Variance matters</strong> - best-of-3 produces a more reliable outcome than a single
                    flip. For decisions where one-flip randomness feels too arbitrary, RPS gives a better sample size.
                </li>
                <li>
                    <strong className="text-gray-800">You want some drama</strong> - three rounds of buildup beats a single flip for
                    engagement. There&apos;s a reason sports use best-of-7, not coin flips.
                </li>
                <li>
                    <strong className="text-gray-800">You&apos;re doing it remotely</strong> - texting your RPS choice is broken (the second
                    person to reveal can cheat). An online tool with simultaneous reveal fixes this. A coin flip doesn&apos;t have this
                    problem - but it also isn&apos;t any fun.
                </li>
            </ul>

            {/* Section 6 - The remote problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Remote Problem - Why Online RPS Beats Online Coin Flip</h2>
            <p className="mb-4">
                The main failure mode of remote RPS is the reveal order problem. When you text &ldquo;1-2-3 go!&rdquo; or reveal on a video
                call, one person sees the other&apos;s choice before they&apos;ve committed to their own. A 200ms video delay is enough -
                the second player technically sees the first player&apos;s hand before locking in. This breaks the simultaneous reveal that
                makes RPS fair.
            </p>
            <p className="mb-4">
                Online coin flip tools (like tosstogether.app) solve the remote fairness problem - but a coin flip was never interesting to
                begin with.
            </p>
            <p className="mb-4">
                Online RPS with a real simultaneous-reveal system solves both. Both players lock in their choice privately before either
                result is shown. The reveal happens at the same time for both - structurally enforced, not just hoped for. The result: fair{" "}
                <em>and</em> engaging. No account, no app required.
            </p>

            {/* Section 7 - How to settle */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">How to Settle Any Dispute Online in Under 60 Seconds</h2>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Open the 2-player game and create a room</p>
                        <p className="text-sm text-gray-600 mt-0.5">No account needed - takes 5 seconds.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Share the link</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Send over text, WhatsApp, Discord - wherever. The other person opens it on any device.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Both players pick simultaneously</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Each locks in their choice privately. The result reveals only after both have submitted.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Winner wins, dispute settled</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Best-of-3 format. No arguments about who revealed first - neither could have.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    If you want to tilt the odds in your favor once you&apos;re playing:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        the strategy guide
                    </Link>{" "}
                    covers the behavioral tendencies that make human players predictable. Or brush up on the{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        official rules
                    </Link>{" "}
                    if you need a refresher before playing.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is rock paper scissors truly 50/50?</h3>
                    <p className="text-gray-600 text-sm">
                        Against a random opponent, yes. Against a human, there&apos;s a small skill component - people have non-random
                        tendencies. This doesn&apos;t make it less fair; it makes it more interesting.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is a coin flip more random than rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        A physical coin flip is closer to true random. But RPS best-of-3 reduces variance more than a single coin flip, so
                        for settling disputes it produces a more stable outcome.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can you cheat at online rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Not with a proper simultaneous-reveal system. Both picks are locked in before either player sees the result -
                        there&apos;s no way to adjust your choice after seeing the other person&apos;s.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What if both players know RPS strategy?</h3>
                    <p className="text-gray-600 text-sm">
                        Then it&apos;s a skill game rather than a luck game - which most people find more satisfying. If one player has
                        significantly more experience, use a coin flip instead to keep it 50/50.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What is a fair way to decide between two people?</h3>
                    <p className="text-gray-600 text-sm">
                        Both a coin flip and RPS are statistically fair (50/50). RPS adds agency and drama; a coin flip is faster and purely
                        random. For remote decisions, online RPS with simultaneous reveal is the most cheat-resistant option.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How do you fairly settle an argument online?</h3>
                    <p className="text-gray-600 text-sm">
                        Use an online RPS game with simultaneous reveal - one player creates a room, shares the link, both pick at the same
                        time. This avoids the texting problem where the second to reveal can see the first player&apos;s move and adjust.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Next time you need to decide something, skip the coin flip.</p>
                <p className="text-sm text-gray-500 mb-5">
                    Challenge the other person to a best-of-3 - it only takes 60 seconds and actually feels like you played for it.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Settle It Now - Start a 2-Player Game →
                </CtaLink>
            </div>
        </article>
    );
}

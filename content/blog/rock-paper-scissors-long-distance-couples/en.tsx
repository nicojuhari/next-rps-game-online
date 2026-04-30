import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Rock Paper Scissors for Long-Distance Couples",
    description:
        "Long-distance couples can play RPS online with simultaneous reveal - no app, no account, just share a link. Make it fair and fun.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-long-distance-couples",
    readingTime: "4 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "Can you play rock paper scissors long distance?",
        a: "Yes. One partner creates a game room and sends the link - the other opens it on any device, anywhere in the world. Both pick their move privately and the result reveals simultaneously. No app, no account, no download needed.",
    },
    {
        q: "How do you play rock paper scissors on a video call fairly?",
        a: "Counting to three on camera doesn't work - network lag means one player sees the other's hand a split-second early. A browser-based game fixes this: both moves are locked in before either player sees the result, making the reveal genuinely simultaneous.",
    },
    {
        q: "What free games can two people play online without downloading?",
        a: "Rock Paper Scissors is the fastest option - just open a browser, create a room, and share the link. No download, no account, playable on any phone or laptop.",
    },
    {
        q: "Do we both need accounts to play?",
        a: "No. No accounts, no email, no password. Open the link and play.",
    },
    {
        q: "What if we're in different countries or time zones?",
        a: "Works from anywhere with an internet connection - any browser, any device, any time zone. The game link works worldwide.",
    },
    {
        q: "Is there a way to play more than one round?",
        a: "Yes - each session is best-of-3. You can play as many sessions as you want and keep your own running score across the week.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                You&apos;re on a call with your partner. The moment calls for a friendly competition. Rock paper scissors is perfect -
                except counting &ldquo;1-2-3&rdquo; on video never works fairly. Network lag means someone always sees the other&apos;s hand
                a half-second early. Here&apos;s how to do it right: instant, fair, from anywhere, no app needed.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Why Rock Paper Scissors Is Perfect for Long-Distance Couples</h2>
            <p className="mb-4">
                Most online games for couples involve setup, downloads, or need both people on the same platform at the same time. Rock
                Paper Scissors needs none of that.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Instant:</strong> no app, no signup, no waiting. One partner creates a room, shares a
                    link, you&apos;re playing in under 60 seconds.
                </li>
                <li>
                    <strong className="text-gray-800">Zero pressure:</strong> if you lose at 11pm you can just blame bad luck and demand a
                    rematch.
                </li>
                <li>
                    <strong className="text-gray-800">Actually useful:</strong> use it to decide who picks tonight&apos;s movie, who texts
                    first tomorrow, or who plans the next visit.
                </li>
                <li>
                    <strong className="text-gray-800">Slightly competitive:</strong> creates a moment of drama and a clear winner - no
                    ambiguous &ldquo;you decide&rdquo; situation.
                </li>
                <li>
                    <strong className="text-gray-800">Works on any device:</strong> phone, tablet, laptop - your partner doesn&apos;t need
                    to install anything.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Problem With Playing on FaceTime or Video Call</h2>
            <p className="mb-4">
                The classic &ldquo;1-2-3 shoot&rdquo; on camera breaks down the moment there&apos;s any network lag - which is always. A
                200ms delay (invisible in normal conversation) is enough for the second player to glimpse the first player&apos;s hand
                before committing. The simultaneous reveal that makes RPS fair is physically impossible over video.
            </p>
            <p className="mb-4">
                A proper online game fixes this structurally. Both players lock in their choice privately. The result is revealed only after
                both have submitted - so there&apos;s no way to see the other&apos;s pick before choosing your own. Online RPS is actually{" "}
                <em>fairer</em> than in-person RPS for exactly this reason.
            </p>

            {/* Section 3 - How to play */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">How to Play Rock Paper Scissors Online With Your Partner</h2>
            <p className="mb-4">From idea to playing in under 60 seconds:</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Open the 2-player game and create a room</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Takes 5 seconds. No account needed - just click &ldquo;Create game&rdquo;.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Send the link to your partner</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Copy it from the browser and send over WhatsApp, iMessage, Discord, or wherever you chat.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Partner opens it on their device</p>
                        <p className="text-sm text-gray-600 mt-0.5">Works on any phone, tablet, or laptop - any browser, any country.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Both pick simultaneously</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Each player taps Rock, Paper, or Scissors privately. The reveal happens after both have committed - no peeking
                            possible. Best-of-3 format.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Send your partner the link right now.</p>
                <p className="text-sm text-gray-600 mb-4">
                    No account, no app - just share the link and settle who&apos;s in charge of tonight&apos;s plans.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Start a 2-Player Game →
                </CtaLink>
            </div>

            {/* Section 4 - Fun ways */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Fun Ways to Use Rock Paper Scissors in Your Long-Distance Relationship
            </h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">The Decision Game</h3>
            <p className="mb-4">
                Use best-of-3 to settle the small debates that don&apos;t need a debate: who texts first tomorrow, who picks the movie for
                your virtual date night, who books flights for the next visit. It&apos;s more fun than &ldquo;you decide&rdquo; and removes
                the &ldquo;no you decide&rdquo; loop entirely.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">The Dare Edition</h3>
            <p className="mb-4">
                Each round has a stake: loser shares an embarrassing photo, does a silly dance on camera, or sends a genuine compliment. A
                3-round game turns into 15 minutes of entertainment. Works best late-night when you both have nothing else to do and someone
                keeps demanding rematches.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">The Running Scoreboard</h3>
            <p className="mb-4">
                Keep a tally across multiple sessions. After 10 rounds or 2 weeks, the one with fewer wins owes something - a handwritten
                letter, a care package, planning the next date in full. The scoreboard gives you something to reference in conversation:
                &ldquo;you&apos;re only ahead because of that fluke round on Tuesday.&rdquo;
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">The Pre-Date Warmup</h3>
            <p className="mb-4">
                Before your virtual date night, play best-of-3 to decide who picks the activity - movie, game, show, or topic. It gets you
                both laughing and present before the actual date starts, and whoever loses can&apos;t complain about the choice later.
            </p>

            {/* Section 5 - Device info */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Can You Play on Any Device?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-1">Works on any device - no app, no account, just a link.</p>
                <p className="text-sm text-gray-600">
                    iOS and Android phones, any laptop, any tablet, any browser. Your partner doesn&apos;t need to install anything or
                    create an account. The link works worldwide, regardless of which country either of you is in.
                </p>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Want to get better at it? The{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        strategy guide
                    </Link>{" "}
                    covers the behavioral patterns that make human players predictable - useful when there&apos;s a scoreboard on the line.
                    Or if you prefer a fair game, check the{" "}
                    <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline font-medium">
                        icebreaker guide
                    </Link>{" "}
                    for running rounds with groups.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can you play rock paper scissors long distance?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes. One partner creates a game room and sends the link. The other opens it from any device, anywhere. Both pick
                        privately and the result reveals at the same time. No app, no account needed.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How do you play rock paper scissors on a video call fairly?</h3>
                    <p className="text-gray-600 text-sm">
                        Counting to three on camera doesn&apos;t work - lag means one player sees the other&apos;s move early. Use a
                        browser-based game instead: both moves are locked in before either player sees the result.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Do we both need accounts to play?</h3>
                    <p className="text-gray-600 text-sm">No. No email, no password, no account. Open the link and play.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What if we&apos;re in different countries?</h3>
                    <p className="text-gray-600 text-sm">
                        Works from anywhere with an internet connection - any country, any time zone, any device.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is there a way to play more than one round?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes - each session is best-of-3. Play as many sessions as you want and keep your own running score across the week.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What free games can two people play online without downloading?</h3>
                    <p className="text-gray-600 text-sm">
                        Rock Paper Scissors is the fastest option - open a browser, create a room, share the link. No download, no account,
                        plays on any phone or laptop.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ready to play?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Send your partner the link - no account, no app, just a game. Settle tonight&apos;s plans in one round.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Start a 2-Player Game →
                </CtaLink>
            </div>
        </article>
    );
}

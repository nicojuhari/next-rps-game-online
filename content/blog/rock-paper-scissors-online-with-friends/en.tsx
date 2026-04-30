import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Rock Paper Scissors Online With Friends - No Account",
    description:
        "Share a link, both pick at the same time, winner in 60 seconds. How to play rock paper scissors online with a friend - no app, no signup.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-online-with-friends",
    readingTime: "4 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "Do I need to create an account to play?",
        a: "No. The game is completely anonymous - no email, no password, no profile. Just open the link and play.",
    },
    {
        q: "How do I invite my friend?",
        a: "Open the 2-player game, copy the unique room link, and send it however you communicate - text, WhatsApp, Discord, email. When they open the link, you're connected.",
    },
    {
        q: "Is it free?",
        a: "Yes, always free to play. No subscription, no in-app purchases.",
    },
    {
        q: "How many rounds does a game last?",
        a: "Best of 3. The first player to win 2 rounds wins the match.",
    },
    {
        q: "Can I play on my phone?",
        a: "Yes. The game runs in any mobile browser on iOS and Android - no app download required.",
    },
    {
        q: "What if I lose my connection mid-game?",
        a: "The game room persists briefly. If you both reconnect to the same link, the game resumes from where you left off.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                You and a friend need to settle something. You&apos;re not in the same room. Texting &ldquo;rock paper scissors go!&rdquo;
                back and forth doesn&apos;t work - one of you always sees the other&apos;s choice before they&apos;ve committed.
                There&apos;s a better way: a real-time game with simultaneous reveal, no account needed, running in under 60 seconds.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Quick answer:</strong> To play rock paper scissors online with a friend - open the 2-player game, share the
                    unique room link with your friend, and both pick at the same time. The result reveals simultaneously. No account or
                    download needed.
                </p>
            </div>

            {/* Section 1 - The texting problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Problem With Texting Rock Paper Scissors</h2>
            <p className="mb-4">
                It sounds simple: send a message, count to three, both reveal. But in practice it always breaks down the same way. One
                person responds first, and the other - consciously or not - adjusts their pick. Even on a video call, a 200ms lag means the
                second player technically sees the first player&apos;s hand before they&apos;ve locked in. The fairness disappears the
                moment the reveal isn&apos;t simultaneous.
            </p>
            <p className="mb-4">
                The fix isn&apos;t to count faster or trust each other more - it&apos;s to use a system that structurally prevents either
                player from seeing the other&apos;s choice before committing. That&apos;s what a real-time online RPS game does.
            </p>

            {/* Section 2 - Step-by-step guide */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                How to Play Rock Paper Scissors Online With Friends - Step by Step
            </h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Step 1 - Open the 2-Player Game</h3>
            <p className="mb-4">
                Go to the{" "}
                <Link href="/two-players" className="text-blue-600 hover:underline">
                    2-player game
                </Link>
                . No account to create, no app to download, no email to verify. It runs in any browser on any device - desktop, mobile,
                tablet. Takes about five seconds to get to the game room.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Step 2 - Share the Link With Your Friend</h3>
            <p className="mb-4">
                When you open a game room, you get a unique URL. Copy it and send it to your friend - by text, WhatsApp, Discord, email,
                carrier pigeon, whatever you&apos;re already using to talk. They open it on their device, anywhere in the world, and
                you&apos;re connected. No shared password, no lobby code to coordinate.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Step 3 - Both Players Pick at the Same Time</h3>
            <p className="mb-4">
                Each player sees the same three choices: Rock, Paper, Scissors. You both lock in your pick privately - neither player can
                see the other&apos;s choice until both have submitted. No countdown to coordinate, no trust required. The system enforces
                the simultaneous reveal.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Step 4 - See Who Wins</h3>
            <p className="mb-4">
                Once both picks are in, the result is instant. You play best of 3 - first to win 2 rounds wins the match. The score updates
                in real time. No manual tracking, no &ldquo;wait, what was the score?&rdquo; moments. The dispute is settled, fairly, in
                under a minute.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ready to play right now?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Share a link - both players pick simultaneously, result is instant. No account needed.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Start 2-Player Game →
                </CtaLink>
            </div>

            {/* Section 3 - Why simultaneous reveal matters */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Why Simultaneous Reveal Matters</h2>
            <p className="mb-4">
                Rock paper scissors is a fair game exactly because neither player knows the other&apos;s choice in advance. The moment one
                player reveals first - even by a fraction of a second - the other player has information they shouldn&apos;t have. Research
                on human decision-making shows that people adjust their choices based on partial information even when they think
                they&apos;re playing fair.
            </p>
            <p className="mb-4">
                A simultaneous reveal system removes that entirely. Both picks are locked before either is shown. There&apos;s no way to
                react to what you haven&apos;t seen. This is the same principle behind sealed-bid auctions and blind voting - remove the
                information advantage and the outcome is genuinely fair. If you want to dig into how this affects strategy, the{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    strategy guide
                </Link>{" "}
                covers what actually makes RPS predictable against humans.
            </p>

            {/* Section 4 - Mobile */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Can You Play Rock Paper Scissors on Your Phone?</h2>
            <p className="mb-4">
                Yes. The game is browser-based and works on any mobile device - iPhone, Android, tablet. No app to download, no App Store
                permissions to approve. Open the link in Safari, Chrome, or any mobile browser and you&apos;re playing. Most people who use
                the 2-player mode do it from their phones, mid-conversation with their friend.
            </p>
            <p className="mb-4">
                The layout adjusts for mobile screens so the controls are easy to tap, not just click. Rock, Paper, Scissors - three
                buttons, one tap, done.
            </p>

            {/* Section 5 - Video calls */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Rock Paper Scissors on Zoom, FaceTime, or Discord</h2>
            <p className="mb-4">
                If you&apos;re already on a video call with someone, you can play RPS online at the same time - just open the game link in a
                separate tab while the call runs. Share the game link in the chat and both players click through.
            </p>
            <p className="mb-4">
                This is actually better than counting down on the video call. The video delay means whoever speaks &ldquo;go!&rdquo; and
                whoever reveals first are never perfectly synchronized. The online game removes that problem entirely - neither
                player&apos;s pick is visible until both have submitted, regardless of video lag.
            </p>
            <p className="mb-4">
                The same logic applies to Zoom, Teams, FaceTime, Google Meet - any video tool. The game runs in a browser tab, independently
                of whatever communication app you&apos;re using.
            </p>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Want to know the rules before you play?{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        The official rules
                    </Link>{" "}
                    cover every edge case, including the draw. Or if you want to decide who does something first - like who buys the next
                    round - read{" "}
                    <Link href="/blog/rock-paper-scissors-vs-coin-flip" className="text-blue-600 hover:underline font-medium">
                        RPS vs coin flip
                    </Link>{" "}
                    for which method is actually fairer.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Do I need to create an account to play?</h3>
                    <p className="text-gray-600 text-sm">
                        No. The game is completely anonymous - no email, no password, no profile. Just open the link and play.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How do I invite my friend?</h3>
                    <p className="text-gray-600 text-sm">
                        Open the 2-player game, copy the unique room link, and send it however you communicate - text, WhatsApp, Discord,
                        email. When they open the link, you&apos;re connected.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Is it free?</h3>
                    <p className="text-gray-600 text-sm">Yes, always free to play. No subscription, no in-app purchases.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How many rounds does a game last?</h3>
                    <p className="text-gray-600 text-sm">Best of 3. The first player to win 2 rounds wins the match.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can I play on my phone?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes. The game runs in any mobile browser on iOS and Android - no app download required.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What if I lose my connection mid-game?</h3>
                    <p className="text-gray-600 text-sm">
                        The game room persists briefly. If you both reconnect to the same link, the game resumes from where you left off.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ready to settle this?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Start a 2-player game, share the link, and play in under 60 seconds. No account needed.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Start 2-Player Game →
                </CtaLink>
            </div>
        </article>
    );
}

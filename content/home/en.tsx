import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    {
        q: "What beats Rock in Rock Paper Scissors?",
        a: "Paper beats Rock. Paper symbolically covers Rock, making it the winning move whenever your opponent throws Rock.",
    },
    {
        q: "What beats Paper?",
        a: "Scissors beats Paper. Scissors cuts through Paper, making it the counter whenever your opponent plays Paper.",
    },
    {
        q: "What beats Scissors?",
        a: "Rock beats Scissors. Rock crushes Scissors, making it the winning move whenever your opponent throws Scissors.",
    },
    {
        q: "Is Rock Paper Scissors just luck?",
        a: "Not entirely. A random player wins 33% of the time, but real people follow patterns - and patterns can be read.",
    },
    {
        q: "Do I need to sign up or download anything?",
        a: "No. The game runs entirely in your browser. No account, no download, no app required - just open the page and play instantly.",
    },
    { q: "Does it work on mobile?", a: "Yes. The game is fully responsive and works on any smartphone or tablet with a modern browser." },
    {
        q: "What is the best opening move?",
        a: "Statistically, Paper is a strong opener. Most players - especially beginners - throw Rock first because it feels like the strongest move. Playing Paper counters that tendency and gives you a statistical edge in the first round.",
    },
    {
        q: "Can I play Rock Paper Scissors online with someone in a different country?",
        a: "Yes. The game works in any browser, anywhere. Share the game link and both players can join from any country, any device, with no app or account required.",
    },
    {
        q: "How does the computer pick its move? Is it rigged?",
        a: "The computer picks randomly every time - Rock, Paper, and Scissors each have an equal 1 in 3 chance. There is no pattern, no adjustment based on your history, and no tricks.",
    },
    {
        q: "Is Rock Paper Scissors online better than texting it?",
        a: "Yes, because both players reveal their move at exactly the same time. In a texted game, one player can delay their response to react to the other's choice. Online, both moves are locked in and revealed simultaneously - no peeking, no cheating.",
    },
];

export function Strategy() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                How to Win at Rock Paper Scissors
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Most players treat Rock Paper Scissors as pure chance, like flipping a coin. It is not.</p>
                <p>
                    A study by Zhejiang University analyzed hundreds of thousands of matches and found that human players follow predictable
                    patterns. They discovered a strategy called <strong className="text-gray-700">Win-Stay, Lose-Shift</strong>:
                </p>
                <ul className="list-disc space-y-2 pl-4">
                    <li>
                        <span className="font-semibold text-gray-700">If you win:</span> Your opponent will probably switch moves.
                        <br />
                        <span className="italic text-gray-500">Counter-move:</span> Play the move they just threw - it beats what
                        they&apos;ll try next.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">If you lose:</span> Your opponent is likely to repeat their winning
                        move because it feels &ldquo;lucky&rdquo;.
                        <br />
                        <span className="italic text-gray-500">Counter-move:</span> Play the move that beats what they just threw.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">First Throw Strategy:</span> Beginners, especially male players,
                        overwhelmingly open with Rock because it feels strong.
                        <br />
                        <span className="italic text-gray-500">Tip:</span> Against a new opponent, throw Paper first.
                    </li>
                </ul>
                <p>
                    <span className="font-semibold text-gray-700">Is Rock Paper Scissors luck or skill?</span> Both. A purely random player
                    wins 33.3% of the time. But human choices are not random, which is why spotting patterns gives you a real advantage.
                </p>
                <p>
                    Put the strategy to the test - win more games than your opponent and you can claim a personalised winner&apos;s
                    certificate to download and share.
                </p>
                <p>
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Read the full strategy guide →
                    </Link>
                </p>
            </div>
        </>
    );
}

export function Rules() {
    return (
        <>
            <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">Rock Paper Scissors Rules</h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Rock Paper Scissors is played between two players. Each player reveals one of three hand gestures at the same time, and
                    the winner is decided by a simple set of rules:
                </p>
                <ul className="pl-4 space-y-2 list-disc">
                    <li>
                        <span className="font-semibold text-gray-700">Rock crushes Scissors</span> - ✊ → ✂️
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Scissors cuts Paper</span> - ✂️ → 📄
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Paper covers Rock</span> - 📄 → ✊
                    </li>
                </ul>
                <p>If both players throw the same gesture, the round is a draw.</p>
                <p className="font-semibold text-gray-700">How does best of 3 work?</p>
                <p>
                    Each match is 3 rounds. Both players lock in all their choices before any results are shown, so neither player can react
                    to the other. The player who wins the most rounds takes the game. If each player wins one round and the third is a draw,
                    the match is tied.
                </p>
                <p>
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        See the complete rules →
                    </Link>
                </p>
            </div>
        </>
    );
}

export function Statistics() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">Rock Paper Scissors Statistics</h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>In a perfectly random game, each throw has an equal 1 in 3 chance (33.3%) of winning, losing, or drawing.</p>
                <p>
                    In practice, humans do not throw randomly. Research suggests the actual distribution among casual players looks like:{" "}
                    <strong className="text-gray-700">Rock ~35%, Paper ~35%, Scissors ~30%</strong>. Scissors is thrown the least.
                </p>
                <p>
                    In 2005, a single hand of Rock Paper Scissors decided a{" "}
                    <strong className="text-gray-700">$17.8 million auction contract</strong>. The two most famous auction houses,
                    Christie&apos;s and Sotheby&apos;s, were deadlocked over the rights to sell a valuable art collection and agreed to
                    settle it with one game.
                </p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Sotheby&apos;s treated it as chance and played Paper.</li>
                    <li>
                        Christie&apos;s asked the 11-year-old twin daughters of one of their directors for advice. The girls reasoned:
                        &ldquo;Everyone thinks Rock is the strong move. Sotheby&apos;s will expect Rock, so they will play Paper. Play
                        Scissors.&rdquo;
                    </li>
                </ul>
                <p>
                    Christie&apos;s played Scissors. Sotheby&apos;s played Paper. Christie&apos;s won - proving that even in a simple game,
                    psychology beats pure chance.
                </p>
            </div>
        </>
    );
}

export function History() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">What Is Rock Paper Scissors?</h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Rock Paper Scissors is a hand game played worldwide, usually between two people. It is commonly used as a quick way to
                    settle decisions, but it is also a game of reading your opponent.
                </p>
                <p>
                    The game traces back over <strong className="text-gray-700">2,000 years to the Chinese Han Dynasty</strong> (206 BC -
                    220 AD), where it was called <em>shoushiling</em> and used gestures representing a Frog, a Slug, and a Snake.
                </p>
                <p>
                    It reached Japan as <em>Jan-Ken</em>, where it became a daily social tool for settling disputes in schools and
                    businesses. It arrived in the West in the early 20th century and became the standard quick-decision game it is today.
                    Today it goes by many names: <em>roshambo</em> in the US, <em>piedra papel tijeras</em> in Spanish-speaking countries -
                    all using the same three gestures.
                </p>
                <p>
                    <strong className="text-gray-700">Did you know?</strong> August 27th is officially World Rock Paper Scissors Day.
                </p>
                <p>
                    The computer on this site picks randomly - it has an equal 1 in 3 chance of throwing Rock, Paper, or Scissors every
                    time. No tricks, just chance.
                </p>
                <p>
                    Playing online also removes the main way to cheat in a physical game. In person, a player can delay their throw by a
                    split second to react to the opponent&apos;s hand - a technique called &ldquo;shadowing&rdquo;. On rps-game.online, both
                    players commit their choice privately before either result is shown, so every match is genuinely fair.
                </p>
            </div>
        </>
    );
}

export function BlogLinks() {
    const posts = [
        { href: "/blog/how-to-win-rock-paper-scissors", title: "How to Win Rock Paper Scissors: Strategy & Psychology" },
        { href: "/blog/rock-paper-scissors-rules", title: "Rock Paper Scissors Rules: The Complete Guide" },
        { href: "/blog/rock-paper-scissors-virtual-meeting-icebreaker", title: "Rock Paper Scissors as a Virtual Meeting Icebreaker" },
        { href: "/blog/rock-paper-scissors-long-distance-couples", title: "Rock Paper Scissors for Long-Distance Couples" },
        { href: "/blog/rock-paper-scissors-vs-coin-flip", title: "Rock Paper Scissors vs Coin Flip: Which Is Fairer?" },
        { href: "/blog/rock-paper-scissors-online-with-friends", title: "Rock Paper Scissors Online With Friends - No Account" },
    ];
    return (
        <div className="mt-8 pt-6 border-t border-gray-100">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">From the Blog</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {posts.map(({ href, title }) => (
                    <li key={href}>
                        <LocaleLink href={href} className="text-sm text-gray-600 hover:text-blue-600 hover:underline">
                            {title} →
                        </LocaleLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">Frequently Asked Questions</h2>
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

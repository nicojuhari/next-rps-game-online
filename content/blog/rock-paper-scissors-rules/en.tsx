import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Rock Paper Scissors Rules: The Complete Guide",
    description:
        "Rock Paper Scissors is played in seconds but misunderstood by most. Learn the complete rules — gestures, win conditions, tie-breaks, and game formats — plus how online play works.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-rules",
    readingTime: "5 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "What are the official rules of rock paper scissors?",
        a: "Two players simultaneously reveal one of three hand gestures: Rock (closed fist), Paper (flat open hand), or Scissors (two fingers in a V). Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Same gesture is a tie — replay until someone wins.",
    },
    {
        q: "What beats what in rock paper scissors?",
        a: "Rock beats Scissors (crushes them). Scissors beats Paper (cuts it). Paper beats Rock (covers it). Each move beats exactly one other move and loses to one — making the game perfectly balanced.",
    },
    {
        q: "What happens on a tie in rock paper scissors?",
        a: "When both players throw the same gesture, it's a draw. The standard rule is to replay that round immediately until one player wins. In best-of-3 or best-of-5 formats, tied rounds don't count — you keep playing until someone reaches the required number of wins.",
    },
    {
        q: "How many rounds is a standard game of rock paper scissors?",
        a: "The most common format is best-of-3: the first player to win 2 rounds wins the match. A single-throw format is also common for quick decisions. Best-of-5 (first to 3 wins) is used in more competitive settings.",
    },
    {
        q: "Where did rock paper scissors come from?",
        a: "Rock Paper Scissors originated in China and spread to Japan, where it became known as jan-ken-pon. It was introduced to Western countries in the early 20th century and is now played worldwide under various names including roshambo (USA), rochambeau, and ching chong cha (South Africa).",
    },
    {
        q: "What is roshambo?",
        a: "Roshambo (also spelled rochambeau) is the North American name for rock paper scissors. The origin of the name is debated — it may be a reference to the French Count de Rochambeau or simply a regional nickname that spread through US culture.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Rock Paper Scissors is one of the most widely played games in the world. Most people learn it in childhood and never think about the rules again — yet disputes about ties, simultaneous reveals, and proper formats come up constantly. This guide covers everything: the gestures, what beats what, how ties work, game formats, and how online play changes the mechanics.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Three Gestures</h2>
            <p className="mb-4">
                Each player forms one of three hand shapes at the same moment:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✊</div>
                    <p className="font-semibold text-gray-800">Rock</p>
                    <p className="text-sm text-gray-500 mt-1">Closed fist</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✋</div>
                    <p className="font-semibold text-gray-800">Paper</p>
                    <p className="text-sm text-gray-500 mt-1">Flat open hand</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✌️</div>
                    <p className="font-semibold text-gray-800">Scissors</p>
                    <p className="text-sm text-gray-500 mt-1">Index and middle finger extended in a V</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">What Beats What</h2>
            <p className="mb-4">
                The three outcomes follow a simple cycle. Each gesture beats one and loses to one:
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Gesture</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Beats</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Loses to</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Why</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Rock ✊</td>
                            <td className="p-3 border border-gray-200">Scissors ✌️</td>
                            <td className="p-3 border border-gray-200">Paper ✋</td>
                            <td className="p-3 border border-gray-200">Rock crushes Scissors; Paper covers Rock</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Paper ✋</td>
                            <td className="p-3 border border-gray-200">Rock ✊</td>
                            <td className="p-3 border border-gray-200">Scissors ✌️</td>
                            <td className="p-3 border border-gray-200">Paper covers Rock; Scissors cuts Paper</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Scissors ✌️</td>
                            <td className="p-3 border border-gray-200">Paper ✋</td>
                            <td className="p-3 border border-gray-200">Rock ✊</td>
                            <td className="p-3 border border-gray-200">Scissors cuts Paper; Rock crushes Scissors</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-4">
                The game is perfectly balanced — no single gesture is stronger than the others. Each wins against one and loses to one, which is why the game is used as a fair decision-making tool worldwide.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">The Simultaneous Reveal — The Most Important Rule</h2>
            <p className="mb-4">
                The core rule that makes the game fair: <strong className="text-gray-800">both players must reveal their gesture at exactly the same time.</strong> Neither player can wait to see the other&apos;s choice before committing.
            </p>
            <p className="mb-4">
                In person, this is enforced by a count-in. Common counting methods:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Rock, Paper, Scissors, Shoot</strong> — reveal on &ldquo;Shoot&rdquo;</li>
                <li><strong className="text-gray-800">1, 2, 3, Go</strong> — reveal on &ldquo;Go&rdquo;</li>
                <li><strong className="text-gray-800">Jan-ken-pon</strong> — the Japanese count-in, reveal on &ldquo;pon&rdquo;</li>
            </ul>
            <p className="mb-4">
                Players pump their fist on each beat and open into their chosen gesture on the final word. Revealing early (before the final beat) or late (after seeing the opponent&apos;s move) is considered cheating.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Ties and How to Handle Them</h2>
            <p className="mb-4">
                When both players throw the same gesture, the round is a draw. The standard rule is straightforward: <strong className="text-gray-800">replay immediately</strong>. Keep replaying until one player&apos;s gesture beats the other&apos;s.
            </p>
            <p className="mb-4">
                In a best-of-3 or best-of-5 match, tied rounds simply don&apos;t count toward either player&apos;s total. You continue until one player reaches the target number of wins.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Game Formats</h2>
            <p className="mb-4">
                Rock Paper Scissors is flexible — the format depends on the context:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Single throw:</strong> one round, immediate decision. Used for quick choices like who pays the bill or who goes first in a board game.</li>
                <li><strong className="text-gray-800">Best-of-3:</strong> first player to win 2 rounds wins the match. The standard competitive format and the one used on this site.</li>
                <li><strong className="text-gray-800">Best-of-5:</strong> first to 3 wins. Used when a longer match is needed — more rounds reduces the influence of a lucky throw and gives strategy more room to work.</li>
                <li><strong className="text-gray-800">Fixed rounds:</strong> a set number of rounds (e.g., 10), with the player who wins the most rounds declared the winner. Used in research settings and some casual tournaments.</li>
            </ul>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ready to play?</p>
                <p className="text-sm text-gray-600 mb-4">Play a best-of-3 against a friend — or test the rules against the computer first.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Play with a Friend →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Play vs Computer
                    </Link>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">How Online Rock Paper Scissors Works</h2>
            <p className="mb-4">
                The biggest challenge in online RPS is enforcing the simultaneous reveal. Without a shared physical space and a count-in, one player could theoretically wait to see the other&apos;s choice.
            </p>
            <p className="mb-4">
                On this site, the reveal problem is solved mechanically: both players lock in their choice privately before either result is shown. The system only reveals both moves at the same time, after both players have committed. Neither player can see the other&apos;s selection until their own is already submitted — making online play structurally fairer than most in-person games where fast hands can bend the timing rules.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Common Variations</h2>
            <p className="mb-4">
                The core game has spawned many variants. The most well-known:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Rock Paper Scissors Lizard Spock</strong> — popularized by The Big Bang Theory. Adds two gestures to the original three. Lizard poisons Spock and eats Paper; Spock smashes Scissors and vaporizes Rock. The expanded set reduces ties significantly.
                </li>
                <li>
                    <strong className="text-gray-800">Big Bang (25-gesture version)</strong> — an extreme academic variant with 25 gestures, each beating 12 others and losing to 12. More mathematical curiosity than practical game.
                </li>
                <li>
                    <strong className="text-gray-800">Tournament RPS</strong> — governed by the World RPS Society, which publishes official rules including standards for legal throws, throw timing, and dispute resolution.
                </li>
            </ul>

            {/* Section 8 — Names Around the World */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Rock Paper Scissors Around the World</h2>
            <p className="mb-4">
                The game is global but goes by many names:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Jan-ken-pon</strong> (Japan) — believed to be the oldest documented form, dating to the 17th century</li>
                <li><strong className="text-gray-800">Roshambo / Rochambeau</strong> (USA) — origin debated, widely used in the American West</li>
                <li><strong className="text-gray-800">Ching chong cha</strong> (South Africa)</li>
                <li><strong className="text-gray-800">Piedra, papel o tijeras</strong> (Spanish-speaking world)</li>
                <li><strong className="text-gray-800">Schnick, Schnack, Schnuck</strong> (Germany)</li>
                <li><strong className="text-gray-800">Pierre, feuille, ciseaux</strong> (France)</li>
            </ul>
            <p className="mb-4">
                Despite the different names, the rules are effectively identical worldwide — a testament to how elegantly balanced the core mechanic is.
            </p>

            {/* Internal link to strategy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Now that you know the rules, you might want to go deeper.{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Read the strategy guide →
                    </Link>{" "}
                    — it covers the behavioral psychology research that explains why human players are predictable, and how to exploit it.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What are the official rules of rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Two players simultaneously reveal one of three gestures: Rock (closed fist), Paper (flat open hand), or Scissors (two fingers in a V). Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Same gesture is a tie — replay the round.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What beats what in rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        Rock beats Scissors (crushes them). Scissors beats Paper (cuts it). Paper beats Rock (covers it). Each move beats exactly one other and loses to one — making the game perfectly balanced.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What happens on a tie in rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        When both players throw the same gesture, it&apos;s a draw. The standard rule is to replay the round immediately until one player&apos;s gesture beats the other&apos;s.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How many rounds is a standard game of rock paper scissors?</h3>
                    <p className="text-gray-600 text-sm">
                        The most common format is best-of-3 — first to win 2 rounds wins the match. Single throws are used for quick decisions. Best-of-5 is used in more competitive settings.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Where did rock paper scissors come from?</h3>
                    <p className="text-gray-600 text-sm">
                        The game originated in China and spread to Japan, where it became jan-ken-pon. It reached the West in the early 20th century and is now played worldwide under various names including roshambo, rochambeau, and ching chong cha.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What is roshambo?</h3>
                    <p className="text-gray-600 text-sm">
                        Roshambo is the North American name for rock paper scissors, common in the United States. The origin of the term is debated — it may derive from the French Count de Rochambeau or simply be a regional nickname that spread through American culture.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">You know the rules. Now play.</p>
                <p className="text-sm text-gray-500 mb-5">Challenge a friend online — no account needed, just share a link.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Play with a Friend →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Play vs Computer
                    </Link>
                </div>
            </div>

        </article>
    );
}

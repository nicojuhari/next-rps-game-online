import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Rock Paper Scissors as a Virtual Meeting Icebreaker",
    description:
        "The best icebreaker for remote teams needs no app or signup. Share a link and you're playing in 10 seconds. Here's how to run it.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-virtual-meeting-icebreaker",
    readingTime: "5 min read",
};

export const faqItems: FaqItem[] = [
    {
        q: "Can you play rock paper scissors on a Zoom call?",
        a: "Yes. Each player opens the game on their own device while on the call. Share the link in the chat, both players pick privately, and the result reveals simultaneously - no counting to three out loud, no lag issues.",
    },
    {
        q: "What are good icebreakers for virtual meetings?",
        a: "The best virtual icebreakers are fast, require no setup, and work across different devices and skill levels. Rock Paper Scissors meets all three: it takes under 60 seconds, needs no app or account, and is understood in every culture.",
    },
    {
        q: "How do you run a rock paper scissors tournament on a video call?",
        a: "Pair people up in a bracket (random or by team). Each pair plays a best-of-3 match simultaneously, then winners advance. With 8 people you can run a full tournament in under 10 minutes. Share links in the chat as each bracket round opens.",
    },
    {
        q: "Why is rock paper scissors a good team icebreaker?",
        a: "It's universally understood, takes under a minute, requires no prior knowledge or skill advantage, and always produces a winner - which generates a natural reaction. It works in multilingual teams because it needs no explanation beyond 'rock beats scissors, scissors beats paper, paper beats rock.'",
    },
    {
        q: "How long does a virtual RPS icebreaker take?",
        a: "A single match (best-of-3) takes 30-60 seconds. A full 8-person tournament bracket takes about 10 minutes. A quick round-robin where everyone plays the person to their left on the call takes 2-3 minutes.",
    },
    {
        q: "Can rock paper scissors work with large teams?",
        a: "Yes. For teams larger than 8-10, run it as a bracket tournament over multiple rounds, or split into smaller groups. Each match is independent - anyone can play from any device simultaneously without coordination overhead.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Remote meetings have an awkward opening minute. Everyone joins, someone says &ldquo;can you hear me?&rdquo;, and then
                there&apos;s a silence before the agenda starts. A good icebreaker fixes that - but most icebreakers require a facilitator,
                a shared app, or 10 minutes of explanation. Rock Paper Scissors needs none of that. Share a link, pick a move, see who wins.
                Done in 60 seconds, works on every device, understood in every culture.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Why RPS Works Better as a Virtual Icebreaker Than Most Alternatives
            </h2>
            <p className="mb-4">
                Most icebreaker formats fail for one of three reasons: they take too long, they require everyone to be equally comfortable
                speaking, or they need a tool that half the team has never used before.
            </p>
            <p className="mb-4">Rock Paper Scissors sidesteps all three:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Zero setup:</strong> no account, no download, no waiting for the facilitator to share
                    a screen. Players open the link themselves.
                </li>
                <li>
                    <strong className="text-gray-800">No language barrier:</strong> the rules - rock beats scissors, scissors beats paper,
                    paper beats rock - take 10 seconds to explain and are already known in most cultures.
                </li>
                <li>
                    <strong className="text-gray-800">Equal footing:</strong> there&apos;s no knowledge advantage, no speaking confidence
                    required, no seniority signal. The intern and the VP play on exactly the same terms.
                </li>
                <li>
                    <strong className="text-gray-800">Instant outcome:</strong> every match produces a clear winner and a natural reaction -
                    a laugh, a groan, a rematch request. That reaction is the icebreaker doing its job.
                </li>
                <li>
                    <strong className="text-gray-800">Works on any device:</strong> phone, tablet, laptop - no browser extension, no IT
                    approval required.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Why Playing Over Video Doesn&apos;t Work - And Why This Does</h2>
            <p className="mb-4">
                The obvious approach - everyone counts to three on camera and reveals their gesture - breaks down immediately in virtual
                calls. Network lag means players see reveals at slightly different times. A 200ms delay is enough for one person to
                technically see the other&apos;s hand before committing. Without a shared physical space, the simultaneous reveal is
                impossible to enforce.
            </p>
            <p className="mb-4">
                A proper online game solves this structurally. Both players lock in their choice privately before either result is shown.
                The reveal happens only after both have committed - making it genuinely simultaneous in a way that counting over video never
                can be. Online RPS is actually <em>fairer</em> than in-person RPS for this reason.
            </p>

            {/* Section 3 - How to run it */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">How to Run It: Step by Step</h2>
            <p className="mb-4">This takes under 2 minutes from start to finish for a pair, or 5-10 minutes for a full team bracket.</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Host opens the game and creates a room</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Go to the two-player game, click &ldquo;Create game&rdquo;, and copy the link from your browser.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Paste the link in the meeting chat</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Works in Zoom, Teams, Meet, Slack, or any chat window. The other player clicks it and joins instantly - no
                            account needed.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Both players pick their move</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Each player taps Rock, Paper, or Scissors on their own device. The choice is hidden until both have submitted.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Result reveals simultaneously</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Both moves appear at the same time. Best-of-3 format - first to win 2 rounds wins the match.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Try it before your next call.</p>
                <p className="text-sm text-gray-600 mb-4">Open a room now - no account needed, just share the link in your meeting chat.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Create a Game Room →
                </CtaLink>
            </div>

            {/* Section 4 - Use cases */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Specific Ways to Use It in Meetings</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Quick warmup for a team standup</h3>
            <p className="mb-4">
                Before the standup agenda starts, the facilitator pairs two people at random and runs a single match live. Takes 45 seconds,
                creates a moment of levity, and gets people paying attention before the real meeting starts. Rotate pairings each week so
                everyone plays everyone over time.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Making a group decision</h3>
            <p className="mb-4">
                Who presents first in the demo? Who picks the team lunch option? Who writes the meeting summary? Instead of an awkward
                silence or the loudest voice winning, run a quick match. Both people accept the outcome because they had a fair shot.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Onboarding a new team member</h3>
            <p className="mb-4">
                Pair the new hire with each existing team member for a quick match in their first week. It&apos;s lower stakes than asking
                them to introduce themselves to a group, generates natural one-on-one conversation starters (&ldquo;you always play rock
                first, don&apos;t you&rdquo;), and helps them remember names faster through the context of the game.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Team building tournament</h3>
            <p className="mb-4">
                For a dedicated team activity, run a bracket tournament. With 8 people: seed everyone randomly, run 4 first-round matches
                simultaneously (each pair gets their own link), then semifinals and a final. The whole thing takes 10-12 minutes. Keep a
                leaderboard visible on screen. The structure creates stakes and narrative - &ldquo;the person who went out in the
                semis&rdquo; is now a team reference point.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Breaking a tie vote</h3>
            <p className="mb-4">
                The team is split 2-2 on a decision. Instead of going to the manager as a tiebreaker (which creates hierarchy pressure), the
                two sides each pick a champion and play. The result is random - but it&apos;s accepted as fair because both sides agreed to
                it.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Running a Tournament Bracket for Larger Teams</h2>
            <p className="mb-4">For teams of 8-16, a single-elimination bracket works well:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Use a bracket tool (Challonge, Bracket HQ, or a simple spreadsheet) to set the pairings</li>
                <li>Share each pair&apos;s game link simultaneously in the group chat</li>
                <li>All first-round matches run at the same time - no waiting for other pairs to finish</li>
                <li>Winners report their result in chat; advance to the next round</li>
                <li>Final match runs live with everyone watching on the call</li>
            </ul>
            <p className="mb-4">
                For teams larger than 16, split into groups of 4-6 first, run intra-group round-robins, then take the top 1-2 from each
                group into a final bracket.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">What Makes a Good Virtual Icebreaker (And Why Most Fail)</h2>
            <p className="mb-4">Common icebreaker formats and why they often fall flat in remote settings:</p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Format</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Time</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Problem</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">&ldquo;Two truths and a lie&rdquo;</td>
                            <td className="p-3 border border-gray-200">5-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Requires comfort speaking; awkward for new/introverted team members
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Trivia quiz</td>
                            <td className="p-3 border border-gray-200">10-20 min</td>
                            <td className="p-3 border border-gray-200">
                                Knowledge gap disadvantages non-native speakers and junior members
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Virtual bingo</td>
                            <td className="p-3 border border-gray-200">10-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Requires a shared tool, setup time, someone to facilitate throughout
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Word association</td>
                            <td className="p-3 border border-gray-200">3-5 min</td>
                            <td className="p-3 border border-gray-200">Hard to run with more than 4-5 people; loses energy quickly</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Rock Paper Scissors</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">1-10 min</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                No setup. No speaking required. Equal footing. Scales to any team size.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Once the icebreaker is done and people want to keep playing:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        read the strategy guide
                    </Link>{" "}
                    - it covers the behavioral psychology that explains why human players are predictable, and how to exploit it. Or brush
                    up on the{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        complete rules
                    </Link>{" "}
                    if anyone on the call needs a refresher.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can you play rock paper scissors on a Zoom call?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes. Each player opens the game on their own device while on the call. Share the link in the Zoom chat, both players
                        pick privately, and the result reveals simultaneously - no counting to three out loud, no lag issues.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">What are good icebreakers for virtual meetings?</h3>
                    <p className="text-gray-600 text-sm">
                        The best virtual icebreakers are fast, require no setup, and work across different devices and comfort levels. Rock
                        Paper Scissors meets all three: under 60 seconds, no app or account, understood in every culture.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How do you run a rock paper scissors tournament on a video call?</h3>
                    <p className="text-gray-600 text-sm">
                        Pair people up in a bracket. Each pair gets a game link shared in the chat. All first-round matches run
                        simultaneously. Winners advance. With 8 people, a full tournament takes under 10 minutes.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Why is rock paper scissors a good team icebreaker?</h3>
                    <p className="text-gray-600 text-sm">
                        It&apos;s universally understood, takes under a minute, requires no knowledge or speaking confidence, and always
                        produces a clear winner - which generates a natural reaction that breaks the silence better than any scripted
                        prompt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">How long does a virtual RPS icebreaker take?</h3>
                    <p className="text-gray-600 text-sm">
                        A single best-of-3 match takes 30-60 seconds. A full 8-person tournament bracket takes about 10 minutes. A quick
                        round where everyone plays the person to their left takes 2-3 minutes.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Can rock paper scissors work with large teams?</h3>
                    <p className="text-gray-600 text-sm">
                        Yes. For teams larger than 8-10, run a bracket tournament or split into smaller groups. All matches are independent
                        - pairs can play simultaneously without coordination overhead.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ready for your next meeting?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Open a room now - share the link in your meeting chat and start in under 10 seconds.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Create a Game Room →
                </CtaLink>
            </div>
        </article>
    );
}

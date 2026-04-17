const HomeContent = () => {
    return (
        <div className="my-16 space-y-12 font-light">
            <div>
                <h2 className="text-lg font-semibold mb-4">How to Win at Rock Paper Scissors</h2>
                <div className="space-y-2">
                    <p>Most players treat Rock Paper Scissors as pure chance, like flipping a coin. It is not.</p>
                    <p>
                        A study by <span className="font-semibold">Zhejiang University</span> analyzed hundreds of thousands of matches and
                        found that human players follow predictable patterns. They discovered a strategy called{" "}
                        <span className="font-semibold">&quot;Win-Stay, Lose-Shift&quot;</span>:
                    </p>
                    <ul className="list-disc space-y-2 pl-4">
                        <li>
                            <span className="font-semibold">If you win:</span> Your opponent is likely to switch to the move that would have
                            beaten your winning throw.
                            <br />
                            <span className="italic">Counter-move:</span> Play what your opponent just played.
                        </li>
                        <li>
                            <span className="font-semibold">If you lose:</span> Your opponent is likely to repeat their winning move because
                            it feels &quot;lucky&quot;.
                            <br />
                            <span className="italic">Counter-move:</span> Play the move that beats what they just threw.
                        </li>
                        <li>
                            <span className="font-semibold">First Throw Strategy:</span> Beginners, especially male players, overwhelmingly
                            open with Rock because it feels strong.
                            <br />
                            <span className="italic">Tip:</span> Against a new opponent, throw Paper first.
                        </li>
                    </ul>
                    <p>
                        <span className="font-semibold">Is Rock Paper Scissors luck or skill?</span> Both. A purely random player wins 33.3%
                        of the time. But human choices are not random, which is why pattern recognition gives you a real edge.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Rock Paper Scissors Rules</h2>
                <div className="space-y-2">
                    <p>
                        Rock Paper Scissors is played between two players. Each player simultaneously reveals one of three hand gestures,
                        and the outcome is decided by a simple rule set:
                    </p>
                    <ul className="pl-4 space-y-2 list-disc">
                        <li>
                            <span className="font-semibold">Rock crushes Scissors</span> - ✊ beats ✂️
                        </li>
                        <li>
                            <span className="font-semibold">Scissors cuts Paper</span> - ✂️ beats 📄
                        </li>
                        <li>
                            <span className="font-semibold">Paper covers Rock</span> - 📄 beats ✊
                        </li>
                    </ul>
                    <p>If both players throw the same gesture, the round is a draw.</p>
                    <p className="font-semibold">How does best of 3 work?</p>
                    <p>
                        Each match consists of 3 rounds. Both players submit all their choices before any results are shown, so neither
                        player can react to the other. The player who wins the most rounds takes the game. If each player wins one round
                        and one is a draw, the match is tied.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Rock Paper Scissors Statistics</h2>
                <div className="space-y-2">
                    <p>
                        In a perfectly random game, each throw has an equal{" "}
                        <span className="font-semibold">1 in 3 chance (33.3%)</span> of winning, losing, or drawing.
                    </p>
                    <p>
                        In practice, humans do not throw randomly. Research suggests the actual distribution among casual players looks
                        like: <span className="font-semibold">Rock ~35%</span>, <span className="font-semibold">Paper ~35%</span>,{" "}
                        <span className="font-semibold">Scissors ~30%</span>. Scissors is thrown least often, making it the statistically
                        safest first throw. Paper is the riskiest opener against an experienced player.
                    </p>
                    <p>
                        In 2005, a single hand of Rock Paper Scissors decided an $17.8 million auction contract. The two most famous
                        auction houses, <span className="font-semibold">Christie&apos;s</span> and{" "}
                        <span className="font-semibold">Sotheby&apos;s</span>, were deadlocked over the rights to sell a valuable art
                        collection and agreed to settle it with one game.
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>
                            <span className="font-semibold">Sotheby&apos;s</span> treated it as chance and played{" "}
                            <span className="italic">Paper</span>.
                        </li>
                        <li>
                            <span className="font-semibold">Christie&apos;s</span> asked the 11-year-old twin daughters of one of their
                            directors for advice. The girls reasoned:{" "}
                            <span className="italic">
                                &quot;Everyone thinks Rock is the strong move. Sotheby&apos;s will expect Rock, so they will play Paper.
                                Play Scissors.&quot;
                            </span>
                        </li>
                    </ul>
                    <p>
                        Christie&apos;s played <span className="font-semibold">Scissors</span>. Sotheby&apos;s played{" "}
                        <span className="font-semibold">Paper</span>. Christie&apos;s won, proving that even in a simple game,{" "}
                        <span className="font-semibold">psychology beats pure chance</span>.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">What Is Rock Paper Scissors?</h2>
                <div className="space-y-2">
                    <p>
                        Rock Paper Scissors (also known as roshambo or Jan-Ken) is a hand game played worldwide, usually between two
                        people. It is commonly used as a fair decision-making tool, but it is also a game of psychology and game theory.
                    </p>
                    <p>
                        The game traces back over <span className="font-semibold">2,000 years</span> to the{" "}
                        <span className="font-semibold">Chinese Han Dynasty (206 BC - 220 AD)</span>, where it was called{" "}
                        <span className="italic">shoushiling</span> and used gestures representing a{" "}
                        <span className="font-semibold">Frog</span>, a <span className="font-semibold">Slug</span>, and a{" "}
                        <span className="font-semibold">Snake</span>.
                    </p>
                    <p>
                        It reached Japan as <span className="italic">Jan-Ken</span>, where it became a daily social tool used to resolve
                        disputes in schools and businesses. It arrived in the West in the early 20th century and became the standard
                        quick-decision game it is today.
                    </p>
                    <p>
                        <span className="font-semibold">Did you know?</span>{" "}
                        <span className="underline">August 27th</span> is officially{" "}
                        <span className="font-semibold">World Rock Paper Scissors Day</span>.
                    </p>
                    <p>
                        Today it is played globally under many names: roshambo in the US, Jan-Ken in Japan, piedra papel tijeras in
                        Spanish-speaking countries, all using the same three gestures.
                    </p>
                    <p>
                        Playing online also removes the main way to cheat in a physical game. In person, a player can delay their throw by
                        a split second to react to the opponent&apos;s hand - a technique called &quot;shadowing&quot;. On
                        rps-game.online, both players commit their choice privately before either result is shown, so every match is
                        genuinely fair.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier Regeln: Der vollständige Leitfaden",
    description:
        "Schere Stein Papier wird in Sekunden gespielt, aber die meisten kennen nicht alle Regeln. Lerne die vollständigen Regeln — Gesten, Gewinnbedingungen, Unentschieden und Spielformate — plus wie das Spiel online funktioniert.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-rules",
    readingTime: "5 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Was sind die offiziellen Regeln von Schere Stein Papier?",
        a: "Zwei Spieler zeigen gleichzeitig eine von drei Handgesten: Stein (geschlossene Faust), Papier (flache, offene Hand) oder Schere (Zeige- und Mittelfinger als V). Stein schlägt Schere, Schere schlägt Papier, Papier schlägt Stein. Gleiche Geste ist Unentschieden — Runde wiederholen.",
    },
    {
        q: "Was schlägt was bei Schere Stein Papier?",
        a: "Stein schlägt Schere (zerquetscht sie). Schere schlägt Papier (schneidet es). Papier schlägt Stein (bedeckt ihn). Jede Geste schlägt genau eine andere und verliert gegen eine — was das Spiel perfekt ausgewogen macht.",
    },
    {
        q: "Was passiert bei einem Unentschieden bei Schere Stein Papier?",
        a: "Wenn beide Spieler die gleiche Geste zeigen, ist die Runde unentschieden. Die Standardregel ist, die Runde sofort zu wiederholen, bis die Geste eines Spielers die des anderen schlägt.",
    },
    {
        q: "Wie viele Runden hat ein Standard-Spiel Schere Stein Papier?",
        a: "Das häufigste Format ist Best-of-3: Der erste Spieler, der 2 Runden gewinnt, gewinnt das Match. Einzelwürfe werden für schnelle Entscheidungen genutzt. Best-of-5 wird in kompetitiveren Umgebungen verwendet.",
    },
    {
        q: "Woher kommt Schere Stein Papier?",
        a: "Das Spiel stammt aus China und verbreitete sich nach Japan, wo es als Jan-ken-pon bekannt wurde. Im frühen 20. Jahrhundert kam es nach Westeuropa und wird heute weltweit unter verschiedenen Namen gespielt.",
    },
    {
        q: "Was ist Roshambo?",
        a: "Roshambo ist der nordamerikanische Name für Schere Stein Papier, der in den USA verbreitet ist. Die Herkunft des Begriffs ist umstritten — er könnte vom französischen Grafen de Rochambeau abstammen oder einfach ein regionaler Spitzname sein.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Schere Stein Papier ist eines der meistgespielten Handspiele der Welt. Die meisten lernen es in der Kindheit und denken nie wieder über die Regeln nach — aber Streitigkeiten über Unentschieden, gleichzeitige Enthüllungen und korrekte Formate kommen ständig vor. Dieser Leitfaden deckt alles ab: die Gesten, was was schlägt, wie Unentschieden funktionieren, Spielformate und wie das Online-Spiel die Mechanik verändert.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Die Drei Gesten</h2>
            <p className="mb-4">
                Jeder Spieler formt gleichzeitig eine von drei Handformen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✊</div>
                    <p className="font-semibold text-gray-800">Stein</p>
                    <p className="text-sm text-gray-500 mt-1">Geschlossene Faust</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✋</div>
                    <p className="font-semibold text-gray-800">Papier</p>
                    <p className="text-sm text-gray-500 mt-1">Flache, offene Hand</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✌️</div>
                    <p className="font-semibold text-gray-800">Schere</p>
                    <p className="text-sm text-gray-500 mt-1">Zeige- und Mittelfinger als V</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Was Schlägt Was</h2>
            <p className="mb-4">
                Die drei Ergebnisse folgen einem einfachen Kreislauf. Jede Geste schlägt eine und verliert gegen eine:
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Geste</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Schlägt</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Verliert gegen</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Warum</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Stein ✊</td>
                            <td className="p-3 border border-gray-200">Schere ✌️</td>
                            <td className="p-3 border border-gray-200">Papier ✋</td>
                            <td className="p-3 border border-gray-200">Stein zerquetscht Schere; Papier bedeckt Stein</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papier ✋</td>
                            <td className="p-3 border border-gray-200">Stein ✊</td>
                            <td className="p-3 border border-gray-200">Schere ✌️</td>
                            <td className="p-3 border border-gray-200">Papier bedeckt Stein; Schere schneidet Papier</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Schere ✌️</td>
                            <td className="p-3 border border-gray-200">Papier ✋</td>
                            <td className="p-3 border border-gray-200">Stein ✊</td>
                            <td className="p-3 border border-gray-200">Schere schneidet Papier; Stein zerquetscht Schere</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-4">
                Das Spiel ist perfekt ausgewogen — keine Geste ist stärker als die anderen. Jede gewinnt gegen eine und verliert gegen eine, weshalb es weltweit als faires Entscheidungswerkzeug verwendet wird.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Die Gleichzeitige Enthüllung — Die Wichtigste Regel</h2>
            <p className="mb-4">
                Die Kernregel, die das Spiel fair macht: <strong className="text-gray-800">Beide Spieler müssen ihre Geste genau zur gleichen Zeit enthüllen.</strong> Kein Spieler darf warten, um die Wahl des anderen zu sehen, bevor er sich festlegt.
            </p>
            <p className="mb-4">
                Persönlich wird dies durch einen Countdown erzwungen. Gängige Methoden:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Schnick, Schnack, Schnuck</strong> — enthülle auf &ldquo;Schnuck&rdquo;</li>
                <li><strong className="text-gray-800">1, 2, 3, Los!</strong> — enthülle auf &ldquo;Los!&rdquo;</li>
                <li><strong className="text-gray-800">Jan-ken-pon</strong> — der japanische Countdown, enthülle auf &ldquo;pon&rdquo;</li>
            </ul>
            <p className="mb-4">
                Die Spieler pumpen die Faust bei jedem Schlag und öffnen auf die gewählte Geste beim letzten Wort. Zu früh enthüllen (vor dem letzten Schlag) oder zu spät (nachdem die Geste des Gegners gesehen wurde) gilt als Betrug.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Unentschieden und Wie Man Damit Umgeht</h2>
            <p className="mb-4">
                Wenn beide Spieler die gleiche Geste zeigen, ist die Runde unentschieden. Die Standardregel ist einfach: <strong className="text-gray-800">sofort wiederholen</strong>. Weiter wiederholen, bis die Geste eines Spielers die des anderen schlägt.
            </p>
            <p className="mb-4">
                In einem Best-of-3- oder Best-of-5-Match zählen unentschiedene Runden einfach nicht zum Gesamtergebnis. Es wird weitergespielt, bis ein Spieler die Zielvorgabe an Siegen erreicht.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Spielformate</h2>
            <p className="mb-4">
                Schere Stein Papier ist flexibel — das Format hängt vom Kontext ab:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Einzelwurf:</strong> eine Runde, sofortige Entscheidung. Für schnelle Entscheidungen wie wer zahlt oder wer bei einem Brettspiel anfängt.</li>
                <li><strong className="text-gray-800">Best-of-3:</strong> der erste Spieler, der 2 Runden gewinnt, gewinnt das Match. Das Standard-Wettbewerbsformat und das auf dieser Seite verwendete.</li>
                <li><strong className="text-gray-800">Best-of-5:</strong> erster mit 3 Siegen. Wenn ein längeres Match benötigt wird — mehr Runden reduzieren den Einfluss eines Glückswurfs.</li>
                <li><strong className="text-gray-800">Feste Runden:</strong> eine festgelegte Anzahl von Runden (z.B. 10), der Spieler mit den meisten Siegen gewinnt. In Forschungsumgebungen und manchen Turnieren verwendet.</li>
            </ul>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Bereit zu spielen?</p>
                <p className="text-sm text-gray-600 mb-4">Spiel Best-of-3 gegen einen Freund — oder teste die Regeln zuerst gegen den Computer.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Mit einem Freund spielen →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Gegen Computer spielen
                    </Link>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Wie Online Schere Stein Papier Funktioniert</h2>
            <p className="mb-4">
                Die größte Herausforderung beim Online-SSP ist die Durchsetzung der gleichzeitigen Enthüllung. Ohne gemeinsamen physischen Raum und Countdown könnte ein Spieler theoretisch warten, um die Wahl des anderen zu sehen.
            </p>
            <p className="mb-4">
                Auf dieser Seite wird das Enthüllungsproblem mechanisch gelöst: Beide Spieler sperren ihre Wahl privat, bevor ein Ergebnis angezeigt wird. Das System enthüllt beide Züge erst gleichzeitig, nachdem sich beide Spieler festgelegt haben. Keiner kann die Auswahl des anderen sehen, bis die eigene bereits eingereicht ist — was das Online-Spiel strukturell fairer macht als die meisten Präsenzspiele, wo schnelle Hände die Zeitregeln beugen können.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Bekannte Varianten</h2>
            <p className="mb-4">
                Das Kernspiel hat viele Varianten hervorgebracht. Die bekanntesten:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Schere Stein Papier Eidechse Spock</strong> — durch The Big Bang Theory bekannt gemacht. Fügt zwei Gesten hinzu. Eidechse vergiftet Spock und frisst Papier; Spock zertrümmert Schere und verdampft Stein. Das erweiterte Set reduziert Unentschieden deutlich.
                </li>
                <li>
                    <strong className="text-gray-800">Turnier-SSP</strong> — von der World RPS Society geregelt, die offizielle Regeln einschließlich Standards für legale Würfe, Timing und Streitbeilegung veröffentlicht.
                </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Schere Stein Papier auf der Ganzen Welt</h2>
            <p className="mb-4">
                Das Spiel ist global, hat aber viele Namen:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Jan-ken-pon</strong> (Japan) — gilt als älteste dokumentierte Form aus dem 17. Jahrhundert</li>
                <li><strong className="text-gray-800">Roshambo / Rochambeau</strong> (USA) — Ursprung umstritten, weit verbreitet im amerikanischen Westen</li>
                <li><strong className="text-gray-800">Ching chong cha</strong> (Südafrika)</li>
                <li><strong className="text-gray-800">Piedra, papel o tijeras</strong> (spanischsprachige Welt)</li>
                <li><strong className="text-gray-800">Pierre, feuille, ciseaux</strong> (Frankreich)</li>
            </ul>

            {/* Internal link to strategy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Jetzt, da du die Regeln kennst, möchtest du vielleicht tiefer einsteigen.{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Lies den Strategie-Leitfaden →
                    </Link>{" "}
                    — er behandelt die Verhaltenspsychologie-Forschung, die erklärt, warum menschliche Spieler vorhersehbar sind, und wie man das ausnutzt.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig Gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was sind die offiziellen Regeln von Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Zwei Spieler zeigen gleichzeitig eine von drei Gesten: Stein (geschlossene Faust), Papier (flache, offene Hand) oder Schere (zwei Finger als V). Stein schlägt Schere, Schere schlägt Papier, Papier schlägt Stein. Gleiche Geste ist Unentschieden — Runde wiederholen.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was schlägt was bei Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Stein schlägt Schere (zerquetscht sie). Schere schlägt Papier (schneidet es). Papier schlägt Stein (bedeckt ihn). Jede Geste schlägt genau eine andere und verliert gegen eine — was das Spiel perfekt ausgewogen macht.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was passiert bei einem Unentschieden?</h3>
                    <p className="text-gray-600 text-sm">
                        Wenn beide Spieler die gleiche Geste zeigen, ist die Runde unentschieden. Die Standardregel ist, die Runde sofort zu wiederholen, bis die Geste eines Spielers die des anderen schlägt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie viele Runden hat ein Standard-Match?</h3>
                    <p className="text-gray-600 text-sm">
                        Das häufigste Format ist Best-of-3 — der erste Spieler, der 2 Runden gewinnt, gewinnt das Match. Einzelwürfe werden für schnelle Entscheidungen genutzt. Best-of-5 wird in kompetitiveren Umgebungen verwendet.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Woher kommt Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Das Spiel stammt aus China und verbreitete sich nach Japan, wo es Jan-ken-pon hieß. Im frühen 20. Jahrhundert kam es nach Westeuropa und wird heute weltweit unter verschiedenen Namen gespielt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was ist Roshambo?</h3>
                    <p className="text-gray-600 text-sm">
                        Roshambo ist der nordamerikanische Name für Schere Stein Papier. Die Herkunft des Begriffs ist umstritten — er könnte vom französischen Grafen de Rochambeau abstammen oder einfach ein regionaler Spitzname sein, der sich in der amerikanischen Kultur verbreitet hat.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Du kennst die Regeln. Jetzt spiel.</p>
                <p className="text-sm text-gray-500 mb-5">Fordere einen Freund online heraus — kein Konto nötig, einfach Link teilen.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Mit einem Freund spielen →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Gegen Computer spielen
                    </Link>
                </div>
            </div>

        </article>
    );
}

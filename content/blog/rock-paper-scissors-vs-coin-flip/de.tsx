import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier vs. Münzwurf: Was ist fairer?",
    description:
        "Beide sind 50/50 - aber SSP und Münzwurf unterscheiden sich in Agentivität, Varianz und Betrugsresistenz. Was sagen Mathematik und Psychologie?",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-vs-coin-flip",
    readingTime: "5 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Ist Schere Stein Papier wirklich 50/50?",
        a: "Gegen einen vollständig zufälligen Gegner ja. Gegen einen Menschen ist das Verhalten leicht vorhersehbar, es gibt also eine kleine Skillkomponente. Das macht es nicht weniger fair - es macht es interessanter.",
    },
    {
        q: "Ist ein Münzwurf zufälliger als Schere Stein Papier?",
        a: "Ein physischer Münzwurf ist näher an echter Zufälligkeit. Aber SSP Best-of-3 reduziert die Varianz mehr als ein einzelner Münzwurf - für die Beilegung von Streitigkeiten liefert SSP ein stabileres Ergebnis.",
    },
    {
        q: "Kann man bei Online-SSP betrügen?",
        a: "Nicht mit einem echten System zur simultanen Enthüllung. Beide Züge werden gesperrt, bevor ein Spieler das Ergebnis sieht - es gibt keine Möglichkeit, seine Wahl anzupassen, nachdem man die des anderen gesehen hat.",
    },
    {
        q: "Was, wenn beide Spieler SSP-Strategie kennen?",
        a: "Dann ist es ein Skill-Spiel statt Glücksspiel - was die meisten befriedigender finden. Wenn einer deutlich mehr Erfahrung hat, ist ein Münzwurf die fairere Option.",
    },
    {
        q: "Was ist eine faire Methode, um zwischen zwei Personen zu entscheiden?",
        a: "Sowohl Münzwurf als auch SSP sind statistisch fair (50/50). SSP fügt Handlungsspielraum und Drama hinzu; Münzwurf ist schneller und rein zufällig. Für Fernentscheidungen ist Online-SSP mit simultaner Enthüllung am betrugsresistentesten.",
    },
    {
        q: "Wie beilegt man einen Streit fair online?",
        a: "Nutze ein Online-SSP-Spiel mit simultaner Enthüllung - ein Spieler erstellt einen Raum, teilt den Link, beide wählen gleichzeitig. Das vermeidet das Problem, dass der Zweite zu enthüllen seine Wahl anpassen kann.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Du musst etwas zwischen zwei Personen entscheiden. Die Optionen: Münzwurf oder Schere Stein Papier. Beide wirken fair. Beide
                sind schnell. Was ist also wirklich fairer - und spielt das eine Rolle? Das sagen Mathematik, Psychologie und Spieltheorie.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Kurze Antwort:</strong> Beide sind 50/50 in der Grundwahrscheinlichkeit. SSP fügt Handlungsspielraum hinzu,
                    reduziert mit Best-of-3 die Varianz und ist - online mit simultaner Enthüllung gespielt - betrugsresistenter als Züge
                    per Nachricht zu teilen. Ein Münzwurf ist schneller und näher an echter Zufälligkeit. Keine Option ist falsch. SSP ist
                    unterhaltsamer; Münzwurf ist instantaner.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Argument für den Münzwurf</h2>
            <p className="mb-4">
                Der Münzwurf hat seinen Ruf als Standard-Entscheidungstool aus gutem Grund erworben. Die Wahrscheinlichkeit ist so sauber
                wie möglich: 50% Kopf, 50% Zahl, kein Skill-Vorsprung für eine der Parteien. Es gibt keine Möglichkeit zu strategisieren und
                kein Gefühl, überlistet worden zu sein - das Ergebnis ist purer Zufall, den die meisten als inhärent neutral akzeptieren.
            </p>
            <p className="mb-4">
                Es ist auch sofort. Ein Wurf, ein Ergebnis, fertig in unter fünf Sekunden. Keine Einrichtung, keine Erklärung. Bei wichtigen
                Entscheidungen, wo du keine Diskussion über Fairness willst, ist der Münzwurf kaum zu schlagen.
            </p>
            <p className="mb-4">
                Der Nachteil: Es ist passiv. Beide Parteien sind Zuschauer, die darauf warten, dass die Physik entscheidet. Niemand hat
                Einfluss auf das Ergebnis, was es willkürlich wirken lassen kann, selbst wenn es statistisch fair ist.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Argument für Schere Stein Papier</h2>
            <p className="mb-4">
                In der Theorie ist SSP ebenfalls 50/50 gegen einen zufälligen Gegner - jede der drei Optionen schlägt eine, verliert gegen
                eine und unentschieden gegen die dritte. Die Mathematik ist symmetrisch.
            </p>
            <p className="mb-4">In der Praxis hat SSP jedoch mehrere Vorteile gegenüber einem Münzwurf:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Handlungsspielraum:</strong> beide Spieler treffen eine aktive Wahl. Auch wenn das
                    Ergebnis zufällig ist, wirkt es nicht willkürlich - du hast dafür gespielt.
                </li>
                <li>
                    <strong className="text-gray-800">Geringere Varianz:</strong> das Best-of-3-Format macht das Ergebnis stabiler als ein
                    einzelner Münzwurf.
                </li>
                <li>
                    <strong className="text-gray-800">Simultane Enthüllung:</strong> richtig gespielt, kann keiner den Zug des anderen
                    sehen, bevor er sich festlegt.
                </li>
                <li>
                    <strong className="text-gray-800">Befriedigender:</strong> der Verlierer hat seinen Zug gewählt - er kann nicht nur die
                    Physik beschuldigen. Das macht das Ergebnis leichter anzunehmen.
                </li>
            </ul>
            <p className="mb-4">
                Der Kompromiss: SSP hat eine Skillkomponente gegen Menschen. Wenn ein Spieler{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    SSP-Strategie
                </Link>{" "}
                kennt und der andere nicht, ist es nicht mehr wirklich 50/50.
            </p>

            {/* Section 3 - Comparison table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Der Fairness-Vergleich - direktes Aufeinandertreffen</h2>
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Faktor</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Münzwurf</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Schere Stein Papier</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Grundwahrscheinlichkeit</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Handlungsspielraum</td>
                            <td className="p-3 border border-gray-200">Keiner</td>
                            <td className="p-3 border border-gray-200">Hoch</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Varianz pro Entscheidung</td>
                            <td className="p-3 border border-gray-200">Ein Wurf</td>
                            <td className="p-3 border border-gray-200">Best-of-3 (geringere Varianz)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Skillkomponente</td>
                            <td className="p-3 border border-gray-200">Keine</td>
                            <td className="p-3 border border-gray-200">Klein (vs. Menschen)</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Betrugsrisiko (persönlich)</td>
                            <td className="p-3 border border-gray-200">Niedrig</td>
                            <td className="p-3 border border-gray-200">Niedrig (simultane Enthüllung)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Betrugsrisiko (Fern, per Nachricht)</td>
                            <td className="p-3 border border-gray-200">Niedrig</td>
                            <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                                Hoch - zweiter Enthüller kann anpassen
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Betrugsrisiko (online, Echtzeit)</td>
                            <td className="p-3 border border-gray-200">N/A</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                Keines - simultane Enthüllung erzwungen
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Spaßfaktor</td>
                            <td className="p-3 border border-gray-200">Niedrig</td>
                            <td className="p-3 border border-gray-200">Hoch</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Zeit bis Ergebnis</td>
                            <td className="p-3 border border-gray-200">5 Sekunden</td>
                            <td className="p-3 border border-gray-200">30–60 Sekunden</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Musst du jetzt gerade etwas entscheiden?</p>
                <p className="text-sm text-gray-600 mb-4">Teile einen Link - beide wählen simultan, Ergebnis sofort. Kein Konto nötig.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Jetzt entscheiden - 2-Spieler-Spiel starten →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Wann sollte man einen Münzwurf verwenden</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Du brauchst eine sofortige Antwort</strong> - keine Zeit für 3 Runden, nur ein
                    Ergebnis in 5 Sekunden.
                </li>
                <li>
                    <strong className="text-gray-800">Beide Parteien wollen keinen Handlungsspielraum</strong> - manchmal will niemand das
                    Gewicht der Entscheidung tragen.
                </li>
                <li>
                    <strong className="text-gray-800">Es gibt ein Skill-Gefälle</strong> - wenn einer SSP-Strategie kennt und der andere
                    nicht, stellt ein Münzwurf das Gleichgewicht wieder her.
                </li>
                <li>
                    <strong className="text-gray-800">Du bist allein und berichtest das Ergebnis</strong> - ein Münzwurf ist einfacher
                    alleine durchzuführen. SSP erfordert beide Parteien anwesend.
                </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Wann Schere Stein Papier besser ist</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Das Ergebnis soll verdient wirken</strong> - beide haben ihren Zug gewählt. Der
                    Verlierer kann es nicht nur dem Zufall zuschreiben.
                </li>
                <li>
                    <strong className="text-gray-800">Varianz ist wichtig</strong> - Best-of-3 liefert ein zuverlässigeres Ergebnis als ein
                    einzelner Wurf.
                </li>
                <li>
                    <strong className="text-gray-800">Du willst etwas Spannung</strong> - drei Runden Aufbau schlagen einen einzelnen Wurf
                    in Sachen Unterhaltung.
                </li>
                <li>
                    <strong className="text-gray-800">Du machst es aus der Ferne</strong> - Züge per Nachricht teilen ist betrugsanfällig.
                    Ein Online-Tool mit simultaner Enthüllung löst das.
                </li>
            </ul>

            {/* Section 6 - Remote problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Fernproblem - warum Online-SSP Online-Münzwurf schlägt</h2>
            <p className="mb-4">
                Der Hauptfehler bei Fern-SSP ist das Enthüllungsreihenfolge-Problem. Wenn man &ldquo;1-2-3 zeig!&rdquo; per Nachricht
                schreibt oder beim Videoanruf enthüllt, sieht einer die Wahl des anderen, bevor er sich festgelegt hat. Eine
                200ms-Videoverzögerung reicht - der zweite Spieler sieht technisch die Hand des ersten, bevor er entscheidet. Das bricht die
                simultane Enthüllung, die SSP fair macht.
            </p>
            <p className="mb-4">Online-Münzwurf-Tools lösen das Fernfairness-Problem - aber ein Münzwurf war nie interessant.</p>
            <p className="mb-4">
                Online-SSP mit einem echten System zur simultanen Enthüllung löst beides. Beide Spieler sperren ihre Wahl privat, bevor ein
                Ergebnis gezeigt wird. Die Enthüllung ist für beide gleichzeitig - strukturell erzwungen, nicht nur erhofft. Das Ergebnis:
                fair <em>und</em> unterhaltsam. Kein Konto, keine App.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Jeden Streit online in unter 60 Sekunden beilegen</h2>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">2-Spieler-Spiel öffnen und Raum erstellen</p>
                        <p className="text-sm text-gray-600 mt-0.5">Kein Konto - dauert 5 Sekunden.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Link teilen</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Per Nachricht, WhatsApp oder Discord. Die andere Person öffnet es auf einem beliebigen Gerät.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Beide Spieler wählen simultan</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Jeder sperrt seine Wahl privat. Das Ergebnis wird erst enthüllt, nachdem beide eingereicht haben.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Gewinner gewinnt, Streit beigelegt</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Best-of-3-Format. Keine Diskussionen über wer zuerst enthüllte - niemand konnte es.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Wenn du die Chancen beim Spielen zu deinen Gunsten neigen möchtest:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        der Strategie-Leitfaden
                    </Link>{" "}
                    behandelt die Verhaltensmuster, die menschliche Spieler vorhersehbar machen. Oder frische die{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        offiziellen Regeln
                    </Link>{" "}
                    auf, wenn du eine Auffrischung brauchst.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ist Schere Stein Papier wirklich 50/50?</h3>
                    <p className="text-gray-600 text-sm">
                        Gegen einen zufälligen Gegner ja. Gegen Menschen gibt es eine kleine Skillkomponente. Das macht es nicht weniger
                        fair - es macht es interessanter.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ist ein Münzwurf zufälliger als SSP?</h3>
                    <p className="text-gray-600 text-sm">
                        Ein physischer Münzwurf ist näher an echter Zufälligkeit. Aber SSP Best-of-3 reduziert die Varianz mehr, was ein
                        stabileres Ergebnis liefert.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann man bei Online-SSP betrügen?</h3>
                    <p className="text-gray-600 text-sm">
                        Nicht mit einem echten System zur simultanen Enthüllung. Beide Züge werden gesperrt, bevor jemand das Ergebnis
                        sieht.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was, wenn beide SSP-Strategie kennen?</h3>
                    <p className="text-gray-600 text-sm">
                        Dann ist es ein Skill-Spiel - was die meisten befriedigender finden. Hat einer deutlich mehr Erfahrung, ist ein
                        Münzwurf die fairere Option.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was ist eine faire Methode, zwischen zwei Personen zu entscheiden?</h3>
                    <p className="text-gray-600 text-sm">
                        Beide sind statistisch fair (50/50). SSP fügt Handlungsspielraum und Drama hinzu; Münzwurf ist schneller. Für
                        Fernentscheidungen ist Online-SSP mit simultaner Enthüllung am betrugsresistentesten.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie beilegt man einen Streit fair online?</h3>
                    <p className="text-gray-600 text-sm">
                        Nutze ein Online-SSP-Spiel mit simultaner Enthüllung - erstelle einen Raum, teile den Link, beide wählen
                        gleichzeitig. Vermeidet das Problem, dass der Zweite seine Wahl anpassen kann.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">
                    Beim nächsten Mal, wenn du etwas entscheiden musst: vergiss den Münzwurf.
                </p>
                <p className="text-sm text-gray-500 mb-5">
                    Fordere die andere Person zu einem Best-of-3 heraus - dauert 60 Sekunden und fühlt sich wirklich verdient an.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Jetzt entscheiden - 2-Spieler-Spiel starten →
                </CtaLink>
            </div>
        </article>
    );
}

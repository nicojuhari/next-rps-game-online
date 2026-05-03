import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier als Icebreaker für virtuelle Meetings",
    description:
        "Der beste Icebreaker für Remote-Teams. Keine App, kein Konto - einfach einen Link teilen und in 10 Sekunden spielen. So geht es genau.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-virtual-meeting-icebreaker",
    readingTime: "5 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Kann man Schere Stein Papier in einem Zoom-Call spielen?",
        a: "Ja. Jeder Spieler öffnet das Spiel auf seinem eigenen Gerät während des Anrufs. Teile den Link im Chat, beide Spieler wählen privat, und das Ergebnis wird gleichzeitig enthüllt - kein lautes Zählen bis drei, keine Latenzprobleme.",
    },
    {
        q: "Was sind gute Icebreaker für virtuelle Meetings?",
        a: "Die besten virtuellen Icebreaker sind schnell, brauchen keine Einrichtung und funktionieren geräteübergreifend. Schere Stein Papier erfüllt alle drei: unter 60 Sekunden, keine App oder kein Konto, in jeder Kultur bekannt.",
    },
    {
        q: "Wie organisiert man ein SSP-Turnier in einer Videokonferenz?",
        a: "Bilde Paare in einer Klammer. Jedes Paar bekommt einen Spiellink im Chat. Alle Erstrundenspiele laufen gleichzeitig. Gewinner rücken vor. Mit 8 Personen dauert ein komplettes Turnier unter 10 Minuten.",
    },
    {
        q: "Warum ist Schere Stein Papier ein guter Team-Icebreaker?",
        a: "Weltweit bekannt, unter einer Minute, kein Wissensvorsprung und kein Redevertrauen erforderlich, und es gibt immer einen klaren Gewinner - was eine natürliche Reaktion erzeugt, die das Eis besser bricht als jede geskriptete Frage.",
    },
    {
        q: "Wie lange dauert ein virtueller SSP-Icebreaker?",
        a: "Ein Best-of-3-Match dauert 30-60 Sekunden. Ein komplettes 8-Personen-Turnierklammer dauert etwa 10 Minuten. Eine schnelle Runde, in der jeder gegen die Person links spielt, dauert 2-3 Minuten.",
    },
    {
        q: "Funktioniert Schere Stein Papier mit großen Teams?",
        a: "Ja. Für Teams größer als 8-10 Personen, veranstalte ein Turnier oder teile in kleinere Gruppen auf. Alle Spiele sind unabhängig - Paare können gleichzeitig spielen, ohne Koordinationsaufwand.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Remote-Meetings haben eine unangenehme Eröffnungsminute. Alle joinen, jemand fragt &ldquo;Hört ihr mich?&rdquo;, und dann
                gibt es eine Stille bevor die Agenda beginnt. Ein guter Icebreaker behebt das - aber die meisten erfordern einen Moderator,
                eine gemeinsame App oder 10 Minuten Erklärung. Schere Stein Papier braucht nichts davon. Link teilen, Zug wählen, sehen wer
                gewinnt. Fertig in 60 Sekunden, funktioniert auf jedem Gerät, in jeder Kultur bekannt.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Warum SSP als virtueller Icebreaker besser funktioniert als die meisten Alternativen
            </h2>
            <p className="mb-4">
                Die meisten Icebreaker-Formate scheitern aus einem von drei Gründen: sie dauern zu lang, erfordern dass alle komfortabel
                reden, oder brauchen ein Tool, das die Hälfte des Teams noch nie benutzt hat.
            </p>
            <p className="mb-4">Schere Stein Papier umgeht alle drei:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Null Einrichtung:</strong> kein Konto, kein Download, kein Warten bis der Moderator
                    seinen Bildschirm teilt. Spieler öffnen den Link selbst.
                </li>
                <li>
                    <strong className="text-gray-800">Keine Sprachbarriere:</strong> die Regeln - Stein schlägt Schere, Schere schlägt
                    Papier, Papier schlägt Stein - sind in 10 Sekunden erklärt und in den meisten Kulturen bereits bekannt.
                </li>
                <li>
                    <strong className="text-gray-800">Gleiche Ausgangslage:</strong> kein Wissensvorteil, kein Redevertrauen erforderlich,
                    kein Statussignal. Praktikant und Direktor spielen auf genau denselben Bedingungen.
                </li>
                <li>
                    <strong className="text-gray-800">Sofortiges Ergebnis:</strong> jedes Match produziert einen klaren Gewinner und eine
                    natürliche Reaktion - ein Lachen, ein Stöhnen, eine Revancheforderung. Diese Reaktion ist der Icebreaker bei der Arbeit.
                </li>
                <li>
                    <strong className="text-gray-800">Funktioniert auf jedem Gerät:</strong> Handy, Tablet, Laptop - keine
                    Browser-Erweiterung, keine IT-Genehmigung erforderlich.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Warum Spielen über Video nicht funktioniert - und warum das hier funktioniert
            </h2>
            <p className="mb-4">
                Der offensichtliche Ansatz - alle zählen bis drei auf Kamera und enthüllen ihre Geste - scheitert sofort in Videoanrufen.
                Netzwerklatenz bedeutet, dass Spieler Enthüllungen zu leicht unterschiedlichen Zeiten sehen. Ein 200-ms-Delay reicht dafür
                aus, dass eine Person technisch die Hand der anderen sieht, bevor sie sich festlegt.
            </p>
            <p className="mb-4">
                Ein ordentliches Online-Spiel löst dies strukturell. Beide Spieler sperren ihre Wahl privat, bevor ein Ergebnis gezeigt
                wird. Die Enthüllung findet erst statt, nachdem sich beide festgelegt haben - was sie wirklich gleichzeitig macht auf eine
                Weise, die Zählen über Video nie sein kann.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Schritt für Schritt: So läuft es ab</h2>
            <p className="mb-4">
                Das dauert unter 2 Minuten von Anfang bis Ende für ein Paar, oder 5-10 Minuten für ein vollständiges Turnier.
            </p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Host öffnet das Spiel und erstellt einen Raum</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Gehe zum 2-Spieler-Spiel, klicke auf &ldquo;Spiel erstellen&rdquo; und kopiere den Link aus deinem Browser.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Link im Meeting-Chat einfügen</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funktioniert in Zoom, Teams, Meet, Slack oder jedem Chat-Fenster. Der andere Spieler klickt und tritt sofort bei
                            - kein Konto erforderlich.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Beide Spieler wählen ihren Zug</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Jeder Spieler tippt Stein, Papier oder Schere auf seinem eigenen Gerät. Die Wahl ist verborgen, bis beide
                            eingereicht haben.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Ergebnis wird gleichzeitig enthüllt</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Beide Züge erscheinen gleichzeitig. Best-of-3-Format - wer zuerst 2 Runden gewinnt, gewinnt das Match.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Vor dem nächsten Call ausprobieren.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Jetzt einen Raum öffnen - kein Konto nötig, einfach den Link im Meeting-Chat teilen.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Spielraum erstellen →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Konkrete Einsatzmöglichkeiten in Meetings</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Schnelles Aufwärmen für das Team-Standup</h3>
            <p className="mb-4">
                Bevor die Standup-Agenda beginnt, bringt der Moderator zwei Personen zufällig zusammen und spielt live ein Match. Dauert 45
                Sekunden, schafft einen Moment der Lockerheit und bringt alle zur Aufmerksamkeit bevor das eigentliche Meeting beginnt.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Gruppenentscheidung treffen</h3>
            <p className="mb-4">
                Wer präsentiert zuerst in der Demo? Wer wählt die Team-Mittagessen-Option? Wer schreibt das Meeting-Protokoll? Statt einer
                unangenehmen Stille oder dass die lauteste Stimme gewinnt, spielen sie ein schnelles Match. Beide akzeptieren das Ergebnis,
                weil sie eine faire Chance hatten.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Onboarding eines neuen Teammitglieds</h3>
            <p className="mb-4">
                Paare den Neuen mit jedem bestehenden Teammitglied für ein schnelles Match in seiner ersten Woche. Weniger einschüchternd
                als sich vor einer Gruppe vorzustellen, erzeugt natürliche 1-zu-1-Gesprächsstarter und hilft Namen schneller durch den
                Spielkontext zu merken.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Team-Building-Turnier</h3>
            <p className="mb-4">
                Für eine dedizierte Teamaktivität, veranstalte ein Turnierklammer. Mit 8 Personen: alle zufällig setzen, 4 Erstrundenspiele
                gleichzeitig spielen (jedes Paar bekommt seinen eigenen Link), dann Halbfinale und Finale. Alles dauert 10-12 Minuten.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Pattsituation bei einer Abstimmung lösen</h3>
            <p className="mb-4">
                Das Team ist 2:2 bei einer Entscheidung gespalten. Statt zum Manager als Schiedsrichter zu gehen (was Hierarchiedruck
                erzeugt), wählt jede Seite einen Vertreter und sie spielen. Das Ergebnis ist zufällig - aber es wird als fair akzeptiert,
                weil beide Seiten zugestimmt haben.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Turnier-Klammer für größere Teams organisieren</h2>
            <p className="mb-4">Für Teams von 8-16 Personen funktioniert einfache Elimination gut:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Ein Klammer-Tool (Challonge, Bracket HQ oder eine einfache Tabelle) für die Paarungen verwenden</li>
                <li>Den Spiellink jedes Paares gleichzeitig im Gruppenchat teilen</li>
                <li>Alle Erstrundenspiele laufen gleichzeitig - kein Warten auf andere Paare</li>
                <li>Gewinner melden ihr Ergebnis im Chat; rücken in die nächste Runde vor</li>
                <li>Finalspiel live mit allen die im Call zuschauen</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Was einen guten virtuellen Icebreaker ausmacht (und warum die meisten scheitern)
            </h2>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Format</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Zeit</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Problem</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">&ldquo;Zwei Wahrheiten und eine Lüge&rdquo;</td>
                            <td className="p-3 border border-gray-200">5-15 Min</td>
                            <td className="p-3 border border-gray-200">
                                Erfordert Redevertrauen; unangenehm für neue/introvertierte Mitglieder
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Trivia-Quiz</td>
                            <td className="p-3 border border-gray-200">10-20 Min</td>
                            <td className="p-3 border border-gray-200">
                                Wissenslücken benachteiligen Nicht-Muttersprachler und Junior-Mitglieder
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Virtuelles Bingo</td>
                            <td className="p-3 border border-gray-200">10-15 Min</td>
                            <td className="p-3 border border-gray-200">
                                Braucht gemeinsames Tool, Einrichtungszeit, jemanden zur Moderation
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Wortassoziation</td>
                            <td className="p-3 border border-gray-200">3-5 Min</td>
                            <td className="p-3 border border-gray-200">Schwer mit mehr als 4-5 Personen; verliert schnell Energie</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Schere Stein Papier</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">1-10 Min</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                Keine Einrichtung. Kein Reden nötig. Gleiche Ausgangslage. Skaliert auf jede Teamgröße.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Wenn der Icebreaker fertig ist und die Leute weiterspielen wollen:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        lies den Strategie-Leitfaden
                    </Link>{" "}
                    - er behandelt die Verhaltenspsychologie, die erklärt, warum menschliche Spieler vorhersehbar sind. Oder frische die{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        vollständigen Regeln
                    </Link>{" "}
                    auf, falls jemand im Call eine Auffrischung braucht.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann man Schere Stein Papier in einem Zoom-Call spielen?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja. Jeder Spieler öffnet das Spiel auf seinem eigenen Gerät. Teile den Link im Chat, beide wählen privat und das
                        Ergebnis wird gleichzeitig enthüllt - kein lautes Zählen, keine Latenzprobleme.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was sind gute Icebreaker für virtuelle Meetings?</h3>
                    <p className="text-gray-600 text-sm">
                        Die besten sind schnell, brauchen keine Einrichtung und funktionieren für alle Komfortniveaus. SSP erfüllt alle
                        drei: unter 60 Sekunden, keine App oder kein Konto, in jeder Kultur bekannt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie organisiert man ein Turnier in einer Videokonferenz?</h3>
                    <p className="text-gray-600 text-sm">
                        Paare in einer Klammer bilden. Spiellink jedes Paares im Chat teilen. Alle Erstrundenspiele gleichzeitig. Gewinner
                        rücken vor. Mit 8 Personen unter 10 Minuten.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Warum ist es ein guter Team-Icebreaker?</h3>
                    <p className="text-gray-600 text-sm">
                        Weltweit bekannt, unter einer Minute, kein Wissensvorsprung oder Redevertrauen erforderlich, und immer ein klarer
                        Gewinner - der eine natürliche Reaktion erzeugt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie lange dauert ein virtueller SSP-Icebreaker?</h3>
                    <p className="text-gray-600 text-sm">
                        Ein Best-of-3-Match dauert 30-60 Sekunden. Ein Turnier mit 8 Personen etwa 10 Minuten. Eine Schnellrunde wo jeder
                        gegen die linke Person spielt, dauert 2-3 Minuten.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Funktioniert es mit großen Teams?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja. Für Teams größer als 8-10 Personen ein Turnierklammer organisieren oder in kleinere Gruppen aufteilen. Alle
                        Spiele sind unabhängig und können gleichzeitig gespielt werden.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Bereit für dein nächstes Meeting?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Jetzt einen Raum öffnen - Link im Meeting-Chat teilen und in unter 10 Sekunden starten.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Spielraum erstellen →
                </CtaLink>
            </div>
        </article>
    );
}

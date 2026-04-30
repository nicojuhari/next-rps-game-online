import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier gewinnen: Strategie und Psychologie",
    description:
        "Die meisten spielen SSP als reines Glücksspiel. Forscher widersprechen. Lerne die Verhaltensmuster und Strategie für einen echten Vorteil.",
    publishedAt: "2026-04-30",
    slug: "how-to-win-rock-paper-scissors",
    readingTime: "8 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Ist Papier der beste Zug bei Schere Stein Papier?",
        a: "Statistisch gesehen ja - Papier schlägt Stein, der mit etwa 35% der häufigste Zug ist. Aber gegen erfahrene Spieler, die diese Tendenz kennen, wird Schere zum Gegenzug.",
    },
    {
        q: "Was ist die Gewinner-Bleiben, Verlierer-Wechseln-Strategie bei Schere Stein Papier?",
        a: "Gewinner-Bleiben, Verlierer-Wechseln ist ein Verhaltensmuster, bei dem Gewinner dazu neigen, den gerade gewonnenen Zug zu wiederholen, während Verlierer zum nächsten Zug im Zyklus wechseln (Stein → Papier → Schere → Stein). Es wurde in einer Studie der Universität Zhejiang 2014 mit über 100.000 Runden bestätigt.",
    },
    {
        q: "Beeinflusst Psychologie wirklich Schere Stein Papier?",
        a: "Ja. Peer-reviewed Studien zeigen, dass Menschen deutlich vom Zufallsspiel abweichen. Menschen verankern sich emotional an Züge, reagieren vorhersehbar auf Siege und Niederlagen und folgen Mustern, die erfahrene Gegner ausnutzen können.",
    },
    {
        q: "Kann man Schere Stein Papier immer gewinnen?",
        a: "Nicht immer - aber konsistent mehr als 33% gegen menschliche Gegner durch das Lesen von Verhaltensmustern. Gegen einen echten Zufallszahlengenerator (wie einen Computer) gilt keine Strategie.",
    },
    {
        q: "Was ist der beste erste Zug bei Schere Stein Papier?",
        a: "Gegen jeden unbekannten Gegner ist Papier der statistisch stärkste Eröffnungszug. Stein ist der häufigste erste Zug - besonders bei Anfängern und männlichen Spielern - daher hat Papier den besten Erwartungswert in Runde 1.",
    },
    {
        q: "Ist Schere Stein Papier wirklich zufällig?",
        a: "Nicht wenn Menschen spielen. Forschungen der Universität Zhejiang zeigten, dass menschliche Spieler vorhersehbare Muster befolgen, je nachdem ob sie gerade gewonnen oder verloren haben. Ein Computer mit einem Zufallszahlengenerator ist wirklich zufällig, aber menschliche Gegner nicht.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Schere Stein Papier wirkt wie ein Münzwurf. Aber Forschungen der Universität Zhejiang, des MIT Technology Review und
                Verhaltenspsychologen beweisen das Gegenteil. Menschen sind vorhersehbar - und wer die Muster kennt, kann sie ausnutzen.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Ist Schere Stein Papier wirklich zufällig?</h2>
            <p className="mb-4">Die kurze Antwort: nein - zumindest nicht wenn Menschen spielen.</p>
            <p className="mb-4">
                Ein wirklich zufälliges Spiel gibt jedem Spieler genau 33,3% Gewinnrate, ohne Möglichkeit zur Verbesserung. Aber mehrere
                Studien zeigen, dass Menschen deutlich vom Zufallsspiel abweichen. Wir verankern uns an bestimmte Züge, reagieren emotional
                auf Siege und Niederlagen und signalisieren unsere Absichten durch unser Verhalten.
            </p>
            <p className="mb-4">
                Die einflussreichste Studie stammt von der Universität Zhejiang aus dem Jahr 2014. Die Forscher Wang Zhijian, Bin Xu und
                Hai-Jun Zhou analysierten 360 Studenten, die jeweils 300 Runden SSP spielten - über 100.000 Einzelspiele. Sie fanden klare,
                wiederholbare Verhaltensmuster, die es erfahrenen Spielern ermöglichten, die nächsten Züge der Gegner besser als der Zufall
                vorherzusagen.
            </p>
            <p className="mb-4">Das Fazit: Schere Stein Papier ist ein Spiel der Psychologie, kein Glücksspiel.</p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Die Statistiken - Welchen Zug spielen die meisten Menschen?</h2>
            <p className="mb-4">
                Zu verstehen, was der durchschnittliche Spieler wirft, ist die Grundlage jeder Strategie. Forschungsdaten zur Häufigkeit von
                Zügen in großen Stichproben zeigen konsistent:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Stein: ~35%</strong> - der häufigste Zug, deutlich über den erwarteten 33,3%
                </li>
                <li>
                    <strong className="text-gray-800">Schere: ~35%</strong> - fast gleichauf mit Stein
                </li>
                <li>
                    <strong className="text-gray-800">Papier: ~29,6%</strong> - der seltenste Zug
                </li>
            </ul>
            <p className="mb-4">
                Die Schlussfolgerung ist direkt: Papier ist statistisch der stärkste Eröffnungszug. Es schlägt Stein, den häufigsten Zug.
                Und da Papier am seltensten gespielt wird, ist es weniger wahrscheinlich, dass deine Gegner es in Runde 1 kontern.
            </p>
            <p className="mb-4">
                Das erklärt auch die berühmte Auktion von 2005 zwischen Christie&apos;s und Sotheby&apos;s. Mit 17,8 Millionen Dollar auf
                dem Spiel bat Christie&apos;s ein 11-jähriges Mädchen um Rat. Sie überlegte: &ldquo;Alle denken, Stein ist der starke Zug.
                Sie werden Papier spielen, um ihn zu schlagen. Wir spielen Schere.&rdquo; Christie&apos;s gewann.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Gewinner-Bleiben, Verlierer-Wechseln-Muster</h2>
            <p className="mb-4">
                Der wichtigste Befund der Zhejiang-Studie war ein Verhaltensmuster, das sie{" "}
                <strong className="text-gray-800">Gewinner-Bleiben, Verlierer-Wechseln</strong> nannten:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Wenn ein Spieler gewinnt:</strong> neigt er dazu, den gerade gewonnenen Zug zu
                    wiederholen
                </li>
                <li>
                    <strong className="text-gray-800">Wenn ein Spieler verliert:</strong> neigt er dazu, zum nächsten Zug im Uhrzeigersinn
                    zu wechseln: Stein → Papier → Schere → Stein
                </li>
            </ul>
            <p className="mb-4">
                So wendest du das in der Praxis an: Frage dich nach jeder Runde - hat mein Gegner gerade gewonnen oder verloren?
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm space-y-2">
                <p className="font-semibold text-gray-800">Wenn sie gerade gewonnen haben (Gewinner-Bleiben - erwarte Wiederholung):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Gewonnen mit Stein → erwarte wieder Stein → du spielst Papier</li>
                    <li>Gewonnen mit Papier → erwarte wieder Papier → du spielst Schere</li>
                    <li>Gewonnen mit Schere → erwarte wieder Schere → du spielst Stein</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">
                    Wenn sie gerade verloren haben (Verlierer-Wechseln - erwarte den nächsten Zug im Zyklus):
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Verloren mit Stein → erwarte als nächstes Papier → du spielst Schere</li>
                    <li>Verloren mit Papier → erwarte als nächstes Schere → du spielst Stein</li>
                    <li>Verloren mit Schere → erwarte als nächstes Stein → du spielst Papier</li>
                </ul>
            </div>
            <p className="mb-4">
                Das ist kein garantierter Vorhersager - es ist eine Wahrscheinlichkeitsverschiebung. Aber über ein langes Match hinweg
                bewegt es deine Gewinnrate deutlich über 33%.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Anfängerzeichen - Warum Stein für Anfänger ist</h2>
            <p className="mb-4">
                Forschungen zeigen konsistent, dass Anfänger, besonders männliche Spieler, in Runde 1 mit Stein eröffnen. Die Psychologie
                ist einfach: eine geballte Faust fühlt sich stark an. Papier fühlt sich passiv an. Schere fühlt sich riskant an.
            </p>
            <p className="mb-4">
                Die praktische Regel: Gegen jeden unbekannten Gegner wirf zuerst Papier. Statistisch ist es wahrscheinlicher, dass du einem
                Stein gegenüberstehst als irgendetwas anderem.
            </p>
            <p className="mb-4">
                Erfahrene Spieler wissen das - was ein Meta-Spiel erzeugt. Experten erwarten Papier, also spielen sie Schere. Sehr erfahrene
                Spieler erwarten Schere, also kehren sie zu Stein zurück. In der Praxis kollabiert diese rekursive Logik jedoch auf sich
                selbst. Gegen einen neuen Gegner, den du nicht einschätzen kannst, bleibt Papier der prozentual stärkste Zug.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Doppelwurf-Signal</h2>
            <p className="mb-4">
                Spieler werfen selten dreimal hintereinander denselben Zug. Das psychologische Unbehagen offensichtlicher Wiederholung lässt
                es wie ein Zeichen wirken - auch wenn es technisch gesehen kein Mogeln ist.
            </p>
            <p className="mb-4">
                In einem Best-of-3-Match ist dieses Signal in Runde 3 am wichtigsten. Hat dein Gegner bereits zweimal Stein gespielt, sinkt
                die Wahrscheinlichkeit, dass er Stein ein drittes Mal wirft, deutlich. Du kannst Stein aus deiner Vorhersage ausschließen
                und Gewinner-Bleiben, Verlierer-Wechseln nutzen, um einzugrenzen, ob er Papier oder Schere spielen wird.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Körperliche Zeichen lesen (Nur persönlich)</h2>
            <p className="mb-4">
                Im Spiel von Angesicht zu Angesicht telegrafieren Spieler ihren Zug oft in der Sekundenbruchteile vor der Enthüllung:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Eine früh geformte, geballte Faust → wahrscheinlich Stein</li>
                <li>Eine lockere, offene Hand → wahrscheinlich Papier</li>
                <li>Zwei Finger, die sich vor dem Wurf auszustrecken beginnen → wahrscheinlich Schere</li>
            </ul>
            <p className="mb-4">
                Diese Zeichen gelten nur im persönlichen Spiel. Online geben beide Spieler ihre Entscheidung privat ab, bevor irgendein
                Ergebnis angezeigt wird - es gibt kein Zeitfenster, um auf körperliche Hinweise zu reagieren. Das macht Online-Spiele sowohl
                fairer als auch rein strategischer: Jede Entscheidung hängt vollständig davon ab, Verhaltensmuster zu lesen, nicht von
                Reflexen.
            </p>

            {/* Section 7 - Strategy Table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Die beste Strategie für jede Runde im Best-of-3</h2>
            <p className="mb-4">Die oben genannten Muster in einem rundenweisen Leitfaden zusammengefasst:</p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Runde</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Situation</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Zug</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Grund</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">Runde 1</td>
                            <td className="p-3 border border-gray-200">vs unbekannter Gegner</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papier</td>
                            <td className="p-3 border border-gray-200">Schlägt Stein, die häufigste Eröffnung</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Runde 1</td>
                            <td className="p-3 border border-gray-200">vs erfahrener Spieler</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Schere</td>
                            <td className="p-3 border border-gray-200">
                                Experten erwarten Papier und kontern mit Schere - also matchst du sie
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Runde 2</td>
                            <td className="p-3 border border-gray-200">Gegner hat Runde 1 gewonnen</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Konter seinen Gewinnzug</td>
                            <td className="p-3 border border-gray-200">Gewinner-Bleiben: erwarte Wiederholung</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Runde 2</td>
                            <td className="p-3 border border-gray-200">Gegner hat Runde 1 verloren</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Konter seinen nächsten Zykluszug</td>
                            <td className="p-3 border border-gray-200">Verlierer-Wechseln: Stein→Papier, Papier→Schere, Schere→Stein</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Runde 3</td>
                            <td className="p-3 border border-gray-200">Gegner warf denselben Zug zweimal</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Diesen Zug ausschließen</td>
                            <td className="p-3 border border-gray-200">Doppelwurf: er wird ihn kein drittes Mal werfen</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Runde 3</td>
                            <td className="p-3 border border-gray-200">Muss gewinnen, keine klare Einschätzung</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papier</td>
                            <td className="p-3 border border-gray-200">Statistisch stärkster Zug unter Druck</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Teste diese Strategie in der Praxis.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Fordere einen Freund heraus - schau, ob er deine Muster lesen kann, bevor du seine liest.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        2-Spieler-Spiel starten →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Gegen Computer üben
                    </Link>
                </div>
            </div>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Kannst du den Computer bei Schere Stein Papier schlagen?</h2>
            <p className="mb-4">
                Der Computer auf dieser Seite wählt seinen Zug mit einem Zufallszahlengenerator - echte, unvoreingenommene Zufälligkeit.
                Stein, Papier und Schere haben in jeder Runde genau 1 von 3 Chancen, ohne Gedächtnis an vergangene Runden und ohne
                Verhaltensmuster.
            </p>
            <p className="mb-4">
                Das bedeutet, dass Strategie gegen den Computer nicht anwendbar ist. Es gibt kein Gewinner-Bleiben-Muster auszunutzen, kein
                Anfängerzeichen zu lesen. Jede Runde ist ein neuer Münzwurf, und jede Strähne, die du siehst, ist Rauschen.
            </p>
            <p className="mb-4">
                Aber gegen den Computer zu spielen ist trotzdem für eine Sache nützlich: Muster in deinem eigenen Spiel zu entdecken. Wenn
                du bemerkst, dass du über viele Runden hinweg deutlich mehr als 33% verlierst, hast du eine Gewohnheit gefunden, die ein
                menschlicher Gegner ausnutzen könnte. Nutze den Computer, um deine eigenen Zeichen zu finden und abzustellen, bevor du es
                mit einer echten Person aufnimmst.
            </p>
            <p className="mb-4">
                Der echte Test der Strategie ist der Mehrspielermodus. Gegen einen Menschen gilt jedes Muster in diesem Leitfaden.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ist Papier der beste Zug bei Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Statistisch gesehen ja - Papier schlägt Stein, der mit etwa 35% der häufigste Zug ist. Aber gegen erfahrene Spieler,
                        die das wissen, ist Schere der erwartete Gegenzug, was Stein sicherer machen kann.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was ist die Gewinner-Bleiben, Verlierer-Wechseln-Strategie?</h3>
                    <p className="text-gray-600 text-sm">
                        Ein Verhaltensmuster, bei dem Gewinner dazu neigen, den gerade gewonnenen Zug zu wiederholen, während Verlierer zum
                        nächsten Zug im Zyklus wechseln (Stein → Papier → Schere → Stein). Bestätigt von der Universität Zhejiang 2014 in
                        über 100.000 Runden.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Beeinflusst Psychologie wirklich Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja. Mehrere peer-reviewed Studien zeigen, dass Menschen deutlich vom Zufallsspiel abweichen. Menschen verankern sich
                        emotional an Züge, reagieren vorhersehbar auf Siege und Niederlagen und erzeugen Muster, die erfahrene Gegner lesen
                        können.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann man Schere Stein Papier immer gewinnen?</h3>
                    <p className="text-gray-600 text-sm">
                        Nicht immer - aber konsistent über 33% gegen menschliche Gegner durch das Lesen von Verhaltensmustern. Gegen einen
                        echten Zufallszahlengenerator (wie den Computermodus dieser Seite) gilt keine Strategie.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was ist der beste erste Zug bei Schere Stein Papier?</h3>
                    <p className="text-gray-600 text-sm">
                        Gegen jeden unbekannten Gegner ist Papier die statistisch stärkste Eröffnung. Stein ist der häufigste erste Zug -
                        besonders bei Anfängern und männlichen Spielern - also bietet Papier das beste erwartete Ergebnis in Runde 1.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ist Schere Stein Papier wirklich zufällig?</h3>
                    <p className="text-gray-600 text-sm">
                        Nicht wenn Menschen spielen. Forschungen der Universität Zhejiang zeigten, dass menschliche Spieler vorhersehbare
                        Muster befolgen, je nachdem ob sie gerade gewonnen oder verloren haben. Ein Computer mit einem
                        Zufallszahlengenerator ist wirklich zufällig - menschliche Gegner nicht.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Du hast die Strategie gelesen.</p>
                <p className="text-sm text-gray-500 mb-5">
                    Der einzige Weg, sie zu schärfen, ist gegen jemanden zu spielen, der sie nicht kennt.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Freund herausfordern →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Gegen Computer üben
                    </Link>
                </div>
            </div>
        </article>
    );
}

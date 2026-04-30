import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier für Fernbeziehungen",
    description:
        "Paare in Fernbeziehungen können SSP online mit simultaner Enthüllung spielen - keine App, kein Konto, einfach einen Link teilen.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-long-distance-couples",
    readingTime: "4 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Kann man Schere Stein Papier auf Distanz spielen?",
        a: "Ja. Eine Person erstellt einen Spielraum und schickt den Link - die andere öffnet ihn auf einem beliebigen Gerät von überall auf der Welt. Beide wählen ihren Zug privat und das Ergebnis wird gleichzeitig enthüllt. Keine App, kein Konto, kein Download.",
    },
    {
        q: "Wie spielt man Schere Stein Papier fair beim Videoanruf?",
        a: "Das klassische Zählen bis drei auf Kamera funktioniert nicht - Netzwerklatenz sorgt dafür, dass ein Spieler die Hand des anderen eine Millisekunde früher sieht. Ein Browser-Spiel löst das: Beide Züge werden gesperrt, bevor ein Ergebnis gezeigt wird.",
    },
    {
        q: "Welche kostenlosen Spiele können zwei Personen ohne Download online spielen?",
        a: "Schere Stein Papier ist die schnellste Option - Browser öffnen, Raum erstellen, Link teilen. Kein Download, kein Konto, funktioniert auf jedem Handy oder Laptop.",
    },
    {
        q: "Brauchen wir beide ein Konto zum Spielen?",
        a: "Nein. Keine E-Mail, kein Passwort, kein Konto. Link öffnen und spielen.",
    },
    {
        q: "Was, wenn wir in verschiedenen Ländern oder Zeitzonen sind?",
        a: "Funktioniert überall mit Internetverbindung - jedes Land, jede Zeitzone, jedes Gerät.",
    },
    {
        q: "Kann man mehr als eine Runde spielen?",
        a: "Ja - jede Session ist Best-of-3. Spielt so viele Sessions, wie ihr wollt, und führt euren eigenen Gesamtstand.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Du bist mit deinem Partner am Telefon. Der Moment ruft nach einem freundlichen Wettkampf. Schere Stein Papier ist perfekt -
                außer dass das klassische &ldquo;1-2-3&rdquo; vor der Kamera nie fair funktioniert. Netzwerklatenz sorgt dafür, dass jemand
                die Geste des anderen immer eine halbe Sekunde früher sieht. So geht es richtig: sofort, fair, von überall, ohne App.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Warum Schere Stein Papier perfekt für Fernbeziehungen ist</h2>
            <p className="mb-4">
                Die meisten Online-Spiele für Paare erfordern Installation, Downloads oder dass beide auf derselben Plattform sind. Schere
                Stein Papier braucht nichts davon.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Sofort:</strong> keine App, keine Anmeldung, kein Warten. Eine Person erstellt den
                    Raum, teilt den Link und in unter 60 Sekunden spielt ihr.
                </li>
                <li>
                    <strong className="text-gray-800">Kein Druck:</strong> wenn du um 23 Uhr verlierst, kannst du einfach Pech behaupten und
                    eine Revanche fordern.
                </li>
                <li>
                    <strong className="text-gray-800">Wirklich nützlich:</strong> nutzt es, um zu entscheiden, wer den Film heute Abend
                    wählt, wer morgen als Erstes schreibt, oder wer den nächsten Besuch plant.
                </li>
                <li>
                    <strong className="text-gray-800">Leicht kompetitiv:</strong> erzeugt einen Moment Spannung und einen klaren Gewinner -
                    kein ambivalentes &ldquo;Du entscheidest&rdquo;.
                </li>
                <li>
                    <strong className="text-gray-800">Funktioniert auf jedem Gerät:</strong> Handy, Tablet, Laptop - dein Partner muss
                    nichts installieren.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Problem mit FaceTime oder Videoanrufen</h2>
            <p className="mb-4">
                Das klassische &ldquo;1-2-3 zeig&rdquo; auf Kamera scheitert, sobald es irgendeinen Netzwerklag gibt - was immer der Fall
                ist. Eine Verzögerung von 200ms (im normalen Gespräch unsichtbar) reicht aus, damit der zweite Spieler die Hand des ersten
                kurz sieht, bevor er sich festlegt. Die simultane Enthüllung, die SSP fair macht, ist per Video physisch unmöglich.
            </p>
            <p className="mb-4">
                Ein richtiges Online-Spiel löst das strukturell. Beide Spieler sperren ihre Wahl privat. Das Ergebnis wird erst enthüllt,
                nachdem beide eingereicht haben - kein Weg, die Wahl des anderen vor der eigenen Entscheidung zu sehen. Online-SSP ist aus
                genau diesem Grund tatsächlich <em>fairer</em> als SSP in Person.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">So spielt ihr Schere Stein Papier online</h2>
            <p className="mb-4">Von der Idee zum Spielen in unter 60 Sekunden:</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">2-Spieler-Spiel öffnen und Raum erstellen</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Dauert 5 Sekunden. Kein Konto nötig - einfach auf &ldquo;Spiel erstellen&rdquo; klicken.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Link an deinen Partner schicken</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Aus dem Browser kopieren und per WhatsApp, iMessage, Discord oder wo ihr chattet senden.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Partner öffnet es auf seinem Gerät</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funktioniert auf jedem Handy, Tablet oder Laptop - jeder Browser, jedes Land.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Beide wählen gleichzeitig</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Jeder tippt Stein, Papier oder Schere privat. Die Enthüllung findet statt, nachdem beide eingereicht haben -
                            kein Schummeln möglich. Best-of-3-Format.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Schick deinem Partner jetzt den Link.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Kein Konto, keine App - einfach den Link teilen und entscheiden, wer heute Abend die Pläne bestimmt.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    2-Spieler-Spiel starten →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Lustige Wege, SSP in eurer Fernbeziehung einzusetzen</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Das Entscheidungsspiel</h3>
            <p className="mb-4">
                Nutzt Best-of-3, um kleine Debatten zu lösen, die keine Debatte brauchen: wer morgen als Erstes schreibt, wer den Film für
                das virtuelle Date wählt, wer die Flüge für den nächsten Besuch bucht. Macht mehr Spaß als &ldquo;Du entscheidest&rdquo; und
                beendet die &ldquo;Nein, du entscheidest&rdquo;-Schleife komplett.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Die Mutprobe-Edition</h3>
            <p className="mb-4">
                Jede Runde hat einen Einsatz: Der Verlierer teilt ein peinliches Foto, tanzt albern vor der Kamera oder schickt ein echtes
                Kompliment. Ein 3-Runden-Spiel wird zu 15 Minuten Unterhaltung. Funktioniert am besten spät abends, wenn jemand immer wieder
                eine Revanche fordert.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Die laufende Bestenliste</h3>
            <p className="mb-4">
                Führt eine Zählung über mehrere Sessions. Nach 10 Runden oder 2 Wochen schuldet der mit weniger Siegen etwas - einen
                handgeschriebenen Brief, ein Überraschungspaket, das komplette nächste Date planen. Die Bestenliste gibt euch
                Gesprächsstoff: &ldquo;Du führst nur dank der Panne-Runde am Dienstag.&rdquo;
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Das Aufwärmen vor dem Date</h3>
            <p className="mb-4">
                Vor eurem virtuellen Abend spielt Best-of-3, um zu entscheiden, wer die Aktivität wählt. Bringt euch beide in Stimmung,
                bevor das eigentliche Date beginnt - und wer verliert, kann sich später nicht über die Wahl beschweren.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Funktioniert es auf jedem Gerät?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-1">
                    Funktioniert auf jedem Gerät - keine App, kein Konto, nur ein Link.
                </p>
                <p className="text-sm text-gray-600">
                    iOS und Android, jeder Laptop, jedes Tablet, jeder Browser. Dein Partner muss nichts installieren oder ein Konto
                    erstellen. Der Link funktioniert weltweit.
                </p>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Willst du besser werden? Der{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Strategie-Leitfaden
                    </Link>{" "}
                    erklärt die Verhaltensmuster, die menschliche Spieler vorhersehbar machen - nützlich, wenn eine Bestenliste auf dem
                    Spiel steht. Oder für Runden in der Gruppe schau dir den{" "}
                    <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline font-medium">
                        Icebreaker-Leitfaden
                    </Link>{" "}
                    an.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann man Schere Stein Papier auf Distanz spielen?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja. Eine Person erstellt einen Raum und schickt den Link. Die andere öffnet ihn von jedem Gerät, überall. Beide
                        wählen privat und das Ergebnis wird gleichzeitig enthüllt. Keine App, kein Konto.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie spielt man fair beim Videoanruf?</h3>
                    <p className="text-gray-600 text-sm">
                        Bis drei zählen auf Kamera funktioniert nicht - Lag sorgt dafür, dass ein Spieler den Zug des anderen früher sieht.
                        Mit einem Browser-Spiel werden beide Züge gesperrt, bevor jemand das Ergebnis sieht.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Brauchen wir ein Konto?</h3>
                    <p className="text-gray-600 text-sm">Nein. Keine E-Mail, kein Passwort, kein Konto. Link öffnen und spielen.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was, wenn wir in verschiedenen Ländern sind?</h3>
                    <p className="text-gray-600 text-sm">Funktioniert überall mit Internet - jedes Land, jede Zeitzone, jedes Gerät.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann man mehr als eine Runde spielen?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja - jede Session ist Best-of-3. Spielt so viele Sessions, wie ihr wollt, und führt euren eigenen Gesamtstand.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Welche kostenlosen Spiele funktionieren ohne Download?</h3>
                    <p className="text-gray-600 text-sm">
                        SSP ist die schnellste Option - Browser öffnen, Raum erstellen, Link teilen. Kein Download, kein Konto, funktioniert
                        auf jedem Handy oder Laptop.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Bereit zu spielen?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Schick deinem Partner den Link - kein Konto, keine App, nur ein Spiel. Entscheidet die Abendpläne in einer Runde.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    2-Spieler-Spiel starten →
                </CtaLink>
            </div>
        </article>
    );
}

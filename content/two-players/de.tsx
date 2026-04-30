import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "Ist es kostenlos?", a: "Ja. Völlig kostenlos, kein Konto nötig, kein Download erforderlich." },
    { q: "Braucht mein Freund ein Konto?", a: "Nein. Einfach den Link teilen — keine Anmeldung auf keiner Seite." },
    { q: "Können wir von verschiedenen Geräten spielen?", a: "Ja. Ein Spieler am PC, der andere am Handy — funktioniert auf jedem Gerät mit Browser." },
    { q: "Kann man den Zug des anderen sehen, bevor man wählt?", a: "Nein. Beide Züge bleiben verborgen, bis beide Spieler fertig sind. Kein Spicken, kein Schummeln." },
    { q: "Was passiert, wenn ich den Browser schließe?", a: "Der Spielraum bleibt offen. Öffne den Link erneut und mach weiter, wo du aufgehört hast." },
    { q: "Kann ich auf dem Handy spielen?", a: "Ja. Das Spiel funktioniert auf jedem Smartphone oder Tablet." },
    { q: "Können wir Stein Papier Schere nutzen, um eine Wette zu lösen oder eine Entscheidung zu treffen?", a: "Ja. Online spielen ist fairer als in Person — beide Entscheidungen werden gesperrt, bevor einer der Spieler das Ergebnis sieht, sodass niemand seinen Zug im letzten Moment ändern kann. Es ist das gleiche Prinzip wie ein Münzwurf, außer dass beide Spieler aktiv teilnehmen." },
    { q: "Können wir Stein Papier Schere bei einem Zoom- oder Videoanruf spielen?", a: "Ja. Öffne das Spiel auf deinem eigenen Gerät während des Anrufs. Teile den Spiellink im Chat. Beide Spieler wählen ihren Zug unabhängig, und das Ergebnis wird gleichzeitig aufgedeckt — kein lautes Zählen bis drei nötig." },
    { q: "Können wir Stein Papier Schere auf lange Distanz spielen — in verschiedenen Ländern?", a: "Ja. Das Spiel läuft im Browser und funktioniert überall mit Internetverbindung. Kein App-Download oder Konto ist auf keiner Seite nötig. Teile den Link und spiele sofort, egal wo du bist." },
    { q: "Wie viele Spiele können wir in einer Sitzung spielen?", a: "So viele du möchtest. Der Spielraum bleibt offen und verfolgt die kumulierten Punkte über mehrere Spiele hinweg. Kein neuer Link nötig — einfach weiterspielen, bis einer von euch aufgibt." },
];

export function HowToPlay() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Wie man Stein Papier Schere Online mit Freunden spielt
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Mit einem Freund spielen geht in drei Schritten — kein Konto, keine App:</p>
                <ol className="pl-4 space-y-2 list-decimal">
                    <li>
                        <span className="font-semibold text-gray-700">Raum erstellen</span> — klick auf &ldquo;Spiel erstellen&rdquo; oben oder auf der Startseite. Du erhältst sofort einen privaten Link.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Link teilen</span> — schick ihn über eine beliebige Messaging-App. Funktioniert auf jedem Gerät.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Spielen</span> — beide wählen Stein, Papier oder Schere. Beste aus 3 Runden entscheidet.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Zertifikat holen</span> — gewinne mehr Partien als dein Gegner und sichere dir ein persönliches Siegerzeugnis. Herunterladen oder teilen.
                    </li>
                </ol>
            </div>
        </>
    );
}

export function HowItWorks() {
    return (
        <>
            <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Stein Papier Schere 1v1 — So funktioniert es
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Beide wählen gleichzeitig und sehen die Wahl des anderen nicht, bevor sie bestätigt haben. Jede Partie ist dadurch fair — kein Reagieren im letzten Moment, keine Streitereien.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>Wer die meisten Runden gewinnt, gewinnt die Partie. Erster auf 2 Siege gewinnt.</li>
                    <li>Punkte werden über mehrere Partien im selben Raum verfolgt — kein neuer Link nötig.</li>
                </ul>
            </div>
        </>
    );
}

export function WhySettle() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Warum mit Stein Papier Schere entscheiden?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Stein Papier Schere gibt beiden eine faire Chance und dauert Sekunden. Man nutzt es zum Beispiel für:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Wer das Essen bezahlt</li>
                    <li>Wer den Film oder die Playlist wählt</li>
                    <li>Wer in einem Brettspiel anfängt</li>
                    <li>Jede Entscheidung, bei der beide eine faire Chance wollen</li>
                </ul>
                <p>Online spielen verhindert Streit darüber, wer was geworfen hat. Beide Züge werden gleichzeitig bestätigt und aufgedeckt.</p>
            </div>
        </>
    );
}

export function UseCases() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Stein Papier Schere Funktioniert in Mehr Situationen als du Denkst
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                <div>
                    <p className="font-semibold text-gray-700">Virtuelle Meetings &amp; Eisbrecher</p>
                    <p className="mt-1">
                        Brauchst du einen 60-Sekunden-Eisbrecher für deinen Team-Call? SPS funktioniert auf jedem Gerät, braucht keine Einrichtung und sorgt in unter einer Minute für Gelächter.{" "}
                        <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline">
                            Wie man SPS als Eisbrecher in virtuellen Meetings nutzt →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Fernbeziehungen &amp; Freunde auf Distanz</p>
                    <p className="mt-1">
                        Wenn ihr gemeinsam aus verschiedenen Städten entscheidet, schlägt ein geteilter Link jedes Mal das Zählen bis drei im Videoanruf.{" "}
                        <Link href="/blog/rock-paper-scissors-long-distance-couples" className="text-blue-600 hover:underline">
                            Stein Papier Schere für Fernbeziehungen →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Jede Entscheidung treffen</p>
                    <p className="mt-1">
                        Wer wählt das Restaurant? Wer fängt an? Wer ruft die Eltern an? Beide bekommen eine gleiche Chance, und das Ergebnis ist sofort und fair.
                    </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-gray-500">
                    Noch nicht bereit, jemanden herauszufordern?{" "}
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Übe allein gegen den Computer →
                    </Link>
                </div>
            </div>
        </>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Häufig gestellte Fragen
            </h2>
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

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Schere Stein Papier online mit Freunden spielen",
    description:
        "Link teilen, beide wählen gleichzeitig, Gewinner in 60 Sekunden. SSP online mit einem Freund spielen - keine App, keine Anmeldung.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-online-with-friends",
    readingTime: "4 Min. Lesezeit",
};

export const faqItems: FaqItem[] = [
    {
        q: "Muss ich einen Account erstellen, um zu spielen?",
        a: "Nein. Das Spiel ist völlig anonym - keine E-Mail, kein Passwort, kein Profil. Einfach den Link öffnen und losspielen.",
    },
    {
        q: "Wie lade ich meinen Freund ein?",
        a: "Öffne das 2-Spieler-Spiel, kopiere den einzigartigen Raumlink und schicke ihn wie gewohnt - SMS, WhatsApp, Discord, E-Mail. Sobald er den Link öffnet, seid ihr verbunden.",
    },
    {
        q: "Ist es kostenlos?",
        a: "Ja, immer kostenlos. Kein Abo, keine In-App-Käufe.",
    },
    {
        q: "Wie viele Runden dauert ein Spiel?",
        a: "Best of 3. Wer zuerst 2 Runden gewinnt, gewinnt das Spiel.",
    },
    {
        q: "Kann ich auf dem Handy spielen?",
        a: "Ja. Das Spiel läuft in jedem mobilen Browser auf iOS und Android - kein App-Download erforderlich.",
    },
    {
        q: "Was passiert, wenn ich während des Spiels die Verbindung verliere?",
        a: "Der Spielraum bleibt kurz erhalten. Wenn ihr euch beide wieder mit demselben Link verbindet, wird das Spiel dort fortgesetzt, wo es aufgehört hat.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Du und ein Freund müsst etwas entscheiden. Ihr seid nicht im selben Raum. Per Nachricht &ldquo;Schere Stein Papier
                los!&rdquo; hin- und herzuschreiben funktioniert nicht - einer sieht immer die Wahl des anderen, bevor er sich festgelegt
                hat. Es gibt einen besseren Weg: Ein Echtzeit-Spiel mit simultaner Enthüllung, ohne Account, startbereit in unter 60
                Sekunden.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Kurze Antwort:</strong> Um Schere Stein Papier online mit einem Freund zu spielen - öffne das 2-Spieler-Spiel,
                    teile den einzigartigen Raumlink mit deinem Freund, und beide wählen gleichzeitig. Das Ergebnis wird simultan enthüllt.
                    Kein Account oder Download nötig.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Das Problem mit Schere Stein Papier per Nachricht</h2>
            <p className="mb-4">
                Es klingt einfach: eine Nachricht schicken, bis drei zählen, beide zeigen. Aber in der Praxis scheitert es immer auf
                dieselbe Weise. Einer antwortet zuerst und der andere - bewusst oder nicht - passt seine Wahl an. Selbst bei einem
                Videoanruf bedeutet eine Verzögerung von 200 ms, dass der zweite Spieler die Wahl des ersten technisch gesehen sieht, bevor
                er seine eigene bestätigt hat. Die Fairness verschwindet in dem Moment, in dem die Enthüllung nicht simultan erfolgt.
            </p>
            <p className="mb-4">
                Die Lösung ist nicht, schneller zu zählen oder einander mehr zu vertrauen - es geht darum, ein System zu nutzen, das
                strukturell verhindert, dass ein Spieler die Wahl des anderen vor der eigenen Festlegung sieht. Genau das leistet ein
                Echtzeit-Online-SSP-Spiel.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Schere Stein Papier online mit Freunden spielen - Schritt für Schritt
            </h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Schritt 1 - Öffne das 2-Spieler-Spiel</h3>
            <p className="mb-4">
                Gehe zum{" "}
                <Link href="/two-players" className="text-blue-600 hover:underline">
                    2-Spieler-Spiel
                </Link>
                . Kein Account zu erstellen, keine App herunterzuladen, keine E-Mail zu verifizieren. Läuft in jedem Browser auf jedem Gerät
                - Desktop, Handy, Tablet. Du bist in etwa fünf Sekunden im Spielraum.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Schritt 2 - Teile den Link mit deinem Freund</h3>
            <p className="mb-4">
                Wenn du einen Spielraum öffnest, erhältst du eine einzigartige URL. Kopiere sie und schicke sie deinem Freund - per SMS,
                WhatsApp, Discord, E-Mail, was auch immer ihr nutzt. Er öffnet sie auf seinem Gerät, von überall auf der Welt, und ihr seid
                verbunden. Kein geteiltes Passwort, kein Raumcode zum Koordinieren.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Schritt 3 - Beide wählen gleichzeitig</h3>
            <p className="mb-4">
                Jeder Spieler sieht dieselben drei Optionen: Stein, Papier, Schere. Beide bestätigen ihre Wahl privat - keiner kann die des
                anderen sehen, bis beide abgestimmt haben. Kein Countdown zum Koordinieren, kein Vertrauen nötig. Das System erzwingt die
                simultane Enthüllung.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Schritt 4 - Erfahrt, wer gewonnen hat</h3>
            <p className="mb-4">
                Sobald beide gewählt haben, steht das Ergebnis sofort fest. Ihr spielt Best of 3 - wer zuerst 2 Runden gewinnt, gewinnt das
                Spiel. Der Punktestand aktualisiert sich in Echtzeit. Kein manuelles Mitschreiben, kein &ldquo;Warte mal, wie war der
                Stand?&rdquo;. Der Streit ist fair entschieden - in unter einer Minute.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Bereit, jetzt zu spielen?</p>
                <p className="text-sm text-gray-600 mb-4">Link teilen - beide wählen gleichzeitig, Ergebnis sofort. Kein Account nötig.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    2-Spieler-Spiel starten →
                </CtaLink>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Warum simultane Enthüllung wichtig ist</h2>
            <p className="mb-4">
                Schere Stein Papier ist genau deshalb ein faires Spiel, weil keiner der Spieler die Wahl des anderen im Voraus kennt. In dem
                Moment, in dem einer zuerst enthüllt - auch nur um eine Bruchsekunde - hat der andere Informationen, die er nicht haben
                sollte. Forschungen zur menschlichen Entscheidungsfindung zeigen, dass Menschen ihre Entscheidungen auf Basis von
                Teilinformationen anpassen, selbst wenn sie glauben, fair zu spielen.
            </p>
            <p className="mb-4">
                Ein System mit simultaner Enthüllung beseitigt das vollständig. Beide Wahlen werden bestätigt, bevor eine davon angezeigt
                wird. Es gibt keine Möglichkeit, auf etwas zu reagieren, das man nicht gesehen hat. Das ist dasselbe Prinzip wie bei
                verdeckten Auktionen und geheimen Abstimmungen. Wenn du wissen willst, wie das die Strategie beeinflusst, deckt der{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    Strategie-Ratgeber
                </Link>{" "}
                auf, was menschliche Spieler berechenbar macht.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Kann man Schere Stein Papier auf dem Handy spielen?</h2>
            <p className="mb-4">
                Ja. Das Spiel ist browserbasiert und läuft auf jedem mobilen Gerät - iPhone, Android, Tablet. Keine App herunterzuladen,
                keine App-Store-Berechtigungen. Öffne den Link in Safari, Chrome oder einem anderen mobilen Browser und spielst direkt los.
                Die meisten Menschen, die den 2-Spieler-Modus nutzen, tun dies vom Handy aus - mitten in einem Gespräch mit ihrem Freund.
            </p>
            <p className="mb-4">
                Das Layout passt sich an kleinere Bildschirme an, damit die Steuerung leicht antippen lässt. Stein, Papier, Schere - drei
                Schaltflächen, ein Tippen, fertig.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Schere Stein Papier bei Zoom, FaceTime oder Discord</h2>
            <p className="mb-4">
                Wenn du bereits mit jemandem in einem Videoanruf bist, kannst du gleichzeitig online SSP spielen - öffne einfach den
                Spiel-Link in einem anderen Tab, während der Anruf weiterläuft. Teile den Link im Chat und beide klicken durch.
            </p>
            <p className="mb-4">
                Das ist besser als gemeinsam auf &ldquo;drei&rdquo; herunterzuzählen. Die Videoverzögerung führt dazu, dass derjenige, der
                &ldquo;los!&rdquo; sagt, und derjenige, der zuerst enthüllt, nie perfekt synchron sind. Das Online-Spiel beseitigt dieses
                Problem vollständig - keine Wahl ist sichtbar, bis beide abgestimmt haben, unabhängig vom Videoverzug.
            </p>
            <p className="mb-4">
                Dieselbe Logik gilt für Zoom, Teams, FaceTime, Google Meet - jedes Video-Tool. Das Spiel läuft in einem Browser-Tab,
                unabhängig von der Kommunikations-App, die ihr nutzt.
            </p>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Möchtest du die Regeln vor dem Spielen auffrischen?{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Die offiziellen Regeln
                    </Link>{" "}
                    decken alle Fälle ab, einschließlich Unentschieden. Oder wenn ihr entscheidet, wer zuerst etwas tun soll, lies{" "}
                    <Link href="/blog/rock-paper-scissors-vs-coin-flip" className="text-blue-600 hover:underline font-medium">
                        SSP vs. Münzwurf
                    </Link>{" "}
                    um zu sehen, welche Methode wirklich fairer ist.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Muss ich einen Account erstellen, um zu spielen?</h3>
                    <p className="text-gray-600 text-sm">
                        Nein. Das Spiel ist völlig anonym - keine E-Mail, kein Passwort, kein Profil. Einfach den Link öffnen und
                        losspielen.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie lade ich meinen Freund ein?</h3>
                    <p className="text-gray-600 text-sm">
                        Öffne das 2-Spieler-Spiel, kopiere den einzigartigen Raumlink und schicke ihn wie gewohnt - SMS, WhatsApp, Discord,
                        E-Mail. Sobald er den Link öffnet, seid ihr verbunden.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ist es kostenlos?</h3>
                    <p className="text-gray-600 text-sm">Ja, immer kostenlos. Kein Abo, keine In-App-Käufe.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wie viele Runden dauert ein Spiel?</h3>
                    <p className="text-gray-600 text-sm">Best of 3. Wer zuerst 2 Runden gewinnt, gewinnt das Spiel.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kann ich auf dem Handy spielen?</h3>
                    <p className="text-gray-600 text-sm">
                        Ja. Das Spiel läuft in jedem mobilen Browser auf iOS und Android - kein App-Download erforderlich.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Was passiert, wenn ich während des Spiels die Verbindung verliere?</h3>
                    <p className="text-gray-600 text-sm">
                        Der Spielraum bleibt kurz erhalten. Wenn ihr euch beide wieder mit demselben Link verbindet, wird das Spiel dort
                        fortgesetzt, wo es aufgehört hat.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Bereit, es zu entscheiden?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Starte ein 2-Spieler-Spiel, teile den Link und spielt in unter 60 Sekunden. Kein Account nötig.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    2-Spieler-Spiel starten →
                </CtaLink>
            </div>
        </article>
    );
}

import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    {
        q: "Was schlägt Stein bei Stein Papier Schere?",
        a: "Papier schlägt Stein. Papier bedeckt symbolisch den Stein und ist der Gewinnerzug, wenn dein Gegner Stein wirft.",
    },
    {
        q: "Was schlägt Papier?",
        a: "Schere schlägt Papier. Schere schneidet Papier und ist der richtige Zug, wenn dein Gegner Papier spielt.",
    },
    { q: "Was schlägt Schere?", a: "Stein schlägt Schere. Stein zerschmettert die Schere und gewinnt, wenn dein Gegner Schere wirft." },
    {
        q: "Ist Stein Papier Schere nur Glück?",
        a: "Nicht nur. Ein zufälliger Spieler gewinnt 33 % der Zeit, aber echte Menschen folgen Mustern - und Muster lassen sich lesen.",
    },
    {
        q: "Muss ich mich anmelden oder etwas herunterladen?",
        a: "Nein. Das Spiel läuft direkt im Browser. Kein Konto, kein Download, keine App - einfach die Seite öffnen und spielen.",
    },
    {
        q: "Funktioniert es auf dem Handy?",
        a: "Ja. Das Spiel ist vollständig responsiv und funktioniert auf jedem Smartphone oder Tablet mit einem modernen Browser.",
    },
    {
        q: "Was ist der beste Eröffnungszug?",
        a: "Statistisch ist Papier eine starke Wahl. Die meisten Spieler - besonders Anfänger - beginnen mit Stein, weil er stark wirkt. Papier kontert diese Tendenz und gibt dir einen Vorteil in der ersten Runde.",
    },
    {
        q: "Kann ich Stein Papier Schere online mit jemandem aus einem anderen Land spielen?",
        a: "Ja. Das Spiel funktioniert in jedem Browser, überall. Teile den Link und beide Spieler können aus jedem Land, auf jedem Gerät mitspielen - ohne App oder Konto.",
    },
    {
        q: "Wie wählt der Computer seinen Zug? Ist es manipuliert?",
        a: "Der Computer wählt jedes Mal zufällig - Stein, Papier und Schere haben je eine gleiche Chance von 1 zu 3. Es gibt kein Muster, keine Anpassung basierend auf deiner Geschichte und keine Tricks.",
    },
    {
        q: "Ist Stein Papier Schere online besser als per Nachricht?",
        a: "Ja, weil beide Spieler ihren Zug genau gleichzeitig enthüllen. Bei einer Nachrichtenpartie kann ein Spieler seine Antwort verzögern, um auf die Wahl des anderen zu reagieren. Online werden beide Züge gleichzeitig bestätigt und enthüllt - kein Spicken, kein Schummeln.",
    },
];

export function Strategy() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Wie du bei Stein Papier Schere gewinnst
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Die meisten Spieler behandeln Stein Papier Schere wie reinen Zufall - wie einen Münzwurf. Das ist falsch.</p>
                <p>
                    Eine Studie der Universität Zhejiang untersuchte Hunderttausende von Partien und entdeckte, dass Menschen vorhersehbaren
                    Mustern folgen. Die Forscher fanden eine Strategie namens{" "}
                    <strong className="text-gray-700">Gewinn-Halten, Verlust-Wechseln</strong>:
                </p>
                <ul className="list-disc space-y-2 pl-4">
                    <li>
                        <span className="font-semibold text-gray-700">Wenn du gewinnst:</span> Dein Gegner wechselt wahrscheinlich seinen
                        Zug.
                        <br />
                        <span className="italic text-gray-500">Gegenzug:</span> Spiel denselben Zug wie dein Gegner - er schlägt das, was
                        als Nächstes kommt.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Wenn du verlierst:</span> Dein Gegner wiederholt seinen Siegeszug,
                        weil er sich &ldquo;glücklich&rdquo; fühlt.
                        <br />
                        <span className="italic text-gray-500">Gegenzug:</span> Spiel den Zug, der seinen letzten Zug schlägt.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Strategie beim ersten Wurf:</span> Anfänger - besonders männliche
                        Spieler - beginnen meist mit Stein, weil er stark wirkt.
                        <br />
                        <span className="italic text-gray-500">Tipp:</span> Gegen einen unbekannten Gegner: fang mit Papier an.
                    </li>
                </ul>
                <p>
                    <span className="font-semibold text-gray-700">Ist Stein Papier Schere Glück oder Können?</span> Beides. Ein rein
                    zufälliger Spieler gewinnt 33,3 % der Zeit. Menschliche Entscheidungen sind aber nicht zufällig - Muster zu erkennen
                    bringt einen echten Vorteil.
                </p>
                <p>
                    Teste deine Strategie - gewinne mehr Partien als dein Gegner und sichere dir ein persönliches Siegerzeugnis zum
                    Herunterladen und Teilen.
                </p>
                <p>
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Den vollständigen Strategie-Leitfaden lesen →
                    </Link>
                </p>
            </div>
        </>
    );
}

export function Rules() {
    return (
        <>
            <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">Regeln von Stein Papier Schere</h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Stein Papier Schere wird zwischen zwei Spielern gespielt. Beide zeigen gleichzeitig eines von drei Zeichen - der
                    Gewinner wird nach drei einfachen Regeln bestimmt:
                </p>
                <ul className="pl-4 space-y-2 list-disc">
                    <li>
                        <span className="font-semibold text-gray-700">Stein schlägt Schere</span> - ✊ → ✂️
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Schere schneidet Papier</span> - ✂️ → 📄
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Papier bedeckt Stein</span> - 📄 → ✊
                    </li>
                </ul>
                <p>Zeigen beide dasselbe Zeichen, endet die Runde unentschieden.</p>
                <p className="font-semibold text-gray-700">Wie funktioniert &ldquo;Beste aus 3&rdquo;?</p>
                <p>
                    Jede Partie besteht aus 3 Runden. Beide Spieler wählen alle Züge, bevor Ergebnisse angezeigt werden - niemand kann auf
                    den anderen reagieren. Wer die meisten Runden gewinnt, gewinnt die Partie. Gewinnt jeder eine Runde und die dritte endet
                    unentschieden, ist die Partie remis.
                </p>
                <p>
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Die vollständigen Regeln ansehen →
                    </Link>
                </p>
            </div>
        </>
    );
}

export function Statistics() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Statistiken zu Stein Papier Schere
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    In einem rein zufälligen Spiel hat jeder Wurf eine gleiche Chance von 1 zu 3 (33,3 %) zu gewinnen, zu verlieren oder
                    unentschieden zu enden.
                </p>
                <p>
                    In der Praxis spielen Menschen nicht zufällig. Forschungen zeigen, dass die tatsächliche Verteilung ungefähr so
                    aussieht: <strong className="text-gray-700">Stein ~35 %, Papier ~35 %, Schere ~30 %</strong>. Schere wird am seltensten
                    gewählt.
                </p>
                <p>
                    2005 entschied eine einzige Runde Stein Papier Schere über einen Auktionsauftrag im Wert von{" "}
                    <strong className="text-gray-700">17,8 Millionen Dollar</strong>. Christie&apos;s und Sotheby&apos;s waren sich uneinig
                    über das Recht, eine wertvolle Kunstsammlung zu versteigern, und einigten sich auf ein Spiel.
                </p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Sotheby&apos;s behandelte es als Zufall und spielte Papier.</li>
                    <li>
                        Christie&apos;s fragte die elfjährigen Zwillingstöchter eines Direktors um Rat. Die Mädchen überlegten: &ldquo;Alle
                        denken, Stein ist der starke Zug. Sotheby&apos;s erwartet Stein, also spielen sie Papier. Spielt Schere.&rdquo;
                    </li>
                </ul>
                <p>
                    Christie&apos;s spielte Schere. Sotheby&apos;s spielte Papier. Christie&apos;s gewann - und bewies, dass selbst bei
                    einem einfachen Spiel Psychologie über reinen Zufall siegt.
                </p>
            </div>
        </>
    );
}

export function History() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">Was ist Stein Papier Schere?</h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Stein Papier Schere ist ein Handspiel, das weltweit gespielt wird - meist zwischen zwei Personen. Es dient oft als
                    schnelle Entscheidungshilfe, ist aber auch ein Spiel des gegenseitigen Einschätzens.
                </p>
                <p>
                    Das Spiel reicht über <strong className="text-gray-700">2.000 Jahre zurück in die chinesische Han-Dynastie</strong> (206
                    v. Chr. - 220 n. Chr.), wo es <em>Shoushiling</em> hieß und Gesten eines Frosches, einer Schnecke und einer Schlange
                    darstellte.
                </p>
                <p>
                    In Japan wurde es als <em>Jan-Ken</em> bekannt und zum alltäglichen Mittel zur Streitbeilegung in Schulen und Betrieben.
                    Im frühen 20. Jahrhundert gelangte es in den Westen. Heute kennt es viele Namen: <em>Roshambo</em> in den USA, Piedra
                    Papel Tijeras in Spanien - immer dieselben drei Gesten.
                </p>
                <p>
                    <strong className="text-gray-700">Wusstest du?</strong> Der 27. August ist offiziell der Welt-Stein-Papier-Schere-Tag.
                </p>
                <p>
                    Der Computer auf dieser Seite wählt rein zufällig - jedes Mal eine gleiche Chance von 1 zu 3 für Stein, Papier oder
                    Schere. Keine Tricks, nur Zufall.
                </p>
                <p>
                    Online spielen schließt auch die häufigste Betrugsform beim physischen Spiel aus. In Person kann ein Spieler seinen Wurf
                    um Millisekunden verzögern, um auf die Hand des Gegners zu reagieren - bekannt als &ldquo;Shadowing&rdquo;. Auf
                    rps-game.online bestätigen beide Spieler ihren Zug verdeckt, bevor Ergebnisse angezeigt werden - jede Partie ist fair.
                </p>
            </div>
        </>
    );
}

export function BlogLinks() {
    const posts = [
        { href: "/blog/how-to-win-rock-paper-scissors", title: "Schere Stein Papier gewinnen: Strategie und Psychologie" },
        { href: "/blog/rock-paper-scissors-rules", title: "Schere Stein Papier Regeln: Der vollständige Leitfaden" },
        {
            href: "/blog/rock-paper-scissors-virtual-meeting-icebreaker",
            title: "Schere Stein Papier als Icebreaker für virtuelle Meetings",
        },
        { href: "/blog/rock-paper-scissors-long-distance-couples", title: "Schere Stein Papier für Fernbeziehungen" },
        { href: "/blog/rock-paper-scissors-vs-coin-flip", title: "Schere Stein Papier vs. Münzwurf: Was ist fairer?" },
        { href: "/blog/rock-paper-scissors-online-with-friends", title: "Schere Stein Papier online mit Freunden spielen" },
    ];
    return (
        <div className="mt-8 pt-6 border-t border-gray-100">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Vom Blog</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {posts.map(({ href, title }) => (
                    <li key={href}>
                        <LocaleLink href={href} className="text-sm text-gray-600 hover:text-blue-600 hover:underline">
                            {title} →
                        </LocaleLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">Häufig gestellte Fragen</h2>
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

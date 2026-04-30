import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Reglas de Piedra Papel Tijeras: La Guía Completa",
    description:
        "Aprende las reglas completas de PPT - gestos, condiciones de victoria, empates y formatos de juego - y cómo funciona en línea.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-rules",
    readingTime: "5 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Cuáles son las reglas oficiales de piedra papel tijeras?",
        a: "Dos jugadores revelan simultáneamente uno de tres gestos con la mano: Piedra (puño cerrado), Papel (mano abierta y plana) o Tijeras (dos dedos en V). Piedra vence a Tijeras, Tijeras vence a Papel, Papel vence a Piedra. El mismo gesto es empate - se repite la ronda.",
    },
    {
        q: "¿Qué vence a qué en piedra papel tijeras?",
        a: "Piedra vence a Tijeras (las aplasta). Tijeras vence a Papel (lo corta). Papel vence a Piedra (la cubre). Cada jugada vence a exactamente otra y pierde ante una - haciendo el juego perfectamente equilibrado.",
    },
    {
        q: "¿Qué pasa cuando hay empate en piedra papel tijeras?",
        a: "Cuando ambos jugadores hacen el mismo gesto, es un empate. La regla estándar es repetir la ronda de inmediato hasta que el gesto de un jugador venza al del otro.",
    },
    {
        q: "¿Cuántas rondas tiene una partida estándar de piedra papel tijeras?",
        a: "El formato más común es al mejor de 3: el primer jugador en ganar 2 rondas gana la partida. Los lanzamientos únicos se usan para decisiones rápidas. El mejor de 5 se usa en contextos más competitivos.",
    },
    {
        q: "¿De dónde viene piedra papel tijeras?",
        a: "El juego se originó en China y se extendió a Japón, donde se conoció como jan-ken-pon. Llegó a Occidente a principios del siglo XX y ahora se juega en todo el mundo con diferentes nombres.",
    },
    {
        q: "¿Qué es roshambo?",
        a: "Roshambo es el nombre norteamericano del juego, común en Estados Unidos. El origen del término es debatido - puede derivar del conde francés de Rochambeau o simplemente ser un apodo regional que se extendió en la cultura americana.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Piedra Papel Tijeras es uno de los juegos de manos más jugados en el mundo. La mayoría lo aprende de niño y nunca vuelve a
                pensar en las reglas - pero las disputas sobre empates, revelaciones simultáneas y formatos correctos surgen constantemente.
                Esta guía cubre todo: los gestos, qué vence a qué, cómo funcionan los empates, formatos de juego y cómo el juego en línea
                cambia la mecánica.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Los Tres Gestos</h2>
            <p className="mb-4">Cada jugador forma una de tres formas con la mano al mismo tiempo:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✊</div>
                    <p className="font-semibold text-gray-800">Piedra</p>
                    <p className="text-sm text-gray-500 mt-1">Puño cerrado</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✋</div>
                    <p className="font-semibold text-gray-800">Papel</p>
                    <p className="text-sm text-gray-500 mt-1">Mano abierta y plana</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✌️</div>
                    <p className="font-semibold text-gray-800">Tijeras</p>
                    <p className="text-sm text-gray-500 mt-1">Índice y corazón extendidos en V</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Qué Vence a Qué</h2>
            <p className="mb-4">Los tres resultados siguen un ciclo simple. Cada gesto vence a uno y pierde ante uno:</p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Gesto</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Vence a</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Pierde ante</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Por qué</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Piedra ✊</td>
                            <td className="p-3 border border-gray-200">Tijeras ✌️</td>
                            <td className="p-3 border border-gray-200">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Piedra aplasta Tijeras; Papel cubre Piedra</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Piedra ✊</td>
                            <td className="p-3 border border-gray-200">Tijeras ✌️</td>
                            <td className="p-3 border border-gray-200">Papel cubre Piedra; Tijeras corta Papel</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Tijeras ✌️</td>
                            <td className="p-3 border border-gray-200">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Piedra ✊</td>
                            <td className="p-3 border border-gray-200">Tijeras corta Papel; Piedra aplasta Tijeras</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-4">
                El juego está perfectamente equilibrado - ningún gesto es más fuerte que los demás. Cada uno gana contra uno y pierde ante
                uno, lo que explica por qué se usa como herramienta de decisión justa en todo el mundo.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Revelación Simultánea - La Regla Más Importante</h2>
            <p className="mb-4">
                La regla central que hace justo el juego:{" "}
                <strong className="text-gray-800">ambos jugadores deben revelar su gesto exactamente al mismo tiempo.</strong> Ningún
                jugador puede esperar a ver la elección del otro antes de comprometerse.
            </p>
            <p className="mb-4">En persona, esto se aplica con un conteo previo. Métodos comunes:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Piedra, Papel, Tijeras, ¡Ya!</strong> - se revela en &ldquo;¡Ya!&rdquo;
                </li>
                <li>
                    <strong className="text-gray-800">1, 2, 3, ¡Ahora!</strong> - se revela en &ldquo;¡Ahora!&rdquo;
                </li>
                <li>
                    <strong className="text-gray-800">Jan-ken-pon</strong> - el conteo japonés, se revela en &ldquo;pon&rdquo;
                </li>
            </ul>
            <p className="mb-4">
                Los jugadores bombean el puño en cada golpe y abren en el gesto elegido en la última palabra. Revelar antes (antes del
                último golpe) o después (tras ver la jugada del oponente) se considera trampa.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Empates y Cómo Manejarlos</h2>
            <p className="mb-4">
                Cuando ambos jugadores hacen el mismo gesto, la ronda es un empate. La regla estándar es sencilla:{" "}
                <strong className="text-gray-800">repetir de inmediato</strong>. Seguir repitiendo hasta que el gesto de un jugador venza al
                del otro.
            </p>
            <p className="mb-4">
                En un partido al mejor de 3 o mejor de 5, las rondas empatadas simplemente no cuentan para el total de ningún jugador. Se
                continúa hasta que uno alcance el número objetivo de victorias.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formatos de Juego</h2>
            <p className="mb-4">Piedra Papel Tijeras es flexible - el formato depende del contexto:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Lanzamiento único:</strong> una ronda, decisión inmediata. Se usa para elecciones
                    rápidas como quién paga la cuenta o quién va primero en un juego de mesa.
                </li>
                <li>
                    <strong className="text-gray-800">Mejor de 3:</strong> el primer jugador en ganar 2 rondas gana el partido. El formato
                    competitivo estándar y el que se usa en este sitio.
                </li>
                <li>
                    <strong className="text-gray-800">Mejor de 5:</strong> el primero en ganar 3. Se usa cuando se necesita un partido más
                    largo - más rondas reduce la influencia de un lanzamiento afortunado y da más espacio a la estrategia.
                </li>
                <li>
                    <strong className="text-gray-800">Rondas fijas:</strong> un número determinado de rondas (ej. 10), ganando quien acumule
                    más victorias. Se usa en entornos de investigación y algunos torneos.
                </li>
            </ul>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Listo para jugar?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Juega al mejor de 3 contra un amigo - o prueba las reglas contra la computadora primero.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jugar con un Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jugar vs Computadora
                    </Link>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cómo Funciona Piedra Papel Tijeras en Línea</h2>
            <p className="mb-4">
                El mayor desafío del PPT en línea es aplicar la revelación simultánea. Sin un espacio físico compartido y un conteo, un
                jugador podría esperar para ver la elección del otro.
            </p>
            <p className="mb-4">
                En este sitio, el problema de la revelación se resuelve mecánicamente: ambos jugadores bloquean su elección de forma privada
                antes de que se muestre ningún resultado. El sistema solo revela ambas jugadas al mismo tiempo, después de que ambos
                jugadores se hayan comprometido. Ninguno puede ver la selección del otro hasta que la suya ya está enviada - haciendo el
                juego en línea estructuralmente más justo que la mayoría de los juegos en persona, donde las manos rápidas pueden doblar las
                reglas de tiempo.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Variantes Comunes</h2>
            <p className="mb-4">El juego original ha generado muchas variantes. Las más conocidas:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Piedra Papel Tijeras Lagarto Spock</strong> - popularizado por The Big Bang Theory.
                    Añade dos gestos. Lagarto envenena a Spock y come Papel; Spock rompe Tijeras y vaporiza Piedra. El conjunto ampliado
                    reduce los empates significativamente.
                </li>
                <li>
                    <strong className="text-gray-800">Torneo de PPT</strong> - gobernado por la World RPS Society, que publica reglas
                    oficiales que incluyen estándares para lanzamientos legales, timing y resolución de disputas.
                </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Piedra Papel Tijeras en Todo el Mundo</h2>
            <p className="mb-4">El juego es global pero tiene muchos nombres:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Jan-ken-pon</strong> (Japón) - considerada la forma documentada más antigua, del siglo
                    XVII
                </li>
                <li>
                    <strong className="text-gray-800">Roshambo / Rochambeau</strong> (EE.UU.) - origen debatido, muy usado en el oeste
                    americano
                </li>
                <li>
                    <strong className="text-gray-800">Ching chong cha</strong> (Sudáfrica)
                </li>
                <li>
                    <strong className="text-gray-800">Schnick, Schnack, Schnuck</strong> (Alemania)
                </li>
                <li>
                    <strong className="text-gray-800">Pierre, feuille, ciseaux</strong> (Francia)
                </li>
            </ul>

            {/* Internal link to strategy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Ahora que conoces las reglas, quizás quieras profundizar.{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Lee la guía de estrategia →
                    </Link>{" "}
                    - cubre la investigación de psicología conductual que explica por qué los jugadores humanos son predecibles, y cómo
                    aprovecharlo.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuáles son las reglas oficiales de piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Dos jugadores revelan simultáneamente uno de tres gestos: Piedra (puño cerrado), Papel (mano abierta y plana) o
                        Tijeras (dos dedos en V). Piedra vence a Tijeras, Tijeras vence a Papel, Papel vence a Piedra. El mismo gesto es
                        empate - se repite la ronda.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué vence a qué en piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Piedra vence a Tijeras (las aplasta). Tijeras vence a Papel (lo corta). Papel vence a Piedra (la cubre). Cada jugada
                        vence a exactamente otra y pierde ante una - haciendo el juego perfectamente equilibrado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué pasa cuando hay empate en piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Cuando ambos jugadores hacen el mismo gesto, es un empate. La regla estándar es repetir la ronda de inmediato hasta
                        que el gesto de un jugador venza al del otro.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                        ¿Cuántas rondas tiene una partida estándar de piedra papel tijeras?
                    </h3>
                    <p className="text-gray-600 text-sm">
                        El formato más común es al mejor de 3 - el primer jugador en ganar 2 rondas gana el partido. Los lanzamientos únicos
                        se usan para decisiones rápidas. El mejor de 5 se usa en contextos más competitivos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿De dónde viene piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        El juego se originó en China y se extendió a Japón, donde se llamó jan-ken-pon. Llegó a Occidente a principios del
                        siglo XX y ahora se juega en todo el mundo con nombres como roshambo o rochambeau.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué es roshambo?</h3>
                    <p className="text-gray-600 text-sm">
                        Roshambo es el nombre norteamericano del juego. El origen del término es debatido - puede derivar del conde francés
                        de Rochambeau o simplemente ser un apodo regional que se extendió en la cultura americana.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ya conoces las reglas. Ahora juega.</p>
                <p className="text-sm text-gray-500 mb-5">Desafía a un amigo en línea - sin cuenta, solo comparte el enlace.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jugar con un Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jugar vs Computadora
                    </Link>
                </div>
            </div>
        </article>
    );
}

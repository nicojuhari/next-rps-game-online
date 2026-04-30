import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Cómo Ganar en Piedra Papel Tijeras: Psicología, Estrategia e Investigación",
    description:
        "La mayoría trata Piedra Papel Tijeras como pura suerte. Los investigadores no están de acuerdo. Aprende los patrones de comportamiento, las estadísticas y la estrategia ronda a ronda que te dan una ventaja real.",
    publishedAt: "2026-04-30",
    slug: "how-to-win-rock-paper-scissors",
    readingTime: "8 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Es papel la mejor jugada en piedra papel tijeras?",
        a: "Estadísticamente, sí — papel vence a piedra, que es la jugada más común con alrededor del 35% de las veces. Pero contra jugadores experimentados que conocen esta tendencia, tijeras se convierte en la respuesta.",
    },
    {
        q: "¿Qué es la estrategia ganar-quedarse, perder-cambiar en piedra papel tijeras?",
        a: "Ganar-quedarse, perder-cambiar es un patrón de comportamiento en el que los ganadores tienden a repetir la jugada ganadora, mientras que los perdedores tienden a cambiar a la siguiente jugada en el ciclo (Piedra → Papel → Tijeras → Piedra). Fue confirmado en un estudio de 2014 de la Universidad de Zhejiang con más de 100.000 rondas.",
    },
    {
        q: "¿La psicología realmente afecta al piedra papel tijeras?",
        a: "Sí. Estudios revisados por pares muestran que los humanos se desvían significativamente del juego aleatorio. Las personas se anclan a jugadas emocionalmente, reaccionan a victorias y derrotas de manera predecible y siguen patrones que oponentes hábiles pueden explotar.",
    },
    {
        q: "¿Puedes ganar en piedra papel tijeras siempre?",
        a: "No siempre — pero consistentemente más del 33% contra oponentes humanos leyendo patrones de comportamiento. Contra un generador de números aleatorios verdadero (como una computadora), ninguna estrategia aplica.",
    },
    {
        q: "¿Cuál es la mejor primera jugada en piedra papel tijeras?",
        a: "Contra cualquier oponente desconocido, Papel es la jugada inicial estadísticamente más fuerte. Piedra es la jugada inicial más común — especialmente en jugadores principiantes y masculinos — así que Papel te da el mejor valor esperado en la ronda 1.",
    },
    {
        q: "¿Es piedra papel tijeras realmente aleatorio?",
        a: "No cuando juegan humanos. Investigaciones de la Universidad de Zhejiang encontraron que los jugadores humanos siguen patrones predecibles basados en si acaban de ganar o perder. Una computadora que usa un generador de números aleatorios es verdaderamente aleatoria, pero los oponentes humanos no lo son.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Piedra Papel Tijeras parece un lanzamiento de moneda. Pero investigaciones de la Universidad de Zhejiang, el MIT Technology Review y psicólogos conductuales demuestran que no lo es. Los seres humanos son predecibles — y una vez que conoces los patrones, puedes explotarlos.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">¿Es Piedra Papel Tijeras Realmente Aleatorio?</h2>
            <p className="mb-4">
                La respuesta corta: no — al menos no cuando juegan humanos.
            </p>
            <p className="mb-4">
                Un juego verdaderamente aleatorio le da a cada jugador exactamente un 33,3% de tasa de victorias sin forma de mejorarlo. Pero múltiples estudios muestran que los humanos se desvían significativamente del juego aleatorio. Nos anclamos a ciertas jugadas, reaccionamos emocionalmente a victorias y derrotas, y revelamos nuestras intenciones a través del comportamiento.
            </p>
            <p className="mb-4">
                El estudio más influyente provino de la Universidad de Zhejiang en 2014. Los investigadores Wang Zhijian, Bin Xu y Hai-Jun Zhou analizaron a 360 estudiantes jugando 300 rondas de PPT cada uno — más de 100.000 partidas individuales. Encontraron patrones de comportamiento claros y repetibles que permitían a jugadores hábiles predecir las próximas jugadas de sus oponentes mejor que el azar.
            </p>
            <p className="mb-4">
                La conclusión: Piedra Papel Tijeras es un juego de psicología, no de suerte.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Las Estadísticas — ¿Qué Jugada Usa Más la Gente?</h2>
            <p className="mb-4">
                Entender qué lanza el jugador promedio es la base de cualquier estrategia. Los datos de investigación sobre la frecuencia de jugadas en muestras grandes muestran consistentemente:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Piedra: ~35%</strong> — la jugada más usada, muy por encima del esperado 33,3%</li>
                <li><strong className="text-gray-800">Tijeras: ~35%</strong> — casi empatada con Piedra</li>
                <li><strong className="text-gray-800">Papel: ~29,6%</strong> — la jugada menos usada</li>
            </ul>
            <p className="mb-4">
                La implicación es directa: Papel es estadísticamente la jugada inicial más fuerte. Vence a Piedra, la jugada más común. Y como Papel se usa menos, es menos probable que tus oponentes la contrarresten en la ronda 1.
            </p>
            <p className="mb-4">
                Esto también explica la famosa subasta de 2005 entre Christie&apos;s y Sotheby&apos;s. Con 17,8 millones de dólares en juego, Christie&apos;s pidió consejo a una niña de 11 años. Ella razonó: &ldquo;Todos creen que Piedra es la jugada fuerte. Jugarán Papel para contrarrestarla. Nosotros jugamos Tijeras.&rdquo; Christie&apos;s ganó.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">El Patrón Ganar-Quedarse, Perder-Cambiar</h2>
            <p className="mb-4">
                El hallazgo clave del estudio de Zhejiang fue un patrón de comportamiento que llamaron <strong className="text-gray-800">Ganar-Quedarse, Perder-Cambiar</strong>:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Si un jugador gana:</strong> tiende a repetir la jugada que acaba de ganar</li>
                <li><strong className="text-gray-800">Si un jugador pierde:</strong> tiende a cambiar a la siguiente jugada en el ciclo: Piedra → Papel → Tijeras → Piedra</li>
            </ul>
            <p className="mb-4">
                Cómo usar esto en la práctica: después de cada ronda, pregúntate — ¿mi oponente acaba de ganar o perder?
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm space-y-2">
                <p className="font-semibold text-gray-800">Si acaban de ganar (Ganar-Quedarse — espera que repitan):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Ganaron con Piedra → espera Piedra otra vez → tú juegas Papel</li>
                    <li>Ganaron con Papel → espera Papel otra vez → tú juegas Tijeras</li>
                    <li>Ganaron con Tijeras → espera Tijeras otra vez → tú juegas Piedra</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">Si acaban de perder (Perder-Cambiar — espera la siguiente jugada en el ciclo):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Perdieron con Piedra → espera Papel a continuación → tú juegas Tijeras</li>
                    <li>Perdieron con Papel → espera Tijeras a continuación → tú juegas Piedra</li>
                    <li>Perdieron con Tijeras → espera Piedra a continuación → tú juegas Papel</li>
                </ul>
            </div>
            <p className="mb-4">
                Esto no es un predictor garantizado — es un desplazamiento de probabilidad. Pero a lo largo de un partido largo, mueve tu tasa de victorias de manera significativa por encima del 33%.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Señal del Principiante — Por Qué Piedra es para Novatos</h2>
            <p className="mb-4">
                Las investigaciones muestran consistentemente que los principiantes, especialmente los jugadores masculinos, abren con Piedra en la ronda 1. La psicología es sencilla: un puño cerrado se siente fuerte. Papel se siente pasivo. Tijeras se siente arriesgado.
            </p>
            <p className="mb-4">
                La regla práctica: contra cualquier oponente desconocido, lanza Papel primero. Estadísticamente es más probable que enfrentes una Piedra que cualquier otra cosa.
            </p>
            <p className="mb-4">
                Los jugadores experimentados saben esto — lo que crea un meta-juego. Los expertos esperan Papel, así que juegan Tijeras. Los jugadores muy experimentados esperan Tijeras, así que vuelven a Piedra. Pero en la práctica, esta lógica recursiva colapsa sobre sí misma. Contra un nuevo oponente del que no tienes lectura, Papel sigue siendo la jugada porcentual.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Señal del Doble Lanzamiento</h2>
            <p className="mb-4">
                Los jugadores raramente lanzan la misma jugada tres veces seguidas. La incomodidad psicológica de la repetición obvia hace que se sienta como una señal — incluso cuando técnicamente no es trampa.
            </p>
            <p className="mb-4">
                En un partido al mejor de 3, esta señal importa más en la ronda 3. Si tu oponente ya jugó Piedra dos veces, la probabilidad de que la lance una tercera vez cae significativamente. Puedes eliminar Piedra de tu predicción y usar Ganar-Quedarse, Perder-Cambiar para determinar si lanzará Papel o Tijeras.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Leer Señales Físicas (Solo en Persona)</h2>
            <p className="mb-4">
                En juego cara a cara, los jugadores suelen telegrafiar su jugada en la fracción de segundo antes de revelarla:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Un puño apretado formándose temprano → probablemente Piedra</li>
                <li>Una mano suelta y abierta → probablemente Papel</li>
                <li>Dos dedos comenzando a extenderse antes del lanzamiento → probablemente Tijeras</li>
            </ul>
            <p className="mb-4">
                Estas señales solo aplican en persona. En línea, ambos jugadores se comprometen de forma privada antes de que se muestre algún resultado — no hay ventana para reaccionar a señales físicas. Esto hace que el juego en línea sea más justo y puramente estratégico: cada decisión depende completamente de leer patrones de comportamiento, no de reflejos.
            </p>

            {/* Section 7 — Strategy Table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Mejor Estrategia para Cada Ronda en un Mejor de 3</h2>
            <p className="mb-4">
                Combinando los patrones anteriores en una guía ronda a ronda:
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Ronda</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Situación</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Jugada</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Razón</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">Ronda 1</td>
                            <td className="p-3 border border-gray-200">vs oponente desconocido</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel</td>
                            <td className="p-3 border border-gray-200">Vence a Piedra, la apertura más común</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Ronda 1</td>
                            <td className="p-3 border border-gray-200">vs jugador experimentado</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Tijeras</td>
                            <td className="p-3 border border-gray-200">Los expertos esperan Papel y usan Tijeras — así que tú los igualas</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Ronda 2</td>
                            <td className="p-3 border border-gray-200">Oponente ganó la Ronda 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Contrarresta su jugada ganadora</td>
                            <td className="p-3 border border-gray-200">Ganar-Quedarse: espera que repita</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Ronda 2</td>
                            <td className="p-3 border border-gray-200">Oponente perdió la Ronda 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Contrarresta su siguiente jugada en el ciclo</td>
                            <td className="p-3 border border-gray-200">Perder-Cambiar: Piedra→Papel, Papel→Tijeras, Tijeras→Piedra</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Ronda 3</td>
                            <td className="p-3 border border-gray-200">Oponente lanzó la misma jugada dos veces</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Elimina esa jugada</td>
                            <td className="p-3 border border-gray-200">Doble lanzamiento: no la lanzará por tercera vez</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Ronda 3</td>
                            <td className="p-3 border border-gray-200">Debes ganar, sin lectura clara</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel</td>
                            <td className="p-3 border border-gray-200">Jugada estadísticamente más fuerte bajo presión</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pon esta estrategia a prueba.</p>
                <p className="text-sm text-gray-600 mb-4">Desafía a un amigo — ve si puede leer tus patrones antes de que tú leas los suyos.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Iniciar Partida de 2 Jugadores →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Practicar vs Computadora
                    </Link>
                </div>
            </div>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">¿Puedes Vencer a la Computadora en Piedra Papel Tijeras?</h2>
            <p className="mb-4">
                La computadora de este sitio elige su jugada usando un generador de números aleatorios — aleatoriedad verdadera e imparcial. Piedra, Papel y Tijeras tienen exactamente 1 de cada 3 posibilidades en cada ronda, sin memoria de rondas anteriores y sin patrones de comportamiento.
            </p>
            <p className="mb-4">
                Esto significa que la estrategia no aplica contra la computadora. No hay patrón Ganar-Quedarse que explotar, ni señal de principiante que leer. Cada ronda es un lanzamiento de moneda fresco, y cualquier racha que veas es ruido.
            </p>
            <p className="mb-4">
                Pero jugar contra la computadora sigue siendo útil para una cosa: descubrir patrones en tu propio juego. Si notas que pierdes significativamente más del 33% a lo largo de muchas rondas, has encontrado un hábito que un oponente humano podría explotar. Usa la computadora para encontrar y eliminar tus propias señales antes de enfrentarte a una persona real.
            </p>
            <p className="mb-4">
                La prueba real de la estrategia es el multijugador. Contra un humano, cada patrón de esta guía aplica.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Es papel la mejor jugada en piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Estadísticamente, sí — papel vence a piedra, que es la jugada más común con alrededor del 35% de las veces. Pero contra jugadores experimentados que conocen esto, tijeras es la respuesta esperada, lo que puede hacer que piedra sea más segura.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué es la estrategia ganar-quedarse, perder-cambiar?</h3>
                    <p className="text-gray-600 text-sm">
                        Un patrón de comportamiento en el que los ganadores tienden a repetir la jugada que acaba de ganar, mientras que los perdedores cambian a la siguiente jugada en el ciclo (Piedra → Papel → Tijeras → Piedra). Confirmado por la Universidad de Zhejiang en 2014 en más de 100.000 rondas.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿La psicología realmente afecta al piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí. Múltiples estudios revisados por pares muestran que los humanos se desvían significativamente del juego aleatorio. Las personas se anclan a jugadas emocionalmente, reaccionan de manera predecible a victorias y derrotas, y crean patrones que oponentes hábiles pueden leer.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Puedes ganar en piedra papel tijeras siempre?</h3>
                    <p className="text-gray-600 text-sm">
                        No siempre — pero consistentemente por encima del 33% contra oponentes humanos leyendo patrones de comportamiento. Contra un generador de números aleatorios verdadero (como el modo computadora de este sitio), ninguna estrategia aplica.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuál es la mejor primera jugada en piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Contra cualquier oponente desconocido, Papel es la apertura estadísticamente más fuerte. Piedra es la jugada inicial más común — especialmente en principiantes y jugadores masculinos — así que Papel te da el mejor resultado esperado en la ronda 1.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Es piedra papel tijeras realmente aleatorio?</h3>
                    <p className="text-gray-600 text-sm">
                        No cuando juegan humanos. Investigaciones de la Universidad de Zhejiang encontraron que los jugadores humanos siguen patrones predecibles basados en si acaban de ganar o perder. Una computadora que usa un generador de números aleatorios es verdaderamente aleatoria — los oponentes humanos no lo son.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Ya leíste la estrategia.</p>
                <p className="text-sm text-gray-500 mb-5">La única forma de perfeccionarla es jugar contra alguien que no la conoce.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Desafiar a un Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Practicar vs Computadora
                    </Link>
                </div>
            </div>

        </article>
    );
}

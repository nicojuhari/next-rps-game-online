import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Piedra Papel Tijeras como Icebreaker en Reuniones Virtuales",
    description:
        "El mejor icebreaker para equipos remotos. Sin app, sin cuenta - solo comparte un enlace y estás jugando en 10 segundos. Así es como hacerlo.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-virtual-meeting-icebreaker",
    readingTime: "5 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Se puede jugar piedra papel tijeras en una videollamada de Zoom?",
        a: "Sí. Cada jugador abre el juego en su propio dispositivo durante la llamada. Comparte el enlace en el chat, ambos jugadores eligen en privado y el resultado se revela simultáneamente - sin contar hasta tres en voz alta ni problemas de latencia.",
    },
    {
        q: "¿Cuáles son buenos icebreakers para reuniones virtuales?",
        a: "Los mejores icebreakers virtuales son rápidos, no requieren configuración y funcionan con distintos dispositivos y niveles de comodidad. Piedra Papel Tijeras cumple los tres: menos de 60 segundos, sin app ni cuenta, conocido en todas las culturas.",
    },
    {
        q: "¿Cómo se organiza un torneo de piedra papel tijeras en una videollamada?",
        a: "Empareja a la gente en un cuadro de eliminación. Cada pareja recibe un enlace de juego en el chat. Todos los enfrentamientos de la primera ronda se juegan simultáneamente. Los ganadores avanzan. Con 8 personas, un torneo completo dura menos de 10 minutos.",
    },
    {
        q: "¿Por qué es un buen icebreaker de equipo el piedra papel tijeras?",
        a: "Es universalmente conocido, dura menos de un minuto, no requiere conocimientos ni confianza para hablar, y siempre produce un ganador claro - lo que genera una reacción natural que rompe el hielo mejor que cualquier pregunta guionizada.",
    },
    {
        q: "¿Cuánto dura un icebreaker virtual de piedra papel tijeras?",
        a: "Un partido al mejor de 3 dura 30-60 segundos. Un torneo completo con 8 personas tarda unos 10 minutos. Una ronda rápida donde todos juegan con el de su izquierda dura 2-3 minutos.",
    },
    {
        q: "¿Puede funcionar piedra papel tijeras con equipos grandes?",
        a: "Sí. Para equipos de más de 8-10 personas, organiza un torneo en cuadro o divide en grupos más pequeños. Todos los partidos son independientes - las parejas pueden jugar simultáneamente sin necesidad de coordinación.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Las reuniones remotas tienen un minuto de apertura incómodo. Todos se conectan, alguien dice &ldquo;¿me escucháis?&rdquo;, y
                luego hay un silencio antes de que empiece la agenda. Un buen icebreaker lo soluciona - pero la mayoría requieren un
                facilitador, una app compartida o 10 minutos de explicación. Piedra Papel Tijeras no necesita nada de eso. Comparte un
                enlace, elige una jugada, ve quién gana. Listo en 60 segundos, funciona en cualquier dispositivo, conocido en todas las
                culturas.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Por Qué PPT Funciona Mejor como Icebreaker Virtual que la Mayoría de Alternativas
            </h2>
            <p className="mb-4">
                La mayoría de los formatos de icebreaker fallan por una de tres razones: tardan demasiado, requieren que todos se sientan
                cómodos hablando, o necesitan una herramienta que la mitad del equipo nunca ha usado.
            </p>
            <p className="mb-4">Piedra Papel Tijeras evita los tres problemas:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Sin configuración:</strong> sin cuenta, sin descarga, sin esperar a que el facilitador
                    comparta pantalla. Los jugadores abren el enlace ellos mismos.
                </li>
                <li>
                    <strong className="text-gray-800">Sin barrera idiomática:</strong> las reglas - piedra vence a tijeras, tijeras vence a
                    papel, papel vence a piedra - se explican en 10 segundos y ya son conocidas en la mayoría de culturas.
                </li>
                <li>
                    <strong className="text-gray-800">En igualdad de condiciones:</strong> no hay ventaja de conocimiento, no se requiere
                    confianza para hablar, no hay señal de jerarquía. El becario y el director juegan exactamente en los mismos términos.
                </li>
                <li>
                    <strong className="text-gray-800">Resultado inmediato:</strong> cada partido produce un ganador claro y una reacción
                    natural - una risa, un quejido, una petición de revancha. Esa reacción es el icebreaker cumpliendo su función.
                </li>
                <li>
                    <strong className="text-gray-800">Funciona en cualquier dispositivo:</strong> móvil, tablet, portátil - sin extensión de
                    navegador, sin aprobación de IT.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por Qué Jugar por Vídeo No Funciona - y Por Qué Esto Sí</h2>
            <p className="mb-4">
                El enfoque obvio - todos cuentan hasta tres en cámara y muestran su gesto - falla inmediatamente en videollamadas. La
                latencia de red hace que los jugadores vean las revelaciones en momentos ligeramente diferentes. Un retraso de 200ms es
                suficiente para que una persona vea técnicamente la mano de la otra antes de comprometerse.
            </p>
            <p className="mb-4">
                Un juego online adecuado lo resuelve estructuralmente. Ambos jugadores bloquean su elección en privado antes de que se
                muestre ningún resultado. La revelación ocurre solo después de que ambos se han comprometido - haciéndola genuinamente
                simultánea de una forma que contar por vídeo nunca puede serlo.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cómo Hacerlo: Paso a Paso</h2>
            <p className="mb-4">
                Esto lleva menos de 2 minutos de principio a fin para una pareja, o 5-10 minutos para un torneo completo.
            </p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">El anfitrión abre el juego y crea una sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Entra al juego para 2 jugadores, haz clic en &ldquo;Crear partida&rdquo; y copia el enlace de tu navegador.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Pega el enlace en el chat de la reunión</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funciona en Zoom, Teams, Meet, Slack o cualquier ventana de chat. El otro jugador hace clic y se une al instante
                            - sin cuenta necesaria.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Ambos jugadores eligen su jugada</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada jugador toca Piedra, Papel o Tijeras en su propio dispositivo. La elección está oculta hasta que ambos
                            hayan enviado.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">El resultado se revela simultáneamente</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Ambas jugadas aparecen al mismo tiempo. Formato al mejor de 3 - el primero en ganar 2 rondas gana el partido.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pruébalo antes de tu próxima llamada.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Abre una sala ahora - sin cuenta, solo pega el enlace en el chat de tu reunión.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Crear una Sala de Juego →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formas Concretas de Usarlo en Reuniones</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Calentamiento rápido para un standup de equipo</h3>
            <p className="mb-4">
                Antes de que empiece la agenda, el facilitador empareja a dos personas al azar y juegan un partido en vivo. Tarda 45
                segundos, crea un momento de distensión y hace que la gente preste atención antes de que empiece la reunión de verdad.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Tomar una decisión de grupo</h3>
            <p className="mb-4">
                ¿Quién presenta primero en la demo? ¿Quién elige la opción del almuerzo del equipo? ¿Quién redacta el resumen de la reunión?
                En lugar de un silencio incómodo o que gane la voz más alta, juegan un partido rápido. Ambas personas aceptan el resultado
                porque han tenido una oportunidad justa.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Incorporación de un nuevo miembro del equipo</h3>
            <p className="mb-4">
                Empareja al nuevo con cada miembro del equipo existente para un partido rápido en su primera semana. Es menos arriesgado que
                pedirle que se presente ante un grupo, genera conversaciones naturales uno a uno y le ayuda a recordar nombres más rápido.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Torneo de team building</h3>
            <p className="mb-4">
                Para una actividad de equipo dedicada, organiza un torneo en cuadro. Con 8 personas: empareja a todos aleatoriamente, juega
                4 partidos de primera ronda simultáneamente (cada pareja obtiene su propio enlace), luego semifinales y final. Todo tarda
                10-12 minutos.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Desempatar una votación igualada</h3>
            <p className="mb-4">
                El equipo está dividido 2-2 sobre una decisión. En lugar de acudir al manager como árbitro (lo que crea presión jerárquica),
                cada bando elige un campeón y juegan. El resultado es aleatorio - pero se acepta como justo porque ambas partes lo
                acordaron.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Organizar un Torneo para Equipos Grandes</h2>
            <p className="mb-4">Para equipos de 8-16 personas, la eliminación directa funciona bien:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    Usa una herramienta de cuadro (Challonge, Bracket HQ, o una hoja de cálculo simple) para establecer los emparejamientos
                </li>
                <li>Comparte el enlace de cada pareja simultáneamente en el chat del grupo</li>
                <li>Todos los partidos de primera ronda se juegan al mismo tiempo - sin esperar a que terminen otras parejas</li>
                <li>Los ganadores reportan su resultado en el chat; avanzan a la siguiente ronda</li>
                <li>El partido final se juega en directo con todos mirando en la llamada</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Qué Hace Bueno un Icebreaker Virtual (y Por Qué la Mayoría Falla)
            </h2>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Formato</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Tiempo</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Problema</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">&ldquo;Dos verdades y una mentira&rdquo;</td>
                            <td className="p-3 border border-gray-200">5-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Requiere comodidad hablando; incómodo para miembros nuevos o introvertidos
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Quiz de trivia</td>
                            <td className="p-3 border border-gray-200">10-20 min</td>
                            <td className="p-3 border border-gray-200">
                                La brecha de conocimiento penaliza a no hablantes nativos y miembros junior
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Bingo virtual</td>
                            <td className="p-3 border border-gray-200">10-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Requiere una herramienta compartida, tiempo de configuración, alguien que facilite
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Asociación de palabras</td>
                            <td className="p-3 border border-gray-200">3-5 min</td>
                            <td className="p-3 border border-gray-200">Difícil con más de 4-5 personas; pierde energía rápido</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Piedra Papel Tijeras</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">1-10 min</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                Sin configuración. Sin hablar. En igualdad. Escala a cualquier tamaño.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Una vez terminado el icebreaker y si la gente quiere seguir jugando:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        lee la guía de estrategia
                    </Link>{" "}
                    - cubre la psicología conductual que explica por qué los jugadores humanos son predecibles. O repasa las{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        reglas completas
                    </Link>{" "}
                    si alguien en la llamada necesita un repaso.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Se puede jugar piedra papel tijeras en una videollamada de Zoom?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí. Cada jugador abre el juego en su propio dispositivo. Comparte el enlace en el chat, ambos eligen en privado y el
                        resultado se revela simultáneamente - sin contar en voz alta ni problemas de latencia.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuáles son buenos icebreakers para reuniones virtuales?</h3>
                    <p className="text-gray-600 text-sm">
                        Los mejores son rápidos, sin configuración y sin barrera de idioma ni nivel. Piedra Papel Tijeras cumple los tres:
                        menos de 60 segundos, sin app ni cuenta, conocido en todas las culturas.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cómo se organiza un torneo en videollamada?</h3>
                    <p className="text-gray-600 text-sm">
                        Empareja a la gente en un cuadro. Comparte el enlace de cada pareja en el chat. Todos los partidos de primera ronda
                        se juegan a la vez. Los ganadores avanzan. Con 8 personas, menos de 10 minutos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Por qué es un buen icebreaker de equipo?</h3>
                    <p className="text-gray-600 text-sm">
                        Universalmente conocido, menos de un minuto, sin ventaja de conocimiento ni confianza para hablar, y siempre produce
                        un ganador claro que genera una reacción natural.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuánto dura un icebreaker virtual de piedra papel tijeras?</h3>
                    <p className="text-gray-600 text-sm">
                        Un partido al mejor de 3 dura 30-60 segundos. Un torneo con 8 personas tarda unos 10 minutos. Una ronda rápida donde
                        todos juegan con el de su izquierda dura 2-3 minutos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Funciona con equipos grandes?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí. Para equipos de más de 8-10 personas, organiza un torneo en cuadro o divide en grupos más pequeños. Todos los
                        partidos son independientes y pueden jugarse simultáneamente.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Listo para tu próxima reunión?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Abre una sala ahora - pega el enlace en el chat de tu reunión y empieza en menos de 10 segundos.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Crear una Sala de Juego →
                </CtaLink>
            </div>
        </article>
    );
}

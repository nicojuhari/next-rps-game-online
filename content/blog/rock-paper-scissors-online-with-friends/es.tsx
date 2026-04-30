import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Cómo jugar piedra papel tijeras online con amigos",
    description:
        "Comparte un enlace, los dos eligen al mismo tiempo, ganador en 60 segundos. Jugar PPT online con un amigo - sin app, sin registro.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-online-with-friends",
    readingTime: "4 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Necesito crear una cuenta para jugar?",
        a: "No. El juego es completamente anónimo - sin correo, sin contraseña, sin perfil. Solo abre el enlace y juega.",
    },
    {
        q: "¿Cómo invito a mi amigo?",
        a: "Abre la partida de 2 jugadores, copia el enlace único de la sala y envíaselo como quieras - SMS, WhatsApp, Discord, correo. Cuando abra el enlace, estaréis conectados.",
    },
    {
        q: "¿Es gratis?",
        a: "Sí, siempre gratis. Sin suscripciones ni compras dentro de la app.",
    },
    {
        q: "¿Cuántas rondas dura una partida?",
        a: "Al mejor de 3. El primero en ganar 2 rondas gana la partida.",
    },
    {
        q: "¿Se puede jugar desde el móvil?",
        a: "Sí. El juego funciona en cualquier navegador móvil en iOS y Android - sin necesidad de descargar ninguna app.",
    },
    {
        q: "¿Qué pasa si pierdo la conexión a mitad de partida?",
        a: "La sala de juego persiste brevemente. Si ambos volvéis a conectaros al mismo enlace, la partida se retoma donde la dejasteis.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Tú y un amigo tenéis que decidir algo. No estáis en el mismo sitio. Mandarse mensajes de &ldquo;piedra papel tijeras
                ¡ya!&rdquo; no funciona - uno siempre ve la elección del otro antes de comprometerse. Hay una forma mejor: una partida en
                tiempo real con revelación simultánea, sin cuenta, lista en menos de 60 segundos.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Respuesta rápida:</strong> Para jugar piedra papel tijeras online con un amigo - abre la partida de 2 jugadores,
                    comparte el enlace único de la sala con tu amigo, y los dos elegís a la vez. El resultado se revela de forma simultánea.
                    Sin cuenta ni descarga.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">El problema de jugar piedra papel tijeras por mensaje</h2>
            <p className="mb-4">
                Parece sencillo: mandas un mensaje, cuentas hasta tres y ambos revelais. Pero en la práctica siempre falla igual. Uno
                responde primero y el otro - conscientemente o no - ajusta su elección. Incluso en una videollamada, un retraso de 200 ms
                significa que el segundo jugador técnicamente ve la elección del primero antes de confirmar la suya. La equidad desaparece
                en el momento en que la revelación no es simultánea.
            </p>
            <p className="mb-4">
                La solución no es contar más rápido ni fiarse más el uno del otro - es usar un sistema que impida estructuralmente que un
                jugador vea la elección del otro antes de comprometerse. Eso es exactamente lo que hace un juego de PPT en tiempo real
                online.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cómo jugar piedra papel tijeras online con amigos - paso a paso</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Paso 1 - Abre la partida de 2 jugadores</h3>
            <p className="mb-4">
                Ve a la{" "}
                <Link href="/two-players" className="text-blue-600 hover:underline">
                    partida de 2 jugadores
                </Link>
                . Sin cuenta que crear, sin app que descargar, sin correo que verificar. Funciona en cualquier navegador en cualquier
                dispositivo - ordenador, móvil, tablet. Llegas a la sala de juego en unos cinco segundos.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Paso 2 - Comparte el enlace con tu amigo</h3>
            <p className="mb-4">
                Al abrir una sala de juego obtienes una URL única. Cópiala y envíasela a tu amigo - por SMS, WhatsApp, Discord, correo, lo
                que usáis. Lo abre en su dispositivo, desde cualquier lugar, y ya estáis conectados. Sin contraseña compartida, sin código
                de sala que coordinar.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Paso 3 - Los dos eligen a la vez</h3>
            <p className="mb-4">
                Cada jugador ve las mismas tres opciones: Piedra, Papel, Tijeras. Los dos confirmáis vuestra elección en privado - ninguno
                puede ver la del otro hasta que ambos han enviado la suya. Sin cuenta atrás que coordinar, sin fiarse. El sistema impone la
                revelación simultánea.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Paso 4 - Descubrís quién gana</h3>
            <p className="mb-4">
                Una vez que ambos han elegido, el resultado es instantáneo. Jugáis al mejor de 3 - el primero en ganar 2 rondas gana la
                partida. La puntuación se actualiza en tiempo real. Sin apuntarlo a mano, sin &ldquo;espera, ¿cómo íbamos?&rdquo;. El
                desacuerdo está resuelto, de forma justa, en menos de un minuto.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Listo para jugar ahora mismo?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Comparte un enlace - los dos eligen a la vez, el resultado es instantáneo. Sin cuenta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida de 2 jugadores →
                </CtaLink>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por qué importa la revelación simultánea</h2>
            <p className="mb-4">
                Piedra papel tijeras es un juego justo precisamente porque ningún jugador conoce la elección del otro de antemano. En el
                momento en que uno revela primero - aunque sea una fracción de segundo - el otro tiene información que no debería tener. Las
                investigaciones sobre toma de decisiones humana muestran que las personas ajustan sus elecciones basándose en información
                parcial incluso cuando creen que están jugando limpio.
            </p>
            <p className="mb-4">
                Un sistema de revelación simultánea elimina eso por completo. Ambas elecciones se confirman antes de que ninguna sea
                visible. No hay forma de reaccionar a lo que no has visto. Es el mismo principio que hay detrás de las subastas sobre pliego
                cerrado y las votaciones secretas. Si quieres profundizar en cómo esto afecta a la estrategia, la{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    guía de estrategia
                </Link>{" "}
                cubre qué hace a los jugadores humanos predecibles.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">¿Se puede jugar piedra papel tijeras en el móvil?</h2>
            <p className="mb-4">
                Sí. El juego es de navegador y funciona en cualquier dispositivo móvil - iPhone, Android, tablet. Sin app que descargar, sin
                permisos de la App Store. Abre el enlace en Safari, Chrome o cualquier navegador móvil y ya estás jugando. La mayoría de
                personas que usan el modo de 2 jugadores lo hacen desde el móvil, en medio de una conversación con su amigo.
            </p>
            <p className="mb-4">
                El diseño se adapta a pantallas pequeñas para que los controles sean fáciles de tocar. Piedra, Papel, Tijeras - tres
                botones, un toque, listo.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Piedra papel tijeras en Zoom, FaceTime o Discord</h2>
            <p className="mb-4">
                Si ya estás en una videollamada con alguien, puedes jugar al PPT online al mismo tiempo - abre el enlace del juego en otra
                pestaña mientras la llamada sigue. Comparte el enlace en el chat y los dos entráis.
            </p>
            <p className="mb-4">
                Esto es mejor que contar hasta tres en la videollamada. El retraso del vídeo hace que quien dice &ldquo;¡ya!&rdquo; y quien
                revela primero nunca estén perfectamente sincronizados. El juego online elimina ese problema por completo - ninguna elección
                es visible hasta que ambos la han enviado, independientemente del lag de vídeo.
            </p>
            <p className="mb-4">
                La misma lógica aplica a Zoom, Teams, FaceTime, Google Meet - cualquier herramienta de vídeo. El juego corre en una pestaña
                del navegador, sin depender de la app de comunicación que estés usando.
            </p>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    ¿Quieres repasar las reglas antes de jugar?{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Las reglas oficiales
                    </Link>{" "}
                    cubren todos los casos, incluidos los empates. O si estáis decidiendo quién hace algo primero, lee{" "}
                    <Link href="/blog/rock-paper-scissors-vs-coin-flip" className="text-blue-600 hover:underline font-medium">
                        PPT vs cara o cruz
                    </Link>{" "}
                    para ver cuál es realmente más justo.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Necesito crear una cuenta para jugar?</h3>
                    <p className="text-gray-600 text-sm">
                        No. El juego es completamente anónimo - sin correo, sin contraseña, sin perfil. Solo abre el enlace y juega.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cómo invito a mi amigo?</h3>
                    <p className="text-gray-600 text-sm">
                        Abre la partida de 2 jugadores, copia el enlace único de la sala y envíaselo como quieras - SMS, WhatsApp, Discord,
                        correo. Cuando abra el enlace, estaréis conectados.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Es gratis?</h3>
                    <p className="text-gray-600 text-sm">Sí, siempre gratis. Sin suscripciones ni compras dentro de la app.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuántas rondas dura una partida?</h3>
                    <p className="text-gray-600 text-sm">Al mejor de 3. El primero en ganar 2 rondas gana la partida.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Se puede jugar desde el móvil?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí. El juego funciona en cualquier navegador móvil en iOS y Android - sin necesidad de descargar ninguna app.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué pasa si pierdo la conexión a mitad de partida?</h3>
                    <p className="text-gray-600 text-sm">
                        La sala de juego persiste brevemente. Si ambos volvéis a conectaros al mismo enlace, la partida se retoma donde la
                        dejasteis.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Listo para decidirlo?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Inicia una partida de 2 jugadores, comparte el enlace y jugad en menos de 60 segundos. Sin cuenta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida de 2 jugadores →
                </CtaLink>
            </div>
        </article>
    );
}

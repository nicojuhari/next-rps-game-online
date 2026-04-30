import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Piedra Papel Tijera para Parejas a Distancia",
    description:
        "Las parejas a distancia pueden jugar PPT online con revelación simultánea - sin app, sin cuenta, solo un enlace. Hazlo justo y divertido.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-long-distance-couples",
    readingTime: "4 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Se puede jugar piedra papel tijera a larga distancia?",
        a: "Sí. Una pareja crea una sala y envía el enlace - la otra lo abre en cualquier dispositivo desde cualquier parte del mundo. Ambos eligen su jugada en privado y el resultado se revela simultáneamente. Sin app, sin cuenta, sin descarga.",
    },
    {
        q: "¿Cómo se juega piedra papel tijera en videollamada de forma justa?",
        a: "Contar hasta tres en cámara no funciona - el retraso de red hace que un jugador vea la mano del otro una fracción de segundo antes. Un juego en el navegador soluciona esto: ambas jugadas se bloquean antes de que cualquiera vea el resultado.",
    },
    {
        q: "¿Qué juegos gratis pueden jugar dos personas online sin descargar nada?",
        a: "Piedra papel tijera es la opción más rápida - abre el navegador, crea una sala y comparte el enlace. Sin descarga, sin cuenta, funciona en cualquier teléfono u ordenador.",
    },
    {
        q: "¿Necesitamos los dos una cuenta para jugar?",
        a: "No. Sin correo, sin contraseña, sin cuenta. Abre el enlace y juega.",
    },
    {
        q: "¿Qué pasa si estamos en países o zonas horarias diferentes?",
        a: "Funciona desde cualquier lugar con conexión a internet - cualquier país, cualquier zona horaria, cualquier dispositivo.",
    },
    {
        q: "¿Se puede jugar más de una ronda?",
        a: "Sí - cada sesión es al mejor de 3. Puedes jugar tantas sesiones como quieras y llevar tu propio marcador acumulado.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Estás en videollamada con tu pareja. El momento pide una competición amistosa. Piedra papel tijera es perfecto - excepto que
                contar &ldquo;1-2-3&rdquo; en cámara nunca funciona de forma justa. El retraso de red hace que alguien siempre vea la jugada
                del otro medio segundo antes. Aquí está cómo hacerlo bien: instantáneo, justo, desde cualquier lugar, sin necesidad de
                ninguna app.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por qué piedra papel tijera es perfecto para parejas a distancia</h2>
            <p className="mb-4">
                La mayoría de los juegos online para parejas requieren instalación, descargas o que ambos estén en la misma plataforma.
                Piedra papel tijera no necesita nada de eso.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Instantáneo:</strong> sin app, sin registro, sin esperas. Una pareja crea la sala,
                    comparte el enlace y en menos de 60 segundos estáis jugando.
                </li>
                <li>
                    <strong className="text-gray-800">Sin presión:</strong> si pierdes a las 11 de la noche puedes culpar a la mala suerte y
                    pedir la revancha.
                </li>
                <li>
                    <strong className="text-gray-800">Realmente útil:</strong> úsalo para decidir quién elige la película de esta noche,
                    quién manda el primer mensaje mañana, o quién organiza la próxima visita.
                </li>
                <li>
                    <strong className="text-gray-800">Ligeramente competitivo:</strong> crea un momento de drama y un ganador claro - sin la
                    situación ambigua de &ldquo;tú decides&rdquo;.
                </li>
                <li>
                    <strong className="text-gray-800">Funciona en cualquier dispositivo:</strong> teléfono, tablet, portátil - tu pareja no
                    necesita instalar nada.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">El problema de jugar por FaceTime o videollamada</h2>
            <p className="mb-4">
                El clásico &ldquo;1-2-3 ya&rdquo; en cámara falla en cuanto hay algo de retraso de red - que siempre hay. Un retraso de
                200ms (invisible en la conversación normal) es suficiente para que el segundo jugador vea brevemente la mano del primero
                antes de comprometerse. La revelación simultánea que hace justo al PPT es físicamente imposible por vídeo.
            </p>
            <p className="mb-4">
                Un juego online adecuado soluciona esto de forma estructural. Ambos jugadores bloquean su elección en privado. El resultado
                se revela solo después de que los dos hayan enviado su jugada - sin posibilidad de ver la elección del otro antes de elegir
                la propia. El PPT online es en realidad <em>más justo</em> que el PPT en persona por exactamente esta razón.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cómo jugar piedra papel tijera online con tu pareja</h2>
            <p className="mb-4">De la idea al juego en menos de 60 segundos:</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Abre el juego para 2 jugadores y crea una sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Tarda 5 segundos. Sin cuenta - solo haz clic en &ldquo;Crear partida&rdquo;.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Envía el enlace a tu pareja</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cópialo del navegador y envíalo por WhatsApp, iMessage, Discord o donde chatéis.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Tu pareja lo abre en su dispositivo</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funciona en cualquier teléfono, tablet u ordenador - cualquier navegador, cualquier país.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Los dos eligen a la vez</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada jugador elige Piedra, Papel o Tijera en privado. La revelación ocurre después de que ambos hayan confirmado
                            - imposible hacer trampa. Formato al mejor de 3.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Envía el enlace a tu pareja ahora mismo.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Sin cuenta, sin app - solo comparte el enlace y decidid quién manda esta noche.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Empezar partida para 2 →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formas divertidas de usar PPT en vuestra relación a distancia</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">El juego de las decisiones</h3>
            <p className="mb-4">
                Usa el mejor de 3 para resolver los pequeños debates que no merecen un debate: quién manda el mensaje primero mañana, quién
                elige la película de la cita virtual, quién reserva los vuelos para la próxima visita. Es más divertido que &ldquo;tú
                decides&rdquo; y elimina el bucle de &ldquo;no, tú decides&rdquo; por completo.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">La edición de los retos</h3>
            <p className="mb-4">
                Cada ronda tiene una apuesta: el perdedor comparte una foto vergonzosa, hace un baile ridículo en cámara o manda un cumplido
                de verdad. Una partida de 3 rondas se convierte en 15 minutos de entretenimiento. Funciona mejor tarde por la noche cuando
                alguien no para de pedir revancha.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">El marcador acumulado</h3>
            <p className="mb-4">
                Llevad un recuento durante varias sesiones. Después de 10 rondas o 2 semanas, quien tenga menos victorias debe algo - una
                carta a mano, un paquete sorpresa, organizar la próxima cita entera. El marcador os da algo de qué hablar: &ldquo;solo vas
                por delante gracias a esa ronda del martes.&rdquo;
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">El calentamiento previo a la cita</h3>
            <p className="mb-4">
                Antes de vuestra noche de cita virtual, jugad al mejor de 3 para decidir quién elige la actividad. Os pone a los dos de buen
                humor antes de que empiece la cita de verdad, y quien pierde no puede quejarse después de la elección.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">¿Funciona en cualquier dispositivo?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-1">
                    Funciona en cualquier dispositivo - sin app, sin cuenta, solo un enlace.
                </p>
                <p className="text-sm text-gray-600">
                    iOS y Android, cualquier portátil, cualquier tablet, cualquier navegador. Tu pareja no necesita instalar nada ni crear
                    una cuenta. El enlace funciona en cualquier parte del mundo.
                </p>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    ¿Quieres mejorar tu juego? La{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        guía de estrategia
                    </Link>{" "}
                    explica los patrones de comportamiento que hacen predecibles a los jugadores humanos - útil cuando hay un marcador en
                    juego. O si prefieres organizar rondas en grupo, consulta la{" "}
                    <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline font-medium">
                        guía de icebreaker
                    </Link>
                    .
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Se puede jugar piedra papel tijera a larga distancia?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí. Una pareja crea una sala y envía el enlace. La otra lo abre desde cualquier dispositivo, en cualquier lugar.
                        Ambos eligen en privado y el resultado se revela al mismo tiempo. Sin app, sin cuenta.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cómo se juega de forma justa en videollamada?</h3>
                    <p className="text-gray-600 text-sm">
                        Contar hasta tres en cámara no funciona - el retraso de red hace que un jugador vea la jugada del otro antes. Con un
                        juego en el navegador, ambas jugadas se bloquean antes de que cualquiera vea el resultado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Necesitamos los dos una cuenta?</h3>
                    <p className="text-gray-600 text-sm">No. Sin correo, sin contraseña, sin cuenta. Abre el enlace y juega.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué pasa si estamos en países diferentes?</h3>
                    <p className="text-gray-600 text-sm">
                        Funciona desde cualquier lugar con internet - cualquier país, cualquier zona horaria, cualquier dispositivo.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Se puede jugar más de una ronda?</h3>
                    <p className="text-gray-600 text-sm">
                        Sí - cada sesión es al mejor de 3. Jugad tantas sesiones como queráis y llevad vuestro propio marcador acumulado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué juegos gratis pueden jugar dos personas sin descargar nada?</h3>
                    <p className="text-gray-600 text-sm">
                        PPT es la opción más rápida - abre el navegador, crea una sala y comparte el enlace. Sin descarga, sin cuenta,
                        funciona en cualquier teléfono u ordenador.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Listos para jugar?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Envía el enlace a tu pareja - sin cuenta, sin app, solo una partida. Decidid los planes de esta noche en una ronda.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Empezar partida para 2 →
                </CtaLink>
            </div>
        </article>
    );
}

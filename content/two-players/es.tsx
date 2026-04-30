import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "¿Es gratis jugar?", a: "Sí. Completamente gratis, sin cuenta necesaria, sin descarga requerida." },
    { q: "¿Mi amigo necesita crear una cuenta?", a: "No. Solo comparte el enlace — sin registro en ninguno de los dos lados." },
    { q: "¿Podemos jugar desde diferentes dispositivos?", a: "Sí. Un jugador en escritorio, el otro en un teléfono — funciona en cualquier dispositivo con un navegador." },
    { q: "¿Puede algún jugador ver el movimiento del otro antes de elegir?", a: "No. Ambas elecciones están ocultas hasta que ambos jugadores terminen. Sin miradas, sin trampas." },
    { q: "¿Qué pasa si cierro el navegador en medio del juego?", a: "Tu sala de juego permanece abierta. Vuelve a abrir el enlace y continúa donde lo dejaste." },
    { q: "¿Puedo jugar en móvil?", a: "Sí. El juego funciona en cualquier smartphone o tableta." },
    { q: "¿Podemos usar Piedra Papel Tijeras para resolver una apuesta o tomar una decisión?", a: "Sí. Jugar online es más justo que en persona — ambas elecciones se confirman antes de que cualquier jugador vea el resultado, por lo que nadie puede cambiar su movimiento en el último segundo. Es el mismo principio que el lanzamiento de una moneda, excepto que ambos jugadores participan activamente." },
    { q: "¿Podemos jugar Piedra Papel Tijeras en una videollamada de Zoom?", a: "Sí. Abre el juego en tu propio dispositivo mientras estás en la llamada. Comparte el enlace del juego en el chat. Ambos jugadores eligen su movimiento de forma independiente y el resultado se revela al mismo tiempo — sin necesidad de contar hasta tres en voz alta." },
    { q: "¿Podemos jugar Piedra Papel Tijeras a larga distancia — en diferentes países?", a: "Sí. El juego funciona en el navegador y en cualquier lugar con conexión a internet. No se necesita descarga de aplicación ni cuenta en ninguno de los lados. Comparte el enlace y juega al instante, independientemente de la ubicación." },
    { q: "¿Cuántas partidas podemos jugar en una sesión?", a: "Las que quieras. La sala de juego permanece abierta y registra las puntuaciones acumuladas en varias partidas. No es necesario crear un nuevo enlace cada vez — simplemente sigue jugando hasta que uno de vosotros abandone." },
];

export function HowToPlay() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Cómo Jugar Piedra Papel Tijeras Online con Amigos
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Jugar con un amigo son tres pasos — sin cuenta ni aplicación:</p>
                <ol className="pl-4 space-y-2 list-decimal">
                    <li>
                        <span className="font-semibold text-gray-700">Crea una sala privada</span> — haz clic en &ldquo;Crear una Partida&rdquo; arriba o en la página de inicio. Obtendrás un enlace privado de inmediato.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Comparte el enlace</span> — envíaselo a tu amigo por cualquier aplicación de mensajería. Funciona en cualquier dispositivo.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Juega</span> — ambos jugadores eligen Piedra, Papel o Tijeras. El mejor de 3 rondas decide al ganador.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Reclama tu certificado</span> — gana más partidas que tu oponente y obtén un certificado de ganador personalizado. Descárgalo o compártelo para presumir.
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
                Piedra Papel Tijeras 1v1 — Cómo Funciona
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Ambos jugadores eligen al mismo tiempo y ninguno puede ver la elección del otro antes de confirmar. Esto hace que cada partida sea genuinamente justa — sin reacciones de último segundo, sin disputas.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>El jugador que gane más rondas gana la partida. El primero en ganar 2 se lleva la victoria.</li>
                    <li>Las puntuaciones se rastrean en múltiples partidas en la misma sala — sin necesidad de crear un nuevo enlace cada vez.</li>
                </ul>
            </div>
        </>
    );
}

export function WhySettle() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                ¿Por Qué Decidirlo con Piedra Papel Tijeras?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Piedra Papel Tijeras da a ambos jugadores las mismas posibilidades y se juega en segundos. La gente lo usa para decidir:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Quién paga la cena</li>
                    <li>Quién elige la película o la lista de reproducción</li>
                    <li>Quién va primero en un juego de mesa</li>
                    <li>Cualquier decisión donde ambos quieren una oportunidad justa</li>
                </ul>
                <p>Jugar online significa no tener discusiones sobre quién lanzó qué. Ambas elecciones se confirman y revelan al mismo tiempo, siempre.</p>
            </div>
        </>
    );
}

export function UseCases() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Piedra Papel Tijeras Funciona en Más Situaciones de las que Crees
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                <div>
                    <p className="font-semibold text-gray-700">Reuniones Virtuales y Rompehielos</p>
                    <p className="mt-1">
                        ¿Necesitas un rompehielos de 60 segundos para tu videollamada? PPT funciona en cualquier dispositivo, no requiere configuración y hace reír a todos en menos de un minuto.{" "}
                        <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline">
                            Cómo usar PPT como rompehielos en reuniones virtuales →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Parejas y Amigos a Larga Distancia</p>
                    <p className="mt-1">
                        Cuando decidís algo juntos desde distintas ciudades, un enlace compartido supera contar hasta tres en videollamada.{" "}
                        <Link href="/blog/rock-paper-scissors-long-distance-couples" className="text-blue-600 hover:underline">
                            Piedra Papel Tijeras para larga distancia →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Resolver Cualquier Decisión</p>
                    <p className="mt-1">
                        ¿Quién elige el restaurante? ¿Quién va primero? ¿Quién llama a los padres? Ambos jugadores tienen la misma oportunidad y el resultado es instantáneo y justo.
                    </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-gray-500">
                    ¿No estás listo para desafiar a alguien?{" "}
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Practica solo contra el ordenador →
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
                Preguntas Frecuentes
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

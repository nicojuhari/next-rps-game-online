import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "¿Qué vence a Piedra en Piedra Papel Tijeras?", a: "Papel vence a Piedra. Papel cubre simbólicamente a Piedra, convirtiéndolo en el movimiento ganador cuando tu oponente lanza Piedra." },
    { q: "¿Qué vence a Papel?", a: "Tijeras vence a Papel. Tijeras corta Papel, convirtiéndolo en el contraataque cuando tu oponente juega Papel." },
    { q: "¿Qué vence a Tijeras?", a: "Piedra vence a Tijeras. Piedra aplasta Tijeras, convirtiéndolo en el movimiento ganador cuando tu oponente lanza Tijeras." },
    { q: "¿Piedra Papel Tijeras es solo suerte?", a: "No del todo. Un jugador aleatorio gana el 33% del tiempo, pero las personas reales siguen patrones — y los patrones se pueden leer." },
    { q: "¿Necesito registrarme o descargar algo?", a: "No. El juego funciona completamente en tu navegador. Sin cuenta, sin descarga, sin aplicación — solo abre la página y juega al instante." },
    { q: "¿Funciona en móvil?", a: "Sí. El juego es completamente responsivo y funciona en cualquier smartphone o tableta con un navegador moderno." },
    { q: "¿Cuál es el mejor primer movimiento?", a: "Estadísticamente, Papel es una buena apertura. La mayoría de los jugadores — especialmente los principiantes — lanzan Piedra primero porque parece el movimiento más fuerte. Jugar Papel contrarresta esa tendencia y te da una ventaja estadística en la primera ronda." },
    { q: "¿Puedo jugar Piedra Papel Tijeras online con alguien de otro país?", a: "Sí. El juego funciona en cualquier navegador, en cualquier lugar. Comparte el enlace y ambos jugadores pueden unirse desde cualquier país, cualquier dispositivo, sin aplicación ni cuenta requerida." },
    { q: "¿Cómo elige la computadora su movimiento? ¿Está trucado?", a: "La computadora elige aleatoriamente cada vez — Piedra, Papel y Tijeras tienen cada uno una probabilidad igual de 1 en 3. No hay patrón, no hay ajuste según tu historial, y no hay trucos." },
    { q: "¿Es mejor jugar Piedra Papel Tijeras online que por mensaje?", a: "Sí, porque ambos jugadores revelan su movimiento exactamente al mismo tiempo. En un juego por mensaje, un jugador puede retrasar su respuesta para reaccionar a la elección del otro. Online, ambos movimientos se confirman y revelan simultáneamente — sin mirar, sin trampa." },
];

export function Strategy() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Cómo Ganar en Piedra Papel Tijeras
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>La mayoría de los jugadores tratan Piedra Papel Tijeras como puro azar, como lanzar una moneda. No lo es.</p>
                <p>Un estudio de la Universidad de Zhejiang analizó cientos de miles de partidas y descubrió que los jugadores humanos siguen patrones predecibles. Encontraron una estrategia llamada <strong className="text-gray-700">Gana-Mantén, Pierde-Cambia</strong>:</p>
                <ul className="list-disc space-y-2 pl-4">
                    <li>
                        <span className="font-semibold text-gray-700">Si ganas:</span> Tu oponente probablemente cambiará de movimiento.
                        <br />
                        <span className="italic text-gray-500">Contramovimiento:</span> Juega el movimiento que acaban de hacer — vence lo que intentarán a continuación.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Si pierdes:</span> Tu oponente probablemente repetirá su movimiento ganador porque se siente &ldquo;con suerte&rdquo;.
                        <br />
                        <span className="italic text-gray-500">Contramovimiento:</span> Juega el movimiento que vence lo que acaban de lanzar.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Estrategia del Primer Lanzamiento:</span> Los principiantes, especialmente los jugadores masculinos, abren mayoritariamente con Piedra porque se siente fuerte.
                        <br />
                        <span className="italic text-gray-500">Consejo:</span> Contra un oponente nuevo, lanza Papel primero.
                    </li>
                </ul>
                <p>
                    <span className="font-semibold text-gray-700">¿Piedra Papel Tijeras es suerte o habilidad?</span>{" "}
                    Ambos. Un jugador puramente aleatorio gana el 33,3% del tiempo. Pero las elecciones humanas no son aleatorias, por eso detectar patrones te da una ventaja real.
                </p>
                <p>Pon la estrategia a prueba — gana más partidas que tu oponente y podrás reclamar un certificado de ganador personalizado para descargar y compartir.</p>
                <p>
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Leer la guía de estrategia completa →
                    </Link>
                </p>
            </div>
        </>
    );
}

export function Rules() {
    return (
        <>
            <h2 className="border-l-4 border-yellow-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Reglas de Piedra Papel Tijeras
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Piedra Papel Tijeras se juega entre dos personas. Cada jugador revela uno de tres gestos al mismo tiempo, y el ganador se decide por un conjunto simple de reglas:</p>
                <ul className="pl-4 space-y-2 list-disc">
                    <li><span className="font-semibold text-gray-700">Piedra aplasta Tijeras</span> — ✊ → ✂️</li>
                    <li><span className="font-semibold text-gray-700">Tijeras corta Papel</span> — ✂️ → 📄</li>
                    <li><span className="font-semibold text-gray-700">Papel cubre Piedra</span> — 📄 → ✊</li>
                </ul>
                <p>Si ambos jugadores hacen el mismo gesto, la ronda es un empate.</p>
                <p className="font-semibold text-gray-700">¿Cómo funciona el mejor de 3?</p>
                <p>Cada partida tiene 3 rondas. Ambos jugadores confirman todas sus elecciones antes de que se muestren los resultados, para que ningún jugador pueda reaccionar al otro. El jugador que gane más rondas gana la partida. Si cada jugador gana una ronda y la tercera es empate, la partida termina empatada.</p>
                <p>
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Ver las reglas completas →
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
                Estadísticas de Piedra Papel Tijeras
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>En un juego perfectamente aleatorio, cada lanzamiento tiene una probabilidad igual de 1 en 3 (33,3%) de ganar, perder o empatar.</p>
                <p>En la práctica, los humanos no lanzan aleatoriamente. Las investigaciones sugieren que la distribución real entre jugadores casuales es: <strong className="text-gray-700">Piedra ~35%, Papel ~35%, Tijeras ~30%</strong>. Tijeras se lanza con menor frecuencia.</p>
                <p>En 2005, una sola mano de Piedra Papel Tijeras decidió un contrato de subasta de <strong className="text-gray-700">17,8 millones de dólares</strong>. Las dos casas de subastas más famosas, Christie&apos;s y Sotheby&apos;s, estaban en punto muerto por los derechos de venta de una valiosa colección de arte y acordaron resolverlo con un juego.</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Sotheby&apos;s lo trató como azar y jugó Papel.</li>
                    <li>Christie&apos;s pidió consejo a las hijas gemelas de 11 años de uno de sus directores. Las niñas razonaron: &ldquo;Todos piensan que Piedra es el movimiento fuerte. Sotheby&apos;s esperará Piedra, así que jugarán Papel. Jueguen Tijeras.&rdquo;</li>
                </ul>
                <p>Christie&apos;s jugó Tijeras. Sotheby&apos;s jugó Papel. Christie&apos;s ganó — demostrando que incluso en un juego simple, la psicología supera al puro azar.</p>
            </div>
        </>
    );
}

export function History() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                ¿Qué es Piedra Papel Tijeras?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Piedra Papel Tijeras es un juego de manos jugado en todo el mundo, generalmente entre dos personas. Se usa comúnmente como una forma rápida de tomar decisiones, pero también es un juego de leer a tu oponente.</p>
                <p>El juego se remonta a más de <strong className="text-gray-700">2.000 años a la Dinastía Han China</strong> (206 a.C. — 220 d.C.), donde se llamaba <em>shoushiling</em> y usaba gestos que representaban una Rana, una Babosa y una Serpiente.</p>
                <p>Llegó a Japón como <em>Jan-Ken</em>, donde se convirtió en una herramienta social diaria para resolver disputas en escuelas y negocios. Llegó a Occidente a principios del siglo XX y se convirtió en el juego de decisión rápida estándar que es hoy. Hoy tiene muchos nombres: <em>roshambo</em> en EE.UU., piedra papel tijeras en países de habla hispana — todos usando los mismos tres gestos.</p>
                <p><strong className="text-gray-700">¿Sabías que?</strong> El 27 de agosto es oficialmente el Día Mundial de Piedra Papel Tijeras.</p>
                <p>La computadora en este sitio elige aleatoriamente — tiene una probabilidad igual de 1 en 3 de lanzar Piedra, Papel o Tijeras cada vez. Sin trucos, solo azar.</p>
                <p>Jugar online también elimina la principal forma de hacer trampa en un juego físico. En persona, un jugador puede retrasar su lanzamiento una fracción de segundo para reaccionar a la mano del oponente — una técnica llamada &ldquo;sombreado&rdquo;. En rps-game.online, ambos jugadores confirman su elección en privado antes de que se muestre algún resultado, para que cada partida sea genuinamente justa.</p>
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

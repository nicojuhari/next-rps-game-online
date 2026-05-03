import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Piedra Papel Tijera vs Cara o Cruz: ¿Cuál Es Más Justo?",
    description:
        "Ambos son 50/50 en teoría - pero difieren en agencia, varianza y resistencia al fraude. Aquí está lo que dicen la matemática y la psicología.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-vs-coin-flip",
    readingTime: "5 min de lectura",
};

export const faqItems: FaqItem[] = [
    {
        q: "¿Es piedra papel tijera realmente 50/50?",
        a: "Contra un oponente completamente aleatorio, sí. Contra un humano, el comportamiento es ligeramente predecible, por lo que hay un pequeño componente de habilidad. Esto no lo hace menos justo; lo hace más interesante.",
    },
    {
        q: "¿Es lanzar una moneda más aleatorio que piedra papel tijera?",
        a: "Un lanzamiento de moneda físico está más cerca de lo verdaderamente aleatorio. Pero PPT al mejor de 3 reduce más la varianza que un solo lanzamiento de moneda - para resolver disputas, PPT produce un resultado más estable.",
    },
    {
        q: "¿Se puede hacer trampa en piedra papel tijera online?",
        a: "No con un sistema de revelación simultánea adecuado. Ambas elecciones se bloquean antes de que cualquier jugador vea el resultado - no hay forma de ajustar tu elección después de ver la del otro.",
    },
    {
        q: "¿Qué pasa si los dos conocen la estrategia de PPT?",
        a: "Entonces es un juego de habilidad en lugar de suerte - lo que la mayoría encuentra más satisfactorio. Si uno tiene significativamente más experiencia, usa una moneda para mantener el 50/50.",
    },
    {
        q: "¿Cuál es una forma justa de decidir entre dos personas?",
        a: "Tanto una moneda como PPT son estadísticamente justos (50/50). PPT añade agencia y drama; la moneda es más rápida y puramente aleatoria. Para decisiones remotas, PPT online con revelación simultánea es la opción más resistente al fraude.",
    },
    {
        q: "¿Cómo se resuelve una discusión de forma justa online?",
        a: "Usa un juego de PPT online con revelación simultánea - un jugador crea la sala, comparte el enlace, los dos eligen al mismo tiempo. Esto evita el problema de revelar por mensaje, donde el segundo en revelar puede ajustar su elección.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Necesitas resolver algo entre dos personas. Las opciones: lanzar una moneda o jugar piedra papel tijera. Ambas parecen
                justas. Ambas son rápidas. ¿Cuál es realmente más justa - y importa la diferencia? Esto es lo que dicen la matemática, la
                psicología y la teoría de juegos.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Respuesta corta:</strong> Ambos son 50/50 en probabilidad base. PPT añade agencia, reduce la varianza con el
                    mejor de 3 y - jugado online con revelación simultánea - es más resistente al fraude que revelar tu jugada por mensaje.
                    La moneda es más rápida y más aleatoria. Ninguna opción es incorrecta. PPT es más entretenido; la moneda es más
                    instantánea.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">El caso a favor de lanzar una moneda</h2>
            <p className="mb-4">
                La moneda se ha ganado su reputación como herramienta de decisión por defecto por una razón. La probabilidad es lo más
                limpia posible: 50% cara, 50% cruz, sin ventaja de habilidad para ninguna de las partes. No hay forma de estrategizar ni de
                sentir que te superaron - el resultado es puro azar, lo que la mayoría acepta como inherentemente neutral.
            </p>
            <p className="mb-4">
                También es instantáneo. Un lanzamiento, un resultado, en menos de cinco segundos. Sin configuración, sin explicación. Para
                decisiones de alta importancia donde quieres que nadie cuestione la imparcialidad, la moneda es difícil de superar.
            </p>
            <p className="mb-4">
                La desventaja: es pasivo. Ambas partes son espectadoras esperando que la física decida. Ninguno tiene agencia sobre el
                resultado, lo que puede hacer que parezca arbitrario aunque sea estadísticamente justo.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">El caso a favor de piedra papel tijera</h2>
            <p className="mb-4">
                En teoría, PPT también es 50/50 contra un oponente aleatorio - cada una de las tres opciones gana a una, pierde contra una y
                empata con la tercera. La matemática es simétrica.
            </p>
            <p className="mb-4">Pero en la práctica, PPT tiene varias ventajas sobre la moneda para resolver disputas:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Agencia:</strong> ambos jugadores toman una decisión activa. Aunque el resultado sea
                    aleatorio, no parece arbitrario - lo jugaste.
                </li>
                <li>
                    <strong className="text-gray-800">Menor varianza:</strong> el formato al mejor de 3 hace el resultado más estable que un
                    solo lanzamiento de moneda.
                </li>
                <li>
                    <strong className="text-gray-800">Revelación simultánea:</strong> cuando se juega correctamente, ningún jugador puede
                    ver la elección del otro antes de comprometerse.
                </li>
                <li>
                    <strong className="text-gray-800">Más satisfactorio:</strong> el perdedor eligió su jugada - no puede culpar a la
                    suerte. Esto hace que el resultado sea más fácil de aceptar.
                </li>
            </ul>
            <p className="mb-4">
                La contrapartida: PPT tiene un elemento de habilidad contra humanos. Si un jugador conoce la{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    estrategia de PPT
                </Link>{" "}
                y el otro no, ya no es verdaderamente 50/50.
            </p>

            {/* Section 3 - Comparison table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La comparación de imparcialidad - cara a cara</h2>
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Factor</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Lanzar moneda</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Piedra Papel Tijera</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Probabilidad base</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Agencia del jugador</td>
                            <td className="p-3 border border-gray-200">Ninguna</td>
                            <td className="p-3 border border-gray-200">Alta</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Varianza por decisión</td>
                            <td className="p-3 border border-gray-200">Un lanzamiento</td>
                            <td className="p-3 border border-gray-200">Mejor de 3 (menor varianza)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Componente de habilidad</td>
                            <td className="p-3 border border-gray-200">Ninguno</td>
                            <td className="p-3 border border-gray-200">Pequeño (vs humanos)</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Riesgo de trampa (en persona)</td>
                            <td className="p-3 border border-gray-200">Bajo</td>
                            <td className="p-3 border border-gray-200">Bajo (revelación simultánea)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Riesgo de trampa (remoto, por mensaje)</td>
                            <td className="p-3 border border-gray-200">Bajo</td>
                            <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                                Alto - el segundo en revelar puede ajustar
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Riesgo de trampa (online, tiempo real)</td>
                            <td className="p-3 border border-gray-200">N/A</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                Ninguno - revelación simultánea forzada
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Factor diversión</td>
                            <td className="p-3 border border-gray-200">Bajo</td>
                            <td className="p-3 border border-gray-200">Alto</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Tiempo hasta el resultado</td>
                            <td className="p-3 border border-gray-200">5 segundos</td>
                            <td className="p-3 border border-gray-200">30-60 segundos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">¿Necesitas resolver algo ahora mismo?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Comparte un enlace - los dos eligen simultáneamente, resultado instantáneo. Sin cuenta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Resolverlo ahora - empezar partida para 2 →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cuándo usar una moneda</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Necesitas una respuesta instantánea</strong> - sin tiempo para 3 rondas, solo un
                    resultado en 5 segundos.
                </li>
                <li>
                    <strong className="text-gray-800">Ambas partes quieren cero agencia</strong> - a veces nadie quiere la responsabilidad
                    de haber elegido.
                </li>
                <li>
                    <strong className="text-gray-800">Hay una brecha de habilidad</strong> - si uno conoce la estrategia de PPT y el otro
                    no, la moneda restaura el terreno de juego igualado.
                </li>
                <li>
                    <strong className="text-gray-800">Estás solo y reportas el resultado</strong> - la moneda es más fácil de hacer en
                    solitario. PPT requiere que ambas partes estén presentes.
                </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cuándo piedra papel tijera es mejor</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Quieres que el resultado se sienta ganado</strong> - ambas partes eligieron su jugada.
                    El perdedor no puede atribuirlo solo a la mala suerte.
                </li>
                <li>
                    <strong className="text-gray-800">La varianza importa</strong> - el mejor de 3 produce un resultado más fiable que un
                    solo lanzamiento.
                </li>
                <li>
                    <strong className="text-gray-800">Quieres algo de drama</strong> - tres rondas de tensión superan a un solo lanzamiento
                    en entretenimiento.
                </li>
                <li>
                    <strong className="text-gray-800">Lo haces en remoto</strong> - revelar por mensaje es tramposo. Una herramienta online
                    con revelación simultánea lo soluciona.
                </li>
            </ul>

            {/* Section 6 - Remote problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                El problema remoto - por qué PPT online supera a la moneda online
            </h2>
            <p className="mb-4">
                El principal fallo del PPT remoto es el problema del orden de revelación. Cuando mandas &ldquo;1-2-3 ya!&rdquo; por mensaje
                o revelas en videollamada, uno ve la elección del otro antes de comprometerse. Un retraso de 200ms es suficiente - el
                segundo jugador técnicamente ve la mano del primero antes de decidir. Esto rompe la revelación simultánea que hace justo al
                PPT.
            </p>
            <p className="mb-4">
                Las herramientas de lanzamiento de moneda online resuelven el problema de imparcialidad remota - pero una moneda nunca fue
                interesante de por sí.
            </p>
            <p className="mb-4">
                El PPT online con un sistema de revelación simultánea real soluciona ambos problemas. Los dos jugadores bloquean su elección
                en privado antes de que se muestre cualquier resultado. La revelación es simultánea para ambos - estructuralmente forzada,
                no solo esperada. El resultado: justo <em>y</em> entretenido. Sin cuenta, sin app.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Cómo resolver cualquier disputa online en menos de 60 segundos</h2>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Abre el juego para 2 jugadores y crea una sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">Sin cuenta - tarda 5 segundos.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Comparte el enlace</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Por mensaje, WhatsApp o Discord. La otra persona lo abre en cualquier dispositivo.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Los dos eligen simultáneamente</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada uno bloquea su elección en privado. El resultado se revela después de que los dos hayan enviado.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">El ganador gana, la disputa resuelta</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Formato al mejor de 3. Sin discusiones sobre quién reveló primero - ninguno pudo hacerlo.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Si quieres inclinar las probabilidades a tu favor una vez que estés jugando:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        la guía de estrategia
                    </Link>{" "}
                    cubre las tendencias de comportamiento que hacen predecibles a los jugadores humanos. O repasa las{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        reglas oficiales
                    </Link>{" "}
                    si necesitas un repaso.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Preguntas frecuentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Es piedra papel tijera realmente 50/50?</h3>
                    <p className="text-gray-600 text-sm">
                        Contra un oponente aleatorio, sí. Contra un humano, hay un pequeño componente de habilidad - las personas tienen
                        tendencias no aleatorias. Esto no lo hace menos justo; lo hace más interesante.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Es lanzar una moneda más aleatorio que PPT?</h3>
                    <p className="text-gray-600 text-sm">
                        Un lanzamiento físico está más cerca de lo verdaderamente aleatorio. Pero PPT al mejor de 3 reduce más la varianza
                        que un solo lanzamiento, produciendo un resultado más estable.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Se puede hacer trampa en PPT online?</h3>
                    <p className="text-gray-600 text-sm">
                        No con un sistema de revelación simultánea adecuado. Ambas elecciones se bloquean antes de que cualquiera vea el
                        resultado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Qué pasa si los dos conocen la estrategia?</h3>
                    <p className="text-gray-600 text-sm">
                        Entonces es un juego de habilidad - lo que la mayoría encuentra más satisfactorio. Si uno tiene mucho más
                        experiencia, usa una moneda para mantener el 50/50.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cuál es una forma justa de decidir entre dos personas?</h3>
                    <p className="text-gray-600 text-sm">
                        Ambos son estadísticamente justos (50/50). PPT añade agencia y drama; la moneda es más rápida. Para decisiones
                        remotas, PPT online con revelación simultánea es la más resistente al fraude.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">¿Cómo se resuelve una discusión de forma justa online?</h3>
                    <p className="text-gray-600 text-sm">
                        Usa un juego de PPT online con revelación simultánea - crea una sala, comparte el enlace, los dos eligen al mismo
                        tiempo. Evita el problema de que el segundo en revelar pueda ajustar su elección.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">La próxima vez que necesites decidir algo, olvida la moneda.</p>
                <p className="text-sm text-gray-500 mb-5">
                    Reta a la otra persona a un mejor de 3 - tarda 60 segundos y realmente sientes que te lo has ganado.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Resolverlo ahora - empezar partida para 2 →
                </CtaLink>
            </div>
        </article>
    );
}

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Pedra Papel Tesoura vs Cara ou Coroa: Qual É Mais Justo?",
    description:
        "Ambos são 50/50 na teoria - mas diferem em agência, variância e resistência à trapaça. Veja o que a matemática e a psicologia dizem sobre cada um.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-vs-coin-flip",
    readingTime: "5 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Pedra papel tesoura é realmente 50/50?",
        a: "Contra um oponente completamente aleatório, sim. Contra um humano, o comportamento é ligeiramente previsível, então há um pequeno componente de habilidade. Isso não o torna menos justo; o torna mais interessante.",
    },
    {
        q: "Cara ou coroa é mais aleatório que pedra papel tesoura?",
        a: "Um lançamento físico de moeda está mais próximo do verdadeiramente aleatório. Mas PPT melhor de 3 reduz mais a variância do que um único lançamento - para resolver disputas, PPT produz um resultado mais estável.",
    },
    {
        q: "Dá para trapacear no pedra papel tesoura online?",
        a: "Não com um sistema de revelação simultânea adequado. Ambas as escolhas são bloqueadas antes de qualquer jogador ver o resultado - não há como ajustar sua escolha depois de ver a do outro.",
    },
    {
        q: "E se os dois conhecerem a estratégia de PPT?",
        a: "Então é um jogo de habilidade em vez de sorte - o que a maioria acha mais satisfatório. Se um tem muito mais experiência, use cara ou coroa para manter o 50/50.",
    },
    {
        q: "Qual é uma forma justa de decidir entre duas pessoas?",
        a: "Tanto cara ou coroa quanto PPT são estatisticamente justos (50/50). PPT adiciona agência e drama; cara ou coroa é mais rápido e puramente aleatório. Para decisões remotas, PPT online com revelação simultânea é a opção mais resistente à trapaça.",
    },
    {
        q: "Como resolver uma discussão de forma justa online?",
        a: "Use um jogo de PPT online com revelação simultânea - um jogador cria uma sala, compartilha o link, os dois escolhem ao mesmo tempo. Isso evita o problema de revelar por mensagem, onde o segundo a revelar pode ajustar sua escolha.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Você precisa resolver algo entre duas pessoas. As opções: cara ou coroa ou pedra papel tesoura. As duas parecem justas. As
                duas são rápidas. Qual é realmente mais justa - e isso importa? Veja o que a matemática, a psicologia e a teoria dos jogos
                dizem.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Resposta curta:</strong> As duas são 50/50 em probabilidade base. PPT adiciona agência, reduz a variância com o
                    melhor de 3 e - jogado online com revelação simultânea - é mais resistente à trapaça do que revelar sua jogada por
                    mensagem. Cara ou coroa é mais rápido e mais aleatório. Nenhuma opção está errada. PPT é mais envolvente; cara ou coroa
                    é mais instantâneo.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O caso a favor de cara ou coroa</h2>
            <p className="mb-4">
                Cara ou coroa conquistou sua reputação como ferramenta de decisão padrão por uma razão. A probabilidade é tão limpa quanto
                possível: 50% cara, 50% coroa, sem vantagem de habilidade para nenhuma das partes. Não há como estrategizar nem sentir que
                foi superado - o resultado é puro acaso, o que a maioria aceita como inerentemente neutro.
            </p>
            <p className="mb-4">
                Também é instantâneo. Um lançamento, um resultado, em menos de cinco segundos. Sem configuração, sem explicação. Para
                decisões de alta importância onde você quer que ninguém questione a imparcialidade, cara ou coroa é difícil de superar.
            </p>
            <p className="mb-4">
                A desvantagem: é passivo. Ambas as partes são espectadoras esperando a física decidir. Ninguém tem agência sobre o
                resultado, o que pode fazer com que pareça arbitrário mesmo sendo estatisticamente justo.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O caso a favor de pedra papel tesoura</h2>
            <p className="mb-4">
                Na teoria, PPT também é 50/50 contra um oponente aleatório - cada uma das três opções ganha de uma, perde para uma e empata
                com a terceira. A matemática é simétrica.
            </p>
            <p className="mb-4">Mas na prática, PPT tem várias vantagens sobre cara ou coroa para resolver disputas:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Agência:</strong> os dois jogadores fazem uma escolha ativa. Mesmo que o resultado
                    seja aleatório, não parece arbitrário - você jogou por isso.
                </li>
                <li>
                    <strong className="text-gray-800">Menor variância:</strong> o formato melhor de 3 torna o resultado mais estável do que
                    um único lançamento de moeda.
                </li>
                <li>
                    <strong className="text-gray-800">Revelação simultânea:</strong> quando jogado corretamente, nenhum jogador pode ver a
                    escolha do outro antes de se comprometer.
                </li>
                <li>
                    <strong className="text-gray-800">Mais satisfatório:</strong> o perdedor escolheu sua jogada - não pode culpar apenas a
                    sorte. Isso torna o resultado mais fácil de aceitar.
                </li>
            </ul>
            <p className="mb-4">
                A contrapartida: PPT tem um elemento de habilidade contra humanos. Se um jogador conhece a{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    estratégia de PPT
                </Link>{" "}
                e o outro não, já não é verdadeiramente 50/50.
            </p>

            {/* Section 3 - Comparison table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">A comparação de justiça - frente a frente</h2>
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Fator</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Cara ou Coroa</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Pedra Papel Tesoura</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Probabilidade base</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Agência do jogador</td>
                            <td className="p-3 border border-gray-200">Nenhuma</td>
                            <td className="p-3 border border-gray-200">Alta</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Variância por decisão</td>
                            <td className="p-3 border border-gray-200">Um lançamento</td>
                            <td className="p-3 border border-gray-200">Melhor de 3 (menor variância)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Componente de habilidade</td>
                            <td className="p-3 border border-gray-200">Nenhum</td>
                            <td className="p-3 border border-gray-200">Pequeno (vs humanos)</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Risco de trapaça (presencial)</td>
                            <td className="p-3 border border-gray-200">Baixo</td>
                            <td className="p-3 border border-gray-200">Baixo (revelação simultânea)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">
                                Risco de trapaça (remoto, por mensagem)
                            </td>
                            <td className="p-3 border border-gray-200">Baixo</td>
                            <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                                Alto - o segundo a revelar pode ajustar
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Risco de trapaça (online, tempo real)</td>
                            <td className="p-3 border border-gray-200">N/A</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">Nenhum - revelação simultânea forçada</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Fator diversão</td>
                            <td className="p-3 border border-gray-200">Baixo</td>
                            <td className="p-3 border border-gray-200">Alto</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Tempo até o resultado</td>
                            <td className="p-3 border border-gray-200">5 segundos</td>
                            <td className="p-3 border border-gray-200">30-60 segundos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Precisa resolver algo agora?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Compartilhe um link - os dois escolhem simultaneamente, resultado instantâneo. Sem conta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Resolver agora - iniciar partida para 2 →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Quando usar cara ou coroa</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Você precisa de uma resposta instantânea</strong> - sem tempo para 3 rodadas, só um
                    resultado em 5 segundos.
                </li>
                <li>
                    <strong className="text-gray-800">As duas partes querem zero agência</strong> - às vezes ninguém quer o peso de ter
                    escolhido.
                </li>
                <li>
                    <strong className="text-gray-800">Há uma diferença de habilidade</strong> - se um conhece a estratégia de PPT e o outro
                    não, cara ou coroa restaura o terreno nivelado.
                </li>
                <li>
                    <strong className="text-gray-800">Você está sozinho e reportando o resultado</strong> - cara ou coroa é mais fácil de
                    fazer sozinho. PPT requer as duas partes presentes.
                </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Quando pedra papel tesoura é melhor</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Você quer que o resultado pareça conquistado</strong> - os dois escolheram. O perdedor
                    não pode atribuir ao azar.
                </li>
                <li>
                    <strong className="text-gray-800">A variância importa</strong> - melhor de 3 produz um resultado mais confiável do que
                    um único lançamento.
                </li>
                <li>
                    <strong className="text-gray-800">Você quer algum drama</strong> - três rodadas de tensão superam um único lançamento em
                    entretenimento.
                </li>
                <li>
                    <strong className="text-gray-800">Você está fazendo remotamente</strong> - revelar por mensagem é passível de trapaça.
                    Uma ferramenta online com revelação simultânea resolve isso.
                </li>
            </ul>

            {/* Section 6 - Remote problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                O problema remoto - por que PPT online supera cara ou coroa online
            </h2>
            <p className="mb-4">
                O principal ponto de falha do PPT remoto é o problema da ordem de revelação. Quando você manda &ldquo;1-2-3 já!&rdquo; por
                mensagem ou revela em videochamada, um vê a escolha do outro antes de se comprometer. Um atraso de 200ms é suficiente - o
                segundo jogador tecnicamente vê a mão do primeiro antes de decidir. Isso quebra a revelação simultânea que torna o PPT
                justo.
            </p>
            <p className="mb-4">
                As ferramentas online de cara ou coroa resolvem o problema de imparcialidade remota - mas cara ou coroa nunca foi
                interessante de qualquer forma.
            </p>
            <p className="mb-4">
                PPT online com um sistema de revelação simultânea real resolve os dois problemas. Os dois jogadores bloqueiam suas escolhas
                em privado antes de qualquer resultado ser mostrado. A revelação é simultânea para os dois - estruturalmente forçada, não
                apenas esperada. O resultado: justo <em>e</em> envolvente. Sem conta, sem app.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Como resolver qualquer disputa online em menos de 60 segundos</h2>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Abra o jogo para 2 jogadores e crie uma sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">Sem conta - leva 5 segundos.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Compartilhe o link</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Por mensagem, WhatsApp ou Discord. A outra pessoa abre em qualquer dispositivo.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Os dois escolhem simultaneamente</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada um bloqueia sua escolha em privado. O resultado é revelado depois que os dois enviaram.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">O vencedor ganha, a disputa resolvida</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Formato melhor de 3. Sem discussões sobre quem revelou primeiro - nenhum pôde fazer isso.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Se quiser inclinar as probabilidades a seu favor quando estiver jogando:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        o guia de estratégia
                    </Link>{" "}
                    cobre as tendências comportamentais que tornam os jogadores humanos previsíveis. Ou revise as{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        regras oficiais
                    </Link>{" "}
                    se precisar de uma revisão.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">PPT é realmente 50/50?</h3>
                    <p className="text-gray-600 text-sm">
                        Contra um oponente aleatório, sim. Contra um humano, há um pequeno componente de habilidade. Isso não o torna menos
                        justo; o torna mais interessante.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Cara ou coroa é mais aleatório que PPT?</h3>
                    <p className="text-gray-600 text-sm">
                        Um lançamento físico está mais próximo do verdadeiramente aleatório. Mas PPT melhor de 3 reduz mais a variância,
                        produzindo um resultado mais estável.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dá para trapacear no PPT online?</h3>
                    <p className="text-gray-600 text-sm">
                        Não com um sistema de revelação simultânea adequado. Ambas as escolhas são bloqueadas antes de qualquer jogador ver
                        o resultado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E se os dois conhecerem a estratégia?</h3>
                    <p className="text-gray-600 text-sm">
                        Então é um jogo de habilidade - o que a maioria acha mais satisfatório. Se um tem muito mais experiência, use cara
                        ou coroa para manter o 50/50.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qual é uma forma justa de decidir entre duas pessoas?</h3>
                    <p className="text-gray-600 text-sm">
                        As duas são estatisticamente justas (50/50). PPT adiciona agência e drama; cara ou coroa é mais rápido. Para
                        decisões remotas, PPT online com revelação simultânea é a mais resistente à trapaça.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Como resolver uma discussão de forma justa online?</h3>
                    <p className="text-gray-600 text-sm">
                        Use um jogo de PPT online com revelação simultânea - crie uma sala, compartilhe o link, os dois escolhem ao mesmo
                        tempo. Evita o problema do segundo a revelar poder ajustar sua escolha.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Da próxima vez que precisar decidir algo, pule o cara ou coroa.</p>
                <p className="text-sm text-gray-500 mb-5">
                    Desafie a outra pessoa para um melhor de 3 - leva 60 segundos e você realmente sente que conquistou.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Resolver agora - iniciar partida para 2 →
                </CtaLink>
            </div>
        </article>
    );
}

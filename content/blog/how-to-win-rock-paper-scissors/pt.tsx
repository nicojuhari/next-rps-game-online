import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Como ganhar no pedra papel tesoura: psicologia e estratégia",
    description:
        "A maioria joga PPT como pura sorte. Os pesquisadores discordam. Aprenda os padrões comportamentais e estratégia que dão vantagem real.",
    publishedAt: "2026-04-30",
    slug: "how-to-win-rock-paper-scissors",
    readingTime: "8 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Papel é a melhor jogada no pedra papel tesoura?",
        a: "Estatisticamente, sim - papel vence pedra, que é a jogada mais comum, com cerca de 35% das vezes. Mas contra jogadores experientes que conhecem essa tendência, tesoura se torna o contra-jogo.",
    },
    {
        q: "O que é a estratégia ganhar-ficar, perder-mudar no pedra papel tesoura?",
        a: "Ganhar-ficar, Perder-mudar é um padrão comportamental em que os vencedores tendem a repetir a jogada que acabou de ganhar, enquanto os perdedores tendem a mudar para a próxima jogada no ciclo (Pedra → Papel → Tesoura → Pedra). Foi confirmado em um estudo de 2014 da Universidade de Zhejiang com mais de 100.000 rodadas.",
    },
    {
        q: "A psicologia realmente afeta o pedra papel tesoura?",
        a: "Sim. Estudos revisados por pares mostram que humanos se desviam significativamente do jogo aleatório. As pessoas se ancoram emocionalmente a jogadas, reagem de forma previsível a vitórias e derrotas, e seguem padrões que oponentes habilidosos podem explorar.",
    },
    {
        q: "Você pode ganhar no pedra papel tesoura sempre?",
        a: "Não sempre - mas consistentemente mais de 33% contra oponentes humanos lendo padrões comportamentais. Contra um gerador de números aleatórios verdadeiro (como um computador), nenhuma estratégia se aplica.",
    },
    {
        q: "Qual é a melhor primeira jogada no pedra papel tesoura?",
        a: "Contra qualquer oponente desconhecido, Papel é a jogada inicial estatisticamente mais forte. Pedra é a jogada inicial mais comum - especialmente por iniciantes e jogadores do sexo masculino - então Papel oferece o melhor valor esperado na rodada 1.",
    },
    {
        q: "Pedra papel tesoura é realmente aleatório?",
        a: "Não quando humanos estão jogando. Pesquisas da Universidade de Zhejiang descobriram que jogadores humanos seguem padrões previsíveis com base em se acabaram de ganhar ou perder. Um computador usando um gerador de números aleatórios é verdadeiramente aleatório, mas oponentes humanos não são.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Pedra Papel Tesoura parece um lançamento de moeda. Mas pesquisas da Universidade de Zhejiang, do MIT Technology Review e de
                psicólogos comportamentais provam que não é. Os seres humanos são previsíveis - e uma vez que você conhece os padrões, pode
                explorá-los.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pedra Papel Tesoura É Realmente Aleatório?</h2>
            <p className="mb-4">A resposta curta: não - pelo menos não quando humanos estão jogando.</p>
            <p className="mb-4">
                Um jogo verdadeiramente aleatório dá a cada jogador exatamente 33,3% de taxa de vitórias, sem como melhorá-la. Mas múltiplos
                estudos mostram que humanos se desviam significativamente do jogo aleatório. Nos ancoramos a certas jogadas, reagimos
                emocionalmente a vitórias e derrotas, e revelamos nossas intenções pelo comportamento.
            </p>
            <p className="mb-4">
                O estudo mais influente veio da Universidade de Zhejiang em 2014. Os pesquisadores Wang Zhijian, Bin Xu e Hai-Jun Zhou
                analisaram 360 estudantes jogando 300 rodadas de PPT cada - mais de 100.000 partidas individuais. Eles encontraram padrões
                comportamentais claros e repetíveis que permitiam a jogadores habilidosos prever as próximas jogadas dos oponentes melhor do
                que o acaso.
            </p>
            <p className="mb-4">A conclusão: Pedra Papel Tesoura é um jogo de psicologia, não de sorte.</p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">As Estatísticas - Qual Jogada as Pessoas Mais Usam?</h2>
            <p className="mb-4">
                Entender o que o jogador médio lança é a base de toda estratégia. Os dados de pesquisa sobre frequência de jogadas em
                grandes amostras mostram consistentemente:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Pedra: ~35%</strong> - a jogada mais lançada, bem acima dos esperados 33,3%
                </li>
                <li>
                    <strong className="text-gray-800">Tesoura: ~35%</strong> - quase empatada com Pedra
                </li>
                <li>
                    <strong className="text-gray-800">Papel: ~29,6%</strong> - a jogada menos lançada
                </li>
            </ul>
            <p className="mb-4">
                A implicação é direta: Papel é estatisticamente a jogada inicial mais forte. Ela vence Pedra, a jogada mais comum. E como
                Papel é lançada com menos frequência, seus oponentes têm menos probabilidade de contra-atacá-la na rodada 1.
            </p>
            <p className="mb-4">
                Isso também explica o famoso leilão de 2005 entre Christie&apos;s e Sotheby&apos;s. Com 17,8 milhões de dólares em jogo,
                Christie&apos;s pediu conselho a uma menina de 11 anos. Ela raciocinou: &ldquo;Todo mundo acha que Pedra é a jogada forte.
                Vão jogar Papel para vencê-la. Nós jogamos Tesoura.&rdquo; Christie&apos;s ganhou.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O Padrão Ganhar-Ficar, Perder-Mudar</h2>
            <p className="mb-4">
                O principal achado do estudo de Zhejiang foi um padrão comportamental que chamaram de{" "}
                <strong className="text-gray-800">Ganhar-Ficar, Perder-Mudar</strong>:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Se um jogador ganha:</strong> tende a repetir a jogada que acabou de ganhar
                </li>
                <li>
                    <strong className="text-gray-800">Se um jogador perde:</strong> tende a mudar para a próxima jogada no sentido horário
                    do ciclo: Pedra → Papel → Tesoura → Pedra
                </li>
            </ul>
            <p className="mb-4">Como usar isso na prática: após cada rodada, pergunte - meu oponente acabou de ganhar ou perder?</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm space-y-2">
                <p className="font-semibold text-gray-800">Se acabaram de ganhar (Ganhar-Ficar - espere que repitam):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Ganharam com Pedra → espere Pedra novamente → você joga Papel</li>
                    <li>Ganharam com Papel → espere Papel novamente → você joga Tesoura</li>
                    <li>Ganharam com Tesoura → espere Tesoura novamente → você joga Pedra</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">Se acabaram de perder (Perder-Mudar - espere a próxima jogada no ciclo):</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Perderam com Pedra → espere Papel a seguir → você joga Tesoura</li>
                    <li>Perderam com Papel → espere Tesoura a seguir → você joga Pedra</li>
                    <li>Perderam com Tesoura → espere Pedra a seguir → você joga Papel</li>
                </ul>
            </div>
            <p className="mb-4">
                Isso não é um preditor garantido - é uma mudança de probabilidade. Mas ao longo de uma partida longa, move sua taxa de
                vitórias significativamente acima de 33%.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">A Dica do Iniciante - Por Que Pedra É para Novatos</h2>
            <p className="mb-4">
                Pesquisas mostram consistentemente que iniciantes, especialmente jogadores do sexo masculino, abrem com Pedra na rodada 1. A
                psicologia é simples: um punho fechado parece forte. Papel parece passivo. Tesoura parece arriscado.
            </p>
            <p className="mb-4">
                A regra prática: contra qualquer oponente desconhecido, lance Papel primeiro. Estatisticamente, é mais provável que você
                enfrente uma Pedra do que qualquer outra coisa.
            </p>
            <p className="mb-4">
                Jogadores experientes sabem disso - o que cria um meta-jogo. Especialistas esperam Papel, então jogam Tesoura. Jogadores
                muito experientes esperam Tesoura, então voltam para Pedra. Mas na prática, essa lógica recursiva colapsa sobre si mesma.
                Contra um novo oponente que você não conhece, Papel continua sendo a jogada percentual.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O Sinal do Lançamento Duplo</h2>
            <p className="mb-4">
                Jogadores raramente lançam a mesma jogada três vezes seguidas. O desconforto psicológico da repetição óbvia faz com que
                pareça uma dica - mesmo quando tecnicamente não é trapaça.
            </p>
            <p className="mb-4">
                Em uma partida ao melhor de 3, esse sinal importa mais na rodada 3. Se seu oponente já jogou Pedra duas vezes, a
                probabilidade de ele lançar Pedra uma terceira vez cai significativamente. Você pode eliminar Pedra da sua previsão e usar
                Ganhar-Ficar, Perder-Mudar para determinar se ele lançará Papel ou Tesoura.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Lendo Sinais Físicos (Apenas Pessoalmente)</h2>
            <p className="mb-4">
                No jogo presencial, os jogadores frequentemente telegrafam sua jogada na fração de segundo antes de revelar:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Um punho apertado se formando cedo → provavelmente Pedra</li>
                <li>Uma mão solta e aberta → provavelmente Papel</li>
                <li>Dois dedos começando a se estender antes do lançamento → provavelmente Tesoura</li>
            </ul>
            <p className="mb-4">
                Esses sinais só se aplicam pessoalmente. Online, ambos os jogadores se comprometem privadamente antes de qualquer resultado
                ser mostrado - não há janela para reagir a dicas físicas. Isso torna o jogo online mais justo e puramente estratégico: cada
                decisão depende inteiramente de ler padrões comportamentais, não de reflexos.
            </p>

            {/* Section 7 - Strategy Table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">A Melhor Estratégia para Cada Rodada no Melhor de 3</h2>
            <p className="mb-4">Combinando os padrões acima em um guia rodada a rodada:</p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Rodada</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Situação</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Jogada</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Razão</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">Rodada 1</td>
                            <td className="p-3 border border-gray-200">vs oponente desconhecido</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel</td>
                            <td className="p-3 border border-gray-200">Vence Pedra, a abertura mais comum</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Rodada 1</td>
                            <td className="p-3 border border-gray-200">vs jogador experiente</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Tesoura</td>
                            <td className="p-3 border border-gray-200">
                                Especialistas esperam Papel e contra-atacam com Tesoura - então você os iguala
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Rodada 2</td>
                            <td className="p-3 border border-gray-200">Oponente ganhou a Rodada 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">
                                Contra-atacar a jogada vencedora deles
                            </td>
                            <td className="p-3 border border-gray-200">Ganhar-Ficar: espere que repitam</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Rodada 2</td>
                            <td className="p-3 border border-gray-200">Oponente perdeu a Rodada 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">
                                Contra-atacar a próxima jogada do ciclo
                            </td>
                            <td className="p-3 border border-gray-200">Perder-Mudar: Pedra→Papel, Papel→Tesoura, Tesoura→Pedra</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Rodada 3</td>
                            <td className="p-3 border border-gray-200">Oponente lançou a mesma jogada duas vezes</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Eliminar aquela jogada</td>
                            <td className="p-3 border border-gray-200">Lançamento duplo: não vai lançar pela terceira vez</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Rodada 3</td>
                            <td className="p-3 border border-gray-200">Precisa ganhar, sem leitura clara</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel</td>
                            <td className="p-3 border border-gray-200">Jogada estatisticamente mais forte sob pressão</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Coloque essa estratégia à prova.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Desafie um amigo - veja se ele consegue ler seus padrões antes de você ler os dele.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Iniciar Jogo de 2 Jogadores →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Praticar vs Computador
                    </Link>
                </div>
            </div>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Você Consegue Vencer o Computador no Pedra Papel Tesoura?</h2>
            <p className="mb-4">
                O computador neste site escolhe sua jogada usando um gerador de números aleatórios - aleatoriedade verdadeira e imparcial.
                Pedra, Papel e Tesoura têm exatamente 1 em 3 de probabilidade em cada rodada, sem memória de rodadas anteriores e sem
                padrões comportamentais.
            </p>
            <p className="mb-4">
                Isso significa que a estratégia não se aplica contra o computador. Não há padrão Ganhar-Ficar para explorar, nenhuma dica de
                iniciante para ler. Cada rodada é um lançamento de moeda novo, e qualquer sequência que você veja é ruído.
            </p>
            <p className="mb-4">
                Mas jogar contra o computador ainda é útil para uma coisa: descobrir padrões no seu próprio jogo. Se você notar que está
                perdendo significativamente mais de 33% ao longo de muitas rodadas, você encontrou um hábito que um oponente humano poderia
                explotar. Use o computador para encontrar e eliminar seus próprios sinais antes de enfrentar uma pessoa de verdade.
            </p>
            <p className="mb-4">O verdadeiro teste de estratégia é o multijogador. Contra um humano, cada padrão deste guia se aplica.</p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas Frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Papel é a melhor jogada no pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Estatisticamente, sim - papel vence pedra, que é a jogada mais comum com cerca de 35% das vezes. Mas contra
                        jogadores experientes que sabem disso, tesoura é o contra-jogo esperado, o que pode tornar pedra mais segura.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">O que é a estratégia ganhar-ficar, perder-mudar?</h3>
                    <p className="text-gray-600 text-sm">
                        Um padrão comportamental em que os vencedores tendem a repetir a jogada que acabou de ganhar, enquanto os perdedores
                        mudam para a próxima jogada no ciclo (Pedra → Papel → Tesoura → Pedra). Confirmado pela Universidade de Zhejiang em
                        2014 em mais de 100.000 rodadas.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">A psicologia realmente afeta o pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim. Múltiplos estudos revisados por pares mostram que humanos se desviam significativamente do jogo aleatório. As
                        pessoas se ancoram emocionalmente a jogadas, reagem de forma previsível a vitórias e derrotas, e criam padrões que
                        oponentes habilidosos podem ler.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Você pode ganhar no pedra papel tesoura sempre?</h3>
                    <p className="text-gray-600 text-sm">
                        Não sempre - mas consistentemente acima de 33% contra oponentes humanos lendo padrões comportamentais. Contra um
                        gerador de números aleatórios verdadeiro (como o modo computador deste site), nenhuma estratégia se aplica.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qual é a melhor primeira jogada no pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Contra qualquer oponente desconhecido, Papel é a abertura estatisticamente mais forte. Pedra é a jogada inicial mais
                        comum - especialmente por iniciantes e jogadores do sexo masculino - então Papel oferece o melhor resultado esperado
                        na rodada 1.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pedra papel tesoura é realmente aleatório?</h3>
                    <p className="text-gray-600 text-sm">
                        Não quando humanos estão jogando. Pesquisas da Universidade de Zhejiang descobriram que jogadores humanos seguem
                        padrões previsíveis com base em se acabaram de ganhar ou perder. Um computador usando um gerador de números
                        aleatórios é verdadeiramente aleatório - oponentes humanos não são.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Você leu a estratégia.</p>
                <p className="text-sm text-gray-500 mb-5">A única forma de aperfeiçoá-la é jogar contra alguém que não a conhece.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Desafiar um Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Praticar vs Computador
                    </Link>
                </div>
            </div>
        </article>
    );
}

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Pedra Papel Tesoura como Icebreaker em Reuniões Virtuais",
    description:
        "O melhor icebreaker para equipes remotas. Sem app, sem cadastro - só compartilhe um link e comece em 10 segundos. Veja como fazer.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-virtual-meeting-icebreaker",
    readingTime: "5 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Dá para jogar pedra papel tesoura em uma chamada de Zoom?",
        a: "Sim. Cada jogador abre o jogo no próprio dispositivo durante a chamada. Compartilhe o link no chat, os dois jogadores escolhem em privado e o resultado é revelado simultaneamente - sem contar até três em voz alta, sem problemas de latência.",
    },
    {
        q: "Quais são bons icebreakers para reuniões virtuais?",
        a: "Os melhores icebreakers virtuais são rápidos, não precisam de configuração e funcionam em diferentes dispositivos e níveis de conforto. Pedra Papel Tesoura atende os três critérios: menos de 60 segundos, sem app ou cadastro, conhecido em todas as culturas.",
    },
    {
        q: "Como organizar um torneio de pedra papel tesoura em videochamada?",
        a: "Forme pares em uma chave. Cada par recebe um link do jogo no chat. Todos os jogos da primeira rodada acontecem simultaneamente. Os vencedores avançam. Com 8 pessoas, um torneio completo leva menos de 10 minutos.",
    },
    {
        q: "Por que pedra papel tesoura é um bom icebreaker de equipe?",
        a: "É universalmente conhecido, dura menos de um minuto, não exige conhecimento prévio nem confiança para falar, e sempre produz um vencedor claro - gerando uma reação natural que quebra o gelo melhor do que qualquer pergunta roteirizada.",
    },
    {
        q: "Quanto tempo dura um icebreaker virtual de pedra papel tesoura?",
        a: "Uma partida melhor de 3 dura 30-60 segundos. Um torneio completo com 8 pessoas leva cerca de 10 minutos. Uma rodada rápida onde todos jogam com a pessoa à sua esquerda leva 2-3 minutos.",
    },
    {
        q: "Pedra papel tesoura funciona com equipes grandes?",
        a: "Sim. Para equipes maiores de 8-10 pessoas, organize um torneio em chave ou divida em grupos menores. Todas as partidas são independentes - os pares podem jogar simultaneamente sem sobrecarga de coordenação.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Reuniões remotas têm um primeiro minuto incômodo. Todo mundo entra, alguém pergunta &ldquo;vocês estão me ouvindo?&rdquo;, e
                aí tem um silêncio antes da pauta começar. Um bom icebreaker resolve isso - mas a maioria precisa de facilitador, app
                compartilhado ou 10 minutos de explicação. Pedra Papel Tesoura não precisa de nada disso. Compartilha um link, escolhe uma
                jogada, vê quem vence. Pronto em 60 segundos, funciona em qualquer dispositivo, conhecido em todas as culturas.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Por Que PPT Funciona Melhor como Icebreaker Virtual do que a Maioria das Alternativas
            </h2>
            <p className="mb-4">
                A maioria dos formatos de icebreaker falha por um de três motivos: demora demais, exige que todos se sintam confortáveis
                falando, ou precisa de uma ferramenta que metade do time nunca usou.
            </p>
            <p className="mb-4">Pedra Papel Tesoura contorna os três:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Zero configuração:</strong> sem cadastro, sem download, sem esperar o facilitador
                    compartilhar a tela. Os jogadores abrem o link por conta própria.
                </li>
                <li>
                    <strong className="text-gray-800">Sem barreira de idioma:</strong> as regras - pedra vence tesoura, tesoura vence papel,
                    papel vence pedra - se explicam em 10 segundos e já são conhecidas na maioria das culturas.
                </li>
                <li>
                    <strong className="text-gray-800">Igualdade de condições:</strong> sem vantagem de conhecimento, sem exigência de
                    confiança para falar, sem sinal de hierarquia. O estagiário e o diretor jogam exatamente nos mesmos termos.
                </li>
                <li>
                    <strong className="text-gray-800">Resultado imediato:</strong> cada partida produz um vencedor claro e uma reação
                    natural - uma risada, um gemido, um pedido de revanche. Essa reação é o icebreaker funcionando.
                </li>
                <li>
                    <strong className="text-gray-800">Funciona em qualquer dispositivo:</strong> celular, tablet, notebook - sem extensão de
                    navegador, sem aprovação de TI.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por Que Jogar Pela Câmera Não Funciona - e Por Que Isso Funciona</h2>
            <p className="mb-4">
                A abordagem óbvia - todo mundo conta até três na câmera e mostra o gesto - quebra imediatamente em videochamadas. A latência
                de rede faz os jogadores verem as revelações em momentos ligeiramente diferentes. Um atraso de 200ms é suficiente para uma
                pessoa ver tecnicamente a mão da outra antes de se comprometer.
            </p>
            <p className="mb-4">
                Um jogo online adequado resolve isso estruturalmente. Os dois jogadores bloqueiam a escolha em privado antes de qualquer
                resultado ser exibido. A revelação acontece só depois que os dois se comprometeram - tornando-a genuinamente simultânea de
                um jeito que contar pela câmera nunca consegue ser.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Como Fazer: Passo a Passo</h2>
            <p className="mb-4">Isso leva menos de 2 minutos do início ao fim para um par, ou 5-10 minutos para uma chave completa.</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">O host abre o jogo e cria uma sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Acesse o jogo para 2 jogadores, clique em &ldquo;Criar partida&rdquo; e copie o link do navegador.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Cole o link no chat da reunião</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funciona no Zoom, Teams, Meet, Slack ou qualquer janela de chat. O outro jogador clica e entra na hora - sem
                            cadastro.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Os dois jogadores escolhem sua jogada</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada jogador toca Pedra, Papel ou Tesoura no próprio dispositivo. A escolha fica oculta até os dois enviarem.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">O resultado é revelado simultaneamente</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            As duas jogadas aparecem ao mesmo tempo. Formato melhor de 3 - o primeiro a vencer 2 rodadas ganha a partida.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Experimente antes da sua próxima chamada.</p>
                <p className="text-sm text-gray-600 mb-4">Abra uma sala agora - sem cadastro, só cole o link no chat da reunião.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Criar uma Sala de Jogo →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formas Concretas de Usar em Reuniões</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Aquecimento rápido para o standup do time</h3>
            <p className="mb-4">
                Antes da pauta começar, o facilitador forma um par aleatório e joga uma partida ao vivo. Leva 45 segundos, cria um momento
                de leveza e faz as pessoas prestarem atenção antes da reunião de verdade começar.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Tomar uma decisão de grupo</h3>
            <p className="mb-4">
                Quem apresenta primeiro na demo? Quem escolhe o almoço do time? Quem escreve o resumo da reunião? Em vez de um silêncio
                constrangedor ou a voz mais alta ganhar, jogam uma partida rápida. As duas pessoas aceitam o resultado porque tiveram uma
                chance justa.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Integração de novo membro da equipe</h3>
            <p className="mb-4">
                Forme o novo com cada membro existente para uma partida rápida na primeira semana. É menos intimidador do que pedir para se
                apresentar para o grupo, gera conversas naturais um a um e ajuda a lembrar nomes mais rápido pelo contexto do jogo.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Torneio de team building</h3>
            <p className="mb-4">
                Para uma atividade dedicada de equipe, organize uma chave eliminatória. Com 8 pessoas: sorteie os pares, jogue 4 partidas de
                primeira rodada simultaneamente (cada par recebe seu próprio link), depois semifinais e final. Tudo leva 10-12 minutos.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Desempatar uma votação</h3>
            <p className="mb-4">
                O time está dividido 2-2 numa decisão. Em vez de ir ao gestor como árbitro (o que cria pressão hierárquica), cada lado
                escolhe um campeão e jogam. O resultado é aleatório - mas é aceito como justo porque os dois lados concordaram.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Organizando um Torneio para Equipes Grandes</h2>
            <p className="mb-4">Para equipes de 8-16 pessoas, a eliminação simples funciona bem:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Use uma ferramenta de chave (Challonge, Bracket HQ, ou uma planilha simples) para definir os pares</li>
                <li>Compartilhe o link de cada par simultaneamente no chat do grupo</li>
                <li>Todos os jogos da primeira rodada acontecem ao mesmo tempo - sem esperar outros pares terminarem</li>
                <li>Vencedores reportam o resultado no chat; avançam para a próxima rodada</li>
                <li>A partida final acontece ao vivo com todos assistindo na chamada</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                O Que Faz um Icebreaker Virtual Funcionar (e Por Que a Maioria Falha)
            </h2>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Formato</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Tempo</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Problema</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">&ldquo;Duas verdades e uma mentira&rdquo;</td>
                            <td className="p-3 border border-gray-200">5-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Exige conforto para falar; constrangedor para membros novos ou introvertidos
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Quiz de trivia</td>
                            <td className="p-3 border border-gray-200">10-20 min</td>
                            <td className="p-3 border border-gray-200">Diferença de conhecimento penaliza não-nativos e membros júnior</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Bingo virtual</td>
                            <td className="p-3 border border-gray-200">10-15 min</td>
                            <td className="p-3 border border-gray-200">
                                Requer ferramenta compartilhada, tempo de configuração, alguém para facilitar
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Associação de palavras</td>
                            <td className="p-3 border border-gray-200">3-5 min</td>
                            <td className="p-3 border border-gray-200">Difícil com mais de 4-5 pessoas; perde energia rápido</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Pedra Papel Tesoura</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">1-10 min</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">
                                Sem configuração. Sem falar. Igualdade. Escala para qualquer tamanho.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Quando o icebreaker acabar e as pessoas quiserem continuar jogando:{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        leia o guia de estratégia
                    </Link>{" "}
                    - cobre a psicologia comportamental que explica por que jogadores humanos são previsíveis. Ou revise as{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        regras completas
                    </Link>{" "}
                    se alguém na chamada precisar de uma recapitulação.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas Frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dá para jogar pedra papel tesoura em uma chamada de Zoom?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim. Cada jogador abre o jogo no próprio dispositivo. Compartilhe o link no chat, os dois escolhem em privado e o
                        resultado é revelado simultaneamente - sem contar em voz alta, sem problemas de latência.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quais são bons icebreakers para reuniões virtuais?</h3>
                    <p className="text-gray-600 text-sm">
                        Os melhores são rápidos, sem configuração e funcionam para qualquer nível de conforto. Pedra Papel Tesoura atende os
                        três critérios: menos de 60 segundos, sem app ou cadastro, conhecido em todas as culturas.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Como organizar um torneio em videochamada?</h3>
                    <p className="text-gray-600 text-sm">
                        Forme pares em uma chave. Compartilhe o link de cada par no chat. Todos os jogos da primeira rodada acontecem ao
                        mesmo tempo. Vencedores avançam. Com 8 pessoas, menos de 10 minutos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Por que é um bom icebreaker de equipe?</h3>
                    <p className="text-gray-600 text-sm">
                        Universalmente conhecido, menos de um minuto, sem vantagem de conhecimento nem necessidade de confiança para falar,
                        e sempre produz um vencedor claro que gera uma reação natural.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quanto tempo dura um icebreaker virtual de pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Uma partida melhor de 3 dura 30-60 segundos. Um torneio com 8 pessoas leva cerca de 10 minutos. Uma rodada rápida
                        onde todos jogam com a pessoa à esquerda leva 2-3 minutos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Funciona com equipes grandes?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim. Para equipes maiores de 8-10 pessoas, organize uma chave ou divida em grupos menores. Todas as partidas são
                        independentes e podem acontecer simultaneamente.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pronto para a próxima reunião?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Abra uma sala agora - cole o link no chat da reunião e comece em menos de 10 segundos.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Criar uma Sala de Jogo →
                </CtaLink>
            </div>
        </article>
    );
}

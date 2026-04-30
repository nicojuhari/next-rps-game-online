import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Regras do Pedra Papel Tesoura: O Guia Completo",
    description:
        "Pedra Papel Tesoura se joga em segundos, mas a maioria entende só o básico. Aprenda as regras completas — gestos, condições de vitória, empates e formatos de jogo — além de como funciona online.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-rules",
    readingTime: "5 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Quais são as regras oficiais do pedra papel tesoura?",
        a: "Dois jogadores revelam simultaneamente um de três gestos com a mão: Pedra (punho fechado), Papel (mão aberta e plana) ou Tesoura (dois dedos em V). Pedra vence Tesoura, Tesoura vence Papel, Papel vence Pedra. Mesmo gesto é empate — repete a rodada.",
    },
    {
        q: "O que vence o quê no pedra papel tesoura?",
        a: "Pedra vence Tesoura (esmaga). Tesoura vence Papel (corta). Papel vence Pedra (cobre). Cada jogada vence exatamente uma outra e perde para uma — tornando o jogo perfeitamente equilibrado.",
    },
    {
        q: "O que acontece em caso de empate no pedra papel tesoura?",
        a: "Quando os dois jogadores fazem o mesmo gesto, é empate. A regra padrão é repetir a rodada imediatamente até que o gesto de um jogador vença o do outro.",
    },
    {
        q: "Quantas rodadas tem uma partida padrão de pedra papel tesoura?",
        a: "O formato mais comum é melhor de 3: o primeiro jogador a vencer 2 rodadas ganha a partida. Lançamentos únicos são usados para decisões rápidas. Melhor de 5 é usado em contextos mais competitivos.",
    },
    {
        q: "De onde vem o pedra papel tesoura?",
        a: "O jogo se originou na China e se espalhou para o Japão, onde ficou conhecido como jan-ken-pon. Chegou ao Ocidente no início do século XX e hoje é jogado em todo o mundo com nomes diferentes.",
    },
    {
        q: "O que é roshambo?",
        a: "Roshambo é o nome norte-americano para pedra papel tesoura, comum nos Estados Unidos. A origem do termo é debatida — pode derivar do Conde francês de Rochambeau ou simplesmente ser um apelido regional que se popularizou.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Pedra Papel Tesoura é um dos jogos de mão mais jogados no mundo. A maioria aprende na infância e nunca mais pensa nas regras — mas disputas sobre empates, revelações simultâneas e formatos corretos aparecem o tempo todo. Este guia cobre tudo: os gestos, o que vence o quê, como funcionam os empates, formatos de jogo e como o jogo online muda a mecânica.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Os Três Gestos</h2>
            <p className="mb-4">
                Cada jogador forma um de três formatos com a mão ao mesmo tempo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✊</div>
                    <p className="font-semibold text-gray-800">Pedra</p>
                    <p className="text-sm text-gray-500 mt-1">Punho fechado</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✋</div>
                    <p className="font-semibold text-gray-800">Papel</p>
                    <p className="text-sm text-gray-500 mt-1">Mão aberta e plana</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✌️</div>
                    <p className="font-semibold text-gray-800">Tesoura</p>
                    <p className="text-sm text-gray-500 mt-1">Indicador e médio estendidos em V</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O Que Vence o Quê</h2>
            <p className="mb-4">
                Os três resultados seguem um ciclo simples. Cada gesto vence um e perde para um:
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Gesto</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Vence</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Perde para</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Por quê</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Pedra ✊</td>
                            <td className="p-3 border border-gray-200">Tesoura ✌️</td>
                            <td className="p-3 border border-gray-200">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Pedra esmaga Tesoura; Papel cobre Pedra</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Pedra ✊</td>
                            <td className="p-3 border border-gray-200">Tesoura ✌️</td>
                            <td className="p-3 border border-gray-200">Papel cobre Pedra; Tesoura corta Papel</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Tesoura ✌️</td>
                            <td className="p-3 border border-gray-200">Papel ✋</td>
                            <td className="p-3 border border-gray-200">Pedra ✊</td>
                            <td className="p-3 border border-gray-200">Tesoura corta Papel; Pedra esmaga Tesoura</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-4">
                O jogo é perfeitamente equilibrado — nenhum gesto é mais forte que os outros. Cada um vence contra um e perde para um, o que explica por que é usado como ferramenta de decisão justa em todo o mundo.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">A Revelação Simultânea — A Regra Mais Importante</h2>
            <p className="mb-4">
                A regra central que torna o jogo justo: <strong className="text-gray-800">os dois jogadores devem revelar seu gesto exatamente ao mesmo tempo.</strong> Nenhum jogador pode esperar para ver a escolha do outro antes de se comprometer.
            </p>
            <p className="mb-4">
                Presencialmente, isso é aplicado com uma contagem. Métodos comuns:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Pedra, Papel, Tesoura, Já!</strong> — revela em &ldquo;Já!&rdquo;</li>
                <li><strong className="text-gray-800">1, 2, 3, Vai!</strong> — revela em &ldquo;Vai!&rdquo;</li>
                <li><strong className="text-gray-800">Jan-ken-pon</strong> — a contagem japonesa, revela em &ldquo;pon&rdquo;</li>
            </ul>
            <p className="mb-4">
                Os jogadores fecham o punho em cada batida e abrem no gesto escolhido na última palavra. Revelar antes (antes da última batida) ou depois (após ver a jogada do oponente) é considerado trapaça.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Empates e Como Lidar com Eles</h2>
            <p className="mb-4">
                Quando os dois jogadores fazem o mesmo gesto, a rodada é empate. A regra padrão é simples: <strong className="text-gray-800">repetir imediatamente</strong>. Continue repetindo até que o gesto de um jogador vença o do outro.
            </p>
            <p className="mb-4">
                Em uma partida melhor de 3 ou melhor de 5, rodadas empatadas simplesmente não contam para o total de nenhum jogador. Continue jogando até que um alcance o número alvo de vitórias.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formatos de Jogo</h2>
            <p className="mb-4">
                Pedra Papel Tesoura é flexível — o formato depende do contexto:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Lançamento único:</strong> uma rodada, decisão imediata. Usado para escolhas rápidas como quem paga a conta ou quem começa em um jogo de tabuleiro.</li>
                <li><strong className="text-gray-800">Melhor de 3:</strong> o primeiro jogador a vencer 2 rodadas ganha a partida. O formato competitivo padrão e o usado neste site.</li>
                <li><strong className="text-gray-800">Melhor de 5:</strong> primeiro a vencer 3. Usado quando uma partida mais longa é necessária — mais rodadas reduz a influência da sorte e dá mais espaço para a estratégia.</li>
                <li><strong className="text-gray-800">Rodadas fixas:</strong> um número definido de rodadas (ex. 10), vencendo quem acumular mais vitórias. Usado em contextos de pesquisa e alguns torneios.</li>
            </ul>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pronto para jogar?</p>
                <p className="text-sm text-gray-600 mb-4">Jogue melhor de 3 contra um amigo — ou teste as regras contra o computador primeiro.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jogar com um Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jogar vs Computador
                    </Link>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Como Funciona o Pedra Papel Tesoura Online</h2>
            <p className="mb-4">
                O maior desafio no PPT online é garantir a revelação simultânea. Sem um espaço físico compartilhado e uma contagem, um jogador poderia esperar para ver a escolha do outro.
            </p>
            <p className="mb-4">
                Neste site, o problema da revelação é resolvido mecanicamente: os dois jogadores bloqueiam sua escolha de forma privada antes de qualquer resultado ser mostrado. O sistema só revela as duas jogadas ao mesmo tempo, depois que os dois jogadores já se comprometeram. Nenhum pode ver a seleção do outro até que a sua já tenha sido enviada — tornando o jogo online estruturalmente mais justo do que a maioria dos jogos presenciais, onde as mãos rápidas podem dobrar as regras de tempo.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Variantes Comuns</h2>
            <p className="mb-4">
                O jogo original gerou muitas variantes. As mais conhecidas:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Pedra Papel Tesoura Lagarto Spock</strong> — popularizado por The Big Bang Theory. Adiciona dois gestos. Lagarto envenena Spock e come Papel; Spock esmaga Tesoura e vaporiza Pedra. O conjunto ampliado reduz empates significativamente.
                </li>
                <li>
                    <strong className="text-gray-800">Torneio de PPT</strong> — governado pela World RPS Society, que publica regras oficiais incluindo padrões para lançamentos legais, timing e resolução de disputas.
                </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pedra Papel Tesoura pelo Mundo</h2>
            <p className="mb-4">
                O jogo é global mas tem muitos nomes:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Jan-ken-pon</strong> (Japão) — considerada a forma documentada mais antiga, do século XVII</li>
                <li><strong className="text-gray-800">Roshambo / Rochambeau</strong> (EUA) — origem debatida, muito usado no oeste americano</li>
                <li><strong className="text-gray-800">Ching chong cha</strong> (África do Sul)</li>
                <li><strong className="text-gray-800">Schnick, Schnack, Schnuck</strong> (Alemanha)</li>
                <li><strong className="text-gray-800">Pierre, feuille, ciseaux</strong> (França)</li>
            </ul>

            {/* Internal link to strategy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Agora que você sabe as regras, talvez queira ir mais fundo.{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Leia o guia de estratégia →
                    </Link>{" "}
                    — cobre a pesquisa de psicologia comportamental que explica por que jogadores humanos são previsíveis, e como aproveitar isso.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas Frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quais são as regras oficiais do pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Dois jogadores revelam simultaneamente um de três gestos: Pedra (punho fechado), Papel (mão aberta e plana) ou Tesoura (dois dedos em V). Pedra vence Tesoura, Tesoura vence Papel, Papel vence Pedra. Mesmo gesto é empate — repete a rodada.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">O que vence o quê no pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        Pedra vence Tesoura (esmaga). Tesoura vence Papel (corta). Papel vence Pedra (cobre). Cada jogada vence exatamente uma outra e perde para uma — tornando o jogo perfeitamente equilibrado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">O que acontece em caso de empate?</h3>
                    <p className="text-gray-600 text-sm">
                        Quando os dois jogadores fazem o mesmo gesto, é empate. A regra padrão é repetir a rodada imediatamente até que o gesto de um jogador vença o do outro.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quantas rodadas tem uma partida padrão?</h3>
                    <p className="text-gray-600 text-sm">
                        O formato mais comum é melhor de 3 — o primeiro jogador a vencer 2 rodadas ganha a partida. Lançamentos únicos são usados para decisões rápidas. Melhor de 5 é usado em contextos mais competitivos.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">De onde vem o pedra papel tesoura?</h3>
                    <p className="text-gray-600 text-sm">
                        O jogo se originou na China e se espalhou para o Japão, onde se chamou jan-ken-pon. Chegou ao Ocidente no início do século XX e hoje é jogado em todo o mundo com nomes como roshambo e rochambeau.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">O que é roshambo?</h3>
                    <p className="text-gray-600 text-sm">
                        Roshambo é o nome norte-americano para pedra papel tesoura. A origem do termo é debatida — pode derivar do Conde francês de Rochambeau ou simplesmente ser um apelido regional que se popularizou na cultura americana.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Você sabe as regras. Agora jogue.</p>
                <p className="text-sm text-gray-500 mb-5">Desafie um amigo online — sem cadastro, só compartilhe o link.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jogar com um Amigo →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jogar vs Computador
                    </Link>
                </div>
            </div>

        </article>
    );
}

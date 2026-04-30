import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Como jogar pedra papel tesoura online com amigos (sem conta)",
    description:
        "Compartilhe um link, os dois escolhem ao mesmo tempo, vencedor em 60 segundos. Como jogar PPT online com um amigo - sem app, sem cadastro.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-online-with-friends",
    readingTime: "4 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Preciso criar uma conta para jogar?",
        a: "Não. O jogo é completamente anônimo - sem e-mail, sem senha, sem perfil. Basta abrir o link e jogar.",
    },
    {
        q: "Como convido meu amigo?",
        a: "Abra a partida de 2 jogadores, copie o link único da sala e envie como preferir - SMS, WhatsApp, Discord, e-mail. Quando ele abrir o link, vocês estarão conectados.",
    },
    {
        q: "É gratuito?",
        a: "Sim, sempre gratuito. Sem assinatura nem compras no aplicativo.",
    },
    {
        q: "Quantas rodadas dura uma partida?",
        a: "Melhor de 3. O primeiro a vencer 2 rodadas ganha a partida.",
    },
    {
        q: "Dá para jogar pelo celular?",
        a: "Sim. O jogo funciona em qualquer navegador mobile no iOS e Android - sem precisar baixar nenhum app.",
    },
    {
        q: "O que acontece se eu perder a conexão no meio da partida?",
        a: "A sala de jogo persiste por um momento. Se os dois se reconectarem ao mesmo link, a partida continua de onde parou.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Você e um amigo precisam decidir algo. Não estão no mesmo lugar. Mandar mensagens de &ldquo;pedra papel tesoura já!&rdquo;
                não funciona - um sempre vê a escolha do outro antes de confirmar a sua. Existe uma forma melhor: uma partida em tempo real
                com revelação simultânea, sem conta, pronta em menos de 60 segundos.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Resposta rápida:</strong> Para jogar pedra papel tesoura online com um amigo - abra a partida de 2 jogadores,
                    compartilhe o link único da sala com seu amigo, e os dois escolhem ao mesmo tempo. O resultado é revelado
                    simultaneamente. Sem conta ou download.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O problema de jogar pedra papel tesoura por mensagem</h2>
            <p className="mb-4">
                Parece simples: mandar uma mensagem, contar até três e revelar. Mas na prática sempre falha da mesma forma. Um responde
                primeiro e o outro - conscientemente ou não - ajusta a escolha. Mesmo em uma videochamada, um atraso de 200 ms significa que
                o segundo jogador tecnicamente vê a escolha do primeiro antes de confirmar a sua. A equidade desaparece no momento em que a
                revelação não é simultânea.
            </p>
            <p className="mb-4">
                A solução não é contar mais rápido nem confiar mais um no outro - é usar um sistema que estruturalmente impeça qualquer
                jogador de ver a escolha do outro antes de confirmar a sua. É exatamente isso que um jogo de PPT em tempo real online faz.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Como jogar pedra papel tesoura online com amigos - passo a passo</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Passo 1 - Abra a partida de 2 jogadores</h3>
            <p className="mb-4">
                Acesse a{" "}
                <Link href="/two-players" className="text-blue-600 hover:underline">
                    partida de 2 jogadores
                </Link>
                . Sem conta para criar, sem app para baixar, sem e-mail para verificar. Funciona em qualquer navegador em qualquer
                dispositivo - computador, celular, tablet. Você chega à sala de jogo em cerca de cinco segundos.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Passo 2 - Compartilhe o link com seu amigo</h3>
            <p className="mb-4">
                Ao abrir uma sala de jogo, você recebe uma URL única. Copie e envie para seu amigo - por SMS, WhatsApp, Discord, e-mail, o
                que você já usa para conversar. Ele abre no dispositivo dele, de qualquer lugar do mundo, e vocês estão conectados. Sem
                senha compartilhada, sem código de sala para coordenar.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Passo 3 - Os dois escolhem ao mesmo tempo</h3>
            <p className="mb-4">
                Cada jogador vê as mesmas três opções: Pedra, Papel, Tesoura. Os dois confirmam a escolha em privado - nenhum pode ver a do
                outro até que ambos tenham enviado a sua. Sem contagem regressiva para coordenar, sem precisar confiar. O sistema garante a
                revelação simultânea.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Passo 4 - Descubram quem ganhou</h3>
            <p className="mb-4">
                Assim que os dois escolheram, o resultado é instantâneo. Você joga melhor de 3 - o primeiro a vencer 2 rodadas ganha a
                partida. A pontuação é atualizada em tempo real. Sem anotar manualmente, sem &ldquo;espera, quanto era o placar?&rdquo;. A
                disputa está resolvida, de forma justa, em menos de um minuto.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pronto para jogar agora?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Compartilhe um link - os dois escolhem ao mesmo tempo, resultado instantâneo. Sem conta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida de 2 jogadores →
                </CtaLink>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por que a revelação simultânea importa</h2>
            <p className="mb-4">
                Pedra papel tesoura é um jogo justo exatamente porque nenhum jogador conhece a escolha do outro com antecedência. No momento
                em que um revela primeiro - mesmo que seja por uma fração de segundo - o outro tem informação que não deveria ter. Pesquisas
                sobre tomada de decisão humana mostram que as pessoas ajustam suas escolhas com base em informação parcial mesmo quando
                acreditam estar jogando de forma justa.
            </p>
            <p className="mb-4">
                Um sistema de revelação simultânea elimina isso completamente. Ambas as escolhas são confirmadas antes de qualquer uma ser
                mostrada. Não há como reagir ao que você não viu. É o mesmo princípio por trás de leilões com propostas fechadas e votações
                secretas. Se quiser entender como isso afeta a estratégia, o{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    guia de estratégia
                </Link>{" "}
                cobre o que torna os jogadores humanos previsíveis.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Dá para jogar pedra papel tesoura pelo celular?</h2>
            <p className="mb-4">
                Sim. O jogo funciona no navegador e roda em qualquer dispositivo móvel - iPhone, Android, tablet. Sem app para baixar, sem
                permissões da App Store. Abra o link no Safari, Chrome ou qualquer navegador mobile e já está jogando. A maioria das pessoas
                que usa o modo de 2 jogadores faz isso pelo celular, no meio de uma conversa com o amigo.
            </p>
            <p className="mb-4">
                O layout se adapta a telas menores para que os controles sejam fáceis de tocar. Pedra, Papel, Tesoura - três botões, um
                toque, feito.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pedra papel tesoura no Zoom, FaceTime ou Discord</h2>
            <p className="mb-4">
                Se você já está em uma videochamada com alguém, pode jogar PPT online ao mesmo tempo - basta abrir o link do jogo em outra
                aba enquanto a chamada continua. Compartilhe o link no chat e os dois entram.
            </p>
            <p className="mb-4">
                Isso é melhor do que contar até três na videochamada. O atraso do vídeo faz com que quem fala &ldquo;já!&rdquo; e quem
                revela primeiro nunca estejam perfeitamente sincronizados. O jogo online elimina completamente esse problema - nenhuma
                escolha é visível até que ambos tenham enviado a sua, independente do lag de vídeo.
            </p>
            <p className="mb-4">
                A mesma lógica vale para Zoom, Teams, FaceTime, Google Meet - qualquer ferramenta de vídeo. O jogo roda em uma aba do
                navegador, independente do app de comunicação que você estiver usando.
            </p>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Quer revisar as regras antes de jogar?{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        As regras oficiais
                    </Link>{" "}
                    cobrem todos os casos, incluindo empates. Ou se estão decidindo quem faz algo primeiro, leia{" "}
                    <Link href="/blog/rock-paper-scissors-vs-coin-flip" className="text-blue-600 hover:underline font-medium">
                        PPT vs cara ou coroa
                    </Link>{" "}
                    para ver qual é realmente mais justo.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Preciso criar uma conta para jogar?</h3>
                    <p className="text-gray-600 text-sm">
                        Não. O jogo é completamente anônimo - sem e-mail, sem senha, sem perfil. Basta abrir o link e jogar.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Como convido meu amigo?</h3>
                    <p className="text-gray-600 text-sm">
                        Abra a partida de 2 jogadores, copie o link único da sala e envie como preferir - SMS, WhatsApp, Discord, e-mail.
                        Quando ele abrir o link, vocês estarão conectados.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">É gratuito?</h3>
                    <p className="text-gray-600 text-sm">Sim, sempre gratuito. Sem assinatura nem compras no aplicativo.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quantas rodadas dura uma partida?</h3>
                    <p className="text-gray-600 text-sm">Melhor de 3. O primeiro a vencer 2 rodadas ganha a partida.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dá para jogar pelo celular?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim. O jogo funciona em qualquer navegador mobile no iOS e Android - sem precisar baixar nenhum app.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">O que acontece se eu perder a conexão no meio da partida?</h3>
                    <p className="text-gray-600 text-sm">
                        A sala de jogo persiste por um momento. Se os dois se reconectarem ao mesmo link, a partida continua de onde parou.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Pronto para resolver isso?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Inicie uma partida de 2 jogadores, compartilhe o link e joguem em menos de 60 segundos. Sem conta.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida de 2 jogadores →
                </CtaLink>
            </div>
        </article>
    );
}

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Pedra Papel Tesoura para Casais à Distância",
    description:
        "Casais à distância podem jogar PPT online com revelação simultânea - sem app, sem conta, basta um link. Faça de forma justa e divertida.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-long-distance-couples",
    readingTime: "4 min de leitura",
};

export const faqItems: FaqItem[] = [
    {
        q: "Dá para jogar pedra papel tesoura à distância?",
        a: "Sim. Um parceiro cria uma sala e envia o link - o outro abre em qualquer dispositivo, em qualquer lugar do mundo. Os dois escolhem suas jogadas em privado e o resultado é revelado simultaneamente. Sem app, sem conta, sem download.",
    },
    {
        q: "Como jogar pedra papel tesoura em videochamada de forma justa?",
        a: "Contar até três na câmera não funciona - o atraso de rede faz com que um jogador veja a mão do outro uma fração de segundo antes. Um jogo no navegador resolve isso: as duas jogadas são bloqueadas antes que qualquer um veja o resultado.",
    },
    {
        q: "Quais jogos gratuitos dois amigos podem jogar online sem baixar nada?",
        a: "Pedra papel tesoura é a opção mais rápida - abra o navegador, crie uma sala e compartilhe o link. Sem download, sem conta, funciona em qualquer celular ou computador.",
    },
    {
        q: "Precisamos os dois de uma conta para jogar?",
        a: "Não. Sem e-mail, sem senha, sem conta. Abra o link e jogue.",
    },
    {
        q: "E se estivermos em países ou fusos horários diferentes?",
        a: "Funciona de qualquer lugar com conexão à internet - qualquer país, qualquer fuso, qualquer dispositivo.",
    },
    {
        q: "Dá para jogar mais de uma rodada?",
        a: "Sim - cada sessão é melhor de 3. Jogue quantas sessões quiser e mantenha seu próprio placar acumulado.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Você está em chamada com seu parceiro. O momento pede uma competição amigável. Pedra papel tesoura é perfeito - exceto que
                contar &ldquo;1-2-3&rdquo; na câmera nunca funciona direito. O atraso de rede faz com que alguém sempre veja a jogada do
                outro meio segundo antes. Veja como fazer certo: instantâneo, justo, de qualquer lugar, sem precisar de nenhum app.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Por que pedra papel tesoura é perfeito para casais à distância</h2>
            <p className="mb-4">
                A maioria dos jogos online para casais exige instalação, downloads ou que os dois estejam na mesma plataforma. Pedra papel
                tesoura não precisa de nada disso.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Instantâneo:</strong> sem app, sem cadastro, sem espera. Um parceiro cria a sala,
                    compartilha o link e em menos de 60 segundos vocês estão jogando.
                </li>
                <li>
                    <strong className="text-gray-800">Sem pressão:</strong> se você perder às 23h pode culpar o azar e exigir a revanche.
                </li>
                <li>
                    <strong className="text-gray-800">Realmente útil:</strong> use para decidir quem escolhe o filme de hoje, quem manda a
                    primeira mensagem amanhã, ou quem organiza a próxima visita.
                </li>
                <li>
                    <strong className="text-gray-800">Levemente competitivo:</strong> cria um momento de drama e um vencedor claro - sem o
                    &ldquo;você decide&rdquo; ambíguo.
                </li>
                <li>
                    <strong className="text-gray-800">Funciona em qualquer dispositivo:</strong> celular, tablet, notebook - seu parceiro
                    não precisa instalar nada.
                </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">O problema de jogar pelo FaceTime ou videochamada</h2>
            <p className="mb-4">
                O clássico &ldquo;1-2-3 já&rdquo; na câmera falha assim que há qualquer atraso de rede - o que sempre acontece. Um atraso de
                200ms (invisível na conversa normal) é suficiente para que o segundo jogador veja brevemente a mão do primeiro antes de
                decidir. A revelação simultânea que torna o PPT justo é fisicamente impossível por vídeo.
            </p>
            <p className="mb-4">
                Um jogo online adequado resolve isso estruturalmente. Os dois jogadores bloqueiam suas escolhas em privado. O resultado só é
                revelado depois que os dois enviaram - sem possibilidade de ver a escolha do outro antes de fazer a sua. O PPT online é na
                verdade <em>mais justo</em> do que o PPT presencial exatamente por isso.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Como jogar pedra papel tesoura online com seu parceiro</h2>
            <p className="mb-4">Da ideia ao jogo em menos de 60 segundos:</p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Abra o jogo para 2 jogadores e crie uma sala</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Leva 5 segundos. Sem conta - só clique em &ldquo;Criar partida&rdquo;.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Envie o link para seu parceiro</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Copie do navegador e mande pelo WhatsApp, iMessage, Discord ou onde vocês conversam.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Seu parceiro abre no dispositivo dele</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Funciona em qualquer celular, tablet ou computador - qualquer navegador, qualquer país.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Os dois escolhem ao mesmo tempo</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Cada jogador toca Pedra, Papel ou Tesoura em privado. A revelação acontece depois que os dois confirmaram -
                            impossível trapacear. Formato melhor de 3.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Mande o link para seu parceiro agora.</p>
                <p className="text-sm text-gray-600 mb-4">
                    Sem conta, sem app - só compartilhe o link e decidam quem manda nos planos de hoje.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida para 2 →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formas divertidas de usar PPT no relacionamento à distância</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">O jogo das decisões</h3>
            <p className="mb-4">
                Use o melhor de 3 para resolver os pequenos debates que não precisam de debate: quem manda a primeira mensagem amanhã, quem
                escolhe o filme do encontro virtual, quem compra as passagens para a próxima visita. É mais divertido do que &ldquo;você
                decide&rdquo; e elimina o loop de &ldquo;não, você decide&rdquo; de vez.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">A edição dos desafios</h3>
            <p className="mb-4">
                Cada rodada tem uma aposta: quem perde compartilha uma foto constrangedora, faz uma dança ridícula na câmera ou manda um
                elogio de verdade. Uma partida de 3 rodadas vira 15 minutos de diversão. Funciona melhor tarde da noite quando alguém fica
                pedindo revanche sem parar.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">O placar acumulado</h3>
            <p className="mb-4">
                Mantenham uma contagem ao longo de várias sessões. Depois de 10 rodadas ou 2 semanas, quem tiver menos vitórias deve algo -
                uma carta escrita à mão, um pacotinho surpresa, organizar o próximo encontro por completo. O placar dá assunto: &ldquo;você
                só está na frente por causa daquela rodada de terça.&rdquo;
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">O aquecimento antes do encontro</h3>
            <p className="mb-4">
                Antes do encontro virtual de vocês, joguem o melhor de 3 para decidir quem escolhe a atividade. Deixa os dois animados antes
                do encontro começar de verdade, e quem perder não pode reclamar da escolha depois.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Funciona em qualquer dispositivo?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-1">Funciona em qualquer dispositivo - sem app, sem conta, só um link.</p>
                <p className="text-sm text-gray-600">
                    iOS e Android, qualquer notebook, qualquer tablet, qualquer navegador. Seu parceiro não precisa instalar nada nem criar
                    conta. O link funciona em qualquer parte do mundo.
                </p>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Quer melhorar no jogo? O{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        guia de estratégia
                    </Link>{" "}
                    explica os padrões de comportamento que tornam os jogadores humanos previsíveis - útil quando há um placar em jogo. Ou
                    se quiser organizar rodadas em grupo, veja o{" "}
                    <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline font-medium">
                        guia de icebreaker
                    </Link>
                    .
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Perguntas frequentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dá para jogar pedra papel tesoura à distância?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim. Um parceiro cria uma sala e envia o link. O outro abre de qualquer dispositivo, em qualquer lugar. Os dois
                        escolhem em privado e o resultado é revelado ao mesmo tempo. Sem app, sem conta.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Como jogar de forma justa em videochamada?</h3>
                    <p className="text-gray-600 text-sm">
                        Contar até três na câmera não funciona - o atraso de rede faz um jogador ver a jogada do outro antes. Com um jogo no
                        navegador, as duas jogadas são bloqueadas antes que qualquer um veja o resultado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Precisamos de uma conta?</h3>
                    <p className="text-gray-600 text-sm">Não. Sem e-mail, sem senha, sem conta. Abra o link e jogue.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E se estivermos em países diferentes?</h3>
                    <p className="text-gray-600 text-sm">
                        Funciona de qualquer lugar com internet - qualquer país, qualquer fuso horário, qualquer dispositivo.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dá para jogar mais de uma rodada?</h3>
                    <p className="text-gray-600 text-sm">
                        Sim - cada sessão é melhor de 3. Jogue quantas sessões quiser e mantenha seu próprio placar acumulado.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quais jogos gratuitos dois podem jogar sem baixar nada?</h3>
                    <p className="text-gray-600 text-sm">
                        PPT é a opção mais rápida - abra o navegador, crie uma sala e compartilhe o link. Sem download, sem conta, funciona
                        em qualquer celular ou computador.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Prontos para jogar?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Mande o link para seu parceiro - sem conta, sem app, só uma partida. Decidam os planos de hoje em uma rodada.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Iniciar partida para 2 →
                </CtaLink>
            </div>
        </article>
    );
}

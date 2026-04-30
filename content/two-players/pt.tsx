import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "É grátis jogar?", a: "Sim. Completamente grátis, sem conta necessária, sem download obrigatório." },
    { q: "Meu amigo precisa criar uma conta?", a: "Não. Basta compartilhar o link — sem cadastro em nenhum dos lados." },
    { q: "Podemos jogar de dispositivos diferentes?", a: "Sim. Um jogador no computador, o outro no celular — funciona em qualquer dispositivo com navegador." },
    { q: "Algum jogador pode ver o movimento do outro antes de escolher?", a: "Não. Ambas as escolhas ficam ocultas até que os dois jogadores terminem. Sem espiar, sem trapacear." },
    { q: "O que acontece se eu fechar o navegador no meio do jogo?", a: "Sua sala de jogo permanece aberta. Reabra o link e continue de onde parou." },
    { q: "Posso jogar no celular?", a: "Sim. O jogo funciona em qualquer smartphone ou tablet." },
    { q: "Podemos usar Pedra Papel Tesoura para resolver uma aposta ou tomar uma decisão?", a: "Sim. Jogar online é mais justo do que em pessoa — ambas as escolhas são confirmadas antes que qualquer jogador veja o resultado, então ninguém pode mudar seu movimento no último segundo. É o mesmo princípio do lançamento de moeda, exceto que ambos os jogadores participam ativamente." },
    { q: "Podemos jogar Pedra Papel Tesoura em uma chamada de Zoom ou videoconferência?", a: "Sim. Abra o jogo no seu próprio dispositivo enquanto estiver na chamada. Compartilhe o link do jogo no chat. Ambos os jogadores escolhem seu movimento de forma independente, e o resultado é revelado ao mesmo tempo — sem precisar contar até três em voz alta." },
    { q: "Podemos jogar Pedra Papel Tesoura à distância — em países diferentes?", a: "Sim. O jogo é baseado em navegador e funciona em qualquer lugar com conexão à internet. Não é necessário baixar aplicativo nem criar conta em nenhum dos lados. Compartilhe o link e jogue instantaneamente, independente da localização." },
    { q: "Quantas partidas podemos jogar em uma sessão?", a: "Quantas quiser. A sala de jogo permanece aberta e registra pontuações acumuladas em várias partidas. Não é necessário criar um novo link a cada vez — continue jogando até um de vocês desistir." },
];

export function HowToPlay() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Como Jogar Pedra Papel Tesoura Online com Amigos
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Jogar com um amigo são três passos — sem conta nem aplicativo:</p>
                <ol className="pl-4 space-y-2 list-decimal">
                    <li>
                        <span className="font-semibold text-gray-700">Crie uma sala privada</span> — clique em &ldquo;Criar uma Partida&rdquo; acima ou na página inicial. Você recebe um link privado imediatamente.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Compartilhe o link</span> — envie para seu amigo por qualquer aplicativo de mensagens. Funciona em qualquer dispositivo.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Jogue</span> — ambos os jogadores escolhem Pedra, Papel ou Tesoura. O melhor de 3 rodadas decide o vencedor.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Reivindique seu certificado</span> — ganhe mais jogos que seu oponente e obtenha um certificado de vencedor personalizado. Baixe-o ou compartilhe para se gabar.
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
                Pedra Papel Tesoura 1v1 — Como Funciona
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Ambos os jogadores escolhem ao mesmo tempo e nenhum pode ver a escolha do outro antes de confirmar. Isso torna cada partida genuinamente justa — sem reações de última hora, sem disputas.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>O jogador que vencer mais rodadas ganha a partida. O primeiro a ganhar 2 leva a vitória.</li>
                    <li>As pontuações são rastreadas em múltiplas partidas na mesma sala — sem necessidade de criar um novo link a cada vez.</li>
                </ul>
            </div>
        </>
    );
}

export function WhySettle() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Por Que Decidir com Pedra Papel Tesoura?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Pedra Papel Tesoura dá a ambos os jogadores uma chance igual e leva segundos para jogar. As pessoas usam para decidir:</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Quem paga o jantar</li>
                    <li>Quem escolhe o filme ou a playlist</li>
                    <li>Quem vai primeiro em um jogo de tabuleiro</li>
                    <li>Qualquer decisão onde ambos querem uma chance justa</li>
                </ul>
                <p>Jogar online significa sem discussões sobre quem jogou o quê. Ambas as escolhas são confirmadas e reveladas ao mesmo tempo, sempre.</p>
            </div>
        </>
    );
}

export function UseCases() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Pedra Papel Tesoura Funciona em Mais Situações do que Você Imagina
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                <div>
                    <p className="font-semibold text-gray-700">Reuniões Virtuais e Quebra-Gelo</p>
                    <p className="mt-1">
                        Precisa de um quebra-gelo de 60 segundos para sua videochamada? PPT funciona em qualquer dispositivo, não precisa de configuração e faz todos rirem em menos de um minuto.{" "}
                        <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline">
                            Como usar PPT como quebra-gelo em reuniões virtuais →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Casais e Amigos à Distância</p>
                    <p className="mt-1">
                        Quando você está decidindo algo juntos de cidades diferentes, um link compartilhado supera contar até três em uma videochamada.{" "}
                        <Link href="/blog/rock-paper-scissors-long-distance-couples" className="text-blue-600 hover:underline">
                            Pedra Papel Tesoura para relacionamentos à distância →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Resolver Qualquer Decisão</p>
                    <p className="mt-1">
                        Quem escolhe o restaurante? Quem vai primeiro? Quem liga para os pais? Ambos os jogadores têm a mesma chance, e o resultado é instantâneo e justo.
                    </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-gray-500">
                    Ainda não está pronto para desafiar alguém?{" "}
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Pratique sozinho contra o computador →
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
                Perguntas Frequentes
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

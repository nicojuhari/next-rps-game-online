import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "O que vence Pedra no Pedra Papel Tesoura?", a: "Papel vence Pedra. Papel cobre simbolicamente a Pedra, tornando-o o movimento vencedor sempre que seu oponente lançar Pedra." },
    { q: "O que vence Papel?", a: "Tesoura vence Papel. Tesoura corta Papel, tornando-o o contra-ataque sempre que seu oponente jogar Papel." },
    { q: "O que vence Tesoura?", a: "Pedra vence Tesoura. Pedra esmaga Tesoura, tornando-o o movimento vencedor sempre que seu oponente lançar Tesoura." },
    { q: "Pedra Papel Tesoura é só sorte?", a: "Não inteiramente. Um jogador aleatório ganha 33% das vezes, mas pessoas reais seguem padrões — e padrões podem ser lidos." },
    { q: "Preciso me cadastrar ou baixar algo?", a: "Não. O jogo funciona inteiramente no seu navegador. Sem conta, sem download, sem aplicativo — só abra a página e jogue instantaneamente." },
    { q: "Funciona no celular?", a: "Sim. O jogo é totalmente responsivo e funciona em qualquer smartphone ou tablet com um navegador moderno." },
    { q: "Qual é o melhor primeiro movimento?", a: "Estatisticamente, Papel é uma boa abertura. A maioria dos jogadores — especialmente iniciantes — lança Pedra primeiro porque parece o movimento mais forte. Jogar Papel contraria essa tendência e dá uma vantagem estatística na primeira rodada." },
    { q: "Posso jogar Pedra Papel Tesoura online com alguém de outro país?", a: "Sim. O jogo funciona em qualquer navegador, em qualquer lugar. Compartilhe o link e ambos os jogadores podem participar de qualquer país, em qualquer dispositivo, sem aplicativo nem conta necessária." },
    { q: "Como o computador escolhe seu movimento? É viciado?", a: "O computador escolhe aleatoriamente toda vez — Pedra, Papel e Tesoura têm cada um uma chance igual de 1 em 3. Não há padrão, nenhum ajuste com base no seu histórico, e nenhum truque." },
    { q: "Jogar Pedra Papel Tesoura online é melhor que jogar por mensagem?", a: "Sim, porque ambos os jogadores revelam seu movimento exatamente ao mesmo tempo. Em um jogo por mensagem, um jogador pode atrasar sua resposta para reagir à escolha do outro. Online, ambos os movimentos são confirmados e revelados simultaneamente — sem espionar, sem trapacear." },
];

export function Strategy() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Como Vencer no Pedra Papel Tesoura
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>A maioria dos jogadores trata Pedra Papel Tesoura como puro acaso, como lançar uma moeda. Não é.</p>
                <p>Um estudo da Universidade de Zhejiang analisou centenas de milhares de partidas e descobriu que os jogadores humanos seguem padrões previsíveis. Eles encontraram uma estratégia chamada <strong className="text-gray-700">Ganha-Mantém, Perde-Muda</strong>:</p>
                <ul className="list-disc space-y-2 pl-4">
                    <li>
                        <span className="font-semibold text-gray-700">Se você ganhar:</span> Seu oponente provavelmente mudará de movimento.
                        <br />
                        <span className="italic text-gray-500">Contra-movimento:</span> Jogue o movimento que eles acabaram de fazer — vence o que tentarão a seguir.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Se você perder:</span> Seu oponente provavelmente repetirá o movimento vencedor porque parece &ldquo;sortudo&rdquo;.
                        <br />
                        <span className="italic text-gray-500">Contra-movimento:</span> Jogue o movimento que vence o que eles acabaram de lançar.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Estratégia do Primeiro Lançamento:</span> Iniciantes, especialmente jogadores masculinos, abrem majoritariamente com Pedra porque parece forte.
                        <br />
                        <span className="italic text-gray-500">Dica:</span> Contra um novo oponente, lance Papel primeiro.
                    </li>
                </ul>
                <p>
                    <span className="font-semibold text-gray-700">Pedra Papel Tesoura é sorte ou habilidade?</span>{" "}
                    Ambos. Um jogador puramente aleatório ganha 33,3% das vezes. Mas as escolhas humanas não são aleatórias, por isso identificar padrões dá uma vantagem real.
                </p>
                <p>Coloque a estratégia à prova — ganhe mais jogos que seu oponente e poderá reivindicar um certificado de vencedor personalizado para baixar e compartilhar.</p>
                <p>
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Leia o guia de estratégia completo →
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
                Regras do Pedra Papel Tesoura
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Pedra Papel Tesoura é jogado entre duas pessoas. Cada jogador revela um de três gestos ao mesmo tempo, e o vencedor é decidido por um conjunto simples de regras:</p>
                <ul className="pl-4 space-y-2 list-disc">
                    <li><span className="font-semibold text-gray-700">Pedra esmaga Tesoura</span> — ✊ → ✂️</li>
                    <li><span className="font-semibold text-gray-700">Tesoura corta Papel</span> — ✂️ → 📄</li>
                    <li><span className="font-semibold text-gray-700">Papel cobre Pedra</span> — 📄 → ✊</li>
                </ul>
                <p>Se ambos os jogadores fizerem o mesmo gesto, a rodada é empate.</p>
                <p className="font-semibold text-gray-700">Como funciona o melhor de 3?</p>
                <p>Cada partida tem 3 rodadas. Ambos os jogadores confirmam todas as suas escolhas antes de os resultados serem mostrados, para que nenhum jogador possa reagir ao outro. O jogador que vencer mais rodadas ganha a partida. Se cada jogador vencer uma rodada e a terceira for empate, a partida termina empatada.</p>
                <p>
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Veja as regras completas →
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
                Estatísticas do Pedra Papel Tesoura
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Em um jogo perfeitamente aleatório, cada lançamento tem uma probabilidade igual de 1 em 3 (33,3%) de ganhar, perder ou empatar.</p>
                <p>Na prática, os humanos não lançam aleatoriamente. Pesquisas sugerem que a distribuição real entre jogadores casuais é: <strong className="text-gray-700">Pedra ~35%, Papel ~35%, Tesoura ~30%</strong>. Tesoura é lançada com menos frequência.</p>
                <p>Em 2005, uma única mão de Pedra Papel Tesoura decidiu um contrato de leilão de <strong className="text-gray-700">US$ 17,8 milhões</strong>. As duas casas de leilão mais famosas, Christie&apos;s e Sotheby&apos;s, estavam em impasse pelos direitos de venda de uma valiosa coleção de arte e concordaram em resolver com um jogo.</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>A Sotheby&apos;s tratou como acaso e jogou Papel.</li>
                    <li>A Christie&apos;s pediu conselho às filhas gêmeas de 11 anos de um de seus diretores. As meninas raciocinaram: &ldquo;Todo mundo acha que Pedra é o movimento forte. A Sotheby&apos;s vai esperar Pedra, então vai jogar Papel. Joguem Tesoura.&rdquo;</li>
                </ul>
                <p>A Christie&apos;s jogou Tesoura. A Sotheby&apos;s jogou Papel. A Christie&apos;s ganhou — provando que mesmo em um jogo simples, a psicologia supera o puro acaso.</p>
            </div>
        </>
    );
}

export function History() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                O Que é Pedra Papel Tesoura?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Pedra Papel Tesoura é um jogo de mãos jogado no mundo todo, geralmente entre duas pessoas. É comumente usado como uma forma rápida de tomar decisões, mas também é um jogo de leitura do oponente.</p>
                <p>O jogo remonta a mais de <strong className="text-gray-700">2.000 anos à Dinastia Han Chinesa</strong> (206 a.C. — 220 d.C.), onde era chamado de <em>shoushiling</em> e usava gestos representando um Sapo, uma Lesma e uma Cobra.</p>
                <p>Chegou ao Japão como <em>Jan-Ken</em>, onde se tornou uma ferramenta social diária para resolver disputas em escolas e negócios. Chegou ao Ocidente no início do século XX e se tornou o jogo de decisão rápida padrão que é hoje. Hoje tem muitos nomes: <em>roshambo</em> nos EUA, pedra papel tesoura nos países de língua portuguesa — todos usando os mesmos três gestos.</p>
                <p><strong className="text-gray-700">Você sabia?</strong> O dia 27 de agosto é oficialmente o Dia Mundial do Pedra Papel Tesoura.</p>
                <p>O computador neste site escolhe aleatoriamente — tem uma probabilidade igual de 1 em 3 de lançar Pedra, Papel ou Tesoura toda vez. Sem truques, apenas acaso.</p>
                <p>Jogar online também elimina a principal forma de trapacear em um jogo físico. Em pessoa, um jogador pode atrasar seu lançamento uma fração de segundo para reagir à mão do oponente — uma técnica chamada &ldquo;sombreamento&rdquo;. Em rps-game.online, ambos os jogadores confirmam sua escolha em particular antes de qualquer resultado ser mostrado, para que cada partida seja genuinamente justa.</p>
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

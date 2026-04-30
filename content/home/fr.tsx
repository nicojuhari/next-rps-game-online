import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "Qu'est-ce qui bat Pierre à Pierre Feuille Ciseaux ?", a: "La Feuille bat Pierre. La feuille recouvre symboliquement la pierre — c'est le coup gagnant quand ton adversaire joue Pierre." },
    { q: "Qu'est-ce qui bat Feuille ?", a: "Les Ciseaux battent Feuille. Les ciseaux coupent la feuille — c'est la bonne réponse quand ton adversaire joue Feuille." },
    { q: "Qu'est-ce qui bat Ciseaux ?", a: "Pierre bat les Ciseaux. La pierre écrase les ciseaux — c'est le coup gagnant quand ton adversaire joue Ciseaux." },
    { q: "Pierre Feuille Ciseaux, c'est juste de la chance ?", a: "Pas seulement. Un joueur aléatoire gagne 33 % du temps, mais les gens réels suivent des schémas — et les schémas se lisent." },
    { q: "Faut-il s'inscrire ou télécharger quelque chose ?", a: "Non. Le jeu tourne entièrement dans ton navigateur. Aucun compte, aucun téléchargement — ouvre la page et joue." },
    { q: "Ça marche sur mobile ?", a: "Oui. Le jeu est entièrement responsive et fonctionne sur tout smartphone ou tablette avec un navigateur moderne." },
    { q: "Quel est le meilleur premier coup ?", a: "Statistiquement, Feuille est un bon choix d'ouverture. La plupart des joueurs — surtout les débutants — commencent par Pierre. Jouer Feuille contrecarre cette tendance et donne un avantage dès la première manche." },
    { q: "Puis-je jouer à Pierre Feuille Ciseaux en ligne avec quelqu'un d'un autre pays ?", a: "Oui. Le jeu fonctionne dans n'importe quel navigateur, partout. Partage le lien et les deux joueurs peuvent rejoindre depuis n'importe quel pays, n'importe quel appareil, sans application ni compte requis." },
    { q: "Comment l'ordinateur choisit-il son coup ? C'est truqué ?", a: "L'ordinateur choisit au hasard à chaque fois — Pierre, Feuille et Ciseaux ont chacun une chance égale de 1 sur 3. Il n'y a pas de schéma, pas d'ajustement selon ton historique, et aucun trucage." },
    { q: "Jouer à Pierre Feuille Ciseaux en ligne est-il mieux que par message ?", a: "Oui, car les deux joueurs révèlent leur coup exactement en même temps. Dans un jeu par message, un joueur peut retarder sa réponse pour réagir au choix de l'autre. En ligne, les deux coups sont confirmés et révélés simultanément — pas de triche possible." },
];

export function Strategy() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Comment gagner à Pierre Feuille Ciseaux
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>La plupart des joueurs voient Pierre Feuille Ciseaux comme un jeu de pur hasard. C&apos;est une erreur.</p>
                <p>Une étude de l&apos;université de Zhejiang a analysé des centaines de milliers de parties et montré que les joueurs suivent des schémas prévisibles. Les chercheurs ont identifié une stratégie appelée <strong className="text-gray-700">Gagne-Reste, Perd-Change</strong> :</p>
                <ul className="list-disc space-y-2 pl-4">
                    <li>
                        <span className="font-semibold text-gray-700">Si tu gagnes :</span> Ton adversaire va probablement changer de coup.
                        <br />
                        <span className="italic text-gray-500">Contre-coup :</span> Joue le même coup que lui — il bat ce qu&apos;il va tenter ensuite.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Si tu perds :</span> Ton adversaire va probablement répéter son coup gagnant parce qu&apos;il se sent en veine.
                        <br />
                        <span className="italic text-gray-500">Contre-coup :</span> Joue le coup qui bat ce qu&apos;il vient de choisir.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Stratégie au premier coup :</span> Les débutants — surtout les hommes — commencent presque toujours par Pierre, parce que ça paraît le coup le plus fort.
                        <br />
                        <span className="italic text-gray-500">Conseil :</span> Contre un nouvel adversaire, commence par Feuille.
                    </li>
                </ul>
                <p>
                    <span className="font-semibold text-gray-700">Pierre Feuille Ciseaux, c&apos;est de la chance ou du skill ?</span>{" "}
                    Les deux. Un joueur aléatoire gagne 33,3 % du temps. Mais les humains ne choisissent pas au hasard — repérer leurs habitudes donne un vrai avantage.
                </p>
                <p>Mets ta stratégie à l&apos;épreuve — gagne plus de parties que ton adversaire et télécharge un certificat de victoire personnalisé à partager.</p>
                <p>
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Lire le guide stratégique complet →
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
                Règles de Pierre Feuille Ciseaux
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Pierre Feuille Ciseaux se joue à deux. Chaque joueur montre simultanément l&apos;un des trois signes — le gagnant est désigné par trois règles simples :</p>
                <ul className="pl-4 space-y-2 list-disc">
                    <li><span className="font-semibold text-gray-700">La pierre écrase les ciseaux</span> — ✊ → ✂️</li>
                    <li><span className="font-semibold text-gray-700">Les ciseaux coupent la feuille</span> — ✂️ → 📄</li>
                    <li><span className="font-semibold text-gray-700">La feuille recouvre la pierre</span> — 📄 → ✊</li>
                </ul>
                <p>Si les deux joueurs choisissent le même signe, la manche est nulle.</p>
                <p className="font-semibold text-gray-700">Comment fonctionne le meilleur des 3 ?</p>
                <p>Chaque partie dure 3 manches. Les deux joueurs confirment tous leurs coups avant que les résultats soient révélés — personne ne peut réagir à l&apos;autre. Celui qui gagne le plus de manches remporte la partie. Si chacun en gagne une et que la troisième est nulle, la partie est à égalité.</p>
                <p>
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Voir les règles complètes →
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
                Statistiques de Pierre Feuille Ciseaux
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Dans un jeu purement aléatoire, chaque coup a une chance égale de 1 sur 3 (33,3 %) de gagner, perdre ou faire match nul.</p>
                <p>En pratique, les humains ne jouent pas au hasard. Les données montrent que la distribution réelle est : <strong className="text-gray-700">Pierre ~35 %, Feuille ~35 %, Ciseaux ~30 %</strong>. Les ciseaux sont le signe le moins joué.</p>
                <p>En 2005, une seule manche de Pierre Feuille Ciseaux a décidé d&apos;un contrat de vente aux enchères à <strong className="text-gray-700">17,8 millions de dollars</strong>. Christie&apos;s et Sotheby&apos;s étaient à égalité pour les droits de vente d&apos;une précieuse collection d&apos;art et ont accepté de trancher par ce jeu.</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Sotheby&apos;s a traité ça comme du hasard et a joué Feuille.</li>
                    <li>Christie&apos;s a demandé conseil aux filles jumelles de 11 ans d&apos;un de ses directeurs. Elles ont raisonné : &laquo;&nbsp;Tout le monde pense que Pierre est le coup fort. Sotheby&apos;s s&apos;attend à Pierre, donc ils vont jouer Feuille. Jouons Ciseaux.&nbsp;&raquo;</li>
                </ul>
                <p>Christie&apos;s a joué Ciseaux. Sotheby&apos;s a joué Feuille. Christie&apos;s a gagné — prouvant que même dans un jeu simple, la psychologie bat le pur hasard.</p>
            </div>
        </>
    );
}

export function History() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Qu&apos;est-ce que Pierre Feuille Ciseaux ?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Pierre Feuille Ciseaux est un jeu de mains pratiqué dans le monde entier, généralement entre deux personnes. Il sert souvent à prendre une décision rapidement, mais c&apos;est aussi un jeu de lecture de l&apos;adversaire.</p>
                <p>Le jeu remonte à plus de <strong className="text-gray-700">2 000 ans, à la dynastie chinoise Han</strong> (206 av. J.-C. — 220 apr. J.-C.), où il s&apos;appelait <em>shoushiling</em> et utilisait des gestes représentant une grenouille, un escargot et un serpent.</p>
                <p>Il est arrivé au Japon sous le nom de <em>Jan-Ken</em>, où il est devenu un outil social quotidien pour régler des différends à l&apos;école et au travail. Il a atteint l&apos;Occident au début du XXe siècle. Aujourd&apos;hui il porte de nombreux noms : <em>roshambo</em> aux États-Unis, piedra papel tijeras en Espagne — toujours les mêmes trois signes.</p>
                <p><strong className="text-gray-700">Le saviez-vous ?</strong> Le 27 août est officiellement la Journée mondiale de Pierre Feuille Ciseaux.</p>
                <p>L&apos;ordinateur sur ce site choisit au hasard — exactement 1 chance sur 3 de jouer Pierre, Feuille ou Ciseaux à chaque fois. Aucun trucage, juste de l&apos;aléatoire.</p>
                <p>Jouer en ligne élimine aussi la principale façon de tricher en face à face. En personne, un joueur peut retarder son geste d&apos;une fraction de seconde pour réagir à la main de l&apos;adversaire — une technique appelée &laquo;&nbsp;shadowing&nbsp;&raquo;. Sur rps-game.online, les deux joueurs confirment leur choix en privé avant que les résultats soient affichés — chaque partie est vraiment équitable.</p>
            </div>
        </>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Questions Fréquentes
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

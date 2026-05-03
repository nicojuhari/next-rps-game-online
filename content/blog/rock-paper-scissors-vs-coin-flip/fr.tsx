import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Pierre Feuille Ciseaux vs Pile ou Face : Plus Juste ?",
    description:
        "Les deux sont 50/50 - mais PFC et pile ou face diffèrent sur l'agentivité, la variance et la résistance à la triche. Ce que disent les maths.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-vs-coin-flip",
    readingTime: "5 min de lecture",
};

export const faqItems: FaqItem[] = [
    {
        q: "Pierre feuille ciseaux est-il vraiment 50/50 ?",
        a: "Face à un adversaire qui joue aléatoirement, oui - chaque issue a une probabilité égale. Face à un humain, le comportement est légèrement prévisible, il y a donc une petite composante de compétence. Cela ne le rend pas moins équitable ; cela le rend plus intéressant.",
    },
    {
        q: "Pile ou face est-il plus aléatoire que pierre feuille ciseaux ?",
        a: "Un vrai lancer de pièce est plus proche du hasard pur. Mais pierre feuille ciseaux joué en meilleur des 3 réduit la variance davantage qu'un seul lancer - pour trancher un désaccord, PFC produit donc un résultat plus stable.",
    },
    {
        q: "Peut-on tricher à pierre feuille ciseaux en ligne ?",
        a: "Pas avec un système de révélation simultanée. Les deux joueurs verrouillent leur choix avant que l'un ou l'autre ne voie le résultat - il est impossible de modifier son choix après avoir vu la main adverse.",
    },
    {
        q: "Et si les deux joueurs connaissent la stratégie de PFC ?",
        a: "Alors c'est un jeu de compétence plutôt que de chance - ce que la plupart des gens trouvent plus satisfaisant. Si un joueur a beaucoup plus d'expérience, pile ou face reste l'option la plus équitable.",
    },
    {
        q: "Quelle est la manière équitable de décider entre deux personnes ?",
        a: "Pile ou face et pierre feuille ciseaux sont tous deux statistiquement équitables (50/50). PFC ajoute de l'agentivité et du suspense ; pile ou face est plus rapide et purement aléatoire. Pour les décisions à distance, PFC en ligne avec révélation simultanée est l'option la plus résistante à la triche.",
    },
    {
        q: "Comment régler équitablement un désaccord en ligne ?",
        a: "Utilisez un jeu PFC en ligne avec révélation simultanée - un joueur crée une salle, partage le lien, les deux choisissent en même temps, le résultat est instantané. Cela évite le problème du SMS où le second à révéler peut adapter son choix.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Vous devez trancher quelque chose entre deux personnes. Les options sur la table : pile ou face, ou pierre feuille ciseaux.
                Les deux semblent équitables. Les deux sont rapides. Mais lequel est vraiment le plus juste - et est-ce que ça compte
                vraiment ? Voici ce que disent les maths, la psychologie et la théorie des jeux.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Réponse courte :</strong> Les deux sont 50/50 en probabilité de base. Pierre feuille ciseaux ajoute de
                    l&apos;agentivité, réduit la variance avec le meilleur des 3, et - joué en ligne avec révélation simultanée - est plus
                    résistant à la triche que les messages texte. Pile ou face est plus rapide et plus proche du hasard pur. Aucun
                    n&apos;est « mauvais ». PFC est plus engageant ; pile ou face est plus immédiat.
                </p>
            </div>

            {/* Section 1 - Coin flip case */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Les arguments pour pile ou face</h2>
            <p className="mb-4">
                Pile ou face a acquis sa réputation d&apos;outil de décision universel pour une bonne raison. La probabilité est aussi nette
                que possible : 50 % pile, 50 % face, aucun écart de compétence, aucun avantage pour l&apos;un ou l&apos;autre. On ne peut
                pas stratégiser et on ne peut pas avoir l&apos;impression d&apos;avoir été battu - le résultat est pur hasard, que la
                plupart des gens acceptent comme intrinsèquement neutre.
            </p>
            <p className="mb-4">
                C&apos;est aussi instantané. Un lancer, un résultat, le tout en moins de cinq secondes. Aucune préparation, aucune
                explication, pas besoin que les deux parties soient attentives au même moment. Vous pouvez le faire seul et annoncer le
                résultat. Pour les décisions importantes où vous voulez zéro contestation sur l&apos;équité, pile ou face est difficile à
                battre.
            </p>
            <p className="mb-4">
                L&apos;inconvénient : c&apos;est passif. Les deux parties sont de simples observateurs qui attendent que la physique décide.
                Aucun des deux n&apos;a de prise sur le résultat, ce qui peut donner une impression d&apos;arbitraire même si c&apos;est
                statistiquement équitable.
            </p>

            {/* Section 2 - RPS case */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Les arguments pour pierre feuille ciseaux</h2>
            <p className="mb-4">
                En théorie, pierre feuille ciseaux est aussi 50/50 face à un adversaire aléatoire - chacun des trois choix bat une option,
                perd contre une autre, et fait match nul avec la troisième. Les maths sont symétriques.
            </p>
            <p className="mb-4">Mais en pratique, PFC a plusieurs avantages sur pile ou face pour trancher un désaccord :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Agentivité :</strong> les deux joueurs font un choix actif. Même si le résultat est
                    aléatoire, il ne semble pas arbitraire - vous avez joué pour ça.
                </li>
                <li>
                    <strong className="text-gray-800">Variance réduite :</strong> le format meilleur des 3 rend le résultat plus stable
                    qu&apos;un seul lancer. Un seul pile ou face peut basculer dans un sens ou l&apos;autre ; le meilleur des 3 en PFC exige
                    de gagner 2 manches sur 3.
                </li>
                <li>
                    <strong className="text-gray-800">Révélation simultanée :</strong> joué correctement, aucun joueur ne peut voir le choix
                    de l&apos;autre avant de s&apos;engager. Personne ne peut prétendre qu&apos;il &ldquo;aurait choisi autrement&rdquo;.
                </li>
                <li>
                    <strong className="text-gray-800">Plus satisfaisant :</strong> le perdant a choisi son geste - il ne peut pas accuser la
                    physique d&apos;une pièce. Cela rend le résultat plus facile à accepter.
                </li>
            </ul>
            <p className="mb-4">
                La contrepartie : PFC a une composante de compétence face aux humains. Des recherches montrent que les gens ont des
                tendances non aléatoires - les débutants jouent plus souvent Pierre, les gagnants répètent souvent leur dernier geste, et
                les perdants changent souvent. Si un joueur a étudié la{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    stratégie PFC
                </Link>{" "}
                et que l&apos;autre non, ce n&apos;est plus vraiment 50/50.
            </p>

            {/* Section 3 - Comparison table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La comparaison équité - face à face</h2>
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Critère</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Pile ou face</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Pierre Feuille Ciseaux</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Probabilité de base</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                            <td className="p-3 border border-gray-200">50/50</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Agentivité du joueur</td>
                            <td className="p-3 border border-gray-200">Aucune</td>
                            <td className="p-3 border border-gray-200">Élevée</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Variance par décision</td>
                            <td className="p-3 border border-gray-200">Un seul lancer</td>
                            <td className="p-3 border border-gray-200">Meilleur des 3 (variance réduite)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Composante de compétence</td>
                            <td className="p-3 border border-gray-200">Aucune</td>
                            <td className="p-3 border border-gray-200">Faible (face aux humains)</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Risque de triche (en personne)</td>
                            <td className="p-3 border border-gray-200">Faible</td>
                            <td className="p-3 border border-gray-200">Faible (révélation simultanée)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Risque de triche (à distance, SMS)</td>
                            <td className="p-3 border border-gray-200">Faible</td>
                            <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                                Élevé - le second à révéler peut s&apos;adapter
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">
                                Risque de triche (en ligne, temps réel)
                            </td>
                            <td className="p-3 border border-gray-200">N/A</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">Aucun - révélation simultanée imposée</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Facteur plaisir</td>
                            <td className="p-3 border border-gray-200">Faible</td>
                            <td className="p-3 border border-gray-200">Élevé</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-medium text-gray-700">Durée</td>
                            <td className="p-3 border border-gray-200">5 secondes</td>
                            <td className="p-3 border border-gray-200">30-60 secondes</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Besoin de trancher quelque chose maintenant ?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Partagez un lien - les deux joueurs choisissent simultanément, le résultat est instantané. Sans compte requis.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Tranchons ça - Démarrer une partie à 2 →
                </CtaLink>
            </div>

            {/* Section 4 - When to coin flip */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Quand utiliser pile ou face</h2>
            <p className="mb-4">Pile ou face est le bon choix quand :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Vous avez besoin d&apos;une réponse immédiate</strong> - pas le temps pour un match en
                    3 manches, vous avez juste besoin d&apos;un résultat en 5 secondes.
                </li>
                <li>
                    <strong className="text-gray-800">Les deux parties veulent zéro agentivité</strong> - parfois les gens ne veulent
                    vraiment pas avoir le poids d&apos;avoir choisi. Pile ou face supprime cela entièrement.
                </li>
                <li>
                    <strong className="text-gray-800">Il y a un écart de compétence</strong> - si l&apos;un connaît la stratégie PFC et
                    l&apos;autre non, le jeu n&apos;est plus 50/50. Pile ou face rétablit le terrain nivelé.
                </li>
                <li>
                    <strong className="text-gray-800">Vous êtes seul et annoncez le résultat</strong> - pile ou face est plus facile à faire
                    seul et à rapporter honnêtement. PFC exige la présence des deux parties.
                </li>
            </ul>

            {/* Section 5 - When RPS is better */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Quand pierre feuille ciseaux est meilleur</h2>
            <p className="mb-4">PFC est le meilleur choix quand :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Vous voulez que le résultat semble mérité</strong> - les deux parties ont choisi leur
                    geste. Le perdant ne peut pas attribuer le résultat à la seule malchance.
                </li>
                <li>
                    <strong className="text-gray-800">La variance compte</strong> - le meilleur des 3 produit un résultat plus fiable
                    qu&apos;un seul lancer. Pour les décisions où un seul flip semble trop arbitraire, PFC offre un meilleur échantillon.
                </li>
                <li>
                    <strong className="text-gray-800">Vous voulez du suspense</strong> - trois manches de tension battent un seul lancer en
                    termes d&apos;engagement. Il y a une raison pour laquelle le sport utilise le meilleur des 7, pas des pièces de monnaie.
                </li>
                <li>
                    <strong className="text-gray-800">Vous jouez à distance</strong> - envoyer votre choix PFC par SMS est bancal (le second
                    à révéler peut tricher). Un outil en ligne avec révélation simultanée corrige ce problème. Pile ou face n&apos;a pas ce
                    problème - mais ce n&apos;est pas non plus très amusant.
                </li>
            </ul>

            {/* Section 6 - The remote problem */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Le problème à distance - pourquoi le PFC en ligne bat le pile ou face en ligne
            </h2>
            <p className="mb-4">
                Le principal point de défaillance du PFC à distance est le problème de l&apos;ordre de révélation. Quand vous envoyez
                &ldquo;1-2-3 c&apos;est parti !&rdquo; par message ou révélez sur un appel vidéo, une personne voit le choix de l&apos;autre
                avant d&apos;avoir validé le sien. Un décalage vidéo de 200 ms suffit - le second joueur voit techniquement la main du
                premier avant de valider. Cela brise la révélation simultanée qui rend PFC équitable.
            </p>
            <p className="mb-4">
                Les outils de pile ou face en ligne (comme tosstogether.app) résolvent le problème d&apos;équité à distance - mais pile ou
                face n&apos;a jamais été très intéressant pour commencer.
            </p>
            <p className="mb-4">
                PFC en ligne avec un vrai système de révélation simultanée résout les deux. Les deux joueurs verrouillent leur choix en
                privé avant que l&apos;un ou l&apos;autre ne voie le résultat. La révélation se produit au même moment pour les deux -
                imposée structurellement, pas seulement espérée. Le résultat : équitable <em>et</em> engageant. Sans compte ni application
                requis.
            </p>

            {/* Section 7 - How to settle */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Comment trancher n&apos;importe quel désaccord en ligne en moins de 60 secondes
            </h2>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Ouvrez la partie à 2 joueurs et créez une salle</p>
                        <p className="text-sm text-gray-600 mt-0.5">Sans compte requis - prend 5 secondes.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Partagez le lien</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Envoyez par SMS, WhatsApp, Discord - où vous voulez. L&apos;autre personne l&apos;ouvre sur n&apos;importe quel
                            appareil.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Les deux joueurs choisissent simultanément</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Chacun verrouille son choix en privé. Le résultat ne s&apos;affiche qu&apos;après que les deux ont soumis leur
                            choix.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                    </span>
                    <div>
                        <p className="font-semibold text-gray-800">Le gagnant gagne, le désaccord est tranché</p>
                        <p className="text-sm text-gray-600 mt-0.5">
                            Format meilleur des 3. Aucune dispute sur qui a révélé en premier - personne ne pouvait le faire.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Si vous voulez mettre les chances de votre côté une fois que vous jouez :{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        le guide de stratégie
                    </Link>{" "}
                    couvre les tendances comportementales qui rendent les joueurs humains prévisibles. Ou révisez les{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        règles officielles
                    </Link>{" "}
                    si vous avez besoin d&apos;un rappel avant de jouer.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Questions fréquentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pierre feuille ciseaux est-il vraiment 50/50 ?</h3>
                    <p className="text-gray-600 text-sm">
                        Face à un adversaire aléatoire, oui. Face à un humain, il y a une petite composante de compétence - les gens ont des
                        tendances non aléatoires. Cela ne le rend pas moins équitable ; cela le rend plus intéressant.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pile ou face est-il plus aléatoire que pierre feuille ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Un vrai lancer de pièce est plus proche du hasard pur. Mais le meilleur des 3 en PFC réduit la variance davantage
                        qu&apos;un seul lancer, donc pour trancher des désaccords il produit un résultat plus stable.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peut-on tricher à pierre feuille ciseaux en ligne ?</h3>
                    <p className="text-gray-600 text-sm">
                        Pas avec un système de révélation simultanée. Les deux choix sont verrouillés avant que l&apos;un ou l&apos;autre
                        joueur voie le résultat - il est impossible de modifier son choix après avoir vu la main adverse.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Et si les deux joueurs connaissent la stratégie PFC ?</h3>
                    <p className="text-gray-600 text-sm">
                        Alors c&apos;est un jeu de compétence plutôt que de chance - ce que la plupart des gens trouvent plus satisfaisant.
                        Si un joueur a nettement plus d&apos;expérience, utilisez plutôt pile ou face pour rester à 50/50.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quelle est la manière équitable de décider entre deux personnes ?</h3>
                    <p className="text-gray-600 text-sm">
                        Pile ou face et PFC sont tous deux statistiquement équitables (50/50). PFC ajoute de l&apos;agentivité et du
                        suspense ; pile ou face est plus rapide et purement aléatoire. Pour les décisions à distance, PFC en ligne avec
                        révélation simultanée est l&apos;option la plus résistante à la triche.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Comment régler équitablement un désaccord en ligne ?</h3>
                    <p className="text-gray-600 text-sm">
                        Utilisez un jeu PFC en ligne avec révélation simultanée - un joueur crée une salle, partage le lien, les deux
                        choisissent en même temps. Cela évite le problème du SMS où le second à révéler voit le choix du premier et peut
                        s&apos;adapter.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">
                    La prochaine fois que vous devez décider quelque chose, oubliez le pile ou face.
                </p>
                <p className="text-sm text-gray-500 mb-5">
                    Défiez l&apos;autre personne en meilleur des 3 - ça ne prend que 60 secondes et vous aurez vraiment l&apos;impression
                    d&apos;avoir joué pour ça.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Tranchons ça - Démarrer une partie à 2 →
                </CtaLink>
            </div>
        </article>
    );
}

import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Comment Gagner à Pierre Feuille Ciseaux : Psychologie, Stratégie et Recherche",
    description:
        "La plupart des gens traitent Pierre Feuille Ciseaux comme du pur hasard. Les chercheurs ne sont pas d'accord. Découvrez les schémas comportementaux, les statistiques et la stratégie tour par tour qui vous donnent un avantage réel.",
    publishedAt: "2026-04-30",
    slug: "how-to-win-rock-paper-scissors",
    readingTime: "8 min de lecture",
};

export const faqItems: FaqItem[] = [
    {
        q: "La feuille est-elle le meilleur choix à Pierre Feuille Ciseaux ?",
        a: "Statistiquement, oui — la feuille bat la pierre, qui est le coup le plus fréquemment joué à environ 35% du temps. Mais contre des joueurs expérimentés qui connaissent cette tendance, les ciseaux deviennent le contre-jeu.",
    },
    {
        q: "Qu'est-ce que la stratégie gagner-rester, perdre-changer à Pierre Feuille Ciseaux ?",
        a: "Gagner-Rester, Perdre-Changer est un schéma comportemental dans lequel les gagnants ont tendance à répéter le coup qui vient de gagner, tandis que les perdants tendent à passer au coup suivant dans le cycle (Pierre → Feuille → Ciseaux → Pierre). Cela a été confirmé par une étude de 2014 de l'Université de Zhejiang sur plus de 100 000 manches.",
    },
    {
        q: "La psychologie affecte-t-elle vraiment Pierre Feuille Ciseaux ?",
        a: "Oui. Des études évaluées par des pairs montrent que les humains s'écartent significativement du jeu aléatoire. Les gens s'ancrent émotionnellement à certains coups, réagissent de manière prévisible aux victoires et aux défaites, et suivent des schémas que des adversaires habiles peuvent exploiter.",
    },
    {
        q: "Peut-on gagner à Pierre Feuille Ciseaux à chaque fois ?",
        a: "Pas à chaque fois — mais constamment plus de 33% contre des adversaires humains en lisant les schémas comportementaux. Contre un vrai générateur de nombres aléatoires (comme un ordinateur), aucune stratégie ne s'applique.",
    },
    {
        q: "Quel est le meilleur premier coup à Pierre Feuille Ciseaux ?",
        a: "Contre tout adversaire inconnu, la Feuille est statistiquement le coup d'ouverture le plus fort. La Pierre est le coup initial le plus fréquent — surtout chez les débutants et les joueurs masculins — donc la Feuille vous donne la meilleure valeur attendue au tour 1.",
    },
    {
        q: "Pierre Feuille Ciseaux est-il vraiment aléatoire ?",
        a: "Non quand des humains jouent. Des recherches de l'Université de Zhejiang ont montré que les joueurs humains suivent des schémas prévisibles selon qu'ils viennent de gagner ou de perdre. Un ordinateur utilisant un générateur de nombres aléatoires est véritablement aléatoire, mais les adversaires humains ne le sont pas.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Pierre Feuille Ciseaux ressemble à un pile ou face. Mais des recherches de l&apos;Université de Zhejiang, du MIT Technology Review et de psychologues comportementaux prouvent que non. Les êtres humains sont prévisibles — et une fois que vous connaissez les schémas, vous pouvez les exploiter.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pierre Feuille Ciseaux est-il vraiment aléatoire ?</h2>
            <p className="mb-4">
                La réponse courte : non — du moins pas quand des humains jouent.
            </p>
            <p className="mb-4">
                Un jeu véritablement aléatoire donne à chaque joueur exactement 33,3% de taux de victoires sans possibilité d&apos;amélioration. Mais plusieurs études montrent que les humains s&apos;écartent significativement du jeu aléatoire. Nous nous ancrons à certains coups, réagissons émotionnellement aux victoires et aux défaites, et trahissons nos intentions par notre comportement.
            </p>
            <p className="mb-4">
                L&apos;étude la plus influente est venue de l&apos;Université de Zhejiang en 2014. Les chercheurs Wang Zhijian, Bin Xu et Hai-Jun Zhou ont analysé 360 étudiants jouant chacun 300 manches de PFC — plus de 100 000 parties individuelles. Ils ont trouvé des schémas comportementaux clairs et répétables qui permettaient aux joueurs habiles de prédire les prochains coups des adversaires mieux que le hasard.
            </p>
            <p className="mb-4">
                La conclusion : Pierre Feuille Ciseaux est un jeu de psychologie, pas de chance.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Les Statistiques — Quel Coup les Gens Jouent-ils le Plus ?</h2>
            <p className="mb-4">
                Comprendre ce que le joueur moyen lance est la base de toute stratégie. Les données de recherche sur la fréquence des coups dans de grands échantillons montrent constamment :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong className="text-gray-800">Pierre : ~35%</strong> — le coup le plus joué, bien au-dessus des 33,3% attendus</li>
                <li><strong className="text-gray-800">Ciseaux : ~35%</strong> — presque à égalité avec Pierre</li>
                <li><strong className="text-gray-800">Feuille : ~29,6%</strong> — le coup le moins joué</li>
            </ul>
            <p className="mb-4">
                L&apos;implication est directe : la Feuille est statistiquement le coup d&apos;ouverture le plus fort. Elle bat la Pierre, le coup le plus courant. Et parce que la Feuille est jouée le moins souvent, vos adversaires sont moins susceptibles de la contrer au tour 1.
            </p>
            <p className="mb-4">
                Cela explique aussi la célèbre vente aux enchères de 2005 entre Christie&apos;s et Sotheby&apos;s. Avec 17,8 millions de dollars en jeu, Christie&apos;s a demandé conseil à une fillette de 11 ans. Elle a raisonné : &ldquo;Tout le monde pense que Pierre est le coup fort. Ils joueront Feuille pour la contrer. Nous jouons Ciseaux.&rdquo; Christie&apos;s a gagné.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Le Schéma Gagner-Rester, Perdre-Changer</h2>
            <p className="mb-4">
                La découverte clé de l&apos;étude de Zhejiang était un schéma comportemental qu&apos;ils ont nommé <strong className="text-gray-800">Gagner-Rester, Perdre-Changer</strong> :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Si un joueur gagne :</strong> il tend à répéter le coup qui vient de gagner</li>
                <li><strong className="text-gray-800">Si un joueur perd :</strong> il tend à passer au coup suivant dans le sens horaire du cycle : Pierre → Feuille → Ciseaux → Pierre</li>
            </ul>
            <p className="mb-4">
                Comment utiliser cela en pratique : après chaque manche, demandez-vous — mon adversaire vient-il de gagner ou de perdre ?
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm space-y-2">
                <p className="font-semibold text-gray-800">S&apos;ils viennent de gagner (Gagner-Rester — attendez qu&apos;ils répètent) :</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Gagné avec Pierre → attendez Pierre à nouveau → vous jouez Feuille</li>
                    <li>Gagné avec Feuille → attendez Feuille à nouveau → vous jouez Ciseaux</li>
                    <li>Gagné avec Ciseaux → attendez Ciseaux à nouveau → vous jouez Pierre</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">S&apos;ils viennent de perdre (Perdre-Changer — attendez le prochain coup du cycle) :</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Perdu avec Pierre → attendez Feuille ensuite → vous jouez Ciseaux</li>
                    <li>Perdu avec Feuille → attendez Ciseaux ensuite → vous jouez Pierre</li>
                    <li>Perdu avec Ciseaux → attendez Pierre ensuite → vous jouez Feuille</li>
                </ul>
            </div>
            <p className="mb-4">
                Ce n&apos;est pas un prédicteur garanti — c&apos;est un déplacement de probabilité. Mais sur un long match, cela fait monter votre taux de victoires de manière significative au-dessus de 33%.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">L&apos;Indice du Débutant — Pourquoi Pierre est pour les Novices</h2>
            <p className="mb-4">
                Les recherches montrent constamment que les débutants, surtout les joueurs masculins, ouvrent avec Pierre au tour 1. La psychologie est simple : un poing fermé semble fort. Feuille semble passif. Ciseaux semble risqué.
            </p>
            <p className="mb-4">
                La règle pratique : contre tout adversaire inconnu, lancez Feuille en premier. Statistiquement, vous avez plus de chances de faire face à une Pierre qu&apos;à autre chose.
            </p>
            <p className="mb-4">
                Les joueurs expérimentés savent cela — ce qui crée un méta-jeu. Les experts attendent Feuille, alors ils jouent Ciseaux. Les joueurs très expérimentés attendent Ciseaux, alors ils reviennent à Pierre. Mais en pratique, cette logique récursive s&apos;effondre sur elle-même. Contre un nouvel adversaire que vous ne pouvez pas évaluer, Feuille reste le coup avec le meilleur pourcentage.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Le Signal du Double Lancer</h2>
            <p className="mb-4">
                Les joueurs lancent rarement le même coup trois fois de suite. L&apos;inconfort psychologique d&apos;une répétition évidente le fait ressembler à un indice — même si ce n&apos;est techniquement pas de la triche.
            </p>
            <p className="mb-4">
                Dans un match au meilleur des 3, ce signal compte le plus au tour 3. Si votre adversaire a déjà joué Pierre deux fois, la probabilité qu&apos;il lance Pierre une troisième fois baisse significativement. Vous pouvez éliminer Pierre de votre prédiction et utiliser Gagner-Rester, Perdre-Changer pour déterminer s&apos;il jouera Feuille ou Ciseaux.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Lire les Indices Physiques (En Personne Seulement)</h2>
            <p className="mb-4">
                Dans le jeu en face à face, les joueurs télégraphient souvent leur coup dans la fraction de seconde avant de le révéler :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Un poing serré se formant tôt → probablement Pierre</li>
                <li>Une main lâche et ouverte → probablement Feuille</li>
                <li>Deux doigts commençant à s&apos;étendre avant le lancer → probablement Ciseaux</li>
            </ul>
            <p className="mb-4">
                Ces indices ne s&apos;appliquent qu&apos;en personne. En ligne, les deux joueurs s&apos;engagent en privé avant que le résultat soit affiché — il n&apos;y a pas de fenêtre pour réagir aux indices physiques. Cela rend le jeu en ligne à la fois plus équitable et purement stratégique : chaque décision dépend entièrement de la lecture des schémas comportementaux, pas des réflexes.
            </p>

            {/* Section 7 — Strategy Table */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Meilleure Stratégie pour Chaque Tour dans un Meilleur des 3</h2>
            <p className="mb-4">
                Combinant les schémas ci-dessus en un guide tour par tour :
            </p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Tour</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Situation</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Coup</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Raison</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">Tour 1</td>
                            <td className="p-3 border border-gray-200">vs adversaire inconnu</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Feuille</td>
                            <td className="p-3 border border-gray-200">Bat Pierre, l&apos;ouverture la plus courante</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Tour 1</td>
                            <td className="p-3 border border-gray-200">vs joueur expérimenté</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Ciseaux</td>
                            <td className="p-3 border border-gray-200">Les experts attendent Feuille et contrent avec Ciseaux — alors vous les égalez</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Tour 2</td>
                            <td className="p-3 border border-gray-200">L&apos;adversaire a gagné le Tour 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Contrer leur coup gagnant</td>
                            <td className="p-3 border border-gray-200">Gagner-Rester : attendez qu&apos;ils répètent</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Tour 2</td>
                            <td className="p-3 border border-gray-200">L&apos;adversaire a perdu le Tour 1</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Contrer leur prochain coup du cycle</td>
                            <td className="p-3 border border-gray-200">Perdre-Changer : Pierre→Feuille, Feuille→Ciseaux, Ciseaux→Pierre</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Tour 3</td>
                            <td className="p-3 border border-gray-200">L&apos;adversaire a joué le même coup deux fois</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Éliminer ce coup</td>
                            <td className="p-3 border border-gray-200">Double lancer : ils ne le joueront pas une troisième fois</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Tour 3</td>
                            <td className="p-3 border border-gray-200">Doit gagner, pas de lecture claire</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Feuille</td>
                            <td className="p-3 border border-gray-200">Coup statistiquement le plus fort sous pression</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Mettez cette stratégie à l&apos;épreuve.</p>
                <p className="text-sm text-gray-600 mb-4">Défiez un ami — voyez s&apos;il peut lire vos schémas avant que vous lisiez les siens.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Démarrer une Partie à 2 →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        S&apos;entraîner contre l&apos;Ordinateur
                    </Link>
                </div>
            </div>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Peut-on Battre l&apos;Ordinateur à Pierre Feuille Ciseaux ?</h2>
            <p className="mb-4">
                L&apos;ordinateur sur ce site choisit son coup à l&apos;aide d&apos;un générateur de nombres aléatoires — un vrai hasard sans biais. Pierre, Feuille et Ciseaux ont exactement 1 chance sur 3 à chaque manche, sans mémoire des manches précédentes et sans schémas comportementaux.
            </p>
            <p className="mb-4">
                Cela signifie que la stratégie ne s&apos;applique pas contre l&apos;ordinateur. Il n&apos;y a pas de schéma Gagner-Rester à exploiter, pas d&apos;indice de débutant à lire. Chaque manche est un nouveau pile ou face, et toute séquence que vous voyez est du bruit.
            </p>
            <p className="mb-4">
                Mais jouer contre l&apos;ordinateur reste utile pour une chose : découvrir des schémas dans votre propre jeu. Si vous remarquez que vous perdez significativement plus de 33% sur de nombreuses manches, vous avez trouvé une habitude qu&apos;un adversaire humain pourrait exploiter. Utilisez l&apos;ordinateur pour trouver et éliminer vos propres indices avant d&apos;affronter une vraie personne.
            </p>
            <p className="mb-4">
                Le vrai test de la stratégie, c&apos;est le multijoueur. Contre un humain, chaque schéma de ce guide s&apos;applique.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Questions Fréquemment Posées</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">La feuille est-elle le meilleur coup à Pierre Feuille Ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Statistiquement, oui — la feuille bat la pierre, qui est le coup le plus courant avec environ 35% du temps. Mais contre des joueurs expérimentés qui savent cela, les ciseaux sont le contre-jeu attendu, ce qui peut rendre pierre plus sûr.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qu&apos;est-ce que la stratégie gagner-rester, perdre-changer ?</h3>
                    <p className="text-gray-600 text-sm">
                        Un schéma comportemental dans lequel les gagnants tendent à répéter le coup qui vient de gagner, tandis que les perdants passent au coup suivant dans le cycle (Pierre → Feuille → Ciseaux → Pierre). Confirmé par l&apos;Université de Zhejiang en 2014 sur plus de 100 000 manches.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">La psychologie affecte-t-elle vraiment Pierre Feuille Ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Oui. Plusieurs études évaluées par des pairs montrent que les humains s&apos;écartent significativement du jeu aléatoire. Les gens s&apos;ancrent émotionnellement à des coups, réagissent de manière prévisible aux victoires et aux défaites, et créent des schémas que des adversaires habiles peuvent lire.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peut-on gagner à Pierre Feuille Ciseaux à chaque fois ?</h3>
                    <p className="text-gray-600 text-sm">
                        Pas à chaque fois — mais constamment au-dessus de 33% contre des adversaires humains en lisant les schémas comportementaux. Contre un vrai générateur de nombres aléatoires (comme le mode ordinateur de ce site), aucune stratégie ne s&apos;applique.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quel est le meilleur premier coup à Pierre Feuille Ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Contre tout adversaire inconnu, Feuille est statistiquement la plus forte ouverture. Pierre est le coup initial le plus fréquent — surtout chez les débutants et les joueurs masculins — donc Feuille offre le meilleur résultat attendu au tour 1.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pierre Feuille Ciseaux est-il vraiment aléatoire ?</h3>
                    <p className="text-gray-600 text-sm">
                        Non quand des humains jouent. Des recherches de l&apos;Université de Zhejiang ont montré que les joueurs humains suivent des schémas prévisibles selon qu&apos;ils viennent de gagner ou de perdre. Un ordinateur utilisant un générateur de nombres aléatoires est véritablement aléatoire — les adversaires humains ne le sont pas.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Vous avez lu la stratégie.</p>
                <p className="text-sm text-gray-500 mb-5">La seule façon de l&apos;affiner est de jouer contre quelqu&apos;un qui ne la connaît pas.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Défier un Ami →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        S&apos;entraîner contre l&apos;Ordinateur
                    </Link>
                </div>
            </div>

        </article>
    );
}

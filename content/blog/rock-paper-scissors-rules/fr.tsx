import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Règles de Pierre Feuille Ciseaux : Le Guide Complet",
    description:
        "Découvrez les règles complètes de PFC - gestes, conditions de victoire, égalités et formats de jeu - et comment fonctionne le jeu en ligne.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-rules",
    readingTime: "5 min de lecture",
};

export const faqItems: FaqItem[] = [
    {
        q: "Quelles sont les règles officielles de pierre feuille ciseaux ?",
        a: "Deux joueurs révèlent simultanément l'un de trois gestes : Pierre (poing fermé), Feuille (main ouverte et plate) ou Ciseaux (index et majeur en V). Pierre bat Ciseaux, Ciseaux bat Feuille, Feuille bat Pierre. Même geste = égalité - rejouer la manche.",
    },
    {
        q: "Qu'est-ce qui bat quoi à pierre feuille ciseaux ?",
        a: "Pierre bat Ciseaux (les écrase). Ciseaux bat Feuille (la coupe). Feuille bat Pierre (la couvre). Chaque geste en bat exactement un autre et en perd contre un - ce qui rend le jeu parfaitement équilibré.",
    },
    {
        q: "Que se passe-t-il en cas d'égalité à pierre feuille ciseaux ?",
        a: "Quand les deux joueurs font le même geste, c'est une égalité. La règle standard est de rejouer la manche immédiatement jusqu'à ce que le geste d'un joueur batte celui de l'autre.",
    },
    {
        q: "Combien de manches dure une partie standard de pierre feuille ciseaux ?",
        a: "Le format le plus courant est le meilleur des 3 : le premier joueur à gagner 2 manches remporte le match. Un seul lancer est utilisé pour les décisions rapides. Le meilleur des 5 est utilisé dans des contextes plus compétitifs.",
    },
    {
        q: "D'où vient pierre feuille ciseaux ?",
        a: "Le jeu est originaire de Chine et s'est répandu au Japon, où il est devenu le jan-ken-pon. Il est arrivé en Occident au début du XXe siècle et est maintenant joué dans le monde entier sous différents noms.",
    },
    {
        q: "Qu'est-ce que le roshambo ?",
        a: "Roshambo (aussi écrit rochambeau) est le nom nord-américain de pierre feuille ciseaux, courant aux États-Unis. L'origine du terme est débattue - il pourrait venir du comte français de Rochambeau ou simplement être un surnom régional qui s'est popularisé.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Pierre Feuille Ciseaux est l&apos;un des jeux de main les plus joués au monde. La plupart l&apos;apprennent enfants et
                n&apos;y repensent plus jamais - pourtant les disputes sur les égalités, les révélations simultanées et les formats corrects
                sont fréquentes. Ce guide couvre tout : les gestes, ce qui bat quoi, le fonctionnement des égalités, les formats de jeu et
                comment le jeu en ligne change la mécanique.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Les Trois Gestes</h2>
            <p className="mb-4">Chaque joueur forme l&apos;une de trois formes avec la main en même temps :</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✊</div>
                    <p className="font-semibold text-gray-800">Pierre</p>
                    <p className="text-sm text-gray-500 mt-1">Poing fermé</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✋</div>
                    <p className="font-semibold text-gray-800">Feuille</p>
                    <p className="text-sm text-gray-500 mt-1">Main ouverte et plate</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✌️</div>
                    <p className="font-semibold text-gray-800">Ciseaux</p>
                    <p className="text-sm text-gray-500 mt-1">Index et majeur étendus en V</p>
                </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Ce Qui Bat Quoi</h2>
            <p className="mb-4">Les trois résultats suivent un cycle simple. Chaque geste en bat un et en perd contre un :</p>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Geste</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Bat</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Perd contre</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Pourquoi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Pierre ✊</td>
                            <td className="p-3 border border-gray-200">Ciseaux ✌️</td>
                            <td className="p-3 border border-gray-200">Feuille ✋</td>
                            <td className="p-3 border border-gray-200">Pierre écrase Ciseaux ; Feuille couvre Pierre</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Feuille ✋</td>
                            <td className="p-3 border border-gray-200">Pierre ✊</td>
                            <td className="p-3 border border-gray-200">Ciseaux ✌️</td>
                            <td className="p-3 border border-gray-200">Feuille couvre Pierre ; Ciseaux coupe Feuille</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Ciseaux ✌️</td>
                            <td className="p-3 border border-gray-200">Feuille ✋</td>
                            <td className="p-3 border border-gray-200">Pierre ✊</td>
                            <td className="p-3 border border-gray-200">Ciseaux coupe Feuille ; Pierre écrase Ciseaux</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-4">
                Le jeu est parfaitement équilibré - aucun geste n&apos;est plus fort que les autres. Chacun gagne contre un et perd contre
                un, ce qui explique pourquoi il est utilisé comme outil de décision équitable partout dans le monde.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">La Révélation Simultanée - La Règle la Plus Importante</h2>
            <p className="mb-4">
                La règle centrale qui rend le jeu équitable :{" "}
                <strong className="text-gray-800">les deux joueurs doivent révéler leur geste exactement au même moment.</strong> Aucun
                joueur ne peut attendre de voir le choix de l&apos;autre avant de s&apos;engager.
            </p>
            <p className="mb-4">En personne, cela s&apos;applique par un décompte. Méthodes courantes :</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Pierre, Feuille, Ciseaux, Allez !</strong> - révéler sur &ldquo;Allez !&rdquo;
                </li>
                <li>
                    <strong className="text-gray-800">1, 2, 3, Partez !</strong> - révéler sur &ldquo;Partez !&rdquo;
                </li>
                <li>
                    <strong className="text-gray-800">Jan-ken-pon</strong> - le décompte japonais, révéler sur &ldquo;pon&rdquo;
                </li>
            </ul>
            <p className="mb-4">
                Les joueurs pompent leur poing à chaque battement et ouvrent sur le geste choisi au dernier mot. Révéler trop tôt (avant le
                dernier battement) ou trop tard (après avoir vu le geste de l&apos;adversaire) est considéré comme de la triche.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Les Égalités et Comment les Gérer</h2>
            <p className="mb-4">
                Quand les deux joueurs font le même geste, la manche est une égalité. La règle standard est simple :{" "}
                <strong className="text-gray-800">rejouer immédiatement</strong>. Continuer à rejouer jusqu&apos;à ce que le geste d&apos;un
                joueur batte celui de l&apos;autre.
            </p>
            <p className="mb-4">
                Dans un match au meilleur des 3 ou des 5, les manches à égalité ne comptent tout simplement pas dans le total d&apos;aucun
                des joueurs. On continue jusqu&apos;à ce qu&apos;un joueur atteigne le nombre de victoires cible.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Formats de Jeu</h2>
            <p className="mb-4">Pierre Feuille Ciseaux est flexible - le format dépend du contexte :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Lancer unique :</strong> une manche, décision immédiate. Utilisé pour des choix
                    rapides comme qui paie l&apos;addition ou qui commence dans un jeu de société.
                </li>
                <li>
                    <strong className="text-gray-800">Meilleur des 3 :</strong> le premier joueur à gagner 2 manches remporte le match. Le
                    format compétitif standard et celui utilisé sur ce site.
                </li>
                <li>
                    <strong className="text-gray-800">Meilleur des 5 :</strong> le premier à 3 victoires. Utilisé quand un match plus long
                    est souhaité - plus de manches réduit l&apos;influence d&apos;un lancer chanceux.
                </li>
                <li>
                    <strong className="text-gray-800">Manches fixes :</strong> un nombre défini de manches (ex. 10), le joueur avec le plus
                    de victoires gagne. Utilisé dans des contextes de recherche et certains tournois.
                </li>
            </ul>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Prêt à jouer ?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Jouez au meilleur des 3 contre un ami - ou testez les règles contre l&apos;ordinateur d&apos;abord.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jouer avec un Ami →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jouer contre l&apos;ordinateur
                    </Link>
                </div>
            </div>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Comment Fonctionne Pierre Feuille Ciseaux en Ligne</h2>
            <p className="mb-4">
                Le principal défi du PFC en ligne est d&apos;assurer la révélation simultanée. Sans espace physique partagé et décompte, un
                joueur pourrait théoriquement attendre de voir le choix de l&apos;autre.
            </p>
            <p className="mb-4">
                Sur ce site, le problème de révélation est résolu mécaniquement : les deux joueurs verrouillent leur choix en privé avant
                qu&apos;aucun résultat ne soit affiché. Le système ne révèle les deux coups qu&apos;en même temps, après que les deux
                joueurs se sont engagés. Aucun ne peut voir la sélection de l&apos;autre tant que la sienne n&apos;a pas déjà été soumise -
                rendant le jeu en ligne structurellement plus équitable que la plupart des jeux en personne, où des mains rapides peuvent
                contourner les règles de timing.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Variantes Courantes</h2>
            <p className="mb-4">Le jeu original a engendré de nombreuses variantes. Les plus connues :</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong className="text-gray-800">Pierre Feuille Ciseaux Lézard Spock</strong> - popularisé par The Big Bang Theory.
                    Ajoute deux gestes. Le lézard empoisonne Spock et mange la feuille ; Spock écrase les ciseaux et vaporise la pierre.
                    L&apos;ensemble élargi réduit significativement les égalités.
                </li>
                <li>
                    <strong className="text-gray-800">Tournoi de PFC</strong> - régi par la World RPS Society, qui publie des règles
                    officielles incluant des standards pour les lancers légaux, le timing et la résolution des litiges.
                </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pierre Feuille Ciseaux dans le Monde</h2>
            <p className="mb-4">Le jeu est mondial mais porte de nombreux noms :</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                    <strong className="text-gray-800">Jan-ken-pon</strong> (Japon) - considérée comme la forme documentée la plus ancienne,
                    datant du XVIIe siècle
                </li>
                <li>
                    <strong className="text-gray-800">Roshambo / Rochambeau</strong> (États-Unis) - origine débattue, très répandu dans
                    l&apos;ouest américain
                </li>
                <li>
                    <strong className="text-gray-800">Ching chong cha</strong> (Afrique du Sud)
                </li>
                <li>
                    <strong className="text-gray-800">Piedra, papel o tijeras</strong> (monde hispanophone)
                </li>
                <li>
                    <strong className="text-gray-800">Schnick, Schnack, Schnuck</strong> (Allemagne)
                </li>
            </ul>

            {/* Internal link to strategy */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Maintenant que vous connaissez les règles, vous voudrez peut-être aller plus loin.{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        Lisez le guide stratégique →
                    </Link>{" "}
                    - il couvre la recherche en psychologie comportementale qui explique pourquoi les joueurs humains sont prévisibles, et
                    comment en tirer parti.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Questions Fréquentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quelles sont les règles officielles de pierre feuille ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Deux joueurs révèlent simultanément l&apos;un de trois gestes : Pierre (poing fermé), Feuille (main ouverte et
                        plate) ou Ciseaux (deux doigts en V). Pierre bat Ciseaux, Ciseaux bat Feuille, Feuille bat Pierre. Même geste =
                        égalité - rejouer la manche.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qu&apos;est-ce qui bat quoi à pierre feuille ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Pierre bat Ciseaux (les écrase). Ciseaux bat Feuille (la coupe). Feuille bat Pierre (la couvre). Chaque geste en bat
                        exactement un autre et en perd contre un - ce qui rend le jeu parfaitement équilibré.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Que se passe-t-il en cas d&apos;égalité ?</h3>
                    <p className="text-gray-600 text-sm">
                        Quand les deux joueurs font le même geste, c&apos;est une égalité. La règle standard est de rejouer la manche
                        immédiatement jusqu&apos;à ce que le geste d&apos;un joueur batte celui de l&apos;autre.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Combien de manches dure une partie standard ?</h3>
                    <p className="text-gray-600 text-sm">
                        Le format le plus courant est le meilleur des 3 - le premier joueur à gagner 2 manches remporte le match. Un seul
                        lancer pour les décisions rapides. Le meilleur des 5 dans les contextes plus compétitifs.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">D&apos;où vient pierre feuille ciseaux ?</h3>
                    <p className="text-gray-600 text-sm">
                        Le jeu est originaire de Chine et s&apos;est répandu au Japon, où il est devenu le jan-ken-pon. Il est arrivé en
                        Occident au début du XXe siècle et est maintenant joué dans le monde entier sous des noms comme roshambo et
                        rochambeau.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qu&apos;est-ce que le roshambo ?</h3>
                    <p className="text-gray-600 text-sm">
                        Roshambo est le nom nord-américain de pierre feuille ciseaux, courant aux États-Unis. L&apos;origine du terme est
                        débattue - il pourrait venir du comte français de Rochambeau ou simplement être un surnom régional qui s&apos;est
                        popularisé dans la culture américaine.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Vous connaissez les règles. Maintenant jouez.</p>
                <p className="text-sm text-gray-500 mb-5">Défiez un ami en ligne - sans compte, juste un lien à partager.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                        Jouer avec un Ami →
                    </CtaLink>
                    <Link
                        href="/"
                        className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        Jouer contre l&apos;ordinateur
                    </Link>
                </div>
            </div>
        </article>
    );
}

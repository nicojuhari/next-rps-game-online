import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Pierre Feuille Ciseaux comme Brise-Glace en Réunion Virtuelle",
    description:
        "Le meilleur brise-glace pour les équipes à distance est déjà sur le téléphone de tout le monde. Pas d'appli, pas de compte, pas de configuration — partagez un lien et jouez en 10 secondes. Voici exactement comment faire.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-virtual-meeting-icebreaker",
    readingTime: "5 min de lecture",
};

export const faqItems: FaqItem[] = [
    {
        q: "Peut-on jouer à pierre feuille ciseaux en visioconférence Zoom ?",
        a: "Oui. Chaque joueur ouvre le jeu sur son propre appareil pendant l'appel. Partagez le lien dans le chat, les deux joueurs choisissent en privé, et le résultat se révèle simultanément — sans compter jusqu'à trois à voix haute, sans problèmes de latence.",
    },
    {
        q: "Quels sont de bons brise-glaces pour les réunions virtuelles ?",
        a: "Les meilleurs brise-glaces virtuels sont rapides, ne nécessitent pas de configuration et fonctionnent sur différents appareils et niveaux de confort. Pierre Feuille Ciseaux répond aux trois critères : moins de 60 secondes, sans app ni compte, connu dans toutes les cultures.",
    },
    {
        q: "Comment organiser un tournoi de pierre feuille ciseaux en visioconférence ?",
        a: "Formez des paires dans un tableau. Chaque paire reçoit un lien de jeu dans le chat. Tous les matchs du premier tour se déroulent simultanément. Les gagnants avancent. Avec 8 personnes, un tournoi complet prend moins de 10 minutes.",
    },
    {
        q: "Pourquoi pierre feuille ciseaux est-il un bon brise-glace d'équipe ?",
        a: "Universellement connu, moins d'une minute, aucun avantage de connaissance ni confiance en prise de parole requis, et il produit toujours un gagnant clair — générant une réaction naturelle qui brise la glace mieux que n'importe quelle question scriptée.",
    },
    {
        q: "Combien de temps dure un brise-glace virtuel de pierre feuille ciseaux ?",
        a: "Un match au meilleur des 3 dure 30 à 60 secondes. Un tournoi complet avec 8 personnes prend environ 10 minutes. Un tour rapide où tout le monde joue contre la personne à sa gauche prend 2 à 3 minutes.",
    },
    {
        q: "Pierre feuille ciseaux fonctionne-t-il avec de grandes équipes ?",
        a: "Oui. Pour les équipes de plus de 8 à 10 personnes, organisez un tournoi à élimination ou divisez en groupes plus petits. Tous les matchs sont indépendants — les paires peuvent jouer simultanément sans surcharge de coordination.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">

            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Les réunions à distance ont une première minute gênante. Tout le monde se connecte, quelqu&apos;un demande &ldquo;vous m&apos;entendez ?&rdquo;, puis il y a un silence avant que l&apos;ordre du jour commence. Un bon brise-glace règle ça — mais la plupart nécessitent un animateur, une application partagée ou 10 minutes d&apos;explication. Pierre Feuille Ciseaux n&apos;a besoin de rien de tout ça. Partagez un lien, choisissez un coup, voyez qui gagne. Terminé en 60 secondes, fonctionne sur tous les appareils, connu dans toutes les cultures.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pourquoi PFC fonctionne mieux comme brise-glace virtuel que la plupart des alternatives</h2>
            <p className="mb-4">
                La plupart des formats de brise-glace échouent pour l&apos;une de ces trois raisons : ils prennent trop de temps, ils exigent que tout le monde soit à l&apos;aise pour parler, ou ils nécessitent un outil que la moitié de l&apos;équipe n&apos;a jamais utilisé.
            </p>
            <p className="mb-4">
                Pierre Feuille Ciseaux contourne les trois :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong className="text-gray-800">Zéro configuration :</strong> pas de compte, pas de téléchargement, pas d&apos;attente que l&apos;animateur partage son écran. Les joueurs ouvrent le lien eux-mêmes.</li>
                <li><strong className="text-gray-800">Pas de barrière linguistique :</strong> les règles — pierre bat ciseaux, ciseaux bat feuille, feuille bat pierre — s&apos;expliquent en 10 secondes et sont déjà connues dans la plupart des cultures.</li>
                <li><strong className="text-gray-800">Terrain égal :</strong> aucun avantage de connaissance, aucune confiance en prise de parole requise, aucun signal de hiérarchie. Le stagiaire et le directeur jouent exactement dans les mêmes conditions.</li>
                <li><strong className="text-gray-800">Résultat immédiat :</strong> chaque match produit un gagnant clair et une réaction naturelle — un rire, un grognement, une demande de revanche. Cette réaction, c&apos;est le brise-glace qui fait son travail.</li>
                <li><strong className="text-gray-800">Fonctionne sur tous les appareils :</strong> téléphone, tablette, ordinateur — pas d&apos;extension de navigateur, pas d&apos;approbation informatique requise.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pourquoi jouer par vidéo ne fonctionne pas — et pourquoi ceci fonctionne</h2>
            <p className="mb-4">
                L&apos;approche évidente — tout le monde compte jusqu&apos;à trois en caméra et révèle son geste — tombe en panne immédiatement en visioconférence. La latence réseau fait que les joueurs voient les révélations à des moments légèrement différents. Un délai de 200 ms suffit pour qu&apos;une personne voie techniquement la main de l&apos;autre avant de s&apos;engager.
            </p>
            <p className="mb-4">
                Un jeu en ligne correct résout cela structurellement. Les deux joueurs verrouillent leur choix en privé avant qu&apos;aucun résultat ne soit affiché. La révélation n&apos;a lieu qu&apos;après que les deux se sont engagés — la rendant vraiment simultanée d&apos;une façon que compter par vidéo ne peut jamais être.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Comment faire : étape par étape</h2>
            <p className="mb-4">
                Cela prend moins de 2 minutes du début à la fin pour une paire, ou 5 à 10 minutes pour un tableau complet.
            </p>
            <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                        <p className="font-semibold text-gray-800">L&apos;hôte ouvre le jeu et crée une salle</p>
                        <p className="text-sm text-gray-600 mt-0.5">Allez dans le jeu à 2 joueurs, cliquez sur &ldquo;Créer une partie&rdquo; et copiez le lien depuis votre navigateur.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                        <p className="font-semibold text-gray-800">Collez le lien dans le chat de la réunion</p>
                        <p className="text-sm text-gray-600 mt-0.5">Fonctionne dans Zoom, Teams, Meet, Slack ou toute fenêtre de chat. L&apos;autre joueur clique et rejoint instantanément — sans compte nécessaire.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                        <p className="font-semibold text-gray-800">Les deux joueurs choisissent leur coup</p>
                        <p className="text-sm text-gray-600 mt-0.5">Chaque joueur appuie sur Pierre, Feuille ou Ciseaux sur son propre appareil. Le choix est caché jusqu&apos;à ce que les deux aient soumis.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                        <p className="font-semibold text-gray-800">Le résultat se révèle simultanément</p>
                        <p className="text-sm text-gray-600 mt-0.5">Les deux coups apparaissent en même temps. Format au meilleur des 3 — le premier à gagner 2 manches gagne le match.</p>
                    </div>
                </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Essayez avant votre prochain appel.</p>
                <p className="text-sm text-gray-600 mb-4">Ouvrez une salle maintenant — sans compte, collez juste le lien dans le chat de votre réunion.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Créer une Salle de Jeu →
                </CtaLink>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Utilisations concrètes en réunion</h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Échauffement rapide pour le standup d&apos;équipe</h3>
            <p className="mb-4">
                Avant que l&apos;agenda du standup commence, l&apos;animateur associe deux personnes au hasard et joue un match en direct. 45 secondes, crée un moment de légèreté et fait que les gens sont attentifs avant que la vraie réunion commence.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Prendre une décision de groupe</h3>
            <p className="mb-4">
                Qui présente en premier dans la démo ? Qui choisit l&apos;option déjeuner de l&apos;équipe ? Qui rédige le compte-rendu ? Plutôt qu&apos;un silence gêné ou que la voix la plus forte gagne, jouez un match rapide. Les deux acceptent le résultat car ils ont eu une chance équitable.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Intégration d&apos;un nouveau membre de l&apos;équipe</h3>
            <p className="mb-4">
                Associez le nouvel arrivant à chaque membre existant pour un match rapide sa première semaine. Moins intimidant que de se présenter devant un groupe, génère des sujets de conversation naturels en tête-à-tête et aide à mémoriser les noms plus vite grâce au contexte du jeu.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Tournoi de team building</h3>
            <p className="mb-4">
                Pour une activité d&apos;équipe dédiée, organisez un tableau à élimination. Avec 8 personnes : mettez tout le monde aléatoirement, jouez 4 matchs de premier tour simultanément (chaque paire obtient son propre lien), puis demi-finales et finale. Tout prend 10 à 12 minutes.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Départager un vote à égalité</h3>
            <p className="mb-4">
                L&apos;équipe est partagée 2–2 sur une décision. Plutôt que d&apos;aller au manager comme arbitre (ce qui crée une pression hiérarchique), chaque camp choisit un champion et ils jouent. Le résultat est aléatoire — mais accepté comme équitable car les deux parties y ont consenti.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Organiser un tournoi pour les grandes équipes</h2>
            <p className="mb-4">
                Pour les équipes de 8 à 16 personnes, l&apos;élimination simple fonctionne bien :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Utilisez un outil de tableau (Challonge, Bracket HQ ou un tableur simple) pour les pairages</li>
                <li>Partagez le lien de jeu de chaque paire simultanément dans le chat du groupe</li>
                <li>Tous les matchs du premier tour se déroulent en même temps — sans attendre les autres paires</li>
                <li>Les gagnants signalent leur résultat dans le chat ; ils avancent au tour suivant</li>
                <li>Le match final se joue en direct avec tout le monde qui regarde sur l&apos;appel</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Ce qui fait un bon brise-glace virtuel (et pourquoi la plupart échouent)</h2>
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left p-3 border border-gray-200 font-semibold">Format</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Durée</th>
                            <th className="text-left p-3 border border-gray-200 font-semibold">Problème</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr>
                            <td className="p-3 border border-gray-200">&ldquo;Deux vérités et un mensonge&rdquo;</td>
                            <td className="p-3 border border-gray-200">5–15 min</td>
                            <td className="p-3 border border-gray-200">Nécessite de l&apos;aisance à l&apos;oral ; gênant pour les membres nouveaux ou introvertis</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Quiz de culture générale</td>
                            <td className="p-3 border border-gray-200">10–20 min</td>
                            <td className="p-3 border border-gray-200">L&apos;écart de connaissances pénalise les non-natifs et les membres juniors</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200">Bingo virtuel</td>
                            <td className="p-3 border border-gray-200">10–15 min</td>
                            <td className="p-3 border border-gray-200">Nécessite un outil partagé, un temps de configuration, quelqu&apos;un pour animer</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="p-3 border border-gray-200">Association de mots</td>
                            <td className="p-3 border border-gray-200">3–5 min</td>
                            <td className="p-3 border border-gray-200">Difficile avec plus de 4–5 personnes ; perd de l&apos;énergie rapidement</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">Pierre Feuille Ciseaux</td>
                            <td className="p-3 border border-gray-200 font-semibold text-gray-800">1–10 min</td>
                            <td className="p-3 border border-gray-200 text-green-700 font-medium">Pas de configuration. Pas besoin de parler. Terrain égal. S&apos;adapte à toute taille d&apos;équipe.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Une fois le brise-glace terminé et si les gens veulent continuer à jouer :{" "}
                    <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline font-medium">
                        lisez le guide stratégique
                    </Link>{" "}
                    — il couvre la psychologie comportementale qui explique pourquoi les joueurs humains sont prévisibles. Ou révisez les{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        règles complètes
                    </Link>{" "}
                    si quelqu&apos;un sur l&apos;appel a besoin d&apos;un rappel.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Questions Fréquentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peut-on jouer à pierre feuille ciseaux en visioconférence Zoom ?</h3>
                    <p className="text-gray-600 text-sm">Oui. Chaque joueur ouvre le jeu sur son propre appareil. Partagez le lien dans le chat Zoom, les deux choisissent en privé et le résultat se révèle simultanément — sans compter à voix haute, sans problèmes de latence.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quels sont de bons brise-glaces pour les réunions virtuelles ?</h3>
                    <p className="text-gray-600 text-sm">Les meilleurs sont rapides, sans configuration et fonctionnent pour tous les niveaux de confort. PFC répond aux trois : moins de 60 secondes, sans app ni compte, connu dans toutes les cultures.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Comment organiser un tournoi en visioconférence ?</h3>
                    <p className="text-gray-600 text-sm">Formez des paires dans un tableau. Partagez le lien de chaque paire dans le chat. Tous les matchs du premier tour simultanément. Gagnants avancent. Avec 8 personnes, moins de 10 minutes.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pourquoi est-ce un bon brise-glace d&apos;équipe ?</h3>
                    <p className="text-gray-600 text-sm">Universellement connu, moins d&apos;une minute, sans avantage de connaissance ni aisance à l&apos;oral requise, et toujours un gagnant clair — qui génère une réaction naturelle.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Combien de temps dure un brise-glace virtuel de PFC ?</h3>
                    <p className="text-gray-600 text-sm">Un match au meilleur des 3 dure 30 à 60 secondes. Un tournoi avec 8 personnes environ 10 minutes. Un tour rapide où tout le monde joue contre la personne à gauche prend 2 à 3 minutes.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Fonctionne-t-il avec de grandes équipes ?</h3>
                    <p className="text-gray-600 text-sm">Oui. Pour les équipes de plus de 8 à 10 personnes, organisez un tournoi à élimination ou divisez en groupes plus petits. Tous les matchs sont indépendants et peuvent se jouer simultanément.</p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Prêt pour votre prochaine réunion ?</p>
                <p className="text-sm text-gray-500 mb-5">Ouvrez une salle maintenant — collez le lien dans le chat de votre réunion et commencez en moins de 10 secondes.</p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Créer une Salle de Jeu →
                </CtaLink>
            </div>

        </article>
    );
}

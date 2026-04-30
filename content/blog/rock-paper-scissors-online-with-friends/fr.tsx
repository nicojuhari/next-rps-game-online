import { Link } from "@/i18n/navigation";
import { CtaLink } from "@/components/CtaLink";
import type { BlogPostMeta, FaqItem } from "../types";

export const meta: BlogPostMeta = {
    title: "Jouer à Pierre Feuille Ciseaux en Ligne avec des Amis",
    description:
        "Partagez un lien, les deux choisissent en même temps, gagnant en 60 secondes. Jouer à PFC en ligne avec un ami - sans app, sans inscription.",
    publishedAt: "2026-04-30",
    slug: "rock-paper-scissors-online-with-friends",
    readingTime: "4 min de lecture",
};

export const faqItems: FaqItem[] = [
    {
        q: "Dois-je créer un compte pour jouer ?",
        a: "Non. Le jeu est totalement anonyme - pas d'e-mail, pas de mot de passe, pas de profil. Il suffit d'ouvrir le lien et de jouer.",
    },
    {
        q: "Comment inviter mon ami ?",
        a: "Ouvrez la partie à 2 joueurs, copiez le lien unique de la salle et envoyez-le comme vous communiquez habituellement - SMS, WhatsApp, Discord, e-mail. Quand il ouvre le lien, vous êtes connectés.",
    },
    {
        q: "C'est gratuit ?",
        a: "Oui, toujours gratuit. Pas d'abonnement ni d'achats intégrés.",
    },
    {
        q: "Combien de manches dure une partie ?",
        a: "Meilleur des 3. Le premier à gagner 2 manches gagne la partie.",
    },
    {
        q: "Peut-on jouer sur téléphone ?",
        a: "Oui. Le jeu fonctionne dans n'importe quel navigateur mobile sur iOS et Android - aucun téléchargement d'application requis.",
    },
    {
        q: "Que se passe-t-il si je perds la connexion en cours de partie ?",
        a: "La salle de jeu persiste brièvement. Si vous vous reconnectez tous les deux au même lien, la partie reprend là où elle s'était arrêtée.",
    },
];

export function Content() {
    return (
        <article className="text-gray-700 leading-relaxed">
            {/* Opening */}
            <p className="text-lg text-gray-800 mb-6">
                Vous et un ami devez décider quelque chose. Vous n&apos;êtes pas dans la même pièce. S&apos;envoyer des messages
                &ldquo;pierre feuille ciseaux partez !&rdquo; ne fonctionne pas - l&apos;un voit toujours le choix de l&apos;autre avant de
                s&apos;être engagé. Il existe une meilleure façon : une partie en temps réel avec révélation simultanée, sans compte, prête
                en moins de 60 secondes.
            </p>

            {/* Snippet-ready answer */}
            <div className="bg-gray-50 border-l-4 border-blue-400 px-5 py-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <strong>Réponse rapide :</strong> Pour jouer à pierre feuille ciseaux en ligne avec un ami - ouvrez la partie à 2
                    joueurs, partagez le lien unique de la salle avec votre ami, et les deux choisissent en même temps. Le résultat est
                    révélé simultanément. Sans compte ni téléchargement.
                </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Le problème avec PFC par message</h2>
            <p className="mb-4">
                Ça semble simple : envoyer un message, compter jusqu&apos;à trois, les deux révèlent. Mais en pratique ça échoue toujours de
                la même façon. L&apos;un répond en premier et l&apos;autre - consciemment ou non - ajuste son choix. Même en appel vidéo, un
                décalage de 200 ms signifie que le second joueur voit techniquement le choix du premier avant d&apos;avoir validé le sien.
                L&apos;équité disparaît dès que la révélation n&apos;est pas simultanée.
            </p>
            <p className="mb-4">
                La solution n&apos;est pas de compter plus vite ni de se faire davantage confiance - c&apos;est d&apos;utiliser un système
                qui empêche structurellement tout joueur de voir le choix de l&apos;autre avant de s&apos;engager. C&apos;est exactement ce
                que fait un jeu PFC en ligne en temps réel.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">
                Comment jouer à pierre feuille ciseaux en ligne avec des amis - étape par étape
            </h2>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Étape 1 - Ouvrez la partie à 2 joueurs</h3>
            <p className="mb-4">
                Accédez à la{" "}
                <Link href="/two-players" className="text-blue-600 hover:underline">
                    partie à 2 joueurs
                </Link>
                . Aucun compte à créer, aucune application à télécharger, aucun e-mail à vérifier. Fonctionne dans n&apos;importe quel
                navigateur sur n&apos;importe quel appareil - ordinateur, téléphone, tablette. Vous arrivez dans la salle de jeu en cinq
                secondes environ.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Étape 2 - Partagez le lien avec votre ami</h3>
            <p className="mb-4">
                Quand vous ouvrez une salle de jeu, vous obtenez une URL unique. Copiez-la et envoyez-la à votre ami - par SMS, WhatsApp,
                Discord, e-mail, ce que vous utilisez déjà pour communiquer. Il l&apos;ouvre sur son appareil, depuis n&apos;importe où dans
                le monde, et vous êtes connectés. Pas de mot de passe partagé, pas de code de salle à coordonner.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Étape 3 - Les deux joueurs choisissent en même temps</h3>
            <p className="mb-4">
                Chaque joueur voit les mêmes trois options : Pierre, Feuille, Ciseaux. Vous validez tous les deux votre choix en privé -
                aucun ne peut voir celui de l&apos;autre tant que les deux n&apos;ont pas soumis le leur. Pas de décompte à coordonner, pas
                de confiance nécessaire. Le système impose la révélation simultanée.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2 text-gray-800">Étape 4 - Découvrez qui a gagné</h3>
            <p className="mb-4">
                Une fois que les deux ont choisi, le résultat est instantané. Vous jouez en meilleur des 3 - le premier à gagner 2 manches
                remporte la partie. Le score se met à jour en temps réel. Pas de score à noter manuellement, pas de &ldquo;attends,
                c&apos;était quoi le score ?&rdquo;. Le désaccord est tranché, équitablement, en moins d&apos;une minute.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Prêt à jouer maintenant ?</p>
                <p className="text-sm text-gray-600 mb-4">
                    Partagez un lien - les deux choisissent en même temps, résultat instantané. Sans compte.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Démarrer une partie à 2 →
                </CtaLink>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Pourquoi la révélation simultanée est importante</h2>
            <p className="mb-4">
                Pierre feuille ciseaux est un jeu équitable précisément parce qu&apos;aucun joueur ne connaît le choix de l&apos;autre à
                l&apos;avance. Dès que l&apos;un révèle en premier - même d&apos;une fraction de seconde - l&apos;autre dispose d&apos;une
                information qu&apos;il ne devrait pas avoir. Des recherches sur la prise de décision humaine montrent que les gens ajustent
                leurs choix en fonction d&apos;informations partielles même quand ils pensent jouer équitablement.
            </p>
            <p className="mb-4">
                Un système de révélation simultanée élimine cela entièrement. Les deux choix sont validés avant qu&apos;aucun ne soit
                affiché. Il n&apos;y a aucun moyen de réagir à ce qu&apos;on n&apos;a pas vu. C&apos;est le même principe que les enchères
                sous pli scellé et les votes secrets. Si vous voulez comprendre comment cela affecte la stratégie, le{" "}
                <Link href="/blog/how-to-win-rock-paper-scissors" className="text-blue-600 hover:underline">
                    guide de stratégie
                </Link>{" "}
                explique ce qui rend les joueurs humains prévisibles.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">Peut-on jouer à PFC sur téléphone ?</h2>
            <p className="mb-4">
                Oui. Le jeu est basé sur navigateur et fonctionne sur n&apos;importe quel appareil mobile - iPhone, Android, tablette.
                Aucune application à télécharger, aucune autorisation App Store à approuver. Ouvrez le lien dans Safari, Chrome ou
                n&apos;importe quel navigateur mobile et vous jouez. La plupart des personnes qui utilisent le mode 2 joueurs le font depuis
                leur téléphone, en pleine conversation avec leur ami.
            </p>
            <p className="mb-4">
                La mise en page s&apos;adapte aux petits écrans pour que les contrôles soient faciles à toucher. Pierre, Feuille, Ciseaux -
                trois boutons, un appui, c&apos;est fait.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold mt-10 mb-3 text-gray-900">PFC sur Zoom, FaceTime ou Discord</h2>
            <p className="mb-4">
                Si vous êtes déjà en appel vidéo avec quelqu&apos;un, vous pouvez jouer à PFC en ligne en même temps - ouvrez simplement le
                lien du jeu dans un autre onglet pendant que l&apos;appel continue. Partagez le lien dans le chat et les deux joueurs
                cliquent.
            </p>
            <p className="mb-4">
                C&apos;est mieux que de compter jusqu&apos;à trois ensemble. Le décalage vidéo fait que celui qui dit &ldquo;partez !&rdquo;
                et celui qui révèle en premier ne sont jamais parfaitement synchronisés. Le jeu en ligne élimine entièrement ce problème -
                aucun choix n&apos;est visible tant que les deux n&apos;ont pas soumis le leur, quel que soit le lag vidéo.
            </p>
            <p className="mb-4">
                La même logique s&apos;applique à Zoom, Teams, FaceTime, Google Meet - n&apos;importe quel outil vidéo. Le jeu tourne dans
                un onglet de navigateur, indépendamment de l&apos;application de communication que vous utilisez.
            </p>

            {/* Internal links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                    Vous voulez revoir les règles avant de jouer ?{" "}
                    <Link href="/blog/rock-paper-scissors-rules" className="text-blue-600 hover:underline font-medium">
                        Les règles officielles
                    </Link>{" "}
                    couvrent tous les cas, y compris les égalités. Ou si vous décidez qui fait quelque chose en premier, lisez{" "}
                    <Link href="/blog/rock-paper-scissors-vs-coin-flip" className="text-blue-600 hover:underline font-medium">
                        PFC vs pile ou face
                    </Link>{" "}
                    pour savoir laquelle est vraiment la plus équitable.
                </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">Questions fréquentes</h2>
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dois-je créer un compte pour jouer ?</h3>
                    <p className="text-gray-600 text-sm">
                        Non. Le jeu est totalement anonyme - pas d&apos;e-mail, pas de mot de passe, pas de profil. Il suffit d&apos;ouvrir
                        le lien et de jouer.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Comment inviter mon ami ?</h3>
                    <p className="text-gray-600 text-sm">
                        Ouvrez la partie à 2 joueurs, copiez le lien unique de la salle et envoyez-le comme vous communiquez - SMS,
                        WhatsApp, Discord, e-mail. Quand il ouvre le lien, vous êtes connectés.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">C&apos;est gratuit ?</h3>
                    <p className="text-gray-600 text-sm">Oui, toujours gratuit. Pas d&apos;abonnement ni d&apos;achats intégrés.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Combien de manches dure une partie ?</h3>
                    <p className="text-gray-600 text-sm">Meilleur des 3. Le premier à gagner 2 manches gagne la partie.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peut-on jouer sur téléphone ?</h3>
                    <p className="text-gray-600 text-sm">
                        Oui. Le jeu fonctionne dans n&apos;importe quel navigateur mobile sur iOS et Android - aucun téléchargement
                        d&apos;application requis.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Que se passe-t-il si je perds la connexion en cours de partie ?</h3>
                    <p className="text-gray-600 text-sm">
                        La salle de jeu persiste brièvement. Si vous vous reconnectez tous les deux au même lien, la partie reprend là où
                        elle s&apos;était arrêtée.
                    </p>
                </div>
            </div>

            {/* End CTA */}
            <div className="border-t border-gray-200 mt-10 pt-8 text-center">
                <p className="font-semibold text-gray-800 mb-1">Prêt à trancher ça ?</p>
                <p className="text-sm text-gray-500 mb-5">
                    Démarrez une partie à 2 joueurs, partagez le lien et jouez en moins de 60 secondes. Sans compte.
                </p>
                <CtaLink href="/two-players" className="text-sm px-5 py-2.5">
                    Démarrer une partie à 2 →
                </CtaLink>
            </div>
        </article>
    );
}

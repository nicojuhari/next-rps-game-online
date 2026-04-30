import Link from "next/link";
import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
    { q: "C'est gratuit ?", a: "Oui. Complètement gratuit, sans compte, sans téléchargement." },
    { q: "Mon ami doit-il créer un compte ?", a: "Non. Partage juste le lien - aucune inscription de part et d'autre." },
    {
        q: "On peut jouer depuis des appareils différents ?",
        a: "Oui. Un joueur sur PC, l'autre sur téléphone - ça marche sur tout appareil avec un navigateur.",
    },
    {
        q: "L'un de nous peut-il voir le coup de l'autre avant de choisir ?",
        a: "Non. Les deux coups sont cachés jusqu'à ce que les deux joueurs aient terminé. Pas de triche possible.",
    },
    { q: "Que se passe-t-il si je ferme le navigateur ?", a: "La salle reste ouverte. Rouvre le lien et reprends là où tu en étais." },
    { q: "Peut-on jouer sur mobile ?", a: "Oui. Le jeu fonctionne sur tout smartphone ou tablette." },
    {
        q: "Peut-on utiliser Pierre Feuille Ciseaux pour régler un pari ou prendre une décision ?",
        a: "Oui. Jouer en ligne est plus équitable qu'en personne - les deux choix sont confirmés avant qu'aucun joueur ne voie le résultat, donc personne ne peut changer son coup à la dernière seconde. C'est le même principe qu'un lancé de pièce, sauf que les deux joueurs participent activement.",
    },
    {
        q: "Peut-on jouer à Pierre Feuille Ciseaux lors d'un appel Zoom ou vidéo ?",
        a: "Oui. Ouvre le jeu sur ton propre appareil pendant l'appel. Partage le lien du jeu dans le chat. Les deux joueurs choisissent leur coup indépendamment, et le résultat se révèle en même temps - pas besoin de compter jusqu'à trois à voix haute.",
    },
    {
        q: "Peut-on jouer à Pierre Feuille Ciseaux à longue distance - dans des pays différents ?",
        a: "Oui. Le jeu tourne dans le navigateur et fonctionne partout avec une connexion internet. Aucun téléchargement d'application ni compte n'est nécessaire des deux côtés. Partage le lien et joue instantanément, peu importe la localisation.",
    },
    {
        q: "Combien de parties peut-on jouer en une session ?",
        a: "Autant que tu veux. La salle de jeu reste ouverte et suit les scores cumulés sur plusieurs parties. Pas besoin de créer un nouveau lien à chaque fois - continuez à jouer jusqu'à ce que l'un de vous abandonne.",
    },
];

export function HowToPlay() {
    return (
        <>
            <h2 className="border-l-4 border-blue-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Comment Jouer à Pierre Feuille Ciseaux en Ligne avec des Amis
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>Jouer avec un ami, c&apos;est trois étapes - sans compte, sans appli :</p>
                <ol className="pl-4 space-y-2 list-decimal">
                    <li>
                        <span className="font-semibold text-gray-700">Crée une salle privée</span> - clique sur &laquo;&nbsp;Créer une
                        partie&nbsp;&raquo; ci-dessus ou depuis la page d&apos;accueil. Tu reçois un lien privé immédiatement.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Partage le lien</span> - envoie-le à ton ami via n&apos;importe quelle
                        appli de messagerie. Fonctionne sur tous les appareils.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Joue</span> - les deux joueurs choisissent Pierre, Feuille ou Ciseaux.
                        Le meilleur des 3 manches l&apos;emporte.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Obtiens ton certificat</span> - gagne plus de parties que ton
                        adversaire et télécharge un certificat de victoire personnalisé à partager.
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
                Pierre Feuille Ciseaux 1v1 - Comment ça marche
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Les deux joueurs choisissent en même temps et ne voient pas le choix de l&apos;autre avant de confirmer. Chaque partie
                    est vraiment équitable - pas de réaction de dernière seconde, pas de disputes.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                    <li>Celui qui remporte le plus de manches gagne la partie. Le premier à 2 victoires l&apos;emporte.</li>
                    <li>
                        Les scores sont suivis sur plusieurs parties dans la même salle - pas besoin de créer un nouveau lien à chaque fois.
                    </li>
                </ul>
            </div>
        </>
    );
}

export function WhySettle() {
    return (
        <>
            <h2 className="border-l-4 border-red-500 pl-3 text-base font-semibold mb-3 text-gray-800">
                Pourquoi trancher à Pierre Feuille Ciseaux ?
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
                <p>
                    Pierre Feuille Ciseaux donne une chance égale à chacun et se joue en quelques secondes. Les gens l&apos;utilisent pour
                    décider :
                </p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Qui paie le repas</li>
                    <li>Qui choisit le film ou la playlist</li>
                    <li>Qui commence dans un jeu de société</li>
                    <li>Toute décision où les deux veulent une chance équitable</li>
                </ul>
                <p>
                    Jouer en ligne évite les disputes sur qui a joué quoi. Les deux coups sont confirmés et révélés en même temps, à chaque
                    fois.
                </p>
            </div>
        </>
    );
}

export function UseCases() {
    return (
        <>
            <h2 className="border-l-4 border-green-600 pl-3 text-base font-semibold mb-3 text-gray-800">
                Pierre Feuille Ciseaux Fonctionne dans Plus de Situations que tu ne le Crois
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
                <div>
                    <p className="font-semibold text-gray-700">Réunions Virtuelles et Brise-Glace</p>
                    <p className="mt-1">
                        Besoin d&apos;un brise-glace de 60 secondes pour ton appel d&apos;équipe ? PFC fonctionne sur n&apos;importe quel
                        appareil, sans configuration, et fait rire tout le monde en moins d&apos;une minute.{" "}
                        <Link href="/blog/rock-paper-scissors-virtual-meeting-icebreaker" className="text-blue-600 hover:underline">
                            Comment utiliser PFC comme brise-glace en réunion virtuelle →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Couples et Amis à Distance</p>
                    <p className="mt-1">
                        Quand vous décidez quelque chose ensemble depuis des villes différentes, un lien partagé surpasse le compte à
                        rebours jusqu&apos;à trois en visioconférence.{" "}
                        <Link href="/blog/rock-paper-scissors-long-distance-couples" className="text-blue-600 hover:underline">
                            Pierre Feuille Ciseaux pour les longues distances →
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Régler N&apos;importe Quelle Décision</p>
                    <p className="mt-1">
                        Qui choisit le restaurant ? Qui va en premier ? Qui appelle les parents ? Les deux joueurs ont une chance égale, et
                        le résultat est instantané et équitable.
                    </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-gray-500">
                    Pas encore prêt à défier quelqu&apos;un ?{" "}
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Entraîne-toi seul contre l&apos;ordinateur →
                    </Link>
                </div>
            </div>
        </>
    );
}

export function Faq() {
    return (
        <>
            <h2 className="border-l-4 border-purple-500 pl-3 text-base font-semibold mb-3 text-gray-800">Questions Fréquentes</h2>
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

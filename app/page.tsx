import Link from "next/link";
import MainCTA from "@/components/MainCTA";
import HomeContent from "@/components/HomeContent";
import OnePlayer from "@/components/OnePlayer";
import AdSense from "@/components/AdSense";
import { createMetadata } from "@/lib/metadata";
import { getTranslations } from "@/lib/i18n";

export const metadata = createMetadata({
    title: "Rock Paper Scissors Online - Play Free vs Computer | No Signup",
    description:
        "Play Rock Paper Scissors online for free. Challenge the computer instantly - no download, no account required. Best-of-3 rounds, works on all devices.",
    canonical: "/",
    keywords: [
        "rock paper scissors online",
        "play rock paper scissors online",
        "rps game online",
        "rock paper scissors free online",
        "rock paper scissors vs computer",
        "play rock paper scissors against computer",
        "rock paper scissors no signup",
        "rock paper scissors no download",
        "rock paper scissors game",
        "play rps online",
    ],
    openGraph: {
        title: "Rock Paper Scissors Online - Play Free vs Computer",
        description: "Play Rock Paper Scissors online for free. Challenge the computer instantly - no download, no account required.",
    },
    twitter: {
        title: "Rock Paper Scissors Online - Play Free vs Computer",
        description: "Play Rock Paper Scissors online for free. No download, no account required.",
    },
});

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What beats Rock in Rock Paper Scissors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Paper beats Rock. Paper symbolically covers Rock, making it the winning move whenever your opponent throws Rock.",
            },
        },
        {
            "@type": "Question",
            name: "What beats Paper in Rock Paper Scissors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Scissors beats Paper. Scissors cuts through Paper, making it the counter whenever your opponent plays Paper.",
            },
        },
        {
            "@type": "Question",
            name: "What beats Scissors in Rock Paper Scissors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Rock beats Scissors. Rock crushes Scissors, making it the winning move whenever your opponent throws Scissors.",
            },
        },
        {
            "@type": "Question",
            name: "Is Rock Paper Scissors just luck?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "At random, each throw wins 33.3% of the time. But humans don't choose randomly - they follow predictable patterns. Research shows most beginners open with Rock, and players tend to repeat winning moves. Recognising these tendencies gives skilled players a real advantage.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to sign up or download anything to play?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The game runs entirely in your browser. No account, no download, no app required - just open the page and play instantly.",
            },
        },
        {
            "@type": "Question",
            name: "Does Rock Paper Scissors Online work on mobile?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The game is fully responsive and works on any smartphone or tablet with a modern browser.",
            },
        },
        {
            "@type": "Question",
            name: "What is the best opening move in Rock Paper Scissors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Statistically, Paper is a strong opener. Most players - especially beginners - throw Rock first because it feels like the strongest move. Playing Paper counters that tendency and gives you a statistical edge in the first round.",
            },
        },
    ],
};

const Home = () => {
    const t = getTranslations("en");
    const [subtitleLine1, subtitleLine2] = t.home.subtitle.split("\n");

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="pt-8 pb-6 text-center space-y-3">
                <h1 className="font-semibold leading-tight">
                    <span className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-2">{t.home.h1Label}</span>
                    <span className="text-blue-500 text-3xl md:text-4xl">{t.home.h1Rock} </span>
                    <span className="text-yellow-500 text-3xl md:text-4xl">{t.home.h1Paper} </span>
                    <span className="text-red-500 text-3xl md:text-4xl">{t.home.h1Scissors} </span>
                    <span className="text-gray-400 text-2xl md:text-3xl">{t.home.h1Online}</span>
                </h1>
                <p className="text-gray-500 text-sm font-light">
                    {subtitleLine1}
                    <br /> {subtitleLine2}
                </p>
            </div>

            <OnePlayer t={t} />
            <AdSense adSlot="6657389797" className="mt-6" />
            {/* <div className="flex items-center gap-3 my-10">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">or play with a friend</span>
                <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <MainCTA t={t} /> */}
            <HomeContent t={t} />

            <p className="text-sm text-center text-gray-400 mb-8">
                {t.home.privacyNoticeBefore}
                <Link href="/privacy" className="text-blue-500 underline underline-offset-2" title="privacy policy">
                    {t.home.privacyNoticeLink}
                </Link>
                {t.home.privacyNoticeAfter}
            </p>
        </>
    );
};

export default Home;

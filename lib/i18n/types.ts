export interface FaqItem {
    q: string;
    a: string;
}

export interface OverlayOutcome {
    headline: string;
    sub: string;
}

export interface Translations {
    meta: {
        home: {
            title: string;
            description: string;
            keywords: string[];
        };
        twoPlayers: {
            title: string;
            description: string;
            keywords: string[];
        };
        privacy: {
            title: string;
            description: string;
        };
    };

    home: {
        h1Label: string;
        h1Rock: string;
        h1Paper: string;
        h1Scissors: string;
        h1Online: string;
        subtitle: string;
        privacyNoticeBefore: string;
        privacyNoticeLink: string;
        privacyNoticeAfter: string;
        strategy: {
            title: string;
            p1: string;
            p2: string;
            winLabel: string;
            winText: string;
            winCounterLabel: string;
            winCounter: string;
            loseLabel: string;
            loseText: string;
            loseCounterLabel: string;
            loseCounter: string;
            firstThrowLabel: string;
            firstThrowText: string;
            tipLabel: string;
            tip: string;
            luckQ: string;
            luckA: string;
            certCTA: string;
        };
        rules: {
            title: string;
            p1: string;
            rockCrushes: string;
            scissorsCuts: string;
            paperCovers: string;
            drawRule: string;
            bestOf3Q: string;
            bestOf3A: string;
        };
        statistics: {
            title: string;
            p1: string;
            p2: string;
            story: string;
            sothebys: string;
            christies: string;
            conclusion: string;
        };
        history: {
            title: string;
            p1: string;
            p2: string;
            p3: string;
            didYouKnow: string;
            computerNote: string;
            fairPlay: string;
        };
        faq: {
            title: string;
            items: FaqItem[];
        };
    };

    twoPlayers: {
        h1: string;
        gameNotFound: string;
        cancelGame: string;
        pickMoveNote: string;
        howToPlay: {
            title: string;
            intro: string;
            createRoomLabel: string;
            createRoomText: string;
            shareLinkLabel: string;
            shareLinkText: string;
            playLabel: string;
            playText: string;
            claimCertLabel: string;
            claimCertText: string;
        };
        howItWorks: {
            title: string;
            p1: string;
            firstTo2: string;
            scores: string;
        };
        whySettle: {
            title: string;
            p1: string;
            items: string[];
            p2: string;
        };
        faq: {
            title: string;
            items: FaqItem[];
        };
    };

    privacy: {
        h1: string;
        intro: string;
        noPersonalDataTitle: string;
        noPersonalDataText: string;
        anonymousIdTitle: string;
        anonymousIdText: string;
        simpleAnalyticsTitle: string;
        simpleAnalyticsText: string;
        gameDataTitle: string;
        gameDataText: string;
        localStorageTitle: string;
        localStorageText: string;
        anonymityTitle: string;
        anonymityText: string;
        deleteButton: string;
        deleteAlert: string;
    };

    header: {
        playWithFriend: string;
    };

    mainCTA: {
        createLabel: string;
        shareLabel: string;
        playLabel: string;
        stakeLabel: string;
        stakeOptional: string;
        stakePlaceholder: string;
        createButton: string;
        noAccount: string;
    };

    onePlayer: {
        you: string;
        bot: string;
        vsComputer: string;
        pickMove: string;
        rock: string;
        paper: string;
        scissors: string;
        resetScore: string;
        getCertificate: string;
        certUnlock: string;
    };

    gameBoard: {
        you: string;
        friend: string;
        vsFriend: string;
        pickMove: string;
        rock: string;
        paper: string;
        scissors: string;
        getCertificate: string;
        certUnlock: string;
    };

    tableBoard: {
        you: string;
        computer: string;
        secondPlayer: string;
        results: string;
    };

    gameOverlay: {
        win: OverlayOutcome;
        draw: OverlayOutcome;
        lose: OverlayOutcome;
        youLabel: string;
        getCertificate: string;
        playAgain: string;
    };

    gameResults: {
        won: string;
        draw: string;
        lost: string;
        shareScore: string;
    };

    joinGame: {
        invitation: string;
        joinButton: string;
    };

    waitingPlayer: {
        roomCreated: string;
        sharePrompt: string;
        copyLink: string;
        copying: string;
    };

    jsonLd: {
        videoGame: {
            name: string;
            description: string;
            featureList: string;
        };
        faqHome: FaqItem[];
        faqTwoPlayers: FaqItem[];
    };
}

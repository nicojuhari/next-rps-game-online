import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Rock Paper Scissors Online",
  description: "Learn about our privacy practices and data protection policies for Rock Paper Scissors Online. We prioritize your privacy and data security.",
  keywords: ["privacy policy", "data protection", "rock paper scissors privacy", "user data", "security"],
  openGraph: {
    title: "Privacy Policy - Rock Paper Scissors Online",
    description: "Learn about our privacy practices and data protection policies for Rock Paper Scissors Online.",
    url: "https://rps-game.online/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Rock Paper Scissors Online",
    description: "Learn about our privacy practices and data protection policies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Privacy = () => {
    return (
        <div className="py-16 container">
            <h1 className="text-2xl font-bold mb-8 text-center">Privacy Assurance</h1>

            <p className="text-gray-600 mb-6">
            We take your privacy seriously. Here is what you need to know:
            </p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold">No Personal Data Collection</h2>
                    <p className="text-gray-600">
                    We do <strong>not</strong> collect or store any personal information like names, emails, or IP addresses.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Anonymous Player ID</h2>
                    <p className="text-gray-600">
                    A random player ID is automatically generated to enable gameplay. This ID is stored in your browser’s local storage and is not linked to any personal data.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Simple Analytics</h2>
                    <p className="text-gray-600">
                    We use <a href="https://simpleanalytics.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Simple Analytics</a> to understand general website usage — like how many people visit — without tracking individuals or using cookies.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Game Data Storage</h2>
                    <p className="text-gray-600">
                    Your in-game actions (rock, paper, or scissors) and your anonymous player ID are saved securely in our database. This is used only for gameplay purposes and cannot be used to identify you.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Local Storage</h2>
                    <p className="text-gray-600">
                    Most of your game data stays on your device using local storage. This helps the game run smoothly and privately.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Your Anonymity is Safe</h2>
                    <p className="text-gray-600">
                    We don&apos;t use cookies, track you across the web, or build user profiles. You can enjoy the game completely anonymously.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Privacy;
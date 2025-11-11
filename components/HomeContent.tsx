import MainCTA from "./MainCTA";

const HomeContent = () => {
    return (
   <div className="my-8 space-y-10">
        <div className="text-center">
            <h2 className="text-lg font-bold mb-2">🚀 RPS Online: Instant Play</h2>
            <p>The fastest way to play and decide. <span className="font-bold">No sign-up required.</span></p>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-1">How to Play Online</h2>
            
            <div className="space-y-4 bg-white p-4 rounded-lg shadow">
                <div className="flex items-start">
                    <span className="mr-3">1.</span>
                    <div>
                        <h3 className="font-semibold">Create a Room</h3>
                        <p>Click &quot;Create a Game&quot; to get your private link. <span className="underline">You control the match</span>.</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <span className="mr-3">2.</span>
                    <div>
                        <h3 className="font-semibold">Share the Link</h3>
                        <p>Send the link to your friend. <span className="underline">They join instantly</span> on any device.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="mr-3">3.</span>
                    <div>
                        <h3 className="font-semibold">Choose Your Move</h3>
                        <p>Select Rock, Paper, or Scissors. The result is immediate.</p>
                    </div>
                </div>
            </div>

            <blockquote className="mt-4 p-3 bg-indigo-100 border-l-4 border-blue-600 rounded">
                <p className="text-sm font-medium">
                    <span className="font-bold">Rules:</span> Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Tie means play again.
                </p>
            </blockquote>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-1">Strategy & Benefits</h2>

            <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-3">How to Win More</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Counter the pattern:</span> If they repeat a move, switch to the counter move.</li>
                        <li><span className="font-semibold">Exploit the start:</span> Many players open with Rock. Start with Paper to gain the edge.</li>
                        <li><span className="font-semibold">Stay random:</span> Avoid predictable sequences; mix up your choices.</li>
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-3">Why Play Here?</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Zero Friction:</span> 100% free, no accounts, no downloads.</li>
                        <li><span className="font-semibold">Decide Fairly:</span> Use it to settle debates (Who pays? Who goes first?).</li>
                        <li><span className="font-semibold">Anywhere:</span> Works on mobile, tablet, or desktop.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center">
            <p className="font-medium mb-4">
                Test your skills against friends or our computer opponent.
            </p>
            <MainCTA/>
        </div>
    </div>



     );
}
 
export default HomeContent;
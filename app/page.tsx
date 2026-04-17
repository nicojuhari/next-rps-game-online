import Link from "next/link";
import MainCTA from "@/components/MainCTA";
import HomeContent from "@/components/HomeContent";
import OnePlayer from "@/components/OnePlayer";

const Home = () => {
    return (
        <>
            <div className="pt-10 pb-6 text-center space-y-3">
                <h1 className="font-bold leading-tight">
                    <span className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-2">Play Online</span>
                    <span className="text-blue-500 text-4xl md:text-5xl">Rock </span>
                    <span className="text-yellow-500 text-4xl md:text-5xl">Paper </span>
                    <span className="text-red-500 text-4xl md:text-5xl">Scissors</span>
                </h1>
                <p className="text-gray-500 text-sm font-light">
                    Play against the computer or challenge a friend - free, instant, no signup.
                </p>
            </div>

            <OnePlayer />

            <div className="flex items-center gap-3 my-10">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">or play with a friend</span>
                <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <MainCTA />
            <HomeContent />

            <p className="text-sm text-center text-gray-400 mb-8">
                Read our{" "}
                <Link href="/privacy" className="text-blue-500 underline underline-offset-2" title="privacy policy">
                    Privacy Policy
                </Link>{" "}
                to learn how we protect your data.
            </p>
        </>
    );
};

export default Home;

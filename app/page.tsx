import Link from "next/link";
import MainCTA from "@/components/MainCTA";
import HomeContent from "@/components/HomeContent";
import OnePlayer from "@/components/OnePlayer";

const Home = () => {
    return (
        <>
            <div className="my-16 md:my-20 space-y-14 text-center">
                <h1 className="font-bold text-3xl md:text-4xl">
                    <span className="block mb-2.5 text-3xl">Play </span>
                    <span className="text-blue-500">Rock </span>
                    <span className="text-yellow-500">Paper </span>
                    <span className="text-red-500">Scissors </span>
                    <span className="block mt-3 text-3xl">Online</span>
                </h1>
                <p className="text-center text-gray-600 font-light">
                    Challenge Friends or Beat the Computer. <br />
                    100% Free and No Signup.
                </p>
            </div>
            <OnePlayer />
            <MainCTA />
            <HomeContent />
            <p className="text-sm text-center text-gray-500 mb-6">
                Read our{" "}
                <Link href="/privacy" className="text-blue-600 underline" title="privacy policy">
                    Privacy Policy
                </Link>{" "}
                to learn how we protect your data.
            </p>
        </>
    );
};

export default Home;

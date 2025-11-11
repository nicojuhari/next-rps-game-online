import Link from 'next/link';
import MainCTA from '@/components/MainCTA';
import HomeContent from '@/components/HomeContent';

const Home = () => {
  return (
    <>
    <div className="my-20 md:my-24 space-y-14 text-center">
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className="block mb-2.5 font-bold text-3xl">Play </span>
        <span className="text-blue-500">Rock </span>
        <span className="text-yellow-500">Paper </span>
        <span className="text-red-500">Scissors </span>
        <span className="block mt-2.5 text-3xl">Online</span>
      </h1>
      <p className="text-center text-gray-500">
          Rock Paper Scissors is a FREE online game.<br /> Create a game and play with friends or challenge the computer anytime!
      </p>
    </div>
    <MainCTA />
    <HomeContent/>
    <p className="text-sm text-center text-gray-500 mb-6">
        Read our <Link href="/privacy" className="text-blue-600 underline" title="privacy policy">
          Privacy Policy 
        </Link> to learn how we protect your data.
      </p>
    </>
  );
}
 
export default Home;
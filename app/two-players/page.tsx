import { Suspense } from 'react';
import TwoPlayersContent from '@/components/TwoPlayersContent';
import Image from 'next/image';

const TwoPlayers = () => {
    return (
        <Suspense fallback={
            <div className="container py-8">
                <h1 className="text-xl font-bold mb-4 text-center">Rock Paper Scissors - 2 Players Game</h1>
                <div className="flex justify-center">
                   <Image src="/loading.svg" loading='eager' alt="Loading" width={40} height={40} className="mx-auto my-24" />
                </div>
            </div>
        }>
            <TwoPlayersContent />
        </Suspense>
    );
}
 
export default TwoPlayers;

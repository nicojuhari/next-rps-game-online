"use client";

import Link from 'next/link';
import { GameControllerIcon, UsersIcon } from '@phosphor-icons/react';

const MainCTA = () => {
    return ( <div className="mb-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div className="bg-white p-6 rounded-lg border border-primary/30">
          <p className="font-medium text-lg">1 Player</p>
          <Link 
            href="/one-player" 
            title="Play Rock Paper Scissors Online with a computer" 
            className="justify-center mt-6 w-full bg-blue-500 hover:bg-blue-600 h-10 text-white py-1 px-4 rounded-md inline-flex items-center gap-2.5">
              <GameControllerIcon weight="duotone" size={24} color="white"/>
              Play Now</Link>
        </div>
        <div className="bg-white p-6 rounded-lg border border-secondary/30">
          <p className="font-bold text-lg">2 Players</p>
          <Link href="/two-players" title="Create a 2-player game" className="justify-center mt-6 w-full bg-green-500 hover:bg-green-600 h-10 text-white py-1 px-4 rounded-md inline-flex items-center gap-2.5">
            <UsersIcon weight="duotone" size={24} color="white"/>
            Create a Game</Link>
        </div>
      </div>
    </div> );
}
 
export default MainCTA;
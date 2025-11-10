// Example usage file - you can delete this later
'use client';

import { useFirebase } from '@/contexts/FirebaseContext';
import { useState } from 'react';

const ExampleGameComponent = () => {
  const {
    gameData,
    createGame,
    joinGame,
    subscribeToGame,
    updateGameChoices,
    resetGame,
    deleteGame
  } = useFirebase();
  
  const [playerName, setPlayerName] = useState('');
  const [gameId, setGameId] = useState('');

  const handleCreateGame = async () => {
    try {
      const newGameId = await createGame(playerName);
      setGameId(newGameId);
      subscribeToGame(newGameId);
    } catch (error) {
      console.error('Failed to create game:', error);
    }
  };

  const handleJoinGame = async () => {
    try {
      await joinGame(gameId, playerName);
      subscribeToGame(gameId);
    } catch (error) {
      console.error('Failed to join game:', error);
    }
  };

  const handleMakeChoice = async (choice: number) => {
    if (!gameData) return;
    
    const isPlayer1 = gameData.player1 === playerName;
    const player = isPlayer1 ? 'player1' : 'player2';
    
    await updateGameChoices(gameData.$id, player, choice);
  };

  return (
    <div>
      <h2>Firebase Game Example</h2>
      
      <input 
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Your name"
      />
      
      <button onClick={handleCreateGame}>Create Game</button>
      
      <input 
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
        placeholder="Game ID to join"
      />
      
      <button onClick={handleJoinGame}>Join Game</button>

      {gameData && (
        <div>
          <h3>Current Game</h3>
          <p>Player 1: {gameData.player1}</p>
          <p>Player 2: {gameData.player2}</p>
          <p>Game ID: {gameData.$id}</p>
          
          <div>
            <button onClick={() => handleMakeChoice(1)}>Rock</button>
            <button onClick={() => handleMakeChoice(2)}>Paper</button>
            <button onClick={() => handleMakeChoice(3)}>Scissors</button>
          </div>
          
          <button onClick={() => resetGame(gameData.$id)}>Reset Game</button>
          <button onClick={() => deleteGame(gameData.$id)}>Delete Game</button>
        </div>
      )}
    </div>
  );
};

export default ExampleGameComponent;
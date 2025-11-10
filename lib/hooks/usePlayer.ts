'use client';

import { useState, useEffect } from 'react';

export const usePlayer = () => {
  const [playerId, setPlayerId] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This only runs on client-side, preventing hydration mismatch
    const initializePlayerId = () => {
      // Check if we are in browser
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Get existing player ID
        const existingId = localStorage.getItem('rps-player-id') || '';
        
        if (existingId) {
          setPlayerId(existingId);
        } else {
          // Create new player ID if not exist
          const head = Date.now().toString(36);
          const tail = Math.random().toString(36).substring(2);
          const newUserId = head + tail;
          localStorage.setItem('rps-player-id', newUserId);
          setPlayerId(newUserId);
        }
      }
      setIsLoaded(true);
    };

    initializePlayerId();
  }, []);

  const createPlayerId = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    const newUserId = head + tail;
    
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('rps-player-id', newUserId);
    }
    
    setPlayerId(newUserId);
  };

  return {
    playerId,
    createPlayerId,
    isLoaded, // You can use this to show loading state if needed
  };
};
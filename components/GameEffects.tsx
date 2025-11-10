"use client"

import confetti from "canvas-confetti"
import { useEffect, useRef } from "react"

const GameEffects = () => {

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const setupAudio = async () => {
        audioRef.current = new Audio('/cheer.mp3')
    }

    const playVictorySound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0 // Reset the audio to the beginning
            audioRef.current.play()
        }
    }
  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  useEffect(() => {
    console.log('GameEffects mounted - triggering confetti');
    setupAudio().then(() => {
        playVictorySound();
    });
    triggerConfetti();
  });

  return null; // No DOM element needed for canvas-confetti
}
 
export default GameEffects;
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Rock Paper Scissors Online** — a Next.js 16 App Router app with single-player (vs computer) and multiplayer (real-time) modes.

### Tech Stack
- **Next.js 16** with App Router, TypeScript, React Compiler enabled (`reactCompiler: true`)
- **Firebase Firestore** for real-time multiplayer state (no auth)
- **Tailwind CSS v4** via `@tailwindcss/postcss` (not the traditional config file)
- Firebase config is hardcoded in `lib/firebase.ts` (intentional — public project)

### Key Directories
- `app/` — pages: `/` (1-player), `/two-players` (multiplayer), `/privacy`
- `components/` — UI components
- `contexts/FirebaseContext.tsx` — all Firestore operations (joinGame, subscribeToGame, updateGameChoices, updateGameWinner, resetGame, deleteGame)
- `lib/game-utils.ts` — core game logic (`compareChoices`, `getGameWinner`)
- `lib/hooks/` — `usePlayer` (localStorage-based anonymous ID), `useGame` (detects finished state), `useFirebase` (createGame)
- `types.ts` — central `Game` type definition

### Multiplayer Data Flow
1. Player 1 calls `createGame()` → new Firestore doc created
2. Player 2 joins via URL `?gameId=<id>` → `joinGame()` adds player, status → `"ready"`
3. Players pick moves → `updateGameChoices()` appends to `choices[]` array (max 3)
4. `useGame` hook detects all 3 choices submitted by both players → `isGameFinished = true`
5. `getGameWinner()` tallies rounds (best-of-3) → `updateGameWinner()` increments wins, status → `"finished"`
6. Reset → `resetGame()` clears choices, status → `"ready"`

### Firestore Game Document Shape
```typescript
{
  $id: string                          // document ID (game room)
  players: {
    [uid: string]: {
      name: string
      choices: number[]                // 1=rock, 2=paper, 3=scissors
      wins: number
    }
  }
  status: "waiting" | "ready" | "finished"
  lastWinner?: string                  // player UID or "draw"
  maxPlayers: 2
}
```

### Non-Obvious Patterns
- **Anonymous player IDs**: `usePlayer` generates IDs client-side via localStorage; uses `queueMicrotask` + `isLoaded` flag to avoid hydration mismatches
- **Real-time sync**: `FirebaseContext` uses `onSnapshot`; unsubscribe function stored in `useRef` to prevent duplicate listeners on remount
- **Game deletion**: if the Firestore doc disappears, the `onSnapshot` error handler redirects to `/`
- **Single-player persistence**: scores stored only in localStorage keys `rps_userWins` / `rps_computerWins`
- **Draw edge case**: if all 3 moves are rock+paper+scissors (one each), `getGameWinner()` returns `"draw"`
- **URL redirects** in `next.config.ts`: `www` → non-www, `/1-player` → `/`, `/2-player` → `/two-players`

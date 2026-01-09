# Copilot Instructions for next-rps-game-online

## Project Overview

-   This is a Next.js app (TypeScript, App Router) for an online Rock-Paper-Scissors game.
-   Main app code is in the `app/` directory, with subfolders for different game modes (e.g., `one-player/`, `two-players/`).
-   Shared UI and logic are in `components/`, `contexts/`, and `lib/`.

## Key Architectural Patterns

-   **Game Logic**: Core utilities in `lib/game-utils.ts`.
-   **Firebase Integration**: All Firebase logic is in `lib/firebase.ts` and `contexts/FirebaseContext.tsx`. Use the `useFirebase` and `useGame` hooks from `lib/hooks/` for accessing game state and Firebase.
-   **State Management**: Context API is used for global state (see `contexts/`).
-   **UI**: Components are colocated in `components/`. Pages use these for layout and game flow.
-   **Routing**: Next.js App Router structure. Each folder in `app/` is a route. Layouts are in `layout.tsx` files.

## Developer Workflows

-   **Start Dev Server**: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
-   **Edit Main Page**: `app/page.tsx` (auto-reloads)
-   **Build for Production**: `npm run build`
-   **No custom test scripts**: (add if needed)

## Project Conventions

-   **TypeScript**: All code is TypeScript-first.
-   **Component Naming**: PascalCase for React components.
-   **Hooks**: Custom hooks in `lib/hooks/` are prefixed with `use`.
-   **Game Modes**: Each mode (one-player, two-players) has its own route and layout.
-   **No Redux/MobX**: Only Context API and hooks for state.

## Integration Points

-   **Firebase**: All backend/game state is via Firebase. Do not add other backends.
-   **Vercel**: Designed for Vercel deployment (see `next.config.ts`).

## Examples

-   To add a new game mode: create a new folder in `app/`, add `layout.tsx` and `page.tsx`, and use shared components/hooks.
-   To update game logic: edit `lib/game-utils.ts` and ensure hooks/components use the new logic.

## References

-   Main entry: `app/page.tsx`
-   Game logic: `lib/game-utils.ts`
-   Firebase: `lib/firebase.ts`, `contexts/FirebaseContext.tsx`, `lib/hooks/useFirebase.ts`, `lib/hooks/useGame.ts`
-   UI: `components/`

---

For more, see the [README.md](../README.md) and Next.js docs.

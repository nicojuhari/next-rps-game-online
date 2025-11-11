import type { Metadata } from "next";

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://rps-game.online'),
  keywords: ["rock paper scissors", "online game", "multiplayer", "free game", "rps"],
  authors: [{ name: "Rock Paper Scissors Online" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rock Paper Scissors Online',
    images: [
      {
        url: 'https://rps-game.online/og_rps.jpg',
        width: 1200,
        height: 630,
        alt: 'Rock Paper Scissors Online Game',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// Helper function to merge metadata
export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides.twitter,
    },
  };
}
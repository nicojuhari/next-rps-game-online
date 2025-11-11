import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Single Player vs Computer - Rock Paper Scissors Online",
  description: "Challenge our smart Computer in Rock Paper Scissors! Test your strategy and luck against our computer opponent. Free single-player RPS game.",
  canonical: "/one-player",
  keywords: ["rock paper scissors computer", "single player", "computer opponent", "RPS vs computer", "strategy game"],
  openGraph: {
    title: "Single Player vs Computer - Rock Paper Scissors Online",
    description: "Challenge our smart Computer in Rock Paper Scissors! Test your strategy and luck against our computer opponent.",
  },
  twitter: {
    title: "Single Player vs Computer - Rock Paper Scissors",
    description: "Challenge our smart Computer in Rock Paper Scissors! Test your strategy and luck.",
  },
});

export default function OnePlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
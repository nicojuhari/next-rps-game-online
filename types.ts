// Firebase-compatible types (no Appwrite dependencies)
export type Game = {
  $id: string,
  player1: string,
  player2: string | null,
  player1Choices: number[],
  player2Choices: number[],
  createdAt?: Date | { seconds: number; nanoseconds: number }, // Firebase Timestamp
  updatedAt?: Date | { seconds: number; nanoseconds: number }, // Firebase Timestamp
}

export type SingleGame = {
  player1: string,
  player2: string,
  player1Choices: number[],
  player2Choices: number[],
}
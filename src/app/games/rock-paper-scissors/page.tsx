"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

type Choice = 'rock' | 'paper' | 'scissors';

const choices: Choice[] = ['rock', 'paper', 'scissors'];

const getRandomChoice = (): Choice => choices[Math.floor(Math.random() * choices.length)];

const getWinner = (player: Choice, computer: Choice): string => {
  if (player === computer) return "It's a tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  }
  return 'Computer wins!';
};

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>('');

  const play = (choice: Choice) => {
    const compChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResult(getWinner(choice, compChoice));
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Rock Paper Scissors</h1>

        <div className="flex justify-center space-x-4 mb-8">
          {choices.map((choice) => (
            <Button
              key={choice}
              onClick={() => play(choice)}
              className="capitalize"
            >
              {choice}
            </Button>
          ))}
        </div>

        {playerChoice && computerChoice && (
          <div className="text-center space-y-4">
            <div className="text-xl">
              You chose: <span className="font-semibold capitalize">{playerChoice}</span>
            </div>
            <div className="text-xl">
              Computer chose: <span className="font-semibold capitalize">{computerChoice}</span>
            </div>
            <div className="text-2xl font-bold">{result}</div>
            <Button
              onClick={reset}
              className="bg-muted text-muted-foreground hover:bg-muted/80"
            >
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
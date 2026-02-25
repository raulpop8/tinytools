"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);

  const makeGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a number between 1 and 100');
      return;
    }

    setAttempts(prev => prev + 1);

    if (numGuess === targetNumber) {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (numGuess < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Number Guessing Game</h1>

        <div className="text-center space-y-4">
          <div className="text-xl">{message}</div>
          <div className="text-lg">Attempts: {attempts}</div>

          <div className="flex space-x-2">
            <Input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess"
              min="1"
              max="100"
            />
            <Button onClick={makeGuess}>Guess</Button>
          </div>

          <Button onClick={resetGame} className="bg-muted text-muted-foreground hover:bg-muted/80">
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
}
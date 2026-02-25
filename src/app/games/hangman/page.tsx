"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const words = ['javascript', 'react', 'computer', 'algorithm', 'database', 'network', 'security', 'interface', 'function', 'variable'];

export default function Hangman() {
  const [word, setWord] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  const guessLetter = (letter: string) => {
    if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    if (!word.includes(letter)) {
      const newWrong = wrongGuesses + 1;
      setWrongGuesses(newWrong);
      if (newWrong >= 6) {
        setGameStatus('lost');
      }
    } else {
      // Check if won
      const isWon = word.split('').every(char => newGuessed.has(char));
      if (isWon) {
        setGameStatus('won');
      }
    }
  };

  const displayWord = word.split('').map(letter =>
    guessedLetters.has(letter) ? letter : '_'
  ).join(' ');

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Hangman</h1>

        <div className="text-center space-y-4 mb-8">
          <div className="text-3xl font-mono">{displayWord}</div>
          <div>Wrong guesses: {wrongGuesses}/6</div>
          {gameStatus === 'won' && <div className="text-green-500 font-bold">You won!</div>}
          {gameStatus === 'lost' && <div className="text-red-500 font-bold">You lost! Word: {word}</div>}
        </div>

        <div className="grid grid-cols-6 gap-2 mb-8">
          {alphabet.map(letter => (
            <Button
              key={letter}
              onClick={() => guessLetter(letter)}
              disabled={guessedLetters.has(letter) || gameStatus !== 'playing'}
              className={`w-full ${guessedLetters.has(letter) ? 'bg-muted' : ''}`}
            >
              {letter.toUpperCase()}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={startNewGame}>New Game</Button>
        </div>
      </div>
    </div>
  );
}
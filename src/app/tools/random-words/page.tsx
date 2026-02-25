"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const words = [
  'apple', 'banana', 'cherry', 'dog', 'elephant', 'flower', 'guitar', 'house', 'ice', 'jungle',
  'kite', 'lemon', 'mountain', 'notebook', 'ocean', 'piano', 'queen', 'river', 'sun', 'tree',
  'umbrella', 'violin', 'whale', 'xylophone', 'yellow', 'zebra'
];

export default function RandomWords() {
  const [currentWord, setCurrentWord] = useState<string>('');

  const generateWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Random Words</h1>

        <div className="text-center">
          <Button onClick={generateWord} className="mb-8">
            Generate Random Word
          </Button>

          {currentWord && (
            <div className="text-6xl font-bold">
              {currentWord}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
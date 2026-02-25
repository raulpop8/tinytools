"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function CoinFlip() {
  const [result, setResult] = useState<string>('');
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setResult('');

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Coin Flip</h1>

        <div className="mb-8">
          <div className="text-6xl mb-4">
            {isFlipping ? '🪙' : result ? (result === 'Heads' ? '🪙' : '🪙') : '🪙'}
          </div>
          {result && <div className="text-2xl font-bold">{result}</div>}
        </div>

        <Button onClick={flipCoin} disabled={isFlipping}>
          {isFlipping ? 'Flipping...' : 'Flip Coin'}
        </Button>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function DiceRoller() {
  const [result, setResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setResult(null);

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setResult(roll);
      setIsRolling(false);
    }, 1000);
  };

  const getDiceEmoji = (num: number | null) => {
    if (num === null) return '🎲';
    const emojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return emojis[num - 1];
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Dice Roller</h1>

        <div className="mb-8">
          <div className="text-6xl mb-4">
            {isRolling ? '🎲' : getDiceEmoji(result)}
          </div>
          {result && <div className="text-2xl font-bold">You rolled: {result}</div>}
        </div>

        <Button onClick={rollDice} disabled={isRolling}>
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
      </div>
    </div>
  );
}
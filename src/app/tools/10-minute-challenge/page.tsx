"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const challenges = [
  "Organize your desk drawers",
  "Do 10 push-ups or sit-ups",
  "Water all your houseplants",
  "Fold and put away laundry",
  "Clean your bathroom mirror",
  "Sort through old emails",
  "Meditate for 10 minutes",
  "Write a gratitude list",
  "Dust one room",
  "Practice a musical instrument",
  "Read 10 pages of a book",
  "Stretch your body",
  "Clean out your fridge",
  "Journal about your day",
  "Do a quick yoga routine",
  "Organize your bookshelf",
  "Call a family member",
  "Learn 5 new words",
  "Draw a quick sketch",
  "Vacuum one area",
  "Plan tomorrow's meals",
  "Do breathing exercises",
  "Sort recycling",
  "Write a short poem",
  "Clean your keyboard"
];

export default function TenMinuteChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState<string>('');

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setCurrentChallenge(challenges[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">10-Minute Challenge</h1>

        <div className="text-center">
          <Button onClick={generateChallenge} className="mb-8">
            Generate Challenge
          </Button>

          {currentChallenge && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentChallenge}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
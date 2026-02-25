"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const recommendations = [
  "The Shawshank Redemption (Movie)",
  "Breaking Bad (TV Show)",
  "Inception (Movie)",
  "Stranger Things (TV Show)",
  "The Godfather (Movie)",
  "Game of Thrones (TV Show)",
  "Pulp Fiction (Movie)",
  "The Mandalorian (TV Show)",
  "Forrest Gump (Movie)",
  "The Office (TV Show)",
  "The Dark Knight (Movie)",
  "Friends (TV Show)",
  "Schindler's List (Movie)",
  "Black Mirror (TV Show)",
  "Fight Club (Movie)",
  "The Crown (TV Show)",
  "The Matrix (Movie)",
  "Westworld (TV Show)",
  "Goodfellas (Movie)",
  "Ted Lasso (TV Show)",
  "Interstellar (Movie)",
  "The Witcher (TV Show)",
  "Parasite (Movie)",
  "Succession (TV Show)",
  "Spirited Away (Movie)"
];

export default function WhatToWatchToday() {
  const [currentRecommendation, setCurrentRecommendation] = useState<string>('');

  const generateRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    setCurrentRecommendation(recommendations[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">What To Watch Today?</h1>

        <div className="text-center">
          <Button onClick={generateRecommendation} className="mb-8">
            Generate Recommendation
          </Button>

          {currentRecommendation && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentRecommendation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
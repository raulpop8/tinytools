"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const outfits = [
  "Casual jeans and a t-shirt",
  "Business casual blazer and slacks",
  "Cozy sweater and leggings",
  "Summer dress with sandals",
  "Athletic wear for a workout",
  "Formal suit and tie",
  "Bohemian maxi dress",
  "Punk rock leather jacket",
  "Beach shorts and a tank top",
  "Winter coat and boots",
  "Vintage-inspired blouse",
  "Minimalist black outfit",
  "Colorful patterned shirt",
  "Layered cardigans",
  "High-fashion runway look",
  "Comfortable pajamas",
  "Retro 80s style",
  "Elegant evening gown",
  "Sporty sneakers and hoodie",
  "Traditional cultural attire",
  "Accessories-heavy ensemble",
  "Monochrome all-black",
  "Floral print dress",
  "Denim on denim",
  "Sparkly sequin top"
];

export default function WhatShouldIWearToday() {
  const [currentOutfit, setCurrentOutfit] = useState<string>('');

  const generateOutfit = () => {
    const randomIndex = Math.floor(Math.random() * outfits.length);
    setCurrentOutfit(outfits[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">What Should I Wear Today?</h1>

        <div className="text-center">
          <Button onClick={generateOutfit} className="mb-8">
            Generate Outfit
          </Button>

          {currentOutfit && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentOutfit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const meals = [
  "Homemade pizza",
  "Sushi rolls",
  "Grilled cheese sandwich",
  "Chicken stir-fry",
  "Pasta carbonara",
  "Vegetable curry",
  "Tacos with fresh salsa",
  "Salmon with roasted vegetables",
  "Burger and fries",
  "Quinoa salad",
  "Pad Thai noodles",
  "Beef stew",
  "Caprese salad",
  "Shakshuka",
  "Falafel wrap",
  "Risotto",
  "Chicken fajitas",
  "Lentil soup",
  "Eggplant parmesan",
  "Fish and chips",
  "Bibimbap",
  "Caesar salad",
  "Lamb chops",
  "Veggie burger",
  "Pancakes for dinner"
];

export default function WhatShouldIEatToday() {
  const [currentMeal, setCurrentMeal] = useState<string>('');

  const generateMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    setCurrentMeal(meals[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">What Should I Eat Today?</h1>

        <div className="text-center">
          <Button onClick={generateMeal} className="mb-8">
            Generate Meal
          </Button>

          {currentMeal && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentMeal}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const recipes = [
  "Pasta Carbonara: Cook pasta, mix with eggs, cheese, and pancetta.",
  "Chicken Stir-Fry: Stir-fry chicken with vegetables and soy sauce.",
  "Vegetable Curry: Simmer veggies in coconut milk with curry spices.",
  "Grilled Cheese: Melt cheese between bread slices in a pan.",
  "Salad Bowl: Mix greens, tomatoes, cucumbers, and vinaigrette.",
  "Omelette: Whisk eggs, add fillings, cook in a pan.",
  "Tacos: Fill tortillas with meat, beans, salsa, and cheese.",
  "Soup: Boil broth with vegetables and herbs.",
  "Pizza: Top dough with sauce, cheese, and toppings, bake.",
  "Smoothie: Blend fruits, yogurt, and milk.",
  "Burger: Grill patty with buns, lettuce, and tomato.",
  "Risotto: Stir rice with broth until creamy.",
  "Quiche: Bake eggs and fillings in a pastry crust.",
  "Stir-Fried Noodles: Cook noodles with veggies and sauce.",
  "Roast Chicken: Season and bake chicken with potatoes.",
  "Pancakes: Mix batter, cook on griddle, top with syrup.",
  "Lasagna: Layer pasta, meat sauce, and cheese, bake.",
  "Sushi Rolls: Roll rice and fillings in seaweed.",
  "Chili: Simmer beans, meat, and spices.",
  "Frittata: Bake eggs with veggies and cheese."
];

export default function RandomRecipeGenerator() {
  const [currentRecipe, setCurrentRecipe] = useState<string>('');

  const generateRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setCurrentRecipe(recipes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Random Recipe Generator</h1>

        <div className="text-center">
          <Button onClick={generateRecipe} className="mb-8">
            Generate Recipe
          </Button>

          {currentRecipe && (
            <div className="text-xl font-semibold leading-relaxed">
              {currentRecipe}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
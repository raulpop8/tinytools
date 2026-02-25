"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const prompts = [
  "Write about a character who discovers they can time travel, but only backwards.",
  "A world where emotions are currency. How does your protagonist pay for a meal?",
  "An alien crash-lands in your backyard. What happens next?",
  "You wake up with the ability to speak to animals. What do they tell you?",
  "A detective investigates a crime that only happens in dreams.",
  "Rewrite a fairy tale from the villain's perspective.",
  "A city where buildings grow like plants. What does your home look like?",
  "You find a door that leads to parallel universes. Which one do you choose?",
  "A society where memories can be bought and sold.",
  "Write about a day in the life of a sentient cloud.",
  "A robot falls in love with a human. How does it cope?",
  "You inherit a magical library that writes books about the future.",
  "A world without color. How do people describe beauty?",
  "An inventor creates a machine that reads thoughts. Chaos ensues.",
  "Write about a ghost who haunts a coffee shop.",
  "A pirate captain sails through time instead of oceans.",
  "You discover your shadow has a mind of its own.",
  "A kingdom ruled by children. What laws do they make?",
  "An artist paints pictures that come to life at night.",
  "Write about a conversation between the moon and the sun."
];

export default function StoryPromptGenerator() {
  const [currentPrompt, setCurrentPrompt] = useState<string>('');

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Story Prompt Generator</h1>

        <div className="text-center">
          <Button onClick={generatePrompt} className="mb-8">
            Generate Prompt
          </Button>

          {currentPrompt && (
            <div className="text-xl font-semibold leading-relaxed">
              {currentPrompt}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
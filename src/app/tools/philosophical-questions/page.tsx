"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const questions = [
  "What is the meaning of life?",
  "Is there a purpose to our existence?",
  "What is consciousness?",
  "Do we have free will?",
  "What is reality?",
  "Is there life after death?",
  "What makes a life worth living?",
  "Are humans inherently good or evil?",
  "What is the nature of time?",
  "Can we ever truly know anything?",
  "What is happiness?",
  "Is morality relative or absolute?",
  "What is the self?",
  "Do our choices matter?",
  "What is justice?",
  "Is knowledge power?",
  "What is beauty?",
  "Can machines think?",
  "What is love?",
  "Is there such a thing as fate?",
  "What is the difference between right and wrong?",
  "Are we alone in the universe?",
  "What is the value of art?",
  "Can we change the future?",
  "What is truth?",
  "Is suffering necessary?",
  "What is freedom?",
  "Do we create our own reality?",
  "What is the soul?",
  "Is there a God?"
];

export default function PhilosophicalQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('');

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Philosophical Questions</h1>

        <div className="text-center">
          <Button onClick={generateQuestion} className="mb-8">
            Generate Question
          </Button>

          {currentQuestion && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentQuestion}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
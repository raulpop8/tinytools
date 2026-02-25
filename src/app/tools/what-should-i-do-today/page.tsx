"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

const activities = [
  "Go for a walk in the park",
  "Read a book",
  "Call a friend",
  "Try a new recipe",
  "Watch a documentary",
  "Do some yoga",
  "Write in a journal",
  "Learn a new skill online",
  "Organize your closet",
  "Visit a museum",
  "Play a musical instrument",
  "Meditate for 10 minutes",
  "Draw or paint something",
  "Volunteer for a cause",
  "Explore a new neighborhood",
  "Listen to a podcast",
  "Do a puzzle",
  "Cook breakfast for someone",
  "Take photos of nature",
  "Write a letter to a loved one",
  "Practice a hobby",
  "Go stargazing",
  "Try a new workout",
  "Bake cookies",
  "Read poetry",
  "Visit an art gallery"
];

export default function WhatShouldIDoToday() {
  const [currentActivity, setCurrentActivity] = useState<string>('');

  const generateActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setCurrentActivity(activities[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">What Should I Do Today?</h1>

        <div className="text-center">
          <Button onClick={generateActivity} className="mb-8">
            Generate Activity
          </Button>

          {currentActivity && (
            <div className="text-2xl font-semibold leading-relaxed">
              {currentActivity}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
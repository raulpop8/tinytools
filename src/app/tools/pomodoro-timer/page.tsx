"use client";

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (!isBreak) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsBreak(true);
        setTimeLeft(5 * 60); // 5 minute break
      } else {
        setIsBreak(false);
        setTimeLeft(25 * 60); // Back to work
      }
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isBreak]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>

        <div className="text-6xl font-bold mb-4">{formatTime(timeLeft)}</div>
        <div className="text-lg mb-8">{isBreak ? 'Break Time' : 'Work Time'}</div>

        <div className="flex justify-center space-x-4">
          {!isRunning ? (
            <Button onClick={startTimer}>Start</Button>
          ) : (
            <Button onClick={pauseTimer}>Pause</Button>
          )}
          <Button onClick={resetTimer} className="bg-muted text-muted-foreground hover:bg-muted/80">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
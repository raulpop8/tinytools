"use client";

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

export default function IdleClicker() {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const [continuousTime, setContinuousTime] = useState(0);
  const [bonusMessage, setBonusMessage] = useState('');

  const lastClickTime = useRef(0);
  const clickTimes = useRef<number[]>([]);
  const continuousStart = useRef<number | null>(null);

  useEffect(() => {
    lastClickTime.current = Date.now();
  }, []);

  useEffect(() => {
    // Auto-increment score (idle part)
    const idleInterval = setInterval(() => {
      setScore(prev => prev + multiplier);
    }, 1000);

    return () => clearInterval(idleInterval);
  }, [multiplier]);

  useEffect(() => {
    // Calculate clicks per second
    const interval = setInterval(() => {
      const now = Date.now();
      const recentClicks = clickTimes.current.filter(time => now - time < 1000);
      clickTimes.current = recentClicks;
      setClicksPerSecond(recentClicks.length);

      // Update multiplier based on speed
      if (recentClicks.length >= 5) {
        setMultiplier(2);
      } else if (recentClicks.length >= 3) {
        setMultiplier(1.5);
      } else {
        setMultiplier(1);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const now = Date.now();
    const timeSinceLast = now - lastClickTime.current;

    // Track clicks for CPS
    clickTimes.current.push(now);
    if (clickTimes.current.length > 10) {
      clickTimes.current.shift();
    }

    // Continuous clicking
    if (timeSinceLast < 1000) { // Within 1 second
      if (continuousStart.current === null) {
        continuousStart.current = now;
      }
      const contTime = Math.floor((now - continuousStart.current) / 1000);
      setContinuousTime(contTime);

      // Bonuses
      if (contTime === 5 && !bonusMessage.includes('5s')) {
        setScore(prev => prev + 50);
        setBonusMessage('Bonus: +50 for 5s continuous!');
        setTimeout(() => setBonusMessage(''), 2000);
      } else if (contTime === 10 && !bonusMessage.includes('10s')) {
        setScore(prev => prev + 100);
        setBonusMessage('Bonus: +100 for 10s continuous!');
        setTimeout(() => setBonusMessage(''), 2000);
      } else if (contTime === 15 && !bonusMessage.includes('15s')) {
        setScore(prev => prev + 200);
        setBonusMessage('Bonus: +200 for 15s continuous!');
        setTimeout(() => setBonusMessage(''), 2000);
      }
    } else {
      continuousStart.current = null;
      setContinuousTime(0);
    }

    lastClickTime.current = now;
    setScore(prev => prev + multiplier);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Idle Clicker</h1>

        <div className="mb-8">
          <div className="text-6xl font-bold mb-4">{Math.floor(score)}</div>
          <div className="text-lg">Score</div>
        </div>

        <div className="mb-8">
          <Button onClick={handleClick} className="text-2xl px-8 py-4">
            Click Me!
          </Button>
        </div>

        <div className="space-y-2 text-sm">
          <div>Multiplier: {multiplier}x</div>
          <div>Clicks/sec: {clicksPerSecond}</div>
          <div>Continuous: {continuousTime}s</div>
          {bonusMessage && (
            <div className="text-green-500 font-semibold">{bonusMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
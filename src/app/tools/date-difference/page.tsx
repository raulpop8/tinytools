"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function DateDifference() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState<string>('');

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setDifference('Please select both dates.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      setDifference('Start date must be before end date.');
      return;
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;

    let result = '';
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
    if (months > 0) result += `${months} month${months > 1 ? 's' : ''} `;
    if (days > 0) result += `${days} day${days > 1 ? 's' : ''} `;
    if (result === '') result = '0 days';

    setDifference(`Difference: ${result.trim()}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Date Difference</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">End Date</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <Button onClick={calculateDifference} className="w-full">
            Calculate Difference
          </Button>

          {difference && (
            <div className="text-center text-xl font-semibold mt-4">
              {difference}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
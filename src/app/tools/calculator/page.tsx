"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const inputNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const inputOperation = (op: string) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(display));
      setDisplay('0');
    } else if (operation) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }
    setOperation(op);
  };

  const calculate = (first: number, second: number, op: string) => {
    switch (op) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return second !== 0 ? first / second : 0;
      default: return second;
    }
  };

  const calculateResult = () => {
    if (previousValue !== null && operation) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Calculator</h1>

        <div className="bg-card border border-border rounded-lg p-4 mb-4">
          <div className="text-right text-2xl font-mono">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Button onClick={() => inputNumber('7')}>7</Button>
          <Button onClick={() => inputNumber('8')}>8</Button>
          <Button onClick={() => inputNumber('9')}>9</Button>
          <Button onClick={() => inputOperation('/')}>/</Button>

          <Button onClick={() => inputNumber('4')}>4</Button>
          <Button onClick={() => inputNumber('5')}>5</Button>
          <Button onClick={() => inputNumber('6')}>6</Button>
          <Button onClick={() => inputOperation('*')}>*</Button>

          <Button onClick={() => inputNumber('1')}>1</Button>
          <Button onClick={() => inputNumber('2')}>2</Button>
          <Button onClick={() => inputNumber('3')}>3</Button>
          <Button onClick={() => inputOperation('-')}>-</Button>

          <Button onClick={() => inputNumber('0')}>0</Button>
          <Button onClick={clear} className="bg-muted text-muted-foreground hover:bg-muted/80">C</Button>
          <Button onClick={calculateResult}>=</Button>
          <Button onClick={() => inputOperation('+')}>+</Button>
        </div>
      </div>
    </div>
  );
}
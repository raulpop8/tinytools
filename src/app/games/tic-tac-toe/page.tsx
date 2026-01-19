"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = calculateWinner(board);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  const isGameOver = winner || board.every(Boolean);

  const handleClick = (index: number) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-surface rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Tic-Tac-Toe</h1>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => {
        const isWinningCell = winningLine.includes(index);

        return (
            <button
            key={index}
            className={`
                w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-lg
                border border-yellow-400 transition
                ${
                isWinningCell
                    ? "bg-yellow-200/30 dark:bg-yellow-300/20 text-black dark:text-foreground"
                    : cell
                    ? "bg-[var(--primary)] text-primary-foreground"
                    : "bg-gray-100 dark:bg-gray-800 text-foreground"
                }
                ${
                !isGameOver && !cell
                    ? "hover:bg-yellow-300/40 dark:hover:bg-yellow-300/30"
                    : ""
                }
            `}
            onClick={() => handleClick(index)}
            >
            {cell}
            </button>
        );
        })}


      </div>

      <p className="mt-6 text-center font-medium text-lg">
        {winner
          ? `Winner: ${winner}`
          : board.every(Boolean)
          ? "Draw!"
          : `Next player: ${xIsNext ? "X" : "O"}`}
      </p>

      <div className="mt-6 text-center">
        <button
          onClick={resetGame}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow hover:shadow-md transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

// Helper: returns winner and winning line
function calculateWinner(board: (string | null)[]): { winner: string; line: number[] } | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }

  return null;
}

export default TicTacToe;

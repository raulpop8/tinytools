"use client";

import { useState } from 'react';

export default function TemporaryNotepad() {
  const [notes, setNotes] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Temporary Notepad</h1>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Start typing your notes here..."
          className="w-full h-96 p-4 bg-card border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
        />
      </div>
    </div>
  );
}
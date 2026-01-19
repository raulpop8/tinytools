"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <section className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Password Generator</h1>

      <div className="flex items-center gap-3">
        <Input
          type="number"
          min={4}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-24"
        />
        <span>characters</span>
      </div>

      <div className="flex items-center gap-3">
        <Input value={password} readOnly className="flex-1" />
        <Button onClick={generatePassword}>Generate</Button>
        <Button onClick={copyToClipboard}>Copy</Button>
      </div>

      <p className="text-foreground/70 text-sm">
        Use this tool to quickly generate strong passwords for your accounts.
      </p>
    </section>
  );
}
